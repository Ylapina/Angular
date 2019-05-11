import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../../../model/json-response';
import { PurchaseRequestService } from './../../../service/purchase-request.service';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { PurchaseRequestLineItem} from 'src/app/model/Purchase-request-line-item.class';
import { PurchaseRequestLineItemService} from 'src/app/service/purchase-request-line-item.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-purchase-request-approve',
  templateUrl: './purchase-request-approve.component.html',
  styleUrls: ['./purchase-request-approve.component.css']
})
export class PurchaseRequestApproveComponent implements OnInit {
  title: string = 'PurchaseRequest Approve/Reject';
  jr=JsonResponse;
  pr: PurchaseRequest;
  prlis:PurchaseRequestLineItem [];
  constructor(private purchaseRequestSvc: PurchaseRequestService,
    private prliSvc: PurchaseRequestLineItemService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log("0");
      this.route.params.subscribe(params => {
        this.purchaseRequestSvc.get(params.id).subscribe(prjr => {
          this.pr = prjr.data as PurchaseRequest;
          console.log("1",this.pr);
          this.prliSvc.listByPurchaseRequest(this.pr.id.toString()).subscribe(prlijr => {
            this.prlis = prlijr.data as PurchaseRequestLineItem[];
            console.log("prlis:  ",this.prlis);
          });
        });
      });
    }
    
  
    approve() {
      this.purchaseRequestSvc.approve(this.pr).subscribe(jr => {
        this.pr = jr.data as PurchaseRequest;
        this.router.navigateByUrl('/purchase-request/list');
      });
    }
  
    reject() {
      console.log('reject component');
      this.purchaseRequestSvc.reject(this.pr).subscribe(jr => {
        console.log('reject service');
        this.pr = jr.data as PurchaseRequest;
        this.router.navigateByUrl('/purchase-request/list');
      })
    }
  }

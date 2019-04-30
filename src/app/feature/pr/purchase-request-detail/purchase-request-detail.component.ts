import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchase-request.service';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { JsonResponse } from '../../../model/json-response';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {
  title: string = 'Purchase Request Detail';
  jr: JsonResponse;
  purchaserequest: PurchaseRequest;

  constructor(private prSvc: PurchaseRequestService,
     private router: Router, 
     private route: ActivatedRoute) { }

     ngOnInit() {
      this.route.params
        .subscribe(parms => {
          const id = parms.id;
          this.getPurchaseRequestById(id);
        });
    }
  
    getPurchaseRequestById(id: string) {
      this.prSvc.get(id)
        .subscribe(jresp => {
          this.jr = jresp;
          this.purchaserequest = this.jr.data as PurchaseRequest;
        })
    }
  
    remove(): void {
      this.prSvc.delete(this.purchaserequest.id)
        .subscribe(res => {
          this.router.navigateByUrl('/purchaserequest/list');
        });
    }
  
  }

import { Component, OnInit } from '@angular/core';
import {PurchaseRequest} from 'src/app/model/Purchase-request.class';
import {PurchaseRequestService} from 'src/app/service/purchase-request.service';
import {JsonResponse} from 'src/app/model/json-response';
import { Router, ActivatedRoute } from '@angular/router';
import {PurchaseRequestLineItemService} from 'src/app/service/purchase-request-line-item.service';
import { PurchaseRequestLineItem} from 'src/app/model/Purchase-request-line-item.class';
@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  jr: JsonResponse;
  title = 'PurchaseRequest Review';
  purchaserequests: PurchaseRequest[];
  
  

  constructor(private purchaseRequestSvc: PurchaseRequestService,
    private prliSvc: PurchaseRequestLineItemService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.purchaseRequestSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.purchaserequests = this.jr.data as PurchaseRequest[];
      console.log(this.purchaserequests);
    });
}
}

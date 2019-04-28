 import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { PurchaseRequest} from 'src/app/model/Purchase-request.class';


@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})

export class PurchaseRequestCreateComponent implements OnInit {
  title: string = 'Purchase Request Create';
  resp: any;
  purchaseRequest: PurchaseRequest = new PurchaseRequest();
  
  
  constructor(private prSvc: PurchaseRequestService,
  						private router: Router) { }
              
              

  ngOnInit() {
  	
  }

  create(){
    this.prSvc.create(this.purchaseRequest)
    .subscribe(resp=> {
      this.resp = resp;
      this.router.navigate(['/purchase-request/list']);
    });
  }

  edit() {
    this.prSvc.create(this.purchaseRequest).subscribe(jr => {
      this.router.navigate(['/purchase-request/list']);
      this.purchaseRequest = jr.data as PurchaseRequest;
      console.log(this.purchaseRequest);
    });
  }
  

  
}

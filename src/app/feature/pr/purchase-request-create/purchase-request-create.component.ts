import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { PurchaseRequest} from 'src/app/model/Purchase-request.class';
import { User} from 'src/app/model/user.class';
import {UserService} from 'src/app/service/user.service';
import { JsonResponse } from '../../../model/json-response';
@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})

export class PurchaseRequestCreateComponent implements OnInit {
  title: string = 'Purchase Request Create';
  resp: any;
  purchaseRequest: PurchaseRequest = new PurchaseRequest();
  users: User[];
  jr: JsonResponse;
  constructor(private prSvc: PurchaseRequestService,
              private userSvc: UserService,
  						private router: Router) { }
              
              

  ngOnInit() {
  	this.userSvc.list()
      .subscribe(jresp => {
        this.jr = jresp as JsonResponse;
        this.users = this.jr.data as User[];
      });
  }

  create() {
    this.prSvc.create(this.purchaseRequest).subscribe(jr => {
    this.purchaseRequest = jr.data as PurchaseRequest;
    this.router.navigateByUrl('/purchase-request/list');
    });
  }
  }
  

  


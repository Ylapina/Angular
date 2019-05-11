import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { PurchaseRequest} from 'src/app/model/Purchase-request.class';
import { User} from 'src/app/model/user.class';
import {UserService} from 'src/app/service/user.service';
import { JsonResponse } from '../../../model/json-response';
import { SystemService } from 'src/app/service/system.service';
@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})

export class PurchaseRequestCreateComponent implements OnInit {
  title = 'Purchase Request Create';
  user: User;
  pr: PurchaseRequest;

  constructor(
    private router: Router,
    private sysSvc: SystemService,
    private prSvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.user = this.sysSvc.data.user.instance;
    this.pr = new PurchaseRequest(0, this.user, '', '', '', '',0, new Date(),'');
    
  }

  create() {
    this.prSvc.create(this.pr).subscribe(jr => {
      this.pr = jr.data as PurchaseRequest;
      this.router.navigateByUrl('/purchase-request/list');
    });
  }
}
  

  


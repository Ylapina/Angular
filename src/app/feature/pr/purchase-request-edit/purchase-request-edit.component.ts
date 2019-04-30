import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from 'src/app/service/purchase-request.service';
import { JsonResponse } from '../../../model/json-response';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {
  title: string = 'Purchase Request Edit';
  id: string;
  jr: JsonResponse;
  purchaserequest: PurchaseRequest;
  users: User[];

constructor(private prSvc: PurchaseRequestService,
              private userSvc: UserService,
              private router: Router, 
              private route: ActivatedRoute) { }

              ngOnInit() {
                this.route.params.subscribe(parms => this.id = parms['id']);
            console.log('purchaserequest edit ngOnInit', 'id = ' + this.id);
               this.userSvc.list()
                  .subscribe(jresp => {
                    this.jr = jresp as JsonResponse;
                    this.users = this.jr.data as User[];
                  });
                this.prSvc.get(this.id)
                  .subscribe(jresp => {
                    this.jr = jresp;
                    console.log('1');
                    this.purchaserequest = this.jr.data as PurchaseRequest;
                    console.log('purchaserequest', this.purchaserequest);
                  });
              }
            
              edit() {
                console.log('purchaserequest edit component edit method...');
                this.prSvc.edit(this.purchaserequest)
                  .subscribe(resp => {
                    this.jr = resp;
                    this.router.navigate(['/purchaserequest/list']);
                  });
              }
            
              compareFn(v1: number, v2: number): boolean {
                return v1 === v2;
              }
            
            }

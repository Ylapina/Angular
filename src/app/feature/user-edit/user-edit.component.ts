import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {User} from '../../../app/model/user.class';
import {UserService} from '../../../app/service/user.service';
import { JsonResponse } from 'src/app/model/json-response';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string='User Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  user: User;

  constructor(private userSvc:UserService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      console.log("in user edit component...")
      this.route.params.subscribe(parms => this.id = parms['id']);
      console.log("user edit ngOnInit", "id = "+this.id);
      this.userSvc.get(this.id)
        .subscribe(jrresp => {
          this.jr = jrresp;
          console.log("1");
          this.user = this.jr.data as User; 
          console.log("user",this.user);
        });
    }
  
    edit () {
      console.log("user edit component");
      this.userSvc.edit(this.user)
        .subscribe(resp => {
          this.resp = resp;
          this.router.navigate(['/user/list']);
      });
    }
  }

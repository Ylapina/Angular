import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response';
import { VendorService } from './../../../service/vendor.service';
import { Vendor } from './../../../model/vendor.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  title: string = 'Vendor Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  vendor: Vendor;

  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("vendor edit ngOnInit", "id = " + this.id);
    this.vendorSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        console.log("1");
        this.vendor = this.jr.data as Vendor; 
        console.log("vendor",this.vendor);
      });
  }

  edit () {
    console.log("vendor edit component");
    this.vendorSvc.edit(this.vendor)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/vendor/list']);
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Product } from 'src/app/model/product.class';
import { JsonResponse } from 'src/app/model/json-response';
import {Vendor} from 'src/app/model/vendor.class'
import { Router } from '@angular/router';




@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  title: string = 'Product Create';

  jr: JsonResponse;

  product: Product = new Product();	
  vendor: Vendor = new Vendor(0,'','Loading...','','','','','','',true);
  // add a bogus 'loading...' vendor to display in list until loaded
  vendors: Vendor[]= [this.vendor];

  constructor(private productSvc: ProductService,
              private vendorSvc: VendorService,
              private router: Router) { }

  ngOnInit() {
    this.vendorSvc.list()
      .subscribe(jresp => {
        this.jr = jresp as JsonResponse;
        this.vendors = this.jr.data as Vendor[];
      });
  }

  create () {
    console.log("product create component create method...",this.product);
    this.productSvc.create(this.product)
      .subscribe(jresp => {
        this.jr = jresp;
        this.router.navigate(['/product/list']);
    });
  }
}
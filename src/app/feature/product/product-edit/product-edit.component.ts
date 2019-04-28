import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response';
import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product.class';
import { Component, OnInit } from '@angular/core';
import {VendorService} from 'src/app/service/vendor.service';
import  {Vendor} from 'src/app/model/vendor.class';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title: string = 'Product Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  product: Product;
  vendors: Vendor[];

  constructor(private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.vendorSvc.list().subscribe(jresp =>{
      this.jr=jresp;
      this.vendors=this.jr.data as Vendor[];
      this.productSvc.get(this.id).subscribe(jresp =>{
        this.jr=jresp;
        this.product=this.jr.data as Product;
      })
    })
}

  change () {
    console.log("product edit component");
    this.productSvc.edit(this.product)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
    });
  }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

}

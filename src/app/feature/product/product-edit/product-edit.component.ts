import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response';
import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product.class';
import { Component, OnInit } from '@angular/core';

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

  constructor(private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("product edit ngOnInit", "id = " + this.id);
    this.productSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        console.log("1");
        this.product = this.jr.data as Product; 
        console.log("product",this.product);
      });
  }

  edit () {
    console.log("product edit component");
    this.productSvc.edit(this.product)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
    });
  }

}

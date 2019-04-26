import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response';
import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title: string = "Product Detail";
  jr: JsonResponse;
  product: Product;

  constructor(private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getProductById(id);
      });
  }

  getProductById(id: string) {
    this.productSvc.get(id)
      .subscribe(jsresp => {
        this.jr = jsresp;
        this.product = this.jr.data as Product;
      });
  }
  
  remove(): void {
    this.productSvc.delete(this.product.id)
      .subscribe(res => {
        this.router.navigateByUrl("/product/list");
      });
  }

}

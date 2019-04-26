
import { Product } from './../../../model/product.class';
import { ProductService } from './../../../service/product.service';
import { JsonResponse } from './../../../model/json-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  jr: JsonResponse;
  products: Product[];
  title: string = "Product List";
  sortCriteria: string = "name";
  sortOrder: string = "asc"; // ascending -- or can use descending

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    this.productSvc.list().subscribe(jresp => {
        this.jr = jresp;
        this.products = this.jr.data as Product[];
        console.log(this.products);
      });
  }

  sortBy(column: string): void {
    if(this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }

}
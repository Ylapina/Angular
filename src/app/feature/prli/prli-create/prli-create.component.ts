import { Component, OnInit } from '@angular/core';
import { JsonResponse } from "../../../model/json-response";
import { ActivatedRoute, Router } from "@angular/router";
import { PurchaseRequestLineItem } from "src/app/model/purchase-request-line-item.class";
import { Product } from "../../../model/product.class";
import { ProductService } from "../../../service/product.service";
import { PurchaseRequestService } from "../../../service/purchase-request.service";
import { PurchaseRequestLineItemService } from "../../../service/purchase-request-line-item.service";
import { PurchaseRequest } from "src/app/model/purchase-request.class";

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {

  title = 'Line Item Create';
  product: Product;
  products: Product[];
  pr: PurchaseRequest;
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, this.pr, this.product, 0);

  constructor(private route: ActivatedRoute, private router: Router, private prSvc: PurchaseRequestService,
              private prliSvc: PurchaseRequestLineItemService, private prodSvc: ProductService) { }

  ngOnInit() {
    console.log("0");
    this.prodSvc.list().subscribe(jr => {
      this.products = jr.data as Product[];
    });
    this.route.params.subscribe(params => {
      this.prSvc.get(params.id).subscribe(jr => {
        this.pr = jr.data as PurchaseRequest;
        console.log("1"+this.pr);
        this.prli.purchaseRequest = this.pr;
        console.log("prlis: "+this.pr);
      });
    });
  }

  create() {
    this.prliSvc.create(this.prli).subscribe(jr => {
      this.prli = jr.data as PurchaseRequestLineItem;
      this.route.params.subscribe(params => {
        this.router.navigateByUrl('prli/lines/' + params.id);
      });
    });
  }
}


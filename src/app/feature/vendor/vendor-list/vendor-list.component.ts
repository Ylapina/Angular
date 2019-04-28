import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../../model/vendor.class';
import { VendorService } from '../../../service/vendor.service';
import { JsonResponse } from './../../../model/json-response';
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  jr:JsonResponse;
  vendors: Vendor[];
  title:string = 'Vendor List';
  sortCriteria: string="VendorName";
  sortOrder:string="asc";

  constructor(private vndrSvc: VendorService) { }

  ngOnInit() {
    this.vndrSvc.list().subscribe(Jresp=>
      {
      this.jr=Jresp;
      this.vendors=this.jr.data as Vendor[];
      console.log(this.vendors);
      }
      );
      

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
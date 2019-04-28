import { Vendor } from "./vendor.class";

export class Product{
id:number;
vendor:Vendor;
partNumber:string;
name:string;
price:number;
unit:string;
photoPass:string;





constructor (id:number=0,vendor:Vendor=null,partNumber:string='',name:string='',
  price:number=0,unit:string='',photoPass:string='')
  {
    this.id=id;
    this.vendor=vendor;
    this.partNumber=partNumber;
    this.name=name;
    this.price=price;
    this.unit=unit;
    this.photoPass=photoPass;
   
}

about():String{
  return `Product: id=${this.id},vendor=${this.vendor},
   partNumber=${this.partNumber},name=${this.name},price=${this.price},
   unit=${this.unit},photoPass=${this.photoPass}`;
 
}



}

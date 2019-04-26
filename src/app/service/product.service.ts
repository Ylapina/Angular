import { Injectable } from '@angular/core';
import {Product} from '../model/product.class';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { JsonResponse } from '../model/json-response';

const url: string = 'http://localhost:8080/products/';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list():Observable <JsonResponse>{
    return this.http.get(url) as Observable<JsonResponse>;
  }
  create (user:Product): Observable <any> {
    console.log("productsvc.create...");
    return this.http.post(url, Product) as Observable <any>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("productsvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(user: Product): Observable<any> {
		return this.http.put(url, Product) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http:HttpClient) { }
}

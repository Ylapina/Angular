import { PurchaseRequest } from './../model/purchase-request.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from './../model/json-response';
import { Injectable } from '@angular/core';

const url: string = 'http://localhost:8080/purchase-requests/';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(purchaseRequest: PurchaseRequest): Observable<any> {
    console.log("purchaseRequestsvc.create...");
    return this.http.post(url, purchaseRequest) as Observable<any>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("purchaseRequestsvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(purchaseRequest: PurchaseRequest): Observable<any> {
    return this.http.put(url, purchaseRequest) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}

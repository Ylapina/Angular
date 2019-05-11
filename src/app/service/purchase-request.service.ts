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

  

    list(): Observable<JsonResponse> {
      return this.http.get(url) as Observable<JsonResponse>;
    }
  
    listForReview(id: string): Observable<JsonResponse> {
      return this.http.get(url + 'list-review/' + id) as Observable<JsonResponse>;
    }
  
    create(pr: PurchaseRequest): Observable<JsonResponse> {
      return this.http.post(url + 'submit-new', pr) as Observable<JsonResponse>;
    }
  
    submitReview(pr: PurchaseRequest): Observable<JsonResponse> {
      return this.http.post(url + 'submit-review', pr) as Observable<JsonResponse>;
    }
  
    approve(pr: PurchaseRequest): Observable<JsonResponse> {
      return this.http.post(url + 'approve', pr) as Observable<JsonResponse>;
    }
  
    reject(pr: PurchaseRequest): Observable<JsonResponse> {
      return this.http.post(url + 'reject', pr) as Observable<JsonResponse>;
    }
  
    edit(pr: PurchaseRequest): Observable<JsonResponse> {
      return this.http.put(url, pr) as Observable<JsonResponse>;
    }
  
    get(id: string): Observable<JsonResponse> {
      return this.http.get(url + id) as Observable<JsonResponse>;
    }
  
    delete(id: number): Observable<JsonResponse> {
      return this.http.delete(url + id) as Observable<JsonResponse>;
    }
  
    constructor(private http: HttpClient) { }
  }
  

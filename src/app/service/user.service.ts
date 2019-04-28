import { Injectable } from '@angular/core';
import {User} from '../model/user.class';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { JsonResponse } from '../model/json-response';

const url: string = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list():Observable <JsonResponse>{
    return this.http.get(url) as Observable<JsonResponse>;
  }
  login(user:User):Observable<JsonResponse>{
    return this.http.post(url+ "authenticate",user) as Observable <JsonResponse>;
  }

  create (user:User): Observable <any> {
    console.log("usersvc.create...");
    return this.http.post(url, user) as Observable <any>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("usersvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(user: User): Observable<any> {
		return this.http.put(url, user) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http:HttpClient) { }
}




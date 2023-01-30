import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from "../model/user";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ResolverResolver implements Resolve<boolean> {
  constructor(private readonly http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.params['id'];
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}

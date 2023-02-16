import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { map, Observable } from 'rxjs';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardPagesService implements CanActivate {

  constructor(private routing : Router , private AuthService : AuthService ) { }

  canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot ) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem('DataUser')){
      return false
    }
    return true
  }
}

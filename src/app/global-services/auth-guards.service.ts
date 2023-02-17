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
export class AuthGuardService implements CanActivate {

  constructor(private routing : Router , private AuthService : AuthService ) { }

  canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot ) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.AuthService.EmitsDataForUser.pipe(
      map(
        user =>{
          const Auth = !!user;
          if(Auth){
            return true;
          }
          return this.routing.createUrlTree(['/auth']);
        }
      )
    )
  }
}

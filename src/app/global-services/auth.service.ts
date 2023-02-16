import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login , ResponseLogin } from '@modal/login';
import {environment} from '@environment/environments';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './user-modal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  EmitsDataForUser = new BehaviorSubject<null | User>(null);
  TimerExpirationToken !: any;
  private http = inject(HttpClient);
  constructor(private route : Router) {}

  login(authUser : Login){
    return this.http.post<ResponseLogin>(`${environment.apiUrl}/auth/login` , authUser).pipe(
      tap((response) =>{
        this.autoLogout(+response.expires_in * 1000);
        const expireSessionUser = new Date(new Date().getTime() + +response.expires_in * 1000);
        const user = new User(
          response.user?.name,
          response.user?.email,
          response.user?.created_at,
          response.user?.updated_at,
          response.access_token,
          response.token_type,
          expireSessionUser,
        );
        this.EmitsDataForUser.next(user);
        localStorage.setItem('DataUser' , JSON.stringify(user));
      })
    );
  }

  logout(){
    this.EmitsDataForUser.next(null);
    this.route.navigate(['/auth']);
    localStorage.removeItem('DataUser');

    if(this.TimerExpirationToken){
      clearTimeout(this.TimerExpirationToken);
    }
    this.TimerExpirationToken = null;
  }

  autoLogin(){
    // Refactoring Code
    let DataUser : any =  localStorage.getItem('DataUser');
    let getDataUser = JSON.parse(DataUser);

    const CurrentUser = new User(
        getDataUser.user?.name,
        getDataUser.user?.email,
        getDataUser.user?.created_at,
        getDataUser.user?.updated_at,
        getDataUser.access_token,
        getDataUser.token_type,
        new Date(getDataUser._expires_in)
    );

    if(CurrentUser.token){
      let expiationTime = new Date(getDataUser._expires_in).getTime() - new Date().getTime();
      this.autoLogout(expiationTime);
      this.EmitsDataForUser.next(CurrentUser);
    }
  }

  autoLogout(expiationTimeToken : number){
    console.log(expiationTimeToken);
  this.TimerExpirationToken = setTimeout(()=>{
      this.logout();
    },expiationTimeToken)
  }
}

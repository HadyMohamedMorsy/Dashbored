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
  private http = inject(HttpClient);
  login(authUser : Login){
    return this.http.post<ResponseLogin>(`${environment.apiUrl}/auth/login` , authUser).pipe(
      tap((response) =>{
        const expireSessionUser = new Date(new Date().getTime() + +response.expires_in * 1000);
        const user : any = new User(
          response.user?.name,
          response.user?.email,
          response.user?.created_at,
          response.user?.updated_at,
          response.access_token,
          response.token_type,
          expireSessionUser,
        );
        this.EmitsDataForUser.next(user);
      })
    );
  }
}

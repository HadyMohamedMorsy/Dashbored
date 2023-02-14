import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login , ResponseLogin } from '@modal/login';
import {environment} from '@environment/environments';
import { BehaviorSubject, tap } from 'rxjs';
import { user } from './user-modal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject(null);
  private http = inject(HttpClient);

  login(authUser : Login){
    return this.http.post<ResponseLogin>(`${environment.apiUrl}/auth/login` , authUser).pipe(
      tap((response) =>{
        console.log(response);
      })
    );
  }
}

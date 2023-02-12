import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login , ResponseLogin } from '@modal/login';
import {environment} from '@environment/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  login(authUser : Login){
    return this.http.post<ResponseLogin>(`${environment.apiUrl}/auth/login` , authUser);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environment/environments';
import { BehaviorSubject, shareReplay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http =  inject(HttpClient);
  currentPage = new BehaviorSubject(1);

  getUsers() {
    return this.currentPage.pipe(switchMap(page =>{
      return this.http.get<any>(`${environment.apiUrl}/users?page=${page}`);
    }),shareReplay(1));
  }

}

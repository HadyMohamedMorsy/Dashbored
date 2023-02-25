import { BehaviorSubject, shareReplay, switchMap } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '@environment/environments';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private http =  inject(HttpClient);
  currentPage = new BehaviorSubject(1);
  getBlogs() {
    return this.currentPage.pipe(switchMap(page =>{
      return this.http.get<any>(`${environment.apiUrl}/blogs?page=${page}`);
    }),shareReplay(1));
  }
}

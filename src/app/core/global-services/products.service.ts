import { HttpClient } from '@angular/common/http';
import { Injectable , inject } from '@angular/core';
import { environment } from '@environment/environments';
import { BehaviorSubject, shareReplay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http =  inject(HttpClient);
  currentPage = new BehaviorSubject(1);
  getProducts() {
    return this.currentPage.pipe(switchMap(page =>{
      return this.http.get<any>(`${environment.apiUrl}/products?page=${page}`);
    }),shareReplay(1));
  }

}

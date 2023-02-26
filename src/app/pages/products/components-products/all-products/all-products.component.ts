import { ChangeDetectionStrategy ,Component , inject } from '@angular/core';
import {ProductsService} from '@services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  private products =  inject(ProductsService);
  products$ : any;

  ngOnInit(): void {
    this.products$ = this.products.getProducts();
  }

  changePagination(event : number){
    let filterEvent = Math.trunc(event) + 1;
    this.products.currentPage.next(filterEvent)
  }
}

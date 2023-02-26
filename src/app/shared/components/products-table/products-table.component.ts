import { Observable, Subscription, tap } from 'rxjs';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, inject } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent {
  @Input() DateBind !: Observable<any>;
  @Output() EventPagination  = new EventEmitter<number>()
  private cdRef = inject(ChangeDetectorRef);
  totalRecords !: number;
  loading = false;
  products : any;
  keys : any;
  filterKey = ['Images','Size','Color','DiscountPrice','Total', 'FeatureImage', 'Slug','SKU', 'AccessibilityPurchase','Discount','OfferTime','Updated_By','Deleted_Date'];
  subscribe !: Subscription;
ngOnInit(): void {
  this.loading = true;
  this.subscribe = this.DateBind
  .pipe(
    tap(res =>{
      let getKeys = Object.keys(res.result.data[0]);
      this.filterKey.forEach((key : any)=>{
        getKeys = getKeys.filter((item) => item != key);
      })
      this.keys = getKeys;
    })
  )
  .subscribe((blog : any)=>{
    this.loading = false;
    this.products = blog.result.data;
    this.totalRecords = blog.result.meta.total;
    this.cdRef.detectChanges();
  });
  }

  loadBlogs(event : LazyLoadEvent){
    this.loading = true;
    let currentPage = event.first ?  event.first : 0;
    this.EventPagination.emit(currentPage  / 10);
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}

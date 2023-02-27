import { Observable, tap, Subscription } from 'rxjs';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, inject } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-blogs-table',
  templateUrl: './blogs-table.component.html',
  styleUrls: ['./blogs-table.component.scss']
})
export class BlogsTableComponent {
  @Input() DateBind !: Observable<any>;
  @Output() EventPagination  = new EventEmitter<number>()
  private cdRef = inject(ChangeDetectorRef);
  totalRecords !: number;
  loading = false;
  Blogs : any;
  keys : any;
  filterKey = ['FeatureImage','Deleted_Date'];
  subscribe !: Subscription;
  label = "Add Blog"

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
    this.Blogs = blog.result.data;
    this.totalRecords = blog.result.meta.total;
    this.cdRef.detectChanges();
  });
}


  loadBlogs(event : LazyLoadEvent){
    this.loading = true;
    let currentPage = event.first!;
    this.EventPagination.emit(currentPage  / 10);
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}

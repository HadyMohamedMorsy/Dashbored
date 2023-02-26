import { Observable, Subscription, tap } from 'rxjs';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, inject } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input() DateBind !: Observable<any>;
  @Output() EventPagination  = new EventEmitter<number>()
  private cdRef = inject(ChangeDetectorRef);
  totalRecords !: number;
  loading = false;
  users : any;
  keys : any;
  filterKey = ['Deleted_Date'];
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
    this.users = blog.result.data;
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

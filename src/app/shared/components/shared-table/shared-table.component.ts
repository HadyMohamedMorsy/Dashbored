import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, inject } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent {
  @Input() DateBind !: Observable<any>;
  @Output() EventPagination  = new EventEmitter<number>()
  private cdRef = inject(ChangeDetectorRef);
  totalRecords !: number;
  loading = false;
  Blogs : any;

ngOnInit(): void {
  this.loading = true;
  this.DateBind.subscribe((blog : any)=>{
    this.loading = false;
    this.Blogs = blog.result.data;
    this.totalRecords = blog.result.meta.total;
    this.cdRef.detectChanges();
  });
}

  loadBlogs(event : LazyLoadEvent){
    let currentPage = event.first ?  event.first : 0;
    this.EventPagination.emit(currentPage  / 10);
  }

}

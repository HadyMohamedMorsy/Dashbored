import { Observable, tap, Subscription } from 'rxjs';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, inject, TemplateRef, ContentChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableService } from 'primeng/table';

export function tableFactory(tableComponent: TableComponent) {
  return tableComponent.primingTable;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    TableService,
    {
      provide: Table,
      useFactory: tableFactory,
      deps: [TableComponent]
    }
  ]
})
export class TableComponent {
  @Input() DateBind !: Observable<any>;
  @Output() EventPagination  = new EventEmitter<number>()
  @ContentChild('body') body!: TemplateRef<any>;
  @Input() filterKey !: string[];
  @Input() label !:string;

  private cdRef = inject(ChangeDetectorRef);
  totalRecords !: number;
  loading = false;
  dataSource : any;
  keys : any;
  subscribe !: Subscription;
  // label = "Add Blog"
  primingTable: any;

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
  .subscribe((data : any)=>{
    this.loading = false;
    this.dataSource = data.result.data;
    this.totalRecords = data.result.meta.total;
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

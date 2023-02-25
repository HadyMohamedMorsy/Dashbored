import { Component, Input, SimpleChanges , OnChanges } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent implements OnChanges {
  @Input() customers : any;
  loading = false;
  sourceData : any;
  totalRecords = 200;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // if(changes['customers'].currentValue){
    //   this.sourceData = changes['customers'].currentValue;
    // }
  }

}

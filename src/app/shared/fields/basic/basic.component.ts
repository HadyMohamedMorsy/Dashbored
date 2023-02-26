import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-basic',
  template: `
  <div class="p-fluid grid">
    <span class="p-float-label">
        <input type="text" pInputText [formControl]="formControl" [formlyAttributes]="field">
        <label for="inputtext">{{field.props.label}}</label>
    </span>
  </div>
  `,
  styleUrls: ['./basic.scss']
})
export class BasicComponent  extends FieldType<FieldTypeConfig>{
}

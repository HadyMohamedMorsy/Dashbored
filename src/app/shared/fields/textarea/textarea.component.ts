import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-textarea',
  template: `
      <div class="p-fluid">
        <span class="p-float-label">
            <textarea inputId="textarea" rows="3" style="resize: none;" cols="30"  pInputTextarea [formControl]="formControl" [formlyAttributes]="field"></textarea>
            <label for="textarea">{{ field.props.label }}</label>
        </span>
      </div>`,
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends FieldType<FieldTypeConfig> {}

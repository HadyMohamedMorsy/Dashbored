import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-shared-add-post-type',
  templateUrl: './shared-add-post-type.component.html',
  styleUrls: ['./shared-add-post-type.component.scss']
})
export class SharedAddPostTypeComponent {
  @Input() label !: string;
  form = new FormGroup({});
  display: boolean = false;
  model = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'grid align-items-center',
      fieldGroup : [
        {
        key: 'title',
        type: 'basicInput',
        className : 'col-6',
        props: {
          required: true,
          type: 'text',
          label: 'Title',
          className : 'w-full'
        },
      },
        {
        key: 'Details',
        type: 'basicInput',
        className : 'col-6',
        props: {
          required: true,
          type: 'text',
          label: 'Details',
        },
      }
    ]
    }
  ];

  showDialog() {
    this.display = true;
  }

  onSubmit(model : any) {
    console.log(model);
  }
}

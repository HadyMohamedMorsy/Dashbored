import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
  selector: 'app-shared-add-post-type',
  templateUrl: './shared-add-post-type.component.html',
  styleUrls: ['./shared-add-post-type.component.scss'],
})
export class SharedAddPostTypeComponent {
  @Input() label!: string;
  form = new FormGroup({});
  display: boolean = false;
  BlogModel = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'grid align-items-center',
      fieldGroup: [
        {
          key: 'title',
          type: 'basicInput',
          className: 'col',
          props: {
            required: true,
            label: 'Title',
          },
        },
        {
          key: 'Details',
          type: 'basicInput',
          className: 'col',
          props: {
            required: true,
            label: 'Details',
          },
          expressions: {
            'props.disabled': '!model.title',
          },
        },
      ],
    },
  ];

  showDialog() {
    this.display = true;
  }

  onSubmit(BlogModel: any) {
    console.log(this.fields);
  }
}

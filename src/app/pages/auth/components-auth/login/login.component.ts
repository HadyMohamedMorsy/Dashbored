import { Component, inject } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { Login } from '@modal/login';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private auth  = inject(AuthService);
  form = new FormGroup({});
  model= {
    email : '',
    password : ''
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'password',
      type: 'input',
      props: {
        type : 'password',
        label: 'Enter your Password',
        placeholder: 'Enter your Password',
        required: true,
      }
    }
  ];

  onSubmit(model : Login) {
    this.auth.login(model).subscribe((v)=>{
        console.log(v);
    })

  }
}

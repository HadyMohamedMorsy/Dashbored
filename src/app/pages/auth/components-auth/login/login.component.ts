import { Component, inject } from '@angular/core';
import { Login } from '@modal/login';
import { AuthService } from '@services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {

  constructor( private MessageService : MessageService) {}

  private auth  = inject(AuthService);
  private LoginBuilder = inject(FormBuilder);
  contactLoginForm !: FormGroup;

  ngOnInit(): void {
    this.contactLoginForm = this.LoginBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit() {
    
    if(this.contactLoginForm.controls['email'].status == 'INVALID' || this.contactLoginForm.controls['email'].errors != null || this.contactLoginForm.controls['password'].status == 'INVALID'){

      this.MessageService.add({ severity: 'error', summary: 'please check your Email Or Password', detail: 'Validation failed'});

    }else{
      this.auth.login(this.contactLoginForm.value)
      .subscribe({
        next: (v) => {
          console.log(v)
        },
        error: (e) => {
          this.MessageService.add({ severity: 'error', summary: e, detail: 'Validation failed' });
        }
      })
    }
  }
}

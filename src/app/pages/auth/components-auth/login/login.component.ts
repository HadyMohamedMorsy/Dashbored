import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { Login } from '@modal/login';
import { AuthService } from '@services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {

  private Router = inject(Router);
  private MessageService = inject(MessageService);
  private loading = inject(NgxSpinnerService);
  private auth  = inject(AuthService);
  private LoginBuilder = inject(FormBuilder);
  contactLoginForm !: FormGroup;

  ngOnInit(): void {
    this.contactLoginForm = this.LoginBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })

    this.loading.show();
    setTimeout(() => {
      this.loading.hide();
    }, 1500);

  }

  onSubmit() {
    if(
    this.contactLoginForm.controls['email'].status == 'INVALID'
    || this.contactLoginForm.controls['email'].errors != null
    || this.contactLoginForm.controls['password'].status == 'INVALID'
    ){
      this.loading.show();
      setTimeout(() => {
        this.MessageService.add({ severity: 'error', summary: 'please check your Email Or Password', detail: 'Validation failed'});
        this.loading.hide();
      }, 1500);

    }else{
      this.loading.show();
      this.auth.login(this.contactLoginForm.value)
      .subscribe({
        next: () => {
          this.loading.hide();
          this.Router.navigate(['/']);
        },
        error: (e) => {
          this.loading.hide();
          this.MessageService.add({ severity: 'error', summary: e, detail: 'Validation failed' });
        }
      })
    }
  }
}

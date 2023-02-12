import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components-auth/login/login.component';
import { RegistrationComponent } from './components-auth/registration/registration.component';
import { ForgotPasswordComponent } from './components-auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components-auth/reset-password/reset-password.component';
import { VerificationPasswordComponent } from './components-auth/verification-password/verification-password.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerificationPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }

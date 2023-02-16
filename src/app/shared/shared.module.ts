import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule } from '@angular/forms';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    HttpClientModule,
    FormlyPrimeNGModule,
    LayoutModule,
    InputTextModule,
    ToastModule,
  ],
  exports : [
      FormlyModule
    , FormsModule
    , ReactiveFormsModule
    , HttpClientModule ,
      FormlyPrimeNGModule,
      InputTextModule,
      ButtonModule,
      ToastModule,
    ]
})
export class SharedModule { }
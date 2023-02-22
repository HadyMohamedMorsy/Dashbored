import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { NgxSpinnerModule } from "ngx-spinner";
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    HttpClientModule,
    FormlyPrimeNGModule,
    InputTextModule,
    ToastModule,
    NgxSpinnerModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    AvatarModule,
  ],
  exports: [
    FormlyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyPrimeNGModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    NgxSpinnerModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    AvatarModule,
  ],
})
export class SharedModule {}

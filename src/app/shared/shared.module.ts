import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutModule } from './layout/layout.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { NgxSpinnerModule } from "ngx-spinner";
import { MenubarModule } from 'primeng/menubar';
<<<<<<< HEAD
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { LayoutModule } from '@angular/cdk/layout';
=======
>>>>>>> main


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
<<<<<<< HEAD
    SidebarModule,
    PanelMenuModule,
    AvatarModule,
    SplitButtonModule,
    LayoutModule,
=======
>>>>>>> main
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
<<<<<<< HEAD
    SidebarModule,
    PanelMenuModule,
    AvatarModule,
    SplitButtonModule,
    LayoutModule,
=======
>>>>>>> main
  ],
})
export class SharedModule {}

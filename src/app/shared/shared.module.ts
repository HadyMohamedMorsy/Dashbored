import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SplitButtonModule } from 'primeng/splitbutton';
import { LayoutModule } from '@angular/cdk/layout';
import { TableModule} from 'primeng/table';
import { BlogsTableComponent } from './components/blogs-table/blogs-table.component';
import { UsersComponent } from './components/users-table/users.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { SharedAddPostTypeComponent } from './components/shared-add-post-type/shared-add-post-type.component';
import {DialogModule} from 'primeng/dialog';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BasicComponent } from './fields/basic/basic.component';
import { MultiselectingComponent } from './fields/multiselecting/multiselecting.component';

@NgModule({
  declarations: [
    BlogsTableComponent,
    UsersComponent,
    ProductsTableComponent,
    SharedAddPostTypeComponent,
    BasicComponent,
    MultiselectingComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormlyModule.forRoot({
      types: [
        { name: 'basicInput', component: BasicComponent },
      ],
    }),
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
    SplitButtonModule,
    LayoutModule,
    TableModule,
    DialogModule,
    AutoCompleteModule
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
    SplitButtonModule,
    LayoutModule,
    TableModule,
    BlogsTableComponent,
    UsersComponent,
    ProductsTableComponent,
    DialogModule,
    AutoCompleteModule
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { AllBlogsComponent } from './components-blogs/all-blogs/all-blogs.component';
import { AddNewBlogComponent } from './components-blogs/add-new-blog/add-new-blog.component';
import { CategoriesBlogsComponent } from './components-blogs/categories-blogs/categories-blogs.component';
import { TagsBlogsComponent } from './components-blogs/tags-blogs/tags-blogs.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AllBlogsComponent,
    AddNewBlogComponent,
    CategoriesBlogsComponent,
    TagsBlogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SharedModule
  ]
})
export class BlogsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { AllCommentsComponent } from './components-comments/all-comments/all-comments.component';


@NgModule({
  declarations: [
    AllCommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }

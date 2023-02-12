import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllUsersComponent } from './components-users/all-users/all-users.component';
import { AddNewUserComponent } from './components-users/add-new-user/add-new-user.component';
import { EditPermissionsUsersComponent } from './components-users/edit-permissions-users/edit-permissions-users.component';
import { ProfileUserComponent } from './components-users/profile-user/profile-user.component';


@NgModule({
  declarations: [
    AllUsersComponent,
    AddNewUserComponent,
    EditPermissionsUsersComponent,
    ProfileUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

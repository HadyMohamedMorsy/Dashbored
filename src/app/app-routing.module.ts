import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { UserComponent } from './component/user/user.component';
import { UserListComponent } from './component/user-list/user-list.component';
import {ResolverResolver} from './service/resolver.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'users',
    component: UserListComponent,
    data: { breadcrumb: 'Users' },
    children: [
      {
        path: ':id',
        component: UserComponent,
        data: { breadcrumb: (data: any) => `${data.user.name}` },
        resolve: { user: ResolverResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

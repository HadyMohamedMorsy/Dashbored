import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from '@authGuard/auth-guards.service';
import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'admin',
    pathMatch : 'full',
  },
  {
    path : 'admin',
    component : AdminLayoutComponent,
    canActivate : [AuthGuardService],
    children : [
      {
        path : '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        pathMatch : 'full'
      },
      {
        path : 'blogs',
        loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)
      }
    ],
  },
  {
    path : 'auth' ,
    component : AuthLayoutComponent,
    children : [
      {
        path : '' ,
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

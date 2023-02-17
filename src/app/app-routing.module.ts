import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from './shared/layout/auth-layout/auth-layout.component';
import {AuthGuardService} from '@authGuard/auth-guards.service';
import {LoginService} from '@authGuard/login-guard.service';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'admin',
    pathMatch : 'full',
  },
  {
    path : 'admin',
    canActivate : [AuthGuardService],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch : 'full'
  },
  {
    path : 'auth' ,
    component : AuthLayoutComponent,
    canActivate :[LoginService],
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

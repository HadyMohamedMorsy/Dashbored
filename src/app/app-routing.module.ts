import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from './shared/layout/auth-layout/auth-layout.component';
import {AuthGuardService} from '@authGuard/auth-guards.service';
import {AuthGuardPagesService} from '@authGuard/auth-guard-allPages.service';

const routes: Routes = [
  {
    path : '',
    canActivate : [AuthGuardService],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch : 'full'
  },
  {
    path : 'auth' ,
    canActivate : [AuthGuardPagesService],
    component : AuthLayoutComponent,
    children : [
      {
        path : '',
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from './shared/layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path : '',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch : 'full'
  },
  {
    path : 'auth' ,
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

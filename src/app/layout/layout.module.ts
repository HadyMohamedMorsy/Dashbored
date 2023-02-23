import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AdminLayoutComponent, AuthLayoutComponent],
  imports: [CommonModule , SharedModule],
  exports : [AdminLayoutComponent , AuthLayoutComponent]
})
export class SharedLayoutModule {}

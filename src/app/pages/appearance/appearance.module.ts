import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppearanceRoutingModule } from './appearance-routing.module';
import { MenusComponent } from './components-appearance/menus/menus.component';
import { WidgetsComponent } from './components-appearance/widgets/widgets.component';


@NgModule({
  declarations: [
    MenusComponent,
    WidgetsComponent
  ],
  imports: [
    CommonModule,
    AppearanceRoutingModule
  ]
})
export class AppearanceModule { }

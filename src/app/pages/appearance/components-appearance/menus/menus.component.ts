import { ChangeDetectionStrategy,Component } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MenusComponent {

}

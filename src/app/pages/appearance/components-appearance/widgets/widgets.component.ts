import { ChangeDetectionStrategy,Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class WidgetsComponent {

}

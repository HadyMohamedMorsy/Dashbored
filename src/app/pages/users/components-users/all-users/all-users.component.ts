import { ChangeDetectionStrategy ,Component } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AllUsersComponent {

}

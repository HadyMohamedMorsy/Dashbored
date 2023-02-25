import { ChangeDetectionStrategy,Component } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ProfileUserComponent {

}

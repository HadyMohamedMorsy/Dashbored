import { ChangeDetectionStrategy ,Component , inject } from '@angular/core';
import {UsersService} from '@services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AllUsersComponent {
  private users =  inject(UsersService);
  user$ : any;

  ngOnInit(): void {
    this.user$ = this.users.getUsers();
  }

  changePagination(event : number){
    let filterEvent = Math.trunc(event) + 1;
    this.users.currentPage.next(filterEvent)
  }
}

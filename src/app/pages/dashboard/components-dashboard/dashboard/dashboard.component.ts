import { Component , inject } from '@angular/core';
import { AuthGuardService } from '@services/auth-guards.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private auth  = inject(AuthService);
  ngOnInit(){
    this.auth.autoLogin();
  }
}

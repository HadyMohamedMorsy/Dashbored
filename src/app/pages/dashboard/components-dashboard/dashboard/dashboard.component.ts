
import { AuthService } from '@services/auth.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private auth = inject(AuthService);
  ngOnInit() {
    this.auth.autoLogin();
  }
}

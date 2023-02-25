
import { ChangeDetectionStrategy ,Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/global-services/auth.service';
import { MenuItem } from 'primeng/api';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';


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

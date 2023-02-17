import { Component, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentUrl = [];
  private auth  = inject(AuthService);
  ngOnInit(): void {
    this.auth.autoLogin();
  }
}

import { ChangeDetectionStrategy,Component, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/core/global-services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  parentUrl = [];
  private auth  = inject(AuthService);
  ngOnInit(): void {
    this.auth.autoLogin();
  }
}

import { ChangeDetectionStrategy ,Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/global-services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  private auth = inject(AuthService);
  display = true;
  items!: MenuItem[];

  ngOnInit() {
    this.auth.autoLogin();

    this.items = [
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }
}

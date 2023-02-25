import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, inject} from '@angular/core';
import { AuthService } from 'src/app/core/global-services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  private auth = inject(AuthService);
  private breakpointObserver = inject(BreakpointObserver);
  display = true;
  navbar!: MenuItem[];
  sidebarItems!: MenuItem[];

  ngOnInit() {
    this.auth.autoLogin();

    this.sidebarItems = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Blogs',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'All Posts', icon: 'pi pi-fw pi-table' , routerLink : '/admin/blogs' },
          { label: 'Add New', icon: 'pi pi-fw pi-folder-open' },
          { label: 'catagories', icon: 'pi pi-fw pi-th-large' },
          { label: 'Tags', icon: 'pi pi-fw pi-tags' },
        ],
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-shopping-bag',
        items: [
          { label: 'All Products', icon: 'pi pi-fw pi-table' },
          { label: 'Add New', icon: 'pi pi-fw pi-folder-open' },
          { label: 'catagories', icon: 'pi pi-fw pi-th-large' },
        ],
      },
      {
        label: 'Services',
        icon: 'pi pi-fw pi-hourglass',
        items: [
          { label: 'All Services', icon: 'pi pi-fw pi-table' },
          { label: 'Add New', icon: 'pi pi-fw pi-folder-open' },
          { label: 'catagories', icon: 'pi pi-fw pi-th-large' },
        ],
      },
      {
        label: 'Teams',
        icon: 'pi pi-fw pi-user',
        items: [
          { label: 'All Teams', icon: 'pi pi-fw pi-table' },
          { label: 'Add New', icon: 'pi pi-fw pi-folder-open' },
        ],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
          { label: 'All Users', icon: 'pi pi-fw pi-table' },
          { label: 'Add New', icon: 'pi pi-fw pi-user-plus' },
          { label: 'Profile', icon: 'pi pi-fw pi-user' },
        ],
      },
      {
        label: 'Comments',
        icon: 'pi pi-fw pi-users',
        items: [{ label: 'All Comments', icon: 'pi pi-fw pi-table' }],
      },
      {
        label: 'Comments',
        icon: 'pi pi-fw pi-users',
        items: [{ label: 'All Comments', icon: 'pi pi-fw pi-table' }],
      },
    ];

    this.breakpointObserver.observe(
      ['(max-width : 767px)']
    ).subscribe((state : BreakpointState) =>{
        if(state.matches){
          this.display = false;
        }else{
          this.display = true;
        }
    })
  }

  toggleSideBar() {
    this.display = !this.display;
  }
}

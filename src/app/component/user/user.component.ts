import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user!: any;
  constructor(private readonly activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.data.subscribe((data : any) => this.user = data.user);
  }
}

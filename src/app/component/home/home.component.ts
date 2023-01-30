import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { delay } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  translated !: string;
  constructor (private translate : TranslateService) {}
  ngOnInit(): void {
    this.translate.get('demo.greeting', {name: 'John'}).pipe(delay(4000)).subscribe((res: string) => {
      this.translated = res;
    });
  }
}

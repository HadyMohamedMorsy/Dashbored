import { ChangeDetectionStrategy,Component } from '@angular/core';

@Component({
  selector: 'app-add-new-blog',
  templateUrl: './add-new-blog.component.html',
  styleUrls: ['./add-new-blog.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AddNewBlogComponent {

}

import { ChangeDetectionStrategy,Component } from '@angular/core';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AllCommentsComponent {

}

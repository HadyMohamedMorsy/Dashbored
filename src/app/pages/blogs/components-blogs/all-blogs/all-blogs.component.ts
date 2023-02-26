import { Component, inject } from '@angular/core';
import {BlogsService} from '@services/blogs.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss'],
})
export class AllBlogsComponent {
  private blogs =  inject(BlogsService);
  blog$ : any;

  ngOnInit(): void {
    this.blog$ = this.blogs.getBlogs();
  }

  changePagination(event : number){
    let filterEvent = Math.trunc(event) + 1;
    this.blogs.currentPage.next(filterEvent)
  }

}

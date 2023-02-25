import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import {BlogsService} from '@services/blogs.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss'],
})
export class AllBlogsComponent {
  private blogs =  inject(BlogsService);
  private cdRef = inject(ChangeDetectorRef);
  blog : any;
  finalData : any;
  rows !: number
  totalRecords!: number;
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.blogs.getBlogs().subscribe((blog)=>{
      this.loading = false;
      this.blog = blog.result.data;
      this.totalRecords = blog.result.meta.last_page;
      this.cdRef.detectChanges();
    })
  }

  loadBlogs(event: LazyLoadEvent){
    this.loading = true;
    this.blogs.currentPage.next((event.first? event.first : 10 / 10));
    if(this.blog){
      this.loading = false;
    }
  }
}

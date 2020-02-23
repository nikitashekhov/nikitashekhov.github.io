import { Component, OnInit } from '@angular/core';
import { MediumService } from '../service/medium.service';
import {Post} from './post';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.scss']
})
export class MediumComponent implements OnInit {

  posts: Post[];

  constructor(private mediumPosts: MediumService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.mediumPosts.getPosts()
      .subscribe(posts => {
        console.log(posts)
        this.posts = posts
          // .filter((post: Post) => post.categories.includes('nikitadsgn'))
          .slice(0, 5);
      });
  }
}

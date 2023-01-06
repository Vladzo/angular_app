import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[];

  constructor(private acrivatedRoute: ActivatedRoute) {
    this.acrivatedRoute.data.subscribe(data => {      
      this.posts = data['posts'] as Post[];
    }) 
  }
}

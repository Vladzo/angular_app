import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[] = [{id: 5, title: 'fwfwefew', body: 'wfeewefw', userId: 6}];

  constructor(private acrivatedRoute: ActivatedRoute) {
    this.acrivatedRoute.data.subscribe(data => {      
      this.posts = data['posts'] as Post[];
    }) 
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Comment from '../../models/comment.model';
import Post from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent {
  comments: Comment[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
    const postId = Number(this?.activatedRoute?.parent?.snapshot.url[0].path);    
    const state = this.router.getCurrentNavigation()?.extras.state;
    const post = state?.['post'] as Post;

    if (!state) {
      this.postService.getCommentsByPostId(postId).subscribe(comments => this.comments = comments);
      return;
    }
    
    this.postService.getCommentsByPostId(post.id).subscribe(comments => {
      console.log('comments', comments);
      
      this.comments = comments
    });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Post from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  post: Post;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      const state = this.router.getCurrentNavigation()?.extras.state;
      if (!state) {
        this.postService.getPost(params['id']).subscribe(post => this.post = post);
        return;
      }
      console.log(state);
      
      this.post = state['post'];
    })
  }

  goToComments(): void {
    this.router.navigate(['comments'], { relativeTo: this.activatedRoute, state: {post: this.post} });
  }
}

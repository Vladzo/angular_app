import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Comment from 'src/app/models/Comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  comments: Comment[];
  constructor(private acrivatedRoute: ActivatedRoute) {
    this.acrivatedRoute.data.subscribe(data => {      
      this.comments = data['comments'] as Comment[];
    }) 
  }
}

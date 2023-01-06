import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Comment from '../models/comment.model';
import Post from '../models/post.model';

@Injectable()
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + '/' + `${id}`)
  }

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`); 
  }
}

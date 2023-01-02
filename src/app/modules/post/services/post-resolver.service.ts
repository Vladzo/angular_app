import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import Post from '../models/post.model';

@Injectable()
export class PostResolverService implements Resolve<Observable<Post[]>> {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  resolve(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }
}

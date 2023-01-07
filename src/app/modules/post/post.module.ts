import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostResolverService } from './services/post-resolver.service';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostService } from './services/post.service';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PostResolverService,
    PostService
  ],
  exports: [
    PostsComponent,
  ]
})
export class PostModule { }

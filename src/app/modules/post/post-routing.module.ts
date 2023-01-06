import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostResolverService } from './services/post-resolver.service';

const routes: Routes = [
 {path: '', component: PostsComponent, resolve: {posts: PostResolverService}, children: [
  {path: ':id', component: PostDetailsComponent, children: [
    {path: 'comments', component: PostCommentsComponent}
  ]}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

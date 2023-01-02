import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostResolverService } from './services/post-resolver.service';

const routes: Routes = [
 {path: '', component: PostsComponent, resolve: {posts: PostResolverService}, children: [
  {path: ':id', component: PostDetailsComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

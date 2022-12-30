import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { CommentRecolverService } from './services/comment-recolver.service';
import { UserActivatorService } from './services/user-activator.service';

const routes: Routes = [
  {path: 'users', component: UsersComponent, children: [
    {path: ':id', component: UserDetailsComponent, canActivate: [UserActivatorService]}
  ]},
  {path: 'posts', component: PostsComponent},
  {path: 'comments', component: CommentsComponent, resolve: {comments: CommentRecolverService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

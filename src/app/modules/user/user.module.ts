import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostModule } from '../post/post.module';

@NgModule({
  declarations: [UsersComponent, UserComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    PostModule
  ]
})
export class UserModule { }

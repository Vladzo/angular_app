import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { UserActivatorService } from './services/user-activator.service';

const routes: Routes = [
  {path: '', component: UsersComponent, children: [
    {path: ':id', component: UserDetailsComponent, canActivate: [UserActivatorService]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

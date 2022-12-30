import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from '../../models/User.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user: User;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(params => {
      const state = this.router.getCurrentNavigation()?.extras.state as User;
      if (!state) {
        this.userService.getUser(params['id']).subscribe(user => this.user = user);
        return;
      }
      this.user = state;
    })
  }
}

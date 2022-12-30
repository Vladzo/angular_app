import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/models/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goToDetails(): void {
    this.router.navigate([this.user.id], { relativeTo: this.activatedRoute, state: this.user });
  }
}

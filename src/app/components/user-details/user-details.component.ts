import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/models/User.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user: User;

  @Output()
  onGetUser = new EventEmitter();

  constructor(private dataTransfer: DataTransferService) {
    this.dataTransfer.state.subscribe(() => this.user = this.dataTransfer.getUser());
  };
  login() {
    this.onGetUser.emit(this.user);
  }
}

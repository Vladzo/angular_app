import { Component, Input } from '@angular/core';
import User from 'src/app/models/User.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  user: User;

  constructor(private dataTransfer: DataTransferService) {}

  goToDetails(): void {
    this.dataTransfer.setUser(this.user);
    console.log(this.dataTransfer.getUser());
    
  }
}

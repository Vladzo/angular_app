import { Component } from '@angular/core';
import User from './models/User.model';
import { DataTransferService } from './services/data-transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'anonymus';
  constructor(private dataTransfer: DataTransferService) {
    
  }
  setName(user: User) {
    this.name = user.name;
  }
}

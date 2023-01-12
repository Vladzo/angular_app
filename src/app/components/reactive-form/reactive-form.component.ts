import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import User from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reactive-favorite-color',
  templateUrl: './reactive-form.component.html'
})
export class FavoriteColorComponent implements OnInit {
  users: User[];

  sendUsers() {
    console.log(this.formGroup);
  }
  selectControl: FormControl<any> = new FormControl('0');

  formGroup: FormGroup<any> = new FormGroup({
    selectControl: this.selectControl
  });

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);  
  }
}
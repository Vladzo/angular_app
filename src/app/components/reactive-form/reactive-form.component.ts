import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  templateUrl: './reactive-form.component.html'
})
export class FavoriteColorComponent {
  save() {
    console.log(this.newFormGroup);
  }

  loginControl = new FormControl('login', [Validators.maxLength(3)]);
  passwordControl = new FormControl('password');
  
  newFormGroup: FormGroup = new FormGroup({
    login: this.loginControl,
    password: this.passwordControl
  });
}
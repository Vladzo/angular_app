import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-favorite-color',
  template: `
    Favorite Color: <form #colorForm="ngForm" (ngSubmit)="onSubmit(colorForm)">
      <input [required]="true" type="text" name="color" #colorM="ngModel" [(ngModel)]="favoriteColor" (click)="onClock()">
      <input [required]="true" type="text" name="login" #loginM="ngModel" [(ngModel)]="login">
      <button>Submit</button>
      </form>
  `
})
export class FavoriteTemplateColorComponent {
  favoriteColor = '';
  login = '';

  onClock() {
    console.log(this.favoriteColor);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  checkValid(color: NgModel, login: NgModel) {
    return color.value !== login.value;
  } 
}
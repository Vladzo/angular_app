import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import User from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  state = new BehaviorSubject<User>({id: 1, name: 'Anon', email: ''});
  constructor() { }

  getUserName() {
    return this.state.getValue().name;
  };
  setUserName(name: string): void {
    const user = this.state.getValue();
    user.name = name;
    this.state.next(user);
  };

  getUser() {
    return this.state.getValue();
  }
  setUser(user: User) {
    this.state.next(user)
  }
}

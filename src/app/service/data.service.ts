import { Injectable } from '@angular/core';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user: User;

  constructor() { }

  getData() {
    return this.user;
  }

  setData(user: User) {
    this.user = user;
  }

}

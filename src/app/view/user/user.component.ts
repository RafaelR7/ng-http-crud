import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  users = [];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.listUsers()
      .subscribe(users => this.users = users);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id)
    .subscribe(res =>  this.users = this.users.filter(u => u !== user));
  }

}

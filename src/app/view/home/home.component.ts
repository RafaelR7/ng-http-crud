import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.listUsers();
  }

  getUserId(id: number) {
    console.log(id);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
    .subscribe(res => console.log(res));
    location.reload(true);
  }

  editUser(user: User) {
    this.dataService.setData(user);
  }

}

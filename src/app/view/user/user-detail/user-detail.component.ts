import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  form: FormGroup;
  user: User;
  isNew: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.dataService.getData();
    if (this.user) {
      this.isNew = false;
      this.form = this.formBuilder.group({
        name: [this.user.name],
        username: [this.user.username],
        email: [this.user.email],
        id: [this.user.id]
      });
    } else {
      this.isNew = true;
      this.form = this.formBuilder.group({
        name: [null],
        username: [null],
        email: [null]
      });
    }
  }

  onSubmit() {
    if (this.isNew) {
      this.userService.addUser(this.form.value).subscribe(user => this.user = user);
      this.router.navigate(['/']);
    } else {
      this.userService.updateUser(this.form.value).subscribe(user => this.user);
      this.router.navigate(['/']);
    }
  }

}

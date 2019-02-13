import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: [''],
      username: [''],
      email: [''],
      id: []
    });

    this.getUserToEdit();
  }

  getUserToEdit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
    .subscribe(data => this.form.setValue(data));
  }

  onSubmit() {
    this.userService.updateUser(this.form.value)
    .subscribe(user => this.router.navigate(['/']));
  }

}

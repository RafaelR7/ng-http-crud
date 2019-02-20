import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  { path: 'users',  component: UserComponent },
  { path: 'new',  component: UserAddComponent },
  { path: 'user/:id', component: UserEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

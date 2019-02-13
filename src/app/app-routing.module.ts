import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddComponent } from './view/user/user-add/user-add.component';
import { UserComponent } from './view/user/user.component';
import { UserEditComponent } from './view/user/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'userAdd', component: UserAddComponent },
  { path: 'users/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './view/user/user.component';
import { UserDetailComponent } from './view/user/user-detail/user-detail.component';

const routes: Routes = [
  { path: 'user', component: UserDetailComponent },
  { path: '', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

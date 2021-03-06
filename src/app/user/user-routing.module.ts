import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent } from './login/login.component';
import {ListComponent} from './list/list.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'list', component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

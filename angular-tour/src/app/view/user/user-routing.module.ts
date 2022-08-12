import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
const routes: Routes = [
  {
    path:'userlist',
    canActivate:[AuthGuard],
    component:Child1Component
  },
  {
    path:'adduser',
    canActivate:[AuthGuard],
    component:Child2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

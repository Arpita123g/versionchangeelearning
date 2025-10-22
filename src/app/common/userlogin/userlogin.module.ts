import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserloginComponent } from './userlogin.component';

const routes: Routes = [
  { path: '', component: UserloginComponent },
  { path: ':coursecode', component: UserloginComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild(routes),
    UserloginComponent
  ],
  exports: [
    UserloginComponent
  ]
})
export class UserloginModule { } 
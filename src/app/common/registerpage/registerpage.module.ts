import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterpageComponent } from './registerpage.component';

const routes: Routes = [
  { path: '', component: RegisterpageComponent },
  { path: ':coursecode', component: RegisterpageComponent }
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
    RegisterpageComponent
  ],
  exports: [
    RegisterpageComponent
  ]
})
export class RegisterpageModule { } 
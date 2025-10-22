import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { InstructorComponent } from './instructor.component';

const routes: Routes = [
  { path: '', component: InstructorComponent }
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
    InstructorComponent
  ],
  exports: [
    InstructorComponent
  ]
})
export class InstructorModule { } 
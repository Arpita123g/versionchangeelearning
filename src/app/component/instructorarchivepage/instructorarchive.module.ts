import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule  } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { InstructorarchivepageComponent, UpdateInstructorarchivepageComponent } from '../instructorarchivepage/instructorarchivepage.component';

const routes: Routes = [
  { path: '', component: InstructorarchivepageComponent },
 
];

@NgModule({
  declarations: [
    InstructorarchivepageComponent,
    UpdateInstructorarchivepageComponent
  ],
  imports: [
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule ,
    MatDialogModule , 
    MatCardModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class InstructorArchiveModule { }
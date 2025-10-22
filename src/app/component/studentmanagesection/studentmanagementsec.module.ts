import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

// Import common module
import { CommonComponentsModule } from '../../common/common.module';

import { DeleteStudentmanagesectionComponent, StudentmanagesectionComponent, UpdateStudentmanagesectionComponent } from '../studentmanagesection/studentmanagesection.component';

const routes: Routes = [
  { path: 'studentmngsec', component: StudentmanagesectionComponent },
 
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    NgApexchartsModule,
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    // CommonComponentsModule,
    StudentmanagesectionComponent,
    UpdateStudentmanagesectionComponent,
    DeleteStudentmanagesectionComponent
  ]
})
export class StudentManagementSecModule { } 
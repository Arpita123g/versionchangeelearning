import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleselectComponent } from './roleselect.component';
// import { InstructorComponent } from '../instructor/instructor.component'; // Removed direct import
// import { UserloginComponent } from '../../common/userlogin/userlogin.component'; // Removed direct import
// import { RegisterpageComponent } from '../../common/registerpage/registerpage.component'; // Removed direct import

const routes: Routes = [
  { path: '', component: RoleselectComponent },
  {
    path: 'instructorlogin',
    loadChildren: () => import('../instructor/instructor.module').then(m => m.InstructorModule)
  },
  {
    path: 'studentlogin',
    loadChildren: () => import('../../common/userlogin/userlogin.module').then(m => m.UserloginModule)
  },
  {
    path: 'studentlogin/:coursecode',
    loadChildren: () => import('../../common/userlogin/userlogin.module').then(m => m.UserloginModule)
  },
  {
    path: 'studentregister',
    loadChildren: () => import('../../common/registerpage/registerpage.module').then(m => m.RegisterpageModule)
  },
  {
    path: 'studentregister/:coursecode',
    loadChildren: () => import('../../common/registerpage/registerpage.module').then(m => m.RegisterpageModule)
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RoleselectComponent
  ],
  exports: [
    RoleselectComponent
  ]
})
export class RoleselectModule { }
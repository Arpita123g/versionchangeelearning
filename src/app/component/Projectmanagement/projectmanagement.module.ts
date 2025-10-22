import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';

// Import common module
import { CommonComponentsModule } from '../../common/common.module';

import { ProjectmanagementdecisionchecklistComponent } from '../Projectmanagement/projectmanagementdecisionchecklist/projectmanagementdecisionchecklist.component';
import { ProjectmanagementfoodforthoughtComponent } from '../Projectmanagement/projectmanagementfoodforthought/projectmanagementfoodforthought.component';
import { ProjectmanagementheaderComponent } from '../Projectmanagement/projectmanagementheader/projectmanagementheader.component';
import { ProjectmanagementintroductionComponent } from '../Projectmanagement/projectmanagementintroduction/projectmanagementintroduction.component';
import { ProjectmanagementmemoComponent } from '../Projectmanagement/projectmanagementmemo/projectmanagementmemo.component';
import { ProjectmanagementplanningComponent } from '../Projectmanagement/projectmanagementplanning/projectmanagementplanning.component';
import { ProjectmanagementprojectmapComponent } from '../Projectmanagement/projectmanagementprojectmap/projectmanagementprojectmap.component';
import { ProjectmanagementreportComponent } from '../Projectmanagement/projectmanagementreport/projectmanagementreport.component';
import { ProjectmanagementsynopsisComponent } from '../Projectmanagement/projectmanagementsynopsis/projectmanagementsynopsis.component';
import { ProjectmanagementtrackingComponent } from '../Projectmanagement/projectmanagementtracking/projectmanagementtracking.component';

const routes: Routes = [
  { path: 'component', component: ProjectmanagementheaderComponent },
 
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
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    // CommonComponentsModule,
    ProjectmanagementdecisionchecklistComponent,
    ProjectmanagementfoodforthoughtComponent,
    ProjectmanagementheaderComponent,
    ProjectmanagementintroductionComponent,
    ProjectmanagementmemoComponent,
    ProjectmanagementplanningComponent,
    ProjectmanagementprojectmapComponent,
    ProjectmanagementreportComponent,
    ProjectmanagementsynopsisComponent,
    ProjectmanagementtrackingComponent,
  ]
})
export class ProjectManagementModule { } 
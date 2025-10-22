import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';

// Import common module
import { CommonComponentsModule } from '../../../common/common.module';

import { ProjectmanagementcaseheaderComponent } from '../Projectcasemanagement/projectmanagementcaseheader/projectmanagementcaseheader.component';
import { ProjectmanagementcasemarketComponent } from '../Projectcasemanagement/projectmanagementcasemarket/projectmanagementcasemarket.component';
import { ProjectmanagementcaseprojectmapComponent } from '../Projectcasemanagement/projectmanagementcaseprojectmap/projectmanagementcaseprojectmap.component';
import { ProjectmanagementcaseplanningComponent } from '../Projectcasemanagement/projectmanagementcaseplanning/projectmanagementcaseplanning.component';
import { ProjectmanagementcasefoodforthoughtComponent } from '../Projectcasemanagement/projectmanagementcasefoodforthought/projectmanagementcasefoodforthought.component';
import { ProjectmanagementcasemoduleComponent } from '../Projectcasemanagement/projectmanagementcasemodule/projectmanagementcasemodule.component';
import { ProjectmanagementcasecriteriaComponent } from '../Projectcasemanagement/projectmanagementcasecriteria/projectmanagementcasecriteria.component';

const routes: Routes = [
  { path: 'component', component: ProjectmanagementcaseheaderComponent },
 
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
    ProjectmanagementcaseheaderComponent,
    ProjectmanagementcasemarketComponent,
    ProjectmanagementcaseprojectmapComponent,
    ProjectmanagementcaseplanningComponent,
    ProjectmanagementcasefoodforthoughtComponent,
    ProjectmanagementcasemoduleComponent,
    ProjectmanagementcasecriteriaComponent,
  ],
  providers: [DecimalPipe]
})
export class ProjectManagementcaseModule { } 
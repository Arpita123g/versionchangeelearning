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
import { CommonComponentsModule } from '../../../common/common.module';

import { HrmcaseHeaderComponent } from './hrmcase-header/hrmcase-header.component';
import { HrmcaseCompanyComponent } from './hrmcase-company/hrmcase-company.component';
import { HrmcaseAcquisitionComponent } from './hrmcase-acquisition/hrmcase-acquisition.component';
import { HrmcaseManagementComponent } from './hrmcase-management/hrmcase-management.component';
import { HrmcaseToolsComponent } from './hrmcase-tools/hrmcase-tools.component';
import { HrmcaseScenarioFotComponent } from './hrmcase-scenario-fot/hrmcase-scenario-fot.component';
import { HrmcaseModuleComponent } from './hrmcase-module/hrmcase-module.component';

const routes: Routes = [
  { path: 'component', component: HrmcaseHeaderComponent },
 
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
    HrmcaseHeaderComponent,
    HrmcaseCompanyComponent,
    HrmcaseAcquisitionComponent,
    HrmcaseManagementComponent,
    HrmcaseToolsComponent,
    HrmcaseScenarioFotComponent,
    HrmcaseModuleComponent,
    
  ]
})
export class HrmFintechcasecaseModule { } 
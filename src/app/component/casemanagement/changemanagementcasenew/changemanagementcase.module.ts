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

import { ChangemanagementcaseawarenessComponent } from '../changemanagementcasenew/changemanagementcaseawareness/changemanagementcaseawareness.component';
import { ChangemanagementcasecommitmentComponent } from '../changemanagementcasenew/changemanagementcasecommitment/changemanagementcasecommitment.component';
import { ChangemanagementcasefoodforthoughtComponent } from '../changemanagementcasenew/changemanagementcasefoodforthought/changemanagementcasefoodforthought.component';
import { ChangemanagementcaseheaderComponent } from '../changemanagementcasenew/changemanagementcaseheader/changemanagementcaseheader.component';
import { ChangemanagementcasehumandynamicsComponent } from '../changemanagementcasenew/changemanagementcasehumandynamics/changemanagementcasehumandynamics.component';
import { ChangemanagementcasememoComponent } from '../changemanagementcasenew/changemanagementcasememo/changemanagementcasememo.component';
import { ChangemanagementcasemoduleComponent } from '../changemanagementcasenew/changemanagementcasemodule/changemanagementcasemodule.component';
import { ChangemanagementcasemotivationComponent } from '../changemanagementcasenew/changemanagementcasemotivation/changemanagementcasemotivation.component';

const routes: Routes = [
  { path: 'component', component: ChangemanagementcaseheaderComponent },
 
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
    ChangemanagementcasememoComponent,
    ChangemanagementcasemoduleComponent,
    ChangemanagementcaseheaderComponent,
    ChangemanagementcasehumandynamicsComponent,
    ChangemanagementcaseawarenessComponent,
    ChangemanagementcasemotivationComponent,
    ChangemanagementcasecommitmentComponent,
    ChangemanagementcasefoodforthoughtComponent,
    
  ]
})
export class ChangeManagementcaseModule { } 
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

import { ChangemanagementcaseawarenessComponent } from '../changemanagementcase/changemanagementcaseawareness/changemanagementcaseawareness.component';
import { ChangemanagementcasecommitmentComponent } from '../changemanagementcase/changemanagementcasecommitment/changemanagementcasecommitment.component';
import { ChangemanagementcasefoodforthoughtComponent } from '../changemanagementcase/changemanagementcasefoodforthought/changemanagementcasefoodforthought.component';
import { ChangemanagementcaseheaderComponent } from '../changemanagementcase/changemanagementcaseheader/changemanagementcaseheader.component';
import { ChangemanagementcasehumandynamicsComponent } from '../changemanagementcase/changemanagementcasehumandynamics/changemanagementcasehumandynamics.component';
import { ChangemanagementcasememoComponent } from '../changemanagementcase/changemanagementcasememo/changemanagementcasememo.component';
import { ChangemanagementcasemoduleComponent } from '../changemanagementcase/changemanagementcasemodule/changemanagementcasemodule.component';
import { ChangemanagementcasemotivationComponent } from '../changemanagementcase/changemanagementcasemotivation/changemanagementcasemotivation.component';

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
    ChangemanagementcaseheaderComponent,
    ChangemanagementcasehumandynamicsComponent,
    ChangemanagementcaseawarenessComponent,
    ChangemanagementcasemotivationComponent,
    ChangemanagementcasecommitmentComponent,
    ChangemanagementcasefoodforthoughtComponent,
    ChangemanagementcasememoComponent
    
  ]
})
export class ChangeManagementcaseModule { } 
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

import { ChangemanagementnewawarenessComponent } from '../changemanagement/changemanagementnewawareness/changemanagementnewawareness.component';
import { ChangemanagementnewcommitmentComponent } from '../changemanagement/changemanagementnewcommitment/changemanagementnewcommitment.component';
import { ChangemanagementnewdecisionchecklistComponent, ChangemanagementnewdecisionchecklistpopupComponent } from '../changemanagement/changemanagementnewdecisionchecklist/changemanagementnewdecisionchecklist.component';
import { ChangemanagementnewfoodforthougthComponent } from '../changemanagement/changemanagementnewfoodforthougth/changemanagementnewfoodforthougth.component';
import { ChangemanagementnewheaderComponent } from '../changemanagement/changemanagementnewheader/changemanagementnewheader.component';
import { ChangemanagementnewhumandynamicsComponent } from '../changemanagement/changemanagementnewhumandynamics/changemanagementnewhumandynamics.component';
import { ChangemanagementnewintroductionComponent } from '../changemanagement/changemanagementnewintroduction/changemanagementnewintroduction.component';
import { ChangemanagementnewmemoComponent } from '../changemanagement/changemanagementnewmemo/changemanagementnewmemo.component';
import { ChangemanagementnewmotivationComponent } from '../changemanagement/changemanagementnewmotivation/changemanagementnewmotivation.component';
import { ChangemanagementnewreportComponent } from '../changemanagement/changemanagementnewreport/changemanagementnewreport.component';
import { ChangemanagementnewsynopsisComponent } from '../changemanagement/changemanagementnewsynopsis/changemanagementnewsynopsis.component';

const routes: Routes = [
  { path: 'component', component: ChangemanagementnewheaderComponent },

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
    // Standalone header
    ChangemanagementnewheaderComponent,
    ChangemanagementnewintroductionComponent,
    ChangemanagementnewmemoComponent,
    ChangemanagementnewhumandynamicsComponent,
    ChangemanagementnewawarenessComponent,
    ChangemanagementnewmotivationComponent,
    ChangemanagementnewcommitmentComponent,
    ChangemanagementnewdecisionchecklistComponent,
    ChangemanagementnewreportComponent,
    ChangemanagementnewsynopsisComponent,
    ChangemanagementnewfoodforthougthComponent,
  ]
})
export class ChangeManagementModule { } 
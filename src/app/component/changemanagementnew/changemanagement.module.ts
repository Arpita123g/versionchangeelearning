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

import { ChangemanagementnewawarenessComponent } from '../changemanagementnew/changemanagementnewawareness/changemanagementnewawareness.component';
import { ChangemanagementnewcommitmentComponent } from '../changemanagementnew/changemanagementnewcommitment/changemanagementnewcommitment.component';
import { ChangemanagementnewdecisionchecklistComponent, ChangemanagementnewdecisionchecklistpopupComponent } from '../changemanagementnew/changemanagementnewdecisionchecklist/changemanagementnewdecisionchecklist.component';
import { ChangemanagementnewfoodforthougthComponent } from '../changemanagementnew/changemanagementnewfoodforthougth/changemanagementnewfoodforthougth.component';
import { ChangemanagementnewheaderComponent } from '../changemanagementnew/changemanagementnewheader/changemanagementnewheader.component';
import { ChangemanagementnewhumandynamicsComponent } from '../changemanagementnew/changemanagementnewhumandynamics/changemanagementnewhumandynamics.component';
import { ChangemanagementnewintroductionComponent } from '../changemanagementnew/changemanagementnewintroduction/changemanagementnewintroduction.component';
import { ChangemanagementnewmemoComponent } from '../changemanagementnew/changemanagementnewmemo/changemanagementnewmemo.component';
import { ChangemanagementnewmotivationComponent } from '../changemanagementnew/changemanagementnewmotivation/changemanagementnewmotivation.component';
import { ChangemanagementnewreportComponent } from '../changemanagementnew/changemanagementnewreport/changemanagementnewreport.component';
import { ChangemanagementnewsynopsisComponent } from '../changemanagementnew/changemanagementnewsynopsis/changemanagementnewsynopsis.component';
import { FoodforthoughtComponent } from 'src/app/common/foodforthought/foodforthought.component';

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
    // Standalone components
    ChangemanagementnewheaderComponent,
    ChangemanagementnewintroductionComponent,
    ChangemanagementnewmemoComponent,
    ChangemanagementnewhumandynamicsComponent,
    ChangemanagementnewawarenessComponent,
    ChangemanagementnewmotivationComponent,
    ChangemanagementnewcommitmentComponent,
    ChangemanagementnewdecisionchecklistComponent,
    ChangemanagementnewdecisionchecklistpopupComponent,
    ChangemanagementnewreportComponent,
    ChangemanagementnewsynopsisComponent,
    FoodforthoughtComponent,
    ChangemanagementnewfoodforthougthComponent,
  ]
})
export class ChangeManagementModule { } 
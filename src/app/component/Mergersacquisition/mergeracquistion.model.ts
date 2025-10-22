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

import { MergersacquisitiondecisionchecklistComponent, MergersacquisitionpopupComponent } from '../Mergersacquisition/mergersacquisitiondecisionchecklist/mergersacquisitiondecisionchecklist.component';
import { MergersacquisitionfinancingComponent } from '../Mergersacquisition/mergersacquisitionfinancing/mergersacquisitionfinancing.component';
import { MergersacquisitionfoodforthoughtComponent } from '../Mergersacquisition/mergersacquisitionfoodforthought/mergersacquisitionfoodforthought.component';
import { MergersacquisitionheaderComponent } from '../Mergersacquisition/mergersacquisitionheader/mergersacquisitionheader.component';
import { MergersacquisitionintroductionComponent } from '../Mergersacquisition/mergersacquisitionintroduction/mergersacquisitionintroduction.component';
import { MergersacquisitionmarketComponent } from '../Mergersacquisition/mergersacquisitionmarket/mergersacquisitionmarket.component';
import { MergersacquisitionnegotiationComponent } from '../Mergersacquisition/mergersacquisitionnegotiation/mergersacquisitionnegotiation.component';
import { MergersacquisitionplanningComponent } from '../Mergersacquisition/mergersacquisitionplanning/mergersacquisitionplanning.component';
import { MergersacquisitionpreliminaryassessmentsComponent } from '../Mergersacquisition/mergersacquisitionpreliminaryassessments/mergersacquisitionpreliminaryassessments.component';
import { MergersacquisitionreportComponent } from '../Mergersacquisition/mergersacquisitionreport/mergersacquisitionreport.component';
import { MergersacquisitionsynopsisComponent } from '../Mergersacquisition/mergersacquisitionsynopsis/mergersacquisitionsynopsis.component';

const routes: Routes = [
  { path: 'component', component: MergersacquisitionheaderComponent },
 
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
    MergersacquisitionintroductionComponent,
    MergersacquisitionheaderComponent,
    MergersacquisitionmarketComponent,
    MergersacquisitiondecisionchecklistComponent,
    //  MergersacquisitionpopupComponent,
    MergersacquisitionreportComponent,
    MergersacquisitionsynopsisComponent,
    MergersacquisitionfoodforthoughtComponent,
    MergersacquisitionplanningComponent,
    MergersacquisitionpreliminaryassessmentsComponent,
    MergersacquisitionnegotiationComponent,
    MergersacquisitionfinancingComponent,
  ]
})
export class MergersAcquisionModule { } 
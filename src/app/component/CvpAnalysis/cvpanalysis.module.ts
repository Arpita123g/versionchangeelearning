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

import { CvpanalysisdecisionchecklistComponent, CvpanalysisdecisionsubmitPopup } from '../CvpAnalysis/cvpanalysisdecisionchecklist/cvpanalysisdecisionchecklist.component';
import { CvpanalysisdecisionreportComponent } from '../CvpAnalysis/cvpanalysisdecisionreport/cvpanalysisdecisionreport.component';
import { CvpanalysisdecisionsynopsisComponent } from '../CvpAnalysis/cvpanalysisdecisionsynopsis/cvpanalysisdecisionsynopsis.component';
import { CvpanalysisfoodforthoughtComponent } from '../CvpAnalysis/cvpanalysisfoodforthought/cvpanalysisfoodforthought.component';
import { CvpanalysisheaderComponent } from '../CvpAnalysis/cvpanalysisheader/cvpanalysisheader.component';
import { CvpanalysisintroductionComponent } from '../CvpAnalysis/cvpanalysisintroduction/cvpanalysisintroduction.component';
import { CvpanalysismarketComponent } from '../CvpAnalysis/cvpanalysismarket/cvpanalysismarket.component';
import { CvpanalysismarketingComponent } from '../CvpAnalysis/cvpanalysismarketing/cvpanalysismarketing.component';
import { CvpanalysisproductionComponent } from '../CvpAnalysis/cvpanalysisproduction/cvpanalysisproduction.component';

const routes: Routes = [
  { path: 'component', component: CvpanalysisheaderComponent },
 
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
    CvpanalysisheaderComponent,
    CvpanalysismarketComponent,
    CvpanalysismarketingComponent,
    CvpanalysisproductionComponent,
    CvpanalysisdecisionchecklistComponent,
    CvpanalysisdecisionreportComponent,
    CvpanalysisdecisionsynopsisComponent,
    CvpanalysisintroductionComponent,
    CvpanalysisfoodforthoughtComponent,
  ]
})
export class CvpAnalysiscModule { } 
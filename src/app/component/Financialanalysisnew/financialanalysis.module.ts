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

import { FinancialanalysisnewdecisionchecklistComponent, Financialanalysisnewdecisionchecklistpopup } from '../Financialanalysisnew/financialanalysisnewdecisionchecklist/financialanalysisnewdecisionchecklist.component';
import { FinancialanalysisnewfoodforthoughtComponent } from '../Financialanalysisnew/financialanalysisnewfoodforthought/financialanalysisnewfoodforthought.component';
import { FinancialanalysisnewheaderComponent } from '../Financialanalysisnew/financialanalysisnewheader/financialanalysisnewheader.component';
import { FinancialanalysisnewindtroductionComponent } from '../Financialanalysisnew/financialanalysisnewindtroduction/financialanalysisnewindtroduction.component';
import { FinancialanalysisnewindustryanalysisComponent } from '../Financialanalysisnew/financialanalysisnewindustryanalysis/financialanalysisnewindustryanalysis.component';
import { FinancialanalysisnewinvestmentComponent } from '../Financialanalysisnew/financialanalysisnewinvestment/financialanalysisnewinvestment.component';
import { FinancialanalysisnewmemoComponent } from '../Financialanalysisnew/financialanalysisnewmemo/financialanalysisnewmemo.component';
import { FinancialanalysisnewreportsComponent } from '../Financialanalysisnew/financialanalysisnewreports/financialanalysisnewreports.component';
import { FinancialanalysisnewstatementsComponent } from '../Financialanalysisnew/financialanalysisnewstatements/financialanalysisnewstatements.component';
import { FinancialanalysisnewsynopsisComponent } from '../Financialanalysisnew/financialanalysisnewsynopsis/financialanalysisnewsynopsis.component';
import { FinancialanalysisnewthesisComponent } from '../Financialanalysisnew/financialanalysisnewthesis/financialanalysisnewthesis.component';

const routes: Routes = [
  { path: 'component', component: FinancialanalysisnewheaderComponent },
 
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
    FinancialanalysisnewheaderComponent,
    FinancialanalysisnewindtroductionComponent,
    FinancialanalysisnewmemoComponent,
    FinancialanalysisnewindustryanalysisComponent,
    FinancialanalysisnewfoodforthoughtComponent,
    FinancialanalysisnewstatementsComponent,
    FinancialanalysisnewthesisComponent,
    FinancialanalysisnewinvestmentComponent,
    FinancialanalysisnewdecisionchecklistComponent,
    FinancialanalysisnewreportsComponent,
    FinancialanalysisnewsynopsisComponent,
    Financialanalysisnewdecisionchecklistpopup
  ],
  exports: [
    FinancialanalysisnewheaderComponent,
    FinancialanalysisnewindtroductionComponent,
    FinancialanalysisnewmemoComponent,
    FinancialanalysisnewindustryanalysisComponent,
    FinancialanalysisnewfoodforthoughtComponent,
    FinancialanalysisnewstatementsComponent,
    FinancialanalysisnewthesisComponent,
    FinancialanalysisnewinvestmentComponent,
    FinancialanalysisnewdecisionchecklistComponent,
    FinancialanalysisnewreportsComponent,
    FinancialanalysisnewsynopsisComponent,
    Financialanalysisnewdecisionchecklistpopup
  ]
})
export class FinancialAnalysisModule { } 
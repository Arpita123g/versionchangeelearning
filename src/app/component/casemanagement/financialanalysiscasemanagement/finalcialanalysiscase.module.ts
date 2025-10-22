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

import { FinancialcasefoodforthoughtComponent } from '../financialanalysiscasemanagement/financialcasefoodforthought/financialcasefoodforthought.component';
import { FinancialcaseheaderComponent } from '../financialanalysiscasemanagement/financialcaseheader/financialcaseheader.component';
import { FinancialcaseindustryanalysisComponent } from '../financialanalysiscasemanagement/financialcaseindustryanalysis/financialcaseindustryanalysis.component';
import { FinancialcaseinvestmentsComponent } from '../financialanalysiscasemanagement/financialcaseinvestments/financialcaseinvestments.component';
import { FinancialcasememoComponent } from '../financialanalysiscasemanagement/financialcasememo/financialcasememo.component';
import { FinancialcasemoduleComponent } from '../financialanalysiscasemanagement/financialcasemodule/financialcasemodule.component';
import { FinancialcasestatementsComponent } from '../financialanalysiscasemanagement/financialcasestatements/financialcasestatements.component';

const routes: Routes = [
  { path: 'component', component: FinancialcaseheaderComponent },
 
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
    FinancialcaseheaderComponent,
    FinancialcasefoodforthoughtComponent,
    FinancialcasemoduleComponent,
    FinancialcasememoComponent,
    FinancialcaseindustryanalysisComponent,
    FinancialcasestatementsComponent,
    FinancialcaseinvestmentsComponent,
  ]
})
export class FinalcialAnalysiscaseModule { } 
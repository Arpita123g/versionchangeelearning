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

import { AccountingArabicaccountsComponent } from '../Accountingarabic/accountingarabicaccounts/accountingarabicaccounts.component';
import { AccountingarabicevaluationComponent } from '../Accountingarabic/accountingarabicevaluation/accountingarabicevaluation.component';
import { AccountingArabicfoodforthoughtComponent } from '../Accountingarabic/accountingarabicfoodforthought/accountingarabicfoodforthought.component';
import { AccountingArabicheaderComponent } from '../Accountingarabic/accountingarabicheader/accountingarabicheader.component';
import { AccountingArabicinformationComponent } from '../Accountingarabic/accountingarabicinformation/accountingarabicinformation.component';
import { AccountingArabicintroductionComponent } from '../Accountingarabic/accountingarabicintroduction/accountingarabicintroduction.component';
import { AccountingArabicmemoComponent } from '../Accountingarabic/accountingarabicmemo/accountingarabicmemo.component';
import { AccountingArabicreportComponent } from '../Accountingarabic/accountingarabicreport/accountingarabicreport.component';
import { AccountingArabicsynopsisComponent } from '../Accountingarabic/accountingarabicsynopsis/accountingarabicsynopsis.component';
import { AccountingArabicPopup, AccountingingArabicdecisionchecklistComponent } from '../Accountingarabic/accountingarabicdecisionchecklist/accountingarabicdecisionchecklist.component';

const routes: Routes = [
  { path: 'component', component: AccountingArabicheaderComponent },
 
];

@NgModule({
  declarations: [],
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
    // Import standalone components
    AccountingArabicaccountsComponent,
    AccountingingArabicdecisionchecklistComponent,
    AccountingArabicPopup,
    AccountingarabicevaluationComponent,
    AccountingArabicfoodforthoughtComponent,
    AccountingArabicheaderComponent,
    AccountingArabicinformationComponent,
    AccountingArabicintroductionComponent,
    AccountingArabicmemoComponent,
    AccountingArabicreportComponent,
    AccountingArabicsynopsisComponent,
  ]
})
export class AcountingArabicModule { } 
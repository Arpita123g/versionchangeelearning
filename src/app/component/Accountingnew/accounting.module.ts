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

import { AccountingheaderComponent } from '../Accountingnew/accountingheader/accountingheader.component';
import { AccountingingaccountsComponent } from '../Accountingnew/accountingingaccounts/accountingingaccounts.component';
import { AccountingingdecisionchecklistComponent, AccountingPopup } from '../Accountingnew/accountingingdecisionchecklist/accountingingdecisionchecklist.component';
import { AccountingingevaluationComponent } from '../Accountingnew/accountingingevaluation/accountingingevaluation.component';
import { AccountingingfoodforthoughtComponent } from '../Accountingnew/accountingingfoodforthought/accountingingfoodforthought.component';
import { AccountinginginformationComponent } from '../Accountingnew/accountinginginformation/accountinginginformation.component';
import { AccountingingmemoComponent } from '../Accountingnew/accountingingmemo/accountingingmemo.component';
import { AccountingingreportComponent } from '../Accountingnew/accountingingreport/accountingingreport.component';
import { AccountingingsynopsisComponent } from '../Accountingnew/accountingingsynopsis/accountingingsynopsis.component';
import { AccountingintroductionComponent } from '../Accountingnew/accountingintroduction/accountingintroduction.component';

const routes: Routes = [
  { path: 'component', component: AccountingheaderComponent },
 
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
    AccountingheaderComponent,
    AccountingintroductionComponent,
    AccountingingmemoComponent,
    AccountinginginformationComponent,
    AccountingingaccountsComponent,
    AccountingingevaluationComponent,
    AccountingingdecisionchecklistComponent,
    AccountingPopup,
    AccountingingreportComponent,
    AccountingingsynopsisComponent,
    AccountingingfoodforthoughtComponent,
  ]
})
export class AcountingModule { } 
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

import { AccountingcasecorrectaccountsComponent } from '../accountingcase/accountingcasecorrectaccounts/accountingcasecorrectaccounts.component';
import { AccountingcaseevaluationComponent } from '../accountingcase/accountingcaseevaluation/accountingcaseevaluation.component';
import { AccountingcasefoodforthoughtComponent } from '../accountingcase/accountingcasefoodforthought/accountingcasefoodforthought.component';
import { AccountingcaseheaderComponent } from '../accountingcase/accountingcaseheader/accountingcaseheader.component';
import { AccountingcasememoComponent } from '../accountingcase/accountingcasememo/accountingcasememo.component';
import { AccountingcasemoduleComponent } from '../accountingcase/accountingcasemodule/accountingcasemodule.component';

const routes: Routes = [
  { path: 'component', component: AccountingcaseheaderComponent },
 
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
    AccountingcaseheaderComponent,
    AccountingcasemoduleComponent,
    AccountingcasefoodforthoughtComponent,
    AccountingcasememoComponent,
    AccountingcasecorrectaccountsComponent,
    AccountingcaseevaluationComponent,
  ]
})
export class AccountingcaseModule { } 
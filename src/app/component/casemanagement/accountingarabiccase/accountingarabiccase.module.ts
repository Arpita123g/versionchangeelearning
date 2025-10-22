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

import { AccountingarabiccaseheaderComponent } from '../accountingarabiccase/accountingarabiccaseheader/accountingarabiccaseheader.component';
import { AccountingarabiccasememoComponent } from '../accountingarabiccase/accountingarabiccasememo/accountingarabiccasememo.component';
import { AccountingarabiccasecorrectaccountsComponent } from '../accountingarabiccase/accountingarabiccasecorrectaccounts/accountingarabiccasecorrectaccounts.component';
import { AccountingarabiccaseevaluationComponent } from '../accountingarabiccase/accountingarabiccaseevaluation/accountingarabiccaseevaluation.component';
import { AccountingarabiccasefoodforthoughtComponent } from '../accountingarabiccase/accountingarabiccasefoodforthought/accountingarabiccasefoodforthought.component';
import { AccountingarabiccasemoduleComponent } from '../accountingarabiccase/accountingarabiccasemodule/accountingarabiccasemodule.component';

const routes: Routes = [
  { path: 'component', component: AccountingarabiccaseheaderComponent },
 
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
    AccountingarabiccaseheaderComponent,
    AccountingarabiccasememoComponent,
    AccountingarabiccasecorrectaccountsComponent,
    AccountingarabiccaseevaluationComponent,
    AccountingarabiccasefoodforthoughtComponent,
    AccountingarabiccasemoduleComponent,
  ]
})
export class AccountingArabicCaseModule { } 
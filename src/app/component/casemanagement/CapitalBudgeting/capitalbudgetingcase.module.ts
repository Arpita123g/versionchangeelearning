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

import { CapitalbudgetingcaseheaderComponent } from '../CapitalBudgeting/capitalbudgetingcaseheader/capitalbudgetingcaseheader.component';
import { CapitalbudgetingcasemarketComponent } from '../CapitalBudgeting/capitalbudgetingcasemarket/capitalbudgetingcasemarket.component';
import { CapitalbudgetingcasemoduleComponent } from '../CapitalBudgeting/capitalbudgetingcasemodule/capitalbudgetingcasemodule.component';
import { CapitalbudgetingcasefoodforthoughtComponent } from '../CapitalBudgeting/capitalbudgetingcasefoodforthought/capitalbudgetingcasefoodforthought.component';
import { CapitalbudgetingcaseprojectportfolioComponent } from '../CapitalBudgeting/capitalbudgetingcaseprojectportfolio/capitalbudgetingcaseprojectportfolio.component';

const routes: Routes = [
  { path: 'component', component: CapitalbudgetingcaseheaderComponent },
 
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
    CapitalbudgetingcaseheaderComponent,
    CapitalbudgetingcasemarketComponent,
    CapitalbudgetingcasemoduleComponent,
    CapitalbudgetingcasefoodforthoughtComponent,
    CapitalbudgetingcaseprojectportfolioComponent,
    
  ]
})
export class CapitalBudgetingCaseModule { } 
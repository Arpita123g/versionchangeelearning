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

import { CapitalbudgetingheaderComponent } from '../CapitalBudgeting/capitalbudgetingheader/capitalbudgetingheader.component';
import { CapitalbudgetingmarketComponent } from '../CapitalBudgeting/capitalbudgetingmarket/capitalbudgetingmarket.component';
import { CapitalbudgetingintroductionComponent } from '../CapitalBudgeting/capitalbudgetingintroduction/capitalbudgetingintroduction.component';
import { CapitalbudgetingprojectportfolioComponent } from '../CapitalBudgeting/capitalbudgetingprojectportfolio/capitalbudgetingprojectportfolio.component';
import { CapitalbudgetingdecideComponent } from '../CapitalBudgeting/capitalbudgetingdecide/capitalbudgetingdecide.component';
import { CapitalbudgetingdecisionchecklistComponent, CapitalbudgetingdecisionchecklistPopup } from '../CapitalBudgeting/capitalbudgetingdecisionchecklist/capitalbudgetingdecisionchecklist.component';
import { CapitalbudgetingreportComponent } from '../CapitalBudgeting/capitalbudgetingreport/capitalbudgetingreport.component';
import { CapitalbudgetingsynopsisComponent } from '../CapitalBudgeting/capitalbudgetingsynopsis/capitalbudgetingsynopsis.component';
import { CapitalbudgetingfoodforthoughtComponent } from '../CapitalBudgeting/capitalbudgetingfoodforthought/capitalbudgetingfoodforthought.component';

const routes: Routes = [
  { path: 'component', component: CapitalbudgetingheaderComponent },
 
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
    CapitalbudgetingheaderComponent,
    CapitalbudgetingmarketComponent,
    CapitalbudgetingintroductionComponent,
    CapitalbudgetingprojectportfolioComponent,
    CapitalbudgetingdecideComponent,
    CapitalbudgetingfoodforthoughtComponent,
    CapitalbudgetingdecisionchecklistComponent,
    CapitalbudgetingreportComponent,
    CapitalbudgetingsynopsisComponent,
   
  ]
})
export class CapitalBudgetingModule { } 
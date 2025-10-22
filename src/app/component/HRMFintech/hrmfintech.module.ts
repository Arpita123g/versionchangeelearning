import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { MatExpansionModule } from '@angular/material/expansion';

// Import common module
import { CommonComponentsModule } from '../../common/common.module';

import { HrmfintechHeaderComponent } from '../HRMFintech/hrmfintech-header/hrmfintech-header.component';
import { HrmfintechIntroductionComponent } from '../HRMFintech/hrmfintech-introduction/hrmfintech-introduction.component';
import { HrmfintechMarketComponent } from '../HRMFintech/hrmfintech-market/hrmfintech-market.component';
import { HrmfintechTalentacqComponent } from '../HRMFintech/hrmfintech-talentacq/hrmfintech-talentacq.component';
import { HrmfintechTalentmanagementComponent } from '../HRMFintech/hrmfintech-talentmanagement/hrmfintech-talentmanagement.component';
import { HrmfintechOraganizationBudgetComponent } from '../HRMFintech/hrmfintech-oraganization-budget/hrmfintech-oraganization-budget.component';
import { HrmfintechConflictComponent } from '../HRMFintech/hrmfintech-conflict/hrmfintech-conflict.component';
import { HrmfintechDecisionchecklistComponent, Hrmfintechpopup } from '../HRMFintech/hrmfintech-decisionchecklist/hrmfintech-decisionchecklist.component';
import { HrmfintechReportComponent } from '../HRMFintech/hrmfintech-report/hrmfintech-report.component';
import { HrmfintechFoodforthoughtComponent } from '../HRMFintech/hrmfintech-foodforthought/hrmfintech-foodforthought.component';
const routes: Routes = [
  { path: 'component', component: HrmfintechHeaderComponent },
 
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
    MatExpansionModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    // CommonComponentsModule,
    // standalone components
    HrmfintechHeaderComponent,
    HrmfintechIntroductionComponent,
    HrmfintechMarketComponent,
    HrmfintechTalentacqComponent,
    HrmfintechTalentmanagementComponent,
    HrmfintechOraganizationBudgetComponent,
    HrmfintechConflictComponent,
    HrmfintechDecisionchecklistComponent,
    Hrmfintechpopup,
    HrmfintechReportComponent,
    HrmfintechFoodforthoughtComponent
  ],
  exports: [
    HrmfintechHeaderComponent,
    HrmfintechIntroductionComponent,
    HrmfintechMarketComponent,
    HrmfintechTalentacqComponent,
    HrmfintechTalentmanagementComponent,
    HrmfintechOraganizationBudgetComponent,
    HrmfintechConflictComponent,
    HrmfintechDecisionchecklistComponent,
    Hrmfintechpopup,
    HrmfintechReportComponent,
    HrmfintechFoodforthoughtComponent
  ]
})
export class HrmFintechModule { } 
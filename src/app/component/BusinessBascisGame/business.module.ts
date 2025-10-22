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

// Import business components
import { BusinessBascisHeaderComponent } from '../BusinessBascisGame/business-bascis-header/business-bascis-header.component';
import { IntroductionComponent } from '../BusinessBascisGame/introduction/introduction.component';
import { BusinessbascislocationComponent } from '../BusinessBascisGame/businessbascislocation/businessbascislocation.component';
import { BusinessbascismarketComponent } from '../BusinessBascisGame/businessbascismarket/businessbascismarket.component';
import { BusinessbascisdemandComponent } from '../BusinessBascisGame/businessbascisdemand/businessbascisdemand.component';
import { BusinessbascisinvestmentsComponent } from '../BusinessBascisGame/businessbascisinvestments/businessbascisinvestments.component';
import { BusinessbascismarketingComponent } from '../BusinessBascisGame/businessbascismarketing/businessbascismarketing.component';
import { BusinessbascisreportComponent } from '../BusinessBascisGame/businessbascisreport/businessbascisreport.component';
import { BusinessbascisfeedbackComponent } from '../BusinessBascisGame/businessbascisfeedback/businessbascisfeedback.component';
import { BusinessbasicFoodforthoughtComponent } from '../BusinessBascisGame/businessbasicfoodforthought/businessbasicfoodforthought.component';
import { BusinessbascisdecisionchecklistComponent, DecisionchecklistpopupComponent } from '../BusinessBascisGame/businessbascisdecisionchecklist/businessbascisdecisionchecklist.component';

const routes: Routes = [
  { path: 'component', component: BusinessBascisHeaderComponent },
 
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
    BusinessBascisHeaderComponent,
    IntroductionComponent,
    BusinessbascislocationComponent,
    BusinessbascismarketComponent,
    BusinessbascisdemandComponent,
    BusinessbascisinvestmentsComponent,
    BusinessbascismarketingComponent,
    BusinessbascisreportComponent,
    BusinessbascisfeedbackComponent,
    BusinessbasicFoodforthoughtComponent,
    BusinessbascisdecisionchecklistComponent,
    DecisionchecklistpopupComponent,
  ]
})
export class BusinessModule { } 
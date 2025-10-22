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

import { FoodforthoughtportfoliomanagementComponent } from '../portfoliomanagementnew/foodforthoughtportfoliomanagement/foodforthoughtportfoliomanagement.component';
import { PortfoliointroductionComponent } from '../portfoliomanagementnew/portfoliointroduction/portfoliointroduction.component';
import { PortfoliomanagementnewheaderComponent } from '../portfoliomanagementnew/portfoliomanagementnewheader/portfoliomanagementnewheader.component';
import { PortfoliomanagementnewreportComponent } from '../portfoliomanagementnew/portfoliomanagementnewreport/portfoliomanagementnewreport.component';
import { PortfoliomanagementnewsynopsisComponent } from '../portfoliomanagementnew/portfoliomanagementnewsynopsis/portfoliomanagementnewsynopsis.component';
import { PortfolionewdecisionchecklistComponent, Portfolionewdecisionchecklistpopup } from '../portfoliomanagementnew/portfolionewdecisionchecklist/portfolionewdecisionchecklist.component';
import { PortfolionewmanagementphaseoneComponent } from '../portfoliomanagementnew/portfolionewmanagementphaseone/portfolionewmanagementphaseone.component';
import { PortfolionewmanagementphasethreeComponent } from '../portfoliomanagementnew/portfolionewmanagementphasethree/portfolionewmanagementphasethree.component';
import { PortfolionewmanagementphasetwoComponent } from '../portfoliomanagementnew/portfolionewmanagementphasetwo/portfolionewmanagementphasetwo.component';
import { PortfolionewmarketComponent } from '../portfoliomanagementnew/portfolionewmarket/portfolionewmarket.component';

const routes: Routes = [
  { path: 'component', component: PortfoliomanagementnewheaderComponent },
 
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
    // CommonComponentsModule
    PortfoliointroductionComponent,
    FoodforthoughtportfoliomanagementComponent,
    PortfoliomanagementnewheaderComponent,
    PortfolionewmarketComponent,
    PortfolionewmanagementphaseoneComponent,
    PortfolionewmanagementphasetwoComponent,
    PortfolionewmanagementphasethreeComponent,
    PortfolionewdecisionchecklistComponent,
    Portfolionewdecisionchecklistpopup,
    PortfoliomanagementnewsynopsisComponent,
    PortfoliomanagementnewreportComponent,
  ]
})
export class PortfolioModule { } 
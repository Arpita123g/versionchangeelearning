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
import { FoodforthoughtComponent } from '../../common/foodforthought/foodforthought.component';

import { SalestargetdecisionchecklistComponent, SalesTargetpopuppopupComponent } from '../salesandtargetnewui/salestargetdecisionchecklist/salestargetdecisionchecklist.component';
import { SalestargetfoodforthoughtComponent } from '../salesandtargetnewui/salestargetfoodforthought/salestargetfoodforthought.component';
import { SalestargetheaderComponent } from '../salesandtargetnewui/salestargetheader/salestargetheader.component';
import { SalestargetinformationsearchComponent } from '../salesandtargetnewui/salestargetinformationsearch/salestargetinformationsearch.component';
import { SalestargetintroductionComponent } from '../salesandtargetnewui/salestargetintroduction/salestargetintroduction.component';
import { SalestargetmarketComponent } from '../salesandtargetnewui/salestargetmarket/salestargetmarket.component';
import { SalestargetreportComponent } from '../salesandtargetnewui/salestargetreport/salestargetreport.component';
import { SalestargetsalescompositionComponent } from '../salesandtargetnewui/salestargetsalescomposition/salestargetsalescomposition.component';
import { SalestargetsalesdevelopmentComponent } from '../salesandtargetnewui/salestargetsalesdevelopment/salestargetsalesdevelopment.component';
import { SalestargetsalesplanningComponent } from '../salesandtargetnewui/salestargetsalesplanning/salestargetsalesplanning.component';
import { SalestargetsynopsisComponent } from '../salesandtargetnewui/salestargetsynopsis/salestargetsynopsis.component';

const routes: Routes = [
  { path: 'component', component: SalestargetheaderComponent },
 
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
    FoodforthoughtComponent,
    SalestargetintroductionComponent,
    SalestargetmarketComponent, SalestargetheaderComponent,
    SalestargetinformationsearchComponent, SalestargetsalesplanningComponent,
    SalestargetsalescompositionComponent, SalestargetsalesdevelopmentComponent,
    SalestargetdecisionchecklistComponent, SalestargetreportComponent, SalestargetfoodforthoughtComponent,
    SalestargetsynopsisComponent, SalesTargetpopuppopupComponent,

  ]
})
export class SalesAndTargetModule { } 
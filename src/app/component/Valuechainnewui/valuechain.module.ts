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

import { ValuechaindecisinchecklistPopup, ValuechaindecisionchecklistComponent } from '../Valuechainnewui/valuechaindecisionchecklist/valuechaindecisionchecklist.component';
import { ValuechaindemandComponent } from '../Valuechainnewui/valuechaindemand/valuechaindemand.component';
import { ValuechainfinanceComponent } from '../Valuechainnewui/valuechainfinance/valuechainfinance.component';
import { ValuechainfoodforthoughtComponent } from '../Valuechainnewui/valuechainfoodforthought/valuechainfoodforthought.component';
import { ValuechainheaderComponent } from '../Valuechainnewui/valuechainheader/valuechainheader.component';
import { ValuechainintroductionComponent } from '../Valuechainnewui/valuechainintroduction/valuechainintroduction.component';
import { ValuechainmarkeetingComponent } from '../Valuechainnewui/valuechainmarkeeting/valuechainmarkeeting.component';
import { ValuechainmarketComponent } from '../Valuechainnewui/valuechainmarket/valuechainmarket.component';
import { ValuechainproductionComponent } from '../Valuechainnewui/valuechainproduction/valuechainproduction.component';
import { ValuechainreportComponent } from '../Valuechainnewui/valuechainreport/valuechainreport.component';
import { ValuechainsynopsisComponent } from '../Valuechainnewui/valuechainsynopsis/valuechainsynopsis.component';

const routes: Routes = [
  { path: 'component', component: ValuechainheaderComponent },
 
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
    ValuechainheaderComponent,
    ValuechainfoodforthoughtComponent,
    ValuechainintroductionComponent,
    ValuechainmarketComponent,
    ValuechaindemandComponent,
    ValuechainproductionComponent,
    ValuechainmarkeetingComponent,
    ValuechainfinanceComponent,
    ValuechaindecisionchecklistComponent,
    ValuechainreportComponent,
    ValuechainsynopsisComponent,
    ValuechaindecisinchecklistPopup
  ]
})
export class ValueChainModule { } 
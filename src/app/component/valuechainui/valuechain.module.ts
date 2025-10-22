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

import { ValuechaindecisinchecklistPopup, ValuechaindecisionchecklistComponent } from '../valuechainui/valuechaindecisionchecklist/valuechaindecisionchecklist.component';
import { ValuechaindemandComponent } from '../valuechainui/valuechaindemand/valuechaindemand.component';
import { ValuechainfinanceComponent } from '../valuechainui/valuechainfinance/valuechainfinance.component';
import { ValuechainfoodforthoughtComponent } from '../valuechainui/valuechainfoodforthought/valuechainfoodforthought.component';
import { ValuechainheaderComponent } from '../valuechainui/valuechainheader/valuechainheader.component';
import { ValuechainintroductionComponent } from '../valuechainui/valuechainintroduction/valuechainintroduction.component';
import { ValuechainmarkeetingComponent } from '../valuechainui/valuechainmarkeeting/valuechainmarkeeting.component';
import { ValuechainmarketComponent } from '../valuechainui/valuechainmarket/valuechainmarket.component';
import { ValuechainproductionComponent } from '../valuechainui/valuechainproduction/valuechainproduction.component';
import { ValuechainreportComponent } from '../valuechainui/valuechainreport/valuechainreport.component';
import { ValuechainsynopsisComponent } from '../valuechainui/valuechainsynopsis/valuechainsynopsis.component';

const routes: Routes = [
  { path: 'component', component: ValuechainheaderComponent },

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
    // Standalone components
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
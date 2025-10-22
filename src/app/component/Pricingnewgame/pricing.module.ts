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

import { PricingadaptComponent } from '../Pricingnewgame/pricingadapt/pricingadapt.component';
import { PricingdecisionchecklistComponent, PricingpopupComponent } from '../Pricingnewgame/pricingdecisionchecklist/pricingdecisionchecklist.component';
import { PricingfoodforthoughtComponent } from '../Pricingnewgame/pricingfoodforthought/pricingfoodforthought.component';
import { PricingheaderComponent } from '../Pricingnewgame/pricingheader/pricingheader.component';
import { PricinginitiateComponent } from '../Pricingnewgame/pricinginitiate/pricinginitiate.component';
import { PricinginnovateComponent } from '../Pricingnewgame/pricinginnovate/pricinginnovate.component';
import { PricingintroductionComponent } from '../Pricingnewgame/pricingintroduction/pricingintroduction.component';
import { PricingmarketComponent } from '../Pricingnewgame/pricingmarket/pricingmarket.component';
import { PricingreportComponent } from '../Pricingnewgame/pricingreport/pricingreport.component';
import { PricingsynopsisComponent } from '../Pricingnewgame/pricingsynopsis/pricingsynopsis.component';

const routes: Routes = [
  { path: 'component', component: PricingheaderComponent },
 
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
    PricingheaderComponent,
    PricingfoodforthoughtComponent,
    PricingdecisionchecklistComponent, PricingpopupComponent,
    PricingreportComponent,
    PricingsynopsisComponent,
    PricingintroductionComponent,
    PricingmarketComponent,
    PricinginitiateComponent,
    PricinginnovateComponent,
    PricingadaptComponent,
  ]
})
export class PricingModule { } 
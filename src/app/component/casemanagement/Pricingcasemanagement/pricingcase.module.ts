import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';

// Import common module
import { CommonComponentsModule } from '../../../common/common.module';

import { PricingcaseadaptComponent } from '../Pricingcasemanagement/pricingcaseadapt/pricingcaseadapt.component';
import { PricingcasefoodforthoughtComponent } from '../Pricingcasemanagement/pricingcasefoodforthought/pricingcasefoodforthought.component';
import { PricingcaseheaderComponent } from '../Pricingcasemanagement/pricingcaseheader/pricingcaseheader.component';
import { PricingcaseinitiateComponent } from '../Pricingcasemanagement/pricingcaseinitiate/pricingcaseinitiate.component';
import { PricingcaseinnovateComponent } from '../Pricingcasemanagement/pricingcaseinnovate/pricingcaseinnovate.component';
import { PricingcasemarketComponent } from '../Pricingcasemanagement/pricingcasemarket/pricingcasemarket.component';
import { PricingcasemoduleComponent } from '../Pricingcasemanagement/pricingcasemodule/pricingcasemodule.component';

const routes: Routes = [
  { path: 'component', component: PricingcaseheaderComponent },
 
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
    PricingcaseheaderComponent,
    PricingcasemarketComponent,
    PricingcaseinitiateComponent,
    PricingcaseinnovateComponent,
    PricingcaseadaptComponent,
    PricingcasefoodforthoughtComponent,
    PricingcasemoduleComponent,
  ],
  providers: [DecimalPipe]
})
export class PricingcaseModule { } 
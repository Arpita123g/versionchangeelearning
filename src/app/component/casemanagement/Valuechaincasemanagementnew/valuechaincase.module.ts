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

import { ValuechaincasedemandComponent } from '../Valuechaincasemanagementnew/valuechaincasedemand/valuechaincasedemand.component';
import { ValuechaincasefinanceComponent } from '../Valuechaincasemanagementnew/valuechaincasefinance/valuechaincasefinance.component';
import { ValuechaincasefoodforthoughtComponent } from '../Valuechaincasemanagementnew/valuechaincasefoodforthought/valuechaincasefoodforthought.component';
import { ValuechaincaseheaderComponent } from '../Valuechaincasemanagementnew/valuechaincaseheader/valuechaincaseheader.component';
import { ValuechaincasemarketComponent } from '../Valuechaincasemanagementnew/valuechaincasemarket/valuechaincasemarket.component';
import { ValuechaincasemarketingComponent } from '../Valuechaincasemanagementnew/valuechaincasemarketing/valuechaincasemarketing.component';
import { ValuechaincasemoduleComponent } from '../Valuechaincasemanagementnew/valuechaincasemodule/valuechaincasemodule.component';
import { ValuechaincaseproductionComponent } from '../Valuechaincasemanagementnew/valuechaincaseproduction/valuechaincaseproduction.component';

const routes: Routes = [
  { path: 'component', component: ValuechaincaseheaderComponent },
 
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
    ValuechaincaseheaderComponent,
    ValuechaincasefoodforthoughtComponent,
    ValuechaincasemarketComponent,
    ValuechaincasedemandComponent,
    ValuechaincaseproductionComponent,
    ValuechaincasemarketingComponent,
    ValuechaincasefinanceComponent,
    ValuechaincasemoduleComponent,
    // CommonComponentsModule
  ],
  providers: [DecimalPipe]
})
export class ValueChaincaseNewModule { } 
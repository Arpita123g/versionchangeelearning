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

import { ValuechaincasedemandComponent } from '../Valuechaincasemanagement/valuechaincasedemand/valuechaincasedemand.component';
import { ValuechaincasefinanceComponent } from '../Valuechaincasemanagement/valuechaincasefinance/valuechaincasefinance.component';
import { ValuechaincasefoodforthoughtComponent } from '../Valuechaincasemanagement/valuechaincasefoodforthought/valuechaincasefoodforthought.component';
import { ValuechaincaseheaderComponent } from '../Valuechaincasemanagement/valuechaincaseheader/valuechaincaseheader.component';
import { ValuechaincasemarketComponent } from '../Valuechaincasemanagement/valuechaincasemarket/valuechaincasemarket.component';
import { ValuechaincasemarketingComponent } from '../Valuechaincasemanagement/valuechaincasemarketing/valuechaincasemarketing.component';
import { ValuechaincasemoduleComponent } from '../Valuechaincasemanagement/valuechaincasemodule/valuechaincasemodule.component';
import { ValuechaincaseproductionComponent } from '../Valuechaincasemanagement/valuechaincaseproduction/valuechaincaseproduction.component';

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
    // CommonComponentsModule,
    // Standalone header component
    ValuechaincaseheaderComponent,
    ValuechaincasefoodforthoughtComponent,
    ValuechaincasemarketComponent,
    ValuechaincasedemandComponent,
    ValuechaincaseproductionComponent,
    ValuechaincasemarketingComponent,
    ValuechaincasefinanceComponent,
    ValuechaincasemoduleComponent,
  ],
  providers: [DecimalPipe]
})
export class ValueChaincaseModule { } 
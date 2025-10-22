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

import { StpcaseheaderComponent } from '../Stpcasemanagement/stpcaseheader/stpcaseheader.component';
import { StpcasemarketComponent } from '../Stpcasemanagement/stpcasemarket/stpcasemarket.component';
import { Stpcasephase1Component } from '../Stpcasemanagement/stpcasephase1/stpcasephase1.component';
import { Stpcasephase2Component } from '../Stpcasemanagement/stpcasephase2/stpcasephase2.component';
import { Stpcasephase3Component } from '../Stpcasemanagement/stpcasephase3/stpcasephase3.component';
import { StpcasefoodforthoughtComponent } from '../Stpcasemanagement/stpcasefoodforthought/stpcasefoodforthought.component';
import { StpcasemoduleComponent } from '../Stpcasemanagement/stpcasemodule/stpcasemodule.component';
import { StpcaseinformationsearchComponent } from '../Stpcasemanagement/stpcaseinformationsearch/stpcaseinformationsearch.component';

const routes: Routes = [
  { path: 'component', component: StpcaseheaderComponent },
 
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
    // Standalone header
    StpcaseheaderComponent,
    StpcasemarketComponent,
    Stpcasephase1Component,
    Stpcasephase2Component,
    Stpcasephase3Component,
    StpcasefoodforthoughtComponent,
    StpcasemoduleComponent,
    StpcaseinformationsearchComponent,
  ],
  providers: [DecimalPipe]
})
export class StpGamecaseModule { } 
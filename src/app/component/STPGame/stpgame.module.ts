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

import { StpgameheaderComponent } from '../STPGame/stpgameheader/stpgameheader.component';
import { StpgameintroductionComponent } from '../STPGame/stpgameintroduction/stpgameintroduction.component';
import { StpgamemarketComponent } from '../STPGame/stpgamemarket/stpgamemarket.component';
import { StpgameinformationsearchComponent } from '../STPGame/stpgameinformationsearch/stpgameinformationsearch.component';
import { Stpgamephase1Component } from '../STPGame/stpgamephase1/stpgamephase1.component';
import { Stpgamephase2Component } from '../STPGame/stpgamephase2/stpgamephase2.component';
import { Stpgamephase3Component } from '../STPGame/stpgamephase3/stpgamephase3.component';
import { StpgamedecisionchecklistComponent, StpgamedecisionchecklistPopup } from '../STPGame/stpgamedecisionchecklist/stpgamedecisionchecklist.component';
import { StpgamereportComponent } from '../STPGame/stpgamereport/stpgamereport.component';
import { StpgamesynopsisComponent } from '../STPGame/stpgamesynopsis/stpgamesynopsis.component';
import { StpgamefoodforthoughtComponent } from '../STPGame/stpgamefoodforthought/stpgamefoodforthought.component';

const routes: Routes = [
  { path: 'component', component: StpgameheaderComponent },
 
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
    StpgameheaderComponent,
    StpgameintroductionComponent,
    StpgamemarketComponent,
    StpgameinformationsearchComponent,
    Stpgamephase1Component,
    Stpgamephase2Component,
    Stpgamephase3Component,
    StpgamedecisionchecklistComponent,
    StpgamereportComponent,
    StpgamesynopsisComponent,
    StpgamefoodforthoughtComponent,
  ]
})
export class StpGametModule { } 
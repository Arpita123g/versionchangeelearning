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

import { HrpgameheaderComponent } from '../HRPNewGame/hrpgameheader/hrpgameheader.component';
import { HrpgamefoodforthoughtComponent } from '../HRPNewGame/hrpgamefoodforthought/hrpgamefoodforthought.component';
import { HrpgamesynopsisComponent } from '../HRPNewGame/hrpgamesynopsis/hrpgamesynopsis.component';
import { HrpgamereportComponent } from '../HRPNewGame/hrpgamereport/hrpgamereport.component';
import { HrpgamedecisionchecklistComponent, HrpgamedecisionchecklistPopup } from '../HRPNewGame/hrpgamedecisionchecklist/hrpgamedecisionchecklist.component';
import { HrpgameintroductionComponent } from '../HRPNewGame/hrpgameintroduction/hrpgameintroduction.component';
import { HrpgamemarketComponent } from '../HRPNewGame/hrpgamemarket/hrpgamemarket.component';
import { HrpgamedemandforecastingComponent } from '../HRPNewGame/hrpgamedemandforecasting/hrpgamedemandforecasting.component';
import { HrpgameimplementationComponent } from '../HRPNewGame/hrpgameimplementation/hrpgameimplementation.component';
import { HrpgamesupplyforecastingComponent } from '../HRPNewGame/hrpgamesupplyforecasting/hrpgamesupplyforecasting.component';
import { HrpgameanalysisandplanningComponent } from '../HRPNewGame/hrpgameanalysisandplanning/hrpgameanalysisandplanning.component';

const routes: Routes = [
  { path: 'component', component: HrpgameheaderComponent },
 
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
    HrpgameheaderComponent,
    HrpgamefoodforthoughtComponent,
    HrpgamesynopsisComponent,
    HrpgamereportComponent,
    HrpgamedecisionchecklistComponent,
    HrpgameintroductionComponent,
    HrpgamemarketComponent,
    HrpgamedemandforecastingComponent,
    HrpgameimplementationComponent,
    HrpgameanalysisandplanningComponent,
    HrpgamesupplyforecastingComponent,
  ]
})
export class HrpGameModule { } 
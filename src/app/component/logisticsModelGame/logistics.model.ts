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

import { LogisticsmodegameHeaderComponent } from '../logisticsModelGame/logisticsmodegame-header/logisticsmodegame-header.component';
import { LogisticsmodegamedecisionchecklistComponent, LogisticsmodegamepopupComponent } from '../logisticsModelGame/logisticsmodegamedecisionchecklist/logisticsmodegamedecisionchecklist.component';
import { LogisticsmodegamefoodforthoughtComponent } from '../logisticsModelGame/logisticsmodegamefoodforthought/logisticsmodegamefoodforthought.component';
import { LogisticsmodegameinboundComponent } from '../logisticsModelGame/logisticsmodegameinbound/logisticsmodegameinbound.component';
import { LogisticsmodegameintroductionComponent } from '../logisticsModelGame/logisticsmodegameintroduction/logisticsmodegameintroduction.component';
import { LogisticsmodegamemarketComponent } from '../logisticsModelGame/logisticsmodegamemarket/logisticsmodegamemarket.component';
import { LogisticsmodegameoutboundComponent } from '../logisticsModelGame/logisticsmodegameoutbound/logisticsmodegameoutbound.component';
import { LogisticsmodegamereportComponent } from '../logisticsModelGame/logisticsmodegamereport/logisticsmodegamereport.component';
import { LogisticsmodegameroutesandtechnologyComponent } from '../logisticsModelGame/logisticsmodegameroutesandtechnology/logisticsmodegameroutesandtechnology.component';
import { LogisticsmodegamesynopsisComponent } from '../logisticsModelGame/logisticsmodegamesynopsis/logisticsmodegamesynopsis.component';
import { LogisticsmodegamewarehouseComponent } from '../logisticsModelGame/logisticsmodegamewarehouse/logisticsmodegamewarehouse.component';

const routes: Routes = [
  { path: 'component', component: LogisticsmodegameHeaderComponent },
 
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
    LogisticsmodegameintroductionComponent,
    LogisticsmodegamemarketComponent,
    LogisticsmodegameinboundComponent,
    LogisticsmodegamewarehouseComponent,
    LogisticsmodegameroutesandtechnologyComponent,
    LogisticsmodegameoutboundComponent,
    LogisticsmodegamedecisionchecklistComponent,
    LogisticsmodegamereportComponent,
    LogisticsmodegamesynopsisComponent,
    LogisticsmodegameHeaderComponent,
    LogisticsmodegamefoodforthoughtComponent,
    // CommonComponentsModule
  ]
})
export class LogisticstModule { } 
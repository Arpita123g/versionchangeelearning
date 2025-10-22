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
import { CommonComponentsModule } from '../../../common/common.module';

import { LogisticscasefoodforthoughtComponent } from '../logisticsmodelgamecasemanagement/logisticscasefoodforthought/logisticscasefoodforthought.component';
import { LogisticscaseheaderComponent } from '../logisticsmodelgamecasemanagement/logisticscaseheader/logisticscaseheader.component';
import { LogisticscaseinboundComponent } from '../logisticsmodelgamecasemanagement/logisticscaseinbound/logisticscaseinbound.component';
import { LogisticscasemarketComponent } from '../logisticsmodelgamecasemanagement/logisticscasemarket/logisticscasemarket.component';
import { LogisticscasemoduleComponent } from '../logisticsmodelgamecasemanagement/logisticscasemodule/logisticscasemodule.component';
import { LogisticscaseoutboundComponent } from '../logisticsmodelgamecasemanagement/logisticscaseoutbound/logisticscaseoutbound.component';
import { LogisticscaseroutesandtechnologyComponent } from '../logisticsmodelgamecasemanagement/logisticscaseroutesandtechnology/logisticscaseroutesandtechnology.component';
import { LogisticscasewarehouseComponent } from '../logisticsmodelgamecasemanagement/logisticscasewarehouse/logisticscasewarehouse.component';

const routes: Routes = [
  { path: 'component', component: LogisticscaseheaderComponent },
 
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
    LogisticscaseheaderComponent,
    LogisticscaseinboundComponent,
    LogisticscasemarketComponent,
    LogisticscasewarehouseComponent,
    LogisticscaseroutesandtechnologyComponent,
    LogisticscaseoutboundComponent,
    LogisticscasefoodforthoughtComponent,
    LogisticscasemoduleComponent,
  ]
})
export class LogisticcaseModule { } 
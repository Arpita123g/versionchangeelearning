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

import { OrderingbasicsheaderComponent } from '../OrderingBasics/orderingbasicsheader/orderingbasicsheader.component';
import { OrderingbasicsintroductionComponent } from '../OrderingBasics/orderingbasicsintroduction/orderingbasicsintroduction.component';
import { OrderingbasicsmarketComponent } from '../OrderingBasics/orderingbasicsmarket/orderingbasicsmarket.component';
import { Orderingbasicsphase1Component } from '../OrderingBasics/orderingbasicsphase1/orderingbasicsphase1.component';
import { Orderingbasicsp1inventorylevelComponent } from '../OrderingBasics/orderingbasicsp1inventorylevel/orderingbasicsp1inventorylevel.component';
import { Orderingbasicsphase2Component } from '../OrderingBasics/orderingbasicsphase2/orderingbasicsphase2.component';
import { Orderingbasicsp2inventorylevelComponent } from '../OrderingBasics/orderingbasicsp2inventorylevel/orderingbasicsp2inventorylevel.component';
import { OrderingbasicsdecisionchecklistComponent, Orderingbasicsdecisionpopup } from '../OrderingBasics/orderingbasicsdecisionchecklist/orderingbasicsdecisionchecklist.component';
import { OrderingbasicsreportComponent } from '../OrderingBasics/orderingbasicsreport/orderingbasicsreport.component';
import { OrderingbasicssynopsisComponent } from '../OrderingBasics/orderingbasicssynopsis/orderingbasicssynopsis.component';
import { OrderingbasicsfoodforthoughtComponent } from '../OrderingBasics/orderingbasicsfoodforthought/orderingbasicsfoodforthought.component';

const routes: Routes = [
  { path: 'component', component: OrderingbasicsheaderComponent },
 
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
    OrderingbasicsheaderComponent,
    OrderingbasicsintroductionComponent,
    OrderingbasicsmarketComponent,
    Orderingbasicsphase1Component,
    Orderingbasicsp1inventorylevelComponent,
    Orderingbasicsphase2Component,
    Orderingbasicsp2inventorylevelComponent,
    OrderingbasicsdecisionchecklistComponent,
    OrderingbasicsreportComponent,
    OrderingbasicssynopsisComponent,
    OrderingbasicsfoodforthoughtComponent,
    // Orderingbasicsdecisionpopup
  ]
})
export class OrderingModule { } 
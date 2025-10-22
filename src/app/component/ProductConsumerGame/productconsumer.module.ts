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

import { ConsumerconceptualizationComponent } from '../ProductConsumerGame/consumerconceptualization/consumerconceptualization.component';
import { ConsumercraftingComponent } from '../ProductConsumerGame/consumercrafting/consumercrafting.component';
import { ConsumerdecisionchecklistComponent, ConsumerdecisionchecklistpopupComponent } from '../ProductConsumerGame/consumerdecisionchecklist/consumerdecisionchecklist.component';
import { ConsumergameheaderComponent } from '../ProductConsumerGame/consumergameheader/consumergameheader.component';
import { ConsumergameintroductionComponent } from '../ProductConsumerGame/consumergameintroduction/consumergameintroduction.component';
import { ConsumermarketComponent } from '../ProductConsumerGame/consumermarket/consumermarket.component';
import { ConsumerreportComponent } from '../ProductConsumerGame/consumerreport/consumerreport.component';
import { ConsumersynopsisComponent } from '../ProductConsumerGame/consumersynopsis/consumersynopsis.component';
import { ConsumertargetComponent } from '../ProductConsumerGame/consumertarget/consumertarget.component';
import { FoodforthoughtConsumerComponent } from '../ProductConsumerGame/foodforthoughtconsumer/foodforthoughtconsumer.component';
import { MarketresearchComponent } from '../ProductConsumerGame/marketresearch/marketresearch.component';

const routes: Routes = [
  { path: 'component', component: ConsumergameheaderComponent },
 
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
    ConsumertargetComponent,
    MarketresearchComponent,
    ConsumerconceptualizationComponent,
    ConsumercraftingComponent,
    ConsumerdecisionchecklistComponent,
    //  ConsumerdecisionchecklistpopupComponent,
    ConsumerreportComponent,
    ConsumersynopsisComponent,
    ConsumergameheaderComponent,
    ConsumergameintroductionComponent,
    ConsumermarketComponent,
    FoodforthoughtConsumerComponent
  ]
})
export class ProductConsumerModule { } 
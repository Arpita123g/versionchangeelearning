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

import { ConsumerconceptualizationComponent } from '../ProductConsumerNewGame/consumerconceptualization/consumerconceptualization.component';
import { ConsumercraftingComponent } from '../ProductConsumerNewGame/consumercrafting/consumercrafting.component';
import { ConsumerdecisionchecklistComponent, ConsumerdecisionchecklistpopupComponent } from '../ProductConsumerNewGame/consumerdecisionchecklist/consumerdecisionchecklist.component';
import { ConsumergameheaderComponent } from '../ProductConsumerNewGame/consumergameheader/consumergameheader.component';
import { ConsumergameintroductionComponent } from '../ProductConsumerNewGame/consumergameintroduction/consumergameintroduction.component';
import { ConsumermarketComponent } from '../ProductConsumerNewGame/consumermarket/consumermarket.component';
import { ConsumerreportComponent } from '../ProductConsumerNewGame/consumerreport/consumerreport.component';
import { ConsumersynopsisComponent } from '../ProductConsumerNewGame/consumersynopsis/consumersynopsis.component';
import { ConsumertargetComponent } from '../ProductConsumerNewGame/consumertarget/consumertarget.component';
import { FoodforthoughtConsumerComponent } from '../ProductConsumerNewGame/foodforthoughtconsumer/foodforthoughtconsumer.component';
import { MarketresearchComponent } from '../ProductConsumerNewGame/marketresearch/marketresearch.component';

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
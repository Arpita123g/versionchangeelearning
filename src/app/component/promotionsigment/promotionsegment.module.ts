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

import { PromotionsigmentnewcampaignsComponent } from '../promotionsigment/promotionsigmentnewcampaigns/promotionsigmentnewcampaigns.component';
import { PromotionsigmentnewchannelsComponent } from '../promotionsigment/promotionsigmentnewchannels/promotionsigmentnewchannels.component';
import { PromotionsigmentnewcommunicationmixComponent } from '../promotionsigment/promotionsigmentnewcommunicationmix/promotionsigmentnewcommunicationmix.component';
import { PromotionsigmentnewdecisionchecklistComponent, PromotionsigmentnewpopupComponent } from '../promotionsigment/promotionsigmentnewdecisionchecklist/promotionsigmentnewdecisionchecklist.component';
import { PromotionsigmentnewfoodforthoughtComponent } from '../promotionsigment/promotionsigmentnewfoodforthought/promotionsigmentnewfoodforthought.component';
import { PromotionsigmentnewheaderComponent } from '../promotionsigment/promotionsigmentnewheader/promotionsigmentnewheader.component';
import { PromotionsigmentnewintroductionComponent } from '../promotionsigment/promotionsigmentnewintroduction/promotionsigmentnewintroduction.component';
import { PromotionsigmentnewmarketComponent } from '../promotionsigment/promotionsigmentnewmarket/promotionsigmentnewmarket.component';
import { PromotionsigmentnewmarketresearchComponent } from '../promotionsigment/promotionsigmentnewmarketresearch/promotionsigmentnewmarketresearch.component';
import { PromotionsigmentnewreportComponent } from '../promotionsigment/promotionsigmentnewreport/promotionsigmentnewreport.component';
import { PromotionsigmentnewsynopsisComponent } from '../promotionsigment/promotionsigmentnewsynopsis/promotionsigmentnewsynopsis.component';
import { FoodforthoughtComponent } from '../../common/foodforthought/foodforthought.component';

const routes: Routes = [
  { path: 'component', component: PromotionsigmentnewheaderComponent },

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
    PromotionsigmentnewmarketresearchComponent,
    PromotionsigmentnewcommunicationmixComponent,
    PromotionsigmentnewcampaignsComponent,
    PromotionsigmentnewchannelsComponent,
    PromotionsigmentnewdecisionchecklistComponent,
    PromotionsigmentnewpopupComponent,
    PromotionsigmentnewfoodforthoughtComponent,
    FoodforthoughtComponent,
    PromotionsigmentnewheaderComponent,
    PromotionsigmentnewintroductionComponent, PromotionsigmentnewmarketComponent,
    PromotionsigmentnewreportComponent,
    PromotionsigmentnewsynopsisComponent,
  ]
})
export class PromotionSegmentModule { } 
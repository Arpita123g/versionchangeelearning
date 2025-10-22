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
import { FoodforthoughtComponent } from '../../common/foodforthought/foodforthought.component';

import { PromotionsigmentnewcampaignsComponent } from '../promotionsigmentnew/promotionsigmentnewcampaigns/promotionsigmentnewcampaigns.component';
import { PromotionsigmentnewchannelsComponent } from '../promotionsigmentnew/promotionsigmentnewchannels/promotionsigmentnewchannels.component';
import { PromotionsigmentnewcommunicationmixComponent } from '../promotionsigmentnew/promotionsigmentnewcommunicationmix/promotionsigmentnewcommunicationmix.component';
import { PromotionsigmentnewdecisionchecklistComponent, PromotionsigmentnewpopupComponent } from '../promotionsigmentnew/promotionsigmentnewdecisionchecklist/promotionsigmentnewdecisionchecklist.component';
import { PromotionsigmentnewfoodforthoughtComponent } from '../promotionsigmentnew/promotionsigmentnewfoodforthought/promotionsigmentnewfoodforthought.component';
import { PromotionsigmentnewheaderComponent } from '../promotionsigmentnew/promotionsigmentnewheader/promotionsigmentnewheader.component';
import { PromotionsigmentnewintroductionComponent } from '../promotionsigmentnew/promotionsigmentnewintroduction/promotionsigmentnewintroduction.component';
import { PromotionsigmentnewmarketComponent } from '../promotionsigmentnew/promotionsigmentnewmarket/promotionsigmentnewmarket.component';
import { PromotionsigmentnewmarketresearchComponent } from '../promotionsigmentnew/promotionsigmentnewmarketresearch/promotionsigmentnewmarketresearch.component';
import { PromotionsigmentnewreportComponent } from '../promotionsigmentnew/promotionsigmentnewreport/promotionsigmentnewreport.component';
import { PromotionsigmentnewsynopsisComponent } from '../promotionsigmentnew/promotionsigmentnewsynopsis/promotionsigmentnewsynopsis.component';

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
    FoodforthoughtComponent,
    PromotionsigmentnewheaderComponent,
    PromotionsigmentnewintroductionComponent, PromotionsigmentnewmarketComponent,
    PromotionsigmentnewmarketresearchComponent, PromotionsigmentnewcommunicationmixComponent,
    PromotionsigmentnewcampaignsComponent, PromotionsigmentnewchannelsComponent,
    PromotionsigmentnewdecisionchecklistComponent, PromotionsigmentnewreportComponent,
    PromotionsigmentnewsynopsisComponent, PromotionsigmentnewpopupComponent, PromotionsigmentnewfoodforthoughtComponent,
   
  ]
})
export class PromotionSegmentModule { } 
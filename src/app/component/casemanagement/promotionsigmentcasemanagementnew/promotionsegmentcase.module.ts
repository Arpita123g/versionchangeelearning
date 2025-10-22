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

import { PromotionsigmentcasecampaignComponent } from '../promotionsigmentcasemanagementnew/promotionsigmentcasecampaign/promotionsigmentcasecampaign.component';
import { PromotionsigmentcasechannelComponent } from '../promotionsigmentcasemanagementnew/promotionsigmentcasechannel/promotionsigmentcasechannel.component';
import { PromotionsigmentcasecommunicationmixComponent } from '../promotionsigmentcasemanagementnew/promotionsigmentcasecommunicationmix/promotionsigmentcasecommunicationmix.component';
import { PromotionsigmentcasefoodforthoughtComponent } from '../promotionsigmentcasemanagementnew/promotionsigmentcasefoodforthought/promotionsigmentcasefoodforthought.component';
import { PromotionsigmentcaseheaderComponent } from '../promotionsigmentcasemanagementnew/promotionsigmentcaseheader/promotionsigmentcaseheader.component';
import { PromotionsigmentcasemarketComponent } from '../promotionsigmentcasemanagementnew/promotionsigmentcasemarket/promotionsigmentcasemarket.component';
import { PromotionsigmentcasemarketresearchComponent } from '../promotionsigmentcasemanagementnew/promotionsigmentcasemarketresearch/promotionsigmentcasemarketresearch.component';
import { PromotionsigmentcasemoduleComponent } from '../promotionsigmentcasemanagementnew/promotionsigmentcasemodule/promotionsigmentcasemodule.component';

const routes: Routes = [
  { path: 'component', component: PromotionsigmentcaseheaderComponent },
 
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
    PromotionsigmentcasefoodforthoughtComponent, PromotionsigmentcasemarketComponent,
    PromotionsigmentcasemarketresearchComponent, PromotionsigmentcasecommunicationmixComponent,
    PromotionsigmentcasecampaignComponent, PromotionsigmentcasechannelComponent,
    PromotionsigmentcasemoduleComponent, PromotionsigmentcaseheaderComponent
  ],
  providers: [DecimalPipe]
})
export class PromotionSegmentcaseNewModule { } 
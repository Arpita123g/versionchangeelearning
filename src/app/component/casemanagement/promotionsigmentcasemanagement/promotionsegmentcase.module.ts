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

import { PromotionsigmentcasecampaignComponent } from '../promotionsigmentcasemanagement/promotionsigmentcasecampaign/promotionsigmentcasecampaign.component';
import { PromotionsigmentcasechannelComponent } from '../promotionsigmentcasemanagement/promotionsigmentcasechannel/promotionsigmentcasechannel.component';
import { PromotionsigmentcasecommunicationmixComponent } from '../promotionsigmentcasemanagement/promotionsigmentcasecommunicationmix/promotionsigmentcasecommunicationmix.component';
import { PromotionsigmentcasefoodforthoughtComponent } from '../promotionsigmentcasemanagement/promotionsigmentcasefoodforthought/promotionsigmentcasefoodforthought.component';
import { PromotionsigmentcaseheaderComponent } from '../promotionsigmentcasemanagement/promotionsigmentcaseheader/promotionsigmentcaseheader.component';
import { PromotionsigmentcasemarketComponent } from '../promotionsigmentcasemanagement/promotionsigmentcasemarket/promotionsigmentcasemarket.component';
import { PromotionsigmentcasemarketresearchComponent } from '../promotionsigmentcasemanagement/promotionsigmentcasemarketresearch/promotionsigmentcasemarketresearch.component';
import { PromotionsigmentcasemoduleComponent } from '../promotionsigmentcasemanagement/promotionsigmentcasemodule/promotionsigmentcasemodule.component';

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
    // Standalone header
    PromotionsigmentcaseheaderComponent,
    PromotionsigmentcasemarketComponent,
    PromotionsigmentcasefoodforthoughtComponent,
    PromotionsigmentcasemarketresearchComponent,
    PromotionsigmentcasecommunicationmixComponent,
    PromotionsigmentcasecampaignComponent,
    PromotionsigmentcasechannelComponent,
    PromotionsigmentcasemoduleComponent
  ],
  providers: [DecimalPipe]
})
export class PromotionSegmentcaseModule { } 
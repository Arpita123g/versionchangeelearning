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

import { MergersacquisitioncaseassessmentComponent } from '../MergersAcquision/mergersacquisitioncaseassessment/mergersacquisitioncaseassessment.component';
import { MergersacquisitioncasefinancingComponent } from '../MergersAcquision/mergersacquisitioncasefinancing/mergersacquisitioncasefinancing.component';
import { MergersacquisitioncasefoodforthoughtComponent } from '../MergersAcquision/mergersacquisitioncasefoodforthought/mergersacquisitioncasefoodforthought.component';
import { MergersacquisitioncaseheaderComponent } from '../MergersAcquision/mergersacquisitioncaseheader/mergersacquisitioncaseheader.component';
import { MergersacquisitioncasemarketComponent } from '../MergersAcquision/mergersacquisitioncasemarket/mergersacquisitioncasemarket.component';
import { MergersacquisitioncasemoduleComponent } from '../MergersAcquision/mergersacquisitioncasemodule/mergersacquisitioncasemodule.component';
import { MergersacquisitioncasenegotiationComponent } from '../MergersAcquision/mergersacquisitioncasenegotiation/mergersacquisitioncasenegotiation.component';
import { MergersacquisitioncaseplanningComponent } from '../MergersAcquision/mergersacquisitioncaseplanning/mergersacquisitioncaseplanning.component';

const routes: Routes = [
  { path: 'component', component: MergersacquisitioncaseheaderComponent },
 
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
    MergersacquisitioncaseheaderComponent,
    MergersacquisitioncasemarketComponent,
    MergersacquisitioncasefoodforthoughtComponent,
    MergersacquisitioncasemoduleComponent,
    MergersacquisitioncaseassessmentComponent,
    MergersacquisitioncaseplanningComponent,
    MergersacquisitioncasefinancingComponent,
    MergersacquisitioncasenegotiationComponent,
  ],
  providers: [DecimalPipe]
})
export class MergersAcquisioncaseModule { } 
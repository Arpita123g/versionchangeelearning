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

import { InnovationintroductionComponent } from '../Innovation/innovationintroduction/innovationintroduction.component';
import { InnovationmarketComponent } from '../Innovation/innovationmarket/innovationmarket.component';
import { InnovationproductComponent } from '../Innovation/innovationproduct/innovationproduct.component';
import { InnovationmarketingComponent } from '../Innovation/innovationmarketing/innovationmarketing.component';
import { InnovationresourcesComponent } from '../Innovation/innovationresources/innovationresources.component';
import { InnovationheaderComponent } from '../Innovation/innovationheader/innovationheader.component';
import { InnovationcollaborationComponent } from '../Innovation/innovationcollaboration/innovationcollaboration.component';
import { InnovationdecisionchecklistComponent } from '../Innovation/innovationdecisionchecklist/innovationdecisionchecklist.component';
import { InnovationreportComponent } from '../Innovation/innovationreport/innovationreport.component';
import { InnovationsynopsisComponent } from '../Innovation/innovationsynopsis/innovationsynopsis.component';
import { InnovationfoodforthoughtComponent } from '../Innovation/innovationfoodforthought/innovationfoodforthought.component';

const routes: Routes = [
  { path: 'component', component: InnovationheaderComponent },
 
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
    // standalone components
    InnovationintroductionComponent,
    InnovationmarketComponent,
    InnovationproductComponent,
    InnovationmarketingComponent,
    InnovationresourcesComponent,
    InnovationheaderComponent,
    InnovationcollaborationComponent,
    InnovationdecisionchecklistComponent,
    InnovationreportComponent,
    InnovationsynopsisComponent,
    InnovationfoodforthoughtComponent,
  ],
  exports: [
    InnovationintroductionComponent,
    InnovationmarketComponent,
    InnovationproductComponent,
    InnovationmarketingComponent,
    InnovationresourcesComponent,
    InnovationheaderComponent,
    InnovationcollaborationComponent,
    InnovationdecisionchecklistComponent,
    InnovationreportComponent,
    InnovationsynopsisComponent,
    InnovationfoodforthoughtComponent,
  ]
})
export class InnovationModule { } 
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

import { InnovationcaseheaderComponent } from '../Innovationcasemanagement/innovationcaseheader/innovationcaseheader.component';
import { InnovationcasemarketoutlookComponent } from '../Innovationcasemanagement/innovationcasemarketoutlook/innovationcasemarketoutlook.component';
import { InnovationcaseproductComponent } from '../Innovationcasemanagement/innovationcaseproduct/innovationcaseproduct.component';
import { InnovationcasedevelopmentComponent } from '../Innovationcasemanagement/innovationcasedevelopment/innovationcasedevelopment.component';
import { InnovationcasemarketingComponent } from '../Innovationcasemanagement/innovationcasemarketing/innovationcasemarketing.component';
import { InnovationcasecollaborationComponent } from '../Innovationcasemanagement/innovationcasecollaboration/innovationcasecollaboration.component';
import { InnovationcasefoodforthoughtComponent } from '../Innovationcasemanagement/innovationcasefoodforthought/innovationcasefoodforthought.component';
import { InnovationcasemoduleComponent } from '../Innovationcasemanagement/innovationcasemodule/innovationcasemodule.component';

const routes: Routes = [
  { path: 'component', component: InnovationcaseheaderComponent },
 
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
    InnovationcaseheaderComponent,
    InnovationcasemarketoutlookComponent,
    InnovationcaseproductComponent,
    InnovationcasedevelopmentComponent,
    InnovationcasemarketingComponent,
    InnovationcasecollaborationComponent,
    InnovationcasefoodforthoughtComponent,
    InnovationcasemoduleComponent,
  ]
})
export class InnovationcaseModule { } 
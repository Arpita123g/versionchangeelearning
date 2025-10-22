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

import { HrpcaseheaderComponent } from '../Hrpcasemanagementnew/hrpcaseheader/hrpcaseheader.component';
import { HrpcasefoodforthoughtComponent } from '../Hrpcasemanagementnew/hrpcasefoodforthought/hrpcasefoodforthought.component';
import { HrpcasemoduleComponent } from '../Hrpcasemanagementnew/hrpcasemodule/hrpcasemodule.component';
import { HrpcasedemandforecastComponent } from '../Hrpcasemanagementnew/hrpcasedemandforecast/hrpcasedemandforecast.component';
import { HrpcasemarketComponent } from '../Hrpcasemanagementnew/hrpcasemarket/hrpcasemarket.component';
import { HrpcasesupplyforecastComponent } from '../Hrpcasemanagementnew/hrpcasesupplyforecast/hrpcasesupplyforecast.component';
import { HrpcaseanalysisandplanningComponent } from '../Hrpcasemanagementnew/hrpcaseanalysisandplanning/hrpcaseanalysisandplanning.component';
import { HrpcaseimplementationComponent } from '../Hrpcasemanagementnew/hrpcaseimplementation/hrpcaseimplementation.component';

const routes: Routes = [
  { path: 'component', component: HrpcaseheaderComponent },
 
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
    HrpcaseheaderComponent,
    HrpcasefoodforthoughtComponent,
    HrpcasemoduleComponent,
    HrpcasemarketComponent,
    HrpcasedemandforecastComponent,
    HrpcasesupplyforecastComponent,
    HrpcaseanalysisandplanningComponent,
    HrpcaseimplementationComponent,
  ]
})
export class HrpcaseNewModule { } 
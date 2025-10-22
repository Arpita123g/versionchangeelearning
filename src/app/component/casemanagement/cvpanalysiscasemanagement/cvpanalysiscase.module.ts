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

import { CvpcaseheaderComponent } from '../cvpanalysiscasemanagement/cvpcaseheader/cvpcaseheader.component';
import { CvpcaseindustryComponent } from '../cvpanalysiscasemanagement/cvpcaseindustry/cvpcaseindustry.component';
import { CvpcasemarketComponent } from '../cvpanalysiscasemanagement/cvpcasemarket/cvpcasemarket.component';
import { CvpcasemarketingComponent } from '../cvpanalysiscasemanagement/cvpcasemarketing/cvpcasemarketing.component';
import { CvpfoodforthoughtComponent } from '../cvpanalysiscasemanagement/cvpfoodforthought/cvpfoodforthought.component';
import { CvpmoduleComponent } from '../cvpanalysiscasemanagement/cvpmodule/cvpmodule.component';
import { CvpproductionComponent } from '../cvpanalysiscasemanagement/cvpproduction/cvpproduction.component';

const routes: Routes = [
  { path: 'component', component: CvpcaseheaderComponent },
 
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
    CvpcasemarketComponent,
    CvpcaseindustryComponent,
    CvpcaseheaderComponent,
    CvpcasemarketingComponent,
    CvpfoodforthoughtComponent,
    CvpproductionComponent,
    CvpmoduleComponent,
  ]
})
export class CvpAnalysiscaseModule { } 
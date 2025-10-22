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

import { CrmcaseheaderComponent } from '../Crmcasemanagement/crmcaseheader/crmcaseheader.component';
import { CrmcasemarketComponent } from '../Crmcasemanagement/crmcasemarket/crmcasemarket.component';
import { CrmcaseinformationComponent } from '../Crmcasemanagement/crmcaseinformation/crmcaseinformation.component';
import { CrmcaseleadComponent } from '../Crmcasemanagement/crmcaselead/crmcaselead.component';
import { CrmcasecommunicationComponent } from '../Crmcasemanagement/crmcasecommunication/crmcasecommunication.component';
import { CrmcaseresourceComponent } from '../Crmcasemanagement/crmcaseresource/crmcaseresource.component';
import { CrmcasefoodforthoughtComponent } from '../Crmcasemanagement/crmcasefoodforthought/crmcasefoodforthought.component';
import { CrmcasemoduleComponent } from '../Crmcasemanagement/crmcasemodule/crmcasemodule.component';

const routes: Routes = [
  { path: 'component', component: CrmcaseheaderComponent },
 
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
    CrmcaseheaderComponent,
    CrmcasemarketComponent,
    CrmcaseinformationComponent,
    CrmcaseleadComponent,
    CrmcasecommunicationComponent,
    CrmcaseresourceComponent,
    CrmcasefoodforthoughtComponent,
    CrmcasemoduleComponent,
  ]
})
export class CrmGameCaseModule { } 
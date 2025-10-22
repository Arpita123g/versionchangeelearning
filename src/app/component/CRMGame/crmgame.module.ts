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

import { CrmgameheaderComponent } from '../CRMGame/crmgameheader/crmgameheader.component';
import { CrmgamefoodforthoughtComponent } from '../CRMGame/crmgamefoodforthought/crmgamefoodforthought.component';
import { CrmgamedecisionchecklistComponent, CrmgamedecisionsubmitPopup } from '../CRMGame/crmgamedecisionchecklist/crmgamedecisionchecklist.component';
import { CrmgamereportComponent } from '../CRMGame/crmgamereport/crmgamereport.component';
import { CrmgamesynopsisComponent } from '../CRMGame/crmgamesynopsis/crmgamesynopsis.component';
import { CrmgameintroductionComponent } from '../CRMGame/crmgameintroduction/crmgameintroduction.component';
import { CrmgamemarketComponent } from '../CRMGame/crmgamemarket/crmgamemarket.component';
import { CrmgameinformationComponent } from '../CRMGame/crmgameinformation/crmgameinformation.component';
import { CrmgameleadComponent } from '../CRMGame/crmgamelead/crmgamelead.component';
import { CrmgamecommunicationComponent } from '../CRMGame/crmgamecommunication/crmgamecommunication.component';
import { CrmgameprocessComponent } from '../CRMGame/crmgameprocess/crmgameprocess.component';

const routes: Routes = [
  { path: 'component', component: CrmgameheaderComponent },
 
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
    CrmgameheaderComponent,
    CrmgamefoodforthoughtComponent,
    CrmgamedecisionchecklistComponent,
    CrmgamereportComponent,
    CrmgamesynopsisComponent,
    CrmgameintroductionComponent,
    CrmgamemarketComponent,
    CrmgameinformationComponent,
    CrmgameleadComponent,
    CrmgamecommunicationComponent,
    CrmgameprocessComponent,
  ]
})
export class CrmGameModule { } 
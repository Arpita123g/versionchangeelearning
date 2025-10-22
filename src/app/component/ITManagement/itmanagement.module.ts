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

import { ItmanagementheaderComponent } from '../ITManagement/itmanagementheader/itmanagementheader.component';
import { ItmanagementintroductionComponent } from '../ITManagement/itmanagementintroduction/itmanagementintroduction.component';
import { ItmanagementmarketComponent } from '../ITManagement/itmanagementmarket/itmanagementmarket.component';
import { ItmanagementsystemarchitectureComponent } from '../ITManagement/itmanagementsystemarchitecture/itmanagementsystemarchitecture.component';
import { ItmanagementsoftwaredevelopmentComponent } from '../ITManagement/itmanagementsoftwaredevelopment/itmanagementsoftwaredevelopment.component';
import { ItmanagementsecurityComponent } from '../ITManagement/itmanagementsecurity/itmanagementsecurity.component';
import { ItmanagementinnovationComponent } from '../ITManagement/itmanagementinnovation/itmanagementinnovation.component';
import { ItmanagementdecisionchecklistComponent, ItmanagementdecisionchecklistPopup } from '../ITManagement/itmanagementdecisionchecklist/itmanagementdecisionchecklist.component';
import { ItmanagementfoodforthoughtComponent } from '../ITManagement/itmanagementfoodforthought/itmanagementfoodforthought.component';
import { ItmanagementreportComponent } from '../ITManagement/itmanagementreport/itmanagementreport.component';
import { ItmanagementsynopsisComponent } from '../ITManagement/itmanagementsynopsis/itmanagementsynopsis.component';

const routes: Routes = [
  { path: 'component', component: ItmanagementheaderComponent },
 
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
    ItmanagementheaderComponent,
    ItmanagementintroductionComponent,
    ItmanagementmarketComponent,
    ItmanagementsystemarchitectureComponent,
    ItmanagementsoftwaredevelopmentComponent,
    ItmanagementsecurityComponent,
    ItmanagementinnovationComponent,
    ItmanagementdecisionchecklistComponent,
    ItmanagementfoodforthoughtComponent,
    ItmanagementreportComponent,
    ItmanagementsynopsisComponent,
  ]
})
export class ItManagementModule { } 
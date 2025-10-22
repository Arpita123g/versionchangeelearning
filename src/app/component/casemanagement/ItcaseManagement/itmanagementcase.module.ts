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

import { ItcasemanagementheaderComponent } from '../ItcaseManagement/itcasemanagementheader/itcasemanagementheader.component';
import { ItcasemanagementmarketoutlookComponent } from '../ItcaseManagement/itcasemanagementmarketoutlook/itcasemanagementmarketoutlook.component';
import { ItcasemanagementsystemarchitectureComponent } from '../ItcaseManagement/itcasemanagementsystemarchitecture/itcasemanagementsystemarchitecture.component';
import { ItcasemanagementsoftwaredevelopmentComponent } from '../ItcaseManagement/itcasemanagementsoftwaredevelopment/itcasemanagementsoftwaredevelopment.component';
import { ItcasemanagementsucurityComponent } from '../ItcaseManagement/itcasemanagementsucurity/itcasemanagementsucurity.component';
import { ItcasemanagementinnovationComponent } from '../ItcaseManagement/itcasemanagementinnovation/itcasemanagementinnovation.component';
import { ItcasemanagementfoodforthoughtComponent } from '../ItcaseManagement/itcasemanagementfoodforthought/itcasemanagementfoodforthought.component';
import { ItcasemanagementmoduleComponent } from '../ItcaseManagement/itcasemanagementmodule/itcasemanagementmodule.component';

const routes: Routes = [
  { path: 'component', component: ItcasemanagementheaderComponent },
 
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
    ItcasemanagementheaderComponent,
    ItcasemanagementmarketoutlookComponent,
    ItcasemanagementsystemarchitectureComponent,
    ItcasemanagementsoftwaredevelopmentComponent,
    ItcasemanagementsucurityComponent,
    ItcasemanagementinnovationComponent,
    ItcasemanagementfoodforthoughtComponent,
    ItcasemanagementmoduleComponent,
  ]
})
export class ItManagementcaseModule { } 
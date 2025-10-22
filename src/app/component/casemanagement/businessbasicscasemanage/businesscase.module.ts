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

// Import business components
import { BusinescasemanageheaderComponent } from '../businessbasicscasemanage/businescasemanageheader/businescasemanageheader.component';
import { BusinesdemandComponent } from '../businessbasicscasemanage/businesdemand/businesdemand.component';
import { BusinesfoodforthoughtComponent } from '../businessbasicscasemanage/businesfoodforthought/businesfoodforthought.component';
import { BusinesinvestmentComponent } from '../businessbasicscasemanage/businesinvestment/businesinvestment.component';
import { BusineslocationComponent } from '../businessbasicscasemanage/busineslocation/busineslocation.component';
import { BusinessgeneralComponent } from '../businessbasicscasemanage/businessgeneral/businessgeneral.component';
import { BusinessmarketingComponent } from '../businessbasicscasemanage/businessmarketing/businessmarketing.component';
import { BusinessoutlookComponent } from '../businessbasicscasemanage/businessoutlook/businessoutlook.component';

const routes: Routes = [
  { path: 'component', component: BusinescasemanageheaderComponent},
 
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
    BusinescasemanageheaderComponent,
    BusinesdemandComponent,
    BusinesfoodforthoughtComponent,
    BusinesinvestmentComponent,
    BusineslocationComponent,
    BusinessgeneralComponent,
    BusinessmarketingComponent,
    BusinessoutlookComponent,
   
  ]
})
export class BusinesscaseModule { } 
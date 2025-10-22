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

import { EcommerceintroductionComponent } from '../ECommerce/ecommerceintroduction/ecommerceintroduction.component';
import { EcommercemarketComponent } from '../ECommerce/ecommercemarket/ecommercemarket.component';
import { EcommercecatalogComponent } from '../ECommerce/ecommercecatalog/ecommercecatalog.component';
import { EcommercemarketingComponent } from '../ECommerce/ecommercemarketing/ecommercemarketing.component';
import { EcommerceexperienceComponent } from '../ECommerce/ecommerceexperience/ecommerceexperience.component';
import { EcommerceoperationsComponent } from '../ECommerce/ecommerceoperations/ecommerceoperations.component';
import { EcommercedecisionchecklistComponent, Ecommercedecisionchecliecommerceopup } from '../ECommerce/ecommercedecisionchecklist/ecommercedecisionchecklist.component';
import { EcommercereportComponent } from '../ECommerce/ecommercereport/ecommercereport.component';
import { EcommercesynopsisComponent } from '../ECommerce/ecommercesynopsis/ecommercesynopsis.component';
import { EcommercefoodforthoughtComponent } from '../ECommerce/ecommercefoodforthought/ecommercefoodforthought.component';
import { EcommerceheaderComponent } from '../ECommerce/ecommerceheader/ecommerceheader.component';

const routes: Routes = [
  { path: 'component', component: EcommerceheaderComponent },
 
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
    // Standalone components
    EcommerceheaderComponent,
    EcommerceintroductionComponent,
    EcommercemarketComponent,
    EcommercecatalogComponent,
    EcommercemarketingComponent,
    EcommerceexperienceComponent,
    EcommerceoperationsComponent,
    EcommercedecisionchecklistComponent,
    EcommercereportComponent,
    EcommercesynopsisComponent,
    EcommercefoodforthoughtComponent,
    Ecommercedecisionchecliecommerceopup
  ],
  exports: [
    EcommerceheaderComponent,
    EcommerceintroductionComponent,
    EcommercemarketComponent,
    EcommercecatalogComponent,
    EcommercemarketingComponent,
    EcommerceexperienceComponent,
    EcommerceoperationsComponent,
    EcommercedecisionchecklistComponent,
    EcommercereportComponent,
    EcommercesynopsisComponent,
    EcommercefoodforthoughtComponent,
    Ecommercedecisionchecliecommerceopup
  ]
})
export class EcommerceModule { } 
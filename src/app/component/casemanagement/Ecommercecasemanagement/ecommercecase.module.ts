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

import { EcommerccaseeheaderComponent } from '../Ecommercecasemanagement/ecommerccaseeheader/ecommerccaseeheader.component';
import { EcommerccasemarketComponent } from '../Ecommercecasemanagement/ecommerccasemarket/ecommerccasemarket.component';
import { EcommerccasecatalogComponent } from '../Ecommercecasemanagement/ecommerccasecatalog/ecommerccasecatalog.component';
import { EcommerccasemarketingComponent } from '../Ecommercecasemanagement/ecommerccasemarketing/ecommerccasemarketing.component';
import { EcommerccaseexperienceComponent } from '../Ecommercecasemanagement/ecommerccaseexperience/ecommerccaseexperience.component';
import { EcommerccaseoperationComponent } from '../Ecommercecasemanagement/ecommerccaseoperation/ecommerccaseoperation.component';
import { EcommerccasefoodforthoughtComponent } from '../Ecommercecasemanagement/ecommerccasefoodforthought/ecommerccasefoodforthought.component';
import { EcommerccasemoduleComponent } from '../Ecommercecasemanagement/ecommerccasemodule/ecommerccasemodule.component';

const routes: Routes = [
  { path: 'component', component: EcommerccaseeheaderComponent },
 
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
    EcommerccaseeheaderComponent,
    EcommerccasemarketComponent,
    EcommerccasecatalogComponent,
    EcommerccasemarketingComponent,
    EcommerccaseexperienceComponent,
    EcommerccaseoperationComponent,
    EcommerccasefoodforthoughtComponent,
    EcommerccasemoduleComponent,
    
  ]
})
export class EcommercecaseModule { } 
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';

// Import common module
import { CommonComponentsModule } from '../../../common/common.module';

import { OrderingbasicscaseheaderComponent } from '../Orderingbasicscasemanagement/orderingbasicscaseheader/orderingbasicscaseheader.component';
import { OrderingbasicscasemarketComponent } from '../Orderingbasicscasemanagement/orderingbasicscasemarket/orderingbasicscasemarket.component';
import { Orderingbasicscasephase1Component } from '../Orderingbasicscasemanagement/orderingbasicscasephase1/orderingbasicscasephase1.component';
import { Orderingbasicscasephase2Component } from '../Orderingbasicscasemanagement/orderingbasicscasephase2/orderingbasicscasephase2.component';
import { OrderingbasicscasenumberofassingendComponent } from '../Orderingbasicscasemanagement/orderingbasicscasenumberofassingend/orderingbasicscasenumberofassingend.component';
import { OrderingbasicscasefoodforthoughtComponent } from '../Orderingbasicscasemanagement/orderingbasicscasefoodforthought/orderingbasicscasefoodforthought.component';
import { OrderingbasicscasemoduleComponent } from '../Orderingbasicscasemanagement/orderingbasicscasemodule/orderingbasicscasemodule.component';

const routes: Routes = [
  { path: 'component', component: OrderingbasicscaseheaderComponent },
 
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
    OrderingbasicscaseheaderComponent,
    OrderingbasicscasemarketComponent,
    Orderingbasicscasephase1Component,
    Orderingbasicscasephase2Component,
    OrderingbasicscasenumberofassingendComponent,
    OrderingbasicscasefoodforthoughtComponent,
    OrderingbasicscasemoduleComponent,
  ],
  providers: [DecimalPipe]
})
export class OrderingcaseModule { } 
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

import { ConsumercasecraftingComponent } from '../productconsumergamenew/consumercasecrafting/consumercasecrafting.component';
import { ConsumercaseheaderComponent } from '../productconsumergamenew/consumercaseheader/consumercaseheader.component';
import { ConsumercasetargetComponent } from '../productconsumergamenew/consumercasetarget/consumercasetarget.component';
import { ConsumerconceptualizingComponent } from '../productconsumergamenew/consumerconceptualizing/consumerconceptualizing.component';
import { ConsumerfoodforthougthComponent } from '../productconsumergamenew/consumerfoodforthougth/consumerfoodforthougth.component';
import { ConsumerinformationsearchComponent } from '../productconsumergamenew/consumerinformationsearch/consumerinformationsearch.component';
import { ConsumermoduleComponent } from '../productconsumergamenew/consumermodule/consumermodule.component';
import { ConsumeroutlookComponent } from '../productconsumergamenew/consumeroutlook/consumeroutlook.component';

const routes: Routes = [
  { path: 'component', component: ConsumercaseheaderComponent },
 
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
    ConsumercaseheaderComponent,
    ConsumermoduleComponent,
    ConsumeroutlookComponent,
    ConsumerinformationsearchComponent,
    ConsumerfoodforthougthComponent,
    ConsumerconceptualizingComponent,
    ConsumercasetargetComponent,
    ConsumercasecraftingComponent,
  ],
  providers: [DecimalPipe]
})
export class ProductConsumercaseModule { } 
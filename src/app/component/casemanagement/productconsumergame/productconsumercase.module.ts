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

import { ConsumercasecraftingComponent } from '../productconsumergame/consumercasecrafting/consumercasecrafting.component';
import { ConsumercaseheaderComponent } from '../productconsumergame/consumercaseheader/consumercaseheader.component';
import { ConsumercasetargetComponent } from '../productconsumergame/consumercasetarget/consumercasetarget.component';
import { ConsumerconceptualizingComponent } from '../productconsumergame/consumerconceptualizing/consumerconceptualizing.component';
import { ConsumerfoodforthougthComponent } from '../productconsumergame/consumerfoodforthougth/consumerfoodforthougth.component';
import { ConsumerinformationsearchComponent } from '../productconsumergame/consumerinformationsearch/consumerinformationsearch.component';
import { ConsumermoduleComponent } from '../productconsumergame/consumermodule/consumermodule.component';
import { ConsumeroutlookComponent } from '../productconsumergame/consumeroutlook/consumeroutlook.component';

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
    ConsumeroutlookComponent,
    ConsumercaseheaderComponent,
    ConsumermoduleComponent,
    ConsumerinformationsearchComponent,
    ConsumerfoodforthougthComponent,
    ConsumerconceptualizingComponent,
    ConsumercasetargetComponent,
    ConsumercasecraftingComponent,
  ],
  providers: [DecimalPipe]
})
export class ProductConsumercaseModule { } 
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

import { DesignthinkingcaseheaderComponent } from '../DesignThinkingcasemanagement/designthinkingcaseheader/designthinkingcaseheader.component';
import { DesignthinkingcaseobserveComponent } from '../DesignThinkingcasemanagement/designthinkingcaseobserve/designthinkingcaseobserve.component';
import { DesignthinkingcaseempathizeComponent } from '../DesignThinkingcasemanagement/designthinkingcaseempathize/designthinkingcaseempathize.component';
import { DesignthinkingcasedefineComponent } from '../DesignThinkingcasemanagement/designthinkingcasedefine/designthinkingcasedefine.component';
import { DesignthinkingcaseideateComponent } from '../DesignThinkingcasemanagement/designthinkingcaseideate/designthinkingcaseideate.component';
import { DesignthinkingcaseprototypeComponent } from '../DesignThinkingcasemanagement/designthinkingcaseprototype/designthinkingcaseprototype.component';
import { DesignthinkingcaseexecuteComponent } from '../DesignThinkingcasemanagement/designthinkingcaseexecute/designthinkingcaseexecute.component';
import { DesignthinkingcasefoodforthoughtComponent } from '../DesignThinkingcasemanagement/designthinkingcasefoodforthought/designthinkingcasefoodforthought.component';
import { DesignthinkingcasemoduleComponent } from '../DesignThinkingcasemanagement/designthinkingcasemodule/designthinkingcasemodule.component';

const routes: Routes = [
  { path: 'component', component: DesignthinkingcaseheaderComponent },
 
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
    DesignthinkingcaseheaderComponent,
    DesignthinkingcaseobserveComponent,
    DesignthinkingcaseempathizeComponent,
    DesignthinkingcasedefineComponent,
    DesignthinkingcaseideateComponent,
    DesignthinkingcaseprototypeComponent,
    DesignthinkingcaseexecuteComponent,
    DesignthinkingcasefoodforthoughtComponent,
    DesignthinkingcasemoduleComponent,
  ]
})
export class DesignThinkingcaseModule { } 
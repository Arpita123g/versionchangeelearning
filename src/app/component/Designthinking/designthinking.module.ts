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

import { DesignthinkingheaderComponent } from '../Designthinking/designthinkingheader/designthinkingheader.component';
import { DesignthinkingintroductionComponent } from '../Designthinking/designthinkingintroduction/designthinkingintroduction.component';
import { DesignthinkingreportComponent } from '../Designthinking/designthinkingreport/designthinkingreport.component';
import { DesignthinkingobserveComponent } from '../Designthinking/designthinkingobserve/designthinkingobserve.component';
import { DesignthinkingempathizeComponent } from '../Designthinking/designthinkingempathize/designthinkingempathize.component';
import { DesignthinkingsynopsisComponent } from '../Designthinking/designthinkingsynopsis/designthinkingsynopsis.component';
import { DesignthinkingfoodforthoughtComponent } from '../Designthinking/designthinkingfoodforthought/designthinkingfoodforthought.component';
import { DesignthinkingdecisionchecklistComponent, DesignthinkingPopup } from '../Designthinking/designthinkingdecisionchecklist/designthinkingdecisionchecklist.component';
import { DesignthinkingdefineComponent } from '../Designthinking/designthinkingdefine/designthinkingdefine.component';
import { DesignthinkingprototypeComponent } from '../Designthinking/designthinkingprototype/designthinkingprototype.component';
import { DesignthinkingideateComponent } from '../Designthinking/designthinkingideate/designthinkingideate.component';
import { DesignthinkingexecuteComponent } from '../Designthinking/designthinkingexecute/designthinkingexecute.component';

const routes: Routes = [
  { path: 'component', component: DesignthinkingheaderComponent },
 
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
    // Standalone component imports
    DesignthinkingheaderComponent,
    DesignthinkingintroductionComponent,
    DesignthinkingreportComponent,
    DesignthinkingobserveComponent,
    DesignthinkingempathizeComponent,
    DesignthinkingsynopsisComponent,
    DesignthinkingfoodforthoughtComponent,
    DesignthinkingdecisionchecklistComponent,
    DesignthinkingdefineComponent,
    DesignthinkingprototypeComponent,
    DesignthinkingideateComponent,
    DesignthinkingexecuteComponent,
    DesignthinkingPopup
  ],
  exports: [
    DesignthinkingheaderComponent,
    DesignthinkingintroductionComponent,
    DesignthinkingreportComponent,
    DesignthinkingobserveComponent,
    DesignthinkingempathizeComponent,
    DesignthinkingsynopsisComponent,
    DesignthinkingfoodforthoughtComponent,
    DesignthinkingdecisionchecklistComponent,
    DesignthinkingdefineComponent,
    DesignthinkingprototypeComponent,
    DesignthinkingideateComponent,
    DesignthinkingexecuteComponent,
    DesignthinkingPopup
  ]
})
export class DesignThinkingModule { } 
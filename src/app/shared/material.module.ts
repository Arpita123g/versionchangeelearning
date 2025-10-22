import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules for lazy loading
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTreeModule } from '@angular/material/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// Third-party modules for lazy loading
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxImageZoomModule } from 'ngx-image-zoom';

import { MarkdownModule } from 'ngx-markdown';
import { NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';

const MATERIAL_MODULES = [
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatExpansionModule,
  MatChipsModule,
  MatBadgeModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatStepperModule,
  MatTreeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  FormsModule,ReactiveFormsModule
];

const THIRD_PARTY_MODULES = [
  NgbModule,
  NgApexchartsModule,
  NgxImageZoomModule,
  NgxSimpleTextEditorModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    ...THIRD_PARTY_MODULES,
    MarkdownModule.forRoot()
  ],
  exports: [
    ...MATERIAL_MODULES,
    ...THIRD_PARTY_MODULES
  ]
})
export class SharedMaterialModule { } 
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

import { PortfoliocaseheaderComponent } from '../portfolionewcasemanagement/portfoliocaseheader/portfoliocaseheader.component';
import { PortfoliocasephaseoneComponent } from '../portfolionewcasemanagement/portfoliocasephaseone/portfoliocasephaseone.component';
import { PortfoliocasephasethreeComponent } from '../portfolionewcasemanagement/portfoliocasephasethree/portfoliocasephasethree.component';
import { PortfoliocasephasetwoComponent } from '../portfolionewcasemanagement/portfoliocasephasetwo/portfoliocasephasetwo.component';
import { PortfoliofoodforthoughtComponent } from '../portfolionewcasemanagement/portfoliofoodforthought/portfoliofoodforthought.component';
import { PortfoliomarketComponent } from '../portfolionewcasemanagement/portfoliomarket/portfoliomarket.component';
import { PortfoliomoduleComponent } from '../portfolionewcasemanagement/portfoliomodule/portfoliomodule.component';

const routes: Routes = [
  { path: 'component', component: PortfoliocaseheaderComponent },
 
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
    PortfoliocaseheaderComponent,
    PortfoliomarketComponent,
    PortfoliofoodforthoughtComponent,
    PortfoliomoduleComponent,
    PortfoliocasephaseoneComponent,
    PortfoliocasephasetwoComponent,
    PortfoliocasephasethreeComponent,
  ],
  providers: [DecimalPipe]
})
export class PortfoliocaseModule { } 
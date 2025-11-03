import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { PortfoliocasephaseoneComponent } from '../portfoliocasephaseone/portfoliocasephaseone.component';
import { PortfoliocasephasethreeComponent } from '../portfoliocasephasethree/portfoliocasephasethree.component';
import { PortfoliocasephasetwoComponent } from '../portfoliocasephasetwo/portfoliocasephasetwo.component';
import { PortfoliofoodforthoughtComponent } from '../portfoliofoodforthought/portfoliofoodforthought.component';
import { PortfoliomarketComponent } from '../portfoliomarket/portfoliomarket.component';
import { PortfoliomoduleComponent } from '../portfoliomodule/portfoliomodule.component';


@Component({
  selector: 'app-portfoliocaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    PortfoliocasephaseoneComponent,
    PortfoliocasephasethreeComponent,
    PortfoliocasephasetwoComponent,
    PortfoliofoodforthoughtComponent,
    PortfoliomarketComponent,
    PortfoliomoduleComponent

  ],
  templateUrl: './portfoliocaseheader.component.html',
  styleUrls: ['./portfoliocaseheader.component.scss']
})
export class PortfoliocaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }


  activeTab = 'market';
  search(activeTab:any){
    this.activeTab = activeTab;
  }
  back(){
    this._router.navigate(["auth/component/instructordashboard"])
  }

  GoBack() {
    this._api.GoBack();
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { PricingcasemarketComponent } from '../pricingcasemarket/pricingcasemarket.component';
import { PricingcasefoodforthoughtComponent } from '../pricingcasefoodforthought/pricingcasefoodforthought.component';
import { PricingcasemoduleComponent } from '../pricingcasemodule/pricingcasemodule.component';
import { PricingcaseinitiateComponent } from '../pricingcaseinitiate/pricingcaseinitiate.component';
import { PricingcaseinnovateComponent } from '../pricingcaseinnovate/pricingcaseinnovate.component';
import { PricingcaseadaptComponent } from '../pricingcaseadapt/pricingcaseadapt.component';


@Component({
  selector: 'app-pricingcaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    PricingcasemarketComponent,
    PricingcasefoodforthoughtComponent,
    PricingcasemoduleComponent,
    PricingcaseinitiateComponent,
    PricingcaseinnovateComponent,
    PricingcaseadaptComponent,
  ],
  templateUrl: './pricingcaseheader.component.html',
  styleUrls: ['./pricingcaseheader.component.scss']
})
export class PricingcaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

  activeTab = 'market';
  search(activeTab: any) {
    this.activeTab = activeTab;
  }
  back() {
    this._router.navigate(["auth/component/instructordashboard"])
  }


  GoBack() {
    this._api.GoBack();
  }
}

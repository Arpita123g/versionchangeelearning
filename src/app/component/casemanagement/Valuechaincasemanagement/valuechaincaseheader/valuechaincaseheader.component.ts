import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { ValuechaincasedemandComponent } from '../valuechaincasedemand/valuechaincasedemand.component';
import { ValuechaincasefoodforthoughtComponent } from '../valuechaincasefoodforthought/valuechaincasefoodforthought.component';
import { ValuechaincasemarketComponent } from '../valuechaincasemarket/valuechaincasemarket.component';
import { ValuechaincasemoduleComponent } from '../valuechaincasemodule/valuechaincasemodule.component';
import { ValuechaincasefinanceComponent } from '../../Valuechaincasemanagementnew/valuechaincasefinance/valuechaincasefinance.component';
import { ValuechaincasemarketingComponent } from '../valuechaincasemarketing/valuechaincasemarketing.component';
import { ValuechaincaseproductionComponent } from '../valuechaincaseproduction/valuechaincaseproduction.component';

@Component({
  selector: 'app-valuechaincaseheader',
  standalone: true,
  imports: [CommonModule,
    ValuechaincasedemandComponent,
    ValuechaincasemarketComponent,
    ValuechaincasemoduleComponent,
    ValuechaincasefoodforthoughtComponent,
    ValuechaincasemarketingComponent,
    ValuechaincaseproductionComponent,
    ValuechaincasefinanceComponent,
  ],
  templateUrl: './valuechaincaseheader.component.html',
  styleUrls: ['./valuechaincaseheader.component.scss']
})
export class ValuechaincaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

  activeTab = 'outlook';
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

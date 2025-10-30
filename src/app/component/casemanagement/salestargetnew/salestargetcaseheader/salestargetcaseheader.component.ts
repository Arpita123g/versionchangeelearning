import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { SalestargetcasecompositionComponent } from '../salestargetcasecomposition/salestargetcasecomposition.component';
import {SalestargetcasefoodforthoughtComponent } from '../salestargetcasefoodforthought/salestargetcasefoodforthought.component';
import { SalestargetcaseinformationsearchComponent } from '../salestargetcaseinformationsearch/salestargetcaseinformationsearch.component';
import { SalestargetcaseplanningComponent } from '../salestargetcaseplanning/salestargetcaseplanning.component';
import { SalestargetcasemarketoutlookComponent } from '../salestargetcasemarketoutlook/salestargetcasemarketoutlook.component';
import { SalestargetcasedevelopmentComponent } from '../salestargetcasedevelopment/salestargetcasedevelopment.component';
import { SalestargetcasemoduleComponent } from '../salestargetcasemodule/salestargetcasemodule.component';

@Component({
  selector: 'app-salestargetcaseheader',
  standalone: true,
  imports: [CommonModule,
    SalestargetcasecompositionComponent,
    SalestargetcasefoodforthoughtComponent,
    SalestargetcaseinformationsearchComponent,
    SalestargetcaseplanningComponent,
    SalestargetcasemarketoutlookComponent,
    SalestargetcasedevelopmentComponent,
    SalestargetcasemoduleComponent,
    
  ],
  templateUrl: './salestargetcaseheader.component.html',
  styleUrls: ['./salestargetcaseheader.component.scss']
})
export class SalestargetcaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

  activeTab = 'outlook';
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

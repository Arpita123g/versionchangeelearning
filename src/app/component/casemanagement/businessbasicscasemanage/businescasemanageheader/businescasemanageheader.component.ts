import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BusinesdemandComponent } from '../businesdemand/businesdemand.component';
import { BusinesfoodforthoughtComponent } from '../businesfoodforthought/businesfoodforthought.component';
import { BusinesinvestmentComponent } from '../businesinvestment/businesinvestment.component';
import { BusineslocationComponent } from '../busineslocation/busineslocation.component';
import { BusinessgeneralComponent } from '../businessgeneral/businessgeneral.component';
import { BusinessmarketingComponent } from '../businessmarketing/businessmarketing.component';
import { BusinessoutlookComponent } from '../businessoutlook/businessoutlook.component';

@Component({
  selector: 'app-businescasemanageheader',
  standalone: true,
  imports: [CommonModule,FormsModule,MatIconModule,NgApexchartsModule,
    BusinessoutlookComponent,
    BusinesdemandComponent,
    BusinesfoodforthoughtComponent,
    BusinesinvestmentComponent,
    BusineslocationComponent,
    BusinessgeneralComponent,
    BusinessmarketingComponent,
  ],
  templateUrl: './businescasemanageheader.component.html',
  styleUrls: ['./businescasemanageheader.component.scss']
})
export class BusinescasemanageheaderComponent implements OnInit {

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

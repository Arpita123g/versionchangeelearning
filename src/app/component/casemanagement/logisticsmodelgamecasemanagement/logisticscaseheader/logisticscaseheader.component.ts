import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { LogisticscaseinboundComponent } from '../logisticscaseinbound/logisticscaseinbound.component';
import { LogisticscasemarketComponent } from '../logisticscasemarket/logisticscasemarket.component';
import { LogisticscasewarehouseComponent } from '../logisticscasewarehouse/logisticscasewarehouse.component';
import { LogisticscaseroutesandtechnologyComponent } from '../logisticscaseroutesandtechnology/logisticscaseroutesandtechnology.component';
import { LogisticscaseoutboundComponent } from '../logisticscaseoutbound/logisticscaseoutbound.component';
import { LogisticscasefoodforthoughtComponent } from '../logisticscasefoodforthought/logisticscasefoodforthought.component';
import { LogisticscasemoduleComponent } from '../logisticscasemodule/logisticscasemodule.component';

@Component({
  selector: 'app-logisticscaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    LogisticscaseinboundComponent,
    LogisticscasemarketComponent, 
    LogisticscasewarehouseComponent,
    LogisticscaseroutesandtechnologyComponent,
    LogisticscaseoutboundComponent,
    LogisticscasefoodforthoughtComponent,
    LogisticscasemoduleComponent,
  ],
  templateUrl: './logisticscaseheader.component.html',
  styleUrls: ['./logisticscaseheader.component.scss']
})
export class LogisticscaseheaderComponent implements OnInit {

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

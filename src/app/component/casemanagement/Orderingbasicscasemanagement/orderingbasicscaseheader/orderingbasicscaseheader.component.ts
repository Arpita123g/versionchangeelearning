import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { OrderingbasicscasefoodforthoughtComponent } from '../orderingbasicscasefoodforthought/orderingbasicscasefoodforthought.component';
import { OrderingbasicscasemarketComponent } from '../orderingbasicscasemarket/orderingbasicscasemarket.component';
import { Orderingbasicscasephase1Component } from '../orderingbasicscasephase1/orderingbasicscasephase1.component';
import { Orderingbasicscasephase2Component } from '../orderingbasicscasephase2/orderingbasicscasephase2.component';
import { OrderingbasicscasenumberofassingendComponent } from '../orderingbasicscasenumberofassingend/orderingbasicscasenumberofassingend.component';
import { OrderingbasicscasemoduleComponent } from '../orderingbasicscasemodule/orderingbasicscasemodule.component';

@Component({
  selector: 'app-orderingbasicscaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    OrderingbasicscasefoodforthoughtComponent,
    OrderingbasicscasemarketComponent,
    Orderingbasicscasephase1Component,
    Orderingbasicscasephase2Component,
    OrderingbasicscasenumberofassingendComponent,
    OrderingbasicscasemoduleComponent,
  ],
  templateUrl: './orderingbasicscaseheader.component.html',
  styleUrls: ['./orderingbasicscaseheader.component.scss']
})
export class OrderingbasicscaseheaderComponent implements OnInit {

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

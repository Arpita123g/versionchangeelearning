import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
  import { Router } from '@angular/router'; 
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CapitalbudgetingcasefoodforthoughtComponent } from '../capitalbudgetingcasefoodforthought/capitalbudgetingcasefoodforthought.component';
import { CapitalbudgetingcasemoduleComponent } from '../capitalbudgetingcasemodule/capitalbudgetingcasemodule.component';
import { CapitalbudgetingcasemarketComponent } from '../capitalbudgetingcasemarket/capitalbudgetingcasemarket.component';
import { CapitalbudgetingcaseprojectportfolioComponent } from '../capitalbudgetingcaseprojectportfolio/capitalbudgetingcaseprojectportfolio.component';

@Component({
  selector: 'app-capitalbudgetingcaseheader',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule,
    CapitalbudgetingcasefoodforthoughtComponent,
    CapitalbudgetingcasemoduleComponent,
    CapitalbudgetingcasemarketComponent,
    CapitalbudgetingcaseprojectportfolioComponent,
   
  ],
  templateUrl: './capitalbudgetingcaseheader.component.html',
  styleUrls: ['./capitalbudgetingcaseheader.component.scss']
})
export class CapitalbudgetingcaseheaderComponent implements OnInit {

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

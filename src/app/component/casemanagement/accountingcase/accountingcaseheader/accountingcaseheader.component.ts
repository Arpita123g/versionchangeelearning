import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AccountingcasemoduleComponent } from '../accountingcasemodule/accountingcasemodule.component';
import { AccountingcasecorrectaccountsComponent } from '../accountingcasecorrectaccounts/accountingcasecorrectaccounts.component';
import { AccountingcaseevaluationComponent } from '../accountingcaseevaluation/accountingcaseevaluation.component';
import { AccountingcasefoodforthoughtComponent } from '../accountingcasefoodforthought/accountingcasefoodforthought.component';
import { AccountingcasememoComponent } from '../accountingcasememo/accountingcasememo.component';


@Component({
  selector: 'app-accountingcaseheader',
  standalone: true,
  imports: [CommonModule,FormsModule,MatIconModule,NgApexchartsModule,
    AccountingcasecorrectaccountsComponent,
    AccountingcaseevaluationComponent,
    AccountingcasefoodforthoughtComponent,
    AccountingcasememoComponent,
    AccountingcasemoduleComponent
  ], 
  templateUrl: './accountingcaseheader.component.html',
  styleUrls: ['./accountingcaseheader.component.scss']
})
export class AccountingcaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

  activeTab = 'memo';
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

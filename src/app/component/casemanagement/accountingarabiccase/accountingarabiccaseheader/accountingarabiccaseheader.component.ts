import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AccountingarabiccasemoduleComponent } from '../accountingarabiccasemodule/accountingarabiccasemodule.component';
import { AccountingarabiccasefoodforthoughtComponent } from '../accountingarabiccasefoodforthought/accountingarabiccasefoodforthought.component';
import { AccountingarabiccaseevaluationComponent } from '../accountingarabiccaseevaluation/accountingarabiccaseevaluation.component';
import { AccountingarabiccasecorrectaccountsComponent } from '../accountingarabiccasecorrectaccounts/accountingarabiccasecorrectaccounts.component';
import { AccountingarabiccasememoComponent } from '../accountingarabiccasememo/accountingarabiccasememo.component';

@Component({
  selector: 'app-accountingarabiccaseheader',
  standalone: true,
  imports: [CommonModule,FormsModule,MatIconModule,NgApexchartsModule,
    AccountingarabiccasecorrectaccountsComponent,
    AccountingarabiccaseevaluationComponent,
    AccountingarabiccasefoodforthoughtComponent,
    AccountingarabiccasememoComponent,
    AccountingarabiccasemoduleComponent
  ],
  templateUrl: './accountingarabiccaseheader.component.html',
  styleUrls: ['./accountingarabiccaseheader.component.scss']
})
export class AccountingarabiccaseheaderComponent implements OnInit {

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

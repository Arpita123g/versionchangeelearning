import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { FinancialcasememoComponent } from '../financialcasememo/financialcasememo.component';
import { FinancialcasemoduleComponent } from '../financialcasemodule/financialcasemodule.component';
import { FinancialcasestatementsComponent } from '../financialcasestatements/financialcasestatements.component';
import { FinancialcaseinvestmentsComponent } from '../financialcaseinvestments/financialcaseinvestments.component';
import { FinancialcaseindustryanalysisComponent } from '../financialcaseindustryanalysis/financialcaseindustryanalysis.component';
import { FinancialcasefoodforthoughtComponent } from '../financialcasefoodforthought/financialcasefoodforthought.component';

@Component({
  selector: 'app-financialcaseheader',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    FinancialcasememoComponent,
    FinancialcasemoduleComponent,
    FinancialcasestatementsComponent,
    FinancialcaseinvestmentsComponent,
    FinancialcaseindustryanalysisComponent,
    FinancialcasefoodforthoughtComponent
   
  ],
  templateUrl: './financialcaseheader.component.html',
  styleUrls: ['./financialcaseheader.component.scss']
})
export class FinancialcaseheaderComponent implements OnInit {

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

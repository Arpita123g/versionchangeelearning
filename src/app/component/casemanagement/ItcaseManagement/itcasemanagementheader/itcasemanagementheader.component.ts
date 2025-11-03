import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { ItcasemanagementfoodforthoughtComponent } from '../itcasemanagementfoodforthought/itcasemanagementfoodforthought.component';
import { ItcasemanagementmarketoutlookComponent } from '../itcasemanagementmarketoutlook/itcasemanagementmarketoutlook.component';
import { ItcasemanagementsystemarchitectureComponent } from '../itcasemanagementsystemarchitecture/itcasemanagementsystemarchitecture.component';
import { ItcasemanagementsoftwaredevelopmentComponent } from '../itcasemanagementsoftwaredevelopment/itcasemanagementsoftwaredevelopment.component';
import { ItcasemanagementinnovationComponent } from '../itcasemanagementinnovation/itcasemanagementinnovation.component';
import { ItcasemanagementsucurityComponent } from '../itcasemanagementsucurity/itcasemanagementsucurity.component';
import { ItcasemanagementmoduleComponent } from '../itcasemanagementmodule/itcasemanagementmodule.component';


@Component({
  selector: 'app-itcasemanagementheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    ItcasemanagementfoodforthoughtComponent,
    ItcasemanagementmarketoutlookComponent,
    ItcasemanagementsystemarchitectureComponent,
    ItcasemanagementsoftwaredevelopmentComponent,
    ItcasemanagementsucurityComponent,
    ItcasemanagementinnovationComponent,
    ItcasemanagementmoduleComponent,
  ],
  templateUrl: './itcasemanagementheader.component.html',
  styleUrls: ['./itcasemanagementheader.component.scss']
})
export class ItcasemanagementheaderComponent implements OnInit {

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

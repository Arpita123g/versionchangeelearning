import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChangemanagementcaseawarenessComponent } from '../changemanagementcaseawareness/changemanagementcaseawareness.component';
import { ChangemanagementcasecommitmentComponent } from '../changemanagementcasecommitment/changemanagementcasecommitment.component';
import { ChangemanagementcasefoodforthoughtComponent } from '../changemanagementcasefoodforthought/changemanagementcasefoodforthought.component';
import { ChangemanagementcasehumandynamicsComponent } from '../changemanagementcasehumandynamics/changemanagementcasehumandynamics.component';
import { ChangemanagementcasememoComponent } from '../changemanagementcasememo/changemanagementcasememo.component';
import { ChangemanagementcasemoduleComponent } from '../changemanagementcasemodule/changemanagementcasemodule.component';
import { ChangemanagementcasemotivationComponent } from '../changemanagementcasemotivation/changemanagementcasemotivation.component';

@Component({
  selector: 'app-changemanagementcaseheader',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    ChangemanagementcaseawarenessComponent,
    ChangemanagementcasecommitmentComponent,
    ChangemanagementcasefoodforthoughtComponent,
    ChangemanagementcasehumandynamicsComponent,
    ChangemanagementcasememoComponent,
    ChangemanagementcasemoduleComponent,
    ChangemanagementcasemotivationComponent,
  ],
  templateUrl: './changemanagementcaseheader.component.html',
  styleUrls: ['./changemanagementcaseheader.component.scss']
})
export class ChangemanagementcaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }
  activeTab = 'memo';
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

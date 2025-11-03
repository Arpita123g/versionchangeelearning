import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { HrmcaseAcquisitionComponent } from '../hrmcase-acquisition/hrmcase-acquisition.component';
import { HrmcaseCompanyComponent } from '../hrmcase-company/hrmcase-company.component';
import { HrmcaseManagementComponent } from '../hrmcase-management/hrmcase-management.component';
import { HrmcaseToolsComponent } from '../hrmcase-tools/hrmcase-tools.component';
import { HrmcaseScenarioFotComponent } from '../hrmcase-scenario-fot/hrmcase-scenario-fot.component';
import { HrmcaseModuleComponent } from '../hrmcase-module/hrmcase-module.component';

@Component({
  selector: 'app-hrmcase-header',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,
    HrmcaseAcquisitionComponent,
    HrmcaseCompanyComponent,
    HrmcaseManagementComponent,
    HrmcaseToolsComponent,
    HrmcaseScenarioFotComponent,
    HrmcaseModuleComponent,
  ],
  templateUrl: './hrmcase-header.component.html',
  styleUrls: ['./hrmcase-header.component.scss']
})
export class HrmcaseHeaderComponent implements OnInit {


  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

  activeTab = 'company';
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProjectmanagementcasemarketComponent } from '../projectmanagementcasemarket/projectmanagementcasemarket.component';
import { ProjectmanagementcaseprojectmapComponent } from '../projectmanagementcaseprojectmap/projectmanagementcaseprojectmap.component';
import { ProjectmanagementcaseplanningComponent } from '../projectmanagementcaseplanning/projectmanagementcaseplanning.component';
import { ProjectmanagementcasefoodforthoughtComponent } from '../projectmanagementcasefoodforthought/projectmanagementcasefoodforthought.component';
import { ProjectmanagementcasemoduleComponent } from '../projectmanagementcasemodule/projectmanagementcasemodule.component';
import { ProjectmanagementcasecriteriaComponent } from '../projectmanagementcasecriteria/projectmanagementcasecriteria.component';

@Component({
  selector: 'app-projectmanagementcaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    ProjectmanagementcasemarketComponent,
    ProjectmanagementcaseprojectmapComponent,
    ProjectmanagementcaseplanningComponent,
    ProjectmanagementcasefoodforthoughtComponent,
    ProjectmanagementcasemoduleComponent,
    ProjectmanagementcasecriteriaComponent,
  ],
  templateUrl: './projectmanagementcaseheader.component.html',
  styleUrls: ['./projectmanagementcaseheader.component.scss']
})
export class ProjectmanagementcaseheaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  activeTab = 'market';
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  back() {
    this._router.navigate(["auth/component/instructordashboard"])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-projectmanagementcaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
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

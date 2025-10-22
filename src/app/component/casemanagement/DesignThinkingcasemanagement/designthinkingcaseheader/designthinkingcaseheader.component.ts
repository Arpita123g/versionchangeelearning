import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';

@Component({
  selector: 'app-designthinkingcaseheader',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './designthinkingcaseheader.component.html',
  styleUrls: ['./designthinkingcaseheader.component.scss']
})
export class DesignthinkingcaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

  activeTab = 'observe';
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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';

@Component({
  selector: 'app-promotionsigmentcaseheader',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './promotionsigmentcaseheader.component.html',
  styleUrls: ['./promotionsigmentcaseheader.component.scss']
})
export class PromotionsigmentcaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  activeTab = 'outlook';
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  ngOnInit(): void {
  }

  back() {
    this._router.navigate(["auth/component/instructordashboard"])
  }

  GoBack() {
    this._api.GoBack();
  }

}

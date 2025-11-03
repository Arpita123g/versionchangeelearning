import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { InnovationcaseproductComponent } from '../innovationcaseproduct/innovationcaseproduct.component';
import { InnovationcasemarketoutlookComponent } from '../innovationcasemarketoutlook/innovationcasemarketoutlook.component';
import { InnovationcasecollaborationComponent } from '../innovationcasecollaboration/innovationcasecollaboration.component';
import { InnovationcasemarketingComponent } from '../innovationcasemarketing/innovationcasemarketing.component';
import { InnovationcasedevelopmentComponent } from '../innovationcasedevelopment/innovationcasedevelopment.component';
import { InnovationcasefoodforthoughtComponent } from '../innovationcasefoodforthought/innovationcasefoodforthought.component';
import { InnovationcasemoduleComponent } from '../innovationcasemodule/innovationcasemodule.component';

@Component({
  selector: 'app-innovationcaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    InnovationcasecollaborationComponent,
    InnovationcasemarketingComponent,
    InnovationcasedevelopmentComponent,
    InnovationcasefoodforthoughtComponent,
    InnovationcasemoduleComponent,
    InnovationcasemarketoutlookComponent,
    InnovationcaseproductComponent,

  ],
  templateUrl: './innovationcaseheader.component.html',
  styleUrls: ['./innovationcaseheader.component.scss']
})
export class InnovationcaseheaderComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { MergersacquisitioncaseassessmentComponent } from '../mergersacquisitioncaseassessment/mergersacquisitioncaseassessment.component';
import { MergersacquisitioncasemarketComponent } from '../mergersacquisitioncasemarket/mergersacquisitioncasemarket.component';
import { MergersacquisitioncasemoduleComponent } from '../mergersacquisitioncasemodule/mergersacquisitioncasemodule.component';
import { MergersacquisitioncasenegotiationComponent } from '../mergersacquisitioncasenegotiation/mergersacquisitioncasenegotiation.component';
import { MergersacquisitioncaseplanningComponent } from '../mergersacquisitioncaseplanning/mergersacquisitioncaseplanning.component';
import { MergersacquisitioncasefinancingComponent } from '../mergersacquisitioncasefinancing/mergersacquisitioncasefinancing.component';
import { MergersacquisitioncasefoodforthoughtComponent } from '../mergersacquisitioncasefoodforthought/mergersacquisitioncasefoodforthought.component';


@Component({
  selector: 'app-mergersacquisitioncaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    MergersacquisitioncaseassessmentComponent,
    MergersacquisitioncasemarketComponent,
    MergersacquisitioncasemoduleComponent,
    MergersacquisitioncasenegotiationComponent,
    MergersacquisitioncaseplanningComponent,
    MergersacquisitioncasefoodforthoughtComponent,
    MergersacquisitioncasefinancingComponent,
  ],
  templateUrl: './mergersacquisitioncaseheader.component.html',
  styleUrls: ['./mergersacquisitioncaseheader.component.scss']
})
export class MergersacquisitioncaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }
  activeTab = 'market';
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

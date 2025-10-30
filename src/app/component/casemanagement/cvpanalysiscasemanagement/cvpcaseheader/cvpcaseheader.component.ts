import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CvpcaseindustryComponent } from '../cvpcaseindustry/cvpcaseindustry.component';
import { CvpcasemarketComponent } from '../cvpcasemarket/cvpcasemarket.component';
import { CvpcasemarketingComponent } from '../cvpcasemarketing/cvpcasemarketing.component';
import { CvpproductionComponent } from '../cvpproduction/cvpproduction.component';
import { CvpfoodforthoughtComponent } from '../cvpfoodforthought/cvpfoodforthought.component';
import { CvpmoduleComponent } from '../cvpmodule/cvpmodule.component';

@Component({
  selector: 'app-cvpcaseheader',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    CvpcaseindustryComponent,
    CvpcasemarketComponent,
    CvpcasemarketingComponent,
    CvpproductionComponent,
    CvpfoodforthoughtComponent,
    CvpmoduleComponent,
  ],
  templateUrl: './cvpcaseheader.component.html',
  styleUrls: ['./cvpcaseheader.component.scss']
})
export class CvpcaseheaderComponent implements OnInit {

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

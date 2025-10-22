import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-financialcaseinvestments',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './financialcaseinvestments.component.html',
  styleUrls: ['./financialcaseinvestments.component.scss']
})
export class FinancialcaseinvestmentsComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";
  data1: any[] = Array(10).fill(null);
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }

  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getFetchData();
    let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
  }

  getFetchData() {

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/financialanalysismaster/fetchfinancialanalysismaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj[key]);
                });
              });
            }
          }
          this.checkloading = false;
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/financialanalysiscm/fetchfinancialanalysiscm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  Object.keys(obj).forEach((key: any) => {
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    this.res[key].push(obj[key]);
                  });
                });
              }
            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }




  }

  writeMarketingValue(cellname: string, index: number, value: any) {
    let apiname = '/financialanalysiscm/updatefinancialanalysiscm'
    if (
      (cellname == "m17") || (cellname == "m18") || (cellname == "m19") || (cellname == "m20") ||
      (cellname == "m21") || (cellname == "m22") || (cellname == "m23") || (cellname == "m24") ||
      (cellname == "m25") || (cellname == "m26") || (cellname == "n17") || (cellname == "n18") ||
      (cellname == "n19") || (cellname == "n20") || (cellname == "n21") || (cellname == "n22") ||
      (cellname == "n23") || (cellname == "n24") || (cellname == "n25") || (cellname == "n26") ||
      (cellname == "o17") || (cellname == "o18") || (cellname == "o19") || (cellname == "o20") ||
      (cellname == "o21") || (cellname == "o22") || (cellname == "o23") || (cellname == "o24") ||
      (cellname == "o25") || (cellname == "o26")
    ) {
      value = Number(value) / 100;
    }
    if (String(value).includes(",")) {
      value = String(value).replace(/,/g, '')
    }
    // if((cellname == "v7")||(cellname == "v8")||(cellname == "v9")||(cellname == "v10")||(cellname == "v11")
    //   ||(cellname == "v12")||(cellname == "v13")||(cellname == "v6")||(cellname == "v17")||(cellname == "v18")
    //   ||(cellname == "v19")||(cellname == "v20")||(cellname == "v21")||(cellname == "v22")||(cellname == "v23")
    //   ||(cellname == "v24")){
    //   value = Number(value)/100;
    // }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'financialanalysiscm', body, {}, apiname, 'financialanalysiscmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            // this.res[cellname][index] = value;
          } else {
            this.res[cellname][index] = this.res[cellname][index];
          }
        }, error: (error: any) => {
          this.checkloading = false;
          // this.driveerrorLog(error, apiname);
        }
      })
  }

  override ngOnDestroy(): void {
    this.Instructorelementdetailssub.unsubscribe();
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-mergersacquisitioncaseplanning',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './mergersacquisitioncaseplanning.component.html',
  styleUrls: ['./mergersacquisitioncaseplanning.component.scss']
})
export class MergersacquisitioncaseplanningComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(20).fill(null);
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
    //***********it will be uncommitted*******************/
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/mergersacquisitionmaster/fetchmergersacquisitionmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
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
    } else {
      let apiname = "/mergersacquisitioncm/fetchmergersacquisitioncm"
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
    let apiname = '/mergersacquisitioncm/updatemergersacquisitioncm'
    if ((cellname == "e10") || (cellname == "e11") || (cellname == "e12") || (cellname == "e13") || (cellname == "e14")
      || (cellname == "e15") || (cellname == "n35") || (cellname == "n36") || (cellname == "n37") || (cellname == "n38")
      || (cellname == "n39") || (cellname == "k35") || (cellname == "k36") || (cellname == "k37") || (cellname == "k38")
      || (cellname == "k39") || (cellname == "j35") || (cellname == "j36") || (cellname == "j37") || (cellname == "j38")
      || (cellname == "j39") || (cellname == "i35") || (cellname == "i36") || (cellname == "i37") || (cellname == "i38")
      || (cellname == "i39") || (cellname == "h35") || (cellname == "h36") || (cellname == "h37") || (cellname == "h38")
      || (cellname == "h39") || (cellname == "g35") || (cellname == "g36") || (cellname == "g37") || (cellname == "g38")
      || (cellname == "g39") || (cellname == "g35") || (cellname == "g36") || (cellname == "g37") || (cellname == "g38")
      || (cellname == "g39") || (cellname == "f35") || (cellname == "f36") || (cellname == "f37") || (cellname == "f38")
      || (cellname == "f39") || (cellname == "e35") || (cellname == "e36") || (cellname == "e37") || (cellname == "e38")
      || (cellname == "e39")) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'mergersacquisitioncm', body, {}, apiname, 'mergersAcquisitionCMActiveStatus').subscribe(
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

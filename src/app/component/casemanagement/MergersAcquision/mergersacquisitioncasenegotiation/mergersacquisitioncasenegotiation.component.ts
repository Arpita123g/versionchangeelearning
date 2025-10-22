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
  selector: 'app-mergersacquisitioncasenegotiation',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './mergersacquisitioncasenegotiation.component.html',
  styleUrls: ['./mergersacquisitioncasenegotiation.component.scss']
})
export class MergersacquisitioncasenegotiationComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(30).fill(null);
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
    if ((cellname == "ac38") || (cellname == "ac39") || (cellname == "ac40") || (cellname == "ac16") || (cellname == "ac17")
      || (cellname == "ac18") || (cellname == "ac19") || (cellname == "ac20") || (cellname == "ac21") || (cellname == "ad16")
      || (cellname == "ad17") || (cellname == "ad18") || (cellname == "ad19") || (cellname == "ad20") || (cellname == "ad21")
      || (cellname == "ae16") || (cellname == "ae17") || (cellname == "ae18") || (cellname == "ae19") || (cellname == "ae20")
      || (cellname == "ae21") || (cellname == "af16") || (cellname == "af17") || (cellname == "af18") || (cellname == "af19")
      || (cellname == "af20") || (cellname == "af21") || (cellname == "ag16") || (cellname == "ag17") || (cellname == "ag18")
      || (cellname == "ag19") || (cellname == "ag20") || (cellname == "ag21") || (cellname == "ah16") || (cellname == "ah17")
      || (cellname == "ah18") || (cellname == "ah19") || (cellname == "ah20") || (cellname == "ah21") || (cellname == "ai16")
      || (cellname == "ai17") || (cellname == "ai18") || (cellname == "ai19") || (cellname == "ai20") || (cellname == "ai21")
      || (cellname == "aj16") || (cellname == "aj17") || (cellname == "aj18") || (cellname == "aj19") || (cellname == "aj20")
      || (cellname == "aj21") || (cellname == "ak16") || (cellname == "ak17") || (cellname == "ak18") || (cellname == "ak19")
      || (cellname == "ak20") || (cellname == "ak21") || (cellname == "al16") || (cellname == "al17") || (cellname == "al18")
      || (cellname == "al19") || (cellname == "al20") || (cellname == "al21")) {
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

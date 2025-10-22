import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';


@Component({
  selector: 'app-portfoliocasephasethree',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './portfoliocasephasethree.component.html',
  styleUrls: ['./portfoliocasephasethree.component.scss']
})
export class PortfoliocasephasethreeComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(100).fill(null);
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService,) {
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
      let apiname = "/portfoliomanagementmaster/fetchportfoliomanagementmaster"
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
              this.checkloading = false;
            }
          this.checkloading = false;
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/portfoliomanagementcm/fetchportfoliomanagementcm"
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
              this.checkloading = false;
            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }
  }

  writephaseonevalue(cellname: string, index: number, value: any) {
    let apiname = '/portfoliomanagementcm/updateportfoliomanagementcm'

    if (
      (cellname == "u8") || (cellname == "u9") ||
      (cellname == "u13") || (cellname == "u14") || (cellname == "u16") || (cellname == "u17") ||
      (cellname == "u21") || (cellname == "u22") || (cellname == "u24") || (cellname == "u25") ||
      (cellname == "u29") || (cellname == "u30") || (cellname == "u32") || (cellname == "u33") ||
      (cellname == "u37") || (cellname == "u38") || (cellname == "u40") || (cellname == "u41") ||
      (cellname == "u45") || (cellname == "u46") || (cellname == "u48") || (cellname == "u49") ||
      (cellname == "u53") || (cellname == "u54") || (cellname == "u56") || (cellname == "u57") ||
      (cellname == "u61") || (cellname == "u62") || (cellname == "u64") || (cellname == "u65")

    ) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,

    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'portfoliomanagementcm', body, {}, apiname, 'portfoliomanagementcmactivestatus').subscribe(
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

      }
    )
  }

  override ngOnDestroy(): void {
    this.Instructorelementdetailssub.unsubscribe();
  }
}

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
  selector: 'app-portfoliocasephaseone',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './portfoliocasephaseone.component.html',
  styleUrls: ['./portfoliocasephaseone.component.scss']
})
export class PortfoliocasephaseoneComponent extends AbstractComponent {
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
      (cellname == "f9") || (cellname == "f10") ||
      (cellname == "f13") || (cellname == "g13") || (cellname == "h13") || (cellname == "i13") || (cellname == "j13") || (cellname == "k13") || (cellname == "l13") || (cellname == "m13") || (cellname == "n13") ||
      (cellname == "f14") || (cellname == "g14") || (cellname == "h14") || (cellname == "i14") || (cellname == "j14") || (cellname == "k14") || (cellname == "l14") || (cellname == "m14") || (cellname == "n14") ||
      (cellname == "f15") || (cellname == "g15") || (cellname == "h15") || (cellname == "i15") || (cellname == "j15") || (cellname == "k15") || (cellname == "l15") || (cellname == "m15") || (cellname == "n15") ||
      (cellname == "f16") || (cellname == "g16") || (cellname == "h16") || (cellname == "i16") || (cellname == "j16") || (cellname == "k16") || (cellname == "l16") || (cellname == "m16") || (cellname == "n16") ||
      (cellname == "f17") || (cellname == "g17") || (cellname == "h17") || (cellname == "i17") || (cellname == "j17") || (cellname == "k17") || (cellname == "l17") || (cellname == "m17") || (cellname == "n17") ||
      (cellname == "f18") || (cellname == "g18") || (cellname == "h18") || (cellname == "i18") || (cellname == "j18") || (cellname == "k18") || (cellname == "l18") || (cellname == "m18") || (cellname == "n18") ||
      (cellname == "f19") || (cellname == "g19") || (cellname == "h19") || (cellname == "i19") || (cellname == "j19") || (cellname == "k19") || (cellname == "l19") || (cellname == "m19") || (cellname == "n19") ||
      (cellname == "f22") || (cellname == "f23") || (cellname == "f25") || (cellname == "f26") ||
      (cellname == "f30") || (cellname == "f31") || (cellname == "f33") || (cellname == "f34") ||
      (cellname == "f38") || (cellname == "f39") || (cellname == "f41") || (cellname == "f42") ||
      (cellname == "f46") || (cellname == "f47") || (cellname == "f49") || (cellname == "f50") ||
      (cellname == "f54") || (cellname == "f55") || (cellname == "f57") || (cellname == "f58") ||
      (cellname == "f62") || (cellname == "f63") || (cellname == "f65") || (cellname == "f66") ||
      (cellname == "f70") || (cellname == "f71") || (cellname == "f73") || (cellname == "f74")

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

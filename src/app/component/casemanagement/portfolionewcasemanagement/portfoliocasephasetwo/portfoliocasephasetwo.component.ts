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
  selector: 'app-portfoliocasephasetwo',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './portfoliocasephasetwo.component.html',
  styleUrls: ['./portfoliocasephasetwo.component.scss']
})
export class PortfoliocasephasetwoComponent extends AbstractComponent {
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
      (cellname == "q8") || (cellname == "q9") ||
      (cellname == "q13") || (cellname == "q14") || (cellname == "q16") || (cellname == "q17") ||
      (cellname == "q21") || (cellname == "q22") || (cellname == "q24") || (cellname == "q25") ||
      (cellname == "q29") || (cellname == "q30") || (cellname == "q32") || (cellname == "q33") ||
      (cellname == "q37") || (cellname == "q38") || (cellname == "q40") || (cellname == "q41") ||
      (cellname == "q45") || (cellname == "q46") || (cellname == "q48") || (cellname == "q49") ||
      (cellname == "q53") || (cellname == "q54") || (cellname == "q56") || (cellname == "q57") ||
      (cellname == "q61") || (cellname == "q62") || (cellname == "q64") || (cellname == "q65")

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

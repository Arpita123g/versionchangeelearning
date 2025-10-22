import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-innovationcasedevelopment',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule],
  templateUrl: './innovationcasedevelopment.component.html',
  styleUrls: ['./innovationcasedevelopment.component.scss']
})
export class InnovationcasedevelopmentComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(20).fill(null);
  data2: any[] = Array(40).fill(null);
  data1: any[] = Array(30).fill(null);
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
      let apiname = "/innovationgamemaster/fetchinnovationgamemaster"
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
            console.log("v22", this.res.v6)
          }

          this.checkloading = false;
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/innovationgamecm/fetchinnovationgamecm"
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
              console.log("v22", this.res.v6)
            }

          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }


  }

  writeMarketingValue(cellname: string, index: number, value: any) {
    let apiname = '/innovationgamecm/updateinnovationgamecm'
    if ((cellname == "n8") || (cellname == "n9") || (cellname == "n10") || (cellname == "n11") || (cellname == "n12")
      || (cellname == "n13") || (cellname == "n14") || (cellname == "n15") || (cellname == "n16") || (cellname == "n17")
      || (cellname == "n21") || (cellname == "n22") || (cellname == "n23") || (cellname == "n24") || (cellname == "n25")
      || (cellname == "n26") || (cellname == "n27") || (cellname == "n28") || (cellname == "n29") || (cellname == "n30")
      || (cellname == "n34") || (cellname == "n35") || (cellname == "n36") || (cellname == "n37") || (cellname == "n38")
      || (cellname == "n39") || (cellname == "n40") || (cellname == "n41") || (cellname == "n42") || (cellname == "n43")
      || (cellname == "m47") || (cellname == "m48") || (cellname == "m49") || (cellname == "m50") || (cellname == "m51")
      || (cellname == "m52") || (cellname == "m53") || (cellname == "m54") || (cellname == "m55") || (cellname == "m56")
      || (cellname == "m60") || (cellname == "m61") || (cellname == "m62") || (cellname == "m63") || (cellname == "m64")
      || (cellname == "m65") || (cellname == "m66") || (cellname == "m67") || (cellname == "m68") || (cellname == "m69")
    ) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'innovationgamecm', body, {}, apiname, 'innovationgamecmactivestatus').subscribe(
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

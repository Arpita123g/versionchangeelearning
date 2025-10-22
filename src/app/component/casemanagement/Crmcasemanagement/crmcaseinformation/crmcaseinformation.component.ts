import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

@Component({
  selector: 'app-crmcaseinformation',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, TippyDirective],
  templateUrl: './crmcaseinformation.component.html',
  styleUrls: ['./crmcaseinformation.component.scss']
})
export class CrmcaseinformationComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(20).fill(null);
  data1: any[] = Array(30).fill(null);

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }
  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
     let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
    this.getFetchData();

  }


  getFetchData() {
    //***********it will be uncommitted*******************/
    let apiname = "/crmgamecm/fetchcrmgamecm"
    this._api.fetchCaseManagementData(apiname).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj.crmgameperioddata).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj.crmgameperioddata[key]);
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

  writeMarketingValue(cellname: string, index: number, value: any) {
     // Check if the value is numeric (integer or decimal) after removing commas
     const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

     // If the value is numeric, remove commas
     if (isNumeric) {
         value = value.replace(/,/g, '');
     }
    let apiname = '/crmgamecm/updatecrmgamecm'
    if ((cellname == "e8") || (cellname == "e9") || (cellname == "e10") || (cellname == "e23") || (cellname == "e24") ||
      (cellname == "e25") || (cellname == "e28") || (cellname == "e29") || (cellname == "e30") || (cellname == "e38") ||
      (cellname == "e39") || (cellname == "e40") || (cellname == "f38") || (cellname == "f39") || (cellname == "f40") ||
      (cellname == "e63") || (cellname == "e64") || (cellname == "e65") || (cellname == "e73") || (cellname == "e74") || 
      (cellname == "e75")

    ) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'crmgamecm', body, {}, apiname, 'crmgamecmactivestatus').subscribe(
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

}

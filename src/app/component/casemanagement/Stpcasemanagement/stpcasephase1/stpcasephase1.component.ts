import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-stpcasephase1',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './stpcasephase1.component.html',
  styleUrls: ['./stpcasephase1.component.scss']
})
export class Stpcasephase1Component extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(20).fill(null);
  data1: any[] = Array(30).fill(null);
  data2: any[] = Array(50).fill(null);
  selectedLanguage: string = "english";
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
      let apiname = "/stpgamemaster/fetchstpgamemaster";
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status === "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  // Iterate over the keys of stpgameperioddata and convert them to lowercase
                  Object.keys(obj.stpgameperioddata).forEach((key: any) => {
                    const lowercaseKey = key.toLowerCase(); // Convert key to lowercase

                    if (!this.res[lowercaseKey]) {
                      this.res[lowercaseKey] = [];
                    }
                    this.res[lowercaseKey].push(obj.stpgameperioddata[key]);
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

      let apiname = "/stpgamecm/fetchstpgamecm";
      this._api.fetchCaseManagementData(apiname).subscribe({
        next: (data: any) => {
          if (data.status === "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                // Iterate over the keys of stpgameperioddata and convert them to lowercase
                Object.keys(obj.stpgameperioddata).forEach((key: any) => {
                  const lowercaseKey = key.toLowerCase(); // Convert key to lowercase

                  if (!this.res[lowercaseKey]) {
                    this.res[lowercaseKey] = [];
                  }
                  this.res[lowercaseKey].push(obj.stpgameperioddata[key]);
                });
              });
            }
          }
        },
        error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      });
    }

  }

  writeMarketingValue(cellname: string, index: number, value: any) {
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/stpgamecm/updatestpgamecm'
    if ((cellname == "l10") || (cellname == "l11") || (cellname == "l12") || (cellname == "l13")

    ) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'stpgamecm', body, {}, apiname, 'stpgamecmactivestatus').subscribe(
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
  override ngOnDestroy() {
    this.Instructorelementdetailssub.unsubscribe();
  
  } 

}

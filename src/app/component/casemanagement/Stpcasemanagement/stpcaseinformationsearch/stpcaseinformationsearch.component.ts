import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stpcaseinformationsearch',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './stpcaseinformationsearch.component.html',
  styleUrls: ['./stpcaseinformationsearch.component.scss']
})
export class StpcaseinformationsearchComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(20).fill(null);
  data1: any[] = Array(40).fill(null);
  data2: any[] = Array(60).fill(null);
  data3: any[] = Array(50).fill(null);
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
    if ((cellname == "d57") || (cellname == "d58") || (cellname == "d59") || (cellname == "d61") ||
      (cellname == "d62") || (cellname == "d63") || (cellname == "e57") || (cellname == "e58") || (cellname == "e59") ||
      (cellname == "e60") || (cellname == "e61") || (cellname == "e62") || (cellname == "e63") || (cellname == "f57") ||
      (cellname == "f58") || (cellname == "f59") || (cellname == "f60") || (cellname == "f61") || (cellname == "f62") ||
      (cellname == "f63") || (cellname == "g57") || (cellname == "g58") || (cellname == "g59") || (cellname == "g60") ||
      (cellname == "g61") || (cellname == "g62") || (cellname == "g63") || (cellname == "h57") || (cellname == "h58") ||
      (cellname == "h59") || (cellname == "h60") || (cellname == "h61") || (cellname == "h62") || (cellname == "h63") ||
      (cellname == "d67") || (cellname == "d68") || (cellname == "d69") || (cellname == "d71") ||
      (cellname == "d72") || (cellname == "d73") || (cellname == "e67") || (cellname == "e68") || (cellname == "e69") ||
      (cellname == "e70") || (cellname == "e71") || (cellname == "e72") || (cellname == "e73") || (cellname == "f67") ||
      (cellname == "f68") || (cellname == "f69") || (cellname == "f70") || (cellname == "f71") || (cellname == "f72") ||
      (cellname == "f73") || (cellname == "g67") || (cellname == "g68") || (cellname == "g69") || (cellname == "g70") ||
      (cellname == "g71") || (cellname == "g72") || (cellname == "g73") || (cellname == "h67") || (cellname == "h68") ||
      (cellname == "h69") || (cellname == "h70") || (cellname == "h71") || (cellname == "h72") || (cellname == "h73")

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

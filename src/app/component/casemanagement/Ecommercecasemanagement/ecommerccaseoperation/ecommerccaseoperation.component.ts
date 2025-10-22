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
    selector: 'app-ecommerccaseoperation',
    standalone: true,
    imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
    templateUrl: './ecommerccaseoperation.component.html',
    styleUrls: ['./ecommerccaseoperation.component.scss']
  })
  export class EcommerccaseoperationComponent extends AbstractComponent {
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
        let apiname = "/ecommercegamemaster/fetchecommercegamemaster"
        this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  Object.keys(obj.ecommercegameperioddata).forEach((key: any) => {
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    this.res[key].push(obj.ecommercegameperioddata[key]);
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
        let apiname = "/ecommercegamecm/fetchecommercegamecm"
        this._api.fetchCaseManagementData(apiname).subscribe(
          {
            next: (data: any) => {
              if (data.status == "Success") {
                if (data.resultList != null) {
                  data.resultList.forEach((obj: any) => {
                    Object.keys(obj.ecommercegameperioddata).forEach((key: any) => {
                      if (!this.res[key]) {
                        this.res[key] = [];
                      }
                      this.res[key].push(obj.ecommercegameperioddata[key]);
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
      // Check if the value is numeric (integer or decimal) after removing commas
      const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

      // If the value is numeric, remove commas
      if (isNumeric) {
        value = value.replace(/,/g, '');
      }
      let apiname = '/ecommercegamecm/updateecommercegamecm'
      if ((cellname == "ap29") || (cellname == "ao33") || (cellname == "ao34") || (cellname == "ao35") || (cellname == "ao36")
        || (cellname == "ao37") || (cellname == "ao38") || (cellname == "ao39") || (cellname == "ap33") || (cellname == "ap34")
        || (cellname == "ap35") || (cellname == "ap36") || (cellname == "ap37") || (cellname == "ap38") || (cellname == "ap39")) {
        value = Number(value) / 100;
      }
      let body = {
        [cellname]: value,
      }
      this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'ecommercegamecm', body, {}, apiname, 'ecommercegamecmactivestatus').subscribe(
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

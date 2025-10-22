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


@Component({
  selector: 'app-salestargetcasemodule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './salestargetcasemodule.component.html',
  styleUrls: ['./salestargetcasemodule.component.scss']
})
export class SalestargetcasemoduleComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
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
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/salestargetmaster/fetchsalestargetmaster"
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
    } else{
      let apiname = "/salestargetcm/fetchsalestargetcm"
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


  writeData(cellname: string, index: any, value: any) {
   
  }
  
  writeModuleValue(index: number, updatedsearchtypevalue: string, modulestatusvalue: string, cellname: string, value1: any, value2: any) {
    let apiname = '/salestargetcm/updatesalestargetcm'

    let body1 = {}
    let body2 = {}
    if (modulestatusvalue == "yes") {
      if (value2.target.checked == false) {
        value2 = 'inactive'
      } else {
        value2 = 'active'
      }
      body1 = {}
      body2 = {
        [cellname]: value2,
      }
    } else {
      body1 = { [cellname]: value1, }
      body2 = {}
    }

    this._api.updatecasemanagementdata(String(index + 1), updatedsearchtypevalue, modulestatusvalue, 'salestargetcm', body1, body2, apiname, 'salestargetcmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (modulestatusvalue == 'yes') {
              this.res.salesTargetCMActiveStatus[index][cellname] = value2;
            }


          } else {
            if (modulestatusvalue == 'yes') {
              this.res.salesTargetCMActiveStatus[index][cellname] = this.res.salesTargetCMActiveStatus[index][cellname];
            } else {
              this.res[cellname][index] = this.res.cellname[index];
            }

          }

        }, error: (error: any) => {
          if (modulestatusvalue == 'yes') {
            this.res.salesTargetCMActiveStatus[index][cellname] = this.res.salesTargetCMActiveStatus[index][cellname];
          }
          this.checkloading = false;
          //  this.driveerrorLog(error, apiname);
        }
      })



  }

  override ngOnDestroy() {
    this.Instructorelementdetailssub.unsubscribe();
  
  }

}

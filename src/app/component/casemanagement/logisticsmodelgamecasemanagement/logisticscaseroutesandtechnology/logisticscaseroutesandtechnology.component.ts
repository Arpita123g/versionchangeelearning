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
  selector: 'app-logisticscaseroutesandtechnology',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './logisticscaseroutesandtechnology.component.html',
  styleUrls: ['./logisticscaseroutesandtechnology.component.scss']
})
export class LogisticscaseroutesandtechnologyComponent extends AbstractComponent {
  defaultcase:string = "";
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

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/logisticsmaster/fetchlogisticsmaster"
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
              this.checkloading = false;
  
            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    } else{
      let apiname = "/logisticscm/fetchlogisticscm"
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
  writeLogisticsValue(cellname: string, index: number, value: any) {
    let apiname = '/logisticscm/updatelogisticscm'
   
   
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal","no",'logisticscm',body,{},apiname,'logisticscmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            // this.res[cellname][index] = value;
          }else{
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

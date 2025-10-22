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

@Component({
  selector: 'app-consumercasetarget',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumercasetarget.component.html',
  styleUrls: ['./consumercasetarget.component.scss']
})
export class ConsumercasetargetComponent extends AbstractComponent {
  defaultcase:string = "";
  res: any = [];
  data: any[] = Array(30).fill(null);
  data1: any[] = Array(20).fill(null);
  data2: any[] = Array(40).fill(null);



  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
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
    let apiname = "/consumerbehaviourcm/fetchconsumerbehaviourcm"
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
  writeTargetValue(cellname: string, index: number, value: any) {
    let apiname = '/consumerbehaviourcm/updateconsumerbehaviourcm'
    if((cellname == "k116")||(cellname == "k117")||(cellname == "k118")||(cellname == "k119")||(cellname == "k120")
    ||(cellname == "k124")||(cellname == "l124")||(cellname == "m124")||(cellname == "k128")||(cellname == "l128")
    ||(cellname == "m128")||(cellname == "k129")||(cellname == "l129")||(cellname == "m129")||(cellname == "k130")
    ||(cellname == "l130")||(cellname == "m130")||(cellname == "k131")||(cellname == "l131")||(cellname == "m131")
    ||(cellname == "k132")||(cellname == "l132")||(cellname == "m132")||(cellname == "k136")||(cellname == "k137")
    ||(cellname == "k138")||(cellname == "k139")||(cellname == "k140")||(cellname == "k141")||(cellname == "k142")
    ||(cellname == "k143")||(cellname == "k144")||(cellname == "k145")||(cellname == "k146")||(cellname == "k147")
    ||(cellname == "k151")||(cellname == "k152")||(cellname == "k153")){
    value = Number(value)/100;
  }
   
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal","no",'consumerbehaviourcm',body,{},apiname,'consumerbehaviourcmactivestatus').subscribe(
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
  //for testing
  // getFetchData() {
  //   ***********it will be uncommitted*******************/
  //   let apiname = "/consumercasemanagement/fetchconsumercasemanagement"
  //   this._api.fetchCaseManagementData(apiname).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (this.testingvalue.status == "Success") {
  //           if (this.testingvalue.resultList != null) {
  //             this.testingvalue.resultList.forEach((obj: any) => {
  //               Object.keys(obj).forEach((key: any) => {
  //                 if (!this.res[key]) {
  //                   this.res[key] = [];
  //                 }
  //                 this.res[key].push(obj[key]);
  //               });
  //             });
  //           }
  //         }

  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }

}

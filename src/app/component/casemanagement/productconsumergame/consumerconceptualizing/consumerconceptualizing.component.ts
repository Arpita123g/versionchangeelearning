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
  selector: 'app-consumerconceptualizing',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumerconceptualizing.component.html',
  styleUrls: ['./consumerconceptualizing.component.scss']
})
export class ConsumerconceptualizingComponent extends AbstractComponent {
  defaultcase:string = "";
  res: any = [];
  data: any[] = Array(30).fill(null);
  data1: any[] = Array(20).fill(null);
 

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

  writeConceptualizingValue(cellname: string, index: number, value: any) {
    let apiname = '/consumerbehaviourcm/updateconsumerbehaviourcm'
    if((cellname == "q104")||(cellname == "q105")||(cellname == "q106")||(cellname == "q107")||(cellname == "q108")
      ||(cellname == "q118")||(cellname == "r118")||(cellname == "q119")||(cellname == "r119")||(cellname == "q120")
      ||(cellname == "r120")||(cellname == "q121")||(cellname == "r121")){
      value = Number(value)/100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal","no",'consumerbehaviourcm',body,{},apiname,'consumerbehaviourcmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            }else{
            this.res[cellname][index] = this.res[cellname][index];
          }
        }, error: (error: any) => {
          this.checkloading = false;
          }
      })
  }

  
}

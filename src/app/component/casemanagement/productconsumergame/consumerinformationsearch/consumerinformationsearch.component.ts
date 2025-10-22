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
  selector: 'app-consumerinformationsearch',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumerinformationsearch.component.html',
  styleUrls: ['./consumerinformationsearch.component.scss']
})
export class ConsumerinformationsearchComponent extends AbstractComponent {
  res: any = [];
  defaultcase:string = "";
  data: any[] = Array(20).fill(null);
  
  

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
    this.checkloading = true;
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

  writeInformationValue(cellname: string, index: number, value: any) {
    let apiname = '/consumerbehaviourcm/updateconsumerbehaviourcm'
    if((cellname == "e99")||(cellname == "f99")||(cellname == "e100")||(cellname == "f100")||(cellname == "e101")
    ||(cellname == "f101")||(cellname == "e102")||(cellname == "f102")||(cellname == "e103")||(cellname == "f103")
    ||(cellname == "e107")||(cellname == "f107")||(cellname == "g107")||(cellname == "h107")||(cellname == "e108")
    ||(cellname == "f108")||(cellname == "g108")||(cellname == "h108")||(cellname == "e109")||(cellname == "f109")
    ||(cellname == "g109")||(cellname == "h109")||(cellname == "e110")||(cellname == "f110")||(cellname == "g110")
    ||(cellname == "h110")||(cellname == "e111")||(cellname == "f111")||(cellname == "g111")||(cellname == "h111")
    ||(cellname == "e115")||(cellname == "f115")||(cellname == "g115")||(cellname == "h115")||(cellname == "e116")
    ||(cellname == "f116")||(cellname == "g116")||(cellname == "h116")||(cellname == "e117")||(cellname == "f117")
    ||(cellname == "g117")||(cellname == "h117")||(cellname == "e118")||(cellname == "f118")||(cellname == "g118")
    ||(cellname == "h118")||(cellname == "e119")||(cellname == "f119")||(cellname == "g119")||(cellname == "h119")
    ||(cellname == "e123")||(cellname == "f123")||(cellname == "g123")||(cellname == "h123")||(cellname == "e124")
    ||(cellname == "f124")||(cellname == "g124")||(cellname == "h124")||(cellname == "e125")||(cellname == "f125")
    ||(cellname == "g125")||(cellname == "h125")||(cellname == "e126")||(cellname == "f126")||(cellname == "g126")
    ||(cellname == "f126")||(cellname == "e127")||(cellname == "f127")||(cellname == "g127")||(cellname == "h127")
    ||(cellname == "e131")||(cellname == "f131")||(cellname == "g131")||(cellname == "h131")||(cellname == "e132")
    ||(cellname == "f132")||(cellname == "g132")||(cellname == "h132")||(cellname == "e133")||(cellname == "f133")
    ||(cellname == "g133")||(cellname == "h133")||(cellname == "e134")||(cellname == "f134")||(cellname == "g134")
    ||(cellname == "h134")||(cellname == "e135")||(cellname == "f135")||(cellname == "g135")||(cellname == "h135")
    ||(cellname == "e136")||(cellname == "f136")||(cellname == "g136")||(cellname == "h136")||(cellname == "e137")
    ||(cellname == "f137")||(cellname == "g137")||(cellname == "h137")||(cellname == "e138")||(cellname == "f138")
    ||(cellname == "g138")||(cellname == "h138")||(cellname == "e139")||(cellname == "f139")||(cellname == "g139")
    ||(cellname == "h139")||(cellname == "e140")||(cellname == "f140")||(cellname == "g140")||(cellname == "h140")
    ||(cellname == "e147")||(cellname == "f147")||(cellname == "g147")||(cellname == "h147")||(cellname == "e148")
    ||(cellname == "f148")||(cellname == "g148")||(cellname == "h148")||(cellname == "e149")||(cellname == "f149")
    ||(cellname == "g149")||(cellname == "h149")||(cellname == "e150")||(cellname == "f150")||(cellname == "g150")
    ||(cellname == "h150")||(cellname == "e151")||(cellname == "f151")||(cellname == "g151")||(cellname == "h151")
    ||(cellname == "e152")||(cellname == "f152")||(cellname == "g152")||(cellname == "h152")||(cellname == "e153")
    ||(cellname == "f153")||(cellname == "g153")||(cellname == "h153")||(cellname == "e154")||(cellname == "f154")
    ||(cellname == "g154")||(cellname == "h154")||(cellname == "e155")||(cellname == "f155")||(cellname == "g155")
    ||(cellname == "h155")||(cellname == "e156")||(cellname == "f156")||(cellname == "g156")||(cellname == "h156")){
    value = Number(value)/100;
  }
    
   
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1),'normal','no','consumerbehaviourcm',body, {},apiname,'consumerbehaviourcmactivestatus').subscribe(
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

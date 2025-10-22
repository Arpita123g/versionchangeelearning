import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

@Component({
  selector: 'app-hrmcase-acquisition',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrmcase-acquisition.component.html',
  styleUrls: ['../hrmcase.scss']
})
export class HrmcaseAcquisitionComponent extends AbstractComponent {


  override rounds = [
    // 'Round 0',
    'Round 1',
    'Round 2',
    'Round 3',
    'Round 4',
    'Round 5',
  ];
  generalheading = [
    "Sales", "Product & Engineering", "Customer Success", "Design & Communication"
  ]
  acquisationdata = [
    {
      maintitle: "Span of Control Junior Management to Senior Management",
      title: "Organisational Heirarchy Junior to Senior Management ratio",
      cell: ['e78', 'f78', 'g78', 'h78', 'e79', 'f79', 'g79', 'h79', 'e80', 'f80', 'g80', 'h80', 'e81', 'f81', 'g81', 'h81', 'e82', 'f82', 'g82', 'h82']

    },
    {
      maintitle: "Span of Control Senior Management to Top Management",
      title: "Organisational Heirarchy Senior to Top Management ratio",
      cell: ['e86', 'f86', 'g86', 'h86', 'e87', 'f87', 'g87', 'h87', 'e88', 'f88', 'g88', 'h88', 'e89', 'f89', 'g89', 'h89', 'e90', 'f90', 'g90', 'h90']

    },
    {
      maintitle: "Firing Cost",
      title: "Firing Cost as % of salary for Junior Management",
      cell: ['e94', 'f94', 'g94', 'h94', 'e95', 'f95', 'g95', 'h95', 'e96', 'f96', 'g96', 'h96', 'e97', 'f97', 'g97', 'h97', 'e98', 'f98', 'g98', 'h98']
    },
    {
      maintitle: null,
      title: "Firing Cost as % of salary for Senior Management",
      cell: ['e102', 'f102', 'g102', 'h102', 'e103', 'f103', 'g103', 'h103', 'e104', 'f104', 'g104', 'h104', 'e105', 'f105', 'g105', 'h105', 'e106', 'f106', 'g106', 'h106']

    },
    {
      maintitle: null,
      title: "Firing Cost as % of salary for Top Management",
      cell: ['e110', 'f110', 'g110', 'h110', 'e111', 'f111', 'g111', 'h111', 'e112', 'f112', 'g112', 'h112', 'e113', 'f113', 'g113', 'h113', 'e114', 'f114', 'g114', 'h114']

    }
  ]

  channelmix = {
    thead: ["Type of Channel mix", "% of Salary as Cost"],
    tbody: [
      { type: "Channel mix 1", salarycostcell: "f70" },
      { type: "Channel mix 2", salarycostcell: "f71" },
      { type: "Channel mix 3", salarycostcell: "f72" },
      { type: "Channel mix 4", salarycostcell: "f73" },
      { type: "Channel mix 5", salarycostcell: "f74" },
    ]
  }
  defaultcase: string = "";
  res: { [key: string]: any } = {};
  result: any = {};
  attempt: string = "1";
  Instructorelementdetailssub: Subscription;
  languageData: any = [];
  instructorcarddetails: any = [];


  getJValue(i: number): number {
    // Divide the index by 4 and return the quotient (i.e., the round number)
    return Math.floor(i / 4);
  }


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
    // this.getFetchData();

    let caseType = localStorage.getItem('selectedTab')
     if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }

    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.checkloading = false;
    this.getFetchData();

   
  }


  getFetchData() {
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/hrmgamemaster/fetchhrmgamemaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj.hrmgameperioddata).forEach((key: any) => {

                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  if (['e93', 'f93', 'g93', 'h93', 'e94', 'f94', 'g94', 'h94', 'e95', 'f95', 'g95', 'h95', 'e96', 'f96', 'g96', 'h96', 'e97', 'f97', 'g97', 'h97', 'e98', 'f98', 'g98', 'h98',
                    'e101', 'f101', 'g101', 'h101', 'e102', 'f102', 'g102', 'h102', 'e103', 'f103', 'g103', 'h103', 'e104', 'f104', 'g104', 'h104', 'e105', 'f105', 'g105', 'h105', 'e106',
                    'f106', 'g106', 'h106', 'e109', 'f109', 'g109', 'h109', 'e110', 'f110', 'g110', 'h110', 'e111', 'f111', 'g111', 'h111', 'e112', 'f112', 'g112', 'h112', 'e113', 'f113',
                    'g113', 'h113', 'e114', 'f114', 'g114', 'h114'

                  ].includes(key)) {
                    this.res[key].push(obj.hrmgameperioddata[key] * 100).toFixed(0);
                  } else {
                    this.res[key].push(obj.hrmgameperioddata[key]).toFixed(0);
                  }
                })
              })
            }
          } 

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    }  else {
      let apiname = "/hrmgamecm/fetchhrmgamecm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  Object.keys(obj.hrmgameperioddata).forEach((key: any) => {
  
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    if (['e93', 'f93', 'g93', 'h93', 'e94', 'f94', 'g94', 'h94', 'e95', 'f95', 'g95', 'h95', 'e96', 'f96', 'g96', 'h96', 'e97', 'f97', 'g97', 'h97', 'e98', 'f98', 'g98', 'h98',
                      'e101', 'f101', 'g101', 'h101', 'e102', 'f102', 'g102', 'h102', 'e103', 'f103', 'g103', 'h103', 'e104', 'f104', 'g104', 'h104', 'e105', 'f105', 'g105', 'h105', 'e106',
                      'f106', 'g106', 'h106', 'e109', 'f109', 'g109', 'h109', 'e110', 'f110', 'g110', 'h110', 'e111', 'f111', 'g111', 'h111', 'e112', 'f112', 'g112', 'h112', 'e113', 'f113',
                      'g113', 'h113', 'e114', 'f114', 'g114', 'h114'
  
                    ].includes(key)) {
                      this.res[key].push(obj.hrmgameperioddata[key] * 100).toFixed(0);
                    } else {
                      this.res[key].push(obj.hrmgameperioddata[key]).toFixed(0);
                    }
                  })
                })
              }
            } 
            this.checkloading = false;
  
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        }
      )

    }









   
  }
  writeHRMValue(cellname: string, index: number, value: any) {
    let apiname = '/hrmgamecm/updatehrmgamecm'
    if (['e93', 'f93', 'g93', 'h93', 'e94', 'f94', 'g94', 'h94', 'e95', 'f95', 'g95', 'h95', 'e96', 'f96', 'g96', 'h96', 'e97', 'f97', 'g97', 'h97', 'e98', 'f98', 'g98', 'h98',
      'e101', 'f101', 'g101', 'h101', 'e102', 'f102', 'g102', 'h102', 'e103', 'f103', 'g103', 'h103', 'e104', 'f104', 'g104', 'h104', 'e105', 'f105', 'g105', 'h105', 'e106',
      'f106', 'g106', 'h106', 'e109', 'f109', 'g109', 'h109', 'e110', 'f110', 'g110', 'h110', 'e111', 'f111', 'g111', 'h111', 'e112', 'f112', 'g112', 'h112', 'e113', 'f113',
      'g113', 'h113', 'e114', 'f114', 'g114', 'h114'].includes(cellname)) {
      value = Number(value) / 100;
    }

    let body = {
      [cellname]: value,
    }
   
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'hrmgamecm', body, {}, apiname, 'hrmgamecmactivestatus').subscribe(
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

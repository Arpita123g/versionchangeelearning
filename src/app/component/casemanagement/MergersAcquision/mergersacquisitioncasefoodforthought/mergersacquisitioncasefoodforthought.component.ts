import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-mergersacquisitioncasefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './mergersacquisitioncasefoodforthought.component.html',
  styleUrls: ['./mergersacquisitioncasefoodforthought.component.scss']
})
export class MergersacquisitioncasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought = [
    {
      question: ["ar7", "ar7"],

      option: [["as7", "as8", "as9"], ["as7", "as8", "as9"]],

      feedback: [["at7", "at8", "at9"], ["at7", "at8", "at9"]],

      score: [["au7", "au8", "au9"], ["au7", "au8", "au9"]],

      rigor: [["av7", "av8", "av9"], ["av7", "av8", "av9"]],

      structuring: [["aw7", "aw8", "aw9"], ["aw7", "aw8", "aw9"]],

      synthesis: [["ax7", "ax8", "ax9"], ["ax7", "ax8", "ax9"]],

      business: [["ay7", "ay8", "ay9"], ["ay7", "ay8", "ay9"]],

    },
    {
      question: ["ar10", "ar10"],

      option: [["as10", "as11", "as12"], ["as10", "as11", "as12"]],

      feedback: [["at10", "at11", "at12"], ["at10", "at11", "at12"]],

      score: [["au10", "au11", "au12"], ["au10", "au11", "au12"]],

      rigor: [["av10", "av11", "av12"], ["av10", "av11", "av12"]],

      structuring: [["aw10", "aw11", "aw12"], ["aw10", "aw11", "aw12"]],

      synthesis: [["ax10", "ax11", "ax12"], ["ax10", "ax11", "ax12"]],

      business: [["ay10", "ay11", "ay12"], ["ay10", "ay11", "ay12"]],

    },
    {
      question: ["ar13", "ar13"],

      option: [["as13", "as14", "as15"], ["as13", "as14", "as15"]],

      feedback: [["at13", "at14", "at15"], ["at13", "at14", "at15"]],

      score: [["au13", "au14", "au15"], ["au13", "au14", "au15"]],

      rigor: [["av13", "av14", "av15"], ["av13", "av14", "av15"]],

      structuring: [["aw13", "aw14", "aw15"], ["aw13", "aw14", "aw15"]],

      synthesis: [["ax13", "ax14", "ax15"], ["ax13", "ax14", "ax15"]],

      business: [["ay13", "ay14", "ay15"], ["ay13", "ay14", "ay15"]],

    },
    {
      question: ["ar16", "ar16"],

      option: [["as16", "as17", "as18"], ["as16", "as17", "as18"]],

      feedback: [["at16", "at17", "at18"], ["at16", "at17", "at18"]],

      score: [["au16", "au17", "au18"], ["au16", "au17", "au18"]],

      rigor: [["av16", "av17", "av18"], ["av16", "av17", "av18"]],

      structuring: [["aw16", "aw17", "aw18"], ["aw16", "aw17", "aw18"]],

      synthesis: [["ax16", "ax17", "ax18"], ["ax16", "ax17", "ax18"]],

      business: [["ay16", "ay17", "ay18"], ["ay16", "ay17", "ay18"]],

    },
    {
      question: ["ar19", "ar19"],

      option: [["as19", "as20", "as21"], ["as19", "as20", "as21"]],

      feedback: [["at19", "at20", "at21"], ["at19", "at20", "at21"]],

      score: [["au19", "au20", "au21"], ["au19", "au20", "au21"]],

      rigor: [["av19", "av20", "av21"], ["av19", "av20", "av21"]],

      structuring: [["aw19", "aw20", "aw21"], ["aw19", "aw20", "aw21"]],

      synthesis: [["ax19", "ax20", "ax21"], ["ax19", "ax20", "ax21"]],

      business: [["ay19", "ay20", "ay21"], ["ay19", "ay20", "ay21"]],

    },
    {
      question: ["ar22", "ar22"],

      option: [["as22", "as23", "as24"], ["as22", "as23", "as24"]],

      feedback: [["at22", "at23", "at24"], ["at22", "at23", "at24"]],

      score: [["au22", "au23", "au24"], ["au22", "au23", "au24"]],

      rigor: [["av22", "av23", "av24"], ["av22", "av23", "av24"]],

      structuring: [["aw22", "aw23", "aw24"], ["aw22", "aw23", "aw24"]],

      synthesis: [["ax22", "ax23", "ax24"], ["ax22", "ax23", "ax24"]],

      business: [["ay22", "ay23", "ay24"], ["ay22", "ay23", "ay24"]],

    },
    {
      question: ["ar25", "ar25"],

      option: [["as25", "as26", "as27"], ["as25", "as26", "as27"]],

      feedback: [["at25", "at26", "at27"], ["at25", "at26", "at27"]],

      score: [["au25", "au26", "au27"], ["au25", "au26", "au27"]],

      rigor: [["av25", "av26", "av27"], ["av25", "av26", "av27"]],

      structuring: [["aw25", "aw26", "aw27"], ["aw25", "aw26", "aw27"]],

      synthesis: [["ax25", "ax26", "ax27"], ["ax25", "ax26", "ax27"]],

      business: [["ay25", "ay26", "ay27"], ["ay25", "ay26", "ay27"]],

    },
    {
      question: ["ar28", "ar28"],

      option: [["as28", "as29", "as30"], ["as28", "as29", "as30"]],

      feedback: [["at28", "at29", "at30"], ["at28", "at29", "at30"]],

      score: [["au28", "au29", "au30"], ["au28", "au29", "au30"]],

      rigor: [["av28", "av29", "av30"], ["av28", "av29", "av30"]],

      structuring: [["aw28", "aw29", "aw30"], ["aw28", "aw29", "aw30"]],

      synthesis: [["ax28", "ax29", "ax30"], ["ax28", "ax29", "ax30"]],

      business: [["ay28", "ay29", "ay30"], ["ay28", "ay29", "ay30"]],

    },


  ];
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
      let apiname = "/mergersacquisitionmaster/fetchmergersacquisitionmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  this.foodforthought[i].question[0] = data.resultList[0][this.foodforthought[i].question[0]];
                  for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                    this.foodforthought[i].option[0][j] = data.resultList[0][this.foodforthought[i].option[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                    this.foodforthought[i].feedback[0][j] = data.resultList[0][this.foodforthought[i].feedback[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                    this.foodforthought[i].score[0][j] = data.resultList[0][this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0][this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0][this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0][this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0][this.foodforthought[i].business[0][j]];
                  }
                }

              }

            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    } else {
      let apiname = "/mergersacquisitioncm/fetchmergersacquisitioncm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  this.foodforthought[i].question[0] = data.resultList[0][this.foodforthought[i].question[0]];
                  for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                    this.foodforthought[i].option[0][j] = data.resultList[0][this.foodforthought[i].option[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                    this.foodforthought[i].feedback[0][j] = data.resultList[0][this.foodforthought[i].feedback[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                    this.foodforthought[i].score[0][j] = data.resultList[0][this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0][this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0][this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0][this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0][this.foodforthought[i].business[0][j]];
                  }
                }

              }

            }

          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }



  }

  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
    let apiname = '/mergersacquisitioncm/updatemergersacquisitioncm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'mergersacquisitioncm', body, {}, apiname, 'mergersAcquisitionCMActiveStatus').subscribe(
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

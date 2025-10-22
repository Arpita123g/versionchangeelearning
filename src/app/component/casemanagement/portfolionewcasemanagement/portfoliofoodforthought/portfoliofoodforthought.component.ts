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
  selector: 'app-portfoliofoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './portfoliofoodforthought.component.html',
  styleUrls: ['./portfoliofoodforthought.component.scss']
})
export class PortfoliofoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  // status:boolean = true;
  defaultcase: string = "";
  questionanswerpaper = [
    {
      question: ["y7", "y7"],

      option: [["z7", "z8", "z9"], ["z7", "z8", "z9"]],

      feedback: [["aa7", "aa8", "aa9"], ["aa7", "aa8", "aa9"]],

      score: [["ab7", "ab8", "ab9"], ["ab7", "ab8", "ab9"]],

      rigor: [["ac7", "ac8", "ac9"], ["ac7", "ac8", "ac9"]],

      structuring: [["ad7", "ad8", "ad9"], ["ad7", "ad8", "ad9"]],

      synthesis: [["ae7", "ae8", "ae9"], ["ae7", "ae8", "ae9"]],

      business: [["af7", "af8", "af9"], ["af7", "af8", "af9"]],

    },
    {
      question: ["y10", "y10"],

      option: [["z10", "z11", "z12"], ["z10", "z11", "z12"]],

      feedback: [["aa10", "aa11", "aa12"], ["aa10", "aa11", "aa12"]],

      score: [["ab10", "ab11", "ab12"], ["ab10", "ab11", "ab12"]],

      rigor: [["ac10", "ac11", "ac12"], ["ac10", "ac11", "ac12"]],

      structuring: [["ad10", "ad11", "ad12"], ["ad10", "ad11", "ad12"]],

      synthesis: [["ae10", "ae11", "ae12"], ["ae10", "ae11", "ae12"]],

      business: [["af10", "af11", "af12"], ["af10", "af11", "af12"]],

    },
    {
      question: ["y13", "y13"],

      option: [["z13", "z14", "z15"], ["z13", "z14", "z15"]],

      feedback: [["aa13", "aa14", "aa15"], ["aa13", "aa14", "aa15"]],

      score: [["ab13", "ab14", "ab15"], ["ab13", "ab14", "ab15"]],

      rigor: [["ac13", "ac14", "ac15"], ["ac13", "ac14", "ac15"]],

      structuring: [["ad13", "ad14", "ad15"], ["ad13", "ad14", "ad15"]],

      synthesis: [["ae13", "ae14", "ae15"], ["ae13", "ae14", "ae15"]],

      business: [["af13", "af14", "af15"], ["af13", "af14", "af15"]],

    },
    {
      question: ["y16", "y16"],

      option: [["z16", "z17", "z18"], ["z16", "z17", "z18"]],

      feedback: [["aa16", "aa17", "aa18"], ["aa16", "aa17", "aa18"]],

      score: [["ab16", "ab17", "ab18"], ["ab16", "ab17", "ab18"]],

      rigor: [["ac16", "ac17", "ac18"], ["ac16", "ac17", "ac18"]],

      structuring: [["ad16", "ad17", "ad18"], ["ad16", "ad17", "ad18"]],

      synthesis: [["ae16", "ae17", "ae18"], ["ae16", "ae17", "ae18"]],

      business: [["af16", "af17", "af18"], ["af16", "af17", "af18"]],

    },
    {
      question: ["y19", "y19"],

      option: [["z19", "z20", "z21"], ["z10", "z11", "z12"]],

      feedback: [["aa19", "aa20", "aa21"], ["aa19", "aa20", "aa21"]],

      score: [["ab19", "ab20", "ab21"], ["ab19", "ab20", "ab21"]],

      rigor: [["ac19", "ac20", "ac21"], ["ac19", "ac20", "ac21"]],

      structuring: [["ad19", "ad20", "ad21"], ["ad19", "ad20", "ad21"]],

      synthesis: [["ae19", "ae20", "ae21"], ["ae19", "ae20", "ae21"]],

      business: [["af19", "af20", "af21"], ["af19", "af20", "af21"]],

    },
    {
      question: ["y22", "y22"],

      option: [["z22", "z23", "z24"], ["z22", "z23", "z24"]],

      feedback: [["aa22", "aa23", "aa24"], ["aa22", "aa23", "aa24"]],

      score: [["ab22", "ab23", "ab24"], ["ab22", "ab23", "ab24"]],

      rigor: [["ac22", "ac23", "ac24"], ["ac22", "ac23", "ac24"]],

      structuring: [["ad22", "ad23", "ad24"], ["ad22", "ad23", "ad24"]],

      synthesis: [["ae22", "ae23", "ae24"], ["ae22", "ae23", "ae24"]],

      business: [["af22", "af23", "af24"], ["af22", "af23", "af24"]],

    },
    {
      question: ["y25", "y25"],

      option: [["z25", "z26", "z27"], ["z25", "z26", "z27"]],

      feedback: [["aa25", "aa26", "aa27"], ["aa25", "aa26", "aa27"]],

      score: [["ab25", "ab26", "ab27"], ["ab25", "ab26", "ab27"]],

      rigor: [["ac25", "ac26", "ac27"], ["ac25", "ac26", "ac27"]],

      structuring: [["ad25", "ad26", "ad27"], ["ad25", "ad26", "ad27"]],

      synthesis: [["ae25", "ae26", "ae27"], ["ae25", "ae26", "ae27"]],

      business: [["af25", "af26", "af27"], ["af25", "af26", "af27"]],

    },
    {
      question: ["y28", "y28"],

      option: [["z28", "z29", "z30"], ["z28", "z29", "z30"]],

      feedback: [["aa28", "aa29", "aa30"], ["aa28", "aa29", "aa30"]],

      score: [["ab28", "ab29", "ab30"], ["ab28", "ab29", "ab30"]],

      rigor: [["ac28", "ac29", "ac30"], ["ac28", "ac29", "ac30"]],

      structuring: [["ad28", "ad29", "ad30"], ["ad28", "ad29", "ad30"]],

      synthesis: [["ae28", "ae29", "ae30"], ["ae28", "ae29", "ae30"]],

      business: [["af28", "af29", "af30"], ["af28", "af29", "af30"]],

    },
  ]
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
    if (getSelectTab == 'cesimcase') {
      let apiname = "/portfoliomanagementmaster/fetchportfoliomanagementmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              for (let i = 0; i < this.questionanswerpaper.length; i++) {
                this.questionanswerpaper[i].question[0] = data.resultList[0][this.questionanswerpaper[i].question[0]];
                for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                  this.questionanswerpaper[i].option[0][j] = data.resultList[0][this.questionanswerpaper[i].option[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                  this.questionanswerpaper[i].feedback[0][j] = data.resultList[0][this.questionanswerpaper[i].feedback[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].score[0].length; j++) {
                  this.questionanswerpaper[i].score[0][j] = data.resultList[0][this.questionanswerpaper[i].score[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].rigor[0].length; j++) {
                  this.questionanswerpaper[i].rigor[0][j] = data.resultList[0][this.questionanswerpaper[i].rigor[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].structuring[0].length; j++) {
                  this.questionanswerpaper[i].structuring[0][j] = data.resultList[0][this.questionanswerpaper[i].structuring[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].synthesis[0].length; j++) {
                  this.questionanswerpaper[i].synthesis[0][j] = data.resultList[0][this.questionanswerpaper[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].business[0].length; j++) {
                  this.questionanswerpaper[i].business[0][j] = data.resultList[0][this.questionanswerpaper[i].business[0][j]];
                }
              }

            }
            this.checkloading = false;
          }
          this.checkloading = false;
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/portfoliomanagementcm/fetchportfoliomanagementcm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.questionanswerpaper.length; i++) {
                  this.questionanswerpaper[i].question[0] = data.resultList[0][this.questionanswerpaper[i].question[0]];
                  for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                    this.questionanswerpaper[i].option[0][j] = data.resultList[0][this.questionanswerpaper[i].option[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                    this.questionanswerpaper[i].feedback[0][j] = data.resultList[0][this.questionanswerpaper[i].feedback[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].score[0].length; j++) {
                    this.questionanswerpaper[i].score[0][j] = data.resultList[0][this.questionanswerpaper[i].score[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].rigor[0].length; j++) {
                    this.questionanswerpaper[i].rigor[0][j] = data.resultList[0][this.questionanswerpaper[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].structuring[0].length; j++) {
                    this.questionanswerpaper[i].structuring[0][j] = data.resultList[0][this.questionanswerpaper[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].synthesis[0].length; j++) {
                    this.questionanswerpaper[i].synthesis[0][j] = data.resultList[0][this.questionanswerpaper[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].business[0].length; j++) {
                    this.questionanswerpaper[i].business[0][j] = data.resultList[0][this.questionanswerpaper[i].business[0][j]];
                  }
                }

              }
              this.checkloading = false;
            }

          }, error: (error: any) => {
            this.checkloading = false;
            // this.driveerrorLog(error, apiname);
          }
        })
    }





  }
  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
    let apiname = '/portfoliomanagementcm/updateportfoliomanagementcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'portfoliomanagementcm', body, {}, apiname, 'portfoliomanagementcmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
          } else {
            this.res[cellname][index] = this.res[cellname][index];
          }
        }, error: (error: any) => {
          this.checkloading = false;
        }
      })
  }
  override ngOnDestroy(): void {
    this.Instructorelementdetailssub.unsubscribe();
  }
}

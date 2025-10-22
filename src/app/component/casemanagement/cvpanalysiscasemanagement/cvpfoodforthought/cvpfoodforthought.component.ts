import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cvpfoodforthought',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule,MatIconModule],
  templateUrl: './cvpfoodforthought.component.html',
  styleUrls: ['./cvpfoodforthought.component.scss']
})
export class CvpfoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  // status:boolean = true;
  defaultcase: string = "";
  foodforthought = [
    {
      question: ["p7", "p7"],

      option: [["q7", "q8", "q9"], ["q7", "q8", "q9"]],

      feedback: [["r7", "r8", "r9"], ["r7", "r8", "r9"]],

      score: [["s7", "s8", "s9"], ["s7", "s8", "s9"]],

      rigor: [["t7", "t8", "t9"], ["t7", "t8", "t9"]],

      structuring: [["u7", "u8", "u9"], ["u7", "u8", "u9"]],

      synthesis: [["v7", "v8", "v9"], ["v7", "v8", "v9"]],

      business: [["w7", "w8", "w9"], ["w7", "w8", "w9"]],

    },
    {
      question: ["p10", "p10"],

      option: [["q10", "q11", "q12"], ["q10", "q11", "q12"]],

      feedback: [["r10", "r11", "r12"], ["r10", "r11", "r12"]],

      score: [["s10", "s11", "s12"], ["s10", "s11", "s12"]],

      rigor: [["t10", "t11", "t12"], ["t10", "t11", "t12"]],

      structuring: [["u10", "u11", "u12"], ["u10", "u11", "u12"]],

      synthesis: [["v10", "v11", "v12"], ["v10", "v11", "v12"]],

      business: [["w10", "w11", "w12"], ["w10", "w11", "w12"]],

    },
    {
      question: ["p13", "p13"],

      option: [["q13", "q14", "q15"], ["q13", "q14", "q15"]],

      feedback: [["r13", "r14", "r15"], ["r13", "r14", "r15"]],

      score: [["s13", "s14", "s15"], ["s13", "s14", "s15"]],

      rigor: [["t13", "t14", "t15"], ["t13", "t14", "t15"]],

      structuring: [["u13", "u14", "u15"], ["u13", "u14", "u15"]],

      synthesis: [["v13", "v14", "v15"], ["v13", "v14", "v15"]],

      business: [["w13", "w14", "w15"], ["w13", "w14", "w15"]],

    },
    {
      question: ["p16", "p16"],

      option: [["q16", "q17", "q18"], ["q16", "q17", "q18"]],

      feedback: [["r16", "r17", "r18"], ["r16", "r17", "r18"]],

      score: [["s16", "s17", "s18"], ["s16", "s17", "s18"]],

      rigor: [["t16", "t17", "t18"], ["t16", "t17", "t18"]],

      structuring: [["u16", "u17", "u18"], ["u16", "u17", "u18"]],

      synthesis: [["v16", "v17", "v18"], ["v16", "v17", "v18"]],

      business: [["w16", "w17", "w18"], ["w16", "w17", "w18"]],

    },
    {
      question: ["p19", "p19"],

      option: [["q19", "q20", "q21"], ["q19", "q20", "q21"]],

      feedback: [["r19", "r20", "r21"], ["r19", "r20", "r21"]],

      score: [["s19", "s20", "s21"], ["s19", "s20", "s21"]],

      rigor: [["t19", "t20", "t21"], ["t19", "t20", "t21"]],

      structuring: [["u19", "u20", "u21"], ["u19", "u20", "u21"]],

      synthesis: [["v19", "v20", "v21"], ["v19", "v20", "v21"]],

      business: [["w19", "w20", "w21"], ["w19", "w20", "w21"]],

    },
    {
      question: ["p22", "p22"],

      option: [["q22", "q23", "q24"], ["q22", "q23", "q24"]],

      feedback: [["r22", "r23", "r24"], ["r22", "r23", "r24"]],

      score: [["s22", "s23", "s24"], ["s22", "s23", "s24"]],

      rigor: [["t22", "t23", "t24"], ["t22", "t23", "t24"]],

      structuring: [["u22", "u23", "u24"], ["u22", "u23", "u24"]],

      synthesis: [["v22", "v23", "v24"], ["v22", "v23", "v24"]],

      business: [["w22", "w23", "w24"], ["w22", "w23", "w24"]],

    },
    {
      question: ["p25", "p25"],

      option: [["q25", "q26", "q27"], ["q25", "q26", "q27"]],

      feedback: [["r25", "r26", "r27"], ["r25", "r26", "r27"]],

      score: [["s25", "s26", "s27"], ["s25", "s26", "s27"]],

      rigor: [["t25", "t26", "t27"], ["t25", "t26", "t27"]],

      structuring: [["u25", "u26", "u27"], ["u25", "u26", "u27"]],

      synthesis: [["v25", "v26", "v27"], ["v25", "v26", "v27"]],

      business: [["w25", "w26", "w27"], ["w25", "w26", "w27"]],

    },
    {
      question: ["p28", "p28"],

      option: [["q28", "q29", "q30"], ["q28", "q29", "q30"]],

      feedback: [["r28", "r29", "r30"], ["r28", "r29", "r30"]],

      score: [["s28", "s29", "s30"], ["s28", "s29", "s30"]],

      rigor: [["t28", "t29", "t30"], ["t28", "t29", "t30"]],

      structuring: [["u28", "u29", "u30"], ["u28", "u29", "u30"]],

      synthesis: [["v28", "v29", "v30"], ["v28", "v29", "v30"]],

      business: [["w28", "w29", "w30"], ["w28", "w29", "w30"]],

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
      let apiname = "/cvpanalysismaster/fetchcvpanalysismaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
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
          this.checkloading = false;
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/cvpanalysiscm/fetchcvpanalysiscm"
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
    let apiname = '/cvpanalysiscm/updatecvpanalysiscm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'cvpanalysiscm', body, {}, apiname, 'cvpanalysiscmactivestatus').subscribe(
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

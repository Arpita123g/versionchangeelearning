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
  selector: 'app-financialcasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './financialcasefoodforthought.component.html',
  styleUrls: ['./financialcasefoodforthought.component.scss']
})
export class FinancialcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought = [
    {
      // question: ["x7", "x7"],

      // option: [["y7", "y8", "y9"], ["y7", "z8", "z9"]],

      // feedback: [["z7", "z8", "z9"], ["z7", "z8", "z9"]],

      score: [["aa7", "aa8", "aa9"], ["aa7", "aa8", "aa9"]],

      rigor: [["ab7", "ab8", "ab9"], ["ab7", "ab8", "ab9"]],

      structuring: [["ac7", "ac8", "ac9"], ["ac7", "ac8", "ac9"]],

      synthesis: [["ad7", "ad8", "ad9"], ["ad7", "ad8", "ad9"]],

      business: [["ae7", "ae8", "ae9"], ["ae7", "ae8", "ae9"]],

    },
    {
      // question: ["x10", "x10"],

      // option: [["y10", "y11", "y12"], ["y10", "y11", "y12"]],

      // feedback: [["z10", "z11", "z12"], ["z10", "z11", "z12"]],

      score: [["aa10", "aa11", "aa12"], ["aa10", "aa11", "aa12"]],

      rigor: [["ab10", "ab11", "ab12"], ["ab10", "ab11", "ab12"]],

      structuring: [["ac10", "ac11", "ac12"], ["ac10", "ac11", "ac12"]],

      synthesis: [["ad10", "ad11", "ad11"], ["ad10", "ad11", "ad12"]],

      business: [["ae10", "ae11", "ae12"], ["ae10", "ae11", "ae12"]],

    },
    {
      // question: ["x13", "x13"],

      // option: [["y13", "y14", "y15"], ["y13", "y14", "y15"]],

      // feedback: [["z13", "z14", "z15"], ["z13", "z14", "z15"]],

      score: [["aa13", "aa14", "aa15"], ["aa13", "aa14", "aa15"]],

      rigor: [["ab13", "ab14", "ab15"], ["ab13", "ab14", "ab15"]],

      structuring: [["ac13", "ac14", "ac15"], ["ac13", "ac14", "ac15"]],

      synthesis: [["ad13", "ad14", "ad15"], ["ad13", "ad14", "ad15"]],

      business: [["ae13", "ae14", "ae15"], ["ae13", "ae14", "ae15"]],

    },
    {
      // question: ["x16", "x16"],

      // option: [["y16", "y17", "y18"], ["y16", "y17", "y18"]],

      // feedback: [["z16", "z17", "z18"], ["z16", "z17", "z18"]],

      score: [["aa16", "aa17", "aa18"], ["aa16", "aa17", "aa18"]],

      rigor: [["ab16", "ab17", "ab18"], ["ab16", "ab17", "ab18"]],

      structuring: [["ac16", "ac17", "ac18"], ["ac16", "ac17", "ac18"]],

      synthesis: [["ad16", "ad17", "ad18"], ["ad16", "ad17", "ad18"]],

      business: [["ae16", "ae17", "ae18"], ["ae16", "ae17", "ae18"]],
    },

    {
      // question: ["x19", "x19"],

      // option: [["y19", "y20", "y21"], ["y19", "y20", "y21"]],

      // feedback: [["z19", "z20", "z21"], ["z19", "z20", "z21"]],

      score: [["aa19", "aa20", "aa21"], ["aa19", "aa20", "aa21"]],

      rigor: [["ab19", "ab20", "ab21"], ["ab19", "ab20", "ab21"]],

      structuring: [["ac19", "ac20", "ac21"], ["ac19", "ac20", "ac21"]],

      synthesis: [["ad19", "ad20", "ad21"], ["ad19", "ad20", "ad21"]],

      business: [["ae19", "ae20", "ae21"], ["ae19", "ae20", "ae21"]],

    },
    {
      // question: ["x22", "x22"],

      // option: [["y22", "y23", "y24"], ["y22", "y23", "y24"]],

      // feedback: [["z22", "z23", "z24"], ["z22", "z23", "z24"]],

      score: [["aa22", "aa23", "aa24"], ["aa22", "aa23", "aa24"]],

      rigor: [["ab22", "ab23", "ac24"], ["ab22", "ab23", "ac24"]],

      structuring: [["ac22", "ac23", "ac24"], ["ac22", "ac23", "ac24"]],

      synthesis: [["ad22", "ad23", "ad24"], ["ad22", "ad23", "ad24"]],

      business: [["ae22", "ae23", "ae24"], ["ae22", "ae23", "ae24"]],

    },
    {
      // question: ["x25", "x25"],

      // option: [["y25", "y26", "y27"], ["y25", "y26", "y27"]],

      // feedback: [["z25", "z26", "z27"], ["z25", "z26", "z27"]],

      score: [["aa25", "aa26", "aa27"], ["aa25", "aa26", "aa27"]],

      rigor: [["ab25", "ab26", "ab27"], ["ab25", "ab26", "ab27"]],

      structuring: [["ac25", "ac26", "ac27"], ["ac25", "ac26", "ac27"]],

      synthesis: [["ad25", "ad26", "ad27"], ["ad25", "ad26", "ad27"]],

      business: [["ae25", "ae26", "ae27"], ["ae25", "ae26", "ae27"]],

    },
    {
      // question: ["x28", "x28"],

      // option: [["y28", "y29", "y30"], ["y28", "y29", "y30"]],

      // feedback: [["z28", "z29", "z30"], ["z28", "z29", "z30"]],

      score: [["aa28", "aa29", "aa30"], ["aa28", "aa29", "aa30"]],

      rigor: [["ab28", "ab29", "ab30"], ["ab28", "ab29", "ab30"]],

      structuring: [["ac28", "ac29", "ac30"], ["ac28", "ac29", "ac30"]],

      synthesis: [["ad28", "ad29", "ad30"], ["ad28", "ad29", "ad30"]],

      business: [["ae28", "ae29", "ae30"], ["ae28", "ae29", "ae30"]],

    },
    {
      // question: ["x31", "x31"],

      // option: [["y31", "y32", "y33"], ["y31", "y32", "y33"]],

      // feedback: [["z31", "z32", "z33"], ["z31", "z32", "z33"]],

      score: [["aa31", "aa32", "aa33"], ["aa31", "aa32", "aa33"]],

      rigor: [["ab31", "ab32", "ab33"], ["ab31", "ab32", "ab33"]],

      structuring: [["ac31", "ac32", "ac33"], ["ac31", "ac32", "ac33"]],

      synthesis: [["ad31", "ad32", "ad33"], ["ad31", "ad32", "ad33"]],

      business: [["ae31", "ae32", "ae33"], ["ae31", "ae32", "ae33"]],

    },
    {
      // question: ["x34", "x34"],

      // option: [["y34", "y35", "y36"], ["y34", "y35", "y36"]],

      // feedback: [["z34", "z35", "z36"], ["z34", "z35", "z36"]],

      score: [["aa34", "aa35", "aa36"], ["aa34", "aa35", "aa36"]],

      rigor: [["ab34", "ab35", "ab36"], ["ab34", "ab35", "ab36"]],

      structuring: [["ac34", "ac35", "ac36"], ["ac34", "ac35", "ac36"]],

      synthesis: [["ad34", "ad35", "ad36"], ["ad34", "ad35", "ad36"]],

      business: [["ae34", "ae35", "ae36"], ["ae34", "ae35", "ae36"]],

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
      let apiname = "/financialanalysismaster/fetchfinancialanalysismaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              for (let i = 0; i < this.foodforthought.length; i++) {
                // this.foodforthought[i].question[0] = data.resultList[0][this.foodforthought[i].question[0]];
                // for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                //   this.foodforthought[i].option[0][j] = data.resultList[0][this.foodforthought[i].option[0][j]];
                // }
                // for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                //   this.foodforthought[i].feedback[0][j] = data.resultList[0][this.foodforthought[i].feedback[0][j]];
                // }
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
      let apiname = "/financialanalysiscm/fetchfinancialanalysiscm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  // this.foodforthought[i].question[0] = data.resultList[0][this.foodforthought[i].question[0]];
                  // for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                  //   this.foodforthought[i].option[0][j] = data.resultList[0][this.foodforthought[i].option[0][j]];
                  // }
                  // for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                  //   this.foodforthought[i].feedback[0][j] = data.resultList[0][this.foodforthought[i].feedback[0][j]];
                  // }
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
    let apiname = '/financialanalysiscm/updatefinancialanalysiscm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'financialanalysiscm', body, {}, apiname, 'financialanalysiscmactivestatus').subscribe(
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

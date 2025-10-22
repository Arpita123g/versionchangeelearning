import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  selector: 'app-hrpcasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrpcasefoodforthought.component.html',
  styleUrls: ['./hrpcasefoodforthought.component.scss']
})
export class HrpcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  // status:boolean = true;
  defaultcase: string = "";

  foodforthought = [
    {
      question: ["w7", "w7"],

      option: [["x7", "x8", "x9"], ["x7", "x8", "x9"]],

      feedback: [["y7", "y8", "y9"], ["y7", "y8", "y9"]],

      score: [["z7", "z8", "z9"], ["z7", "z8", "z9"]],

      rigor: [["aa7", "aa8", "aa9"], ["aa7", "aa8", "aa9"]],

      structuring: [["ab7", "ab8", "ab9"], ["ab7", "ab8", "ab9"]],

      synthesis: [["ac7", "ac8", "ac9"], ["ac7", "ac8", "ac9"]],

      business: [["ad7", "ad8", "ad9"], ["ad7", "ad8", "ad9"]],

    },
    {
      question: ["w10", "w10"],

      option: [["x10", "x11", "x12"], ["x10", "x11", "x12"]],

      feedback: [["y10", "y11", "y12"], ["y10", "y11", "y12"]],

      score: [["z10", "z11", "z12"], ["z10", "z11", "z12"]],

      rigor: [["aa10", "aa11", "aa12"], ["aa10", "aa11", "aa12"]],

      structuring: [["ab10", "ab11", "ab12"], ["ab10", "ab11", "ab12"]],

      synthesis: [["ac10", "ac11", "ac12"], ["ac10", "ac11", "ac12"]],

      business: [["ad10", "ad11", "ad12"], ["ad10", "ad11", "ad12"]],

    },
    {
      question: ["w13", "w13"],

      option: [["x13", "x14", "x15"], ["x13", "x14", "x15"]],

      feedback: [["y13", "y14", "y15"], ["y13", "y14", "y15"]],

      score: [["z13", "z14", "z15"], ["z13", "z14", "z15"]],

      rigor: [["aa13", "aa14", "aa15"], ["aa13", "aa14", "aa15"]],

      structuring: [["ab13", "ab14", "ab15"], ["ab13", "ab14", "ab15"]],

      synthesis: [["ac13", "ac14", "ac15"], ["ac13", "ac14", "ac15"]],

      business: [["ad13", "ad14", "ad15"], ["ad13", "ad14", "ad15"]],

    },
    {
      question: ["w16", "w16"],

      option: [["x16", "x17", "x18"], ["x16", "x17", "x18"]],

      feedback: [["y16", "y17", "y18"], ["y16", "y17", "y18"]],

      score: [["z16", "z17", "z18"], ["z16", "z17", "z18"]],

      rigor: [["aa16", "aa17", "aa18"], ["aa16", "aa17", "aa18"]],

      structuring: [["ab16", "ab17", "ab18"], ["ab16", "ab17", "ab18"]],

      synthesis: [["ac16", "ac17", "ac18"], ["ac16", "ac17", "ac18"]],

      business: [["ad16", "ad17", "ad18"], ["ad16", "ad17", "ad18"]],
    },
    {
      question: ["w19", "w19"],

      option: [["x19", "x20", "x21"], ["x19", "x20", "x21"]],

      feedback: [["y19", "y20", "y21"], ["y19", "y20", "y21"]],

      score: [["z19", "z20", "z21"], ["z19", "z20", "z21"]],

      rigor: [["aa19", "aa20", "aa21"], ["aa19", "aa20", "aa21"]],

      structuring: [["ab19", "ab20", "ab21"], ["ab19", "ab20", "ab21"]],

      synthesis: [["ac19", "ac20", "ac21"], ["ac19", "ac20", "ac21"]],

      business: [["ad19", "ad20", "ad21"], ["ad19", "ad20", "ad21"]],

    },
    {
      question: ["w22", "w22"],

      option: [["x22", "x23", "x24"], ["x22", "x23", "x24"]],

      feedback: [["y22", "y23", "y24"], ["y22", "y23", "y24"]],

      score: [["z22", "z23", "z24"], ["z22", "z23", "z24"]],

      rigor: [["aa22", "aa23", "aa24"], ["aa22", "aa23", "aa24"]],

      structuring: [["ab22", "ab23", "ab24"], ["ab22", "ab23", "ab24"]],

      synthesis: [["ac22", "ac23", "ac24"], ["ac22", "ac23", "ac24"]],

      business: [["ad22", "ad23", "ad24"], ["ad22", "ad23", "ad24"]],

    },
    {
      question: ["w25", "w25"],

      option: [["x25", "x26", "x27"], ["x25", "x26", "x27"]],

      feedback: [["y25", "y26", "y27"], ["y25", "y26", "y27"]],

      score: [["z25", "z26", "z27"], ["z25", "z26", "z27"]],

      rigor: [["aa25", "aa26", "aa27"], ["aa25", "aa26", "aa27"]],

      structuring: [["ab25", "ab26", "ab27"], ["ab25", "ab26", "ab27"]],

      synthesis: [["ac25", "ac26", "ac27"], ["ac25", "ac26", "ac27"]],

      business: [["ad25", "ad26", "ad27"], ["ad25", "ad26", "ad27"]],

    },
    {
      question: ["w28", "w28"],

      option: [["x28", "x29", "x30"], ["x28", "x29", "x30"]],

      feedback: [["y28", "y29", "y30"], ["y28", "y29", "y30"]],

      score: [["z28", "z29", "z30"], ["z28", "z29", "z30"]],

      rigor: [["aa28", "aa29", "aa30"], ["aa28", "aa29", "aa30"]],

      structuring: [["ab28", "ab29", "ab30"], ["ab28", "ab29", "ab30"]],

      synthesis: [["ac28", "ac29", "ac30"], ["ac28", "ac29", "ac30"]],

      business: [["ad28", "ad29", "ad30"], ["ad28", "ad29", "ad30"]],

    },
    {
      question: ["w31", "w31"],

      option: [["x31", "x32", "x33"], ["x31", "x32", "x33"]],

      feedback: [["y31", "y32", "y33"], ["y31", "y32", "y33"]],

      score: [["z31", "z32", "z33"], ["z31", "z32", "z33"]],

      rigor: [["aa31", "aa32", "aa33"], ["aa31", "aa32", "aa33"]],

      structuring: [["ab31", "ab32", "ab33"], ["ab31", "ab32", "ab33"]],

      synthesis: [["ac31", "ab32", "ab33"], ["ac31", "ab32", "ab33"]],

      business: [["ad31", "ad32", "ad33"], ["ad31", "ad32", "ad33"]],

    },
    {
      question: ["w34", "w34"],

      option: [["x34", "x35", "x36"], ["x34", "x35", "x36"]],

      feedback: [["y34", "y35", "y36"], ["y34", "y35", "y36"]],

      score: [["z34", "z35", "z36"], ["z34", "z35", "z36"]],

      rigor: [["aa34", "aa35", "aa36"], ["aa34", "aa35", "aa36"]],

      structuring: [["ab34", "ab35", "ab36"], ["ab34", "ab35", "ab36"]],

      synthesis: [["ac34", "ac35", "ac36"], ["ac34", "ac35", "ac36"]],

      business: [["ad34", "ad35", "ad36"], ["ad34", "ad35", "ad36"]],

    },
    {
      question: ["w37", "w37"],

      option: [["x37", "x38", "x39"], ["x37", "x38", "x39"]],

      feedback: [["y37", "y38", "y39"], ["y37", "y38", "y39"]],

      score: [["z37", "z38", "z39"], ["z37", "z38", "z39"]],

      rigor: [["aa37", "aa38", "aa39"], ["aa37", "aa38", "aa39"]],

      structuring: [["ab37", "ab38", "ab39"], ["ab37", "ab38", "ab39"]],

      synthesis: [["ac37", "ac38", "ac39"], ["ac37", "ac38", "ac39"]],

      business: [["ad37", "ad38", "ad39"], ["ad37", "ad38", "ad39"]],

    },
    {
      question: ["w40", "w40"],

      option: [["x40", "x41", "x42"], ["x40", "x41", "x42"]],

      feedback: [["y40", "y41", "y42"], ["y40", "y41", "y42"]],

      score: [["z40", "z41", "z42"], ["z40", "z41", "z42"]],

      rigor: [["aa40", "aa41", "aa42"], ["aa40", "aa41", "aa42"]],

      structuring: [["ab40", "ab41", "ab42"], ["ab40", "ab41", "ab42"]],

      synthesis: [["ac40", "ac41", "ac42"], ["ac40", "ac41", "ac42"]],

      business: [["ad40", "ad41", "ad42"], ["ad40", "ad41", "ad42"]],

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
      let apiname = "/hrplanningmaster/fetchhrplanningmaster"
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
      let apiname = "/hrplanningcm/fetchhrplanningcm"
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
    let apiname = '/hrplanningcm/updatehrplanningcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'hrplanningcm', body, {}, apiname, 'hrplanningcmactivestatus').subscribe(
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

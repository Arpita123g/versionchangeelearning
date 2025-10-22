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
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';


@Component({
  selector: 'app-valuechaincasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './valuechaincasefoodforthought.component.html',
  styleUrls: ['./valuechaincasefoodforthought.component.scss']
})
export class ValuechaincasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  selectedLanguage: string = "english";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  // status:boolean = true;
  defaultcase: string = "";
  attempt: string = "1";
  foodforthought = [
    {
      question: ["b181", "b181"],

      option: [["b189", "b190", "b191"], ["b189", "b190", "b191"]],

      feedback: [["b213", "b214", "b215"], ["b213", "b214", "b215"]],

      score: [["z7", "z8", "z9"], ["z7", "z8", "z9"]],

      rigor: [["aa7", "aa8", "aa9"], ["aa7", "aa8", "aa9"]],

      structuring: [["ab7", "ab8", "ab9"], ["ab7", "ab8", "ab9"]],

      synthesis: [["ac7", "ac8", "ac9"], ["ac7", "ac8", "ac9"]],

      business: [["ad7", "ad8", "ad9"], ["ad7", "ad8", "ad9"]],

    },
    {
      question: ["b182", "b182"],

      option: [["b192", "b193", "b194"], ["b192", "b193", "b194"]],

      feedback: [["b216", "b217", "b218"], ["b216", "b217", "b218"]],

      score: [["z10", "z11", "z12"], ["z10", "z11", "z12"]],

      rigor: [["aa10", "aa11", "aa12"], ["aa10", "aa11", "aa12"]],

      structuring: [["ab10", "ab11", "ab12"], ["ab10", "ab11", "ab12"]],

      synthesis: [["ac10", "ac11", "ac12"], ["ac10", "ac11", "ad12"]],

      business: [["ad10", "ad11", "ad12"], ["ad10", "ad11", "ad12"]],

    },
    {
      question: ["b183", "b183"],

      option: [["b195", "b196", "b197"], ["b195", "b196", "b197"]],

      feedback: [["b219", "b220", "b221"], ["b219", "b220", "b221"]],

      score: [["z13", "z14", "z15"], ["z13", "z14", "z15"]],

      rigor: [["aa13", "aa14", "aa15"], ["aa13", "aa14", "aa15"]],

      structuring: [["ab13", "ab14", "ab15"], ["ab13", "ab14", "ab15"]],

      synthesis: [["ac13", "ac14", "ac15"], ["ac13", "ac14", "ac15"]],

      business: [["ad13", "ad14", "ad15"], ["ad13", "ad14", "ad15"]],

    },
    {
      question: ["b184", "b184"],

      option: [["b198", "b199", "b200"], ["b198", "b199", "b200"]],

      feedback: [["b222", "b223", "b224"], ["b222", "b223", "b224"]],

      score: [["z16", "z17", "z18"], ["z16", "z17", "z18"]],

      rigor: [["aa16", "aa17", "aa18"], ["aa16", "aa17", "aa18"]],

      structuring: [["ab16", "ab17", "ab18"], ["ab16", "ab17", "ab18"]],

      synthesis: [["ac16", "ac17", "ac18"], ["ac16", "ac17", "ac18"]],

      business: [["ad16", "ad17", "ad18"], ["ad16", "ad17", "ad18"]],

    },

    {
      question: ["b185", "b185"],

      option: [["b201", "b202", "b203"], ["b201", "b202", "b203"]],

      feedback: [["b225", "b226", "b227"], ["b225", "b226", "b227"]],

      score: [["z19", "z20", "z21"], ["z19", "z20", "z21"]],

      rigor: [["aa19", "aa20", "aa21"], ["aa19", "aa20", "aa21"]],

      structuring: [["ab19", "ab20", "ab21"], ["ab19", "ab20", "ab21"]],

      synthesis: [["ac19", "ac20", "ac21"], ["ac19", "ac20", "ac21"]],

      business: [["ad19", "ad20", "ad21"], ["ad19", "ad20", "ad21"]],

    },
    {
      question: ["b186", "b186"],

      option: [["b204", "b205", "b206"], ["b204", "b205", "b206"]],

      feedback: [["b228", "b229", "b230"], ["b228", "b229", "b230"]],

      score: [["z22", "z23", "z24"], ["z22", "z23", "z24"]],

      rigor: [["aa22", "aa23", "aa24"], ["aa22", "aa23", "aa24"]],

      structuring: [["ab22", "ab23", "ab24"], ["ab22", "ab23", "ab24"]],

      synthesis: [["ac22", "ac23", "ac24"], ["ac22", "ac23", "ac24"]],

      business: [["ad22", "ad23", "ad24"], ["ad22", "ad23", "ad24"]],

    },
    {
      question: ["b187", "b187"],

      option: [["b207", "b208", "b209"], ["b207", "b208", "b209"]],

      feedback: [["b231", "b232", "b233"], ["b231", "b232", "b233"]],

      score: [["z25", "z26", "z27"], ["z25", "z26", "z27"]],

      rigor: [["aa25", "aa26", "aa27"], ["aa25", "aa26", "aa27"]],

      structuring: [["ab25", "ab26", "ab27"], ["ab25", "ab26", "ab27"]],

      synthesis: [["ac25", "ac26", "ac27"], ["ac25", "ac26", "ac27"]],

      business: [["ad25", "ad26", "ad27"], ["ad25", "ad26", "ad27"]],

    },
    {
      question: ["b188", "b188"],

      option: [["b210", "b211", "b212"], ["b210", "b211", "b2112"]],

      feedback: [["b234", "b235", "b236"], ["b234", "b235", "b236"]],

      score: [["z28", "z29", "z30"], ["z28", "z29", "z30"]],

      rigor: [["aa28", "aa29", "aa30"], ["aa28", "aa29", "aa30"]],

      structuring: [["ab28", "ab29", "ab30"], ["ab28", "ab29", "ab30"]],

      synthesis: [["ac28", "ac29", "ac30"], ["ac28", "ac29", "ac30"]],

      business: [["ad28", "ad29", "ad30"], ["ad28", "ad29", "ad30"]],

    },

  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,private sharedState: SharedserviceService) {
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

     this.sharedState.selectedLanguage$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.getLanguageData(this.attempt, this.selectedLanguage);
    });
  }

  // getFetchData() {
  //   //***********it will be uncommitted*******************/

  //   let apiname = "/valuechaincm/fetchvaluechaincm"
  //   this._api.fetchCaseManagementData(apiname).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             for (let i = 0; i < this.foodforthought.length; i++) {
  //               this.foodforthought[i].question[0] = data.resultList[0][this.foodforthought[i].question[0]];
  //               for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
  //                 this.foodforthought[i].option[0][j] = data.resultList[0][this.foodforthought[i].option[0][j]];
  //               }
  //               for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
  //                 this.foodforthought[i].feedback[0][j] = data.resultList[0][this.foodforthought[i].feedback[0][j]];
  //               }
  //               for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
  //                 this.foodforthought[i].score[0][j] = data.resultList[0][this.foodforthought[i].score[0][j]];
  //               }
  //               for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
  //                 this.foodforthought[i].rigor[0][j] = data.resultList[0][this.foodforthought[i].rigor[0][j]];
  //               }
  //               for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
  //                 this.foodforthought[i].structuring[0][j] = data.resultList[0][this.foodforthought[i].structuring[0][j]];
  //               }
  //               for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
  //                 this.foodforthought[i].synthesis[0][j] = data.resultList[0][this.foodforthought[i].synthesis[0][j]];
  //               }
  //               for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
  //                 this.foodforthought[i].business[0][j] = data.resultList[0][this.foodforthought[i].business[0][j]];
  //               }
  //             }

  //           }

  //         }

  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })

  // }



  getFetchData() {

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/valuechainnewmaster/fetchvaluechainnewmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
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
                    this.foodforthought[i].score[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].business[0][j]];
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

      let apiname = "/valuechainnewcm/fetchvaluechainnewcm"
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
                    this.foodforthought[i].score[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0].valuechainnewperioddata[this.foodforthought[i].business[0][j]];
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

  getLanguageData(attempt: string, selectedLanguage: string) {

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/valuechainnewlanguages/fetchvaluechainnewlanguages"

      this._api.fetchaCaseFromMasterLanguage1(apiname, this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  this.foodforthought[i].question[0] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].question[0]];
                  for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                    this.foodforthought[i].option[0][j] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].option[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                    this.foodforthought[i].feedback[0][j] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].feedback[0][j]];
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
      let apiname = "/valuechainnewlm/fetchvaluechainnewlm"

      this._api.fetchgamelm(apiname, this.attempt, selectedLanguage).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  this.foodforthought[i].question[0] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].question[0]];
                  for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                    this.foodforthought[i].option[0][j] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].option[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                    this.foodforthought[i].feedback[0][j] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].feedback[0][j]];
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
    let apiname = '/valuechainnewcm/updatevaluechainnewcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'valuechainnewcm', body, {}, apiname, 'valuechainnewcmactivestatus').subscribe(
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
  override ngOnDestroy() {
    this.Instructorelementdetailssub.unsubscribe();

  }

}

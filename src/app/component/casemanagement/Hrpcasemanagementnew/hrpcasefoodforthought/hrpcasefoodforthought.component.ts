import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { combineLatest, Subject, Subscription, takeUntil } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-hrpcasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrpcasefoodforthought.component.html',
  styleUrls: ['./hrpcasefoodforthought.component.scss']
})
export class HrpcasefoodforthoughtComponent extends AbstractComponent implements OnChanges, OnDestroy {
  res: any = [];
  // status:boolean = true;
  defaultcase: string = "";
  selectedLanguage: string = "english";
  attempt: string = "1";
  private destroy$ = new Subject<void>();
  @Input() active: boolean = false;
  private subscribed = false;
  foodforthought = [
    {
      question: ["b166", "b166"],

      option: [["b178", "b179", "b180"], ["b178", "b179", "b180"]],

      feedback: [["b214", "b215", "b216"], ["b214", "b215", "b216"]],

      score: [["z7", "z8", "z9"], ["z7", "z8", "z9"]],

      rigor: [["aa7", "aa8", "aa9"], ["aa7", "aa8", "aa9"]],

      structuring: [["ab7", "ab8", "ab9"], ["ab7", "ab8", "ab9"]],

      synthesis: [["ac7", "ac8", "ac9"], ["ac7", "ac8", "ac9"]],

      business: [["ad7", "ad8", "ad9"], ["ad7", "ad8", "ad9"]],

    },
    {
      question: ["b167", "b167"],

      option: [["b181", "b182", "b183"], ["b181", "b182", "b183"]],

      feedback: [["b217", "b218", "b219"], ["b217", "b218", "b219"]],

      score: [["z10", "z11", "z12"], ["z10", "z11", "z12"]],

      rigor: [["aa10", "aa11", "aa12"], ["aa10", "aa11", "aa12"]],

      structuring: [["ab10", "ab11", "ab12"], ["ab10", "ab11", "ab12"]],

      synthesis: [["ac10", "ac11", "ac12"], ["ac10", "ac11", "ac12"]],

      business: [["ad10", "ad11", "ad12"], ["ad10", "ad11", "ad12"]],

    },
    {
      question: ["b168", "b168"],

      option: [["b184", "b185", "b186"], ["b184", "b185", "b186"]],

      feedback: [["b220", "b221", "b222"], ["b220", "b221", "b222"]],

      score: [["z13", "z14", "z15"], ["z13", "z14", "z15"]],

      rigor: [["aa13", "aa14", "aa15"], ["aa13", "aa14", "aa15"]],

      structuring: [["ab13", "ab14", "ab15"], ["ab13", "ab14", "ab15"]],

      synthesis: [["ac13", "ac14", "ac15"], ["ac13", "ac14", "ac15"]],

      business: [["ad13", "ad14", "ad15"], ["ad13", "ad14", "ad15"]],

    },
    {
      question: ["b169", "b169"],

      option: [["b187", "b188", "b189"], ["b187", "b188", "b189"]],

      feedback: [["b223", "b224", "b225"], ["b223", "b224", "b225"]],

      score: [["z16", "z17", "z18"], ["z16", "z17", "z18"]],

      rigor: [["aa16", "aa17", "aa18"], ["aa16", "aa17", "aa18"]],

      structuring: [["ab16", "ab17", "ab18"], ["ab16", "ab17", "ab18"]],

      synthesis: [["ac16", "ac17", "ac18"], ["ac16", "ac17", "ac18"]],

      business: [["ad16", "ad17", "ad18"], ["ad16", "ad17", "ad18"]],
    },
    {
      question: ["b170", "b170"],

      option: [["b190", "b191", "b192"], ["b190", "b191", "b192"]],

      feedback: [["b226", "b227", "b228"], ["b226", "b227", "b228"]],

      score: [["z19", "z20", "z21"], ["z19", "z20", "z21"]],

      rigor: [["aa19", "aa20", "aa21"], ["aa19", "aa20", "aa21"]],

      structuring: [["ab19", "ab20", "ab21"], ["ab19", "ab20", "ab21"]],

      synthesis: [["ac19", "ac20", "ac21"], ["ac19", "ac20", "ac21"]],

      business: [["ad19", "ad20", "ad21"], ["ad19", "ad20", "ad21"]],

    },
    {
      question: ["b171", "b171"],

      option: [["b193", "b194", "b195"], ["b193", "b194", "b195"]],

      feedback: [["b229", "b230", "b231"], ["b229", "b230", "b231"]],

      score: [["z22", "z23", "z24"], ["z22", "z23", "z24"]],

      rigor: [["aa22", "aa23", "aa24"], ["aa22", "aa23", "aa24"]],

      structuring: [["ab22", "ab23", "ab24"], ["ab22", "ab23", "ab24"]],

      synthesis: [["ac22", "ac23", "ac24"], ["ac22", "ac23", "ac24"]],

      business: [["ad22", "ad23", "ad24"], ["ad22", "ad23", "ad24"]],

    },
    {
      question: ["b172", "b172"],

      option: [["b196", "b197", "b198"], ["b196", "b197", "b198"]],

      feedback: [["b232", "b233", "b234"], ["b232", "b233", "b234"]],

      score: [["z25", "z26", "z27"], ["z25", "z26", "z27"]],

      rigor: [["aa25", "aa26", "aa27"], ["aa25", "aa26", "aa27"]],

      structuring: [["ab25", "ab26", "ab27"], ["ab25", "ab26", "ab27"]],

      synthesis: [["ac25", "ac26", "ac27"], ["ac25", "ac26", "ac27"]],

      business: [["ad25", "ad26", "ad27"], ["ad25", "ad26", "ad27"]],

    },
    {
      question: ["b173", "b173"],

      option: [["b199", "b200", "b201"], ["b199", "b200", "b201"]],

      feedback: [["b235", "b236", "b237"], ["b235", "b236", "b237"]],

      score: [["z28", "z29", "z30"], ["z28", "z29", "z30"]],

      rigor: [["aa28", "aa29", "aa30"], ["aa28", "aa29", "aa30"]],

      structuring: [["ab28", "ab29", "ab30"], ["ab28", "ab29", "ab30"]],

      synthesis: [["ac28", "ac29", "ac30"], ["ac28", "ac29", "ac30"]],

      business: [["ad28", "ad29", "ad30"], ["ad28", "ad29", "ad30"]],

    },
    {
      question: ["b174", "b174"],

      option: [["b202", "b203", "b204"], ["b202", "b203", "b204"]],

      feedback: [["b238", "b239", "b240"], ["b238", "b239", "b240"]],

      score: [["z31", "z32", "z33"], ["z31", "z32", "z33"]],

      rigor: [["aa31", "aa32", "aa33"], ["aa31", "aa32", "aa33"]],

      structuring: [["ab31", "ab32", "ab33"], ["ab31", "ab32", "ab33"]],

      synthesis: [["ac31", "ab32", "ab33"], ["ac31", "ab32", "ab33"]],

      business: [["ad31", "ad32", "ad33"], ["ad31", "ad32", "ad33"]],

    },
    {
      question: ["b175", "b175"],

      option: [["b205", "b206", "b207"], ["b205", "b206", "b207"]],

      feedback: [["b241", "b242", "b243"], ["b241", "b242", "b243"]],

      score: [["z34", "z35", "z36"], ["z34", "z35", "z36"]],

      rigor: [["aa34", "aa35", "aa36"], ["aa34", "aa35", "aa36"]],

      structuring: [["ab34", "ab35", "ab36"], ["ab34", "ab35", "ab36"]],

      synthesis: [["ac34", "ac35", "ac36"], ["ac34", "ac35", "ac36"]],

      business: [["ad34", "ad35", "ad36"], ["ad34", "ad35", "ad36"]],

    },
    {
      question: ["b176", "b176"],

      option: [["b208", "b209", "b210"], ["b208", "b209", "b210"]],

      feedback: [["b244", "b245", "b246"], ["b244", "b245", "b246"]],

      score: [["z37", "z38", "z39"], ["z37", "z38", "z39"]],

      rigor: [["aa37", "aa38", "aa39"], ["aa37", "aa38", "aa39"]],

      structuring: [["ab37", "ab38", "ab39"], ["ab37", "ab38", "ab39"]],

      synthesis: [["ac37", "ac38", "ac39"], ["ac37", "ac38", "ac39"]],

      business: [["ad37", "ad38", "ad39"], ["ad37", "ad38", "ad39"]],

    },
    {
      question: ["b177", "b177"],

      option: [["b211", "b212", "b213"], ["b211", "b212", "b213"]],

      feedback: [["b247", "b248", "b249"], ["b247", "b248", "b249"]],

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
    _restapiservice: RestapiService, public dialog: MatDialog, private sharedState: SharedserviceService) {
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
    // this.getLanguageData(this.attempt, this.selectedLanguage);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['active'] && this.active && !this.subscribed) {
      this.subscribed = true;

      combineLatest([
        this.sharedState.attempt$,
        this.sharedState.selectedLanguage$
      ])
        .pipe(takeUntil(this.destroy$))
        .subscribe(([attempt, lang]) => {
          this.attempt = attempt;
          this.selectedLanguage = lang;
          this.getLanguageData(this.attempt, this.selectedLanguage);
        });
    }
  }

  getFetchData() {
    //***********it will be uncommitted*******************/
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/hrplanningnewmaster/fetchhrplanningnewmaster"
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
                  this.foodforthought[i].score[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].score[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                  this.foodforthought[i].rigor[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].rigor[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                  this.foodforthought[i].structuring[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].structuring[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                  this.foodforthought[i].synthesis[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                  this.foodforthought[i].business[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].business[0][j]];
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
      let apiname = "/hrplanningnewcm/fetchhrplanningnewcm"
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
                    this.foodforthought[i].score[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0].hrplanningnewperioddata[this.foodforthought[i].business[0][j]];
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
    if (getSelectTab === 'cesimcase') {
      let apiname = "/hrplanningnewlanguages/fetchhrplanningnewlanguages"

      this._api.fetchaCaseFromMasterLanguage1(apiname, this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success" && data.resultList != null) {
              for (let i = 0; i < this.foodforthought.length; i++) {
                this.foodforthought[i].question[0] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].question[0]];
                for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                  this.foodforthought[i].option[0][j] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].option[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                  this.foodforthought[i].feedback[0][j] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].feedback[0][j]];
                }
              }
              // this.getFetchData();

            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    } else {
      let apiname = "/hrplanningnewlm/fetchhrplanningnewlm"

      this._api.fetchgamelm(apiname, this.attempt, selectedLanguage).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success" && data.resultList != null) {
              for (let i = 0; i < this.foodforthought.length; i++) {
                this.foodforthought[i].question[0] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].question[0]];
                for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                  this.foodforthought[i].option[0][j] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].option[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                  this.foodforthought[i].feedback[0][j] = data.resultList[0][this.selectedLanguage][this.foodforthought[i].feedback[0][j]];
                }
              }
              // this.getFetchData();

            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }

  }

  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
    let apiname = '/hrplanningnewcm/updatehrplanningnewcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'hrplanningnewcm', body, {}, apiname, 'hrplanningnewcmactivestatus').subscribe(
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


  // override ngOnDestroy(): void {
  //   this.Instructorelementdetailssub.unsubscribe();
  // }

  override ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.Instructorelementdetailssub.unsubscribe();
  }
}

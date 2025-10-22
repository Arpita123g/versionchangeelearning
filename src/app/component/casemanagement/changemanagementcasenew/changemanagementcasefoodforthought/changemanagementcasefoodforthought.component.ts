import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { combineLatest, Subject, Subscription, takeUntil } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-changemanagementcasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './changemanagementcasefoodforthought.component.html',
  styleUrls: ['./changemanagementcasefoodforthought.component.scss']
})
export class ChangemanagementcasefoodforthoughtComponent extends AbstractComponent implements OnChanges, OnDestroy {
  defaultcase: string = "";
  res: any = [];
  selectedLanguage: string = "english";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  attempt: string = "1";
  private destroy$ = new Subject<void>();
  @Input() active: boolean = false;
  private subscribed = false;

  questionanswerpaper: any = [
    {
      question: ["b149", "b149"],

      option: [["b155", "b156", "b157"], ["b155", "b156", "b157"]],

      feedback: [["b173", "b174", "b175"], ["b173", "b174", "b175"]],

      score: [["aw7", "aw8", "aw9"], ["aw7", "aw8", "aw9"]],

      rigor: [["ax7", "ax8", "ax9"], ["ax7", "ax8", "ax9"]],

      structuring: [["ay7", "ay8", "ay9"], ["ay7", "ay8", "ay9"]],

      synthesis: [["az7", "az8", "az9"], ["az7", "az8", "az9"]],

      business: [["ba7", "ba8", "ba9"], ["ba7", "ba8", "ba9"]],

    },
    {
      question: ["b150", "b150"],

      option: [["b158", "b159", "b160"], ["b158", "b159", "b160"]],

      feedback: [["b176", "b177", "b178"], ["b176", "b177", "b178"]],

      score: [["aw10", "aw11", "aw12"], ["aw10", "aw11", "aw12"]],

      rigor: [["ax10", "ax11", "ax12"], ["ax10", "ax11", "ax12"]],

      structuring: [["ay10", "ay11", "ay12"], ["ay10", "ay11", "ay12"]],

      synthesis: [["az10", "az11", "az12"], ["az10", "az11", "az12"]],

      business: [["ba10", "ba11", "ba12"], ["ba10", "ba11", "ba12"]],

    },
    {
      question: ["b151", "b151"],

      option: [["b161", "b162", "b163"], ["b161", "b162", "b163"]],

      feedback: [["b179", "b180", "b181"], ["b179", "b180", "b181"]],

      score: [["aw13", "aw14", "aw15"], ["aw13", "aw14", "aw15"]],

      rigor: [["ax13", "ax14", "ax15"], ["ax13", "ax14", "ax15"]],

      structuring: [["ay13", "ay14", "ay15"], ["ay13", "ay14", "ay15"]],

      synthesis: [["az13", "az14", "az15"], ["az13", "az14", "az15"]],

      business: [["ba13", "ba14", "ba15"], ["ba13", "ba14", "ba15"]],

    },
    {
      question: ["b152", "b152"],

      option: [["b164", "b165", "b166"], ["b164", "b165", "b166"]],

      feedback: [["b182", "b183", "b184"], ["b182", "b183", "b184"]],

      score: [["aw16", "aw17", "aw18"], ["aw16", "aw17", "aw18"]],

      rigor: [["ax16", "ax17", "ax18"], ["ax16", "ax17", "ax18"]],

      structuring: [["ay16", "ay17", "ay18"], ["ay16", "ay17", "ay18"]],

      synthesis: [["az16", "az17", "az18"], ["az16", "az17", "az18"]],

      business: [["ba16", "ba17", "ba18"], ["ba16", "ba17", "ba18"]],

    },
    {
      question: ["b153", "b153"],

      option: [["b167", "b168", "b169"], ["b167", "b168", "b169"]],

      feedback: [["b185", "b186", "b187"], ["b185", "b186", "b187"]],

      score: [["aw19", "aw20", "aw21"], ["aw19", "aw20", "aw21"]],

      rigor: [["ax19", "ax20", "ax21"], ["ax19", "ax20", "ax21"]],

      structuring: [["ay19", "ay20", "ay21"], ["ay19", "ay20", "ay21"]],

      synthesis: [["az19", "az20", "az21"], ["az19", "az20", "az21"]],

      business: [["ba19", "ba20", "ba21"], ["ba19", "ba20", "ba21"]],

    },
    {
      question: ["b154", "b154"],

      option: [["b170", "b171", "b172"], ["b170", "b171", "b172"]],

      feedback: [["b188", "b189", "b190"], ["b188", "b189", "b190"]],

      score: [["aw22", "aw23", "aw24"], ["aw22", "aw23", "aw24"]],

      rigor: [["ax22", "ax23", "ax24"], ["ax22", "ax23", "ax24"]],

      structuring: [["ay22", "ay23", "ay24"], ["ay22", "ay23", "ay24"]],

      synthesis: [["az22", "az23", "az24"], ["az22", "az23", "az24"]],

      business: [["ba22", "ba23", "ba24"], ["ba22", "ba23", "ba24"]],

    },
  ]

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
    this.getLanguageData(this.attempt, this.selectedLanguage);

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
          // this.getLanguageData(this.attempt, this.selectedLanguage);
        });
    }
  }

  getFetchData() {
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/changemanagementnewmaster/fetchchangemanagementnewmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              for (let i = 0; i < this.questionanswerpaper.length; i++) {
                // this.questionanswerpaper[i].question[0] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].question[0]];
                // for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                //   this.questionanswerpaper[i].option[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].option[0][j]];
                // }
                // for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                //   this.questionanswerpaper[i].feedback[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].feedback[0][j]];
                // }
                for (let j = 0; j < this.questionanswerpaper[i].score[0].length; j++) {
                  this.questionanswerpaper[i].score[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].score[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].rigor[0].length; j++) {
                  this.questionanswerpaper[i].rigor[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].rigor[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].structuring[0].length; j++) {
                  this.questionanswerpaper[i].structuring[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].structuring[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].synthesis[0].length; j++) {
                  this.questionanswerpaper[i].synthesis[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].business[0].length; j++) {
                  this.questionanswerpaper[i].business[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].business[0][j]];
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
      let apiname = "/changemanagementnewcm/fetchchangemanagementnewcm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.questionanswerpaper.length; i++) {
                  // this.questionanswerpaper[i].question[0] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].question[0]];
                  // for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                  //   this.questionanswerpaper[i].option[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].option[0][j]];
                  // }
                  // for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                  //   this.questionanswerpaper[i].feedback[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].feedback[0][j]];
                  // }
                  for (let j = 0; j < this.questionanswerpaper[i].score[0].length; j++) {
                    this.questionanswerpaper[i].score[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].score[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].rigor[0].length; j++) {
                    this.questionanswerpaper[i].rigor[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].structuring[0].length; j++) {
                    this.questionanswerpaper[i].structuring[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].synthesis[0].length; j++) {
                    this.questionanswerpaper[i].synthesis[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].business[0].length; j++) {
                    this.questionanswerpaper[i].business[0][j] = data.resultList[0].changemanagementnewperioddata[this.questionanswerpaper[i].business[0][j]];
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
    let apiname = '/changemanagementnewcm/updatechangemanagementnewcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'changemanagementnewcm', body, {}, apiname, 'changemanagementnewcmactivestatus').subscribe(
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

  getLanguageData(attempt: string, selectedLanguage: string) {
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab === 'cesimcase') {
      let apiname = "/changemanagementnewlanguages/fetchchangemanagementnewlanguages"

      this._api.fetchaCaseFromMasterLanguage1(apiname, this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success" && data.resultList != null) {
              for (let i = 0; i < this.questionanswerpaper.length; i++) {
                this.questionanswerpaper[i].question[0] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].question[0]];
                for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                  this.questionanswerpaper[i].option[0][j] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].option[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                  this.questionanswerpaper[i].feedback[0][j] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].feedback[0][j]];
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
      let apiname = "/changemanagementnewlm/fetchchangemanagementnewlm"

      this._api.fetchgamelm(apiname, this.attempt, selectedLanguage).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success" && data.resultList != null) {
              for (let i = 0; i < this.questionanswerpaper.length; i++) {
                this.questionanswerpaper[i].question[0] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].question[0]];
                for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                  this.questionanswerpaper[i].option[0][j] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].option[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                  this.questionanswerpaper[i].feedback[0][j] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].feedback[0][j]];
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

  override ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.Instructorelementdetailssub.unsubscribe();
  }
}

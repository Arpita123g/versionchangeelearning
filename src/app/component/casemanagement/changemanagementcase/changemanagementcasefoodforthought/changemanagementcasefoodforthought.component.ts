import { Component } from '@angular/core';
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
  selector: 'app-changemanagementcasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './changemanagementcasefoodforthought.component.html',
  styleUrls: ['./changemanagementcasefoodforthought.component.scss']
})
export class ChangemanagementcasefoodforthoughtComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];


  questionanswerpaper: any = [
    {
      question: ["at7", "at7"],

      option: [["au7", "au8", "au9"], ["au7", "au8", "au9"]],

      feedback: [["av7", "av8", "av9"], ["av7", "av8", "av9"]],

      score: [["aw7", "aw8", "aw9"], ["aw7", "aw8", "aw9"]],

      rigor: [["ax7", "ax8", "ax9"], ["ax7", "ax8", "ax9"]],

      structuring: [["ay7", "ay8", "ay9"], ["ay7", "ay8", "ay9"]],

      synthesis: [["az7", "az8", "az9"], ["az7", "az8", "az9"]],

      business: [["ba7", "ba8", "ba9"], ["ba7", "ba8", "ba9"]],

    },
    {
      question: ["at10", "at10"],

      option: [["au10", "au11", "au12"], ["au10", "au11", "au12"]],

      feedback: [["av10", "av11", "av12"], ["av10", "av11", "av12"]],

      score: [["aw10", "aw11", "aw12"], ["aw10", "aw11", "aw12"]],

      rigor: [["ax10", "ax11", "ax12"], ["ax10", "ax11", "ax12"]],

      structuring: [["ay10", "ay11", "ay12"], ["ay10", "ay11", "ay12"]],

      synthesis: [["az10", "az11", "az12"], ["az10", "az11", "az12"]],

      business: [["ba10", "ba11", "ba12"], ["ba10", "ba11", "ba12"]],

    },
    {
      question: ["at13", "at13"],

      option: [["au13", "au14", "au15"], ["au13", "au14", "au15"]],

      feedback: [["av13", "av14", "av15"], ["av13", "av14", "av15"]],

      score: [["aw13", "aw14", "aw15"], ["aw13", "aw14", "aw15"]],

      rigor: [["ax13", "ax14", "ax15"], ["ax13", "ax14", "ax15"]],

      structuring: [["ay13", "ay14", "ay15"], ["ay13", "ay14", "ay15"]],

      synthesis: [["az13", "az14", "az15"], ["az13", "az14", "az15"]],

      business: [["ba13", "ba14", "ba15"], ["ba13", "ba14", "ba15"]],

    },
    {
      question: ["at16", "at16"],

      option: [["au16", "au17", "au18"], ["au16", "au17", "au18"]],

      feedback: [["av16", "av17", "av18"], ["av16", "av17", "av18"]],

      score: [["aw16", "aw17", "aw18"], ["aw16", "aw17", "aw18"]],

      rigor: [["ax16", "ax17", "ax18"], ["ax16", "ax17", "ax18"]],

      structuring: [["ay16", "ay17", "ay18"], ["ay16", "ay17", "ay18"]],

      synthesis: [["az16", "az17", "az18"], ["az16", "az17", "az18"]],

      business: [["ba16", "ba17", "ba18"], ["ba16", "ba17", "ba18"]],

    },
    {
      question: ["at19", "at19"],

      option: [["au19", "au20", "au21"], ["au19", "au20", "au21"]],

      feedback: [["av19", "av20", "av21"], ["av19", "av20", "av21"]],

      score: [["aw19", "aw20", "aw21"], ["aw19", "aw20", "aw21"]],

      rigor: [["ax19", "ax20", "ax21"], ["ax19", "ax20", "ax21"]],

      structuring: [["ay19", "ay20", "ay21"], ["ay19", "ay20", "ay21"]],

      synthesis: [["az19", "az20", "az21"], ["az19", "az20", "az21"]],

      business: [["ba19", "ba20", "ba21"], ["ba19", "ba20", "ba21"]],

    },
    {
      question: ["at22", "at22"],

      option: [["au22", "au23", "au24"], ["au22", "au23", "au24"]],

      feedback: [["av22", "av23", "av24"], ["av22", "av23", "av24"]],

      score: [["aw22", "aw23", "aw24"], ["aw22", "aw23", "aw24"]],

      rigor: [["ax22", "ax23", "ax24"], ["ax22", "ax23", "ax24"]],

      structuring: [["ay22", "ay23", "ay24"], ["ay22", "ay23", "ay24"]],

      synthesis: [["az22", "az23", "az24"], ["az22", "az23", "az24"]],

      business: [["ba22", "ba23", "ba24"], ["ba22", "ba23", "ba24"]],

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
      let apiname = "/changemanagementmaster/fetchchangemanagementmaster"
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
      let apiname = "/changemanagementcm/fetchchangemanagementcm"
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
    let apiname = '/changemanagementcm/updatechangemanagementcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'changemanagementcm', body, {}, apiname, 'changemanagementcmactivestatus').subscribe(
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

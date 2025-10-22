import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
  
@Component({
  selector: 'app-designthinkingcasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './designthinkingcasefoodforthought.component.html',
  styleUrls: ['./designthinkingcasefoodforthought.component.scss']
})
export class DesignthinkingcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  // status:boolean = true;
  defaultcase: string = "";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  foodforthought = [
    {
      question: ["ah7", "ah7"],

      option: [["ai7", "ai8", "ai9"], ["ai7", "ai8", "ai9"]],

      feedback: [["aj7", "aj8", "aj9"], ["aj7", "aj8", "aj9"]],

      score: [["ak7", "ak8", "ak9"], ["ak7", "ak8", "ak9"]],

      rigor: [["al7", "al8", "al9"], ["al7", "al8", "al9"]],

      structuring: [["am7", "am8", "am9"], ["am7", "am8", "am9"]],

      synthesis: [["an7", "an8", "an9"], ["an7", "an8", "an9"]],

      business: [["ao7", "ao8", "ao9"], ["ao7", "ao8", "ao9"]],

    },
    {
      question: ["ah10", "ah10"],

      option: [["ai10", "ai11", "ai12"], ["ai10", "ai11", "ai12"]],

      feedback: [["aj10", "aj11", "aj12"], ["aj10", "aj11", "aj12"]],

      score: [["ak10", "ak11", "ak12"], ["ak10", "ak11", "ak12"]],

      rigor: [["al10", "al11", "al12"], ["al10", "al11", "al12"]],

      structuring: [["am10", "am11", "am12"], ["am10", "am11", "am12"]],

      synthesis: [["an10", "an11", "an12"], ["an10", "an11", "an12"]],

      business: [["ao10", "ao11", "ao12"], ["ao10", "ao11", "ao12"]],

    },
    {
      question: ["ah13", "ah13"],

      option: [["ai13", "ai14", "ai15"], ["ai13", "ai14", "ai15"]],

      feedback: [["aj13", "aj14", "aj15"], ["aj13", "aj14", "aj15"]],

      score: [["ak13", "ak14", "ak15"], ["ak13", "ak14", "ak15"]],

      rigor: [["al13", "al14", "al15"], ["al13", "al14", "al15"]],

      structuring: [["am13", "am14", "am15"], ["am13", "am14", "am15"]],

      synthesis: [["an13", "an14", "an15"], ["an13", "an14", "an15"]],

      business: [["ao13", "ao14", "ao15"], ["ao13", "ao14", "ao15"]],

    },
    {
      question: ["ah16", "ah16"],

      option: [["ai16", "ai17", "ai18"], ["ai16", "ai17", "ai18"]],

      feedback: [["aj16", "aj17", "aj18"], ["aj16", "aj17", "aj18"]],

      score: [["ak16", "ak17", "ak18"], ["ak16", "ak17", "ak18"]],

      rigor: [["al16", "al17", "al18"], ["al16", "al17", "al18"]],

      structuring: [["am16", "am17", "am18"], ["am16", "am17", "am18"]],

      synthesis: [["an16", "an17", "an18"], ["an16", "an17", "an18"]],

      business: [["ao16", "ao17", "ao18"], ["ao16", "ao17", "ao18"]],
    },
    {
      question: ["ah19", "ah19"],

      option: [["ai19", "ai20", "ai21"], ["ai19", "ai20", "ai21"]],

      feedback: [["aj19", "aj20", "aj21"], ["aj19", "aj20", "aj21"]],

      score: [["ak19", "ak20", "ak21"], ["ak19", "ak20", "ak21"]],

      rigor: [["al19", "al20", "al21"], ["al19", "al20", "al21"]],

      structuring: [["am19", "am20", "am21"], ["am19", "am20", "am21"]],

      synthesis: [["an19", "an20", "an21"], ["an19", "an20", "an21"]],

      business: [["ao19", "ao20", "ao21"], ["ao19", "ao20", "ao21"]],

    },
    {
      question: ["ah22", "ah22"],

      option: [["ai22", "ai23", "ai24"], ["ai22", "ai23", "ai24"]],

      feedback: [["aj22", "aj23", "aj24"], ["aj22", "aj23", "aj24"]],

      score: [["ak22", "ak23", "ak24"], ["ak22", "ak23", "ak24"]],

      rigor: [["al22", "al23", "al24"], ["al22", "al23", "al24"]],

      structuring: [["am22", "am23", "am24"], ["am22", "am23", "am24"]],

      synthesis: [["an22", "an23", "an24"], ["an22", "an23", "an24"]],

      business: [["ao22", "ao23", "ao24"], ["ao22", "ao23", "ao24"]],

    },
    {
      question: ["ah25", "ah25"],

      option: [["ai25", "ai26", "ai27"], ["ai25", "ai26", "ai27"]],

      feedback: [["aj25", "aj26", "aj27"], ["aj25", "aj26", "aj27"]],

      score: [["ak25", "ak26", "ak27"], ["ak25", "ak26", "ak27"]],

      rigor: [["al25", "al26", "al27"], ["al25", "al26", "al27"]],

      structuring: [["am25", "am26", "am27"], ["am25", "am26", "am27"]],

      synthesis: [["an25", "an26", "an27"], ["an25", "an26", "an27"]],

      business: [["ao25", "ao26", "ao27"], ["ao25", "ao26", "ao27"]],

    },
    {
      question: ["ah28", "ah28"],

      option: [["ai28", "ai29", "ai30"], ["ai28", "ai29", "ai30"]],

      feedback: [["aj28", "aj29", "aj30"], ["aj28", "aj29", "aj30"]],

      score: [["ak28", "ak29", "ak30"], ["ak28", "ak29", "ak30"]],

      rigor: [["al28", "al29", "al30"], ["al28", "al29", "al30"]],

      structuring: [["am28", "am29", "am30"], ["am28", "am29", "am30"]],

      synthesis: [["an28", "an29", "an30"], ["an28", "an29", "an30"]],

      business: [["ao28", "ao29", "ao30"], ["ao28", "ao29", "ao30"]],

    },

  ];

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
      let apiname = "/designthinkingmaster/fetchdesignthinkingmaster"
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
      let apiname = "/designthinkingcm/fetchdesignthinkingcm"
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
    let apiname = '/designthinkingcm/updatedesignthinkingcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'designthinkingcm', body, {}, apiname, 'designthinkingcmactivestatus').subscribe(
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

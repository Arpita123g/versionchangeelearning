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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-logisticscasefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './logisticscasefoodforthought.component.html',
  styleUrls: ['./logisticscasefoodforthought.component.scss']
})
export class LogisticscasefoodforthoughtComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  selectedLanguage: string = "english";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];

  questionanswerpaper = [
    {
      question: ["ai7", "ai7"],

      option: [["aj7", "aj8", "aj9"], ["aj7", "aj8", "aj9"]],

      feedback: [["ak7", "ak8", "ak9"], ["ak7", "ak8", "ak9"]],

      score: [["al7", "al8", "al9"], ["al7", "al8", "al9"]],

      rigor: [["am7", "am8", "am9"], ["am7", "am8", "am9"]],

      structuring: [["an7", "an8", "an9"], ["an7", "an8", "an9"]],

      synthesis: [["ao7", "ao8", "ao9"], ["ao7", "ao8", "ao9"]],

      business: [["ap7", "ap8", "ap9"], ["ap7", "ap8", "ap9"]],

    },
    {
      question: ["ai10", "ai10"],

      option: [["aj10", "aj11", "aj12"], ["aj10", "aj11", "aj12"]],

      feedback: [["ak10", "ak11", "ak12"], ["ak10", "ak11", "ak12"]],

      score: [["al10", "al11", "al12"], ["al10", "al11", "al12"]],

      rigor: [["am10", "am11", "am12"], ["am10", "am11", "am12"]],

      structuring: [["an10", "an11", "an12"], ["an10", "an11", "an12"]],

      synthesis: [["ao10", "ao11", "ao12"], ["ao10", "ao11", "ao12"]],

      business: [["ap10", "ap11", "ap12"], ["ap10", "ap11", "ap12"]],

    },
    {
      question: ["ai13", "ai13"],

      option: [["aj13", "aj14", "aj15"], ["aj13", "aj14", "aj15"]],

      feedback: [["ak13", "ak14", "ak15"], ["ak13", "ak14", "ak15"]],

      score: [["al13", "al14", "al15"], ["al13", "al14", "al15"]],

      rigor: [["am13", "am14", "am15"], ["am13", "am14", "am15"]],

      structuring: [["an13", "an14", "an15"], ["an13", "an14", "an15"]],

      synthesis: [["ao13", "ao14", "ao15"], ["ao13", "ao14", "ao15"]],

      business: [["ap13", "ap14", "ap15"], ["ap13", "ap14", "ap15"]],

    },
    {
      question: ["ai16", "ai16"],

      option: [["aj16", "aj17", "aj18"], ["aj16", "aj17", "aj18"]],

      feedback: [["ak16", "ak17", "ak18"], ["ak16", "ak17", "ak18"]],

      score: [["al16", "al17", "al18"], ["al16", "al17", "al18"]],

      rigor: [["am16", "am17", "am18"], ["am16", "am17", "am18"]],

      structuring: [["an16", "an17", "an18"], ["an16", "an17", "an18"]],

      synthesis: [["ao16", "ao17", "ao18"], ["ao16", "ao17", "ao18"]],

      business: [["ap16", "ap17", "ap18"], ["ap16", "ap17", "ap18"]],

    },

    {
      question: ["ai19", "ai19"],

      option: [["aj19", "aj20", "aj21"], ["aj19", "aj20", "aj21"]],

      feedback: [["ak19", "ak20", "ak21"], ["ak19", "ak20", "ak21"]],

      score: [["al19", "al20", "al21"], ["al19", "al20", "al21"]],

      rigor: [["am19", "am20", "am21"], ["am19", "am20", "am21"]],

      structuring: [["an19", "an20", "an21"], ["an19", "an20", "an21"]],

      synthesis: [["ao19", "ao20", "ao21"], ["ao19", "ao20", "ao21"]],

      business: [["ap19", "ap20", "ap21"], ["ap19", "ap20", "ap21"]],

    },
    {
      question: ["ai22", "ai22"],

      option: [["aj22", "aj23", "aj24"], ["aj22", "aj23", "aj24"]],

      feedback: [["ak22", "ak23", "ak24"], ["ak22", "ak23", "ak24"]],

      score: [["al22", "al23", "al24"], ["al22", "al23", "al24"]],

      rigor: [["am22", "am23", "am24"], ["am22", "am23", "am24"]],

      structuring: [["an22", "an23", "an24"], ["an22", "an23", "an24"]],

      synthesis: [["ao22", "ao23", "ao24"], ["ao22", "ao23", "ao24"]],

      business: [["ap22", "ap23", "ap24"], ["ap22", "ap23", "ap24"]],

    },
    {
      question: ["ai25", "ai25"],

      option: [["aj25", "aj26", "aj27"], ["aj25", "aj26", "aj27"]],

      feedback: [["ak25", "ak26", "ak27"], ["ak25", "ak26", "ak27"]],

      score: [["al25", "al26", "al27"], ["al25", "al26", "al27"]],

      rigor: [["am25", "am26", "am27"], ["am25", "am26", "am27"]],

      structuring: [["an25", "an26", "an27"], ["an25", "an26", "an27"]],

      synthesis: [["ao25", "ao26", "ao27"], ["ao25", "ao26", "ao27"]],

      business: [["ap25", "ap26", "ap27"], ["ap25", "ap26", "ap27"]],

    },
    
    {
      question: ["ai28", "ai28"],

      option: [["aj28", "aj29", "aj30"], ["aj28", "aj29", "aj30"]],

      feedback: [["ak28", "ak29", "ak30"], ["ak28", "ak29", "ak30"]],

      score: [["al28", "al29", "al30"], ["al28", "al29", "al30"]],

      rigor: [["am28", "am29", "am30"], ["am28", "am29", "am30"]],

      structuring: [["an28", "an29", "an30"], ["an28", "an29", "an30"]],

      synthesis: [["ao28", "ao29", "ao30"], ["ao28", "ao29", "ao30"]],

      business: [["ap28", "ap29", "ap30"], ["ap28", "ap29", "ap30"]],

    },
    {
      question: ["ai31", "ai31"],

      option: [["aj31", "aj32", "aj33"], ["aj31", "aj32", "aj33"]],

      feedback: [["ak31", "ak32", "ak33"], ["ak31", "ak32", "ak33"]],

      score: [["al31", "al32", "al33"], ["al31", "al32", "al33"]],

      rigor: [["am31", "am32", "am33"], ["am31", "am32", "am33"]],

      structuring: [["an31", "an32", "an33"], ["an31", "an32", "an33"]],

      synthesis: [["ao31", "ao32", "ao33"], ["ao31", "ao32", "ao33"]],

      business: [["ap31", "ap32", "ap33"], ["ap31", "ap32", "ap33"]],

    },
    // {
    //   question: ["al123", "al123"],

    //   option: [["am123", "am124", "am125"], ["am123", "am124", "am125"]],

    //   feedback: [["an123", "an124", "an125"], ["an123", "an124", "an125"]],

    //   score: [["ao123", "ao124", "ao125"], ["ao123", "ao124", "ao125"]],

    //   rigor: [["an158", "an159", "an160"], ["an158", "an159", "an160"]],

    //   structuring: [["ao158", "ao159", "ao160"], ["ao158", "ao159", "ao160"]],

    //   synthesis: [["ap158", "ap159", "ap160"], ["ap158", "ap159", "ap160"]],

    //   business: [["aq158", "aq159", "aq160"], ["aq158", "aq159", "aq160"]],

    // },
    // {
    //   question: ["al126", "al126"],

    //   option: [["am126", "am127"], ["am126", "am127"]],

    //   feedback: [["an126", "an127"], ["an126", "an127"]],

    //   score: [["ao126", "ao127"], ["ao126", "ao127"]],

    //   rigor: [["an161", "an162"], ["an161", "an162"]],

    //   structuring: [["ao161", "ao162"], ["ao161", "ao162"]],

    //   synthesis: [["ap161", "ap162"], ["ap161", "ap162"]],

    //   business: [["aq161", "aq162"], ["aq161", "aq162"]],

    // },

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


    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/logisticsmaster/fetchlogisticsmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
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
            this.driveerrorLog(error, apiname);
          }
        })
    } else{
      let apiname = "/logisticscm/fetchlogisticscm"
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
    let apiname = '/logisticscm/updatelogisticscm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'logisticscm', body, {}, apiname, 'logisticscmactivestatus').subscribe(
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
  override ngOnDestroy() {
    this.Instructorelementdetailssub.unsubscribe();
  
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-consumerfoodforthougth',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumerfoodforthougth.component.html',
  styleUrls: ['./consumerfoodforthougth.component.scss']
})
export class ConsumerfoodforthougthComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  gamename = "consumer"

  questionanswerpaper = [
    {
      question: ["al96", "al96"],

      option: [["am96", "am97", "am98"], ["am96", "am97", "am98"]],

      feedback: [["an96", "an97", "an98"], ["an96", "an97", "an98"]],

      score: [["ao96", "ao97", "ao98"], ["ao96", "ao97", "ao98"]],

      rigor: [["an131", "an132", "an133"], ["an131", "an132", "an133"]],

      structuring: [["ao131", "ao132", "ao133"], ["ao131", "ao132", "ao133"]],

      synthesis: [["ap131", "ap132", "ap133"], ["ap131", "ap132", "ap133"]],

      business: [["aq131", "aq132", "aq133"], ["aq131", "aq132", "aq133"]],

    },
    {
      question: ["al99", "al99"],

      option: [["am99", "am100", "am9101"], ["am99", "am100", "am9101"]],

      feedback: [["an99", "an100", "an101"], ["an99", "an100", "an101"]],

      score: [["ao99", "ao100", "ao101"], ["ao99", "ao100", "ao101"]],

      rigor: [["an134", "an135", "an136"], ["an134", "an135", "an136"]],

      structuring: [["ao134", "ao135", "ao136"], ["ao134", "ao135", "ao136"]],

      synthesis: [["ap134", "ap135", "ap136"], ["ap134", "ap135", "ap136"]],

      business: [["aq134", "aq135", "aq136"], ["aq134", "aq135", "aq136"]],

    },
    {
      question: ["al102", "al102"],

      option: [["am102", "am103"], ["am102", "am103"]],

      feedback: [["an102", "an103"], ["an102", "an103"]],

      score: [["ao102", "ao103"], ["ao102", "ao103"]],

      rigor: [["an137", "an138"], ["an137", "an138"]],

      structuring: [["ao137", "ao138"], ["ao137", "ao138"]],

      synthesis: [["ap137", "ap138"], ["ap137", "ap138"]],

      business: [["aq137", "aq138"], ["aq137", "aq138"]],

    },
    {
      question: ["al104", "al104"],

      option: [["am104", "am105", "am106"], ["am104", "am105", "am106"]],

      feedback: [["an104", "an105", "an106"], ["an104", "an105", "an106"]],

      score: [["ao104", "ao105", "ao106"], ["ao104", "ao105", "ao106"]],

      rigor: [["an139", "an140", "an141"], ["an139", "an140", "an141"]],

      structuring: [["ao139", "ao140", "ao141"], ["ao139", "ao140", "ao141"]],

      synthesis: [["ap139", "ap140", "ap141"], ["ap139", "ap140", "ap141"]],

      business: [["aq139", "aq140", "aq141"], ["aq139", "aq140", "aq141"]],

    },

    {
      question: ["al107", "al107"],

      option: [["am107", "am108", "am109"], ["am107", "am108", "am109"]],

      feedback: [["an107", "an108", "an109"], ["an107", "an108", "an109"]],

      score: [["ao107", "ao108", "ao109"], ["ao107", "ao108", "ao109"]],

      rigor: [["an142", "an143", "an144"], ["an142", "an143", "an144"]],

      structuring: [["ao142", "ao143", "ao144"], ["ao142", "ao143", "ao144"]],

      synthesis: [["ap142", "ap143", "ap144"], ["ap142", "ap143", "ap144"]],

      business: [["aq142", "aq143", "aq144"], ["aq142", "aq143", "aq144"]],

    },
    {
      question: ["al110", "al110"],

      option: [["am110", "am111"], ["am110", "am111"]],

      feedback: [["an110", "an111"], ["an110", "an110"]],

      score: [["ao110", "ao111"], ["ao110", "ao111"]],

      rigor: [["an145", "an146"], ["an145", "an146"]],

      structuring: [["ao145", "ao146"], ["ao145", "ao146"]],

      synthesis: [["ap145", "ap146"], ["ap145", "ap146"]],

      business: [["aq145", "aq146"], ["aq145", "aq146"]],

    },
    {
      question: ["al112", "al112"],

      option: [["am112", "am113", "am114"], ["am112", "am113", "am114"]],

      feedback: [["an112", "an113", "an114"], ["an112", "an113", "an114"]],

      score: [["ao112", "ao113", "ao114"], ["ao112", "ao113", "ao114"]],

      rigor: [["an147", "an148", "an149"], ["an147", "an148", "an149"]],

      structuring: [["ao147", "ao148", "ao149"], ["ao147", "ao148", "ao149"]],

      synthesis: [["ap147", "ap148", "ap149"], ["ap147", "ap148", "ap149"]],

      business: [["aq147", "aq148", "aq149"], ["aq147", "aq148", "aq149"]],

    },
    {
      question: ["al115", "al115"],

      option: [["am115", "am116", "am117"], ["am115", "am116", "am117"]],

      feedback: [["an115", "an116", "an117"], ["an115", "an116", "an117"]],

      score: [["ao115", "ao116", "ao117"], ["ao115", "ao116", "ao117"]],

      rigor: [["an150", "an151", "an152"], ["an150", "an151", "an152"]],

      structuring: [["ao150", "ao151", "ao152"], ["ao150", "ao151", "ao152"]],

      synthesis: [["ap150", "ap151", "ap152"], ["ap150", "ap151", "ap152"]],

      business: [["aq150", "aq151", "aq152"], ["aq150", "aq151", "aq152"]],

    },
    {
      question: ["al118", "al118"],

      option: [["am118", "am119"], ["am118", "am119"]],

      feedback: [["an118", "an119"], ["an118", "an119"]],

      score: [["ao118", "ao119"], ["ao118", "ao119"]],

      rigor: [["an153", "an154"], ["an153", "an154"]],

      structuring: [["ao153", "ao154"], ["ao153", "ao154"]],

      synthesis: [["ap153", "ap154"], ["ap153", "ap154"]],

      business: [["aq153", "aq154"], ["aq153", "aq154"]],

    },
    {
      question: ["al120", "al120"],

      option: [["am120", "am121", "am122"], ["am120", "am121", "am122"]],

      feedback: [["an120", "an121", "an122"], ["an120", "an121", "an122"]],

      score: [["ao120", "ao121", "ao122"], ["ao120", "ao121", "ao122"]],

      rigor: [["an155", "an156", "an157"], ["an155", "an156", "an157"]],

      structuring: [["ao155", "ao156", "ao157"], ["ao155", "ao156", "ao157"]],

      synthesis: [["ap155", "ap156", "ap157"], ["ap155", "ap156", "ap157"]],

      business: [["aq155", "aq156", "aq157"], ["aq155", "aq156", "aq157"]],

    },
    {
      question: ["al123", "al123"],

      option: [["am123", "am124", "am125"], ["am123", "am124", "am125"]],

      feedback: [["an123", "an124", "an125"], ["an123", "an124", "an125"]],

      score: [["ao123", "ao124", "ao125"], ["ao123", "ao124", "ao125"]],

      rigor: [["an158", "an159", "an160"], ["an158", "an159", "an160"]],

      structuring: [["ao158", "ao159", "ao160"], ["ao158", "ao159", "ao160"]],

      synthesis: [["ap158", "ap159", "ap160"], ["ap158", "ap159", "ap160"]],

      business: [["aq158", "aq159", "aq160"], ["aq158", "aq159", "aq160"]],

    },
    {
      question: ["al126", "al126"],

      option: [["am126", "am127"], ["am126", "am127"]],

      feedback: [["an126", "an127"], ["an126", "an127"]],

      score: [["ao126", "ao127"], ["ao126", "ao127"]],

      rigor: [["an161", "an162"], ["an161", "an162"]],

      structuring: [["ao161", "ao162"], ["ao161", "ao162"]],

      synthesis: [["ap161", "ap162"], ["ap161", "ap162"]],

      business: [["aq161", "aq162"], ["aq161", "aq162"]],

    },

  ];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
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

    let apiname = "/consumerbehaviourcm/fetchconsumerbehaviourcm"
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
  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
    let apiname = '/consumerbehaviourcm/updateconsumerbehaviourcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'consumerbehaviourcm', body, {}, apiname, 'consumerbehaviourcmactivestatus').subscribe(
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

}

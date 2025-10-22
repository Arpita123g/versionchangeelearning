import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  selector: 'app-crmcasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './crmcasefoodforthought.component.html',
  styleUrls: ['./crmcasefoodforthought.component.scss']
})
export class CrmcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought = [
    {
      // question: ["am7", "am7"],
      //for language change 23/04/2025
      question: ["b280", "b280"],

      // option: [["an7", "an8", "an9"], ["an7", "an8", "an9"]],
      option: [["b289", "b290", "b291"], ["b289", "b290", "b291"]],

      // feedback: [["ao7", "ao8", "ao9"], ["ao7", "ao8", "ao9"]],
      feedback: [["b316", "b317", "b318"], ["b316", "b317", "b318"]],


      score: [["ap7", "ap8", "ap9"], ["ap7", "ap8", "ap9"]],

      rigor: [["aq7", "aq8", "aq9"], ["aq7", "aq8", "aq9"]],

      structuring: [["ar7", "ar8", "ar9"], ["ar7", "ar8", "ar9"]],

      synthesis: [["as7", "as8", "as9"], ["as7", "as8", "as9"]],

      business: [["at7", "at8", "at9"], ["at7", "at8", "at9"]],

    },
    {
      // question: ["am10", "am10"],
       //for language change 23/04/2025
       question: ["b281", "b281"],

      // option: [["an10", "an11", "an12"], ["an10", "an11", "an12"]],
      option: [["b292", "b293", "b294"], ["b292", "b293", "b294"]],

      // feedback: [["ao10", "ao11", "ao12"], ["ao10", "ao11", "ao12"]],
      feedback: [["b319", "b320", "b321"], ["b319", "b320", "b321"]],


      score: [["ap10", "ap11", "ap12"], ["ap10", "ap11", "ap12"]],

      rigor: [["aq10", "aq11", "aq12"], ["aq10", "aq11", "aq12"]],

      structuring: [["ar10", "ar11", "ar12"], ["ar10", "ar11", "ar12"]],

      synthesis: [["as10", "as11", "as12"], ["as10", "as11", "as12"]],

      business: [["at10", "at11", "at12"], ["at10", "at11", "at12"]]
    },
    {
      // question: ["am13", "am13"],
       //for language change 23/04/2025
       question: ["b282", "b282"],

      // option: [["an13", "an14", "an15"], ["an13", "an14", "an15"]],
      option: [["b295", "b296", "b297"], ["b295", "b296", "b297"]],

      // feedback: [["ao13", "ao14", "ao15"], ["ao13", "ao14", "ao15"]],
      feedback: [["b322", "b323", "b324"], ["b322", "b323", "b324"]],


      score: [["ap13", "ap14", "ap15"], ["ap13", "ap14", "ap15"]],

      rigor: [["aq13", "aq14", "aq15"], ["aq13", "aq14", "aq15"]],

      structuring: [["ar13", "ar14", "ar15"], ["ar13", "ar14", "ar15"]],

      synthesis: [["as13", "as14", "as15"], ["as13", "as14", "as15"]],

      business: [["at13", "at14", "at15"], ["at13", "at14", "at15"]]
    },
    {
      // question: ["am16", "am16"],
       //for language change 23/04/2025
       question: ["b283", "b283"],

      // option: [["an16", "an17", "an18"], ["an16", "an17", "an18"]],
      option: [["b298", "b299", "b300"], ["b298", "b299", "b300"]],

      // feedback: [["ao16", "ao17", "ao18"], ["ao16", "ao17", "ao18"]],
      feedback: [["b325", "b326", "b327"], ["b325", "b326", "b327"]],


      score: [["ap16", "ap17", "ap18"], ["ap16", "ap17", "ap18"]],

      rigor: [["aq16", "aq17", "aq18"], ["aq16", "aq17", "aq18"]],

      structuring: [["ar16", "ar17", "ar18"], ["ar16", "ar17", "ar18"]],

      synthesis: [["as16", "as17", "as18"], ["as16", "as17", "as18"]],

      business: [["at16", "at17", "at18"], ["at16", "at17", "at18"]]
    },
    {
      // question: ["am19", "am19"],
       //for language change 23/04/2025
       question: ["b284", "b284"],

      // option: [["an19", "an20", "an21"], ["an19", "an20", "an21"]],
      option: [["b301", "b302", "b303"], ["b301", "b302", "b303"]],

      // feedback: [["ao19", "ao20", "ao21"], ["ao19", "ao20", "ao21"]],
      feedback: [["b328", "b329", "b330"], ["b328", "b329", "b330"]],


      score: [["ap19", "ap20", "ap21"], ["ap19", "ap20", "ap21"]],

      rigor: [["aq19", "aq20", "aq21"], ["aq19", "aq20", "aq21"]],

      structuring: [["ar19", "ar20", "ar21"], ["ar19", "ar20", "ar21"]],

      synthesis: [["as19", "as20", "as21"], ["as19", "as20", "as21"]],

      business: [["at19", "at20", "at21"], ["at19", "at20", "at21"]]
    },
    {
      // question: ["am22", "am22"],
       //for language change 23/04/2025
       question: ["b285", "b285"],

      // option: [["an22", "an23", "an24"], ["an22", "an23", "an24"]],
      option: [["b304", "b305", "b306"], ["b304", "b305", "b306"]],

      // feedback: [["ao22", "ao23", "ao24"], ["ao22", "ao23", "ao24"]],
      feedback: [["b331", "b332", "b333"], ["b331", "b332", "b333"]],


      score: [["ap22", "ap23", "ap24"], ["ap22", "ap23", "ap24"]],

      rigor: [["aq22", "aq23", "aq24"], ["aq22", "aq23", "aq24"]],

      structuring: [["ar22", "ar23", "ar24"], ["ar22", "ar23", "ar24"]],

      synthesis: [["as22", "as23", "as24"], ["as22", "as23", "as24"]],

      business: [["at22", "at23", "at24"], ["at22", "at23", "at24"]]
    },
    {
      // question: ["am25", "am25"],
       //for language change 23/04/2025
       question: ["b286", "b286"],

      // option: [["an25", "an26", "an27"], ["an25", "an26", "an27"]],
      option: [["b307", "b308", "b309"], ["b307", "b308", "b309"]],

      // feedback: [["ao25", "ao26", "ao27"], ["ao25", "ao26", "ao27"]],
      feedback: [["b334", "b335", "b336"], ["b334", "b335", "b336"]],


      score: [["ap25", "ap26", "ap27"], ["ap25", "ap26", "ap27"]],

      rigor: [["aq25", "aq26", "aq27"], ["aq25", "aq26", "aq27"]],

      structuring: [["ar25", "ar26", "ar27"], ["ar25", "ar26", "ar27"]],

      synthesis: [["as25", "as26", "as27"], ["as25", "as26", "as27"]],

      business: [["at25", "at26", "at27"], ["at25", "at26", "at27"]]
    },
    {
      // question: ["am28", "am28"],
       //for language change 23/04/2025
       question: ["b287", "b287"],

      // option: [["an28", "an29", "an30"], ["an28", "an29", "an30"]],
      option: [["b310", "b311", "b312"], ["b310", "b311", "b312"]],

      // feedback: [["ao28", "ao29", "ao30"], ["ao28", "ao29", "ao30"]],
      feedback: [["b337", "b338", "b339"], ["b337", "b338", "b339"]],


      score: [["ap28", "ap29", "ap30"], ["ap28", "ap29", "ap30"]],

      rigor: [["aq28", "aq29", "aq30"], ["aq28", "aq29", "aq30"]],

      structuring: [["ar28", "ar29", "ar30"], ["ar28", "ar29", "ar30"]],

      synthesis: [["as28", "as29", "as30"], ["as28", "as29", "as30"]],

      business: [["at28", "at29", "at30"], ["at28", "at29", "at30"]]
    },
    {
      // question: ["am31", "am31"],
       //for language change 23/04/2025
       question: ["b288", "b288"],

      // option: [["an31", "an32", "an33"], ["an31", "an32", "an33"]],
      option: [["b313", "b314", "b315"], ["b313", "b314", "b315"]],

      // feedback: [["ao31", "ao32", "ao33"], ["ao31", "ao32", "ao33"]],
      feedback: [["b340", "b341", "b342"], ["b340", "b341", "b342"]],

      score: [["ap31", "ap32", "ap33"], ["ap31", "ap32", "ap33"]],

      rigor: [["aq31", "aq32", "aq33"], ["aq31", "aq32", "aq33"]],

      structuring: [["ar31", "ar32", "ar33"], ["ar31", "ar32", "ar33"]],

      synthesis: [["as31", "as32", "as33"], ["as31", "as32", "as33"]],

      business: [["at31", "at32", "at33"], ["at31", "at32", "at33"]]
    },

  ];
  selectedLanguage: string = "english";
  attempt: string = "1";

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,private sharedState: SharedserviceService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
     let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
    // this.getFetchData();

    this.sharedState.selectedLanguage$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.getLanguageData(this.attempt, this.selectedLanguage);
    });
  }
  getFetchData() {
    //***********it will be uncommitted*******************/

    let apiname = "/crmgamecm/fetchcrmgamecm"
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
                  this.foodforthought[i].score[0][j] = data.resultList[0].crmgameperioddata[this.foodforthought[i].score[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                  this.foodforthought[i].rigor[0][j] = data.resultList[0].crmgameperioddata[this.foodforthought[i].rigor[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                  this.foodforthought[i].structuring[0][j] = data.resultList[0].crmgameperioddata[this.foodforthought[i].structuring[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                  this.foodforthought[i].synthesis[0][j] = data.resultList[0].crmgameperioddata[this.foodforthought[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                  this.foodforthought[i].business[0][j] = data.resultList[0].crmgameperioddata[this.foodforthought[i].business[0][j]];
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

  }

  /////////////////
  getLanguageData(attempt: string, selectedLanguage: string) {
    let apiname = "/crmgamelm/fetchcrmgamelm";

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
            this.getFetchData();

          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }


  /////////////////

  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
     // Check if the value is numeric (integer or decimal) after removing commas
     const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

     // If the value is numeric, remove commas
     if (isNumeric) {
         value = value.replace(/,/g, '');
     }
    let apiname = '/crmgamecm/updatecrmgamecm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'crmgamecm', body, {}, apiname, 'crmgamecmactivestatus').subscribe(
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

}

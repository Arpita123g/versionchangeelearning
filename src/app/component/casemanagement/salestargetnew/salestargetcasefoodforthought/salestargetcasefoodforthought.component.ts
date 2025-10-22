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


@Component({
  selector: 'app-salestargetcasefoodforthought',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './salestargetcasefoodforthought.component.html',
  styleUrls: ['./salestargetcasefoodforthought.component.scss']
})
export class SalestargetcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";
  selectedLanguage: string = "english";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  foodforthought = [
    {
      // question: ["ad7", "ad7"],

      // option: [["ae7", "ae8", "ae9"], ["ae7", "ae8", "ae9"]],

      // feedback: [["af7", "af8", "af9"], ["af7", "af8", "af9"]],

      score: [["ag7", "ag8", "ag9"], ["ag7", "ag8", "ag9"]],

      rigor: [["ah7", "ah8", "ah9"], ["ah7", "ah8", "ah9"]],

      structuring: [["ai7", "ai8", "ai9"], ["ai7", "ai8", "ai9"]],

      synthesis: [["aj7", "aj8", "aj9"], ["aj7", "aj8", "aj9"]],

      business: [["ak7", "ak8", "ak9"], ["ak7", "ak8", "ak9"]],

    },
    {
      // question: ["ad10", "ad10"],

      // option: [["ae10", "ae11", "ae12"], ["ae10", "ae11", "ae12"]],

      // feedback: [["af10", "af11", "af12"], ["af10", "af11", "af12"]],

      score: [["ag10", "ag11", "ag12"], ["ag10", "ag11", "ag12"]],

      rigor: [["ah10", "ah11", "ah12"], ["ah10", "ah11", "ah12"]],

      structuring: [["ai10", "ai11", "ai12"], ["ai10", "ai11", "ai12"]],

      synthesis: [["aj10", "aj11", "aj12"], ["aj10", "aj11", "aj12"]],

      business: [["ak10", "ak11", "ak12"], ["ak10", "ak11", "ak12"]],

    },
    {
      // question: ["ad13", "ad13"],

      // option: [["ae13", "ad14"], ["ae13", "ad14"]],

      // feedback: [["af13", "af14"], ["af13", "af14"]],

      score: [["ag13", "ag14"], ["ag13", "ag14"]],

      rigor: [["ah13", "ah14"], ["ah13", "ah14"]],

      structuring: [["ai13", "ai14"], ["ai13", "ai14"]],

      synthesis: [["aj13", "aj14"], ["aj13", "aj14"]],

      business: [["ak13", "ak14"], ["ak13", "ak14"]],

    },
    {
      // question: ["ad15", "ad15"],

      // option: [["ae15", "ae16", "ae17"], ["ae15", "ae16", "ae17"]],

      // feedback: [["af15", "af16", "af17"], ["af15", "af16", "af17"]],

      score: [["ag15", "ag16", "ag17"], ["ag15", "ag16", "ag17"]],

      rigor: [["ah15", "ah16", "ah17"], ["ah15", "ah16", "ah17"]],

      structuring: [["ai15", "ai16", "ai17"], ["ai15", "ai16", "ai17"]],

      synthesis: [["aj15", "aj16", "aj17"], ["aj15", "aj16", "aj17"]],

      business: [["ak15", "ak16", "ak17"], ["ak15", "ak16", "ak17"]],

    },
    {
      // question: ["ad18", "ad18"],

      // option: [["ae18", "ae19", "ae20"], ["ae18", "ae19", "ae20"]],

      // feedback: [["af18", "af19", "af20"], ["af18", "af19", "af20"]],

      score: [["ag18", "ag19", "ag20"], ["ag18", "ag19", "ag20"]],

      rigor: [["ah18", "ah19", "ah20"], ["ah18", "ah19", "ah20"]],

      structuring: [["ai18", "ai19", "ai20"], ["ai18", "ai19", "ai20"]],

      synthesis: [["aj18", "aj19", "aj20"], ["aj18", "aj19", "aj20"]],

      business: [["ak18", "ak19", "ak20"], ["ak18", "ak19", "ak20"]],

    },
    {
      // question: ["ad21", "ad21"],

      // option: [["ae21", "ae22"], ["ae21", "ae22"]],

      // feedback: [["af21", "af22"], ["af21", "af22"]],

      score: [["ag21", "ag22"], ["ag21", "ag22"]],

      rigor: [["ah21", "ah22"], ["ah21", "ah22"]],

      structuring: [["ai21", "ai22"], ["ai21", "ai22"]],

      synthesis: [["aj21", "aj22"], ["aj21", "aj22"]],

      business: [["ak21", "ak22"], ["ak21", "ak22"]],
    },
    {
      // question: ["ad23", "ad23"],

      // option: [["ae23", "ae24", "ae25"], ["ae23", "ae24", "ae25"]],

      // feedback: [["af23", "af24", "af25"], ["af23", "af24", "af25"]],

      score: [["ag23", "ag24", "ag25"], ["ag23", "ag24", "ag25"]],

      rigor: [["ah23", "ah24", "ah25"], ["ah23", "ah24", "ah25"]],

      structuring: [["ai23", "ai24", "ai25"], ["ai23", "ai24", "ai25"]],

      synthesis: [["aj23", "aj24", "aj25"], ["aj23", "aj24", "aj25"]],

      business: [["ak23", "ak24", "ak25"], ["ak23", "ak24", "ak25"]],

    },
    {
      // question: ["ad26", "ad26"],

      // option: [["ae26", "ae27", "ae28"], ["ae26", "ae27", "ae28"]],

      // feedback: [["af26", "af27", "af28"], ["af26", "af27", "af28"]],

      score: [["ag26", "ag27", "ag28"], ["ag26", "ag27", "ag28"]],

      rigor: [["ah26", "ah27", "ah28"], ["ah26", "ah27", "ah28"]],

      structuring: [["ai26", "ai27", "ai28"], ["ai26", "ai27", "ai28"]],

      synthesis: [["aj26", "aj27", "aj28"], ["aj26", "aj27", "aj28"]],

      business: [["ak26", "ak27", "ak28"], ["ak26", "ak27", "ak28"]],

    },
    {
      // question: ["ad29", "ad29"],

      // option: [["ae29", "ae30"], ["ae29", "ae30"]],

      // feedback: [["af29", "af30"], ["af29", "af30"]],

      score: [["ag29", "ag30"], ["ag29", "ag30"]],

      rigor: [["ah29", "ah30"], ["ah29", "ah30"]],

      structuring: [["ai29", "ai30"], ["ai29", "ai30"]],

      synthesis: [["aj29", "aj30"], ["aj29", "aj30"]],

      business: [["ak29", "ak30"], ["ak29", "ak30"]],

    },
    {
      // question: ["ad31", "ad31"],

      // option: [["ae31", "ae32", "ae33"], ["ae31", "ae32", "ae33"]],

      // feedback: [["af31", "af32", "af33"], ["af31", "af32", "af33"]],

      score: [["ag31", "ag32", "ag33"], ["ag31", "ag32", "ag33"]],

      rigor: [["ah31", "ah32", "ah33"], ["ah31", "ah32", "ah33"]],

      structuring: [["ai31", "ai32", "ai33"], ["ai31", "ai32", "ai33"]],

      synthesis: [["aj31", "aj32", "aj33"], ["aj31", "aj32", "aj33"]],

      business: [["ak31", "ak32", "ak33"], ["ak31", "ak32", "ak33"]],

    },
    {
      // question: ["ad34", "ad34"],

      // option: [["ae34", "ae35", "ae36"], ["ae34", "ae35", "ae36"]],

      // feedback: [["af34", "af35", "af36"], ["af34", "af35", "af36"]],

      score: [["ag34", "ag35", "ag36"], ["ag34", "ag35", "ag36"]],

      rigor: [["ah34", "ah35", "ah36"], ["ah34", "ah35", "ah36"]],

      structuring: [["ai34", "ai35", "ai36"], ["ai34", "ai35", "ai36"]],

      synthesis: [["aj34", "aj35", "aj36"], ["aj34", "aj35", "aj36"]],

      business: [["ak34", "ak35", "ak36"], ["ak34", "ak35", "ak36"]],

    },
    {
      // question: ["ad37", "ad37"],

      // option: [["ae37", "ae38"], ["ae37", "ae38"]],

      // feedback: [["af37", "af38"], ["af37", "af38"]],

      score: [["ag37", "ag38"], ["ag37", "ag38"]],

      rigor: [["ah37", "ah38"], ["ah37", "ah38"]],

      structuring: [["ai37", "ai38"], ["ai37", "ai38"]],

      synthesis: [["aj37", "aj38"], ["aj37", "aj38"]],

      business: [["ak37", "ak38"], ["ak37", "ak38"]],

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
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/salestargetmaster/fetchsalestargetmaster"
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
    } else{
      let apiname = "/salestargetcm/fetchsalestargetcm"
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
    let apiname = '/salestargetcm/updatesalestargetcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'salestargetcm', body, {}, apiname, 'salestargetcmactivestatus').subscribe(
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

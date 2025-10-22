import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-promotionsigmentcasefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './promotionsigmentcasefoodforthought.component.html',
  styleUrls: ['./promotionsigmentcasefoodforthought.component.scss']
})
export class PromotionsigmentcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";
  foodforthought = [
    {
      question: ["ac8", "ac8"],

      option: [["ad8", "ad9", "ad10"], ["ad8", "ad9", "ad10"]],

      feedback: [["ae8", "ae9", "ae10"], ["ae8", "ae9", "ae10"]],

      score: [["af8", "af9", "af10"], ["af8", "af9", "af10"]],

      rigor: [["ag8", "ag9", "ag10"], ["ag8", "ag9", "ag10"]],

      structuring: [["ah8", "ah9", "ah10"], ["ah8", "ah9", "ah10"]],

      synthesis: [["ai8", "ai9", "ai10"], ["ai8", "ai9", "ai10"]],

      business: [["aj8", "aj9", "aj10"], ["aj8", "aj9", "aj10"]],

    },
    {
      question: ["ac11", "ac11"],

      option: [["ad11", "ad12", "ad13"], ["ad11", "ad12", "ad13"]],

      feedback: [["ae11", "ae12", "ae13"], ["ae11", "ae12", "ae13"]],

      score: [["af11", "af12", "af13"], ["af11", "af12", "af13"]],

      rigor: [["ag11", "ag12", "ag13"], ["ag11", "ag12", "ag13"]],

      structuring: [["ah11", "ah12", "ah13"], ["ah11", "ah12", "ah13"]],

      synthesis: [["ai11", "ai12", "ai13"], ["ai11", "ai12", "ai13"]],

      business: [["aj11", "aj12", "aj13"], ["aj11", "aj12", "aj13"]],

    },
    {
      question: ["ac14", "ac14"],

      option: [["ad14", "ad15", "ad16"], ["ad14", "ad15", "ad16"]],

      feedback: [["ae14", "ae15", "ae16"], ["ae14", "ae15", "ae16"]],

      score: [["af14", "af15", "af16"], ["af14", "af15", "af16"]],

      rigor: [["ag14", "ag15", "ag16"], ["ag14", "ag15", "ag16"]],

      structuring: [["ah14", "ah15", "ah16"], ["ah14", "ah15", "ah16"]],

      synthesis: [["ai14", "ai15", "ai16"], ["ai14", "ai15", "ai16"]],

      business: [["aj14", "aj15", "aj16"], ["aj14", "aj15", "aj16"]],

    },
    {
      question: ["ac17", "ac17"],

      option: [["ad17", "ad18", "ad19"], ["ad17", "ad18", "ad19"]],

      feedback: [["ae17", "ae18", "ae19"], ["ae17", "ae18", "ae19"]],

      score: [["af17", "af18", "af19"], ["af17", "af18", "af19"]],

      rigor: [["ag17", "ag18", "ag19"], ["ag17", "ag18", "ag19"]],

      structuring: [["ah17", "ah18", "ah19"], ["ah17", "ah18", "ah19"]],

      synthesis: [["ai17", "ai18", "ai19"], ["ai17", "ai18", "ai19"]],

      business: [["aj17", "aj18", "aj19"], ["aj17", "aj18", "aj19"]],

    },
    {
      question: ["ac20", "ac20"],

      option: [["ad20", "ad21", "ad22"], ["ad20", "ad21", "ad22"]],

      feedback: [["ae20", "ae21", "ae22"], ["ae20", "ae21", "ae22"]],

      score: [["af20", "af21", "af22"], ["af20", "af21", "af22"]],

      rigor: [["ag20", "ag21", "ag22"], ["ag20", "ag21", "ag22"]],

      structuring: [["ah20", "ah21", "ah22"], ["ah20", "ah21", "ah22"]],

      synthesis: [["ai20", "ai21", "ai22"], ["ai20", "ai21", "ai22"]],

      business: [["aj20", "aj21", "aj22"], ["aj20", "aj21", "aj22"]],

    },
    {
      question: ["ac23", "ac23"],

      option: [["ad23", "ad24", "ad25"], ["ad23", "ad24", "ad25"]],

      feedback: [["ae23", "ae24", "ae25"], ["ae23", "ae24", "ae25"]],

      score: [["af23", "af24", "af25"], ["af23", "af24", "af25"]],

      rigor: [["ag23", "ag24", "ag25"], ["ag23", "ag24", "ag25"]],

      structuring: [["ah23", "ah24", "ah25"], ["ah23", "ah24", "ah25"]],

      synthesis: [["ai23", "ai24", "ai25"], ["ai23", "ai24", "ai25"]],

      business: [["aj23", "aj24", "aj25"], ["aj23", "aj24", "aj25"]],

    },
    {
      question: ["ac26", "ac26"],

      option: [["ad26", "ad27", "ad28"], ["ad26", "ad27", "ad28"]],

      feedback: [["ae26", "ae27", "ae28"], ["ae26", "ae27", "ae28"]],

      score: [["af26", "af27", "af28"], ["af26", "af27", "af28"]],

      rigor: [["ag26", "ag27", "ag28"], ["ag26", "ag27", "ag28"]],

      structuring: [["ah26", "ah27", "ah28"], ["ah26", "ah27", "ah28"]],

      synthesis: [["ai26", "ai27", "ai28"], ["ai26", "ai27", "ai28"]],

      business: [["aj26", "aj27", "aj28"], ["aj26", "aj27", "aj28"]],

    },
    {
      question: ["ac29", "ac29"],

      option: [["ad29", "ad30", "ad31"], ["ad29", "ad30", "ad31"]],

      feedback: [["ae29", "ae30", "ae31"], ["ae29", "ae30", "ae31"]],

      score: [["af29", "af30", "af31"], ["af29", "af30", "af31"]],

      rigor: [["ag29", "ag30", "ag31"], ["ag29", "ag30", "ag31"]],

      structuring: [["ah29", "ah30", "ah31"], ["ah29", "ah30", "ah31"]],

      synthesis: [["ai29", "ai30", "ai31"], ["ai29", "ai30", "ai31"]],

      business: [["aj29", "aj30", "aj31"], ["aj29", "aj30", "aj31"]],

    },
    {
      question: ["ac32", "ac32"],

      option: [["ad32", "ad33", "ad34"], ["ad32", "ad33", "ad34"]],

      feedback: [["ae32", "ae33", "ae34"], ["ae32", "ae33", "ae34"]],

      score: [["af32", "af33", "af34"], ["af32", "af33", "af34"]],

      rigor: [["ag32", "ag33", "ag34"], ["ag32", "ag33", "ag34"]],

      structuring: [["ah32", "ah33", "ah34"], ["ah32", "ah33", "ah34"]],

      synthesis: [["ai32", "ai33", "ai34"], ["ai32", "ai33", "ai34"]],

      business: [["aj32", "aj33", "aj34"], ["aj32", "aj33", "aj34"]],

    },
    {
      question: ["ac35", "ac35"],

      option: [["ad35", "ad36", "ad37"], ["ad35", "ad36", "ad37"]],

      feedback: [["ae35", "ae36", "ae37"], ["ae35", "ae36", "ae37"]],

      score: [["af35", "af36", "af37"], ["af35", "af36", "af37"]],

      rigor: [["ag35", "ag36", "ag37"], ["ag35", "ag36", "ag37"]],

      structuring: [["ah35", "ah36", "ah37"], ["ah35", "ah36", "ah37"]],

      synthesis: [["ai35", "ai36", "ai37"], ["ai35", "ai36", "ai37"]],

      business: [["aj35", "aj36", "aj37"], ["aj35", "aj36", "aj37"]],

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
      let apiname = "/promotionsmaster/fetchpromotionsmaster"
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
      let apiname = "/promotionscm/fetchpromotionscm"
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
    let apiname = '/promotionscm/updatepromotionscm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'promotionscm', body, {}, apiname, 'promotionscmactivestatus').subscribe(
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

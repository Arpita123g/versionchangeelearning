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
  selector: 'app-pricingcasefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './pricingcasefoodforthought.component.html',
  styleUrls: ['./pricingcasefoodforthought.component.scss']
})
export class PricingcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought = [
    {
      question: ["v7", "v7"],

      option: [["w7", "w8", "w9"], ["w7", "w8", "w9"]],

      feedback: [["x7", "x8", "x9"], ["x7", "x8", "x9"]],

      score: [["y7", "y8", "y9"], ["y7", "y8", "y9"]],

      rigor: [["z7", "z8", "z9"], ["z7", "z8", "z9"]],

      structuring: [["aa7", "aa8", "aa9"], ["aa7", "aa8", "aa9"]],

      synthesis: [["ab7", "ab8", "ab9"], ["ab7", "ab8", "ab9"]],

      business: [["ac7", "ac8", "ac9"], ["ac7", "ac8", "ac9"]],

    },
    {
      question: ["v10", "v10"],

      option: [["w10", "w11", "w12"], ["w10", "w11", "w12"]],

      feedback: [["x10", "x11", "x12"], ["x10", "x11", "x12"]],

      score: [["y10", "y11", "y12"], ["y10", "y11", "y12"]],

      rigor: [["z10", "z11", "z12"], ["z10", "z11", "z12"]],

      structuring: [["aa10", "aa11", "aa12"], ["aa10", "aa11", "aa12"]],

      synthesis: [["ab10", "ab11", "ab12"], ["ab10", "ab11", "ab12"]],

      business: [["ac10", "ac11", "ac12"], ["ac10", "ac11", "ac12"]],

    },
    {
      question: ["v13", "v13"],

      option: [["w13", "w14", "w15"], ["w13", "w14", "w15"]],

      feedback: [["x13", "x14", "x15"], ["x13", "x14", "x15"]],

      score: [["y13", "y14", "y15"], ["y13", "y14", "y15"]],

      rigor: [["z13", "z14", "z15"], ["z13", "z14", "z15"]],

      structuring: [["aa13", "aa14", "aa15"], ["aa13", "aa14", "aa15"]],

      synthesis: [["ab13", "ab14", "ab15"], ["ab13", "ab14", "ab15"]],

      business: [["ac13", "ac14", "ac15"], ["ac13", "ac14", "ac15"]],

    },
    {
      question: ["v16", "v16"],

      option: [["w16", "w17", "w18"], ["w16", "w17", "w18"]],

      feedback: [["x16", "x17", "x18"], ["x16", "x17", "x18"]],

      score: [["y16", "y17", "y18"], ["y16", "y17", "y18"]],

      rigor: [["z16", "z17", "z18"], ["z16", "z17", "z18"]],

      structuring: [["aa16", "aa17", "aa18"], ["aa16", "aa17", "aa18"]],

      synthesis: [["ab16", "ab17", "ab18"], ["ab16", "ab17", "ab18"]],

      business: [["ac16", "ac17", "ac18"], ["ac16", "ac17", "ac18"]],

    },
    {
      question: ["v19", "v19"],

      option: [["w19", "w20", "w21"], ["w19", "w20", "w21"]],

      feedback: [["x19", "x20", "x21"], ["x19", "x20", "x21"]],

      score: [["y19", "y20", "y21"], ["y19", "y20", "y21"]],

      rigor: [["z19", "z20", "z21"], ["z19", "z20", "z21"]],

      structuring: [["aa19", "aa20", "aa21"], ["aa19", "aa20", "aa21"]],

      synthesis: [["ab19", "ab20", "ab21"], ["ab19", "ab20", "ab21"]],

      business: [["ac19", "ac20", "ac21"], ["ac19", "ac20", "ac21"]],

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
      let apiname = "/pricinggamemaster/fetchpricinggamemaster"
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
      let apiname = "/pricinggamecm/fetchpricinggamecm"
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
    let apiname = '/pricinggamecm/updatepricinggamecm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'pricinggamecm', body, {}, apiname, 'pricinggamecmactivestatus').subscribe(
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

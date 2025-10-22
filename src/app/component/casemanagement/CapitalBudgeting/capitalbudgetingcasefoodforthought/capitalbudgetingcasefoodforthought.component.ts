import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-capitalbudgetingcasefoodforthought',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule,MatIconModule],
  templateUrl: './capitalbudgetingcasefoodforthought.component.html',
  styleUrls: ['./capitalbudgetingcasefoodforthought.component.scss']
})
export class CapitalbudgetingcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought: any = [
    {
      question: ["What factor is crucial in estimating the discount rate for a project within the project portfolio?"],

      option: [["Project's expected cash flow", "Project's duration", "Project's risk profile"]],

      feedback: [["While expected cash flow is an important consideration in project evaluation, the primary factor in estimating the discount rate is the project's risk profile, as it influences the cost of capital.",
        "Project duration is a factor, but it's not the primary one in estimating the discount rate. The focus should be on risk and alignment with the company's weighted average cost of capital (WACC).",
        "Absolutely right! Estimating the discount rate involves a careful assessment of the project's risk profile, ensuring alignment with the company's overall cost of capital."]],

      score: [["s6", "s7", "s8"], ["s6", "s7", "s8"]],

      rigor: [["t6", "t7", "t8"], ["t6", "t7", "t8"]],

      structuring: [["u6", "u7", "u8"], ["u6", "u7", "u8"]],

      synthesis: [["v6", "v7", "v8"], ["v6", "v7", "v8"]],

      business: [["w6", "w7", "w8"], ["w6", "w7", "w8"]],
    },
    {
      question: ["How might varying discount rates impact the present value of future cash flows?"],

      option: [["Varying discount rates have no impact on cash flows", "Higher discount rates increase present value", "Lower discount rates decrease present value"]],

      feedback: [["Varying discount rates indeed impact the present value of future cash flows. Higher discount rates reduce present value, highlighting the importance of assessing project risk.",
        "Higher discount rates actually decrease present value. Lower discount rates increase present value, underscoring the need for a balanced approach to risk.",
        "Well done! Lower discount rates increase present value, influencing the viability of projects with lower risk."]],

      score: [["s9", "s10", "s11"], ["s9", "s10", "s11"]],

      rigor: [["t9", "t10", "t11"], ["t9", "t10", "t11"]],

      structuring: [["u9", "u10", "u11"], ["u9", "u10", "u11"]],

      synthesis: [["v9", "v10", "v11"], ["v9", "v10", "v11"]],

      business: [["w9", "w10", "w11"], ["w9", "w10", "w11"]],
    },
    {
      question: ["What trade-offs should participants consider when choosing projects within given budget constraints?"],

      option: [["Budget constraints do not impact project choices", "Higher risk projects always result in higher returns", "Balancing risk, potential returns, and budget constraints"]],

      feedback: [["Budget constraints are a crucial consideration. Participants must balance budget constraints with project risk and potential returns for effective decision-making.",
        "While higher risk projects may offer higher returns, it's not a guaranteed relationship. Balancing risk, returns, and budget constraints is key to effective decision-making.",
        "Excellent! Participants should consider the trade-offs between risk, potential returns, and budget constraints to maximize future cash flow."]],

      score: [["s12", "s13", "s14"], ["s12", "s13", "s14"]],

      rigor: [["t12", "t13", "t14"], ["t12", "t13", "t14"]],

      structuring: [["u12", "u13", "u14"], ["u12", "u13", "u14"]],

      synthesis: [["v12", "v13", "v14"], ["v12", "v13", "v14"]],

      business: [["w12", "w13", "w14"], ["w12", "w13", "w14"]],
    },
    {
      question: ["How can financial metrics like IRR and NPV guide project prioritization?"],

      option: [["These metrics have no relevance in project prioritization", "IRR favors short-term projects, while NPV favors long-term projects", "Both IRR and NPV provide insights into project viability"]],

      feedback: [["Both IRR and NPV are critical metrics in project prioritization, offering insights into the project's financial viability and potential returns.",
        "While IRR and NPV have different perspectives, neither specifically favors short-term or long-term projects. They provide complementary information.",
        "Fantastic! Both IRR and NPV contribute valuable insights into project viability, but they focus on different aspects of financial performance."]],

      score: [["s15", "s16", "s17"], ["s15", "s16", "s17"]],

      rigor: [["t15", "t16", "t17"], ["t15", "t16", "t17"]],

      structuring: [["u15", "u16", "u17"], ["u15", "u16", "u17"]],

      synthesis: [["v15", "v16", "v17"], ["v15", "v16", "v17"]],

      business: [["w15", "w16", "w17"], ["w15", "w16", "w17"]],
    },
    {
      question: ["What is the primary purpose of the Payback period metric in project evaluation?"],

      option: [["Assessing project profitability", "Measuring how quickly the initial investment is recovered", "Predicting future cash flows"]],

      feedback: [["The primary purpose of the Payback period is to measure how quickly the initial investment is recovered, providing insights into liquidity and risk.",
        "Exactly right! The Payback period measures the time it takes to recover the initial investment, offering insights into liquidity and risk.",
        "While the Payback period considers future cash flows indirectly, its primary focus is on the time it takes to recover the initial investment."]],

      score: [["s18", "s19", "s20"], ["s18", "s19", "s20"]],

      rigor: [["t18", "t19", "t20"], ["t18", "t19", "t20"]],

      structuring: [["u18", "u19", "u20"], ["u18", "u19", "u20"]],

      synthesis: [["v18", "v19", "v20"], ["v18", "v19", "v20"]],

      business: [["w18", "w19", "w20"], ["w18", "w19", "w20"]],
    },
    {
      question: ["How does the Profitability Index contribute to decision-making?"],

      option: [["It has no relevance in project decision-making", "It compares project profitability to industry benchmarks", "It helps prioritize projects based on their profitability relative to the investment"]],

      feedback: [["The Profitability Index is indeed relevant in project decision-making. It assists in prioritizing projects based on their profitability relative to the investment.",
        "The Profitability Index does not compare project profitability to industry benchmarks. It evaluates a project's profitability relative to its investment.",
        "Excellent! The Profitability Index is used to prioritize projects by considering their profitability relative to the investment, aiding in decision-making."]],

      score: [["s21", "s22", "s23"], ["s21", "s22", "s23"]],

      rigor: [["t21", "t22", "t23"], ["t21", "t22", "t23"]],

      structuring: [["u21", "u22", "u23"], ["u21", "u22", "u23"]],

      synthesis: [["v21", "v22", "v23"], ["v21", "v22", "v23"]],

      business: [["w21", "w22", "w23"], ["w21", "w22", "w23"]],
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
      let apiname = "/cbgamemaster/fetchcbgamemaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              for (let i = 0; i < this.foodforthought.length; i++) {
                this.foodforthought[i].question[0] = this.foodforthought[i].question[0];
                for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                  this.foodforthought[i].option[0][j] = this.foodforthought[i].option[0][j];
                }
                for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                  this.foodforthought[i].feedback[0][j] = this.foodforthought[i].feedback[0][j];
                }
                for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                  this.foodforthought[i].score[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].score[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                  this.foodforthought[i].rigor[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].rigor[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                  this.foodforthought[i].structuring[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].structuring[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                  this.foodforthought[i].synthesis[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                  this.foodforthought[i].business[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].business[0][j]];
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
      let apiname = "/cbgamecm/fetchcbgamecm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  this.foodforthought[i].question[0] = this.foodforthought[i].question[0];
                  for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                    this.foodforthought[i].option[0][j] = this.foodforthought[i].option[0][j];
                  }
                  for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                    this.foodforthought[i].feedback[0][j] = this.foodforthought[i].feedback[0][j];
                  }
                  for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                    this.foodforthought[i].score[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0].cbgameperioddata[this.foodforthought[i].business[0][j]];
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
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/cbgamecm/updatecbgamecm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'cbgamecm', body, {}, apiname, 'cbgamecmactivestatus').subscribe(
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

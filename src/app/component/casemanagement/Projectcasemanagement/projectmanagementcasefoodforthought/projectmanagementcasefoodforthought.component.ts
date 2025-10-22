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
  selector: 'app-projectmanagementcasefoodforthought',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './projectmanagementcasefoodforthought.component.html',
  styleUrls: ['./projectmanagementcasefoodforthought.component.scss']
})
export class ProjectmanagementcasefoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  defaultcase: string = "";

  foodforthought: any = [
    {
      question: ["What is the critical path in a project map?"],

      option: [["The shortest sequence of tasks.", "The longest sequence of dependent tasks.", "Tasks with the highest resource allocation."]],

      feedback: [["The critical path is not about the shortest sequence but focuses on the longest sequence of dependent tasks.",
        "The critical path is the longest sequence of dependent tasks that must be completed on time for the project to finish within its allocated timeframe.",
        "The critical path is not determined by the highest resource allocation but by task dependencies."]],

      score: [["z7", "z8", "z9"], ["z7", "z8", "z9"]],

      rigor: [["aa7", "aa8", "aa9"], ["aa7", "aa8", "aa9"]],

      structuring: [["ab7", "ab8", "ab9"], ["ab7", "ab8", "ab9"]],

      synthesis: [["ac7", "ac8", "ac9"], ["ac7", "ac8", "ac9"]],

      business: [["ad7", "ad8", "ad9"], ["ad7", "ad8", "ad9"]],
    },
    {
      question: ["What is the purpose of identifying resource-intensive tasks in a project map?"],

      option: [["To ignore these tasks and focus on others.", "To strategically allocate resources for efficiency.", "To extend the duration of these tasks."]],

      feedback: [["Ignoring resource-intensive tasks might lead to suboptimal resource allocation.",
        "Strategic allocation of resources on resource-intensive tasks optimizes efficiency.",
        "Extending the duration of resource-intensive tasks may not be the most efficient strategy."]],

      score: [["z10", "z11", "z12"], ["z10", "z11", "z12"]],

      rigor: [["aa10", "aa11", "aa12"], ["aa10", "aa11", "aa12"]],

      structuring: [["ab10", "ab11", "ab12"], ["ab10", "ab11", "ab12"]],

      synthesis: [["ac10", "ac11", "ac12"], ["ac10", "ac11", "ac12"]],

      business: [["ad10", "ad11", "ad12"], ["ad10", "ad11", "ad12"]],

    },
    {
      question: ["How can you optimize resource allocation for a task?"],

      option: [["Assign tasks randomly to different resources.", "Match task requirements with resource skills.", "Allocate all tasks to a single resource."]],

      feedback: [["Random assignment of tasks is unlikely to optimize resource allocation.",
        "Matching task requirements with resource skills optimizes resource allocation.",
        "Allocating all tasks to a single resource may not optimize overall resource utilization."]],

      score: [["z13", "z14", "z15"], ["z13", "z14", "z15"]],

      rigor: [["aa13", "aa14", "aa15"], ["aa13", "aa14", "aa15"]],

      structuring: [["ab13", "ab14", "ab15"], ["ab13", "ab14", "ab15"]],

      synthesis: [["ac13", "ac14", "ac15"], ["ac13", "ac14", "ac15"]],

      business: [["ad13", "ad14", "ad15"], ["ad13", "ad14", "ad15"]],

    },
    {
      question: ["What is a potential trade-off when implementing a mentorship program for skill enhancement?"],

      option: [["Increased budget and shorter duration.", "Longer duration and decreased budget.", "Minimal direct impact on duration and budget."]],

      feedback: [["A mentorship program may impact duration and budget; it's not guaranteed to increase both.",
        "A mentorship program may affect duration and budget, but not necessarily decrease both.",
        "A mentorship program may have minimal direct impact on duration and budget."]],

      score: [["z16", "z17", "z18"], ["z16", "z17", "z18"]],

      rigor: [["aa16", "aa17", "aa18"], ["aa16", "aa17", "aa18"]],

      structuring: [["ab16", "ab17", "ab18"], ["ab16", "ab17", "ab18"]],

      synthesis: [["ac16", "ac17", "ac18"], ["ac16", "ac17", "ac18"]],

      business: [["ad16", "ad17", "ad18"], ["ad16", "ad17", "ad18"]],

    },
    {
      question: ["How does managing tasks in parallel contribute to project optimization?"],

      option: [["It increases task dependencies.", "It accelerates project duration.", "It complicates resource allocation."]],

      feedback: [["Managing tasks in parallel is generally associated with shorter project duration, not increased dependencies.",
        "Managing tasks in parallel can accelerate project duration by reducing sequential dependencies.",
        "Managing tasks in parallel can simplify resource allocation, not complicate it."]],

      score: [["z19", "z20", "z21"], ["z19", "z20", "z21"]],

      rigor: [["aa19", "aa20", "aa21"], ["aa19", "aa20", "aa21"]],

      structuring: [["ab19", "ab20", "ab21"], ["ab19", "ab20", "ab21"]],

      synthesis: [["ac19", "ac20", "ac21"], ["ac19", "ac20", "ac21"]],

      business: [["ad19", "ad20", "ad21"], ["ad19", "ad20", "ad21"]],

    },
    {
      question: ["In tracking project metrics, how can you optimize budget utilization?"],

      option: [["Allocate the entire budget at the project start.", "Make real-time adjustments based on planned task progress.", "Stick to the initially allocated budget."]],

      feedback: [["Allocating the entire budget upfront may lead to inefficiencies and lack of flexibility.",
        "Making real-time adjustments based on task planning progress optimizes budget utilization.",
        "Sticking to the initially allocated budget may not account for changing project needs."]],

      score: [["z22", "z23", "z24"], ["z22", "z23", "z24"]],

      rigor: [["aa22", "aa23", "aa24"], ["aa22", "aa23", "aa24"]],

      structuring: [["ab22", "ab23", "ab24"], ["ab22", "ab23", "ab24"]],

      synthesis: [["ac22", "ac23", "ac24"], ["ac22", "ac23", "ac24"]],

      business: [["ad22", "ad23", "ad24"], ["ad22", "ad23", "ad24"]],

    },
    {
      question: ["When considering efficiency boosters, what should participants prioritize for skill enhancement?"],

      option: [["Activities with the highest time and budget costs.", "Activities with the lowest time and budget costs.", "Activities with minimal impact on time and budget."]],

      feedback: [["Prioritizing activities with the highest time and budget costs might not align with efficiency.",
        "Prioritizing activities with the lowest time and budget costs might not contribute significantly to efficiency.",
        "Prioritizing activities with minimal impact on time and budget ensures efficiency in skill enhancement."]],

      score: [["z25", "z26", "z27"], ["z25", "z26", "z27"]],

      rigor: [["aa25", "aa26", "aa27"], ["aa25", "aa26", "aa27"]],

      structuring: [["ab25", "ab26", "ab27"], ["ab25", "ab26", "ab27"]],

      synthesis: [["ac25", "ac26", "ac27"], ["ac25", "ac26", "ac27"]],

      business: [["ad25", "ad26", "ad27"], ["ad25", "ad26", "ad27"]],

    },
    {
      question: ["How can participants handle task variance in project planning?"],

      option: [["Ignore variances and proceed with the original plan.", "Incorporate contingency planning for potential variances.", "Assign tasks to a single resource to avoid variances."]],

      feedback: [["Ignoring task variances may lead to difficulties in meeting project timelines.",
        "Incorporating contingency planning for potential variances helps handle uncertainties in task durations.",
        "Assigning tasks to a single resource to avoid variances might not be a practical or effective strategy."]],

      score: [["z28", "z29", "z30"], ["z28", "z29", "z30"]],

      rigor: [["aa28", "aa29", "aa30"], ["aa28", "aa29", "aa30"]],

      structuring: [["ab28", "ab29", "ab30"], ["ab28", "ab29", "ab30"]],

      synthesis: [["ac28", "ac29", "ac30"], ["ac28", "ac29", "ac30"]],

      business: [["ad28", "ad29", "ad30"], ["ad28", "ad29", "ad30"]],

    },

  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getFetchData();
  }

  getFetchData() {
    //***********it will be uncommitted*******************/
    let apiname = "/projectmanagementcm/fetchprojectmanagementcm"
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
                  this.foodforthought[i].score[0][j] = data.resultList[0].projectmanagementperioddata[this.foodforthought[i].score[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                  this.foodforthought[i].rigor[0][j] = data.resultList[0].projectmanagementperioddata[this.foodforthought[i].rigor[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                  this.foodforthought[i].structuring[0][j] = data.resultList[0].projectmanagementperioddata[this.foodforthought[i].structuring[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                  this.foodforthought[i].synthesis[0][j] = data.resultList[0].projectmanagementperioddata[this.foodforthought[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                  this.foodforthought[i].business[0][j] = data.resultList[0].projectmanagementperioddata[this.foodforthought[i].business[0][j]];
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

  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/projectmanagementcm/updateprojectmanagementcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'projectmanagementcm', body, {}, apiname, 'projectmanagementcmactivestatus').subscribe(
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

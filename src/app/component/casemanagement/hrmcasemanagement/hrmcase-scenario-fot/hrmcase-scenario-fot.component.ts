import { Component, OnInit } from '@angular/core';
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
  selector: 'app-hrmcase-scenario-fot',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrmcase-scenario-fot.component.html',
  styleUrls: ['../hrmcase.scss']
})
export class HrmcaseScenarioFotComponent extends AbstractComponent {

  attempt: string = "1";
  Instructorelementdetailssub: Subscription;
  languageData: any = [];
  instructorcarddetails: any = [];


  scenarios: any = {
    thead: ["Scenario", "Round", "Case", "Options", "Result"],
    tbody: [
      {
        scenario: 1,
        round: 1,
        casecell: "d356",
        optionscell: ["d357", "d358", "d359", "d360"],
        resultcell: ["e357", "e358", "e359", "e360"]
      },
      {
        scenario: 2,
        round: 2,
        casecell: "d364",
        optionscell: ["d365", "d366", "d367", "d368"],
        resultcell: ["e365", "e366", "e367", "e368"]
      },
      {
        scenario: 3,
        round: 3,
        casecell: "d372",
        optionscell: ["d373", "d374", "d375", "d376"],
        resultcell: ["e373", "e374", "e375", "e376"]
      },
      {
        scenario: 4,
        round: 4,
        casecell: "d380",
        optionscell: ["d381", "d382", "d383", "d384"],
        resultcell: ["e381", "e382", "e383", "e384"]
      },
      {
        scenario: 5,
        round: 5,
        casecell: "d388",
        optionscell: ["d389", "d390", "d391", "d392"],
        resultcell: ["e389", "e390", "e391", "e392"]
      }
    ]
  }

  fot: any = {
    thead: ["Section", "SL No.", "Questions", "Options", "Feedback", "Score", "Rigor", "Structuring", "Synthesis", "Business Judgement"],
    tbody: [
      {
        "slno": "Q.1",
        "section": "Talent Acquisition",
        "rowspan": 3,
        "questionscell": "Which of the following hiring channels is generally considered most effective for filling top management positions?",
        "optionscell": [
                  "Internal promotions",
                  "Job portals",
                  "Social media recruitment"
                ],
        "feedbackcell": [
                  "Internal promotions often bring leadership continuity and reward loyal, proven employees.",
                  "Job portals are more effective for junior roles and might not be suitable for finding experienced executives.",
                  "Social media is better suited for entry or mid-level roles and networking, not necessarily top management."
                ],
        "scorecell": ["g402", "g403", "g404"],
        "rigorcell": ["h402", "h403", "h404"],
        "structuringcell": ["i402", "i403", "i404"],
        "synthesiscell": ["j402", "j403", "j404"],
        "businessJudgementcell": ["k402", "k403", "k404"]
      },
      {
        "slno": "Q.2",
        "section": "",
        "rowspan": null,
        "questionscell": "When deciding to fire employees, which factor should be prioritized to maintain team morale?",
        "optionscell":  [
                  "1 Performance ratings",
                  "2 Length of service",
                  "3 Department needs"
                ],
        "feedbackcell": [
                  "Ensuring fairness based on performance helps maintain trust and morale across the team.",
                  "Seniority alone should not justify retention; performance matters more in firing decisions.",
                  "While department needs are important, individual performance should be the primary criterion."
                ],
        "scorecell": ["g405", "g406", "g407"],
        "rigorcell": ["h405", "h406", "h407"],
        "structuringcell": ["i405", "i406", "i407"],
        "synthesiscell": ["j405", "j406", "j407"],
        "businessJudgementcell": ["k405", "k406", "k407"]
      },
      {
        "slno": "Q.3",
        "section": "",
        "rowspan": null,
        "questionscell": "Outsourcing is often chosen to:",
        "optionscell": [
                  "Increase control over processes",
                  "Reduce operational costs and access specialized expertise",
                  "Eliminate the need for internal training"
                ],
        "feedbackcell": [
                  "Outsourcing typically reduces direct control over operations.",
                  "Outsourcing is primarily used to save costs and tap into external expertise.",
                  "Outsourcing can reduce certain internal responsibilities but doesn't eliminate training needs."
                ],
        "scorecell": ["g408", "g409", "g410"],
        "rigorcell": ["h408", "h409", "h410"],
        "structuringcell": ["i408", "i409", "i410"],
        "synthesiscell": ["j408", "j409", "j410"],
        "businessJudgementcell": ["k408", "k409", "k410"]
      },
      {
        "slno": "Q.4",
        "section": "Talent Management",
        "rowspan": 6,
        "questionscell": "In designing a compensation strategy, which factor is most crucial for ensuring equity across the organization?",
        "optionscell":  [
                  "Market rates and internal equity",
                  "Employee tenure",
                  "Departmental budgets"
                ],
        "feedbackcell":  [
                  "Balancing market rates with internal equity ensures fairness and competitiveness.",
                  "While tenure may influence compensation, it shouldn't be the primary factor.",
                  "Budgets are important but shouldn't compromise fairness and equity in compensation."
                ],
        "scorecell": ["g411", "g412", "g413"],
        "rigorcell": ["h411", "h412", "h413"],
        "structuringcell": ["i411", "i412", "i413"],
        "synthesiscell": ["j411", "j412", "j413"],
        "businessJudgementcell": ["k411", "k412", "k413"]
      },
      {
        "slno": "Q.5",
        "section": "",
        "rowspan": null,
        "questionscell": "When implementing a bonus policy for high performers, what should be the primary focus?",
        "optionscell": [
                  "Uniform distribution to all employees",
                  "Motivation and performance alignment",
                  "Cost reduction"
                ],
        "feedbackcell": [
                  "Bonuses should reward high performers, not be distributed uniformly.",
                  "Bonuses should motivate employees and be aligned with their performance levels.",
                  "While costs should be managed, reducing them at the expense of performance incentives is counterproductive."
                ],
        "scorecell": ["g414", "g415", "g416"],
        "rigorcell": ["h414", "h415", "h416"],
        "structuringcell": ["i414", "i415", "i416"],
        "synthesiscell": ["j414", "j415", "j416"],
        "businessJudgementcell": ["k414", "k415", "k416"]
      },
      {
        "slno": "Q.6",
        "section": "",
        "rowspan": null,
        "questionscell": "Which training approach is most effective for addressing skill gaps at the junior management level?",
        "optionscell": [
                  "On the Job short training",
                  "Specific training as per needs",
                  "Peer mentoring"
                ],
        "feedbackcell": [
                  "On-the-job short training allows junior managers to apply learning directly to their tasks.",
                  "Specific training is useful but might not be as impactful for as per the cost-benefit impact.",
                  "While beneficial, peer mentoring may not provide structured learning for critical skill gaps."
                ],
        "scorecell": ["g417", "g418", "g419"],
        "rigorcell": ["h417", "h418", "h419"],
        "structuringcell": ["i417", "i418", "i419"],
        "synthesiscell": ["j417", "j418", "j419"],
        "businessJudgementcell": ["k417", "k418", "k419"]
      },
      {
        "slno": "Q.7",
        "section": "",
        "rowspan": null,
        "questionscell": "What is a critical consideration when deciding on a pay cut for employees?",
        "optionscell": [
                  "Employee satisfaction",
                  "Cost-saving goals",
                  "Long-term impact on morale and retention"
                ],
        "feedbackcell":  [
                  "While important, satisfaction alone doesn't justify or prevent a pay cut.",
                  "Cost-saving is a factor, but long-term morale and retention should be prioritized.",
                  "Pay cuts can severely impact morale and retention, which are vital for the organization's future."
                ],
        "scorecell": ["g420", "g421", "g422"],
        "rigorcell": ["h420", "h421", "h422"],
        "structuringcell": ["i420", "i421", "i422"],
        "synthesiscell": ["j420", "j421", "j422"],
        "businessJudgementcell": ["k420", "k421", "k422"]
      },
      {
        "slno": "Q.8",
        "section": "",
        "rowspan": null,
        "questionscell": "Leadership development programs should primarily focus on:",
        "optionscell": [
                  "Technical skills",
                  "Cultivating future leaders aligned with organizational goals",
                  "Compliance training"
                ],
        "feedbackcell": [
                  "Leadership development should emphasize strategic and interpersonal skills, not just technical expertise.",
                  "Leadership programs should aim to develop leaders who support long-term organizational goals.",
                  "Compliance training is necessary but not the focus of leadership development."
                ],
        "scorecell": ["g423", "g424", "g425"],
        "rigorcell": ["h423", "h424", "h425"],
        "structuringcell": ["i423", "i424", "i425"],
        "synthesiscell": ["j423", "j424", "j425"],
        "businessJudgementcell": ["k423", "k424", "k425"]
      },
      {
        "slno": "Q.9",
        "section": "",
        "rowspan": null,
        "questionscell": "When selecting diversity and inclusion policies, a key factor to consider is:",
        "optionscell":  [
                  "Cost-effectiveness only",
                  "Alignment with organizational values and employee needs",
                  "Popularity among employees"
                ],
        "feedbackcell": [
                  "While cost is important, diversity and inclusion policies should focus on impact and alignment with organizational goals.",
                  "Policies should reflect the company’s values and foster an inclusive environment.",
                  "Popularity doesn’t always equate to effectiveness in diversity and inclusion efforts."
                ],
        "scorecell": ["g426", "g427", "g428"],
        "rigorcell": ["h426", "h427", "h428"],
        "structuringcell": ["i426", "i427", "i428"],
        "synthesiscell": ["j426", "j427", "j428"],
        "businessJudgementcell": ["k426", "k427", "k428"]
      },
      {
        "slno": "Q.10",
        "section": "Organization & Budgets",
        "rowspan": 2,
        "questionscell": "In evaluating tools for organizational activities, the total cost of ownership includes:",
        "optionscell":[
                  "Initial purchase price only",
                  "Initial price, training, and maintenance costs",
                  "Training costs only"
                ],
        "feedbackcell": [
                  "Total cost of ownership includes more than just the purchase price.",
                  "Total cost of ownership covers the entire lifecycle of the tool, including maintenance and training.",
                  "Training is part of the cost but doesn't represent the full ownership cost."
                ],
        "scorecell": ["g429", "g430", "g431"],
        "rigorcell": ["h429", "h430", "h431"],
        "structuringcell": ["i429", "i430", "i431"],
        "synthesiscell": ["j429", "j430", "j431"],
        "businessJudgementcell": ["k429", "k430", "k431"]
      },
      {
        "slno": "Q.11",
        "section": "",
        "rowspan": null,
        "questionscell": "To optimize remaining budget allocations, one should:",
        "optionscell":  [
                  "Prioritize areas that have already overspent",
                  "Analyze cost-benefit patterns for effective resource allocation",
                  "Allocate equally across all departments"
                ],
        "feedbackcell": [
                  "Focusing on overspent areas may lead to inefficiencies. Prioritize based on future needs.",
                  "Learning from past spending helps improve future allocation.",
                  "Equal allocation doesn't account for the specific needs and priorities of each department."
                ],
        "scorecell": ["g432", "g433", "g434"],
        "rigorcell": ["h432", "h433", "h434"],
        "structuringcell": ["i432", "i433", "i434"],
        "synthesiscell": ["j432", "j433", "j434"],
        "businessJudgementcell": ["k432", "k433", "k434"]
      },
      {
        "slno": "Q.12",
        "section": "Conflict",
        "rowspan": 1,
        "questionscell": "When approaching conflict resolution, a key consideration should be:",
        "optionscell":[
                  "Identifying the root cause and balancing interests of all parties involved",
                  "Ignoring the conflict to avoid further issues",
                  "Prioritizing the solution preferred by management"
                ],
        "feedbackcell": [
                  "Understanding the root cause is essential for effective conflict resolution and long-term harmony.",
                  "Ignoring conflict can worsen the situation over time and lead to unresolved tension.",
                  "Prioritizing one party's interests may lead to further dissatisfaction and division."
                ],
        "scorecell": ["g435", "g436", "g437"],
        "rigorcell": ["h435", "h436", "h437"],
        "structuringcell": ["i435", "i436", "i437"],
        "synthesiscell": ["j435", "j436", "j437"],
        "businessJudgementcell": ["k435", "k436", "k437"]
      }
    ]
  }

  defaultcase: string = '';
  result: any = {};
  res: { [key: string]: any } = {};

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }
  override ngOnInit(): void {
    // this.getFetchData();
    let caseType = localStorage.getItem('selectedTab')
     if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
    this.checkloading = false;
    this.getFetchData();
  }

  getFetchData() {
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/hrmgamemaster/fetchhrmgamemaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj.hrmgameperioddata).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj.hrmgameperioddata[key]);
                });
              });
            }
          }
          this.checkloading = false;

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/hrmgamecm/fetchhrmgamecm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  Object.keys(obj.hrmgameperioddata).forEach((key: any) => {
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    this.res[key].push(obj.hrmgameperioddata[key]);
                  });
                });
              }
            }this.checkloading = false;
  
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
      
    }




   
  }
  writeHRMValue(cellname: string, index: number, value: any) {
    let apiname = '/hrmgamecm/updatehrmgamecm'
    
    let body = {
      [cellname]: value,
    }
   
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'hrmgamecm', body, {}, apiname, 'hrmgamecmactivestatus').subscribe(
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

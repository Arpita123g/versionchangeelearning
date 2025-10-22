import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-hrmcase-management',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrmcase-management.component.html',
  styleUrls: ['../hrmcase.scss']
})
export class HrmcaseManagementComponent extends AbstractComponent {
  attempt: string = "1";
  Instructorelementdetailssub: Subscription;
  languageData: any = [];
  instructorcarddetails: any = [];
  override rounds = [
    // 'Round 0',
    'Round 1',
    'Round 2',
    'Round 3',
    'Round 4',
    'Round 5',
  ];
  generalheading = [
    "Sales", "Product & Engineering", "Customer Success", "Design & Communication"
  ]
  managementheading: string[] = ["Top Management", "Senior Management", "Junior Management"];
  divisionpolicytable: any = {
    thead: ["Division Policy", "Top Management - Attractiveness", "Senior Management - Attractiveness", "Junior Management - Attractiveness", "Top Management - Engagement Level", "Senior Management - Engagement Level", "Junior Management - Engagement Level", "Policy Description", "Cost of Implementation(Resource Time + Negotiation + Lawyer fees), K INR"],
    tbody: [
      {
        ptype: "Policy 1",
        cell: ['f117', 'g117', 'h117', 'i117', 'j117', 'k117', 'l117', 'm117']

      },
      {
        ptype: "Policy 2",
        cell: ['f118', 'g118', 'h118', 'i118', 'j118', 'k118', 'l118', 'm118']

      },
      {
        ptype: "Policy 3",
        cell: ['f119', 'g119', 'h119', 'i119', 'j119', 'k119', 'l119', 'm119']

      },
      {
        ptype: "Policy 4",
        cell: ['f120', 'g120', 'h120', 'i120', 'j120', 'k120', 'l120', 'm120']

      },
      {
        ptype: "Policy 5",
        cell: ['f121', 'g121', 'h121', 'i121', 'j121', 'k121', 'l121', 'm121']

      },
      {
        ptype: "Policy 6",
        cell: ['f122', 'g122', 'h122', 'i122', 'j122', 'k122', 'l122', 'm122']

      },
      {
        ptype: "Policy 7",
        cell: ['f123', 'g123', 'h123', 'i123', 'j123', 'k123', 'l123', 'm123']

      },
      {
        ptype: "Policy 8",
        cell: ['f124', 'g124', 'h124', 'i124', 'j124', 'k124', 'l124', 'm124']

      },
      {
        ptype: "Policy 9",
        cell: ['f125', 'g125', 'h125', 'i125', 'j125', 'k125', 'l125', 'm125']

      },
      {
        ptype: "Policy 10",
        cell: ['f126', 'g126', 'h126', 'i126', 'j126', 'k126', 'l126', 'm126']

      },
    ]
  }
  diversitypolicytable: any = {
    thead: ["Diversity Inclusion Policy", "Top Management - Attractiveness", "Senior Management - Attractiveness", "Junior Management - Attractiveness", "Description of Policy", "Cost of Policy (Resource Time + Learning) pp, K INR"],
    tbody: [
      {
        ptype: "Policy 1",
        cell: ['f143', 'g143', 'h143', 'i143', 'j143']

      },
      {
        ptype: "Policy 2",
        cell: ['f144', 'g144', 'h144', 'i144', 'j144']

      },
      {
        ptype: "Policy 3",
        cell: ['f145', 'g145', 'h145', 'i145', 'j145']

      },
      {
        ptype: "Policy 4",
        cell: ['f146', 'g146', 'h146', 'i146', 'j146']

      },
      {
        ptype: "Policy 5",
        cell: ['f147', 'g147', 'h147', 'i147', 'j147']

      },
      {
        ptype: "Policy 6",
        cell: ['f148', 'g148', 'h148', 'i148', 'j148']

      },
      {
        ptype: "Policy 7",
        cell: ['f149', 'g149', 'h149', 'i149', 'j149']

      },
      {
        ptype: "Policy 8",
        cell: ['f150', 'g150', 'h150', 'i150', 'j150']

      },
      {
        ptype: "Policy 9",
        cell: ['f151', 'g151', 'h151', 'i151', 'j151']

      },
      {
        ptype: "Policy 10",
        cell: ['f152', 'g152', 'h152', 'i152', 'j152']

      }
    ]
  }
  futureleadershiptable: any = {
    thead: ["Future Leadership Program", "Cost for Senior Management, K INR", "Cost for Junior Management, K INR", "Effect - Attractiveness on Senior Management", "Effect - Attractiveness on Junior Management", "Number of Internal Promotion to Top Management", "Number of Internal Promotion to Senior Management", "Impact on Senior Management Commitment", "Impact on Junior Management Commitment"],
    tbody: [
      {
        programtype: "Program 1",
        cell: ['g129', 'h129', 'i129', 'j129', 'k129', 'l129', 'm129', 'n129']

      },
      {
        programtype: "Program 2",
        cell: ['g130', 'h130', 'i130', 'j130', 'k130', 'l130', 'm130', 'n130']
      },
      {
        programtype: "Program 3",
        cell: ['g131', 'h131', 'i131', 'j131', 'k131', 'l131', 'm131', 'n131']
      },
      {
        programtype: "Program 4",
        cell: ['g132', 'h132', 'i132', 'j132', 'k132', 'l132', 'm132', 'n132']
      },
      {
        programtype: "Program 5",
        cell: ['g133', 'h133', 'i133', 'j133', 'k133', 'l133', 'm133', 'n133']
      },
    ]
  }
  bonuspolicy: any = {
    thead: ["Bonus Policy", "Cost of Policy as % of Salary Top Performers", "Hike on Salary of # on/above Star"],
    tbody: [
      {
        ptype: "Policy 1",
        // cell: ['f144', 'g144']
        cell: ['f136', 'g136']

      },
      {
        ptype: "Policy 2",
        cell: ['f137', 'g137']
      },
      {
        ptype: "Policy 3",
        cell: ['f138', 'g138']
      },
      {
        ptype: "Policy 4",
        cell: ['f139', 'g139']
      },
      {
        ptype: "Policy 5",
        cell: ['f140', 'g140']
      },
    ]
  }
  management: any = [
    {
      title: "Top Management",
      thead: ["Type", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
      tbody: [
        { type: "Campus Hiring", cell: ['e155', 'f155', 'g155', 'h155'] },
        { type: "Employee Referral", cell: ['e156', 'f156', 'g156', 'h156'] },
        { type: "Direct Hiring", cell: ['e157', 'f157', 'g157', 'h157'] },
        { type: "Vendor General Hiring", cell: ['e158', 'f158', 'g158', 'h158'] },
        { type: "Executive Hiring", cell: ['e159', 'f159', 'g159', 'h159'] },
      ]
    },
    {
      title: "Senior Management",
      thead: ["Type", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
      tbody: [
        { type: "Campus Hiring", cell: ['e162', 'f162', 'g162', 'h162'] },
        { type: "Employee Referral", cell: ['e163', 'f163', 'g163', 'h163'] },
        { type: "Direct Hiring", cell: ['e164', 'f164', 'g164', 'h164'] },
        { type: "Vendor General Hiring", cell: ['e165', 'f165', 'g165', 'h165'] },
        { type: "Executive Hiring", cell: ['e166', 'f166', 'g166', 'h166'] },
      ]
    },
    {
      title: "Junior Management",
      thead: ["Type", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
      tbody: [
        { type: "Campus Hiring", cell: ['e169', 'f169', 'g169', 'h169'] },
        { type: "Employee Referral", cell: ['e170', 'f170', 'g170', 'h170'] },
        { type: "Direct Hiring", cell: ['e171', 'f171', 'g171', 'h171'] },
        { type: "Vendor General Hiring", cell: ['e172', 'f172', 'g172', 'h172'] },
        { type: "Executive Hiring", cell: ['e173', 'f173', 'g173', 'h173'] },
      ]
    },
    {
      title: "Compensation Hike",
      thead: ["Type", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
      tbody: [
        { type: "5 Star Employee", cell: ['e176', 'f176', 'g176', 'h176'] },
        { type: "4 Star Employee", cell: ['e177', 'f177', 'g177', 'h177'] },
        { type: "3 Star Employee", cell: ['e178', 'f178', 'g178', 'h178'] },
        { type: "2 Star Employee", cell: ['e179', 'f179', 'g179', 'h179'] },
        { type: "1 Star Employee", cell: ['e180', 'f180', 'g180', 'h180'] },
      ]
    },
  ]
  paycut: any = {
    title: "Paycut",
    thead: ["Type", "Sales", "Product & Engineering", "Customer Success", "Design & Communication"],
    tbody: [
      { type: "Top Management", cell: ['e207', 'f207', 'g207', 'h207'] },
      { type: "Senior Management", cell: ['e208', 'f208', 'g208', 'h208'] },
      { type: "Junior Management", cell: ['e209', 'f209', 'g209', 'h209'] },
      { type: "Attrition", cell: ['e212', 'f212', 'g212', 'h212'] },
    ],
    decision: [
      {
        type: "Decision 1",
        cell: 'e215'
      },
      {
        type: "Decision 2",
        cell: 'e216'
      }
    ]
  }
  roundwisedata: any = [
    {
      maintitle: "Candidate Pool",
      title: "Candidate Pool for Junior Management per year, units",
      cell: ['e184', 'f184', 'g184', 'h184', 'e185', 'f185', 'g185', 'h185', 'e186', 'f186', 'g186', 'h186', 'e187', 'f187', 'g187', 'h187', 'e188', 'f188', 'g188', 'h188']
    },
    {
      maintitle: "",
      title: "Candidate Pool for Senior Management per year, units",
      cell: ['e192', 'f192', 'g192', 'h192', 'e193', 'f193', 'g193', 'h193', 'e194', 'f194', 'g194', 'h194', 'e195', 'f195', 'g195', 'h195', 'e196', 'f196', 'g196', 'h196']
    },
    {
      maintitle: "",
      title: "Candidate Pool for Top Management per year, units",
      cell: ['e200', 'f200', 'g200', 'h200', 'e201', 'f201', 'g201', 'h201', 'e202', 'f202', 'g202', 'h202', 'e203', 'f203', 'g203', 'h203', 'e204', 'f204', 'g204', 'h204']
    },
    {
      maintitle: "Voluntary Attrition Rate",
      title: "Attrition Rate for Division",
      cell: ['e220', 'f220', 'g220', 'h220', 'e221', 'f221', 'g221', 'h221', 'e222', 'f222', 'g222', 'h222', 'e223', 'f223', 'g223', 'h223', 'e224', 'f224', 'g224', 'h224']
    },
    {
      maintitle: "New Recruit Hike",
      title: "New Recruit Hike on Current Average Salary of Employee",
      cell: ['e228', 'f228', 'g228', 'h228', 'e229', 'f229', 'g229', 'h229', 'e230', 'f230', 'g230', 'h230', 'e231', 'f231', 'g231', 'h231', 'e232', 'f232', 'g232', 'h232']
    },
  ]
  vendormanagementcost: any = [
    {
      maintitle: "RPA & Vendor Management Cost",
      title: "Cost as % of salary",
      cell: ['e235', 'f235', 'g235', 'e236', 'f236', 'g236', 'e236', 'f236', 'g236', 'e237', 'f237', 'g237', 'e238', 'f238', 'g238', 'e239', 'f239', 'g239', 'e240', 'f240', 'g240']
    }
  ]
  trainingoftheEmployee: any = {
    thead: ["Training of the Employee", "Impact on Top Management Commitment", "Impact on Senior Management Commitment", "Impact on Junior Management for Commitment", "Cost of Training pp, K INR", "Mandays for Training", "Multiplication factor"],
    tbody: [
      {
        trainingtype: "Training 1", cell: ['f243', 'g243', 'h243', 'i243', 'j243', 'k243']
      },
      {
        trainingtype: "Training 2", cell: ['f244', 'g244', 'h244', 'i244', 'j244', 'k244']
      },
      {
        trainingtype: "Training 3", cell: ['f245', 'g245', 'h245', 'i245', 'j245', 'k245']
      },
      {
        trainingtype: "Training 4", cell: ['f246', 'g246', 'h246', 'i246', 'j246', 'k246']
      },
      {
        trainingtype: "Training 5", cell: ['f247', 'g247', 'h247', 'i247', 'j247', 'k247']
      },
    ]
  }
  townhallProgram = {
    thead: ["Townhall Program", "Impact on Top Management Awareness", "Impact on Senior Management Awareness", "Impact on Junior Management Awareness", "Cost of Programme PP, K INR", "Description"],
    tbody: [
      {
        ptype: "Program 1", cell: ['f250', 'g250', 'h250', 'i250', 'j250']
      },
      {
        ptype: "Program 2", cell: ['f251', 'g251', 'h251', 'i251', 'j251']
      },
      {
        ptype: "Program 3", cell: ['f252', 'g252', 'h252', 'i252', 'j252']
      },
      {
        ptype: "Program 4", cell: ['f253', 'g253', 'h253', 'i253', 'j253']
      },
      {
        ptype: "Program 5", cell: ['f254', 'g254', 'h254', 'i254', 'j254']
      },
      {
        ptype: "Program 6", cell: ['f255', 'g255', 'h255', 'i255', 'j255']
      },
      {
        ptype: "Program 7", cell: ['f256', 'g256', 'h256', 'i256', 'j256']
      },
      {
        ptype: "Program 8", cell: ['f257', 'g257', 'h257', 'i257', 'j257']
      },
      {
        ptype: "Program 9", cell: ['f258', 'g258', 'h258', 'i258', 'j258']
      },
      {
        ptype: "Program 10", cell: ['f259', 'g259', 'h259', 'i259', 'j259']
      },
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
  getJValue(i: number): number {
    // Divide the index by 4 and return the quotient (i.e., the round number)
    return Math.floor(i / 4);
  }
  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
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



  formatToFixed(value: any): string {
    if (isNaN(value) || value === null || value === undefined) {
      return '';
    }
  
    const num = parseFloat(value);
    return num % 1 === 0 ? num.toFixed(0) : num.toFixed(2);
  }

  getFetchData() {
    //***********it will be uncommitted*******************/

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

                  if ([ 'f136', 'f137', 'f138', 'f139',
                    'f140', 
                    'e176', 'f176', 'g176', 'h176', 
                    'e177', 'f177', 'g177', 'h177',
                    'e178', 'f178', 'g178', 'h178',
                    'e179', 'f179', 'g179', 'h179',
                    'e180', 'f180', 'g180', 'h180', 'e207', 'f207', 'g207', 'h207',
                    'e208', 'f208', 'g208', 'h208', 'e209', 'f209', 'g209', 'h209',
                    'e219', 'f219', 'g219', 'h219',
                    'e220', 'f220', 'g220', 'h220', 'e221', 'f221', 'g221', 'h221',
                    'e222', 'f222', 'g222', 'h222', 'e223', 'f223', 'g223', 'h223',
                    'e224', 'f224', 'g224', 'h224','e227', 'f227', 'g227', 'h227', 
                    'e228', 'f228', 'g228', 'h228', 'e229', 'f229', 'g229', 'h229',
                    'e230', 'f230', 'g230', 'h230', 'e231', 'f231', 'g231', 'h231',
                    'e232', 'f232', 'g232', 'h232','e235', 'f235', 'g235', 'e236', 
                    'f236', 'g236', 'e236', 'f236', 'g236', 'e237', 'f237', 'g237',
                    'e238', 'f238', 'g238', 'e239', 'f239', 'g239', 'e240', 'f240',
                    'g240'
                  ].includes(key)) {
                    this.res[key].push(obj.hrmgameperioddata[key] * 100);
                  } else {
                    this.res[key].push(obj.hrmgameperioddata[key]);
                  }
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
  
                    if ([ 'f136', 'f137', 'f138', 'f139',
                      'f140', 
                      'e176', 'f176', 'g176', 'h176', 
                      'e177', 'f177', 'g177', 'h177',
                      'e178', 'f178', 'g178', 'h178',
                      'e179', 'f179', 'g179', 'h179',
                      'e180', 'f180', 'g180', 'h180', 'e207', 'f207', 'g207', 'h207',
                      'e208', 'f208', 'g208', 'h208', 'e209', 'f209', 'g209', 'h209',
                      'e219', 'f219', 'g219', 'h219',
                      'e220', 'f220', 'g220', 'h220', 'e221', 'f221', 'g221', 'h221',
                      'e222', 'f222', 'g222', 'h222', 'e223', 'f223', 'g223', 'h223',
                      'e224', 'f224', 'g224', 'h224','e227', 'f227', 'g227', 'h227', 
                      'e228', 'f228', 'g228', 'h228', 'e229', 'f229', 'g229', 'h229',
                      'e230', 'f230', 'g230', 'h230', 'e231', 'f231', 'g231', 'h231',
                      'e232', 'f232', 'g232', 'h232','e235', 'f235', 'g235', 'e236', 
                      'f236', 'g236', 'e236', 'f236', 'g236', 'e237', 'f237', 'g237',
                      'e238', 'f238', 'g238', 'e239', 'f239', 'g239', 'e240', 'f240',
                      'g240'
                    ].includes(key)) {
                      this.res[key].push(obj.hrmgameperioddata[key] * 100);
                    } else {
                      this.res[key].push(obj.hrmgameperioddata[key]);
                    }
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
    if ([
       'f136', 'f137', 'f138', 'f139',
      'f140', 
      'e176', 'f176', 'g176', 'h176', 
      'e177', 'f177', 'g177', 'h177',
      'e178', 'f178', 'g178', 'h178',
      'e179', 'f179', 'g179', 'h179',
      'e180', 'f180', 'g180', 'h180', 'e207', 'f207', 'g207', 'h207',
      'e208', 'f208', 'g208', 'h208', 'e209', 'f209', 'g209', 'h209',
       'e219', 'f219', 'g219', 'h219',
      'e220', 'f220', 'g220', 'h220', 'e221', 'f221', 'g221', 'h221',
      'e222', 'f222', 'g222', 'h222', 'e223', 'f223', 'g223', 'h223',
      'e224', 'f224', 'g224', 'h224','e227', 'f227', 'g227', 'h227', 
      'e228', 'f228', 'g228', 'h228', 'e229', 'f229', 'g229', 'h229',
      'e230', 'f230', 'g230', 'h230', 'e231', 'f231', 'g231', 'h231',
      'e232', 'f232', 'g232', 'h232','e235', 'f235', 'g235', 'e236', 
      'f236', 'g236', 'e236', 'f236', 'g236', 'e237', 'f237', 'g237',
      'e238', 'f238', 'g238', 'e239', 'f239', 'g239', 'e240', 'f240',
      'g240'

    ].includes(cellname)) {
      value = Number(value) / 100;
    }
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

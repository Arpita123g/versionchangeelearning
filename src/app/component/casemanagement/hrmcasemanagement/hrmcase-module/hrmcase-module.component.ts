import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { title } from 'process';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-hrmcase-module',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrmcase-module.component.html',
  styleUrls: ['../hrmcase.scss']
})
export class HrmcaseModuleComponent extends AbstractComponent {

  defaultvalue = Array.from({ length: 6 }, (_, i) => false);
  optionalidata:any = {};
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

  generalInfoData = [
    {
      title: "Company Industry",
      cell: "e3"
    },
    {
      title: "Market",
      cell: "e5"
    },
    {
      title: "Number of Clients",
      cell: "e10"
    },
    {
      title: "Number of Employees",
      cell: "e11"
    }
  ];

  moduleData = [
    {
      title: "Food For Thought",
      statusname:"foodforthoughtstatus",
      values: []
    },
    {
      title: "Product & Engineering",
      statusname:"productengstatus",
      values: []
    },
    {
      title: "Customer Success",
      statusname:"customersuccessstatus",
      values: this.optionalidata.customersuccessstatus
    },
    {
      title: "Design & Communication",
      statusname:"designcommunicationstatus",
      values: []
    },
  ];

  textData = [
    {
      title: "Company",
      tableData: [
        {
          title: "Budget Provided by the Company, K INR",
          cell: ["c15", "c16", "c17", "c18", "c19"]
        },
        {
          title: "Market Volume of Clients, units",
          cell: ["c23", "c24", "c25", "c26", "c27"]

        },
        {
          title: "Market Volume for service per year, units",
          cell: ["c31", "c32", "c33", "c34", "c35"]
        },
        {
          title: "Total workhour required per client per year, hours",
          cell: ["c39", "c40", "c41", "c42", "c43"]
        },
        {
          title: "Number of hours an employee works per year, hours",
          cell: ["c47", "c48", "c49", "c50", "c51"]
        },
        {
          title: "Budget provided to the division per year, %",
          cell: ["c55", "c56", "c57", "c58", "c59"]
        },
        {
          title: "Left budget which can be carryforward  as penalty",
          cell: ["c63", "c64", "c65", "c66", "c67"]
        }
      ],
      specialTable: null
    },
    {
      title: "Acquisition",
      tableData: [
        {
          title: "Organisational Heirarchy Junior to Senior Management ratio",
          cell: ["c78", "c79", "c80", "c81", "c82"]
        },
        {
          title: "Organisational Heirarchy Senior to Top Management ratio",
          cell: ["c86", "c87", "c88", "c89", "c90"]
        },
        {
          title: "Firing Cost as % of salary for Junior Management",
          cell: ["c94", "c95", "c96", "c97", "c98"]
        },
        {
          title: "Firing Cost as % of salary for Senior Management",
          cell: ["c102", "c103", "c104", "c105", "c106"]
        },
        {
          title: "Firing Cost as % of salary for Top Management",
          cell: ["c110", "c111", "c112", "c113", "c114"]
        },
      ],
      specialTable: [
        {
          title: ["Type of Channel mix"],
          cell: [["c70", "c71", "c72", "c73", "c74"]]
        },
        {
          title: ["Channels"],
          cell: [["e70", "e71", "e72", "e73", "e74"]]
        }
      ],
    },
    {
      title: "Management",
      tableData: [
        {
          title: "Candidate Pool for Junior Management per year, units",
          cell: ["c184", "c185", "c186", "c187", "c188"]
        },
        {
          title: "Candidate Pool for Senior Management per year, units",
          cell: ["c192", "c193", "c194", "c195", "c196"]
        },
        {
          title: "Candidate Pool for Top Management per year, units",
          cell: ["c200", "c201", "c202", "c203", "c204"]
        },
        {
          title: "Attrition Rate for Division",
          cell: ["c220", "c221", "c222", "c223", "c224"]
        },
        {
          title: "New Recruit Hike on Current Average Salary of Employee",
          cell: ["c228", "c229", "c230", "c231", "c232"]
        },
        {
          title: "Cost as % of salary",
          cell: ["c236", "c237", "c238", "c239", "c240"]
        },
      ],
      specialTable: [
        {
          title: ["Division Policy", "Policy"],
          cell: [
            ["c117", "e117"],
            ["c118", "e118"],
            ["c119", "e119"],
            ["c120", "e120"],
            ["c121", "e121"],
            ["c122", "e122"],
            ["c123", "e123"],
            ["c124", "e124"],
            ["c125", "e125"],
            ["c126", "e126"],
          ],
        },
        {
          title: ["Future Leadership Program", "Senior Management", "Junior Management"],
          cell: [
            ["c129", "e129", "f129"],
            ["c130", "e130", "f130"],
            ["c131", "e131", "f131"],
            ["c132", "e132", "f132"],
            ["c133", "e133", "f133"]
          ],
        },
        {
          title: ["Bonus Policy", "Policy"],
          cell: [
            ["c136", "e136"],
            ["c137", "e137"],
            ["c138", "e138"],
            ["c139", "e139"],
            ["c140", "e140"],
          ],
        },
        {
          title: ["Diversity Inclusion Policy", "Policy"],
          cell: [
            ["c143", "e143"],
            ["c144", "e144"],
            ["c145", "e145"],
            ["c146", "e146"],
            ["c147", "e147"],
            ["c148", "e148"],
            ["c149", "e149"],
            ["c150", "e150"],
            ["c151", "e151"],
            ["c152", "e152"],
          ],
        },
        {
          title: ["Compensation Hike"],
          cell: [["c176", "c177", "c178", "c179", "c180"]],
        },
        {
          title: ["Paycut"],
          cell: [["c207", "c208", "c209", "c212"]],
        },
        {
          title: ["Training of the employee", "Training Name"],
          cell: [
            ["c243", "e243"],
            ["c244", "e244"],
            ["c245", "e245"],
            ["c246", "e246"],
            ["c247", "e247"],
          ]
        },
        {
          title: ["Townhall Program", "Program Name"],
          cell: [
            ["c250", "e250"],
            ["c251", "e251"],
            ["c252", "e252"],
            ["c253", "e253"],
            ["c254", "e254"],
            ["c255", "e255"],
            ["c256", "e256"],
            ["c257", "e257"],
            ["c258", "e258"],
            ["c259", "e259"],
          ]
        }
      ]
    },
    {
      title: "Tools",
      tableData: [
        {
          title: "Cost of Perfromance & Goal Tool",
          cell: ["c272", "c273", "c274", "c275", "c276"]
        },
        {
          title: "Cost of Recruitment Tool",
          cell: ["c280", "c281", "c282", "c283", "c284"]
        },
        {
          title: "Cost of Workforce Analytics",
          cell: ["c288", "c289", "c290", "c291", "c292"]
        },
        {
          title: "Cost of Process Content Guide",
          cell: [ "c296", "c297", "c298", "c299", "c300"]
        }
      ],
      specialTable: [
        {
          title: ["Impact of Tools Across Division"],
          cell: [["c262", "c263", "c264", "c265"]]
        },
        {
          title: ["Maintainance cost of Tool, K INR"],
          cell: [["c267"]]
        },
        {
          title: ["Cummulative Effect"],
          cell: [["c303", "c304", "c305"]]
        },
        {
          title: ["Workload Distribution"],
          cell: [["c308", "c309", "c310", "c311", "c312", "c313", "c314", "c315"]]
        },
        {
          title: ["Overtime Cost, K INR"],
          cell: [["c318", "c319", "c320"]]
        },
        {
          title: ["Paycut Decision"],
          cell: [["c323", "c324"]]
        },
      ]
    }
  ];

  generateDefaultValue(str: string) {
    return Array.from({ length: 6 }, (_, i) => str);
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
                 
                    this.res[key].push(obj.hrmgameperioddata[key]);
               
                });
                Object.keys(obj.hrmGameCMActiveStatus).forEach((key: any) => {
                  if (!this.optionalidata[key]) {
                    this.optionalidata[key] = [];
                  }
                 
                    this.optionalidata[key].push(obj.hrmGameCMActiveStatus[key]);
               
                });
              });
              this.moduleData[0].values = this.optionalidata.foodforthoughtstatus;
              this.moduleData[1].values = this.optionalidata.productengstatus;
              this.moduleData[2].values = this.optionalidata.customersuccessstatus;
              this.moduleData[3].values = this.optionalidata.designcommunicationstatus;
            }
            
          }this.checkloading = false;

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
                  Object.keys(obj.hrmGameCMActiveStatus).forEach((key: any) => {
                    if (!this.optionalidata[key]) {
                      this.optionalidata[key] = [];
                    }
                   
                      this.optionalidata[key].push(obj.hrmGameCMActiveStatus[key]);
                 
                  });
                });
                this.moduleData[0].values = this.optionalidata.foodforthoughtstatus;
                this.moduleData[1].values = this.optionalidata.productengstatus;
                this.moduleData[2].values = this.optionalidata.customersuccessstatus;
                this.moduleData[3].values = this.optionalidata.designcommunicationstatus;
              }
              
            }this.checkloading = false;
  
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
      
      
    }


   
  }

  writeModuleValue(index: number, updatedsearchtypevalue: string, modulestatusvalue: string, cellname: string, value1: any, value2: any,
    optionalarray:number
  ) {
    let apiname = '/hrmgamecm/updatehrmgamecm'

    let body1 = {}
    let body2 = {}
    if (modulestatusvalue == "yes") {
      if (value2.target.checked == false) {
        value2 = 'inactive'
      } else {
        value2 = 'active'
      }
      body1 = {}
      body2 = {
        [cellname]: value2,
      }
    }

    this._api.updatecasemanagementdata(String(index + 1), updatedsearchtypevalue, modulestatusvalue, 'hrmgamecm', body1, body2, apiname, 'hrmgamecmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (modulestatusvalue == 'yes') {
              this.optionalidata[optionalarray].values[index]=value2
            }


          } else {
            if (modulestatusvalue == 'yes') {
              this.optionalidata[optionalarray].values[index] = this.optionalidata[optionalarray].values[index];
            }

          }

        }, error: (error: any) => {
          if (modulestatusvalue == 'yes') {
            this.optionalidata[optionalarray].values[index] = this.optionalidata[optionalarray].values[index];
          }
          this.checkloading = false;
          }
      })



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
            this.res[cellname][index] = value;
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

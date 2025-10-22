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
  selector: 'app-hrmcase-tools',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrmcase-tools.component.html',
  styleUrls: ['../hrmcase.scss']
})
export class HrmcaseToolsComponent extends AbstractComponent {
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
  generalheading = ["Base Level", "Intermediate Level", "Expert Level"]
  defaultvalue = Array.from({ length: 18 }, (_, i) => 0);
  maintainancecosttool: string = "e267";
  impactofTools = {
    thead: ["Impact of Tools Across Division", "Base Level", "Intermediate Level", "Expert Level"],
    tbody: [
      {
        type: "Performace & Goals", cell: ['e262', 'f262', 'g262']
      },
      {
        type: "Recruitment", cell: ['e263', 'f263', 'g263']
      },
      {
        type: "Workforce Analytics", cell: ['e264', 'f264', 'g264']
      },
      {
        type: "Process Content Guide", cell: ['e265', 'f265', 'g265']
      },
    ]
  }
  roundwisedata = [
    {
      title: "Cost of Perfromance & Goal Tool",
      cell: ['e272', 'f272', 'g272', 'e273', 'f273', 'g273', 'e274', 'f274', 'g274', 'e275', 'f275', 'g275', 'e276', 'f276', 'g276']
    },
    {
      title: "Cost of Recruitment Tool",
      cell: ['e280', 'f280', 'g280', 'e281', 'f281', 'g281', 'e282', 'f282', 'g282', 'e283', 'f283', 'g283', 'e284', 'f284', 'g284']
    },
    {
      title: "Cost of Workforce Analytics",
      cell: ['e288', 'f288', 'g288', 'e289', 'f289', 'g289', 'e290', 'f290', 'g290', 'e291', 'f291', 'g291', 'e292', 'f292', 'g292']
    },
    {
      title: "Cost of Process Content Guide",
      cell: ['e296', 'f296', 'g296', 'e297', 'f297', 'g297', 'e298', 'f298', 'g298', 'e299', 'f299', 'g299', 'e300', 'f300', 'g300']
    }
  ]
  cummulativeEffect = {
    title: "Cummulative Effect",
    thead: ["Type", "Top Management", "Senior Management", "Junior Management"],
    tbody: [
      {
        type: "Awareness",
        cell: ['e303', 'f303', 'g303']
      },
      {
        type: "Commitment",
        cell: ['e304', 'f304', 'g304']
      },
      {
        type: "Performance",
        cell: ['e305', 'f305', 'g305']
      }
    ]
  }
  workloadDistribution = {
    title: "Workload Distribution",
    thead: ["Type", "Top Management", "Senior Management",],
    tbody: [
      { type: "Sales - Min", cell: ['e308', 'f308'] },
      { type: "Sales - Max", cell: ['e309', 'f309'] },
      { type: "Product & Engineering - Min", cell: ['e310', 'f310'] },
      { type: "Product & Engineering - Max", cell: ['e311', 'f311'] },
      { type: "Customer Success - Min", cell: ['e312', 'f312'] },
      { type: "Customer Success - Max", cell: ['e313', 'f313'] },
      { type: "Design & Communication - Min", cell: ['e314', 'f314'] },
      { type: "Design & Communication - Max", cell: ['e315', 'f315'] },
    ]
  }
  overtimecost = {
    title: "Overtime Cost, K INR",
    thead: ["Type", "Cost/hour"],
    tbody: [
      { type: "Top Management", cell: "e318" },
      { type: "Senior Management", cell: "e319" },
      { type: "Junior Management", cell: "e320" },
    ]
  }
  paycutDecision = {
    thead: ["Type", "Effect"],
    tbody: [
      { type: "Commitment", cell: "e323" },
      { type: "Performance", cell: "e324" },
    ]
  }
  positioninrangeDefaultvalue = Array.from({ length: 20 }, (_, i) => 0);
  positioninrange = {
    thead: ["0 to 25%", "25 to 50%", "50 to 75%", "75 to 100%"],
    tbody: [
      {
        title: "5 Star",
        // cell: ['D339', 'E339', 'F339', 'G339', 'D357', 'E357', 'F357', 'G357', 'D357', 'E357', 'F357', 'G357', 'D348', 'E348', 'F348', 'G348', 'D339', 'E339', 'F339', 'G339']
        cell: ['d329', 'e329', 'f329', 'g329', 'd347', 'e347', 'f347', 'g347', 'd347', 'e347', 'f347', 'g347', 'd338', 'e338', 'f338', 'g338', 'd329', 'e329', 'f329', 'g329']

      },
      {
        title: "4 Star",
        // cell: ['d340', 'e340', 'f340', 'g340', 'd358', 'e358', 'f358', 'g358', 'd358', 'e358', 'f358', 'g358', 'd349', 'e349', 'f349', 'g349', 'd340', 'e340', 'f340', 'g340']
        cell: ['d330', 'e330', 'f330', 'g330', 'd348', 'e348', 'f348', 'g348', 'd348', 'e348', 'f348', 'g348', 'd339', 'e339', 'f339', 'g339', 'd330', 'e330', 'f330', 'g330']

      },
      {
        title: "3 Star",
        // cell: ['d341', 'e341', 'f341', 'g341', 'd359', 'e359', 'f359', 'g359', 'd359', 'e359', 'f359', 'g359', 'd350', 'e350', 'f350', 'g350', 'd341', 'e341', 'f341', 'g341']
        cell: ['d331', 'e331', 'f331', 'g331', 'd349', 'e349', 'f349', 'g349', 'd349', 'e349', 'f349', 'g349', 'd340', 'e340', 'f340', 'g340', 'd331', 'e331', 'f331', 'g331']

      },
      {
        title: "2 Star",
        // cell: ['d342', 'e342', 'f342', 'g342', 'd360', 'e360', 'f360', 'g360', 'd360', 'e360', 'f360', 'g360', 'd351', 'e351', 'f351', 'g351', 'd342', 'e342', 'f342', 'g342']
        cell: ['d332', 'e332', 'f332', 'g332', 'd350', 'e350', 'f350', 'g350', 'd350', 'e350', 'f350', 'g350', 'd341', 'e341', 'f341', 'g341', 'd332', 'e332', 'f332', 'g332']

      },
      {
        title: "1 Star",
        // cell: ['d343', 'e343', 'f343', 'g343', 'd361', 'e361', 'f361', 'g361', 'd361', 'e361', 'f361', 'g361', 'd352', 'e352', 'f352', 'g352', 'd343', 'e343', 'f343', 'g343']
        cell: ['d333', 'e333', 'f333', 'g333', 'd351', 'e351', 'f351', 'g351', 'd351', 'e351', 'f351', 'g351', 'd342', 'e342', 'f342', 'g342', 'd333', 'e333', 'f333', 'g333']

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
    return Math.floor(i / 3);
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
                  if (['e267', 'd329', 'e329', 'f329', 'g329', 'd347', 'e347', 'f347',
                    'g347', 'd347', 'e347', 'f347', 'g347', 'd338', 'e338', 'f338',
                    'g338', 'd329', 'e329', 'f329', 'g329', 'd330', 'e330', 'f330',
                    'g330', 'd348', 'e348', 'f348', 'g348', 'd348', 'e348', 'f348',
                    'g348', 'd339', 'e339', 'f339', 'g339', 'd330', 'e330', 'f330',
                    'g330', 'd331', 'e331', 'f331', 'g331', 'd349', 'e349', 'f349',
                    'g349', 'd349', 'e349', 'f349', 'g349', 'd340', 'e340', 'f340',
                    'g340', 'd331', 'e331', 'f331', 'g331', 'd332', 'e332', 'f332',
                    'g332', 'd350', 'e350', 'f350', 'g350', 'd350', 'e350', 'f350',
                    'g350', 'd341', 'e341', 'f341', 'g341', 'd332', 'e332', 'f332',
                    'g332', 'd333', 'e333', 'f333', 'g333', 'd351', 'e351', 'f351',
                    'g351', 'd351', 'e351', 'f351', 'g351', 'd342', 'e342', 'f342',
                    'g342', 'd333', 'e333', 'f333', 'g333'].includes(key)) {
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
                    if (['e267', 'd329', 'e329', 'f329', 'g329', 'd347', 'e347', 'f347',
                      'g347', 'd347', 'e347', 'f347', 'g347', 'd338', 'e338', 'f338',
                      'g338', 'd329', 'e329', 'f329', 'g329', 'd330', 'e330', 'f330',
                      'g330', 'd348', 'e348', 'f348', 'g348', 'd348', 'e348', 'f348',
                      'g348', 'd339', 'e339', 'f339', 'g339', 'd330', 'e330', 'f330',
                      'g330', 'd331', 'e331', 'f331', 'g331', 'd349', 'e349', 'f349',
                      'g349', 'd349', 'e349', 'f349', 'g349', 'd340', 'e340', 'f340',
                      'g340', 'd331', 'e331', 'f331', 'g331', 'd332', 'e332', 'f332',
                      'g332', 'd350', 'e350', 'f350', 'g350', 'd350', 'e350', 'f350',
                      'g350', 'd341', 'e341', 'f341', 'g341', 'd332', 'e332', 'f332',
                      'g332', 'd333', 'e333', 'f333', 'g333', 'd351', 'e351', 'f351',
                      'g351', 'd351', 'e351', 'f351', 'g351', 'd342', 'e342', 'f342',
                      'g342', 'd333', 'e333', 'f333', 'g333'].includes(key)) {
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
      'e267', 'd329', 'e329', 'f329', 'g329', 'd347', 'e347', 'f347',
      'g347', 'd347', 'e347', 'f347', 'g347', 'd338', 'e338', 'f338',
      'g338', 'd329', 'e329', 'f329', 'g329', 'd330', 'e330', 'f330',
      'g330', 'd348', 'e348', 'f348', 'g348', 'd348', 'e348', 'f348',
      'g348', 'd339', 'e339', 'f339', 'g339', 'd330', 'e330', 'f330',
      'g330', 'd331', 'e331', 'f331', 'g331', 'd349', 'e349', 'f349',
      'g349', 'd349', 'e349', 'f349', 'g349', 'd340', 'e340', 'f340',
      'g340', 'd331', 'e331', 'f331', 'g331', 'd332', 'e332', 'f332',
      'g332', 'd350', 'e350', 'f350', 'g350', 'd350', 'e350', 'f350',
      'g350', 'd341', 'e341', 'f341', 'g341', 'd332', 'e332', 'f332',
      'g332', 'd333', 'e333', 'f333', 'g333', 'd351', 'e351', 'f351',
      'g351', 'd351', 'e351', 'f351', 'g351', 'd342', 'e342', 'f342',
      'g342', 'd333', 'e333', 'f333', 'g333'

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
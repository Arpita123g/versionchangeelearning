import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-hrmcase-company',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrmcase-company.component.html',
  styleUrls: ['../hrmcase.scss']
})
export class HrmcaseCompanyComponent extends AbstractComponent {
  defaultcase: string = "";
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


  res: { [key: string]: any } = {};
  result: any = {};

  generalheading = [
    "Sales", "Product & Engineering", "Customer Success", "Design & Communication"
  ]

  companydata = [
    {
      title: "Market Volume for service per year, units",
      cell: ['e31', 'f31', 'g31', 'h31', 'e32', 'f32', 'g32', 'h32', 'e33', 'f33', 'g33', 'h33', 'e34', 'f34', 'g34', 'h34', 'e35', 'f35', 'g35', 'h35']

    },
    {
      title: "Total workhour required per client per year, hours",
      cell: ['e39', 'f39', 'g39', 'h39', 'e40', 'f40', 'g40', 'h40', 'e41', 'f41', 'g41', 'h41', 'e42', 'f42', 'g42', 'h42', 'e43', 'f43', 'g43', 'h43']

    },
    {
      title: "Number of hours an employee works per year, hours",
      cell: ['e47', 'f47', 'g47', 'h47', 'e48', 'f48', 'g48', 'h48', 'e49', 'f49', 'g49', 'h49', 'e50', 'f50', 'g50', 'h50', 'e51', 'f51', 'g51', 'h51']

    },
    {
      title: "Budget provided to the division per year, %",
      cell: ['e55', 'f55', 'g55', 'h55', 'e56', 'f56', 'g56', 'h56', 'e57', 'f57', 'g57', 'h57', 'e58', 'f58', 'g58', 'h58', 'e59', 'f59', 'g59', 'h59']

    },
    {
      title: "Left budget which can be carryforward as penalty",
      cell: ['e63', 'f63', 'g63', 'h63', 'e64', 'f64', 'g64', 'h64', 'e65', 'f65', 'g65', 'h65', 'e66', 'f66', 'g66', 'h66', 'e67', 'f67', 'g67', 'h67']

    }
  ]

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

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
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

                  if (["e55", "f55", "g55", "h55",
                    "e56", "f56", "g56", "h56", "e57", "f57", "g57", "h57",
                    "e58", "f58", "g58", "h58", "e59", "f59", "g59", "h59",
                    "e63", "f63", "g63", "h63",
                    "e64", "f64", "g64", "h64", "e65", "f65", "g65", "h65",
                    "e66", "f66", "g66", "h66", "e67", "f67", "g67", "h67"].includes(key)) {
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
  
                    if (["e55", "f55", "g55", "h55",
                      "e56", "f56", "g56", "h56", "e57", "f57", "g57", "h57",
                      "e58", "f58", "g58", "h58", "e59", "f59", "g59", "h59",
                      "e63", "f63", "g63", "h63",
                      "e64", "f64", "g64", "h64", "e65", "f65", "g65", "h65",
                      "e66", "f66", "g66", "h66", "e67", "f67", "g67", "h67"].includes(key)) {
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
      
    }




   
  }
  writeHRMValue(cellname: string, index: number, value: any) {
    let apiname = '/hrmgamecm/updatehrmgamecm'
    if (["e55", "f55", "g55", "h55",
      "e56", "f56", "g56", "h56", "e57", "f57", "g57", "h57",
      "e58", "f58", "g58", "h58", "e59", "f59", "g59", "h59",
      "e63", "f63", "g63", "h63",
      "e64", "f64", "g64", "h64", "e65", "f65", "g65", "h65",
      "e66", "f66", "g66", "h66", "e67", "f67", "g67", "h67"].includes(cellname)) {
      value = Number(value) / 100;
    }
    if ((cellname == "v7")) {
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
        }
      })
  }

}

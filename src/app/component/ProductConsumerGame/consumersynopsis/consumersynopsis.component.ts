import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';


@Component({
  selector: 'app-consumersynopsis',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumersynopsis.component.html',
  styleUrls: ['./consumersynopsis.component.scss']
})
export class ConsumersynopsisComponent extends AbstractComponent {
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = 'null';
  result: any = [];
  // disabled: boolean = true;
  analysisshow: boolean = false;
  retry: string = "";
  resultcellname: any = ['w76', 'w77', 'w78', 'w79', 'y11', 'y12', 'y13', 'y14',
    'w80', 'y37', 'y38', 'y43', 'y44', 'y45', 'w50',
    'w52', 'y55', 'y56', 'y57', 'w64', 'w81', 'w70', 'w71', 'w72', 'w73', 'w74',
    'p22', 'p34', 'p27', 'p35', 'w86', 'w87', 'w88']
  optional: any[] = [];
  optionalcase = ["incomestatus", "situationalstatus", "socialstatus", "gamestatus", "foodforthoughtstatus"]
  feedbackvalue: string = "";
  state: string = 'default';
  // isButtonDisabled: boolean = false;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }
  override ngOnInit(): void {
    if ((this.studentelementdetailsvalue.numberofattemptsleft == 1) || (this.studentelementdetailsvalue.numberofattemptsleft == 0)) {
      this.retry = "Game Over"
    } else {
      this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
    }
    this.getValues(this.noofattempt);

  }

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getValues(attempt[1]);
  }

  // for backend
  getValues(attempt: string) {
    let apiname = '/consumerbehaviour/fetchconsumerbehaviour';
    this._api.consumerFetchData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if ("t76" in data.resultList[0]) {
                this.submitprove = data.resultList[0].t76;
              }
              let roundvalue = "round" + Number(attempt) + "sv";
              if (data.resultList[0].aiFeedbackMaster != null) {
                let analysisshowdata = data.resultList[0].aiFeedbackMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }
              if ((this.submitprove == "no") || (this.submitprove == "No") || (this.submitprove == 'null')
                || (this.submitprove == null)) {
                this.isdisabled = true;
                this.getValues(String(Number(this.noofattempt) - 1));
              } else {
                let attempt = data.resultList[0].attempt;
                if (attempt == this.noofattempt) {
                  this.isdisabled = false;
                }
                this.roundname = "Round " + attempt;

                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0][this.resultcellname[i]]
                  if (this.result[i] == "") {
                    this.result[i] = "-";
                  }
                }
                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].consumerBehaviourCM.consumerBehaviourCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }

                }

                if (this.analysisshow == true) {
                  this.getfeedbackvalue(attempt);
                } else {
                  this.checkloading = false;

                }
              }
            }
            this.checkloading = false;
          } else {
            this.checkloading = false;

          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  getfeedbackvalue(attempt: string) {
    this._api.fetchfeedback(this.coursecode, this.studentsectionid, 'student', Number(attempt)).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.feedbackvalue = data.resultList[0].gptfeedback;
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
      })
  }

  // exit() {
  //   this.isButtonDisabled = true;
  //   if (this.studentelementdetailsvalue.numberofattemptsleft == 0) {
  //     this._router.navigate(['auth/component/studentdashboardheader']);
  //   } else {
  //     if (this.disabled == false) {
  //       this.checkloading = true;

  //       let body = {
  //         email: this.useremail,
  //         usermode: "student",
  //         caller: "student",
  //         action: "update",
  //         coursecode: this.coursecode,
  //         spreadsheetid: this.studentspreadsheetid,
  //         currentround:Number(this.noofattempt)
  //       };
  //       this._login.updatecourseattempt(body).subscribe((data: any) => {
  //         if (data.status == 'Success') {
  //           let status = "exit";
  //           this._login.sendDrivemailLog(status).subscribe(
  //             {
  //               next: (data: any) => {
  //                 this._login.exitOnLastAttempt();
  //                 this._router.navigate(['auth/component/studentdashboardheader']);

  //               }, error: (error: any) => {
  //                 this.isButtonDisabled = false;
  //                 this.checkloading = false;
  //                 this.driveerrorLog(error, "/maillog/drivemaillog");
  //               }
  //             })

  //         }
  //       }, (error: any) => {
  //         this.isButtonDisabled = false;
  //         this.checkloading = false;
  //         this.driveerrorLog(error, '/student/updatecourseattempt');
  //       })
  //     } else {
  //       this.isButtonDisabled = false;
  //       this._alert.error("Please submit your decisions first")
  //     }
  //   }
  // }

  downloadreportbusinessbasic() {
    let apiname = '/consumerbehaviour/fetchconsumerbehaviour';
    this.excelsheetservice.downloadReportforgame(apiname, "consumer", this.useremail, this.coursecode,
      this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }
}

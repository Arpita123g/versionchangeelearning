import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  selector: 'app-hrpgamesynopsis',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrpgamesynopsis.component.html',
  styleUrls: ['./hrpgamesynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class HrpgamesynopsisComponent extends AbstractComponent {
  showQuestionMarks = false;
  analysisshow: boolean = false;
  result: any = [];
  optional: any[] = [];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  retry: string = "";
  disabled: boolean = false;
  coursename: string = "";
  feedbackvalue: string = "";
  responseresult: any = [];
  optionalcase: any = ["foodforthoughtstatus"];
  state: string = 'default';
  cashfromfinancing: number = 0;
  totalOptionalcase: boolean = true;
  isButtonDisabled: boolean = false;

  databasecellname: any = ['ae7', 'ae8', 'ae9', 'ae10', 'ae11', 'ae12', 'ae15', 'ae16', 'ae17', 'ae18', 'ae19', 'ae21',
    'ae22', 'ae23', 'ae24', 'ae25', 'ae26', 'af21', 'af22', 'af23', 'af24', 'af25', 'af26', 'ae29', 'ae30', 'ae31',
    'ae32', 'ae33', 'ae35', 'ae36', 'ae37', 'ae38', 'c114', 'c115', 'c116', 'c117', 'c118', 'c119', 'c120', 'c99',
    'c103', 'c124', 'c112', 'c122', 'c128', 'ae44', 'ae45', 'ae46', 'ae47', 'g73', 'g74', 'g75', 'g76', 'g77', 'g78',
    'f81', 'f82', 'f83', 'f84', 'f85', 'f86', 'e89', 'e90', 'e91', 'e92', 'e93', 'e94', 'h89', 'h90', 'h91', 'h92',
    'h93', 'h94'];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    if (this.studentelementdetailsvalue.numberofattemptsleft == 1) {
      this.retry = "Game Over"
    } else {
      this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
    }

    this.getFetchData(this.noofattempt);
  }

  getFetchData(attempt: string) {
    let apiname = '/hrplanning/fetchhrplanning';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].ae49;
              let roundvalue = "round" + Number(attempt) + "sv";
              if (data.resultList[0].aiFeedbackMaster != null) {
                let analysisshowdata = data.resultList[0].aiFeedbackMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }
              if ((this.submitprove == "no") || (this.submitprove == "No") || (this.submitprove == null)) {
                this.disabled = true;
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.databasecellname.length; i++) {
                  this.result[i] = data.resultList[0][this.databasecellname[i]]
                  // if (this.result[i] == "") {
                  //   this.result[i] = "-";
                  // }
                }

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].hrPlanningCM.hrPlanningCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {
                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                this.checkloading = false;

                if (this.analysisshow == true) {
                  this.getfeedbackvalue(attempt);
                } else {
                  this.checkloading = false;
                }

              }
            }

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


  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  exit() {
    this.isButtonDisabled = true;
    if (this.studentelementdetailsvalue.numberofattemptsleft == 0) {
      this._router.navigate(['auth/component/studentdashboardheader']);
    } else {
      if (this.disabled == false) {
        this.checkloading = true;

       let body = {
          email: this.useremail,
          usermode: "student",
          caller: "student",
          action: "update",
          coursecode: this.coursecode,
          spreadsheetid: this.studentspreadsheetid,
          currentround:Number(this.noofattempt)
        };
        this._login.updatecourseattempt(body).subscribe((data: any) => {
          if (data.status == 'Success') {
            let status = "exit";
            this._login.sendDrivemailLog(status).subscribe(
              {
                next: (data: any) => {
                  this._login.exitOnLastAttempt();
                  this._router.navigate(['auth/component/studentdashboardheader']);

                }, error: (error: any) => {
                  this.isButtonDisabled = false;
                  this.checkloading = false;
                  this.driveerrorLog(error, "/maillog/drivemaillog");
                }
              })

          }
        }, (error: any) => {
          this.isButtonDisabled = false;
          this.checkloading = false;
          this.driveerrorLog(error, '/student/updatecourseattempt');
        })
      } else {
        this.isButtonDisabled = false;
        this._alert.error("Please submit your decisions first")
      }
    }
  }


  downloadreporthrpgame() {
    let apiname = '/hrplanning/fetchhrplanning';
    this.excelsheetservice.downloadReportforgame(apiname, "hrplanning", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }

}

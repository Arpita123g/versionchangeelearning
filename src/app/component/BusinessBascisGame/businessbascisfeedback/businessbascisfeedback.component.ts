import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';


@Component({
  selector: 'app-businessbascisfeedback',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatIconModule, FormsModule, MarkdownModule],
  templateUrl: './businessbascisfeedback.component.html',
  styleUrls: ['../BusinessBasicsGame.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class BusinessbascisfeedbackComponent extends AbstractComponent {
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
  isButtonDisabled:boolean = false;
  responseresult: any = [];
  state: string = 'default';
  optionalcase = ["licenseandregstatus", "technologystatus", "foodforthoughtstatus", "campaign123status"]

  resultcellname: any = ['c18', 'c26', 'c19', 'c20', 'c21', 'c22', 'c27', 'c28', 'c29', 'c23', 'c24', 'c30', 'c31', 'c32', 'c25', //14
    'c50', 'c51', 'c52', 'c53', 'c54', 'c56', //20
    'c64', 'c65', 'c66', 'c67', 'c68', 'c69', 'c70', 'c71', 'c72', 'c73', //30
    'c76', 'c77', 'c78', 'c79',
    'c82', 'c47',
    'r6', 'r7', 'r8', 'r9'
  ] 
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    if ((this.studentelementdetailsvalue.numberofattemptsleft == 1) || (this.studentelementdetailsvalue.numberofattemptsleft == 0)) {
      this.retry = "Game Over"
    } else {
      this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
    }

    setTimeout(() => {
      this.getFetchData(this.noofattempt);
    }, 2000);

  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  getFetchData(attempt: string) {
    let apiname = '/businessbasic/fetchbusinessbasic';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].h4;
              let roundvalue = "round" + Number(attempt) + "sv";
              if (data.resultList[0].aiFeedbackMaster != null) {
                let analysisshowdata = data.resultList[0].aiFeedbackMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }

              if ((this.submitprove == "no") || (this.submitprove == "No") || (this.submitprove == null) ) {
                this.disabled = true;
                this.getFetchData(String(Number(attempt) - 1));
              } else {
                this.resultbody = data;
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;

                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0][this.resultcellname[i]]
                  if ((this.resultcellname[i] == 'c27') || (this.resultcellname[i] == 'c28') || (this.resultcellname[i] == 'c29')) {
                    if (this.result[i] == 1) {
                      this.result[i] = "Implemented";
                    } else {
                      this.result[i] = "Not Implemented";
                    }
                  } else if ((this.resultcellname[i] == 'c30') || (this.resultcellname[i] == 'c31') || (this.resultcellname[i] == 'c32')) {
                    if (this.result[i] == 1) {
                      this.result[i] = "Launched";
                    } else {
                      this.result[i] = "Not Launched";
                    }
                  }


                }
                this.result[23] = this.result[23] + this.result[24];
                this.result[25] = this.result[25] + this.result[26];

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus[this.optionalcase[i]];
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
                  // this._api.savekpivalue((this.result[35] * 100).toFixed(0), (this.result[36] * 100).toFixed(0),
                  //   (this.result[34]).toFixed(1), 'update', this.noofattempt);
                }

              }
            }

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
      },(error:any)=>{
        this.checkloading = false;
      })
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

  downloadreportbusinessbasic() {
    let apiname = '/businessbasic/fetchbusinessbasic';
    this.excelsheetservice.downloadReportforgame(apiname, "businessbasic", this.useremail, this.coursecode,
      this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);
  }



}
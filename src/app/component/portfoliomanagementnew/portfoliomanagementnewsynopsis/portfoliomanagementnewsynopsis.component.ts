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
  selector: 'app-portfoliomanagementnewsynopsis',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './portfoliomanagementnewsynopsis.component.html',
  styleUrls: ['./portfoliomanagementnewsynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class PortfoliomanagementnewsynopsisComponent extends AbstractComponent {
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
  optionalcase: any = [];
  state: string = 'default';
  isButtonDisabled:boolean = false;

  databasecellname: any = ['am8', 'am9', 'am10', 'am11', 'am12', 'am13', 'am14', 'am17', 'am18', 'am19', //10
    'am20', 'am21', 'am22', 'am23', 'am26', 'am27', 'am28', 'am29', 'am30', 'am31', 'am32', 'c25', 'c301', //13
    'c578', 'c27', 'c303', 'c580', 'c28', 'c304', 'c581', 'f25', 'f301', 'f578', 'f26', 'f302', 'f579', 'h25',//14
    'h301', 'h578', 'f27', 'f303', 'f580', 'h26', 'h302', 'h579', 'c9', 'h27', 'h303', 'h580', 'g12', 'g13',//14
    'g14', 'g15', 'g16', 'g17', 'g18', 'g288', 'g289', 'g290', 'g291', 'g292', 'g293', 'g294', 'g565', 'g566',//14
    'g567', 'g568', 'g569', 'g570', 'g571', 'c834', 'c835', 'c833', 'f834', 'f835', 'i834', 'i835', 'ap13',//13

  ];

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
   this.getFetchData(this.noofattempt);
  }

  getFetchData(attempt: string) {
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].ap15;
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
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.databasecellname.length; i++) {
                  this.result[i] = data.resultList[0][this.databasecellname[i]]
                  if (this.result[i] == "") {
                    this.result[i] = 0;
                  }
                }
                for (let i = 0; i < 21; i++) {
                  if (this.result[i] != "-") {
                    this.result[i] = (Number(this.result[i]) * 100).toFixed(0) + "%"
                  }
                } for (let i = 21; i < 45; i++) {
                  if (this.result[i] != "-") {
                    this.result[i] = (Number(this.result[i]) * 100).toFixed(2) + "%"
                  }
                }
                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].portfolioManagementCM.portfolioManagementCMActiveStatus[this.optionalcase[i]];
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
            // this._login.savekpivalue(Number(this.result[52] * 100).toFixed(0), Number(this.result[51] * 100).toFixed(0),
            //   this.result[45], 'update', this.noofattempt)
          }
          this.checkloading = false;
        } else {
          // this._login.savekpivalue(Number(this.result[52] * 100).toFixed(0), Number(this.result[51] * 100).toFixed(0),
          //   this.result[45], 'update', this.noofattempt)
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


  downloadreportportfoliomanagementreport() {
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';
    this.excelsheetservice.downloadReportforgame(apiname, "portfolio", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename, this.studentelementdetailsvalue.coursedetailsid);

  }
}

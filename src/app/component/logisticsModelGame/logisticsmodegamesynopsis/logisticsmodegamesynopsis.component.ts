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

@Component({
  selector: 'app-logisticsmodegamesynopsis',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule],
  templateUrl: './logisticsmodegamesynopsis.component.html',
  styleUrls: ['./logisticsmodegamesynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class LogisticsmodegamesynopsisComponent extends AbstractComponent {
  showQuestionMarks = false;
  result: any = [];
  analysisshow: boolean = false;
  optional: any[] = [];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  retry: string = "";
  disabled: boolean = false;
  coursename: string = "";
  feedbackvalue: string = "";
  state: string = 'default';
  optionalcase = ["emissionsstatus", "foodforthoughtstatus"];
  isButtonDisabled: boolean = false;

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
  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  databasecellname: any = ['at4', 'at5', 'at6', 'at53', 'at54', 'at55', 'at56', 'at57',
    'at58', 'at59', 'i7', 'i8', 'f66', 'g48', 'g49', 'at36', 'at37', 'at38', 'at40',
    'at41', 'at60', 'at61', 'at62', 'at63', 'at64',
    'j102', 'j103', 'j104', 'j105', 'c85', 'c86', 'c87',
    'b28', 'c28', 'b29', 'c29', 'b30', 'c30', 'b31', 'c31', 'b32', 'c32', 'b34', 'c34',
    'v21', 'v22', 'v23', 'v24',
    'b90', 'c90', 'b91', 'c91', 'b92', 'c92', 'b93', 'c93', 'b94', 'c94', 'b95', 'c95',
    'j107', 'j108', 'j109', 'j110',
    'at65', 'at66', 'at67', 'at68', 'c33', 'at17', 'au17', 'av17', 'aw17']

  getFetchData(attempt: string) {
    let apiname = '/logistics/fetchlogistics';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].aw53;
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
                  if ((this.result[i] == "") && (this.result[i] != 0)) {
                    this.result[i] = "-";
                  }
                }
                for (let i = 64; i < 68; i++) {
                  if (this.result[i] != 0) {
                    this.result[i] = Number(this.result[i]) * 100;
                  }

                }
                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].logisticsCM.logisticsCMActiveStatus[this.optionalcase[i]];
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
                  // this._login.savekpivalue((this.result[62] * 100).toFixed(0), (this.result[43]).toFixed(0),
                  //   (this.result[59]).toFixed(0), 'update', this.noofattempt)
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

  downloadreportlogisticsmodelgame() {
    let apiname = '/logistics/fetchlogistics';
    this.excelsheetservice.downloadReportforgame(apiname, "logistics", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename, this.studentelementdetailsvalue.coursedetailsid);

  }
}

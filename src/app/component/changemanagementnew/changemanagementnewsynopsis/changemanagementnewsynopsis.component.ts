import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { ChangemanagementnewexlService } from 'src/app/service/sheet/changemanagementnew/changemanagementnewexl.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-changemanagementnewsynopsis',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './changemanagementnewsynopsis.component.html',
  styleUrls: ['./changemanagementnewsynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class ChangemanagementnewsynopsisComponent extends AbstractComponent {
  result: any = [];
  resultbody: any = [];
  analysisshow: boolean = false;
  roundname: string = "";
  state: string = 'default';
  dropdownvalue: any = [];
  submitprove: string = "";
  feedbackvalue: string = "";
  retry: string = "";
  disabled: boolean = false;
  coursename: string = "";
  language: any = [];
  languagCommon: any = {};

  optionalcase: any = ["foodforthoughtstatus"]
  p = '#C3F9C3 ';
  n = '#f7cac9';
  nu = '#FFD77E ';
  blank = '#EEEEEF'

  //bk-38
  databasecellname = ['bk6', 'bk7', 'bk8', 'bk9', 'bk10', 'bk11', 'bk12', 'bk13', 'bk14', 'bk15', 'bk16', 'bk17', 'bk18', 'bk19', 'bk20', //14
    'bk22', 'bk23', 'bk24', 'bk25', 'bk26', 'bk27', 'bk28', 'bk29', 'bk30', 'bk31', 'bk32', 'bk33', 'bk34', 'bk35', 'bk36', //29
    'bk38', 'bk39', 'bk40', 'bk41', 'bk42', 'bk43', 'bk44', 'bk45', 'bk46', 'bk47', 'bk48', 'bk49', 'bk50', 'bk51', 'bk52', //44
    'x34', 'y34', 'z34', 'aa34', //48
    'x35', 'y35', 'z35', 'aa35', //52
    'x36', 'y36', 'z36', 'aa36', //56
    'x37', 'y37', 'z37', 'aa37', //60
    'x38', 'y38', 'z38', 'aa38', //64
    'x39', 'y39', 'z39', 'aa39', //68
    'ak20', 'al20', 'am20', 'an20', 'ao20', 'ap20', //74
    'o40', 'o44', 'o48', 'o52', //78
    'x40', 'y40', 'z40', 'aa40', //82
    'ak32', 'al32', 'am32', 'an32', 'ao32', 'ap32', //88
    'ak33', 'al33', 'am33', 'an33', 'ao33', 'ap33', //94
    'ak34', 'al34', 'am34', 'an34', 'ao34', 'ap34', //100
    'ak35', 'al35', 'am35', 'an35', 'ao35', 'ap35', //106
    'ak36', 'al36', 'am36', 'an36', 'ao36', 'ap36', //112
    'ak37', 'al37', 'am37', 'an37', 'ao37', 'ap37', //118
    'bk54']//119

  periodcellvalue: any = ['x10', 'y10', 'z10', 'aa10', 'ab10', 'ac10']
  optional: any[] = [];
  isButtonDisabled: boolean = false;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: ChangemanagementnewexlService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    const isEU = this.languageselect === 'EU';

    if ((this.studentelementdetailsvalue.numberofattemptsleft == 1) || (this.studentelementdetailsvalue.numberofattemptsleft == 0)) {
      this.retry = isEU ? "Game Over" : "Game Over";
    } else {
      const roundNumber = (this.studentelementdetailsvalue.previousassignedattempts - this.studentelementdetailsvalue.numberofattemptsleft + 2);
      this.retry = isEU ? "Round" + roundNumber : "Round " + roundNumber;
    }
    // if ((this.studentelementdetailsvalue.numberofattemptsleft == 1) || (this.studentelementdetailsvalue.numberofattemptsleft == 0)) {
    //   this.retry = "Game Over"
    // } else {
    //   this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
    // }

    setTimeout(() => {
      this.getFetchData(this.noofattempt);
    }, 2000);


  }


  getFetchData(attempt: string) {
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success" && data.resultList) {

            this.language = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()];
            this.languagCommon = data.resultList[0].changeManagementNewLM[`common${this.languageselect.toLowerCase()}`];

            this.submitprove = data.resultList[0].changemanagementnewdata.bh6;
            // let roundvalue = "round" + Number(attempt) + "sv";
            const result = data.resultList[0];
            const attempt = result.attempt;
            let roundvalue = `round${Number(attempt)}sv`;

            this.analysisshow = result.aiFeedbackMaster?.[roundvalue] === 'yes';
            // if (data.resultList[0].aiFeedbackMaster != null) {
            //   let analysisshowdata = data.resultList[0].aiFeedbackMaster[roundvalue];
            //   if (analysisshowdata == 'yes') {
            //     this.analysisshow = true
            //   } else {
            //     this.analysisshow = false;
            //   }
            // }
            // if ((this.submitprove == "no") || (this.submitprove == "No") || (this.submitprove == null)) {
            //   this.disabled = true;
            //   this.getFetchData(String(Number(attempt) - 1));
            // } else {
            if (!this.submitprove || this.submitprove.toLowerCase() === "no") {
              this.disabled = true;
              this.getFetchData(String(Number(this.noofattempt) - 1));
            } else {
              let attempt = data.resultList[0].attempt;
              // this.roundname = "Round " + attempt;
              // this.roundname = this.languageselect.toLowerCase() === 'EU' ? `Round ${attempt}` : `Round ${attempt}`;

              // if (attempt > 0) {
              //   for (let i = 1; i < attempt + 1; i++) {
              //     this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + i : "Round" + " " + i;
              //   }
              // }
              this.roundname = this.languagCommon?.b20 + " " + attempt;
              if (attempt > 0) {
                this.dropdownvalue = [];
                for (let i = 1; i <= attempt; i++) {
                  this.dropdownvalue.push(this.languagCommon?.b20 + " " + i);
                }
              }
              for (let i = 0; i < 120; i++) {
                this.result[i] = data.resultList[0].changemanagementnewdata[this.databasecellname[i]]
                if (this.result[i] == "") {
                  this.result[i] = 0;
                }
              }
              for (let i = 120; i < 126; i++) {
                this.result[i] = data.resultList[0].changeManagementNewCM.changemanagementnewperioddata[this.periodcellvalue[i - 120]]
              }

              this.optional = this.optionalcase.map((caseName: any) =>
                result.changeManagementNewCM.changeManagementNewCMActiveStatus[caseName] !== "inactive"
              );

              // for (let i = 0; i < this.optionalcase.length; i++) {
              //   const caseStatus = data.resultList[0].changeManagementNewCM.changeManagementNewCMActiveStatus[this.optionalcase[i]];
              //   if (caseStatus == "inactive") {

              //     this.optional[i] = false;
              //   } else {
              //     this.optional[i] = true;
              //   }
              // }
              this.checkloading = false;
              if (this.analysisshow == true) {
                this.getfeedbackvalue(attempt);
              } else {
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


  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
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
          currentround: Number(this.noofattempt)
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

  downloadreportchangemanagement() {
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this.excelsheetservice.downloadReportforchangemanagementnew(apiname, "changemanagementnew", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid, this.languageselect);


  }
}

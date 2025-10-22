import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
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

@Component({
  selector: 'app-financialanalysisnewsynopsis',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './financialanalysisnewsynopsis.component.html',
  styleUrls: ['./financialanalysisnewsynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class FinancialanalysisnewsynopsisComponent extends AbstractComponent {
  retry: string = "";
  disabled: boolean = false;
  roundname: string = "";
  analysisshow: boolean = false;
  state: string = 'default';
  optional: any[] = [];
  result: any = [];
  dropdownvalue: any = [];
  submitprove: string = "";
  optionalcase: any = ["foodforthoughtstatus"]
  feedbackvalue: string = "";
  isButtonDisabled:boolean = false;

  databasecellname: any = [
    'ak5', 'al5', 'am5',//69,76
    'ak6', 'al6', 'am6',
    'ak7', 'al7', 'am7',
    'ak10', 'al10', 'am10',
    'ak11', 'al11', 'am11',
    'ak12', 'al12', 'am12',
    'ak15', 'al15', 'am15',
    'ak16', 'al16', 'am16',
    'ak17', 'al17', 'am17',
    'ak20', 'al20', 'am20',
    'ak21', 'al21', 'am21',
    'ak22', 'al22', 'am22',
    'ak23', 'al23', 'am23',
    'ak26', 'al26', 'am26',
    'ak27', 'al27', 'am27',
    'ak28', 'al28', 'am28',//47
    "ak31", 'ak32', 'ak33', 'ak34', 'ak35',//53
    'ak36', 'ak37', 'ak38', 'ak39', 'ak40',//57
    'r27', 'r28', 'r29', 'r30', 'r31', 'r32',//63
    's27', 's28', 's29', 's30', 's31', 's32',//69
    's19', 't19', 'u19',//72
    's21', 't21', 'u21',//75
    't23','s23',//77
    'am38', 'am39', 'am40'//80
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

    this.getFetchData(this.noofattempt);
   

  }

  getFetchData(attempt: string) {
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].am31;
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
                for (let i = 9; i < 15; i++) {
                  this.result[i] = (this.result[i] * 100).toFixed(0) + "%"
                } for (let i = 27; i < 39; i++) {
                  this.result[i] = (this.result[i] * 100).toFixed(0) + "%"
                }
                for (let i = 73; i < 76; i++) {
                  this.result[i] = (this.result[i] * 100).toFixed(0) + "%"
                }
               

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].financialAnalysisCM.financialAnalysisCMActiveStatus[this.optionalcase[i]];
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

  downloadreportchangemanagement() {
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this.excelsheetservice.downloadReportforgame(apiname, "fsa", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename, this.studentelementdetailsvalue.coursedetailsid);

  }
}

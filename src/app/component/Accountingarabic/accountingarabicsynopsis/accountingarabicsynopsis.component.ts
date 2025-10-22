import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
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
  selector: 'app-accountingarabicsynopsis',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatIconModule, FormsModule],
  templateUrl: './accountingarabicsynopsis.component.html',
  styleUrls: ['./accountingarabicsynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class AccountingArabicsynopsisComponent extends AbstractComponent {
  showQuestionMarks = false;
  analysisshow: boolean = false;
  result: any = [];
  //it will be uncommited(Arpita)
  // optional: any[] = [];
  //getting success api call this line will be removed(Arpita)
  optional: any[] = [true,true,true,true];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  retry: string = "";
  disabled: boolean = false;
  coursename: string = "";
  feedbackvalue: string = "";
  responseresult: any = [];
  optionalcase: any = ["balancesheetstatus", "incomestatementstatus", "cashflowstatus", "foodforthoughtstatus",];
  state: string = 'default';
  cashfromfinancing: number = 0;
  totalOptionalcase : boolean = true;
  isButtonDisabled: boolean = false;
  databasecellname: any = [
   "ac9","ac10","ac11","ac12","ac13","ac17","ac18","ac19","ac20","ac21", //9
   "ac25","ac26","ac27","ac28","ac35","ac36","ac37","ac38","ac39","ac43","ac44",//20
   "ac45","ac46","ac52","ac53","ac54","ac61","ac62","ac66","ac67","ac68",//30
   "ac70","ac73","ac76","ac81","ac84","ac85","ac88","ac89","ac92","ac93",//40
   "b25","b26","b27","b28","b29","b30","b31","b32","b33", //49
   "k5","k6","k7","j25","k25","l25","m25","j26","k26","l26","m26","j27","k27","l27","m27",//64
    "l8","l28","m28","ag16"
  ];
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
    let apiname = '/accountingarabic/fetchaccountingarabic';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              let attempt = data.resultList[0].attempt;
              this.submitprove = data.resultList[0].ag8;
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
                
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.databasecellname.length; i++) {
                  this.result[i] = data.resultList[0][this.databasecellname[i]]
                  if (this.result[i] == "") {
                    this.result[i] ="-";
                  }
                }
                for (let i = 41; i < 50; i++) {
                  if (Number(this.result[i]) == 1) {
                    this.result[i] = "Suggested"
                  } else {
                    this.result[i] = "Not Suggested"
                  }
                }
                
                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].accountingArabicCM.accountingArabicCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {
                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }
                
                if((this.optional[0]==false) && (this.optional[1]==false) && (this.optional[2]==false)){
                  this.totalOptionalcase = false;
                }else{
                  this.totalOptionalcase = true;

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


  downloadreportaccountingArabic() {
    let apiname = '/accountingarabic/fetchaccountingarabic';
    this.excelsheetservice.downloadReportforgame(apiname, "accountingarabic", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
        this.studentelementdetailsvalue.coursedetailsid);
  
  }

}

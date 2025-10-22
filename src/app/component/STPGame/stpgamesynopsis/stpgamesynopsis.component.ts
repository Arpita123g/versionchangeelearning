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
import { StpsheetService } from 'src/app/service/sheet/stp/stpsheet.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-stpgamesynopsis',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './stpgamesynopsis.component.html',
  styleUrls: ['./stpgamesynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})

export class StpgamesynopsisComponent extends AbstractComponent {
  showQuestionMarks = false;
  analysisshow: boolean = false;
  result: any = [];
  optional: any[] = [];
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  retry: string = "";
  disabled: boolean = false;
  coursename: string = "";
  feedbackvalue: string = "";
  optionalcase: any = ["foodforthoughtstatus"];
  state: string = 'default';
  isButtonDisabled: boolean = false;
  databasecellname: string[] = [
    "cj8", "cj9", "cj10", "cj11", "cj12", "cj13", "cj14", "cj15", "cj16", "cj17", "cj18", //10
    "ck8", "ck9", "ck10", "ck11", "ck12", "ck13", "ck14", "ck15", "ck16", "ck17", "ck18", //21
    "cj20", "cj22", "cj26", "cj30", "cj35", "cj36", "cj37", //28
    "cj48", "cj49", "cj50", "cj51", "cj52", "cj53", "cj54", "cj55", "cj56", "cj57", "cj58", //39
    "ck48", "ck49", "ck50", "ck51", "ck52", "ck53", "ck54", "ck55", "ck56", "ck57", "ck58", //50
    "cj60", "cj62", "cj66", "cj70", "cj75", "cj76", "cj77", //57
    "cj88", "cj89", "cj90", "cj91", "cj92", "cj93", "cj94", "cj95", "cj96", "cj97", "cj98", //68
    "ck88", "ck89", "ck90", "ck91", "ck92", "ck93", "ck94", "ck95", "ck96", "ck97", "ck98", //79
    "cj100", "cj102", "cj106", "cj110", "cj115", "cj116", "cj117", //86
    // Company Sales & Market Share, Phase 3
    "AW135", "AW136", "AW137", "AX143", "AX136", "AX137", "AY143", "AY136", "AY137", //95
    "AZ143", "AZ136", "AZ137", "BA143", "BA136", "BA137", "BB143", "BB136", "BB137", //104
    // Company Market Share, Phase 1 to 3
    "AW135", "C137", "W137", "AW137", "D135", "D137", "X137", "AX137", "E135", "E137", "Y137", "AY137", //116
    "F135", "F137", "Z137", "AZ137", "G135", "G137", "AA137", "BA137", "H135", "H137", "AB137", "BB137", //128
    // Product Market Share, Phase 1 to 3
    "AW9", "C133", "W133", "AW133", "AX9", "D133", "X133", "AX133", "AY9", "E133", "Y133", "AY133", //140
    "AZ9", "F133", "Z133", "AZ133", "BA9", "G133", "AA133", "BA133", "BB9", "H133", "AB133", "BB133", //152
    "BC9", "I133", "AC133", "BC133", "BD9", "J133", "AD133", "BD133", "BE9", "K133", "AE133", "BE133", //164
    "BF9", "L133", "AF133", "BF133", "BG9", "M133", "AG133", "BG133", //172
    // Company Operating Margins, Phase 1 to 3
    "AW135", "C156", "W156", "AW156", "D135", "D156", "X156", "AX156", "E135", "E156", "Y156", "AY156", //184
    "F135", "F156", "Z156", "AZ156", "G135", "G156", "AA156", "BA156", "H135", "H156", "AB156", "BB156", //196
    "AW195", "AW196", "AW197", "AW198", //200
    // Financial Statement, Mn INR, Phase 3
    "AW143", "AX143", "AY143", "AZ143", "BA143", "BB143", //206
    "AW144", "AX144", "AY144", "AZ144", "BA144", "BB144", //212
    "AW145", "AX145", "AY145", "AZ145", "BA145", "BB145", //218
    "AW146", "AX146", "AY146", "AZ146", "BA146", "BB146", //224
    "AW147", "AX147", "AY147", "AZ147", "BA147", "BB147", //230
    "AW148", "AX148", "AY148", "AZ148", "BA148", "BB148", //236
    "AW149", "AX149", "AY149", "AZ149", "BA149", "BB149", //242
    "AW150", "AX150", "AY150", "AZ150", "BA150", "BB150", //248
    "AW151", "AX151", "AY151", "AZ151", "BA151", "BB151", //254
    "AW152", "AX152", "AY152", "AZ152", "BA152", "BB152", //260
    "AW153", "AX153", "AY153", "AZ153", "BA153", "BB153", //266
    "AW154", "AX154", "AY154", "AZ154", "BA154", "BB154", //272
    "AW155", "AX155", "AY155", "AZ155", "BA155", "BB155", //278
    //thinking ability
    "CJ124",//279
    "CJ125","CJ126","CJ127","CJ128","CJ129","CJ130","CJ131","CJ132","CJ133"//288
];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: StpsheetService) {
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
    let apiname = '/stpgame/fetchstpgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].cj121;
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
                for (let i = 0; i < 87; i++) {
                  this.result[i] = data.resultList[0][this.databasecellname[i]]
                  if ((this.result[i] == "")||(this.result[i] == 0)) {
                    this.result[i] = "-";
                  }
                }
                for (let i = 87; i < 289; i++) {
                  this.result[i] = data.resultList[0].stpgamedata[this.databasecellname[i]]
                  if((this.result[i] == "")||(this.result[i] == 0)) {
                    this.result[i] = "-";
                  }
                }

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].stpGameCM.stpGameCMActiveStatus[this.optionalcase[i]];
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
    let apiname = '/stpgame/fetchstpgame';
    this.excelsheetservice.downloadReportforgame(apiname, "stpgame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }

}

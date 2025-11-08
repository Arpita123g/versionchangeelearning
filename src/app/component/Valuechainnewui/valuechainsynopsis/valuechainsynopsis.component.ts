import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { ValuechainnewService } from 'src/app/service/sheet/valuechainnew/valuechainnew.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-valuechainsynopsis',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './valuechainsynopsis.component.html',
  styleUrls: ['./valuechainsynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class ValuechainsynopsisComponent extends AbstractComponent {
  showQuestionMarks = false;
  analysisshow: boolean = false;
  result: any = [];
  optional: any[] = [];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  retry: string = "";
  // disabled: boolean = false;
  coursename: string = "";
  feedbackvalue: string = "";
  responseresult: any = [];
  optionalcase: any = ["foodforthoughtstatus", "componentsupplierstatus", "transportationstatus", "distributormarginsstatus", "innovationservicesstatus",];
  state: string = 'default';
  cashfromfinancing: number = 0;
  // isButtonDisabled: boolean = false;
  language: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: ValuechainnewService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  databasecellname: any[] = ['z8', 'z10', 'z14', 'z15', 'z16', 'z17', 'z18', 'z19', 'z20', 'z24',//10
    'z25', 'z26', 'z27', 'z28', 'z29', 'z30', 'z31', 'z32', 'z33', 'z34',//20
    'z37', 'l41', 'l42', 'l43', 'l44', 'l45', 'l46', 'l47', 'l48', 'l49',//30
    'l50', 'l51', 'l52', 'l53', 'l54', 'l55', 'i18', 'i25', 'i26', 'i27',//40
    'i29', 'i30', 'l17', 'l34', 'l38', 'l39', 'l56', 'i29', 'l35', 'l36',//50
    'l37', 'z49', 'z50', 'z51', 'z52',//55
  ]

  override ngOnInit(): void {
    const isEU = this.languageselect === 'EU';

    // if ((this.studentelementdetailsvalue.numberofattemptsleft == 1) || (this.studentelementdetailsvalue.numberofattemptsleft == 0)) {
    //   this.retry = "Game Over"
    // } else {
    //   this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
    // }
    if ((this.studentelementdetailsvalue.numberofattemptsleft == 1) || (this.studentelementdetailsvalue.numberofattemptsleft == 0)) {
      this.retry = isEU ? "EU" : "Game Over";
    } else {
      const roundNumber = (this.studentelementdetailsvalue.previousassignedattempts - this.studentelementdetailsvalue.numberofattemptsleft + 2);
      this.retry = isEU ? "Ronde" + roundNumber : "Round " + roundNumber;
    }

    this.getFetchData(this.noofattempt);
  }

  getFetchData(attempt: string) {
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success" && data.resultList) {
            this.language = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()];
            const result = data.resultList[0];

            const attempt = result.attempt;
            this.submitprove = result.valuechainnewdata.z42;
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
            // } 
            if (!this.submitprove || this.submitprove.toLowerCase() === "no") {
              this.isdisabled = true;
              this.getFetchData(String(Number(this.noofattempt) - 1));
            } else {
              this.roundname = this.languageselect.toLowerCase() === 'EU' ? `Round ${attempt}` : `Round ${attempt}`;


              // let attempt = data.resultList[0].attempt;
              // this.roundname = "Round " + attempt;

              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + i : "Round" + " " + i;
                }
              }
              this.result = this.databasecellname.map((cell: any) => result.valuechainnewdata[cell]);

              this.optional = this.optionalcase.map((caseName: any) =>
                result.valueChainNewCM.valueChainNewCMActiveStatus[caseName] !== "inactive"
              );
              // for (let i = 0; i < this.databasecellname.length; i++) {
              //   this.result[i] = data.resultList[0][this.databasecellname[i]]
              //   if (this.result[i] == "") {
              //     this.result[i] = 0;
              //   }
              // }
              for (let i = 5; i < 9; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = 'Yes'
                } else {
                  this.result[i] = 'No'
                }
              }
              for (let i = 15; i < 20; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = 'Yes'
                } else {
                  this.result[i] = 'No'
                }
              }
              this.cashfromfinancing = Number(this.result[39]) + Number(this.result[40])

              // for (let i = 0; i < this.optionalcase.length; i++) {
              //   const caseStatus = data.resultList[0].valueChainNewCM.valueChainNewCMActiveStatus[this.optionalcase[i]];
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
                this.checkloading = false;
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
  //         currentround: Number(this.noofattempt)
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

  downloadreportvaluechainigment() {
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this.excelsheetservice.downloadReportforValuechain(apiname, "valuechainnew", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid, this.languageselect);

  }

}

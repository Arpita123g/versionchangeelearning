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
import { CrmsheetService } from 'src/app/service/sheet/crm/crmsheet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-crmgamesynopsis',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './crmgamesynopsis.component.html',
  styleUrls: ['./crmgamesynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class CrmgamesynopsisComponent extends AbstractComponent {
  showQuestionMarks = false;
  analysisshow: boolean = false;
  result: any = [];
  periodresult: any = [];
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
  databasecellname: any = [
    "al9", "al10", "al11", "al12", "al13", "al14", //5
    "al15", "al16", "al17", "al18", //9
    "al19", "al20", "al21", "al22", "al23", //14
    "al24", "al25", "al26", "al27", "al28", "al29", "al30", //21
    "al31", "al32", "al33",//24//one table

    "al100", "al101", "al102", "al103", "al104", //29
    "al105", "al106", "al107", "al108",//33

    "al46", 'al47', 'am46', 'am47', 'an46', 'an47', 'al110',//40
    'al59', 'al60', 'al61', 'al62',//44

    'b15', 'b16', 'b17', 'b18', 'b19',//49
    'al76', 'al77',//51
    'b62', 'b63', 'b64', 'b65', 'b66',//56

    'c8', 'c9', 'c10',//59

    "n24", "o24", "p24",//sales//62
    "n32", "n40", "n43", "n33",//kpi variation//66

    "s33", "s34", "s35", "n27", "s36", "s27", "s28", "s29", "s31",//value creation//75
    's14','t14','s22','t22','s24','t24',//81

    'al92', 'al93', 'al94'//84
  ];
  // periodcellname: any = [
  //   "v7", "v8", "v9", "v10", "v11", //4
  //   "v12", "v13", "v14", "v15",//8
  //   "v47", "v48", "v49", "v50",//12
  //   "ag11", "ag12", "ag13", //15
  //   "ag14", "ag15",//17
  //   "ag18", "ag19", "ag20", //20
  //   "ag21", "ag22"//22
  // ]

  periodcellname: any = [
    "b147", "b148", "b149", "b150", "b151", //4
    "b152", "b153", "b154", "b155",//8
    "b221", "b222", "b223", "b224",//12
    "b225", "b226", "b158", //15
    "b166", "b167",//17
    "b168", "b169", 
  ]

  dataoflang: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: CrmsheetService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    const isHindi = this.languageselect === 'Hindi';

    if (this.studentelementdetailsvalue.numberofattemptsleft == 1) {
      this.retry = isHindi ? "खेल खत्म" : "Game Over";
    } else {
      // this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
      const roundNumber = (this.studentelementdetailsvalue.previousassignedattempts - this.studentelementdetailsvalue.numberofattemptsleft + 2);
      this.retry = isHindi ? "गोल " + roundNumber : "Round " + roundNumber;
    }
    // if (this.studentelementdetailsvalue.numberofattemptsleft == 1) {
    //   this.retry = "Game Over"
    // } else {
    //   this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
    // }
    // this.checkloading = false;
    this.getFetchData(this.noofattempt);
  }

  getFetchData(attempt: string) {
    // let apiname = '/hrplanning/fetchhrplanning';
    // this._api.fetchGameData(apiname, attempt).subscribe(
    //   {
    //     next: (data: any) => {
    //       if (data.status == "Success") {
    //         if (data.resultList != null) {
    //           this.submitprove = data.resultList[0].ae49;
    //           let roundvalue = "round" + Number(this.noofattempt) + "sv";
    //           if (data.resultList[0].aiFeedbackMaster != null) {
    //             let analysisshowdata = data.resultList[0].aiFeedbackMaster[roundvalue];
    //             if (analysisshowdata == 'yes') {
    //               this.analysisshow = true
    //             } else {
    //               this.analysisshow = false;
    //             }
    //           }
    //           if ((this.submitprove == "no") || (this.submitprove == "No") || (this.submitprove == null)) {
    //             this.disabled = true;
    //             this.getFetchData(String(Number(this.noofattempt) - 1));
    //           } else {
    //             let attempt = data.resultList[0].attempt;
    //             this.roundname = "Round " + attempt;
    //             if (attempt > 0) {
    //               for (let i = 1; i < attempt + 1; i++) {
    //                 this.dropdownvalue[i - 1] = "Round " + i;
    //               }
    //             }
    //             for (let i = 0; i < this.periodcellname.length; i++) {
    //               this.periodresult[i] = data.resultList[0][this.databasecellname[i]]
    //             }
    //             for (let i = 0; i < this.databasecellname.length; i++) {
    //               this.result[i] = data.resultList[0][this.databasecellname[i]]
    //               if (this.result[i] == "") {
    //                 this.result[i] = "-";
    //               }
    //             }

    //             for (let i = 0; i < this.optionalcase.length; i++) {
    //               const caseStatus = data.resultList[0].hrPlanningCM.hrPlanningCMActiveStatus[this.optionalcase[i]];
    //               if (caseStatus == "inactive") {
    //                 this.optional[i] = false;
    //               } else {
    //                 this.optional[i] = true;
    //               }
    //             }

    //             this.checkloading = false;

    //             if (this.analysisshow == true) {
    //               this.getfeedbackvalue(attempt);
    //             } else {
    //               this.checkloading = false;
    //             }

    //           }
    //         }

    //         this.checkloading = false;
    //       }
    //     }, error: (error: any) => {
    //       this.checkloading = false;
    //       this.driveerrorLog(error, apiname);
    //     }
    //   })
    let apiname = '/crmgame/fetchcrmgame';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          this.dataoflang = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()];

          const result = data.resultList[0];
          
          const attempt = result.attempt;
          this.submitprove = result.crmgamedata.al96;
          const roundvalue = `round${Number(attempt)}sv`;

          this.analysisshow = result.aiFeedbackMaster?.[roundvalue] === 'yes';

          if (!this.submitprove || this.submitprove.toLowerCase() === "no") {
            this.disabled = true;
            this.getFetchData(String(Number(this.noofattempt) - 1));
          } else {
            
            this.roundname = `${this.dataoflang.b409} ${attempt}`;

            if (attempt > 0) {
              this.dropdownvalue = Array.from({ length: attempt }, (_, i) => `${this.dataoflang.b409} ${i + 1}`);
              // this.dropdownvalue = Array.from({ length: attempt }, (_, i) => `Round ${i + 1}`);
            }

            // this.periodresult = this.periodcellname.map((cell: any, i: number) => result.crmGameCM[this.periodcellname[i]]);
            this.periodresult = this.periodcellname.map((cell: any, i: number) => this.dataoflang[this.periodcellname[i]]);

            this.result = this.databasecellname.map((cell: any) => result.crmgamedata[cell] || "-");

            this.optional = this.optionalcase.map((caseName: any) =>
              result.crmGameCM.crmGameCMActiveStatus[caseName] !== "inactive"
            );
           

            if (this.analysisshow) {
              this.getfeedbackvalue(attempt);
            }
          }
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    });
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
   
    let apiname = '/crmgame/fetchcrmgame';
    this.excelsheetservice.downloadReportforCRMgame(apiname, "crmgame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid,this.languageselect);
  }
}

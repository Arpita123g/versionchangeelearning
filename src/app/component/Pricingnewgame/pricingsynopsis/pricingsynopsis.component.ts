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
  selector: 'app-pricingsynopsis',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './pricingsynopsis.component.html',
  styleUrls: ['./pricingsynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class PricingsynopsisComponent extends AbstractComponent {
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
  optionalcase: any = ["foodforthoughtstatus",];
  state: string = 'default';
  cashfromfinancing: number = 0;
  // isButtonDisabled: boolean = false;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  databasecellname: any = ['c12', 'c26', 'c28', 'c49', 'c51', 'c54', 'd12', 'd26', 'd49', 'c63', 'd63', 'c74', 'd74',
    'c75', 'd75', 'g66', 'h66', 'c67', 'd67', 'c68', 'd68', 'c69', 'd69', 'c70', 'd70', 'c71', 'd71', 'c72', 'd72',
    'g53', 'h53', 'g58', 'h58', 'g63', 'h63', 'g65', 'h65', 'ab20',
  ];

  override ngOnInit(): void {

    if ((this.studentelementdetailsvalue.numberofattemptsleft == 1) || (this.studentelementdetailsvalue.numberofattemptsleft == 0)) {
      this.retry = "Game Over"
    } else {
      this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
    }

    this.getFetchData(this.noofattempt);



  }

  getFetchData(attempt: string) {
    let apiname = '/pricinggame/fetchpricinggame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].ab13;
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
                this.isdisabled = true;
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
                
                
               

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].pricingGameCM.pricingGameCMActiveStatus[this.optionalcase[i]];
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

  // exit() {
  //   this.isButtonDisabled = true;
  //   if (this.studentelementdetailsvalue.numberofattemptsleft == 0) {
  //     this._router.navigate(['auth/component/studentdashboardheader']);
  //   } else {
  //     if (this.disabled == false) {
  //       this.checkloading = true;

  //      let body = {
  //         email: this.useremail,
  //         usermode: "student",
  //         caller: "student",
  //         action: "update",
  //         coursecode: this.coursecode,
  //         spreadsheetid: this.studentspreadsheetid,
  //         currentround:Number(this.noofattempt)
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

  downloadreportpricinggamegame() {
    let apiname = '/pricinggame/fetchpricinggame';
    this.excelsheetservice.downloadReportforgame(apiname, "pricinggame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename, this.studentelementdetailsvalue.coursedetailsid);

  }

}

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
  selector: 'app-salestargetsynopsis',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './salestargetsynopsis.component.html',
  styleUrls: ['./salestargetsynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class SalestargetsynopsisComponent extends AbstractComponent {
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
  state: string = 'default';
  optionalcase: any = ["foodforthoughtstatus", "bonusstatus", "leadershipstatus", "recognitionstatus","salesforcestylestatus","salesprocessstatus"]
  isButtonDisabled:boolean = false;
  dataresult: any = [];
  databasecellnamearray: any = [
    'av7', 'aw7', 'ax7', 'av10', 'av11', 'av12', 'av15', 'av16', 'aw15',//8
    'aw16', 'ax15', 'ax16', 'av19', 'av20', 'av23', 'av24', 'av25', //16
    'av30', 'aw30', 'ax30', 'av31', 'aw31', 'ax31', 'av32', 'aw32', //24
    'ax32','av35','aw35','ax35','av36','aw36','ax36','av37','aw37', //33
    'ax37','av39','av40','av41','av42','av44','av45','av46','av50', //42
    'av51','av52','av53','av54','av55','av58','av59','av60','av61', //51
    'av64','av65', //53
    'h61','h62','h63','h64','h65','h66','h67','e61','e62','e63','e64', //64
    'e65','m59','n59','o59','p59','s54','t54','u54','v54','j50','j51', //75
    'j52','e55','d13','e56','d14','e57','d15','bb17','bb18','bb19' //85

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

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }


  getFetchData(attempt: string) {
    let apiname = '/salestarget/fetchsalestarget';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].bb7;
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
                // this.disabled = false;
                this.resultbody = data;
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;

                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }

                for (let i = 0; i < this.databasecellnamearray.length; i++) {
                  this.result[i] = data.resultList[0][this.databasecellnamearray[i]]

                  if (i < 35) {
                    if (this.result[i] == "") {
                      this.result[i] = "-";
                    }
                  }
                 
                }
                if ((this.result[35] == 0) && (this.result[36] == 0) && (this.result[37] == 0) && (this.result[38] == 0)
                && (this.result[39] == 0) && (this.result[40] == 0)&& (this.result[41] == 0)&& (this.result[42] == 0)&& (this.result[43] == 0)
                && (this.result[44] == 0)&& (this.result[45] == 0)&& (this.result[46] == 0)&& (this.result[47] == 0)&& (this.result[48] == 0)&& (this.result[49] == 0)
                && (this.result[50] == 0)&& (this.result[51] == 0)&& (this.result[52] == 0)&& (this.result[53] == 0)) {
                for (let i = 35; i < 54; i++) {
                  this.result[i] = "-";
                }
              } else {
                for (let i = 35; i < 54; i++) {
                  if (this.result[i] == 0) {
                    this.result[i] = 'No'
                  } else {
                    this.result[i] = 'Yes'
                  }
                }
              }
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].salesTargetCM.salesTargetCMActiveStatus[this.optionalcase[i]];
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

  downloadreportsalestarget() {
    let apiname = '/salestarget/fetchsalestarget';
    this.excelsheetservice.downloadReportforgame(apiname, "salestarget", this.useremail, this.coursecode,
      this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);
  }

}

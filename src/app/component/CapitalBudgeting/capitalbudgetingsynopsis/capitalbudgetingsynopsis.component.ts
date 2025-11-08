import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
// import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CapitalBudgetingsheetService } from 'src/app/service/sheet/capitalbudget/capitalbudgetsheet.service';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-capitalbudgetingsynopsis',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule,MatIconModule, FormsModule],   
  templateUrl: './capitalbudgetingsynopsis.component.html',
  styleUrls: ['./capitalbudgetingsynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ]
})
export class CapitalbudgetingsynopsisComponent extends AbstractComponent {
  showQuestionMarks = false;
  analysisshow: boolean = false;
  result: any = [];
  result1: any = [];

  optional: any[] = [];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  retry: string = "";
  // disabled: boolean = true;
  coursename: string = "";
  feedbackvalue: string = "";
  responseresult: any = [];
  optionalcase: any = ["foodforthoughtstatus"];
  state: string = 'default';
  cashfromfinancing: number = 0;
  // isButtonDisabled: boolean = false;
  presentValueTableDatacellName: any= ['Revenue','Cost Saving'];
  presentValueTableData1cellName: any= ['Market Expansion','Operational Efficiency','Process Improvement','Product Expansion'];
  budgetValueTableDatacellName: any= ['Budget Utilized','Budget Unused'];
  presentValueTableData: any[][] = [];
  presentValueTableData1: any[][] = [];
  budgetValueTableData: any[][] = [];
gamedata:any = [];
  databasecellname: string[] = [
    'ap7', 'ap8', 'ap9', 'ap10', 'ap11', 'ap12', 'ap13', 'ap14', 'ap15', 'ap16', 'ap17', 'ap18', 'ap19', 'ap20',//13
    'ap23', 'ap24', 'ap25', 'ap26', 'ap27', 'ap28', 'ap29', 'ap30', 'ap31', 'ap32', 'ap33', 'ap34', 'ap35', 'ap36',//27
    'b100', 'b101', 'c100', 'c101', 'b106', 'b107', 'b108', 'b109', 'c106', 'c107', 'c108', 'c109',  //39
    'b112', 'b113', 'c112', 'c113', 'c127', 'c128', 'c129', 'ao46', 'ao47' //46

  ];
  periodcellname: string[] = [
    'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13', 'h14', 'h15', 'h16', 'h17', 'h18', 'h19',//13
  ];

  tableData = [
    ["Area", "Project", "Investment, INR million", "PV, INR million", "NPV, INR Million", "IRR %", "Profitability Index", "Benefit Cost Ratio","EAC"],
    ["b116", 'c116', 'd116', 'e116', 'f116', 'g116', 'h116', 'i116', 'j116', ],
    ["b117", 'c117', 'd117', 'e117', 'f117', 'g117', 'h117', 'i117', 'j117', ],
    ["b118", 'c118', 'd118', 'e118', 'f118', 'g118', 'h118', 'i118', 'j118', ],
    ["b119", 'c119', 'd119', 'e119', 'f119', 'g119', 'h119', 'i119', 'j119', ],
    ["b120", 'c120', 'd120', 'e120', 'f120', 'g120', 'h120', 'i120', 'j120', ],
   
  ];
  filtertabledata: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: CapitalBudgetingsheetService) {
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
    let apiname = '/cbgame/fetchcbgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.gamedata = data.resultList[0];
              this.filtertabledata = this.tableData.slice(); // Creates a shallow copy

                for (let i = 5; i >= 1; i--) { // Loop in reverse to avoid index shift issue
                  if (this.gamedata.cbgamedata[this.tableData[i][0]] === '' || this.gamedata.cbgamedata[this.tableData[i][0]] === 0) {
                    this.filtertabledata.splice(i, 1);
                  }
                }
              this.submitprove = data.resultList[0].cbgamedata.ao39;
              let roundvalue = "round" + Number(attempt) + "sv";
              if (data.resultList[0].aiFeedbackMaster != null) {
                let analysisshowdata = data.resultList[0].aiFeedbackMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }
              if ((this.submitprove!= "yes")) {
                this.isdisabled = true;
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                let attempt = data.resultList[0].attempt;
                if (attempt == this.noofattempt) {
                  this.isdisabled = false;
                }
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < 49; i++) {
                  this.result[i] = data.resultList[0].cbgamedata[this.databasecellname[i]];

                }

                for (let i = 0; i < 14; i++) {
                  this.result1[i] = data.resultList[0].cbGameCM.cbgameperioddata[this.periodcellname[i]];

                }

                const rowCount1 = 2; // Adjust for the number of rows needed
                for (let i = 0; i < rowCount1; i++) {
                  this.presentValueTableData.push([
                    this.presentValueTableDatacellName[i], // First column
                    this.result[i + 30], // Second column
                    
                  ]);
                }
                const rowCount2 = 4; // Adjust for the number of rows needed
                for (let i = 0; i < rowCount2; i++) {
                  this.presentValueTableData1.push([
                    this.presentValueTableData1cellName[i], // First column
                    this.result[i + 36], // Second column
                    
                  ]);
                }
                const rowCount3 = 2; // Adjust for the number of rows needed
                for (let i = 0; i < rowCount3; i++) {
                  this.budgetValueTableData.push([
                    this.budgetValueTableDatacellName[i], // First column
                    this.result[i + 42], // Second column
                    
                  ]);
                }
                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].cbGameCM.cbGameCMActiveStatus[this.optionalcase[i]];
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

  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
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
  downloadreportcapital() {
    let apiname = '/cbgame/fetchcbgame';
    this.excelsheetservice.downloadReportforgame(apiname, "cbgame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);
  }

}

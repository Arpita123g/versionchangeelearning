import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AccountinggameassessmentService } from 'src/app/service/assesment/accountinggame/accountinggameassessment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accountingingdecisionchecklist',
  standalone: true,
  imports: [CommonModule, MatDialogModule,FormsModule],
  templateUrl: './accountingingdecisionchecklist.component.html',
  styleUrls: ['./accountingingdecisionchecklist.component.scss']
})
export class AccountingingdecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  result: any = [];
  results = ['ss', 'dd'];
  isClass: boolean[] = [false, true, false];
  optional: any[] = [];
  playername: string = '';
  dropdownvalue: any = [];
  roundname: string = "";
  foodforthoughtQNo: number = 0;
  errorlist: any = [];
  previousResulList: any = [];
  responseresultcm: any = [];
  responseresultdatabase: any = [];
  assesment: string = "";
  assesmentbody: string = "";
  feedback: string = "";
  useranalysisvalue: any = {};
  useranalysisinput: string = "";
  submitprove: string = "";
  disabled: boolean = false;
  kpivaluearray: any = [];
  databasecellnamearray: any = ['ac9', 'ac10', 'ac11', 'ac12', 'ac13', 'ac17', 'ac18', 'ac19', 'ac20', 'ac21', //9
    'ac25', 'ac26', 'ac27', 'ac28', 'ac35', 'ac36', 'ac37', 'ac38', 'ac39', 'ac43', 'ac44', 'ac45', 'ac46', 'ac52', //23
    'ac53', 'ac54', 'ac61', 'ac62', 'ac66', 'ac67', 'ac68', 'ac70', 'ac73', 'ac76', //33
    'ac81', 'ac84', 'ac85', 'ac88', 'ac89', 'ac92', 'ac93', //40
    'b25', 'b26', 'b27', 'b28', 'b29', 'b30', 'b31', 'b32', 'b33', //49

  ];

  optionalcase: any = ["balancesheetstatus", "incomestatementstatus", "cashflowstatus", "foodforthoughtstatus",];

  blankInputMessage: any = ["Cash", "Accounts receivable", "Inventory", "Prepaid expenses", 'Other current assets',
    'Machinery & equipment', 'Furniture & fixtures', 'Leasehold improvements', 'Land & buildings', 'Other fixed assets',
    'Intangible assets', 'Goodwill', 'Deposits', 'Other assets', 'Accounts payable', 'Accrued expenses', 'Unearned revenue',
    'Notes, short-term', 'Current part of long-term debt', 'Bank loans payable', 'Notes payable to stockholders',
    'LESS: Short-term portion', 'Other long term debt', 'Invested capital', 'Retained earnings - beginning', 'Retained earnings - current',
    'Revenue', 'Cost of good sold', 'Sales cost', 'Administration cost', 'Bad debts', 'Depreciation & Amortization', 'Interest Expense',
    'Tax', 'Opening balance', 'Operations, Cash In', 'Operations, Cash Out', 'Investment, Cash In', 'Investment, Cash Out', 'Financing, Cash In', 'Financing, Cash Out',
    'Investment in Research and Development', 'Expansion of Manufacturing Facilities', 'Debt Restructuring', 'Cost Reduction Initiatives',
    'Introduction of Premium Product Line', 'Employee Training and Development', 'Working Capital Optimization', 'Equipment Lease Financing', 'Exploring Export Opportunities'
  ];

  @Output() newItemEvent = new EventEmitter<any>();
  foodforthought:boolean = true;
  
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private accountinggamesassesmentservice: AccountinggameassessmentService
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.useranalysisinput = String(localStorage.getItem('useranalysis'));
    if ((this.useranalysisinput == null) || (this.useranalysisinput == "null")) {
      this.useranalysisinput = '';
    }
    if (Number(this.noofattempt) > 1) {
      this.getPreviousData(String(Number(this.noofattempt) - 1))
    } else {
      this.getFetchData(this.noofattempt);
    }
  }

  getPreviousData(attempt: string) {
    let apiname = '/accountinggame/fetchaccountinggame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0][this.databasecellnamearray[i]];
              }

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (Number(this.previousResulList[i]) == 0) {
                  this.previousResulList[i] = "-"
                } else {
                  this.previousResulList[i] = data.resultList[0][this.databasecellnamearray[i]];
                }
              }

              for (let i = 41; i < 50; i++) {
                if (Number(this.previousResulList[i]) == 1) {
                  this.previousResulList[i] = "Suggested"
                } else {
                  this.previousResulList[i] = "Not Suggested"
                }
              }

              this.getFetchData(this.noofattempt);
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


  getFetchData(attempt: string) {
    let apiname = '/accountinggame/fetchaccountinggame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].accountingGameCM.accountingGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].accountingGameCM;
              this.responseresultdatabase = data.resultList[0];
              let roundvalue = "round" + Number(attempt);
              this._global.casemanagementid.next(data.resultList[0].accountinggamecmid);
              this.foodforthoughtQNo = data.resultList[0].ag9;
              this.submitprove = data.resultList[0].ag8;

              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }

              if (data.resultList[0].aiAssessmentMaster != null) {
                let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }

              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].accountingGameCM.accountingGameCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }


              
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellnamearray[i]];
                if (Number(this.result[i]) == 0) {
                  this.result[i] = "-"
                }
              }

              for (let i = 41; i < 50; i++) {
                if (Number(this.result[i]) == 1) {
                  this.result[i] = "Suggested"
                } else {
                  this.result[i] = "Not Suggested"
                }
              }
              this.errorlist = [];
              if ((this.optional[0] == true) && (this.result[41] == "Not Suggested") && (this.result[42] == "Not Suggested") && (this.result[43] == "Not Suggested")) {
                this.errorlist.push("To move ahead, kindly make your decisions in Opportunities, Balance Sheet")
              } if ((this.optional[1] == true) && (this.result[44] == "Not Suggested") && (this.result[45] == "Not Suggested") && (this.result[46] == "Not Suggested")) {
                this.errorlist.push("To move ahead, kindly make your decisions in Opportunities, Income Statement")
              } if ((this.optional[2] == true) && (this.result[47] == "Not Suggested") && (this.result[48] == "Not Suggested") && (this.result[49] == "Not Suggested")) {
                this.errorlist.push("To move ahead, kindly make your decisions in Opportunities, Cash Flow Statement")
              }


              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (attempt > 1) {
                  if (this.result[i] == this.previousResulList[i]) {
                    this.isClass[i] = true;
                  } else {
                    this.isClass[i] = false;
                  }
                } else {
                  this.isClass[i] = true;
                }
              }

              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }


              if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
                this.useranalysisSubmit();
              } else {
                this.checkloading = false;
              }

              this.kpivaluearray = [Number((data.resultList[0].l8) * 100).toFixed(0),
              data.resultList[0].l28,
              data.resultList[0].m28]
            }

          }
        }, error: (error: any) => {
          this.checkloading = false;
          // this.driveerrorLog(error, apiname);
        }
      })
  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

  useranalysisSubmit() {
    this.feedback = this.accountinggamesassesmentservice.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
    console.log('assesmentlist', this.feedback);


    if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
      this.getuseranalysisValue();
    }

  }


  getuseranalysisValue() {

    this._api.fetchassessment(this.coursecode, this.studentsectionid, 'student', Number(this.noofattempt), "coursecode").subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.useranalysisinput = data.resultList[0].studentsentiment;
            if (this.useranalysisinput == '') {
              this.useranalysisinput = String(localStorage.getItem('useranalysis'));
              if ((this.useranalysisinput == null) || (this.useranalysisinput == "null")) {
                this.useranalysisinput = '';
              }
            }
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
      })
  }


  roundClick() {
    let attempt = this.roundname.split(" ");
    this.checkloading = true;
    this.getFetchData(attempt[1]);

  }

  decisionchecklistpopup() {
    this.inputDataCheck();

  }

  inputDataCheck() {
    if (this.errorlist.length > 0) {
      this.inputdatacheckvalue = true;
    }

    if (this.inputdatacheckvalue == false) {
      this.saveDecisionChecklist();
    } else {
      const dialogRef = this.dialog.open(BlankinputlistComponent, {
        width: '60%',
        data: this.errorlist,
      });
      dialogRef.afterClosed().subscribe(result => {

      });
    }
  }


  saveDecisionChecklist() {
    if ((this.analysisshow && this.useranalysisinput.length < 10)) {
      this._alert.error("To move ahead, kindly Write your analysis");
      return;
    }
  
    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 6) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
    this.useranalysisSubmit();

    const openDialog = () => {
      const dialogRef = this.dialog.open(AccountingPopup, {
        data: {
          class: 'p-0',
          foodforthoughtqno: this.foodforthoughtQNo,
          participantsentiment: this.useranalysisinput,
          assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
          feedback: this.feedback,
          submitprove: this.submitprove,
          analysisshow: this.analysisshow,
          kpivaluearray: this.kpivaluearray,

        },
        panelClass: 'custom-dialog-container'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.newItemEvent.emit('report');
        }
      });
    };
  
    openDialog();
  }
  // saveDecisionChecklist() {
  //   if (this.noofattempt == "1") {
  //     if (this.foodforthoughtQNo == 6) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(AccountingPopup, {
  //           data: {
  //             class: 'p-0',
  //             foodforthoughtqno: this.foodforthoughtQNo,
  //             participantsentiment: this.useranalysisinput,
  //             assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //             feedback: this.feedback,
  //             submitprove: this.submitprove,
  //             analysisshow: this.analysisshow,
  //             kpivaluearray: this.kpivaluearray,

  //           },
  //           panelClass: 'custom-dialog-container'
  //         });
  //         dialogRef.afterClosed().subscribe(result => {
  //           if (result) {
  //             this.newItemEvent.emit('report');
  //           }
  //         });
  //       }
  //     }
  //     else {
  //       this._alert.error("To move ahead finish Food For Thought section");
  //     }
  //   } else if (this.noofattempt != '1') {
  //     if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //       this._alert.error("To move ahead, kindly Write your analysis");

  //     } else {
  //       const dialogRef = this.dialog.open(AccountingPopup, {
  //         data: {
  //           class: 'p-0',
  //           foodforthoughtqno: this.foodforthoughtQNo,
  //           participantsentiment: this.useranalysisinput,
  //           assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //           feedback: this.feedback,
  //           submitprove: this.submitprove,
  //           analysisshow: this.analysisshow,
  //           kpivaluearray: this.kpivaluearray,

  //         },
  //         panelClass: 'custom-dialog-container'
  //       });
  //       dialogRef.afterClosed().subscribe(result => {
  //         if (result) {
  //           this.newItemEvent.emit('report');
  //         }
  //       });
  //     }
  //   }


  // }

}





//accountingpopup..........

@Component({
  selector: 'app-accountingingdecisionchecklist.component',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './accountingpopup.html',
  styleUrls: ['./accountingingdecisionchecklist.component.scss']

})

export class AccountingPopup extends AbstractComponent {

  showtab: boolean = true;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AccountingPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  save() {
    this.checkloading = true;
    let apiname = '/accountinggame/singleinputaccountinggame';
    let decisionsubmitData = {
      "ag8": "yes"
    }
    this._api.promotionsdatawrite("accountinggame", 1,
      decisionsubmitData, apiname, 'accountinggamecmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.kpivaluearray[0],
            this.data.kpivaluearray[1], this.data.kpivaluearray[2], 'update', this.noofattempt)

          let submitprovecheck = this.data.submitprove;
          if (((submitprovecheck == 'no') || (submitprovecheck == 'No')) && (this.data.analysisshow == true)) {
            this.sendAssesmentValue();

          } else {
            this.Sharedservice.enableTab();
            this.checkloading = false;
            this.dialogRef.close(true);
          }
        }

      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }




  async sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Accountinggame").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }
  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Accountinggame").subscribe((data: any) => {

        if (data.status == "Success") {

          setTimeout(() => {
            this.sendfeedbackvalue();
          }, 4000);
          setTimeout(() => {
            this.Sharedservice.enableTab();
            this.checkloading = false;
            this.dialogRef.close(true);
          }, 10000);
        } else {
          this.checkloading = false;
          this._alert.error(data.status);
        }

      }, (error: any) => {
        this.checkloading = false;
      })

  }


  close() {
    this.dialogRef.close(false);
  }
}
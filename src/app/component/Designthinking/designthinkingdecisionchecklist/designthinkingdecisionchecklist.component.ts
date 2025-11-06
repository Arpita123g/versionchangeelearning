import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
// DesignthinkingassesmentService not found in repo; implement local helper instead
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { FormsModule } from '@angular/forms';
import { DesignthinkingassesmentService } from 'src/app/service/assesment/designthinking/designthinkingassesment.service';
@Component({
  selector: 'app-designthinkingdecisionchecklist',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule, FormsModule, MatIconModule, TippyDirective],
  templateUrl: './designthinkingdecisionchecklist.component.html',
  styleUrls: ['./designthinkingdecisionchecklist.component.scss']
})
export class DesignthinkingdecisionchecklistComponent extends AbstractComponent {
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
  @Output() newItemEvent = new EventEmitter<any>();
  foodforthought: boolean = true;

  databasecellnamearray: any = ['af7', 'af8', 'af9', 'c17', 'd17', 'e17', 'c17', 'af24', 'af25', 'af26', 'af27', 'af28',//11
    'af29', 'af30', 'af31', 'd17', 'af35', 'af36', 'af37', 'af38', 'af39', 'af40', 'af41', 'af42', 'e17', 'af46', 'af47',//26
    'af48', 'af49', 'af50', 'af51', 'af52', 'af53', 'c49', 'af57', 'af58', 'af59', 'af60', 'af61', 'af62', 'af63',//40
  ];

  optionalcase: any = ['foodforthoughtstatus',];




  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,private designthinkingassessment: DesignthinkingassesmentService
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

    const apiname = '/designthinking/fetchdesignthinking';

    const updateList = (start: number, end: number) => {
      for (let i = start; i < end; i++) {
        this.previousResulList[i] = this.previousResulList[i] == 0 ? 'No' : 'Yes';
      }
    };

    const normalizeResultList = (data: any) => {
      for (let i = 0; i < this.databasecellnamearray.length; i++) {
        this.previousResulList[i] = Number(this.previousResulList[i]) == 0 ? "-" : data.resultList[0][this.databasecellnamearray[i]];
      }
    };

    this._api.fetchGameData(apiname, attempt).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          this.previousResulList = this.databasecellnamearray.map((cellName: string, i: number) => data.resultList[0][cellName]);

          updateList(8, 15);
          updateList(17, 24);
          updateList(26, 33);

          normalizeResultList(data);
          this.getFetchData(this.noofattempt);
        } else {
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    });
  }

  getFetchData(attempt: string) {
    this.checkloading = true;

    let apiname = '/designthinking/fetchdesignthinking';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].designThinkingCM.designThinkingCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].designThinkingCM;
              this.responseresultdatabase = data.resultList[0];
              let roundvalue = "round" + Number(attempt);
              this._global.casemanagementid.next(data.resultList[0].designthinkingcmid);
              this.foodforthoughtQNo = data.resultList[0].af66;
              this.submitprove = data.resultList[0].af65;

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellnamearray[i]];

              }

              if ((this.submitprove == 'yes') || (this.submitprove == 'Yes') || (this.timefinished)) {
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
                const caseStatus = data.resultList[0].designThinkingCM.designThinkingCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }




              for (let i = 8; i < 15; i++) {
                if (this.result[i] == 0) {
                  this.result[i] = 'No'
                } else {
                  this.result[i] = 'Yes'
                }
              }
              for (let i = 17; i < 24; i++) {
                if (this.result[i] == 0) {
                  this.result[i] = 'No'
                } else {
                  this.result[i] = 'Yes'
                }
              }
              for (let i = 26; i < 33; i++) {
                if (this.result[i] == 0) {
                  this.result[i] = 'No'
                } else {
                  this.result[i] = 'Yes'
                }
              }
              // for (let i = 0; i < this.databasecellnamearray.length; i++) {
              //   if (Number(this.result[i]) == 0) {
              //     this.result[i] = "-"
              //   }
              // }



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

              this.kpivaluearray = [Number((data.resultList[0].c84) * 100).toFixed(2),
              Number((data.resultList[0].c72) * 100).toFixed(2),
              Number(data.resultList[0].c71).toFixed(0)]
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;

        }
      })
  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

 
  useranalysisSubmit() {
    this.feedback = this.designthinkingassessment.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
    console.log('saving useranalysis', this.feedback);

    if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
      this.getuseranalysisValue();
    }

  }


  getuseranalysisValue() {
    this._api.fetchassessment(this.coursecode, this.studentsectionid, 'student', Number(this.noofattempt), "coursecode").subscribe(
      (data: { status: string; resultList?: { studentsentiment: string }[] }) => {
        if (data.status === 'Success' && data.resultList?.length) {
          this.useranalysisinput = data.resultList[0].studentsentiment || '';
        } else {
          this.useranalysisinput = localStorage.getItem('useranalysis') || '';
        }
        this.checkloading = false;
      },
      () => this.checkloading = false // Error handling
    );

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
    this.errorlist = [];
    const checkConditions = (indices: number[], message: string) => {
      if (indices.every(index => this.result[index] == 'Not Launched')) {
        this.errorlist.push(message);
        this.inputdatacheckvalue = true;
      }
    };

    checkConditions([3, 4, 5], "To move ahead, kindly make your decisions in Ideate");
    checkConditions([6, 15, 24], "To move ahead, kindly make your decisions in Prototype & Test");

    if (this.errorlist.length > 0) {
      this.inputdatacheckvalue = true;
    }

    if (!this.inputdatacheckvalue) {
      this.saveDecisionChecklist();
    } else {
      const dialogRef = this.dialog.open(BlankinputlistComponent, {
        width: '60%',
        data: this.errorlist,
      });
      dialogRef.afterClosed().subscribe(result => { });
    }
  }

  saveDecisionChecklist() {
    if ((this.analysisshow && this.useranalysisinput.length < 10)) {
      this._alert.error("To move ahead, kindly Write your analysis");
      return;
    }

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 8) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
    this.useranalysisSubmit();
    const openDialog = () => {
      const dialogRef = this.dialog.open(DesignthinkingPopup, {
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
        panelClass: 'custom-dialog-container',
        position:{top:'20px'}
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
  //   if ((this.noofattempt == "1" && this.foodforthoughtQNo != 8)) {
  //     this._alert.error("To move ahead finish Food For Thought section");
  //     return;
  //   }

  //   if (this.analysisshow && this.useranalysisinput.length < 10) {
  //     this._alert.error("To move ahead, kindly Write your analysis");
  //     return;
  //   }

  //   const dialogRef = this.dialog.open(DesignthinkingPopup, {
  //     data: {
  //       class: 'p-0',
  //       foodforthoughtqno: this.foodforthoughtQNo,
  //       participantsentiment: this.useranalysisinput,
  //       assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //       feedback: this.feedback,
  //       submitprove: this.submitprove,
  //       analysisshow: this.analysisshow,
  //       kpivaluearray: this.kpivaluearray,
  //     },
  //     panelClass: 'custom-dialog-container'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.newItemEvent.emit('report');
  //     }
  //   });

  // }
}


// Design Thinking POpUp

@Component({
  selector: 'app-designthinkingpopup',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule,FormsModule],
  templateUrl: './designthinkingpopup.html',
  styleUrls: ['./designthinkingdecisionchecklist.component.scss']
})

export class DesignthinkingPopup extends AbstractComponent {

  showtab: boolean = true;
  btndisabled: boolean = false;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DesignthinkingPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.btndisabled = true;
    this.checkloading = true;
    const apiname = '/designthinking/singleinputdesignthinking';
    const decisionsubmitData = { "af65": "yes" };

    this._api.promotionsdatawrite("designthinking", 1, decisionsubmitData, apiname, 'designthinkingcmid').subscribe(
      (data: { status: string }) => {
        if (data.status === "Success") {
          this._login.savekpivalue(
            this.data.kpivaluearray[0],
            this.data.kpivaluearray[1],
            this.data.kpivaluearray[2],
            'update',
            this.noofattempt
          );

          if (['no', 'No'].includes(this.data.submitprove) && this.data.analysisshow) {
            this.sendAssesmentValue();
          } else {
            this.Sharedservice.enableTab();
            this.checkloading = false;

            this.dialogRef.close(true);
          }
        } else {
          this.btndisabled = false;
        }
        // this.checkloading = false;
      },
      (error: any) => {
        this.btndisabled = false;
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    );
  }

  async sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Desing Thinking").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Desing Thinking").subscribe((data: any) => {

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
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { ItmanagementassessmentService } from 'src/app/service/assesment/itmanagement/itmanagementassessment.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-itmanagementdecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './itmanagementdecisionchecklist.component.html',
  styleUrls: ['./itmanagementdecisionchecklist.component.scss']
})
export class ItmanagementdecisionchecklistComponent extends AbstractComponent {
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
  blankInputMessage: any = ['Server Type','Server Selection','Network Management',
    'Data Management','Development Model','Method & Lifecycle Management','Version Control',
    'Roadmap','Continous Improvements'
  ];

  databasecellnamearray: any = ['d7', 'af85', 'af86', 'm8', 'af87', 'c31', 'b31', 'c32', 'b32', 'c33', 'b33', 'c34',//11
    'b34', 'af89', 'af90', 'af91', 'c69', 'b69', 'c70', 'b70', 'c71', 'b71', 'c72', 'b72', 'c73', 'b73', 'c60', 'b60',//27
    'c61', 'b61', 'c62', 'b62', 'c63', 'b63', 'c64', 'b64', 'af93', 'c87', 'b87', 'c88', 'b88', 'c89', 'b89', 'af94',//43
    'c102', 'b102', 'c103', 'b103', 'c104', 'b104'];//49

  optionalcase: any = ['foodforthoughtstatus'];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private itmanagementassessment: ItmanagementassessmentService
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    // this.useranalysisSubmit();
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
    let apiname = '/itmanagement/fetchitmanagement';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0].itmanagementdata[this.databasecellnamearray[i]];
              }
              for (let i = 6; i < 13; i += 2) {
                if (this.previousResulList[i] == 1) {
                  this.previousResulList[i] = 'Implemented'
                } else {
                  this.previousResulList[i] = 'Not Implemented'
                }
              }
              for (let i = 17; i < 36; i += 2) {
                if (this.previousResulList[i] == 1) {
                  this.previousResulList[i] = 'Implemented'
                } else {
                  this.previousResulList[i] = 'Not Implemented'
                }
              }
              for (let i = 38; i < 43; i += 2) {
                if (this.previousResulList[i] == 1) {
                  this.previousResulList[i] = 'Implemented'
                } else {
                  this.previousResulList[i] = 'Not Implemented'
                }
              }
              for (let i = 45; i < 50; i += 2) {
                if (this.previousResulList[i] == 1) {
                  this.previousResulList[i] = 'Implemented'
                } else {
                  this.previousResulList[i] = 'Not Implemented'
                }
              }
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (Number(this.previousResulList[i]) == 0) {
                  this.previousResulList[i] = "-"
                } else {
                  this.previousResulList[i] = data.resultList[0].itmanagementdata[this.databasecellnamearray[i]];
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
    this.checkloading = true;
    let apiname = '/itmanagement/fetchitmanagement';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].itManagementCM.itmanagementperioddata;
              this._global.casemanagementid.next(data.resultList[0].itmanagementcmid);
              this.foodforthoughtQNo = data.resultList[0].itmanagementdata.af97;
              this.submitprove = data.resultList[0].itmanagementdata.af96;
              this.responseresultdatabase = data.resultList[0].itmanagementdata;
              let roundvalue = "round" + Number(attempt);
              
              if (data.resultList[0].itManagementCM.itManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              

              

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
                const caseStatus = data.resultList[0].itManagementCM.itManagementCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }


              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0].itmanagementdata[this.databasecellnamearray[i]];

              }
              
              for (let i = 6; i < 13; i += 2) {
                if (this.result[i] == 1) {
                  this.result[i] = 'Implemented'
                } else {
                  this.result[i] = 'Not Implemented'
                }
              }
              for (let i = 17; i < 36; i += 2) {
                if (this.result[i] == 1) {
                  this.result[i] = 'Implemented'
                } else {
                  this.result[i] = 'Not Implemented'
                }
              }
              for (let i = 38; i < 43; i += 2) {
                if (this.result[i] == 1) {
                  this.result[i] = 'Implemented'
                } else {
                  this.result[i] = 'Not Implemented'
                }
              }
              for (let i = 45; i < 50; i += 2) {
                if (this.result[i] == 1) {
                  this.result[i] = 'Implemented'
                } else {
                  this.result[i] = 'Not Implemented'
                }
              }
             
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if ((Number(this.result[i]) == 0)||(this.result[i] == '0')) {
                  this.result[i] = "-"
                }
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

              this.kpivaluearray = [(Number(data.resultList[0].itmanagementdata.m56)*100).toFixed(0),
              (Number(data.resultList[0].itmanagementdata.n56)*100).toFixed(0),
              Number((data.resultList[0].itmanagementdata.o60 - data.resultList[0].itmanagementdata.o61)).toFixed(0)]

              
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
    this.feedback = this.itmanagementassessment.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
    console.log('saving useranalysis', this.feedback);

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
    this.errorlist = [];

    for (let i = 0; i < this.databasecellnamearray.length; i++) {
      if (this.result[i] == "-") {
        this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
        this.inputdatacheckvalue = true;
      }
    }
    
    const conditionGroups = [
      { conditions: [
          { indices: [6, 8, 10, 12], message: "To move ahead, kindly make your decisions in System Architecture - Scalability & Performance Optimization" },
          { indices: [17, 19, 21, 23, 25], message: "To move ahead, kindly make your decisions in Security - Systems" },
          { indices: [27, 29, 31, 33, 35], message: "To move ahead, kindly make your decisions in Security - Compliances" },
          { indices: [38, 40, 42], message: "To move ahead, kindly make your decisions in Innovation - Pilot Projects" },
          { indices: [45, 47, 49], message: "To move ahead, kindly make your decisions in Innovation - Training and Development" }
        ], check: 'Not Implemented'
      },
      { conditions: [
          { indices: [0,1,2,4], message: "To move ahead, kindly make your decisions in System Architecture" },
          { indices: [13,14,15], message: "To move ahead, kindly make your decisions in Software Development" },
          { indices: [36,43], message: "To move ahead, kindly make your decisions in Innovation" }
        ], check: '-'
      }
    ];
    
    conditionGroups.forEach(({ conditions, check }) => {
      conditions.forEach(({ indices, message }) => {
        if (indices.every(index => this.result[index] === check)) {
          this.errorlist.push(message);
        }
      });
    });
    
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

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 14) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
    this.useranalysisSubmit();

    const openDialog = () => {
      const dialogRef = this.dialog.open(ItmanagementdecisionchecklistPopup, {
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
        position: { top: '20px' },
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.newItemEvent.emit('report');
        }
      });
    };

    openDialog();
  }

}



//IT Management POPUP

@Component({
  selector: 'app-itmanagementdecisionchecklistpopup',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: '../../../common/submit-popup/submitpopup.component.html',
  styleUrls: ['../../../common/submit-popup/submitpopup.component.scss'],

})
export class ItmanagementdecisionchecklistPopup extends AbstractComponent {
  showtab: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ItmanagementdecisionchecklistPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.checkloading = true;
    let apiname = '/itmanagement/singleinputitmanagement';
    let decisionsubmitData = {
      "af96": "yes"
    }
    this._api.promotionsdatawrite("itmanagement", 1,
      decisionsubmitData, apiname, 'itmanagementcmid').subscribe((data: any) => {

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "IT Management").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "IT Management").subscribe((data: any) => {

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
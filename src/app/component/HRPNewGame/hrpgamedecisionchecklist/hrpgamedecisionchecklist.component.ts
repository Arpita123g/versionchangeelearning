import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { HrpassesmentserviceService } from 'src/app/service/assesment/hrpgame/hrpassesmentservice.service';
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
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

@Component({
  selector: 'app-hrpgamedecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrpgamedecisionchecklist.component.html',
  styleUrls: ['./hrpgamedecisionchecklist.component.scss']
})
export class HrpgamedecisionchecklistComponent extends AbstractComponent {
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
  currentattempt: number = 0;
  foodforthought: boolean = true;
  @Output() newItemEvent = new EventEmitter<any>();
  language: any = [];
  languageid: number = 0;
  optionalcase: any = ['foodforthoughtstatus',];
  blankInputMessage: string[] = [];

  databasecellnamearray: any = ['ae7', 'ae8', 'ae9', 'ae10', 'ae11', 'ae12', 'ae15', 'ae16', 'ae17', 'ae18', 'ae19',//10
    'ae21', 'ae22', 'ae23', 'ae24', 'ae25', 'ae26', 'af21', 'af22', 'af23', 'af24', 'af25', 'af26', 'ae29', 'ae30',//24
    'ae31', 'ae32', 'ae33', 'ae35', 'ae36', 'ae37', 'ae38'//31
  ];



  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private hrpassesmentservice: HrpassesmentserviceService
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
    let apiname = '/hrplanningnew/fetchhrplanningnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0].hrplanningnewdata[this.databasecellnamearray[i]];
              }
              for (let i = 6; i < 11; i++) {
                if (this.previousResulList[i] == '0') {
                  this.previousResulList[i] = 'No'
                } else {
                  this.previousResulList[i] = 'Yes'
                }
              }
              for (let i = 23; i < 32; i++) {
                if (this.previousResulList[i] == '0') {
                  this.previousResulList[i] = 'No'
                } else {
                  this.previousResulList[i] = 'Yes'
                }
              }
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (Number(this.previousResulList[i]) == 0) {
                  this.previousResulList[i] = "-"
                } else {
                  this.previousResulList[i] = data.resultList[0].hrplanningnewdata[this.databasecellnamearray[i]];
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
    let apiname = '/hrplanningnew/fetchhrplanningnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].hrPlanningNewCM.hrPlanningNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }

              this.currentattempt = data.resultList[0].attempt;
              this.language = data.resultList[0].hrPlanningNewLM[this.languageselect.toLowerCase()];
              this.languageid = data.resultList[0].hrPlanningNewLM.hrplanningnewlmid;

              this.blankInputMessage = [this.language.b33, this.language.b34,
              this.language.b35, this.language.b32, this.language.b268,
              this.language.b37, this.language.b57, this.language.b58,
              this.language.b59, this.language.b60, this.language.b61,
              this.language.b101, this.language.b102, this.language.b103,
              this.language.b104, this.language.b105, this.language.b106,
              this.language.b107, this.language.b108, this.language.b109,
              this.language.b110, this.language.b111, this.language.b112,
              this.language.b78, this.language.b79, this.language.b80,
              this.language.b81, this.language.b82, this.language.b90,
              this.language.b91, this.language.b92, this.language.b93,
              ];

              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].hrPlanningNewCM.hrplanningnewperioddata;

              this.responseresultdatabase = data.resultList[0].hrplanningnewdata;
              let roundvalue = "round" + Number(this.currentattempt);
              this._global.casemanagementid.next(data.resultList[0].hrPlanningNewCM.hrplanningnewcmid);
              this.foodforthoughtQNo = data.resultList[0].hrplanningnewdata.ae50;
              this.submitprove = data.resultList[0].hrplanningnewdata.ae49;

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
                const caseStatus = data.resultList[0].hrPlanningNewCM.hrPlanningNewCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }


              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0].hrplanningnewdata[this.databasecellnamearray[i]];

              }

              for (let i = 6; i < 11; i++) {
                if (this.result[i] == '0') {
                  this.result[i] = 'No'
                } else {
                  this.result[i] = 'Yes'
                }
              }
              for (let i = 23; i < 32; i++) {
                if (this.result[i] == '0') {
                  this.result[i] = 'No'
                } else {
                  this.result[i] = 'Yes'
                }
              }
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (Number(this.result[i]) == 0) {
                  this.result[i] = "-"
                }
              }


              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (this.currentattempt > 1) {

                  if (this.result[i] == this.previousResulList[i]) {
                    this.isClass[i] = true;
                  } else {
                    this.isClass[i] = false;
                  }
                } else {
                  this.isClass[i] = true;
                }
              }
              this.roundname = this.languageselect.toLowerCase() === 'EU' ? "Round" + attempt : "Round " + attempt;

              // this.roundname = "Round " + this.currentattempt;
              if (this.currentattempt > 0) {
                for (let i = 1; i < this.currentattempt + 1; i++) {
                  // this.dropdownvalue[i - 1] = "Round " + i;
                  this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round " + i : "Round " + i;

                }
              }


              this.kpivaluearray = [Number((data.resultList[0].hrplanningnewdata.c99)).toFixed(2),
              Number((data.resultList[0].hrplanningnewdata.c122)).toFixed(0),
              Number((data.resultList[0].hrplanningnewdata.c124) * 100).toFixed(2)]

              if ((this.analysisshow == true)) {
                this.useranalysisSubmit();
              }
              this.checkloading = false;
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
    this.assesment = this.hrpassesmentservice.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
    this.feedback = this.assesment;
    if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
      this.getuseranalysisValue();
    }
  }


  getuseranalysisValue() {
    this._api.fetchassessment(this.coursecode, this.studentsectionid, 'student', Number(this.currentattempt), "coursecode").subscribe(
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
        if (this.languageselect.toLowerCase() == 'EU') {
          this.errorlist.push("To move ahead, kindly make your decisions in" + this.blankInputMessage[i])
        } else {
          this.errorlist.push("To move ahead, kindly make your decisions in" + this.blankInputMessage[i])
        }
        this.inputdatacheckvalue = true;
      }

    }

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
    if (this.noofattempt == "1") {
      if (this.foodforthoughtQNo == 12) {
        if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
          if (this.languageselect.toLowerCase() == 'EU') {
            this._alert.error("To move ahead, kindly Write your analysis");
          } else {
            this._alert.error("To move ahead, kindly Write your analysis");
          } return;
        } else {
          const dialogRef = this.dialog.open(HrpgamedecisionchecklistPopup, {
            data: {
              class: 'p-0',
              foodforthoughtqno: this.foodforthoughtQNo,
              participantsentiment: this.useranalysisinput,
              assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
              feedback: this.feedback,
              submitprove: this.submitprove,
              analysisshow: this.analysisshow,
              kpivaluearray: this.kpivaluearray,
              languageid: this.languageid,

            },
            panelClass: 'custom-dialog-container',
            position: { top: '20px' },
          });
          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              this.newItemEvent.emit('report');
            }
          });
        }
      }
      else {
        if (this.languageselect.toLowerCase() == 'EU') {
          this._alert.error("To move ahead finish Food For Thought section");
        } else {
          this._alert.error("To move ahead finish Food For Thought section");
        } return;
      }
    } else if (this.noofattempt != '1') {
      if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
        if (this.languageselect.toLowerCase() == 'EU') {
          this._alert.error("To move ahead, kindly Write your analysis");
        } else {
          this._alert.error("To move ahead, kindly Write your analysis");
        } return;
      } else {
        const dialogRef = this.dialog.open(HrpgamedecisionchecklistPopup, {
          data: {
            class: 'p-0',
            foodforthoughtqno: this.foodforthoughtQNo,
            participantsentiment: this.useranalysisinput,
            assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
            feedback: this.feedback,
            submitprove: this.submitprove,
            analysisshow: this.analysisshow,
            kpivaluearray: this.kpivaluearray,
            languageid: this.languageid,

          },
          panelClass: 'custom-dialog-container',
          position: { top: '20px' },
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.newItemEvent.emit('report');
          }
        });
      }
    }


  }

}

@Component({
  selector: 'app-hrpgamedecisionchecklistpopup',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: '../../../common/submit-popup/submitpopup.component.html',
  styleUrls: ['../../../common/submit-popup/submitpopup.component.scss'],

})

export class HrpgamedecisionchecklistPopup extends AbstractComponent {
  showtab: boolean = true;
  resultarray: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<HrpgamedecisionchecklistPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.checkloading = true;
    let apiname = '/hrplanningnew/singleinputhrplanningnew';
    let decisionsubmitData = {
      "ae49": "yes"
    }

    this._api.Languagedatawrite("hrplanningnew", 1,
      decisionsubmitData, apiname, 'hrplanningnewcmid', this.languageselect, this.data.languageid, 'hrplanningnewlmid').subscribe((data: any) => {

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "HRP New").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "HRP New").subscribe((data: any) => {

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
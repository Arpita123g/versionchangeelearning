import { Component, EventEmitter, Inject, Output } from '@angular/core';
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
import { ProductconsumerassesmentserviceService } from 'src/app/service/assesment/productconsumergame/productconsumerassesmentservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-consumerdecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumerdecisionchecklist.component.html',
  styleUrls: ['./consumerdecisionchecklist.component.scss']
})
export class ConsumerdecisionchecklistComponent extends AbstractComponent {
  useranalysisinput: string = "";
  analysisshow: boolean = false;
  disabled: boolean = false;
  inputdatacheckvalue: boolean = false;
  resultarray: any = [];
  result: any = [];
  foodforthoughtQNo: number = 0;
  dropdownvalue: any = [];
  roundname: string = "";
  playername: string = '';
  isClass: boolean[] = [false, true, false];
  optional: any[] = [];
  optionalcase = ["incomestatus", "situationalstatus", "socialstatus", "gamestatus", "foodforthoughtstatus"]
  previousResulList: any = []
  errorlist: any = []
  responseresultcm: any = [];
  assesment: string = "";
  feedback: string = "";
  assesmentbody: string = "";
  submitprove: string = "";
  responseresultdatabase: any = [];
  languageid: number = 0; // Initialize with a valid number
  useranalysisvalue: any = {};
  foodforthought: boolean = true;
  language: any = [];

  cellnamearray = ['w76', 'w77', 'w78', 'w79', 'y11', 'y12', 'y13', 'y14',//7
    'w80', 'y37', 'y38', 'y43', 'y44', 'y45', 'w50',//14
    'w52', 'y55', 'y56', 'y57', 'w64', 'w81', 'w70', 'w71', 'w72', 'w73', 'w74',//25
    'p22', 'p34', 'p27',]

  // defaultvalue = ['25-34yrs', 'Both', 'Male', 'NCCS A', 'Hindi', 'English', 'Telugu', 'Marathi', 'Action/Adventure',
  //   'Cultural Norms', 'Ease of use', 'Leaderboards & Activity Feeds', 'Community', 'Social Media Integration', 'Bohemian',
  //   'Kills Boredom', 'Social Media', 'Movies/TV Shows', 'Messaging Apps', 'Game House', 'Freemium Games', 'Yes', 'No', 'Yes', 'No', 'Yes'
  // ]

  blankInputMessage: string[] = []

  @Output() newItemEvent = new EventEmitter<any>();
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private productconsumerassesmentservice: ProductconsumerassesmentserviceService
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
      this.fetchDecisiondataList(this.noofattempt);
    }

  }


  getPreviousData(attempt: string) {
    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.cellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0].consumerbehaviournewdata[this.cellnamearray[i]];
              }
              this.fetchDecisiondataList(this.noofattempt);
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


  fetchDecisiondataList(attempt: string) {
    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata;
              this.responseresultdatabase = data.resultList[0].consumerbehaviournewdata;
              let roundvalue = "round" + Number(attempt);
              this._global.casemanagementid.next(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewcmid);
              this.foodforthoughtQNo = data.resultList[0].consumerbehaviournewdata.t77;
              this.submitprove = data.resultList[0].consumerbehaviournewdata.t76;
              this.language = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];
              this.languageid = data.resultList[0].consumerBehaviourNewLM.consumerbehaviournewlmid;
              this.blankInputMessage = [this.language.b190, this.language.b191, this.language.b192, this.language.b193,
              this.language.b194 + ' 1', this.language.b195 + ' 2', this.language.b196 + ' 3', this.language.b197 + ' 4', this.language.b87,
              this.language.b198 + ' 1', this.language.b199 + ' 2', this.language.b200 + ' 1', this.language.b201 + ' 2',
              this.language.b202 + ' 3', this.language.b118, this.language.b135, this.language.b203 + ' 1', this.language.b204 + ' 2',
              this.language.b205 + ' 3', this.language.b150, this.language.b164, this.language.b176, this.language.b177, this.language.b178,
              this.language.b179, this.language.b180
              ];
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }
              // this.responseresultcm = data.resultList[0].consumerBehaviournewCM;
              if (data.resultList[0].aiAssessmentMaster != null) {
                let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }

              for (let i = 0; i < this.cellnamearray.length; i++) {
                this.result[i] = data.resultList[0].consumerbehaviournewdata[this.cellnamearray[i]];
                let roundvalue = "round" + Number(this.noofattempt);

                if (data.resultList[0].aiAssessmentMaster != null) {
                  let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                  if (analysisshowdata == 'yes') {
                    this.analysisshow = true
                  } else {
                    this.analysisshow = false;
                  }
                }

                if ((this.result[i] == "") || (this.result[i] == null)) {
                  this.result[i] = "-";
                }
                if (this.cellnamearray[i] == 'w79') {
                  // let value = data.resultList[0].w25;
                  // if (((data.resultList[0].w25 == 'No') || (data.resultList[0].w25 == 'null') || (data.resultList[0].w25 == null)) &&
                  //   ((data.resultList[0].w26 == 'No') || (data.resultList[0].w26 == 'null') || (data.resultList[0].w26 == null)) &&
                  //   ((data.resultList[0].w27 == 'No') || (data.resultList[0].w27 == 'null') || (data.resultList[0].w27 == null))) {
                  //   this.result[i] = '-'
                  // }
                  const values = [data.resultList[0].consumerbehaviournewdata.w25, data.resultList[0].consumerbehaviournewdata.w26, data.resultList[0].consumerbehaviournewdata.w27];
                  if (values.every(v => v === 'No' || v === 'null' || v === null)) {
                    this.result[i] = '-';
                  }

                }
                if (this.cellnamearray[i] == 'w81') {
                  // let value = data.resultList[0].w67;
                  // if (((data.resultList[0].w66 == 'No') || (data.resultList[0].w66 == 'null') || (data.resultList[0].w66 == null)) &&
                  //   ((data.resultList[0].w67 == 'No') || (data.resultList[0].w67 == 'null') || (data.resultList[0].w67 == null)) &&
                  //   ((data.resultList[0].w68 == 'No') || (data.resultList[0].w68 == 'null') || (data.resultList[0].w68 == null))) {
                  //   this.result[i] = '-'
                  // }
                  const value1 = [data.resultList[0].consumerbehaviournewdata.w66, data.resultList[0].consumerbehaviournewdata.w67, data.resultList[0].consumerbehaviournewdata.w68];
                  if (value1.every(v1 => v1 === 'No' || v1 === 'null' || v1 === null)) {
                    this.result[i] = '-';
                  }
                }

              }
              if ((this.result[21] == "No") && (this.result[22] == "No") && (this.result[23] == "No") && (this.result[24] == "No") && (this.result[25] == "No")) {
                for (let i = 21; i < 26; i++) {
                  this.result[i] = "-";
                }
              }
              this.roundname = this.languageselect.toLowerCase() === 'french' ? "Ronde " + attempt : "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'french' ? "Ronde " + i : "Round " + i;
                }
              }

              for (let i = 0; i < this.cellnamearray.length; i++) {
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
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {

                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }
              this.useranalysisSubmit();
            }
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

  useranalysisSubmit() {
    this.feedback = this.productconsumerassesmentservice.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
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
    this.fetchDecisiondataList(attempt[1]);
  }

  consumerdecisionchecklistpopup() {
    this.inputDataCheck();
    // this.saveDecisionChecklist();
  }



  inputDataCheck() {
    this.errorlist = [];
    for (let i = 0; i < this.cellnamearray.length; i++) {
      if (this.result[i] == "-") {
        if (this.languageselect.toLowerCase() == 'french') {
          this.errorlist.push("Pour avancer, veuillez prendre vos décisions en" + this.blankInputMessage[i])
        } else {
          this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
        }
        this.inputdatacheckvalue = true;
      }
    }

    if (this.errorlist.length > 0) {
      this.inputdatacheckvalue = true;
    }

    if (this.inputdatacheckvalue == false) {
      this.saveDecisionChecklist();
    }
    else {
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
      if (this.languageselect.toLowerCase() == 'french') {
        this._alert.error("Pour avancer, veuillez écrire votre analyse");
      } else {
        this._alert.error("To move ahead, kindly Write your analysis");
      }
      return;
    }

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 12) {
      if (this.languageselect.toLowerCase() == 'french') {
        this._alert.error("Pour avancer, terminez la section Nourriture pour la pensée");
      } else {
        this._alert.error("To move ahead finish Food For Thought section");
      } return;
    }

    const openDialog = () => {
      const dialogRef = this.dialog.open(ConsumerdecisionchecklistpopupComponent, {
        data: {
          class: 'p-0',
          foodforthoughtqno: this.foodforthoughtQNo,
          participantsentiment: this.useranalysisinput,
          assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
          feedback: this.feedback,
          submitprove: this.submitprove,
          analysisshow: this.analysisshow,
          resultarray: this.result,
          languageid: this.languageid,
        },
        // panelClass: 'custom-dialog-container'
        panelClass: 'centertop-dialog',
        position: { top: '20px' }
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
  //     if (this.foodforthoughtQNo == 12) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(ConsumerdecisionchecklistpopupComponent, {
  //           data: {
  //             class: 'p-0',
  //             foodforthoughtqno: this.foodforthoughtQNo,
  //             participantsentiment: this.useranalysisinput,
  //             assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //             feedback: this.feedback,
  //             submitprove: this.submitprove,
  //             analysisshow: this.analysisshow,
  //             resultarray: this.result,

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
  //       const dialogRef = this.dialog.open(ConsumerdecisionchecklistpopupComponent, {
  //         data: {
  //           class: 'p-0',
  //           foodforthoughtqno: this.foodforthoughtQNo,
  //           participantsentiment: this.useranalysisinput,
  //           assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //           feedback: this.feedback,
  //           submitprove: this.submitprove,
  //           analysisshow: this.analysisshow,
  //           resultarray: this.result,

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

@Component({
  selector: 'app-consumerdecisionchecklistpopup',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: '../../../common/submit-popup/submitpopup.component.html',
  styleUrls: ['../../../common/submit-popup/submitpopup.component.scss'],

})
export class ConsumerdecisionchecklistpopupComponent extends AbstractComponent {
  showtab: boolean = true;
  resultarray: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConsumerdecisionchecklistpopupComponent>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  save() {
    this.checkloading = true;
    let apiname = '/consumerbehaviournew/singleinputconsumerbehaviournew';
    let decisionsubmitData = {
      "t76": "yes"
    }
    this._api.Languagedatawrite("consumerbehaviournew", 1,
      decisionsubmitData, apiname, 'consumerbehaviournewcmid', this.languageselect, this.data.languageid, 'consumerbehaviournewlmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.resultarray[26] == "-" ? "0" : (this.data.resultarray[26] * 100).toFixed(1),
            this.data.resultarray[28] == "-" ? "0" : (this.data.resultarray[28] * 100).toFixed(1),
            (this.data.resultarray[27] * 100).toFixed(1) == "-" ? "0" : (this.data.resultarray[27]), 'update', this.noofattempt)

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Product & Consumer New").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => { this.checkloading = false; })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Product & Consumer New").subscribe((data: any) => {

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

      }, (error: any) => { this.checkloading = false; })

  }

  close() {
    this.dialogRef.close(false);
  }

}
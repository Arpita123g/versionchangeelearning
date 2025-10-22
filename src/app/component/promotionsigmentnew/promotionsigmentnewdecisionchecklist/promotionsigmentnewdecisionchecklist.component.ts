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
import { PromotionsassesmentserviceService } from 'src/app/service/assesment/promotionsegment/promotionassesmentservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promotionsigmentnewdecisionchecklist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promotionsigmentnewdecisionchecklist.component.html',
  styleUrls: ['./promotionsigmentnewdecisionchecklist.component.scss']
})
export class PromotionsigmentnewdecisionchecklistComponent extends AbstractComponent {
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
  resultarray: any = [];
  foodforthought: boolean = true;
  optionalcase: any = ["foodforthoughtstatus", "onlinestatus", "moderntradestatus", "reatilersstatus"]
  language: any = [];
  languageid: number = 0; // Initialize with a valid number


  databasecellnamearray: any = [
    'x20', 'x21', 'x22', 'x23', 'x24', 'x25', 'x26', 'x27', 'x28',
    'z23', 'x34', 'x35', 'x36', 'x37', 'x38', 'z24', 'z25',
    'x47', 'x48', 'x49', 'x50', 'x51', 'x52', 'x53', 'x54',
    's32', 's33', 's38',
  ]

  blankInputMessage: string[] = [
  ]

  @Output() newItemEvent = new EventEmitter<any>();
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private promotionsassesmentservice: PromotionsassesmentserviceService

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
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0].promotionsnewdata[this.databasecellnamearray[i]];
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
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.language = data.resultList[0].promoTionsNewLM[this.languageselect.toLowerCase()];
              this.languageid = data.resultList[0].promoTionsNewLM.promotionsnewlmid;

              this.blankInputMessage = [this.language.b119, this.language.b120,
              this.language.b121, this.language.b122, this.language.b123,
              this.language.b124, this.language.b125, this.language.b126,
              this.language.b127, this.language.b51, this.language.b128,
              this.language.b129, this.language.b130, this.language.b131,
              this.language.b132, this.language.b53, this.language.b54,
              this.language.b133, this.language.b134, this.language.b135,
              this.language.b136, this.language.b137, this.language.b138,
              this.language.b139, this.language.b140,
              ];

              this.foodforthoughtQNo = data.resultList[0].z21;
              this.submitprove = data.resultList[0].promotionsnewdata.z20;
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }
              this.responseresultcm = data.resultList[0].promoTionsNewCM.promotionsnewperioddata;
              this.responseresultdatabase = data.resultList[0].promotionsnewdata;
              let roundvalue = "round" + Number(attempt);

              if (data.resultList[0].aiAssessmentMaster != null) {
                let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0].promotionsnewdata[this.databasecellnamearray[i]];
                let roundvalue = "round" + Number(this.noofattempt);


                if (data.resultList[0].aiAssessmentMaster != null) {
                  let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                  if (analysisshowdata == 'yes') {
                    this.analysisshow = true
                  } else {
                    this.analysisshow = false;
                  }
                }
                if (i < 9) {
                  if (this.result[i] == "") {
                    this.result[i] = "-";
                  }
                }

              }
              if ((this.result[10] == 0) && (this.result[11] == 0) && (this.result[12] == 0) && (this.result[13] == 0)
                && (this.result[14] == 0)) {
                for (let i = 10; i < 15; i++) {
                  this.result[i] = "-";
                }
              } else {
                for (let i = 10; i < 15; i++) {
                  if (this.result[i] == 0) {
                    this.result[i] = 'No'
                  } else {
                    this.result[i] = 'Yes'
                  }
                }
              }
              if ((this.result[17] == 0) && (this.result[18] == 0) && (this.result[19] == 0)) {
                for (let i = 17; i < 20; i++) {
                  this.result[i] = "-";
                }
              } else {
                for (let i = 17; i < 20; i++) {
                  if (this.result[i] == 0) {
                    this.result[i] = 'No'
                  } else {
                    this.result[i] = 'Yes'
                  }
                }
              }
              if ((this.result[23] == 0) && (this.result[24] == 0)) {
                for (let i = 23; i < 25; i++) {
                  this.result[i] = "-";
                }
              } else {
                for (let i = 23; i < 25; i++) {
                  if (this.result[i] == 0) {
                    this.result[i] = 'No'
                  } else {
                    this.result[i] = 'Yes'
                  }
                }
              }
              for (let i = 0; i < 9; i++) {
                if (this.result[i] != "-") {
                  this.result[i] = (Number(this.result[i]) * 100) + "%"
                }
              } for (let i = 20; i < 23; i++) {
                if (this.result[i] != "-") {
                  this.result[i] = (Number(this.result[i]) * 100) + "%"
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

              this.foodforthoughtQNo = data.resultList[0].promotionsnewdata.z21;
              this._global.casemanagementid.next(data.resultList[0].promoTionsNewCM.promotionsnewcmid);


              this.roundname = this.languageselect.toLowerCase() === 'EU' ? "Round" + attempt : "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round " + i : "Round " + i;
                }
              }
              this.playername = data.resultList[0].userRegister.username;
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus[this.optionalcase[i]];
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

    this.feedback = this.promotionsassesmentservice.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);

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
        if (this.languageselect.toLowerCase() == 'EU') {
          this.errorlist.push("To move ahead, kindly make your decisions in" + this.blankInputMessage[i])
        } else {
          this.errorlist.push("To move ahead, kindly make your decisions in" + this.blankInputMessage[i])
        }
        this.inputdatacheckvalue = true;
      }

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
      if (this.languageselect.toLowerCase() == 'EU') {
        this._alert.error("To move ahead, kindly Write your analysis");
      } else {
        this._alert.error("To move ahead, kindly Write your analysis");
      }
      return;
    }

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 10) {
      if (this.languageselect.toLowerCase() == 'EU') {
        this._alert.error("To move ahead finish Food For Thought section");
      } else {
        this._alert.error("To move ahead finish Food For Thought section");
      }
      return;
    }

    const openDialog = () => {
      const dialogRef = this.dialog.open(PromotionsigmentnewpopupComponent, {
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
  //     if (this.foodforthoughtQNo == 10) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(PromotionsigmentnewpopupComponent, {
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
  //       const dialogRef = this.dialog.open(PromotionsigmentnewpopupComponent, {
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

//popup


@Component({
  selector: 'app-promotionsigmentnewpopup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promotionsigmentnewpopup.html',
  styleUrls: ['./promotionsigmentnewdecisionchecklist.component.scss']
})

export class PromotionsigmentnewpopupComponent extends AbstractComponent {

  showtab: boolean = true;
  resultarray: any = [];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PromotionsigmentnewpopupComponent>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  save() {
    this.checkloading = true;
    let apiname = '/promotionsnew/singleinputpromotionsnew';
    let decisionsubmitData = {
      "z20": "yes"
    }
    this._api.Languagedatawrite("promotionsnew", 1,
      decisionsubmitData, apiname, 'promotionsnewcmid',this.languageselect, this.data.languageid, 'promotionsnewlmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.resultarray[27] == "-" ? "0" : (this.data.resultarray[27] * 100).toFixed(0),
            this.data.resultarray[26] == "-" ? "0" : (this.data.resultarray[26] * 100).toFixed(0),
            this.data.resultarray[25] == "-" ? "0" : (this.data.resultarray[25]), 'update', this.noofattempt)

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Promotions & Segments New").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => { this.checkloading = false; })
  }
  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Promotions & Segments New").subscribe((data: any) => {

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
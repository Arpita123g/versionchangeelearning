import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { ChangemanagementassesmentService } from 'src/app/service/assesment/changemanagement/changemanagementassesment.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ChangemanagementlangnewasseessmentService } from 'src/app/service/assesment/changemanagementnew/changemanagementlangnewasseessment.service';

@Component({
  selector: 'app-changemanagementnewdecisionchecklist',
  standalone: true,   
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './changemanagementnewdecisionchecklist.component.html',
  styleUrls: ['./changemanagementnewdecisionchecklist.component.scss']
})
export class ChangemanagementnewdecisionchecklistComponent extends AbstractComponent {
  roundname: string = "";
  result: any = [];
  foodforthoughtQNo: number = 0;
  dropdownvalue: any = [];
  playername: string = '';
  isClass: boolean[] = [];
  optional: any[] = [];
  @Output() newItemEvent = new EventEmitter<any>();
  errorlist: any = []
  analysisshow: boolean = true;
  inputdatacheckvalue: boolean = false;
  disabled: boolean = false;
  useranalysisinput: string = "";
  responseresultdatabase: any = [];
  previousResulList: any = []
  responseresultcm: any = [];
  submitprove: string = "";
  assesment: string = "";
  feedback: string = "";
  resultarray: any = [];
  language: any = [];
  languageid: number = 0;
  foodforthought: boolean = true;
  blankInputMessage: string[] = [];

  databasecellnamearray = ['bk6', 'bk7', 'bk8', 'bk9', 'bk10', 'bk11', 'bk12', 'bk13', 'bk14', 'bk15', 'bk16', 'bk17', 'bk18', 'bk19', 'bk20',
    'bk22', 'bk23', 'bk24', 'bk25', 'bk26', 'bk27', 'bk28', 'bk29', 'bk30', 'bk31', 'bk32', 'bk33', 'bk34', 'bk35', 'bk36',
    'bk38', 'bk39', 'bk40', 'bk41', 'bk42', 'bk43', 'bk44', 'bk45', 'bk46', 'bk47', 'bk48', 'bk49', 'bk50', 'bk51', 'bk52',
    'o52', 'z40', 'aa40',
  ]

  optionalcase = ["foodforthoughtstatus"];
  languagCommon: any = {};
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private changemanagementlangnewasseessment: ChangemanagementlangnewasseessmentService,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice)

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
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0].changemanagementnewdata[this.databasecellnamearray[i]];
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
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].changeManagementNewCM.changeManagementNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }

              this.language = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()];
              this.languagCommon = data.resultList[0].changeManagementNewLM[`common${this.languageselect.toLowerCase()}`];
              this.languageid = data.resultList[0].changeManagementNewLM.changemanagementnewlmid;

              this.blankInputMessage = [this.language.b45, this.language.b60,
              this.language.b92, this.language.b93, this.language.b94,
              this.language.b95, this.language.b96, this.language.b97,
              this.language.b73, this.language.b98, this.language.b99,
              this.language.b100, this.language.b101, this.language.b102,
              this.language.b103, this.language.b45, this.language.b60,
              this.language.b92, this.language.b93, this.language.b94,
              this.language.b95, this.language.b96, this.language.b97,
              this.language.b73, this.language.b98, this.language.b99,
              this.language.b100, this.language.b101, this.language.b102,
              this.language.b103, this.language.b45, this.language.b60,
              this.language.b92, this.language.b93, this.language.b94,
              this.language.b95, this.language.b96, this.language.b97,
              this.language.b73, this.language.b98, this.language.b99,
              this.language.b100, this.language.b101, this.language.b102,
              this.language.b103,
              ];

              let attempt = data.resultList[0].attempt;
              this.foodforthoughtQNo = data.resultList[0].changemanagementnewdata.bh7;
              this.submitprove = data.resultList[0].changemanagementnewdata.bh6;

              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }
              this.responseresultcm = data.resultList[0].changeManagementNewCM.changemanagementnewperioddata;
              console.log(" this.responseresultcm", this.responseresultcm)
              this.responseresultdatabase = data.resultList[0].changemanagementnewdata;

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
                this.result[i] = data.resultList[0].changemanagementnewdata[this.databasecellnamearray[i]];

                if (this.result[i] == "") {
                  this.result[i] = "-";
                }
              }

              this.foodforthoughtQNo = data.resultList[0].changemanagementnewdata.bh7;
              this._global.casemanagementid.next(data.resultList[0].changemanagementnewcmid);

              // this.roundname = "Round " + attempt;
              // this.roundname = this.languageselect.toLowerCase() === 'EU' ? "Round" + attempt : "Round " + attempt;

              // if (attempt > 0) {
              //   for (let i = 1; i < attempt + 1; i++) {
              //     this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round " + i : "Round " + i;
              //   }
              // }
              this.roundname = this.languagCommon?.b20 + " " + attempt;
              if (attempt > 0) {
                this.dropdownvalue = [];
                for (let i = 1; i <= attempt; i++) {
                  this.dropdownvalue.push(this.languagCommon?.b20 + " " + i);
                }
              }
              this.playername = data.resultList[0].userRegister.username;
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

              if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
                this.useranalysisSubmit();
              } else {
                this.checkloading = false;
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

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

  useranalysisSubmit() {
    this.assesment = this.changemanagementlangnewasseessment.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase, this.language);
    this.feedback = this.assesment;

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
  changemanagementdecisionchecklistpopup() {
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

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 6) {
      if (this.languageselect.toLowerCase() == 'EU') {
        this._alert.error("To move ahead finish Food For Thought section");
      } else {
        this._alert.error("To move ahead finish Food For Thought section");
      } return;
    }

    this.useranalysisSubmit();
    const openDialog = () => {
      const dialogRef = this.dialog.open(ChangemanagementnewdecisionchecklistpopupComponent, {
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

}


//.............pop-up....................          

@Component({
  selector: 'app-changemanagementnewdecisionchecklistpopup',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './changemanagementnewdecisionchecklistpopup.component.html',
  styleUrls: ['./changemanagementnewdecisionchecklist.component.scss']
})

export class ChangemanagementnewdecisionchecklistpopupComponent extends AbstractComponent {
  showtab: boolean = true;
  resultarray: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ChangemanagementnewdecisionchecklistpopupComponent>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  submitFormAndProceed() {

  }

  // save() {
  //   this.checkloading = true;
  //   let apiname = '/changemanagementnew/singleinputchangemanagementnew';
  //   let decisionsubmitData = {
  //     "bh6": "yes"
  //   }

  //   this._api.Languagedatawrite("changemanagementnew", 1,
  //     decisionsubmitData, apiname, 'changemanagementnewcmid', this.languageselect, this.data.languageid, 'changemanagementnewlmid').subscribe((data: any) => {

  //       if (data.status == "Success") {
  //         this._login.savekpivalue(this.data.resultarray[47] == "-" ? "0" : (this.data.resultarray[47] * 100).toFixed(0),
  //           this.data.resultarray[46] == "-" ? "0" : (this.data.resultarray[46] * 100).toFixed(0),
  //           this.data.resultarray[45] == "-" ? "0" : (this.data.resultarray[45]).toFixed(0), 'update', this.noofattempt)
  //         let submitprovecheck = this.data.submitprove;
  //         if (((submitprovecheck == 'no') || (submitprovecheck == 'No')) && (this.data.analysisshow == true)) {
  //           this.sendAssesmentValue();
  //         } else {
  //           this.Sharedservice.enableTab();
  //           this.checkloading = false;
  //           this.dialogRef.close(true);
  //         }
  //       }

  //       setTimeout(() => {
  //         this.checkloading = false;
  //       }, 3000);
  //     }, (error: any) => {

  //       this.driveerrorLog(error, apiname);
  //     })
  // }

  // sendfeedbackvalue() {
  //   let apiname = "/feedback/gptfeedback";
  //   this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Change Management Module New").subscribe((data: any) => {

  //     if (data.status == "Success") {
  //       this.checkloading = false
  //     }

  //   }, (error: any) => { this.checkloading = false; })
  // }
  // sendAssesmentValue() {
  //   let apiname = "/assessment/gptassessment";
  //   this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
  //     apiname, "Change Management Module New").subscribe((data: any) => {

  //       if (data.status == "Success") {

  //         setTimeout(() => {
  //           this.sendfeedbackvalue();
  //         }, 4000);
  //         setTimeout(() => {
  //           this.Sharedservice.enableTab();
  //           this.checkloading = false;
  //           this.dialogRef.close(true);
  //         }, 10000);
  //       } else {
  //         this.checkloading = false;
  //         this._alert.error(data.status);
  //       }

  //     }, (error: any) => { this.checkloading = false; })

  // }

  save() {
    this.checkloading = true;
    let apiname = '/changemanagementnew/singleinputchangemanagementnew';
    let decisionsubmitData = {
      "bh6": "yes"
    };

    this._api.Languagedatawrite("changemanagementnew", 1, decisionsubmitData, apiname, 'changemanagementnewcmid', this.languageselect, this.data.languageid, 'changemanagementnewlmid')
      .subscribe(async (data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.resultarray[47] == "-" ? "0" : (this.data.resultarray[47] * 100).toFixed(0),
            this.data.resultarray[46] == "-" ? "0" : (this.data.resultarray[46] * 100).toFixed(0),
            this.data.resultarray[45] == "-" ? "0" : (this.data.resultarray[45]).toFixed(0), 'update', this.noofattempt);

          let submitprovecheck = this.data.submitprove;
          if (((submitprovecheck == 'no') || (submitprovecheck == 'No')) && (this.data.analysisshow == true)) {
            await this.sendAssesmentValue();
          } else {
            this.Sharedservice.enableTab();
            this.checkloading = false;
            this.dialogRef.close(true);
          }
        }

        this.checkloading = false;
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      });
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    try {
      const data = await this._api.gptassessment(
        this.noofattempt,
        this.data.participantsentiment,
        this.data.assesment,
        apiname,
        "Change Management Module New"
      ).toPromise();

      if (data.status == "Success") {
        await this.sendfeedbackvalue();

        this.Sharedservice.enableTab();
        this.checkloading = false;
        this.dialogRef.close(true);
      } else {
        this.checkloading = false;
        this._alert.error(data.status);
      }
    } catch (error) {
      this.checkloading = false;
      this._alert.error('Error sending assessment data');
    }
  }

  async sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    try {
      const data = await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Change Management Module New").toPromise();

      if (data.status == "Success") {
      } else {
        this._alert.error(data.status);
      }
    } catch (error) {
      this._alert.error('Error sending feedback data');
    }
  }


  close() {
    this.dialogRef.close(false);
  }
}




import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { CrmassesmentserviceService } from 'src/app/service/crmassesmentservice.service';
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
  selector: 'app-crmgamedecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './crmgamedecisionchecklist.component.html',
  styleUrls: ['./crmgamedecisionchecklist.component.scss']
})
export class CrmgamedecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  result: any = [];
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
  languageid: number = 0; // Initialize with a valid number

  databasecellnamearray: any = [
    "al9", "al10", "al11", "al12", "al13", "al14", //5
    "al15", "al16", "al17", "al18", //9
    "al19", "al20", "al21", "al22", "al23", //14
    "al24", "al25", "al26", "al27", "al28", "al29", "al30", //21
    "al31", "al32", "al33",//24//one table

    "al100", "al101", "al102", "al103", "al104", //29
    "al105", "al106", "al107", "al108",//33
    "al46", 'al47', 'am46', 'am47', 'an46', 'an47', 'al110',//40
    'al59', 'al60', 'al61', 'al62',//44
    'b15', 'b16', 'b17', 'b18', 'b19',//49
    'al76', 'al77',//51
    'b62', 'b63', 'b64', 'b65', 'b66',//56
  ];
  blankInputMessage: any = [
    // 'Lead 1', 'Lead 2', 'Lead 3', 'Lead 4', 'Lead 5', 'Lead 6', 'Lead 7', 'Lead 8', 'Lead 9',
    // 'Lead 10', 'Lead 11', 'Lead 12', 'Lead 13', 'Lead 14', 'Lead 15', 'Lead 16', 'Lead 17', 'Lead 18', 'Lead 19', 'Lead 20',
    // 'Lead 21', 'Lead 22', 'Lead 23', 'Lead 24', 'Lead 25', 'Phone Calls', 'Personalized Email', 'Targeted Content ',
    // 'Informative Content', 'Case Studies', 'Success Stories', 'Educational Content', 'Newsletter', 'Occasional Check-ins',
    // 'High Priority, Follow-up Frequency, day', 'High Priority, Follow-up Timeline, week', 'Medium Priority, Follow-up Frequency, day',
    // 'Medium Priority, Follow-up Timeline, week', 'Low Priority, Follow-up Frequency, day', 'Low Priority, Follow-up Timeline, week', 'Cross Selling & Upselling stage',
    // 'Social Media Engagement Challenge', 'Personalized Email Newsletter', 'Webinar Series Invitation', 'Exclusive Product Demo',
    // 'Onboarding and Implementation Support', 'Ongoing Technical Support', 'Customer Relationship Management', 'Feedback Collection and Product Improvement',
    // 'Issue Resolution and Escalation', 'Allocated hours, Customer enhancement', 'Allocated hours, Lead management',
    // 'Automated Data Entry and Integration', 'Cloud-Based CRM Solution', 'Self-Service Customer Portal', 'AI-Powered Chatbots for Customer Support',
    // 'Process Standardization and Documentation'
  ];
  optionalcase: any = ['foodforthoughtstatus',];

  dataoflang: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private crmassesmentservice: CrmassesmentserviceService
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
    let apiname = '/crmgame/fetchcrmgame';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0].crmgamedata[this.databasecellnamearray[i]];
              }

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (Number(this.previousResulList[i]) == 0) {
                  this.previousResulList[i] = "-"
                } else {
                  this.previousResulList[i] = data.resultList[0].crmgamedata[this.databasecellnamearray[i]];
                }
                if ((i > 44) && (i < 50)) {
                  if (this.previousResulList[i] == 1) {
                    this.previousResulList[i] = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()].b396;
                  } else {
                    this.previousResulList[i] = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()].b397;
                  }
                }
                if ((i > 51) && (i < 57)) {
                  if (this.previousResulList[i] == 1) {
                    this.previousResulList[i] = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()].b396;
                  } else {
                    this.previousResulList[i] = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()].b397;
                  }
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
    let apiname = '/crmgame/fetchcrmgame';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].crmGameCM.crmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].crmGameCM.crmgameperioddata;
              this.responseresultdatabase = data.resultList[0].crmgamedata;
              let roundvalue = "round" + Number(attempt);
              this._global.casemanagementid.next(data.resultList[0].crmgamecmid);
              this.foodforthoughtQNo = data.resultList[0].crmgamedata.al97;
              this.submitprove = data.resultList[0].crmgamedata.al96;
              this.dataoflang = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()];
              this.blankInputMessage = [
                this.dataoflang.b79 + ' 1', this.dataoflang.b79 + ' 2', this.dataoflang.b79 + ' 3',
                this.dataoflang.b79 + ' 4', this.dataoflang.b79 + ' 5', this.dataoflang.b79 + ' 6',
                this.dataoflang.b79 + ' 7', this.dataoflang.b79 + ' 8', this.dataoflang.b79 + ' 9',
                this.dataoflang.b79 + ' 10', this.dataoflang.b79 + ' 11', this.dataoflang.b79 + ' 12',
                this.dataoflang.b79 + ' 13', this.dataoflang.b79 + ' 14', this.dataoflang.b79 + ' 15',
                this.dataoflang.b79 + ' 16', this.dataoflang.b79 + ' 17', this.dataoflang.b79 + ' 18',
                this.dataoflang.b79 + ' 19', this.dataoflang.b79 + ' 20', this.dataoflang.b79 + ' 21',
                this.dataoflang.b79 + ' 22', this.dataoflang.b79 + ' 23', this.dataoflang.b79 + ' 24',
                this.dataoflang.b79 + ' 25', this.dataoflang.b147, this.dataoflang.b148,
                this.dataoflang.b149, this.dataoflang.b150, this.dataoflang.b151,
                this.dataoflang.b152, this.dataoflang.b153, this.dataoflang.b154,
                this.dataoflang.b155, this.dataoflang.b221, this.dataoflang.b222,
                this.dataoflang.b223, this.dataoflang.b224, this.dataoflang.b225, this.dataoflang.b226,
                this.dataoflang.b158, this.dataoflang.b166, this.dataoflang.b167, this.dataoflang.b168,
                this.dataoflang.b169, this.dataoflang.b188, this.dataoflang.b189, this.dataoflang.b190,
                this.dataoflang.b191, this.dataoflang.b192, this.dataoflang.b213, this.dataoflang.b214,
                this.dataoflang.b215, this.dataoflang.b199, this.dataoflang.b200, this.dataoflang.b201,
                this.dataoflang.b202, this.dataoflang.b203
              ]
              this.languageid = data.resultList[0].crmGameLM.crmgamelmid;

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0].crmgamedata[this.databasecellnamearray[i]];
                if ((i > 44) && (i < 50)) {
                  if (this.result[i] == 1) {
                    this.result[i] = this.dataoflang.b396;
                  } else {
                    this.result[i] = this.dataoflang.b397;
                  }
                }
                if ((i > 51) && (i < 57)) {
                  if (this.result[i] == 1) {
                    this.result[i] = this.dataoflang.b396;
                  } else {
                    this.result[i] = this.dataoflang.b397;
                  }
                }
              }

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (Number(this.result[i]) == 0) {
                  this.result[i] = "-"
                }
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
                const caseStatus = data.resultList[0].crmGameCM.crmGameCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
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

              this.roundname = this.dataoflang.b409+" " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = this.dataoflang.b409+" " + i;
                }
              }

              if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
                this.useranalysisSubmit();
              } else {
                this.checkloading = false;
              }

              this.kpivaluearray = [Number((data.resultList[0].crmgamedata.s31)).toFixed(0),
              Number((data.resultList[0].crmgamedata.s29)).toFixed(0),
              Number((data.resultList[0].crmgamedata.s36)).toFixed(0)]
            }
            this.checkloading = false;
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

    this.feedback = this.crmassesmentservice.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);

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
        if (this.languageselect.toLowerCase() == 'hindi') {
          this.errorlist.push("आगे बढ़ने के लिए कृपया अपने निर्णय सोच समझकर लें। " + this.blankInputMessage[i])
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
      if (this.languageselect.toLowerCase() == 'hindi') {
        this._alert.error("आगे बढ़ने के लिए कृपया अपना विश्लेषण लिखें");
      } else {
        this._alert.error("To move ahead, kindly Write your analysis"); }
     
      return;
    }

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 9) {
      if (this.languageselect.toLowerCase() == 'hindi') {
        this._alert.error("आगे बढ़ने के लिए विचारोत्तेजक विषय अनुभाग को समाप्त करें");
      } else {
        this._alert.error("To move ahead finish Food For Thought section"); }
     
      
      return;
    }

    const openDialog = () => {
      const dialogRef = this.dialog.open(CrmgamedecisionsubmitPopup, {
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
    };

    openDialog();
  }
  // saveDecisionChecklist() {
  //   if ((this.noofattempt == "1" && this.foodforthoughtQNo != 9)) {
  //     this._alert.error("To move ahead finish Food For Thought section");
  //     return;
  //   }

  //   if (this.analysisshow && this.useranalysisinput.length < 10) {
  //     this._alert.error("To move ahead, kindly Write your analysis");
  //     return;
  //   }

  //   const dialogRef = this.dialog.open(CrmgamedecisionsubmitPopup, {
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


// CRM Decisionsubmitpopup

@Component({
  selector: 'app-crmgamedecisionsubmitpopup',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, TippyDirective],
  templateUrl: '../../../common/submit-popup/submitpopup.component.html',
  styleUrls: ['../../../common/submit-popup/submitpopup.component.scss'],

})
export class CrmgamedecisionsubmitPopup extends AbstractComponent {

  showtab: boolean = true;
  // isButtonDisabled: boolean = false;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CrmgamedecisionsubmitPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.isButtonDisabled = true;
    this.checkloading = true;
    let apiname = '/crmgame/singleinputcrmgame';
    let decisionsubmitData = {
      "al96": "yes"
    }
    this._api.Languagedatawrite("crmgame", 1,
      decisionsubmitData, apiname, 'crmgamecmid', this.languageselect, this.data.languageid,'crmgamelmid').subscribe((data: any) => {

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
        } else {
          this.isButtonDisabled = false;
        }

      }, (error: any) => {
        this.isButtonDisabled = false;
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }

  async sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "CRM").subscribe((data: any) => {

      if (data.status == "Success") {
      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "CRM").subscribe((data: any) => {

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
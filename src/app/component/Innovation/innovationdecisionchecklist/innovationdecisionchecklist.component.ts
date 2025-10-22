import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { InnovationassesmentService } from 'src/app/service/assesment/innovation/innovationassesment.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-innovationdecisionchecklist',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,FormsModule],
  templateUrl: './innovationdecisionchecklist.component.html',
  styleUrls: ['./innovationdecisionchecklist.component.scss']
})
export class InnovationdecisionchecklistComponent extends AbstractComponent {
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
  optionalcase: any = ['foodforthoughtstatus',];
  blankInputMessage: any;
  foodforthought:boolean = true;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private innovationassesmentService: InnovationassesmentService
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


  databasecellnamearray: string[] = [
    "c8", "b80", "b81", "b82", "b83", "b84", "b85", "ae23", "ae24", "ae25",//9
    "b15", "b16", "b17", "b18", "b19", "b20",//15
    "ae102", "ae103", "ae104", "ae105", "ae106", "ae107", "ae108", "ae109", "ae110", "ae111",//25
    "ae112", "ae113", "ae114", "ae115", "ae116",//30
    "ae56", "af56", "ag56", "ae58", "b56", "b57", "b58", "b61", "b62", "b63",//40
    "b64", "b65", "ae118", "ae119",//44
    "e25", "e26", "e27", "e28", "e29", "e30", //50
    "d15", "d16", "d17", "d18", "d19", "d20", //56
    "c56", "c57", "c58", "c61", "c62", "c63", "c64", "c65" //64
  ]
  periodiccellname: string[] = [
    "e19", "e20", "e21", "e22", "e23", "e24"//70
  ];


  getPreviousData(attempt: string) {
    let apiname = '/innovationgame/fetchinnovationgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0][this.databasecellnamearray[i]];
              }
              for (let i = 1; i < 7; i++) {
                if (this.previousResulList[i] == 0) {
                  this.previousResulList[i] = 'No'
                } else {
                  this.previousResulList[i] = 'Yes'
                }
              }
              for (let i = 10; i < 16; i++) {
                if (this.previousResulList[i] == 0) {
                  this.previousResulList[i] = 'No'
                } else {
                  this.previousResulList[i] = 'Yes'
                }
              }
              for (let i = 35; i < 43; i++) {
                if (this.previousResulList[i] == 0) {
                  this.previousResulList[i] = 'No'
                } else {
                  this.previousResulList[i] = 'Yes'
                }
              }
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (Number(this.previousResulList[i]) == 0) {
                  this.previousResulList[i] = "-"
                } else {
                  this.previousResulList[i] = data.resultList[0][this.databasecellnamearray[i]];
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
    let apiname = '/innovationgame/fetchinnovationgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].innovationGameCM.innovationGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].innovationGameCM;

              this.responseresultdatabase = data.resultList[0];
              let roundvalue = "round" + Number(attempt);
              this._global.casemanagementid.next(data.resultList[0].innovationgamecmid);
              this.foodforthoughtQNo = data.resultList[0].ae90;
              this.submitprove = data.resultList[0].ae89;

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
                const caseStatus = data.resultList[0].innovationGameCM.innovationGameCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellnamearray[i]];
              }
              for (let i = 65; i < 71; i++) {
                this.result[i] = data.resultList[0].innovationGameCM[this.periodiccellname[i-65]];
              }
              console.log("result",this.result)

              for (let i = 1; i < 7; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = 'Yes'
                } else {
                  this.result[i] = 'No'
                }
              }
              for (let i = 10; i < 16; i++) {
                if (this.result[i] == 0) {
                  this.result[i] = 'No'
                } else {
                  this.result[i] = 'Yes'
                }
              }
              for (let i = 35; i < 43; i++) {
                if (this.result[i] == 0) {
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

              this.kpivaluearray = [Number((data.resultList[0].k45)).toFixed(0),
              Number((data.resultList[0].j45)).toFixed(0),
              Number((data.resultList[0].j49)).toFixed(0)]
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

    this.feedback = this.innovationassesmentService.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
    // console.log('assesmentlist', this.feedback);

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
    // for (let i = 0; i < this.databasecellnamearray.length; i++) {
      if (this.result[0] == "-") {
        this.errorlist.push("To move ahead, kindly make your decisions in product");
        this.inputdatacheckvalue = true;
      }
     if ((this.result[1] == "No")&&(this.result[2] == "No")&&(this.result[3] == "No")&&
      (this.result[4] == "No")&&(this.result[5] == "No")&&(this.result[6] == "No")) {
        this.errorlist.push("To move ahead, kindly make your decisions in compliance");
        this.inputdatacheckvalue = true;
      }
      if ((this.result[7] == 0)||(this.result[8] == 0)||(this.result[9] == 0)) {
        this.errorlist.push("To move ahead, kindly make your decisions in development");
        this.inputdatacheckvalue = true;
      }
     if((this.result[10] == "No")&&(this.result[11] == "No")&&(this.result[12] == "No")&&
      (this.result[13] == "No")&&(this.result[14] == "No")&&(this.result[15] == "No")) {
        this.errorlist.push("To move ahead, kindly make your decisions in features");
        this.inputdatacheckvalue = true;
      }
      if ((this.result[35] == "No")&&(this.result[36] == "No")&&(this.result[37] == "No")) {
        this.errorlist.push("To move ahead, kindly make your decisions in distribution");
        this.inputdatacheckvalue = true;
      }
      if ((this.result[38] == "No")&&(this.result[39] == "No")&&(this.result[40] == "No")&&
      (this.result[41] == "No")&&(this.result[42] == "No")) {
        this.errorlist.push("To move ahead, kindly make your decisions in collaboration");
        this.inputdatacheckvalue = true;
      }
      if (this.result[43] == "Not Selected") {
        this.errorlist.push("To move ahead, kindly make your decisions in technology adoption");
        this.inputdatacheckvalue = true;
      }
      if (this.result[44] == "Not Selected") {
        this.errorlist.push("To move ahead, kindly make your decisions in continous improvement");
        this.inputdatacheckvalue = true;
      }

    // }

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
  
    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 12) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
  
    const openDialog = () => {
      const dialogRef = this.dialog.open(InnovationdecisionchecklistPopup, {
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
  //     if (this.foodforthoughtQNo == 12) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(InnovationdecisionchecklistPopup, {
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
  //       const dialogRef = this.dialog.open(InnovationdecisionchecklistPopup, {
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


// Innovation

@Component({
  selector: 'app-innovationdecisionchecklistpopup',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule],
  templateUrl: './innovationdecisionchecklistpopup.html',
  styleUrls: ['./innovationdecisionchecklist.component.scss']
})
export class InnovationdecisionchecklistPopup extends AbstractComponent {

  showtab: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<InnovationdecisionchecklistPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.checkloading = true;
    let apiname = '/innovationgame/singleinputinnovationgame';
    let decisionsubmitData = {
      "ae89": "yes"
    }
    this._api.promotionsdatawrite("innovationgame", 1,
      decisionsubmitData, apiname, 'innovationgamecmid').subscribe((data: any) => {

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Innovation").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Innovation").subscribe((data: any) => {

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

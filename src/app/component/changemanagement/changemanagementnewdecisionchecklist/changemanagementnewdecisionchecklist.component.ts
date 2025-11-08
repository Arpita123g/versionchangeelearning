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
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-changemanagementnewdecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
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
  foodforthought:boolean = true;
  databasecellnamearray = ['bk6', 'bk7', 'bk8', 'bk9', 'bk10', 'bk11', 'bk12', 'bk13', 'bk14', 'bk15', 'bk16', 'bk17', 'bk18', 'bk19', 'bk20',
    'bk22', 'bk23', 'bk24', 'bk25', 'bk26', 'bk27', 'bk28', 'bk29', 'bk30', 'bk31', 'bk32', 'bk33', 'bk34', 'bk35', 'bk36',
    'bk38', 'bk39', 'bk40', 'bk41', 'bk42', 'bk43', 'bk44', 'bk45', 'bk46', 'bk47', 'bk48', 'bk49', 'bk50', 'bk51', 'bk52',
    'o52', 'z40', 'aa40',
  ]

  defaultvalue = ['25-34yrs', 'Both', 'Male', 'NCCS A', 'Hindi', 'English', 'Telugu', 'Marathi', 'Action/Adventure',
    'Cultural Norms', 'Ease of use', 'Leaderboards & Activity Feeds', 'Community', 'Social Media Integration', 'Bohemian',
    'Kills Boredom', 'Social Media', 'Movies/TV Shows', 'Messaging Apps', 'Game House', 'Freemium Games', 'Yes', 'No', 'Yes', 'No', 'Yes']

  optionalcase = ["foodforthoughtstatus"]

  blankInputMessage = ['Organization Wide Intervention', 'Individual Activity Intervention', 'Individual Actvity, Kabir', 'Individual Actvity, Anne', 'Individual Actvity, Rajas',
    'Individual Actvity, Priya', 'Individual Actvity, Neha', 'Individual Actvity, Rajat', 'Group Activity Intervention', 'Group Actvity, Kabir', 'Group Actvity, Anne', 'Group Actvity, Rajas',
    'Group Actvity, Priya', 'Group Actvity, Neha', 'Group Actvity, Rajat', 'Organization Wide Intervention', 'Individual Activity Intervention', 'Individual Actvity, Kabir', 'Individual Actvity, Anne',
    'Individual Actvity, Rajas', 'Individual Actvity, Priya', 'Individual Actvity, Neha', 'Individual Actvity, Rajat', 'Group Activity Intervention', 'Group Actvity, Kabir', 'Group Actvity, Anne', 'Group Actvity, Rajas',
    'Group Actvity, Priya', 'Group Actvity, Neha', 'Group Actvity, Rajat', 'Organization Wide Intervention', 'Individual Activity Intervention', 'Individual Actvity, Kabir', 'Individual Actvity, Anne', 'Individual Actvity, Rajas',
    'Individual Actvity, Priya', 'Individual Actvity, Neha', 'Individual Actvity, Rajat', 'Group Activity Intervention', 'Group Actvity, Kabir', 'Group Actvity, Anne', 'Group Actvity, Rajas', 'Group Actvity, Priya', 'Group Actvity, Neha',
    'Group Actvity, Rajat'
  ]


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private changemanagementassesment: ChangemanagementassesmentService,
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
    let apiname = '/changemanagement/fetchchangemanagement';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0][this.databasecellnamearray[i]];
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
    let apiname = '/changemanagement/fetchchangemanagement';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].changeManagementCM.changeManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.foodforthoughtQNo = data.resultList[0].bh7;
              this.submitprove = data.resultList[0].bh6;
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }
              this.responseresultcm = data.resultList[0].changeManagementCM;
              this.responseresultdatabase = data.resultList[0];
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
                this.result[i] = data.resultList[0][this.databasecellnamearray[i]];

                if (this.result[i] == "") {
                  this.result[i] = "-";
                }
              }

              this.foodforthoughtQNo = data.resultList[0].bh7;
              this._global.casemanagementid.next(data.resultList[0].changemanagementcmid);

              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
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

              this.useranalysisSubmit();
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
    this.feedback = this.changemanagementassesment.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
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
        this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
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
      this._alert.error("To move ahead, kindly Write your analysis");
      return;
    }
  
    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 6) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
  
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
  //   if (this.noofattempt == "1") {
  //     if (this.foodforthoughtQNo == 6) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(ChangemanagementnewdecisionchecklistpopupComponent, {
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
  //       const dialogRef = this.dialog.open(ChangemanagementnewdecisionchecklistpopupComponent, {
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


//.............pop-up....................          

@Component({

  selector: 'app-changemanagementnewdecisionchecklistpopup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: '../../../common/submit-popup/submitpopup.component.html',
  styleUrls: ['../../../common/submit-popup/submitpopup.component.scss'],

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

  save() {
    this.checkloading = true;
    let apiname = '/changemanagement/singleinputchangemanagement';
    let decisionsubmitData = {
      "bh6": "yes"
    }

    this._api.changeManagementDataWrite("changemanagement", 1,
      decisionsubmitData, apiname, 'changemanagementcmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.resultarray[47] == "-" ? "0" : (this.data.resultarray[47] * 100).toFixed(0),
            this.data.resultarray[46] == "-" ? "0" : (this.data.resultarray[46] * 100).toFixed(0),
            this.data.resultarray[45] == "-" ? "0" : (this.data.resultarray[45]).toFixed(0), 'update', this.noofattempt)
          let submitprovecheck = this.data.submitprove;
          if (((submitprovecheck == 'no') || (submitprovecheck == 'No')) && (this.data.analysisshow == true)) {
            this.sendAssesmentValue();
          } else {
            this.Sharedservice.enableTab();
            this.checkloading = false;
            this.dialogRef.close(true);
          }
        }
        setTimeout(() => {
          this.checkloading = false;
        }, 3000);
      }, (error: any) => {

        this.driveerrorLog(error, apiname);
      })
  }

  sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Change Management Module").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => { this.checkloading = false; })
  }
  sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Change Management Module").subscribe((data: any) => {

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



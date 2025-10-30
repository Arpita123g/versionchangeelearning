import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { SalesassesmentserviceService } from 'src/app/service/assesment/salesgame/salesassesmentservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-salestargetdecisionchecklist',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './salestargetdecisionchecklist.component.html',
  styleUrls: ['./salestargetdecisionchecklist.component.scss']
})
export class SalestargetdecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  result: any = [];
  results = ['ss', 'dd'];
  isClass: boolean[] = [false, true, false];
  optional: any[] = [];
  playername: string = '';
  dropdownvalue: any = [];
  optionalcase: any = ["foodforthoughtstatus", "bonusstatus", "leadershipstatus", "recognitionstatus", "salesforcestylestatus", "salesprocessstatus"]
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
  resultarray:any =[];
  foodforthought:boolean = true;
  @Output() newItemEvent = new EventEmitter<any>();
  blankInputMessage = ['Sales Target, Modern Trade', 'Sales Target, Retail', 'Sales Target, HoReCa', 'Personnel, Modern Trade',
    'Personnel, Retail', 'Personnel, HoReCa', 'Compensation Modern Trade, Business background',
    'Compensation Modern Trade, Non business background', 'Compensation Retail, Business background',
    'Compensation Retail, Non business background', 'Compensation HoReCa, Business background',
    'Compensation HoReCa, Non business background', 'Bonus %, Business background', 'Bonus %, Non business background',
    'Sales force Modern trade, Business background', 'Sales force Retail, Business background',
    'Sales force HoReCa, Business background', 'Sales Representative, Modern Trade %',
    'Sales Representative, Retail %', 'Sales Representative, HoReCa %', 'Key Account Manager, Modern Trade %',
    'Key Account Manager, Retail %', 'Key Account Manager, HoReCa %', 'Territory Sales Manager, Modern Trade %', 'Territory Sales Manager, Retail %',
    'Territory Sales Manager, HoReCa %', 'Gung Ho, Modern Trade %', 'Gung Ho, Retail %', 'Gung Ho, HoReCa %', 'Buddy,  Modern Trade %',
    'Buddy, Retail %', 'Buddy, HoReCa %', 'Consultative,  Modern Trade %', 'Consultative, Retail %', 'Consultative, HoReCa %',
    'Involvement in Customers', 'Sales Strategy', 'Sales and Marketing Integration', 'Sales Personnel Support', 'Best individual performer',
    'Best team effort', 'Friendliest Coworker', 'Value Based Sales Tactics', 'Trust Sales ', 'Product Management', 'After Sales Concept',
    'Relationship Skills', 'Key Account Management', 'Adaptive Selling Style', 'Negotiation Style', 'Closing a Sale', 'fficient Working Method',
    'Sales Process Innovation', 'Process Management',
  ]
  databasecellnamearray: any = [
    'av7', 'aw7', 'ax7', 'av10', 'av11', 'av12', 'av15', 'av16', 'aw15',//8
    'aw16', 'ax15', 'ax16', 'av19', 'av20', 'av23', 'av24', 'av25', //16
    'av30', 'aw30', 'ax30', 'av31', 'aw31', 'ax31', 'av32', 'aw32', //24
    'ax32', 'av35', 'aw35', 'ax35', 'av36', 'aw36', 'ax36', 'av37', 'aw37', //33
    'ax37', 'av39', 'av40', 'av41', 'av42', 'av44', 'av45', 'av46', 'av50', //42
    'av51', 'av52', 'av53', 'av54', 'av55', 'av58', 'av59', 'av60', 'av61', //51
    'av64', 'av65','e61','e64','e65',
  ]

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private salesassesmentservice: SalesassesmentserviceService
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
    let apiname = '/salestarget/fetchsalestarget';
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
    let apiname = '/salestarget/fetchsalestarget';
    this._api.salesfetchdata(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.foodforthoughtQNo = data.resultList[0].bb8;
              this.submitprove = data.resultList[0].bb7;
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }else{
                this.disabled = false;
              }
              this.responseresultcm = data.resultList[0].salesTargetCM;
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
                
                if (i < 12) {
                  if (this.result[i] == "") {
                    this.result[i] = "-";
                  }
                }
                for (let i = 14; i < 35; i++) {
                  if (this.result[i] == "") {
                    this.result[i] = "-";
                  }
                }
                

              }
              if ((this.result[35] == 0) && (this.result[36] == 0) && (this.result[37] == 0) && (this.result[38] == 0)
                && (this.result[39] == 0) && (this.result[40] == 0) && (this.result[41] == 0) && (this.result[42] == 0) && (this.result[43] == 0)
                && (this.result[44] == 0) && (this.result[45] == 0) && (this.result[46] == 0) && (this.result[47] == 0) && (this.result[48] == 0) && (this.result[49] == 0)
                && (this.result[50] == 0) && (this.result[51] == 0) && (this.result[52] == 0) && (this.result[53] == 0)) {
                for (let i = 35; i < 54; i++) {
                  this.result[i] = "-";
                }
              } else {
                for (let i = 35; i < 54; i++) {
                  if (this.result[i] == 0) {
                    this.result[i] = 'No'
                  } else {
                    this.result[i] = 'Yes'
                  }
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
              
              this.foodforthoughtQNo = data.resultList[0].bb8;
              this._global.casemanagementid.next(data.resultList[0].salestargetcmid);


              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }
             
              this.playername = data.resultList[0].userRegister.username;
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].salesTargetCM.salesTargetCMActiveStatus[this.optionalcase[i]];
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
    this.feedback = this.salesassesmentservice.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
    console.log('assesmentlist', this.feedback);


    if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
      this.getuseranalysisValue();
    }

  }

  getuseranalysisValue() {
    this._api.fetchassessment(this.coursecode, this.studentsectionid, 'student', Number(this.noofattempt),"coursecode").subscribe(
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
      const dialogRef = this.dialog.open(SalesTargetpopuppopupComponent, {
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
  //         const dialogRef = this.dialog.open(SalesTargetpopuppopupComponent, {
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
  //       const dialogRef = this.dialog.open(SalesTargetpopuppopupComponent, {
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




// popup.................

@Component({
  selector: 'app-salestargetpopup',
  standalone: true,
  imports: [CommonModule, FormsModule,MatDialogModule],
  templateUrl: './salestargetpopup.html',
  styleUrls: ['./salestargetdecisionchecklist.component.scss']
})

export class SalesTargetpopuppopupComponent extends AbstractComponent {
  showtab: boolean = true;
  resultarray:any =[];



  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SalesTargetpopuppopupComponent>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  save() {
    this.checkloading = true;
    let apiname = '/salestarget/singleinputsalestarget';
    let decisionsubmitData = {
      "bb7": "yes"
    }
    this._api.salesdatawrite("salestarget", 1,
      decisionsubmitData, apiname, 'salestargetcmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.resultarray[56]=="-" ? "0" : (this.data.resultarray[56]).toFixed(0), 
          this.data.resultarray[55] == "-" ? "0": (this.data.resultarray[55]).toFixed(0),
          this.data.resultarray[54] == "-" ? "0" : (this.data.resultarray[54]).toFixed(0), 'update', this.noofattempt)

          let submitprovecheck = this.data.submitprove;
          console.log("submitprovecheck", this.data.submitprove)
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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Sales & Target").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => { this.checkloading = false; })
  }
  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment, apiname, "Sales & Target").subscribe((data: any) => {

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
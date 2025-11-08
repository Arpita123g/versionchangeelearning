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
import { LogisticsassesmentserviceService } from 'src/app/service/assesment/logisticsgame/logisticsassesmentservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-logisticsmodegamedecisionchecklist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logisticsmodegamedecisionchecklist.component.html',
  styleUrls: ['./logisticsmodegamedecisionchecklist.component.scss']
})
export class LogisticsmodegamedecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  disabled: boolean = false;
  result: any = [];
  useranalysisinput: string = "";
  foodforthoughtQNo: number = 0;
  dropdownvalue: any = [];
  roundname: string = "";
  playername: string = '';
  isClass: boolean[] = [];
  optional: any[] = [];
  responseresultcm: any = [];
  responseresultdatabase: any = [];
  feedback: string = "";
  assesment: string = "";
  assesmentbody: string = "";
  submitprove: string = "";
  resultarray:any =[];
  foodforthought:boolean = true;
  optionalcase = ['emissionsstatus', 'foodforthoughtstatus']

  @Output() newItemEvent = new EventEmitter<any>();


  cellnamearray = ['at4', 'at5', 'at6', 'at53', 'at54', 'at55', 'at56', 'at57',
    'at58', 'at59', 'i7', 'i8', 'f66', 'g48', 'g49',
    'at36', 'at37', 'at38', 'at40', 'at41', 'at60', 'at61', 'at62', 'at63', 'at64', 'at17', 'au17', 'av17', 'aw17',
    'c34','c95','j109']



  blankInputMessage = ['Truck 1', 'Truck 2', 'Truck 3', 'Truck 1, Optimization',
    'Truck 2, Optimization', 'Truck 3, Optimization', 'Unison Limited', 'Promton Incorporation',
    'Fix Corporate', 'eCom Limited', 'Warehouse Upgrade 1', 'Warehouse Upgrade 2', 'Route', 'Technology 1', 'Technology 2',
    'Small Trucks', 'Open Body Trucks', 'Covered Container', 'Rail Trips', 'Air Trips', 'Small Trucks, Optimization',
    'Open Body Trucks, Optimization', 'Covered Container, Optimization', 'Rail, Optimization', 'Air, Optimization',
    'Unison Limited, docks', 'Promton Incorporation, docks',
    'Fix Corporate, docks', 'eCom Limited, docks',
  ]
  cellnamearray1 = ['at14', 'at15', 'au14', 'au15', 'av14', 'av15', 'aw14', 'aw15',

  ]
  inputmessage = [0, 1, 2, 15, 16, 17]
  inputresult: any = [];

  inputMessage1 = ['Truck 1', 'Truck 2', 'Truck 3', 'Small Trucks, Optimization',
    'Open Body Trucks, Optimization', 'Covered Container, Optimization', 'Dock Allocation', 'Dock Allocation', 'Dock Allocation'
  ]

  previousResulList: any = []
  errorlist: any = []

  defaultvalue = [20, 20, 20, 'Yes', 'Yes', 'Promton Incorporation', 'First-In-First-Out (FIFO)',
    'First-In-First-Out (FIFO)', 'Last-In-First-Out (LIFO)',
    'First-In-First-Out (FIFO)', 'Conveyor System', 'No Upgrade', 'Delhi - Mumbai - Bangalore', 'Driver Behavioural System',
    'TAT Visibility', 20, 20, 20, 1, 2, 'Yes', 'Unison Limited', 'Yes', 'Promton Incorporation', 'Fix Corporate']

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private logisticsassesmentservice: LogisticsassesmentserviceService
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
    }else{
      this.getFetchData(this.noofattempt);
    }
    
  }


  getFetchData(attempt: string) {
    let apiname = '/logistics/fetchlogistics';
    this._api.logisticsfetchdata(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].logisticsCM.logisticsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.foodforthoughtQNo = data.resultList[0].aw54;
              this.submitprove = data.resultList[0].aw53;
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }else{
                this.disabled = false;
              }
              this.responseresultcm = data.resultList[0].logisticsCM;
              this.responseresultdatabase = data.resultList[0];
              // let roundvalue = "round" + Number(this.noofattempt);
              //
              for (let i = 0; i < this.cellnamearray.length; i++) {
                this.result[i] = data.resultList[0][this.cellnamearray[i]];
                
                if ((this.result[i] == "") || (this.result[i] == null)) {
                  this.result[i] = "-";
                }
              }
              let roundvalue = "round" + Number(attempt);
              if (data.resultList[0].aiAssessmentMaster != null) {
                  let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                  if (analysisshowdata == 'yes') {
                    this.analysisshow = true
                  } else {
                    this.analysisshow = false;
                  }
                }

              for (let i = 0; i < this.cellnamearray1.length; i++) {
                this.inputresult[i] = data.resultList[0][this.cellnamearray1[i]];
              }

              if (this.result[18] == '-') {
                this.result[18] = '0'
              } if (this.result[19] == '-') {
                this.result[19] = '0'
              }
              if ((this.inputresult[0] == 0) && (this.inputresult[1] == 0)) {
                this.result[6] = "-";
              }
              if ((this.inputresult[2] == 0) && (this.inputresult[3] == 0)) {
                this.result[7] = "-";
              }
              if ((this.inputresult[4] == 0) && (this.inputresult[5] == 0)) {
                this.result[8] = "-";
              }
              if ((this.inputresult[6] == 0) && (this.inputresult[7] == 0)) {
                this.result[9] = "-";
              }
              if ((this.result[10] == 'No Upgrade') && (this.result[11] == 'No Upgrade')) {
                this.result[10] = "-";
                this.result[11] = "-";
              }
              if ((this.result[13] == 'No Upgrade') && (this.result[14] == 'No Upgrade')) {
                this.result[13] = "-";
                this.result[14] = "-";
              }
              this.foodforthoughtQNo = data.resultList[0].aw54;
              this._global.casemanagementid.next(data.resultList[0].logisticscmid);
              this.playername = data.resultList[0].userRegister.username;
              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }


              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].logisticsCM.logisticsCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
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
              this.useranalysisSubmit();

            }
            this.checkloading = false;
          } else {
            this.checkloading = false;

          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  getPreviousData(attempt: string) {
    let apiname = '/logistics/fetchlogistics';
    this._api.logisticsfetchdata(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.cellnamearray.length; i++) {
                this.previousResulList[i] = data.resultList[0][this.cellnamearray[i]];
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

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }


  useranalysisSubmit() {
    this.feedback = this.logisticsassesmentservice.useranalysisSubmit(this.responseresultcm, this.result, this.responseresultdatabase);
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

  inputDataCheck() {
    for (let i = 0; i < this.cellnamearray.length; i++) {
      if ((i != 11) && (i != 14)) {
        if (this.result[i] == "-") {
          this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
          this.inputdatacheckvalue = true;
        }

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

  decisionchecklistpopup() {
    this.inputDataCheck();
    
  }

  saveDecisionChecklist() {
    if ((this.analysisshow && this.useranalysisinput.length < 10)) {
      this._alert.error("To move ahead, kindly Write your analysis");
      return;
    }
  
    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 9) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
  
    const openDialog = () => {
      const dialogRef = this.dialog.open(LogisticsmodegamepopupComponent, {
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
        // panelClass: 'custom-dialog-container'
        panelClass: 'centertop-dialog',
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
  //     if (this.foodforthoughtQNo == 9) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(LogisticsmodegamepopupComponent, {
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
  //       const dialogRef = this.dialog.open(LogisticsmodegamepopupComponent, {
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
  selector: 'app-logisticsmodegamepopup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: '../../../common/submit-popup/submitpopup.component.html',
  styleUrls: ['../../../common/submit-popup/submitpopup.component.scss'],

})
export class LogisticsmodegamepopupComponent extends AbstractComponent {
  showtab: boolean = true;
  resultarray: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<LogisticsmodegamepopupComponent>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  save() {
    this.checkloading = true;
    let apiname = '/logistics/singleinputlogistics';
    let decisionsubmitData = {
      "aw53": "yes"
    }
    this._api.logisticsDataWrite("logistics", 1,
      decisionsubmitData, apiname, 'logisticscmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._login.savekpivalue(this.data.resultarray[31]=="-" ? "0" : (this.data.resultarray[31] * 100).toFixed(0), 
          this.data.resultarray[29] == "-" ? "0": (this.data.resultarray[29]).toFixed(0),
          this.data.resultarray[30] == "-" ? "0" : (this.data.resultarray[30]).toFixed(0), 'update', this.noofattempt)
         
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

        this.driveerrorLog(error, apiname);
      })
  }

  async sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Logistics").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => { this.checkloading = false; })
  }
  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Logistics").subscribe((data: any) => {

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
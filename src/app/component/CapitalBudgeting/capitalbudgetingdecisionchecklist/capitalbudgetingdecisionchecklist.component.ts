import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { CapitalbudgetinggameassessmentService } from 'src/app/service/assesment/capitalbudgetinggame/capitalbudgetinggameassessment.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
@Component({
  selector: 'app-capitalbudgetingdecisionchecklist',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, TippyDirective],
  templateUrl: './capitalbudgetingdecisionchecklist.component.html',
  styleUrls: ['./capitalbudgetingdecisionchecklist.component.scss']
})
export class CapitalbudgetingdecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  isClass: boolean[] = [false, true, false];
  result: any = [];
  optional: any[] = [];
  playername: string = '';
  dropdownvalue: any = [];
  roundname: string = "";
  foodforthoughtQNo: number = 0;
  errorlist: any = [];
  previousResulList: any = [];
  currentResulList: any = [];
  assesment: string = "";
  assesmentbody: string = "";
  feedback: string = "";
  useranalysisvalue: any = {};
  useranalysisinput: string = "";
  submitprove: string = "";
  disabled: boolean = false;
  kpivaluearray: any = [];
  currentattempt: number = 0;
  @Output() newItemEvent = new EventEmitter<any>();
  optionalcase: any = ["foodforthoughtstatus"];

  tableData: any = [
    {
      title: "Project Portfolio Discount Rate",
      body: [
        { title: "h6", value: "ap7" },
        { title: "h7", value: "ap8" },
        { title: "h8", value: "ap9" },
        { title: "h9", value: "ap10" },
        { title: "h10", value: "ap11" },
        { title: "h11", value: "ap12" },
        { title: "h12", value: "ap13" },
        { title: "h13", value: "ap14" },
        { title: "h14", value: "ap15" },
        { title: "h15", value: "ap16" },
        { title: "h16", value: "ap17" },
        { title: "h17", value: "ap18" },
        { title: "h18", value: "ap19" },
        { title: "h19", value: "ap20" },
      ]
    },
    {
      title: "Project Portfolio Selection",
      body: [
        { title: "h6", value: "ap23" },
        { title: "h7", value: "ap24" },
        { title: "h8", value: "ap25" },
        { title: "h9", value: "ap26" },
        { title: "h10", value: "ap27" },
        { title: "h11", value: "ap28" },
        { title: "h12", value: "ap29" },
        { title: "h13", value: "ap30" },
        { title: "h14", value: "ap31" },
        { title: "h15", value: "ap32" },
        { title: "h16", value: "ap33" },
        { title: "h17", value: "ap34" },
        { title: "h18", value: "ap35" },
        { title: "h19", value: "ap36" },
      ]
    }
  ]


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private capitalbudgetinggameassesmentservice: CapitalbudgetinggameassessmentService
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
    let apiname = '/cbgame/fetchcbgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.tableData[0].body.length; i++) {
                this.previousResulList[i] = data.resultList[0].cbgamedata[this.tableData[0].body[i].value];
              } for (let i = 14; i < 28; i++) {
                this.previousResulList[i] = data.resultList[0].cbgamedata[this.tableData[1].body[i - 14].value];
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
    let apiname = '/cbgame/fetchcbgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.currentattempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.result = data.resultList[0];
              let roundvalue = "round" + Number(this.currentattempt);
              this._global.casemanagementid.next(data.resultList[0].cbgamecmid);

              this.roundname = "Round " + this.currentattempt;
              if (this.currentattempt > 0) {
                for (let i = 1; i < this.currentattempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
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
                const caseStatus = data.resultList[0].cbGameCM.cbGameCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }


              if (data.resultList[0].cbgamedata) {
                this.foodforthoughtQNo = data.resultList[0].cbgamedata.ao40;
                this.submitprove = data.resultList[0].cbgamedata.ao39;
                if ((this.submitprove == 'yes') || (this.timefinished)) {
                  this.disabled = true;
                } else {
                  this.disabled = false;
                }

                for (let i = 0; i < this.tableData[0].body.length; i++) {
                  this.currentResulList[i] = data.resultList[0].cbgamedata[this.tableData[0].body[i].value];
                } for (let i = 14; i < 28; i++) {
                  this.currentResulList[i] = data.resultList[0].cbgamedata[this.tableData[1].body[i - 14].value];
                }

                for (let i = 0; i < 28; i++) {
                  if (this.currentattempt > 1) {

                    if (this.currentResulList[i] == this.previousResulList[i]) {
                      this.isClass[i] = true;
                    } else {
                      this.isClass[i] = false;
                    }
                  } else {
                    this.isClass[i] = true;
                  }
                }

                this.kpivaluearray = [Number((data.resultList[0].cbgamedata.c128)).toFixed(0),
                Number((data.resultList[0].cbgamedata.c129)).toFixed(0),
                Number((data.resultList[0].cbgamedata.c127) * 100).toFixed(2)]


              }

              if ((this.analysisshow == true)) {
                this.useranalysisSubmit();
              }
              this.checkloading = false;
            }

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

    this.assesment = this.capitalbudgetinggameassesmentservice.useranalysisSubmit(this.result.cbGameCM.cbgameperioddata, this.result, this.result);
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
    if (this.currentResulList.slice(0, 14).every((value: any) => value === "0")) {
      this.errorlist.push("To move ahead, kindly make your decisions in Project Portfolio Discount Rate");
    }
    if (this.currentResulList.slice(14, 28).every((value: any) => value !== 1)) {
      this.errorlist.push("To move ahead, kindly make your decisions in Project Portfolio Selection");
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
    if (this.noofattempt === "1" && this.foodforthoughtQNo !== 6) {
      return this._alert.error("To move ahead finish Food For Thought section");
    }
  
    if (this.analysisshow && this.useranalysisinput.length < 10) {
      return this._alert.error("To move ahead, kindly Write your analysis");
    }
  
    const dialogRef = this.dialog.open(CapitalbudgetingdecisionchecklistPopup, {
      data: {
        class: 'p-0',
        foodforthoughtqno: this.foodforthoughtQNo,
        participantsentiment: this.useranalysisinput,
        assesment: `Participant analysis for microsimulation\n${this.useranalysisinput}${this.assesment}`,
        feedback: this.feedback,
        submitprove: this.submitprove,
        analysisshow: this.analysisshow,
        kpivaluearray: this.kpivaluearray
      },
      // panelClass: 'custom-dialog-container'
      panelClass: 'centertop-dialog',
        position: { top: '20px' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.newItemEvent.emit('report');
    });
  }
  

}


// CBPopup

@Component({
  selector: 'app-capitalbudgetingdecisionchecklistpopup',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, TippyDirective],
  templateUrl: './capitalbudgetingdecisionchecklistpopup.html',
  styleUrls: ['./capitalbudgetingdecisionchecklist.component.scss']
})

export class CapitalbudgetingdecisionchecklistPopup extends AbstractComponent {
  showtab: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CapitalbudgetingdecisionchecklistPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.checkloading = true;
    let apiname = '/cbgame/singleinputcbgame';
    let decisionsubmitData = {
      "ao39": "yes"
    }
    this._api.promotionsdatawrite("cbgame", 1,
      decisionsubmitData, apiname, 'cbgamecmid').subscribe((data: any) => {

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "CB").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "CB").subscribe((data: any) => {

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
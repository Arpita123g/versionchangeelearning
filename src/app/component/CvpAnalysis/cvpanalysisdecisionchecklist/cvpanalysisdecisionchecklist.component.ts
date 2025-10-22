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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-cvpanalysisdecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './cvpanalysisdecisionchecklist.component.html',
  styleUrls: ['./cvpanalysisdecisionchecklist.component.scss']
})
export class CvpanalysisdecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = false;
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
  topstatus: boolean = true;
  foodforthought:boolean = true;
  databasecellnamearray: any = ['ae8', 'ae9', 'ae10', 'ae11', 'af8', 'af9', 'af10', 'af11', 'ae15', 'ae17', 'af17',
    'k41', 'm23', 'k40',];

  optionalcase: any = ["foodforthoughtstatus", "topstatus"];
  kpivaluearray: any = [];
  blankInputMessage: any = ['Jeans Demand, units', 'Jeans Price, INR', 'Jeans Advertising, mn INR',
    'Jeans Quality Control, mn INR', 'Top Demand, units', 'Top Price, INR', 'Top Advertising, mn INR',
    'Top Quality Control, mn INR ', 'Number of Machinery', 'Jeans Capacity Allocation', 'Top Capacity Allocation',
  ];
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
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
    let apiname = '/cvpanalysis/fetchcvpanalysis';
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
          // this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  getFetchData(attempt: string) {
    let apiname = '/cvpanalysis/fetchcvpanalysis';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }else{
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].cvpAnalysisCM;
              this.responseresultdatabase = data.resultList[0];
              let roundvalue = "round" + Number(attempt);
              this._global.casemanagementid.next(data.resultList[0].cvpanalysiscmid);
              this.foodforthoughtQNo = data.resultList[0].ai9;
              this.submitprove = data.resultList[0].ai8;
              if (data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus.topstatus == 'inactive') {
                this.topstatus = false;
              }
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }else{
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

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellnamearray[i]];
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

              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {

                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }
              this.kpivaluearray = [Number((data.resultList[0].k41) * 100).toFixed(0),
              Number((data.resultList[0].m23) * 100).toFixed(0),
              (Number(data.resultList[0].k40)).toFixed(0)]

              if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
                this.useranalysisSubmit();
              }else{
                this.checkloading = false;
              }
              
              
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
    this.assesment = "\n\nFixed Data" +
      "\n\nMarket" +
      "\n" + this.responseresultcm.b5 +
      "\n\n" +
      "Industry" +
      "\n" + this.responseresultcm.d6 + " " + this.responseresultcm.e6 +
      "\n" + this.responseresultcm.d7 + " " + this.responseresultcm.e7 +
      "\n" + this.responseresultcm.d8 + " " + this.responseresultcm.e8 +
      "\n" + this.responseresultcm.d9 + " " + this.responseresultcm.e9 +
      "\n" + this.responseresultcm.d10 + " " + this.responseresultcm.e10 +
      "\n" + this.responseresultcm.d11 + " " + this.responseresultcm.e11 +
      "\n" + this.responseresultcm.d12 + " " + this.responseresultcm.e12 +
      "\n" + this.responseresultcm.d13 + " " + this.responseresultcm.e13 +
      "\n" + this.responseresultcm.d14 + " " + this.responseresultcm.e14 +
      "\n" + this.responseresultcm.d15 + " " + this.responseresultcm.e15 +
      "\n" + this.responseresultcm.d16 + " " + this.responseresultcm.e16 +
      "\n" + this.responseresultcm.d17 + " " + this.responseresultcm.e17 +
      "\n" + this.responseresultcm.d18 + " " + this.responseresultcm.e18 +
      "\n" + this.responseresultcm.d19 + " " + this.responseresultcm.e19 +
      "\n" + this.responseresultcm.d20 + " " + this.responseresultcm.e20 +
      "\n\nMarketing" +
      "\n" + this.responseresultcm.g6 + " " + this.responseresultcm.h6 +
      "\n" + this.responseresultcm.g7 + " " + this.responseresultcm.h7 +
      "\n" + this.responseresultcm.g8 + " " + this.responseresultcm.h8 +
      "\n" + this.responseresultcm.g9 + " " + this.responseresultcm.h9 +
      "\n" + this.responseresultcm.g10 + " " + this.responseresultcm.h10 +
      "\n" + this.responseresultcm.g11 + " " + this.responseresultcm.h11 +
      "\n\nDemand Factors, Jeans" +
      "\n" + this.responseresultcm.g14 + " " + this.responseresultcm.h14 +
      "\n" + this.responseresultcm.g15 + " " + this.responseresultcm.h15 +
      "\n" + this.responseresultcm.g16 + " " + this.responseresultcm.h16 +
      "\n\nDemand Factors, Tops" +
      "\n" + this.responseresultcm.g19 + " " + this.responseresultcm.h19 +
      "\n" + this.responseresultcm.g20 + " " + this.responseresultcm.h20 +
      "\n" + this.responseresultcm.g21 + " " + this.responseresultcm.h21 +
      "\n\n" + this.responseresultcm.g23 + " " + this.responseresultcm.h23 + " " + this.responseresultcm.i23 +
      "\n" + this.responseresultcm.g24 + " " + this.responseresultcm.h24 + " " + this.responseresultcm.i24 +
      "\n" + this.responseresultcm.g25 + " " + this.responseresultcm.h25 + " " + this.responseresultcm.i25 +
      "\n" + this.responseresultcm.g26 + " " + this.responseresultcm.h26 + " " + this.responseresultcm.i26 +
      "\n" + this.responseresultcm.g27 + " " + this.responseresultcm.h27 + " " + this.responseresultcm.i27 +
      "\n" + this.responseresultcm.g28 + " " + this.responseresultcm.h28 + " " + this.responseresultcm.i28 +
      "\n" + this.responseresultcm.g29 + " " + this.responseresultcm.h29 + " " + this.responseresultcm.i29 +
      "\n" + this.responseresultcm.g30 + " " + this.responseresultcm.h30 + " " + this.responseresultcm.i30 +
      "\n\n" + this.responseresultcm.g32 + " " + this.responseresultcm.h32 +
      "\n" + this.responseresultcm.g33 + " " + this.responseresultcm.h33 +
      "\n" + this.responseresultcm.g34 + " " + this.responseresultcm.h34 +
      "\n" + this.responseresultcm.g35 + " " + this.responseresultcm.h35 +
      "\n" + this.responseresultcm.g36 + " " + this.responseresultcm.h36 +
      "\n" + this.responseresultcm.g37 + " " + this.responseresultcm.h37 +
      "\n" + this.responseresultcm.g38 + " " + this.responseresultcm.h38 +
      "\n" + this.responseresultcm.g39 + " " + this.responseresultcm.h39 +
      "\n\n" + this.responseresultcm.g41 + " " + this.responseresultcm.h41 +
      "\n" + this.responseresultcm.g42 + " " + this.responseresultcm.h42 +
      "\n" + this.responseresultcm.g43 + " " + this.responseresultcm.h43 +
      "\n" + this.responseresultcm.g44 + " " + this.responseresultcm.h44 +
      "\n" + this.responseresultcm.g45 + " " + this.responseresultcm.h45 +
      "\n" + this.responseresultcm.g46 + " " + this.responseresultcm.h46 +
      "\n" + this.responseresultcm.g47 + " " + this.responseresultcm.h47 +
      "\n" + this.responseresultcm.g48 + " " + this.responseresultcm.h48 +
      "\n\nProduction" +
      "\n\n" + this.responseresultcm.k6 + " " + this.responseresultcm.l6 +
      "\n" + this.responseresultcm.k7 + " " + this.responseresultcm.l7 +
      "\n" + this.responseresultcm.k8 + " " + this.responseresultcm.l8 +
      "\n" + this.responseresultcm.k9 + " " + this.responseresultcm.l9 +
      "\n" + this.responseresultcm.k10 + " " + this.responseresultcm.l10 +
      "\n" + this.responseresultcm.k11 + " " + this.responseresultcm.l11 +
      "\n" + this.responseresultcm.k12 + " " + this.responseresultcm.l12 +
      "\n" + this.responseresultcm.k13 + " " + this.responseresultcm.l13 +
      "\n" + this.responseresultcm.k14 + " " + this.responseresultcm.l14 +
      "\n" + this.responseresultcm.k15 + " " + this.responseresultcm.l15 +
      "\n" + this.responseresultcm.k16 + " " + this.responseresultcm.l16 +
      "\n\n" + this.responseresultcm.k19 + " " + this.responseresultcm.l19 +
      "\n" + this.responseresultcm.k20 + " " + this.responseresultcm.l20 +
      "\n" + this.responseresultcm.k21 + " " + this.responseresultcm.l21 +
      "\n" + this.responseresultcm.k22 + " " + this.responseresultcm.l22 +
      "\n" + this.responseresultcm.k23 + " " + this.responseresultcm.l23 +
      "\n" + this.responseresultcm.k24 + " " + this.responseresultcm.l24 +
      "\n" + this.responseresultcm.k25 + " " + this.responseresultcm.l25 +
      "\n" + this.responseresultcm.k26 + " " + this.responseresultcm.l26 +
      "\n" + this.responseresultcm.k27 + " " + this.responseresultcm.l27 +
      "\n" + this.responseresultcm.k28 + " " + this.responseresultcm.l28 +
      "\n" + this.responseresultcm.k29 + " " + this.responseresultcm.l29 +


      "\n\nInput" +
      "\n" + "Parameters" + " " + "Input" +
      "\n" + "Jeans Demand, units" + " " + this.result[0] +
      "\n" + "Jeans Price, INR" + " " + this.result[1] +
      "\n" + "Jeans Advertising, mn INR" + " " + this.result[2] +
      "\n" + "Jeans Quality Control, mn INR" + " " + this.result[3] +
      "\n" + "Top Demand, units" + " " + this.result[4] +
      "\n" + "Top Price, INR " + " " + this.result[5] +
      "\n" + "Top Advertising, mn INR" + " " + this.result[6] +
      "\n" + "Top Quality Control, mn INR" + " " + this.result[7] +
      "\n" + "Number of Machinery" + " " + this.result[8] +
      "\n" + "Jeans Capacity Allocation" + " " + this.result[9] +
      "\n" + "Top Capacity Allocation " + " " + this.result[10] +


      "\n\n" + "Output" +
      "\nSales, units" +
      "\n" + "Parameter" + " " + "Jeans" + " " + "Top" +
      "\n" + "Demand" + " " + this.responseresultdatabase.i23 + " " + this.responseresultdatabase.j23 +
      "\n" + "Sales" + " " + this.responseresultdatabase.i25 + " " + this.responseresultdatabase.j25 +
      "\n\n" + "Production, units" +
      "\n" + "Parameter" + " " + "Jeans" + " " + "Top" +
      "\n" + "Production" + " " + this.responseresultdatabase.i24 + " " + this.responseresultdatabase.j24 +
      "\n" + "Closing Inventory" + " " + this.responseresultdatabase.i26 + " " + this.responseresultdatabase.j26 +
      "\n" + "Stockout" + " " + this.responseresultdatabase.i27 + " " + this.responseresultdatabase.j27 +
      "\n\n" + "CVP Analysis, INR" +
      "\n" + "Parameter" + " " + "Jeans" + " " + "Top" +
      "\n" + this.responseresultdatabase.h44 + " " + this.responseresultdatabase.i44 + " " + this.responseresultdatabase.j44 +
      "\n" + this.responseresultdatabase.h45 + " " + this.responseresultdatabase.m45 + " " + this.responseresultdatabase.n45 +
      "\n" + this.responseresultdatabase.h48 + " " + this.responseresultdatabase.i48 + " " + this.responseresultdatabase.j48 +
      "\n\n" + "Break even point" +
      "\n" + "Parameter" + " " + "Jeans" + " " + "Top" +
      "\n" + this.responseresultdatabase.h52 + " " + this.responseresultdatabase.i52 + " " + this.responseresultdatabase.j52 +
      "\n" + this.responseresultdatabase.h53 + " " + this.responseresultdatabase.i53 + " " + this.responseresultdatabase.n53 +
      "\n" + this.responseresultdatabase.h54 + " " + this.responseresultdatabase.i54 + " " + this.responseresultdatabase.j54 +
      "\n\n" + "Operating Income, mn INR" +
      "\n" + "Parameter" + " " + "Jeans" + " " + "Top" +
      "\n" + this.responseresultdatabase.h31 + " " + this.responseresultdatabase.i31 + " " + this.responseresultdatabase.j31 +
      "\n" + this.responseresultdatabase.h32 + " " + this.responseresultdatabase.i32 + " " + this.responseresultdatabase.j32 +
      "\n" + this.responseresultdatabase.h33 + " " + this.responseresultdatabase.i33 + " " + this.responseresultdatabase.j33 +
      "\n" + this.responseresultdatabase.h34 + " " + this.responseresultdatabase.i34 + " " + this.responseresultdatabase.j34 +
      "\n" + this.responseresultdatabase.h35 + " " + this.responseresultdatabase.i35 + " " + this.responseresultdatabase.j35 +
      "\n" + this.responseresultdatabase.h36 + " " + this.responseresultdatabase.i36 + " " + this.responseresultdatabase.j36 +
      "\n" + this.responseresultdatabase.h37 + " " + this.responseresultdatabase.i37 + " " + this.responseresultdatabase.j37 +
      "\n" + this.responseresultdatabase.h38 + " " + this.responseresultdatabase.i38 + " " + this.responseresultdatabase.j38 +
      "\n" + this.responseresultdatabase.h39 + " " + this.responseresultdatabase.i39 + " " + this.responseresultdatabase.j39 +
      "\n" + this.responseresultdatabase.h40 + " " + this.responseresultdatabase.i40 + " " + this.responseresultdatabase.j40 +
      "\n\n" + " KPI product level" +
      "\n" + "Parameter" + " " + "Jeans" + " " + "Top" +
      "\n" + this.responseresultdatabase.h49 + " " + this.responseresultdatabase.i49 + " " + this.responseresultdatabase.j49 +
      "\n" + "Operating Margin" + " " + this.responseresultdatabase.i41 + " " + this.responseresultdatabase.j41 +
      "\n" + "Market Share" + " " + this.responseresultdatabase.i19 + " " + this.responseresultdatabase.m19 +
      "\n\n" + "KPI company-wide" +
      "\n" + "Parameter" + " " + "Output" +
      "\n" + "Operating Margin" + " " + Number(this.responseresultdatabase.k41) * 100 + "%" +
      "\n" + "Market Share" + " " + Number(this.responseresultdatabase.m23) * 100 + "%" +
      "\n" + "Operating Profit/Loss, mn INR" + " " + this.responseresultdatabase.k40;

    this.feedback = this.assesment;
   
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
    // this.checkloading = true;
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
  
    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 8) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
  
    const openDialog = () => {
      const dialogRef = this.dialog.open(CvpanalysisdecisionsubmitPopup, {
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
  //     if (this.foodforthoughtQNo == 8) {
  //       if (((this.analysisshow == true) && (this.useranalysisinput.length < 10))) {
  //         this._alert.error("To move ahead, kindly Write your analysis");

  //       } else {
  //         const dialogRef = this.dialog.open(CvpanalysisdecisionsubmitPopup, {
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
  //       const dialogRef = this.dialog.open(CvpanalysisdecisionsubmitPopup, {
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


//cvpanalysispop-up..........

@Component({
  selector: 'app-cvpanalysisdecisionsubmitpopup',
  templateUrl: './cvpanalysisdecisionsubmitpopup.html',
  styleUrls: ['./cvpanalysisdecisionchecklist.component.scss']

})

export class CvpanalysisdecisionsubmitPopup extends AbstractComponent {

  showtab: boolean = true;
  resultarray: any = [];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CvpanalysisdecisionsubmitPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  save() {
    this.checkloading = true;
    let apiname = '/cvpanalysis/singleinputcvpanalysis';
    let decisionsubmitData = {
      "ai8": "yes"
    }
    this._api.promotionsdatawrite("cvpanalysis", 1,
      decisionsubmitData, apiname, 'cvpanalysiscmid').subscribe((data: any) => {

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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Cvp Analysis").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }
  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Cvp Analysis").subscribe((data: any) => {

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
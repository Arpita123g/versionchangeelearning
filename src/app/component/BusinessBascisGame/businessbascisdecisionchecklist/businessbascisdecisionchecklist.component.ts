import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
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
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-businessbascisdecisionchecklist',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule],
  templateUrl: './businessbascisdecisionchecklist.component.html',
  styleUrls: ['../BusinessBasicsGame.scss']
})
export class BusinessbascisdecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  foodforthought: boolean = true;
  analysisshow: boolean = true;
  result: any = [];
  results = ['ss', 'dd'];
  isClass: boolean[] = [false, true, false];
  optional: any[] = [];
  optionalcase = ["licenseandregstatus", "technologystatus", "foodforthoughtstatus", "campaign123status"]
  playername: string = '';
  dropdownvalue: any = [];
  roundname: string = "";
  foodforthoughtQNo: number = 0;
  errorlist: any = [];
  resultarray: any = [];
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

  @Output() newItemEvent = new EventEmitter<any>();
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }
  cellname = ['c18', 'c26', 'c19', 'c20', 'c21', 'c22', 'c27', 'c28', 'c29', 'c23', 'c24', 'c30', 'c31', 'c32', 'c25',
    'c79', 'c82', 'c47',
  ];
  defaultvalue = ['Whitefield - ITPL Corporate Park', 'In-House Compliance', '80', 'Aesthetic', 'Normal + Tandoori', 'Vendor 2',
    'Implemented', 'Not Implemented', 'Implemented', '230', '12000', 'Not Launched', 'Launched', 'Launched', 'Self Service'];//*******************ask abdul(will it change) ********/

  blankInputMessage = ['Location', 'Licensing & Regulation', 'Demand Tea Cups per day', 'Interior', 'Product Mix',
    'Procurement Vendor', 'Point of Sale', 'Security, Security', 'Music & Wifi', 'Price per cup of tea',
    'Monthly Promotion Budget', 'Social Media Campaign', 'Local Advertising Campaign', 'Collaboration Campaign',
    'Service'
  ]



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


  fetchDecisiondataList(attempt: string) {
    let apiname = "/businessbasic/fetchbusinessbasic";

    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              if (data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.responseresultcm = data.resultList[0].businessBasicCaseManagement;
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


              for (let i = 0; i < this.cellname.length; i++) {
                this.result[i] = data.resultList[0][this.cellname[i]];


                if ((this.cellname[i] == 'c27') || (this.cellname[i] == 'c28') || (this.cellname[i] == 'c29')) {
                  if (this.result[i] == 1) {
                    this.result[i] = "Implemented";
                  } else {
                    this.result[i] = "Not Implemented";
                  }
                } else if ((this.cellname[i] == 'c30') || (this.cellname[i] == 'c31') || (this.cellname[i] == 'c32')) {
                  if (this.result[i] == 1) {
                    this.result[i] = "Launched";
                  } else {
                    this.result[i] = "Not Launched";
                  }
                }
                if ((this.result[i] == "") || (this.result[i] == null)) {
                  this.result[i] = "-";
                }

              }
              if ((this.result[6] == 'Not Implemented') &&
                (this.result[7] == 'Not Implemented') &&
                (this.result[8] == 'Not Implemented')) {
                for (let i = 6; i < 9; i++) {
                  this.result[i] = "-";
                }
              }
              if ((this.result[11] == "Not Launched") &&
                (this.result[12] == "Not Launched") &&
                (this.result[13] == "Not Launched")) {
                for (let i = 11; i < 14; i++) {
                  this.result[i] = "-";
                }
              }
              this.foodforthoughtQNo = data.resultList[0].h5;
              this.submitprove = data.resultList[0].h4;
              if ((this.submitprove == 'yes') || (this.timefinished)) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }
              this._global.casemanagementid.next(data.resultList[0].businessbasiccasemanagementid);
              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }
              this.playername = data.resultList[0].userRegister.username;
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {

                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }
              for (let i = 0; i < this.cellname.length; i++) {
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
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.fetchDecisiondataList(attempt[1]);
  }

  getPreviousData(attempt: string) {
    let apiname = "/businessbasic/fetchbusinessbasic";;
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              for (let i = 0; i < this.cellname.length; i++) {
                this.previousResulList[i] = data.resultList[0][this.cellname[i]];
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
      const dialogRef = this.dialog.open(DecisionchecklistpopupComponent, {
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
        panelClass: 'centertop-dialog',
        width: '520px',
        maxWidth: '95vw',
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



  decisionchecklistpopup() {
    this.inputDataCheck();
  }

  inputDataCheck() {
    for (let i = 0; i < 15; i++) {
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
        panelClass: 'centertop-dialog',
        position: { top: '20px' }

      });
      dialogRef.afterClosed().subscribe(result => {

      });
    }
  }

  useranalysisSubmit() {
    this.assesment = "\n\nFixed Data" +
      "\nMarket" +
      "\n" + this.responseresultcm.b3 +
      "\n\nLocation" +
      "\n" + this.responseresultcm.d4 + " " + this.responseresultcm.e4 +
      "\n\n" + this.responseresultcm.d6 + " " + this.responseresultcm.e6 + " " + this.responseresultcm.f6 +
      "\n" + this.responseresultcm.d7 + " " + this.responseresultcm.e7 + " " + this.responseresultcm.f7 +
      "\n" + this.responseresultcm.d8 + " " + this.responseresultcm.e8 + " " + this.responseresultcm.f8 +
      "\n\n" + this.responseresultcm.d10 + "  " + this.responseresultcm.e10 + "  " + this.responseresultcm.f10 + "  " + this.responseresultcm.g10 +
      "\n" + this.responseresultcm.d11 + "  " + this.responseresultcm.e11 + "  " + this.responseresultcm.f11 + "  " + this.responseresultcm.g11 +
      "\n" + this.responseresultcm.d12 + "  " + this.responseresultcm.e12 + "  " + this.responseresultcm.f12 + "  " + this.responseresultcm.g12 +
      "\n\n" + this.responseresultcm.d14 +
      "\n" + this.responseresultcm.d15 + " " + this.responseresultcm.e15 +
      "\n\nDemand\n" +
      "   " + this.responseresultcm.d7 + " " + this.responseresultcm.d8 +
      "\n" + this.responseresultcm.i6 + " " + this.responseresultcm.j6 + " " + this.responseresultcm.k6 +
      "\n" + this.responseresultcm.i7 + " " + this.responseresultcm.j7 + " " + this.responseresultcm.k7 +
      "\n" + this.responseresultcm.i9 + " " + this.responseresultcm.j9 + " " + this.responseresultcm.k9 +
      "\n" + this.responseresultcm.i11 + " " + this.responseresultcm.j11 + " " + this.responseresultcm.k11 +
      "\n" + this.responseresultcm.i13 + " " + this.responseresultcm.j13 + " " + this.responseresultcm.k13 +
      "\n\n" + this.responseresultcm.j17 +
      "\n" + this.responseresultcm.i18 + " " + this.responseresultcm.j18 +
      "\n" + this.responseresultcm.i19 + " " + this.responseresultcm.j19 +
      "\n\n" + this.responseresultcm.i21 + " " + this.responseresultcm.j5 + " " + this.responseresultcm.k5 +
      "\n" + this.responseresultcm.i22 + " " + this.responseresultcm.j22 + " " + this.responseresultcm.k22 +
      "\n" + this.responseresultcm.i23 + " " + this.responseresultcm.j23 + " " + this.responseresultcm.k23 +
      "\n" + this.responseresultcm.i24 + " " + this.responseresultcm.j24 + " " + this.responseresultcm.k24 +
      "\n" + this.responseresultcm.i25 + " " + this.responseresultcm.j25 + " " + this.responseresultcm.k25 +
      "\n" + this.responseresultcm.i26 + " " + this.responseresultcm.j26 + " " + this.responseresultcm.k26 +
      "\n" + this.responseresultcm.i27 + " " + this.responseresultcm.j27 + " " + this.responseresultcm.k27 +
      "\n" + this.responseresultcm.i28 + " " + this.responseresultcm.j28 + " " + this.responseresultcm.k28 +
      "\n" + this.responseresultcm.i29 + " " + this.responseresultcm.j29 + " " + this.responseresultcm.k29 +
      "\n" + this.responseresultcm.i30 + " " + this.responseresultcm.j30 + " " + this.responseresultcm.k30 +
      "\n" + this.responseresultcm.i31 + " " + this.responseresultcm.j31 + " " + this.responseresultcm.k31 +
      "\n" + this.responseresultcm.i32 + " " + this.responseresultcm.j32 + " " + this.responseresultcm.k32 +
      "\n" + this.responseresultcm.i33 + " " + this.responseresultcm.j33 + " " + this.responseresultcm.k33 +
      "\n\nInvestment" +
      "\n" + this.responseresultcm.n4 + " " + this.responseresultcm.o4 + " " + this.responseresultcm.p4 +
      "\n" + this.responseresultcm.n5 + " " + this.responseresultcm.o5 + " " + this.responseresultcm.q5 +
      "\n" + this.responseresultcm.n6 + " " + this.responseresultcm.o6 + " " + this.responseresultcm.p6 +
      "\n\n" + this.responseresultcm.n8 + " " + this.responseresultcm.o8 + " " + this.responseresultcm.p8 + " " + this.responseresultcm.q8 +
      "\n" + this.responseresultcm.n9 + " " + this.responseresultcm.o9 + " " + this.responseresultcm.p9 + " " + this.responseresultcm.q9 +
      "\n" + this.responseresultcm.n10 + " " + this.responseresultcm.o10 + " " + this.responseresultcm.p10 + " " + this.responseresultcm.q10 +
      "\n\n" + this.responseresultcm.n12 + " " + this.responseresultcm.o12 + " " + this.responseresultcm.p12 + " " + this.responseresultcm.q12 + " " + this.responseresultcm.s12 +
      "\n" + this.responseresultcm.n13 + " " + this.responseresultcm.o13 + " " + this.responseresultcm.p13 + " " + this.responseresultcm.q13 + " " + this.responseresultcm.s13 +
      "\n" + this.responseresultcm.n14 + " " + this.responseresultcm.o14 + " " + this.responseresultcm.p14 + " " + this.responseresultcm.q14 + " " + this.responseresultcm.s14 +
      "\n\n" + this.responseresultcm.n16 + " " + this.responseresultcm.o16 + " " + this.responseresultcm.p16 + " " + this.responseresultcm.r16 +
      "\n" + this.responseresultcm.n17 + " " + this.responseresultcm.o17 + " " + this.responseresultcm.p17 + " " + this.responseresultcm.r17 +
      "\n" + this.responseresultcm.n18 + " " + this.responseresultcm.o18 + " " + this.responseresultcm.p18 + " " + this.responseresultcm.r18 +
      "\n" + this.responseresultcm.n19 + " " + this.responseresultcm.o19 + " " + this.responseresultcm.p19 + " " + this.responseresultcm.r19 +
      "\n\n" + this.responseresultcm.n21 + " " + this.responseresultcm.o21 + " " + this.responseresultcm.p21 +
      "\n" + this.responseresultcm.n22 +
      "\n" + this.responseresultcm.n23 + " " + this.responseresultcm.o23 + " " + this.responseresultcm.p23 +
      "\n" + this.responseresultcm.n24 + " " + this.responseresultcm.o24 + " " + this.responseresultcm.p24 +
      "\n" + this.responseresultcm.n25 +
      "\n" + this.responseresultcm.n26 + " " + this.responseresultcm.o26 + " " + this.responseresultcm.p26 +
      "\n" + this.responseresultcm.n27 + " " + this.responseresultcm.o27 + " " + this.responseresultcm.p27 +
      "\n" + this.responseresultcm.n28 +
      "\n" + this.responseresultcm.n29 + " " + this.responseresultcm.o29 + " " + this.responseresultcm.p29 +
      "\n" + this.responseresultcm.n30 + " " + this.responseresultcm.o30 + " " + this.responseresultcm.p30 +
      "\n\n" + this.responseresultcm.n32 +
      "\n" + this.responseresultcm.n33 + " " + this.responseresultcm.o33 + " " + this.responseresultcm.p33 +
      "\n\nMarketing" +
      "\nGraph" +
      "\n" + this.responseresultcm.u5 + " " + this.responseresultcm.v5 +
      "\n" + this.responseresultcm.u6 + " " + this.responseresultcm.v6 +
      "\n" + this.responseresultcm.u7 + " " + this.responseresultcm.v7 +
      "\n" + this.responseresultcm.u8 + " " + this.responseresultcm.v8 +
      "\n" + this.responseresultcm.u9 + " " + this.responseresultcm.v9 +
      "\n" + this.responseresultcm.u10 + " " + this.responseresultcm.v10 +
      "\n" + this.responseresultcm.u11 + " " + this.responseresultcm.v11 +
      "\n" + this.responseresultcm.u12 + " " + this.responseresultcm.v12 +
      "\n" + this.responseresultcm.u13 + " " + this.responseresultcm.v13 +
      "\n\nGraph" +
      "\n" + this.responseresultcm.u16 + " " + this.responseresultcm.v16 +
      "\n" + this.responseresultcm.u17 + " " + this.responseresultcm.v17 +
      "\n" + this.responseresultcm.u18 + " " + this.responseresultcm.v18 +
      "\n" + this.responseresultcm.u19 + " " + this.responseresultcm.v19 +
      "\n" + this.responseresultcm.u20 + " " + this.responseresultcm.v20 +
      "\n" + this.responseresultcm.u21 + " " + this.responseresultcm.v21 +
      "\n" + this.responseresultcm.u22 + " " + this.responseresultcm.v22 +
      "\n" + this.responseresultcm.u23 + " " + this.responseresultcm.v23 +
      "\n" + this.responseresultcm.u24 + " " + this.responseresultcm.v24 +
      "\n\n" + this.responseresultcm.u26 + " " + this.responseresultcm.v26 + " " + this.responseresultcm.w26 +
      "\n" + this.responseresultcm.u27 + " " + this.responseresultcm.v27 + " " + this.responseresultcm.w27 +
      "\n" + this.responseresultcm.u28 + " " + this.responseresultcm.v28 + " " + this.responseresultcm.w28 +
      "\n\n" + this.responseresultcm.u30 + " " + this.responseresultcm.v30 + " " + this.responseresultcm.w30 + //v30 & w30 not find
      "\n" + this.responseresultcm.u31 + " " + this.responseresultcm.v31 + " " + this.responseresultcm.w31 +
      "\n" + this.responseresultcm.u32 + " " + this.responseresultcm.v32 + " " + this.responseresultcm.w32 +
      "\n\n" + this.responseresultcm.u34 + " " + this.responseresultcm.v34 + " " + this.responseresultcm.w34 +
      "\n" + this.responseresultcm.u35 + " " + this.responseresultcm.v35 + " " + this.responseresultcm.w35 +
      "\n" + this.responseresultcm.u36 + " " + this.responseresultcm.v36 + " " + this.responseresultcm.w36 +
      "\n" + this.responseresultcm.u37 + " " + this.responseresultcm.v37 + " " + this.responseresultcm.w37 +
      "\n\n" + this.responseresultcm.u39 + " " + this.responseresultcm.v39 + " " + this.responseresultcm.w39 +
      "\n" + this.responseresultcm.u40 + " " + this.responseresultcm.v40 + " " + this.responseresultcm.w40 +
      "\n" + this.responseresultcm.u41 + " " + this.responseresultcm.v41 + " " + this.responseresultcm.w41 +
      "\n" + this.responseresultcm.u42 + " " + this.responseresultcm.v42 + " " + this.responseresultcm.w42 +
      "\n\n" + this.responseresultcm.u44 + " " + this.responseresultcm.v44 + " " + this.responseresultcm.w44 +
      "\n" + this.responseresultcm.u45 + " " + this.responseresultcm.v45 + " " + this.responseresultcm.w45 +
      "\n" + this.responseresultcm.u46 + " " + this.responseresultcm.v46 + " " + this.responseresultcm.w46 +
      "\n" + this.responseresultcm.u47 + " " + this.responseresultcm.v47 + " " + this.responseresultcm.w47 +
      "\n\n" + this.responseresultcm.u49 + " " + this.responseresultcm.v49 + " " + this.responseresultcm.w49 +
      "\n" + this.responseresultcm.u50 + " " + this.responseresultcm.v50 + " " + this.responseresultcm.w50 +
      "\n" + this.responseresultcm.u51 + " " + this.responseresultcm.v51 + " " + this.responseresultcm.w51 +
      "\n" + this.responseresultcm.u52 + " " + this.responseresultcm.v52 + " " + this.responseresultcm.w52 +
      "\n\n" + this.responseresultcm.u54 + " " + this.responseresultcm.v54 + " " + this.responseresultcm.w54 +
      "\n" + this.responseresultcm.u55 + " " + this.responseresultcm.v55 + " " + this.responseresultcm.w55 +
      "\n" + this.responseresultcm.u56 + " " + this.responseresultcm.v56 + " " + this.responseresultcm.w56 +
      "\n" + this.responseresultcm.u57 + " " + this.responseresultcm.v57 + " " + this.responseresultcm.w57 +

      "\n\nInput\nParameters  Input" +
      "\nLocation  " + this.result[0] +
      "\nLicensing & Regulation  " + this.result[1] +
      "\nDemand  " + this.result[2] +
      "\nInterior  " + this.result[3] +
      "\nProduct Mix  " + this.result[4] +
      "\nProcurement Vendor  " + this.result[5] +
      "\nPoint of Sale  " + this.result[6] +
      "\nSecurity  " + this.result[7] +
      "\nMusic & Wifi  " + this.result[8] +
      "\nPrice per cup of tea, INR  " + this.result[9] +
      "\nMonthly Promotion Budget, INR  " + this.result[10] +
      "\nSocial Media Campaign  " + this.result[11] +
      "\nLocal Advertising Campaign  " + this.result[12] +
      "\nCollaboration Campaign  " + this.result[13] +
      "\nService  " + this.result[13] +
      "\n\nOutput" +
      "\nCash Balance" +
      "\nParameter  Output" +
      "\nInitial Cash  " + this.responseresultdatabase.c50 +
      "\nInterior  " + this.responseresultdatabase.c51 +
      "\nEquipment  " + this.responseresultdatabase.c52 +
      "\nTechnology  " + this.responseresultdatabase.c53 +
      "\nCash Outflow  " + this.responseresultdatabase.c54 +
      "\nBorrowings " + this.responseresultdatabase.c56 +
      "\n\nOperational Cost" +
      "\nParameter  Output" +
      "\nRent  " + this.responseresultdatabase.c64 +
      "\nCompliance  " + this.responseresultdatabase.c65 +
      "\nMaintenance  " + Number(this.responseresultdatabase.c66) + (Number(this.responseresultdatabase.c67)) +
      "\nRaw Material Purchase  " + Number(this.responseresultdatabase.c68) + (Number(this.responseresultdatabase.c69)) +
      "\nService  " + this.responseresultdatabase.c70 +
      "\Interest  " + this.responseresultdatabase.c71 +
      "\nPromotion  " + this.responseresultdatabase.c72 +
      "\nTotal  " + this.responseresultdatabase.c73 +
      "\n\nIncome Statement" +
      "\nParameter  Output" +
      "\nRevenue  " + this.responseresultdatabase.c76 +
      "\nOperational Cost  " + this.responseresultdatabase.c77 +
      "\nDepreciation  " + this.responseresultdatabase.c78 +
      "\nProfit  " + this.responseresultdatabase.c79 +
      "\n\nKPI" +
      "\nParameter  Output" +
      "\nMargin  " + this.responseresultdatabase.c82 +
      "\nSales Forecasting Error  " + this.responseresultdatabase.c47;

    this.feedback = "\n\nFixed Data" +
      "\nMarket" +
      "\n" + this.responseresultcm.b3 +
      "\n\nLocation" +
      "\n" + this.responseresultcm.d4 + " " + this.responseresultcm.e4 +
      "\n\n" + this.responseresultcm.d6 + " " + this.responseresultcm.e6 + " " + this.responseresultcm.f6 +
      "\n" + this.responseresultcm.d7 + " " + this.responseresultcm.e7 + " " + this.responseresultcm.f7 +
      "\n" + this.responseresultcm.d8 + " " + this.responseresultcm.e8 + " " + this.responseresultcm.f8 +
      "\n\n" + this.responseresultcm.d10 + "  " + this.responseresultcm.e10 + "  " + this.responseresultcm.f10 + "  " + this.responseresultcm.g10 +
      "\n" + this.responseresultcm.d11 + "  " + this.responseresultcm.e11 + "  " + this.responseresultcm.f11 + "  " + this.responseresultcm.g11 +
      "\n" + this.responseresultcm.d12 + "  " + this.responseresultcm.e12 + "  " + this.responseresultcm.f12 + "  " + this.responseresultcm.g12 +
      "\n\n" + this.responseresultcm.d14 +
      "\n" + this.responseresultcm.d15 + " " + this.responseresultcm.e15 +
      "\n\nDemand\n" +
      "   " + this.responseresultcm.d7 + " " + this.responseresultcm.d8 +
      "\n" + this.responseresultcm.i6 + " " + this.responseresultcm.j6 + " " + this.responseresultcm.k6 +
      "\n" + this.responseresultcm.i7 + " " + this.responseresultcm.j7 + " " + this.responseresultcm.k7 +
      "\n" + this.responseresultcm.i9 + " " + this.responseresultcm.j9 + " " + this.responseresultcm.k9 +
      "\n" + this.responseresultcm.i11 + " " + this.responseresultcm.j11 + " " + this.responseresultcm.k11 +
      "\n" + this.responseresultcm.i13 + " " + this.responseresultcm.j13 + " " + this.responseresultcm.k13 +
      "\n\n" + this.responseresultcm.j17 +
      "\n" + this.responseresultcm.i18 + " " + this.responseresultcm.j18 +
      "\n" + this.responseresultcm.i19 + " " + this.responseresultcm.j19 +
      "\n\n" + this.responseresultcm.i21 + " " + this.responseresultcm.j5 + " " + this.responseresultcm.k5 +
      "\n" + this.responseresultcm.i22 + " " + this.responseresultcm.j22 + " " + this.responseresultcm.k22 +
      "\n" + this.responseresultcm.i23 + " " + this.responseresultcm.j23 + " " + this.responseresultcm.k23 +
      "\n" + this.responseresultcm.i24 + " " + this.responseresultcm.j24 + " " + this.responseresultcm.k24 +
      "\n" + this.responseresultcm.i25 + " " + this.responseresultcm.j25 + " " + this.responseresultcm.k25 +
      "\n" + this.responseresultcm.i26 + " " + this.responseresultcm.j26 + " " + this.responseresultcm.k26 +
      "\n" + this.responseresultcm.i27 + " " + this.responseresultcm.j27 + " " + this.responseresultcm.k27 +
      "\n" + this.responseresultcm.i28 + " " + this.responseresultcm.j28 + " " + this.responseresultcm.k28 +
      "\n" + this.responseresultcm.i29 + " " + this.responseresultcm.j29 + " " + this.responseresultcm.k29 +
      "\n" + this.responseresultcm.i30 + " " + this.responseresultcm.j30 + " " + this.responseresultcm.k30 +
      "\n" + this.responseresultcm.i31 + " " + this.responseresultcm.j31 + " " + this.responseresultcm.k31 +
      "\n" + this.responseresultcm.i32 + " " + this.responseresultcm.j32 + " " + this.responseresultcm.k32 +
      "\n" + this.responseresultcm.i33 + " " + this.responseresultcm.j33 + " " + this.responseresultcm.k33 +
      "\n\nInvestment" +
      "\n" + this.responseresultcm.n4 + " " + this.responseresultcm.o4 + " " + this.responseresultcm.p4 +
      "\n" + this.responseresultcm.n5 + " " + this.responseresultcm.o5 + " " + this.responseresultcm.q5 +
      "\n" + this.responseresultcm.n6 + " " + this.responseresultcm.o6 + " " + this.responseresultcm.p6 +
      "\n\n" + this.responseresultcm.n8 + " " + this.responseresultcm.o8 + " " + this.responseresultcm.p8 + " " + this.responseresultcm.q8 +
      "\n" + this.responseresultcm.n9 + " " + this.responseresultcm.o9 + " " + this.responseresultcm.p9 + " " + this.responseresultcm.q9 +
      "\n" + this.responseresultcm.n10 + " " + this.responseresultcm.o10 + " " + this.responseresultcm.p10 + " " + this.responseresultcm.q10 +
      "\n\n" + this.responseresultcm.n12 + " " + this.responseresultcm.o12 + " " + this.responseresultcm.p12 + " " + this.responseresultcm.q12 + " " + this.responseresultcm.s12 +
      "\n" + this.responseresultcm.n13 + " " + this.responseresultcm.o13 + " " + this.responseresultcm.p13 + " " + this.responseresultcm.q13 + " " + this.responseresultcm.s13 +
      "\n" + this.responseresultcm.n14 + " " + this.responseresultcm.o14 + " " + this.responseresultcm.p14 + " " + this.responseresultcm.q14 + " " + this.responseresultcm.s14 +
      "\n\n" + this.responseresultcm.n16 + " " + this.responseresultcm.o16 + " " + this.responseresultcm.p16 + " " + this.responseresultcm.r16 +
      "\n" + this.responseresultcm.n17 + " " + this.responseresultcm.o17 + " " + this.responseresultcm.p17 + " " + this.responseresultcm.r17 +
      "\n" + this.responseresultcm.n18 + " " + this.responseresultcm.o18 + " " + this.responseresultcm.p18 + " " + this.responseresultcm.r18 +
      "\n" + this.responseresultcm.n19 + " " + this.responseresultcm.o19 + " " + this.responseresultcm.p19 + " " + this.responseresultcm.r19 +
      "\n\n" + this.responseresultcm.n21 + " " + this.responseresultcm.o21 + " " + this.responseresultcm.p21 +
      "\n" + this.responseresultcm.n22 +
      "\n" + this.responseresultcm.n23 + " " + this.responseresultcm.o23 + " " + this.responseresultcm.p23 +
      "\n" + this.responseresultcm.n24 + " " + this.responseresultcm.o24 + " " + this.responseresultcm.p24 +
      "\n" + this.responseresultcm.n25 +
      "\n" + this.responseresultcm.n26 + " " + this.responseresultcm.o26 + " " + this.responseresultcm.p26 +
      "\n" + this.responseresultcm.n27 + " " + this.responseresultcm.o27 + " " + this.responseresultcm.p27 +
      "\n" + this.responseresultcm.n28 +
      "\n" + this.responseresultcm.n29 + " " + this.responseresultcm.o29 + " " + this.responseresultcm.p29 +
      "\n" + this.responseresultcm.n30 + " " + this.responseresultcm.o30 + " " + this.responseresultcm.p30 +
      "\n\n" + this.responseresultcm.n32 +
      "\n" + this.responseresultcm.n33 + " " + this.responseresultcm.o33 + " " + this.responseresultcm.p33 +
      "\n\nMarketing" +
      "\nGraph" +
      "\n" + this.responseresultcm.u5 + " " + this.responseresultcm.v5 +
      "\n" + this.responseresultcm.u6 + " " + this.responseresultcm.v6 +
      "\n" + this.responseresultcm.u7 + " " + this.responseresultcm.v7 +
      "\n" + this.responseresultcm.u8 + " " + this.responseresultcm.v8 +
      "\n" + this.responseresultcm.u9 + " " + this.responseresultcm.v9 +
      "\n" + this.responseresultcm.u10 + " " + this.responseresultcm.v10 +
      "\n" + this.responseresultcm.u11 + " " + this.responseresultcm.v11 +
      "\n" + this.responseresultcm.u12 + " " + this.responseresultcm.v12 +
      "\n" + this.responseresultcm.u13 + " " + this.responseresultcm.v13 +
      "\n\nGraph" +
      "\n" + this.responseresultcm.u16 + " " + this.responseresultcm.v16 +
      "\n" + this.responseresultcm.u17 + " " + this.responseresultcm.v17 +
      "\n" + this.responseresultcm.u18 + " " + this.responseresultcm.v18 +
      "\n" + this.responseresultcm.u19 + " " + this.responseresultcm.v19 +
      "\n" + this.responseresultcm.u20 + " " + this.responseresultcm.v20 +
      "\n" + this.responseresultcm.u21 + " " + this.responseresultcm.v21 +
      "\n" + this.responseresultcm.u22 + " " + this.responseresultcm.v22 +
      "\n" + this.responseresultcm.u23 + " " + this.responseresultcm.v23 +
      "\n" + this.responseresultcm.u24 + " " + this.responseresultcm.v24 +
      "\n\n" + this.responseresultcm.u26 + " " + this.responseresultcm.v26 + " " + this.responseresultcm.w26 +
      "\n" + this.responseresultcm.u27 + " " + this.responseresultcm.v27 + " " + this.responseresultcm.w27 +
      "\n" + this.responseresultcm.u28 + " " + this.responseresultcm.v28 + " " + this.responseresultcm.w28 +
      "\n\n" + this.responseresultcm.u30 + " " + this.responseresultcm.v30 + " " + this.responseresultcm.w30 + //v30 & w30 not find
      "\n" + this.responseresultcm.u31 + " " + this.responseresultcm.v31 + " " + this.responseresultcm.w31 +
      "\n" + this.responseresultcm.u32 + " " + this.responseresultcm.v32 + " " + this.responseresultcm.w32 +
      "\n\n" + this.responseresultcm.u34 + " " + this.responseresultcm.v34 + " " + this.responseresultcm.w34 +
      "\n" + this.responseresultcm.u35 + " " + this.responseresultcm.v35 + " " + this.responseresultcm.w35 +
      "\n" + this.responseresultcm.u36 + " " + this.responseresultcm.v36 + " " + this.responseresultcm.w36 +
      "\n" + this.responseresultcm.u37 + " " + this.responseresultcm.v37 + " " + this.responseresultcm.w37 +
      "\n\n" + this.responseresultcm.u39 + " " + this.responseresultcm.v39 + " " + this.responseresultcm.w39 +
      "\n" + this.responseresultcm.u40 + " " + this.responseresultcm.v40 + " " + this.responseresultcm.w40 +
      "\n" + this.responseresultcm.u41 + " " + this.responseresultcm.v41 + " " + this.responseresultcm.w41 +
      "\n" + this.responseresultcm.u42 + " " + this.responseresultcm.v42 + " " + this.responseresultcm.w42 +
      "\n\n" + this.responseresultcm.u44 + " " + this.responseresultcm.v44 + " " + this.responseresultcm.w44 +
      "\n" + this.responseresultcm.u45 + " " + this.responseresultcm.v45 + " " + this.responseresultcm.w45 +
      "\n" + this.responseresultcm.u46 + " " + this.responseresultcm.v46 + " " + this.responseresultcm.w46 +
      "\n" + this.responseresultcm.u47 + " " + this.responseresultcm.v47 + " " + this.responseresultcm.w47 +
      "\n\n" + this.responseresultcm.u49 + " " + this.responseresultcm.v49 + " " + this.responseresultcm.w49 +
      "\n" + this.responseresultcm.u50 + " " + this.responseresultcm.v50 + " " + this.responseresultcm.w50 +
      "\n" + this.responseresultcm.u51 + " " + this.responseresultcm.v51 + " " + this.responseresultcm.w51 +
      "\n" + this.responseresultcm.u52 + " " + this.responseresultcm.v52 + " " + this.responseresultcm.w52 +
      "\n\n" + this.responseresultcm.u54 + " " + this.responseresultcm.v54 + " " + this.responseresultcm.w54 +
      "\n" + this.responseresultcm.u55 + " " + this.responseresultcm.v55 + " " + this.responseresultcm.w55 +
      "\n" + this.responseresultcm.u56 + " " + this.responseresultcm.v56 + " " + this.responseresultcm.w56 +
      "\n" + this.responseresultcm.u57 + " " + this.responseresultcm.v57 + " " + this.responseresultcm.w57 +

      "\n\nInput\nParameters  Input" +
      "\nLocation  " + this.result[0] +
      "\nLicensing & Regulation  " + this.result[1] +
      "\nDemand  " + this.result[2] +
      "\nInterior  " + this.result[3] +
      "\nProduct Mix  " + this.result[4] +
      "\nProcurement Vendor  " + this.result[5] +
      "\nPoint of Sale  " + this.result[6] +
      "\nSecurity  " + this.result[7] +
      "\nMusic & Wifi  " + this.result[8] +
      "\nPrice per cup of tea, INR  " + this.result[9] +
      "\nMonthly Promotion Budget, INR  " + this.result[10] +
      "\nSocial Media Campaign  " + this.result[11] +
      "\nLocal Advertising Campaign  " + this.result[12] +
      "\nCollaboration Campaign  " + this.result[13] +
      "\nService  " + this.result[13] +
      "\n\nOutput" +
      "\nCash Balance" +
      "\nParameter  Output" +
      "\nInitial Cash  " + this.responseresultdatabase.c50 +
      "\nInterior  " + this.responseresultdatabase.c51 +
      "\nEquipment  " + this.responseresultdatabase.c52 +
      "\nTechnology  " + this.responseresultdatabase.c53 +
      "\nCash Outflow  " + this.responseresultdatabase.c54 +
      "\nBorrowings " + this.responseresultdatabase.c56 +
      "\n\nOperational Cost" +
      "\nParameter  Output" +
      "\nRent  " + this.responseresultdatabase.c64 +
      "\nCompliance  " + this.responseresultdatabase.c65 +
      "\nMaintenance  " + Number(this.responseresultdatabase.c66) + (Number(this.responseresultdatabase.c67)) +
      "\nRaw Material Purchase  " + Number(this.responseresultdatabase.c68) + (Number(this.responseresultdatabase.c69)) +
      "\nService  " + this.responseresultdatabase.c70 +
      "\Interest  " + this.responseresultdatabase.c71 +
      "\nPromotion  " + this.responseresultdatabase.c72 +
      "\nTotal  " + this.responseresultdatabase.c73 +
      "\n\nIncome Statement" +
      "\nParameter  Output" +
      "\nRevenue  " + this.responseresultdatabase.c76 +
      "\nOperational Cost  " + this.responseresultdatabase.c77 +
      "\nDepreciation  " + this.responseresultdatabase.c78 +
      "\nProfit  " + this.responseresultdatabase.c79 +
      "\n\nKPI" +
      "\nParameter  Output" +
      "\nMargin  " + this.responseresultdatabase.c82 +
      "\nSales Forecasting Error  " + this.responseresultdatabase.c47;



    if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
      this.getuseranalysisValue();
    }


  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }


}


// decision checklist popup...............
@Component({
  selector: 'app-decisionchecklistpopup',
  standalone: true,
  imports: [CommonModule, MatDialogModule,FormsModule],
  templateUrl: '../../../common/submit-popup/submitpopup.component.html',
  styleUrls: ['../../../common/submit-popup/submitpopup.component.scss'],

})
export class DecisionchecklistpopupComponent extends AbstractComponent {
  showtab: boolean = true;
  resultarray: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DecisionchecklistpopupComponent>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }


  save() {
    this.checkloading = true;
    let apiname = '/businessbasic/singleinputbusinessbasic';
    let decisionsubmitData = {
      "h4": "yes"
    }
    this._api.businessdatawrite("businessbasic", 1,
      decisionsubmitData, apiname, 'businessbasiccasemanagementid').subscribe((data: any) => {

        if (data.status == "Success") {
          this._api.savekpivalue(this.data.resultarray[16] == "-" ? 0 : (this.data.resultarray[16] * 100).toFixed(0),
            this.data.resultarray[17] == "-" ? 0 : (this.data.resultarray[17] * 100).toFixed(0),
            this.data.resultarray[15] == "-" ? 0 : (this.data.resultarray[15]).toFixed(1), 'update', this.noofattempt);
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
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Business Basics").subscribe((data: any) => {

      if (data.status == "Success") {

      }
    }, (error: any) => { this.checkloading = false; })
  }


  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment, apiname
      , "Business Basics"
    ).subscribe((data: any) => {

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
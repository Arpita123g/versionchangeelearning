import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { ProjectmanagementassesmentserviceService } from 'src/app/service/assesment/Projectmanagement/projectmanagementassesmentservice.service';
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
  selector: 'app-projectmanagementdecisionchecklist',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './projectmanagementdecisionchecklist.component.html',
  styleUrls: ['./projectmanagementdecisionchecklist.component.scss'],
})
export class ProjectmanagementdecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  result: any = [];
  result1: any = [];
  results = ['ss', 'dd'];
  isClass: boolean[] = [false, true, false];
  optional: any[] = [];
  playername: string = '';
  dropdownvalue: any = [];
  roundname: string = '';
  foodforthoughtQNo: number = 0;
  errorlist: any = [];
  previousResulList: any = [];
  responseresultcm: any = [];
  responseresultdatabase: any = [];
  assesment: string = '';
  assesmentbody: string = '';
  feedback: string = '';
  useranalysisvalue: any = {};
  useranalysisinput: string = '';
  submitprove: string = '';
  disabled: boolean = false;
  kpivaluearray: any = [];
  @Output() newItemEvent = new EventEmitter<any>();
  foodforthought: boolean = true;
  optionalcase: any = ['foodforthoughtstatus'];
  blankInputMessage: any;
  databasecellnamearray: any;
  periodcellnamearray: any;
  languageid: number = 0;
  dataoflang: any = [];

  tableData: any = [
    {
      title: 'Planning',
      status: 'active',
      body: [
        { title: 'Overtime days, Priya Sharma', cell: 'ax14' },
        { title: 'Overtime days, Rohan Kapoor', cell: 'ay14' },
        { title: 'Overtime days, Aisha Khan', cell: 'az14' },
        { title: 'm45', cell: 'ax17' },
        { title: 'm46', cell: 'ax18' },
        { title: 'm47', cell: 'ax19' },
        { title: 'Task 1', cell: 'd28' },
        { title: 'Task 2', cell: 'd29' },
        { title: 'Task 3', cell: 'd30' },
        { title: 'Task 4', cell: 'd31' },
        { title: 'Task 5', cell: 'd32' },
        { title: 'Task 6', cell: 'd33' },
        { title: 'Task 7', cell: 'd34' },
        { title: 'Task 8', cell: 'd35' },
        { title: 'Task 9', cell: 'd36' },
        { title: 'Task 10', cell: 'd37' },
        { title: 'Task 11', cell: 'd38' },
        { title: 'Task 12', cell: 'd39' },
        { title: 'Task 13', cell: 'd40' },
        { title: 'Task 14', cell: 'd41' },
        { title: 'Task 15', cell: 'd42' },
        { title: 'Task 16', cell: 'd43' },
        { title: 'Task 17', cell: 'd44' },
        { title: 'Task 18', cell: 'd45' },
        { title: 'Task 19', cell: 'd46' },
        { title: 'Task 20', cell: 'd47' },
      ],
    },
  ];

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    private projectmanagementassesmentservice: ProjectmanagementassesmentserviceService,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.useranalysisinput = String(localStorage.getItem('useranalysis'));
    if (this.useranalysisinput == null || this.useranalysisinput == 'null') {
      this.useranalysisinput = '';
    }
    if (Number(this.noofattempt) > 1) {
      this.getPreviousData(String(Number(this.noofattempt) - 1));
    } else {
      this.getFetchData(this.noofattempt);
    }
  }

  checkPercent(title: string) {
    if (title.includes('%')) {
      return true;
    } else {
      return false;
    }
  }

  // For Lanaguage

  // getPreviousData(attempt: string) {
  //   let apiname = '/projectmanagement/fetchprojectmanagement';
  //   this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {

  //           if (data.resultList != null) {

  //             for (let i = 0; i < this.databasecellnamearray.length; i++) {
  //               this.previousResulList[i] = data.resultList[0].projectmanagementdata[this.databasecellnamearray[i]];
  //             }

  //             for (let i = 0; i < this.databasecellnamearray.length; i++) {
  //               if (Number(this.previousResulList[i]) == 0) {
  //                 this.previousResulList[i] = "-"
  //               } else {
  //                 this.previousResulList[i] = data.resultList[0].projectmanagementdata[this.databasecellnamearray[i]];
  //               }
  //               if ((i > 44) && (i < 50)) {
  //                 if (this.previousResulList[i] == 1) {
  //                   this.previousResulList[i] = data.resultList[0].projectmanagementLM[this.languageselect.toLowerCase()].b396;
  //                 } else {
  //                   this.previousResulList[i] = data.resultList[0].projectmanagementLM[this.languageselect.toLowerCase()].b397;
  //                 }
  //               }
  //               if ((i > 51) && (i < 57)) {
  //                 if (this.previousResulList[i] == 1) {
  //                   this.previousResulList[i] = data.resultList[0].projectmanagementLM[this.languageselect.toLowerCase()].b396;
  //                 } else {
  //                   this.previousResulList[i] = data.resultList[0].projectmanagementLM[this.languageselect.toLowerCase()].b397;
  //                 }
  //               }
  //             }
  //             this.getFetchData(this.noofattempt);
  //           }

  //         } else {
  //           this.checkloading = false;

  //         }
  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }

  getPreviousData(attempt: string) {
    let apiname = '/projectmanagement/fetchprojectmanagement';
    this._api.fetchGameData(apiname, attempt).subscribe({
      next: (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            for (let i = 0; i < this.databasecellnamearray.length; i++) {
              this.previousResulList[i] =
                data.resultList[0].projectmanagementdata[
                this.databasecellnamearray[i]
                ];
            }
            for (let i = 6; i < 11; i++) {
              if (this.previousResulList[i] == '0') {
                this.previousResulList[i] = 'No';
              } else {
                this.previousResulList[i] = 'Yes';
              }
            }
            for (let i = 23; i < 32; i++) {
              if (this.previousResulList[i] == '0') {
                this.previousResulList[i] = 'No';
              } else {
                this.previousResulList[i] = 'Yes';
              }
            }
            for (let i = 0; i < this.databasecellnamearray.length; i++) {
              if (Number(this.previousResulList[i]) == 0) {
                this.previousResulList[i] = '-';
              } else {
                this.previousResulList[i] =
                  data.resultList[0].projectmanagementdata[
                  this.databasecellnamearray[i]
                  ];
              }
            }

            this.getFetchData(this.noofattempt);
          }
        } else {
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      },
    });
  }

  // For Language

  // getFetchData(attempt: string) {
  //   this.checkloading = true;
  //   let apiname = '/projectmanagement/fetchprojectmanagement';
  //   this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             if (data.resultList[0].projectmanagementCM.projectmanagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
  //               this.foodforthought = false;
  //             } else {
  //               this.foodforthought = true;
  //             }
  //             let attempt = data.resultList[0].attempt;
  //             this.playername = data.resultList[0].userRegister.username;
  //             this.responseresultcm = data.resultList[0].projectmanagementCM.projectmanagementperioddata;
  //             this.responseresultdatabase = data.resultList[0].projectmanagementdata;
  //             let roundvalue = "round" + Number(attempt);
  //             this._global.casemanagementid.next(data.resultList[0].projectmanagementcmid);
  //             this.foodforthoughtQNo = data.resultList[0].projectmanagementdata.al97;
  //             this.submitprove = data.resultList[0].projectmanagementdata.al96;
  //             this.dataoflang = data.resultList[0].projectmanagementLM[this.languageselect.toLowerCase()];
  //             this.blankInputMessage = [
  //               this.dataoflang.b79 + ' 1', this.dataoflang.b79 + ' 2', this.dataoflang.b79 + ' 3',
  //               this.dataoflang.b79 + ' 4', this.dataoflang.b79 + ' 5', this.dataoflang.b79 + ' 6',
  //               this.dataoflang.b79 + ' 7', this.dataoflang.b79 + ' 8', this.dataoflang.b79 + ' 9',
  //               this.dataoflang.b79 + ' 10', this.dataoflang.b79 + ' 11', this.dataoflang.b79 + ' 12',
  //               this.dataoflang.b79 + ' 13', this.dataoflang.b79 + ' 14', this.dataoflang.b79 + ' 15',
  //               this.dataoflang.b79 + ' 16', this.dataoflang.b79 + ' 17', this.dataoflang.b79 + ' 18',
  //               this.dataoflang.b79 + ' 19', this.dataoflang.b79 + ' 20', this.dataoflang.b79 + ' 21',
  //               this.dataoflang.b79 + ' 22', this.dataoflang.b79 + ' 23', this.dataoflang.b79 + ' 24',
  //               this.dataoflang.b79 + ' 25', this.dataoflang.b147, this.dataoflang.b148,
  //               this.dataoflang.b149, this.dataoflang.b150, this.dataoflang.b151,
  //               this.dataoflang.b152, this.dataoflang.b153, this.dataoflang.b154,
  //               this.dataoflang.b155, this.dataoflang.b221, this.dataoflang.b222,
  //               this.dataoflang.b223, this.dataoflang.b224, this.dataoflang.b225, this.dataoflang.b226,
  //               this.dataoflang.b158, this.dataoflang.b166, this.dataoflang.b167, this.dataoflang.b168,
  //               this.dataoflang.b169, this.dataoflang.b188, this.dataoflang.b189, this.dataoflang.b190,
  //               this.dataoflang.b191, this.dataoflang.b192, this.dataoflang.b213, this.dataoflang.b214,
  //               this.dataoflang.b215, this.dataoflang.b199, this.dataoflang.b200, this.dataoflang.b201,
  //               this.dataoflang.b202, this.dataoflang.b203
  //             ]
  //             this.languageid = data.resultList[0].projectmanagementLM.projectmanagementlmid;

  //             for (let i = 0; i < this.databasecellnamearray.length; i++) {
  //               this.result[i] = data.resultList[0].projectmanagementdata[this.databasecellnamearray[i]];
  //               if ((i > 44) && (i < 50)) {
  //                 if (this.result[i] == 1) {
  //                   this.result[i] = this.dataoflang.b396;
  //                 } else {
  //                   this.result[i] = this.dataoflang.b397;
  //                 }
  //               }
  //               if ((i > 51) && (i < 57)) {
  //                 if (this.result[i] == 1) {
  //                   this.result[i] = this.dataoflang.b396;
  //                 } else {
  //                   this.result[i] = this.dataoflang.b397;
  //                 }
  //               }
  //             }

  //             for (let i = 0; i < this.databasecellnamearray.length; i++) {
  //               if (Number(this.result[i]) == 0) {
  //                 this.result[i] = "-"
  //               }
  //             }
  //             if ((this.submitprove == 'yes') || (this.timefinished)) {
  //               this.disabled = true;
  //             } else {
  //               this.disabled = false;
  //             }

  //             if (data.resultList[0].aiAssessmentMaster != null) {
  //               let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
  //               if (analysisshowdata == 'yes') {
  //                 this.analysisshow = true
  //               } else {
  //                 this.analysisshow = false;
  //               }
  //             }

  //             for (let i = 0; i < this.optionalcase.length; i++) {
  //               const caseStatus = data.resultList[0].projectmanagementCM.projectmanagementCMActiveStatus[this.optionalcase[i]];
  //               if (caseStatus == "inactive") {
  //                 this.optional[i] = false;
  //               } else {
  //                 this.optional[i] = true;
  //               }
  //             }

  //             for (let i = 0; i < this.databasecellnamearray.length; i++) {
  //               if (attempt > 1) {

  //                 if (this.result[i] == this.previousResulList[i]) {
  //                   this.isClass[i] = true;
  //                 } else {
  //                   this.isClass[i] = false;
  //                 }
  //               } else {
  //                 this.isClass[i] = true;
  //               }
  //             }

  //             this.roundname = this.dataoflang.b409+" " + attempt;
  //             if (attempt > 0) {
  //               for (let i = 1; i < attempt + 1; i++) {
  //                 this.dropdownvalue[i - 1] = this.dataoflang.b409+" " + i;
  //               }
  //             }

  //             if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
  //               this.useranalysisSubmit();
  //             } else {
  //               this.checkloading = false;
  //             }

  //             this.kpivaluearray = [Number((data.resultList[0].projectmanagementdata.s31)).toFixed(0),
  //             Number((data.resultList[0].projectmanagementdata.s29)).toFixed(0),
  //             Number((data.resultList[0].projectmanagementdata.s36)).toFixed(0)]
  //           }
  //           this.checkloading = false;
  //         }
  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //       }
  //     })
  // }

  getFetchData(attempt: string) {
    this.checkloading = true;
    let apiname = '/projectmanagement/fetchprojectmanagement';
    this._api.fetchGameData(apiname, attempt).subscribe({
      next: (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            if (
              data.resultList[0].projectmanagementCM
                .projectmanagementCMActiveStatus.foodforthoughtstatus ==
              'inactive'
            ) {
              this.foodforthought = false;
            } else {
              this.foodforthought = true;
            }
            let attempt = data.resultList[0].attempt;
            this.playername = data.resultList[0].userRegister.username;
            this.responseresultcm = data.resultList[0].projectmanagementCM;

            this.responseresultdatabase = data.resultList[0];
            let roundvalue = 'round' + Number(attempt);
            this._global.casemanagementid.next(
              data.resultList[0].projectmanagementcmid,
            );

            if (data.resultList[0].aiAssessmentMaster != null) {
              let analysisshowdata =
                data.resultList[0].aiAssessmentMaster[roundvalue];
              if (analysisshowdata == 'yes') {
                this.analysisshow = true;
              } else {
                this.analysisshow = false;
              }
            }

            for (let i = 0; i < this.optionalcase.length; i++) {
              const caseStatus =
                data.resultList[0].projectmanagementCM
                  .projectmanagementCMActiveStatus[this.optionalcase[i]];
              if (caseStatus == 'inactive') {
                this.optional[i] = false;
              } else {
                this.optional[i] = true;
              }
            }

            if (data.resultList[0].projectmanagementdata) {
              this.foodforthoughtQNo =
                data.resultList[0].projectmanagementdata.ax45;
              this.submitprove = data.resultList[0].projectmanagementdata.ax44;

              if (this.submitprove == 'yes' || this.timefinished) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }

              for (let i = 0; i < 91; i++) {
                this.result[i] =
                  data.resultList[0].projectmanagementdata[
                  this.databasecellnamearray[i]
                  ];
              }
              this.kpivaluearray = [
                Number(
                  data.resultList[0].projectmanagementdata.n68 * 100,
                ).toFixed(2),
                Number(data.resultList[0].projectmanagementdata.n75).toFixed(0),
                Number(data.resultList[0].projectmanagementdata.n73).toFixed(0),
              ];
            }

            for (let i = 0; i < 19; i++) {
              this.result1[i] =
                data.resultList[0].projectmanagementCM.projectmanagementperioddata[
                this.periodcellnamearray[i]
                ];
            }

            for (let i = 0; i < this.databasecellnamearray.length; i++) {
              if (
                this.result[i] == '' ||
                this.result[i] == '0' ||
                this.result[i] == 0
              ) {
                this.result[i] = '-';
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

            this.roundname = 'Round ' + attempt;
            if (attempt > 0) {
              for (let i = 1; i < attempt + 1; i++) {
                this.dropdownvalue[i - 1] = 'Round ' + i;
              }
            }
            if (this.analysisshow == true && this.submitprove == 'yes') {
              this.useranalysisSubmit();
            } else {
              this.checkloading = false;
            }
          }
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      },
    });
  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

  useranalysisSubmit() {
    this.feedback = this.projectmanagementassesmentservice.useranalysisSubmit(
      this.responseresultcm,
      this.result,
      this.responseresultdatabase,
    );
    if (this.analysisshow == true && this.submitprove == 'yes') {
      this.getuseranalysisValue();
    }
  }

  getuseranalysisValue() {
    this._api
      .fetchassessment(
        this.coursecode,
        this.studentsectionid,
        'student',
        Number(this.noofattempt),
        'coursecode',
      )
      .subscribe(
        (data: any) => {
          if (data.status == 'Success') {
            if (data.resultList != null) {
              this.useranalysisinput = data.resultList[0].studentsentiment;
              if (this.useranalysisinput == '') {
                this.useranalysisinput = String(
                  localStorage.getItem('useranalysis'),
                );
                if (
                  this.useranalysisinput == null ||
                  this.useranalysisinput == 'null'
                ) {
                  this.useranalysisinput = '';
                }
              }
            }
            this.checkloading = false;
          } else {
            this.checkloading = false;
          }
        },
        (error: any) => {
          this.checkloading = false;
        },
      );
  }

  roundClick() {
    let attempt = this.roundname.split(' ');
    this.checkloading = true;
    this.getFetchData(attempt[1]);
  }

  decisionchecklieprojectmanagementpopup() {
    this.inputDataCheck();
  }

  // For Language

  // inputDataCheck() {
  //     this.errorlist = [];
  //     for (let i = 0; i < this.databasecellnamearray.length; i++) {
  //       if (this.result[i] == "-") {
  //         if (this.languageselect.toLowerCase() == 'hindi') {
  //           this.errorlist.push("आगे बढ़ने के लिए कृपया अपने निर्णय सोच समझकर लें। " + this.blankInputMessage[i])
  //         } else {
  //           this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
  //         }

  //         this.inputdatacheckvalue = true;
  //       }

  //     }
  //     console.log("errorlistlength", this.errorlist.length);
  //     if (this.errorlist.length > 0) {
  //       this.inputdatacheckvalue = true;
  //     }

  //     if (this.inputdatacheckvalue == false) {
  //       this.saveDecisionChecklist();
  //     } else {
  //       const dialogRef = this.dialog.open(BlankinputlistComponent, {
  //         width: '60%',
  //         data: this.errorlist,
  //       });
  //       dialogRef.afterClosed().subscribe(result => {

  //       });
  //     }
  //   }

  inputDataCheck() {
    this.errorlist = [];
    // let catalogmarket = false;
    for (let i = 0; i < 10; i++) {
      if (this.result[i] == '-') {
        this.errorlist.push(
          'To move ahead, kindly make your decisions in ' +
          this.blankInputMessage[i],
        );
      }
    }
    for (let i = 10; i < 40; i++) {
      if (this.result[i] == '-') {
        this.errorlist.push(
          'To move ahead, kindly make your decisions in ' +
          this.blankInputMessage[i],
        );
        // catalogmarket = true;
      }
    }
    if (this.result.slice(40, 43).every((value: any) => value === '-')) {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in Marketing-Facebook Campaign',
      );
    }
    if (this.result.slice(43, 46).every((value: any) => value === '-')) {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in Marketing-Instagram Campaign',
      );
    }
    if (this.result.slice(46, 49).every((value: any) => value === '-')) {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in Marketing-Youtube Campaign',
      );
    }
    if (this.result[49] == '-') {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in ' +
        this.blankInputMessage[49],
      );
    }
    for (let i = 50; i < 60; i++) {
      if (this.result[i] == '-') {
        this.errorlist.push(
          'To move ahead, kindly make your decisions in ' +
          this.blankInputMessage[i],
        );
        // catalogmarket = true;
      }
    }
    if (this.result.slice(60, 65).every((value: any) => value === '-')) {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in Marketing-Branding Campaign',
      );
    }
    if (this.result[65] == '-') {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in ' +
        this.blankInputMessage[65],
      );
    }
    if (this.result.slice(66, 71).every((value: any) => value === '-')) {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in Experience-Nudges',
      );
    }
    if (this.result[71] == '-') {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in ' +
        this.blankInputMessage[71],
      );
    }
    if (this.result.slice(72, 75).every((value: any) => value === '-')) {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in Experience-Checkout Features',
      );
    }
    for (let i = 75; i < 78; i++) {
      if (this.result[i] == '-') {
        this.errorlist.push(
          'To move ahead, kindly make your decisions in ' +
          this.blankInputMessage[i],
        );
        // catalogmarket = true;
      }
    }
    if (this.result.slice(78, 83).every((value: any) => value === '-')) {
      this.errorlist.push(
        'To move ahead, kindly make your decisions in Operations-Streaming Process',
      );
    }

    // for (let i = 0; i < this.databasecellnamearray.length; i++) {
    //   if (this.result[i] == "-") {
    //     this.errorlist.push("To move ahead, kindly make your decisions in " + this.blankInputMessage[i])
    //     this.inputdatacheckvalue = true;
    //   }

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
      dialogRef.afterClosed().subscribe((result) => { });
    }
  }

  // For Language

  // saveDecisionChecklist() {
  //     if ((this.analysisshow && this.useranalysisinput.length < 10)) {
  //       this._alert.error("To move ahead, kindly Write your analysis");
  //       return;
  //     }

  //     if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 9) {
  //       this._alert.error("To move ahead finish Food For Thought section");
  //       return;
  //     }

  //     const openDialog = () => {
  //       const dialogRef = this.dialog.open(projectmanagementdecisionsubmitPopup, {
  //         data: {
  //           class: 'p-0',
  //           foodforthoughtqno: this.foodforthoughtQNo,
  //           participantsentiment: this.useranalysisinput,
  //           assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //           feedback: this.feedback,
  //           submitprove: this.submitprove,
  //           analysisshow: this.analysisshow,
  //           kpivaluearray: this.kpivaluearray,
  //           languageid: this.languageid,
  //         },
  //         panelClass: 'custom-dialog-container'
  //       });

  //       dialogRef.afterClosed().subscribe(result => {
  //         if (result) {
  //           this.newItemEvent.emit('report');
  //         }
  //       });
  //     };

  //     openDialog();
  //   }

  saveDecisionChecklist() {
    if (this.analysisshow && this.useranalysisinput.length < 10) {
      this._alert.error('To move ahead, kindly Write your analysis');
      return;
    }

    if (
      this.noofattempt == '1' &&
      this.foodforthought &&
      this.foodforthoughtQNo != 8
    ) {
      this._alert.error('To move ahead finish Food For Thought section');
      return;
    }

    const dialogRef = this.dialog.open(
      ProjectmanagementdecisionchecklistPopup,
      {
        data: {
          class: 'p-0',
          foodforthoughtqno: this.foodforthoughtQNo,
          participantsentiment: this.useranalysisinput,
          assesment: `Participant analysis for microsimulation\n${this.useranalysisinput}${this.assesment}`,
          feedback: this.feedback,
          submitprove: this.submitprove,
          analysisshow: this.analysisshow,
          kpivaluearray: this.kpivaluearray,
        },
        panelClass: 'custom-dialog-container',
      },
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.newItemEvent.emit('report');
    });
  }
}

// ProjectManagementPopUp

@Component({
  selector: 'app-projectmanagementdecisionchecklistpopup',
  templateUrl: './projectmanagementdecisionchecklistpopup.html',
  styleUrls: ['./projectmanagementdecisionchecklist.component.scss'],
})
export class ProjectmanagementdecisionchecklistPopup extends AbstractComponent {
  showtab: boolean = true;

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProjectmanagementdecisionchecklistPopup>,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  // For Language

  // save() {
  //   this.isButtonDisabled = true;
  //   this.checkloading = true;
  //   let apiname = '/projectmanagement/singleinputprojectmanagement';
  //   let decisionsubmitData = {
  //     "al96": "yes"
  //   }
  //   this._api.Languagedatawrite("projectmanagement", 1,
  //     decisionsubmitData, apiname, 'projectmanagementcmid', this.languageselect, this.data.languageid).subscribe((data: any) => {

  //       if (data.status == "Success") {
  //         this._login.savekpivalue(this.data.kpivaluearray[0],
  //           this.data.kpivaluearray[1], this.data.kpivaluearray[2], 'update', this.noofattempt)

  //         let submitprovecheck = this.data.submitprove;
  //         if (((submitprovecheck == 'no') || (submitprovecheck == 'No')) && (this.data.analysisshow == true)) {
  //           this.sendAssesmentValue();

  //         } else {
  //           this.Sharedservice.enableTab();
  //           this.checkloading = false;
  //           this.dialogRef.close(true);
  //         }
  //       } else {
  //         this.isButtonDisabled = false;
  //       }

  //     }, (error: any) => {
  //       this.isButtonDisabled = false;
  //       this.checkloading = false;
  //       this.driveerrorLog(error, apiname);
  //     })
  // }

  save() {
    this.checkloading = true;
    let apiname = '/projectmanagement/singleinputprojectmanagement';
    let decisionsubmitData = {
      ax45: 'yes',
    };
    this._api
      .promotionsdatawrite(
        'projectmanagement',
        1,
        decisionsubmitData,
        apiname,
        'projectmanagementcmid',
      )
      .subscribe(
        (data: any) => {
          if (data.status == 'Success') {
            this._login.savekpivalue(
              this.data.kpivaluearray[0],
              this.data.kpivaluearray[1],
              this.data.kpivaluearray[2],
              'update',
              this.noofattempt,
            );

            let submitprovecheck = this.data.submitprove;
            if (
              (submitprovecheck == 'no' || submitprovecheck == 'No') &&
              this.data.analysisshow == true
            ) {
              this.sendAssesmentValue();
            } else {
              this.Sharedservice.enableTab();
              this.checkloading = false;
              this.dialogRef.close(true);
            }
          }
        },
        (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        },
      );
  }

  async sendfeedbackvalue() {
    let apiname = '/feedback/gptfeedback';
    await this._api
      .gptfeedback(
        this.noofattempt,
        this.data.feedback,
        apiname,
        'projectmanagement',
      )
      .subscribe(
        (data: any) => {
          if (data.status == 'Success') {
          }
        },
        (error: any) => {
          this.checkloading = false;
        },
      );
  }

  async sendAssesmentValue() {
    let apiname = '/assessment/gptassessment';
    await this._api
      .gptassessment(
        this.noofattempt,
        this.data.participantsentiment,
        this.data.assesment,
        apiname,
        'projectmanagement',
      )
      .subscribe(
        (data: any) => {
          if (data.status == 'Success') {
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
        },
        (error: any) => {
          this.checkloading = false;
        },
      );
  }

  close() {
    this.dialogRef.close(false);
  }
}

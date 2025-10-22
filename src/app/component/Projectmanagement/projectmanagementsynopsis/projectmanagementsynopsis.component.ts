import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-projectmanagementsynopsis',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, MarkdownModule],
  templateUrl: './projectmanagementsynopsis.component.html',
  styleUrls: ['./projectmanagementsynopsis.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ],
})
export class ProjectmanagementsynopsisComponent extends AbstractComponent {
  showQuestionMarks = false;
  analysisshow: boolean = false;
  result: any = [];
  optional: any[] = [];
  resultbody: any = [];
  roundname: string = '';
  dropdownvalue: any = [];
  submitprove: string = '';
  retry: string = '';
  disabled: boolean = false;
  coursename: string = '';
  feedbackvalue: string = '';
  responseresult: any = [];
  state: string = 'default';
  optionalcase: any = ['foodforthoughtstatus'];
  isButtonDisabled: boolean = false;
  dataresult: any = [];
  databasecellnamearray: any;

  tableData: any = [
    {
      title: 'Parameter',
      title1: 'Output',
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

  project: any = [
    { tasks: 'b56', planned: 'e56', actual: 'f56', status: 'h56' },
    { tasks: 'b57', planned: 'e57', actual: 'f57', status: 'h57' },
    { tasks: 'b58', planned: 'e58', actual: 'f58', status: 'h58' },
    { tasks: 'b59', planned: 'e59', actual: 'f59', status: 'h59' },
    { tasks: 'b60', planned: 'e60', actual: 'f60', status: 'h60' },
    { tasks: 'b61', planned: 'e61', actual: 'f61', status: 'h61' },
    { tasks: 'b62', planned: 'e62', actual: 'f62', status: 'h62' },
    { tasks: 'b63', planned: 'e63', actual: 'f63', status: 'h63' },
    { tasks: 'b64', planned: 'e64', actual: 'f64', status: 'h64' },
    { tasks: 'b65', planned: 'e65', actual: 'f65', status: 'h65' },
    { tasks: 'b66', planned: 'e66', actual: 'f66', status: 'h66' },
    { tasks: 'b67', planned: 'e67', actual: 'f67', status: 'h67' },
    { tasks: 'b68', planned: 'e68', actual: 'f68', status: 'h68' },
    { tasks: 'b69', planned: 'e69', actual: 'f69', status: 'h69' },
    { tasks: 'b70', planned: 'e70', actual: 'f70', status: 'h70' },
    { tasks: 'b71', planned: 'e71', actual: 'f71', status: 'h71' },
    { tasks: 'b72', planned: 'e72', actual: 'f72', status: 'h72' },
    { tasks: 'b73', planned: 'e73', actual: 'f73', status: 'h73' },
    { tasks: 'b74', planned: 'e74', actual: 'f74', status: 'h74' },
    { tasks: 'b75', planned: 'e75', actual: 'f75', status: 'h75' },
  ];

  valueData: any = [
    { label: 'm56', value: 'n56' },
    { label: 'm57', value: 'n57' },
    { label: 'm58', value: 'n58' },
  ];

  costData: any = [
    { label: 'm60', value: 'n60' },
    { label: 'm61', value: 'n61' },
    { label: 'm62', value: 'n62' },
    { label: 'm63', value: 'n63' },
    { label: 'm64', value: 'n64' },
    { label: 'm65', value: 'n65' },
    { label: 'm66', value: 'n66' },
    { label: 'm67', value: 'n67' },
  ];

  valueCreated: any = { label: 'm68', value: 'n68' };

  kpiData: any = [
    { label: 'Completion level', value: 'n75' },
    { label: 'Optimization level', value: 'n73' },
    { label: 'Cost Performance Index', value: 'n74' },
    { label: 'Number of task completed', value: 'n71' },
    { label: 'Number of task remaining', value: 'n72' },
    { label: 'Project Status', value: 'n76' },
  ];

  thinkingabality: any = [
    { label: 'Project Map', value: '100%' },
    { label: 'Task Planning', value: '100%' },
  ];

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    private excelsheetservice: SheetdataService,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    if (
      this.studentelementdetailsvalue.numberofattemptsleft == 1 ||
      this.studentelementdetailsvalue.numberofattemptsleft == 0
    ) {
      this.retry = 'Game Over';
    } else {
      this.retry =
        'Round ' +
        (this.studentelementdetailsvalue.previousassignedattempts -
          this.studentelementdetailsvalue.numberofattemptsleft +
          2);
    }
    this.getFetchData(this.noofattempt);
  }

  checkPercent(title: string) {
    if (title.includes('%')) {
      return true;
    } else {
      return false;
    }
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(' ');
    this.getFetchData(attempt[1]);
  }

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  getFetchData(attempt: string) {
    let apiname = '/projectmanagement/fetchprojectmanagement';
    this._api.fetchGameData(apiname, attempt).subscribe({
      next: (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.submitprove = data.resultList[0].bb7;
            let roundvalue = 'round' + Number(attempt) + 'sv';
            if (data.resultList[0].aiFeedbackMaster != null) {
              let analysisshowdata =
                data.resultList[0].aiFeedbackMaster[roundvalue];
              if (analysisshowdata == 'yes') {
                this.analysisshow = true;
              } else {
                this.analysisshow = false;
              }
            }

            if (
              this.submitprove == 'no' ||
              this.submitprove == 'No' ||
              this.submitprove == null
            ) {
              this.disabled = true;
              this.getFetchData(String(Number(attempt) - 1));
            } else {
              // this.disabled = false;
              this.resultbody = data;
              let attempt = data.resultList[0].attempt;
              this.roundname = 'Round ' + attempt;

              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = 'Round ' + i;
                }
              }

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] =
                  data.resultList[0][this.databasecellnamearray[i]];

                if (i < 35) {
                  if (this.result[i] == '') {
                    this.result[i] = '-';
                  }
                }
              }
              if (
                this.result[35] == 0 &&
                this.result[36] == 0 &&
                this.result[37] == 0 &&
                this.result[38] == 0 &&
                this.result[39] == 0 &&
                this.result[40] == 0 &&
                this.result[41] == 0 &&
                this.result[42] == 0 &&
                this.result[43] == 0 &&
                this.result[44] == 0 &&
                this.result[45] == 0 &&
                this.result[46] == 0 &&
                this.result[47] == 0 &&
                this.result[48] == 0 &&
                this.result[49] == 0 &&
                this.result[50] == 0 &&
                this.result[51] == 0 &&
                this.result[52] == 0 &&
                this.result[53] == 0
              ) {
                for (let i = 35; i < 54; i++) {
                  this.result[i] = '-';
                }
              } else {
                for (let i = 35; i < 54; i++) {
                  if (this.result[i] == 0) {
                    this.result[i] = 'No';
                  } else {
                    this.result[i] = 'Yes';
                  }
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

              if (this.analysisshow == true) {
                this.getfeedbackvalue(attempt);
              } else {
                this.checkloading = false;
              }
            }
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

  getfeedbackvalue(attempt: string) {
    this._api
      .fetchfeedback(
        this.coursecode,
        this.studentsectionid,
        'student',
        Number(attempt),
      )
      .subscribe(
        (data: any) => {
          if (data.status == 'Success') {
            if (data.resultList != null) {
              this.feedbackvalue = data.resultList[0].gptfeedback;
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

  exit() {
    this.isButtonDisabled = true;
    if (this.studentelementdetailsvalue.numberofattemptsleft == 0) {
      this._router.navigate(['auth/component/studentdashboardheader']);
    } else {
      if (this.disabled == false) {
        this.checkloading = true;

        let body = {
          email: this.useremail,
          usermode: 'student',
          caller: 'student',
          action: 'update',
          coursecode: this.coursecode,
          spreadsheetid: this.studentspreadsheetid,
        };
        this._login.updatecourseattempt(body).subscribe(
          (data: any) => {
            if (data.status == 'Success') {
              let status = 'exit';
              this._login.sendDrivemailLog(status).subscribe({
                next: (data: any) => {
                  this._login.exitOnLastAttempt();
                  this._router.navigate([
                    'auth/component/studentdashboardheader',
                  ]);
                },
                error: (error: any) => {
                  this.isButtonDisabled = false;
                  this.checkloading = false;
                  this.driveerrorLog(error, '/maillog/drivemaillog');
                },
              });
            }
          },
          (error: any) => {
            this.isButtonDisabled = false;
            this.checkloading = false;
            this.driveerrorLog(error, '/student/updatecourseattempt');
          },
        );
      } else {
        this.isButtonDisabled = false;
        this._alert.error('Please submit your decisions first');
      }
    }
  }

  downloadreportprojectmanagement() {
    let apiname = '/projectmanagement/fetchprojectmanagement';
    this.excelsheetservice.downloadReportforgame(
      apiname,
      'projectmanagement',
      this.useremail,
      this.coursecode,
      this.studentsectionid,
      this.noofattempt,
      this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid,
    );
  }
}

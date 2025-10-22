import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexNoData,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

interface barChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  noData: ApexNoData;
  tooltip: ApexTooltip;
}

interface RadarChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

@Component({
  selector: 'app-projectmanagementreport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './projectmanagementreport.component.html',
  styleUrls: ['./projectmanagementreport.component.scss'],
})
export class ProjectmanagementreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  projectexecutionchart: barChart;
  roundname: string = '';
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = '';
  submitprove: string = '';
  optionalcase: any = ['foodforthoughtstatus'];
  totalOptionalcase: boolean = true;
  filtertabledata: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  excelsheetservice: any;

  projectexecutionchartrange: any = [[]];

  rigorchartsrange = [
    ['Rigor', 'aq40', '82', '45'],
    ['Structuring', 'aq41', '77', '47'],
    ['Synthesis', 'aq42', '84', '43'],
    ['Business Judgement', 'aq43', '81', '42'],
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

  tableData = [['m55', 'm59']];

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [
        {
          data: [10, 20, -10, -20],
        },
        {
          data: [10, 20, 0, -10],
        },
        {
          data: [10, 20, 30, 40],
        },
      ],
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: '',
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ['Rigor', 'Structuring', 'Synthesis', 'Business Jugement'],
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    };

    this.projectexecutionchart = {
      series: [
        {
          name: 'Task Duration',
          data: [
            { x: 'Task 1', y: [0.87, 10] }, // Task 1 starts at 0.87
            { x: 'Task 3', y: [8, 18] },
            { x: 'Task 4', y: [12, 20] },
            { x: 'Task 5', y: [15, 22] },
            { x: 'Task 6', y: [18, 25] },
            { x: 'Task 16', y: [25, 33] },
            { x: 'Task 7', y: [20, 28] },
            { x: 'Task 8', y: [22, 30] },
            { x: 'Task 17', y: [28, 35] },
            { x: 'Task 9', y: [24, 32] },
            { x: 'Task 10', y: [26, 34] },
            { x: 'Task 11', y: [5, 12] },
            { x: 'Task 12', y: [10, 18] },
            { x: 'Task 13', y: [15, 22] },
            { x: 'Task 14', y: [20, 28] },
            { x: 'Task 15', y: [22, 30] },
            { x: 'Task 18', y: [30, 35] },
            { x: 'Task 19', y: [32, 35] },
            { x: 'Task 20', y: [5, 15] },
            { x: 'Task 2', y: [5, 15] },
          ] as any,
        },
      ],
      chart: {
        height: 600,
        type: 'rangeBar',
        toolbar: { show: true },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return `Start: ${val[0]}, End: ${val[1]}`;
        },
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '40%',
          rangeBarGroupRows: true,
        },
      },
      xaxis: {
        categories: [],
        min: 0,
        max: 35,
        tickAmount: 7,
        labels: {
          style: {
            fontSize: '14px',
          },
          formatter: (val) => val,
        },
        position: 'top',
        axisBorder: { show: true },
        axisTicks: { show: true },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontSize: '14px',
            fontWeight: '',
          },
          offsetX: -5,
        },
      },
      title: {
        text: 'Project Execution, days', // Ensure text is set
        align: 'center', // Align to center
        style: {
          fontSize: '20px', // Increase font size
          fontWeight: 'bold',
          color: '#000', // Ensure a visible color
        },
      },
      fill: {
        type: 'solid',
      },
      tooltip: {
        x: { show: false },
        y: {
          formatter: (val) => ``,
        },
      },
      noData: {
        text: 'Loading...',
      },
    };
  }

  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);
  }
  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(' ');
    this.getFetchData(attempt[1]);
  }

  getFetchData(attempt: string) {
    let apiname = '/projectmanagement/fetchprojectmanagement';
    this._api.fetchGameData(apiname, attempt).subscribe({
      next: (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.jsonarray1 = [];
            this.jsonarray2 = [];
            this.jsonarray3 = [];
            this.jsonarray4 = [];
            this.jsonarray5 = [];
            this.jsonarray6 = [];
            this.jsonarray7 = [];
            if (data.resultList[0].projectmanagementdata) {
              this.result = data.resultList[0];
              this.filtertabledata = this.tableData.slice(); // Creates a shallow copy

              for (let i = 5; i >= 1; i--) {
                // Loop in reverse to avoid index shift issue
                if (
                  this.result.projectmanagementdata[this.tableData[i][0]] ===
                    '' ||
                  this.result.projectmanagementdata[this.tableData[i][0]] === 0
                ) {
                  this.filtertabledata.splice(i, 1);
                }
              }
              this.submitprove = data.resultList[0].projectmanagementdata.ao39;
            } else {
              this.submitprove = 'no';
            }

            if (
              this.submitprove == 'No' ||
              this.submitprove == 'no' ||
              this.submitprove == null
            ) {
              this.getFetchData(String(Number(this.noofattempt) - 1));
            } else {
              this._global.casemanagementid.next(
                data.resultList[0].projectmanagementcmid,
              );
              let attempt = data.resultList[0].attempt;
              this.roundname = 'Round ' + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = 'Round ' + i;
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

              // Rigorchar

              for (let i = 0; i < 4; i++) {
                this.jsonarray1.push({
                  x: this.rigorchartsrange[i][0],
                  y:
                    data.resultList[0].projectmanagementdata[
                      this.rigorchartsrange[i][1]
                    ] * 100,
                });
                this.jsonarray2.push({
                  x: this.rigorchartsrange[i][0],
                  y: Number(this.rigorchartsrange[i][2]),
                });
                this.jsonarray3.push({
                  x: this.rigorchartsrange[i][0],
                  y: Number(this.rigorchartsrange[i][3]),
                });
              }
              this.rigorcharts.series = [
                { name: 'You', data: this.jsonarray1 },
                { name: '90% Percentile', data: this.jsonarray2 },
                { name: 'Average', data: this.jsonarray3 },
              ];

              //Projectexecutionchart

              for (let i = 0; i < this.projectexecutionchartrange.length; i++) {
                this.jsonarray4
                  .push(
                    data.resultList[0].projectmanagementdata[
                      this.projectexecutionchartrange[i]
                    ],
                  )
                  .toFixed(0);
              }
              this.projectexecutionchart.series = [
                { name: 'value', data: this.jsonarray4 },
              ];
            }
          }
          this.checkloading = false;
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

  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  downloadreportforprojectmanagement() {
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

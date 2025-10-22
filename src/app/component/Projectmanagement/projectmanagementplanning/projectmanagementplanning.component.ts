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
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexNoData,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { ProjectmanagementfoodforthoughtComponent } from '../projectmanagementfoodforthought/projectmanagementfoodforthought.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  noData: ApexNoData;
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
  selector: 'app-projectmanagementplanning',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './projectmanagementplanning.component.html',
  styleUrls: ['./projectmanagementplanning.component.scss'],
})
export class ProjectmanagementplanningComponent extends AbstractComponent {
  priyarigorcharts: RadarChart;
  rohanrigorcharts: RadarChart;
  aisharigorcharts: RadarChart;
  projectshedulechart: barchart;
  workdaysavlchart: barchart;
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  jsonArrays:any = [];
  jsonArrays1: any = [];
  jsonArrays2: any = [];
  // jsonarray3: any = [];

  tasks: string[] = Array.from({ length: 20 }, (_, i) => `Task ${i + 1}`);

  priyaRigorChartsRange = [
    ['Team Management', 'n7'],
    ['Marketing', 'n8'],
    ['Logistics Planning', 'n9'],
    ['Budget Planning', 'n10'],
    ['Event Execution', 'n11'],
    ['Negotiation', 'n12'],
    ['Strategic Management', 'n13'],
  ];
  rohanRigorChartsRange = [
    ['Team Management', 'o7'],
    ['Marketing', 'o8'],
    ['Logistics Planning', 'o9'],
    ['Budget Planning', 'o10'],
    ['Event Execution', 'o11'],
    ['Negotiation', 'o12'],
    ['Strategic Management', 'o13'],
  ];
  aishaRigorChartsRange = [
    ['Team Management', 'p7'],
    ['Marketing', 'p8'],
    ['Logistics Planning', 'p9'],
    ['Budget Planning', 'p10'],
    ['Event Execution', 'p11'],
    ['Negotiation', 'p12'],
    ['Strategic Management', 'p13'],
  ];
  employees = [
    { id: 'priya', name: 'Priya Sharma' },
    { id: 'rohan', name: 'Rohan Kapoor' },
    { id: 'aisha', name: 'Aisha Khan' },
  ];

  selectedTasks: { [key: number]: string } = {};

  timeManagement: any = [
    { category: 'Normal Workdays', values: [17, 20, 13] },
    { category: 'Max Overtime days', values: [2, 4, 1] },
    { category: 'Efficiency Reduction', values: [1, 1, 1] },
    { category: 'Overtime days', values: [1, 2, 1] },
    { category: 'Total Workdays', values: [17, 21, 13] },
  ];

  costManagement: any = [
    { category: 'Cost per workday', values: [6000, 5500, 6500] },
    { category: 'Overtime cost', values: [9000, 8250, 9750] },
    { category: 'Unutilized time cost', values: [3000, 2750, 3250] },
  ];

  ProductivityworkData: any = [
    { name: 'Priya Sharma', values: [1.0, 1.05, 1.05] },
    { name: 'Rohan Kapoor', values: [1.0, 0.86, 0.86] },
    { name: 'Aisha Khan', values: [1.0, 1.14, 1.14] },
  ];

  databasecellname: any = ["ax12","ax14","ay14","az14"];

  periodcellname: any = [];

  cardData1 = [
    {
      id: 'card1',
      title: 'Specialized Training',
      description:
        'Conduct a specialized training workshop to enhance specific skills relevant to the project, such as negotiation techniques or strategic management.',
      turncatedtext: '',
      image: '../../../../assets/images/projectmanagement/specilizetraning.svg',
      budget: 8000,
      timeReduction: 1.2,
    },
    {
      id: 'card2',
      title: 'Mentorship Program',
      description:
        'Implement a mentorship program where experienced team members guide others to share insights and best practices.',
      turncatedtext: '',
      image:
        '../../../../assets/images/projectmanagement/mentorshipprogram.svg',
      budget: 7500,
      timeReduction: 1.5,
    },
    {
      id: 'card3',
      title: 'Task Delegation',
      description:
        'Encourage a culture of task delegation, allowing team members to specialize in areas where they excel.',
      turncatedtext: '',
      image: '../../../../assets/images/projectmanagement/taksdeligation.jpg',
      budget: 6000,
      timeReduction: 1.8,
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
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.priyarigorcharts = {
      series: [
        {
          data: [8, 7, 6, 9, 7, 8, 5],
        },
      ],
      chart: {
        height: 300,
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
        categories: [
          'Team Management',
          'Marketing',
          'Logistics Planning',
          'Budget Planning',
          'Event Execution',
          'Negotiation',
          'Strategic Management',
        ],
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

    this.rohanrigorcharts = {
      series: [
        {
          data: [6, 8, 9, 6, 8, 7, 6],
        },
      ],
      chart: {
        height: 300,
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
        categories: [
          'Team Management',
          'Marketing',
          'Logistics Planning',
          'Budget Planning',
          'Event Execution',
          'Negotiation',
          'Strategic Management',
        ],
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

    this.aisharigorcharts = {
      series: [
        {
          data: [9, 6, 7, 8, 8, 9, 7],
        },
      ],
      chart: {
        height: 300,
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
        categories: [
          'Team Management',
          'Marketing',
          'Logistics Planning',
          'Budget Planning',
          'Event Execution',
          'Negotiation',
          'Strategic Management',
        ],
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

    this.projectshedulechart = {
      series: [
        {
          name: 'Task Duration',
          data: [
            { x: 'Task 1', y: [0.87, 10] },
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
        text: 'Project Schedule, days',
        align: 'center',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#000',
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
      legend: {
        show: true, // ✅ Fix: Adding this resolves the error
        position: 'top',
        horizontalAlign: 'left',
      },
      noData: {
        text: 'Loading...',
      },
    };

    this.workdaysavlchart = {
      series: [
        {
          data: [0.85, 0.67, 0.46],
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Priya Sharma', 'Rohan Kapoor', 'Aisha Khan'],
        title: {
          text: '',
        },
      },
      yaxis: {
        title: {
          // text: "INR"
        },
      },
      fill: {
        type: 'solid',
      },
      tooltip: {
        y: {
          formatter: (val: any) => val.toLocaleString('en-IN'), // Format for INR
          title: {
            formatter: () => '',
          },
        },
        x: {
          show: false,
        },
      },
      title: {
        text: 'Workdays Available',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
      legend: {
        show: true, // ✅ Required to prevent TypeScript errors
      },
      noData: {
        text: 'Loading...', // ✅ Added to fix the error
        align: 'center',
        verticalAlign: 'middle',
        style: {
          color: '#808080',
          fontSize: '14px',
        },
      },
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }
  // it is for my testing purpose for all rigor chart start....
  // generateChartData(range: any[], resultList: any, limit: number = 2): any[] {
  //   const dataArray = [];
  //   for (let i = 0; i < limit; i++) {
  //     const label = range[i][0];
  //     const key = range[i][1];
  //     const value = resultList[0][key] * 100;
  //     dataArray.push({ x: label, y: value });
  //   }
  //   return dataArray;
  // }
   // it is for my testing purpose for all rigor chart end....

  getFetchData() {
    let apiname = '/projectmanagement/fetchprojectmanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.jsonArrays= [];
            this.jsonArrays1 = [];
            this.jsonArrays2 = [];
            // this.jsonarray3 = [];
            this._global.casemanagementid.next(
              data.resultList[0].projectmanagementcmid,
            );
            if (data.resultList[0].projectmanagementCM.projectmanagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }
            // for (let i = 0; i < this.periodcellname.length; i++) {
            //   this.result[i] =
            //     data.resultList[0].projectmanagementCM[this.periodcellname[i]];
            // }
            // for (let i = 40; i < 63; i++) {
            //   this.result[i] =
            //     data.resultList[0][this.databasecellname[i - 40]];
            // }
            // for (let i = 45; i < 63; i++) {
            //   this.result[i] = (Number(this.result[i]) * 100).toFixed(0);
            // }
            for (let i = 0; i < 2; i++) {
              this.jsonArrays.push({ 'x': this.priyaRigorChartsRange[i][0], 'y': data.resultList[0][(this.priyaRigorChartsRange[i][1])] * 100 });
            }
            this.priyarigorcharts.series = [ { "name": "Priya Sharma", "data": this.jsonArrays }];

            for (let i = 0; i < 2; i++) {
              this.jsonArrays1.push({ 'x': this.rohanRigorChartsRange[i][0], 'y': data.resultList[0][(this.rohanRigorChartsRange[i][1])] * 100 });
            }
            this.rohanrigorcharts.series = [{ "name": "Rohan Kapoor", "data": this.jsonArrays1 }];

            for (let i = 0; i < 2; i++) {
              this.jsonArrays2.push({ 'x': this.aishaRigorChartsRange[i][0], 'y': data.resultList[0][(this.aishaRigorChartsRange[i][1])] * 100 });
            }
            this.aisharigorcharts.series = [{ "name": "Rohan Kapoor", "data": this.jsonArrays2 }]
            // it is for my testing purpose for all rigor chart start..........................

            // this.priyarigorcharts.series = [{
            //   name: 'Priya Sharma',
            //   data: this.generateChartData(this.priyaRigorChartsRange, data.resultList)
            // }];
            
            // this.rohanrigorcharts.series = [{
            //   name: 'Rohan Kapoor',
            //   data: this.generateChartData(this.rohanRigorChartsRange, data.resultList)
            // }];
            
            // this.aisharigorcharts.series = [{
            //   name: 'Aisha Khan', // Fixed name if needed
            //   data: this.generateChartData(this.aishaRigorChartsRange, data.resultList)
            // }];
            // it is for my testing purpose for all rigor chart end..........................

            
            // for (let i = 0; i < this.palnaddtionalemployeecountchartrange.length; i++) {
            //   this.jsonarray1.push(data.resultList[0][this.palnaddtionalemployeecountchartrange[i][1]]);

            // }
            // this.palnaddtionalemployeecountchart.series = [
            //   { "name": "Estimated current year", "data": this.jsonarray1 },
            // ]

            // for (let i = 0; i < this.compensationchartrange.length; i++) {
            //   this.jsonarray2.push((data.resultList[0][this.compensationchartrange[i][0]]) * 100).toFixed(0);
            //   this.jsonarray3.push((data.resultList[0][this.compensationchartrange[i][1]]) * 100).toFixed(0);
            // }
            // this.compensationchart.series = [
            //   { "name": "New Joinees Hike %", "data": this.jsonarray2 },
            //   { "name": "Existing Employee Hike %", "data": this.jsonarray3 },

            // ]

            if (
              data.resultList[0].ae49 == 'Yes' ||
              data.resultList[0].ae49 == 'yes' ||
              this.timefinished
            ) {
              this.checkdisable = true;
            }
            for (let i = 0; i < this.cardData1.length; i++) {
              this.cardData1[i].title = String(
                data.resultList[0].projectmanagementCM[this.cardData1[i].title],
              );

              this.cardData1[i].turncatedtext =
                this.cardData1[i].description.substring(0, 100) +
                (this.cardData1[i].description.length > 100 ? '...' : '');
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

  inputtablevalue(cellname: string, index: number) {
    if (this.result[index] >= -10 && this.result[index] < 21) {
      this.projectmanagement(cellname, index);
    } else {
      this.result[index] = 0;
      this._alert.error('The expected range is between -10% to 20%');
    }
  }

  projectmanagement(cellname: string, index: number) {
    let apiname = '/projectmanagement/singleinputprojectmanagement';
    let routesandtechnologyData = {
     
    };
    this._api
      .writeGameData(
        'projectmanagement',
        3,
        routesandtechnologyData,
        apiname,
        'projectmanagementcmid',
      )
      .subscribe(
        (data: any) => {
          if (data.status == 'Success') {
            this.getFetchData();
          }
        },
        (error: any) => {
          this.checkloading = false;
          this.checkdisable = false;
          this.driveerrorLog(error, apiname);
        },
      );
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(ProjectmanagementfoodforthoughtComponent, {
      data: {},
    });
  }
}

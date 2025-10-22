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
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { ProjectmanagementfoodforthoughtComponent } from '../projectmanagementfoodforthought/projectmanagementfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

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
}

@Component({
  selector: 'app-projectmanagementtracking',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './projectmanagementtracking.component.html',
  styleUrls: ['./projectmanagementtracking.component.scss'],
})
export class ProjectmanagementtrackingComponent extends AbstractComponent {
  foodforthought: boolean = true;
  budgettrackchart: barchart;
  projectworkdayschart: barchart;
  resourceworkdayschart: barchart;
  result: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  showEmmisionStatus: boolean = true;
  disabled: boolean[] = [];
  checkdisable: boolean = false;

  costData: any = [
    { category: 'Normal days Cost', values: [96000, 104500, 78000, 278500] },
    { category: 'Overtime days Cost', values: [9000, 16500, 9750, 35250] },
    { category: 'Unutilized days Cost', values: [2550, 1843, 1495, 5888] },
  ];

  workdaysData: any = [
    { category: 'Normal', values: [0, 0, 0, 0] },
    { category: 'Overtime', values: [1, 1, 0, 2] },
  ];

  periodcellname: any = [''];

  databasecellname: any = [''];

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

    this.budgettrackchart = {
      series: [
        {
          data: [370000, 278500, 32250, 5888, 50000, 369638, 0],
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
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
        formatter: function (val) {
          return val + '%';
        },
      },
      xaxis: {
        categories: [
          'Budget',
          ['Normal', 'Workday', 'Cost'],
          ['Overtime', 'Cost'],
          ['Unutilized', 'time', 'Cost'],
          ['Efficiency', 'Budget'],
          ['Total', 'Cost'],
          ['Budget', 'Overrun'],
        ],
        title: {
          text: '',
        },
      },
      fill: {
        type: 'solid',
      },

      yaxis: this.yaxis[0],
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false,
        },
      },

      title: {
        text: 'Budget Track, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.projectworkdayschart = {
      series: [
        {
          data: [36, 2.7],
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + '%';
        },
      },
      xaxis: {
        categories: ['Project Duration', 'Unutilized Workdays'],
        title: {
          text: '',
        },
      },
      fill: {
        type: 'solid',
      },

      yaxis: this.yaxis[0],
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false,
        },
      },

      title: {
        text: 'Project Workdays',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.resourceworkdayschart = {
      series: [
        {
          data: [57, 47, 4, 2],
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
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
        formatter: function (val) {
          return val + '%';
        },
      },
      xaxis: {
        categories: [
          'Total Days',
          'Normal Days',
          'Overtime Days',
          'Unutilized Days',
        ],
        title: {
          text: '',
        },
      },
      fill: {
        type: 'solid',
      },

      yaxis: this.yaxis[0],
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false,
        },
      },

      title: {
        text: 'Resource Workdays',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }
  getFetchData() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    this.jsonarray3 = [];
    this.jsonarray4 = [];
    this.jsonarray5 = [];
    let apiname = '/projectmanagement/fetchprojectmanagement';
    // let apiname = '/consumerbehaviour/testforgame'
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this._global.casemanagementid.next(
              data.resultList[0].projectmanagementcmid,
            );

            if (
              data.resultList[0].projectmanagementCM
                .projectmanagementCMActiveStatus.foodforthoughtstatus ==
              'inactive'
            ) {
              this.foodforthought = false;
            }
            for (let i = 0; i < this.periodcellname.length; i++) {
              this.result[i] =
                data.resultList[0].projectmanagementCM[this.periodcellname[i]];
            }
            if (
              data.resultList[0].aw53 == 'yes' ||
              data.resultList[0].aw53 == 'Yes' ||
              this.timefinished
            ) {
              this.checkdisable = true;
            }
            for (let i = 16; i < 33; i++) {
              this.result[i] =
                data.resultList[0][this.databasecellname[i - 16]];
              if (i > 18) {
                if (this.result[i] == 'Yes') {
                  this.result[i] = true;
                } else if (this.result[i] == 'No') {
                  this.result[i] = false;
                } else if (this.result[i] == '1') {
                  this.result[i] = 'Yes';
                } else if (this.result[i] == '0') {
                  this.result[i] = 'No';
                }
              }
            }

            if (
              data.resultList[0].projectmanagementCM
                .projectmanagementCMActiveStatus.emissionsstatus == 'active'
            ) {
              this.showEmmisionStatus = true;
            } else {
              this.showEmmisionStatus = false;
            }

            // for (let i = 0; i < 3; i++) {
            //   this.jsonarray1.push({ 'x': data.resultList[0][this.truckinggraphvalue[i][0]], 'y': Number(data.resultList[0][this.truckinggraphvalue[i][1]]) });

            // }
            // this.Trucking.series = [{ "name": 'value', "data": this.jsonarray1 }]
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

  projectmanagement() {
    let apiname = '/projectmanagement/singleinputprojectmanagement';
    let inboundData = {
      at4: Number(this.result[16]),
      at5: Number(this.result[17]),
      at6: Number(this.result[18]),
    };
    this._api
      .logisticsDataWrite(
        'projectmanagement',
        1,
        inboundData,
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

  openDialog(): void {
    this.dialog.open(ProjectmanagementfoodforthoughtComponent, {
      data: {},
    });
  }
}

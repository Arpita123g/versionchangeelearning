import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexNoData,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { HrpgamefoodforthoughtComponent } from '../hrpgamefoodforthought/hrpgamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

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

@Component({
  selector: 'app-hrpgamedemandforecasting',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrpgamedemandforecasting.component.html',
  styleUrls: ['./hrpgamedemandforecasting.component.scss']
})
export class HrpgamedemandforecastingComponent extends AbstractComponent {
  foodforthought: boolean = true;
  citieschart: barChart;
  productionlinechart: barChart;
  customersatisfactionratechart: barChart;
  staffefficiencychart: barChart;
  estimatdeadditionalchart: barChart;
  marketsizegrapharray: any = [];
  marketsizegrapharray1: any = [];
  pricinggrapharray: any = [];
  productgrapharray: any = [];
  consumergrapharray: any = [];
  consumergrapharray1: any = [];
  consumergrapharray2: any = [];
  consumergrapharray3: any = [];
  showRajas: boolean = false;
  showRuchita: boolean = false;
  showShruti: boolean = false;
  grossmargingrapharray: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
 

  citieschartrange = [
    ['d7', 'e7'],
    ['d8', 'e8'],
    ['d9', 'e9'],
    ['d10', 'e10']
  ]

  productionlinechartrange = [
    ['d13', 'e13'],
    ['d14', 'e14']
  ]

  customersatisfactionratechartrange = [
    ['d20', 'e20'],
    ['d21', 'e21']
  ]

  staffefficiencychartrange = [
    ['d24', 'e24', 'f24'],
    ['d25', 'e25', 'f25'],
    ['d26', 'e26', 'f26'],
    ['d27', 'e27', 'f27'],
    ['d28', 'e28', 'f28'],
    ['d29', 'e29', 'f29'],
  ]

  estimatdeadditionalchartrange = [
    ['b13', 'c13'],
    ['b14', 'c14'],
    ['b15', 'c15'],
    ['b16', 'c16'],
    ['b17', 'c17']
  ]

  graphvaluecell: any = [
    'e33', 'e36', 'e37', 'e38', 'e39', 'e40'
  ]

  graphvalue: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.citieschart = {
      series: [
      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {

          }
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "30%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Current', 'Year 1 Plan', 'Year 2 Plan', 'Year 3 Plan'],
        position: "bottom",
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        crosshairs: {

        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            return val + "";
          },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',

          },
        },
        x: {
          show: false
        }

      },
      title: {
        text: "Cities",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.productionlinechart = {
      series: [
      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {

          }
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "20%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Current', 'Year 1 Plan',],
        position: "bottom",
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        crosshairs: {

        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            return val + "";
          },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',

          },
        },
        x: {
          show: false
        }

      },
      title: {
        text: "Production Lines",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.customersatisfactionratechart = {
      series: [
      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {

          }
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "20%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
      },
      xaxis: {
        categories: ['Current', 'Year 1 Plan',],
        position: "bottom",
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        crosshairs: {

        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            return val + "%";
          },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',

          },
        },
        x: {
          show: false
        }

      },
      title: {
        text: "Customer Satisfaction Rate",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.staffefficiencychart = {
      series: [
      ],
      chart: {
        height: 250,
        type: "line",
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {

          }
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "20%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Technical', 'Sales & Marketing', 'Logistics & Supply Chain', 'Design & Production',
          'Customer Support', 'Adminsitration'],
        position: "bottom",
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        crosshairs: {

        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        labels: {
          show: true,
          
          formatter: function (val) {
            return val + "";
          },
          
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',

          },
        },
        x: {
          show: false
        }

      },
      title: {
        text: "Staff & Efficiency",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.estimatdeadditionalchart = {
      series: [
      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {

          }
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "20%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Sales & Marketing', 'Logistics & Supply Chain', 'Design & Production', 'Technical', 'Customer Experience'],
        position: "bottom",
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        crosshairs: {

        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            return val + "";
          },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',

          },
        },
        x: {
          show: false
        }

      },
      title: {
        text: "Estimated additional hours required",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/hrplanning/fetchhrplanning';
    this._api.salesfetchdata(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this.jsonarray1 = [];
            this.jsonarray2 = [];
            this.jsonarray3 = [];
            this.jsonarray4 = [];
            this.jsonarray5 = [];
            this.jsonarray6 = [];
            this._global.casemanagementid.next(data.resultList[0].hrplanningcmid);
            if (data.resultList[0].hrPlanningCM.hrPlanningCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }
            for (let i = 1; i < 6; i++) {
              this.graphvalue[i] = Number(data.resultList[0].hrPlanningCM[this.graphvaluecell[0]]) *
                Number(data.resultList[0].hrPlanningCM[this.graphvaluecell[i]])
            }

            for (let i = 0; i < this.citieschartrange.length; i++) {
              this.jsonarray1.push({ 'x': "", "y": data.resultList[0].hrPlanningCM[this.citieschartrange[i][1]] });
            }
            this.citieschart.series = [
              { "name": "Cities", "data": this.jsonarray1 },
            ]

            for (let i = 0; i < this.productionlinechartrange.length; i++) {
              this.jsonarray2.push({ 'x': "", "y": data.resultList[0].hrPlanningCM[this.productionlinechartrange[i][1]] });
            }
            this.productionlinechart.series = [{ "name": "Production Lines", "data": this.jsonarray2 },
            ]

            for (let i = 0; i < this.customersatisfactionratechartrange.length; i++) {
              this.jsonarray3.push({ 'x': "", "y": (data.resultList[0].hrPlanningCM[this.customersatisfactionratechartrange[i][1]] * 100).toFixed(0) });
            }
            this.customersatisfactionratechart.series = [{ "name": "Customer Satisfaction Rate", "data": this.jsonarray3 },
            ]

            for (let i = 0; i < this.staffefficiencychartrange.length; i++) {
              this.jsonarray4.push( data.resultList[0].hrPlanningCM[this.staffefficiencychartrange[i][1]]);
              this.jsonarray5.push((data.resultList[0].hrPlanningCM[this.staffefficiencychartrange[i][2]])*100);

            }
            this.staffefficiencychart.series = [
              { "name": "Number of employees, previous period","type":"column", "data": this.jsonarray4 },
              { "name": "Efficiency","type":"line", "data": this.jsonarray5 },
            ]

            

            for (let i = 0; i < 5; i++) {
              this.jsonarray6.push({ 'x': "", "y": this.graphvalue[i + 1] });
            }
            this.estimatdeadditionalchart.series = [{ "name": "Estimated additional hours required", "data": this.jsonarray6 },
            ]
           
            this.checkloading = false;
          }
        }else {
          this.checkloading = false;

        }
      }, error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    })
  }

  openDialog(): void {
    this.dialog.open(HrpgamefoodforthoughtComponent, {
      data: {},
    });
  }

}

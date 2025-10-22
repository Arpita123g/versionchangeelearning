import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  NgApexchartsModule,
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { StpgamefoodforthoughtComponent } from '../stpgamefoodforthought/stpgamefoodforthought.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

interface lineChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

@Component({
  selector: 'app-stpgameinformationsearch',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],  
  templateUrl: './stpgameinformationsearch.component.html',
  styleUrls: ['./stpgameinformationsearch.component.scss']
})
export class StpgameinformationsearchComponent extends AbstractComponent {
  foodforthought: boolean = true;
  performancepreferencechart: barChart;
  batterylifechart: barChart;
  designchart: barChart;
  featureschart: barChart;
  repairabilitysupportchart: barChart;
  packagingchart: barChart;
  recyclingchart: barChart;
  marketsizemnunitchart: barChart;
  priceelasticitylinechart: lineChart;
  promotionelasticitylinechart: lineChart;
  channelchart: barChart;
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


  result: any = {
    'D9': "Price Conscious",
    'D10': "Trendy",
    'D11': "Socially Conscious",
    'D12': "Tech Savvy",
    'E9': 6,
    'E10': 8,
    'E11': 4,
    'E12': 9,
    "E15": 7,
    "E16": 6,
    "E17": 5,
    "E18": 9,
  }
  jsonArrays: any[] = Array(31).fill([]);

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.performancepreferencechart = {
      series: [],
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
        categories: [['Price', 'Conscious'], 'Trendy', ['Socially', 'Conscious'], ['Tech', 'Savvy']],
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
        text: "Performance Preference",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.batterylifechart = {
      series: [],
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
        categories: [['Price', 'Conscious'], 'Trendy', ['Socially', 'Conscious'], ['Tech', 'Savvy']],
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
        text: "Battery Life Preference",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.designchart = {
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
        categories: [['Price', 'Conscious'], 'Trendy', ['Socially', 'Conscious'], ['Tech', 'Savvy']],
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.featureschart = {
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
        categories: ['Premium Camera', 'Extra Memory', 'Premium Display', 'Durable Screen', 'Securtiy'],
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.repairabilitysupportchart = {
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
        categories: ['Price Conscious', 'Trendy', 'Socially Conscious', 'Tech Savvy'],
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.packagingchart = {
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
        categories: ['Price Conscious', 'Trendy', 'Socially Conscious', 'Tech Savvy'],
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.recyclingchart = {
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
        categories: ['Price Conscious', 'Trendy', 'Socially Conscious', 'Tech Savvy'],
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.marketsizemnunitchart = {
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
        categories: ['Price Conscious', 'Trendy', 'Socially Conscious', 'Tech Savvy'],
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.priceelasticitylinechart = {
      series: [

      ],
      markers: {
        size: [5, 0, 0],
      },
      stroke: {
        curve: 'straight',
      },
      chart: {
        type: 'line',
        height: 320,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        title: {
          text: "Price movement from average",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        labels: {
          formatter: function (value:any) {
            if (value === "Average") {
              return value;
            }         
            return (Number(value)*100).toFixed(0) + "%"
          },
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false
          , trim: false,
        }, axisBorder: {
          show: true
        },
        axisTicks: { show: true },
        crosshairs: {},
        tooltip: { enabled: false, offsetY: -35 }
      },
      yaxis: {
        title: {
          text: "Estimated effect on demand, %",
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },

        labels: {
          formatter: function (value) {
            return value.toFixed(0) + "%";
          }
        }
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
        text: '',
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

    this.promotionelasticitylinechart = {
      series: [

      ],
      markers: {
        size: [5, 0, 0],
      },
      stroke: {
        curve: 'straight',
      },
      chart: {
        type: 'line',
        height: 320,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        title: {
          text: "Promotion movement from average",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        labels: {
          formatter: function (value:any) {
            if (value === "Average") {
              return value;
            }
            return (Number(value)*100).toFixed(0) + "%"
          },
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false
          , trim: false,
        }, axisBorder: {
          show: true
        },
        axisTicks: { show: true },
        crosshairs: {},
        tooltip: { enabled: false, offsetY: -35 }
      },
      yaxis: {
        title: {
          text: "Estimated effect on demand, %",
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },

        labels: {
          formatter: function (value) {
            return value.toFixed(0) + "%";
          }
        }
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
        text: '',
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

    this.channelchart = {
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
        categories: ['Price Conscious', 'Trendy', 'Socially Conscious', 'Tech Savvy'],
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

  }

  performancedataRange = [
    ["D9", "E9"],
    ["D10", "E10"],
    ["D11", "E11"],
    ["D12", "E12"]
  ];

  batterylifedataRange = [
    ["D15", "E15"],
    ["D16", "E16"],
    ["D17", "E17"],
    ["D18", "E18"]
  ];

  designchartdataRange = [
    ["D22", "E22", "F22", "G22"],
    ["D23", "E23", "F23", "G23"],
    ["D24", "E24", "F24", "G24"],
    ["D25", "E25", "F25", "G25"]
  ];


  featureschartdataRange = [
    ["E28", "E29", "E30", "E31", "E32"],
    ["F28", "F29", "F30", "F31", "F32"],
    ["G28", "G29", "G30", "G31", "G32"],
    ["H28", "H29", "H30", "H31", "H32"],
    ["I28", "I29", "I30", "I31", "I32"]
  ];

  repairabilitysupportchartdataRange = [
    ["D36", "E36", "F36", "G36"],
    ["D37", "E37", "F37", "G37"],
    ["D38", "E38", "F38", "G38"],
    ["D39", "E39", "F39", "G39"]
  ];

  packagingchartdataRange = [
    ["D43", "E43", "F43", "G43"],
    ["D44", "E44", "F44", "G44"],
    ["D45", "E45", "F45", "G45"],
    ["D46", "E46", "F46", "G46"]
  ];

  recyclingchartdataRange = [
    ["D50", "E50", "F50", "G50", "H50"],
    ["D51", "E51", "F51", "G51", "H51"],
    ["D52", "E52", "F52", "G52", "H52"],
    ["D53", "E53", "F53", "G53", "H53"]
  ];

  marketsizemnunitchartdataRange = [
    ["D84", "E84"],
    ["D85", "E85"],
    ["D86", "E86"],
    ["D87", "E87"]
  ];

  priceelasticitylinedataRange = [
    ["D57", "E57", "F57", "G57", "H57"],
    ["D58", "E58", "F58", "G58", "H58"],
    ["D59", "E59", "F59", "G59", "H59"],
    ["D60", "E60", "F60", "G60", "H60"],
    ["D61", "E61", "F61", "G61", "H61"],
    ["D62", "E62", "F62", "G62", "H62"],
    ["D63", "E63", "F63", "G63", "H63"]
  ];

  promotionelasticitylinechartdataRange = [
    ["D67", "E67", "F67", "G67", "H67"],
    ["D68", "E68", "F68", "G68", "H68"],
    ["D69", "E69", "F69", "G69", "H69"],
    ["D70", "E70", "F70", "G70", "H70"],
    ["D71", "E71", "F71", "G71", "H71"],
    ["D72", "E72", "F72", "G72", "H72"],
    ["D73", "E73", "F73", "G73", "H73"]
  ];

  channelchartdataRange = [
    ["D77", "E77", "F77", "G77"],
    ["D78", "E78", "F78", "G78"],
    ["D79", "E79", "F79", "G79"],
    ["D80", "E80", "F80", "G80"]
  ];



  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {

    let apiname = '/stpgame/fetchstpgame';
    this._api.salesfetchdata(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {


            this.jsonArrays.forEach((_, index) => this.jsonArrays[index] = []);
            this._global.casemanagementid.next(data.resultList[0].stpgamecmid);
            if (data.resultList[0].stpGameCM.stpGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }
            for (let i = 0; i < this.performancedataRange.length; i++) {
              this.jsonArrays[0].push({
                'x': data.resultList[0].stpGameCM.stpgameperioddata[this.performancedataRange[i][0]],
                'y': data.resultList[0].stpGameCM.stpgameperioddata[this.performancedataRange[i][1]],
              });
            }
            this.performancepreferencechart.series = [{ "name": "Value", "data": this.jsonArrays[0] }];

            // for batterylifedataRange.....
            for (let i = 0; i < this.batterylifedataRange.length; i++) {
              this.jsonArrays[1].push({
                'x': data.resultList[0].stpGameCM.stpgameperioddata[this.batterylifedataRange[i][0]],
                "y": data.resultList[0].stpGameCM.stpgameperioddata[this.batterylifedataRange[i][1]]
              });
            }
            this.batterylifechart.series = [
              { "name": "Value", "data": this.jsonArrays[1] },
            ];

            // for designchart.....
            for (let i = 0; i < this.designchartdataRange.length; i++) {
              this.jsonArrays[2].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.designchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.designchartdataRange[i][1]] });
              this.jsonArrays[3].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.designchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.designchartdataRange[i][2]] });
              this.jsonArrays[4].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.designchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.designchartdataRange[i][3]] });
            }
            this.designchart.series = [
              { "name": "Classic", "data": this.jsonArrays[2] }, { "name": "Avant Garde", "data": this.jsonArrays[3] }, { "name": "Sport", "data": this.jsonArrays[4] },
            ];

            // for featureschartdata.....
            for (let i = 0; i < this.featureschartdataRange.length; i++) {
              this.jsonArrays[5].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.featureschartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.featureschartdataRange[i][1]] });
              this.jsonArrays[6].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.featureschartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.featureschartdataRange[i][2]] });
              this.jsonArrays[7].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.featureschartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.featureschartdataRange[i][3]] });
              this.jsonArrays[8].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.featureschartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.featureschartdataRange[i][4]] });
            }
            this.featureschart.series = [
              { "name": "Price Conscious", "data": this.jsonArrays[5] }, { "name": "Trendy", "data": this.jsonArrays[6] }, { "name": "Socially Conscious", "data": this.jsonArrays[7] }, { "name": "Tech Savvy", "data": this.jsonArrays[8] },
            ];

            // for repairabilitysupportchart.....
            for (let i = 0; i < this.repairabilitysupportchartdataRange.length; i++) {
              this.jsonArrays[9].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.repairabilitysupportchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.repairabilitysupportchartdataRange[i][1]] });
              this.jsonArrays[10].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.repairabilitysupportchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.repairabilitysupportchartdataRange[i][2]] });
              this.jsonArrays[11].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.repairabilitysupportchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.repairabilitysupportchartdataRange[i][3]] });
            }
            this.repairabilitysupportchart.series = [
              { "name": "Low Repairability & Software Support", "data": this.jsonArrays[9] },
              { "name": "Mediocre Repairability & Software Support", "data": this.jsonArrays[10] },
              { "name": "High Repairability & Software Support", "data": this.jsonArrays[11] }
            ];

            // for packagingchart.....
            for (let i = 0; i < this.packagingchartdataRange.length; i++) {
              this.jsonArrays[12].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.packagingchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.packagingchartdataRange[i][1]] });
              this.jsonArrays[13].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.packagingchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.packagingchartdataRange[i][2]] });
              this.jsonArrays[14].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.packagingchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.packagingchartdataRange[i][3]] });
            }
            this.packagingchart.series = [
              { "name": "Dynamic Packaging", "data": this.jsonArrays[12] },
              { "name": "Product Specific Packaging", "data": this.jsonArrays[13] },
              { "name": "Same Packaging for All Products", "data": this.jsonArrays[14] }
            ];

            // for recyclingchart.....
            for (let i = 0; i < this.recyclingchartdataRange.length; i++) {
              this.jsonArrays[15].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.recyclingchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.recyclingchartdataRange[i][1]] });
              this.jsonArrays[16].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.recyclingchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.recyclingchartdataRange[i][2]] });
              this.jsonArrays[17].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.recyclingchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.recyclingchartdataRange[i][3]] });
              this.jsonArrays[18].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.recyclingchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.recyclingchartdataRange[i][4]] });

            }
            this.recyclingchart.series = [
              { "name": "No Recycling", "data": this.jsonArrays[15] },
              { "name": "In-house Recycling", "data": this.jsonArrays[16] },
              { "name": "Third-party Recycling", "data": this.jsonArrays[17] },
              { "name": "Buy One, We Recycle One", "data": this.jsonArrays[18] }
            ];


            // for marketsizemnunitchart....
            for (let i = 0; i < this.marketsizemnunitchartdataRange.length; i++) {
              this.jsonArrays[19].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.marketsizemnunitchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.marketsizemnunitchartdataRange[i][1]] });
            }
            this.marketsizemnunitchart.series = [
              { "name": "Value", "data": this.jsonArrays[19] },
            ];


            //priceelasticitylinechart....
            for (let i = 0; i < this.priceelasticitylinedataRange.length; i++) {
              this.jsonArrays[20].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.priceelasticitylinedataRange[i][0]], 'y': (Number(data.resultList[0].stpGameCM.stpgameperioddata[this.priceelasticitylinedataRange[i][1]]) * 100).toFixed(0) });
              this.jsonArrays[21].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.priceelasticitylinedataRange[i][0]], 'y': (Number(data.resultList[0].stpGameCM.stpgameperioddata[this.priceelasticitylinedataRange[i][2]]) * 100).toFixed(0) });
              this.jsonArrays[22].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.priceelasticitylinedataRange[i][0]], 'y': (Number(data.resultList[0].stpGameCM.stpgameperioddata[this.priceelasticitylinedataRange[i][3]]) * 100).toFixed(0) });
              this.jsonArrays[23].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.priceelasticitylinedataRange[i][0]], 'y': (Number(data.resultList[0].stpGameCM.stpgameperioddata[this.priceelasticitylinedataRange[i][4]]) * 100).toFixed(0) });
            }
            this.priceelasticitylinechart.series = [{ "name": "Price Conscious", "data": this.jsonArrays[20] },
            { "name": "Trendy", "data": this.jsonArrays[21] },
            { "name": "Socially Conscious", "data": this.jsonArrays[22] },
            { "name": "Tech Savvy", "data": this.jsonArrays[23] },
            ];

            //promotionelasticitylinechart....
            for (let i = 0; i < this.promotionelasticitylinechartdataRange.length; i++) {
              this.jsonArrays[24].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.promotionelasticitylinechartdataRange[i][0]], 'y': (Number(data.resultList[0].stpGameCM.stpgameperioddata[this.promotionelasticitylinechartdataRange[i][1]]) * 100).toFixed(0) });
              this.jsonArrays[25].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.promotionelasticitylinechartdataRange[i][0]], 'y': (Number(data.resultList[0].stpGameCM.stpgameperioddata[this.promotionelasticitylinechartdataRange[i][2]]) * 100).toFixed(0) });
              this.jsonArrays[26].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.promotionelasticitylinechartdataRange[i][0]], 'y': (Number(data.resultList[0].stpGameCM.stpgameperioddata[this.promotionelasticitylinechartdataRange[i][3]]) * 100).toFixed(0) });
              this.jsonArrays[27].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.promotionelasticitylinechartdataRange[i][0]], 'y': (Number(data.resultList[0].stpGameCM.stpgameperioddata[this.promotionelasticitylinechartdataRange[i][4]]) * 100).toFixed(0) });
            }
            this.promotionelasticitylinechart.series = [{ "name": "Price Conscious", "data": this.jsonArrays[24] },
            { "name": "Trendy", "data": this.jsonArrays[25] },
            { "name": "Socially Conscious", "data": this.jsonArrays[26] },
            { "name": "Tech Savvy", "data": this.jsonArrays[27] },
            ];

            // for channelchart.....
            for (let i = 0; i < this.channelchartdataRange.length; i++) {
              this.jsonArrays[28].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.channelchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.channelchartdataRange[i][1]] });
              this.jsonArrays[29].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.channelchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.channelchartdataRange[i][2]] });
              this.jsonArrays[30].push({ 'x': data.resultList[0].stpGameCM.stpgameperioddata[this.channelchartdataRange[i][0]], "y": data.resultList[0].stpGameCM.stpgameperioddata[this.channelchartdataRange[i][3]] });
            }
            this.channelchart.series = [
              { "name": "Retail", "data": this.jsonArrays[28] },
              { "name": "Online", "data": this.jsonArrays[29] },
              { "name": "Specialist Stores", "data": this.jsonArrays[30] }
            ];


            this.checkloading = false;
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



  openDialog(): void {
    this.dialog.open(StpgamefoodforthoughtComponent, {
      data: {},
    });
  }

}

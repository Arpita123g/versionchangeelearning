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
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { SalestargetfoodforthoughtComponent } from '../salestargetfoodforthought/salestargetfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';
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
@Component({
  selector: 'app-salestargetinformationsearch',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule],
  templateUrl: './salestargetinformationsearch.component.html',
  styleUrls: ['./salestargetinformationsearch.component.scss']
})
export class SalestargetinformationsearchComponent extends AbstractComponent {
  foodforthought: boolean = true;
  marketsizegraph: barChart;
  pricegraph: barChart;
  productsalesgraph: barChart;
  grossmarginproductgraph: barChart;
  consumerpreferencegraph: barChart;
  channelpreferencegarph: barChart;
  channelsalesgraph: barChart;
  marketsizegrapharray: any = [];
  marketsizegrapharray1: any = [];
  pricinggrapharray: any = [];
  productgrapharray: any = [];
  consumergrapharray: any = [];
  consumergrapharray1: any = [];
  consumergrapharray2: any = [];
  consumergrapharray3: any = [];
  grossmargingrapharray: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  jsonarray8: any = [];
  jsonarray9: any = [];
  marketsizegraphvalue = [
    ["Easy Living", "f5", "g5"],
    ["Experiencers", "f6", "g6"],
    ["Hedonistic", "f7", "g7"],
    ["Thinkers", "f8", "g8"],
  ];
  pricinggraphvalue = [
    ['d33', 'e33'],
    ['d34', 'e34'],
    ['d35', 'e35'],
    ['d36', 'e36'],
  ];
  productgraphvalue = [

    ['Coffino', 'j5'],
    ['Nutty', 'j6'],
    ['Fruitful', 'j7'],
    ['Diblo', 'j8'],
  ];
  grossmargingraphvalue = [

    ['d39', 'e39'],
    ['d40', 'e40'],
    ['d41', 'e41'],
    ['d42', 'e42'],
  ];
  consumergraphvalue = [
    ["d52", "e52", "f52", "g52", "h52"],
    ["d53", "e53", "f53", "g53", "h53"],
    ["d54", "e54", "f54", "g54", "h54"],
    ["d55", "e55", "f55", "g55", "h55"],
  ];
  channelgraphvalue = [
    ["d59", "e59", "f59", "g59"],
    ["d60", "e60", "f60", "g60"],
    ["d61", "e61", "f61", "g61"],
    ["d62", "e62", "f62", "g62"],
  ];

  productgraphvaluestaticData = [11435, 9910, 7623, 9148]
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);


    this.marketsizegraph = {
      series: [
        // {
        //   name: 'Previous Period',
        //   data: [13100, 10400, 8300, 5200]
        // },
        // {
        //   name: 'Current Period',
        //   data: [16120, 12890, 10300, 5200]
        // },
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
          columnWidth: "40%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        // categories: ['Easy Living', 'Experiencers', 'Hedonistic', 'Thinkers'],
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
        text: "Market Size estimate for current period, k INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.pricegraph = {
      series: [
        // {
        //   data: [68, 64, 104, 98]
        // },
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
          return val + "₹";
        },
      },
      xaxis: {
        // categories: ['Coffino', 'Nutty', 'Fruitful', 'Diblo'],
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
            return "₹" + val;
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
        text: "Price, 500 ml packets",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.productsalesgraph = {
      series: [
        // {
        //   data: [11700, 9900, 7800, 9100]
        // },
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
        // categories: ['Coffino', 'Nutty', 'Fruitful', 'Diblo'],
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
        text: "Previous Period sales, k INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.grossmarginproductgraph = {
      series: [
        // {
        //   data: [65, 70, 68, 60]
        // },
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
        // categories: ['Coffino', 'Nutty', 'Fruitful', 'Diblo'],
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
        text: "Gross Margin Product Wise, %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.consumerpreferencegraph = {
      series: [
        // {
        //   name: 'Coffino',
        //   data: [8, 8, 6, 5]
        // },
        // {
        //   name: 'Nutty',
        //   data: [6, 9, 7, 6]
        // },
        // {
        //   name: 'Fruitful',
        //   data: [5, 7, 9, 8]
        // },
        // {
        //   name: 'Diblo',
        //   data: [4, 5, 8, 7]
        // },
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
          columnWidth: "40%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        // categories: ['Easy Living', 'Experiencers', 'Hedonistic', 'Thinkers'],
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
        text: "Consumer Preference, scale of 10",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.channelpreferencegarph = {
      series: [
        // {
        //   name: 'Modern Trade',
        //   data: [40, 35, 25, 30]
        // },
        // {
        //   name: 'Retail',
        //   data: [30, 45, 30, 40]
        // },
        // {
        //   name: 'HORECA',
        //   data: [30, 20, 45, 30]
        // },
      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: true,
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
          return val + "%";
        },
      },
      xaxis: {
        // categories: ['Easy Living', 'Experiencers', 'Hedonistic', 'Thinkers'],
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
        text: "Channel Preference",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.channelsalesgraph = {
      series: [
        {
          data: [13000, 8800, 16300]
        },
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
        categories: ['Modern Trade', 'Retail', 'HORECA'],
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
        text: "Channel Sales, previous year, k INR",
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
  showRajas: boolean = false;
  showRuchita: boolean = false;
  showShruti: boolean = false;

  rajasContent: string = "Rajas Shah is a dynamic and extroverted manager with an innate ability to connect and build relationships. His expertise lies in networking, making him an asset in the Modern Trade segment. Rajas thrives in social interactions and uses his extroverted nature to engage with clients, stakeholders, and team members. His enthusiasm and people skills contribute to his success in establishing and nurturing partnerships in the Modern Trade channel. With a penchant for creating connections, Rajas is well-suited to foster collaborative relationships and drive sales in this dynamic sector.";
  ruchitaContent: string = "Ruchita Roy, the HORECA manager, is characterized by her process-oriented approach and analytical mindset. She is a thinker personality who excels in carefully planning and executing strategies. Ruchita's strength lies in her ability to break down complex processes into manageable steps and ensure that every aspect of the HORECA channel is managed efficiently. Her logical thinking and attention to detail make her an ideal leader for a channel that demands precision and coordination. Ruchita's thoughtful approach ensures that the HORECA segment operates smoothly and aligns with the company's goals."
  shrutiContent: string = "Shruti Mishra is a natural leader with a harmonizer personality that brings balance and unity to her role as the Retail Manager. Her inherent leadership qualities and ability to bring diverse individuals together are her strengths. Shruti fosters a sense of teamwork and collaboration within her team, ensuring that everyone works cohesively toward shared objectives. Her harmonizing nature enables her to mediate conflicts and create a positive working environment in the Retail segment. With Shruti's leadership, the retail channel not only achieves its sales targets but also functions smoothly and harmoniously."
  rajasButtonColor: string = 'blue';
  ruchitaButtonColor: string = 'blue';
  shrutiButtonColor: string = 'blue';

  toggleRajas() {
    this.showRajas = !this.showRajas;
    this.rajasButtonColor = this.showRajas ? 'red' : 'blue';
  }

  toggleRuchita() {
    this.showRuchita = !this.showRuchita;
    this.ruchitaButtonColor = this.showRuchita ? 'red' : 'blue';
  }

  toggleShruti() {
    this.showShruti = !this.showShruti;
    this.shrutiButtonColor = this.showShruti ? 'red' : 'blue';
  }

  getRajasContent() {
    if (this.showRajas) {
      return this.rajasContent;
    } else {
      return this.rajasContent.slice(0, 150) + "...";
    }
  }
  getRuchitaContent() {
    if (this.showRuchita) {
      return this.ruchitaContent;
    } else {
      return this.ruchitaContent.slice(0, 150) + "...";
    }
  }
  getShrutiContent() {
    if (this.showShruti) {
      return this.shrutiContent;
    } else {
      return this.shrutiContent.slice(0, 150) + "...";
    }
  }

  getFetchData() {
    let apiname = '/salestarget/fetchsalestarget';
    this._api.salesfetchdata(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].salestargetcmid);
            if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }

            const defaultValues: { [key: string]: number } = {
              'f5': 13341,
              'g5': 16255,
              'f6': 10672,
              'g6': 13094,
              'f7': 8767,
              'g7': 10385,
              'f8': 5336,
              'g8': 5418,
              // Add default values for other cells as needed
            };

            for (let i = 0; i < this.marketsizegraphvalue.length; i++) {
              const cell1 = this.marketsizegraphvalue[i][1];
              const cell2 = this.marketsizegraphvalue[i][2];

              // Check if cell value is 0, if so, use default value
              const value1 = data.resultList[0][cell1] !== 0 ? data.resultList[0][cell1] : defaultValues[cell1];
              const value2 = data.resultList[0][cell2] !== 0 ? data.resultList[0][cell2] : defaultValues[cell2];

              // Push data to arrays
              this.marketsizegrapharray.push({ 'x': [this.marketsizegraphvalue[i][0]], 'y': value1.toFixed(0) });
              this.marketsizegrapharray1.push({ 'x': [this.marketsizegraphvalue[i][0]], 'y': value2.toFixed(0) });
            }

            // Update graph series
            this.marketsizegraph.series = [
              { "name": "Previous Period", "data": this.marketsizegrapharray },
              { "name": "Current Period", "data": this.marketsizegrapharray1 }
            ];

            console.log("marketsizegraph", this.marketsizegraph.series);


            for (let i = 0; i < this.pricinggraphvalue.length; i++) {
              this.pricinggrapharray.push({ 'x': data.resultList[0].salesTargetCM[this.pricinggraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.pricinggraphvalue[i][1]]).toFixed(0) });
            }
            this.pricegraph.series = [
              { "name": "value", "data": this.pricinggrapharray },
            ]

            for (let i = 0; i < 4; i++) {
              if (data.resultList[0][this.productgraphvalue[i][1]] == 0) {
                this.productgraphvaluestaticData[i] = this.productgraphvaluestaticData[i];
              } else {
                this.productgraphvaluestaticData[i] = data.resultList[0][this.productgraphvalue[i][1]];
              }
            }
            for (let i = 0; i < this.productgraphvalue.length; i++) {
              this.productgrapharray.push({ 'x': this.productgraphvalue[i][0], 'y': this.productgraphvaluestaticData[i] });
            }
            this.productsalesgraph.series = [
              { "name": "value", "data": this.productgrapharray },
            ]
            console.log("product", this.productsalesgraph.series);
            for (let i = 0; i < this.grossmargingraphvalue.length; i++) {
              this.grossmargingrapharray.push({ 'x': data.resultList[0].salesTargetCM[this.grossmargingraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.grossmargingraphvalue[i][1]] * 100).toFixed(0) });
            }
            this.grossmarginproductgraph.series = [
              { "name": "value", "data": this.grossmargingrapharray },
            ]
            for (let i = 0; i < this.consumergraphvalue.length; i++) {

              this.consumergrapharray.push({ 'x': data.resultList[0].salesTargetCM[this.consumergraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.consumergraphvalue[i][1]]).toFixed(0) });
              this.consumergrapharray1.push({ 'x': data.resultList[0].salesTargetCM[this.consumergraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.consumergraphvalue[i][2]]).toFixed(0) });
              this.consumergrapharray2.push({ 'x': data.resultList[0].salesTargetCM[this.consumergraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.consumergraphvalue[i][3]]).toFixed(0) });
              this.consumergrapharray3.push({ 'x': data.resultList[0].salesTargetCM[this.consumergraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.consumergraphvalue[i][4]]).toFixed(0) });

            }
            this.consumerpreferencegraph.series = [
              { "name": data.resultList[0].salesTargetCM.e51, "data": this.consumergrapharray },
              { "name": data.resultList[0].salesTargetCM.f51, "data": this.consumergrapharray1 },
              { "name": data.resultList[0].salesTargetCM.g51, "data": this.consumergrapharray2 },
              { "name": data.resultList[0].salesTargetCM.h51, "data": this.consumergrapharray3 },
            ];
            for (let i = 0; i < this.channelgraphvalue.length; i++) {


              this.jsonarray6.push({ 'x': data.resultList[0].salesTargetCM[this.channelgraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.channelgraphvalue[i][1]] * 100).toFixed(0) });
              this.jsonarray7.push({ 'x': data.resultList[0].salesTargetCM[this.channelgraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.channelgraphvalue[i][2]] * 100).toFixed(0) });
              this.jsonarray8.push({ 'x': data.resultList[0].salesTargetCM[this.channelgraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.channelgraphvalue[i][3]] * 100).toFixed(0) });

            }
            this.channelpreferencegarph.series = [{ "name": "Modern Trade", "data": this.jsonarray6 }, { "name": "Retail", "data": this.jsonarray7 },
            { "name": "HORECA", "data": this.jsonarray8 }]
            console.log("channelpreferencegarph", this.channelpreferencegarph.series)

          }
          this.checkloading = false;
        }
        else {
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    })
  }

  openDialog(): void {
    this.dialog.open(SalestargetfoodforthoughtComponent, {
      data: {},
    });
  }
}


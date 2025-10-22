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
import { PromotionsigmentnewfoodforthoughtComponent } from '../promotionsigmentnewfoodforthought/promotionsigmentnewfoodforthought.component';
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
  selector: 'app-promotionsigmentnewmarketresearch',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule,MatIconModule],
  templateUrl: './promotionsigmentnewmarketresearch.component.html',
  styleUrls: ['./promotionsigmentnewmarketresearch.component.scss']
})
export class PromotionsigmentnewmarketresearchComponent extends AbstractComponent {
  foodforthought: boolean = true;
  googleadspendgraph: barChart;
  emailinformationgraph: barChart;
  socialmediasubsgraph: barChart;
  platformsalesgraph: barChart;
  segmentsalesgraph: barChart;
  appleciderfacegraph: barChart;
  acnefacegraph: barChart;
  pricegraph: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  jsonarray8: any = [];
  jsonarray9: any = [];
  jsonarray10: any = [];
  jsonarray11: any = [];
  jsonarray12: any = [];
  jsonarray13: any = [];
  jsonarray14: any = [];
  jsonarray15: any = [];
  jsonarray16: any = [];
  jsonarray17: any = [];
  jsonarray18: any = [];
  jsonarray19: any = [];
  jsonarray20: any = [];
  jsonarray21: any = [];
  jsonarray22: any = [];
  jsonarray23: any = [];

  googleadspendgraphvalue = [
    ['d14', 'e14'],
    ['d15', 'e15'],
    ['d16', 'e15'],
    ['d17', 'e16'],
    ['d18', 'e17'],
    ['d19', 'e18'],
    ['d20', 'e19'],
    ['d21', 'e21'],
    ['d22', 'e22']
  ]

  emailinformationgraphvalue = [
    ['d26', 'e26', 'f26', 'g26', 'h26'],
    ['d27', 'e27', 'f27', 'g27', 'h27'],
    ['d28', 'e28', 'f28', 'g28', 'h28'],
    ['d29', 'e29', 'f29', 'g29', 'h29'],
    ['d30', 'e30', 'f30', 'g30', 'h30'],
    ['d31', 'e31', 'f31', 'g31', 'h31'],
    ['d32', 'e32', 'f32', 'g32', 'h32'],
    ['d33', 'e33', 'f33', 'g33', 'h33'],
    ['d34', 'e34', 'f34', 'g34', 'h34'],
  ]

  socialmediasubsgraphvalue = [
    ['d38', 'e38', 'f38', 'g38', 'h38'],
    ['d39', 'e39', 'f39', 'g39', 'h39'],
    ['d40', 'e40', 'f40', 'g40', 'h40'],
    ['d41', 'e41', 'f41', 'g41', 'h41'],
    ['d42', 'e42', 'f42', 'g42', 'h42'],
    ['d43', 'e43', 'f43', 'g43', 'h43'],
    ['d44', 'e44', 'f44', 'g44', 'h44'],
    ['d45', 'e45', 'f45', 'g45', 'h45'],
    ['d46', 'e46', 'f46', 'g46', 'h46'],
  ]

  appleciderfacewash = [
    ['i74','j74','k74','l74','m74'],
    ['i75','j75','k75','l75','m75'],
    ['i76','j76','k76','l76','m76'],
    ['i77','j77','k77','l77','m77'],
    ['i78','j78','k78','l78','m78'],
    ['i79','j79','k79','l79','m79'],
    ['i80','j80','k80','l80','m80'],
    ['i81','j81','k81','l81','m81'],
    ['i82','j82','k82','l82','m82'],
  ]

  acnefacecream = [
    ['i85','j85','k85','l85','m85'],
    ['i86','j86','k86','l86','m86'],
    ['i87','j87','k87','l87','m87'],
    ['i88','j88','k88','l88','m88'],
    ['i89','j89','k89','l89','m89'],
    ['i90','j90','k90','l90','m90'],
    ['i91','j91','k91','l91','m91'],
    ['i92','j92','k92','l92','m92'],
    ['i93','j93','k93','l93','m93'],
  ]

  
  platformsalesgraphvalue = [
    ['d50', 'e50', 'f50'],
    ['d51', 'e51', 'f51'],
    ['d52', 'e52', 'f52'],
    ['d53', 'e53', 'f53'],
  ]

  segmentsalesgraphhvalue = [
    ['d57', 'e57', 'f57'],
    ['d58', 'e58', 'f58'],
    ['d59', 'e59', 'f59'],
    ['d60', 'e60', 'f60'],
  ]

  pricegraphvalue = [
    ['d86', 'e86', 'f86'],
    ['d87', 'e87', 'f87'],
    ['d88', 'e88', 'f88'],
    ['d89', 'e89', 'f89'],
  ]


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.googleadspendgraph = {
      series: [
        // {
        //   data: [2710, 2577, 2711, 3007, 3242, 3273, 3269, 3169, 2892]
        // }
      ],
      chart: {
        height: 250,
        type: "bar",
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
        categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        text: "Google Ad Spend, k INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.emailinformationgraph = {
      series: [
        
      ],

      chart: {
        height: 250,
        type: 'line',
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {}
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
        categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        crosshairs: {},
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        type: 'solid',
      },
      yaxis: {
        axisTicks: {
          show: true,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val + "";
          },
        },
        axisBorder: {
          show: true
        },
        opposite: false,
      },
      tooltip: {
        enabled: true,
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
        text: "Email Information",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }

      }

    };

    this.socialmediasubsgraph = {
      series: [
      

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
          return val + "";
        },
      },
      xaxis: {
        categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        text: "Social Media Subscribers",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.platformsalesgraph = {
      series: [
        // {
        //   name: 'Acne Face Cream',
        //   data: [34060, 20000, 15890, 26000,]
        // },
        // {
        //   name: 'Apple Cider Face Wash',
        //   data: [38000, 22100, 19100, 24000,]
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
        categories: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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
        text: "Platform Sales",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.segmentsalesgraph = {
      series: [
        // {
        //   name: 'Young & Leisure',
        //   data: [39633, 27365, 19244.5, 26000,]
        // },
        // {
        //   name: 'High-end',
        //   data: [32427, 14735, 15746, 24000,]
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
        categories: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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
        text: "Segment Sales",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.appleciderfacegraph = {
      series: [
        {
          name: 'Website',
          data: [26753, 26154, 22096, 28983, 34424, 24724, 31579, 21496, 38000]
        },
        {
          name: 'Social Commerce	',
          data: [19238, 24705, 19505, 22730, 16033, 19765, 22119, 19616, 22100,]
        },
        {
          name: 'Modern Trade',
          data: [19251, 15543, 14176, 13455, 16033, 13336, 14457, 17124, 19100]
        },
        {
          name: 'Retailers',
          data: [20831, 26613, 24872, 24741, 30756, 26906, 21122, 21284, 24000]
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
        categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        text: "Apple Cider Face Wash (100 ml)",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.acnefacegraph = {
      series: [
        // {
        //   name: 'Website',
        //   data: [32698, 31966, 30514, 36887, 30527, 31466, 41861, 32244, 34060]
        // },
        // {
        //   name: 'Social Commerce	',
        //   data: [23513, 30195, 26935, 28930, 22381, 25155, 29321, 29424, 20000,]
        // },
        // {
        //   name: 'Modern Trade',
        //   data: [23529, 18986, 19563, 17125, 14218, 16974, 191763, 25686, 15890]
        // },
        // {
        //   name: 'Retailers',
        //   data: [25460, 32527, 34348, 31489, 27274, 34244, 27998, 31926, 26000]
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
        categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        text: "Acne Face Cream (30 g)",
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
        //   name: '	Acne Face Cream	',
        //   data: [399, 310, 300, 350]
        // },
        // {
        //   name: 'Apple Cider Face Wash',
        //   data: [249, 230, 210, 280]
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
        categories: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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
        text: "Price",
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
    let apiname = '/promotions/fetchpromotions';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this._global.consumerbehaviourcmid.next(data.resultList[0].promotionscmid);
            if (data.resultList[0].promotionsCM.promotionsCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }
            this.jsonarray1 = [];this.jsonarray2 = [];this.jsonarray3 = [];this.jsonarray4 = [];this.jsonarray5 = [];
            for (let i = 0; i < this.googleadspendgraphvalue.length; i++) {
              this.jsonarray1.push({ 'x': data.resultList[0].promotionsCM[this.googleadspendgraphvalue[i][0]], 'y': Number(data.resultList[0].promotionsCM[this.googleadspendgraphvalue[i][1]]) });
            }
            this.googleadspendgraph.series = [{ "name": "value", "data": this.jsonarray1 }]
            
            for (let i = 0; i < this.emailinformationgraphvalue.length; i++) {
              this.jsonarray2.push(Number(data.resultList[0].promotionsCM[this.emailinformationgraphvalue[i][1]]))
              this.jsonarray3.push(Number(data.resultList[0].promotionsCM[this.emailinformationgraphvalue[i][2]]))
              this.jsonarray4.push(Number(data.resultList[0].promotionsCM[this.emailinformationgraphvalue[i][3]]));
              this.jsonarray5.push(Number(data.resultList[0].promotionsCM[this.emailinformationgraphvalue[i][4]]));
            }
            this.emailinformationgraph.series = [{ "name": "Email Contacts","type":"column" ,"data": this.jsonarray2 },
            { "name": "Email Susbscriber","type":"column" ,"data": this.jsonarray3 },{ "name": "Bounce Rate","type":"line" ,"data": this.jsonarray4 },
            { "name": "Email Open Rate","type":"line" ,"data": this.jsonarray5 }]
           
            for (let i = 0; i < this.socialmediasubsgraphvalue.length; i++) {
              this.jsonarray6.push(Number(data.resultList[0].promotionsCM[this.socialmediasubsgraphvalue[i][1]]) );
              this.jsonarray7.push(Number(data.resultList[0].promotionsCM[this.socialmediasubsgraphvalue[i][2]]) );
              this.jsonarray8.push(Number(data.resultList[0].promotionsCM[this.socialmediasubsgraphvalue[i][3]]) );
              this.jsonarray9.push(Number(data.resultList[0].promotionsCM[this.socialmediasubsgraphvalue[i][4]]) );
              this.jsonarray16.push(Number(data.resultList[0].promotionsCM[this.appleciderfacewash[i][1]]).toFixed(0) );
              this.jsonarray17.push(Number(data.resultList[0].promotionsCM[this.appleciderfacewash[i][2]]).toFixed(0) );
              this.jsonarray18.push(Number(data.resultList[0].promotionsCM[this.appleciderfacewash[i][3]]).toFixed(0) );
              this.jsonarray19.push(Number(data.resultList[0].promotionsCM[this.appleciderfacewash[i][4]]).toFixed(0) );
              this.jsonarray20.push(Number(data.resultList[0].promotionsCM[this.acnefacecream[i][1]]).toFixed(0) );
              this.jsonarray21.push(Number(data.resultList[0].promotionsCM[this.acnefacecream[i][2]]).toFixed(0) );
              this.jsonarray22.push(Number(data.resultList[0].promotionsCM[this.acnefacecream[i][3]]).toFixed(0) );
              this.jsonarray23.push(Number(data.resultList[0].promotionsCM[this.acnefacecream[i][4]]).toFixed(0) );
            }
            this.socialmediasubsgraph.series = [{ "name": "Facebook", "data": this.jsonarray6 },{ "name": "Instagram", "data": this.jsonarray7 },
            { "name": "Twitter", "data": this.jsonarray8 },{ "name": "YouTube", "data": this.jsonarray9 }]
            
            this.appleciderfacegraph.series = [{ "name": "Website", "data": this.jsonarray16 },{ "name": "Social Commerce", "data": this.jsonarray17 },
            { "name": "Modern Trade", "data": this.jsonarray18 },{ "name": "Retailers", "data": this.jsonarray19 }]
            
            this.acnefacegraph.series = [{ "name": "Website", "data": this.jsonarray20 },{ "name": "Social Commerce", "data": this.jsonarray21 },
            { "name": "Modern Trade", "data": this.jsonarray22 },{ "name": "Retailers", "data": this.jsonarray23 }]

            for (let i = 0; i < this.platformsalesgraphvalue.length; i++) {
              this.jsonarray10.push(Number(data.resultList[0].promotionsCM[this.platformsalesgraphvalue[i][1]]) );
              this.jsonarray11.push(Number(data.resultList[0].promotionsCM[this.platformsalesgraphvalue[i][2]]) );
             
            }
            this.platformsalesgraph.series = [{ "name": "Acne Face Cream", "data": this.jsonarray10 },{ "name": "Apple Cider Face Wash", "data": this.jsonarray11 },
            ]

            for (let i = 0; i < this.segmentsalesgraphhvalue.length; i++) {
              this.jsonarray12.push(Number(data.resultList[0].promotionsCM[this.segmentsalesgraphhvalue[i][1]]) );
              this.jsonarray13.push(Number(data.resultList[0].promotionsCM[this.segmentsalesgraphhvalue[i][2]]) );
             
            }
            this.segmentsalesgraph.series = [{ "name": "Young & Leisure", "data": this.jsonarray12 },{ "name": "High-end", "data": this.jsonarray13 },
            ]

            for (let i = 0; i < this.pricegraphvalue.length; i++) {
              this.jsonarray14.push(Number(data.resultList[0].promotionsCM[this.pricegraphvalue[i][1]]) );
              this.jsonarray15.push(Number(data.resultList[0].promotionsCM[this.pricegraphvalue[i][2]]) );
             
            }
            this.pricegraph.series = [{ "name": "Acne Face Cream", "data": this.jsonarray14 },{ "name": "Apple Cider Face Wash", "data": this.jsonarray15 },
            ]

            this.checkloading = false;

            
           
            
          }
        }
      }
    })
  }

  openDialog(): void {
    this.dialog.open(PromotionsigmentnewfoodforthoughtComponent, {
      data: {},
    });
  }
}

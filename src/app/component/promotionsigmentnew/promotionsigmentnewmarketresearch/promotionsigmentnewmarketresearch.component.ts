import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexNoData, ApexPlotOptions, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis,
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
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

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
  imports: [CommonModule, FormsModule, NgApexchartsModule,MatIconModule, TippyDirective],
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
  language: any = [];
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
    ['b263', 'e14'],
    ['b264', 'e15'],
    ['b265', 'e16'],
    ['b266', 'e17'],
    ['b267', 'e18'],
    ['b268', 'e19'],
    ['b269', 'e20'],
    ['b270', 'e21'],
    ['b271', 'e22']
  ]

  emailinformationgraphvalue = [
    ['b263', 'e26', 'f26', 'g26', 'h26'],
    ['b264', 'e27', 'f27', 'g27', 'h27'],
    ['b265', 'e28', 'f28', 'g28', 'h28'],
    ['b266', 'e29', 'f29', 'g29', 'h29'],
    ['b267', 'e30', 'f30', 'g30', 'h30'],
    ['b268', 'e31', 'f31', 'g31', 'h31'],
    ['b269', 'e32', 'f32', 'g32', 'h32'],
    ['b270', 'e33', 'f33', 'g33', 'h33'],
    ['b271', 'e34', 'f34', 'g34', 'h34'],
  ]

  socialmediasubsgraphvalue = [
    ['b263', 'e38', 'f38', 'g38', 'h38'],
    ['b264', 'e39', 'f39', 'g39', 'h39'],
    ['b265', 'e40', 'f40', 'g40', 'h40'],
    ['b266', 'e41', 'f41', 'g41', 'h41'],
    ['b267', 'e42', 'f42', 'g42', 'h42'],
    ['b268', 'e43', 'f43', 'g43', 'h43'],
    ['b269', 'e44', 'f44', 'g44', 'h44'],
    ['b270', 'e45', 'f45', 'g45', 'h45'],
    ['b271', 'e46', 'f46', 'g46', 'h46'],
  ]

  appleciderfacewash = [
    ['b263', 'j74','k74','l74','m74'],
    ['b264', 'j75','k75','l75','m75'],
    ['b265', 'j76','k76','l76','m76'],
    ['b266', 'j77','k77','l77','m77'],
    ['b267', 'j78','k78','l78','m78'],
    ['b268', 'j79','k79','l79','m79'],
    ['b269', 'j80','k80','l80','m80'],
    ['b270', 'j81','k81','l81','m81'],
    ['b271', 'j82','k82','l82','m82'],
  ]

  acnefacecream = [
    ['b263', 'j85','k85','l85','m85'],
    ['b264', 'j86','k86','l86','m86'],
    ['b265', 'j87','k87','l87','m87'],
    ['b266', 'j88','k88','l88','m88'],
    ['b267', 'j89','k89','l89','m89'],
    ['b268', 'j90','k90','l90','m90'],
    ['b269', 'j91','k91','l91','m91'],
    ['b270', 'j92','k92','l92','m92'],
    ['b271', 'j93','k93','l93','m93'],
  ]


  platformsalesgraphvalue = [
    ['b51', 'e50', 'f50'],
    ['b52', 'e51', 'f51'],
    ['b53', 'e52', 'f52'],
    ['b54', 'e53', 'f53'],
  ]

  segmentsalesgraphhvalue = [
    ['b51', 'e57', 'f57'],
    ['b52', 'e58', 'f58'],
    ['b53', 'e59', 'f59'],
    ['b54', 'e60', 'f60'],
  ]

  pricegraphvalue = [
    ['b51', 'e86', 'f86'],
    ['b52', 'e87', 'f87'],
    ['b53', 'e88', 'f88'],
    ['b54', 'e89', 'f89'],
  ]
  outlooktextcontent:string = "";

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.googleadspendgraph = {
      series: [
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
        // categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        // text: "Google Ad Spend, k INR",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
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
        // categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        // text: "Email Information",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }

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
        // categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        // text: "Social Media Subscribers",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.platformsalesgraph = {
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
        // categories: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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
        // text: "Platform Sales",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.segmentsalesgraph = {
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
        // categories: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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
        // text: "Segment Sales",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.appleciderfacegraph = {
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
        // categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        // text: "Apple Cider Face Wash (100 ml)",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.acnefacegraph = {
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
        // categories: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'U'],
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
        // text: "Acne Face Cream (30 g)",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.pricegraph = {
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
        // categories: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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
        // text: "Price",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].promotionsnewcmid);
            if (data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }

            this.language = data.resultList[0].promoTionsNewLM[this.languageselect.toLowerCase()];
           let outlookdata = this.language.b21.replace(/\\/g, '');
            this.outlooktextcontent = outlookdata.replace(/\n/g, '<br>');
console.log("ou",this.outlooktextcontent)
            this.googleadspendgraph = {
              ...this.googleadspendgraph,
              xaxis: {
                ...this.googleadspendgraph.xaxis,
                categories: [
                  this.language.b263,
                  this.language.b264,
                  this.language.b265,
                  this.language.b266,
                  this.language.b267,
                  this.language.b268,
                  this.language.b269,
                  this.language.b270,
                  this.language.b271,
                ]
              },
              title: {
                text: this.language.b25,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.emailinformationgraph = {
              ...this.emailinformationgraph,
              xaxis: {
                ...this.emailinformationgraph.xaxis,
                categories: [
                  this.language.b263,
                  this.language.b264,
                  this.language.b265,
                  this.language.b266,
                  this.language.b267,
                  this.language.b268,
                  this.language.b269,
                  this.language.b270,
                  this.language.b271,
                ]
              },
              title: {
                text: this.language.b27,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.platformsalesgraph = {
              ...this.platformsalesgraph,
              xaxis: {
                ...this.platformsalesgraph.xaxis,
                categories: [
                  this.language.b51,
                  this.language.b52,
                  this.language.b53,
                  this.language.b54,
                ]
              },
              title: {
                text: this.language.b41,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.segmentsalesgraph = {
              ...this.segmentsalesgraph,
              xaxis: {
                ...this.segmentsalesgraph.xaxis,
                categories: [
                  this.language.b51,
                  this.language.b52,
                  this.language.b53,
                  this.language.b54,
                ]
              },
              title: {
                text: this.language.b45,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.socialmediasubsgraph = {
              ...this.socialmediasubsgraph,
              xaxis: {
                ...this.socialmediasubsgraph.xaxis,
                categories: [
                  this.language.b263,
                  this.language.b264,
                  this.language.b265,
                  this.language.b266,
                  this.language.b267,
                  this.language.b268,
                  this.language.b269,
                  this.language.b270,
                  this.language.b271,
                ]
              },
              title: {
                text: this.language.b33,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.appleciderfacegraph = {
              ...this.appleciderfacegraph,
              xaxis: {
                ...this.appleciderfacegraph.xaxis,
                categories: [
                  this.language.b263,
                  this.language.b264,
                  this.language.b265,
                  this.language.b266,
                  this.language.b267,
                  this.language.b268,
                  this.language.b269,
                  this.language.b270,
                  this.language.b271,
                ]
              },
              title: {
                text: this.language.b50,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.acnefacegraph = {
              ...this.acnefacegraph,
              xaxis: {
                ...this.acnefacegraph.xaxis,
                categories: [
                  this.language.b263,
                  this.language.b264,
                  this.language.b265,
                  this.language.b266,
                  this.language.b267,
                  this.language.b268,
                  this.language.b269,
                  this.language.b270,
                  this.language.b271,
                ]
              },
              title: {
                text: this.language.b56,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.pricegraph = {
              ...this.pricegraph,
              xaxis: {
                ...this.pricegraph.xaxis,
                categories: [
                  this.language.b51,
                  this.language.b52,
                  this.language.b53,
                  this.language.b54,
                ]
              },
              title: {
                text: this.language.b58,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            //Google Ad Spend
            this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
            for (let i = 0; i < this.googleadspendgraphvalue.length; i++) {
              this.jsonarray1.push({ 'x': this.language[this.googleadspendgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.googleadspendgraphvalue[i][1]]).toFixed(0) });
            }
            this.googleadspendgraph.series = [{ "name": "", "data": this.jsonarray1 }]

            //Email Information
            // for (let i = 0; i < this.emailinformationgraphvalue.length; i++) {
            //   this.jsonarray2.push(Number(data.resultList[0].promotionsNewCM[this.emailinformationgraphvalue[i][1]]))
            //   this.jsonarray3.push(Number(data.resultList[0].promotionsNewCM[this.emailinformationgraphvalue[i][2]]))
            //   this.jsonarray4.push(Number(data.resultList[0].promotionsNewCM[this.emailinformationgraphvalue[i][3]]));
            //   this.jsonarray5.push(Number(data.resultList[0].promotionsNewCM[this.emailinformationgraphvalue[i][4]]));
            // }
            for (let i = 0; i < this.emailinformationgraphvalue.length; i++) {
              this.jsonarray2.push({ 'x': this.language[this.emailinformationgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.emailinformationgraphvalue[i][1]]) });
              this.jsonarray3.push({ 'x': this.language[this.emailinformationgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.emailinformationgraphvalue[i][2]]) });
              this.jsonarray4.push({ 'x': this.language[this.emailinformationgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.emailinformationgraphvalue[i][3]]) });
              this.jsonarray5.push({ 'x': this.language[this.emailinformationgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.emailinformationgraphvalue[i][4]]) });
            }

            this.emailinformationgraph.series = [{ "name": this.language.b28, "type": "column", "data": this.jsonarray2 },
            { "name": this.language.b29, "type": "column", "data": this.jsonarray3 }, { "name": this.language.b30, "type": "line", "data": this.jsonarray4 },
            { "name": this.language.b31, "type": "line", "data": this.jsonarray5 }]

            //Social Media Subscribers
            // for (let i = 0; i < this.socialmediasubsgraphvalue.length; i++) {
            //   this.jsonarray6.push(Number(data.resultList[0].promotionsNewCM[this.socialmediasubsgraphvalue[i][1]]));
            //   this.jsonarray7.push(Number(data.resultList[0].promotionsNewCM[this.socialmediasubsgraphvalue[i][2]]));
            //   this.jsonarray8.push(Number(data.resultList[0].promotionsNewCM[this.socialmediasubsgraphvalue[i][3]]));
            //   this.jsonarray9.push(Number(data.resultList[0].promotionsNewCM[this.socialmediasubsgraphvalue[i][4]]));
            //   this.jsonarray16.push(Number(data.resultList[0].promotionsNewCM[this.appleciderfacewash[i][1]]).toFixed(0));
            //   this.jsonarray17.push(Number(data.resultList[0].promotionsNewCM[this.appleciderfacewash[i][2]]).toFixed(0));
            //   this.jsonarray18.push(Number(data.resultList[0].promotionsNewCM[this.appleciderfacewash[i][3]]).toFixed(0));
            //   this.jsonarray19.push(Number(data.resultList[0].promotionsNewCM[this.appleciderfacewash[i][4]]).toFixed(0));
            //   this.jsonarray20.push(Number(data.resultList[0].promotionsNewCM[this.acnefacecream[i][1]]).toFixed(0));
            //   this.jsonarray21.push(Number(data.resultList[0].promotionsNewCM[this.acnefacecream[i][2]]).toFixed(0));
            //   this.jsonarray22.push(Number(data.resultList[0].promotionsNewCM[this.acnefacecream[i][3]]).toFixed(0));
            //   this.jsonarray23.push(Number(data.resultList[0].promotionsNewCM[this.acnefacecream[i][4]]).toFixed(0));
            // }
            for (let i = 0; i < this.socialmediasubsgraphvalue.length; i++) {
              this.jsonarray6.push({ 'x': this.language[this.socialmediasubsgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.socialmediasubsgraphvalue[i][1]]) });
              this.jsonarray7.push({ 'x': this.language[this.socialmediasubsgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.socialmediasubsgraphvalue[i][2]]) });
              this.jsonarray8.push({ 'x': this.language[this.socialmediasubsgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.socialmediasubsgraphvalue[i][3]]) });
              this.jsonarray9.push({ 'x': this.language[this.socialmediasubsgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.socialmediasubsgraphvalue[i][4]]) });

              this.jsonarray16.push({ 'x': this.language[this.appleciderfacewash[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.appleciderfacewash[i][1]]).toFixed(0) });
              this.jsonarray17.push({ 'x': this.language[this.appleciderfacewash[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.appleciderfacewash[i][2]]).toFixed(0) });
              this.jsonarray18.push({ 'x': this.language[this.appleciderfacewash[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.appleciderfacewash[i][3]]).toFixed(0) });
              this.jsonarray19.push({ 'x': this.language[this.appleciderfacewash[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.appleciderfacewash[i][4]]).toFixed(0) });

              this.jsonarray20.push({ 'x': this.language[this.acnefacecream[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.acnefacecream[i][1]]).toFixed(0) });
              this.jsonarray21.push({ 'x': this.language[this.acnefacecream[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.acnefacecream[i][2]]).toFixed(0) });
              this.jsonarray22.push({ 'x': this.language[this.acnefacecream[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.acnefacecream[i][3]]).toFixed(0) });
              this.jsonarray23.push({ 'x': this.language[this.acnefacecream[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.acnefacecream[i][4]]).toFixed(0) });
            }

            this.socialmediasubsgraph.series = [{ "name": this.language.b34, "data": this.jsonarray6 }, { "name": this.language.b35, "data": this.jsonarray7 },
            { "name": this.language.b36, "data": this.jsonarray8 }, { "name": this.language.b37, "data": this.jsonarray9 }]

            this.appleciderfacegraph.series = [{ "name": this.language.b51, "data": this.jsonarray16 }, { "name": this.language.b52, "data": this.jsonarray17 },
            { "name": this.language.b53, "data": this.jsonarray18 }, { "name": this.language.b54, "data": this.jsonarray19 }]

            this.acnefacegraph.series = [{ "name": this.language.b51, "data": this.jsonarray20 }, { "name": this.language.b52, "data": this.jsonarray21 },
            { "name": this.language.b53, "data": this.jsonarray22 }, { "name": this.language.b54, "data": this.jsonarray23 }]

            //PlatformSales
            // for (let i = 0; i < this.platformsalesgraphvalue.length; i++) {
            //   this.jsonarray10.push(Number(data.resultList[0].promotionsNewCM[this.platformsalesgraphvalue[i][1]]));
            //   this.jsonarray11.push(Number(data.resultList[0].promotionsNewCM[this.platformsalesgraphvalue[i][2]]));
            // }
            for (let i = 0; i < this.platformsalesgraphvalue.length; i++) {
              this.jsonarray10.push({ 'x': this.language[this.platformsalesgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.platformsalesgraphvalue[i][1]]).toFixed(0) });
              this.jsonarray11.push({ 'x': this.language[this.platformsalesgraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.platformsalesgraphvalue[i][2]]).toFixed(0) });
            }
            this.platformsalesgraph.series = [{ "name": this.language.b42, "data": this.jsonarray10 }, { "name": this.language.b43, "data": this.jsonarray11 },
            ]

            //SegmentSales
            // for (let i = 0; i < this.segmentsalesgraphhvalue.length; i++) {
            //   this.jsonarray12.push(Number(data.resultList[0].promotionsNewCM[this.segmentsalesgraphhvalue[i][1]]));
            //   this.jsonarray13.push(Number(data.resultList[0].promotionsNewCM[this.segmentsalesgraphhvalue[i][2]]));
            // }
            for (let i = 0; i < this.segmentsalesgraphhvalue.length; i++) {
              this.jsonarray12.push({ 'x': this.language[this.segmentsalesgraphhvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.segmentsalesgraphhvalue[i][1]]).toFixed(0) });
              this.jsonarray13.push({ 'x': this.language[this.segmentsalesgraphhvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.segmentsalesgraphhvalue[i][2]]).toFixed(0) });
            }
            this.segmentsalesgraph.series = [{ "name": this.language.b46, "data": this.jsonarray12 }, { "name": this.language.b47, "data": this.jsonarray13 },
            ]

            //PriceGraph
            // for (let i = 0; i < this.pricegraphvalue.length; i++) {
            //   this.jsonarray14.push(Number(data.resultList[0].promotionsNewCM[this.pricegraphvalue[i][1]]));
            //   this.jsonarray15.push(Number(data.resultList[0].promotionsNewCM[this.pricegraphvalue[i][2]]));
            // }
            for (let i = 0; i < this.pricegraphvalue.length; i++) {
              this.jsonarray14.push({ 'x': this.language[this.pricegraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.pricegraphvalue[i][1]]).toFixed(0) });
              this.jsonarray15.push({ 'x': this.language[this.pricegraphvalue[i][0]], 'y': Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.pricegraphvalue[i][2]]).toFixed(0) });
            }
            this.pricegraph.series = [{ "name": this.language.b42, "data": this.jsonarray14 }, { "name": this.language.b43, "data": this.jsonarray15 },
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

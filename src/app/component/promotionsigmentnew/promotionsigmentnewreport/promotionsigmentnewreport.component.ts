import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexMarkers,
  ApexNoData,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
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
import { PromotionsheetService } from 'src/app/service/sheet/promotion/promotionsheet.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
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
interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
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
};

@Component({
  selector: 'app-promotionsigmentnewreport',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule,MatIconModule,TippyDirective],
  templateUrl: './promotionsigmentnewreport.component.html',
  styleUrls: ['./promotionsigmentnewreport.component.scss']
})
export class PromotionsigmentnewreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  productsalesgraph: barChart;
  segmentsalesgraph: barChart;
  platformslaesgraph: pieChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  getallvalues: any = '';
  submitprove: string = "";
  incomepercent: any = [];
  incomepercentnames: any = [];
  platform: any = [];
  platformnames: any = [];
  language: any = [];

  optionalcase: any = ["foodforthoughtstatus", "onlinestatus", "moderntradestatus", "reatilersstatus"]
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: PromotionsheetService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [
      ],
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: ''
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        // categories: ['Rigor', 'Structuring', 'Synthesis', 'Business Jugement',]
      },
      yaxis: {
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },

    };

    this.productsalesgraph = {
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.segmentsalesgraph = {
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    // this.platformslaesgraph = {
    //   series: [

    //   ],
    //   chart: {
    //     width: 400,
    //     height: 250,
    //     type: 'pie',
    //     toolbar: {
    //       show: true,
    //       offsetX: 0,
    //       offsetY: 0,
    //       tools: {},
    //     },
    //   },
    //   legend: {
    //     position: 'right',
    //     offsetY: 80,
    //   },
    //   labels: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       options: {
    //         chart: {
    //           height: 100,
    //         },
    //         legend: {
    //           position: 'middle',
    //         },
    //       },
    //     },
    //   ],
    //   tooltip: {
    //     y: {
    //       formatter: undefined,
    //       title: {
    //         formatter: (seriesName: any) => '',
    //       },
    //     },
    //     x: {
    //       show: false
    //     }
    //   },
    //   title: {
    //     text: '',
    //     offsetY: 0,
    //     align: 'center',
    //     style: {
    //       fontWeight: 'bold',
    //     },
    //   },
    // };

    this.platformslaesgraph = {
      series: [],
      labels: [],
      chart: {
        width: 450,
        height: 300,
        type: "pie",
      },
      title: {
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
      },
      tooltip: {
        y: { title: { formatter: () => '' } },
        x: { show: false }
      },
      responsive: [
        {
          breakpoint: 430,
          options: {
            chart: { width: 200 },
            legend: { position: "bottom" },
            title: {
              align: "center",
              style: {
                fontWeight: "bold",
                fontSize: "12px",
              }
            }
          }
        }
      ]
    };
  }

  rigorchartsrange = [
    ['b162', 'ag43', '82', '52'],
    ['b163', 'ag44', '78', '55'],
    ['b164', 'ag45', '80', '58'],
    ['b165', 'ag46', '81', '60'],
  ];

  productsalesgraphrange = [
    ['b51', 's6', 't6'],
    ['b52', 's7', 't7'],
    ['b53', 's8', 't8'],
    ['b54', 's9', 't9'],
  ]

  segmentsalesgraphrange = [
    ['b51', 's18', 't18'],
    ['b52', 's19', 't19'],
    ['b53', 's20', 't20'],
    ['b54', 's21', 't21'],
  ]

  platformslaesgraphrange = [
    ['b51', 'u6'],
    ['b52', 'u7'],
    ['b53', 'u8'],
    ['b54', 'u9'],
  ]

  resultcellname: any = ['r6', 's6', 't6', 'r7', 's7', 't7', 'r8', 's8', 't8', 'r9', 's9', 't9', 's17', 't17', //13
    'r18', 's18', 't18', 'r19', 's19', 't19', 'r20', 's20', 't20', 'r21', 's21', 't21', 'u6', 'u7', 'u8', 'u9', //29
    's27', 's28', 's29', 's30', 's31', 's24', 's25', 's26', 's32', 's33', 's38']; //40

  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }


  getFetchData(attempt: string) {
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this.submitprove = data.resultList[0].promotionsnewdata.z20;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].promotionscmid);
                let attempt = data.resultList[0].attempt;
                this.language = data.resultList[0].promoTionsNewLM[this.languageselect.toLowerCase()];
                this.roundname = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + attempt : "Round" + " " + attempt;

                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + i : "Round" + " " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0].promotionsnewdata[this.resultcellname[i]]
                }

                this.rigorcharts = {
                  ...this.rigorcharts, // Retain existing config
                  xaxis: {
                    ...this.rigorcharts.xaxis,
                    categories: [
                      this.language.b162,
                      this.language.b163,
                      this.language.b164,
                      this.language.b165,
                    ]
                  },

                };

                this.productsalesgraph = {
                  ...this.productsalesgraph,
                  xaxis: {
                    ...this.productsalesgraph.xaxis,
                    categories: [
                      this.language.b51,
                      this.language.b52,
                      this.language.b53,
                      this.language.b54,

                    ]
                  },
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
                };

                //rigor chart data
                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.language[this.rigorchartsrange[i][0]], 'y': Number(data.resultList[0].promotionsnewdata[(this.rigorchartsrange[i][1])] * 100).toFixed(0) });
                  this.jsonarray2.push({ 'x': this.language[this.rigorchartsrange[i][0]], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.language[this.rigorchartsrange[i][0]], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": this.language.b170, "data": this.jsonarray1 }, { "name": this.language.b171, "data": this.jsonarray2 }, { "name": this.language.b172, "data": this.jsonarray3 }]

                //ProductSalesgraph
                for (let i = 0; i < this.productsalesgraphrange.length; i++) {
                  this.jsonarray4.push({ 'x': this.language[this.productsalesgraphrange[i][0]], 'y': (Number(data.resultList[0].promotionsnewdata[this.productsalesgraphrange[i][1]] || 0)).toFixed(0) });
                  this.jsonarray5.push({ 'x': this.language[this.productsalesgraphrange[i][0]], 'y': (Number(data.resultList[0].promotionsnewdata[this.productsalesgraphrange[i][2]] || 0)).toFixed(0) });
                }
                this.productsalesgraph.series = [
                  { "name": this.language.b42, "data": this.jsonarray4 }, { "name": this.language.b43, "data": this.jsonarray5 },
                ]

                //SegmentSalesgrah
                for (let i = 0; i < this.segmentsalesgraphrange.length; i++) {
                  this.jsonarray6.push({ 'x': this.language[this.segmentsalesgraphrange[i][0]], 'y': (Number(data.resultList[0].promotionsnewdata[this.segmentsalesgraphrange[i][1]])).toFixed(0) });
                  this.jsonarray7.push({ 'x': this.language[this.segmentsalesgraphrange[i][0]], 'y': (Number(data.resultList[0].promotionsnewdata[this.segmentsalesgraphrange[i][2]])).toFixed(0) });
                }
                this.segmentsalesgraph.series = [
                  { "name": this.language.b46, "data": this.jsonarray6 }, { "name": this.language.b47, "data": this.jsonarray7 },
                ]

                //PlatformSales
                for (let i = 0; i < 4; i++) {
                  this.platformnames[i] = this.language[this.platformslaesgraphrange[i][0]];
                  this.platform[i] = Number(Number(data.resultList[0].promotionsnewdata[this.platformslaesgraphrange[i][1]]).toFixed(0));
                }

                this.platformslaesgraph.series = this.platform;
                this.platformslaesgraph.labels = this.platformnames;
               
                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }
              }
            }
            this.checkloading = false;
          } else {
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }


  downloadreportpromotionsigment() {
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this.excelsheetservice.downloadReportforPROMOTIONgame(apiname, "promotiongame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid, this.languageselect);
  }


}

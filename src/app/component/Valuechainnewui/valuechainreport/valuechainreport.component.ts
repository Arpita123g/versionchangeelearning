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
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { ValuechainnewService } from 'src/app/service/sheet/valuechainnew/valuechainnew.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
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
};


@Component({
  selector: 'app-valuechainreport',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './valuechainreport.component.html',
  styleUrls: ['./valuechainreport.component.scss']
})
export class ValuechainreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  cashmanagementchart: barChart;
  salesunitschart: barChart;
  productionunitschart: barChart;
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
  platform: any = [];
  platformnames: any = [];
  optional: any[] = [];
  coursename: string = "";
  getallvalues: any = '';
  submitprove: string = "";
  incomepercent: any = [];
  incomepercentnames: any = [];
  cashfromfinancing: number = 0;
  language: any = [];
  optionalcase: any = ["foodforthoughtstatus", "componentsupplierstatus", "transportationstatus", "distributormarginsstatus", "innovationservicesstatus",];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: ValuechainnewService) {
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

    this.cashmanagementchart = {
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
        // categories: [['Cash at start', 'of the period',], ['Cash from', 'operations',], ['Cash from', 'investment',], ['Cash from', 'financing',]],
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
        //   text: "Cash management, mn INR",
        //   offsetY: 0,
        //   align: "center",
        //   style: {
        //     fontWeight: "bold",
        //   }
      }
    };

    this.salesunitschart = {
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
        // categories: ['Demand', 'Actual Sales'],
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
        // text: "Sales, mn units",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.productionunitschart = {
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
        // categories: ['Capacity', 'Closing Inventory', 'Opportunity loss'],
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
        // text: "Production, mn units",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

  }

  rigorchartsrange = [
    ['b159', 't38', '76', '45'],
    ['b160', 't39', '73', '47'],
    ['b161', 't40', '78', '43'],
    ['b162', 't41', '80', '42'],
  ];

  salesunitschartrange = [
    ['b132', 'l34'],
    ['b133', 'l38'],
  ]

  resultcellname: any = ['i18', 'i25', 'i26', 'i27', 'i29', 'i30', 'l17', 'l34', 'l38', 'l35',//10
    'l36', 'l37', 'l41', 'l42', 'l43', 'l44', 'l45', 'l46', 'l47', 'l48',//20
    'l49', 'l50', 'l51', 'l52', 'l53', 'l54', 'l55', 'l39', 'l56', 'i29',//30
  ];

  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }


  getFetchData(attempt: string) {
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this.jsonarray4 = [];
              this.result = [];
              this.submitprove = data.resultList[0].valuechainnewdata.z42;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].valuechainnewcmid);
                let attempt = data.resultList[0].attempt;
                this.language = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()];
                this.roundname = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + attempt : "Round" + " " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + i : "Round" + " " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0].valuechainnewdata[this.resultcellname[i]];
                }
                this.cashfromfinancing = Number(this.result[3]) + Number(this.result[4])


                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].valueChainNewCM.valueChainNewCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                this.rigorcharts = {
                  ...this.rigorcharts, // Retain existing config
                  xaxis: {
                    ...this.rigorcharts.xaxis,
                    categories: [
                      this.language.b159,
                      this.language.b160,
                      this.language.b161,
                      this.language.b162,
                    ]
                  },

                };

                this.cashmanagementchart = {
                  ...this.cashmanagementchart,
                  xaxis: {
                    ...this.cashmanagementchart.xaxis,
                    categories: [
                      this.labelsBreak(this.language.b125),
                      this.labelsBreak(this.language.b126),
                      this.labelsBreak(this.language.b127),
                      this.labelsBreak(this.language.b128),
                    ]
                  },
                  title: {
                    text: this.language.b253,
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }
                  }
                };

                this.salesunitschart = {
                  ...this.salesunitschart,
                  xaxis: {
                    ...this.salesunitschart.xaxis,
                    categories: [
                      this.language.b132,
                      this.language.b133,
                    ]
                  },
                  title: {
                    text: this.language.b130,
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }
                  }
                };

                this.productionunitschart = {
                  ...this.productionunitschart,
                  xaxis: {
                    ...this.productionunitschart.xaxis,
                    categories: [
                      this.language.b135,
                      this.language.b136,
                      this.language.b137,
                    ]
                  },
                  title: {
                    text: this.language.b134,
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }
                  }
                };


                //Rigorchar

                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.language[this.rigorchartsrange[i][0]], 'y': data.resultList[0].valuechainnewdata[(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.language[this.rigorchartsrange[i][0]], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.language[this.rigorchartsrange[i][0]], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": this.language.b250, "data": this.jsonarray1 }, { "name": this.language.b251, "data": this.jsonarray2 }, { "name": this.language.b252, "data": this.jsonarray3 }]

                //Cash Management
                // this.cashmanagementchart.series = [{ "name": '', "data": [this.result[0].toFixed(0), this.result[1].toFixed(0), this.result[2].toFixed(0), this.cashfromfinancing.toFixed(0)] },
                // ]
                this.cashmanagementchart.series = [{ name: '', data: [Number(this.result?.[0] ?? 0).toFixed(0), Number(this.result?.[1] ?? 0).toFixed(0), Number(this.result?.[2] ?? 0).toFixed(0), Number(this.cashfromfinancing ?? 0).toFixed(0)].map(Number)}
                ];


                //Sales Unit

                // for (let i = 0; i < this.salesunitschartrange.length; i++) {
                //   this.jsonarray4.push({ 'x': "", 'y': (data.resultList[0][this.salesunitschartrange[i][1]]).toFixed(2) });
                // }
                for (let i = 0; i < this.salesunitschartrange.length; i++) {
                  this.jsonarray4.push({ 'x': this.language[this.salesunitschartrange[i][0]], 'y': Number(data.resultList[0].valuechainnewdata[this.salesunitschartrange[i][1]]).toFixed(1) });
                }
                this.salesunitschart.series = [
                  { "name": '', "data": this.jsonarray4 }
                ]

                //Production Unit
                this.productionunitschart.series = [
                  { "name": '', "data": [this.result[9].toFixed(1), this.result[10].toFixed(1), this.result[11].toFixed(1)] },
                ]



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


  downloadreportvaluechain() {
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this.excelsheetservice.downloadReportforValuechain(apiname, "valuechainnew", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      // this.studentelementdetailsvalue.coursedetailsid);
      this.studentelementdetailsvalue.coursedetailsid, this.languageselect);

  }

}

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
import { PromotionsigmentnewfoodforthoughtComponent } from '../promotionsigmentnewfoodforthought/promotionsigmentnewfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
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
  selector: 'app-promotionsigmentnewcommunicationmix',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIcon,NgApexchartsModule,TippyDirective],
  templateUrl: './promotionsigmentnewcommunicationmix.component.html',
  styleUrls: ['./promotionsigmentnewcommunicationmix.component.scss']
})
export class PromotionsigmentnewcommunicationmixComponent extends AbstractComponent {
  foodforthought: boolean = true;
  allocatedbudgetgraph: barChart;
  allocatedbudgetgraph1: barChart;
  disabled: boolean = false;
  result: any = [];
  periodresult: any = [];
  language: any = [];
  languageid: number = 0;

  databasecellname: any = ['x20', 'x21', 'x22', 'x23', 'x24', 'x25', 'x26', 'x27', 'x28'];
 
  allocatedbudgetgraphcell: any = [
    ['b51', 'f17'],
    ['b52', 'f18'],
    ['b53', 'f19'],
    ['b54', 'f20']
  ]
  allocatedbudgetgraph1cell: any = [
    ['b34', 'f24'],
    ['b35', 'f25'],
    ['b68', 'f26'],
    ['b69', 'f27'],
    ['b37', 'f28']
  ]

  textLines: string[] = [
    "b62",
    "b63",
    "b64",
    "b65",
    "b70",
    "b71",
    "b72",
    "b73",
    "b74",
  ];
  truncate(text: string) {
    return (text?.substring(0, 90) + (text?.length > 90 ? '...' : ''));
  }

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 60) + (text.length > 60 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false, false, false, false];

  cards = [
    { text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
    { text: this.textLines[6], truncatedText: this.truncatedText[6], showAll: this.showAll },
    { text: this.textLines[7], truncatedText: this.truncatedText[7], showAll: this.showAll },
    { text: this.textLines[8], truncatedText: this.truncatedText[8], showAll: this.showAll },

  ];

  jsonarray1: any = [];
  jsonarray2: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.allocatedbudgetgraph = {
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
        // text: "Allocated Budget, INR",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.allocatedbudgetgraph1 = {
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
      noData: this.nodata[1],
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
        // categories: ['Facebook', 'Instagram', 'Twitter (X)', 'LinkedIn', 'YouTube'],
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
        // text: "Allocated Budget, INR",
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

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }


  getFetchData() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.jsonarray1 = []; this.jsonarray2 = [];
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].promotionsnewcmid);
              this.languageid = data.resultList[0].promoTionsNewLM.promotionsnewlmid;
              this.language = data.resultList[0].promoTionsNewLM[this.languageselect.toLowerCase()];

              if (data.resultList[0].promotionsnewdata.z20 == 'yes') {
                this.disabled = true;
              }
              if (data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = (Number(data.resultList[0].promotionsnewdata[this.databasecellname[i]]) * 100).toFixed(0);
                this.result[i] = String(this.result[i]).replace("%", "");
              }

              this.updateInputResValue();


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

  updateInputResValue() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/promotionsnew/fetchpromotionsnew';

    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
       
        this.allocatedbudgetgraph = {
          ...this.allocatedbudgetgraph,
          xaxis: {
            ...this.allocatedbudgetgraph.xaxis,
            categories: [
              this.language.b51,
              this.language.b52,
              this.language.b53,
              this.language.b54,
            ]
          },
          title: {
            // text: this.language.b25,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        this.allocatedbudgetgraph1 = {
          ...this.allocatedbudgetgraph1,
          xaxis: {
            ...this.allocatedbudgetgraph1.xaxis,
            categories: [
              this.language.b34,
              this.language.b35,
              this.language.b68,
              this.language.b69,
              this.language.b37,

            ]
          },
          title: {
            text: this.language.b66,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        for (let i = 0; i < this.allocatedbudgetgraphcell.length; i++) {
          this.jsonarray1.push({ 'x': this.language[this.allocatedbudgetgraphcell[i][0]], 'y': (updatedData.promotionsnewdata[this.allocatedbudgetgraphcell[i][1]]) });

        }

        for (let i = 0; i < this.allocatedbudgetgraph1cell.length; i++) {
          this.jsonarray2.push({ 'x': this.language[this.allocatedbudgetgraph1cell[i][0]], 'y': (updatedData.promotionsnewdata[this.allocatedbudgetgraph1cell[i][1]]) });

        }

        
        this.allocatedbudgetgraph.series = [
          { "name": "", "data": this.jsonarray1 },

        ]

        this.allocatedbudgetgraph1.series = [
          { "name": "", "data": this.jsonarray2 },

        ]

      }
    });
  }

  writepromotionsValue(index: number, tablename: string) {
    let apiname = '/promotionsnew/singleinputpromotionsnew';
    for (let i = 0; i < 8; i++) {
      if (this.result[i] == undefined) {
        this.result[i] = 0;
      }
    }
    if (tablename == 'platformbudget') {
      this.result[3] = 100 - (Number(this.result[0]) + Number(this.result[1]) + Number(this.result[2]))
      if (this.result[3] < 0) {
        this.result[index] = 0;
        this.result[3] = 100 - (Number(this.result[0] + this.result[1] + this.result[2]))
        this._alert.error("Retailrs can not go negative");
      }
    } else if (tablename == 'socialbudget') {
      this.result[8] = 100 - (Number(this.result[4]) + Number(this.result[5]) + Number(this.result[6]) + Number(this.result[7]))
      if (this.result[8] < 0) {
        this.result[index] = 0;
        this.result[8] = 100 - (Number(this.result[4]) + Number(this.result[5]) + Number(this.result[6]) + Number(this.result[7]))
        this._alert.error("Youtube can not go negative");
      }
    }

    let promotionsData = {
      "x20": Number(this.result[0]) / 100,
      "x21": Number(this.result[1]) / 100,
      "x22": Number(this.result[2]) / 100,
      "x23": Number(this.result[3]) / 100,
      "x24": Number(this.result[4]) / 100,
      "x25": Number(this.result[5]) / 100,
      "x26": Number(this.result[6]) / 100,
      "x27": Number(this.result[7]) / 100,
      "x28": Number(this.result[8]) / 100,
    }
    console.log('writedata', promotionsData)
    this._api.writeLanguageData("promotionsnew", 1,
      promotionsData, apiname, 'promotionsnewcmid',this.languageselect, this.languageid, 'promotionsnewlmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.updateInputResValue();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }


  openDialog(): void {
    this.dialog.open(PromotionsigmentnewfoodforthoughtComponent, {
      data: {},
    });
  }
}

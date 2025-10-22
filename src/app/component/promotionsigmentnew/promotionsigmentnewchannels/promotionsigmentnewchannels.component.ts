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
  selector: 'app-promotionsigmentnewchannels',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './promotionsigmentnewchannels.component.html',
  styleUrls: ['./promotionsigmentnewchannels.component.scss']
})
export class PromotionsigmentnewchannelsComponent extends AbstractComponent {
  language: any = [];
  languageid: number = 0;

  textLines: string[] = [
    "b113",
    "b114",
    "b115",
    "b106",
    "b107",
    "b108",
    "b116",
    "b117"
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false, false, false];

  cards1 = [
    { title: 'b22', image: 'assets/images/promotionsigment/online.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'b53', image: 'assets/images/promotionsigment/trade.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'b54', image: 'assets/images/promotionsigment/retailerincannel.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
  ];
  cards2 = [
    { title: 'b51', image: 'assets/images/promotionsigment/websitesinchannel.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'b52', image: 'assets/images/promotionsigment/socialinchannel.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'b105', image: 'assets/images/promotionsigment/tradingforchannel.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ];
  cards3 = [
    { title: 'b42', image: 'assets/images/promotionsigment/facewashinchannel.svg', text: this.textLines[6], truncatedText: this.truncatedText[6], showAll: this.showAll },
    { title: 'b43', image: 'assets/images/promotionsigment/applefacewash.svg', text: this.textLines[7], truncatedText: this.truncatedText[7], showAll: this.showAll },
  ];

  truncate(text: string) {
    return (text?.substring(0, 100) + (text?.length > 100 ? '...' : ''));
  }
  foodforthought: boolean = true;
  margin: boolean = true;
  acnecreamcostpersalegraph: barChart;
  appleciderfacewashgraph: barChart;
  periodresult: any = [];
  databaseresult: any = [];
  disabled: boolean = false;

  periodcellname: any = ['y8', 'y9', 'y10', 'w37', 'w38','w42','x42'];

  databasecellname: any = ['x50', 'x51', 'x52', 'x47', 'x48', 'x49', 'x53', 'x54'];

  acnecreamgraphcell: any = [
    ['b112', 'm39'],
    ['b53', 'm40'],
    ['b54', 'm41'],
  ]

  applecidergraphcell: any = [
    ['b112', 'n39'],
    ['b53', 'n40'],
    ['b54', 'n41'],
  ]

  jsonarray1: any = [];
  jsonarray2: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.acnecreamcostpersalegraph = {
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
        // categories: ['Online', 'Modern Trade', 'Retailers'],
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
        // text: "Acne Cream Cost per sale, INR",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.appleciderfacewashgraph = {
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
        // categories: ['Online', 'Modern Trade', 'Retailers'],
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
        // text: "Apple Cider Face Wash Cost per sale, INR",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };
  }

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this._global.casemanagementid.next(data.resultList[0].promotionsnewcmid);
              this.languageid = data.resultList[0].promoTionsNewLM.promotionsnewlmid;
              this.language = data.resultList[0].promoTionsNewLM[this.languageselect.toLowerCase()];

              if (data.resultList[0].promotionsnewdata.z20 == 'yes') {
                this.disabled = true;
              }
              if (data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if (data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus.onlinestatus == 'inactive') {
                this.margin = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.periodresult[i] = Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.periodcellname[i]]);
              }

              for (let i = 0; i < this.databasecellname.length; i++) {
                this.databaseresult[i] = Number(data.resultList[0].promotionsnewdata[this.databasecellname[i]]);
                if ((i == 0) || (i == 1) || (i == 2)) {
                  this.databaseresult[i] = Number(this.databaseresult[i]) * 100;
                }
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
  validateRange(index: number): void {
    const value = this.databaseresult[index];
    const min = this.periodresult[5]*100;
    const max = this.periodresult[6]*100;
    if (value < min || value > max) {
      this._alert.error(`Value must be between ${min} and ${max}`);
      // Optionally, reset the value or set it to the nearest bound
      this.databaseresult[index] = Math.max(min, Math.min(value, max));
    }
  }

  updateInputResValue() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/promotionsnew/fetchpromotionsnew';

    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < this.periodcellname.length; i++) {
          this.periodresult[i] = updatedData.promoTionsNewCM.promotionsnewperioddata[this.periodcellname[i]];
        }

        this.acnecreamcostpersalegraph = {
          ...this.acnecreamcostpersalegraph,
          xaxis: {
            ...this.acnecreamcostpersalegraph.xaxis,
            categories: [
              this.language.b112,
              this.language.b53,
              this.language.b54,
            ]
          },
          title: {
            text: this.language.b110,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        this.appleciderfacewashgraph = {
          ...this.appleciderfacewashgraph,
          xaxis: {
            ...this.appleciderfacewashgraph.xaxis,
            categories: [
              this.language.b112,
              this.language.b53,
              this.language.b54,
            ]
          },
          title: {
            text: this.language.b111,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        for (let i = 0; i < this.acnecreamgraphcell.length; i++) {
          this.jsonarray1.push({ 'x': this.language[this.acnecreamgraphcell[i][0]], 'y': (Number(updatedData.promotionsnewdata[this.acnecreamgraphcell[i][1]])).toFixed(0) });
        }

        for (let i = 0; i < this.applecidergraphcell.length; i++) {
          this.jsonarray2.push({ 'x': this.language[this.applecidergraphcell[i][0]], 'y': (Number(updatedData.promotionsnewdata[this.applecidergraphcell[i][1]])).toFixed(0) });
        }

        this.acnecreamcostpersalegraph.series = [
          { "name": "", "data": this.jsonarray1 },
        ]

        this.appleciderfacewashgraph.series = [
          { "name": "", "data": this.jsonarray2 },
        ]
      }
    });
  }

  writepromotionsValue(tablename: string, index: number, event: any) {

    let apiname = '/promotionsnew/singleinputpromotionsnew';
    if ((tablename == 'abtesting') || (tablename == 'productfocus')) {
      if (event.target.checked == true) {
        this.databaseresult[index] = 1;
      } else {
        this.databaseresult[index] = 0;
      }
    }
    for (let i = 3; i < 8; i++) {
      if (this.databaseresult[i] == true) {
        this.databaseresult[i] = 1;
      } else {
        this.databaseresult[i] = 0;
      }
    }

    let promotionsData = {
      "x50": Number(this.databaseresult[0]) / 100,
      "x51": Number(this.databaseresult[1]) / 100,
      "x52": Number(this.databaseresult[2]) / 100,
      "x47": this.databaseresult[3],
      "x48": this.databaseresult[4],
      "x49": this.databaseresult[5],
      "x53": this.databaseresult[6],
      "x54": this.databaseresult[7],
    }

    this._api.writeLanguageData("promotionsnew", 3,
      promotionsData, apiname, 'promotionsnewcmid', this.languageselect, this.languageid, 'promotionsnewlmid').subscribe((data: any) => {

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

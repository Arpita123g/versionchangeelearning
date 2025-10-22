import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { BusinessbasicFoodforthoughtComponent } from '../businessbasicfoodforthought/businessbasicfoodforthought.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { FormsModule } from '@angular/forms';
  
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

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-businessbascismarketing',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule ,MatIconModule, TippyDirective, FormsModule],
  templateUrl: './businessbascismarketing.component.html',
  styleUrls: ['../BusinessBasicsGame.scss'],
})
export class BusinessbascismarketingComponent extends AbstractComponent {
  lineChart: lineChart;
  lineChart2: lineChart;
  marketingcost: barchart;
  perteacup: barchart;
  market: boolean = false;
  priceValue: number = 0;
  promotionValue: number = 0;
  c23: string = '';
  c24: string = '';
  c25: string = '';

  c30: number = 0;
  c31: number = 0;
  c32: number = 0;

  u27: string = '';
  u28: string = '';
  w27: string = '';
  w28: string = '';

  campaign1: boolean = false;
  campaign2: boolean = false;
  campaign3: boolean = false;
  showCampaign: boolean = true;
  checkdisable: boolean = false;

  linechartrange = [
    ['u6', 'v6'],
    ['u7', 'v7'],
    ['u8', 'v8'],
    ['u9', 'v9'],
    ['u10', 'v10'],
    ['u11', 'v11'],
    ['u12', 'v12'],
    ['u13', 'v13'],

  ]

  perteacuprange = [
    ['Price', 'f69'],// from database calculation
    ['Cost', 'f70'],
    ['Margin', 'f71'],
  ]

  linechart2range = [
    ['u17', 'v17'],
    ['u18', 'v18'],
    ['u19', 'v19'],
    ['u20', 'v20'],
    ['u21', 'v21'],
    ['u22', 'v22'],
    ['u23', 'v23'],
    ['u24', 'v24'],

  ]

  marketingcostrange = [
    ['u27', 'v27'],
    ['u28', 'v28'],
  ]

  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  jsonarray8: any = [];

  truncatedText: string = "";
  truncatedText1: string = "";

  foodforthought: boolean = true;


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.lineChart = {
      series: [],
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
          text: "Price",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        labels: {
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
          text: "% of consumers attracted based on price",
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
        text: 'Price vs Demand, Elasticity for standard Cup of Tea',
        // text: '',
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

    this.lineChart2 = {
      series: [],
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
          text: "Promotion Budget",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },

        labels: {
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
          text: "% of consumers attracted based on promotion",
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
        text: 'Demand vs Promotion, Elasticity',
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

    this.marketingcost = {
      series: [],
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
          },
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: this.xaxis[11],
      fill: this.fill[0],
      yaxis: this.yaxis[0],
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
        text: 'Montlhy Cost, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },

    };

    this.perteacup = {
      series: [],
      chart: {
        height: 320,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
          },
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: this.xaxis[11],
      fill: this.fill[0],
      yaxis: { labels: { show: true, formatter: function (val: any) { return val.toFixed(0); }, }, axisBorder: { show: false }, axisTicks: { show: false }, },
      title: {
        text: 'Per tea cup,INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
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
    };
  }


  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = [];
    this.jsonarray5 = []; this.jsonarray6 = []; this.jsonarray7 = []; this.jsonarray8 = [];
    let apiname = '/businessbasic/fetchbusinessbasic';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].businessbasiccasemanagementid);
              if (data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < 8; i++) {
                this.jsonarray1.push({ 'x': Number(data.resultList[0].businessBasicCaseManagement[this.linechartrange[i][0]]), 'y': Number(data.resultList[0].businessBasicCaseManagement[this.linechartrange[i][1]]) * 100 });
                this.jsonarray3.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.linechart2range[i][0]], 'y': Number(data.resultList[0].businessBasicCaseManagement[this.linechart2range[i][1]]) * 100 });
              }
              for (let i = 0; i < 3; i++) {
                this.jsonarray2.push({ 'x': this.perteacuprange[i][0], 'y': Number(data.resultList[0][this.perteacuprange[i][1]]) });
              }
              for (let i = 0; i < 2; i++) {
                this.jsonarray4.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.marketingcostrange[i][0]], 'y': data.resultList[0].businessBasicCaseManagement[this.marketingcostrange[i][1]] });
              }
              this.lineChart.title.text = (String(data.resultList[0].businessBasicCaseManagement.u5 + "vs " + data.resultList[0].businessBasicCaseManagement.v5))
              this.lineChart.series = [{ "name": "Price", "data": this.jsonarray1 }]
              this.perteacup.series = [{ "name": "Per Tea Cup", "data": this.jsonarray2 },]

              this.lineChart2.series = [{ "name": "Demand", "data": this.jsonarray3 }]
              this.marketingcost.series = [{ "name": "Monthly Cost", "data": this.jsonarray4 },]

              this.u27 = data.resultList[0].businessBasicCaseManagement.u27;
              this.u28 = data.resultList[0].businessBasicCaseManagement.u28;
              this.w27 = data.resultList[0].businessBasicCaseManagement.w27;
              this.truncatedText = this.w27.substring(0, 190) + (this.w27.length > 190 ? '...' : '');
              this.w28 = data.resultList[0].businessBasicCaseManagement.w28;
              this.truncatedText1 = this.w28.substring(0, 190) + (this.w28.length > 190 ? '...' : '');
              this.c23 = data.resultList[0].c23;
              this.priceValue = Number(this.c23);
              this.promotionValue = Number(this.c24);
              this.c24 = data.resultList[0].c24;
              this.c25 = data.resultList[0].c25;
              if (data.resultList[0].c30 == 1) {
                this.campaign1 = true;
              } if (data.resultList[0].c31 == 1) {
                this.campaign2 = true;
              } if (data.resultList[0].c32 == 1) {
                this.campaign3 = true;
              }

              if (data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus.campaign123status == 'inactive') {
                this.showCampaign = false;
              }
              if ((data.resultList[0].h4 == 'yes') || (this.timefinished)) {
                this.checkdisable = true;
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

  writeMarketing(cellname: string) {

    if (cellname == 'c23') {
      if ((Number(this.c23) < 5 || Number(this.c23) > 290)) {
        this.c23 = String(this.priceValue);
        this._alert.error('The expected range is from 5 to 290');
      }
    } else if (cellname == 'c24') {
      if ((Number(this.c24) < 1000 || Number(this.c24) > 18000)) {
        this.c24 = String(this.promotionValue);
        this._alert.error('The expected range is from 1000 to 18000');
      }
    }

    let apiname = '/businessbasic/singleinputbusinessbasic';
    let marketData = {
      "c23": Number(this.c23),
      "c24": Number(this.c24),
      "c25": this.c25,
      "c30": this.campaign1 ? 1 : 0,
      "c31": this.campaign2 ? 1 : 0,
      "c32": this.campaign3 ? 1 : 0,
    }

    this._api.businessdatawrite("businessbasic", 1,
      marketData, apiname, 'businessbasiccasemanagementid').subscribe((data: any) => {

        if (data.status == 'Success') {
          this.getFetchData();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })

  }

  getSelectedservice(value: string) {
    this.c25 = value;
    this.writeMarketing('c25');
  }

  openDialog(): void {
    this.dialog.open(BusinessbasicFoodforthoughtComponent, {
      data: {},
    });
  }
  marketclick() {
    this.market = true;
  }

  showall: boolean = false;
  showallnew: boolean = false;
  toggleshow() {
    this.showall = !this.showall;
  }



  toggleshow1() {
    this.showallnew = !this.showallnew;
  }


}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ValuechainfoodforthoughtComponent } from '../valuechainfoodforthought/valuechainfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}
@Component({
  selector: 'app-valuechaindemand',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './valuechaindemand.component.html',
  styleUrls: ['./valuechaindemand.component.scss']
})
export class ValuechaindemandComponent extends AbstractComponent {
  TotalMarketSize: barchart;
  Demandgraph: barchart;
  foodforthought: boolean = true;
  result: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  disabled: boolean = false;
  language: any = [];
  languageid: number = 0;
  minMaxValue: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.TotalMarketSize = {
      series: [
      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 3,

        },
      },
      dataLabels: this.datalabels[0],
      xaxis: {
        // categories: ["Previous Period", "Current Period"]
      },
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
        // text: 'Total Market Size, mn',
        // offsetY: 0,
        // align: 'center',
        // style: {
        //   fontWeight: 'bold',
        // },
      },
    };

    this.Demandgraph = {
      series: [
      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: {
        // categories: ["Previous Period", "Current Period"]
      },
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
        // text: 'Demand, mn',
        // offsetY: 0,
        // align: 'center',
        // style: {
        //   fontWeight: 'bold',
        // },
      },
    };
  }
  override ngOnInit(): void {
    this.fetchData();
  }

  databasecellname: any = [
    "z8", "z10", "c8"
  ];

  periodcellvalue: any = ["e8", "e6", "e9"]


  TotalMarketSizeGraph: any = [
    "c5", "d5"
  ];

  Demandsizegraph: any = [
    "c11", "d11"
  ];

  fetchData() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.jsonarray1 = []; this.jsonarray2 = [];
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].valuechainnewcmid);
              this.languageid = data.resultList[0].valueChainNewLM.valuechainnewlmid;
              this.language = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()];

              if (data.resultList[0].valueChainNewCM.valueChainNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              // if ((data.resultList[0].z42 == 'yes') || (this.timefinished)) {
              //   this.disabled = true;
              // }
               if (data.resultList[0].valuechainnewdata.z42 == 'yes') {
                this.disabled = true;
              }

              this.minMaxValue = data.resultList[0].valueChainNewCM.valuechainnewperioddata;

              for (let i = 0; i < 3; i++) {
                this.result[i] = data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.periodcellvalue[i]];
              }

              for (let i = 3; i < 8; i++) {
                this.result[i] = data.resultList[0].valuechainnewdata[this.databasecellname[i - 3]];
              }
              // for (let i = 0; i < this.TotalMarketSizeGraph.length; i++) {
              //   this.jsonarray1.push(Number(data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.TotalMarketSizeGraph[i]]).toFixed(0));
              // }
              // this.TotalMarketSize.series = [{ "data": this.jsonarray1 }];

              // for (let i = 0; i < this.Demandsizegraph.length; i++) {
              //   this.jsonarray2.push(Number(data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.Demandsizegraph[i]]).toFixed(2));
              // }
              // this.Demandgraph.series = [{ "data": this.jsonarray2 }];
              this.updateValue();
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


  inputtablevalue(inputfield: string) {
    if (inputfield == 'marketgrowth') {
      const value = Number(this.result[3]);
      const min = Number(this.minMaxValue.e40);
      const max = Number(this.minMaxValue.e41);
      if (value < min) {
        this.result[3] = min;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else if (value > max) {
        this.result[3] = max;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else {
        this.valueWrite();
        return;
      }
    } else if (inputfield == 'marketshare') {
      const value = Number(this.result[4]);
      const min = Number(this.minMaxValue.e43);
      const max = Number(this.minMaxValue.e44);
      if (value < min) {
        this.result[4] = min;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else if (value > max) {
        this.result[4] = max;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else {
        this.valueWrite();
        return;
      }
    }
  }

  updateValue() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/valuechainnew/fetchvaluechainnew';

    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < 3; i++) {
          this.result[i] = updatedData.valueChainNewCM.valuechainnewperioddata[this.periodcellvalue[i]];
        }

        this.result[5] = updatedData.valuechainnewdata[this.databasecellname[2]];

        this.TotalMarketSize = {
          ...this.TotalMarketSize,
          xaxis: {
            ...this.TotalMarketSize.xaxis,
            categories: [
              this.language.b32,
              this.language.b33,
            ]
          },
          title: {
            text: this.language.b31,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        this.Demandgraph = {
          ...this.Demandgraph,
          xaxis: {
            ...this.Demandgraph.xaxis,
            categories: [
              this.language.b32,
              this.language.b33,
            ]
          },
          title: {
            text: this.language.b38,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        for (let i = 0; i < this.TotalMarketSizeGraph.length; i++) {
          this.jsonarray1.push(Number(updatedData.valuechainnewdata[this.TotalMarketSizeGraph[i]]).toFixed(0));
        }
        this.TotalMarketSize.series = [{ "data": this.jsonarray1 }];

        for (let i = 0; i < this.Demandsizegraph.length; i++) {
          this.jsonarray2.push(Number(updatedData.valuechainnewdata[this.Demandsizegraph[i]]).toFixed(1));
        }
        this.Demandgraph.series = [{ "data": this.jsonarray2 }];

      }
    });
  }

  valueWrite() {
    let apiname = '/valuechainnew/singleinputvaluechainnew';
    let valuechainnewdata = {
      "z8": this.result[3],
      "z10": this.result[4]
    }
    this._api.writeLanguageData("valuechainnew", 1,
      valuechainnewdata, apiname, 'valuechainnewcmid', this.languageselect, this.languageid, 'valuechainnewlmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this.updateValue();
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })

  }

  openDialog(): void {
    this.dialog.open(ValuechainfoodforthoughtComponent, {
      data: {},
    });
  }
}

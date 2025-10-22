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
  selector: 'app-valuechainfinance',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],
  templateUrl: './valuechainfinance.component.html',
  styleUrls: ['./valuechainfinance.component.scss']
})
export class ValuechainfinanceComponent extends AbstractComponent {
  Cashchart: barchart;
  foodforthought: boolean = true;
  jsonarray1: any = [];
  result: any = [];
  language: any = [];
  languageid: number = 0;
  disabled: boolean = false;
 minMaxValue: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.Cashchart = {
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
          columnWidth: '30%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: {
        // labels: {
        //   formatter: function (val: string) {
        //     return val.split(' ');
        //   },
        //   rotate: 0
        // },
        // categories: [["Initial", "Cash"], ["Cash from", "operations"], ["Cash from", "investments"], ["Cash from", "borrowings"], ["End", "Cash"]]
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
        // text: 'Cash, INR mn',
        // offsetY: 0,
        // align: 'center',
        // style: {
        //   fontWeight: 'bold',
        // },
      },
    };
  }

  periodcellvalue: any = [
    "t7", "t8", "t9"
  ];
  databasecellname: any = [
    "z37"
  ];
  Cashchartcell: any = [
    "i18", "i19", "i20", "i21", "i22"
  ];

  override ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.result = []; this.jsonarray1 = [];
              this._global.casemanagementid.next(data.resultList[0].valuechainnewcmid);
              this.languageid = data.resultList[0].valueChainNewLM.valuechainnewlmid;
              this.language = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()];
              this.minMaxValue = data.resultList[0].valueChainNewCM.valuechainnewperioddata;

              if (data.resultList[0].valueChainNewCM.valueChainNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              // if ((data.resultList[0].z42 == 'yes') || (this.timefinished)) {
              //   this.disabled = true;
              // }
              if (data.resultList[0].valuechainnewdata.z42 == 'yes') {
                this.disabled = true;
              }

              for (let i = 0; i < 3; i++) {
                this.result[i] = data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.periodcellvalue[i]];
              }
              for (let i = 3; i < 4; i++) {
                this.result[i] = data.resultList[0].valuechainnewdata[this.databasecellname[i - 3]];
              }

              this.Cashchart = {
                ...this.Cashchart,
                xaxis: {
                  ...this.Cashchart.xaxis,
                  categories: [
                    this.labelsBreak(this.language.b110),
                    this.labelsBreak(this.language.b111),
                    this.labelsBreak(this.language.b112),
                    this.labelsBreak(this.language.b113),
                    this.labelsBreak(this.language.b114),
                  ]
                },
                title: {
                  text: this.language.b109,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              for (let i = 0; i < this.Cashchartcell.length; i++) {
                this.jsonarray1.push(Number(data.resultList[0].valuechainnewdata[this.Cashchartcell[i]]).toFixed(0));
              }
              this.Cashchart.series = [{ "data": this.jsonarray1 }];
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


  inputtablevalue() {
    const value = Number(this.result[3]);
    const min = Number(this.minMaxValue.t13);
    const max = Number(this.minMaxValue.t14);
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
  }

  valueWrite() {
    let apiname = '/valuechainnew/singleinputvaluechainnew';

    let valuechainnewdata = {
      "z37": this.result[3],
    }

    this._api.writeLanguageData("valuechainnew", 3, valuechainnewdata, apiname, "valuechainnewcmid", this.languageselect, this.languageid, 'valuechainnewlmid').subscribe((data: any) => {
      if (data.status == "Success") {
        this.fetchData();
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

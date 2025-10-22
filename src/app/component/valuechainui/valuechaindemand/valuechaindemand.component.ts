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
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
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
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.TotalMarketSize = {
      series: [
        //   {
        //   data: [71, 45]
        // }
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
        categories: ["Previous Period", "Current Period"]
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
        text: 'Total Market Size, mn',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
    this.Demandgraph = {
      series: [
        //   {
        //   data: [71, 45]
        // }
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
        categories: ["Previous Period", "Current Period"]
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
        text: 'Demand, mn',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
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
    let apiname = '/valuechain/fetchvaluechain';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = []; this.jsonarray2 = [];
              if (data.resultList[0].valueChainCM.valueChainCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if ((data.resultList[0].z42 == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }

              for (let i = 0; i < 3; i++) {
                this.result[i] = data.resultList[0].valueChainCM[this.periodcellvalue[i]];
              }

              for (let i = 3; i < 8; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 3]];
              }

              for (let i = 0; i < this.TotalMarketSizeGraph.length; i++) {
                this.jsonarray1.push(Number(data.resultList[0][this.TotalMarketSizeGraph[i]]).toFixed(0));
              }
              this.TotalMarketSize.series = [{ "data": this.jsonarray1 }];

              for (let i = 0; i < this.Demandsizegraph.length; i++) {
                this.jsonarray2.push(Number(data.resultList[0][this.Demandsizegraph[i]]).toFixed(2));
              }
              this.Demandgraph.series = [{ "data": this.jsonarray2 }];

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
      if ((this.result[3] >= 0) && (this.result[3] < 101)) {
        this.valueWrite();
      } else {
        this.result[3] = 0;
        this._alert.error("The expected range is between 0 to 100");
      }
    } else if (inputfield == 'marketshare') {
      if ((this.result[4] >= 0) && (this.result[4] < 21)) {
        this.valueWrite();
      } else {
        this.result[4] = 0;
        this._alert.error("The expected range is between 0 to 20");
      }
    }
  }

  updateValue() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/valuechain/fetchvaluechain';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < 3; i++) {
          this.result[i] = updatedData.valueChainCM[this.periodcellvalue[i]];
        }

        this.result[5] = updatedData[this.databasecellname[2]];


        for (let i = 0; i < this.TotalMarketSizeGraph.length; i++) {
          this.jsonarray1.push(Number(updatedData[this.TotalMarketSizeGraph[i]]).toFixed(0));
        }
        this.TotalMarketSize.series = [{ "data": this.jsonarray1 }];

        for (let i = 0; i < this.Demandsizegraph.length; i++) {
          this.jsonarray2.push(Number(updatedData[this.Demandsizegraph[i]]).toFixed(2));
        }
        this.Demandgraph.series = [{ "data": this.jsonarray2 }];

      }
    });
  }

  valueWrite() {
    let apiname = '/valuechain/singleinputvaluechain';
    let valuechaindata = {
      "z8": this.result[3],
      "z10": this.result[4]
    }
    this._api.valuechaindatawrite("valuechain", 1,
      valuechaindata, apiname, 'valuechaincmid').subscribe((data: any) => {

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

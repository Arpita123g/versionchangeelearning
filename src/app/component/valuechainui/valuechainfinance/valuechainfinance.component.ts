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
  ApexYAxis,
  NgApexchartsModule
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
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],  
  templateUrl: './valuechainfinance.component.html',
  styleUrls: ['./valuechainfinance.component.scss']
})
export class ValuechainfinanceComponent extends AbstractComponent {
  Cashchart: barchart;
  foodforthought: boolean = true;
  jsonarray1: any = [];
  result: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.Cashchart = {
      series: [
        //   {
        //   data: [71, 45, 33, 26, 55]
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
          columnWidth: '30%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: {
        categories: [["Initial", "Cash"], ["Cash from", "operations"], ["Cash from", "investments"], ["Cash from", "borrowings"], ["End", "Cash"]]
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
        text: 'Cash, INR mn',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
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
  disabled:boolean = false;
  
  override ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let apiname = '/valuechain/fetchvaluechain';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.result = []; this.jsonarray1 = [];
              if (data.resultList[0].valueChainCM.valueChainCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if ((data.resultList[0].z42 == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }
              for (let i = 0; i < 3; i++) {
                this.result[i] = data.resultList[0].valueChainCM[this.periodcellvalue[i]];
              }
              for (let i = 3; i < 4; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 3]];
              }

              for (let i = 0; i < this.Cashchartcell.length; i++) {
                this.jsonarray1.push(Number(data.resultList[0][this.Cashchartcell[i]]).toFixed(0));
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
    if ((this.result[3] >= 0) && (this.result[3] < 30001)) {
      this.valueWrite();
    } else {
      this.result[3] = 0;
      this._alert.error("The expected range is between 0 to 30000");
    }
  }

  valueWrite() {
    let apiname = '/valuechain/singleinputvaluechain';

    let valuechaindata = {
      "z37": this.result[3],
    }

    this._api.valuechaindatawrite("valuechain", 3, valuechaindata, apiname, "valuechaincmid").subscribe((data: any) => {
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

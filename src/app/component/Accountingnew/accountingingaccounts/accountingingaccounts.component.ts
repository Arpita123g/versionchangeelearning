import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgApexchartsModule } from 'ng-apexcharts';
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
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AccountingingfoodforthoughtComponent } from '../accountingingfoodforthought/accountingingfoodforthought.component';

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
  selector: 'app-accountingingaccounts',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, NgApexchartsModule],
  templateUrl: './accountingingaccounts.component.html',
  styleUrls: ['./accountingingaccounts.component.scss']
})
export class AccountingingaccountsComponent extends AbstractComponent {
  foodforthought: boolean = true;
  balancesheetchart: barchart;
  incomestatementchart: barchart;
  cashflowstatementchart: barchart;
  result: any = [];

  showEmmisionStatus: boolean = true;
  disabled: boolean[] = [];
  checkdisable: boolean = false;
  databasecellname: any = ['ac9', 'ac10', 'ac11', 'ac12', 'ac13', 'ac14',
    'ac35', 'ac36', 'ac37', 'ac38', 'ac39', 'ac40',
    'ac17', 'ac18', 'ac19', 'ac20', 'ac21', 'ac22',
    'ac43', 'ac44', 'ac45', 'ac46', 'ac48',
    'ac25', 'ac26', 'ac27', 'ac28', 'ac29', 'ac30',
    'ac52', 'ac53', 'ac54', 'ac56', 'ac57',//
    'ac61', 'ac62', 'ac63',
    'ac66', 'ac67', 'ac68', 'ac69', 'ac70', 'ac71',
    'ac73', 'ac74', 'ac76', 'ac77',
    'ac81', 'ac83', 'ac84', 'ac85', 'ac87', 'ac88', 'ac89',
    'ac91', 'ac92', 'ac93', 'ac95'
  ]
  balancesheetgraph: any = ['c5', 'c6', 'c7'];
  incomestatementgraph: any = ['c10', 'c11', 'c12', 'c13', 'c14', 'c15'];
  cashflowgraph: any = ['c18', 'c19', 'c20', 'c21', 'c22'];
  optionalcase: any = ["balancesheetstatus", "incomestatementstatus", "cashflowstatus", "foodforthoughtstatus",];
  optional: any[] = [];
  optionEnabled: any = [true, true, true];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.balancesheetchart = {
      series: [
        // {
        //   data: [586202, 315002, 271200]
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
        categories: ["Assets", "Liabilities", "Equity",]
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
        text: 'Balance Sheet, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    }

    this.incomestatementchart = {
      series: [
        // {
        //   data: [400000, 288000, 173000, 113000, 89000, 71200]
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
        categories: ["Revenue", "Gross Profit", "EBITDA", "EBIT", "PBT", "PAT"]
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
        text: 'Income Statement, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    }

    this.cashflowstatementchart = {
      series: [
        // {
        //   data: [0, -157000, -310000, 476000, 8200,]
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
        categories: [["Opening", "balance"], ["Cash from", "operations"], ["Cash from", "investment"], ["Cash from", "financing"],
        ["Closing cash", "balance"],]
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
        text: 'Cash Flow Statement, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    }
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/accountinggame/fetchaccountinggame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].accountinggamecmid);
              if ((data.resultList[0].ag8 == 'yes') || (data.resultList[0].ag8 == 'Yes')|| (this.timefinished)) {
                this.checkdisable = true;
              }

              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].accountingGameCM.accountingGameCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {

                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }

              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]]
              }

              for (let i = 0; i < this.optionalcase.length; i++) {
                if (data.resultList[0].accountingGameCM.accountingGameCMActiveStatus[this.optionalcase] == 'inactive') {
                  this.optionEnabled[i] = false;
                }
              }

              this.balancesheetchart.series = [
                {
                  "name": "Demand", "data": [data.resultList[0][this.balancesheetgraph[0]],
                  data.resultList[0][this.balancesheetgraph[1]], data.resultList[0][this.balancesheetgraph[2]]]
                },
              ]

              this.incomestatementchart.series = [
                {
                  "name": "Demand", "data": [data.resultList[0][this.incomestatementgraph[0]],
                  data.resultList[0][this.incomestatementgraph[1]], data.resultList[0][this.incomestatementgraph[2]],
                  data.resultList[0][this.incomestatementgraph[3]], data.resultList[0][this.incomestatementgraph[4]],
                  data.resultList[0][this.incomestatementgraph[5]]]
                },
              ]
              this.cashflowstatementchart.series = [
                {
                  "name": "Demand", "data": [data.resultList[0][this.cashflowgraph[0]],
                  data.resultList[0][this.cashflowgraph[1]], data.resultList[0][this.cashflowgraph[2]],
                  data.resultList[0][this.cashflowgraph[3]], data.resultList[0][this.cashflowgraph[4]]]
                },
              ]
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

  inputtablevalue(cellname: string, index: number) {

    if ((this.result[index] >= 0) && (this.result[index] < 10000001)) {
      this.valueWrite(cellname, index);
    } else {
      this.result[index] = 0;
      this._alert.error("The expected range is between 0 to 10000000");
    }

  }

  valueWrite(cellname: string, index: number) {
    let apiname = '/accountinggame/singleinputaccountinggame';
    let accountingData = {
      [cellname]: this.result[index]
    }

    this._api.accountingDataWrite("accountinggame", 1,
      accountingData, apiname, 'accountinggamecmid').subscribe((data: any) => {
        if (data.status == 'Success') {
          this.getFetchData();
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  openDialog(): void {
    this.dialog.open(AccountingingfoodforthoughtComponent, {
      data: {},
    });
  }

}

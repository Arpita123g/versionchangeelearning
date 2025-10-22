import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';
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
import { FinancialanalysisnewfoodforthoughtComponent } from '../financialanalysisnewfoodforthought/financialanalysisnewfoodforthought.component';
import { MatIconModule } from '@angular/material/icon';

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  fill: ApexFill;
  title: ApexTitleSubtitle;
}
@Component({
  selector: 'app-financialanalysisnewinvestment',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule, NgApexchartsModule,MatIconModule],
  templateUrl: './financialanalysisnewinvestment.component.html',
  styleUrls: ['./financialanalysisnewinvestment.component.scss']
})
export class FinancialanalysisnewinvestmentComponent extends AbstractComponent {
  foodforthought: boolean = true;
  sharepriceinrgraph: barchart;
  periodresult: any = [];
  databaseresult: any = [];
  periodcellvalue: any = [
    'j9', 'j67', 'j125',
    'j30', 'j88', 'j146',
    'j38', 'j96', 'j154',
    'j52', 'j110', 'j168',
    'j62', 'j120', 'j178',
    'm13',
    'm17', 'n17', 'o17',
    'm18', 'n18', 'o18',
    'm19', 'n19', 'o19',
    'm20', 'n20', 'o20',
    'm21', 'n21', 'o21',
    'm22', 'n22', 'o22',
    'm23', 'n23', 'o23',
    'm24', 'n24', 'o24',
    'm25', 'n25', 'o25',
    'm26', 'n26', 'o26',


  ]

  databasecellvalue: any = [
    'ak5', 'al5', 'am5',
    'ak10', 'al10', 'am10',
    'ak28', 'al28', 'am28',
    's19', 't19', 'u19',
    's20', 't20', 'u20',
    's21', 't21', 'u21',
    'ak31', 'ak32', 'ak33', 'ak34', 'ak35',
    'ak36', 'ak37', 'ak38', 'ak39', 'ak40'

  ]
  sharepriceinrgraphcell: any = [
    ['e33', 'Electra Motors', 'Titan Motors', 'GreenSpeed Technologies'],
    ['Y1', 'm30', 'n30', 'o30'],
    ['Y2', 'm31', 'n31', 'o31'],
    ['Y3', 'm32', 'n32', 'o32'],
    ['Y4', 'i62', 'i120', 'i178'],
    ['Y5', 'j62', 'j120', 'j178']
  ]

  disabled: boolean = false;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.sharepriceinrgraph = {
      series: [
        // {
        //   name: 'Electra Motors',
        //   data: [1650, 1580, 1540, 1600, 1700]
        // },
        // {
        //   name: 'Titan Motors',
        //   data: [200, 250, 270, 280, 315]
        // },
        // {
        //   name: 'GreenSpeed Technologies',
        //   data: [250, 270, 230, 240, 295]
        // }
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
        categories: ['Y1', 'Y2', 'Y3', 'Y4', 'Y5',],
        position: "bottom",
        labels: {
          offsetY: 0,
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
        text: "Share Price, INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    const jsonarray1: any = []; const jsonarray2: any = []; const jsonarray3: any = [];
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].financialanalysiscmid);
              if ((data.resultList[0].am31 == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }
              if (data.resultList[0].financialAnalysisCM.financialAnalysisCMActiveStatus.foodforthougthtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellvalue.length; i++) {
                this.periodresult[i] = data.resultList[0].financialAnalysisCM[this.periodcellvalue[i]];
              } for (let i = 0; i < this.databasecellvalue.length; i++) {
                this.databaseresult[i] = data.resultList[0][this.databasecellvalue[i]];
              }
              for (let i = 16; i < 46; i++) {
                this.periodresult[i] = (this.periodresult[i] * 100) + "%";
              }

              for (let j = 1; j < 6; j++) {
                jsonarray1.push({ 'x': this.sharepriceinrgraphcell[j][0], 'y': Number(data.resultList[0].financialAnalysisCM[this.sharepriceinrgraphcell[j][1]]) });
                jsonarray2.push({ 'x': this.sharepriceinrgraphcell[j][0], 'y': Number(data.resultList[0].financialAnalysisCM[this.sharepriceinrgraphcell[j][2]]) });
                jsonarray3.push({ 'x': this.sharepriceinrgraphcell[j][0], 'y': Number(data.resultList[0].financialAnalysisCM[this.sharepriceinrgraphcell[j][3]]) });
              }
              this.sharepriceinrgraph.series = [
                { "name": this.sharepriceinrgraphcell[0][1], "data": jsonarray1 },
                { "name": this.sharepriceinrgraphcell[0][2], "data": jsonarray2 },
                { "name": this.sharepriceinrgraphcell[0][3], "data": jsonarray3 }
              ]
              console.log("series", this.sharepriceinrgraph.series)
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


  writefsaValue(index: number) {
    let apiname = '/financialanalysis/singleinputfinancialanalysis';
    this.databaseresult[index] = 1;
    for (let i = 18; i < 28; i++) {
      if (i != index) {
        this.databaseresult[i] = 0;
      }
    }

    let financialanalysisData = {
      "ak31": this.databaseresult[18],
      "ak32": this.databaseresult[19],
      "ak33": this.databaseresult[20],
      "ak34": this.databaseresult[21],
      "ak35": this.databaseresult[22],
      "ak36": this.databaseresult[23],
      "ak37": this.databaseresult[24],
      "ak38": this.databaseresult[25],
      "ak39": this.databaseresult[26],
      "ak40": this.databaseresult[27],
    }

    this._api.financialanalysisdatawrite("financialanalysis", 1,
      financialanalysisData, apiname, 'financialanalysiscmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.getFetchData();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }



  openDialog(): void {
    this.dialog.open(FinancialanalysisnewfoodforthoughtComponent, {
      data: {},
    });
  }
}

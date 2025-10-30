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
import { FormsModule } from '@angular/forms';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

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
  selector: 'app-financialanalysisnewstatements',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule,
     NgApexchartsModule, MatIconModule, FormsModule, TippyDirective],
  templateUrl: './financialanalysisnewstatements.component.html',
  styleUrls: ['./financialanalysisnewstatements.component.scss']
})
export class FinancialanalysisnewstatementsComponent extends AbstractComponent {
  incomestatementgraph: barchart;
  kpigraph: barchart;
  balancesheetgraph: barchart;
  foodforthought: boolean = true;
  result: any = [];
  periodselectvalue: string = "Current Period";

  // incomestategraphcell: any = [
  //   ['d43', 'e43', 'f43', 'g43'],
  //   ['Sales revenue', 'e44', 'f44', 'g44'],
  //   ['EBITDA', 'e45', 'f45', 'g45'],
  //   ['EBIT', 'e46', 'f46', 'g46'],
  //   ['PAT', 'e47', 'f47', 'g47']
  // ]

  currentincomestategraphcell: any = [
    ['d63', 'd64', 'd65', 'd66'],
    ['Sales revenue', 'j9', 'j67', 'j125'],
    ['EBITDA', 'j21', 'j79', 'j137'],
    ['EBIT', 'j24', 'j82', 'j140'],
    ['PAT', 'j30', 'j88', 'j146']
  ]

  previousincomestategraphcell: any = [
    ['d63', 'd64', 'd65', 'd66'],
    ['Sales revenue', 'i9', 'i67', 'i125'],
    ['EBITDA', 'i21', 'i79', 'i137'],
    ['EBIT', 'i24', 'i82', 'i140'],
    ['PAT', 'i30', 'i88', 'i146']
  ]

  // balancesheetgraphcell: any = [
  //   ['d50', 'e50', 'f50', 'g50'],
  //   ['d51', 'e51', 'f51', 'g51'],
  //   ['d52', 'e52', 'f52', 'g52'],
  //   ['d53', 'e53', 'f53', 'g53']
  // ]
  previousbalancesheetgraphcell: any = [
    ['d63', 'd64', 'd65', 'd66'],
    ['h38', 'i38', 'i96', 'i154'],
    ['h46', 'i46', 'i104', 'i162'],
    ['h52', 'i52', 'i110', 'i168']
  ]
  currentbalancesheetgraphcell: any = [
    ['d63', 'd64', 'd65', 'd66'],
    ['h38', 'j38', 'j96', 'j154'],
    ['h46', 'j46', 'j104', 'j162'],
    ['h52', 'j52', 'j110', 'j168']
  ]

  previouskpigraphcell: any = [
    ['d63', 'd64', 'd65', 'd66'],
    ['h59', 'i59', 'i117', 'i175'],
    ['h60', 'i60', 'i118', 'i176']
  ]
  currentkpigraphcell: any = [
    ['d63', 'd64', 'd65', 'd66'],
    ['h59', 'j59', 'j117', 'j175'],
    ['h60', 'j60', 'j118', 'j176']
  ]

  // kpigraphcell: any = [
  //   ['d56', 'e56', 'f56', 'g56'],
  //   ['d57', 'e57', 'f57', 'g57'],
  //   ['d58', 'e58', 'f58', 'g58']
  // ]


  periodcellname: any = [
    'i9', 'j9', 'i67', 'j67', 'i125', 'j125',
    'i12', 'j12', 'i70', 'j70', 'i128', 'j128',
    'i13', 'j13', 'i71', 'j71', 'i129', 'j129',
    'i14', 'j14', 'i72', 'j72', 'i130', 'j130',
    'i15', 'j15', 'i73', 'j73', 'i131', 'j131',
    'i16', 'j16', 'i74', 'j74', 'i132', 'j132',
    'i17', 'j17', 'i75', 'j75', 'i133', 'j133',
    'i18', 'j18', 'i76', 'j76', 'i134', 'j134',
    'i19', 'j19', 'i77', 'j77', 'i135', 'j135',
    'i21', 'j21', 'i79', 'j79', 'i137', 'j137',
    'i22', 'j22', 'i80', 'j80', 'i138', 'j138',
    'i24', 'j24', 'i82', 'j82', 'i140', 'j140',
    'i25', 'j25', 'i83', 'j83', 'i141', 'j141',
    'i27', 'j27', 'i85', 'j85', 'i143', 'j143',
    'i28', 'j28', 'i86', 'j86', 'i144', 'j144',
    'i30', 'j30', 'i88', 'j88', 'i146', 'j146',
    'i34', 'j34', 'i92', 'j92', 'i150', 'j150',
    'i35', 'j35', 'i93', 'j93', 'i151', 'j151',
    'i36', 'j36', 'i94', 'j94', 'i152', 'j152',
    'i37', 'j37', 'i95', 'j95', 'i153', 'j153',
    'i38', 'j38', 'i96', 'j96', 'i154', 'j154',
    'i42', 'j42', 'i100', 'j100', 'i158', 'j158',
    'i43', 'j43', 'i101', 'j101', 'i159', 'j159',
    'i44', 'j44', 'i102', 'j102', 'i160', 'j160',
    'i45', 'j45', 'i103', 'j103', 'i161', 'j161',
    'i46', 'j46', 'i104', 'j104', 'i162', 'j162',
    'i49', 'j49', 'i107', 'j107', 'i165', 'j165',
    'i50', 'j50', 'i108', 'j108', 'i166', 'j166',
    'i51', 'j51', 'i109', 'j109', 'i167', 'j167',
    'i52', 'j52', 'i110', 'j110', 'i168', 'j168',
    'i54', 'j54', 'i112', 'j112', 'i170', 'j170',
    'i57', 'j57', 'i115', 'j115', 'i173', 'j173',
    'i58', 'j58', 'i116', 'j116', 'i174', 'j174',
    'i59', 'j59', 'i117', 'j117', 'i175', 'j175',
    'i60', 'j60', 'i118', 'j118', 'i176', 'j176',
    'i61', 'j61', 'i119', 'j119', 'i177', 'j177',
    'i62', 'j62', 'i120', 'j120', 'i178', 'j178',
  ]
  firsttime: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);


    this.incomestatementgraph = {
      series: [
        // {
        //   name: 'Electra Motors',
        //   data: [16305718, 3358858, 32014508, 2781789]
        // },
        // {
        //   name: 'Titan Motors',
        //   data: [12130875, 501083, 446244, 574040]
        // },
        // {
        //   name: 'GreenSpeed Technologies',
        //   data: [5417535, 1168742, 1050262, 889056]
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
          columnWidth: "50%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        // categories: ['Sales revenue', 'EBITDA', 'EBIT', 'PAT'],
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
        text: "Income Statement, M INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.balancesheetgraph = {
      series: [
        // {
        //   name: 'Electra Motors',
        //   data: [9758074, 9278382, 479692]
        // },
        // {
        //   name: 'Titan Motors',
        //   data: [6633130, 6213563, 423666]
        // },
        // {
        //   name: 'GreenSpeed Technologies',
        //   data: [5621474, 3621979, 1999495]
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
          columnWidth: "50%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        // categories: ['Total assets', 'Total equity', 'Total liabilities'],
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
        text: "Balance Sheet, M INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.kpigraph = {
      series: [
        // {
        //   name: 'Sales, units',
        //   data: [4665, 3743, 1490]
        // },
        // {
        //   name: 'Manufacturing Plants Capacity, units',
        //   data: [4820, 2060, 4200]
        // },
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
          columnWidth: "50%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        // categories: ['Electra Motors', 'Titan Motors', 'GreenSpeed Technologies'],
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
        text: "KPI",
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
    let jsonarray1: any = [];
    let jsonarray2: any = [];
    let jsonarray3: any = [];
    let jsonarray4: any = [];
    let jsonarray5: any = [];
    let jsonarray6: any = [];
    let jsonarray7: any = [];
    let jsonarray8: any = [];
    let jsonarray9: any = [];
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].financialanalysiscmid);
              if (data.resultList[0].financialAnalysisCM.financialAnalysisCMActiveStatus.foodforthougthtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].financialAnalysisCM[this.periodcellname[i]]
              }

              if (this.periodselectvalue === 'Previous Period') {
                for (let j = 1; j < 5; j++) {
                  jsonarray1.push({ 'x': this.previousincomestategraphcell[j][0], 'y': Number(data.resultList[0].financialAnalysisCM[this.previousincomestategraphcell[j][1]]) });
                  jsonarray2.push({ 'x': this.previousincomestategraphcell[j][0], 'y': Number(data.resultList[0].financialAnalysisCM[this.previousincomestategraphcell[j][2]]) });
                  jsonarray3.push({ 'x': this.previousincomestategraphcell[j][0], 'y': Number(data.resultList[0].financialAnalysisCM[this.previousincomestategraphcell[j][3]]) });
                }
                for (let j = 1; j < 4; j++) {
                  jsonarray4.push({ 'x': data.resultList[0].financialAnalysisCM[this.previousbalancesheetgraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.previousbalancesheetgraphcell[j][1]]) });
                  jsonarray5.push({ 'x': data.resultList[0].financialAnalysisCM[this.previousbalancesheetgraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.previousbalancesheetgraphcell[j][2]]) });
                  jsonarray6.push({ 'x': data.resultList[0].financialAnalysisCM[this.previousbalancesheetgraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.previousbalancesheetgraphcell[j][3]]) });
                }
                for (let j = 1; j < 3; j++) {
                jsonarray7.push({ 'x': data.resultList[0].financialAnalysisCM[this.previouskpigraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.previouskpigraphcell[j][1]]) });
                jsonarray8.push({ 'x': data.resultList[0].financialAnalysisCM[this.previouskpigraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.previouskpigraphcell[j][2]]) });
                jsonarray9.push({ 'x': data.resultList[0].financialAnalysisCM[this.previouskpigraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.previouskpigraphcell[j][3]]) });
              }
              } else {
                for (let j = 1; j < 5; j++) {
                  jsonarray1.push({ 'x': this.currentincomestategraphcell[j][0], 'y': Number(data.resultList[0].financialAnalysisCM[this.currentincomestategraphcell[j][1]]) });
                  jsonarray2.push({ 'x': this.currentincomestategraphcell[j][0], 'y': Number(data.resultList[0].financialAnalysisCM[this.currentincomestategraphcell[j][2]]) });
                  jsonarray3.push({ 'x': this.currentincomestategraphcell[j][0], 'y': Number(data.resultList[0].financialAnalysisCM[this.currentincomestategraphcell[j][3]]) });
                }
                for (let j = 1; j < 4; j++) {
                  jsonarray4.push({ 'x': data.resultList[0].financialAnalysisCM[this.currentbalancesheetgraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.currentbalancesheetgraphcell[j][1]]) });
                  jsonarray5.push({ 'x': data.resultList[0].financialAnalysisCM[this.currentbalancesheetgraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.currentbalancesheetgraphcell[j][2]]) });
                  jsonarray6.push({ 'x': data.resultList[0].financialAnalysisCM[this.currentbalancesheetgraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.currentbalancesheetgraphcell[j][3]]) });
                }
                for (let j = 1; j < 3; j++) {
                jsonarray7.push({ 'x': data.resultList[0].financialAnalysisCM[this.currentkpigraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.currentkpigraphcell[j][1]]) });
                jsonarray8.push({ 'x': data.resultList[0].financialAnalysisCM[this.currentkpigraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.currentkpigraphcell[j][2]]) });
                jsonarray9.push({ 'x': data.resultList[0].financialAnalysisCM[this.currentkpigraphcell[j][0]], 'y': Number(data.resultList[0].financialAnalysisCM[this.currentkpigraphcell[j][3]]) });
              }
              }

              // for (let j = 1; j < 3; j++) {
              //   jsonarray7.push({ 'x': data.resultList[0][this.kpigraphcell[j][0]], 'y': Number(data.resultList[0][this.kpigraphcell[j][1]]) });
              //   jsonarray8.push({ 'x': data.resultList[0][this.kpigraphcell[j][0]], 'y': Number(data.resultList[0][this.kpigraphcell[j][2]]) });
              //   jsonarray9.push({ 'x': data.resultList[0][this.kpigraphcell[j][0]], 'y': Number(data.resultList[0][this.kpigraphcell[j][3]]) });
              // }

              
              this.incomestatementgraph.series = [
                { "name": "Electra Motors", "data": jsonarray1 },
                { "name": "Titan Motors", "data": jsonarray2 },
                { "name": "GreenSpeed Technologies", "data": jsonarray3 }
              ]

              this.balancesheetgraph.series = [
                { "name": "Electra Motors", "data": jsonarray4 },
                { "name": "Titan Motors", "data": jsonarray5 },
                { "name": "GreenSpeed Technologies", "data": jsonarray6 }
              ]
              this.kpigraph.series = [
                { "name": "Electra Motors", "data": jsonarray7 },
                { "name": "Titan Motors", "data": jsonarray8 },
                { "name": "GreenSpeed Technologies", "data": jsonarray9 }
              ]
             
              

              console.log("income",this.incomestatementgraph.series,"balance",this.balancesheetgraph.series,"kpi",this.kpigraph.series)

              if (this.firsttime) {
                this.writefsaValue('am33');

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


  writefsaValue(cellname: string) {
    let apiname = '/financialanalysis/singleinputfinancialanalysis';
    let financialanalysisData = {
      [cellname]: this.periodselectvalue,

    }
    console.log('writedata', financialanalysisData)
    this._api.financialanalysisdatawrite("financialanalysis", 1,
      financialanalysisData, apiname, 'financialanalysiscmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.getFetchData();
          this.firsttime = false;
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

  downloadexcel() {
    window.location.href = "../../../assets/images/Worksheet in Financial Analysis.xlsx";
  }

  Click() {
    console.log("periodvalue", this.periodselectvalue)
    this.writefsaValue('am33')

  }


}

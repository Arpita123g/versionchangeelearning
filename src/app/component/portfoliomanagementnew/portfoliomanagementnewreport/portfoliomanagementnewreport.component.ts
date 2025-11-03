import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexNoData,
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
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';


interface RadarChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};


interface lineChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  colors: string[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

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
  selector: 'app-portfoliomanagementnewreport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,MatDialogModule,TippyDirective],
  templateUrl: './portfoliomanagementnewreport.component.html',
  styleUrls: ['./portfoliomanagementnewreport.component.scss']
})
export class PortfoliomanagementnewreportComponent extends AbstractComponent {
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  getallvalues: any = '';
  submitprove: string = "";
  incomepercent: any = [];
  incomepercentnames: any = [];
  rigorcharts: RadarChart;
  ReturnsTrendGraph: lineChart;
  avgannualizereturngraph: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  jsonarray8: any = [];
  jsonarray9: any = [];
  jsonarray10: any = [];
  jsonarray11: any = [];
  optionalcase: any = ['foodforthoughtstatus'];
  platform: any = [];
  platformnames: any = [];



  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [
        //   {
        //   name: 'Series',
        //   data: [5, 10, 20, 40],
        // }
      ],
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: ''
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['Rigor', 'Structuring', 'Synthesis', 'Business Jugement',]
      },
      yaxis: {
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },

    };

    this.ReturnsTrendGraph = {
      series: [

      ],
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
      colors: ['#FF1654', '#247BA0', '#70C1B3', '#B23A48', '#F3B700', '#2D7DD2', '#4CAF50'],
      xaxis: {
        categories: [
          "PY1",
          "PY2",
          "PY3",
          "PY4",
          "PY5",
          "PY6",
          "PY7",
          "PY8",
          "PY9",
          "Phase 1",
          "Phase 2",
          "Phase 3",
        ],
        title: {
          text: "",
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
          // text: "% of consumers attracted based on price",
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },

        labels: {
          formatter: function (value) {
            return value.toFixed(2) + "%";
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
        text: 'Returns Trend',
        // text: '',
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

    this.avgannualizereturngraph = {
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
          columnWidth: "40%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
      },
      xaxis: {
        categories: [
          "PY1",
          "PY2",
          "PY3",
          "PY4",
          "PY5",
          "PY6",
          "PY7",
          "PY8",
          "PY9",
          "Phase 1",
          "Phase 2",
          "Phase 3",
        ],
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
            return val + "%";
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
        text: "Average Annualized Return, %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

  }

  rigorchartsrange = [
    ['Rigor', 'af37', '78', '45'],
    ['Structuring', 'ag34', '79', '47'],
    ['Synthesis', 'ah34', '81', '43'],
    ['Business Judgement', 'ai34', '80', '42'],
  ];

  ReturnsTrendGraphvalue: any = [
    ['Nifty 50', 'o560', 'p560', 'q560', 'r560', 's560', 't560', 'u560', 'v560', 'w560', 'x560', 'y560', 'z560',],
    ['Sensex', 'o561', 'p561', 'q561', 'r561', 's561', 't561', 'u561', 'v561', 'w561', 'x561', 'y561', 'z561',],
    ['US Stocks', 'o562', 'p562', 'q562', 'r562', 's562', 't562', 'u562', 'v562', 'w562', 'x562', 'y562', 'z562',],
    ['Commodity', 'o563', 'p563', 'q563', 'r563', 's563', 't563', 'u563', 'v563', 'w563', 'x563', 'y563', 'z563',],
    ['Hybrid Fund', 'o564', 'p564', 'q564', 'r564', 's564', 't564', 'u564', 'v564', 'w564', 'x564', 'y564', 'z564',],
    ['Corporate Bond', 'o565', 'p565', 'q565', 'r565', 's565', 't565', 'u565', 'v565', 'w565', 'x565', 'y565', 'z565',],
    ['PSU Bond', 'o566', 'p566', 'q566', 'r566', 's566', 't566', 'u566', 'v566', 'w566', 'x566', 'y566', 'z566',]
  ];

  avgannualizereturngraphvalue: any = [
    'ac560', 'ad560', 'ae560', 'af560', 'ag560', 'ah560', 'ai560', 'aj560', 'ak560', 'al560', 'am560', 'an560'
  ]

  databasecellname: any = [
    'c25', 'c301', 'c578', 'c27', 'c303', 'c580', 'c28', 'c304', 'c581', 'f25', 'f301', 'f578', 'f26', 'f302', 'f579', //15
    'h25', 'h301', 'h578', 'f27', 'f303', 'f580', 'h26', 'h302', 'h579', 'c834', 'c835', 'c833', 'f834', 'f835', 'c9', 'h27', //16
    'h303', 'h580', 'i834', 'i835', 'g12', 'g13', 'g14', 'g15', 'g16', 'g17', 'g18', 'g288', 'g289', 'g290', 'g291', 'g292', 'g293',
    'g294', 'g565', 'g566', 'g567', 'g568', 'g569', 'g570', 'g571',
  ];


  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);

  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }


  getFetchData(attempt: string) {
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this.jsonarray4 = [];
              this.jsonarray5 = [];
              this.jsonarray6 = [];
              this.jsonarray7 = [];
              this.jsonarray8 = [];
              this.jsonarray9 = [];
              this.jsonarray10 = [];
              this.jsonarray11 = [];

              this.submitprove = data.resultList[0].ap15;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].portfoliomanagementcmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.databasecellname.length; i++) {
                  this.result[i] = data.resultList[0][this.databasecellname[i]]
                }


                for (let i = 0; i < this.avgannualizereturngraphvalue.length; i++) {
                  this.jsonarray4.push(Number(data.resultList[0][this.avgannualizereturngraphvalue[i]] * 100).toFixed(2));
                }
                this.avgannualizereturngraph.series = [
                  { "name": "Average Return", "data": this.jsonarray4 },

                ]
                for (let i = 1; i < 13; i++) {
                  this.jsonarray5.push(data.resultList[0][this.ReturnsTrendGraphvalue[0][i]] * 100).toFixed(2);
                  this.jsonarray6.push(data.resultList[0][this.ReturnsTrendGraphvalue[1][i]] * 100).toFixed(2);
                  this.jsonarray7.push(data.resultList[0][this.ReturnsTrendGraphvalue[2][i]] * 100).toFixed(2);
                  this.jsonarray8.push(data.resultList[0][this.ReturnsTrendGraphvalue[3][i]] * 100).toFixed(2);
                  this.jsonarray9.push(data.resultList[0][this.ReturnsTrendGraphvalue[4][i]] * 100).toFixed(2);
                  this.jsonarray10.push(data.resultList[0][this.ReturnsTrendGraphvalue[5][i]] * 100).toFixed(2);
                  this.jsonarray11.push(data.resultList[0][this.ReturnsTrendGraphvalue[6][i]] * 100).toFixed(2);

                }
                this.ReturnsTrendGraph.series = [
                  { "name": "Nifty 50", "data": this.jsonarray5 }, { "name": "Sensex", "data": this.jsonarray6 },
                  { "name": "US Stocks", "data": this.jsonarray7 }, { "name": "Commodity", "data": this.jsonarray8 },
                  { "name": "Hybrid Fund", "data": this.jsonarray9 }, { "name": "Corporate Bond", "data": this.jsonarray10 },
                  { "name": "PSU Bond", "data": this.jsonarray11 },
                ]

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].portfolioManagementCM.portfolioManagementCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }


                //rigor chart data
                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0][(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]
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

  downloadreportportfolioigment() {
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';
    this.excelsheetservice.downloadReportforgame(apiname, "portfolio", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }
}

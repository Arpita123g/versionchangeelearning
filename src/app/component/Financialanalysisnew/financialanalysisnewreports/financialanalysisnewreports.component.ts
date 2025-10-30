import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
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
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
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

interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-financialanalysisnewreports',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, NgApexchartsModule,
    MatIconModule, FormsModule, TippyDirective],
  templateUrl: './financialanalysisnewreports.component.html',
  styleUrls: ['./financialanalysisnewreports.component.scss']
})
export class FinancialanalysisnewreportsComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  employeesperformancelevelgraph: barchart;
  capitalallocationgraph: pieChart;

  scoregraph: any = [
    ['r27', 's27'],
    ['r28', 's28'],
    ['r29', 's29'],
    ['r30', 's30'],
    ['r31', 's31'],
    ['r32', 's32']
  ]

  capitalallocationgraphcell: any = [
    's18', 't18', 'u18'
  ]

  rigorgraphvalue: any = [
    ['Rigor', 'x38', '83', '55'],
    ['Structuring', 'x39', '78', '58'],
    ['Synthesis', 'x40', '82', '60'],
    ['Business Judgement', 'x41', '81', '56'],
  ]

  databasecellnamearray: any = [
    'r27', 's27','r28', 's28','r29', 's29','r30', 's30','r31', 's31','r32', 's32',
    's19', 't19', 'u19',
    's21', 't21', 'u21',
    't23', 's23',

  ]
  submitprove: string = "";
  roundname: string = "";
  dropdownvalue: any = [];
  result:any = [];
  optionalcase: any = ["foodforthoughtstatus"]
  optional: any[] = [];
  jsonarray1:any = [];
  jsonarray2:any = [];
  jsonarray3:any = [];
  jsonarray4:any = [];
  capitalallocationnames:any = [];
  capitalallocation:any = [];


  capitalallocationgraphvalue: any = [
    ['Electra Motors','s18'],
    ['Titan Motors','t18'],
    ['GreenSpeed Technologies','u18']
    // ['Truck', 'C85'],
    // ['Rail', 'C86'],
    // ['Air', 'C87']
  ]
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [{
        name: 'Series',
        data: [5, 10, 20, 40],
      }],
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

    this.employeesperformancelevelgraph = {
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
        categories: [['Liquidity', 'Ratio'], ['Leverage', 'Ratio'], ['Efficiency', 'Ratio'], ['Profitability', 'Ratio'], ['Market Value', 'Ratio'],
        ['Total', 'Score']],
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
        text: "Scores %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.capitalallocationgraph = {
      series: [],
      chart: {
        width: 400,
        height: 250,
        type: 'pie',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      legend: {
        position: 'right',
        // horizontalAlign: 'center',

        // floating: false,
        // width: undefined,
        // height: undefined,
        offsetY: 80,
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 100,
            },
            legend: {
              position: 'middle',
            },
          },
        },
      ],
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
        text: 'Capital Allocation %',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
  }

  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);
  }

  getFetchData(attempt: string) {
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this.submitprove = data.resultList[0].am31;
              if ((this.submitprove == "No") || (this.submitprove == "no")|| (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].financialanalysiscmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.databasecellnamearray.length; i++) {
                  this.result[i] = data.resultList[0][this.databasecellnamearray[i]]
                }
                
                for (let i = 0; i < this.scoregraph.length; i++) {
                  this.jsonarray4.push({ 'x': "", 'y': (data.resultList[0][this.scoregraph[i][1]] * 100).toFixed(0) });
                  
                }
                this.employeesperformancelevelgraph.series = [
                  { "name": "Liquidity Ratio", "data": this.jsonarray4 },
                  
                ]
                console.log("bar graph",this.employeesperformancelevelgraph.series)

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].financialAnalysisCM.financialAnalysisCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                //rigor chart data
                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorgraphvalue[i][0], 'y': data.resultList[0][(this.rigorgraphvalue[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorgraphvalue[i][0], 'y': (this.rigorgraphvalue[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorgraphvalue[i][0], 'y': (this.rigorgraphvalue[i][3]) });
                }

                console.log("riar", this.jsonarray1, this.jsonarray2, this.jsonarray3)
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]

                for (let i = 0; i < 3; i++) {
                  this.capitalallocationnames[i] = this.capitalallocationgraphvalue[i][0];
                  this.capitalallocation[i] = data.resultList[0][this.capitalallocationgraphvalue[i][1]];
                  }
                this.capitalallocationgraph.series = this.capitalallocation;
                this.capitalallocationgraph.labels = this.capitalallocationnames;
                console.log("revenue", this.capitalallocationgraph.series)

             
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


  downloadreportfsa() {
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this.excelsheetservice.downloadReportforgame(apiname, "fsa", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename, this.studentelementdetailsvalue.coursedetailsid);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }
}

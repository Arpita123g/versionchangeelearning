import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
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
  ApexNonAxisChartSeries, ApexResponsive, ApexLegend,



} from 'ng-apexcharts';
import { CapitalBudgetingsheetService } from 'src/app/service/sheet/capitalbudget/capitalbudgetsheet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

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
  selector: 'app-capitalbudgetingreport',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule,MatIconModule],
  templateUrl: './capitalbudgetingreport.component.html',
  styleUrls: ['./capitalbudgetingreport.component.scss']
})
export class CapitalbudgetingreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  pvbargraph: barChart;
  budgetbar: barChart;
  pvpiechart: pieChart;
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  submitprove: string = "";
  optionalcase: any = ["foodforthoughtstatus",];
  totalOptionalcase: boolean = true;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  pvbargraphrange = ['c100', 'c101'];
  pvpiechartrange = ['c106', 'c107', 'c108', 'c109'];
  budgetbarrange = ['c112', 'c113'];
  rigorchartsrange = [
    ['Rigor', 'ah31', '76', '45'],
    ['Structuring', 'ah32', '73', '47'],
    ['Synthesis', 'ah33', '78', '43'],
    ['Business Judgement', 'ah34', '80', '42'],
  ];
  filtertabledata: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: CapitalBudgetingsheetService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [ ],
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
    this.pvbargraph = {
      series: [],
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
          columnWidth: "10%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Revenue', 'Cost Saving'],
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
        text: "PV of Cash Stream, INR million",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }

    };
    this.pvpiechart = {
      series: [],
      chart: {
        width: 350,
        height: 300,
        type: 'pie',
        toolbar: {
          show: false,
        },
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center'
      },
      labels: ['Market Expansion', 'Operational Efficiency', 'Process Improvement', 'Product Expansion'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      tooltip: {
        y: {
          // formatter: undefined,
          formatter: function (val) {
            return (val * 100).toFixed(0) + '%';
          },
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false
        }
      },
      title: {
        text: 'PV of Divisional Cash Stream, INR million',
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
    this.budgetbar = {
      series: [ ],
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
          columnWidth: "10%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Budget Utilized', 'Budget Unused'],
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
        text: "PV of Cash Stream, INR million",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }

    };
  }


  tableData = [
    ["Area", "Project", "Investment, INR million", "PV, INR million", "NPV, INR Million", "IRR %", "Profitability Index", "Benefit Cost Ratio", "EAC"],
    ["b116", 'c116', 'd116', 'e116', 'f116', 'g116', 'h116', 'i116', 'j116',],
    ["b117", 'c117', 'd117', 'e117', 'f117', 'g117', 'h117', 'i117', 'j117',],
    ["b118", 'c118', 'd118', 'e118', 'f118', 'g118', 'h118', 'i118', 'j118',],
    ["b119", 'c119', 'd119', 'e119', 'f119', 'g119', 'h119', 'i119', 'j119',],
    ["b120", 'c120', 'd120', 'e120', 'f120', 'g120', 'h120', 'i120', 'j120',],

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
    let apiname = '/cbgame/fetchcbgame';
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
              if (data.resultList[0].cbgamedata) {
                this.result = data.resultList[0];
                this.filtertabledata = this.tableData.slice(); // Creates a shallow copy

                for (let i = 5; i >= 1; i--) { // Loop in reverse to avoid index shift issue
                  if (this.result.cbgamedata[this.tableData[i][0]] === '' || this.result.cbgamedata[this.tableData[i][0]] === 0) {
                    this.filtertabledata.splice(i, 1);
                  }
                }
                this.submitprove = data.resultList[0].cbgamedata.ao39;
              } else {
                this.submitprove = 'no';
              }

              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].cbgamecmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }


                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].cbGameCM.cbGameCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }


                // Rigorchar

                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0].cbgamedata[(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]

                for (let i = 0; i < this.pvbargraphrange.length; i++) {
                  this.jsonarray4.push((data.resultList[0].cbgamedata[this.pvbargraphrange[i]])).toFixed(0);
                }
                this.pvbargraph.series = [
                  { "name": 'value', "data": this.jsonarray4 },
                ];

                for (let i = 0; i < this.pvpiechartrange.length; i++) {
                  this.jsonarray5.push(Number((data.resultList[0].cbgamedata[this.pvpiechartrange[i]]).toFixed(0)));

                }
                this.pvpiechart.series = this.jsonarray5;
                for (let i = 0; i < this.budgetbarrange.length; i++) {
                  this.jsonarray6.push((data.resultList[0].cbgamedata[this.budgetbarrange[i]])).toFixed(0);
                }
                this.budgetbar.series = [
                  { "name": 'value', "data": this.jsonarray6 },
                ];


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

  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }


  downloadreportcapital() {
    let apiname = '/cbgame/fetchcbgame';
    this.excelsheetservice.downloadReportforgame(apiname, "cbgame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);
  }

}

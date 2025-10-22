import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
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
  NgApexchartsModule,
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

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

@Component({
  selector: 'app-pricingreport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './pricingreport.component.html',
  styleUrls: ['./pricingreport.component.scss']
})
export class PricingreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  priceinrchart: barChart;
  salesseatsrchart: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  platform: any = [];
  platformnames: any = [];
  optional: any[] = [];
  coursename: string = "";
  getallvalues: any = '';
  submitprove: string = "";
  incomepercent: any = [];
  incomepercentnames: any = [];
  optionalcase: any = ['foodforthoughtstatus'];


  resultcellname: any = ['c12', 'd12', 'c26', 'd26', 'c49', 'd49', 'c63', 'd63', 'g53', 'h53', 'g58', 'h58', 'g63',
    'h63', 'g65', 'h65', 'c67', 'd67', 'c68', 'd68', 'c69', 'd69', 'c70', 'd70', 'c71', 'd71', 'c72', 'd72', 'c74',
    'd74', 'c75', 'd75', 'g66', 'h66',
  ]

  rigorchartsrange: any = [
    ['Rigor', 'r29', '76', '45'],
    ['Structuring', 'r30', '73', '47'],
    ['Synthesis', 'r31', '78', '43'],
    ['Business Judgement', 'r32', '75', '42'],
  ]

  priceinrchartrange: any = [
    ['c12', 'd12'],
    ['c26', 'd26'],
    ['c49', 'd49'],
    ['c63', 'd63'],
  ]

  salesseatsrchartrange: any = [
    ['g53', 'h53'],
    ['g58', 'h58'],
    ['g63', 'h63'],
    ['g65', 'h65'],
  ]

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [
        // {
        //   name: 'You',
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

    this.priceinrchart = {
      series: [
        // {
        //   name: 'SkyVista',
        //   data: [3000, 3500, 4500, 3540]
        // },
        // {
        //   name: 'Jupiter',
        //   data: [2880, 3675, 5400, 3735]
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
          return val + "";
        },
      },
      xaxis: {
        categories: ['Initiate', 'Innovate', 'Adapt', 'Average pricing'],
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.salesseatsrchart = {
      series: [
        // {
        //   name: 'SkyVista',
        //   data: [243, 180, 144, 567]
        // },
        // {
        //   name: 'Jupiter',
        //   data: [249, 174, 134, 557]
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
          return val + "";
        },
      },
      xaxis: {
        categories: ['Initiate', 'Innovate', 'Adapt', 'Total sales'],
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
        text: "",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
  }

  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  getFetchData(attempt: string) {
    let apiname = '/pricinggame/fetchpricinggame';
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
              this.result = [];
              this.submitprove = data.resultList[0].ab13;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].pricinggamecmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0][this.resultcellname[i]];
                }


                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': (data.resultList[0][(this.rigorchartsrange[i][1])] * 100).toFixed(0) });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]


                for (let i = 0; i < this.priceinrchartrange.length; i++) {
                  this.jsonarray4.push(data.resultList[0][this.priceinrchartrange[i][0]]);
                  this.jsonarray5.push(data.resultList[0][this.priceinrchartrange[i][1]]);
                }
                this.priceinrchart.series = [
                  { "name": "SkyVista", "data": this.jsonarray4 }, { "name": "Jupiter", "data": this.jsonarray5 }
                ]


                for (let i = 0; i < this.salesseatsrchartrange.length; i++) {
                  this.jsonarray6.push(data.resultList[0][this.salesseatsrchartrange[i][0]]).toFixed(0);
                  this.jsonarray7.push(data.resultList[0][this.salesseatsrchartrange[i][1]]).toFixed(0);
                }
                this.salesseatsrchart.series = [
                  { "name": "SkyVista", "data": this.jsonarray6 }, { "name": "Jupiter", "data": this.jsonarray7 }
                ]

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].pricingGameCM.pricingGameCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }
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


  downloadreportpricinggame() {
    let apiname = '/pricinggame/fetchpricinggame';
    this.excelsheetservice.downloadReportforgame(apiname, "pricinggame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }

}

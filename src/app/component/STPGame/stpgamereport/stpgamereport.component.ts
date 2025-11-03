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
} from 'ng-apexcharts';
import { StpsheetService } from 'src/app/service/sheet/stp/stpsheet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

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
  selector: 'app-stpgamereport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,MatDialogModule,TippyDirective],
  templateUrl: './stpgamereport.component.html',
  styleUrls: ['./stpgamereport.component.scss']
})
export class StpgamereportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  salesmnunitchart: barChart;
  marketsharetrendschart: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  jsonarray8: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  submitprove: string = "";
  optionalcase: any = ["foodforthoughtstatus",];
  totalOptionalcase: boolean = true;
  // resultcellname: any;
  resultcellname: string[] = [
    // Financial Statement, Mn INR, Phase 3
    "AW143", "AX143", "AY143", "AZ143", "BA143", "BB143", //5
    "AW144", "AX144", "AY144", "AZ144", "BA144", "BB144", //11
    "AW145", "AX145", "AY145", "AZ145", "BA145", "BB145", //17
    "AW146", "AX146", "AY146", "AZ146", "BA146", "BB146", //23
    "AW147", "AX147", "AY147", "AZ147", "BA147", "BB147", //29
    "AW148", "AX148", "AY148", "AZ148", "BA148", "BB148", //35
    "AW149", "AX149", "AY149", "AZ149", "BA149", "BB149", //41
    "AW150", "AX150", "AY150", "AZ150", "BA150", "BB150", //47
    "AW151", "AX151", "AY151", "AZ151", "BA151", "BB151", //53
    "AW152", "AX152", "AY152", "AZ152", "BA152", "BB152", //59
    "AW153", "AX153", "AY153", "AZ153", "BA153", "BB153", //65
    "AW154", "AX154", "AY154", "AZ154", "BA154", "BB154", //71
    "AW155", "AX155", "AY155", "AZ155", "BA155", "BB155", //77
    // Company Sales & Market Share, Phase 3
    "AW135", "AW136", "AW137", "AX143", "AX136", "AX137", "AY143", "AY136", "AY137", //86
    "AZ143", "AZ136", "AZ137", "BA143", "BA136", "BA137", "BB143", "BB136", "BB137", //95
    // Company Market Share, Phase 1 to 3
    "AW135", "C137", "W137", "AW137", "D135", "D137", "X137", "AX137", "E135", "E137", "Y137", "AY137", //107
    "F135", "F137", "Z137", "AZ137", "G135", "G137", "AA137", "BA137", "H135", "H137", "AB137", "BB137", //119
    // Product Market Share, Phase 1 to 3
    "AW9", "C133", "W133", "AW133", "AX9", "D133", "X133", "AX133", "AY9", "E133", "Y133", "AY133", //131
    "AZ9", "F133", "Z133", "AZ133", "BA9", "G133", "AA133", "BA133", "BB9", "H133", "AB133", "BB133", //143
    "BC9", "I133", "AC133", "BC133", "BD9", "J133", "AD133", "BD133", "BE9", "K133", "AE133", "BE133", //155
    "BF9", "L133", "AF133", "BF133", "BG9", "M133", "AG133", "BG133", //163
    // Company Operating Margins, Phase 1 to 3
    "AW135", "C156", "W156", "AW156", "D135", "D156", "X156", "AX156", "E135", "E156", "Y156", "AY156", //175
    "F135", "F156", "Z156", "AZ156", "G135", "G156", "AA156", "BA156", "H135", "H156", "AB156", "BB156", //187
    "AW195", "AW196", "AW197", "AW198", //191
  ];

  rigorchartsrange = [
    ['Rigor', 'CC40', '89', '55'],
    ['Structuring', 'CD40', '82', '57'],
    ['Synthesis', 'CE40', '83', '53'],
    ['Business Judgement', 'CF40', '85', '54'],
  ];

  salesmnunitchartrange = [
    ["AW135", "AW136", "AW137"],
    ["AX143", "AX136", "AX137"],
    ["AY143", "AY136", "AY137"],
    ["AZ143", "AZ136", "AZ137"],
    ["BA143", "BA136", "BA137"],
    ["BB143", "BB136", "BB137"]
  ];
  marketsharetrendschartrange = [
    ["AW135", "C137", "W137", "AW137"],
    ["D135", "D137", "X137", "AX137"],
    ["E135", "E137", "Y137", "AY137"],
    ["F135", "F137", "Z137", "AZ137"],
    ["G135", "G137", "AA137", "BA137"],
    ["H135", "H137", "AB137", "BB137"]
  ];




  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: StpsheetService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [
      //   {
      //   data: [100, 2000, 30000, 90000]
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

    this.salesmnunitchart = {
      series: [
        
      ],
      chart: {
        height: 250,
        type: "line",
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
      // dataLabels: {
      //   enabled: false,
      //   formatter: function (val) {
      //     return val + "";
      //   },
      // },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          if (typeof val === "number") {
            return val.toFixed(2); // Format to 2 decimal places if val is a number
          }
          return val as string; // Cast val to string if it's not a number
        }
      },
      xaxis: {
        categories: ['TC', 'TG', 'IT', 'NG', 'ST', 'EM'],
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
        // labels: {
        //   show: true,
        //   formatter: function (val) {
        //     return val + "";
        //   },
        // },
        labels: {
          show: true,
          formatter: function (val) {
            if (typeof val === "number") {
              return val.toFixed(2); // Format to 2 decimal places if val is a number
            }
            return val as string; // Cast val to string if it's not a number
          }
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
          formatter: (value, options) => {
            const seriesIndex = options.seriesIndex; // Index of the series being hovered
            if (seriesIndex === 1) {
              // For line chart (index 1), show percentage
              return (value*100).toFixed(1) + "%";
            }
            // For bar chart, show normal value
            return value.toFixed(2);
          },
        },
      },
      title: {
        text: "Sales, Mn units",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.marketsharetrendschart = {
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
          return val + "";
        },
      },
      xaxis: {
        categories: ['TC', 'TG', 'IT', 'NG', 'ST', 'EM'],
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
        text: "Market Share Trend",
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
    let apiname = '/stpgame/fetchstpgame';
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

              this.submitprove = data.resultList[0].cj121;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              }
               else {
                this._global.casemanagementid.next(data.resultList[0].stpgamecmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0].stpgamedata[this.resultcellname[i]]
                }

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].stpGameCM.stpGameCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }


                // Rigorchar

                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0].stpgamedata[(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]


                for (let i = 0; i < this.salesmnunitchartrange.length; i++) {
                  this.jsonarray4.push( data.resultList[0].stpgamedata[this.salesmnunitchartrange[i][1]]);
                  this.jsonarray5.push((data.resultList[0].stpgamedata[this.salesmnunitchartrange[i][2]]));
                }
                this.salesmnunitchart.series = [
                  {"name": "Sales, Mn units","type":"column", "data": this.jsonarray4 },
                  {"name": "Market Share","type":"line", "data": this.jsonarray5 },
                ];

                for (let i = 0; i < this.marketsharetrendschartrange.length; i++) {
                this.jsonarray6.push({ 'x':  data.resultList[0].stpgamedata[this.marketsharetrendschartrange[i][0]], "y": data.resultList[0].stpgamedata[this.marketsharetrendschartrange[i][1]]*100 });
                this.jsonarray7.push({ 'x':  data.resultList[0].stpgamedata[this.marketsharetrendschartrange[i][0]], "y": data.resultList[0].stpgamedata[this.marketsharetrendschartrange[i][2]]*100 });
                this.jsonarray8.push({ 'x':  data.resultList[0].stpgamedata[this.marketsharetrendschartrange[i][0]], "y": data.resultList[0].stpgamedata[this.marketsharetrendschartrange[i][3]]*100 });          

                }
                this.marketsharetrendschart.series = [
                  {"name": "Phase 1","data": this.jsonarray6},
                  {"name": "Phase 2","data": this.jsonarray7},
                  {"name": "Phase 3","data": this.jsonarray8},
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


  downloadreporthrpgame() {
    let apiname = '/stpgame/fetchstpgame';
    this.excelsheetservice.downloadReportforgame(apiname, "stpgame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);
  }

}

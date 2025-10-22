import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
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
import { ChangemanagementnewexlService } from 'src/app/service/sheet/changemanagementnew/changemanagementnewexl.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

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

@Component({
  selector: 'app-changemanagementnewreport',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule,MatIconModule],
  templateUrl: './changemanagementnewreport.component.html',
  styleUrls: ['./changemanagementnewreport.component.scss']
})
export class ChangemanagementnewreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  Employeesperformancelevelgraph: barchart;
  Groupkpigraph: barchart;
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  periodresult: any = [];
  optional: any[] = [];
  coursename: string = "";
  getallvalues: any = '';
  submitprove: string = "";
  optionalcase: any = ["foodforthoughtstatus"]
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
  language: any = [];

  fetchcall: boolean = false;
  p = '#C3F9C3 ';
  n = '#f7cac9';
  nu = '#FFD77E ';
  blank = '#EEEEEF'
  color = 'n';

  P = '#C3F9C3 ';
  N = '#f7cac9';
  Nu = '#FFD77E ';
  // blank = '#EEEEEF'

  rigorgraphvalue: any = [
    ['b120', 'ax33', '66', '45'],
    ['b121', 'ax34', '70', '47'],
    ['b122', 'ax35', '62', '43'],
    ['b123', 'ax36', '59', '42'],
  ]
  employeesperformancegraph: any = [
    ['b34', 'x34', 'y34', 'z34', 'aa34'],
    ['b35', 'x35', 'y35', 'z35', 'aa35'],
    ['b36', 'x36', 'y36', 'z36', 'aa36'],
    ['b37', 'x37', 'y37', 'z37', 'aa37'],
    ['b38', 'x38', 'y38', 'z38', 'aa38'],
    ['b39', 'x39', 'y39', 'z39', 'aa39'],
  ]
  groupkpigraph: any = [
    ['b107', 'b108', 'b109', 'b110'],
    ['x40', 'y40', 'z40', 'aa40'],

  ]
  databasecellname: any = ['x34', 'y34', 'z34', 'aa34',
    'x35', 'y35', 'z35', 'aa35',
    'x36', 'y36', 'z36', 'aa36',
    'x37', 'y37', 'z37', 'aa37',
    'x38', 'y38', 'z38', 'aa38',
    'x39', 'y39', 'z39', 'aa39',//24
    'ak20', 'al20', 'am20', 'an20', 'ao20', 'ap20',//30
    'o40', 'o44', 'o48', 'o52',
    'x40', 'y40', 'z40', 'aa40',//38
    'ak32', 'al32', 'am32', 'an32', 'ao32', 'ap32',//44
    'ak33', 'al33', 'am33', 'an33', 'ao33', 'ap33',//50
    'ak34', 'al34', 'am34', 'an34', 'ao34', 'ap34',//56
    'ak35', 'al35', 'am35', 'an35', 'ao35', 'ap35',//62
    'ak36', 'al36', 'am36', 'an36', 'ao36', 'ap36',//68
    'ak37', 'al37', 'am37', 'an37', 'ao37', 'ap37'//74
  ];

  periodcellvalue: any = ['x10', 'y10', 'z10', 'aa10', 'ab10', 'ac10'];
  languages: string = '';
  languagesub: Subscription;
  languagCommon: any = {};

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: ChangemanagementnewexlService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.languagesub = this._global.language.subscribe((data) => {
      this.languages = data;
      this.languages = this.languages.toLowerCase();
    });

    this.rigorcharts = {
      series: [
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
        // categories: ['Rigor', 'Structuring', 'Synthesis', 'Business Jugement',]
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

    this.Employeesperformancelevelgraph = {
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
          columnWidth: "80%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
      },
      xaxis: {
        // categories: ['Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat'],
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
        // text: "",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.Groupkpigraph = {
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
        // categories: [['Awareness', 'Level %'], ['Motivation', 'Level %'], ['Commitment', 'Level %'], ['Performance', 'Level %'],],
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
          show: false,
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

  getFetchData(attempt: string) {
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.language = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()];
              this.languagCommon = data.resultList[0].changeManagementNewLM[`common${this.languageselect.toLowerCase()}`];


              this.submitprove = data.resultList[0].changemanagementnewdata.bh6;
              if ((this.submitprove == "No") || (this.submitprove == "no")) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].changemanagementnewcmid);
                let attempt = data.resultList[0].attempt;
                // this.roundname = "Round " + attempt;
                // this.roundname = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + attempt : "Round" + " " + attempt;

                // if (attempt > 0) {
                //   for (let i = 1; i < attempt + 1; i++) {
                //     this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + i : "Round" + " " + i;
                //   }
                // }
                this.roundname = this.languagCommon?.b20 + " " + attempt;
              if (attempt > 0) {
                this.dropdownvalue = [];
                for (let i = 1; i <= attempt; i++) {
                  this.dropdownvalue.push(this.languagCommon?.b20 + " " + i);
                }
              }
                for (let i = 0; i < 74; i++) {
                  this.result[i] = data.resultList[0].changemanagementnewdata[this.databasecellname[i]]
                }
                for (let i = 74; i < 80; i++) {
                  this.result[i] = data.resultList[0].changeManagementNewCM.changemanagementnewperioddata[this.periodcellvalue[i - 74]]
                }

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].changeManagementNewCM.changeManagementNewCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                this.rigorcharts = {
                  ...this.rigorcharts, // Retain existing config
                  xaxis: {
                    ...this.rigorcharts.xaxis,
                    categories: [
                      this.language.b120,
                      this.language.b121,
                      this.language.b122,
                      this.language.b123,
                    ]
                  },

                };

                this.Employeesperformancelevelgraph = {
                  ...this.Employeesperformancelevelgraph,
                  xaxis: {
                    ...this.Employeesperformancelevelgraph.xaxis,
                    categories: [
                      this.language.b34,
                      this.language.b35,
                      this.language.b36,
                      this.language.b37,
                      this.language.b38,
                      this.language.b39,
                    ]
                  },
                  title: {
                    text: '',
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }
                  }
                };

                this.Groupkpigraph = {
                  ...this.Groupkpigraph,
                  xaxis: {
                    ...this.Groupkpigraph.xaxis,
                    categories: [

                      this.language.b107,
                      this.language.b108,
                      this.language.b109,
                      this.language.b110,
                    ]
                  },
                  title: {
                    text: '',
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }
                  }
                };
                if (this.languages === 'french') {
                  this.Groupkpigraph = {
                    ...this.Groupkpigraph,
                    xaxis: {
                      ...this.Groupkpigraph.xaxis,
                      categories: [

                      this.labelsBreak(this.language.b107),
                      this.labelsBreak(this.language.b108),
                      this.labelsBreak(this.language.b109),
                      this.labelsBreak(this.language.b110),
                    ],
                     

                    }
                  }
                }
                  //rigor chart data
                  for (let i = 0; i < 4; i++) {
                    this.jsonarray1.push({ 'x': this.language[this.rigorgraphvalue[i][0]], 'y': data.resultList[0].changemanagementnewdata[(this.rigorgraphvalue[i][1])] * 100 });
                    this.jsonarray2.push({ 'x': this.language[this.rigorgraphvalue[i][0]], 'y': (this.rigorgraphvalue[i][2]) });
                    this.jsonarray3.push({ 'x': this.language[this.rigorgraphvalue[i][0]], 'y': (this.rigorgraphvalue[i][3]) });
                  }

                  console.log("riar", this.jsonarray1, this.jsonarray2, this.jsonarray3)
                  this.rigorcharts.series = [{ "name": this.language.b232, "data": this.jsonarray1 }, { "name": this.language.b233, "data": this.jsonarray2 }, { "name": this.language.b234, "data": this.jsonarray3 }]

                  for (let i = 0; i < this.employeesperformancegraph.length; i++) {
                    this.jsonarray4.push({ 'x': this.language[this.employeesperformancegraph[i][0]], 'y': (data.resultList[0].changemanagementnewdata[this.employeesperformancegraph[i][1]] * 100).toFixed(0) });
                    this.jsonarray5.push({ 'x': this.language[this.employeesperformancegraph[i][0]], 'y': (data.resultList[0].changemanagementnewdata[this.employeesperformancegraph[i][2]] * 100).toFixed(0) });
                    this.jsonarray6.push({ 'x': this.language[this.employeesperformancegraph[i][0]], 'y': (data.resultList[0].changemanagementnewdata[this.employeesperformancegraph[i][3]] * 100).toFixed(0) });
                    this.jsonarray7.push({ 'x': this.language[this.employeesperformancegraph[i][0]], 'y': (data.resultList[0].changemanagementnewdata[this.employeesperformancegraph[i][4]] * 100).toFixed(0) });

                  }
                  this.Employeesperformancelevelgraph.series = [
                    { "name": this.language.b107, "data": this.jsonarray4 },
                    { "name": this.language.b108, "data": this.jsonarray5 },
                    { "name": this.language.b109, "data": this.jsonarray6 },
                    { "name": this.language.b110, "data": this.jsonarray7 },

                  ]
                  for (let i = 0; i < 4; i++) {
                    this.jsonarray8.push({ 'x': this.language[this.groupkpigraph[0][i]], 'y': (data.resultList[0].changemanagementnewdata[this.groupkpigraph[1][i]] * 100).toFixed(0) });

                  }
                  this.Groupkpigraph.series = [
                    { "name": '', "data": this.jsonarray8 },

                  ]
                  this.fetchcall = true;
                  //console.log("ss", this.Groupkpigraph.series)
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

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  downloadreportchangemanagement() {
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this.excelsheetservice.downloadReportforchangemanagementnew(apiname, "changemanagementnew", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid, this.languageselect);


  }

}

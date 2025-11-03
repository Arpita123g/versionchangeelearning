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
import { CrmsheetService } from 'src/app/service/sheet/crm/crmsheet.service';
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
  selector: 'app-crmgamereport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,MatDialogModule,TippyDirective],
  templateUrl: './crmgamereport.component.html',
  styleUrls: ['./crmgamereport.component.scss']
})
export class CrmgamereportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  saleconversionchancechart: barChart;
  pipelinemanageementchart: barChart;
  resourceallocationchart: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  submitprove: string = "";
  optionalcase: any = ["foodforthoughtstatus",];
  totalOptionalcase: boolean = true;
  resultcellname: any;
  databasecellname: any = ["c8", "c9", "c10",//lead pipeline count//2
    "n24", "o24", "p24",//sales//5
    "n32", "n40", "n43", "n33",//kpi variation//9
    "s33", "s34", "s35", "n27", "s36", "s27", "s28", "s29", "s31",//value creation//18
    "s14", "s22", "s24", "t14", "t22", "t24"//Resource allocation//24
  ]
  pipelinemanagementchart: any = []
  rigorchartsrange = [
    ['Rigor', 'ad36', '82', '59'],
    ['Structuring', 'ae36', '85', '60'],
    ['Synthesis', 'af36', '80', '58'],
    ['Business Judgement', 'ag36', '83', '55'],
  ];
  dataoflang: any = [];
  languageresult: any = [];
  graphtitle: string = "";
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: CrmsheetService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

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

    this.pipelinemanageementchart = {
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
          columnWidth: "30%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        // categories: [this.dataoflang.b228, this.dataoflang.b229, this.dataoflang.b230],
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
        text: this.graphtitle,
        // text: this.dataoflang.b256,
        offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.saleconversionchancechart = {
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
          columnWidth: "30%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
      },
      xaxis: {
        // categories: ['High Priority', 'Medium Priority', 'Low Priority'],
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
        // text: "Sales Conversion Chances",
        // text: this.dataoflang.b249,
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.resourceallocationchart = {
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
          columnWidth: "30%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        // categories: ['Allocated', 'Required', 'Surplus (+)/Deficit (-)'],
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
        // text: "Resource Allocation, hours",
        // text:this.languageresult.b250,

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
    let apiname = '/crmgame/fetchcrmgame';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
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
              this.submitprove = data.resultList[0].crmgamedata.al96;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].crmgamecmid);
                let attempt = data.resultList[0].attempt;
                this.dataoflang = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()];

                this.roundname = this.dataoflang.b409 + " " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = this.dataoflang.b409 + " " + i;
                  }
                }
                for (let i = 0; i < this.databasecellname.length; i++) {
                  this.result[i] = data.resultList[0].crmgamedata[this.databasecellname[i]]
                }
                // this.dataoflang = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()];
                this.languageresult = this.dataoflang
                this.pipelinemanageementchart = {
                  ...this.pipelinemanageementchart, // Retain existing config
                  xaxis: {
                    ...this.pipelinemanageementchart.xaxis,
                    categories: [
                      this.languageresult.b228, // High Priority
                      this.languageresult.b229, // Medium Priority
                      this.languageresult.b230  // Low Priority
                    ]
                  },
                  title: {
                    text: this.languageresult.b256,
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }

                  }
                };

                this.saleconversionchancechart = {
                  ...this.saleconversionchancechart, // Retain existing config
                  xaxis: {
                    ...this.saleconversionchancechart.xaxis,
                    categories: [
                      this.languageresult.b228, // High Priority
                      this.languageresult.b229, // Medium Priority
                      this.languageresult.b230  // Low Priority
                    ]
                  },
                  title: {
                    text: this.languageresult.b249,
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }

                  }
                };

                this.resourceallocationchart = {
                  ...this.resourceallocationchart, // Retain existing config
                  xaxis: {
                    ...this.resourceallocationchart.xaxis,
                    categories: [
                      this.languageresult.b231, // High Priority
                      this.languageresult.b232, // Medium Priority
                      this.languageresult.b233  // Low Priority
                    ]
                  },
                  title: {
                    text: this.languageresult.b250,
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }

                  }
                };


                this.rigorcharts = {
                  ...this.rigorcharts, // Retain existing config
                  xaxis: {
                    ...this.rigorcharts.xaxis,
                    categories: [
                      this.languageresult.b257,
                      this.languageresult.b258,
                      this.languageresult.b259,
                      this.languageresult.b260,
                    ]
                  },

                };

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].crmGameCM.crmGameCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }


                // Rigorchart
                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0].crmgamedata[(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": this.languageresult.b400, "data": this.jsonarray1 }, { "name": this.languageresult.b401, "data": this.jsonarray2 }, { "name": this.languageresult.b402, "data": this.jsonarray3 }]

                for (let i = 0; i < 3; i++) {
                  this.jsonarray4.push(this.result[i]);
                }
                this.pipelinemanageementchart.series = [{ "name": '', "data": this.jsonarray4 }];

                for (let i = 3; i < 6; i++) {
                  this.jsonarray5.push((Number(this.result[i]) * 100).toFixed(0));
                }
                this.saleconversionchancechart.series = [{ "name": '', "data": this.jsonarray5 }];


                for (let i = 19; i < 22; i++) {
                  this.jsonarray6.push((this.result[i]).toFixed(0));
                }
                for (let i = 22; i < 25; i++) {
                  this.jsonarray7.push((this.result[i]).toFixed(0));
                }
                this.resourceallocationchart.series = [{ "name": this.languageselect.toLowerCase() == 'hindi' ? 'शृंखला3' : 'Series3', "data": this.jsonarray6 }, { "name": this.languageselect.toLowerCase() == 'hindi' ? 'शृंखला4' : 'Series4', "data": this.jsonarray7 }];

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
    let apiname = '/crmgame/fetchcrmgame';
    this.excelsheetservice.downloadReportforCRMgame(apiname, "crmgame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid, this.languageselect);
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
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
  NgApexchartsModule,
} from 'ng-apexcharts';
import { HrplanningexlService } from 'src/app/service/sheet/hrplanning/hrplanningexl.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

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
  selector: 'app-hrpgamereport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],  
  templateUrl: './hrpgamereport.component.html',
  styleUrls: ['./hrpgamereport.component.scss']
})
export class HrpgamereportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  hirecountchart: barChart;
  employeecountchart: barChart;
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
  language: any = [];

  rigorchartsrange = [
    ['b143', 'v47', '76', '45'],
    ['b144', 'w47', '73', '47'],
    ['b145', 'x47', '78', '43'],
    ['b146', 'y47', '80', '42'],
  ];

  hirecountchartrange = [
    ['b140', 'c105'],
    ['b141', 'c106']
  ]



  employeecountchartrange = [
    ['c90', 'd90', 'e90'],//sales
    ['c91', 'd91', 'e91'],//logistics
    ['c92', 'd92', 'e92'],//design
    ['c89', 'd89', 'e89'],//tech
    ['c93', 'd93', 'e93'],//cus
    ['c94', 'd94', 'e94']//admi
  ]

  resultcellname: any = ['g73', 'g74', 'g75', 'g76', 'g77', 'g78', 'f81', 'f82', 'f83', 'f84', 'f85', 'f86', 'e89',//12
    'e90', 'e91', 'e92', 'e93', 'e94', 'h89', 'h90', 'h91', 'h92', 'h93', 'h94', 'c99', 'c103', 'c124', 'c112',//27
    'c122', 'c128', 'c114', 'c115', 'c116', 'c117', 'c118', 'c119', 'c120',];//36

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: HrplanningexlService) {
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

    this.employeecountchart = {
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
        // categories: [['Sales &', 'Marketing'], ['Logistics &', 'Supply Chain'], ['Design &', 'Production'], 'Technical',
        // ['Customer', 'Support'], 'Administration'],    
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
        // text: "Employee Count",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.hirecountchart = {
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
        // categories: ['Hired', 'Retrenched'],
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
        // text: "Hired/Retrenched Count",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
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
    let apiname = '/hrplanningnew/fetchhrplanningnew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.language = data.resultList[0].hrPlanningNewLM[this.languageselect.toLowerCase()];

              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this.jsonarray4 = [];
              this.jsonarray5 = [];
              this.jsonarray6 = [];
              this.jsonarray7 = [];
              this.submitprove = data.resultList[0].hrplanningnewdata.ae49;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].hrplanningnewcmid);
                let attempt = data.resultList[0].attempt;
                // this.roundname = "Round " + attempt;
                this.roundname = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + attempt : "Round" + " " + attempt;

                // if (attempt > 0) {
                //   for (let i = 1; i < attempt + 1; i++) {
                //     this.dropdownvalue[i - 1] = "Round " + i;
                //   }
                // }
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'EU' ? "Round" + " " + i : "Round" + " " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] =data.resultList[0].hrplanningnewdata[this.resultcellname[i]]
                }
                console.log("result 30",this.result[30])


                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].hrPlanningNewCM.hrPlanningNewCMActiveStatus[this.optionalcase[i]];
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
                      this.language.b143,
                      this.language.b144,
                      this.language.b145,
                      this.language.b146,
                    ]
                  },

                };

                this.employeecountchart = {
                  ...this.employeecountchart,
                  xaxis: {
                    ...this.employeecountchart.xaxis,
                    categories: [
                      this.language.b33,
                      this.language.b34,
                      this.language.b35,
                      this.language.b32,
                      this.language.b36,
                      this.language.b37,
                    ]
                  },
                  title: {
                    text: this.language.b120,
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }
                  }
                };

                this.hirecountchart = {
                  ...this.hirecountchart,
                  xaxis: {
                    ...this.hirecountchart.xaxis,
                    categories: [
                      this.language.b140,
                      this.language.b141,
                    ]
                  },
                  title: {
                    text: this.language.b139,
                    offsetY: 0,
                    align: "center",
                    style: {
                      fontWeight: "bold",
                    }
                  }
                };
                // Rigorchar

                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.language[this.rigorchartsrange[i][0]], 'y': data.resultList[0].hrplanningnewdata[(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.language[this.rigorchartsrange[i][0]], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.language[this.rigorchartsrange[i][0]], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": this.language.b260, "data": this.jsonarray1 }, { "name": this.language.b261, "data": this.jsonarray2 }, { "name": this.language.b262, "data": this.jsonarray3 }]

                for (let i = 0; i < this.hirecountchartrange.length; i++) {
                  this.jsonarray4.push({ 'x': this.language[this.hirecountchartrange[i][0]], 'y': Number((data.resultList[0].hrplanningnewdata[this.hirecountchartrange[i][1]])).toFixed(0) });
                }
                this.hirecountchart.series = [{ "name": '', "data": this.jsonarray4 },];

                for (let i = 0; i < this.employeecountchartrange.length; i++) {
                  this.jsonarray5.push({ 'x': "", "y": data.resultList[0].hrplanningnewdata[this.employeecountchartrange[i][0]] });
                  this.jsonarray6.push({ 'x': "", "y": Number(data.resultList[0].hrplanningnewdata[this.employeecountchartrange[i][1]]).toFixed(0) });
                  this.jsonarray7.push({ 'x': "", "y": Number(data.resultList[0].hrplanningnewdata[this.employeecountchartrange[i][2]]).toFixed(0) });
                }
                this.employeecountchart.series = [{ "name": this.language.b121, "data": this.jsonarray5 },
                { "name": this.language.b122, "data": this.jsonarray6 }, { "name": this.language.b123, "data": this.jsonarray7 },
                ]

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
    let apiname = '/hrplanningnew/fetchhrplanningnew';
    this.excelsheetservice.downloadReportforhrp(apiname, "hrplanningnew", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      // this.studentelementdetailsvalue.coursedetailsid);
      this.studentelementdetailsvalue.coursedetailsid, this.languageselect);

  }

}

import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
} from 'ng-apexcharts';
import { ItmanagementSheetService } from 'src/app/service/sheet/itmanagement/itmanagementsheet.service';
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
  selector: 'app-itmanagementreport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,MatDialogModule,TippyDirective],
  templateUrl: './itmanagementreport.component.html',
  styleUrls: ['./itmanagementreport.component.scss']
})
export class ItmanagementreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  datastoragecapacitychart: barChart;
  systemarchitechturechart: barChart;
  // jsonarray1: any = [];
  // jsonarray2: any = [];
  // jsonarray3: any = [];
  // jsonarray4: any = [];
  // jsonarray5: any = [];
  // jsonarray6: any = [];
  // jsonarray7: any = [];
  // jsonarray8: any = [];
  // jsonarray9: any = [];
  jsonArrays: any[] = Array.from({ length: 9 }, () => []);
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  submitprove: string = "";
  optionalcase: any = ["foodforthoughtstatus"];
  totalOptionalcase: boolean = true;

  resultcellname: any = ['n15', 'o15', 'p15', 'n16', 'o16', 'p16', 'n17', 'o17', 'p17', 'n18', 'o18', 'p18', 'm4',//12
    'n4', 'o4', 'm7', 'n7', 'o7', 'l21', 'm21', 'l22', 'm22', 'l23', 'm23', 'l24', 'm24', 'l25', 'm25', 'l26', 'm26',//29
    'l27', 'm27', 'l28', 'm28', 'm29', 'm30', 'm31', 'q45', 'q43', 'q42', 'm56', 'n56', 'm60', 'n60', 'o60', 'm61',//45 
    'n61', 'o61'//47
  ];

  rigorchartsrange = [
    ['Rigor', 'z56', '78', '45'],
    ['Structuring', 'z57', '79', '47'],
    ['Synthesis', 'z58', '81', '43'],
    ['Business Judgement', 'z59', '80', '42'],
  ];

  systemarchitechturechartrange = [
    ['n15', 'o15', 'p15'],
    ['n16', 'o16', 'p16'],
    ['n17', 'o17', 'p17'],
  ]

  datastoragecapacitychartrange = [
    ['m4', 'm7'],
    ['n4', 'n7'],
    ['o4', 'o7']
  ]

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: ItmanagementSheetService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [
        // {
        //   data: [78, 45, 43, 42]
        // },
        // {
        //   data: [78, 45, 43, 42]
        // },
        // {
        //   data: [78, 45, 43, 42]
        // },
        // {
        //   data: [78, 45, 43, 42]
        // },
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

    this.systemarchitechturechart = {
      series: [
        // {
        //   name: 'Y1',
        //   data: [1600, 2737, 7737]
        // },
        // {
        //   name: 'Y2 (P)',
        //   data: [1600, 2737, 7737]
        // },
        // {
        //   name: 'Y3 (P)',
        //   data: [1600, 2737, 7737]
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
        categories: ['Server', 'Network Equipment', 'Database'],
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

    this.datastoragecapacitychart = {
      series: [
        // {
        //   name: 'Daily Transaction',
        //   data: [1200, 5353, 6373]
        // },
        // {
        //   name: 'Required Capacity, GB',
        //   data: [1522, 5355, 6222]
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
        categories: ['Y1', 'Y2 (P)', 'Y3 (P)'],
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
    let apiname = '/itmanagement/fetchitmanagement';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonArrays[0] = [];
              this.jsonArrays[1] = [];
              this.jsonArrays[2] = [];
              this.jsonArrays[3] = [];
              this.jsonArrays[4] = [];
              this.jsonArrays[5] = [];
              this.jsonArrays[6] = [];
              this.jsonArrays[7] = [];
              this.jsonArrays[7] = [];
              if (data.resultList[0].itmanagementdata) {
                this.result = data.resultList[0];
                this.submitprove = data.resultList[0].itmanagementdata.af96;
              } else {
                this.submitprove = 'no';
              }
              if (this.submitprove != "yes") {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].itmanagementcmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                // for (let i = 0; i < this.resultcellname.length; i++) {
                //   this.result[i] = data.resultList[0][this.resultcellname[i]]
                // }

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].itManagementCM.itManagementCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }


                // Rigorchar

                for (let i = 0; i < 4; i++) {
                  this.jsonArrays[0].push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0].itmanagementdata[(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonArrays[1].push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonArrays[2].push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonArrays[0] }, { "name": "90% Percentile", "data": this.jsonArrays[1] }, { "name": "Average", "data": this.jsonArrays[2] }]
                //systemarchitechure

                for (let i = 0; i < this.systemarchitechturechartrange.length; i++) {
                  this.jsonArrays[3].push({ 'x': "", "y": Number((data.resultList[0].itmanagementdata[this.systemarchitechturechartrange[i][0]]).toFixed(0)) });
                  this.jsonArrays[4].push({ 'x': "", "y": Number((data.resultList[0].itmanagementdata[this.systemarchitechturechartrange[i][1]]).toFixed(0)) });
                  this.jsonArrays[5].push({ 'x': "", "y": Number((data.resultList[0].itmanagementdata[this.systemarchitechturechartrange[i][2]]).toFixed(0)) });
                }
                this.systemarchitechturechart.series = [{ "name": "Y1", "data": this.jsonArrays[3] },
                { "name": "Y2(P)", "data": this.jsonArrays[4] }, { "name": "Y3(P)", "data": this.jsonArrays[5] },
                ]

                //datastorage 

                for (let i = 0; i < this.datastoragecapacitychartrange.length; i++) {
                  this.jsonArrays[6].push({ 'x': "", "y": Number((data.resultList[0].itmanagementdata[this.datastoragecapacitychartrange[i][0]]).toFixed(0)) });
                  this.jsonArrays[7].push({ 'x': "", "y": Number((data.resultList[0].itmanagementdata[this.datastoragecapacitychartrange[i][1]]).toFixed(0)) });

                }
                this.datastoragecapacitychart.series = [{ "name": "Daily Transaction", "data": this.jsonArrays[6] },
                { "name": "Required Capacity, GB", "data": this.jsonArrays[7] },
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

  downloadreportitmanagement() {
    let apiname = '/itmanagement/fetchitmanagement';
    this.excelsheetservice.downloadReportforgame(apiname, "itmanagement", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);
  }

}

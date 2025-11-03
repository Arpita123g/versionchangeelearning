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
  ApexLegend,
  ApexMarkers,
  ApexNoData,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
  selector: 'app-orderingbasicsreport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, MatDialogModule, TippyDirective],
  templateUrl: './orderingbasicsreport.component.html',
  styleUrls: ['./orderingbasicsreport.component.scss']
})
export class OrderingbasicsreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  Qauntity: barChart;
  Cost: barChart;
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


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [
        // {
        //   name: "Series 1",
        //   data: [80, 50, 30, 40,]
        // },
        // {
        //   name: "Series 2",
        //   data: [80, 30, 70, 60,]
        // },
        // {
        //   name: "Series 3",
        //   data: [80, 50, 60, 30,]
        // },
        // {
        //   name: "Series 4",
        //   data: [80, 20, 35, 46,]
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
    this.Qauntity = {
      series: [
        // {
        //   name: "Phase 1",
        //   data: [2200, 5580, 0,]
        // },
        // {
        //   name: "Phase 2",
        //   data: [2000, 1580, 440,]
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
        categories: ['Demand', 'Stockout', 'Backorder',],
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
        text: "Qauntity, units",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
    this.Cost = {
      series: [
        // {
        //   name: "Phase 1",
        //   data: [22000, 15580, 3330, 7420]
        // },
        // {
        //   name: "Phase 2",
        //   data: [23000, 13580, 4440, 6420]
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
        categories: ['Ordering', 'Holding', 'Stock out', 'Back ordering'],
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
        text: "Cost, INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

  }
  resultcellname: string[] = [
    "v63", "j63", "w63", "v64", "j64", "w64", "v65", "j65", "w65",//8
    "y63", "m63", "z63", "y64", "m64", "z64", "y65", "m65", "z65", "y66", "m66", "z66", //20
    "j67", "w68", "m67", "z67"
  ]

  rigorchartsrange = [
    ['Rigor', 'ai39', '78', '45'],
    ['Structuring', 'ai40', '79', '47'],
    ['Synthesis', 'ai41', '81', '43'],
    ['Business Judgement', 'ai42', '80', '42'],
  ];
  QauntityDatarange = [
    ["Demand", "j63", 'w63'],
    ["Stockout", "j64", 'w64'],
    ["Back order", "j65", 'w65'],
  ];
  CostDataRange = [
    ['Ordering', 'm63','z63'],
    ['Holding', 'm64','z64'],
    ['Stockout', 'm65','z65'],
    ['Back ordering', 'm66','z66']
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
    let apiname = '/orderingbasics/fetchorderingbasics';
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


              this.submitprove = data.resultList[0].ap18;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].orderingbasicscmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0][this.resultcellname[i]]
                }


                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].orderingBasicsCM.orderingBasicsCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }


                // Rigorchar ....
                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0][(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]

                // for Qauntity bar graph ....
                for (let i = 0; i < this.QauntityDatarange.length; i++) {
                  this.jsonarray4.push({ 'x':"", 'y': Number((data.resultList[0][this.QauntityDatarange[i][1]])).toFixed(0) });
                  this.jsonarray5.push({ 'x':"", 'y': Number((data.resultList[0][this.QauntityDatarange[i][2]])).toFixed(0) });

                }
                this.Qauntity.series = [{ "name": 'Phase 1', "data": this.jsonarray4 },{ "name": 'Phase 2', "data": this.jsonarray5 }];

                // for cost bar graph ....
                for (let i= 0; i <this.CostDataRange.length; i++){
                  this.jsonarray6.push({'x':"", "y":data.resultList[0][this.CostDataRange[i][1]]});
                  this.jsonarray7.push({'x':"", "y":Number(data.resultList[0][this.CostDataRange[i][2]]).toFixed(0)});
                }
                this.Cost.series =[{"name": "Phase 1", "data":this.jsonarray6}, {"name": "Phase 2", "data":this.jsonarray7}
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
    let apiname = '/orderingbasics/fetchorderingbasics';
    this.excelsheetservice.downloadReportforgame(apiname, "orderingbasics", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);
  }
}

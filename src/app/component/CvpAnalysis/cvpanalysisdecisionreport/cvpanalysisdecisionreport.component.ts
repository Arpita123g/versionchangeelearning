import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
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
  selector: 'app-cvpanalysisdecisionreport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './cvpanalysisdecisionreport.component.html',
  styleUrls: ['./cvpanalysisdecisionreport.component.scss']
})
export class CvpanalysisdecisionreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  cvpanalysisinrchart: barChart;
  salesunitschart: barChart;
  productionunitschart: barChart;
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
  cashfromfinancing: number = 0;
  foodforthought: boolean = true;
  topstatus: boolean = true;

  optionalcase: any = ["foodforthoughtstatus", "topstatus"];

  resultcellname: any = ['i23', 'j23', 'i25', 'j25', 'i24', 'j24', 'i26', 'j26', 'i27', 'j27', 'i44', 'j44',//12
    'm45', 'n45', 'i48', 'j48', 'i31', 'j31', 'i32', 'j32', 'i33', 'j33', 'i34',
    'j34', 'i35', 'j35', 'i36', 'j36', 'i37', 'j37', 'i38', 'j38', 'i39',
    'j39', 'i40', 'j40', 'i52', 'j52', 'i53', 'j53', 'i54', 'j54',
    'k41', 'm23', 'k40',
    'i49', 'j49', 'i41', 'j41', 'i19', 'm19',
  ];

  rigorchartsrange = [
    ['Rigor', 'x38', '76', '45'],
    ['Structuring', 'y34', '73', '47'],
    ['Synthesis', 'z34', '78', '43'],
    ['Business Judgement', 'aa34', '80', '42'],
  ];

  salesunitschartrange = [
    ['Demand', 'i23', 'i25'],
    ['Sales', 'j23', 'j25'],
  ];

  productionunitschartrange = [
    ['Production', 'i24', 'j24'],
    ['Closing Inventory', 'i26', 'j26'],
    ['Stockout', 'i27', 'j27'],
  ]

  cvpanalysisinrchartrange = [
    ['Price per unit', 'i44', 'j44'],
    ['Variable cost per unit', 'm45', 'n45'],
    ['Contribution per unit', 'i48', 'j48'],
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

    this.salesunitschart = {
      series: [
        // {
        //   name: 'Demand',
        //   data: [122746, 122740],
        // },
        // {
        //   name: 'Sales',
        //   data: [167572, 167572],
        // },
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
          columnWidth: "20%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Jeans', 'Top'],
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
        text: "Sales, mn units",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.productionunitschart = {
      series: [
        // {
        //   name: 'Jeans',
        //   data: [122740, 0, 6],
        // },
        // {
        //   name: 'Top',
        //   data: [180880, 13308, 0],
        // },
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
        categories: ['Production', 'Closing Inventory', 'Stockout'],
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
        text: "Production, mn units",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.cvpanalysisinrchart = {
      series: [
        // {
        //   name: 'Jeans',
        //   data: [900, 613, 287,],
        // },
        // {
        //   name: 'Top',
        //   data: [700, 451, 249],
        // },
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
        categories: ['Price per unit', 'Variable cost per unit', 'Contribution per unit'],
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
        text: "CVP Analysis, INR",
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
    let apiname = '/cvpanalysis/fetchcvpanalysis';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this.submitprove = data.resultList[0].ai8;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].cvpanalysiscmid);
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
                  const caseStatus = data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                //Rigorchar

                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0][(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]

                //salesunits

                for (let i = 0; i < this.salesunitschartrange.length; i++) {
                  this.jsonarray4.push({ 'x': "", 'y': (data.resultList[0][this.salesunitschartrange[i][1]]) });
                  this.jsonarray5.push({ 'x': "", 'y': (data.resultList[0][this.salesunitschartrange[i][2]]) });
                }
                this.salesunitschart.series = [
                  { "name": "Demand", "data": this.jsonarray4 }, { "name": "Sales", "data": this.jsonarray5 },
                ]

                //production

                for (let i = 0; i < this.productionunitschartrange.length; i++) {
                  this.jsonarray6.push({ 'x': "", 'y': (data.resultList[0][this.productionunitschartrange[i][1]]) });
                  this.jsonarray7.push({ 'x': "", 'y': (data.resultList[0][this.productionunitschartrange[i][2]]) });
                  // this.jsonarray8.push({ 'x': "", 'y': (data.resultList[0][this.productionunitschartrange[2][i+1]] * 100).toFixed(0) });
                }
                this.productionunitschart.series = [
                  { "name": "Jeans", "data": this.jsonarray6 }, { "name": "Top", "data": this.jsonarray7 },

                ]

                //Productunits

                for (let i = 0; i < this.cvpanalysisinrchartrange.length; i++) {
                  this.jsonarray9.push({ 'x': "", 'y': (data.resultList[0][this.cvpanalysisinrchartrange[i][1]]).toFixed(0) });
                  this.jsonarray10.push({ 'x': "", 'y': (data.resultList[0][this.cvpanalysisinrchartrange[i][2]]).toFixed(0) });
                  // this.jsonarray11.push({ 'x': "", 'y': (data.resultList[0][this.cvpanalysisinrchartrange[i][2]] * 100).toFixed(0) });
                }
                this.cvpanalysisinrchart.series = [
                  { "name": "Jeans", "data": this.jsonarray9 }, { "name": "Top", "data": this.jsonarray10 },

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


  downloadreportcvpanalysis() {
    let apiname = '/cvpanalysis/fetchcvpanalysis';
    this.excelsheetservice.downloadReportforgame(apiname, "cvpanalysis", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }

}

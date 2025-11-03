import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
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
import { AbstractComponent } from 'src/app/AbstractComponent';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
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
interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
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
  selector: 'app-promotionsigmentnewreport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,MatDialogModule,TippyDirective],    
  templateUrl: './promotionsigmentnewreport.component.html',
  styleUrls: ['./promotionsigmentnewreport.component.scss']
})
export class PromotionsigmentnewreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  productsalesgraph: barChart;
  segmentsalesgraph: barChart;
  platformslaesgraph: pieChart;
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
  optional: any[] = [];
  coursename: string = "";
  getallvalues: any = '';
  submitprove: string = "";
  incomepercent: any = [];
  incomepercentnames: any = [];
  optionalcase: any = ["foodforthoughtstatus","onlinestatus","moderntradestatus","reatilersstatus"]
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [
      //   {
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

    this.productsalesgraph = {
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
        categories: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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

    this.segmentsalesgraph = {
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
        categories: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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

    this.platformslaesgraph = {
      series: [
        
      ],
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
        offsetY: 80,
      },
      labels: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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
        text: '',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
  }

  platform:any = [];
  platformnames:any = [];
  rigorchartsrange = [
    ['Rigor', 'ag43', '82', '52'],
    ['Structuring', 'ag44', '78', '55'],
    ['Synthesis', 'ag45', '80', '58'],
    ['Business Judgement', 'ag46', '81', '60'],
  ];

  productsalesgraphrange = [
    ['s6', 't6'],
    ['s7', 't7'],
    ['s8', 't8'],
    ['s9', 't9'],
  ]

  segmentsalesgraphrange = [
    ['s18', 't18'],
    ['s19', 't19'],
    ['s20', 't20'],
    ['s21', 't21'],
  ]

  platformslaesgraphrange = [
    ['Website', 'u6'],
    ['Social Commerce', 'u7'],
    ['Modern Trade', 'u8'],
    ['Retailers', 'u9'],
  ]

  resultcellname: any = ['r6', 's6', 't6', 'r7', 's7', 't7', 'r8', 's8', 't8', 'r9', 's9', 't9', 's17', 't17', //13
    'r18', 's18', 't18', 'r19', 's19', 't19', 'r20', 's20', 't20', 'r21', 's21', 't21', 'u6', 'u7', 'u8', 'u9', //29
    's27', 's28', 's29', 's30', 's31', 's24', 's25', 's26', 's32', 's33', 's38']; //40

  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  
  getFetchData(attempt: string) {
    let apiname = '/promotions/fetchpromotions';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this.submitprove = data.resultList[0].z20;
              if ((this.submitprove == "No") || (this.submitprove == "no")|| (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].promotionscmid);
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
                
                
                for (let i = 0; i < this.productsalesgraphrange.length; i++) {
                  this.jsonarray4.push({ 'x': "", 'y': (data.resultList[0][this.productsalesgraphrange[i][0]] ).toFixed(0) });
                  this.jsonarray5.push({ 'x': "", 'y': (data.resultList[0][this.productsalesgraphrange[i][1]] ).toFixed(0) });
                }
                this.productsalesgraph.series = [
                  { "name": "Acne Face Cream", "data": this.jsonarray4 },{ "name": "Apple Cider Face Wash", "data": this.jsonarray5 },
                  
                ]
                for (let i = 0; i < this.segmentsalesgraphrange.length; i++) {
                  this.jsonarray6.push({ 'x': "", 'y': (data.resultList[0][this.segmentsalesgraphrange[i][0]] ).toFixed(0) });
                  this.jsonarray7.push({ 'x': "", 'y': (data.resultList[0][this.segmentsalesgraphrange[i][1]] ).toFixed(0) });
                }
                this.segmentsalesgraph.series = [
                  { "name": "Young & Leisure", "data": this.jsonarray6 },{ "name": "High-end", "data": this.jsonarray7 },
                ]
                

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].promotionsCM.promotionsCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                //rigor chart data
                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0][(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }

               
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]

                for (let i = 0; i < 4; i++) {
                  this.platformnames[i] = this.platformslaesgraphrange[i][0];
                  this.platform[i] = Number(data.resultList[0][this.platformslaesgraphrange[i][1]].toFixed(0));
                  }
                this.platformslaesgraph.series = this.platform;
                this.platformslaesgraph.labels = this.platformnames;
                

             
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


  downloadreportpromotionsigment() {
    let apiname = '/promotions/fetchpromotions';
    this.excelsheetservice.downloadReportforgame(apiname, "promotion", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }


}

import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
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
  selector: 'app-salestargetreport',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective,MatDialogModule],
  templateUrl: './salestargetreport.component.html',
  styleUrls: ['./salestargetreport.component.scss']
})
export class SalestargetreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  channelsalesgraph: barChart;
  segmentsharegraph: pieChart;
  productsegmentsharegraph: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  jsonarray8: any = [];
  jsonarray9: any = [];

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
  segment:any = [];
  segmentnames:any = [];
  optionalcase: any = ["foodforthoughtstatus", "bonusstatus", "leadershipstatus", "recognitionstatus","salesforcestylestatus","salesprocessstatus"]

  resultcellname: any = ['h61', 'h62', 'h63', 'h64', 'h65', 'h66', 'h67', 'e61', 'e62', 'e63', 'e64', 'e65', 'e55', 'ba9', //13
  'd13', 'e56', 'ba10', 'd14', 'e57', 'ba11', 'd15', 'm59', 'n59', 'o59', 'p59', 's54', 't54', 'u54', 'v54', 'j50', //29
  'j51', 'j52']; //31
  rigorchartsrange = [
    ['Rigor', 'ap46', '76', '45'],
    ['Structuring', 'ap47', '73', '47'],
    ['Synthesis', 'ap48', '78', '43'],
    ['Business Judgement', 'ap49', '81', '42'],
  ];
  chanelgraphcell: any = [
    ['Modern Trade', 'm63','n63'],
    ['Retail', 'm64', 'n64'],
    ['HORECA', 'm65', 'n65'],
  ]
  segmentsharegraphrange = [
    ['Easy Living', 'm58'],
    ['Experiencers', 'n58'],
    ['Headonistic', 'o58'],
    ['Thinkers', 'p58'],
  ]
  productsegmentgraph = [
    ["r58", "s58", "t58", "u58", "v58"],
    ["r59", "s59", "t59", "u59", "v59"],
    ["r60", "s60", "t60", "u60", "v60"],
    ["s60", "s61", "t61", "u61", "v61"],
  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [{
        name: 'You',
        data: [5, 10, 20, 40],
      }],
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

    this.channelsalesgraph = {
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
        categories: ['Modern Trade', 'Retail', 'HoReCa'],
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
        text: "Channel Sales, k INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.segmentsharegraph = {
      series: [],
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
      labels: ['Easy Living', 'Experiencers', 'Headonistic', 'Thinkers'],
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
        text: 'Segment Share, %',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.productsegmentsharegraph = {
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
        categories: ['Easy Living','Experiencers','Hedonistic','Thinkers'],
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
        text: "Product Segment Share, %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
    

  }

  override ngOnInit(): void {
    this.getValues(this.noofattempt);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getValues(attempt[1]);
  }

  getValues(attempt: string) {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
    let apiname = '/salestarget/fetchsalestarget';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].bb7;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getValues(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].salestargetcmid);
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
           
                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0][(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }

               
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]

                for (let i = 0; i < this.chanelgraphcell.length; i++) {
                  this.jsonarray4.push({ 'x': [this.chanelgraphcell[i][0]], 'y': Number(data.resultList[0][this.chanelgraphcell[i][1]].toFixed(0)) });
                  this.jsonarray5.push({ 'x': [this.chanelgraphcell[i][0]],  'y': Number(data.resultList[0][this.chanelgraphcell[i][2]].toFixed(0) ) });
                    
                }
                this.channelsalesgraph.series = [{ "name": "Sales", "data": this.jsonarray4 },{ "name": "Projections", "data": this.jsonarray5 },
                ]

                for (let i = 0; i < 4; i++) {
                  this.segmentnames[i] = this.segmentsharegraphrange[i][0];
                  // this.segment[i] =( Number(data.resultList[0][this.segmentsharegraphrange[i][1]]*100).toFixed(0));
                  this.segment[i] = Number( Number(data.resultList[0][this.segmentsharegraphrange[i][1]]*100).toFixed(0));

                  }
                this.segmentsharegraph.series = this.segment;
                this.segmentsharegraph.labels = this.segmentnames;
                console.log("segment", this.segment)
                console.log("segmentnames", this.segmentnames)

                for (let i = 0; i < this.productsegmentgraph.length; i++) {
                  // this.jsonarray6.push({ 'x': data.resultList[0][this.productsegmentgraph[i][0]], 'y': Number((data.resultList[0][this.productsegmentgraph[i][1]] * 100).toFixed(0) )});
                  // this.jsonarray7.push({ 'x': data.resultList[0][this.productsegmentgraph[i][0]], 'y': Number((data.resultList[0][this.productsegmentgraph[i][2]] * 100).toFixed(0) )});
                  // this.jsonarray8.push({ 'x': data.resultList[0][this.productsegmentgraph[i][0]], 'y': Number((data.resultList[0][this.productsegmentgraph[i][3]] * 100).toFixed(0) )});
                  // this.jsonarray9.push({ 'x': data.resultList[0][this.productsegmentgraph[i][0]], 'y': Number((data.resultList[0][this.productsegmentgraph[i][4]] * 100).toFixed(0) )});


                  this.jsonarray6.push( Number((data.resultList[0][this.productsegmentgraph[i][1]] * 100).toFixed(0) ));
                  this.jsonarray7.push( Number((data.resultList[0][this.productsegmentgraph[i][2]] * 100).toFixed(0) ));
                  this.jsonarray8.push( Number((data.resultList[0][this.productsegmentgraph[i][3]] * 100).toFixed(0) ));
                  this.jsonarray9.push( Number((data.resultList[0][this.productsegmentgraph[i][4]] * 100).toFixed(0) ));
              
                }
                this.productsegmentsharegraph.series = [
                  { "name": data.resultList[0].s57, "data": this.jsonarray6 },
                  { "name": data.resultList[0].t57, "data": this.jsonarray7 },
                  { "name": data.resultList[0].u57, "data": this.jsonarray8 },
                  { "name": data.resultList[0].v57, "data": this.jsonarray9 },
                ]
                console.log('productsegmentsharegraph',  this.productsegmentsharegraph.series)

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].salesTargetCM.salesTargetCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                // for (let i = 0; i < 4; i++) {
                //   this.jsonarray1.push({ 'x': data.resultList[0].salestargetCaseManagement[this.rigorchartsrange[i][0]], 'y': data.resultList[0][(this.rigorchartsrange[i][1])] * 100 });
                //   this.jsonarray2.push({ 'x': data.resultList[0].salestargetCaseManagement[this.rigorchartsrange[i][0]], 'y': (this.rigorchartsrange[i][2]) });
                //   this.jsonarray3.push({ 'x': data.resultList[0].salestargetCaseManagement[this.rigorchartsrange[i][0]], 'y': (this.rigorchartsrange[i][3]) });
                // }

                // for (let i = 0; i < 4; i++) {
                //   if ((i == 3) && (this.optional[1] == false)) {
                //   } else {
                //     this.jsonarray1.push({ 'x': this.cashbalfixedcostrange[i][0], 'y': this.result[i].toFixed(0) });
                //   }
                // }

                // for (let i = 0; i < 7; i++) {
                //   if (((i == 1) && (this.optional[0] == false)) ) {
                //   } else {
                //     this.jsonarray2.push({ 'x': this.operationalcostrange[i][0], 'y': this.result[i + 6].toFixed(0) });
                //   }
                // }

                // let j = 0;
                // for (let i = 0; i < 4; i++) {
                //   this.incomepercent[i] = this.incomestatementrange[i][0];
                //   if (Number(this.result[i + 16]) < 0) {
                //     this.incomepercentnames[i] = 0;
                //   } else {
                //     this.incomepercentnames[i] = Number(this.result[i + 16]);
                //   }
                // }
                // this.incomestatement.labels = this.incomepercent;
                // this.incomestatement.series = this.incomepercentnames;

                // this.cashbalfixedcost.series = [{ "name": "Value", "data": this.jsonarray1 },]
                // this.operationalcost.series = [{ "name": "Value", "data": this.jsonarray2 },]



                //this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]


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

  downloadreportsalestarget() {
    let apiname = '/salestarget/fetchsalestarget';
    this.excelsheetservice.downloadReportforgame(apiname, "salestarget", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

      //for testing purpose portfolio game
    // this.excelsheetservice.downloadReportforgame(apiname, "portfolio", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
    // this.studentelementdetailsvalue.coursedetailsid);

  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
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
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';

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

interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-innovationreport',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule],
  templateUrl: './innovationreport.component.html',
  styleUrls: ['./innovationreport.component.scss']
})
export class InnovationreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  projectsalesunitchart: pieChart;
  cashbalanceinrchart: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];

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
        //   data: [10, 20, 30, 80]
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

    this.projectsalesunitchart = {
      series: [
        // 3337, 526, 392
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
      labels: ['Basic Package','Standard Package','Premium Package'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 250,
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
        text: 'Projected Sales units, Year 3',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.cashbalanceinrchart = {
      series: [
        // {
        //   data: [22000, 15580, 0, 6420]
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
        categories: ['Beginning cash', 'Expenses','Cash infusion','Ending cash'],
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
        text: "Cash balance, k INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

  }
  resultcellname:string[]=[
    "j53","k53","j54","k54","j55","k55","j52","k52","o36","o37","o38","o39",//11
    "j36","k36","j38","k38","j39","k39","j40","k40","j41","k41","j42","k42","j43","k43","j44","k44","j45","k45",//29
    "c8","j4","j5","j15","j48","j49",
  ]
  projectsalesunitchartlabel:any=[];

  rigorchartsrange = [
    ['Rigor', 'x52', '76', '45'],
    ['Structuring', 'x53', '73', '47'],
    ['Synthesis', 'x54', '78', '43'],
    ['Business Judgement', 'x55', '81', '42'],
  ];
  projectsalesunitchartData =[
    ["Basic Package",'k53'],
    ["Standard Package",'k54'],
    ["Premium Package",'k55'],
  ];
  cashbalanceinrchartData =[
    ['Beginning cash','o36'],
    ['Expenses','o37'],
    ['Cash infusion','o38'],
    ['Ending cash','o39']
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
    let apiname = '/innovationgame/fetchinnovationgame';
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
            
              this.submitprove = data.resultList[0].ae89;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].innovationgamecmid);
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
                  const caseStatus = data.resultList[0].innovationGameCM.innovationGameCMActiveStatus[this.optionalcase[i]];
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

                
                // for piechart .... 
                for(let i=0; i<this.projectsalesunitchartData.length; i++){
                  this.projectsalesunitchartlabel[i] = this.projectsalesunitchartData[i][0];
                  this.jsonarray4[i] =(data.resultList[0][this.projectsalesunitchartData[i][1]]);
                }
                this.projectsalesunitchart.series=this.jsonarray4;
                this.projectsalesunitchart.labels=this.projectsalesunitchartlabel;
                
                // for bar graph ....
                
                for (let i = 0; i < this.cashbalanceinrchartData.length; i++) {
                  this.jsonarray5.push({ 'x':this.cashbalanceinrchartData[i][0], 'y': Number((data.resultList[0][this.cashbalanceinrchartData[i][1]])).toFixed(0) });

                }
                this.cashbalanceinrchart.series = [{ "name": '', "data": this.jsonarray5 },];

                // for (let i= 0; i <this.employeecountchartrange.length; i++){
                //   this.jsonarray5.push({'x':"", "y":data.resultList[0][this.employeecountchartrange[i][0]]});
                //   this.jsonarray6.push({'x':"", "y":Number(data.resultList[0][this.employeecountchartrange[i][1]]).toFixed(0)});
                //   this.jsonarray7.push({'x':"", "y":Number(data.resultList[0][this.employeecountchartrange[i][2]]).toFixed(0)});
                // }
                // this.employeecountchart.series =[{"name": "Planned Employee", "data":this.jsonarray5},
                // {"name": "Employee", "data":this.jsonarray6},{"name": "Contract", "data":this.jsonarray7},
                // ]

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
    let apiname = '/innovationgame/fetchinnovationgame';
    this.excelsheetservice.downloadReportforgame(apiname, "innovation", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);
  }

}

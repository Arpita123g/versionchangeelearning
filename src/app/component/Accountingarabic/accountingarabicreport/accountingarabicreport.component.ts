import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
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
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
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
  selector: 'app-accountingarabicreport',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule,MatIconModule],
  templateUrl: './accountingarabicreport.component.html',
  styleUrls: ['./accountingarabicreport.component.scss']
})
export class AccountingArabicreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  opportunitieschart: barChart;
  scoreschart: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  //it will be uncommited(Arpita)
  // optional: any[] = [];
  //getting success api call this line will be removed(Arpita)
  optional: any[] = [true,true,true,true];
  coursename: string = "";
  submitprove: string = "";
  optionalcase: any = ["balancesheetstatus", "incomestatementstatus", "cashflowstatus", "foodforthoughtstatus",];
  totalOptionalcase : boolean = true;

  rigorchartsrange = [
    ['Rigor', 'v29', '76', '45'],
    ['Structuring', 'w29', '73', '47'],
    ['Synthesis', 'x29', '78', '43'],
    ['Business Judgement', 'y29', '80', '42'],
  ];

  scoreschartrange =[
    ["Balance Sheet","k5"],
    ["Income Statement","k6"],
    ["Cash Flow Statement","k7"]
  ];

  opportunitieschartrange =[
    ["j25","l25","m25"],
    ["j26","l26","m26"],
    ["j27","l27","m27"]
  ];

  resultcellname :any =[
    "k5","k6","k7","l8","l28","m28","k25","l25","m25","k26","l26","m26","k27","l27","m27"
  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [
        {
          name: 'You',
          data: [5, 10, 20, 40],
        }
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

    this.scoreschart = {
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
          columnWidth: "20%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
      },
      xaxis: {
        categories: ['الميزانية العمومية', 'بيان الدخل', 'بيان التدفق النقدي'],
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
        text: "Scores",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.opportunitieschart = {
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
        categories: [['الاستثمار في', 'البحث والتطوير',], ['مقدمة لسلسلة', 'المنتجات المتميزة'],
          ['تحسين رأس', 'المال العامل']],
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
        text: "Opportunities, SAR",
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
    let apiname = '/accountingarabic/fetchaccountingarabic';
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
              this.submitprove = data.resultList[0].ag8;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].accountingarabiccmid);
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
                  const caseStatus = data.resultList[0].accountingArabicCM.accountingArabicCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }
                if((this.optional[0]==false) && (this.optional[1]==false) && (this.optional[2]==false)){
                  this.totalOptionalcase = false;
                }else{
                  this.totalOptionalcase = true;

                }
               
                // Rigorchar

                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0][(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]

                for (let i = 0; i < 3; i++) {
                  this.jsonarray4.push({ 'x':this.scoreschartrange[i][0], 'y': Number((data.resultList[0][this.scoreschartrange[i][1]])*100).toFixed(0) });
                  
                }
                this.scoreschart.series = [{ "name": 'value', "data": this.jsonarray4 }];


                for (let i= 0; i <this.opportunitieschartrange.length; i++){
                  this.jsonarray5.push({'x':"", "y":data.resultList[0][this.opportunitieschartrange[i][1]]});
                  this.jsonarray6.push({'x':"", "y":data.resultList[0][this.opportunitieschartrange[i][2]]});
                }
                this.opportunitieschart.series =[{"name": "إنشاء القيمة لمدة عام", "data":this.jsonarray5},
                {"name": "إنشاء القيمة لمدة 3 أعوام", "data":this.jsonarray6}
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


  downloadreportaccountingArabic() {
    let apiname = '/accountingarabic/fetchaccountingarabic';
    this.excelsheetservice.downloadReportforgame(apiname, "accountingarabic", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
        this.studentelementdetailsvalue.coursedetailsid);
  
  }

}

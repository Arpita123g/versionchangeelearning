import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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
  NgApexchartsModule,
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

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
  selector: 'app-consumerreport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],  
  templateUrl: './consumerreport.component.html',
  styleUrls: ['./consumerreport.component.scss']
})
export class ConsumerreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  marketpercent: barchart;
  marketpayinggraph = [
    ['Market Share', 'p30'],
    ['Paying Users', 'p31']
  ]

  radargraph = [
    ['ac80', 'ad80', '76%', '45%'],
    ['ac81', 'ad81', '73%', '47%'],
    ['ac82', 'ad82', '78%', '43%'],
    ['ac83', 'ad83', '81%', '42%'],
  ]

  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  result: any = [];
  resultcellname: any = ['w76', 'w77', 'w78', 'w79', 'y11', 'y12', 'y13', 'y14',
    'w80', 'y37', 'y38', 'y43', 'y44', 'y45', 'w50',
    'w52', 'y55', 'y56', 'y57', 'w64', 'w81', 'w70', 'w71', 'w72', 'w73', 'w74',
    'p22', 'p34', 'p27', 'p35']
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  optional: any[] = [true, true, true, true, true,];
  optionalcase = ["incomestatus", "situationalstatus", "socialstatus", "gamestatus", "foodforthoughtstatus"]

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [],
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

    this.marketpercent = {
      series: [],
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
          columnWidth: "50%",

        }

      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
      },

      xaxis: {

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
    this.getValues(this.noofattempt);
  }
  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getValues(attempt[1]);
  }

  // for backend
  getValues(attempt: string) {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = [];

    let apiname = '/consumerbehaviour/fetchconsumerbehaviour';
    this._api.consumerFetchData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].t76;
              if ((this.submitprove == "no") || (this.submitprove == "No")|| (this.submitprove == null)) {
                this.getValues(String(Number(this.noofattempt) - 1));
              } else {
                this._global.consumerbehaviourcmid.next(data.resultList[0].consumerbehaviourcmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;

                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0][this.resultcellname[i]]
                  if (this.result[i] == "") {
                    this.result[i] = "-";
                  }
                }

                for (let i = 0; i < 2; i++) {
                  this.jsonarray1.push({ 'x': this.marketpayinggraph[i][0], 'y': Number((data.resultList[0][this.marketpayinggraph[i][1]] * 100).toFixed(1)) });
                }
                for (let i = 0; i < 4; i++) {
                  this.jsonarray2.push({ 'x': data.resultList[0][this.radargraph[i][0]], 'y': Number(data.resultList[0][this.radargraph[i][1]] * 100).toFixed(0) + '%' });
                  this.jsonarray3.push({ 'x': data.resultList[0][this.radargraph[i][0]], 'y': (this.radargraph[i][2]) });
                  this.jsonarray4.push({ 'x': data.resultList[0][this.radargraph[i][0]], 'y': (this.radargraph[i][3]) });
                }
                this.marketpercent.series = [{ "name": "Value", "data": this.jsonarray1 },]
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray2 }, { "name": "90% Percentile", "data": this.jsonarray3 }, { "name": "Average", "data": this.jsonarray4 }]

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].consumerBehaviourCM.consumerBehaviourCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {
                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }
              }
            }
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }



  downloadreportconsumer() {
    let apiname = '/consumerbehaviour/fetchconsumerbehaviour';
    this.excelsheetservice.downloadReportforgame(apiname, "consumer", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename, this.studentelementdetailsvalue.coursedetailsid);
  }
}

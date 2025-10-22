import { Component } from '@angular/core';
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
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { ConsumerbehaviournewService } from 'src/app/service/sheet/consumerbehaviournew/consumerbehaviournew.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

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
  roundname: string = "";
  dropdownvalue: any = [];
  submitprove: string = "";
  result: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  optional: any[] = [true, true, true, true, true,];
  optionalcase = ["incomestatus", "situationalstatus", "socialstatus", "gamestatus", "foodforthoughtstatus"]
  language: any = [];

  marketpayinggraph = [
    ['b209', 'p30'],
    ['b380', 'p31']
  ]

  radargraph = [
    ['b212', 'ad80', '76', '45'],
    ['b213', 'ad81', '73', '47'],
    ['b214', 'ad82', '78', '43'],
    ['b215', 'ad83', '81', '42'],
  ]

  resultcellname: any = ['w76', 'w77', 'w78', 'w79', 'y11', 'y12', 'y13', 'y14',
    'w80', 'y37', 'y38', 'y43', 'y44', 'y45', 'w50',
    'w52', 'y55', 'y56', 'y57', 'w64', 'w81', 'w70', 'w71', 'w72', 'w73', 'w74',
    'p22', 'p34', 'p27', 'p35']


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, private excelsheetservice: ConsumerbehaviournewService) {
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
  // getValues(attempt: string) {
  //   this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = [];

  //   let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
  //   this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             this.submitprove = data.resultList[0].consumerbehaviournewdata.t76;
  //             if ((this.submitprove == "no") || (this.submitprove == "No") || (this.submitprove == null)) {
  //               this.getValues(String(Number(this.noofattempt) - 1));
  //             } else {
  //               this._global.consumerbehaviourcmid.next(data.resultList[0].consumerbehaviournewcmid);
  //               let attempt = data.resultList[0].attempt;

  //               this.language = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];
  //               console.log("language", this.language);
  //               this.roundname = this.language.b342 + " " + attempt;

  //               if (attempt > 0) {
  //                 for (let i = 1; i < attempt + 1; i++) {
  //                   this.dropdownvalue[i - 1] = this.language.b342 + " " + i;
  //                 }
  //               }
  //               for (let i = 0; i < this.resultcellname.length; i++) {
  //                 this.result[i] = data.resultList[0][this.resultcellname[i]]
  //                 if (this.result[i] == "") {
  //                   this.result[i] = "-";
  //                 }
  //               }

  //               this.rigorcharts = {
  //                 ...this.rigorcharts, // Retain existing config
  //                 xaxis: {
  //                   ...this.rigorcharts.xaxis,
  //                   categories: [
  //                     this.language.b212,
  //                     this.language.b213,
  //                     this.language.b214,
  //                     this.language.b215,
  //                   ]
  //                 },

  //               };

  //               this.marketpercent = {
  //                 ...this.marketpercent,
  //                 xaxis: {
  //                   categories: [
  //                     this.language.b209,
  //                     this.language.b210,
  //                   ]
  //                 },
  //               };

  //               for (let i = 0; i < 2; i++) {
  //                 this.jsonarray1.push({ 'x': this.language[this.marketpayinggraph[i][0]], 'y': Number((data.resultList[0].consumerbehaviournewdata[this.marketpayinggraph[i][1]] * 100).toFixed(1)) });
  //               }
  //               this.marketpercent.series = [{ "name": "", "data": this.jsonarray1 },]

  //               //rigor chart...
  //               for (let i = 0; i < 4; i++) {
  //                 this.jsonarray2.push({ 'x': this.language[this.radargraph[i][0]], 'y': Number(data.resultList[0].consumerbehaviournewdata[this.radargraph[i][1]] * 100).toFixed(0) + '%' });
  //                 this.jsonarray3.push({ 'x': this.language[this.radargraph[i][0]], 'y': Number(this.radargraph[i][2]) });
  //                 this.jsonarray4.push({ 'x': this.language[this.radargraph[i][0]], 'y': Number(this.radargraph[i][3]) });
  //               }
  //               this.rigorcharts.series = [{ "name": this.language.b339, "data": this.jsonarray2 }, { "name": this.language.b340, "data": this.jsonarray3 }, { "name": this.language.b341, "data": this.jsonarray4 }]


  //               for (let i = 0; i < this.optionalcase.length; i++) {
  //                 const caseStatus = data.resultList[0].consumerBehaviourNewCM.consumerBehaviournewCMActiveStatus[this.optionalcase[i]];
  //                 if (caseStatus == "inactive") {
  //                   this.optional[i] = false;
  //                 } else {
  //                   this.optional[i] = true;
  //                 }
  //               }
  //             }
  //           }
  //           this.checkloading = false;
  //         }
  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }

  getValues(attempt: string) {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = [];

    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this._api.fetchLanguageData(apiname, attempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].consumerbehaviournewdata.t76;
              if ((this.submitprove == "no") || (this.submitprove == "No") || (this.submitprove == null)) {
                this.getValues(String(Number(this.noofattempt) - 1));
              } else {
                this._global.consumerbehaviourcmid.next(data.resultList[0].consumerbehaviournewcmid);
                let attempt = data.resultList[0].attempt;

                this.language = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];
                console.log("language", this.language);
                // this.roundname = this.language.b342 + " " + attempt;
                this.roundname = this.languageselect.toLowerCase() === 'french' ? "Ronde" + " " + attempt : "Round" + " " + attempt;


                // if (attempt > 0) {
                //   for (let i = 1; i < attempt + 1; i++) {
                //     this.dropdownvalue[i - 1] = this.language.b342 + " " + i;
                //   }
                // }
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = this.languageselect.toLowerCase() === 'french' ? "Ronde" + " " + i : "Round" + " " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0].consumerbehaviournewdata[this.resultcellname[i]]
                  if (this.result[i] == "") {
                    this.result[i] = "-";
                  }
                }

                this.rigorcharts = {
                  ...this.rigorcharts, // Retain existing config
                  xaxis: {
                    ...this.rigorcharts.xaxis,
                    categories: [
                      this.language.b212,
                      this.language.b213,
                      this.language.b214,
                      this.language.b215,
                    ]
                  },

                };

                this.marketpercent = {
                  ...this.marketpercent,
                  xaxis: {
                    ...this.marketpercent.xaxis,
                    categories: [
                      this.language.b209,
                      this.language.b380,
                    ]
                  },
                };

                for (let i = 0; i < 2; i++) {
                  this.jsonarray1.push({ 'x': this.language[this.marketpayinggraph[i][0]], 'y': Number((data.resultList[0].consumerbehaviournewdata[this.marketpayinggraph[i][1]] * 100).toFixed(1)) });
                }
                this.marketpercent.series = [{ "name": "", "data": this.jsonarray1 },]

                //rigor chart...
                for (let i = 0; i < 4; i++) {
                  this.jsonarray2.push({ 'x': this.language[this.radargraph[i][0]], 'y': Number(data.resultList[0].consumerbehaviournewdata[this.radargraph[i][1]] * 100).toFixed(0) + '%' });
                  this.jsonarray3.push({ 'x': this.language[this.radargraph[i][0]], 'y': Number(this.radargraph[i][2]) });
                  this.jsonarray4.push({ 'x': this.language[this.radargraph[i][0]], 'y': Number([this.radargraph[i][3]]) });
                }
                this.rigorcharts.series = [{ "name": this.language.b339, "data": this.jsonarray2 }, { "name": this.language.b340, "data": this.jsonarray3 }, { "name": this.language.b341, "data": this.jsonarray4 }]


                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus[this.optionalcase[i]];
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
    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this.excelsheetservice.downloadReportforConsumer(apiname, "consumerbehaviournew", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      // this.studentelementdetailsvalue.coursedetailsid);
      this.studentelementdetailsvalue.coursedetailsid, this.languageselect);



  }
}

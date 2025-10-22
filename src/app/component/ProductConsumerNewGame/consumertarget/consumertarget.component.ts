import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis, ApexYAxis,
  NgApexchartsModule,
} from "ng-apexcharts";
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FoodforthoughtConsumerComponent } from '../foodforthoughtconsumer/foodforthoughtconsumer.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { MatDialogModule } from '@angular/material/dialog';

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

interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle,
  tooltip: ApexTooltip;
  // colors: Apex;

}

@Component({
  selector: 'app-consumertarget',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective,MatDialogModule],
  templateUrl: './consumertarget.component.html',
  styleUrls: ['./consumertarget.component.scss']
})
export class ConsumertargetComponent extends AbstractComponent {
  foodforthought: boolean = true;
  totalpopulation: barchart;
  gamerpopulation: barchart;
  populationdivision: barchart;
  // languageselect: pieChart;
  percentagepopulation: barchart;
  languagespeaking: pieChart;
  result: any = [];
  showTargetIncome: boolean = true;
  checkdisable: boolean = false;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  disabled: boolean[] = [];
  languagecheckbox: number = 0;
  textshow: { [key: string]: boolean } = {};
  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }
  metrovalue: string = '';
  gendervalue: string = '';
  nccsvalue: string = '';
  languagename: any = [];
  languagevalue: any = [];
  chartColors = this.generateColors(12);
  language: any = [];
  languagedata: string = "";
  languageid: number = 0;

  totalpopulationgraph = [
    ['b329', 'k116'],
    ['b303', 'k117'],//period data
    ['b304', 'k118'],
    ['b305', 'k119'],
    ['b300', 'k120']
  ]
  gamerspopulationgraph = [
    ['b63', 'k124'],//period data
    ['b64', 'l124']
  ]
  populationdivisiongraph = [

    ['b329', 'k128', 'l128'],//period data
    ['b303', 'k129', 'l129'],
    ['b304', 'k130', 'l130'],
    ['b305', 'k131', 'l131'],
    ['b300', 'k132', 'l132']
  ]
  languagespeakingpopulationgraph = [
    ['b67', 'k136'],//period data
    ['b68', 'k137'],
    ['b69', 'k138'],
    ['b70', 'k139'],
    ['b71', 'k140'],
    ['b72', 'k141'],
    ['b73', 'k142'],
    ['b74', 'k143'],
    ['b75', 'k144'],
    ['b76', 'k145'],
    ['b77', 'k146'],
    ['b78', 'k147'],
  ]

  percentofpopulationgraph = [
    // ['c18', 'd18'],//period data
    ['b80', 'k151'],
    ['b81', 'k152'],
    ['b82', 'k153'],
  ]
  totalpopulatioinputfield = ['w6', 'w7', 'w8', 'x6', 'x7', 'x8', 'y6',
    'y7', 'y8', 'w11', 'w12', 'w13', 'w14', 'w15', 'w16', 'w17', 'w18',
    'w19', 'w20', 'w21', 'w22', 'w25', 'w26', 'w27'];

  // languageDataTarget: string[] = ['b63', 'b64', 'b302', 'b30', 'b31', 'b302', 'b80', 'b81', 'b82'];
  // languageDataStore: string[] = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.totalpopulation = {
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
        // categories: ['0-14yrs', '15-19yrs', '20-24yrs', '25-34yrs', '35+yrs'],
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
        // text: "Age Distribution of Gamers",
        // // text:this.language.b60,
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.gamerpopulation = {
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
          columnWidth: '50%',

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
      },
      xaxis: {
        // categories: ['Metro', 'Non Metro'],
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
        // text: "Gamers Population",
        // // text:this.language.b61,
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.populationdivision = {
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
        // categories: ['0-14yrs', '15-19yrs', '20-24yrs', '25-34yrs', '35+yrs'],
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
        // text: "Population Division",
        // // text:this.language.b62,

        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.percentagepopulation = {
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
      plotOptions: this.plotoption[5],
      dataLabels: {
        enabled: false,
        // formatter: function (val) {
        //   return val + "";
        // },
      },
      xaxis: this.xaxis[0],
      fill: {
        type: 'solid',
      },

      yaxis: this.yaxis[1],
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
        // text: "% of Population",
        // // text:this.language.b83,

        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };


    this.languagespeaking = {
      series: this.languagename,
      labels: this.languagevalue,
      chart: {
        width: 450,
        height: 300,
        type: "pie",
      },
      title: {
        text: this.language?.b66 || "% Language Speaking Population",
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
      },
      tooltip: {
        y: { title: { formatter: () => '' } },
        x: { show: false }
      },
      responsive: [
        {
          breakpoint: 430,
          options: {
            chart: { width: 200 },
            legend: { position: "bottom" },
            title: {
              text: this.language?.b66 || "Language Speaking",
              align: "center",
              style: {
                fontWeight: "bold",
                fontSize: "12px",
              }
            }
          }
        }
      ]
    };

    // this.languagespeaking = {
    //   series: [],
    //   chart: {
    //     width: 450,
    //     type: "pie",
    //     height: 300,
    //   },
    //   labels: [],
    //   legend: {
    //     position: 'bottom',
    //     horizontalAlign: 'center',
    //     // itemMargin: {
    //     //   horizontal: 20,
    //     //   vertical: 2,
    //     // },
    //   },
    //   // colors: this.chartColors,

    //   tooltip: {
    //     y: {
    //       title: {
    //         formatter: (seriesName: any) => '',
    //       },
    //     },
    //     x: {
    //       show: false
    //     }
    //   },
    //   responsive: [
    //     {
    //       breakpoint: 430,
    //       options: {
    //         chart: {
    //           width: 200
    //         },
    //         legend: {
    //           position: "bottom",
    //           // itemMargin: {
    //           //   horizontal: 20,
    //           //   vertical: 2,
    //           // },
    //         },
    //         title: {
    //           // text: this.language.b66,

    //           // offsetY: 0,
    //           // align: "center",
    //           // style: {
    //           //   fontWeight: "bold",
    //           //   fontSize: "10px",
    //           // }
    //         },
    //       }
    //     },

    //   ],
    //   title: {
    //     //   text: "% Language Speaking Population",
    //     //   // text:this.language.b66,
    //     //   offsetY: 0,
    //     //   align: "center",
    //     //   style: {
    //     //     fontWeight: "bold",
    //     //     fontSize: "20px",
    //     //   }
    //   },
    // };

    // this.languagespeaking = {
    //   series: [],

    //   chart: {
    //     width: 400,
    //     type: "pie",
    //     height: 500,
    //   },
    //   labels: [],

    //   legend: {
    //     position: 'right',

    //   },
    //   colors: this.chartColors,
    //   tooltip: {
    //     y: {
    //       formatter: undefined,
    //       title: {
    //         formatter: (seriesName: any) => '',
    //       },
    //     },
    //     x: {
    //       show: false
    //     }
    //   },
    //   responsive: [
    //     {
    //       breakpoint: 400,
    //       options: {
    //         chart: {
    //           width: 200
    //         },
    //         legend: {
    //           position: "bottom"
    //         }
    //       }
    //     }
    //   ],
    //   title: {
    //     text: "% Language Speaking Population",
    //     offsetY: 0,
    //     align: "center",
    //     style: {
    //       fontWeight: "bold",
    //     }
    //   }
    // };
  }

  cardData1 = [
    { id: 'card1', index: 21, title: 'b80', description: 'b84' },
    { id: 'card2', index: 22, title: 'b81', description: 'b85' },
    { id: 'card3', index: 23, title: 'b82', description: 'b86' }
  ];




  override ngOnInit(): void {
    console.log("target page opens")
    // this.chartColors = this.generateColors(12);
    this.getFetchData();
  }

  // for backend
  getFetchData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
    this.languagename = []; this.languagevalue = [];
    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].consumerbehaviournewcmid);
              this.languageid = data.resultList[0].consumerBehaviourNewLM.consumerbehaviournewlmid;

              if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.language = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];

              for (let i = 0; i < this.totalpopulatioinputfield.length; i++) {
                let value = data.resultList[0].consumerbehaviournewdata[this.totalpopulatioinputfield[i]];
                if (this.languageselect.toLowerCase() === 'french') {
                  if (value === 'Oui') {
                    this.result[i] = 'Yes';
                  } else if (value === 'Non') {
                    this.result[i] = 'No';
                  } else if (value === 'Zones métropolitaines') {
                    this.result[i] = 'Metro';
                  } else if (value === 'Zones non-métropolitaines') {
                    this.result[i] = 'Non Metro';
                  } else if (value === 'Les deux') {
                    this.result[i] = 'Both';
                  } else if (value === 'Hommes') {
                    this.result[i] = 'Male';
                  } else if (value === 'Femmes') {
                    this.result[i] = 'Female';
                  } else {
                    this.result[i] = value;
                  }
                } else {
                  this.result[i] = value;
                }
              }

              // for (let i = 0; i < this.languageDataTarget.length; i++) {
              //   this.languageDataStore[i] = data.resultList[0].consumerBehaviourNewLM[this.languageDataTarget[i]]
              // }
              // for (let i = 3; i < 9; i++) {
              //   if (this.result[i] != "") {
              //     this.result[i] = 'yes';
              //   }
              // }

              // for (let i = 3; i < 6; i++) {
              //   if ((this.result[i] == "Metro") || (this.result[i] == "Non Metro") || (this.result[i] == "Both")) {
              //     this.metrovalue = this.result[i];
              //   }
              // }
              // for (let i = 0; i < 3; i++) {
              //   if ((this.languageDataStore[i] == "Metro") || (this.languageDataStore[i] == "Non Metro") || (this.languageDataStore[i] == "Both")) {
              //     this.metrovalue = this.languageDataStore[i];
              //   }
              // }
              // for (let i = 3; i < 7; i++) {
              //   if ((this.languageDataStore[i] == "Male") || (this.languageDataStore[i] == "Female") || (this.languageDataStore[i] == "Both")) {
              //     this.gendervalue = this.languageDataStore[i];
              //   }
              // }
              for (let i = 3; i < 6; i++) {
                if ((this.result[i] == "Metro") || (this.result[i] == "Non Metro") || (this.result[i] == "Both")) {
                  this.metrovalue = this.result[i];
                }
              }
              for (let i = 6; i < 9; i++) {
                if ((this.result[i] == "Male") || (this.result[i] == "Female") || (this.result[i] == "Both")) {
                  this.gendervalue = this.result[i];
                }
              }
              // for (let i = 21; i < 24; i++) {
              //   if (this.result[i]=="NCCS A" ||this.result[i]=="NCCS B"|| this.result[i]=="NCCS C/D/E" ) {
              //     this.nccsvalue = this.result[i];
              //   }
              // }
              // for (let i = 7; i < 10; i++) {
              //   if (this.languageDataStore[i]=="NCCS A" ||this.languageDataStore[i]=="NCCS B"|| this.languageDataStore[i]=="NCCS C/D/E" ) {
              //     this.nccsvalue = this.languageDataStore[i];
              //   }
              // }
              for (let i = 9; i < 21; i++) {
                if (this.result[i] === 'Yes' || this.result[i] === 'Oui') {
                  this.result[i] = true;
                  this.languagecheckbox = this.languagecheckbox + 1;
                } else {
                  this.result[i] = false;
                }
              }
              if (this.languagecheckbox == 4) {
                for (let j = 9; j < 21; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 9] = false;
                  } else {
                    this.disabled[j - 9] = true;
                  }
                }

              }

              // for (let i = 0; i < this.cardData1.length; i++) {
              //   this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              // }

              if (((data.resultList[0].consumerbehaviournewdata.t76) === 'yes') || (this.timefinished)) {
                this.checkdisable = true;
                for (let i = 0; i < 12; i++) {
                  this.disabled[i] = true;
                }
              }
              if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.incomestatus == "active") {
                this.showTargetIncome = true;
              } else {
                this.showTargetIncome = false;
              }

              this.totalpopulation = {
                ...this.totalpopulation,
                xaxis: {
                  ...this.totalpopulation.xaxis,
                  categories: [
                    this.language.b329,
                    this.language.b303,
                    this.language.b304,
                    this.language.b305,
                    this.language.b300
                  ]
                },
                title: {
                  text: this.language.b62,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              this.gamerpopulation = {
                ...this.gamerpopulation,
                xaxis: {
                  ...this.gamerpopulation.xaxis,
                  categories: [
                    this.language.b63,
                    this.language.b64,
                  ]
                },
                title: {
                  text: this.language.b61,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              this.populationdivision = {
                ...this.populationdivision,
                xaxis: {
                  ...this.populationdivision.xaxis,
                  categories: [
                    this.language.b329,
                    this.language.b303,
                    this.language.b304,
                    this.language.b305,
                    this.language.b300
                  ]
                },
                title: {
                  text: this.language.b62,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              this.percentagepopulation = {
                ...this.percentagepopulation,
                xaxis: {
                  ...this.percentagepopulation.xaxis,
                  categories: [
                    this.language.b80,
                    this.language.b81,
                    this.language.b82,

                  ]
                },
                title: {
                  text: this.language.b83,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              for (let i = 0; i < 5; i++) {
                this.jsonarray1.push({
                  'x': this.language[this.totalpopulationgraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.totalpopulationgraph[i][1]] * 100).toFixed(2)
                });
              }
              for (let i = 0; i < 2; i++) {
                this.jsonarray2.push({ 'x': this.language[this.gamerspopulationgraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.gamerspopulationgraph[i][1]]) * 100 });
              }
              for (let i = 0; i < 5; i++) {
                this.jsonarray3.push({ 'x': this.language[this.populationdivisiongraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.populationdivisiongraph[i][1]] * 100).toFixed(2) });
                this.jsonarray4.push({ 'x': this.language[this.populationdivisiongraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.populationdivisiongraph[i][2]] * 100).toFixed(2) });
              }

              for (let i = 0; i < 12; i++) {
                this.languagevalue[i] = this.language[this.languagespeakingpopulationgraph[i][0]];
                this.languagename[i] = Number((Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.languagespeakingpopulationgraph[i][1]]) * 100).toFixed(0));
              }
              console.log("lan", this.languagename)
              for (let i = 0; i < 3; i++) {
                this.jsonarray5.push({ 'x': this.language[this.percentofpopulationgraph[i][0]], 'y': Number((data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.percentofpopulationgraph[i][1]] * 100).toFixed(0)) });
              }
              this.totalpopulation.series = [{ "name": this.language.b60, "data": this.jsonarray1 }]
              this.gamerpopulation.series = [{ "name": this.language.b61, "data": this.jsonarray2 }]
              this.populationdivision.series = [{ "name": this.language.b30, "data": this.jsonarray3 },
              { "name": this.language.b31, "data": this.jsonarray4 }]

              this.languagespeaking.series = this.languagename;
              this.languagespeaking.labels = this.languagevalue;

              console.log("languagelength", this.languagespeaking)
              // this.chartColors = this.generateColors(languagevalue.length);

              console.log("chartcolor", this.chartColors);

              this.percentagepopulation.series = [{ "name": this.language.b83, "data": this.jsonarray5 }]
              this.languagedata = "entry";
              this.checkloading = false;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })

  }



  getSelection(type: string, inputField: string, index: number) {
    if (inputField == 'target') {
      this.result[index] = 'Yes';

      for (let i = 0; i < 3; i++) {
        if (i !== index) {
          this.result[i] = 'No';
        }
      }
    } else if (type == "metro") {
      this.metrovalue = inputField;

    } else if (type == "gender") {
      this.gendervalue = inputField;
    }

    else if (inputField == 'language') {
      if (this.result[index] == true) {
        this.languagecheckbox = this.languagecheckbox + 1;
        if (this.languagecheckbox == 4) {
          for (let j = 9; j < 21; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 9] = false;
            } else {
              this.disabled[j - 9] = true;
            }
          }

        }
      } else {
        this.languagecheckbox = this.languagecheckbox - 1;
        if (this.languagecheckbox == 3) {
          for (let j = 0; j < 12; j++) {
            this.disabled[j] = false;
          }
        }
      }

    } else if (inputField == 'nccs') {
      if (inputField == 'nccs') {
        this.result[index] = 'Yes';

        for (let i = 21; i < 24; i++) {
          if (i !== index) {
            this.result[i] = 'No';
          }
        }

      }
    }

    if (this.result[0] == 'Yes') {
      this.result[3] = this.metrovalue;
      this.result[4] = "";
      this.result[5] = "";
      this.result[6] = this.gendervalue;
      this.result[7] = "";
      this.result[8] = "";
    } else if (this.result[1] == 'Yes') {
      this.result[3] = "";
      this.result[4] = this.metrovalue;
      this.result[5] = "";
      this.result[6] = "";
      this.result[7] = this.gendervalue;
      this.result[8] = "";

    } else if (this.result[2] == 'Yes') {
      this.result[3] = "";
      this.result[4] = ""
      this.result[5] = this.metrovalue;
      this.result[6] = "";
      this.result[7] = "";
      this.result[8] = this.gendervalue;
    }

    this.writedemand();
  }

  writedemand() {
    let apiname = '/consumerbehaviournew/singleinputconsumerbehaviournew';
    let targetData: any;
    if (this.languageselect.toLowerCase() == 'french') {
      targetData = {
        "w6": this.result[0] === 'Yes' ? 'Oui' : 'Non',
        "w7": this.result[1] === 'Yes' ? 'Oui' : 'Non',
        "w8": this.result[2] === 'Yes' ? 'Oui' : 'Non',
        "x6": this.result[3] === 'Metro' ? 'Zones métropolitaines' : this.result[3] === 'Non Metro' ? 'Zones non-métropolitaines' : this.result[3] === 'Both' ? 'Les deux' : this.result[3],
        "x7": this.result[4] === 'Metro' ? 'Zones métropolitaines' : this.result[4] === 'Non Metro' ? 'Zones non-métropolitaines' : this.result[4] === 'Both' ? 'Les deux' : this.result[4],
        "x8": this.result[5] === 'Metro' ? 'Zones métropolitaines' : this.result[5] === 'Non Metro' ? 'Zones non-métropolitaines' : this.result[5] === 'Both' ? 'Les deux' : this.result[5],
        "y6": this.result[6] === 'Male' ? 'Hommes' : this.result[6] === 'Female' ? 'Femmes' : this.result[6] === 'Both' ? 'Les deux' : this.result[6],
        "y7": this.result[7] === 'Male' ? 'Hommes' : this.result[7] === 'Female' ? 'Femmes' : this.result[7] === 'Both' ? 'Les deux' : this.result[7],
        "y8": this.result[8] === 'Male' ? 'Hommes' : this.result[8] === 'Female' ? 'Femmes' : this.result[8] === 'Both' ? 'Les deux' : this.result[8],
        "w11": this.result[9] === true ? 'Oui' : 'Non',
        "w12": this.result[10] === true ? 'Oui' : 'Non',
        "w13": this.result[11] === true ? 'Oui' : 'Non',
        "w14": this.result[12] === true ? 'Oui' : 'Non',
        "w15": this.result[13] === true ? 'Oui' : 'Non',
        "w16": this.result[14] === true ? 'Oui' : 'Non',
        "w17": this.result[15] === true ? 'Oui' : 'Non',
        "w18": this.result[16] === true ? 'Oui' : 'Non',
        "w19": this.result[17] === true ? 'Oui' : 'Non',
        "w20": this.result[18] === true ? 'Oui' : 'Non',
        "w21": this.result[19] === true ? 'Oui' : 'Non',
        "w22": this.result[20] === true ? 'Oui' : 'Non',
        "w25": this.result[21],
        "w26": this.result[22],
        "w27": this.result[23]
      };
    } else {
      targetData = {
        "w6": this.result[0],
        "w7": this.result[1],
        "w8": this.result[2],
        "x6": this.result[3],
        "x7": this.result[4],
        "x8": this.result[5],
        "y6": this.result[6],
        "y7": this.result[7],
        "y8": this.result[8],
        "w11": this.result[9] === true ? 'Yes' : 'No',
        "w12": this.result[10] === true ? 'Yes' : 'No',
        "w13": this.result[11] === true ? 'Yes' : 'No',
        "w14": this.result[12] === true ? 'Yes' : 'No',
        "w15": this.result[13] === true ? 'Yes' : 'No',
        "w16": this.result[14] === true ? 'Yes' : 'No',
        "w17": this.result[15] === true ? 'Yes' : 'No',
        "w18": this.result[16] === true ? 'Yes' : 'No',
        "w19": this.result[17] === true ? 'Yes' : 'No',
        "w20": this.result[18] === true ? 'Yes' : 'No',
        "w21": this.result[19] === true ? 'Yes' : 'No',
        "w22": this.result[20] === true ? 'Yes' : 'No',
        "w25": this.result[21],
        "w26": this.result[22],
        "w27": this.result[23]
      };
    }
    console.log('con', targetData);

    this._api.writeLanguageData("consumerbehaviournew", 2,
      targetData, apiname, 'consumerbehaviournewcmid', this.languageselect, this.languageid, 'consumerbehaviournewlmid').subscribe((data: any) => {
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      });
  }
  openDialog(): void {
    this.dialog.open(FoodforthoughtConsumerComponent, {
      data: {},
    });
  }
}




import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis, ApexYAxis,
} from "ng-apexcharts";
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FoodforthoughtConsumerComponent } from '../foodforthoughtconsumer/foodforthoughtconsumer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

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
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
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
  totalpopulationgraph = [
    ['j116', 'k116'],
    ['j117', 'k117'],//period data
    ['j118', 'k118'],
    ['j119', 'k119'],
    ['j120', 'k120']
  ]
  gamerspopulationgraph = [
    ['k123', 'k124'],//period data
    ['l123', 'l124']
  ]
  populationdivisiongraph = [

    ['j128', 'k128', 'l128'],//period data
    ['j129', 'k129', 'l129'],
    ['j130', 'k130', 'l130'],
    ['j131', 'k131', 'l131'],
    ['j132', 'k132', 'l132']
  ]
  languagespeakingpopulationgraph = [
    ['j136', 'k136'],//period data
    ['j137', 'k137'],
    ['j138', 'k138'],
    ['j139', 'k139'],
    ['j140', 'k140'],
    ['j141', 'k141'],
    ['j142', 'k142'],
    ['j143', 'k143'],
    ['j144', 'k144'],
    ['j145', 'k145'],
    ['j146', 'k146'],
    ['j147', 'k147'],
  ]

  percentofpopulationgraph = [
    // ['c18', 'd18'],//period data
    ['j151', 'k151'],
    ['j152', 'k152'],
    ['j153', 'k153'],
  ]
  totalpopulatioinputfield = ['w6', 'w7', 'w8', 'x6', 'x7', 'x8', 'y6',
    'y7', 'y8', 'w11', 'w12', 'w13', 'w14', 'w15', 'w16', 'w17', 'w18',
    'w19', 'w20', 'w21', 'w22', 'w25', 'w26', 'w27']
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
  cardData1 = [
    {
      id: 'card1',
      title: 'NCCS A',
      description:
        "The top-tier segment represents affluent urban consumers. Households in this category tend to own a wider range of luxury and premium products and have higher disposable incomes. They possess multiple consumer durables like air conditioners, cars, and high-end appliances. The probability of in-app purchases and paying upfront for the game is high in this segment.",
      turncatedtext: ""
    },
    {
      id: 'card2',
      title: 'NCCS B',
      description: "Representing the upper-middle class, these consumers have a reasonable disposable income, allowing them to own a good range of consumer durables. However, their ownership of luxury goods might be more limited than NCCS A households. They might have products like washing machines, two-wheelers, or refrigerators. The segment is value-conscious and will only pay if the perceived value is higher.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'NCCS C/D/E',
      description: "These segments can be broadly understood as the lower-income classes. They have limited disposable income and own fewer consumer durables.  Households in these segments might only own basic appliances, like fans or televisions. They would prefer the free games and can spend more time on apps.",
      turncatedtext: "",
    },
  ];
  languagedata: string = "";
  // chartColors:any = []

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
        text: "Age Distribution of Gamers",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
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
        text: "Gamers Population",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
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
        text: "Population Division",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
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
        text: "% of Population",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
    this.languagespeaking = {
      series: [],
      chart: {
        width: 450,
        type: "pie",
        height: 300,
      },
      labels: [],
      legend: {
        position: 'bottom',
        horizontalAlign:'center',
        // itemMargin: {
        //   horizontal: 20,
        //   vertical: 2,
        // },
      },
      // colors: this.chartColors,

      tooltip: {
        y: {
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false
        }
      },
      responsive: [
        {
          breakpoint: 430,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom",
              // itemMargin: {
              //   horizontal: 20,
              //   vertical: 2,
              // },
            },
            title: {
              text: "% Language Speaking Population",
              offsetY: 0,
              align: "center",
              style: {
                fontWeight: "bold",
                fontSize: "10px",
              }
            },
          }
        },
        
      ],
      title: {
        text: "% Language Speaking Population",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "20px",
        }
      },
    };

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




  override ngOnInit(): void {
   this.getFetchData();
  }

  // for backend
  getFetchData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
    this.languagename = []; this.languagevalue = [];
    let apiname = '/consumerbehaviour/fetchconsumerbehaviour';
    this._api.consumerFetchData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].consumerbehaviourcmid);
              if (data.resultList[0].consumerBehaviourCM.consumerBehaviourCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.totalpopulatioinputfield.length; i++) {
                this.result[i] = data.resultList[0][this.totalpopulatioinputfield[i]]
              }
              // for (let i = 3; i < 9; i++) {
              //   if (this.result[i] != "") {
              //     this.result[i] = 'yes';
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
              for (let i = 9; i < 21; i++) {
                if (this.result[i] == "Yes") {
                  this.result[i] = true;
                  this.languagecheckbox = this.languagecheckbox + 1

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

              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              }

              if ((data.resultList[0].t76 == 'Yes') || (data.resultList[0].t76 == 'yes') || (this.timefinished)) {
                this.checkdisable = true;
                for (let i = 0; i < 12; i++) {
                  this.disabled[i] = true;
                }
              }
              if (data.resultList[0].consumerBehaviourCM.consumerBehaviourCMActiveStatus.incomestatus == "active") {
                this.showTargetIncome = true;
              } else {
                this.showTargetIncome = false;
              }
              for (let i = 0; i < 5; i++) {
                this.jsonarray1.push({
                  'x': data.resultList[0].consumerBehaviourCM[this.
                    totalpopulationgraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourCM[this.totalpopulationgraph[i][1]] * 100).toFixed(2)
                });
              }
              for (let i = 0; i < 2; i++) {
                this.jsonarray2.push({ 'x': data.resultList[0].consumerBehaviourCM[this.gamerspopulationgraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourCM[this.gamerspopulationgraph[i][1]]) * 100 });
              }
              for (let i = 0; i < 5; i++) {
                this.jsonarray3.push({ 'x': data.resultList[0].consumerBehaviourCM[this.populationdivisiongraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourCM[this.populationdivisiongraph[i][1]] * 100).toFixed(2) });
                this.jsonarray4.push({ 'x': data.resultList[0].consumerBehaviourCM[this.populationdivisiongraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourCM[this.populationdivisiongraph[i][2]] * 100).toFixed(2) });
              }

              for (let i = 0; i < 12; i++) {
                this.languagevalue[i] = data.resultList[0].consumerBehaviourCM[this.languagespeakingpopulationgraph[i][0]];
                this.languagename[i] = Number((Number(data.resultList[0].consumerBehaviourCM[this.languagespeakingpopulationgraph[i][1]]) * 100).toFixed(0));
              }
             
              for (let i = 0; i < 3; i++) {
                this.jsonarray5.push({ 'x': data.resultList[0].consumerBehaviourCM[this.percentofpopulationgraph[i][0]], 'y': Number((data.resultList[0].consumerBehaviourCM[this.percentofpopulationgraph[i][1]] * 100).toFixed(0)) });
              }
              this.totalpopulation.series = [{ "name": data.resultList[0].consumerBehaviourCM.k115, "data": this.jsonarray1 }]
              this.gamerpopulation.series = [{ "name": data.resultList[0].consumerBehaviourCM.j124, "data": this.jsonarray2 }]
              this.populationdivision.series = [{ "name": data.resultList[0].consumerBehaviourCM.k127, "data": this.jsonarray3 },
              { "name": data.resultList[0].consumerBehaviourCM.l127, "data": this.jsonarray4 }]

              this.languagespeaking.series = this.languagename;
              this.languagespeaking.labels = this.languagevalue;

             

              this.percentagepopulation.series = [{ "name": data.resultList[0].consumerBehaviourCM.k150, "data": this.jsonarray5 }]
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
    let apiname = '/consumerbehaviour/singleinputconsumerbehaviour';

    let targetData = {
      "w6": this.result[0],
      "w7": this.result[1],
      "w8": this.result[2],
      "x6": this.result[3],
      "x7": this.result[4],
      "x8": this.result[5],
      "y6": this.result[6],
      "y7": this.result[7],
      "y8": this.result[8],
      "w11": this.result[9] == true ? 'Yes' : 'No',
      "w12": this.result[10] == true ? 'Yes' : 'No',
      "w13": this.result[11] == true ? 'Yes' : 'No',
      "w14": this.result[12] == true ? 'Yes' : 'No',
      "w15": this.result[13] == true ? 'Yes' : 'No',
      "w16": this.result[14] == true ? 'Yes' : 'No',
      "w17": this.result[15] == true ? 'Yes' : 'No',
      "w18": this.result[16] == true ? 'Yes' : 'No',
      "w19": this.result[17] == true ? 'Yes' : 'No',
      "w20": this.result[18] == true ? 'Yes' : 'No',
      "w21": this.result[19] == true ? 'Yes' : 'No',
      "w22": this.result[20] == true ? 'Yes' : 'No',
      "w25": this.result[21],
      "w26": this.result[22],
      "w27": this.result[23]

    }
  
    this._api.consumerDataWrite("consumerbehaviour", 2,
      targetData, apiname, 'consumerbehaviourcmid').subscribe((data: any) => {

      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }
  openDialog(): void {
    this.dialog.open(FoodforthoughtConsumerComponent, {
      data: {},
    });
  }
}




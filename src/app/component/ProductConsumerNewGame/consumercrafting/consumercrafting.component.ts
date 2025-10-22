import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, NgApexchartsModule } from "ng-apexcharts";
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

export type barchart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;

};
export type piechart = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  title: ApexTitleSubtitle;

};

@Component({
  selector: 'app-consumercrafting',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './consumercrafting.component.html',
  styleUrls: ['./consumercrafting.component.scss']
})
export class ConsumercraftingComponent extends AbstractComponent {
  foodforthought: boolean = true;
  showIngameAdvertising: boolean = true;
  language: any = [];
  Gamingtriggers: barchart;
  Discoveringchannel: barchart;
  Userspreference: piechart;
  playerreaction: barchart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  selectedIndex: number = 0;
  result: any = [];
  checkdisable: boolean = false;
  channelmixcheckbox: number = 0;
  ingamecheckbox: number = 0;
  disabled: boolean[] = [];
  textshow: { [key: string]: boolean } = {};
  languageid: number = 0;
  imgarrey: any = [];
  channelmixarrey: any = [];
  gamingtriggers = [
    ['b136', 'ab97'],
    ['b137', 'ab98'],
    ['b138', 'ab99'],
    ['b139', 'ab100'],
    ['b140', 'ab101'],
    ['b141', 'ab102'],

  ]

  publishing = [
    ['b313', 'ab127'],
    ['b156', 'ab128'],
    ['b314', 'ab129'],
    ['b315', 'ab130'],
    ['b316', 'ab131'],
    ['b317', 'ab132'],

  ]

  monetization = [
    ['b172', 'ab142'],
    ['b173', 'ab143'],
    ['b174', 'ab144'],

  ]

  ingameadvertising = [
    ['b172', 'ab156', 'ab157', 'ab158'],
    ['b173', 'ac156', 'ac157', 'ac158'],
    ['b174', 'ad156', 'ad157', 'ad158'],

  ]


  totalcraftinginputfield = ['w52', 'w55', 'w56', 'w59', 'w60', 'w57', 'w58', 'w61', 'w62', 'w64', 'w66', 'w67', 'w68', 'w70', 'w71', 'w72', 'w73', 'w74']

  cardData1 = [
    { id: 'id1', title: 'b136', description: 'b142', turncatedtext: '' },
    { id: 'id2', title: 'b137', description: 'b143', turncatedtext: '' },
    { id: 'id3', title: 'b138', description: 'b144', turncatedtext: '' },
    { id: 'id4', title: 'b139', description: 'b145', turncatedtext: '' },
    { id: 'id5', title: 'b140', description: 'b146', turncatedtext: '' },
    { id: 'id6', title: 'b141', description: 'b147', turncatedtext: '' },
  ];

  channelData = [
    { id: 1, title: 'b40', img: 'craftingsocialmedia.svg' },
    { id: 2, title: 'b41', img: 'craftingshoppingsvg.svg' },
    { id: 3, title: 'b44', img: 'craftingfood.svg' },
    { id: 4, title: 'b45', img: 'craftingmessage.svg' },
    { id: 5, title: 'b42', img: 'craftingmovietv.svg' },
    { id: 6, title: 'b43', img: 'craftingmusic.svg' },
    { id: 7, title: 'b46', img: 'craftingnews.svg' },
    { id: 8, title: 'b47', img: 'craftingsports.png' }
  ];

  cardData2 = [
    { id: 'card1', titleKey: 'b151', descriptionKey: 'b157' },
    { id: 'card2', titleKey: 'b152', descriptionKey: 'b158' },
    { id: 'card3', titleKey: 'b153', descriptionKey: 'b159' },
    { id: 'card4', titleKey: 'b154', descriptionKey: 'b160' },
    { id: 'card5', titleKey: 'b155', descriptionKey: 'b161' },
    { id: 'card6', titleKey: 'b156', descriptionKey: 'b162' },
  ];

  publishingOptions: string[] = [
    'Self Play Store/App Store',
    'ZiptoLab',
    'Dueberry Labs',
    'Playfun Games',
    'Game House',
    'Social Media'
  ];


  cardData3 = [
    { id: 'card1', title: 'b165', description: "b168", turncatedtext: "", image: "freegamesvg.svg" },
    { id: 'card2', title: 'b166', description: "b169", turncatedtext: "", image: "paidgame.svg" },
    { id: 'card3', title: 'b167', description: "b170", turncatedtext: "", image: "playtoplay.svg" }
  ];

  getImagePath(index: number): string {
    const imageNames = [
      'addnetwork.svg',
      'banneradd.svg',
      'rewardedadd.svg',
      'interstialadd.svg',
      'intractiveads.svg'
    ];
    return `../../../../assets/images/consumergame/${imageNames[index]}`;
  }

  cardData4 = [
    { id: 'card_4_1', title: 'b176', description: 'b181', turncatedtext: '' },
    { id: 'card_4_2', title: 'b177', description: 'b182', turncatedtext: '' },
    { id: 'card_4_3', title: 'b178', description: 'b183', turncatedtext: '' },
    { id: 'card_4_4', title: 'b179', description: 'b184', turncatedtext: '' },
    { id: 'card_4_5', title: 'b180', description: 'b185', turncatedtext: '' }
  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Gamingtriggers = {
      series: [
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: this.datalabels[1],

      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[1],
      yaxis: this.yaxis[0],
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: function (val: string) { return val + "%"; },
          },
        },
        x: {
          show: false
        }

      },
      title: {
        // text: "Triggers",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }

    };
    this.Discoveringchannel = {
      series: [

      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
        }
      },
      dataLabels: this.datalabels[1],

      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[0],
      yaxis: this.yaxis[1],
      fill: {
        opacity: 1
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
        // text: "Discovering Channel",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };
    this.Userspreference = {
      series: [],

      chart: {
        width: 400,
        type: "pie",
        height: 500,
      },
      labels: [],

      legend: {
        position: 'right',
        offsetY: 70,

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
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      title: {
        // text: "Users Preference, %",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",

        // }
      }
    };
    this.playerreaction = {
      series: [],
      chart: {
        type: "bar",
        height: 400
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: this.datalabels[1],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[0],
      yaxis: this.yaxis[1],
      fill: {
        opacity: 1
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
        text: "Players Reaction to Ads, %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
  }



  override ngOnInit(): void {
    this.getFetchData();
  }

  // for backend
  getFetchData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
    let userspercent: any = []; let userspercentnames: any = [];

    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.consumerbehaviourcmid.next(data.resultList[0].consumerbehaviournewcmid);
              this.languageid = data.resultList[0].consumerBehaviourNewLM.consumerbehaviournewlmid;

              if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.language = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];

              for (let i = 0; i < this.totalcraftinginputfield.length; i++) {
                let value = data.resultList[0].consumerbehaviournewdata[this.totalcraftinginputfield[i]];
                if (this.languageselect.toLowerCase() === 'french') {
                  if (value === 'Oui') {
                    this.result[i] = true;
                  } else if (value === 'Non') {
                    this.result[i] = false;
                  } else if (value === 'Auto-publication via Play Store/App Store') {
                    this.result[i] = 'Self Play Store/App Store';
                  } else if (value === 'Réseaux sociaux') {
                    this.result[i] = 'Social Media';
                  } else {
                    this.result[i] = value;
                  }
                } else {
                  if (value === 'Yes') {
                    this.result[i] = true;
                  } else if (value === 'No') {
                    this.result[i] = false;
                  } else {
                    this.result[i] = value;
                  }
                }
              }

              // Reset channelmixcheckbox before counting
              this.channelmixcheckbox = 0;
              
              // Handle channel mix selections
              for (let i = 1; i < 9; i++) {
                if (this.result[i] === true || this.result[i] === 'Yes' || this.result[i] === 'Oui') {
                  this.result[i] = true;
                  this.channelmixcheckbox = this.channelmixcheckbox + 1;
                } else {
                  this.result[i] = false;
                }
              }

              // Handle monetization selections (w66, w67, w68)
              for (let i = 10; i < 13; i++) {
                if (this.result[i] === 'Yes' || this.result[i] === 'Oui' || this.result[i] === true) {
                  this.result[i] = 'Yes';
                } else if (this.result[i] === 'No' || this.result[i] === 'Non' || this.result[i] === false) {
                  this.result[i] = 'No';
                }
              }

              // Handle in-game advertising selections
              for (let i = 13; i < 18; i++) {
                if (this.result[i] === true || this.result[i] === 'Yes' || this.result[i] === 'Oui') {
                  this.result[i] = true;
                } else {
                  this.result[i] = false;
                }
              }

              if (this.channelmixcheckbox == 3) {
                for (let j = 1; j < 9; j++) {
                  if (this.result[j] === true) {
                    this.disabled[j - 1] = false;
                  } else {
                    this.disabled[j - 1] = true;
                  }
                }
              }

              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title = String(this.language[this.cardData1[i].title]);
                this.cardData1[i].description = String(this.language[this.cardData1[i].description]);
                this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              }

              for (let i = 0; i < this.cardData3.length; i++) {
                this.cardData3[i].title = String(this.language[this.cardData3[i].title]);
                this.cardData3[i].description = String(this.language[this.cardData3[i].description]);
                this.cardData3[i].turncatedtext = this.cardData3[i].description.substring(0, 100) + (this.cardData3[i].description.length > 100 ? '...' : '');
              }

              for (let i = 0; i < this.cardData4.length; i++) {
                this.cardData4[i].title = String(this.language[this.cardData4[i].title]);
                this.cardData4[i].description = String(this.language[this.cardData4[i].description]);
                this.cardData4[i].turncatedtext = this.cardData4[i].description.substring(0, 100) + (this.cardData4[i].description.length > 100 ? '...' : '');

              }

              if (((data.resultList[0].consumerbehaviournewdata.t76).toLowerCase() === 'yes') || (this.timefinished)) {
                this.checkdisable = true;
                for (let i = 0; i < 8; i++) {
                  this.disabled[i] = true;
                }
              }

              this.Gamingtriggers = {
                ...this.Gamingtriggers,
                xaxis: {
                  ...this.Gamingtriggers.xaxis,
                  categories: [
                    this.language.b136,
                    this.language.b137,
                    this.language.b138,
                    this.language.b139,
                    this.language.b140,
                    this.language.b141
                  ]
                },
                title: {
                  text: this.language.b148,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };
              this.Discoveringchannel = {
                ...this.Discoveringchannel,
                xaxis: {
                  ...this.Discoveringchannel.xaxis,
                  categories: [
                    this.labelsBreak(this.language.b313),
                    this.labelsBreak(this.language.b156),
                    this.labelsBreak(this.language.b314),
                    this.labelsBreak(this.language.b315),
                    this.labelsBreak(this.language.b316),
                    this.labelsBreak(this.language.b317)
                  ]
                },
                title: {
                  text: this.language.b163,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };
              this.Userspreference = {
                ...this.Userspreference,
                title: {
                  text: this.language.b171,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };
              this.playerreaction = {
                ...this.playerreaction,
                xaxis: {
                  ...this.playerreaction.xaxis,
                  categories: [
                    this.language.b172,
                    this.language.b173,
                    this.language.b174,
                  ]
                },
                title: {
                  text: this.language.b186,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              for (let i = 0; i < 6; i++) {
                this.jsonarray1.push({ 'x': this.language[this.gamingtriggers[i][0]], 'y': Number((data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.gamingtriggers[i][1]] * 100).toFixed(0)) });
                this.jsonarray2.push({ 'x': this.language[this.publishing[i][0]], 'y': Number((data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.publishing[i][1]] * 100).toFixed(0)) });
              }

              for (let i = 0; i < 3; i++) {
                userspercent[i] = this.language[this.monetization[i][0]];
                userspercentnames[i] = Number((data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.monetization[i][1]] * 100).toFixed(0));
              }
              for (let i = 0; i < 3; i++) {
                this.jsonarray3.push({ 'x': this.language[this.ingameadvertising[i][0]], 'y': Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.ingameadvertising[i][1]] * 100).toFixed(0) });
                this.jsonarray4.push({ 'x': this.language[this.ingameadvertising[i][0]], 'y': Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.ingameadvertising[i][2]] * 100).toFixed(0) });
                this.jsonarray5.push({ 'x': this.language[this.ingameadvertising[i][0]], 'y': Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.ingameadvertising[i][3]] * 100).toFixed(0) });

              }

              this.Gamingtriggers.series = [{ "name": this.language.b148, "data": this.jsonarray1 },]
              this.Discoveringchannel.series = [{ "name": (this.language.b163), "data": this.jsonarray2 },]

              this.Userspreference.series = userspercentnames;
              this.Userspreference.labels = userspercent;

              this.playerreaction.series = [{ "name": this.language.b187, "data": this.jsonarray3 }, { "name": this.language.b188, "data": this.jsonarray4 }, { "name": this.language.b189, "data": this.jsonarray5 }]
              if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.gamestatus == "active") {
                this.showIngameAdvertising = true;
              } else {
                this.showIngameAdvertising = false;
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


  channelmix: any = [
    { header: "Social Media", img: "assets/images/consumergame/craftingsocialmedia.svg" },
    { header: "Shopping", img: "assets/images/consumergame/craftingshoppingsvg.svg" },
    { header: "Food Ordering", img: "assets/images/consumergame/craftingfood.svg" },
    { header: "Messaging Apps", img: "assets/images/consumergame/craftingmessage.svg" },
    { header: "Movies/TV Shows", img: "assets/images/consumergame/craftingmovietv.svg" },
    { header: "Music", img: "assets/images/consumergame/craftingmusic.svg" },
    { header: "News", img: "assets/images/consumergame/craftingnews.svg" },
    { header: "Sports", img: "assets/images/consumergame/craftingsports.png" },

  ]
  getSelectedcommunication(value: string) {
    this.result[0] = value;
    this.writedemand();
  }
  getSelectedpublishing(value: string) {
    this.result[9] = value;
    this.writedemand();
  }

  getSelection(inputField: string, index: number) {
    if (inputField == 'monetization') {
      this.result[index] = 'Yes';

      for (let i = 10; i < 13; i++) {
        if (i !== index) {
          this.result[i] = 'No';
        }
      }
    }
    else if (inputField == 'channelmix') {
      if (this.result[index] == true) {
        this.channelmixcheckbox = this.channelmixcheckbox + 1;
        if (this.channelmixcheckbox == 3) {
          for (let j = 1; j < 9; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 1] = false;
            } else {
              this.disabled[j - 1] = true;
            }
          }

        }
      } else {
        this.channelmixcheckbox = this.channelmixcheckbox - 1;
        if (this.channelmixcheckbox == 2) {
          for (let j = 0; j < 8; j++) {
            this.disabled[j] = false;
          }
        }
      }

    }

    this.writedemand();
  }
  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }
  writedemand() {
    let apiname = '/consumerbehaviournew/singleinputconsumerbehaviournew';

    let craftingData: any;
    if(this.languageselect.toLowerCase() === 'french'){
      craftingData = {
        "w52": this.result[0],
        "w55": this.result[1] == true ? 'Oui' : 'Non',
        "w56": this.result[2] == true ? 'Oui' : 'Non',
        "w59": this.result[3] == true ? 'Oui' : 'Non',
        "w60": this.result[4] == true ? 'Oui' : 'Non',
        "w57": this.result[5] == true ? 'Oui' : 'Non',
        "w58": this.result[6] == true ? 'Oui' : 'Non',
        "w61": this.result[7] == true ? 'Oui' : 'Non',
        "w62": this.result[8] == true ? 'Oui' : 'Non',
        "w64": this.result[9] === 'Self Play Store/App Store' ? 'Auto-publication via Play Store/App Store' : 
        this.result[9] === 'ZiptoLab' ? 'ZiptoLab' :
        this.result[9] === 'Dueberry Labs' ? 'Dueberry Labs' :
        this.result[9] === 'Playfun Games' ? 'Playfun Games' :
        this.result[9] === 'Game House' ? 'Game House' :
        this.result[9] === 'Social Media ' ? 'Réseaux sociaux' :this.result[9],
        "w66": this.result[10] === 'Yes' ? 'Oui' : 'Non',
        "w67": this.result[11] === 'Yes' ? 'Oui' : 'Non',
        "w68": this.result[12] === 'Yes' ? 'Oui' : 'Non',
        "w70": this.result[13] == true ? 'Oui' : 'Non',
        "w71": this.result[14] == true ? 'Oui' : 'Non',
        "w72": this.result[15] == true ? 'Oui' : 'Non',
        "w73": this.result[16] == true ? 'Oui' : 'Non',
        "w74": this.result[17] == true ? 'Oui' : 'Non',
      };
    } else {
      craftingData = {
        "w52": this.result[0],
        "w55": this.result[1] == true ? 'Yes' : 'No',
        "w56": this.result[2] == true ? 'Yes' : 'No',
        "w59": this.result[3] == true ? 'Yes' : 'No',
        "w60": this.result[4] == true ? 'Yes' : 'No',
        "w57": this.result[5] == true ? 'Yes' : 'No',
        "w58": this.result[6] == true ? 'Yes' : 'No',
        "w61": this.result[7] == true ? 'Yes' : 'No',
        "w62": this.result[8] == true ? 'Yes' : 'No',
        "w64": this.result[9],
        "w66": this.result[10],
        "w67": this.result[11],
        "w68": this.result[12],
        "w70": this.result[13] == true ? 'Yes' : 'No',
        "w71": this.result[14] == true ? 'Yes' : 'No',
        "w72": this.result[15] == true ? 'Yes' : 'No',
        "w73": this.result[16] == true ? 'Yes' : 'No',
        "w74": this.result[17] == true ? 'Yes' : 'No',
      };
    }
    this._api.writeLanguageData("consumerbehaviournew", 2,
      craftingData, apiname, 'consumerbehaviournewcmid', this.languageselect, this.languageid, 'consumerbehaviournewlmid').subscribe((data: any) => {

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

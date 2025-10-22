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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

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
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumercrafting.component.html',
  styleUrls: ['./consumercrafting.component.scss']
})
export class ConsumercraftingComponent extends AbstractComponent {
  foodforthought: boolean = true;
  showIngameAdvertising: boolean = true;

  gamingtriggers = [
    ['aa97', 'ab97'],
    ['aa98', 'ab98'],
    ['aa99', 'ab99'],
    ['aa100', 'ab100'],
    ['aa101', 'ab101'],
    ['aa102', 'ab102'],

  ]

  publishing = [
    ['aa127', 'ab127'],
    ['aa128', 'ab128'],
    ['aa129', 'ab129'],
    ['aa130', 'ab130'],
    ['aa131', 'ab131'],
    ['aa132', 'ab132'],

  ]

  monetization = [
    ['aa142', 'ab142'],
    ['aa143', 'ab143'],
    ['aa144', 'ab144'],

  ]

  ingameadvertising = [
    ['ab155', 'ab156', 'ab157', 'ab158'],
    ['ac155', 'ac156', 'ac157', 'ac158'],
    ['ad155', 'ad156', 'ad157', 'ad158'],

  ]
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


  totalcraftinginputfield = ['w52', 'w55', 'w56', 'w59', 'w60', 'w57', 'w58', 'w61', 'w62', 'w64', 'w66', 'w67', 'w68', 'w70', 'w71', 'w72', 'w73', 'w74']
  cardData1 = [
    {
      id: 'card1',
      title: 'aa97',
      description:
        "Immerse yourself in a serene poolside escape. As you dive into the game, the weight of the world melts away, leaving you in pure relaxation. But blink, and you'll find it was the magic of gaming, whisking you away from reality for a sweet moment of solace.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'aa98',
      description:
        "Feel the rush of the racetrack, the wind in your hair, the thrill of speed — all from your living room couch. While the world outside remains mundane, with our game, any moment can become an adrenaline-filled adventure.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'aa99',
      description:
        "Step into the game and watch as your city lights up in admiration. You're not just any player; you're the star everyone's talking about. Play now, and let the fame of virtual stardom embrace you.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'aa100',
      description:
        "Command your troops, strategize every move, and lead your army to victory! In the heart-pounding world of our game, every battle tests your mettle, every win takes you a step closer to legendary status.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'aa101',
      description:
        "Beyond just fun, our game offers a daily dose of cognitive rejuvenation. Sharpen your mind, boost your strategic thinking, and let every session be a step towards a more brilliant you.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: 'aa102',
      description:
        "Step into a realm where every challenge conquered earns you allies and every mission completed amplifies your fame. Navigate this vibrant virtual world, forging connections, and rising as the gaming sensation everyone wants to know.",
      turncatedtext: "",
    },


  ];

  cardData2 = [
    {
      id: 'card1',
      title: 'aa118',
      description:
        "Stepping into the world of self-publishing means wearing many hats. From ideation and development to marketing and support, you're the captain of your ship, steering your game through the vast seas of app monetization, advertising, PR, and user support. While this route grants unparalleled autonomy, it's a challenging journey. Venturing solo, especially for novices, might be a steep learning curve, with numerous hurdles to tackle.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'aa119',
      description:
        "Dive into a partnership with ZiptoLab, a renowned global gaming behemoth. With a track record of launching celebrated action and racing titles, their portfolio boasts a staggering 50 million downloads. However, their expertise comes with a 45% revenue sharing agreement. Entrusting your game to such seasoned hands can offer it the limelight it deserves. Their history in the industry could mean promising exposure, although the revenue split is something to ponder upon.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'aa120',
      description:
        "Embark on a collaboration with Dueberry Labs, the Finnish masterminds crafting top-tier gaming experiences. Their strategy games consistently hit the 50-100 million download mark. With their guidance on game development, they seek a 50% share in the revenue. Aligning with Dueberry might be a golden ticket for those eyeing the strategy genre. Their expertise and impressive download counts are testament to their prowess, albeit the revenue share is substantial.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'aa121',
      description:
        "Align with Playfun Games, a publisher that grew from a modest group into a vibrant gaming community. Catering to a myriad of genres, they've made significant strides in both iOS and Android markets. Their partnership entails a 40% revenue split, coupled with strategic counsel for future endeavors. Playfun’s diverse portfolio and significant community can provide a solid launchpad, especially given their relatively favorable revenue-sharing terms.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'aa122',
      description:
        "Partner with Game House, a publisher driven by the belief in the joy of gaming. They're champions of puzzle and card games, aiming to touch lives through memorable gaming experiences. In return for their services, they carve out a 45% revenue share. If puzzle and card games are your niche, Game House might be the ally you seek. Their dedication to this segment could spell success, though the revenue split is in line with industry bigwigs.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: 'aa123',
      description:
        "Explore the vast horizons of a social media community teeming with 900 million potential players. This colossal base eagerly anticipates fresh gaming content. Collaborating here entails a 30% revenue-sharing clause. The sheer magnitude of this user base is enticing. With the right game, the potential reach is unmatched. The relatively lower revenue sharing further sweetens the deal, but relying solely on social media might have its challenges.",
      turncatedtext: "",
    },


  ];
  cardData3 = [
    {
      id: 'card1',
      title: 'aa136',
      description:
        "As the name suggests, free games are accessible to users at no cost. They are entirely free to download and play. The high accessibility often leads to a higher download rate. While the initial play is free, revenue is typically generated through in-game advertising. Ads can appear in various formats, from banner ads to video ads, and even more immersive native ads.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'aa137',
      description:
        "Freemium games offer a basic version of the game for free, but additional features, levels, or in-game items can be accessed by paying a fee. This model entices players with free content, then offers enhanced features or advantages for a price. The revenue-generation magic happens when engaged players decide to enhance their gaming experience or gain a competitive edge, leading them to make in-app purchases.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'aa138',
      description:
        "Pay to play games come with an upfront cost. Users need to purchase the game before they can download and play it. Often, these games offer a more polished or in-depth experience and should be free from in-game advertisements. The revenue model is straightforward: earnings come from the direct sales of the game. Sometimes, developers may also introduce expansion packs or downloadable content (DLC) at an additional cost.",
      turncatedtext: "",
    },
  ];
  cardData4 = [
    {
      id: 'card1',
      title: 'aa148',
      description:
        "They serves as a mediator between advertisers and game developers. It allows game developers to integrate a variety of advertisements into their game without directly coordinating with individual advertisers. The network offers a mix of ad types, often optimizing for the game's format and audience. Their effectiveness relies on the diversity of ads and the network's capability to tailor content to match user preferences.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'aa149',
      description:
        "Banner ads are typically small rectangular advertisements that appear at the top or bottom of the game screen. Their unobtrusive design ensures they don't disrupt gameplay, but they remain visible to the player throughout. Players might not always find them compelling enough to click, especially if they're keenly immersed in the game.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'aa150',
      description:
        "Rewarded ads provide players with in-game rewards, such as currency, items, or extra lives, in exchange for watching a video advertisement or engaging with a specific ad content. They're typically optional, allowing players to choose whether to engage. Players are often more willing to interact with an ad if they know there's a direct reward awaiting them.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'aa151',
      description:
        "Interstitial ads are full-screen advertisements that appear between game levels or during natural transition points. They take up the entire screen, requiring the player to either watch the ad for a set duration or close it to continue playing. Some players may find them intrusive and be more inclined to close them quickly to resume gameplay.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'aa152',
      description:
        "Interactive ads engage players by offering an interactive element, such as mini-games, polls, or clickable elements within the advertisement itself. The idea is to make the ad experience more engaging and less passive. By actively involving the player, these ads turn the advertising experience into a mini gameplay session of its own, making them more enticing to engage with.",
      turncatedtext: "",
    },



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
        text: "Triggers",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
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
        text: "Discovering Channel",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
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
        text: "Users Preference, %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",

        }
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

    let apiname = '/consumerbehaviour/fetchconsumerbehaviour';
    this._api.consumerFetchData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.consumerbehaviourcmid.next(data.resultList[0].consumerbehaviourcmid);

              if (data.resultList[0].consumerBehaviourCM.consumerBehaviourCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.totalcraftinginputfield.length; i++) {
                this.result[i] = data.resultList[0][this.totalcraftinginputfield[i]]
              }

              for (let i = 1; i < 9; i++) {
                if (this.result[i] == "Yes") {
                  this.result[i] = true;
                  this.channelmixcheckbox = this.channelmixcheckbox + 1;
                } else {
                  this.result[i] = false;
                }
              }
              for (let i = 13; i < 18; i++) {
                if (this.result[i] == "Yes") {
                  this.result[i] = true;
                } else {
                  this.result[i] = false;
                }
              }

              if (this.channelmixcheckbox == 3) {
                for (let j = 1; j < 9; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 1] = false;
                  } else {
                    this.disabled[j - 1] = true;
                  }
                }

              }

              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title = String(data.resultList[0].consumerBehaviourCM[this.cardData1[i].title])

                this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              }
              for (let i = 0; i < this.cardData2.length; i++) {
                this.cardData2[i].title = String(data.resultList[0].consumerBehaviourCM[this.cardData2[i].title])
                this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
              }
              for (let i = 0; i < this.cardData3.length; i++) {
                this.cardData3[i].title = String(data.resultList[0].consumerBehaviourCM[this.cardData3[i].title])
                this.cardData3[i].turncatedtext = this.cardData3[i].description.substring(0, 100) + (this.cardData3[i].description.length > 100 ? '...' : '');
              }

              for (let i = 0; i < this.cardData4.length; i++) {
                this.cardData4[i].title = String(data.resultList[0].consumerBehaviourCM[this.cardData4[i].title])
                this.cardData4[i].turncatedtext = this.cardData4[i].description.substring(0, 100) + (this.cardData4[i].description.length > 100 ? '...' : '');

              }

              if ((data.resultList[0].t76 == 'yes') || (data.resultList[0].t76 == 'Yes') || (this.timefinished)) {
                this.checkdisable = true;
                for (let i = 0; i < 8; i++) {
                  this.disabled[i] = true;
                }
              }
              for (let i = 0; i < 6; i++) {
                this.jsonarray1.push({ 'x': data.resultList[0].consumerBehaviourCM[this.gamingtriggers[i][0]], 'y': Number((data.resultList[0].consumerBehaviourCM[this.gamingtriggers[i][1]] * 100).toFixed(0)) });
                this.jsonarray2.push({ 'x': this.labelsBreak(data.resultList[0].consumerBehaviourCM[this.publishing[i][0]]), 'y': Number((data.resultList[0].consumerBehaviourCM[this.publishing[i][1]] * 100).toFixed(0)) });

              }
              for (let i = 0; i < 3; i++) {
                userspercent[i] = data.resultList[0].consumerBehaviourCM[this.monetization[i][0]];
                userspercentnames[i] = Number((data.resultList[0].consumerBehaviourCM[this.monetization[i][1]] * 100).toFixed(0));
              }
              for (let i = 0; i < 3; i++) {
                this.jsonarray3.push({ 'x': data.resultList[0].consumerBehaviourCM[this.ingameadvertising[i][0]], 'y': Number(data.resultList[0].consumerBehaviourCM[this.ingameadvertising[i][1]] * 100).toFixed(0) });
                this.jsonarray4.push({ 'x': data.resultList[0].consumerBehaviourCM[this.ingameadvertising[i][0]], 'y': Number(data.resultList[0].consumerBehaviourCM[this.ingameadvertising[i][2]] * 100).toFixed(0) });
                this.jsonarray5.push({ 'x': data.resultList[0].consumerBehaviourCM[this.ingameadvertising[i][0]], 'y': Number(data.resultList[0].consumerBehaviourCM[this.ingameadvertising[i][3]] * 100).toFixed(0) });

              }

              this.Gamingtriggers.series = [{ "name": data.resultList[0].consumerBehaviourCM.ab96, "data": this.jsonarray1 },]
              this.Discoveringchannel.series = [{ "name": (data.resultList[0].consumerBehaviourCM.ab126), "data": this.jsonarray2 },]
              this.Userspreference.series = userspercentnames;
              this.Userspreference.labels = userspercent;
              this.playerreaction.series = [{ "name": data.resultList[0].consumerBehaviourCM.aa156, "data": this.jsonarray3 }, { "name": data.resultList[0].consumerBehaviourCM.aa157, "data": this.jsonarray4 }, { "name": data.resultList[0].consumerBehaviourCM.aa158, "data": this.jsonarray5 }]
              if (data.resultList[0].consumerBehaviourCM.consumerBehaviourCMActiveStatus.gamestatus == "active") {
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

  imgarrey: any = [];
  channelmixarrey: any = [];
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
    let apiname = '/consumerbehaviour/singleinputconsumerbehaviour';

    let craftingData = {
      
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
    }
   this._api.consumerDataWrite("consumerbehaviour", 2,
      craftingData, apiname, 'consumerbehaviourcmid').subscribe((data: any) => {

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

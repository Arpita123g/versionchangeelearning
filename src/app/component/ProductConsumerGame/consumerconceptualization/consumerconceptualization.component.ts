import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";
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

@Component({
  selector: 'app-consumerconceptualization',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumerconceptualization.component.html',
  styleUrls: ['./consumerconceptualization.component.scss']
})
export class ConsumerconceptualizationComponent extends AbstractComponent {

  Gamingappsbar: barchart;
  situationalelements: barchart;
  showSituationalElements: boolean = true;
  showSocialElements: boolean = true;
  checkdisable: boolean = false;
  result: any = [];
  textshow: { [key: string]: boolean } = {};
  w50: string = "";

  totalconceptualizationinputfield = ['w30', 'w31', 'w32', 'w33', 'w34', 'w37',
    'w38', 'w39', 'w40', 'w43', 'w44', 'w45', 'w46', 'w47', 'w48', 'w50']
  gamingappsbargraph = [
    ['p104', 'q104'],
    ['p105', 'q105'],
    ['p106', 'q106'],
    ['p107', 'q107'],
    ['p108', 'q108']
  ]
  situationalgraph = [
    ['p118', 'q118', 'r118'],
    ['p119', 'q119', 'r119'],
    ['p120', 'q120', 'r120'],
    ['p121', 'q121', 'r121'],
  ]
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];

  selectedInputField: any = [];
  action: boolean = false;
  racing: boolean = false;
  puzzle: boolean = false;
  playfulness: boolean = false;
  culturalnorms: boolean = false;
  easyofuse: boolean = false;
  continuance: boolean = false;
  foodforthought: boolean = true;
  selectedOption: string | null = null;
  situaltionalcheckbox: number = 0;
  socialelementscheckbox: number = 0;
  disabled: boolean[] = [];
  genersvalue: string = '';

  cardData1 = [
    {
      id: 'card1',
      title: 'p104',
      description:
        "This genre involves dynamic gameplay, often requiring players to overcome challenges using skills like timing, precision, and strategy. From the data, it's evident that action/adventure games are predominantly preferred by males  compared to females. While both young male and female gamers have a strong preference for this genre, the interest seems to wane slightly as they age, especially for the 35+ age group.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'p105',
      description:
        "These games simulate real-world sports or racing experiences, often emphasizing speed, competition, and skill. They are significantly popular among males and less so among females. Interest in this genre peaks among 20-24-year-old male gamers and drops gradually as age progresses. Females aged 20-24 also show a heightened interest compared to other age groups.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'p106',
      description:
        "These games test players' intelligence, problem-solving abilities, and knowledge. They have an evident appeal among females, with a staggering preference compared to males. As male gamers age, their preference for this genre increases significantly, in the 35+ category. In contrast, female gamers consistently prefer these games across age groups, slightly declining as they get older.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'p107',
      description:
        "Involving tactical gameplay, decision-making, and often long-term planning, these games witness a fairly even preference between males and females. Younger females (20-24 years) have a higher preference compared to other age groups, while the preference remains somewhat consistent for males. ",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'p108',
      description:
        "These games simulate gambling experiences or card games. While the overall preference is lower compared to other genres, females slightly surpass males. The preference among male gamers peaks in the 25-34 age bracket, while for females, it's the highest in the 20-24 age group.",
      turncatedtext: "",
    },

  ];
  cardData2 = [
    {
      id: 'card1',
      title: 'p111',
      description:
        "Playfulness pertains to the sheer joy and fun a game provides, independent of its objectives or outcomes. A game with high playfulness ensures users are engrossed purely because of the enjoyable experience, rather than external rewards or achievements. The element has its desirable quality making it captivative for the users.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'p112',
      description:
        "Cultural norms refer to integrating societal beliefs, values, and traditions within the game. By aligning with cultural nuances, a game can resonate deeply with its audience, fostering a sense of familiarity and connectedness. Cultural norms play a notable role in user appeal. It's evident that embedding cultural elements can make a game more relatable and hence more attractive to certain audiences. ",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'p113',
      description:
        "This concerns the intuitiveness and user-friendliness of the game. A game with high ease of use is straightforward to navigate, ensuring users don't face barriers or frustrations that might deter them from continued play. Ease of use is undeniably a pivotal factor. The smoother the gaming journey, the higher the likelihood of retaining and satisfying players.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'p114',
      description:
        "Continuance intention revolves around the game's ability to ensure players return to it. Whether it's through captivating storylines, rewarding progression systems, or regular updates, this element measures the game's potential to engage users in the long run. A game's true success isn't just in attracting players, but in retaining them over time.",
      turncatedtext: "",
    },

  ];
  cardData3 = [
    {
      id: 'card1',
      title: 'p125',
      description:
        "Chat functionality allows players to communicate in real-time within the game environment. This fosters camaraderie, collaboration, and even some healthy competition. In-game communication enhances the social experience, the ability to chat directly can be an appealing draw for many, particularly in collaborative gaming scenarios.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'p126',
      description:
        "Leaderboards showcase players' rankings based on achievements, scores, or other metrics. Activity feeds, on the other hand, display recent actions or milestones achieved by players, offering a dynamic view of the gaming community's accomplishments. These elements strongly appeal to gamers' competitive spirit and their desire to stay updated with peers' activities.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: "p127",
      description:
        "This allows players to exchange in-game items, currency, or other assets. It not only enhances the game's economy but also fosters interaction and collaboration among players. A dynamic feature, user trading stands out for its potential to deeply engage players. The excitement of acquiring new items or trading valuables can heighten the appeal of the game and keep players engrossed.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'p128',
      description:
        "Push notifications alert players about in-game updates, events, or messages. They serve as reminders or prompts to encourage users to revisit the game.  They play a role in keeping players connected, their impact might seem less pronounced compared to other immersive social features. However, timely and relevant notifications can be effective in driving engagement.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'p129',
      description:
        "Communities are in-game forums, discussion boards, or groups where players gather to discuss strategies, share experiences, or even just socialize. A thriving community can significantly bolster the game's appeal. Having a space to connect, share, and learn can be as alluring as the game itself for many players.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: 'p130',
      description:
        "This feature allows players to link their game profiles to their social media accounts, enabling them to share achievements, invite friends, or even play against their social contacts. Given today's interconnected world, integrating social media can be a game-changer. Allowing players to showcase their gaming milestones on social platforms can elevate the game's presence and appeal.",
      turncatedtext: "",
    },

  ];
  cardData4 = [
    {
      id: 'card1',
      title: 'p134',
      description:
        "The game, draped in this theme, exudes vibrancy and outgoing energy. Characters are extroverted and sociable, embodying the spirit of pursuing passion. The UI/UX invigorates users with positivity. Such an environment can be quite engaging, possibly resonating deeply with users who seek a dose of positivity and energy in their gaming experience.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'p135',
      description:
        "This theme encapsulates wellness and vitality. Characters radiate health, vigor, and zest for life, while the overall interface promotes an active, wholesome ambiance. Such a theme can appeal to those conscious about wellness, making them feel rejuvenated during their gaming sessions.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: "p136",
      description:
        "Representing independence and exploration, the game under this theme mirrors the life of solo adventurers who cherish freedom, responsibility, and discipline. It's tailor-made for individuals seeking a sense of independence in their gaming journey, though it might not resonate as much as some of the more vibrant themes.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'p137',
      description:
        "This environment brings players close to nature, offering an unadulterated, rustic experience, away from the glitz and glamour. Those yearning for a serene, grounded gameplay experience might find this theme captivating, allowing them to virtually escape the hustle and bustle.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'p138',
      description:
        "Pulsating with the rhythm of city life, this theme encapsulates the high-speed, goal-driven urban existence. Characters exude ambition, constantly seeking more. For users accustomed to the city's pace, this theme can be engaging, though it might rank slightly behind some other themes in its universal appeal.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: 'p139',
      description:
        "Driven by wanderlust, this theme takes players on a journey, where they are constantly on the move, embracing the thrill of exploration, balancing the risks and rewards of the nomadic life. This theme can be immensely engaging, especially for those with an adventurous streak, looking to experience the thrill of the unknown.",
      turncatedtext: "",
    },
    {
      id: 'card7',
      title: 'p140',
      description:
        "Melding art and spirituality, this theme dances to its unique rhythm. Players get to immerse themselves in an artistic journey, infused with spiritual quests and musical undertones. Artistic souls might find this theme deeply resonating, offering them a chance to merge gameplay with a deeper, spiritual exploration.",
      turncatedtext: "",
    },
    {
      id: 'card8',
      title: 'p141',
      description:
        "Mirroring the current, tech-driven era, this theme offers a snapshot of contemporary life, presenting both its fast-paced nature and glimpses into the future. Although relevant, this theme might not be as captivating as others, especially for users who are seeking an escape from their routine digital lives.",
      turncatedtext: "",
    },

  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Gamingappsbar = {
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
      xaxis: {
        categories: [], position: "bottom", labels: { offsetY: 0, formatter: function (val: string) { return val + "%"; }, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 },
        title: {
          offsetY: 10,
          text: 'Higher % indicates higher competition',
          style: {
            color: undefined,
            fontSize: '12px',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-title',
          }
        }
      },
      yaxis: this.yaxis[0],
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
        text: "Competitive Landscape",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
    this.situationalelements = {
      series: [],
      chart: {
        type: "bar",
        height: 350
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
    this.getFetchData();
  }

  //for backend
  getFetchData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = [];
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
              for (let i = 0; i < this.totalconceptualizationinputfield.length; i++) {
                this.result[i] = data.resultList[0][this.totalconceptualizationinputfield[i]];
              }


              for (let i = 5; i < 9; i++) {
                if (this.result[i] == "Yes") {
                  this.result[i] = true;
                  this.situaltionalcheckbox = this.situaltionalcheckbox + 1;

                } else {
                  this.result[i] = false;
                }
              }
              if (this.situaltionalcheckbox == 2) {
                for (let j = 5; j < 9; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 5] = false;
                  } else {
                    this.disabled[j - 5] = true;
                  }
                }

              }
              for (let i = 9; i < 15; i++) {
                if (this.result[i] == "Yes") {
                  this.result[i] = true;
                  this.socialelementscheckbox = this.socialelementscheckbox + 1;

                } else {
                  this.result[i] = false;
                }
              }
              if (this.socialelementscheckbox == 3) {
                for (let j = 9; j < 15; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 5] = false;
                  } else {
                    this.disabled[j - 5] = true;
                  }
                }

              }
              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title = String(data.resultList[0].consumerBehaviourCM[this.cardData1[i].title]);
                this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              }

              for (let i = 0; i < this.cardData2.length; i++) {
                this.cardData2[i].title = String(data.resultList[0].consumerBehaviourCM[this.cardData2[i].title]);
                this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
              }
              for (let i = 0; i < this.cardData3.length; i++) {
                this.cardData3[i].title = String(data.resultList[0].consumerBehaviourCM[this.cardData3[i].title]);
                this.cardData3[i].turncatedtext = this.cardData3[i].description.substring(0, 100) + (this.cardData3[i].description.length > 100 ? '...' : '');
              }
              for (let i = 0; i < this.cardData4.length; i++) {
                this.cardData4[i].title = String(data.resultList[0].consumerBehaviourCM[this.cardData4[i].title])
                this.cardData4[i].turncatedtext = this.cardData4[i].description.substring(0, 100) + (this.cardData4[i].description.length > 100 ? '...' : '');
              }
              for (let i = 0; i < 5; i++) {
                this.jsonarray1.push({ 'x': data.resultList[0].consumerBehaviourCM[this.gamingappsbargraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.gamingappsbargraph[i][1]] * 100).toFixed(0) });
              }
              for (let i = 0; i < 4; i++) {
                this.jsonarray2.push({ 'x': data.resultList[0].consumerBehaviourCM[this.situationalgraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourCM[this.situationalgraph[i][1]] * 100).toFixed(0) });
                this.jsonarray3.push({ 'x': data.resultList[0].consumerBehaviourCM[this.situationalgraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourCM[this.situationalgraph[i][2]] * 100).toFixed(0) });
              }
              this.Gamingappsbar.series = [{ "name": "% of Gaming Apps Competitor", "data": this.jsonarray1 },]
              this.situationalelements.series = [{ "name": data.resultList[0].consumerBehaviourCM.q117, "data": this.jsonarray2 }, { "name": data.resultList[0].consumerBehaviourCM.r117, "data": this.jsonarray3 }]

              if ((data.resultList[0].t76 == 'yes') || (data.resultList[0].t76 == 'Yes') || (this.timefinished)) {
                this.checkdisable = true;
                for (let i = 0; i < 10; i++) {
                  this.disabled[i] = true;
                }
              }
              if (data.resultList[0].consumerBehaviourCM.consumerBehaviourCMActiveStatus.situationalstatus == "active") {
                this.showSituationalElements = true;
              } else {
                this.showSituationalElements = false;
              }
              if (data.resultList[0].consumerBehaviourCM.consumerBehaviourCMActiveStatus.socialstatus == "active") {
                this.showSocialElements = true;
              } else {
                this.showSocialElements = false;
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


  openDialog(): void {
    this.dialog.open(FoodforthoughtConsumerComponent, {
      data: {},
    });
  }
  getSelectedelement(value: string) {
    this.result[15] = value;
    this.writeconceptualization();
  }


  getSelection(inputField: string, index: number) {
    if (inputField == 'genre') {
      this.result[index] = 'Yes';

      for (let i = 0; i < 5; i++) {
        if (i !== index) {
          this.result[i] = 'No';
        }
      }
    }
    else if (inputField == 'situational') {
      if (this.result[index] == true) {
        this.situaltionalcheckbox = this.situaltionalcheckbox + 1;
        if (this.situaltionalcheckbox == 2) {
          for (let j = 5; j < 9; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 5] = false;
            } else {
              this.disabled[j - 5] = true;
            }
          }

        }
      } else {
        this.situaltionalcheckbox = this.situaltionalcheckbox - 1;
        if (this.situaltionalcheckbox == 1) {
          for (let j = 0; j < 4; j++) {
            this.disabled[j] = false;
          }
        }
      }

    } else if (inputField == 'social') {
      if (this.result[index] == true) {
        this.socialelementscheckbox = this.socialelementscheckbox + 1;
        if (this.socialelementscheckbox == 3) {
          for (let j = 9; j < 15; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 5] = false;
            } else {
              this.disabled[j - 5] = true;
            }
          }

        }
      } else {
        this.socialelementscheckbox = this.socialelementscheckbox - 1;
        if (this.socialelementscheckbox == 2) {
          for (let j = 4; j < 10; j++) {
            this.disabled[j] = false;
          }
        }
      }

    }
    this.writeconceptualization();
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }


  writeconceptualization() {
    let apiname = '/consumerbehaviour/singleinputconsumerbehaviour';

    let conceptData = {
      "w30": this.result[0],
      "w31": this.result[1],
      "w32": this.result[2],
      "w33": this.result[3],
      "w34": this.result[4],
      "w37": this.result[5] == true ? 'Yes' : 'No',
      "w38": this.result[6] == true ? 'Yes' : 'No',
      "w39": this.result[7] == true ? 'Yes' : 'No',
      "w40": this.result[8] == true ? 'Yes' : 'No',
      "w43": this.result[9] == true ? 'Yes' : 'No',
      "w44": this.result[10] == true ? 'Yes' : 'No',
      "w45": this.result[11] == true ? 'Yes' : 'No',
      "w46": this.result[12] == true ? 'Yes' : 'No',
      "w47": this.result[13] == true ? 'Yes' : 'No',
      "w48": this.result[14] == true ? 'Yes' : 'No',
      "w50": this.result[15]
    }
   
    this._api.consumerDataWrite("consumerbehaviour", 2,
      conceptData, apiname, 'consumerbehaviourcmid').subscribe((data: any) => {

      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }


}
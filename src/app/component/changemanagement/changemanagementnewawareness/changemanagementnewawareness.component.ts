import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexPlotOptions, ApexTitleSubtitle,
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
import { ChangemanagementnewfoodforthougthComponent } from '../changemanagementnewfoodforthougth/changemanagementnewfoodforthougth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

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
  selector: 'app-changemanagementnewawareness',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './changemanagementnewawareness.component.html',
  styleUrls: ['./changemanagementnewawareness.component.scss']
})
export class ChangemanagementnewawarenessComponent extends AbstractComponent {
  foodforthought:boolean = true;
  Awarenesslevelgraph: barchart;
  Timeavailablegraph: barchart;
  Budgetavilablegraph: barchart;
  checkdisable: boolean = false;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  result: any = [];
  textshow: { [key: string]: boolean } = {};
  organizationcheckbox: number = 0;
  individualactivity1checkbox: number = 0;
  groupactivity1checkbox: number = 0;
  disabled: boolean[] = [];

  public trigger: number = 0;

  awarenessgraphvalue: any = [
    ['Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat'],
    ['o19', 'p19', 'q19', 'r19', 's19', 't19'],
  ]

  timegraphvalue: any = [
    ['Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat'],
    ['o20', 'p20', 'q20', 'r20', 's20', 't20'],
  ]

  budgetgraphvalue = ['Budget Available INR', 'o44']

  databasecellname = [
    'be5', 'be6', 'be7', 'be8', 'be9', 'be10',
    'be21', 'be22', 'be23', 'be24', 'be25', 'be26',
    'be13', 'be14', 'be15', 'be16', 'be17', 'be18',
    'be37', 'be38', 'be39', 'be40', 'be41', 'be42',
    'be29', 'be30', 'be31', 'be32', 'be33', 'be34',
  ]
  periodcellname = [
    't11', 'u11', 't12', 'u12', 't13', 'u13', 't14', 'u14', 't15', 'u15', 't16', 'u16',
    't19', 'u19', 't20', 'u20', 't21', 'u21', 't22', 'u22', 't23', 'u23', 't24', 'u24',
    't27', 'u27', 't28', 'u28', 't29', 'u29', 't30', 'u30', 't31', 'u31', 't32', 'u32',
   
  ]
  budgetcellname = [
    'p41', 'p42', 'p43',
   
  ]
  timecellname = [
    'o10', 'p10', 'q10', 'r10', 's10', 't10',
    'o13', 'p13', 'q13', 'r13', 's13', 't13',
    'o16', 'p16', 'q16', 'r16', 's16', 't16',

  ]

  disable = [false, false, false];
  timecellvalidation: boolean = false;
  timebudgetvalidationalert: boolean = false;


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private cdr: ChangeDetectorRef) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.Awarenesslevelgraph = {
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
      plotOptions: {
        bar: {
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
        // categories: ['Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat']
      },
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
        text: "Awareness Level, %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.Timeavailablegraph = {
      series: [
        //   {
        //   data: [120, 160, 210, 160, 360, 360]
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
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
      },
      xaxis: {
        // categories: ['Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat']
      },
      fill: {
        type: 'solid',
      },

      yaxis: this.yaxis[0],
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
        text: "Time Available, minutes",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.Budgetavilablegraph = {
      series: [
        //   {
        //   data: [178000]
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
      plotOptions: {
        bar: {
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
        // categories: ['Budget Available, INR']
      },
      fill: {
        type: 'solid',
      },

      yaxis: this.yaxis[0],
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
    }
  }

  cardData1 = [
    {
      id: 'card1',
      title: ['l11', 'l11'],
      description: "A personalized memo from the CEO, designed to recognize and uplift team members, providing a sense of value and purpose during the merger. This intervention is tailored to impact individuals across all levels, ensuring a positive influence on motivation and dedication throughout the organization.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['l12', 'l12'],
      description: "A company-wide session featuring a motivational speaker, offering insights on resilience, adaptability, and embracing change. This intervention is crafted to affect the entire team, fostering a positive mindset and readiness for challenges that may arise during the integration process.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['l13', 'l13'],
      description: "The establishment of a Learning Club, impacting individuals by providing a platform for skill enhancement and knowledge sharing. This intervention is designed to create a collaborative learning culture, influencing employees at various levels to contribute to continuous improvement.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['l14', 'l14'],
      description: "A structured goal-setting activity for team members, aligning personal and professional aspirations with organizational objectives. This intervention aims to impact individuals across different roles, providing clarity, purpose, and a sense of direction to drive motivation.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['l15', 'l15'],
      description: "The implementation of MOB activities to define and track individual and team goals. This intervention is crafted to impact team members by promoting clarity, accountability, and a results-driven mindset, contributing to increased motivation and performance.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['l16', 'l16'],
      description: "An initiative to enrich and align individual goals with the broader organizational vision, impacting individuals by emphasizing the collective impact of their contributions. This intervention aims to enhance motivation by connecting individual aspirations with the larger purpose of the company.",
      turncatedtext: "",
    },
  ]
  cardData2 = [
    {
      id: 'card1',
      title: ['l19', 'l19'],
      description:
        "An organizational focus on mental and physical well-being, impacting individuals across various roles. This intervention aims to provide resources and support for a healthy work-life balance, boosting overall team morale, engagement, and resilience.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['l20', 'l20'],
      description:
        "Periodic 'Hot Seat' sessions where team members share experiences, impacting individuals by fostering open communication, empathy, and a sense of camaraderie. This intervention contributes to a positive team culture without directly naming specific individuals.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['l21', 'l21'],
      description:
        "Regular monthly Q&A sessions with leadership to address questions and concerns, impacting team members at all levels. This intervention promotes transparency, builds trust, and ensures that the team feels informed and connected without directly mentioning names.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['l22', 'l22'],
      description:
        "A series of informative sessions on the real estate industry, impacting individuals across various roles. This intervention aims to enhance the team's knowledge, skills, and confidence, aligning them with the evolving landscape of the industry.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['l23', 'l23'],
      description:
        "Engaging in process consultation to streamline workflows, impacting individuals at different levels. This intervention aims to enhance productivity, collaboration, and overall team effectiveness without specifying individuals.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['l24', 'l24'],
      description:
        "A strategic redesigning of workflows, roles, or processes, impacting individuals by creating a more agile and efficient working environment. This intervention positively influences team performance without directly mentioning specific names.",
      turncatedtext: "",
    },


  ];
  cardData3 = [
    {
      id: 'card1',
      title: ['l27', 'l27'],
      description:
        "A team-building activity focusing on mutual understanding and camaraderie. This intervention aims to impact all team members by fostering stronger connections, with a particular focus on enhancing collaboration for those who may face challenges in adapting to the team dynamic.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['l28', 'l28'],
      description:
        "Structured problem-solving meetings designed to address challenges and find innovative solutions. This intervention is crafted to impact all team members, emphasizing a collaborative approach to overcome hurdles and encouraging diverse perspectives in finding solutions.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['l29', 'l29'],
      description:
        "Organizing enjoyable team lunches to promote a relaxed and positive atmosphere. This intervention is intended to impact all team members, offering a break from routine and fostering team bonding. However, it may be especially beneficial for individuals who need a morale boost or those facing challenges in adapting to the changes.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['l30', 'l30'],
      description:
        "Encouraging team walks to combine physical activity with informal team bonding. This intervention aims to impact all team members, promoting both health and camaraderie. It particularly benefits those who appreciate a more relaxed and active approach to team interactions.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['l31', 'l31'],
      description:
        "A session designed to break down barriers and enhance communication. This intervention is crafted to impact all team members, with a focus on creating a more inclusive and open team culture. It can be particularly beneficial for individuals who may be more reserved or find it challenging to connect with others.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['l32', 'l32'],
      description:
        "Engaging in role-playing simulations to enhance problem-solving and communication skills. This intervention aims to impact all team members, providing a practical and interactive approach to skill development. It can be especially beneficial for individuals who thrive on hands-on learning experiences and those seeking to improve interpersonal skills.",
      turncatedtext: "",
    },


  ];

  override ngOnInit(): void {
    this.getFetchData('create');
  }

  getFetchData(fetchtype: string) {
    let apiname = '/changemanagement/fetchchangemanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.result = [];
              this._global.casemanagementid.next(data.resultList[0].changemanagementcmid);
              if (data.resultList[0].changeManagementCM.changeManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              
              for (let i = 0; i < 30; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]]
              }

              for (let i = 30; i < 66; i++) {
                this.result[i] = data.resultList[0].changeManagementCM[this.periodcellname[i - 30]]
              }

              for (let i = 66; i < 69; i++) {
                this.result[i] = data.resultList[0][this.budgetcellname[i - 66]]
              }
              for (let i = 69; i < 87; i++) {
                this.result[i] = data.resultList[0][this.timecellname[i - 69]]
                if (this.result[i] == 0) {
                  this.timecellvalidation = true;
                }
              }
              console.log("rr", this.result)
              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title[0] = String(data.resultList[0].changeManagementCM[this.cardData1[i].title[1]])
                if (this.cardData1[i].turncatedtext == "") {
                  this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
                }
              }
              for (let i = 0; i < this.cardData2.length; i++) {
                this.cardData2[i].title[0] = String(data.resultList[0].changeManagementCM[this.cardData2[i].title[1]])
                if (this.cardData2[i].turncatedtext == "") {
                  this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
                }
              }
              for (let i = 0; i < this.cardData3.length; i++) {
                this.cardData3[i].title[0] = String(data.resultList[0].changeManagementCM[this.cardData3[i].title[1]])
                if (this.cardData3[i].turncatedtext == "") {
                  this.cardData3[i].turncatedtext = this.cardData3[i].description.substring(0, 100) + (this.cardData3[i].description.length > 100 ? '...' : '');
                }
              }
              for (let i = 0; i < 6; i++) {
                this.jsonarray1.push({ 'x': [this.awarenessgraphvalue[0][i]], 'y': Number((data.resultList[0][this.awarenessgraphvalue[1][i]] * 100).toFixed(0)) });
                this.jsonarray2.push({ 'x': [this.timegraphvalue[0][i]], 'y': data.resultList[0][this.timegraphvalue[1][i]] });

              }

              this.jsonarray3.push({ 'x': [this.budgetgraphvalue[0]], 'y': data.resultList[0][this.budgetgraphvalue[1]] });


              this.Awarenesslevelgraph.series = [{ "name": 'Awareness Level, %', "data": this.jsonarray1 }]
              this.Timeavailablegraph.series = [{ "name": 'Time Available, Minutes', "data": this.jsonarray2 }]
              this.Budgetavilablegraph.series = [{ "name": '', "data": this.jsonarray3 }]
console.log("1st",this.Awarenesslevelgraph.series, '2nd', this.Timeavailablegraph.series, '3rd', this.Budgetavilablegraph.series)
              for (let i = 0; i < 6; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = true;
                  if (fetchtype != 'update') {
                    this.organizationcheckbox = this.organizationcheckbox + 1;
                  }

                } else {
                  this.result[i] = false;
                }
              }
              console.log("66", this.result[66], this.result[67], this.result[68])
              if ((this.organizationcheckbox == 1) || (this.result[66] <= 0) || (this.result[67] <= 0) || (this.result[68] <= 0)) {
                for (let j = 0; j < 6; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j] = false;
                  } else {
                    this.disabled[j] = true;
                  }
                }

              }

              for (let i = 6; i < 12; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = true;
                } else {
                  this.result[i] = false;
                }
              }

              for (let i = 12; i < 18; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = true;
                  if (fetchtype != 'update') {
                    this.individualactivity1checkbox = this.individualactivity1checkbox + 1;
                  }
                } else {
                  this.result[i] = false;
                }
              }
              if ((this.individualactivity1checkbox == 1) || (this.result[66] <= 0) || (this.result[67] <= 0) || (this.result[68] <= 0)) {
                for (let j = 12; j < 18; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 6] = false;
                  } else {
                    this.disabled[j - 6] = true;
                  }
                }
              }


              
              for (let i = 18; i < 24; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = true;
                } else {
                  this.result[i] = false;
                }
              }

              for (let i = 24; i < 30; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = true;
                  if (fetchtype != 'update') {
                    this.groupactivity1checkbox = this.groupactivity1checkbox + 1;
                  }
                } else {
                  this.result[i] = false;
                }
              }
              if ((this.groupactivity1checkbox == 1) || (this.result[66] <= 0) || (this.result[67] <= 0) || (this.result[68] <= 0)) {
                for (let j = 24; j < 30; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 12] = false;
                  } else {
                    this.disabled[j - 12] = true;
                  }
                }
              }
              if ((data.resultList[0].bh6 == 'yes') || (data.resultList[0].bh6 == 'Yes') || (this.timefinished)) {
                this.checkdisable = true;
                for(let i=0;i<18;i++){
                  this.disabled[i]=true;
                }
              } 
              if ((this.result[66] <= 0) || (this.result[67] <= 0) || (this.result[68] <= 0)) {
                this._alert.error(" You have run out of the budget, consider replanning the interventions.");
                
              }
              if (this.timecellvalidation == true) {
                if (this.timebudgetvalidationalert == false) {
                  this.timebudgetvalidationalert = true
                  this._alert.error("Warning: One of the resources has run out of time, consider replanning the interventions.");

                }
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


  getSelection(inputField: string, index: number) {

    if (inputField == 'organization') {

      if (this.result[index] == true) {
        this.organizationcheckbox = this.organizationcheckbox + 1;
        if (this.organizationcheckbox == 1) {
          for (let j = 0; j < 6; j++) {
            if (this.result[j] == true) {
              this.disabled[j] = false;
            } else {
              this.disabled[j] = true;
            }
          }

        }
      } else {
        this.organizationcheckbox = this.organizationcheckbox - 1;
        if (this.organizationcheckbox == 0) {
          for (let j = 0; j < 6; j++) {
            this.disabled[j] = false;
          }
        }
      }
      // }
    } else if (inputField == 'individualactivity') {
      if (this.result[index] == true) {
        this.result[index] = 1;
      } else {
        this.result[index] = 0;
      }
    } else if (inputField == 'individualactivity1') {
      if (this.result[index] == true) {
        this.individualactivity1checkbox = this.individualactivity1checkbox + 1;
        if (this.individualactivity1checkbox == 1) {
          for (let j = 12; j < 18; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 6] = false;
            } else {
              this.disabled[j - 6] = true;
            }
          }

        }
      } else {
        this.individualactivity1checkbox = this.individualactivity1checkbox - 1;
        if (this.individualactivity1checkbox == 0) {
          for (let j = 6; j < 12; j++) {
            this.disabled[j] = false;
          }
        }
      }


    } else if (inputField == 'groupactivity') {
      if (this.result[index] == true) {
        this.result[index] = 1;
      } else {
        this.result[index] = 0;
      }
    } else if (inputField == 'groupactivity1') {
      if (this.result[index] == true) {
        this.groupactivity1checkbox = this.groupactivity1checkbox + 1;
        if (this.groupactivity1checkbox == 1) {
          for (let j = 24; j < 30; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 12] = false;
            } else {
              this.disabled[j - 12] = true;
            }
          }

        }
      } else {
        this.groupactivity1checkbox = this.groupactivity1checkbox - 1;
        if (this.groupactivity1checkbox == 0) {
          for (let j = 12; j < 18; j++) {
            this.disabled[j] = false;
          }
        }
      }


    }

    this.writeAwareness();
  }
  writeAwareness() {
    let apiname = '/changemanagement/singleinputchangemanagement';
    let awarenessData = {
      "be5": this.result[0] == true ? 1 : 0,
      "be6": this.result[1] == true ? 1 : 0,
      "be7": this.result[2] == true ? 1 : 0,
      "be8": this.result[3] == true ? 1 : 0,
      "be9": this.result[4] == true ? 1 : 0,
      "be10": this.result[5] == true ? 1 : 0,
      "be21": this.result[6] == true ? 1 : 0,
      "be22": this.result[7] == true ? 1 : 0,
      "be23": this.result[8] == true ? 1 : 0,
      "be24": this.result[9] == true ? 1 : 0,
      "be25": this.result[10] == true ? 1 : 0,
      "be26": this.result[11] == true ? 1 : 0,
      "be13": this.result[12] == true ? 1 : 0,
      "be14": this.result[13] == true ? 1 : 0,
      "be15": this.result[14] == true ? 1 : 0,
      "be16": this.result[15] == true ? 1 : 0,
      "be17": this.result[16] == true ? 1 : 0,
      "be18": this.result[17] == true ? 1 : 0,
      "be37": this.result[18] == true ? 1 : 0,
      "be38": this.result[19] == true ? 1 : 0,
      "be39": this.result[20] == true ? 1 : 0,
      "be40": this.result[21] == true ? 1 : 0,
      "be41": this.result[22] == true ? 1 : 0,
      "be42": this.result[23] == true ? 1 : 0,
      "be29": this.result[24] == true ? 1 : 0,
      "be30": this.result[25] == true ? 1 : 0,
      "be31": this.result[26] == true ? 1 : 0,
      "be32": this.result[27] == true ? 1 : 0,
      "be33": this.result[28] == true ? 1 : 0,
      "be34": this.result[29] == true ? 1 : 0,

    }
    console.log('data', awarenessData)
    this._api.changeManagementDataWrite("changemanagement", 1,
      awarenessData, apiname, 'changemanagementcmid').subscribe((data: any) => {
        if (data.status == "Success") {
          // this.cdr.detectChanges();
          this.getFetchData('update');
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }
  openDialog(): void {
    this.dialog.open(ChangemanagementnewfoodforthougthComponent, {
      data: {},
    });
  }
}

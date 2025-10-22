import { Component } from '@angular/core';
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
  selector: 'app-changemanagementnewmotivation',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './changemanagementnewmotivation.component.html',
  styleUrls: ['./changemanagementnewmotivation.component.scss']
})
export class ChangemanagementnewmotivationComponent extends AbstractComponent {
  foodforthought: boolean = true;
  motivationlevelgraph: barchart;
  timeavailablegraph: barchart;
  budgetavilablegraph: barchart;
  checkdisable: boolean = false;
  result: any = [];
  disabled: boolean[] = [];
  result1: any = [];
  textshow: { [key: string]: boolean } = {};
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  carddatafilled: boolean = false;
  organizationcheckbox: number = 0;
  individualactivity1checkbox: number = 0;
  groupactivity1checkbox: number = 0;
  budgetcellname = [
    // 'p41', 'p42', 'p43',
    'p45', 'p46', 'p47',
    // 'p49', 'p50', 'p51'
  ]
  timecellname = [
    // 'o10', 'p10', 'q10', 'r10', 's10', 't10',
    // 'o13', 'p13', 'q13', 'r13', 's13', 't13',
    // 'o16', 'p16', 'q16', 'r16', 's16', 't16',

    'z10', 'z10', 'z10', 'z10', 'z10', 'z10',
    'z13', 'z13', 'z13', 'z13', 'z13', 'z13',
    'z16', 'z16', 'z16', 'z16', 'z16', 'z16',

    // 'ak10', 'ak10', 'ak10', 'ak10', 'ak10', 'ak10',
    // 'ak13', 'ak13', 'ak13', 'ak13', 'ak13', 'ak13',
    // 'ak16', 'ak16', 'ak16', 'ak16', 'ak16', 'ak16',


  ]


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.motivationlevelgraph = {
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
        text: "Motivation Level, %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.timeavailablegraph = {
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

    this.budgetavilablegraph = {
      series: [
        //   {
        //   data: [23200]
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
      title: ['w11', 'w11'],
      description: "This intervention seems to have a positive impact on individuals who appreciate direct communication and acknowledgment. It can be particularly effective for those who value a clear direction and vision from the leadership.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['w12', 'w12'],
      description: "Individuals who respond well to external motivation and inspiration tend to benefit from these sessions. Look for team members who thrive on external encouragement and inspiration to boost their motivation.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['w13', 'w13'],
      description: "For team members who value continuous learning and personal development, the Learning Club can be a powerful tool. It fosters a sense of growth and improvement, aligning with the preferences of certain individuals.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['w14', 'w14'],
      description: "Individuals who are goal-oriented and driven by achievements respond positively to goal-setting activities. This intervention can be effective for those who find motivation in reaching specific targets and milestones.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['w15', 'w15'],
      description: "Collaborative individuals who enjoy teamwork and joint efforts tend to benefit from MOB activities. Consider this intervention for team members who thrive in a supportive and cooperative environment.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['w16', 'w16'],
      description: "This intervention, focusing on continuous improvement and the pursuit of excellence, is beneficial for individuals who are driven by personal and professional growth. It can be effective in maintaining high motivation levels.",
      turncatedtext: "",
    },
  ]

  cardData2 = [
    {
      id: 'card1',
      title: ['w19', 'w19'],
      description: "Activities promoting mental and physical wellbeing are ideal for individuals who prioritize a healthy work-life balance and holistic wellness. This intervention can contribute to a positive and balanced work environment.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['w20', 'w20'],
      description: "The Hot Seat activity can be effective for fostering open communication and encouraging individuals to share their thoughts and ideas. It provides a platform for self-expression and can benefit team members who appreciate transparent and direct communication.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['w21', 'w21'],
      description: "Regular Q&A sessions are valuable for individuals who seek clarity and understanding. This intervention can be effective in addressing questions, concerns, and providing a forum for open dialogue within the team.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['w22', 'w22'],
      description: "Team members with an interest in the real estate domain can find this series beneficial. It aligns with their professional interests and can contribute to their motivation by offering relevant and engaging content.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['w23', 'w23'],
      description: "Individuals who appreciate structured processes and methodologies may find process consultation effective. It can be particularly beneficial for those who value organized and systematic approaches to problem-solving.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['w24', 'w24'],
      description: "This intervention is suitable for individuals who thrive on innovation and change. Redesigning processes or workflows can energize and motivate those who enjoy challenging the status quo and exploring new possibilities.",
      turncatedtext: "",
    },
  ]

  cardData3 = [
    {
      id: 'card1',
      title: ['w27', 'w27'],
      description: "Team-building activities that focus on getting to know each other can be particularly effective for individuals who value interpersonal connections and team collaboration. It creates a positive atmosphere and boosts motivation through strengthened relationships.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['w28', 'w28'],
      description: "Team members who enjoy collaborative problem-solving and creative thinking tend to benefit from these meetings. This intervention can enhance motivation by providing a platform for collective problem-solving and innovation.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['w29', 'w29'],
      description: "Social activities, such as Fun Lunch, are effective for team members who appreciate a relaxed and enjoyable work environment. It contributes to a positive team culture, fostering camaraderie and motivation through shared experiences.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['w30', 'w30'],
      description: "Outdoor activities, like team walks, appeal to individuals who value physical activity and enjoy a change of scenery. This intervention can boost motivation by promoting a healthy lifestyle and providing a refreshing break from routine work.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['w31', 'w31'],
      description: "Icebreaker sessions are beneficial for individuals who may initially feel reserved or unfamiliar within a group. It helps build a comfortable atmosphere, promoting open communication, and can positively impact motivation by creating a sense of inclusivity.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['w32', 'w32'],
      description: "For team members who enjoy experiential learning and hands-on activities, role-playing simulations can be highly motivating. It provides an opportunity for practical application of skills and fosters a dynamic and engaging environment.",
      turncatedtext: "",
    },
  ]

  override ngOnInit(): void {
    this.getFetchData('create');
  }

  motivationlevelgraphvalue: any = [
    ['Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat'],
    ['z19', 'aa19', 'ab19', 'ac19', 'ad19', 'ae19']
  ]

  timeavailablegraphvalue: any = [
    ['Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat'],
    ['z20', 'aa20', 'ab20', 'ac20', 'ad20', 'ae20']
  ]

  budgetavilablegraphvalue: any = [
    'Budget Available, INR', 'o48'
  ]
  databasecellname: any = [
    'be45', 'be46', 'be47', 'be48', 'be49', 'be50', 'be61', 'be62', 'be63', 'be64',
    'be65', 'be66', 'be53', 'be54', 'be55', 'be56', 'be57', 'be58', 'be77', 'be78',
    'be79', 'be80', 'be81', 'be82', 'be69', 'be70', 'be71', 'be72', 'be73', 'be74']

  periodcellname: any = [
    'ae11', 'af11', 'ae12', 'af12', 'ae13', 'af13', 'ae14', 'af14', 'ae15', 'af15', 'ae16', 'af16',
    'ae19', 'af19', 'ae20', 'af20', 'ae21', 'af21', 'ae22', 'af22', 'ae23', 'af23', 'ae24', 'af24',
    'ae27', 'af27', 'ae28', 'af28', 'ae29', 'af29', 'ae30', 'af30', 'ae31', 'af31', 'ae32', 'af32'
  ]


  timecellvalidation: boolean = false;
  timebudgetvalidationalert: boolean = false;

  getFetchData(fetchtype: string) {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = [];
    let apiname = '/changemanagement/fetchchangemanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.result = [];
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].changemanagementcmid);
              if (data.resultList[0].changeManagementCM.changeManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]];


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

              for (let i = 0; i < 6; i++) {
                this.jsonarray1.push({ 'x': [this.motivationlevelgraphvalue[0][i]], 'y': Number((data.resultList[0][this.motivationlevelgraphvalue[1][i]] * 100).toFixed(0)) });
                this.jsonarray2.push({ 'x': [this.timeavailablegraphvalue[0][i]], 'y': data.resultList[0][this.timeavailablegraphvalue[1][i]] });
              }
              this.jsonarray3.push({ 'x': this.budgetavilablegraphvalue[0], 'y': data.resultList[0][this.budgetavilablegraphvalue[1]] });

              this.motivationlevelgraph.series = [{ "name": data.resultList[0].y19, "data": this.jsonarray1 },]
              this.timeavailablegraph.series = [{ "name": data.resultList[0].y20, "data": this.jsonarray2 },]
              this.budgetavilablegraph.series = [{ "name": '', "data": this.jsonarray3 }]
              console.log("graph", this.motivationlevelgraph.series, this.timeavailablegraph.series, this.budgetavilablegraphvalue.series)

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


              
              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title[0] = String(data.resultList[0].changeManagementCM[this.cardData1[i].title[1]])
                this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              }
              for (let i = 0; i < this.cardData2.length; i++) {
                this.cardData2[i].title[0] = String(data.resultList[0].changeManagementCM[this.cardData2[i].title[1]])
                this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
              }
              for (let i = 0; i < this.cardData3.length; i++) {
                this.cardData3[i].title[0] = String(data.resultList[0].changeManagementCM[this.cardData3[i].title[1]])
                this.cardData3[i].turncatedtext = this.cardData3[i].description.substring(0, 100) + (this.cardData3[i].description.length > 100 ? '...' : '');
              }
              if ((data.resultList[0].bh6 == 'yes') || (this.timefinished)) {
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
    this.writeOrganizationWideIntervention();
  }

  writeOrganizationWideIntervention() {
    let apiname = '/changemanagement/singleinputchangemanagement';
    let organizationwideinterventionData = {
      "be45": this.result[0] == true ? 1 : 0,
      "be46": this.result[1] == true ? 1 : 0,
      "be47": this.result[2] == true ? 1 : 0,
      "be48": this.result[3] == true ? 1 : 0,
      "be49": this.result[4] == true ? 1 : 0,
      "be50": this.result[5] == true ? 1 : 0,
      "be61": this.result[6] == true ? 1 : 0,
      "be62": this.result[7] == true ? 1 : 0,
      "be63": this.result[8] == true ? 1 : 0,
      "be64": this.result[9] == true ? 1 : 0,
      "be65": this.result[10] == true ? 1 : 0,
      "be66": this.result[11] == true ? 1 : 0,
      "be53": this.result[12] == true ? 1 : 0,
      "be54": this.result[13] == true ? 1 : 0,
      "be55": this.result[14] == true ? 1 : 0,
      "be56": this.result[15] == true ? 1 : 0,
      "be57": this.result[16] == true ? 1 : 0,
      "be58": this.result[17] == true ? 1 : 0,
      "be77": this.result[18] == true ? 1 : 0,
      "be78": this.result[19] == true ? 1 : 0,
      "be79": this.result[20] == true ? 1 : 0,
      "be80": this.result[21] == true ? 1 : 0,
      "be81": this.result[22] == true ? 1 : 0,
      "be82": this.result[23] == true ? 1 : 0,
      "be69": this.result[24] == true ? 1 : 0,
      "be70": this.result[25] == true ? 1 : 0,
      "be71": this.result[26] == true ? 1 : 0,
      "be72": this.result[27] == true ? 1 : 0,
      "be73": this.result[28] == true ? 1 : 0,
      "be74": this.result[29] == true ? 1 : 0,
    }

    console.log('body', organizationwideinterventionData)
    this._api.logisticsDataWrite("changemanagement", 2,
      organizationwideinterventionData, apiname, 'changemanagementcmid').subscribe((data: any) => {
        if (data.status == "Success") {
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

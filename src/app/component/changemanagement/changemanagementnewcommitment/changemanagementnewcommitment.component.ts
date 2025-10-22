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
  selector: 'app-changemanagementnewcommitment',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './changemanagementnewcommitment.component.html',
  styleUrls: ['./changemanagementnewcommitment.component.scss']
})
export class ChangemanagementnewcommitmentComponent extends AbstractComponent {
  foodforthought: boolean = true;
  Commitmentlevelgraph: barchart;
  Timeavailablegraph: barchart;
  Budgetavilablegraph: barchart;
  checkdisable: boolean = false;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  result: any = [];
  textshow: { [key: string]: boolean } = {};
  organizationcheckbox: number = 0;
  disabled: boolean[] = [];
  individualcheckbox: number = 0;
  groupactivity1checkbox: number = 0;
  persondisable:boolean = false;

  individualactivity1checkbox: number = 0;
  commitmentgraphvalue: any = [
    ['Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat'],
    ['ak19', 'al19', 'am19', 'an19', 'ao19', 'ap19'],
  ]

  timegraphvalue: any = [
    ['Kabir', 'Anne', 'Rajas', 'Priya', 'Neha', 'Rajat'],
    ['ak20', 'al20', 'am20', 'an20', 'ao20', 'ap20'],
  ]

  budgetavilablegraphvalue = ['Budget Available, INR', 'o52']

  databasecellname = ['be85', 'be86', 'be87', 'be88', 'be89', 'be90',
    'be101', 'be102', 'be103', 'be104', 'be105', 'be106',
    'be93', 'be94', 'be95', 'be96', 'be97', 'be98',
    'be117', 'be118', 'be119', 'be120', 'be121', 'be122',
    'be109', 'be110', 'be111', 'be112', 'be113', 'be114']

  periodcellname = [
    'ap11', 'aq11', 'ap12', 'aq12', 'ap13', 'aq13', 'ap14', 'aq14', 'ap15', 'aq15', 'ap16', 'aq16',
    'ap19', 'aq19', 'ap20', 'aq20', 'ap21', 'aq21', 'ap22', 'aq22', 'ap23', 'aq23', 'ap24', 'aq24',
    'ap27', 'aq27', 'ap28', 'aq28', 'ap29', 'aq29', 'ap30', 'aq30', 'ap31', 'aq31', 'ap32', 'aq32',
  ]

  timecellvalidation: boolean = false;
  timebudgetvalidationalert: boolean = false;

  budgetcellname = [
    'p49', 'p50', 'p51'
  ]
  timecellname = [

    'ak10', 'ak10', 'ak10', 'ak10', 'ak10', 'ak10',
    'ak13', 'ak13', 'ak13', 'ak13', 'ak13', 'ak13',
    'ak16', 'ak16', 'ak16', 'ak16', 'ak16', 'ak16',


  ]
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.Commitmentlevelgraph = {
      series: [
        //   {
        //   data: [61, 51, 36, 37, 16, 30]
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
        text: "Commitment Level, % ",
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
        //   data: [84, 64, 174, 124, 84, 84]
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
      title: ['ah11', 'ah11'],
      description: "Personalized memos can reinforce commitment for inssdividuals who appreciate direct communication. Emphasize the collective vision and the impact of their contributions to maintain commitment levels.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['ah12', 'ah12'],
      description: "Sessions with motivational speakers are likely to deepen commitment, especially for those who respond well to external motivation. Align sessions with the organizational mission to inspire long-term dedication.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['ah13', 'ah13'],
      description: "Continued engagement in the Learning Club can strengthen commitment, particularly for individuals valuing continuous improvement. Tailor learning opportunities to align with personal and professional growth aspirations.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['ah14', 'ah14'],
      description: "Goal-setting activities are effective in sustaining commitment for those who are driven by achievements. Emphasize the connection between individual goals and the overall success of the team or organization.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['ah15', 'ah15'],
      description: "Collaborative activities like MOB can solidify commitment among team members. Encourage ongoing teamwork to maintain a sense of shared responsibility and dedication to collective success.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['ah16', 'ah16'],
      description: "Enrichment activities contribute to commitment by fostering a culture of continuous improvement. Emphasize the importance of personal and professional growth in aligning with organizational goals.",
      turncatedtext: "",
    },
  ]
  cardData2 = [
    {
      id: 'card1',
      title: ['ah19', 'ah19'],
      description:
        "Activities promoting mental and physical wellbeing contribute to commitment by prioritizing the overall health and satisfaction of team members. A healthy workforce is more likely to stay committed to organizational goals.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['ah20', 'ah20'],
      description:
        "The Hot Seat activity, encouraging open communication, can solidify commitment by fostering a culture of transparency and accountability. Use it strategically to address concerns and reinforce the importance of individual contributions.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['ah21', 'ah21'],
      description:
        "Monthly Q&A sessions, when conducted effectively, can enhance commitment by addressing queries and fostering a sense of inclusion. Emphasize the significance of individual contributions and the collective success of the team.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['ah22', 'ah22'],
      description:
        "For those with an interest in real estate, the series can boost commitment by providing relevant and engaging content. Showcase how their expertise contributes to the organization's success, reinforcing their commitment.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['ah23', 'ah23'],
      description:
        "Commitment is likely to strengthen through process consultation, especially for individuals valuing structured approaches. Highlight the positive impact of streamlined processes on individual and team success.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['ah24', 'ah24'],
      description:
        "Redesigning processes can contribute to commitment by signaling adaptability and growth. Emphasize how the willingness to embrace change contributes to the organization's success, fostering a commitment to innovation",
      turncatedtext: "",
    },

  ];
  cardData3 = [
    {
      id: 'card1',
      title: ['ah27', 'ah27'],
      description:
        "Team-building activities focusing on getting to know each other can enhance commitment, especially for individuals who value interpersonal connections. Highlighting the shared goals and aspirations of the team during these activities can reinforce commitment.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['ah28', 'ah28'],
      description:
        "Commitment is likely to strengthen through problem-solving meetings, particularly for those who value collaborative decision-making. Emphasize the collective impact of effective problem-solving on team success.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['ah29', 'ah29'],
      description:
        "Social activities, like Fun Lunch, contribute to commitment by fostering a positive team culture. Encourage these activities as opportunities to build camaraderie, reinforcing the importance of individual contributions to the overall team dynamic.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['ah30', 'ah30'],
      description:
        "Outdoor activities, such as team walks, can strengthen commitment, especially for those who appreciate a holistic approach to well-being. Use these moments to connect personal well-being with team success.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['ah31', 'ah31'],
      description:
        "Icebreaker sessions are effective in solidifying commitment by creating an inclusive and open environment. Use them strategically to strengthen connections and emphasize the collective journey towards shared goals.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['ah32', 'ah32'],
      description:
        "Commitment is likely to be reinforced through role-playing simulations, particularly for individuals who enjoy experiential learning. Highlight how these simulations contribute to team growth and success, fostering a sense of commitment to ongoing improvement.",
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
            this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.result = [];
            if (data.resultList != null) {
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
              for (let i = 0; i < 6; i++) {
                this.jsonarray1.push({ 'x': [this.commitmentgraphvalue[0][i]], 'y': Number((data.resultList[0][this.commitmentgraphvalue[1][i]] * 100).toFixed(0)) });
                this.jsonarray2.push({ 'x': [this.timegraphvalue[0][i]], 'y': data.resultList[0][this.timegraphvalue[1][i]] });
              }
              this.jsonarray3.push({ 'x': this.budgetavilablegraphvalue[0], 'y': data.resultList[0][this.budgetavilablegraphvalue[1]] });
              this.Commitmentlevelgraph.series = [{ "name": 'Commitment Level, %', "data": this.jsonarray1 },]
              this.Timeavailablegraph.series = [{ "name": 'Time Available, Minutes', "data": this.jsonarray2 },]
              this.Budgetavilablegraph.series = [{ "name": '', "data": this.jsonarray3 }]
              console.log("1st", this.Commitmentlevelgraph.series, "2nd", this.Timeavailablegraph.series, "3rd", this.Budgetavilablegraph.series)

              for (let i = 0; i < 18; i++) {
                this.disabled[i] = false;
              }
              for (let i = 0; i < 6; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = true;
                  if (fetchtype != 'update') {
                    this.organizationcheckbox = this.organizationcheckbox + 1;
                  }
                  // this.organizationcheckbox = this.organizationcheckbox + 1;
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
              // this.result = this.dataValue;
              // console.log("resu", this.dataValue)
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
      console.log("disa", this.disabled)
    }
    this.writeCommitment();
  }

  writeCommitment() {
    let apiname = '/changemanagement/singleinputchangemanagement';
    let commitmentData = {
      "be85": this.result[0] == true ? 1 : 0,
      "be86": this.result[1] == true ? 1 : 0,
      "be87": this.result[2] == true ? 1 : 0,
      "be88": this.result[3] == true ? 1 : 0,
      "be89": this.result[4] == true ? 1 : 0,
      "be90": this.result[5] == true ? 1 : 0,
      "be101": this.result[6] == true ? 1 : 0,
      "be102": this.result[7] == true ? 1 : 0,
      "be103": this.result[8] == true ? 1 : 0,
      "be104": this.result[9] == true ? 1 : 0,
      "be105": this.result[10] == true ? 1 : 0,
      "be106": this.result[11] == true ? 1 : 0,
      "be93": this.result[12] == true ? 1 : 0,
      "be94": this.result[13] == true ? 1 : 0,
      "be95": this.result[14] == true ? 1 : 0,
      "be96": this.result[15] == true ? 1 : 0,
      "be97": this.result[16] == true ? 1 : 0,
      "be98": this.result[17] == true ? 1 : 0,
      "be117": this.result[18] == true ? 1 : 0,
      "be118": this.result[19] == true ? 1 : 0,
      "be119": this.result[20] == true ? 1 : 0,
      "be120": this.result[21] == true ? 1 : 0,
      "be121": this.result[22] == true ? 1 : 0,
      "be122": this.result[23] == true ? 1 : 0,
      "be109": this.result[24] == true ? 1 : 0,
      "be110": this.result[25] == true ? 1 : 0,
      "be111": this.result[26] == true ? 1 : 0,
      "be112": this.result[27] == true ? 1 : 0,
      "be113": this.result[28] == true ? 1 : 0,
      "be114": this.result[29] == true ? 1 : 0,

    }
    console.log('data', commitmentData)
    this._api.changeManagementDataWrite("changemanagement", 3,
      commitmentData, apiname, 'changemanagementcmid').subscribe((data: any) => {
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
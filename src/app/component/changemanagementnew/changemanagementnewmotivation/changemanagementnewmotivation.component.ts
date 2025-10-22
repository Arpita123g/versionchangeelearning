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
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
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
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule, MatIconModule, TippyDirective],
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
  language: any = [];
  languageid: number = 0;
  budgetcellname = [
    'p45', 'p46', 'p47',
  ]
  timecellname = [
    'z10', 'z10', 'z10', 'z10', 'z10', 'z10',
    'z13', 'z13', 'z13', 'z13', 'z13', 'z13',
    'z16', 'z16', 'z16', 'z16', 'z16', 'z16',
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
      }
    }

    this.budgetavilablegraph = {
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
      }
    }
  }

  cardData1 = [
    {
      id: 'card1',
      title: ['b46', 'b46'],
      description: "b236",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['b47', 'b47'],
      description: "b237",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['b48', 'b48'],
      description: "b238",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['b49', 'b49'],
      description: "b239",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['b50', 'b50'],
      description: "b240",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['b51', 'b51'],
      description: "b241",
      turncatedtext: "",
    },
  ]

  cardData2 = [
    {
      id: 'card1',
      title: ['b61', 'b61'],
      description:
        "b242",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['b62', 'b62'],
      description:
        "b243",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['b63', 'b63'],
      description:
        "b244",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['b64', 'b64'],
      description:
        "b245",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['b65', 'b65'],
      description:
        "b246",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['b66', 'b66'],
      description:
        "b247",
      turncatedtext: "",
    },
  ];

  cardData3 = [
    {
      id: 'card1',
      title: ['b74', 'b74'],
      description:
        "b248",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['b75', 'b75'],
      description:
        "b249",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['b76', 'b76'],
      description:
        "b250",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['b77', 'b77'],
      description:
        "b251",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['b78', 'b78'],
      description:
        "b252",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['b79', 'b79'],
      description:
        "b253",
      turncatedtext: "",
    },
  ];

  override ngOnInit(): void {
    this.getFetchData('create');
  }

  motivationlevelgraphvalue: any = [
    ['b34', 'b35', 'b36', 'b37', 'b38', 'b39'],
    ['z19', 'aa19', 'ab19', 'ac19', 'ad19', 'ae19']
  ]

  timeavailablegraphvalue: any = [
    ['b34', 'b35', 'b36', 'b37', 'b38', 'b39'],
    ['z20', 'aa20', 'ab20', 'ac20', 'ad20', 'ae20']
  ]

  budgetavilablegraphvalue: any = [
    'b44', 'o48'
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
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.result = [];
            if (data.resultList != null) {
              this.language = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()];
              this.languageid = data.resultList[0].changeManagementNewLM.changemanagementnewlmid;

              this._global.casemanagementid.next(data.resultList[0].changemanagementnewcmid);
              if (data.resultList[0].changeManagementNewCM.changeManagementNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0].changemanagementnewdata[this.databasecellname[i]];


              }
              for (let i = 30; i < 66; i++) {
                this.result[i] = data.resultList[0].changeManagementNewCM.changemanagementnewperioddata[this.periodcellname[i - 30]]

              }

              for (let i = 66; i < 69; i++) {
                this.result[i] = data.resultList[0].changemanagementnewdata[this.budgetcellname[i - 66]]
              }
              for (let i = 69; i < 87; i++) {
                this.result[i] = data.resultList[0].changemanagementnewdata[this.timecellname[i - 69]]
                if (this.result[i] == 0) {
                  this.timecellvalidation = true;
                }
              }

              this.motivationlevelgraph = {
                ...this.motivationlevelgraph,
                xaxis: {
                  ...this.motivationlevelgraph.xaxis,
                  categories: [
                    this.language.b34,
                    this.language.b35,
                    this.language.b36,
                    this.language.b37,
                    this.language.b38,
                    this.language.b39,
                  ]
                },
                title: {
                  text: this.language.b87,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              this.timeavailablegraph = {
                ...this.timeavailablegraph,
                xaxis: {
                  ...this.timeavailablegraph.xaxis,
                  categories: [
                    this.language.b34,
                    this.language.b35,
                    this.language.b36,
                    this.language.b37,
                    this.language.b38,
                    this.language.b39,
                  ]
                },
                title: {
                  text: this.language.b43,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              this.budgetavilablegraph = {
                ...this.budgetavilablegraph,
                xaxis: {
                  ...this.budgetavilablegraph.xaxis,
                  categories: [
                    this.language.b44,
                  ]
                },
                title: {
                  text: '',
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              for (let i = 0; i < 6; i++) {
                this.jsonarray1.push({ 'x': this.language[this.motivationlevelgraphvalue[0][i]], 'y': Number((data.resultList[0].changemanagementnewdata[this.motivationlevelgraphvalue[1][i]] * 100).toFixed(0)) });
                this.jsonarray2.push({ 'x': this.language[this.timeavailablegraphvalue[0][i]], 'y': data.resultList[0].changemanagementnewdata[this.timeavailablegraphvalue[1][i]] });
              }
              this.jsonarray3.push({ 'x': this.language[this.budgetavilablegraphvalue[0]], 'y': data.resultList[0].changemanagementnewdata[this.budgetavilablegraphvalue[1]] });

              this.motivationlevelgraph.series = [{ "name": '', "data": this.jsonarray1 },]
              this.timeavailablegraph.series = [{ "name": '', "data": this.jsonarray2 },]
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

              if ((data.resultList[0].bh6 == 'yes') || (this.timefinished)) {
                this.checkdisable = true;
                for (let i = 0; i < 18; i++) {
                  this.disabled[i] = true;
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
    let apiname = '/changemanagementnew/singleinputchangemanagementnew';
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
    this._api.Languagedatawrite("changemanagementnew", 2,
      organizationwideinterventionData, apiname, 'changemanagementnewcmid', this.languageselect, this.languageid, 'changemanagementnewlmid').subscribe((data: any) => {
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

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
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

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
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, TippyDirective],
  templateUrl: './changemanagementnewawareness.component.html',
  styleUrls: ['./changemanagementnewawareness.component.scss']
})
export class ChangemanagementnewawarenessComponent extends AbstractComponent {
  foodforthought: boolean = true;
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
  language: any = [];
  languageid: number = 0;

  public trigger: number = 0;

  awarenessgraphvalue: any = [
    ['b34', 'b35', 'b36', 'b37', 'b38', 'b39'],
    ['o19', 'p19', 'q19', 'r19', 's19', 't19'],
  ]

  timegraphvalue: any = [
    ['b34', 'b35', 'b36', 'b37', 'b38', 'b39'],
    ['o20', 'p20', 'q20', 'r20', 's20', 't20'],
  ]

  budgetgraphvalue = ['b44', 'o44']

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

    this.Timeavailablegraph = {
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

    this.Budgetavilablegraph = {
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
      description: "b52",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['b47', 'b47'],
      description: "b53",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['b48', 'b48'],
      description: "b54",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['b49', 'b49'],
      description: "b55",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['b50', 'b50'],
      description: "b56",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['b51', 'b51'],
      description: "b57",
      turncatedtext: "",
    },
  ]

  cardData2 = [
    {
      id: 'card1',
      title: ['b61', 'b61'],
      description:
        "b67",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['b62', 'b62'],
      description:
        "b68",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['b63', 'b63'],
      description:
        "b69",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['b64', 'b64'],
      description:
        "b70",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['b65', 'b65'],
      description:
        "b71",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['b66', 'b66'],
      description:
        "b72",
      turncatedtext: "",
    },
  ];

  cardData3 = [
    {
      id: 'card1',
      title: ['b74', 'b74'],
      description:
        "b80",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ['b75', 'b75'],
      description:
        "b81",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: ['b76', 'b76'],
      description:
        "b82",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: ['b77', 'b77'],
      description:
        "b83",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: ['b78', 'b78'],
      description:
        "b84",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: ['b79', 'b79'],
      description:
        "b85",
      turncatedtext: "",
    },
  ];

  override ngOnInit(): void {
    this.getFetchData('create');
  }

  getFetchData(fetchtype: string) {
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.language = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()];
              this.languageid = data.resultList[0].changeManagementNewLM.changemanagementnewlmid;

              this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.result = [];
              this._global.casemanagementid.next(data.resultList[0].changemanagementnewcmid);
              if (data.resultList[0].changeManagementNewCM.changeManagementNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }

              for (let i = 0; i < 30; i++) {
                this.result[i] = data.resultList[0].changemanagementnewdata[this.databasecellname[i]]
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
              console.log("rr", this.result)

              this.Awarenesslevelgraph = {
                ...this.Awarenesslevelgraph,
                xaxis: {
                  ...this.Awarenesslevelgraph.xaxis,
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
                  text: this.language.b107,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };

              this.Timeavailablegraph = {
                ...this.Timeavailablegraph,
                xaxis: {
                  ...this.Timeavailablegraph.xaxis,
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

              this.Budgetavilablegraph = {
                ...this.Budgetavilablegraph,
                xaxis: {
                  ...this.Budgetavilablegraph.xaxis,
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
                this.jsonarray1.push({ 'x': this.language[this.awarenessgraphvalue[0][i]], 'y': Number((data.resultList[0].changemanagementnewdata[this.awarenessgraphvalue[1][i]] * 100).toFixed(0)) });
                this.jsonarray2.push({ 'x': this.language[this.timegraphvalue[0][i]], 'y': data.resultList[0].changemanagementnewdata[this.timegraphvalue[1][i]] });

              }

              this.jsonarray3.push({ 'x': this.language[this.budgetgraphvalue[0]], 'y': data.resultList[0].changemanagementnewdata[this.budgetgraphvalue[1]] });


              this.Awarenesslevelgraph.series = [{ "name": '', "data": this.jsonarray1 }]
              this.Timeavailablegraph.series = [{ "name": '', "data": this.jsonarray2 }]
              this.Budgetavilablegraph.series = [{ "name": '', "data": this.jsonarray3 }]

              console.log("1st", this.Awarenesslevelgraph.series, '2nd', this.Timeavailablegraph.series, '3rd', this.Budgetavilablegraph.series)
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
    let apiname = '/changemanagementnew/singleinputchangemanagementnew';
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
    this._api.Languagedatawrite("changemanagementnew", 1,
      awarenessData, apiname, 'changemanagementnewcmid', this.languageselect, this.languageid, 'changemanagementnewlmid').subscribe((data: any) => {
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

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
  // legend: ApexLegend;
};
@Component({
  selector: 'app-marketresearch',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './marketresearch.component.html',
  styleUrls: ['./marketresearch.component.scss']
})
export class MarketresearchComponent extends AbstractComponent {
  gamegenrepreference: barchart;
  Malegamerspreference: barchart;
  femalegamerspreference: barchart;
  nccsHouseholdgraph: barchart;
  communicationchannelmalegraph: barchart;
  communicationchannelfemalegraph: barchart;
  mobilegamergraph: barchart;
  mobileadsspendgraph: barchart;
  mobilegamingrevenuegraph: barchart;
  gamegenrepreferenceMalegrapharray: any = [];
  gamegenrepreferenceFemalegrapharray: any = [];
  age15to19: any = [];
  age20to24: any = [];
  age25to34: any = [];
  age35above: any = [];
  femaleage15to19: any = [];
  femaleage20to24: any = [];
  femaleage25to34: any = [];
  femaleage35above: any = [];
  nccsaarry: any = [];
  nccsbarry: any = [];
  nccscarry: any = [];
  nccsHouseholdarry: any = [];
  communicationmale15to19arrey: any = [];
  communicationmale20to24arrey: any = [];
  communicationmale25to34arrey: any = [];
  communicationmale35above: any = [];
  communicatiofemale15to19arrey: any = [];
  communicatiofemale20to24arrey: any = [];
  communicatiofemale25to34arrey: any = [];
  communicatiofemale35above: any = [];
  mobilegamersarrey: any = [];
  mobileadsspendarrey: any = [];
  mobilegamingrevenuearrey: any = [];
  malegameractivitytext: string = '';
  femalegameractivitytext: string = '';
  monetizationtext: string = '';
  foodforthought: boolean = true;
  language: any = [];

  gamegenrepreferencemalefemalegraph = [
    ["b25", "e99", "f99"],
    ["b26", "e100", "f100"],
    ["b27", "e101", "f101"],
    ["b28", "e102", "f102"],
    ["b29", "e103", "f103"],
  ];
  maleGamersgraph = [
    ["b25", "e107", "f107", "g107", "h107"],
    ["b26", "e108", "f108", "g108", "h108"],
    ["b27", "e109", "f109", "g109", "h109"],
    ["b28", "e110", "f110", "g110", "h110"],
    ["b29", "e111", "f111", "g111", "h111"],
  ];
  femaleaGamersgraph = [
    ["b25", "e115", "f115", "g115", "h115"],
    ["b26", "e116", "f116", "g116", "h116"],
    ["b27", "e117", "f117", "g117", "h117"],
    ["b28", "e118", "f118", "g118", "h118"],
    ["b29", "e119", "f119", "g119", "h119"],
  ];
  nccsHousehold = [
    ["b25", "e123", "f123", "g123",],
    ["b26", "e124", "f124", "g124",],
    ["b27", "e125", "f125", "g125",],
    ["b28", "e126", "f126", "g126",],
    ["b29", "e127", "f127", "g127",],
  ];
  communicationchannelmale = [
    ["b40", "e131", "f131", "g131", "h131"],
    ["b41", "e132", "f132", "g132", "h132"],
    ["b42", "e133", "f133", "g133", "h133"],
    ["b335", "e134", "f134", "g134", "h134"],
    ["b43", "e135", "f135", "g135", "h135"],
    ["b336", "e136", "f136", "g136", "h136"],
    ["b44", "e137", "f137", "g137", "h137"],
    ["b45", "e138", "f138", "g138", "h138"],
    ["b46", "e139", "f139", "g139", "h139"],
    ["b47", "e140", "f140", "g140", "h140"],
  ];
  communicationchannelfemale = [
    ["b40", "e147", "f147", "g147", "h147"],
    ["b41", "e148", "f148", "g148", "h148"],
    ["b42", "e149", "f149", "g149", "h149"],
    ["b335", "e150", "f150", "g150", "h150"],
    ["b43", "e151", "f151", "g151", "h151"],
    ["b336", "e152", "f152", "g152", "h152"],
    ["b44", "e153", "f153", "g153", "h153"],
    ["b45", "e154", "f154", "g154", "h154"],
    ["b46", "e155", "f155", "g155", "h155"],
    ["b47", "e156", "f156", "g156", "h156"],
  ];
  mobilegamers = [
    ["b310", "e166"],
    ["b309", "e167"],
    ["b308", "e168"],
    ["b307", "e169"],
    ["b306", "e170"],
  ];
  mobileadsspend = [
    ["b312", "e173"],
    ["b311", "e174"],
    ["b310", "e175"],
    ["b309", "e176"],
    ["b308", "e177"],
    ["b307", "e178"],
    ["b306", "e179"],
  ];
  mobilegamingrevenue = [
    ["b310", "e182"],
    ["b309", "e183"],
    ["b308", "e184"],
    ["b307", "e185"],
    ["b306", "e186"],
  ];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.gamegenrepreference = {
      series: [
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: this.plotoption[5],
      dataLabels: this.datalabels[0],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[0],
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
        // text: this.language.b24,
        // // text: "Game Genre Preference",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        //   fontSize: "18px",

        // }
      },
      fill: {
        opacity: 1
      },
      // tooltip: {
      //   // y: {
      //   //   formatter: function(val) {
      //   //     return "$ " + val + " thousands";
      //   //   }
      //   // }
      // }
    };
    this.Malegamerspreference = {
      series: [],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: this.plotoption[5],
      dataLabels: this.datalabels[0],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[2],
      yaxis: this.yaxis[1],
      title: {
        text: this.language.b33,
        // text: "Male Gamers Preference, Cohort wise",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",

        }
      },
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
    };
    this.femalegamerspreference = {
      series: [
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: this.plotoption[5],
      dataLabels: this.datalabels[0],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[2],
      yaxis: this.yaxis[1],
      title: {
        text: this.language.b34,
        // text: "Female Gamers Preference, Cohort wise",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",

        }
      },
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
    };
    this.nccsHouseholdgraph = {
      series: [
        // {
        //   name: "Immersion Level",
        //   data: [44, 55, 57, 56,]
        // },
        // {
        //   name: "Emotional Resonance",
        //   data: [76, 85, 101, 98,]
        // },

      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: this.plotoption[5],
      dataLabels: this.datalabels[0],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[2],
      yaxis: this.yaxis[1],
      title: {
        text: this.language.b36,
        // text: "NCCS Household Genre Preference",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",

        }
      },
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
    };
    this.communicationchannelmalegraph = {
      series: [

      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: this.plotoption[5],
      dataLabels: this.datalabels[0],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[2],
      yaxis: this.yaxis[1],
      title: {
        text: this.language.b39,
        // text: "Male Gamers Activities",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",

        }
      },
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
    };
    this.communicationchannelfemalegraph = {
      series: [
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: this.plotoption[5],
      dataLabels: this.datalabels[0],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[2],
      yaxis: this.yaxis[1],
      title: {
        text: this.language.b49,
        // text: "Female Gamers Activities",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",

        }
      },
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
    };
    this.mobilegamergraph = {
      series: [

      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: this.plotoption[5],
      dataLabels: this.datalabels[0],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[2],
      yaxis: this.yaxis[0],
      title: {
        text: this.language.b53,
        // text: "Mobile Gamers (Mn)",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",
        }
      },
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
    };
    this.mobileadsspendgraph = {
      series: [
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: this.plotoption[5],
      dataLabels: this.datalabels[0],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[2],
      yaxis: this.yaxis[0],
      title: {
        text: this.language.b55,
        // text: "Mobile Ads Spend, INR Bn",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",
        }
      },
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
    };
    this.mobilegamingrevenuegraph = {
      series: [

      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: this.plotoption[5],
      dataLabels: this.datalabels[0],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[2],
      yaxis: this.yaxis[0],
      title: {
        text: this.language.b57,
        // text: "Mobile Gaming Revenue, USD Mn",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
          fontSize: "18px",

        }
      },
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
    };
  }


  override ngOnInit(): void {
    this.getFetchData();
  }

  getFormattedText(text: string): string {
  return text?.replace(/\n/g, '<br>') || '';
}
  getFetchData() {
    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].consumerbehaviournewcmid);
            if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }
            this.language = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];


            this.gamegenrepreference = {
              ...this.gamegenrepreference,
              xaxis: {
                ...this.gamegenrepreference.xaxis,
                categories: [
                  this.language.b25,
                  this.language.b26,
                  this.language.b27,
                  this.language.b28,
                  this.language.b29,
                ]
              },
              title: {
                text: this.language.b24,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.Malegamerspreference = {
              ...this.Malegamerspreference,
              xaxis: {
                ...this.Malegamerspreference.xaxis,
                categories: [
                  this.language.b25,
                  this.language.b26,
                  this.language.b27,
                  this.language.b28,
                  this.language.b29,
                ]
              },
              title: {
                text: this.language.b33,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.femalegamerspreference = {
              ...this.femalegamerspreference,
              xaxis: {
                ...this.femalegamerspreference.xaxis,
                categories: [
                  this.language.b25,
                  this.language.b26,
                  this.language.b27,
                  this.language.b28,
                  this.language.b29,
                ]
              },
              title: {
                text: this.language.b34,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.nccsHouseholdgraph = {
              ...this.nccsHouseholdgraph,
              xaxis: {
                ...this.nccsHouseholdgraph.xaxis,
                categories: [
                  this.language.b25,
                  this.language.b26,
                  this.language.b27,
                  this.language.b28,
                  this.language.b29,
                ]
              },
              title: {
                text: this.language.b36,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.communicationchannelmalegraph = {
              ...this.communicationchannelmalegraph,
              xaxis: {
                ...this.communicationchannelmalegraph.xaxis,
                categories: [
                  this.language.b40,
                  this.language.b41,
                  this.language.b43,
                  this.language.b335,
                  this.language.b42,
                  this.language.b336,
                  this.language.b45,
                  this.language.b44,
                  this.language.b46,
                  this.language.b47,
                ]
              },
              title: {
                text: this.language.b39,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };
            this.communicationchannelfemalegraph = {
              ...this.communicationchannelfemalegraph,
              xaxis: {
                ...this.communicationchannelfemalegraph.xaxis,
                categories: [
                  this.language.b40,
                  this.language.b41,
                  this.language.b43,
                  this.language.b335,
                  this.language.b42,
                  this.language.b336,
                  this.language.b45,
                  this.language.b44,
                  this.language.b46,
                  this.language.b47,
                ]
              },
              title: {
                text: this.language.b49,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.mobilegamergraph = {
              ...this.mobilegamergraph,
              xaxis: {
                ...this.mobilegamergraph.xaxis,
                categories: [
                  this.language.b310,
                  this.language.b309,
                  this.language.b308,
                  this.language.b307,
                  this.language.b306,
                ]
              },
              title: {
                text: this.language.b53,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.mobileadsspendgraph = {
              ...this.mobileadsspendgraph,
              xaxis: {
                ...this.mobileadsspendgraph.xaxis,
                categories: [
                  this.language.b312,
                  this.language.b311,
                  this.language.b310,
                  this.language.b309,
                  this.language.b308,
                  this.language.b307,
                  this.language.b306,
                ]
              },
              title: {
                text: this.language.b55,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };

            this.mobilegamingrevenuegraph = {
              ...this.mobilegamingrevenuegraph,
              xaxis: {
                ...this.mobilegamingrevenuegraph.xaxis,
                categories: [
                  this.language.b310,
                  this.language.b309,
                  this.language.b308,
                  this.language.b307,
                  this.language.b306,
                ]
              },
              title: {
                text: this.language.b57,
                offsetY: 0,
                align: "center",
                style: {
                  fontWeight: "bold",
                }
              }
            };


            //Game Genre
            for (let i = 0; i < this.gamegenrepreferencemalefemalegraph.length; i++) {
              this.gamegenrepreferenceMalegrapharray.push({ 'x': this.language[this.gamegenrepreferencemalefemalegraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.gamegenrepreferencemalefemalegraph[i][1]] * 100).toFixed(0) });
              this.gamegenrepreferenceFemalegrapharray.push({ 'x': this.language[this.gamegenrepreferencemalefemalegraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.gamegenrepreferencemalefemalegraph[i][2]] * 100).toFixed(0) });
            }
            this.gamegenrepreference.series = [
              { "name": this.language.b30, "data": this.gamegenrepreferenceMalegrapharray },
              { "name": this.language.b31, "data": this.gamegenrepreferenceFemalegrapharray }];

            //Male Gamers
            for (let i = 0; i < this.maleGamersgraph.length; i++) {
              this.age15to19.push({ 'x': this.language[this.maleGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.maleGamersgraph[i][1]] * 100).toFixed(0) });
              this.age20to24.push({ 'x': this.language[this.maleGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.maleGamersgraph[i][2]] * 100).toFixed(0) });
              this.age25to34.push({ 'x': this.language[this.maleGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.maleGamersgraph[i][3]] * 100).toFixed(0) });
              this.age35above.push({ 'x': this.language[this.maleGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.maleGamersgraph[i][4]] * 100).toFixed(0) });
            }
            this.Malegamerspreference.series = [
              { "name": this.language.b303, "data": this.age15to19 },
              { "name": this.language.b304, "data": this.age20to24 },
              { "name": this.language.b305, "data": this.age25to34 },
              { "name": this.language.b300, "data": this.age35above },
            ]

            //Female Gamers
            for (let i = 0; i < this.femaleaGamersgraph.length; i++) {
              this.femaleage15to19.push({ 'x': this.language[this.femaleaGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.femaleaGamersgraph[i][1]] * 100).toFixed(0) });
              this.femaleage20to24.push({ 'x': this.language[this.femaleaGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.femaleaGamersgraph[i][2]] * 100).toFixed(0) });
              this.femaleage25to34.push({ 'x': this.language[this.femaleaGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.femaleaGamersgraph[i][3]] * 100).toFixed(0) });
              this.femaleage35above.push({ 'x': this.language[this.femaleaGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.femaleaGamersgraph[i][4]] * 100).toFixed(0) });

            }
            this.femalegamerspreference.series = [
              { "name": this.language.b303, "data": this.femaleage15to19 },
              { "name": this.language.b304, "data": this.femaleage20to24 },
              { "name": this.language.b305, "data": this.femaleage25to34 },
              { "name": this.language.b300, "data": this.femaleage35above },

            ]

            //Nccs Household
            for (let i = 0; i < this.nccsHousehold.length; i++) {
              this.nccsaarry.push({ 'x': this.language[this.nccsHousehold[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.nccsHousehold[i][1]] * 100).toFixed(0) });
              this.nccsbarry.push({ 'x': this.language[this.nccsHousehold[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.nccsHousehold[i][2]] * 100).toFixed(0) });
              this.nccscarry.push({ 'x': this.language[this.nccsHousehold[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.nccsHousehold[i][3]] * 100).toFixed(0) });

            }
            this.nccsHouseholdgraph.series = [
              { "name": this.language.b80, "data": this.nccsaarry },
              { "name": this.language.b81, "data": this.nccsbarry },
              { "name": this.language.b82, "data": this.nccscarry },

            ]

            //Communication Male Activities
            for (let i = 0; i < this.communicationchannelmale.length; i++) {
              this.communicationmale15to19arrey.push({ 'x': this.labelsBreak(this.language[this.communicationchannelmale[i][0]]), 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.communicationchannelmale[i][1]] * 100).toFixed(0) });
              this.communicationmale20to24arrey.push({ 'x': this.labelsBreak(this.language[this.communicationchannelmale[i][0]]), 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.communicationchannelmale[i][2]] * 100).toFixed(0) });
              this.communicationmale25to34arrey.push({ 'x': this.labelsBreak(this.language[this.communicationchannelmale[i][0]]), 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.communicationchannelmale[i][3]] * 100).toFixed(0) });
              this.communicationmale35above.push({ 'x': this.labelsBreak(this.language[this.communicationchannelmale[i][0]]), 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.communicationchannelmale[i][4]] * 100).toFixed(0) })

            }
            this.communicationchannelmalegraph.series = [
              { "name": this.language.b303, "data": this.communicationmale15to19arrey },
              { "name": this.language.b304, "data": this.communicationmale20to24arrey },
              { "name": this.language.b305, "data": this.communicationmale25to34arrey },
              { "name": this.language.b300, "data": this.communicationmale35above },

            ]

            //Communication FeMale Activities
            for (let i = 0; i < this.communicationchannelfemale.length; i++) {
              this.communicatiofemale15to19arrey.push({ 'x': this.labelsBreak(this.language[this.communicationchannelfemale[i][0]]), 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.communicationchannelfemale[i][1]] * 100).toFixed(0) });
              this.communicatiofemale20to24arrey.push({ 'x': this.labelsBreak(this.language[this.communicationchannelfemale[i][0]]), 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.communicationchannelfemale[i][2]] * 100).toFixed(0) });
              this.communicatiofemale25to34arrey.push({ 'x': this.labelsBreak(this.language[this.communicationchannelfemale[i][0]]), 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.communicationchannelfemale[i][3]] * 100).toFixed(0) });
              this.communicatiofemale35above.push({ 'x': this.labelsBreak(this.language[this.communicationchannelfemale[i][0]]), 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.communicationchannelfemale[i][4]] * 100).toFixed(0) })

            }
            this.communicationchannelfemalegraph.series = [
              { "name": this.language.b303, "data": this.communicatiofemale15to19arrey },
              { "name": this.language.b304, "data": this.communicatiofemale20to24arrey },
              { "name": this.language.b305, "data": this.communicatiofemale25to34arrey },
              { "name": this.language.b300, "data": this.communicatiofemale35above },

            ]

            //Mobile Gamers
            for (let i = 0; i < this.mobilegamers.length; i++) {
              this.mobilegamersarrey.push({ 'x': this.language[this.mobilegamers[i][0]], 'y': data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.mobilegamers[i][1]] })
            }
            this.mobilegamergraph.series = [{ "name": this.language.b53, "data": this.mobilegamersarrey }];

            //Mobile Ads Spends
            for (let i = 0; i < this.mobileadsspend.length; i++) {
              this.mobileadsspendarrey.push({ 'x': this.language[this.mobileadsspend[i][0]], 'y': data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.mobileadsspend[i][1]] })
            }
            this.mobileadsspendgraph.series = [{ "name": this.language.b55, "data": this.mobileadsspendarrey }];

            //Mobile Gaming
            for (let i = 0; i < this.mobilegamingrevenue.length; i++) {
              this.mobilegamingrevenuearrey.push({ 'x': this.language[this.mobilegamingrevenue[i][0]], 'y': data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.mobilegamingrevenue[i][1]] })
            }
            this.mobilegamingrevenuegraph.series = [{ "name": this.language.b57, "data": this.mobilegamingrevenuearrey }];
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
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, NgApexchartsModule } from "ng-apexcharts";
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FoodforthoughtConsumerComponent } from '../foodforthoughtconsumer/foodforthoughtconsumer.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  maekettext: string = '';
  malegameractivitytext: string = '';
  femalegameractivitytext: string = '';
  monetizationtext: string = '';
  foodforthought: boolean = true;
  gamegenrepreferencemalefemalegraph = [
    ["d99", "e99", "f99"],
    ["d100", "e100", "f100"],
    ["d101", "e101", "f101"],
    ["d102", "e102", "f102"],
    ["d103", "e103", "f103"],
  ];
  maleGamersgraph = [
    ["d107", "e107", "f107", "g107", "h107"],
    ["d108", "e108", "f108", "g108", "h108"],
    ["d109", "e109", "f109", "g109", "h109"],
    ["d110", "e110", "f110", "g110", "h110"],
    ["d111", "e111", "f111", "g111", "h111"],
  ];
  femaleaGamersgraph = [
    ["d115", "e115", "f115", "g115", "h115"],
    ["d116", "e116", "f116", "g116", "h116"],
    ["d117", "e117", "f117", "g117", "h117"],
    ["d118", "e118", "f118", "g118", "h118"],
    ["d119", "e119", "f119", "g119", "h119"],
  ];
  nccsHousehold = [
    ["d123", "e123", "f123", "g123",],
    ["d124", "e124", "f124", "g124",],
    ["d125", "e125", "f125", "g125",],
    ["d126", "e126", "f126", "g126",],
    ["d127", "e127", "f127", "g127",],
  ];
  communicationchannelmale = [
    ["d131", "e131", "f131", "g131", "h131"],
    ["d132", "e132", "f132", "g132", "h132"],
    ["d133", "e133", "f133", "g133", "h133"],
    ["d134", "e134", "f134", "g134", "h134"],
    ["d135", "e135", "f135", "g135", "h135"],
    ["d136", "e136", "f136", "g136", "h136"],
    ["d137", "e137", "f137", "g137", "h137"],
    ["d138", "e138", "f138", "g138", "h138"],
    ["d139", "e139", "f139", "g139", "h139"],
    ["d140", "e140", "f140", "g140", "h140"],
  ];
  communicationchannelfemale = [
    ["d147", "e147", "f147", "g147", "h147"],
    ["d148", "e148", "f148", "g148", "h148"],
    ["d149", "e149", "f149", "g149", "h149"],
    ["d150", "e150", "f150", "g150", "h150"],
    ["d151", "e151", "f151", "g151", "h151"],
    ["d152", "e152", "f152", "g152", "h152"],
    ["d153", "e153", "f153", "g153", "h153"],
    ["d154", "e154", "f154", "g154", "h154"],
    ["d155", "e155", "f155", "g155", "h155"],
    ["d156", "e156", "f156", "g156", "h156"],
  ];
  mobilegamers = [
    ["d166", "e166"],
    ["d167", "e167"],
    ["d168", "e168"],
    ["d169", "e169"],
    ["d170", "e170"],
  ];
  mobileadsspend = [
    ["d173", "e173"],
    ["d174", "e174"],
    ["d175", "e175"],
    ["d176", "e176"],
    ["d177", "e177"],
    ["d178", "e178"],
    ["d179", "e179"],
  ];
  mobilegamingrevenue = [
    ["d182", "e182"],
    ["d183", "e183"],
    ["d184", "e184"],
    ["d185", "e185"],
    ["d186", "e186"],
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
        text: "Game Genre Preference",
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
        text: "Male Gamers Preference, Cohort wise",
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
        text: "Female Gamers Preference, Cohort wise",
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
        text: "NCCS Household Genre Preference",
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
        text: "Male Gamers Activities",
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
        text: "Female Gamers Activities",
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
        text: "Mobile Gamers (Mn)",
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
        text: "Mobile Ads Spend, INR Bn",
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
        text: "Mobile Gaming Revenue, USD Mn",
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
  getFetchData() {
    let apiname = '/consumerbehaviour/fetchconsumerbehaviour';
    this._api.consumerFetchData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this._global.consumerbehaviourcmid.next(data.resultList[0].consumerbehaviourcmid);
            if (data.resultList[0].consumerBehaviourCM.consumerBehaviourCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }
            for (let i = 0; i < this.gamegenrepreferencemalefemalegraph.length; i++) {
              this.gamegenrepreferenceMalegrapharray.push({ 'x': data.resultList[0].consumerBehaviourCM[this.gamegenrepreferencemalefemalegraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.gamegenrepreferencemalefemalegraph[i][1]] * 100).toFixed(0) });
              this.gamegenrepreferenceFemalegrapharray.push({ 'x': data.resultList[0].consumerBehaviourCM[this.gamegenrepreferencemalefemalegraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.gamegenrepreferencemalefemalegraph[i][2]] * 100).toFixed(0) });
            }
            this.gamegenrepreference.series = [
              { "name": data.resultList[0].consumerBehaviourCM.e98, "data": this.gamegenrepreferenceMalegrapharray },
              { "name": data.resultList[0].consumerBehaviourCM.f98, "data": this.gamegenrepreferenceFemalegrapharray }];


            for (let i = 0; i < this.maleGamersgraph.length; i++) {
              this.age15to19.push({ 'x': data.resultList[0].consumerBehaviourCM[this.maleGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.maleGamersgraph[i][1]] * 100).toFixed(0) });
              this.age20to24.push({ 'x': data.resultList[0].consumerBehaviourCM[this.maleGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.maleGamersgraph[i][2]] * 100).toFixed(0) });
              this.age25to34.push({ 'x': data.resultList[0].consumerBehaviourCM[this.maleGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.maleGamersgraph[i][3]] * 100).toFixed(0) });
              this.age35above.push({ 'x': data.resultList[0].consumerBehaviourCM[this.maleGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.maleGamersgraph[i][4]] * 100).toFixed(0) });
            }
            this.Malegamerspreference.series = [
              { "name": data.resultList[0].consumerBehaviourCM.e106, "data": this.age15to19 },
              { "name": data.resultList[0].consumerBehaviourCM.f106, "data": this.age20to24 },
              { "name": data.resultList[0].consumerBehaviourCM.g106, "data": this.age25to34 },
              { "name": data.resultList[0].consumerBehaviourCM.h106, "data": this.age35above },
            ]


            for (let i = 0; i < this.femaleaGamersgraph.length; i++) {
              this.femaleage15to19.push({ 'x': data.resultList[0].consumerBehaviourCM[this.femaleaGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.femaleaGamersgraph[i][1]] * 100).toFixed(0) });
              this.femaleage20to24.push({ 'x': data.resultList[0].consumerBehaviourCM[this.femaleaGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.femaleaGamersgraph[i][2]] * 100).toFixed(0) });
              this.femaleage25to34.push({ 'x': data.resultList[0].consumerBehaviourCM[this.femaleaGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.femaleaGamersgraph[i][3]] * 100).toFixed(0) });
              this.femaleage35above.push({ 'x': data.resultList[0].consumerBehaviourCM[this.femaleaGamersgraph[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.femaleaGamersgraph[i][4]] * 100).toFixed(0) });
            }
            this.femalegamerspreference.series = [
              { "name": data.resultList[0].consumerBehaviourCM.e114, "data": this.femaleage15to19 },
              { "name": data.resultList[0].consumerBehaviourCM.f114, "data": this.femaleage20to24 },
              { "name": data.resultList[0].consumerBehaviourCM.g114, "data": this.femaleage25to34 },
              { "name": data.resultList[0].consumerBehaviourCM.h114, "data": this.femaleage35above },

            ]

            for (let i = 0; i < this.nccsHousehold.length; i++) {
              this.nccsaarry.push({ 'x': data.resultList[0].consumerBehaviourCM[this.nccsHousehold[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.nccsHousehold[i][1]] * 100).toFixed(0) });
              this.nccsbarry.push({ 'x': data.resultList[0].consumerBehaviourCM[this.nccsHousehold[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.nccsHousehold[i][2]] * 100).toFixed(0) });
              this.nccscarry.push({ 'x': data.resultList[0].consumerBehaviourCM[this.nccsHousehold[i][0]], 'y': (data.resultList[0].consumerBehaviourCM[this.nccsHousehold[i][3]] * 100).toFixed(0) });
            }
            this.nccsHouseholdgraph.series = [
              { "name": data.resultList[0].consumerBehaviourCM.e122, "data": this.nccsaarry },
              { "name": data.resultList[0].consumerBehaviourCM.f122, "data": this.nccsbarry },
              { "name": data.resultList[0].consumerBehaviourCM.g122, "data": this.nccscarry },

            ]

            for (let i = 0; i < this.communicationchannelmale.length; i++) {
              this.communicationmale15to19arrey.push({ 'x': this.labelsBreak(data.resultList[0].consumerBehaviourCM[this.communicationchannelmale[i][0]]), 'y': (data.resultList[0].consumerBehaviourCM[this.communicationchannelmale[i][1]] * 100).toFixed(0) });
              this.communicationmale20to24arrey.push({ 'x': this.labelsBreak(data.resultList[0].consumerBehaviourCM[this.communicationchannelmale[i][0]]), 'y': (data.resultList[0].consumerBehaviourCM[this.communicationchannelmale[i][2]] * 100).toFixed(0) });
              this.communicationmale25to34arrey.push({ 'x': this.labelsBreak(data.resultList[0].consumerBehaviourCM[this.communicationchannelmale[i][0]]), 'y': (data.resultList[0].consumerBehaviourCM[this.communicationchannelmale[i][3]] * 100).toFixed(0) });
              this.communicationmale35above.push({ 'x': this.labelsBreak(data.resultList[0].consumerBehaviourCM[this.communicationchannelmale[i][0]]), 'y': (data.resultList[0].consumerBehaviourCM[this.communicationchannelmale[i][4]] * 100).toFixed(0) })

            }
            this.communicationchannelmalegraph.series = [
              { "name": data.resultList[0].consumerBehaviourCM.e130, "data": this.communicationmale15to19arrey },
              { "name": data.resultList[0].consumerBehaviourCM.f130, "data": this.communicationmale20to24arrey },
              { "name": data.resultList[0].consumerBehaviourCM.g130, "data": this.communicationmale25to34arrey },
              { "name": data.resultList[0].consumerBehaviourCM.h130, "data": this.communicationmale35above },

            ]

            for (let i = 0; i < this.communicationchannelfemale.length; i++) {
              this.communicatiofemale15to19arrey.push({ 'x': this.labelsBreak(data.resultList[0].consumerBehaviourCM[this.communicationchannelfemale[i][0]]), 'y': (data.resultList[0].consumerBehaviourCM[this.communicationchannelfemale[i][1]] * 100).toFixed(0) });
              this.communicatiofemale20to24arrey.push({ 'x': this.labelsBreak(data.resultList[0].consumerBehaviourCM[this.communicationchannelfemale[i][0]]), 'y': (data.resultList[0].consumerBehaviourCM[this.communicationchannelfemale[i][2]] * 100).toFixed(0) });
              this.communicatiofemale25to34arrey.push({ 'x': this.labelsBreak(data.resultList[0].consumerBehaviourCM[this.communicationchannelfemale[i][0]]), 'y': (data.resultList[0].consumerBehaviourCM[this.communicationchannelfemale[i][3]] * 100).toFixed(0) });
              this.communicatiofemale35above.push({ 'x': this.labelsBreak(data.resultList[0].consumerBehaviourCM[this.communicationchannelfemale[i][0]]), 'y': (data.resultList[0].consumerBehaviourCM[this.communicationchannelfemale[i][4]] * 100).toFixed(0) })

            }
            this.communicationchannelfemalegraph.series = [
              { "name": data.resultList[0].consumerBehaviourCM.e146, "data": this.communicatiofemale15to19arrey },
              { "name": data.resultList[0].consumerBehaviourCM.f146, "data": this.communicatiofemale20to24arrey },
              { "name": data.resultList[0].consumerBehaviourCM.g146, "data": this.communicatiofemale25to34arrey },
              { "name": data.resultList[0].consumerBehaviourCM.h146, "data": this.communicatiofemale35above },

            ]

            for (let i = 0; i < this.mobilegamers.length; i++) {
              this.mobilegamersarrey.push({ 'x': data.resultList[0].consumerBehaviourCM[this.mobilegamers[i][0]], 'y': data.resultList[0].consumerBehaviourCM[this.mobilegamers[i][1]] })
            }
            this.mobilegamergraph.series = [{ "name": data.resultList[0].consumerBehaviourCM.e165, "data": this.mobilegamersarrey }];

            for (let i = 0; i < this.mobileadsspend.length; i++) {
              this.mobileadsspendarrey.push({ 'x': data.resultList[0].consumerBehaviourCM[this.mobileadsspend[i][0]], 'y': data.resultList[0].consumerBehaviourCM[this.mobileadsspend[i][1]] })
            }
            this.mobileadsspendgraph.series = [{ "name": data.resultList[0].consumerBehaviourCM.e172, "data": this.mobileadsspendarrey }];


            for (let i = 0; i < this.mobilegamingrevenue.length; i++) {
              this.mobilegamingrevenuearrey.push({ 'x': data.resultList[0].consumerBehaviourCM[this.mobilegamingrevenue[i][0]], 'y': data.resultList[0].consumerBehaviourCM[this.mobilegamingrevenue[i][1]] })
            }
            this.mobilegamingrevenuegraph.series = [{ "name": data.resultList[0].consumerBehaviourCM.e181, "data": this.mobilegamingrevenuearrey }];
          }
        }
      }
    })
  }

  openDialog(): void {
    this.dialog.open(FoodforthoughtConsumerComponent, {
      data: {},
    });
  }
}

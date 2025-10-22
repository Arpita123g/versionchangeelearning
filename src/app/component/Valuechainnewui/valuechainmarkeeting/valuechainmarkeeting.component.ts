import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ValuechainfoodforthoughtComponent } from '../valuechainfoodforthought/valuechainfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}


interface lineChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

@Component({
  selector: 'app-valuechainmarkeeting',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],
  templateUrl: './valuechainmarkeeting.component.html',
  styleUrls: ['./valuechainmarkeeting.component.scss']
})
export class ValuechainmarkeetingComponent extends AbstractComponent {
  MarginperunitChart: barchart;
  foodforthought: boolean = true;
  featurelineGraph: lineChart;
  PromotionlineChart: lineChart;
  PriceChart: lineChart;
  PerunitChart: barchart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  disabled: boolean = false;
  language: any = [];
  languageid: number = 0;
 minMaxValue: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.featurelineGraph = {
      series: [

      ],
      markers: {
        size: [5, 0, 0],
      },
      stroke: {
        curve: 'straight',
      },
      chart: {
        type: 'line',
        height: 320,
        toolbar: {
          show: false,
        },
      },
      xaxis: {

        // title: {
        //   // text: "Feature",
        //   offsetX: 0,
        //   offsetY: 90,
        //   style: {
        //     fontSize: '12px',
        //     fontWeight: 500
        //   },
        // },
        labels: {
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false
          , trim: false,
        }, axisBorder: {
          show: true
        },
        axisTicks: { show: true },
        crosshairs: {},
        tooltip: { enabled: false, offsetY: -35 }
      },
      yaxis: {
        title: {
          // text: "% of consumers attracted based on feature ",
          // style: {
          //   fontSize: '12px',
          //   fontWeight: 500
          // },
        },

        labels: {
          formatter: function (value) {
            return value.toFixed(0) + "%";
          }
        }
      },
      tooltip: {
        y: {
          // formatter: undefined,
          formatter: function (val: number) {
            return val === 0 ? '-' : val + '%';
          },
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false
        }
      },
      title: {
        // text: 'Returns Trend',
        // text: '',
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

    this.PromotionlineChart = {
      series: [

      ],
      markers: {
        size: [5, 0, 0],
      },
      stroke: {
        curve: 'straight',
      },
      chart: {
        type: 'line',
        height: 320,
        toolbar: {
          show: false,
        },
      },
      xaxis: {

        title: {
          // text: "Promotion, INR mn",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        labels: {
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false
          , trim: false,
        }, axisBorder: {
          show: true
        },
        axisTicks: { show: true },
        crosshairs: {},
        tooltip: { enabled: false, offsetY: -35 }
      },
      yaxis: {

        title: {
          // text: "% of consumers aware about product",
          // style: {
          //   fontSize: '12px',
          //   fontWeight: 500
          // },
        },

        labels: {
          formatter: function (value) {
            return value.toFixed(0) + "%";
          }
        }
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val === 0 ? '-' : val + '%';
          }, title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false
        }
      },
      title: {
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

    this.PriceChart = {
      series: [

      ],
      markers: {
        size: [5, 0, 0],
      },
      stroke: {
        curve: 'straight',
      },
      chart: {
        type: 'line',
        height: 320,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [

        ],
        title: {
          // text: "Price, INR",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        labels: {
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false
          , trim: false,
        }, axisBorder: {
          show: true
        },
        axisTicks: { show: true },
        crosshairs: {},
        tooltip: { enabled: false, offsetY: -35 }
      },
      yaxis: {
        title: {
          // text: "% of consumers attracted based on price",
          // style: {
          //   fontSize: '12px',
          //   fontWeight: 500
          // },
        },

        labels: {
          formatter: function (value) {
            return value.toFixed(0) + "%";
          }
        }
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val === 0 ? '-' : val + '%';
          }, title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false
        }
      },
      title: {
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

    this.MarginperunitChart = {
      series: [
      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: {
        // categories: ["Price", "Cost", "Margin",]
      },
      fill: this.fill[0],
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
        // text: 'Margin per unit, INR',
        // offsetY: 0,
        // align: 'center',
        // style: {
        //   fontWeight: 'bold',
        // },
      },
    };

    this.PerunitChart = {
      series: [
      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: {
        // categories: ["Online", "Speciality", "Retailers",]
      },
      fill: this.fill[0],
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
        // text: 'Per unit, INR',
        // offsetY: 0,
        // align: 'center',
        // style: {
        //   fontWeight: 'bold',
        // },
      },
    };

  }

  periodcellvalue: any = [
    "r54", "r55", "r56", "r57", "r58"
  ];
  databasecellname: any = [
    "z24", "z25", "z26", "z27", "z28", "z29", "z30", "z31", "z32", "z33", "z34"
  ];
  marginChart: any = [
    "c52", "c53", "c54"
  ]
  unitperchart: any = [
    "d57", "d58", "d59"
  ]
  featurelineChart: any = [
    ["n7", "o7"],
    ["n8", "o8"],
    ["n9", "o9"],
    ["n10", "o10"],
    ["n11", "o11"],
    ["n12", "o12"],
    ["n13", "o13"],
    ["n14", "o14"],
    ["n15", "o15"],
    ["n16", "o16"],
    ["n17", "o17"],
  ];

  Promotionlinechartcell: any = [
    ["n20", "o20"],
    ["n21", "o21"],
    ["n22", "o22"],
    ["n23", "o23"],
    ["n24", "o24"],
    ["n25", "o25"],
    ["n26", "o26"]
  ];
  PriceChartcell: any = [
    ["n29", "o29"],
    ["n30", "o30"],
    ["n31", "o31"],
    ["n32", "o32"],
    ["n33", "o33"],
    ["n34", "o34"],
    ["n35", "o35"],
    ["n36", "o36"]
  ];

  // cardData1 = [
  //   {
  //     id: 'card1',
  //     title: ["n47", "n47"],
  //     description: "Online channels offer a broad distribution reach, tapping into a vast consumer base. With lower operational costs, companies benefit from competitive pricing and potentially higher sales volumes. Margins typically range from 5% to 10%, making it an efficient and cost-effective distribution channel.",
  //     turncatedtext: "",
  //   },
  //   {
  //     id: 'card2',
  //     title: ["n48", "n48"],
  //     description: "Specialty stores provide a targeted and focused distribution approach, particularly effective for niche or high-end products. With margins ranging from 7% to 15%, these stores offer a balance between exclusivity and personalized customer service, enhancing brand perception and potentially commanding premium prices.",
  //     turncatedtext: "",
  //   },
  //   {
  //     id: 'card3',
  //     title: ["n49", "n49"],
  //     description: "Large retailers contribute to wide-scale distribution, leveraging established networks and attracting diverse consumer demographics. Margins, ranging from 5% to 12%, reflect the negotiation power and volume of sales. Retailers provide convenience and accessibility, fostering brand visibility and attracting a broad customer base.",
  //     turncatedtext: "",
  //   },
  // ];

  cardData1 = [
    {
      id: 'card1',
      titleKey: 'b86',
      descriptionKey: 'b89'
    },
    {
      id: 'card2',
      titleKey: 'b87',
      descriptionKey: 'b90'
    },
    {
      id: 'card3',
      titleKey: 'b88',
      descriptionKey: 'b91'
    }
  ];

  getImagePath(index: number): string {
    const images = [
      'assets/images/valuechain/onlinechannel.svg',
      'assets/images/valuechain/specialization.svg',
      'assets/images/valuechain/retailer1.svg'
    ];
    return images[index] || '';
  }

  // cardData2 = [
  //   {
  //     id: 'card1',
  //     title: ["n54", "n54"],
  //     description: "By harnessing the power of predictive analytics, the company can strategically manage inventory levels, minimizing costs associated with excess stock and stockouts. This efficiency contributes to improved customer service and cost optimization.",
  //     turncatedtext: "",
  //   },
  //   {
  //     id: 'card2',
  //     title: ["n55", "n55"],
  //     description: "Offering customers a subscription-based service for warranty, repairs and upgrades not only ensures ongoing customer engagement but also creates a predictable revenue stream. This model promotes customer loyalty, contributing to increased market share.",
  //     turncatedtext: "",
  //   },
  //   {
  //     id: 'card3',
  //     title: ["n56", "n56"],
  //     description: "Integrating blockchain technology in the supply chain enhances visibility, reducing errors and fraud. This innovation not only ensures the integrity of the supply chain but also builds trust among smartphone customers and stakeholders.",
  //     turncatedtext: "",
  //   },
  //   {
  //     id: 'card4',
  //     title: ["n57", "n57"],
  //     description: "By leveraging remote diagnostic tools, the company can address customer issues promptly and efficiently, reducing the need for physical service visits. This not only enhances customer satisfaction but also optimizes operational costs in the smartphone industry.",
  //     turncatedtext: "",
  //   }, {
  //     id: 'card5',
  //     title: ["n58", "n58"],
  //     description: "The AI-powered recommendation engine enhances the online shopping experience for smartphone users. By analyzing user data, the system generates personalized suggestions, increasing the likelihood of conversions and fostering customer satisfaction. This innovation not only boosts market share but also establishes the company as a leader in personalized customer engagement within the smartphone industry.",
  //     turncatedtext: "",
  //   },
  // ];

  cardData2 = [
    {
      id: 'cardA',
      titleKey: 'b93',
      descriptionKey: 'b98',
      image: 'assets/images/valuechain/predictiveanalysis.svg',
      resultIndex: 0,
      checkboxIndex: 11
    },
    {
      id: 'cardB',
      titleKey: 'b94',
      descriptionKey: 'b99',
      image: 'assets/images/valuechain/subscription.svg',
      resultIndex: 1,
      checkboxIndex: 12
    },
    {
      id: 'cardC',
      titleKey: 'b95',
      descriptionKey: 'b100',
      image: 'assets/images/valuechain/blosckchain.svg',
      resultIndex: 2,
      checkboxIndex: 13
    },
    {
      id: 'cardD',
      titleKey: 'b96',
      descriptionKey: 'b101',
      image: 'assets/images/valuechain/onlinedigno.jpg',
      resultIndex: 3,
      checkboxIndex: 14
    },
    {
      id: 'cardE',
      titleKey: 'b97',
      descriptionKey: 'b102',
      image: 'assets/images/valuechain/aipersonal.svg',
      resultIndex: 4,
      checkboxIndex: 15
    }
  ];


  override ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.result = []; this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = [];
              this.jsonarray4 = []; this.jsonarray5 = [];
              this._global.casemanagementid.next(data.resultList[0].valuechainnewcmid);
              this.languageid = data.resultList[0].valueChainNewLM.valuechainnewlmid;
              this.language = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()];

              if (data.resultList[0].valueChainNewCM.valueChainNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              };

              // if ((data.resultList[0].z42 == 'yes') || (this.timefinished)) {
              //   this.disabled = true;
              // }
              if (data.resultList[0].valuechainnewdata.z42 == 'yes') {
                this.disabled = true;
              }
              this.minMaxValue = data.resultList[0].valueChainNewCM.valuechainnewperioddata;
              
              for (let i = 0; i < 5; i++) {
                this.result[i] = data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.periodcellvalue[i]];
              };

              for (let i = 5; i < 16; i++) {
                this.result[i] = data.resultList[0].valuechainnewdata[this.databasecellname[i - 5]];
              };

              this.updateValue();

              // for (let i = 0; i < this.featurelineChart.length; i++) {
              //   this.jsonarray1.push({ "x": Number(data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.featurelineChart[i][0]]), "y": Number(Number(data.resultList[0].valueChainNewCM[this.featurelineChart[i][1]]) * 100).toFixed(0) });
              // }
              // this.featurelineGraph.series = [{ "data": this.jsonarray1 }];

              // for (let i = 0; i < this.Promotionlinechartcell.length; i++) {
              //   this.jsonarray2.push({ "x": Number(data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.Promotionlinechartcell[i][0]]), "y": Number(Number(data.resultList[0].valueChainNewCM[this.Promotionlinechartcell[i][1]]) * 100).toFixed(0) });
              // }
              // this.PromotionlineChart.series = [{ "data": this.jsonarray2 }];

              // for (let i = 0; i < this.PriceChartcell.length; i++) {
              //   this.jsonarray3.push({ 'x': Number(data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.PriceChartcell[i][0]]), 'y': Number(Number(data.resultList[0].valueChainNewCM[this.PriceChartcell[i][1]]) * 100).toFixed(0) });
              // }
              // this.PriceChart.series = [{ "data": this.jsonarray3 }];

              // for (let i = 0; i < this.marginChart.length; i++) {
              //   this.jsonarray4.push((Number(data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.marginChart[i]])).toFixed(0));
              // }
              // this.MarginperunitChart.series = [{ "data": this.jsonarray4 }];

              // for (let i = 0; i < this.unitperchart.length; i++) {
              //   this.jsonarray5.push((Number(data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.unitperchart[i]])).toFixed(0));
              // }
              // this.PerunitChart.series = [{ "data": this.jsonarray5 }];


              // for (let i = 0; i < this.cardData1.length; i++) {
              //   this.cardData1[i].title[0] = String(data.resultList[0].valueChainCM[this.cardData1[i].title[1]])
              //   if (this.cardData1[i].turncatedtext == "") {
              //     this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              //   }
              // };

              // for (let i = 0; i < this.cardData2.length; i++) {
              //   this.cardData2[i].title[0] = String(data.resultList[0].valueChainCM[this.cardData2[i].title[1]])
              //   if (this.cardData2[i].turncatedtext == "") {
              //     this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
              //   }
              // };

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

  inputtablevalue(index: number, inputfield: string) {
    if (inputfield == 'featureindex') {
      const value = Number(this.result[5]);
      const min = Number(this.minMaxValue.o62);
      const max = Number(this.minMaxValue.o63);
      if (value < min) {
        this.result[5] = min;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else if (value > max) {
        this.result[5] = max;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else {
        this.valueWrite();
        return;
      }
    } else if (inputfield == 'promotion') {
      const value = Number(this.result[6]);
      const min = Number(this.minMaxValue.o65);
      const max = Number(this.minMaxValue.o66);
      if (value < min) {
        this.result[6] = min;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else if (value > max) {
        this.result[6] = max;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else {
        this.valueWrite();
        return;
      }
    } else if (inputfield == 'priceperunit') {
      const value = Number(this.result[7]);
      const min = Number(this.minMaxValue.o68);
      const max = Number(this.minMaxValue.o69);
      if (value < min) {
        this.result[7] = min;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else if (value > max) {
        this.result[7] = max;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else {
        this.valueWrite();
        return;
      }
    } else if (inputfield == 'distributormargin') {
      const value = Number(this.result[index]);
      const min = Number(this.minMaxValue.o71);
      const max = Number(this.minMaxValue.o72);
      if (value < min) {
        this.result[index] = min;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else if (value > max) {
        this.result[index] = max;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else {
        this.valueWrite();
        return;
      }
    } else {
      this.valueWrite();
    }
  }

  updateValue() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = [];
    this.jsonarray4 = []; this.jsonarray5 = [];
    let apiname = '/valuechainnew/fetchvaluechainnew';

    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < 5; i++) {
          this.result[i] = updatedData.valueChainNewCM.valuechainnewperioddata[this.periodcellvalue[i]];
        };

        this.featurelineGraph = {
          ...this.featurelineGraph,
          xaxis: {
            ...this.featurelineGraph.xaxis,
            // offsetY: 90,
            title: {
              text: this.language.b72,
              offsetX: 0,
              offsetY: 90,
              style: {
                fontSize: '12px',
                fontWeight: 500
              },
            }
          },
          yaxis: {
            title: {
              text: this.language.b73,
              style: {
                fontSize: '12px',
                fontWeight: 500
              },
            },
          }
        };

        this.PromotionlineChart = {
          ...this.PromotionlineChart,
          xaxis: {
            ...this.PromotionlineChart.xaxis,
            // offsetY: 80,
            title: {
              text: this.language.b75,
              offsetX: 0,
              offsetY: 90,
              style: {
                fontSize: '12px',
                fontWeight: 500
              },
            }
          },
          yaxis: {
            title: {
              text: this.language.b76,
              style: {
                fontSize: '12px',
                fontWeight: 500
              },
            },
          }
        };

        this.PriceChart = {
          ...this.PriceChart,
          xaxis: {
            ...this.PriceChart.xaxis,
            // offsetY: 80,
            title: {
              text: this.language.b78,
              offsetX: 0,
              offsetY: 90,
              style: {
                fontSize: '12px',
                fontWeight: 500
              },
            }
          },
          yaxis: {
            title: {
              text: this.language.b77,
              style: {
                fontSize: '12px',
                fontWeight: 500
              },
            },
          }
        };

        this.MarginperunitChart = {
          ...this.MarginperunitChart,
          xaxis: {
            ...this.MarginperunitChart.xaxis,
            categories: [
              this.language.b81,
              this.language.b82,
              this.language.b83,
            ]
          },
          title: {
            text: this.language.b80,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        this.PerunitChart = {
          ...this.PerunitChart,
          xaxis: {
            ...this.PerunitChart.xaxis,
            categories: [
              this.language.b86,
              this.language.b87,
              this.language.b88,
            ]
          },
          title: {
            text: this.language.b85,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        for (let i = 0; i < this.featurelineChart.length; i++) {
          this.jsonarray1.push({ "x": Number(updatedData.valueChainNewCM.valuechainnewperioddata[this.featurelineChart[i][0]]), "y": Number(Number(updatedData.valueChainNewCM.valuechainnewperioddata[this.featurelineChart[i][1]]) * 100).toFixed(0) });
        }

        this.featurelineGraph.series = [{ "data": this.jsonarray1 }];

        for (let i = 0; i < this.Promotionlinechartcell.length; i++) {
          this.jsonarray2.push({ "x": Number(updatedData.valueChainNewCM.valuechainnewperioddata[this.Promotionlinechartcell[i][0]]), "y": Number(Number(updatedData.valueChainNewCM.valuechainnewperioddata[this.Promotionlinechartcell[i][1]]) * 100).toFixed(0) });
        }
        this.PromotionlineChart.series = [{ "data": this.jsonarray2 }];

        for (let i = 0; i < this.PriceChartcell.length; i++) {
          this.jsonarray3.push({ 'x': Number(updatedData.valueChainNewCM.valuechainnewperioddata[this.PriceChartcell[i][0]]), 'y': Number(Number(updatedData.valueChainNewCM.valuechainnewperioddata[this.PriceChartcell[i][1]]) * 100).toFixed(0) });
        }
        this.PriceChart.series = [{ "data": this.jsonarray3 }];

        for (let i = 0; i < this.marginChart.length; i++) {
          this.jsonarray4.push((Number(updatedData.valuechainnewdata[this.marginChart[i]])).toFixed(0));
        }
        this.MarginperunitChart.series = [{ "data": this.jsonarray4 }];

        for (let i = 0; i < this.unitperchart.length; i++) {
          this.jsonarray5.push((Number(updatedData.valuechainnewdata[this.unitperchart[i]])).toFixed(0));
        }
        this.PerunitChart.series = [{ "data": this.jsonarray5 }];


        // for (let i = 0; i < this.cardData1.length; i++) {
        //   this.cardData1[i].title[0] = String(updatedData.valueChainCM[this.cardData1[i].title[1]])
        //   if (this.cardData1[i].turncatedtext == "") {
        //     this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
        //   }
        // };

        // for (let i = 0; i < this.cardData2.length; i++) {
        //   this.cardData2[i].title[0] = String(updatedData.valueChainCM[this.cardData2[i].title[1]])
        //   if (this.cardData2[i].turncatedtext == "") {
        //     this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
        //   }
        // };
      }
    });
  }

  valueWrite() {

    let apiname = '/valuechainnew/singleinputvaluechainnew';

    let valuechainnewdata = {
      "z24": this.result[5],
      "z25": this.result[6],
      "z26": this.result[7],
      "z27": this.result[8],
      "z28": this.result[9],
      "z29": this.result[10],
      "z30": this.result[11] == true ? 1 : 0,
      "z31": this.result[12] == true ? 1 : 0,
      "z32": this.result[13] == true ? 1 : 0,
      "z33": this.result[14] == true ? 1 : 0,
      "z34": this.result[15] == true ? 1 : 0
    }

    this._api.writeLanguageData("valuechainnew", 3, valuechainnewdata, apiname, "valuechainnewcmid", this.languageselect, this.languageid, 'valuechainnewlmid').subscribe((data: any) => {
      if (data.status == "Success") {
        this.updateValue();
      } else {
        this.checkloading = false;
      }
    }, (error: any) => {
      this.checkloading = false;
      this.driveerrorLog(error, apiname);
    })
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(ValuechainfoodforthoughtComponent, {
      data: {},
    });
  }
  onCheckboxChange(event: Event, index: number) {
    const checked = (event.target as HTMLInputElement).checked;
    this.result[index] = checked ? 1 : 0;
    this.inputtablevalue(index, 'innovation');
  }
}

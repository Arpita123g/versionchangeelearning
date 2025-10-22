import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexPlotOptions,
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
@Component({
  selector: 'app-valuechainproduction',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],
  templateUrl: './valuechainproduction.component.html',
  styleUrls: ['./valuechainproduction.component.scss']
})
export class ValuechainproductionComponent extends AbstractComponent {
  ComponentsOrderedChart: barchart;
  ProductionPlanningChart: barchart;
  foodforthought: boolean = true;
  result: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  textshow: { [key: string]: boolean } = {};
  language: any = [];
  languageid: number = 0;
  disabled: boolean = false;
  minMaxValue: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);


    this.ProductionPlanningChart = {
      series: [],
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
        // categories: [["Initial", "Inventory"], ["Production", "Capacity"], ["Outsourcing", "Capacity"], "Demand", ["Closing", "Inventory"], "Stockout"],
        labels: {
          // formatter: function (val: string) {
          //   return val.split(' ');
          // },
          rotate: 0
        },
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
        // text: 'Production Planning, mn',
        // offsetY: 0,
        // align: 'center',
        // style: {
        //   fontWeight: 'bold',
        // },
      },
    };

    this.ComponentsOrderedChart = {
      series: [],
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
          columnWidth: '20%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: {
        // categories: ["Supplier 1", " Supplier 2"]
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
        // text: 'Components Ordered, mn',
        // offsetY: 0,
        // align: 'center',
        // style: {
        //   fontWeight: 'bold',
        // },
      },
    };
  }

  periodcellvalue: any = [
    "h25", "h29", "i29", "h30", "i30", "h33", "i33", "h34", "i34"
  ];
  databasecellname: any = [
    "z14", "c26", "d11", "c23", "z15", "c28", "c19", "z16", "c17", "c21", "z17", "z18", "z19", "z20"
  ];

  ProductionPlanninggraph: any = [
    "c30", "c31", "c32", "c33", "c34", "c35"
  ];
  ComponentsOrderedgraph: any = [
    "d40", "d41"
  ]

  // cardData1 = [
  //   {
  //     id: 'card1',
  //     title: ["g29", "g29"],
  //     description: "Vendor 1 is a reliable partner known for unwavering commitment to sustainability. Their ethical standards and transparent operations make them the go-to choice for businesses focused on environmental and social responsibility.",
  //     turncatedtext: "",
  //   },
  //   {
  //     id: 'card2',
  //     title: ["g30", "g30"],
  //     description: "Vendor 2 prioritizes economic efficiency, excelling in cost-effective solutions with streamlined operations. While a pragmatic choice for budget optimization, their focus may not align with sustainability and ethical considerations as strongly.",
  //     turncatedtext: "",
  //   },
  // ]

  cardData1 = [
    {
      id: 'card1',
      titleKey: 'b60',
      descriptionKey: 'b61',
      image: '../../../../assets/images/valuechain/supplier1.svg',
      costIndex: 2,
      checkboxIndex: 19
    },
    {
      id: 'card2',
      titleKey: 'b62',
      descriptionKey: 'b63',
      image: '../../../../assets/images/valuechain/supplier2.svg',
      costIndex: 4,
      checkboxIndex: 20
    }
  ];

  // cardData2 = [
  //   {
  //     id: 'card1',
  //     title: ["g33", "g33"],
  //     description: "Vendor 1, an industry veteran, boasts an impeccable track record with minimal damages. Renowned for their reliability, they offer a time-tested solution for businesses seeking transportation services with a proven history of safety and efficiency.",
  //     turncatedtext: "",
  //   },
  //   {
  //     id: 'card2',
  //     title: ["g34", "g34"],
  //     description: "Vendor 2, a cost-efficient newcomer, provides budget-friendly transportation solutions. However, businesses should note that, being relatively new, there's a chance of products experiencing damages during transit.",
  //     turncatedtext: "",
  //   },
  // ]
  cardData2 = [
    {
      id: 'card1',
      titleKey: 'b66',
      descriptionKey: 'b68',
      image: '../../../../assets/images/valuechain/transporternew1.png',
      costIndex: 6,
      checkboxIndex: 21
    },
    {
      id: 'card2',
      titleKey: 'b67',
      descriptionKey: 'b69',
      image: '../../../../assets/images/valuechain/transporter2.svg',
      costIndex: 8,
      checkboxIndex: 22
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
              this.result = []; this.jsonarray1 = []; this.jsonarray2 = [];
              this._global.casemanagementid.next(data.resultList[0].valuechainnewcmid);
              this.languageid = data.resultList[0].valueChainNewLM.valuechainnewlmid;
              this.language = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()];

              if (data.resultList[0].valueChainNewCM.valueChainNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              // if ((data.resultList[0].z42 == 'yes') || (this.timefinished)) {
              //   this.disabled = true;
              // }
              if (data.resultList[0].valuechainnewdata.z42 == 'yes') {
                this.disabled = true;
              }
              this.minMaxValue = data.resultList[0].valueChainNewCM.valuechainnewperioddata;

              for (let i = 0; i < 9; i++) {
                this.result[i] = data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.periodcellvalue[i]];
              }

              for (let i = 9; i < 23; i++) {
                this.result[i] = data.resultList[0].valuechainnewdata[this.databasecellname[i - 9]];
              }
              for (let i = 19; i < 23; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = true
                } else {
                  this.result[i] = false;
                }
              }
              this.updateValue();


              // for (let i = 0; i < this.ProductionPlanninggraph.length; i++) {
              //   this.jsonarray1.push(Number(data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.ProductionPlanninggraph[i]]));
              // }
              // this.ProductionPlanningChart.series = [{ "data": this.jsonarray1 }]

              // for (let i = 0; i < this.ComponentsOrderedgraph.length; i++) {
              //   this.jsonarray2.push(Number(data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.ComponentsOrderedgraph[i]]));
              // }
              // this.ComponentsOrderedChart.series = [{ "data": this.jsonarray2 }]


              // for (let i = 0; i < this.cardData1.length; i++) {
              //   this.cardData1[i].title[0] = String(data.resultList[0].valueChainCM[this.cardData1[i].title[1]])
              //   if (this.cardData1[i].turncatedtext == "") {
              //     this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              //   }
              // }

              // for (let i = 0; i < this.cardData2.length; i++) {
              //   this.cardData2[i].title[0] = String(data.resultList[0].valueChainCM[this.cardData2[i].title[1]])
              //   if (this.cardData2[i].turncatedtext == "") {
              //     this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
              //   }
              // }
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


  inputtablevalue(value: any, inputfield: string) {
    if ((inputfield == 'planning') && (value == 9)) {
      const v = Number(this.result[9]);
      const min = Number(this.minMaxValue.h57);
      const max = Number(this.minMaxValue.h58);
      if (v < min) {
        this.result[9] = min;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else if (v > max) {
        this.result[9] = max;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else {
        this.valueWrite();
        return;
      }
    } else if ((inputfield == 'planning') && (value == 13)) {
      const v = Number(this.result[13]);
      const min = Number(this.minMaxValue.h60);
      const max = Number(this.minMaxValue.h61);
      if (v < min) {
        this.result[13] = min;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else if (v > max) {
        this.result[13] = max;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else {
        this.valueWrite();
        return;
      }
    } else if (inputfield == 'invesment') {
      const v = Number(this.result[16]);
      const min = Number(this.minMaxValue.h63);
      const max = Number(this.minMaxValue.h64);
      if (v < min) {
        this.result[16] = min;
        this._alert.error(`The expected range is between ${min} to ${max}.`);
      } else if (v > max) {
        this.result[16] = max;
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
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/valuechainnew/fetchvaluechainnew';

    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < 9; i++) {
          this.result[i] = updatedData.valueChainNewCM.valuechainnewperioddata[this.periodcellvalue[i]];
        }
        const resultIndices = [10, 11, 12, 14, 15, 17, 18];
        const dataCellIndices = [1, 2, 3, 5, 6, 8, 9];

        this.ProductionPlanningChart = {
          ...this.ProductionPlanningChart,
          xaxis: {
            ...this.ProductionPlanningChart.xaxis,
            categories: [
              this.labelsBreak(this.language.b48),
              this.labelsBreak(this.language.b49),
              this.labelsBreak(this.language.b50),
              this.labelsBreak(this.language.b51),
              this.labelsBreak(this.language.b52),
              this.labelsBreak(this.language.b53),
            ]
          },
          title: {
            text: this.language.b47,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        this.ComponentsOrderedChart = {
          ...this.ComponentsOrderedChart,
          xaxis: {
            ...this.ComponentsOrderedChart.xaxis,
            categories: [
              this.language.b60,
              this.language.b62,
            ]
          },
          title: {
            text: this.language.b70,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        for (let i = 0; i < resultIndices.length; i++) {
          this.result[resultIndices[i]] = updatedData.valuechainnewdata[this.databasecellname[dataCellIndices[i]]];
        }

        for (let i = 0; i < this.ProductionPlanninggraph.length; i++) {
          this.jsonarray1.push(Number(updatedData.valuechainnewdata[this.ProductionPlanninggraph[i]]).toFixed(1));
        }
        this.ProductionPlanningChart.series = [{ "data": this.jsonarray1 }]

        for (let i = 0; i < this.ComponentsOrderedgraph.length; i++) {
          this.jsonarray2.push(Number(updatedData.valuechainnewdata[this.ComponentsOrderedgraph[i]]));
        }
        this.ComponentsOrderedChart.series = [{ "data": this.jsonarray2 }]


        // for (let i = 0; i < this.cardData1.length; i++) {
        //   this.cardData1[i].title[0] = String(updatedData.valueChainCM[this.cardData1[i].title[1]])
        //   if (this.cardData1[i].turncatedtext == "") {
        //     this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
        //   }
        //}

        // for (let i = 0; i < this.cardData2.length; i++) {
        //   this.cardData2[i].title[0] = String(updatedData.valueChainCM[this.cardData2[i].title[1]])
        //   if (this.cardData2[i].turncatedtext == "") {
        //     this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
        //   }
        // }
      }
    });
  }

  valueWrite() {

    let apiname = '/valuechainnew/singleinputvaluechainnew';

    let valuechainnewdata = {
      "z14": this.result[9],
      "z15": this.result[13],
      "z16": this.result[16],
      "z17": this.result[19] == true ? 1 : 0,
      "z18": this.result[20] == true ? 1 : 0,
      "z19": this.result[21] == true ? 1 : 0,
      "z20": this.result[22] == true ? 1 : 0,

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
}

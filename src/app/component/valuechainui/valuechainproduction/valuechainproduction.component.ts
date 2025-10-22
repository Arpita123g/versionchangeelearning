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
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
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
        categories: [["Initial", "Inventory"], ["Production", "Capacity"], ["Outsourcing", "Capacity"], "Demand", ["Closing", "Inventory"], "Stockout"],
        labels: {
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
        text: 'Production Planning, mn',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
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
        categories: ["Supplier 1", " Supplier 2"]
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
        text: 'Components Ordered, mn',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
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

  cardData1 = [
    {
      id: 'card1',
      title: ["g29", "g29"],
      description: "Vendor 1 is a reliable partner known for unwavering commitment to sustainability. Their ethical standards and transparent operations make them the go-to choice for businesses focused on environmental and social responsibility.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ["g30", "g30"],
      description: "Vendor 2 prioritizes economic efficiency, excelling in cost-effective solutions with streamlined operations. While a pragmatic choice for budget optimization, their focus may not align with sustainability and ethical considerations as strongly.",
      turncatedtext: "",
    },
  ]

  cardData2 = [
    {
      id: 'card1',
      title: ["g33", "g33"],
      description: "Vendor 1, an industry veteran, boasts an impeccable track record with minimal damages. Renowned for their reliability, they offer a time-tested solution for businesses seeking transportation services with a proven history of safety and efficiency.",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: ["g34", "g34"],
      description: "Vendor 2, a cost-efficient newcomer, provides budget-friendly transportation solutions. However, businesses should note that, being relatively new, there's a chance of products experiencing damages during transit.",
      turncatedtext: "",
    },
  ]
  disabled: boolean = false;

  override ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let apiname = '/valuechain/fetchvaluechain';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.result = []; this.jsonarray1 = []; this.jsonarray2 = [];
              if (data.resultList[0].valueChainCM.valueChainCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if ((data.resultList[0].z42 == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }

              for (let i = 0; i < 9; i++) {
                this.result[i] = data.resultList[0].valueChainCM[this.periodcellvalue[i]];
              }

              for (let i = 9; i < 23; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 9]];
              }
              for (let i = 19; i < 23; i++) {
                if (this.result[i] == 1) {
                  this.result[i] = true
                } else {
                  this.result[i] = false;
                }
              }

              for (let i = 0; i < this.ProductionPlanninggraph.length; i++) {
                this.jsonarray1.push(Number(data.resultList[0][this.ProductionPlanninggraph[i]]));
              }
              this.ProductionPlanningChart.series = [{ "data": this.jsonarray1 }]

              for (let i = 0; i < this.ComponentsOrderedgraph.length; i++) {
                this.jsonarray2.push(Number(data.resultList[0][this.ComponentsOrderedgraph[i]]));
              }
              this.ComponentsOrderedChart.series = [{ "data": this.jsonarray2 }]


              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title[0] = String(data.resultList[0].valueChainCM[this.cardData1[i].title[1]])
                if (this.cardData1[i].turncatedtext == "") {
                  this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
                }
              }

              for (let i = 0; i < this.cardData2.length; i++) {
                this.cardData2[i].title[0] = String(data.resultList[0].valueChainCM[this.cardData2[i].title[1]])
                if (this.cardData2[i].turncatedtext == "") {
                  this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
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


  inputtablevalue(value: any, inputfield: string) {

    if ((inputfield == 'planning') && (value == 9)) {
      if ((this.result[9] >= 0) && (this.result[9] < 101)) {
        this.valueWrite();
      } else {
        this.result[9] = 0;
        this._alert.error("The expected range is between 0 to 100");
      }
    } else if ((inputfield == 'planning') && (value == 13)) {
      if ((this.result[13] >= 0) && (this.result[13] < 101)) {
        this.valueWrite();
      } else {
        this.result[13] = 0;
        this._alert.error("The expected range is between 0 to 100");
      }
    } else if (inputfield == 'invesment') {
      if ((this.result[16] >= 0) && (this.result[16] < 11)) {
        this.valueWrite();
      } else {
        this.result[16] = 0;
        this._alert.error("The expected range is between 0 to 10");
      }
    } else {
      this.valueWrite();
    }


  }

  updateValue() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/valuechain/fetchvaluechain';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < 9; i++) {
          this.result[i] = updatedData.valueChainCM[this.periodcellvalue[i]];
        }
        const resultIndices = [10, 11, 12, 14, 15, 17, 18];
        const dataCellIndices = [1, 2, 3, 5, 6, 8, 9 ];

        for (let i = 0; i < resultIndices.length; i++) {
          this.result[resultIndices[i]] = updatedData[this.databasecellname[dataCellIndices[i]]];
        }

        for (let i = 0; i < this.ProductionPlanninggraph.length; i++) {
          this.jsonarray1.push(Number(updatedData[this.ProductionPlanninggraph[i]]));
        }
        this.ProductionPlanningChart.series = [{ "data": this.jsonarray1 }]

        for (let i = 0; i < this.ComponentsOrderedgraph.length; i++) {
          this.jsonarray2.push(Number(updatedData[this.ComponentsOrderedgraph[i]]));
        }
        this.ComponentsOrderedChart.series = [{ "data": this.jsonarray2 }]


        for (let i = 0; i < this.cardData1.length; i++) {
          this.cardData1[i].title[0] = String(updatedData.valueChainCM[this.cardData1[i].title[1]])
          if (this.cardData1[i].turncatedtext == "") {
            this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
          }
        }

        for (let i = 0; i < this.cardData2.length; i++) {
          this.cardData2[i].title[0] = String(updatedData.valueChainCM[this.cardData2[i].title[1]])
          if (this.cardData2[i].turncatedtext == "") {
            this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
          }
        }
      }
    });
  }
  valueWrite() {

    let apiname = '/valuechain/singleinputvaluechain';

    let valuechaindata = {
      "z14": this.result[9],
      "z15": this.result[13],
      "z16": this.result[16],
      "z17": this.result[19] == true ? 1 : 0,
      "z18": this.result[20] == true ? 1 : 0,
      "z19": this.result[21] == true ? 1 : 0,
      "z20": this.result[22] == true ? 1 : 0,

    }

    this._api.valuechaindatawrite("valuechain", 3, valuechaindata, apiname, "valuechaincmid").subscribe((data: any) => {
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

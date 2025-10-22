import { Component, EventEmitter, Output, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexNoData,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { ConfirmDialogComponent } from 'src/app/common/confirm-dialog/confirm-dialog.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { StpgamefoodforthoughtComponent } from '../stpgamefoodforthought/stpgamefoodforthought.component';
import { PopupDialogueComponent } from 'src/app/common/popup-dialogue/popup-dialogue.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';


interface barChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  noData: ApexNoData;
  tooltip: ApexTooltip;
}
interface bubblechart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-stpgamephase2',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './stpgamephase2.component.html',
  styleUrls: ['./stpgamephase2.component.scss']
})
export class Stpgamephase2Component extends AbstractComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  foodforthought: boolean = true;
  inputDisabled: boolean = false;
  c20: string = 'title';
  textshow: { [key: string]: boolean } = {};
  textshow1: { [key: string]: boolean } = {};
  textshow3: { [key: string]: boolean } = {};
  textshowchannel: { [key: string]: boolean } = {};
  selectedCardId1: string = '';
  selectedCardId2: string = '';
  selectedCardId3: string = '';
  productsalesgraph: barChart;
  bubblecharts: bubblechart;
  salesgraph: barChart;
  jsonarray1: any = [];
  jsonarray2: any = []
  jsonarray3: any = [];
  jsonarray4: any = [];


  result: any = [];




  tableHeaders: string[] = ['TC', 'TG', 'IT', 'NG', 'ST', 'EM'];
  tableData: { name: string, values: String[], lastColumn: String }[] = [
    { name: 'Revenue', values: ['C144', 'D144', 'E144', 'F144', 'G144'], lastColumn: 'H144' },
    { name: 'Variable Cost', values: ['C145', 'D145', 'E145', 'F145', 'G145'], lastColumn: 'H145' },
    { name: 'Gross Profit', values: ['C146', 'D146', 'E146', 'F146', 'G146'], lastColumn: 'H146' },
    { name: 'Production Line Cost + Update Cost', values: ['C147', 'D147', 'E147', 'F147', 'G147'], lastColumn: 'H147' },
    { name: 'Administration Cost', values: ['C148', 'D148', 'E148', 'F148', 'G148'], lastColumn: 'H148' },
    { name: 'Market Research Cost', values: ['C149', 'D149', 'E149', 'F149', 'G149'], lastColumn: 'H149' },
    { name: 'Promotion Cost', values: ['C150', 'D150', 'E150', 'F150', 'G150'], lastColumn: 'H150' },
    { name: 'Channel Cost', values: ['C151', 'D151', 'E151', 'F151', 'G151'], lastColumn: 'H151' },
    { name: 'Packaging Cost', values: ['C152', 'D152', 'E152', 'F152', 'G152'], lastColumn: 'H152' },
    { name: 'Recycling Cost', values: ['C153', 'D153', 'E153', 'F153', 'G153'], lastColumn: 'H153' },
    { name: 'Repairability Cost', values: ['C154', 'D154', 'E154', 'F154', 'G154'], lastColumn: 'H154' },
    { name: 'Operating Profit/Loss', values: ['C155', 'D155', 'E155', 'F155', 'G155'], lastColumn: 'H155' }
  ];

  //bubble chart cell
  bubblechartcell: any = [
    ['B182', 'C182', 'D182', 'E182'],
    ['B183', 'C183', 'D183', 'E183'],
    ['B184', 'C184', 'D184', 'E184'],
    ['B185', 'C185', 'D185', 'E185'],
    ['B186', 'C186', 'D186', 'E186'],
    ['B187', 'C187', 'D187', 'E187'],
    ['B188', 'C188', 'D188', 'E188'],
    ['B189', 'C189', 'D189', 'E189'],
    ['B190', 'C190', 'D190', 'E190'],
    ['B191', 'C191', 'D191', 'E191'],
    ['B192', 'C192', 'D192', 'E192'],
  ]

  //companysell chart cell
  companysellchartcell: any = [
    ['C136', 'D136', 'E136', 'F136', 'G136', 'H136'],
    ['C137', 'D137', 'E137', 'F137', 'G137', 'H137']
  ]

  //projection chart cell
  projectionscell: any = ['W174', 'W175', 'W176', 'W177'];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    // this.productsalesgraph = {
    //   series: [
        
    //   ],
    //   chart: {
    //     height: 250,
    //     type: "line",
    //     toolbar: {
    //       show: true,
    //       offsetX: 0,
    //       offsetY: 0,
    //       tools: {

    //       }
    //     },
    //   },
    //   noData: this.nodata[0],
    //   plotOptions: {
    //     bar: {
    //       dataLabels: {
    //         position: "center",
    //       },
    //       horizontal: false,
    //       columnWidth: "40%",

    //     }
    //   },
    //   dataLabels: {
    //     enabled: false,
    //     formatter: function (val) {
    //       if (typeof val === "number") {
    //         return val.toFixed(2); // Format to 2 decimal places if val is a number
    //       }
    //       return val as string; // Cast val to string if it's not a number
    //     }
    //   },
    //   xaxis: {
    //     categories: ['TC', 'TG', 'IT', 'NG', 'ST', 'EM'],
    //     position: "bottom",
    //     labels: {
    //       offsetY: 0,
    //       rotate: 0,
    //     },
    //     axisBorder: {
    //       show: true
    //     },
    //     axisTicks: {
    //       show: true
    //     },
    //     crosshairs: {

    //     },
    //     tooltip: {
    //       enabled: false,
    //       offsetY: -35
    //     }
    //   },
    //   fill: {
    //     type: 'solid',
    //   },

    //   yaxis: {
    //     labels: {
    //       show: true,
    //       formatter: function (val) {
    //         if (typeof val === "number") {
    //           return val.toFixed(2); // Format to 2 decimal places if val is a number
    //         }
    //         return val as string; // Cast val to string if it's not a number
    //       }
    //     },
    //     axisBorder: {
    //       show: false
    //     },
    //     axisTicks: {
    //       show: false
    //     },
    //   },
    //   tooltip: {
    //     y: {
    //       formatter: undefined,
    //       title: {
    //         formatter: (seriesName: any) => '',
    //       },
    //     },
    //     x: {
    //       show: false
    //     }

    //   },
    //   title: {
    //     text: "Projections, Mn INR",
    //     offsetY: 0,
    //     align: "center",
    //     style: {
    //       fontWeight: "bold",
    //     }
    //   }
    // };
    this.productsalesgraph = {
      series: [],
      chart: {
        height: 250,
        type: "line",
        toolbar: {
          show: true,
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "40%",
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          if (typeof val === "number") {
            return val.toFixed(2); // Format bar values to 2 decimal places
          }
          return val as string; // Cast val to string if not a number
        },
      },
      xaxis: {
        categories: ["TC", "TG", "IT", "NG", "ST", "EM"],
        position: "bottom",
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      fill: {
        type: "solid",
      },
      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            if (typeof val === "number") {
              return val.toFixed(2); // Format to 2 decimal places
            }
            return val as string; // Cast val to string if not a number
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: (value, options) => {
            const seriesIndex = options.seriesIndex; // Index of the series being hovered
            if (seriesIndex === 1) {
              // For line chart (index 1), show percentage
              return (value*100).toFixed(1) + "%";
            }
            // For bar chart, show normal value
            return value.toFixed(2);
          },
        },
      },
      title: {
        text: "Sales, Mn units",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        },
      },
    };
    this.salesgraph = {
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
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
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
        categories: ['Revenue', 'Gross Profit', 'Fixed Costs', 'Operating Profit'],
        position: "bottom",
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        crosshairs: {

        },
        tooltip: {
          enabled: false,
          offsetY: -35
        }
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            return val + "";
          },
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
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
      title: {
        text: "Projections, Mn INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
    this.bubblecharts = {
      series: [

      ],
      chart: {
        height: 350,
        type: "bubble"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      title: {
        text: "Perceptual Map",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold"
        }
      },
      xaxis: {
        title: {
          text: "Price",
          offsetY: 80,
        },
        position: "bottom",
        type: "category",
        tickAmount: 10,
        labels: {
          offsetY: 0,
          rotate: 0,
        },
      },
      
      yaxis: {
        title: {
          text: "Attractiveness"
        },
      },
      tooltip: {
        y: {

        }
      }
    };

  }

  tools: any = [
    {
      title: "TC P1",
      value: "",
      icon: "1 (1).svg",
      checkcell: 'cj48',
      designcell: 'cj49',
      performancecell: 'cj50',
      batterycell: 'cj51',
      salescell: 'cj57',
      pricecell: 'cj58',
      unitcostcell: 'W37',
    }, {
      title: "TC P2",
      value: "",
      icon: "1 (3).svg",
      checkcell: 'ck48',
      designcell: 'ck49',
      performancecell: 'ck50',
      batterycell: 'ck51',
      salescell: 'ck57',
      pricecell: 'ck58',
      unitcostcell: 'X37',
    },

  ]
  levels: any[] = [
    {
      title: 'Premium Camera',
      icon: 'fa fa-camera',
      checkedcell: ['cj52', 'ck52']
    },
    {
      title: 'Extra Memory',
      icon: 'fa fa-memory',
      checkedcell: ['cj53', 'ck53']
    },
    {
      title: 'Premium Display',
      icon: 'fa fa-tv',
      checkedcell: ['cj54', 'ck54']
    },
    {
      title: 'Durable Screen',
      icon: 'fa fa-tv',
      checkedcell: ['cj55', 'ck55']
    },
    {
      title: 'Securtiy',
      icon: 'fa fa-memory',
      checkedcell: ['cj56', 'ck56']
    }
  ]

  cardData1 = [
    {
      id: 'card1',
      titlecell: 'K65',
      description:
        'The packaging of your products changes dynamically with the current trends, trying to appeal to the trend-savvy customer segments.',
      costcell: 'W90',
      inputcell: 'cj62',
      turncatedtext: ""
    },
    {
      id: 'card2',
      titlecell: 'K66',
      description: 'Each product in your portfolio will have a slightly different packaging, emphasizing the main features and qualities of each product.',
      costcell: 'W91',
      inputcell: 'cj63',
      turncatedtext: "",
    },
    {
      id: 'card3',
      titlecell: 'K67',
      description: 'Each product in your portfolio will have similar packaging. This is the most environmentally friendly packaging policy, but some customer segments might not find similar packaging across the product portfolio very appealing.',
      costcell: 'W92',
      inputcell: 'cj64',
      turncatedtext: "",
    },
  ];

  cardData2 = [
    {
      id: 'card1',
      titlecell: 'K70',
      description:
        'In this service level, repairability and software support are minimal. Repairs are outsourced to third-party service centers, and software updates will be infrequent or unsupported after a short period.',
      costcell: 'W95',
      turncatedtext: "",
      inputcell: 'cj66'
    },
    {
      id: 'card2',
      titlecell: 'K71',
      description: "This service level offers moderate repairability and software support. The company provides repair services through authorized service centers, and software updates will be available for a reasonable duration after the product's release.",
      costcell: 'W96',
      turncatedtext: "",
      inputcell: 'cj67'
    },
    {
      id: 'card3',
      titlecell: 'K72',
      description: 'This service level prioritizes repairability and software support. The company ensures that repairs are readily available through authorized service centers, and software updates are regularly provided for an extended period to enhance the user experience and address potential issues.',
      costcell: 'W97',
      turncatedtext: "",
      inputcell: 'cj68'
    },
  ];
  cardData3 = [
    {
      id: 'card1',
      img: "../../../../assets/images/stpgame/nonrecycle.jpg",
      titlecell: 'K75',
      description: 'The company does not implement any specific recycling program for its products. End-of-life devices may be disposed of through regular waste channels, potentially contributing to environmental pollution.',
      costcell: 'W100',
      turncatedtext: "",
      inputcell: 'cj70'
    },
    {
      id: 'card2',
      img: "../../../../assets/images/stpgame/inhouserecycle.png",
      titlecell: 'K76',
      description: 'The company establishes its own recycling facilities to responsibly manage end-of-life products. Materials are sorted, processed, and recycled in an environmentally friendly manner, reducing waste and promoting sustainability.',
      costcell: 'W101',
      turncatedtext: "",
      inputcell: 'cj71'
    },
    {
      id: 'card3',
      img: "../../../../assets/images/stpgame/thirdpartyrecycle.svg",
      titlecell: 'K77',
      description: "The company collaborates with third-party recycling partners to handle end-of-life products. These partners specialize in recycling electronic waste and ensure that materials are processed in compliance with environmental regulations.",
      costcell: 'W102',
      turncatedtext: "",
      inputcell: 'cj72'
    },
    {
      id: 'card4',
      img: "../../../../assets/images/stpgame/buyonerycycle.svg",
      titlecell: 'K78',
      description: "The company incentivizes customers to recycle by offering to recycle a device for every new purchase made. This encourages responsible disposal of old devices and promotes circular economy principles.",
      costcell: 'W103',
      turncatedtext: "",
      inputcell: 'cj73'
    },

  ];
  Channelsdata = [
    {
      id: 'card1',
      titlecell: 'K81',
      description:
        'Retail channels include physical stores where customers can directly purchase smartphones. This includes multi-brand outlets, brand-owned stores, and franchise stores.',
      costcell: 'W106',
      turncatedtext: "",
      inputcell: 'cj75'
    },
    {
      id: 'card2',
      titlecell: 'K82',
      description: "Online channels involve selling smartphones through e-commerce platforms and company websites. This allows for direct-to-consumer sales and reaches a wider audience.",
      costcell: 'W107',
      turncatedtext: "",
      inputcell: 'cj76'
    },
    {
      id: 'card3',
      titlecell: 'K83',
      description: 'Specialist stores cater to specific customer segments or offer specialized services. Examples include tech-focused stores, flagship experience centers, or stores targeting environmentally conscious consumers.',
      costcell: 'W108',
      turncatedtext: "",
      inputcell: 'cj77'
    },
  ];
  Perceptualdata = [
    {
      id: 'card1',
      img: "../../../../assets/images/stpgame/price.svg",
      titlecell: 'D9',
      inputcell: 'cj42'
    },
    {
      id: 'card2',
      img: "../../../../assets/images/stpgame/trendy.jpg",
      titlecell: 'D10',
      inputcell: 'cj43'
    },
    {
      id: 'card3',
      img: "../../../../assets/images/stpgame/techsaavy.svg",
      titlecell: 'D11',
      inputcell: 'cj44'
    },
    {
      id: 'card4',
      img: "../../../../assets/images/stpgame/tech.jpg",
      titlecell: 'D12',
      inputcell: 'cj45'
    },
  ];

  getResultValue(key: string): number | null {
    return this.result[key] || null;
  }


  override ngOnInit(): void {
    this.getFetchData();
  }

  // defaultInputWrite() {
  //   let apiname = '/stpgame/fetchstpgame';
  //   this._api.fetchGameData(apiname, this.noofattempt).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             this.result = data.resultList[0];
  //             let phase1data = {
  //               'cj48': this.result.cj8,
  //               'cj49': this.result.cj9,
  //               'cj50': this.result.cj10,
  //               'cj51': this.result.cj11,
  //               'cj52': this.result.cj12,
  //               'cj53': this.result.cj13,
  //               'cj54': this.result.cj14,
  //               'cj55': this.result.cj15,
  //               'cj56': this.result.cj16,
  //               'cj57': this.result.cj17,
  //               'cj58': this.result.cj18,
  //               'ck48': this.result.ck8,
  //               'ck49': this.result.ck9,
  //               'ck50': this.result.ck10,
  //               'ck51': this.result.ck11,
  //               'ck52': this.result.ck12,
  //               'ck53': this.result.ck13,
  //               'ck54': this.result.ck14,
  //               'ck55': this.result.ck15,
  //               'ck56': this.result.ck16,
  //               'ck57': this.result.ck17,
  //               'ck58': this.result.ck18,
  //               'cj135': 'yes'

  //             }
  //             this._api.writeGameData("stpgame", 2, phase1data, '/stpgame/singleinputstpgame', 'stpgamecmid')
  //               .subscribe((data: any) => {
  //                 if (data.status === "Success") {
  //                   this.getFetchData();
  //                 }
  //               }, (error: any) => {
  //                 this.checkloading = false;
  //                 this.driveerrorLog(error, '/stpgame/singleinputstpgame');
  //               });
  //           }
  //         }
  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })



  // }
  //fetch data
  getFetchData() {
    for (let i = 0; i < this.cardData1.length; i++) {
      this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
    }
    for (let i = 0; i < this.cardData2.length; i++) {
      this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
    }
    for (let i = 0; i < this.cardData3.length; i++) {
      this.cardData3[i].turncatedtext = this.cardData3[i].description.substring(0, 100) + (this.cardData3[i].description.length > 100 ? '...' : '');
    }
    for (let i = 0; i < this.Channelsdata.length; i++) {
      this.Channelsdata[i].turncatedtext = this.Channelsdata[i].description.substring(0, 80) + (this.Channelsdata[i].description.length > 80 ? '...' : '');
    }

    let apiname = '/stpgame/fetchstpgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = [];
              this.result = data.resultList[0];
              this._global.casemanagementid.next(data.resultList[0].stpgamecmid);
              if (data.resultList[0].stpGameCM.stpGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              //bubble graph
              for (let i = 0; i < this.bubblechartcell.length; i++) {
                this.jsonarray1.push({
                  name: this.result.stpgamedata[this.bubblechartcell[i][0]],
                  data: [[this.result.stpgamedata[this.bubblechartcell[i][1]], this.result.stpgamedata[this.bubblechartcell[i][2]], (Number(this.result.stpgamedata[this.bubblechartcell[i][3]] * 100))]]
                })
              }
              this.bubblecharts.series = this.jsonarray1;

              //sales graph
              for (let i = 0; i < this.companysellchartcell[0].length; i++) {
                this.jsonarray2.push(this.result.stpgamedata[this.companysellchartcell[0][i]]);
                this.jsonarray3.push(this.result.stpgamedata[this.companysellchartcell[1][i]]);
              }
              this.productsalesgraph.series = [
                { "name": "Company Sales", "type": "column", "data": this.jsonarray2 },
                { "name": "Company Market Share", "type": "line", "data": this.jsonarray3 },

              ]

              for (let i = 0; i < this.projectionscell.length; i++) {
                this.jsonarray4.push(this.result.stpgamedata[this.projectionscell[i]]);
              }
              this.salesgraph.series = [
                { "name": "value", "data": this.jsonarray4 },
              ]

              if ((data.resultList[0].cj120 == 'yes') || (data.resultList[0].cj121 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
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




  toggleText(uniqueCardId: string): void {
    this.textshow[uniqueCardId] = !this.textshow[uniqueCardId];

  }
  toggleTextnew(uniqueCardId1: string): void {
    this.textshow1[uniqueCardId1] = !this.textshow1[uniqueCardId1];

  }
  toggleTextchannel(uniqueCardId1: string): void {
    this.textshowchannel[uniqueCardId1] = !this.textshowchannel[uniqueCardId1];
  }
  toggleText1(cardId: string) {
    this.textshow3[cardId] = !this.textshow3[cardId];
  }

  writestpvalue(cellname: string, inputtype: string, event: any, firstcell: string, secondcell: string, thirdcell: string, fourthcell: string, length: number) {
    const ranges: { [key: string]: [number, number, string] } = {
      'cj50': [0, 100, "the range between 0 to 100"],
      'cj51': [0, 100, "the range between 0 to 100"],
      'ck50': [0, 100, "the range between 0 to 100"],
      'ck51': [0, 100, "the range between 0 to 100"],
      'cj57': [0, 7, "the range between 0 to 7"],
      'ck57': [0, 7, "the range between 0 to 7"],
      'cj58': [0, 100000, "the range between 0 to 100000"],
      'ck58': [0, 100000, "the range between 0 to 100000"],
      'cj60': [0, 500, "the range between 0 to 500"]
    };

    const range = ranges[cellname];
    if (range) {
      const [min, max, errorMsg] = range;
      if (event.target.value < min || event.target.value > max) {
        event.target.value = 0;
        this._alert.error(errorMsg);
        return;
      }
    }
    let phase1Data: any = []
    if (inputtype == 'radio') {
      if (length == 4) {
        phase1Data = {
          [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [secondcell]: secondcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [thirdcell]: thirdcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [fourthcell]: fourthcell === cellname ? (event.target.checked ? 1 : 0) : 0
        };
      } else {
        phase1Data = {
          [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [secondcell]: secondcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [thirdcell]: thirdcell === cellname ? (event.target.checked ? 1 : 0) : 0,
        };
      }

    } else {
      phase1Data = {
        [cellname]: inputtype === 'checkbox' ? (event.target.checked ? 1 : 0) : event.target.value
      };

    }

    //  const phase1Data = {
    //     [cellname]: inputtype === 'checkbox' ? (event.target.checked ? 1 : 0) : event.target.value
    //   };



    this._api.writeGameData("stpgame", 1, phase1Data, '/stpgame/singleinputstpgame', 'stpgamecmid')
      .subscribe((data: any) => {
        if (data.status === "Success") {
          this.getFetchData();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, '/stpgame/singleinputstpgame');
      });
  }

  writestpvalue1(cellname: string, inputtype: string, event: any, firstcell: string, secondcell: string, thirdcell: string) {
    const ranges: { [key: string]: [number, number, string] } = {
      'cj50': [0, 100, "the range between 0 to 100"],
      'cj51': [0, 100, "the range between 0 to 100"],
      'ck50': [0, 100, "the range between 0 to 100"],
      'ck51': [0, 100, "the range between 0 to 100"],
      'cj57': [0, 7, "the range between 0 to 7"],
      'ck57': [0, 7, "the range between 0 to 7"],
      'cj58': [0, 100000, "the range between 0 to 100000"],
      'ck58': [0, 100000, "the range between 0 to 100000"],
      'cj60': [0, 500, "the range between 0 to 500"]
    };

    const range = ranges[cellname];
    if (range) {
      const [min, max, errorMsg] = range;
      if (event.target.value < min || event.target.value > max) {
        event.target.value = 0;
        this._alert.error(errorMsg);
        return;
      }
    }

    let phase1Data: any = []
    if (inputtype == 'radio') {
      phase1Data = {
        [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
        [secondcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
        [thirdcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0
      };
    }


    this._api.writeGameData("stpgame", 1, phase1Data, '/stpgame/singleinputstpgame', 'stpgamecmid')
      .subscribe((data: any) => {
        if (data.status === "Success") {
          this.getFetchData();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, '/stpgame/singleinputstpgame');
      });
  }

  openDialog(): void {
    this.dialog.open(StpgamefoodforthoughtComponent, {
      data: {},
    });
  }

  inputdatacheckvalue: boolean = false;
  errorlist: any = [];


  checkandgotophase2() {
    this.inputdatacheck();

  }


  inputdatacheck() {
    this.errorlist = [];
    if ((this.result.cj48 == 0) && (this.result.ck48 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase2");
    }
    if (this.result.cj48 == 1) {
      if ((this.result.cj49 == "") ||
        ((this.result.cj52 == 0) && (this.result.cj53 == 0) && (this.result.cj54 == 0) && (this.result.cj55 == 0) && (this.result.cj56 == 0))
        ||((this.result.cj50<0)||(this.result.cj50>100))||((this.result.cj51<0)||(this.result.cj51>100))
        ||((this.result.cj57<0)||(this.result.cj57>7))||((this.result.cj58<0)||(this.result.cj58>100000))
      ) {
        this.inputdatacheckvalue = true;
        this.errorlist.push("To move ahead, kindly make your decisions in Phase2-product 1 launch");
      }
    }
    if (this.result.ck48 == 1) {
      if ((this.result.ck49 == "") ||
        ((this.result.ck52 == 0) && (this.result.ck53 == 0) && (this.result.ck54 == 0) && (this.result.ck55 == 0) && (this.result.ck56 == 0))
        ||((this.result.ck50<0)||(this.result.ck50>100))||((this.result.ck51<0)||(this.result.ck51>100))
        ||((this.result.ck57<0)||(this.result.ck57>7))||((this.result.ck58<0)||(this.result.ck58>100000))
      ) {
        this.inputdatacheckvalue = true;
        this.errorlist.push("To move ahead, kindly make your decisions in Phase2-product 2 launch");
      }
    }

    if((this.result.cj60<0)&&(this.result.cj60>500)){
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase2-Promotion, Mn INR");
    }
    if ((this.result.cj62 == 0) && (this.result.cj63 == 0) && (this.result.cj64 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase2-Packaging");
    }
    if ((this.result.cj66 == 0) && (this.result.cj67 == 0) && (this.result.cj68 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase2-Repairability & Services");
    }
    if ((this.result.cj70 == 0) && (this.result.cj71 == 0) && (this.result.cj72 == 0) && (this.result.cj73 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase2-Recycling");
    }
    if ((this.result.cj42 == 0) && (this.result.cj43 == 0) && (this.result.cj44 == 0) && (this.result.cj45 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase2-Perceptual Map, Phase 1");
    }
    if ((this.result.cj75 == 0) && (this.result.cj76 == 0) && (this.result.cj77 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase2-Channels");
    }

    if (this.errorlist.length > 0) {
      this.inputdatacheckvalue = true;
    } else {
      this.inputdatacheckvalue = false;
    }

    if (this.inputdatacheckvalue == false) {
      this.gotophase3();
    } else {
      const dialogRef = this.dialog.open(BlankinputlistComponent, {
        width: '60%',
        data: this.errorlist,
      });
      dialogRef.afterClosed().subscribe(result => {

      });
    }
  }

  gotophase3() {
    const dialogRef = this.dialog.open(PopupDialogueComponent, {
      width: '40%',
      panelClass: 'centertop-dialog',
      data:
      {
        title: "You are saving your current phase decisions, all the decisions made will be considered for assessments. Once you move to the next phase, the decisions of the current phase can't be edited. Do you want to save?"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.action === 'yes') {
        this.saveAndgotoPhase3()
      }
    });
  }

  //data submit and go to Phase2 tab 
  saveAndgotoPhase3() {
    this.checkloading = true;
    let apiname = '/stpgame/singleinputstpgame';

    let initiateData = {
      "cj120": 'yes',
      'cj88': this.result.cj48,
      'cj89': this.result.cj49,
      'cj90': this.result.cj50,
      'cj91': this.result.cj51,
      'cj92': this.result.cj52,
      'cj93': this.result.cj53,
      'cj94': this.result.cj54,
      'cj95': this.result.cj55,
      'cj96': this.result.cj56,
      'cj97': this.result.cj57,
      'cj98': this.result.cj58,
      'ck88': this.result.ck48,
      'ck89': this.result.ck49,
      'ck90': this.result.ck50,
      'ck91': this.result.ck51,
      'ck92': this.result.ck52,
      'ck93': this.result.ck53,
      'ck94': this.result.ck54,
      'ck95': this.result.ck55,
      'ck96': this.result.ck56,
      'ck97': this.result.ck57,
      'ck98': this.result.ck58,
    }
    this._api.writeGameData("stpgame", 2,
      initiateData, apiname, 'stpgamecmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.inputDisabled = true;
          this.Sharedservice.phase3enableTab();
          setTimeout(() => {
            this.newItemEvent.emit('phase3');
          }, 1000)

        } else {
          this.checkloading = false;
        }

      }, (error: any) => {
        this.checkloading = false;
        this.inputDisabled = false;
        this.driveerrorLog(error, apiname);
      })
  }


}

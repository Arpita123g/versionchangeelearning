import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
import { PopupDialogueComponent } from 'src/app/common/popup-dialogue/popup-dialogue.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { StpgamefoodforthoughtComponent } from '../stpgamefoodforthought/stpgamefoodforthought.component';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
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
@Component({
  selector: 'app-stpgamephase1',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './stpgamephase1.component.html',
  styleUrls: ['./stpgamephase1.component.scss']
})
export class Stpgamephase1Component extends AbstractComponent {
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
  projectionsgraph: barChart;
  jsonarray1: any = [];

  result: any = [];
  // {
  // 'period': {
  //   'L15': 50,
  //   'L16': 15,
  //   'L17': 5,
  //   'E42': "Dynamic Packaging",
  //   'F42': "Product Specific Packaging",
  //   "G42": "Same Packaging for All Products",
  //   "M65": 100,
  //   "M66": 120,
  //   "M67": 90,
  //   "M70": 15,
  //   "M71": 51,
  //   "M72": 153,
  //   "M75": 0,
  //   "M76": 50,
  //   "M77": 30,
  //   "M78": 80,
  //   "M81": 100,
  //   "M82": 80,
  //   "M83": 120,
  //   "K70":"Low Repairability & Software Support",
  //   "K71":"Mediocre Repairability & Software Support",
  //   "K72":"High Repairability & Software Support",
  //   "K75":"No Recycling",
  //   "K76":"In-house Recycling",
  //   "K77":"Third-party Recycling",
  //   "K78":"Buy One, We Recycle One",
  //   "K81":"Retail",
  //   "K82":"Online",
  //   "K83":"Specialist Stores",
  // },
  // 'CJ8': 1,
  // 'CK8': 0,
  // 'CJ9': 'Avant Garde',
  // 'CK9': '',
  // 'CJ10': 34,
  // 'CK10': 0,
  // 'CJ11': 32,
  // 'CK11': 0,
  // 'CJ18': 78,
  // 'CK18': 0,
  // 'C37': 66,
  // 'D37': 67,
  // 'CJ12': true,
  // 'CK12': false,
  // 'CJ13': false,
  // 'CK13': false,
  // 'CJ14': true,
  // 'CK14': false,
  // 'CJ15': true,
  // 'CK15': false,
  // 'CJ16': true,
  // 'CK16': false,
  // 'CJ17': true,
  // 'CK17': false,
  // 'CJ20': 456,
  // 'CJ22': 1,
  // 'CJ23': 0,
  // 'CJ24': 0,
  // 'CJ26': 1,
  // 'CJ27': 0,
  // 'CJ28': 0,
  // 'CJ30': 0,
  // 'CJ31': 1,
  // 'CJ32': 0,
  // 'CJ33': 0,
  // 'E161': 78,
  // 'E162': 79,
  // 'E163': 780,
  // 'E164': 7878,
  // 'E165': 7866,
  // 'E166': 78776,
  // 'E167': 7854,
  // 'E168': 7834,
  // 'E169': 7823,
  // 'E170': 7821,
  // 'E171': 7833,
  // 'E172': 7811,
  // 'C174': 15000,
  // 'C175': 5064,
  // 'C176': 568,
  // 'C177': 4496,

  // }
  projectionrangecell: any =
    ['C174', 'C175', 'C176', 'C177']
  inputdatacheckvalue: boolean = false;
  errorlist: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.projectionsgraph = {
      series: [],
      chart: {
        height: 250,
        type: "bar",
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {}
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
  }

  tools: any = [
    {
      title: "TC P1",
      value: "",
      icon: "1 (1).svg",
      checked: "",
      checkcell: 'cj8',
      designcell: 'cj9',
      performancecell: 'cj10',
      batterycell: 'cj11',
      salescell: 'cj17',
      pricecell: 'cj18',
      unitcostcell: 'C37',
    }, {
      title: "TC P2",
      value: "",
      icon: "1 (3).svg",
      checked: "",
      checkcell: 'ck8',
      designcell: 'ck9',
      performancecell: 'ck10',
      batterycell: 'ck11',
      salescell: 'ck17',
      pricecell: 'ck18',
      unitcostcell: 'D37',
    },

  ]
  levels: any[] = [
    {
      title: 'Premium Camera',
      icon: 'fa fa-camera',
      checkedcell: ['cj12', 'ck12']

    },
    {
      title: 'Extra Memory',
      icon: 'fa fa-memory',
      checkedcell: ['cj13', 'ck13']
    },
    {
      title: 'Premium Display',
      icon: 'fa fa-tv',
      checkedcell: ['cj14', 'ck14']
    },
    {
      title: 'Durable Screen',
      icon: 'fa fa-tv',
      checkedcell: ['cj15', 'ck15']
    },
    {
      title: 'Securtiy',
      icon: 'fa fa-memory',
      checkedcell: ['cj16', 'ck16']
    },

  ]

  cardData1 = [
    {
      id: 'card1',
      titlecell: 'E42',
      description:
        'The packaging of your products changes dynamically with the current trends, trying to appeal to the trend-savvy customer segments.',
      costcell: 'M65',
      turncatedtext: "",
      inputcell: 'cj22'
    },
    {
      id: 'card2',
      titlecell: 'F42',
      description: 'Each product in your portfolio will have a slightly different packaging, emphasizing the main features and qualities of each product.',
      costcell: 'M66',
      turncatedtext: "",
      inputcell: 'cj23'
    },
    {
      id: 'card3',
      titlecell: 'G42',
      description: 'Each product in your portfolio will have similar packaging. This is the most environmentally friendly packaging policy, but some customer segments might not find similar packaging across the product portfolio very appealing.',
      costcell: 'M67',
      turncatedtext: "",
      inputcell: 'cj24'
    },
  ];

  cardData2 = [
    {
      id: 'card1',
      titlecell: 'K70',
      description:
        'In this service level, repairability and software support are minimal. Repairs are outsourced to third-party service centers, and software updates will be infrequent or unsupported after a short period.',
      costcell: 'M70',
      turncatedtext: "",
      inputcell: 'cj26'
    },
    {
      id: 'card2',
      titlecell: 'K71',
      description: "This service level offers moderate repairability and software support. The company provides repair services through authorized service centers, and software updates will be available for a reasonable duration after the product's release.",
      costcell: 'M71',
      turncatedtext: "",
      inputcell: 'cj27'
    },
    {
      id: 'card3',
      titlecell: 'K72',
      description: 'This service level prioritizes repairability and software support. The company ensures that repairs are readily available through authorized service centers, and software updates are regularly provided for an extended period to enhance the user experience and address potential issues.',
      costcell: 'M72',
      turncatedtext: "",
      inputcell: 'cj28'
    },
  ];
  cardData3 = [
    {
      id: 'card1',
      img: "../../../../assets/images/stpgame/nonrecycle.jpg",
      titlecell: 'K75',
      description: 'The company does not implement any specific recycling program for its products. End-of-life devices may be disposed of through regular waste channels, potentially contributing to environmental pollution.',
      costcell: 'M75',
      turncatedtext: "",
      inputcell: 'cj30'
    },
    {
      id: 'card2',
      img: "../../../../assets/images/stpgame/inhouserecycle.png",
      titlecell: 'K76',
      description: 'The company establishes its own recycling facilities to responsibly manage end-of-life products. Materials are sorted, processed, and recycled in an environmentally friendly manner, reducing waste and promoting sustainability.',
      costcell: 'M76',
      turncatedtext: "",
      inputcell: 'cj31'
    },
    {
      id: 'card3',
      img: "../../../../assets/images/stpgame/thirdpartyrecycle.svg",
      titlecell: 'K77',
      description: "The company collaborates with third-party recycling partners to handle end-of-life products. These partners specialize in recycling electronic waste and ensure that materials are processed in compliance with environmental regulations.",
      costcell: 'M77',
      turncatedtext: "",
      inputcell: 'cj32'
    },
    {
      id: 'card4',
      img: "../../../../assets/images/stpgame/buyonerycycle.svg",
      titlecell: 'K78',
      description: "The company incentivizes customers to recycle by offering to recycle a device for every new purchase made. This encourages responsible disposal of old devices and promotes circular economy principles.",
      costcell: 'M78',
      turncatedtext: "",
      inputcell: 'cj33'
    },

  ];
  Channelsdata = [
    {
      id: 'card1',
      titlecell: 'K81',
      description:
        'Retail channels include physical stores where customers can directly purchase smartphones. This includes multi-brand outlets, brand-owned stores, and franchise stores.',
      costcell: 'M81',
      turncatedtext: "",
      inputcell: 'cj35'
    },
    {
      id: 'card2',
      titlecell: 'K82',
      description: "Online channels involve selling smartphones through e-commerce platforms and company websites. This allows for direct-to-consumer sales and reaches a wider audience.",
      costcell: 'M82',
      turncatedtext: "",
      inputcell: 'cj36'
    },
    {
      id: 'card3',
      titlecell: 'K83',
      description: 'Specialist stores cater to specific customer segments or offer specialized services. Examples include tech-focused stores, flagship experience centers, or stores targeting environmentally conscious consumers.',
      costcell: 'M83',
      turncatedtext: "",
      inputcell: 'cj37'
    },
  ];



  override ngOnInit(): void {
    this.getFetchData()
  }



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
              this.jsonarray1 = [];
              this.result = data.resultList[0];
              this._global.casemanagementid.next(data.resultList[0].stpgamecmid);
              if (data.resultList[0].stpGameCM.stpGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              //projection graph
              if (this.result.stpgamedata) {
                for (let i = 0; i < this.projectionrangecell.length; i++) {
                  this.jsonarray1.push((data.resultList[0].stpgamedata[this.projectionrangecell[i]]).toFixed(0));
                }
                this.projectionsgraph.series = [
                  { "name": "value", "data": this.jsonarray1 },
                ]
              }


              if ((data.resultList[0].cj119 == 'yes') || (data.resultList[0].cj121 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
              }

              this.checkloading = false;
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


  writestpvalue(cellname: string, inputtype: string, event: any, firstcell: string, secondcell: string, thirdcell: string, fourthcell: string, length: number) {
    const ranges: { [key: string]: [number, number, string] } = {
      'cj10': [0, 100, "the range between 0 to 100"],
      'cj11': [0, 100, "the range between 0 to 100"],
      'ck10': [0, 100, "the range between 0 to 100"],
      'ck11': [0, 100, "the range between 0 to 100"],
      'cj17': [0, 7, "the range between 0 to 7"],
      'ck17': [0, 7, "the range between 0 to 7"],
      'cj18': [0, 100000, "the range between 0 to 100000"],
      'ck18': [0, 100000, "the range between 0 to 100000"],
      'cj20': [0, 500, "the range between 0 to 500"]
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
    // const phase1Data = {
    //   [cellname]: inputtype === 'checkbox' ? (event.target.checked ? 1 : 0) : event.target.value
    // };

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

  checkandgotophase2() {
    this.inputdatacheck();

  }


  inputdatacheck() {
    this.errorlist = [];
    if ((this.result.cj8 == 0) && (this.result.ck8 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase1");
    }
    if (this.result.cj8 == 1) {
      if ((this.result.cj9 == "") 
        ||((this.result.cj12 == 0) && (this.result.cj13 == 0) && (this.result.cj14 == 0) && (this.result.cj15 == 0) && (this.result.cj16 == 0))
      ||((this.result.cj10<0)||(this.result.cj10>100))||((this.result.cj11<0)||(this.result.cj11>100))
      ||((this.result.cj17<0)||(this.result.cj17>7))||((this.result.cj18<0)||(this.result.cj18>100000))
    ) {
        this.inputdatacheckvalue = true;
        this.errorlist.push("To move ahead, kindly make your decisions in Phase1-product 1 launch");
      }
    }
    if (this.result.ck8 == 1) {
      if ((this.result.ck9 == "") ||
        ((this.result.ck12 == 0) && (this.result.ck13 == 0) && (this.result.ck14 == 0) && (this.result.ck15 == 0) && (this.result.ck16 == 0))
        ||((this.result.ck10<0)||(this.result.ck10>100))||((this.result.ck11<0)||(this.result.ck11>100))
        ||((this.result.ck17<0)||(this.result.ck17>7))||((this.result.ck18<0)||(this.result.ck18>100000))
      ) {
        this.inputdatacheckvalue = true;
        this.errorlist.push("To move ahead, kindly make your decisions in Phase1-product 2 launch");
      }
    }

    if((this.result.cj20<0)&&(this.result.cj20>500)){
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase1-Promotion, Mn INR");
    }
    if ((this.result.cj22 == 0) && (this.result.cj23 == 0) && (this.result.cj24 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase1-Packaging");
    }
    if ((this.result.cj26 == 0) && (this.result.cj27 == 0) && (this.result.cj28 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase1-Repairability & Services");
    }
    if ((this.result.cj30 == 0) && (this.result.cj31 == 0) && (this.result.cj32 == 0) && (this.result.cj33 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase1-Recycling");
    }
    if ((this.result.cj35 == 0) && (this.result.cj36 == 0) && (this.result.cj37 == 0)) {
      this.inputdatacheckvalue = true;
      this.errorlist.push("To move ahead, kindly make your decisions in Phase1-Channels");
    }

    if (this.errorlist.length > 0) {
      this.inputdatacheckvalue = true;
    } else {
      this.inputdatacheckvalue = false;
    }

    if (this.inputdatacheckvalue == false) {
      this.gotophase2();
    } else {
      const dialogRef = this.dialog.open(BlankinputlistComponent, {
        width: '60%',
        data: this.errorlist,
      });
      dialogRef.afterClosed().subscribe(result => {

      });
    }
  }

  gotophase2() {
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
        this.saveAndgotoPhase2()
      }
    });
  }


  //data submit and go to Phase2 tab 
  saveAndgotoPhase2() {
    this.checkloading = true;
    let apiname = '/stpgame/singleinputstpgame';

    let initiateData = {
      "cj119": 'yes',
      'cj48': this.result.cj8,
      'cj49': this.result.cj9,
      'cj50': this.result.cj10,
      'cj51': this.result.cj11,
      'cj52': this.result.cj12,
      'cj53': this.result.cj13,
      'cj54': this.result.cj14,
      'cj55': this.result.cj15,
      'cj56': this.result.cj16,
      'cj57': this.result.cj17,
      'cj58': this.result.cj18,
      'ck48': this.result.ck8,
      'ck49': this.result.ck9,
      'ck50': this.result.ck10,
      'ck51': this.result.ck11,
      'ck52': this.result.ck12,
      'ck53': this.result.ck13,
      'ck54': this.result.ck14,
      'ck55': this.result.ck15,
      'ck56': this.result.ck16,
      'ck57': this.result.ck17,
      'ck58': this.result.ck18,
    }
    this._api.writeGameData("stpgame", 1,
      initiateData, apiname, 'stpgamecmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.inputDisabled = true;
          this.Sharedservice.phase2enableTab();
          setTimeout(() => {
            this.newItemEvent.emit('phase2');
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


  //Foodforthought tab open
  openDialog(): void {
    this.dialog.open(StpgamefoodforthoughtComponent, {
      data: {},
    });
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

}

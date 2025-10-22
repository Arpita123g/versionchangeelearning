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
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { StpgamefoodforthoughtComponent } from '../stpgamefoodforthought/stpgamefoodforthought.component';
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
};
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
  selector: 'app-stpgamephase3',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './stpgamephase3.component.html',
  styleUrls: ['./stpgamephase3.component.scss']
})
export class Stpgamephase3Component extends AbstractComponent {
  foodforthought: boolean = true;
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
  // result: any = [];
  checkdisable: boolean = false;
  bubblejsonArrays: any = [];
  periodresult: any = [];
  databasecellname: string[] = [
    "C143", "D143", "E143", "F143", "G143", "H143", //5
    "B161", "W144", "X144", "Y144", "Z144", "AA144", "AB144", //12
    "B162", "W145", "X145", "Y145", "Z145", "AA145", "AB145", //19
    "B163", "W146", "X146", "Y146", "Z146", "AA146", "AB146", //26
    "B164", "W147", "X147", "Y147", "Z147", "AA147", "AB147", //33
    "B165", "W148", "X148", "Y148", "Z148", "AA148", "AB148", //40
    "B166", "W149", "X149", "Y149", "Z149", "AA149", "AB149", //47
    "B167", "W150", "X150", "Y150", "Z150", "AA150", "AB150", //54
    "B168", "W151", "X151", "Y151", "Z151", "AA151", "AB151", //61
    "B169", "W152", "X152", "Y152", "Z152", "AA152", "AB152", //68
    "B170", "W153", "X153", "Y153", "Z153", "AA153", "AB153", //75
    "B171", "W154", "X154", "Y154", "Z154", "AA154", "AB154", //82
    "B172", "W155", "X155", "Y155", "Z155", "AA155", "AB155", //89
    //perceptual map input..
    "CJ82", "CJ83", "CJ84", "CJ85", //93
    //product..
    "CJ88", "CJ89", "CJ90", "CJ91", "CJ92", "CJ93", "CJ94", "CJ95", "CJ96", "CJ97", "CJ98", "AW37",//105
    "CK88", "CK89", "CK90", "CK91", "CK92", "CK93", "CK94", "CK95", "CK96", "CK97", "CK98", "AX37",//117
    // Promotion & Packaging..
    "CJ100", "CJ102", "CJ103", "CJ104",//121
    // Repairability & Services
    "CJ106", "CJ107", "CJ108",//124
    // Recycling..
    "CJ110", "CJ111", "CJ112", "CJ113",//128
    // Channels..
    "CJ115", "CJ116", "CJ117",//131
    // Projections, Mn INR..
    "AY161", "AY162", "AY163", "AY164", "AY165", "AY166", "AY167", "AY168", "AY169", "AY170", "AY171", "AY172"//143
  ];

  periodcellname: string[] = [
    "D9", "D10", "D11", "D12",//3
    //Positioning data..
    "AG7", "AH15", "AH16", "AH17", "V8", "AH18",//9
    // Product..
    "E28", "F28", "G28", "H28", "I28",//14
    // Promotion & Packaging..
    "K65", "L65", "AH82", "K66", "L66", "AH83", "K67", "L67", "AH84",//23
    // Repairability & Services
    "K70", "L70", "AH87", "K71", "L71", "AH88", "K72", "L72", "AH89",//32
    // Recycling..
    "K75", "L75", "AH92", "K76", "L76", "AH93", "K77", "L77", "AH94", "K78", "L78", "AH95",//44
    // Channels..
    "K81", "L81", "W106", "K82", "L82", "W107", "K83", "L83", "W108"//53
  ];

  
  result: any = [];
  // {
  //   'CJ82': 0,
  //   'CJ83': 0,
  //   'CJ84': 0,
  //   'CJ85': 1,
  //   'CJ88': 1,
  //   'CK88': 0,
  //   'CJ89': 'Avant Garde',
  //   'CK89': '',
  //   'CJ90': 16,
  //   'CJ91': 18,
  //   'CJ92': 1,
  //   'CJ93': 1,
  //   'CJ94': 0,
  //   'CJ95': 1,
  //   'CJ96': 0,
  //   'CJ97': 6.8,
  //   'CJ98': 8.9,
  //   'CK97': 6.8,
  //   'CK98': 8.9,
  //   'AW37': 9,
  //   'AX37': 80,
  //  'CK51': 18,
  //   'CK52': 1,
  //   'CK53': 1,
  //   'CK54': 0,
  //   'CK55': 1,
  //   'CK56': 0,
  //   'Y161': 4800,
  //   'Y162': 2523,
  //   'Y163': 2277,
  //   'Y164': 20,
  //   'Y165': 20,
  //   'Y166': 5,
  //   'Y167': 250,
  //   'Y168': 235,
  //   'Y169': 24,
  //   'Y170': 70,
  //   'Y171': 160,
  //   'Y172': 1493,
  //   'W144': 2345,
  //   'W145': 2345,
  //   'W146': 2345,
  //   'W147': 2345,
  //   'W148': 2345,
  //   'W149': 2345,
  //   'W150': 2345,
  //   'W151': 2345,
  //   'W152': 2345,
  //   'W153': 2345,
  //   'W154': 2345,
  //   'W155': 2345,
  //   'X144': 2765,
  //   'X145': 2765,
  //   'X146': 2765,
  //   'X147': 2765,
  //   'X148': 2765,
  //   'X149': 2765,
  //   'X150': 2765,
  //   'X151': 2765,
  //   'X152': 2765,
  //   'X153': 2765,
  //   'X154': 2765,
  //   'X155': 2765,
  //   'Y144': 2765,
  //   'Y145': 2765,
  //   'Y146': 2765,
  //   'Y147': 2765,
  //   'Y148': 2765,
  //   'Y149': 2765,
  //   'Y150': 2765,
  //   'Y151': 2765,
  //   'Y152': 2765,
  //   'Y153': 2765,
  //   'Y154': 2765,
  //   'Y155': 2765,
  //   'Z144': 5645,
  //   'Z145': 5645,
  //   'Z146': 5645,
  //   'Z147': 5645,
  //   'Z148': 5645,
  //   'Z149': 5645,
  //   'Z150': 5645,
  //   'Z151': 5645,
  //   'Z152': 5645,
  //   'Z153': 5645,
  //   'Z154': 5645,
  //   'Z155': 5645,
  //   'AA144': 6424,
  //   'AA145': 6424,
  //   'AA146': 6424,
  //   'AA147': 6424,
  //   'AA148': 6424,
  //   'AA149': 6424,
  //   'AA150': 6424,
  //   'AA151': 6424,
  //   'AA152': 6424,
  //   'AA153': 6424,
  //   'AA154': 6424,
  //   'AA155': 6424,
  //   'AB144': 521,
  //   'AB145': 521,
  //   'AB146': 521,
  //   'AB147': 521,
  //   'AB148': 521,
  //   'AB149': 521,
  //   'AB150': 521,
  //   'AB151': 521,
  //   'AB152': 521,
  //   'AB153': 521,
  //   'AB154': 521,
  //   'AB155': 521,
  //   'B182': "TC P1",
  //   'B183': "TC P2",
  //   'B184': "TG Alpha",
  //   'B185': "TG Beta",
  //   'B186': "TC P5",
  //   'B187': "TC P6",
  //   'B188': "TC P7",
  //   'B189': "TC P8",
  //   'B190': "TC P9",
  //   'B191': "TC P10",
  //   'B192': "TC P11",
  //   'C182': 15000,
  //   'C183': 0,
  //   'C184': 20000,
  //   'C185': 9000,
  //   'C186': 7000,
  //   'C187': 18000,
  //   'C188': 8000,
  //   'C189': 12000,
  //   'C190': 10000,
  //   'C191': 10000,
  //   'C192': 13000,
  //   'D182': 22,
  //   'D183': 0,
  //   'D184': 92,
  //   'D185': 81,
  //   'D186': 79,
  //   'D187': 67,
  //   'D188': 54,
  //   'D189': 69,
  //   'D190': 68,
  //   'D191': 56,
  //   'D192': 86,
  //   'E182': 3.2,
  //   'E183': 0.0,
  //   'E184': 13.7,
  //   'E185': 12,
  //   'E186': 11.7,
  //   'E187': 10,
  //   'E188': 8,
  //   'E189': 10.3,
  //   'E190': 10.1,
  //   'E191': 8.3,
  //   'E192': 12.7,
  //   'C136': 0.14,
  //   'D136': 1.59,
  //   'E136': 0.96,
  //   'F136': 0.98,
  //   'G136': 0.41,
  //   'H136': 0.56,
  //   'C137': 310,
  //   'D137': 3420,
  //   'E137': 2060,
  //   'F137': 2110,
  //   'G137': 890,
  //   'H137': 1220,
  //   'CJ62': 1,
  //   'CJ63': 0,
  //   'CJ64': 0,
  //   'W174': 4800,
  //   'W175': 2277,
  //   'W176': 784,
  //   'W177': 1493,
  //   'CJ66': 1,
  //   'CJ67': 0,
  //   'CJ68': 0,
  //   'CJ75': 1,
  //   'CJ76': 0,
  //   'CJ77': 0,
  //   'CJ100': 300,
  //   'CJ102': 0,
  //   'CJ103': 1,
  //   'CJ104': 0,
  //   'CJ106': 0,
  //   'CJ107': 1,
  //   'CJ108': 0,
  //   'CJ110': 0,
  //   'CJ111': 1,
  //   'CJ112': 0,
  //   'CJ113': 0,
  //   'CJ115': 1,
  //   'CJ116': 0,
  //   'CJ117': 0,
  //   'V182': "TC P1",
  //   'V183': "TC P2",
  //   'V184': "TG Alpha",
  //   'V185': "TG Beta",
  //   'V186': "TC P5",
  //   'V187': "TC P6",
  //   'V188': "TC P7",
  //   'V189': "TC P8",
  //   'V190': "TC P9",
  //   'V191': "TC P10",
  //   'V192': "TC P11",
  //   'W182': 15000,
  //   'W183': 0,
  //   'W184': 20000,
  //   'W185': 9000,
  //   'W186': 7000,
  //   'W187': 18000,
  //   'W188': 8000,
  //   'W189': 12000,
  //   'W190': 10000,
  //   'W191': 10000,
  //   'W192': 13000,
  //   'X182': 22,
  //   'X183': 0,
  //   'X184': 92,
  //   'X185': 81,
  //   'X186': 79,
  //   'X187': 67,
  //   'X188': 54,
  //   'X189': 69,
  //   'X190': 68,
  //   'X191': 56,
  //   'X192': 86,
  //   'Y182': 3.2,
  //   'Y183': 0.0,
  //   'Y184': 13.7,
  //   'Y185': 12,
  //   'Y186': 11.7,
  //   'Y187': 10,
  //   'Y188': 8,
  //   'Y189': 10.3,
  //   'Y190': 10.1,
  //   'Y191': 8.3,
  //   'Y192': 12.7,


  //   period: {
  //     'D9': 'Price Conscious',
  //     'D10': 'Trendy',
  //     'D11': 'Socially Conscious',
  //     'D12': 'Tech Savvy',
  //     'W15': 23,
  //     'W16': 67,
  //     'W17': 55,
  //     'W18': 89,
  //     'W90': 80,
  //     'W91': 100,
  //     'W92': 60,
  //     'W95': 20,
  //     'W96': 60,
  //     'W97': 160,
  //     'W100': 0,
  //     'W101': 70,
  //     'W102': 50,
  //     'W103': 110,
  //     'W106': 120,
  //     'W107': 95,
  //     'W108': 140,
  //     'AH15': 50,
  //     'AH16': 20,
  //     'AH17': 5,
  //     'AH18': 20,
  //     'AH82': 100,
  //     'AH83': 120,
  //     'AH84': 70,
  //     'AH87': 15,
  //     'AH88': 80,
  //     'AH89': 140,
  //     'AH92': 0,
  //     'AH93': 90,
  //     'AH94': 60,
  //     'AH95': 120,



  //   }

  // }

  bubblechartcell: any = [
    ['V182', 'W182', 'X182', 'Y182'],
    ['V183', 'W183', 'X183', 'Y183'],
    ['V184', 'W184', 'X184', 'Y184'],
    ['V185', 'W185', 'X185', 'Y185'],
    ['V186', 'W186', 'X186', 'Y186'],
    ['V187', 'W187', 'X187', 'Y187'],
    ['V188', 'W188', 'X188', 'Y188'],
    ['V189', 'W189', 'X189', 'Y189'],
    ['V190', 'W190', 'X190', 'Y190'],
    ['V191', 'W191', 'X191', 'Y191'],
    ['V192', 'W192', 'X192', 'Y192'],
  ]

  companysellchartcell: any = [
    ['W136', 'X136', 'Y136', 'Z136', 'AA136', 'AB136'],
    ['W137', 'X137', 'Y137', 'Z137', 'AA137', 'AB137']
  ]
  projectionscell: any = ['AW174', 'AW175', 'AW176', 'AW177'];
  jsonarray2: any = []
  jsonarray3: any = [];
  jsonarray4: any = [];


  launchStates: boolean[] = [];
  @Output() newItemEvent = new EventEmitter<string>();
  inputDisabled: boolean = false;
  tableHeaders: string[] = ['TC', 'TG', 'IT', 'NG', 'ST', 'EM'];
  tableData: { name: string, values: String[], lastColumn: String }[] = [
    { name: 'Revenue', values: ['W144', 'X144', 'Y144', 'Z144', 'AA144'], lastColumn: 'AB144' },
    { name: 'Variable Cost', values: ['W145', 'X145', 'Y145', 'Z145', 'AA145'], lastColumn: 'AB145' },
    { name: 'Gross Profit', values: ['W146', 'X146', 'Y146', 'Z146', 'AA146'], lastColumn: 'AB146' },
    { name: 'Production Line Cost + Update Cost', values: ['W147', 'X147', 'Y147', 'Z147', 'AA147'], lastColumn: 'AB147' },
    { name: 'Administration Cost', values: ['W148', 'X148', 'Y148', 'Z148', 'AA148'], lastColumn: 'AB148' },
    { name: 'Market Research Cost', values: ['W149', 'X149', 'Y149', 'Z149', 'AA149'], lastColumn: 'AB149' },
    { name: 'Promotion Cost', values: ['W150', 'X150', 'Y150', 'Z150', 'AA150'], lastColumn: 'AB150' },
    { name: 'Channel Cost', values: ['W151', 'X151', 'Y151', 'Z151', 'AA151'], lastColumn: 'AB151' },
    { name: 'Packaging Cost', values: ['W152', 'X152', 'Y152', 'Z152', 'AA152'], lastColumn: 'AB152' },
    { name: 'Recycling Cost', values: ['W153', 'X153', 'Y153', 'Z153', 'AA153'], lastColumn: 'AB153' },
    { name: 'Repairability Cost', values: ['W154', 'X154', 'Y154', 'Z154', 'AA154'], lastColumn: 'AB154' },
    { name: 'Operating Profit/Loss', values: ['W155', 'X155', 'Y155', 'Z155', 'AA155'], lastColumn: 'AB155' }
  ];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.productsalesgraph = {
      series: [
        
      ],
      chart: {
        height: 250,
        type: "line",
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
          if (typeof val === "number") {
            return val.toFixed(2); // Format to 2 decimal places if val is a number
          }
          return val as string; // Cast val to string if it's not a number
        }
      },
      xaxis: {
        categories: ['TC', 'TG', 'IT', 'NG', 'ST', 'EM'],
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
            if (typeof val === "number") {
              return val.toFixed(2); // Format to 2 decimal places if val is a number
            }
            return val as string; // Cast val to string if it's not a number
          }
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
          fontSize:"20px",
        }
      }
    };
    this.salesgraph = {
      series: [
        // {
        //   name: "Sales",
        //   data: [44, 55, 41, 37, 65, 33]
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
      checkcell: 'cj88',
      designcell: 'cj89',
      performancecell: 'cj90',
      batterycell: 'cj91',
      salescell: 'cj97',
      pricecell: 'cj98',
      unitcostcell: 'AW37',
    }, {
      title: "TC P2",
      value: "",
      icon: "1 (3).svg",
      checkcell: 'ck88',
      designcell: 'ck89',
      performancecell: 'ck90',
      batterycell: 'ck91',
      salescell: 'ck97',
      pricecell: 'ck98',
      unitcostcell: 'AX37',
    },

  ]
  levels: any[] = [
    {
      title: 'Premium Camera',
      icon: 'fa fa-camera',
      checkedcell: ['cj92', 'ck92']

    },
    {
      title: 'Extra Memory',
      icon: 'fa fa-memory',
      checkedcell: ['cj93', 'ck93']
    },
    {
      title: 'Premium Display',
      icon: 'fa fa-tv',
      checkedcell: ['cj94', 'ck94']
    },
    {
      title: 'Durable Screen',
      icon: 'fa fa-tv',
      checkedcell: ['cj95', 'ck95']
    },
    {
      title: 'Securtiy',
      icon: 'fa fa-memory',
      checkedcell: ['cj96', 'ck96']
    }
  ]

  cardData1 = [
    {
      id: 'card1',
      title: 'Dynamic Packaging',
      description:
        'The packaging of your products changes dynamically with the current trends, trying to appeal to the trend-savvy customer segments.',
      turncatedtext: "",
      costcell: 'AH82',
      inputcell: 'cj102',
    },
    {
      id: 'card2',
      title: 'Product Specific Packaging',
      description: 'Each product in your portfolio will have a slightly different packaging, emphasizing the main features and qualities of each product.',
      turncatedtext: "",
      costcell: 'AH83',
      inputcell: 'cj103',
    },
    {
      id: 'card3',
      title: 'Same Packaging for All Products',
      description: 'Each product in your portfolio will have similar packaging. This is the most environmentally friendly packaging policy, but some customer segments might not find similar packaging across the product portfolio very appealing.',
      turncatedtext: "",
      costcell: 'AH84',
      inputcell: 'cj104',
    },
  ];

  cardData2 = [
    {
      id: 'card1',
      title: 'Low Repairability & Software Support',
      description:
        'In this service level, repairability and software support are minimal. Repairs are outsourced to third-party service centers, and software updates will be infrequent or unsupported after a short period.',
      costcell: 'AH87',
      turncatedtext: "",
      inputcell: 'cj106'
    },
    {
      id: 'card2',
      title: 'Mediocre Repairability & Software Support',
      description: "This service level offers moderate repairability and software support. The company provides repair services through authorized service centers, and software updates will be available for a reasonable duration after the product's release.",
      costcell: 'AH88',
      turncatedtext: "",
      inputcell: 'cj107'
    },
    {
      id: 'card3',
      title: 'High Repairability & Software Support',
      description: 'This service level prioritizes repairability and software support. The company ensures that repairs are readily available through authorized service centers, and software updates are regularly provided for an extended period to enhance the user experience and address potential issues.',
      costcell: 'AH89',
      turncatedtext: "",
      inputcell: 'cj108'
    },
  ];
  cardData3 = [
    {
      id: 'card1',
      img: "../../../../assets/images/stpgame/nonrecycle.jpg",
      title: 'No Recycling',
      description: 'The company does not implement any specific recycling program for its products. End-of-life devices may be disposed of through regular waste channels, potentially contributing to environmental pollution.',
      costcell: 'AH92',
      turncatedtext: "",
      inputcell: 'cj110'
    },
    {
      id: 'card2',
      img: "../../../../assets/images/stpgame/inhouserecycle.png",
      title: 'In-house Recycling',
      description: 'The company establishes its own recycling facilities to responsibly manage end-of-life products. Materials are sorted, processed, and recycled in an environmentally friendly manner, reducing waste and promoting sustainability.',
      costcell: 'AH93',
      turncatedtext: "",
      inputcell: 'cj111'
    },
    {
      id: 'card3',
      img: "../../../../assets/images/stpgame/thirdpartyrecycle.svg",
      title: 'Third-party Recycling',
      description: "The company collaborates with third-party recycling partners to handle end-of-life products. These partners specialize in recycling electronic waste and ensure that materials are processed in compliance with environmental regulations.",
      costcell: 'AH94',
      turncatedtext: "",
      inputcell: 'cj112'
    },
    {
      id: 'card4',
      img: "../../../../assets/images/stpgame/buyonerycycle.svg",
      title: 'Buy One, We Recycle One',
      description: "The company incentivizes customers to recycle by offering to recycle a device for every new purchase made. This encourages responsible disposal of old devices and promotes circular economy principles.",
      costcell: 'AH95',
      turncatedtext: "",
      inputcell: 'cj113'
    },

  ];
  Channelsdata = [
    {
      id: 'card1',
      title: 'Retail',
      description:
        'Retail channels include physical stores where customers can directly purchase smartphones. This includes multi-brand outlets, brand-owned stores, and franchise stores.',
      costcell: 'W106',
      turncatedtext: "",
      inputcell: 'cj115'
    },
    {
      id: 'card2',
      title: 'Online',
      description: "Online channels involve selling smartphones through e-commerce platforms and company websites. This allows for direct-to-consumer sales and reaches a wider audience.",
      costcell: 'W107',
      turncatedtext: "",
      inputcell: 'cj116'
    },
    {
      id: 'card3',
      title: 'Specialist Stores',
      description: 'Specialist stores cater to specific customer segments or offer specialized services. Examples include tech-focused stores, flagship experience centers, or stores targeting environmentally conscious consumers.',
      costcell: 'W108',
      turncatedtext: "",
      inputcell: 'cj117'
    },
  ];
  Perceptualdata = [
    {
      id: 'card1',
      img: "../../../../assets/images/stpgame/price.svg",
      title: 'Price Conscious',
      titlecell: 'D9',
      inputcell: 'cj82'

    },
    {
      id: 'card2',
      img: "../../../../assets/images/stpgame/trendy.jpg",
      title: 'Trendy',
      titlecell: 'D10',
      inputcell: 'cj83'

    },
    {
      id: 'card3',
      img: "../../../../assets/images/stpgame/techsaavy.svg",
      title: 'Socially Conscious',
      titlecell: 'D11',
      inputcell: 'cj84'

    },
    {
      id: 'card4',
      img: "../../../../assets/images/stpgame/tech.jpg",
      title: 'Tech Savvy',
      titlecell: 'D12',
      inputcell: 'cj85'

    },
  ];
  override ngOnInit(): void {
    this.getFetchData();
    this.launchStates = this.tools.map(() => true);
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
              this.jsonarray1 = [];this.jsonarray2 = [];this.jsonarray3 = [];this.jsonarray4 = [];
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

              if ((data.resultList[0].cj121 == 'yes') || (data.resultList[0].cj121 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
              }else{
                this.inputDisabled = false;
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


  writestpvalue(cellname: string, inputtype: string, event: any,firstcell:string,secondcell:string,thirdcell:string,fourthcell:string,length:number) {
    const ranges: { [key: string]: [number, number, string] } = {
      'cj90': [0, 100, "the range between 0 to 100"],
      'cj91': [0, 100, "the range between 0 to 100"],
      'ck90': [0, 100, "the range between 0 to 100"],
      'ck91': [0, 100, "the range between 0 to 100"],
      'cj97': [0, 7, "the range between 0 to 7"],
      'ck97': [0, 7, "the range between 0 to 7"],
      'cj98': [0, 100000, "the range between 0 to 100000"],
      'ck98': [0, 100000, "the range between 0 to 100000"],
      'cj100': [0, 500, "the range between 0 to 500"]
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

    let phase1Data:any = []
    if(inputtype == 'radio'){
      if(length == 4){
        phase1Data = {
          [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [secondcell]: secondcell === cellname? (event.target.checked ? 1 : 0) : 0,
          [thirdcell]: thirdcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [fourthcell]: fourthcell === cellname ? (event.target.checked ? 1 : 0) : 0
        };
      }else{
        phase1Data = {
          [firstcell]: firstcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          [secondcell]: secondcell === cellname? (event.target.checked ? 1 : 0) : 0,
          [thirdcell]: thirdcell === cellname ? (event.target.checked ? 1 : 0) : 0,
          };
      }
    
    }else{
      phase1Data = {
            [cellname]: inputtype === 'checkbox' ? (event.target.checked ? 1 : 0) : event.target.value
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

  openDialog(): void {
    this.dialog.open(StpgamefoodforthoughtComponent, {
      data: {},
    });
  }

 
}

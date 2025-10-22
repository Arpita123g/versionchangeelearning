import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
  ApexYAxis,
  NgApexchartsModule
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { BusinessbasicFoodforthoughtComponent } from '../businessbasicfoodforthought/businessbasicfoodforthought.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip:ApexTooltip;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-businessbascisinvestments',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule,MatIconModule,FormsModule],
  templateUrl: './businessbascisinvestments.component.html',
  styleUrls: ['../BusinessBasicsGame.scss']
})
export class BusinessbascisinvestmentsComponent extends AbstractComponent {
  investiment: barchart;
  investimentoprtn: barchart;
  teacupscots: barchart;
  technocost: barchart;
  market: Boolean = false;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  jsonarray8: any = [];
  c20: string = '';
  c21: string = '';
  c22: string = '';
  c27: number = 0;
  c28: number = 0;
  c29: number = 0;
  n17: string = '';
  n18: string = '';
  n19: string = '';
  technology1: boolean = false;
  technology2: boolean = false;
  technology3: boolean = false;
  showTechnology: boolean = true;
  checkdisable: boolean = false;
  selectedCard: string = "";
  foodforthought:boolean = true;
  cardData1 = [
    {
      id: 'card1',
      title: 'n5',
      description:
        'A lower initial investment and minimalistic design will create a cozy ambiance. It lacks the wow factor and unique aesthetic appeal.',
      turncatedtext: ""
    },
    {
      id: 'card2',
      title: 'n6',
      description: 'A higher initial investment with high maintenance and upkeep cost. The visually appealing and luxurious ambience will attract upscale clientele.',
      turncatedtext: "",
    },
  ];

  cardData2 = [
    {
      id: 'card3',
      title: 'n9',
      description:
        'q9',
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'n10',
      description:
        'q10',
      turncatedtext: "",
    },


  ];

  cardData3 = [
    {
      id: 'card5',
      title: 'n13',
      description:
        's13',
      turncatedtext: "",
    },

    {
      id: 'card6',
      title: 'n14',
      description:
        's14',
      turncatedtext: "",
    }
  ];

  textshow: { [key: string]: boolean } = {};

  investmentrange = [
    ['n5', 'o5', 'p5'],
    ['n6', 'o6', 'p6'],
  ]
  investimentoprtnrange = [
    ['n9', 'o9', 'p9'],
    ['n10', 'o10', 'p10'],
  ]
  teacupscotsrange = [
    ['n13', 'o13', 'p13'],
    ['n14', 'o14', 'p14'],
  ]
  technocostrange = [
    ['n17', 'o17', 'p17'],
    ['n18', 'o18', 'p18'],
    ['n19', 'o19', 'p19'],
  ]

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.investiment = {
      series: [],
      chart: {
        height: 250,
        type: 'bar',
        // stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
          },
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
      xaxis: this.xaxis[11],
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
        show: false}
      },
      title: {
        text: 'Investment + Operation, Monthly Cost INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.investimentoprtn = {
      series: [],
      chart: {
        height: 250,
        type: 'bar',
        // stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
          },
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
      xaxis: this.xaxis[11],
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
        show: false}
    
      },
      title: {
        text: 'Product Mix, Equipment Cost, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.teacupscots = {
      series: [],
      chart: {
        height: 250,
        type: 'bar',
        // stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
          },
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
      xaxis: this.xaxis[11],
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
        show: false}
      },
      title: {
        text: 'Cost of Tea Leaves & Cups, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.technocost = {
      series: [],
      chart: {
        height: 250,
        type: 'bar',
        // stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
          },
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
        position: "bottom",
        labels: {
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: false,
          showDuplicates: false,
          trim: true
        },
        axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 }
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
        show: false}
      },
      title: {
        text: 'Technology Cost, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = [];
    this.jsonarray5 = []; this.jsonarray6 = []; this.jsonarray7 = []; this.jsonarray8 = [];
    let apiname = '/businessbasic/fetchbusinessbasic';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].businessbasiccasemanagementid);
              if(data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus.foodforthoughtstatus == 'inactive'){
                this.foodforthought = false;
         }
              this.c20 = data.resultList[0].c20;
              this.c21 = data.resultList[0].c21;
              this.c22 = data.resultList[0].c22;
              if (data.resultList[0].c27 == 1) {
                this.technology1 = true;
              } if (data.resultList[0].c28 == 1) {
                this.technology2 = true;
              } if (data.resultList[0].c29 == 1) {
                this.technology3 = true;
              }

              if(data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus.technologystatus == "active"){
                this.showTechnology = true;
              }else{
                this.showTechnology = false;
              }
              
              if ((data.resultList[0].h4 == 'yes') || (this.timefinished)) {
                this.checkdisable = true;
              }
              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title = String(data.resultList[0].businessBasicCaseManagement[this.cardData1[i].title])
                this.cardData2[i].title = String(data.resultList[0].businessBasicCaseManagement[this.cardData2[i].title])
                this.cardData3[i].title = String(data.resultList[0].businessBasicCaseManagement[this.cardData3[i].title])

                this.cardData2[i].description = String(data.resultList[0].businessBasicCaseManagement[this.cardData2[i].description])
                this.cardData3[i].description = String(data.resultList[0].businessBasicCaseManagement[this.cardData3[i].description])

                this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
                this.cardData2[i].turncatedtext = this.cardData2[i].description.substring(0, 100) + (this.cardData2[i].description.length > 100 ? '...' : '');
                this.cardData3[i].turncatedtext = this.cardData3[i].description.substring(0, 100) + (this.cardData3[i].description.length > 100 ? '...' : '');
              }

              for (let i = 0; i < 2; i++) {
                this.jsonarray1.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.investmentrange[i][0]], 'y': Number(data.resultList[0].businessBasicCaseManagement[this.investmentrange[i][1]]) });
                this.jsonarray2.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.investmentrange[i][0]], 'y': Number(data.resultList[0].businessBasicCaseManagement[this.investmentrange[i][2]]) });
                this.jsonarray3.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.investimentoprtnrange[i][0]], 'y': Number(data.resultList[0].businessBasicCaseManagement[this.investimentoprtnrange[i][1]]) });
                this.jsonarray4.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.investimentoprtnrange[i][0]], 'y': Number(data.resultList[0].businessBasicCaseManagement[this.investimentoprtnrange[i][2]]) });
                this.jsonarray5.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.teacupscotsrange[i][0]], 'y': Number(data.resultList[0].businessBasicCaseManagement[this.teacupscotsrange[i][1]]) });
                this.jsonarray6.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.teacupscotsrange[i][0]], 'y': Number(data.resultList[0].businessBasicCaseManagement[this.teacupscotsrange[i][2]]) });
              }

              for (let i = 0; i < 3; i++) {
                this.jsonarray7.push({ 'x': this.labelsBreak(data.resultList[0].businessBasicCaseManagement[this.technocostrange[i][0]]), 'y': Number(data.resultList[0].businessBasicCaseManagement[this.technocostrange[i][1]]) });
                this.jsonarray8.push({ 'x': this.labelsBreak(data.resultList[0].businessBasicCaseManagement[this.technocostrange[i][0]]), 'y': Number(data.resultList[0].businessBasicCaseManagement[this.technocostrange[i][1]])*(Number(data.resultList[0].businessBasicCaseManagement[this.technocostrange[i][2]])) });
              }

              this.investiment.series = [{ "name": data.resultList[0].businessBasicCaseManagement.o4, "data": this.jsonarray1 }, { "name": data.resultList[0].businessBasicCaseManagement.p4, "data": this.jsonarray2 }]
              this.investimentoprtn.series = [{ "name": data.resultList[0].businessBasicCaseManagement.o8, "data": this.jsonarray3 }, { "name": data.resultList[0].businessBasicCaseManagement.p8, "data": this.jsonarray4 }]
              this.teacupscots.series = [{ "name": data.resultList[0].businessBasicCaseManagement.o12, "data": this.jsonarray5 }, { "name": data.resultList[0].businessBasicCaseManagement.r12, "data": this.jsonarray6 }]
              this.technocost.series = [{ "name": data.resultList[0].businessBasicCaseManagement.o16, "data": this.jsonarray7 }, { "name": "Maintenance", "data": this.jsonarray8 }]

            }
            this.checkloading = false;
          }else{
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  getSelectedsimplistic(value: string) {
    this.c20 = value;
    this.writeInvestment();
    this.selectedCard = value;
  }
  getSelectedata(value: string) {
    this.c21 = value;
    this.writeInvestment();
    this.selectedCard = value;
  }
  getSelectedvendor(value: string) {
    this.c22 = value;
    this.writeInvestment();
    this.selectedCard = value;
  }


  writeInvestment() {
    console.log('technology1:', this.technology1); // ✅ Will log updated value

    let apiname = '/businessbasic/singleinputbusinessbasic';
    let investmentData = {
      "c20": this.c20,
      "c21": this.c21,
      "c22": this.c22,
      "c27": this.technology1 ? 1 : 0,
      "c28": this.technology2 ? 1 : 0,
      "c29": this.technology3 ? 1 : 0,

    }
    this._api.businessdatawrite("businessbasic", 3,
      investmentData, apiname,'businessbasiccasemanagementid').subscribe((data: any) => {
        if(data.status!="Success"){
          this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  showhide(d: any) {
    if (d.style.overflow == "hidden") {
      d.style.overflow = "visible"
    } else {
      d.style.overflow = "hidden"
    }
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }


  openDialog(): void {
    this.dialog.open(BusinessbasicFoodforthoughtComponent, {
      data: {},
    });
  }

}

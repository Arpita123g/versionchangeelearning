import { Component, EventEmitter, Output } from '@angular/core';
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
  ApexYAxis,
  NgApexchartsModule
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FoodforthoughtportfoliomanagementComponent } from '../foodforthoughtportfoliomanagement/foodforthoughtportfoliomanagement.component';
import { PopupDialogueComponent } from 'src/app/common/popup-dialogue/popup-dialogue.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

interface lineChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  colors: string[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}
interface barChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  // noData: ApexNoData;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-portfolionewmanagementphaseone',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],
  templateUrl: './portfolionewmanagementphaseone.component.html',
  styleUrls: ['./portfolionewmanagementphaseone.component.scss']
})
export class PortfolionewmanagementphaseoneComponent extends AbstractComponent {
  foodforthought: boolean = true;
  marketmonitorchart: lineChart;
  AverageAnnualizedReturngraph: barChart;
  gametitle: string = 'portfoliomanagement';
  activeTab: string = 'introduction';
  tabDisabled: boolean = false;
  tabname: string = "individual";
  gamename: string = '';
  toolbartab: string = '';
  result: any = [];
  inputtabledata: any = [0, 0, 0, 0, 0, 0, 100];
  jsonarray: any[] = [];
  disabled: boolean = false;

  inputDisabled: boolean = false;

  @Output() newItemEvent = new EventEmitter<any>();
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.marketmonitorchart = {
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
      colors: ['#FF1654', '#247BA0', '#70C1B3', '#B23A48', '#F3B700', '#2D7DD2', '#4CAF50'],
      xaxis: {
        categories: [
          "PY1",
          "PY2",
          "PY3",
          "PY4",
          "PY5",
          "PY6",
          "PY7",
          "PY8",
          "PY9"
        ],
        title: {
          text: "",
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
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },

        labels: {
          formatter: function (value) {
            return value.toFixed(2) + "%";
          }
        }
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
        text: 'Historical Return, %',
        // text: '',
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

    this.AverageAnnualizedReturngraph = {
      series: [],
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
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "30%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: [
          'PY1',
          'PY2',
          'PY3',
          'PY4',
          'PY5',
          'PY6',
          'PY7',
          'PY8',
          'PY9'],
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
            return val + "%";
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
        text: "Average Annualized Return, %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

  }



  periodcellvalue: string[] = [
    'e9', 'f9', 'e10', 'f10', 'c9',//4


  ];
  databasecellname: string[] = ['d12', 'd13', 'd14', 'd15', 'd16', 'd17', 'd18',//11

    'am8', 'am9', 'am10', 'am11', 'am12', 'am13', 'am14',//18
    'g12', 'g13', 'g14', 'g15', 'g16', 'g17', 'g18',//25
    'c21', 'c23', 'c20'//28
  ];

  tablecell: string[] = ['f27', 'f35', 'f43', 'f51', 'f59', 'f67', 'f75'];//35


  // check this field..................
  ReturnsTrendGraph: any = [
    ['Nifty 50', 'f13', 'g13', 'h13', 'i13', 'j13', 'k13', 'l13', 'm13', 'n13'],
    ['Sensex', 'f14', 'g14', 'h14', 'i14', 'j14', 'k14', 'l14', 'm14', 'n14'],
    ['US Stocks', 'f15', 'g15', 'h15', 'i15', 'j15', 'k15', 'l15', 'm15', 'n15'],
    ['Commodity', 'f16', 'g16', 'h16', 'i16', 'j16', 'k16', 'l16', 'm16', 'n16'],
    ['Hybrid Fund', 'f17', 'g17', 'h17', 'i17', 'j17', 'k17', 'l17', 'm17', 'n17'],
    ['Corporate Bond', 'f18', 'g18', 'h18', 'i18', 'j18', 'k18', 'l18', 'm18', 'n18'],
    ['PSU Bond', 'f19', 'g19', 'h19', 'i19', 'j19', 'k19', 'l19', 'm19', 'n19']
  ];

  averagereturngraph: any = [
   'f6', 'g6', 'h6', 'i6', 'j6', 'k6', 'l6', 'm6', 'n6',
  ];

  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  jsonarray8: any = [];
  jsonarray9: any = [];
  jsonarray10: any = [];


  override ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.result = [];
            this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
            this.jsonarray6 = []; this.jsonarray7 = []; this.jsonarray8 = []; this.jsonarray9 = []; this.jsonarray10 = [];

            this._global.casemanagementid.next(data.resultList[0].portfolioManagementCM.portfoliomanagementcmid);
            if (data.resultList != null) {
              if (data.resultList[0].portfolioManagementCM.portfolioManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if ((String(data.resultList[0].ap18) == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              }
              for (let i = 0; i < this.periodcellvalue.length; i++) {
                this.result[i] = data.resultList[0].portfolioManagementCM[this.periodcellvalue[i]];
              }
              for (let i = 5; i < 29; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 5]];
              }
              for (let i = 29; i < 36; i++) {
                this.result[i] = (data.resultList[0].portfolioManagementCM[this.tablecell[i - 29]]);
              }

              for (let i = 12; i < 19; i++) {
                this.result[i] = (Number(this.result[i]) * 100).toFixed(0);
              } for (let i = 19; i < 26; i++) {
                this.result[i] = (Number(this.result[i]) / 1000).toFixed(0);
              }


              for (let j = 1; j < 10; j++) {
                this.jsonarray1.push(Number(data.resultList[0].portfolioManagementCM[this.ReturnsTrendGraph[0][j]]) * 100).toFixed(2);
                this.jsonarray2.push(Number(data.resultList[0].portfolioManagementCM[this.ReturnsTrendGraph[1][j]]) * 100).toFixed(2);
                this.jsonarray3.push(Number(data.resultList[0].portfolioManagementCM[this.ReturnsTrendGraph[2][j]]) * 100).toFixed(2);
                this.jsonarray4.push(Number(data.resultList[0].portfolioManagementCM[this.ReturnsTrendGraph[3][j]]) * 100).toFixed(2);
                this.jsonarray5.push(Number(data.resultList[0].portfolioManagementCM[this.ReturnsTrendGraph[4][j]]) * 100).toFixed(2);
                this.jsonarray6.push(Number(data.resultList[0].portfolioManagementCM[this.ReturnsTrendGraph[5][j]]) * 100).toFixed(2);
                this.jsonarray7.push(Number(data.resultList[0].portfolioManagementCM[this.ReturnsTrendGraph[6][j]]) * 100).toFixed(2);

              }
              this.marketmonitorchart.series = [
                { "name": this.ReturnsTrendGraph[0][0], "data": this.jsonarray1 },
                { "name": this.ReturnsTrendGraph[1][0], "data": this.jsonarray2 },
                { "name": this.ReturnsTrendGraph[2][0], "data": this.jsonarray3 },
                { "name": this.ReturnsTrendGraph[3][0], "data": this.jsonarray4 },
                { "name": this.ReturnsTrendGraph[4][0], "data": this.jsonarray5 },
                { "name": this.ReturnsTrendGraph[5][0], "data": this.jsonarray6 },
                { "name": this.ReturnsTrendGraph[6][0], "data": this.jsonarray7 },

              ]

              for (let i = 0; i < 9; i++) {
                this.jsonarray10.push((Number(data.resultList[0][this.averagereturngraph[i]]) * 100).toFixed(2))
              }
              this.AverageAnnualizedReturngraph.series = [{ "data": this.jsonarray10 }]

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

  inputtablevalue(value: any) {
    let sum = Number(this.result[12]) + Number(this.result[13]) + Number(this.result[14]) + Number(this.result[15])
      + Number(this.result[16]) + Number(this.result[17])
    if (sum <= 100) {
      this.writepromotionsValue();
    } else {
      this.result[value] = 0;
      this._alert.error("this value cannot go negative")

    }

  }

  writepromotionsValue() {

    let apiname = '/portfoliomanagement/singleinputportfoliomanagement';
    for (let i = 12; i < 18; i++) {
      if (this.result[i] == undefined) {
        this.result[i] = 0;
      }
    }
    let portfolioData = {
      "am8": Number(this.result[12]) / 100,
      "am9": Number(this.result[13]) / 100,
      "am10": Number(this.result[14]) / 100,
      "am11": Number(this.result[15]) / 100,
      "am12": Number(this.result[16]) / 100,
      "am13": Number(this.result[17]) / 100,

    }

    this._api.promotionsdatawrite("portfoliomanagement", 1,
      portfolioData, apiname, 'portfoliomanagementcmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this.fetchData();
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }

//data submit and go to Phase 2
saveAndgoToPhase2() {
  let apiname = '/portfoliomanagement/singleinputportfoliomanagement';

  let portfolioData = {
    "ap18": 'yes',
  }

  this._api.promotionsdatawrite("portfoliomanagement", 1,
    portfolioData, apiname, 'portfoliomanagementcmid').subscribe((data: any) => {

      if (data.status == "Success") {
        this.inputDisabled = true;
        this.Sharedservice.phase2enableTab();
        setTimeout(() => {
          this.newItemEvent.emit('portfoliophasetwo');
        }, 1000)

      } else {
        this.checkloading = false;
      }
    }, (error: any) => {
      this.checkloading = false;
      this.driveerrorLog(error, apiname);
    })
}

//open pop up dialog for conirmation of submit
goToPhase2() {
  const dialogRef = this.dialog.open(PopupDialogueComponent, {
    width: '40%',
    panelClass: 'centertop-dialog',
    position: { top: '20px' },
    data:
    {
      title:"You are saving your current phase decisions, all the decisions made will be considered for assessments. Once you move to the next phase, the decisions of the current phase can't be edited. Do you want to save?"
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result && result.action === 'yes') {
      this.saveAndgoToPhase2()
    }
  });
}

  openDialog(): void {
    this.dialog.open(FoodforthoughtportfoliomanagementComponent, {
      data: {},
    });
  }
}

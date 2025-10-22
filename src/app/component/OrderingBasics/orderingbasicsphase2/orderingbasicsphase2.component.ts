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
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { OrderingbasicsfoodforthoughtComponent } from '../orderingbasicsfoodforthought/orderingbasicsfoodforthought.component';
import { Orderingbasicsp2inventorylevelComponent } from '../orderingbasicsp2inventorylevel/orderingbasicsp2inventorylevel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


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
  selector: 'app-orderingbasicsphase2',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './orderingbasicsphase2.component.html',
  styleUrls: ['./orderingbasicsphase2.component.scss']
})
export class Orderingbasicsphase2Component extends AbstractComponent {
  ForecastedDemand: barChart
  LeadTime: barChart;
  cost: barChart;
  foodforthought: boolean = true;
  result: any = [];
  optional: any[] = [];
  playername: string = '';
  dropdownvalue: any = [];
  roundname: string = "";
  errorlist: any = [];
  submitprove: string = "";
  disabled: boolean = false;
  resultarray: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  inputDisabled: boolean = false;
  @Output() newItemEvent = new EventEmitter<string>();

  periodcellname: string[] = [
    "i7", "i10", "j10", "i11", "j11", "i12", "j12", "k35" //7
  ];
  databasecellnamearray: any = [
    'i63', 'j63', 'i64', 'j64', 'i65',//12
    'j65', 'l63', 'm63', 'l64', 'm64',//17
    'l65', 'm65', 'l66', 'm66', 'l67',//22
    'm67', 'r5', 's5', 'ap15', 'ap16',//27
    'q63', 'q64', 'q65', 'q66', 'q67',//32
    'q68', 'q69', 'q70', 'q71', 't63',//37
    't64', 't65', 't66', 't67', 'm64',//42
    // 'l65', 'm65', 'l66', 'm66', 'l67',//47
    // 'm67' //48

  ];


  constructor(_router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.ForecastedDemand = {
      series: [{
        name: "Demand Units",
        data: [10, 20, 30, 40, 50, 60, 65]
      }
      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'center',
          },
          horizontal: false,
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
        // formatter: function (val) {
        //   return val + '%';
        // },
      },
      xaxis: {
        categories: [
          "10", "20", "30", "40", "50", "60", "65"
        ],
        title: {
          text: "Demand",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        position: 'bottom',
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
        crosshairs: {},
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        title: {
          text: "Probability",
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        labels: {
          show: true,
          // formatter: function (val) {
          //   return val + '%'; 
          // },
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
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false,
        },
      },
      title: {
        text: 'Forecasted Demand vs Probability, over 52 weeks',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
    this.LeadTime = {
      series: [{
        name: "Demand Units",
        data: [10, 20, 30, 40, 50, 60, 65]
      }
      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'center',
          },
          horizontal: false,
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
        // formatter: function (val) {
        //   return val + '%';
        // },
      },
      xaxis: {
        categories: [
          "10", "20", "30", "40", "50", "60", "65"
        ],
        title: {
          text: "Lead time in weeks",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        position: 'bottom',
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
        crosshairs: {},
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        title: {
          text: "Probability",
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        labels: {
          show: true,
          // formatter: function (val) {
          //   return val + '%'; 
          // },
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
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false,
        },
      },
      title: {
        text: 'Lead Time vs Probability, over 52 weeks',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
    this.cost = {
      series: [{
        name: "Demand Units",
        data: [5, 20, 30, 7,]
      }
      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'center',
          },
          horizontal: false,
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
        // formatter: function (val) {
        //   return val + '%';
        // },
      },
      xaxis: {
        categories: [
          "Ordering", "Holding", "Stockout", "Back ordering"
        ],
        position: 'bottom',
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
        crosshairs: {},
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        labels: {
          show: true,
          // formatter: function (val) {
          //   return val + '%'; 
          // },
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
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false,
        },
      },
      title: {
        text: 'Cost, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
  }
  costinrGraphrange = [
    ['Ordering', 'm63'],
    ['Holding', 'm64'],
    ['Stockout', 'm65'],
    ['Back ordering', 'm66']
  ]
  ForecastedDemandrange = [
    ["k22", "l22"],
    ["k23", "l23"],
    ["k24", "l24"],
    ["k25", "l25"],
    ["k26", "l26"],
    ["k27", "l27"],
    ["k28", "l28"],
  ];

  leadtimeGraphrange = [
    ['k32', 'l32'],
    ['k33', 'l33'],
    ['k34', 'l34'],
    ['k35', 'l35']
  ]
  override ngOnInit(): void {
    console.log("phase2")
    this.getFetchData();
  }


  getFetchData() {
    let apiname = '/orderingbasics/fetchorderingbasics';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];

              this._global.casemanagementid.next(data.resultList[0].orderingbasicscmid);
              if (data.resultList[0].orderingBasicsCM.orderingBasicsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }

              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].orderingBasicsCM[this.periodcellname[i]];
              }
              for (let i = 8; i < 49; i++) {
                this.result[i] = data.resultList[0][this.databasecellnamearray[i - 8]];
              }
              for (let i = 0; i < this.ForecastedDemandrange.length; i++) {
                this.jsonarray1.push({
                  "x": Number(data.resultList[0].orderingBasicsCM[this.ForecastedDemandrange[i][0]]).toFixed(0),
                  "y": Number(data.resultList[0].orderingBasicsCM[this.ForecastedDemandrange[i][1]]).toFixed(2)
                })
              }
              this.ForecastedDemand.series = [
                { "name": "", "data": this.jsonarray1 }
              ];

              for (let i = 0; i < this.leadtimeGraphrange.length; i++) {
                this.jsonarray2.push({
                  "x": Number(data.resultList[0].orderingBasicsCM[this.leadtimeGraphrange[i][0]]).toFixed(0),
                  "y": Number(data.resultList[0].orderingBasicsCM[this.leadtimeGraphrange[i][1]]).toFixed(2)
                })
              }
              this.LeadTime.series = [
                { "name": "", "data": this.jsonarray2 }
              ];

              for (let i = 0; i < this.costinrGraphrange.length; i++) {
                this.jsonarray3.push({
                  "x": this.costinrGraphrange[i][0],
                  "y": Number(data.resultList[0][this.costinrGraphrange[i][1]]).toFixed(0)
                })
              }
              this.cost.series = [
                { "name": "", "data": this.jsonarray3 }
              ];

             if ((data.resultList[0].ap18 == 'Yes') || (data.resultList[0].ap18 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
              }
              else {
                this.inputDisabled = false;
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


  phaseTwoInventory() {
    const dialogRef = this.dialog.open(Orderingbasicsp2inventorylevelComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getFetchData();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderingbasicsfoodforthoughtComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getFetchData();
    });
  }

  inputtablevalue(cellname: string, index: number) {
    if ((this.result[index] < 10) || (this.result[index] > 1000)) {
      this.result[index] = 0;
      this._alert.error("The expected range is between 10 to 1000");

    } this.writehrpValue(cellname, index);
  }

  writehrpValue(cellname: string, index: number) {
    let apiname = '/orderingbasics/singleinputorderingbasics';
    let phase1Data = {
      [cellname]: this.result[index]
      //  "ap15": this.result[10],
      //  "ap16": this.result[11]
    }
    this._api.writeGameData("orderingbasics", 3,
      phase1Data, apiname, 'orderingbasicscmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.inputDisabled = false;
        this.driveerrorLog(error, apiname);
      })
  }
}

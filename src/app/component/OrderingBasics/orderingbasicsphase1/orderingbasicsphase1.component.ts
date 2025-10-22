import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexNoData,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { OrderingbasicsfoodforthoughtComponent } from '../orderingbasicsfoodforthought/orderingbasicsfoodforthought.component';
import { Orderingbasicsp1inventorylevelComponent } from '../orderingbasicsp1inventorylevel/orderingbasicsp1inventorylevel.component';
import { PopupDialogueComponent } from 'src/app/common/popup-dialogue/popup-dialogue.component';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
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
  selector: 'app-orderingbasicsphase1',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './orderingbasicsphase1.component.html',
  styleUrls: ['./orderingbasicsphase1.component.scss']
})
export class Orderingbasicsphase1Component extends AbstractComponent {
  ForecastedDemand: barChart
  LeadTime: barChart;
  result: any = [];
  optional: any[] = [];
  playername: string = '';
  dropdownvalue: any = [];
  roundname: string = "";
  errorlist: any = [];
  submitprove: string = "";
  disabled: boolean = false;
  resultarray: any = [];
  foodforthought: boolean = true;
  jsonarray1: any = [];
  jsonarray2: any = [];
  inputDisabled: boolean = false;
  @Output() newItemEvent = new EventEmitter<string>();

  periodcellname: string[] = [
    "d7", "d10", "e10", "d11", "e11", "d12", "e12", "f33" //7
  ];
  databasecellnamearray: any = ['e5', 'f5', 'ap10', 'ap11', 'd63', 'd64',
    'd65', 'd66', 'd67', 'd68', 'd69', 'd70', 'd71',//20
    'g63', 'g64', 'g65', 'g66', 'g67' //25
  ];

  ForecastedDemandrange = [
    ["f18", "g18"],
    ["f19", "g19"],
    ["f20", "g20"],
    ["f21", "g21"],
    ["f22", "g22"],
    ["f23", "g23"],
    ["f24", "g24"],

  ];
  LeadTimerange = [
    ["f28", "g28"],
    ["f29", "g29"],
    ["f30", "g30"],
    ["f31", "g31"],
    ["f32", "g32"],
    ["f33", "g33"],

  ];


  constructor(_router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    private Sharedservice: SharedserviceService
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.ForecastedDemand = {
      series: [
        {
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
        position: 'bottom',
        title: {
          text: "Demand, units",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
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
      series: [
        {
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
  }

  override ngOnInit(): void {
    this.getFetchData();
  }


  getFetchData() {
    // this.checkloading = true;
    this.jsonarray1 = []; this.jsonarray2 = [];
    let apiname = '/orderingbasics/fetchorderingbasics';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {

              this._global.casemanagementid.next(data.resultList[0].orderingbasicscmid);

              if (data.resultList[0].orderingBasicsCM.orderingBasicsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].orderingBasicsCM[this.periodcellname[i]];
              }
              for (let i = 8; i < 26; i++) {
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
              console.log("ForecastedDemand", this.ForecastedDemand.series)

              for (let i = 0; i < this.LeadTimerange.length; i++) {
                this.jsonarray2.push((Number(data.resultList[0].orderingBasicsCM[this.LeadTimerange[i][1]])).toFixed(3));
              }
              this.LeadTime.series = [
                { "name": "", "data": this.jsonarray2 }
              ];
              console.log("LeadTime", this.LeadTime.series)

              if ((data.resultList[0].ap18 == 'Yes') || (data.resultList[0].ap18 == 'yes') ||
              (data.resultList[0].ap20 == 'Yes') || (data.resultList[0].ap20 == 'yes') || (this.timefinished)) {
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

  phaseOneInventory() {
    const dialogRef =  this.dialog.open(Orderingbasicsp1inventorylevelComponent, {
      // data: {},
      width: "90%"
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
    }
    this.writehrpValue(cellname, index);
  }

  writehrpValue(cellname: string, index: number) {
    let apiname = '/orderingbasics/singleinputorderingbasics';
    let phase1Data = {
      [cellname]: this.result[index]
    }
    // let phase1Data = {
    //  "ap10": this.result[10],
    //  "ap11": this.result[11]
    // }
    this._api.writeGameData("orderingbasics", 1,
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


  gotoOrderingphase2() {
    const dialogRef = this.dialog.open(PopupDialogueComponent, {
      width: '40%',
      panelClass: 'centertop-dialog',
      data:
      {
        title: "You are saving your current phase decisions, all the decisions made will be considered for assessments. Once you move to the next phase, the decisions of the current phase can't be edited. Do you want to save?"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.action === 'yes') {
        this.saveAndgotoInnovate()
      }
    });
  }

  saveAndgotoInnovate() {
    this.checkloading = true;
    let apiname = '/orderingbasics/singleinputorderingbasics';

    let initiateData = {
      "ap20": 'yes'
    }
    this._api.writeGameData("orderingbasics", 1,
      initiateData, apiname, 'orderingbasicscmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.inputDisabled = true;
          this.Sharedservice.phase2enableTab();
          setTimeout(() => {
            console.log("change")
            this.newItemEvent.emit('phasetwo');
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


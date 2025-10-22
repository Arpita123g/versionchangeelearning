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
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface lineChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  colors: string[];
  
  markers: ApexMarkers;
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
  selector: 'app-portfolionewmanagementphasetwo',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './portfolionewmanagementphasetwo.component.html',
  styleUrls: ['./portfolionewmanagementphasetwo.component.scss']
})
export class PortfolionewmanagementphasetwoComponent extends AbstractComponent {
  foodforthought: boolean = true;
  marketmonitorchart: lineChart;
  AverageAnnualizedReturngraph: barChart;
  gametitle: string = 'productconsumer';
  activeTab: string = 'introduction';
  tabDisabled: boolean = false;
  tabname: string = "individual";
  gamename: string = '';
  toolbartab: string = '';
  result: any = [];
  jsonarray: any[] = [];
  inputtabledata: any = [0, 0, 0, 0, 0, 0, 100];
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
          'PY1',
          'PY2', 
          'PY3', 
          'PY4', 
          'PY5', 
          'PY6', 
          'PY7', 
          'PY8', 
          'PY9', 
          'Phase 1'],

        title: {
          text: "Price",
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
            return value + "%";
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
          'PY9', 'Phase 1'],
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
            return val+ "%";
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



  periodcellvalue: any = [
    'e9', 'q8', 'e10', 'q9'
  ];

  databasecellname: any = [
    'h27', 'd288', 'd289', 'd290', 'd291', 'd292', 'd293', 'd294',//7
    'c288', 'c289', 'c290', 'c291', 'c292', 'c293', 'c294',//14
    'q307',//15
    'q308', 'r308',//17
    'q309', 'r309', 's309',//20
    'q310', 'r310', 's310', 't310',//24
    'q311', 'r311', 's311', 't311', 'u311',//29
    'q312', 'r312', 's312', 't312', 'u312', 'v312',//35
    'q313', 'r313', 's313', 't313', 'u313', 'v313', 'w313',//42
    'am17', 'am18', 'am19', 'am20', 'am21', 'am22', 'am23',//49
    'g288', 'g289', 'g290', 'g291', 'g292', 'g293', 'g294',//56
    'c297', 'c299', 'c296',//59
    'c25', 'c27', 'c28', 'f25', 'f26', 'h25', 'f27', 'h26',//67
  ];


  ReturnsTrendGraph: any = [
    ['Nifty 50', 'o283', 'p283', 'q283', 'r283', 's283', 't283', 'u283', 'v283', 'w283', 'x283',],
    ['Sensex', 'o284', 'p284', 'q284', 'r284', 's284', 't284', 'u284', 'v284', 'w284', 'x284',],
    ['US Stocks', 'o285', 'p285', 'q285', 'r285', 's285', 't285', 'u285', 'v285', 'w285', 'x285',],
    ['Commodity', 'o286', 'p286', 'q286', 'r286', 's286', 't286', 'u286', 'v286', 'w286', 'x286',],
    ['Hybrid Fund', 'o287', 'p287', 'q287', 'r287', 's287', 't287', 'u287', 'v287', 'w287', 'x287',],
    ['Corporate Bond', 'o288', 'p288', 'q288', 'r288', 's288', 't288', 'u288', 'v288', 'w288', 'x288',],
    ['PSU Bond', 'o289', 'p289', 'q289', 'r289', 's289', 't289', 'u289', 'v289', 'w289', 'x289',],
  ];
  averagereturngraph: any = [
    'aa283', 'ab283', 'ac283', 'ad283', 'ae283', 'af283', 'ag283', 'ah283', 'ai283', 'aj283'
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

  getLastFiveDigits(value: string | number): string {
    const stringValue = value.toString();
    return stringValue.length > 5 ? stringValue.slice(0, 5) : stringValue;
  }
  
  fetchData() {
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this._global.casemanagementid.next(data.resultList[0].portfolioManagementCM.portfoliomanagementcmid);
            this.result = [];
            this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
            this.jsonarray6 = []; this.jsonarray7 = []; this.jsonarray8 = []; this.jsonarray9 = []; this.jsonarray10 = [];
            if (data.resultList != null) {
              if (data.resultList[0].portfolioManagementCM.portfolioManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if ((data.resultList[0].ap19 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              }
              for (let i = 0; i < this.periodcellvalue.length; i++) {
                this.result[i] = data.resultList[0].portfolioManagementCM[this.periodcellvalue[i]];
              }
              for (let i = 4; i < 72; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 4]];
              }
              for (let i = 47; i < 54; i++) {
                this.result[i] = (Number(this.result[i]) * 100).toFixed(0);
              }
              for (let i = 54; i < 61; i++) {
                this.result[i] = (Number(this.result[i]) / 1000).toFixed(0);
              }

              

              for (let j = 1; j < 11; j++) {
                this.jsonarray1.push((Number(data.resultList[0][this.ReturnsTrendGraph[0][j]]) * 100).toFixed(2));
                this.jsonarray2.push((Number(data.resultList[0][this.ReturnsTrendGraph[1][j]]) * 100).toFixed(2));
                this.jsonarray3.push((Number(data.resultList[0][this.ReturnsTrendGraph[2][j]]) * 100).toFixed(2));
                this.jsonarray4.push((Number(data.resultList[0][this.ReturnsTrendGraph[3][j]]) * 100).toFixed(2));
                this.jsonarray5.push((Number(data.resultList[0][this.ReturnsTrendGraph[4][j]]) * 100).toFixed(2));
                this.jsonarray6.push((Number(data.resultList[0][this.ReturnsTrendGraph[5][j]]) * 100).toFixed(2));
                this.jsonarray7.push((Number(data.resultList[0][this.ReturnsTrendGraph[6][j]]) * 100).toFixed(2));
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

              for (let i = 0; i < 10; i++) {
                this.jsonarray10.push((Number(data.resultList[0][this.averagereturngraph[i]]) * 100).toFixed(2));
              }
              this.AverageAnnualizedReturngraph.series = [{ "data": this.jsonarray10 }];            

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
    let sum = Number(this.result[47])+Number(this.result[48])+Number(this.result[49])+Number(this.result[50])
    +Number(this.result[51])+Number(this.result[52])
    if(sum<=100){
      this.writepromotionsValue();
    }else{
      this.result[value] = 0;
      this._alert.error("this value cannot go negative")
      
    }
  }

  writepromotionsValue() {

    let apiname = '/portfoliomanagement/singleinputportfoliomanagement';

    for (let i = 47; i < 54; i++) {
      if (this.result[i] == undefined) {
        this.result[i] = 0;
      }
    }
    let portfolioData = {
      "am17": Number(this.result[47]) / 100,
      "am18": Number(this.result[48]) / 100,
      "am19": Number(this.result[49]) / 100,
      "am20": Number(this.result[50]) / 100,
      "am21": Number(this.result[51]) / 100,
      "am22": Number(this.result[52]) / 100,
      
    }
    
    this._api.promotionsdatawrite("portfoliomanagement", 3,
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
 
  //data submit and go to phase 3
  saveAndgoToPhase3() {
    let apiname = '/portfoliomanagement/singleinputportfoliomanagement';

    let portfolioData = {
      "ap19": 'yes',
    }
    this._api.promotionsdatawrite("portfoliomanagement", 2,
      portfolioData, apiname, 'portfoliomanagementcmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this.inputDisabled = true;
          this.Sharedservice.phase3enableTab();
          setTimeout(() => {
            this.newItemEvent.emit('portfoliophasethree');
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
  goToPhase3() {
    const dialogRef = this.dialog.open(PopupDialogueComponent, {
      width: '40%',
      panelClass: 'centertop-dialog',
      data:
      {
        title:"You are saving your current phase decisions, all the decisions made will be considered for assessments. Once you move to the next phase, the decisions of the current phase can't be edited. Do you want to save?"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.action === 'yes') {
        this.saveAndgoToPhase3()
      }
    });
  }
  openDialog(): void {
    this.dialog.open(FoodforthoughtportfoliomanagementComponent, {
      data: {},
    });
  }

}

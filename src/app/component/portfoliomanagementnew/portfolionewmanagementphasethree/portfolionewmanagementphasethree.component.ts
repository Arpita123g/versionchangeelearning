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
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-portfolionewmanagementphasethree',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],  
  templateUrl: './portfolionewmanagementphasethree.component.html',
  styleUrls: ['./portfolionewmanagementphasethree.component.scss']
})
export class PortfolionewmanagementphasethreeComponent extends AbstractComponent {
  foodforthought: boolean = true;
  marketmonitorchart: lineChart;
  AverageAnnualizedReturngraph: barChart;
  gametitle: string = 'productconsumer';
  activeTab: string = 'introduction';
  tabDisabled: boolean = false;
  tabname: string = "individual";
  gamename: string = '';
  toolbartab: string = '';
  jsonarray: any[] = [];
  result: any = [];
  inputDisabled: boolean = false;
  @Output() newItemEvent = new EventEmitter<any>();
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private sharedservice: SharedserviceService) {
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
          'PY9', 'Phase 1','Phase 2'],
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
      // noData: this.nodata[0],
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
          return val + "%";
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
          'PY9', 'Phase 1','Phase 2'],
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
            return val.toFixed(2) + "%";
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
    'e9', 'u8', 'e10', 'u9'
  ];

  databasecellname: any = [
    'h303', 'd565', 'd566', 'd567', 'd568', 'd569', 'd570', 'd571', 'c565', 'c566', 'c567', 'c568', 'c569', 'c570', 'c571',//18
    'am26', 'am27', 'am28', 'am29', 'am30', 'am31', 'am32', 'g565', 'g566', 'g567', 'g568', 'g569',//30
     'g570', 'g571', 'c574', 'c576', 'c573',//35
    'c301', 'c303', 'c304', 'f301', 'f302', 'h301', 'f303', 'h302'//43
  ];

  ReturnsTrendGraph: any = [
    // ['PY1', 'PY2', 'PY3', 'PY4', 'PY5', 'PY6', 'PY7', 'PY8', 'PY9', 'Phase 1', 'Phase 2', 'Phase 3'],
    ['Nifty 50', 'o560', 'p560', 'q560', 'r560', 's560', 't560', 'u560', 'v560', 'w560', 'x560', 'y560',],
    ['Sensex', 'o561', 'p561', 'q561', 'r561', 's561', 't561', 'u561', 'v561', 'w561', 'x561', 'y561', ],
    ['US Stocks', 'o562', 'p562', 'q562', 'r562', 's562', 't562', 'u562', 'v562', 'w562', 'x562', 'y562'],
    ['Commodity', 'o563', 'p563', 'q563', 'r563', 's563', 't563', 'u563', 'v563', 'w563', 'x563', 'y563' ],
    ['Hybrid Fund', 'o564', 'p564', 'q564', 'r564', 's564', 't564', 'u564', 'v564', 'w564', 'x564', 'y564' ],
    ['Corporate Bond', 'o565', 'p565', 'q565', 'r565', 's565', 't565', 'u565', 'v565', 'w565', 'x565', 'y565'],
    ['PSU Bond', 'o566', 'p566', 'q566', 'r566', 's566', 't566', 'u566', 'v566', 'w566', 'x566', 'y566']
  ];

  averagereturngraph: any = [
    // ['PY1', 'PY2', 'PY3', 'PY4', 'PY5', 'PY6', 'PY7', 'PY8', 'PY9', 'Phase 1', 'Phase 2', 'Phase 3'],
    'ac560', 'ad560', 'ae560', 'af560', 'ag560', 'ah560', 'ai560', 'aj560', 'ak560', 'al560', 'am560'
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
   let stringValue ="";
    if(value!=undefined){
      stringValue = value.toString();
    }
    return stringValue.length > 5 ? stringValue.slice(0, 5) : stringValue;
    
  }

  fetchData() {
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';;
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
              if ((data.resultList[0].ap15 == 'yes')||(data.resultList[0].ap15 == 'Yes')|| (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              }
              for (let i = 0; i < this.periodcellvalue.length; i++) {
                this.result[i] = data.resultList[0].portfolioManagementCM[this.periodcellvalue[i]];
              }
              for (let i = 4; i < 44; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 4]];
              }
              
              
              for (let i = 19; i < 26; i++) {
                this.result[i] = (Number(this.result[i]) * 100).toFixed(0);
              }
              for (let i = 26; i < 33; i++) {
                this.result[i] = (Number(this.result[i]) / 1000).toFixed(0);
              }

              for (let j = 1; j < 12; j++) {
                this.jsonarray1.push((Number(data.resultList[0][this.ReturnsTrendGraph[0][j]])* 100).toFixed(2));
                this.jsonarray2.push((Number(data.resultList[0][this.ReturnsTrendGraph[1][j]])* 100).toFixed(2));
                this.jsonarray3.push((Number(data.resultList[0][this.ReturnsTrendGraph[2][j]])* 100).toFixed(2));
                this.jsonarray4.push((Number(data.resultList[0][this.ReturnsTrendGraph[3][j]])* 100).toFixed(2));
                this.jsonarray5.push((Number(data.resultList[0][this.ReturnsTrendGraph[4][j]])* 100).toFixed(2));
                this.jsonarray6.push((Number(data.resultList[0][this.ReturnsTrendGraph[5][j]])* 100).toFixed(2));
                this.jsonarray7.push((Number(data.resultList[0][this.ReturnsTrendGraph[6][j]])* 100).toFixed(2));
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

              for (let i = 0; i < this.averagereturngraph.length; i++) {
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
    let sum = Number(this.result[19])+Number(this.result[20])+Number(this.result[21])+Number(this.result[22])
    +Number(this.result[23])+Number(this.result[24])
    if(sum<=100){
      this.writepromotionsValue();
    }else{
      this.result[value] = 0;
      this._alert.error("this value cannot go negative")
      
    }
  }

  writepromotionsValue() {

    let apiname = '/portfoliomanagement/singleinputportfoliomanagement';

    for (let i = 19; i < 25; i++) {
      if (this.result[i] == undefined) {
        this.result[i] = 0;
      }
    }
    let portfolioData = {
      "am26": Number(this.result[19])/ 100,
      "am27": Number(this.result[20])/ 100,
      "am28": Number(this.result[21])/ 100,
      "am29": Number(this.result[22])/ 100,
      "am30": Number(this.result[23])/ 100,
      "am31": Number(this.result[24])/ 100,
     
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
  goToPhase3() {
    let apiname = '/portfoliomanagement/singleinputportfoliomanagement';

    let portfolioData = {
      "ap19": 'yes',

    }
    this._api.promotionsdatawrite("portfoliomanagement", 2,
      portfolioData, apiname, 'portfoliomanagementcmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this.inputDisabled = true;
          // this.newItemEvent.emit('portfoliophasethree');
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }


  openDialog(): void {
    this.dialog.open(FoodforthoughtportfoliomanagementComponent, {
      data: {},
    });
  }

}

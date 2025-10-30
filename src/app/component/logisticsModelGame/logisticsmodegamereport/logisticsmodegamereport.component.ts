import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
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
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

interface RadarChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  fill: ApexFill;
  title: ApexTitleSubtitle;
}


@Component({
  selector: 'app-logisticsmodegamereport',
  standalone: true,
  imports: [CommonModule, FormsModule,NgApexchartsModule,MatIconModule,TippyDirective],
  templateUrl: './logisticsmodegamereport.component.html',
  styleUrls: ['./logisticsmodegamereport.component.scss']
})
export class LogisticsmodegamereportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  revenueinr: pieChart;
  turnaroundtime: barchart;
  othercost: barchart;
  co2emission: barchart;
  n2oemission: barchart;
  ch4emission: barchart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  resultbody: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  jsonarray8: any = [];
  jsonarray9: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  periodresult: any = [];
  optional: any[] = [];
  coursename: string = "";
  getallvalues: any = '';
  submitprove: string = "";
  revenueinrpercentnames:any = [];
  revenueinrpercent:any = [];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [{
        name: 'Series',
        data: [10, 20, 30, 40],
      }],
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: ''
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['Rigor', 'Structuring', 'Synthesis', 'Business Jugement',]
      },
      yaxis: {
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },

    };

    this.revenueinr = {
      series: [],
      chart: {
        width: 300,
        height: 200,
        type: 'pie',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      legend: {
        position: 'right',
        offsetY: 80,
      },
      labels: ['Trucks', 'Rail', 'Air'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 100,
            },
            legend: {
              position: 'middle',
            },
          },
        },
      ],
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
        text: 'Revenue, INR',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.turnaroundtime = {
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
          columnWidth: "50%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Unison Limited', 'Promton Incorporation', 'Fix Corporate', 'eCom Limited'],
        position: "bottom",
        labels: {
          offsetY: 0,
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
            return val+"";
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
        text: "TAT",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.othercost = {
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
          columnWidth: "40%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return "₹"+val;
        },
      },
      xaxis: {
        // categories: ['TAT Penalty', 'Under Utilization Opportunity', 'Damage & Theft Cost'],
        position: "bottom",
        labels: {
          offsetY: 0,
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
            return "₹"+val ;
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
        text: "Other Cost, INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.co2emission = {
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
          horizontal: false,
          columnWidth: "20%",
        }
      },
      dataLabels: {
        enabled: false,
        },
      xaxis: {
        categories: ['', 'CO2', ''],
        position: "bottom",
        labels: {
          offsetY: 0,
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
        text: "CO2 Emission, kg",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.n2oemission = {
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
          horizontal: false,
          columnWidth: "20%",
        }
      },
      dataLabels: {
        enabled: false,
        },
      xaxis: {
        categories: ['', 'N2O', ''],
        position: "bottom",
        labels: {
          offsetY: 0,
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
        text: "N2O Emission, g",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.ch4emission = {
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
          horizontal: false,
          columnWidth: "20%",
        }
      },
      dataLabels: {
        enabled: false,
       },
      xaxis: {
        categories: ['', 'CH4', ''],
        position: "bottom",
        labels: {
          offsetY: 0,
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
        text: "CH4 Emission, g",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }
  }

  rigorgraphvalue: any = [
    ['al42','am42','76','45'],
    ['al43','am43','73','47'],
    ['al44','am44','78','43'],
    ['al45','am45','81','42'],
    // ['AL42', 'AM42', '76', '45'],
    // ['AL43', 'AM43', '73', '47'],
    // ['AL44', 'AM44', '78', '43'],
    // ['AL45', 'AM45', '81', '42'],
  ]

  revenuegraphvalue: any = [
    ['Truck','c85'],
    ['Rail','c86'],
    ['Air','c87']
    // ['Truck', 'C85'],
    // ['Rail', 'C86'],
    // ['Air', 'C87']
  ]
  tatgraphvalue: any = [
    ['i102','j102','k102'],
    ['i103','j103','k103'],
    ['i104','j104','k104'],
    ['i105','j105','k105']
    // ['I102', 'J102', 'K102'],
    // ['I103', 'J103', 'K103'],
    // ['I104', 'J104', 'K104'],
    // ['I105', 'J105', 'K105']
  ]
  turnaroundtimegraphvalue: any = [
    ['e18', 'f18', 'g18', 'h18'],
    ['e19', 'f19', 'g19', 'h19'],
    ['e20', 'f20', 'g20', 'h20'],
    ['e21', 'f21', 'g21', 'h21'],
  ]

  othercostgraphvalue: any = [
    // ['e110','f110'],
    // ['e1101','f111'],
    // ['e112','f112'],
    ['TAT Penalty', 'f110'],
    ['Under utilization Opportunity', 'f111'],
    ['Damage & Theft Cost', 'f112'],
  ]

  co2emissiongraphvalue: any = 
    ['CO2 Emission (kg)', 'p90']
  

  ch4emissiongraphvalue: any = 
    ['CH4 Emission (g)', 'p91']
  
  n2oemissiongraphvalue: any = 
    ['N2O Emission (g)', 'p92']
  

  // databasecellvalue:any = ['j107','j108','j109','j110',
  // 'b85','b86','b87','c85','c86','c87',
  // 'b28','c28','b29','c29','b30','c30','b31','c31','b32','c32','b34','c34',
  // 'v21','v22','v23','v24',
  // 'b90','c90','b91','c91','b92','c92','b93','c93','b94','c94','b95','c95',
  // 'i102','i103','i104','i105','j102','j103','j104','j105','k102','k103','k104','k105','m102','m103','m104','m105',

  // ]
  databasecellname: any = ['j107', 'j108', 'j109', 'j110',
  'c85', 'c86', 'c87',
  'j102', 'm102', 'j103', 'm103', 'j104', 'm104', 'j105', 'm105',
  'v21', 'v22', 'v23', 'v24',
  'b28', 'c28', 'b29', 'c29', 'b30', 'c30', 'b31', 'c31', 'b32', 'c32', 'b34', 'c34',
  'b90', 'c90', 'b91', 'c91', 'b92', 'c92', 'b93', 'c93', 'b94', 'c94', 'b95', 'c95',
  'i102', 'i103', 'i104', 'i105', 'k102', 'k103', 'k104', 'k105', 'c33',

  ]
  periodcellvalue: any = ['av57','av58','av59','av60','av61','av62','av63','av64']
  // periodcellvalue: any = ['C10', 'C11', 'C12', 'C13', 'D16', 'D17', 'D18', 'D19']
  optionalcase = ["emissionsstatus",
    "foodforthoughtstatus"]

  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  getFetchData(attempt: string) {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray7 = []; this.jsonarray8 = [];
    this.jsonarray9 = [];
    this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = []; this.jsonarray6 = [];
    let apiname = '/logistics/fetchlogistics';
    // let apiname = '/logisticsmodelgame/fetchlogisticsmodelgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].aw53;
              if ((this.submitprove == "No")||(this.submitprove == "no")||(this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].logisticscmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.databasecellname.length; i++) {
                  this.result[i] = data.resultList[0][this.databasecellname[i]]
                }
                for (let i = 0; i < this.periodcellvalue.length; i++) {
                  this.periodresult[i] = data.resultList[0][this.periodcellvalue[i]]
                }
                
                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].logisticsCM.logisticsCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                //rigor chart data
                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': data.resultList[0][this.rigorgraphvalue[i][0]], 'y': data.resultList[0][(this.rigorgraphvalue[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': data.resultList[0][this.rigorgraphvalue[i][0]], 'y': (this.rigorgraphvalue[i][2]) });
                  this.jsonarray3.push({ 'x': data.resultList[0][this.rigorgraphvalue[i][0]], 'y': (this.rigorgraphvalue[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 },
                { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]

                //remove commented(revenue pie chart)
                for (let i = 0; i < 3; i++) {
                  this.revenueinrpercentnames[i] = this.revenuegraphvalue[i][0];
                  this.revenueinrpercent[i] = data.resultList[0][this.revenuegraphvalue[i][1]];
                  }
                this.revenueinr.series = this.revenueinrpercent;
                this.revenueinr.labels = this.revenueinrpercentnames;
                console.log("revenue", this.revenueinr.series)

                for (let i = 0; i < 4; i++) {
                  this.jsonarray4.push({ 'x': data.resultList[0][this.tatgraphvalue[i][0]], 'y': Number(data.resultList[0][this.tatgraphvalue[i][1]] ).toFixed(1)});
                  this.jsonarray5.push({ 'x': data.resultList[0][this.tatgraphvalue[i][0]], 'y': Number(data.resultList[0][this.tatgraphvalue[i][2]] )});
                }
                this.turnaroundtime.series = [{ "name": "Actual TAT", "data": this.jsonarray4 },
                { "name": "Expected TAT", "data": this.jsonarray5 }]
                

                //othercostvaluegrap
                for (let i = 0; i < 3; i++) {
                  this.jsonarray6.push({ 'x': this.othercostgraphvalue[i][0], 'y': Number(data.resultList[0][this.othercostgraphvalue[i][1]] ).toFixed(0)});
                  }
                  this.othercost.series = [{ "name": "Value", "data": this.jsonarray6 }]
                  this.jsonarray7.push({ 'x': this.co2emissiongraphvalue[0], 'y': Number(data.resultList[0][this.co2emissiongraphvalue[1]]).toFixed(0)});
                  this.jsonarray8.push({ 'x': this.ch4emissiongraphvalue[0], 'y': Number(data.resultList[0][this.ch4emissiongraphvalue[1]]).toFixed(0)});
                  this.jsonarray9.push({ 'x': this.n2oemissiongraphvalue[0], 'y': Number(data.resultList[0][this.n2oemissiongraphvalue[1]]).toFixed(0)});
                  
                  this.turnaroundtimegraphvalue.series = [{ "name": "Value", "data": this.jsonarray4 },]
                this.co2emission.series = [{ "name": "Value", "data": this.jsonarray7 }]
                this.ch4emission.series = [{ "name": "Value", "data": this.jsonarray8 }]
                this.n2oemission.series = [{ "name": "Value", "data": this.jsonarray9 }]
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

  downloadreportlogistics() {
    let apiname = '/logistics/fetchlogistics';
    this.excelsheetservice.downloadReportforgame(apiname, "logistics", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename, this.studentelementdetailsvalue.coursedetailsid);

  }
}

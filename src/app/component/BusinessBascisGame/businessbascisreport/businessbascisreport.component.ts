import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexMarkers,
  ApexNoData,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
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
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { FormsModule } from '@angular/forms';

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
  tooltip:ApexTooltip;
}
interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip:ApexTooltip;
}

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

@Component({
  selector: 'app-businessbascisreport',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatIconModule, NgApexchartsModule, TippyDirective , FormsModule],
  templateUrl: './businessbascisreport.component.html',
  styleUrls: ['../BusinessBasicsGame.scss'],
})
export class BusinessbascisreportComponent extends AbstractComponent {
  operationalcost: barChart;
  incomestatement: pieChart;
  cashbalfixedcost: barChart;
  rigorcharts: RadarChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  optionalcase = ["licenseandregstatus", "technologystatus", "foodforthoughtstatus", "campaign123status"]

  cashbalfixedcostrange = [
    ['Initial Cash', '600000'],//0
    ['Interior', '720000'],//1
    ['Equipment', '90000'],//2
    ['Technology', '105000'],//3
    ['Cashoutflow', '888000'],//4
    ['Borrowings', '288000'],//5
    

  ]
  operationalcostrange = [
    [this.labelsBreak('Rent'), '120000'],
    [this.labelsBreak('Compliance'), '25000'],
    [this.labelsBreak('Maintenance'), '42600'],
    [this.labelsBreak('Raw Material Purchase'), '3004'],
    [this.labelsBreak('Service'), '25000'],
    [this.labelsBreak('Interest'), '2160'],
    [this.labelsBreak('Promotion'), '12000'],
  ]
  incomestatementrange = [

    ['Revenue', '217685'],
    ['Operational Cost', '287559'],
    ['Depreciation', '30500'],
    ['Profit', '-105397'],

  ]
  rigorchartsrange = [
    ['ab50', 'c173', '76', '45'],
    ['ac50', 'c174', '73', '47'],
    ['ad50', 'c175', '78', '43'],
    ['ae50', 'c175', '81', '42'],
  ]

  resultcellname: any = ['c50', 'c51', 'c52', 'c53', 'c54', 'c56',//5
    'c64', 'c65', 'c66', 'c67', 'c68', 'c69', 'c70', 'c71', 'c72', 'c73',//15
    'c76', 'c77', 'c78', 'c79', 'c82']
  getallvalues: any = '';

  submitprove: string = "";
  incomepercent: any = [];
  incomepercentnames: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    
    this.operationalcost = {
      series: [],
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
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
          horizontal: false,
          // columnWidth: '10%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: this.xaxis[11],
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
      fill: this.fill[0],
      yaxis: {
        labels: {
          formatter: function (value) {
            return "₹" + value;
          }
        }
      },
      title: {
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.incomestatement = {
      series: [],
      chart: {
        width: 400,
        height: 250,
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
        offsetY: 50,
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 250,
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
        text: '',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

  
    this.cashbalfixedcost = {
      series: [
      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
          },
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: this.xaxis[11],
      yaxis: {
        labels: {
          formatter: function (value) {
            return "₹" + value;
          }
        }
      },
      fill: this.fill[0],
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
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.rigorcharts = {
      series: [],
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
  }

  override ngOnInit(): void {
    this.getValues(this.noofattempt);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getValues(attempt[1]);
  }

  getValues(attempt: string) {
    this.jsonarray1 = []; this.jsonarray2 = [];this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
    let apiname = '/businessbasic/fetchbusinessbasic';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.submitprove = data.resultList[0].h4;
              if ((this.submitprove == "No")||(this.submitprove == "no")||(this.submitprove == null)){
                this.getValues(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].businessbasiccasemanagementid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0][this.resultcellname[i]]
                }
                this.result[8] = this.result[8] + this.result[9];
                this.result[9] = this.result[10] + this.result[11];
                this.result[10] = this.result[12];
                this.result[11] = this.result[13];
                this.result[12] = this.result[14];
                this.result[13] = this.result[15];


                
                

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                for (let i = 0; i < 4; i++) {
                  this.jsonarray3.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.rigorchartsrange[i][0]], 'y': data.resultList[0][(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray4.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.rigorchartsrange[i][0]], 'y': (this.rigorchartsrange[i][2]) });
                  this.jsonarray5.push({ 'x': data.resultList[0].businessBasicCaseManagement[this.rigorchartsrange[i][0]], 'y': (this.rigorchartsrange[i][3]) });
                }

                for (let i = 0; i < 4; i++) {
                  if ((i == 3) && (this.optional[1] == false)) {
                  } else {
                    this.jsonarray1.push({ 'x': this.cashbalfixedcostrange[i][0], 'y': this.result[i].toFixed(0) });
                  }
                }

                for (let i = 0; i < 7; i++) {
                  if (((i == 1) && (this.optional[0] == false)) ) {
                  } else {
                    this.jsonarray2.push({ 'x': this.operationalcostrange[i][0], 'y': this.result[i + 6].toFixed(0) });
                  }
                }

                // let j = 0;
                for (let i = 0; i < 4; i++) {
                  this.incomepercent[i] = this.incomestatementrange[i][0];
                  if (Number(this.result[i + 16]) < 0) {
                    this.incomepercentnames[i] = 0;
                  } else {
                    this.incomepercentnames[i] = Number(this.result[i + 16]);
                  }
                }
                this.incomestatement.labels = this.incomepercent;
                this.incomestatement.series = this.incomepercentnames;

                this.cashbalfixedcost.series = [{ "name": "Value", "data": this.jsonarray1 },]
                this.operationalcost.series = [{ "name": "Value", "data": this.jsonarray2 },]

                
                
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray3 }, { "name": "90% Percentile", "data": this.jsonarray4 }, { "name": "Average", "data": this.jsonarray5 }]


              }
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

  downloadreportbusinessbasic() {
    let apiname = '/businessbasic/fetchbusinessbasic';
    this.excelsheetservice.downloadReportforgame(apiname, "businessbasic", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
    this.studentelementdetailsvalue.coursedetailsid);

  }


}

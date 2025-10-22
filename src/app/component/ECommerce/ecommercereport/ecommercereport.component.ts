import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
// import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexNoData,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { EcommercesheetService } from 'src/app/service/sheet/ecommerce/ecommercesheet.service';
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
  selector: 'app-ecommercereport',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, NgApexchartsModule, FormsModule, MatIconModule],
  templateUrl: './ecommercereport.component.html',
  styleUrls: ['./ecommercereport.component.scss']
})
export class EcommercereportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  demandvssaleschart: barChart;
  marginschart: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optional: any[] = [];
  coursename: string = "";
  submitprove: string = "";
  optionalcase: any = ["foodforthoughtstatus",];
  totalOptionalcase: boolean = true;
  resultSalesTableData: any[][] = [];
  resultProductTableData: any[][] = [];
  resultPromotionTableData: { label: string; values: number[] }[] = []
  resultWebsiteTableData: { label: string; values: number[] }[] = []
  resultKpiTableData: { label: string; values: number[] }[] = []
  financialData: { label: string, index: number }[] = [
    { label: 'Revenue', index: 71 },
    { label: 'Cost', index: 72 },
    { label: 'Gross Profit/Loss', index: 73 },
    { label: 'Promotion cost', index: 74 },
    { label: 'Website cost', index: 75 },
    { label: 'Personnel & Service cost', index: 76 },
    { label: 'Packaging cost', index: 77 },
    { label: 'Logistics and Inventory cost', index: 78 },
    { label: 'Process Improvement cost', index: 79 },
    { label: 'Operating expense', index: 80 },
    { label: 'EBITDA', index: 81 },
  ];

  resultcellname: string[] = [
    'j8', 'j9', 'j10', 'j11', 'j12', 'j13', 'j14', 'j15', 'j16', 'j17', //9
    'n86', 'o86', 'p86', 'q86', 'r86', 's86', 't86', 'u86', 'v86', 'w86', //19
    'n87', 'o87', 'p87', 'q87', 'r87', 's87', 't87', 'u87', 'v87', 'w87', //29
    'n88', 'o88', 'p88', 'q88', 'r88', 's88', 't88', 'u88', 'v88', 'w88', //39
    'm8', 'm9', 'm10', 'm11', 'm12', 'm13', 'm14', 'm15', 'm16', 'm17', //49
    'n95', 'o95', 'p95', 'q95', 'r95', 's95', 't95', 'u95', 'v95', 'w95', //59
    'q57', 'q58', 'q59', 'q60', //63
    'r57', 'r58', 'r59', 'r60', //67
    'n78', 'n79', 'n80', //70
    'o97', 'o98', 'o99', 'o101', 'o102', 'o103', 'o104', 'o105', 'o106', 'o107', 'o108', //81
    'r97', 'r98', 'r100', 'r99', 'n109' //85

  ];

  rigorchartsrange = [
    ['Rigor', 'ah64', '83', '52'],
    ['Structuring', 'ah65', '80', '55'],
    ['Synthesis', 'ah66', '82', '58'],
    ['Business Judgement', 'ah67', '84', '60'],
  ];
  demandvssalescellname: any = [
    ['v100', 'v101', 'v102', 'v103', 'v104', 'v105', 'v106', 'v107', 'v108', 'v109'],
    ['w100', 'w101', 'w102', 'w103', 'w104', 'w105', 'w106', 'w107', 'w108', 'w109']
  ];
  marginsscellname: any = [
    ['n95', 'o95', 'p95', 'q95', 'r95', 's95', 't95', 'u95', 'v95', 'w95']
  ];



  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: EcommercesheetService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [

      ],
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

    this.demandvssaleschart = {
      series: [

      ],
      chart: {
        height: 350,
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
        categories: [['Bamboo', 'Fiber', 'Blouse'], ['Hemp', 'Denim', 'Jeans'], ['Eco-', 'Fleece', 'Hoodie'],
        ['Organic', 'Cotton', 'Polo', 'Shirt'], ['Hemp', 'Cargo', 'Shorts'], ['Organic', 'Cotton', 'Chinos'],
        ['Recy-', 'cled', 'Leather', 'Belt'], ['Bamboo', 'Sungl-', 'asses'], ['Silk', 'Band-', 'ana'], ['Recycled', 'Rubber', 'Sandals']],
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
        text: "Demand vs Sales, units",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.marginschart = {
      series: [

      ],
      chart: {
        height: 350,
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
          return val + "%";
        },
      },
      xaxis: {
        categories: [['Bamboo', 'Fiber', 'Blouse'], ['Hemp', 'Denim', 'Jeans'], ['Eco-', 'Fleece', 'Hoodie'],
        ['Organic', 'Cotton', 'Polo', 'Shirt'], ['Hemp', 'Cargo', 'Shorts'], ['Organic', 'Cotton', 'Chinos'],
        ['Recy-', 'cled', 'Leather', 'Belt'], ['Bamboo', 'Sungl-', 'asses'], ['Silk', 'Band-', 'ana'], ['Recycled', 'Rubber', 'Sandals']],
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
        text: "Margin %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

  }

  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  getFetchData(attempt: string) {
    let apiname = '/ecommercegame/fetchecommercegame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this.jsonarray4 = [];
              this.jsonarray5 = [];
              this.jsonarray6 = [];
              this.jsonarray7 = [];
              if (data.resultList[0].ecommercegamedata) {
                this.submitprove = data.resultList[0].ecommercegamedata.aq168;
              } else {
                this.submitprove = 'no';
              }

              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].ecommercegamecmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0].ecommercegamedata[this.resultcellname[i]]
                }

                const rowCount = 10; // Adjust for the number of rows needed
                for (let i = 0; i < rowCount; i++) {
                  this.resultSalesTableData.push([
                    this.result[i], // First column
                    this.result[i + 10], // Second column
                    this.result[i + 20], // Third column
                    this.result[i + 30], // Fourth column
                  ]);
                }

                const rowCount1 = 10; // Adjust for the number of rows needed
                for (let i = 0; i < rowCount1; i++) {
                  this.resultProductTableData.push([
                    this.result[i], // First column
                    this.result[i + 40], // Second column
                    this.result[i + 50], // Third column

                  ]);
                }

                const rowLabels = ['Social Media', 'Campaigns', 'Organic', 'Email'];
                for (let i = 0; i < rowLabels.length; i++) {
                  this.resultPromotionTableData.push({
                    label: rowLabels[i],
                    values: [
                      this.result[i + 60],
                      this.result[i + 64],

                    ],
                  });
                }
                const rowLabels1 = ['Bounce Rate', 'Engagement Rate', 'Customer Satisfaction'];
                for (let i = 0; i < rowLabels1.length; i++) {
                  this.resultWebsiteTableData.push({
                    label: rowLabels1[i],
                    values: [
                      this.result[i + 68],

                    ],
                  });
                }
                const rowLabels2 = ['Average Order Value, INR', 'Sales Performance Indication', 'Product Return', 'ROAS', 'Operating Margin'];

                for (let i = 0; i < rowLabels2.length; i++) {
                  let value = this.result[i + 82];

                  // Format specific rows
                  if (rowLabels2[i] === 'Product Return' || rowLabels2[i] === 'Operating Margin') {
                    value = (value * 100).toFixed(0) + '%'; // Convert to percentage with 2 decimals
                  } else if (rowLabels2[i] === 'Sales Performance Indication') {
                    value = value.toFixed(2); // Keep 2 decimals
                  } else {
                    value = value.toFixed(0); // Default conversion to string
                  }

                  this.resultKpiTableData.push({
                    label: rowLabels2[i],
                    values: [value],
                  });
                }

                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].ecommerceGameCM.ecommerceGameCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }


                // Rigorchar

                for (let i = 0; i < 4; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0].ecommercegamedata[(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]

                for (let i = 0; i < this.demandvssalescellname[0].length; i++) {
                  this.jsonarray4.push((data.resultList[0].ecommercegamedata[this.demandvssalescellname[0][i]])).toFixed(0);
                  this.jsonarray5.push((data.resultList[0].ecommercegamedata[this.demandvssalescellname[1][i]])).toFixed(0);

                }
                this.demandvssaleschart.series = [
                  { "name": 'Demand', "data": this.jsonarray4 },
                  { "name": 'Sales', "data": this.jsonarray5 },

                ];

                for (let i = 0; i < this.marginsscellname[0].length; i++) {
                  this.jsonarray6.push(((data.resultList[0].ecommercegamedata[this.marginsscellname[0][i]]) * 100).toFixed(0));

                }
                this.marginschart.series = [
                  { "name": 'Margin', "data": this.jsonarray6 },

                ];

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

  downloadreporthrpgame() {
    let apiname = '/ecommercegame/fetchecommercegame';
    this.excelsheetservice.downloadReportforgame(apiname, "ecommercegame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);
  }

}

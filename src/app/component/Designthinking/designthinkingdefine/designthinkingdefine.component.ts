import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { DesignthinkingfoodforthoughtComponent } from '../designthinkingfoodforthought/designthinkingfoodforthought.component';
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
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
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
  selector: 'app-designthinkingdefine',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule, NgApexchartsModule,
    FormsModule, MatIconModule, TippyDirective
  ],
  templateUrl: './designthinkingdefine.component.html',
  styleUrls: ['./designthinkingdefine.component.scss']
})
export class DesignthinkingdefineComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  result: any = [];

  trainingprioritiescheckbox: number = 0;
  batterylifechart: barChart;
  affordabilitychart: barChart;
  localizationchart: barChart;
  databasecellname: any = ['af7', 'af8', 'af9'];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];

  periodcellname: any = [
  ];

  batterylifechartrange: any = [
    ['l24', 'm24'],
    ['l25', 'm25'],
    ['', 'af7']
  ]

  affordabilitychartrange: any = [
    ['l24', 'm28'],
    ['l25', 'm29'],
    ['', 'af8']
  ]

  localizationchartrange: any = [
    ['l24', 'm32'],
    ['l25', 'm33'],
    ['', 'af9']
  ]

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.batterylifechart = {
      series: [
        // {
        //   data: [13562, 12339, 1460, -237]
        // },
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
        categories: [['Current Market', 'Average'], ['Desired by', ' Consumers'], ['Potential', ' Target']],
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
        text: "Battery Life, days",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.affordabilitychart = {
      series: [
        // {
        //   data: [13562, 12339, 1460, -237]
        // },
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
        categories: [['Average Price', ' of', ' Top-Tier', ' Smartwatches'], ['Average Price', ' of Mid-Tier', ' Smartwatches'],
        ['Potential', ' Target']],
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
        text: "Affordability, INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.localizationchart = {
      series: [
        // {
        //   data: [13562, 12339, 1460, -237]
        // },
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
        categories: [['Current ', 'Smartwatches'], ['Consumer ', 'Demand'], ['Potential ', 'Target']],
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
        text: "Localization Features",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  
  getFetchData() {
    const apiname = '/designthinking/fetchdesignthinking';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          const result = data.resultList[0];
          const designCM = result.designThinkingCM;

          // Reset arrays
          this.jsonarray1 = [];
          this.jsonarray2 = [];
          this.jsonarray3 = [];

          // Update case management ID
          this._global.casemanagementid.next(result.designthinkingcmid);

          // Update foodforthought status
          this.foodforthought = designCM.foodforthoughtstatus !== 'inactive';

          // Update result array
          this.result = this.databasecellname.map((cell: string, i: number) =>
            i === 2 ? (Number(result[cell]) * 100).toFixed(0) : result[cell]
          );

          // for (let i = 0; i < this.batterylifechartrange.length; i++) {
          //   if (i == 2) {
          //     this.jsonarray1.push(Number((data.resultList[0][this.batterylifechartrange[i][1]])).toFixed(0));
          //   } else {
          //     this.jsonarray1.push(Number((data.resultList[0].designThinkingCM[this.batterylifechartrange[i][1]])).toFixed(0));
          //   }
          // }
          // this.batterylifechart.series = [{ "name": '', "data": this.jsonarray1 },];
          // for (let i = 0; i < this.affordabilitychartrange.length; i++) {
          //   if (i == 2) {
          //     this.jsonarray2.push(Number((data.resultList[0][this.affordabilitychartrange[i][1]])).toFixed(0));
          //   } else {
          //     this.jsonarray2.push(Number((data.resultList[0].designThinkingCM[this.affordabilitychartrange[i][1]])).toFixed(0));
          //   }
          // }
          // this.affordabilitychart.series = [{ "name": '', "data": this.jsonarray2 },];
          // for (let i = 0; i < this.localizationchartrange.length; i++) {
          //   if (i == 2) {
          //     this.jsonarray3.push((Number((data.resultList[0][this.localizationchartrange[i][1]])) * 100).toFixed(0));
          //   } else {
          //     this.jsonarray3.push((Number((data.resultList[0].designThinkingCM[this.localizationchartrange[i][1]])) * 100).toFixed(0));
          //   }
          // }
          // this.localizationchart.series = [{ "name": '', "data": this.jsonarray3 },];
          this.updateInputResValue();
          // Update checkdisable
          this.checkdisable = ['Yes', 'yes'].includes(result.af65) || this.timefinished;

          this.checkloading = false;
        } else {
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    });
  }
  updateInputResValue() {
    const apiname = '/designthinking/fetchdesignthinking';

    this.jsonarray1 = [];
    this.jsonarray2 = [];
    this.jsonarray3 = [];
    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < this.batterylifechartrange.length; i++) {
          if (i == 2) {
            this.jsonarray1.push(Number((updatedData[this.batterylifechartrange[i][1]])).toFixed(0));
          } else {
            this.jsonarray1.push(Number((updatedData.designThinkingCM[this.batterylifechartrange[i][1]])).toFixed(0));
          }
        }
        this.batterylifechart.series = [{ "name": '', "data": this.jsonarray1 },];
        for (let i = 0; i < this.affordabilitychartrange.length; i++) {
          if (i == 2) {
            this.jsonarray2.push(Number((updatedData[this.affordabilitychartrange[i][1]])).toFixed(0));
          } else {
            this.jsonarray2.push(Number((updatedData.designThinkingCM[this.affordabilitychartrange[i][1]])).toFixed(0));
          }
        }
        this.affordabilitychart.series = [{ "name": '', "data": this.jsonarray2 },];
        for (let i = 0; i < this.localizationchartrange.length; i++) {
          if (i == 2) {
            this.jsonarray3.push((Number((updatedData[this.localizationchartrange[i][1]])) * 100).toFixed(0));
          } else {
            this.jsonarray3.push((Number((updatedData.designThinkingCM[this.localizationchartrange[i][1]])) * 100).toFixed(0));
          }
        }
        this.localizationchart.series = [{ "name": '', "data": this.jsonarray3 },];
      }
    });
  }


  getSelection(inputField: string, index: number) {
    const ranges: { [key: string]: [number, number, string] } = {
      'batterylife': [0, 10, 'range between 0 to 10'],
      'Affordability': [0, 200000, 'range between 0 to 200000'],
      'localization': [0, 100, 'range between 0% to 100%']
    };

    if (ranges[inputField]) {
      const [min, max, errorMsg] = ranges[inputField];
      if (this.result[index] < min || this.result[index] > max) {
        this.result[index] = 0;
        this._alert.error(errorMsg);
      }
    }
    this.writeGameData();
  }

  writeGameData() {
    let apiname = '/designthinking/singleinputdesignthinking';
    let data = {
      "af7": this.result[0],
      "af8": this.result[1],
      "af9": Number(this.result[2]) / 100
    }

    this._api.writeGameData("designthinking", 3,
      data, apiname, 'designthinkingcmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.updateInputResValue();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  openDialog(): void {
    this.dialog.open(DesignthinkingfoodforthoughtComponent, {
      data: {},
    });
  }

}

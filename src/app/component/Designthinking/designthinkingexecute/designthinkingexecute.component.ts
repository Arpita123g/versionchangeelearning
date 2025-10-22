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
// import { barchart } from '../../ProductConsumerGame/consumerconceptualization/consumerconceptualization.component';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexNoData, ApexPlotOptions, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
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
  selector: 'app-designthinkingexecute',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule, NgApexchartsModule
    , FormsModule, MatIconModule, TippyDirective
  ],
  templateUrl: './designthinkingexecute.component.html',
  styleUrls: ['./designthinkingexecute.component.scss']
})
export class DesignthinkingexecuteComponent extends AbstractComponent {

  margininrchart: barChart;
  populationmillionchart: barChart;
  promotionbudgetinrchart: barChart;
  warrantyperiodvsattractivescorechart: barChart;
  channelattractivnesschart: barChart;
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  result: any = [];
  result1: any = [];
  trainingprioritiescheckbox: number = 0;
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


  databasecellname: any = ['af57', 'af58', 'af59', 'af60', 'af61', 'af62', 'af63'];

  periodcellname: any = [
    'ab7', 'ab8', 'ab9', 'ab42', 'ac42', 'ad42', 'ae42'
  ];

  populationgraph: any = [
    ['aa12', 'ab12'],
    ['aa13', 'ab13'],
    ['aa14', 'ab14']
  ]
  margingraph: any = [
    'c50', 'c51', 'c52'
  ]

  promotionbudgetgraph: any = [
    ['aa17', 'ab17', 'ac17', 'ad17'],
    ['aa18', 'ab18', 'ac18', 'ad18'],
    ['aa19', 'ab19', 'ac19', 'ad19'],
    ['aa20', 'ab20', 'ac20', 'ad20'],
    ['aa21', 'ab21', 'ac21', 'ad21'],
    ['aa22', 'ab22', 'ac22', 'ad22']
  ]

  warentyperiodgraph: any = [
    ['aa34', 'ab34'],
    ['aa35', 'ab35'],
    ['aa36', 'ab36'],
    ['aa37', 'ab37'],
    ['aa38', 'ab38'],
    ['aa39', 'ab39']
  ]

  channelsgraph: any = [
    ['aa42', 'ab42', 'ac42', 'ad42', 'ae42'],
    ['aa43', 'ab43', 'ac43', 'ad43', 'ae43'],
    ['aa44', 'ab44', 'ac44', 'ad44', 'ae44'],
    ['aa45', 'ab45', 'ac45', 'ad45', 'ae45'],
    ['aa46', 'ab46', 'ac46', 'ad46', 'ae46'],
    ['aa47', 'ab47', 'ac47', 'ad47', 'ae47'],
  ]
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.margininrchart = {
      series: [
        // {
        //   data: [18000, 16376.34, 1623.67,]
        // },
      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: false,
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
        categories: ['Price', 'Unit Cost', 'Margin'],
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
        text: "Margin, INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.populationmillionchart = {
      series: [
        // {
        //   data: [1400, 560, 56]
        // },
      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: false,
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
        categories: ['Total Population', ['Total Addressable',' Market '], ['Serviceable Available',' Market']],
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
        text: "Population, Million",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.promotionbudgetinrchart = {
      series: [
        // {
        //   name: 'Global Giant',
        //   data: [336, 672, 1008, 1344, 1680]
        // },
        // {
        //   name: 'Mid-sized International',
        //   data: [134, 201, 268, 336, 403]
        // },
        // {
        //   name: 'Local Player',
        //   data: [67, 100, 151, 201, 268]
        // },
      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: false,
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
        categories: ['Y1', 'Y2 ', 'Y3', 'Y4', 'Y5'],
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
        text: "Promotion Budget, INR Million",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.warrantyperiodvsattractivescorechart = {
      series: [
        // {
        //   data: [60, 75, 80, 90, 92, 93]
        // },

      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: false,
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
        categories: ['6 months', '12 months ', '18 months', '24 months', '36 months', ['More than', '3 years']],
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
        text: "Warranty Period vs Attractiveness Score",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.channelattractivnesschart = {
      series: [
        // {
        //   name: 'Distributor/Wholesaler',
        //   data: [68, 66, 65, 63, 61]
        // },
        // {
        //   name: 'E-commerce',
        //   data: [70, 75, 80, 85, 88]
        // },
        // {
        //   name: 'Telecom Partnerships',
        //   data: [60, 63, 65, 68, 70]
        // },
        // {
        //   name: 'Direct-to-consumer',
        //   data: [50, 52, 55, 60, 65]
        // },
      ],
      chart: {
        height: 250,
        type: "bar",
        stacked: false,
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
        categories: ['Y1', 'Y2 ', 'Y3', 'Y4', 'Y5'],
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
        text: "Channels, Attractiveness Score",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
  }

 
  months: string[] = [
    "6 months", "12 months", "18 months", "24 months", "36 months", "More than 3 years"];
  selectedMonth: string = '';
  override ngOnInit(): void {
    this.getFetchData();
  }

 
  getFetchData() {
    const apiname = '/designthinking/fetchdesignthinking';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: { status: string; resultList?: any[] }) => {
        if (data.status === 'Success' && data.resultList) {
            const result = data.resultList[0].designThinkingCM;

          // Update global case management ID
          this._global.casemanagementid.next(data.resultList[0].designthinkingcmid);

          // Update foodforthought status
          this.foodforthought = result.designThinkingCMActiveStatus.foodforthoughtstatus !== 'inactive';

          // Update result array
          
          for (let i = 0; i < this.periodcellname.length; i++) {
            this.result[i] = data.resultList[0].designThinkingCM[this.periodcellname[i]]
          }
          for (let i = 7; i < 14; i++) {
            this.result[i] = data.resultList[0][this.databasecellname[i - 7]]
          }

          this.updateInputResValue();

          // Check disable status
          if (['Yes', 'yes'].includes(data.resultList[0].af65) || this.timefinished) {
            this.checkdisable = true;
          }

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


  getSelection(inputField: string, index: number) {
    if (inputField == 'price') {
      if ((this.result[index] < 5000) || (this.result[index] > 35000)) {
        this.result[index] = 0;
        this._alert.error("range between 5000 to 35000")
      }
    } else if (inputField == 'advertising') {
      if ((this.result[index] < 100) || (this.result[index] > 1000)) {
        this.result[index] = 0;
        this._alert.error("range between 100 to 1000")
      }
    }
    else if (inputField == 'investment') {
      if ((this.result[index] < 100) || (this.result[index] > 1000)) {
        this.result[index] = 0;
        this._alert.error("range between 100 to 1000")
      }
    }
    this.writeGameData();
  }
  updateInputResValue() {
    const apiname = '/designthinking/fetchdesignthinking';

    this.jsonarray1 = [];
    this.jsonarray2 = [];
    this.jsonarray3 = [];
    this.jsonarray4 = [];
    this.jsonarray5 = [];
    this.jsonarray6 = [];
    this.jsonarray7 = [];
    this.jsonarray8 = [];
    this.jsonarray9 = [];
    this.jsonarray10 = [];

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
       

       

        for (let i = 0; i < this.populationgraph.length; i++) {
          this.jsonarray1.push(
            Number(updatedData.designThinkingCM[this.populationgraph[i][1]])
          );
        }
        this.populationmillionchart.series = [{ "name": '', "data":this.jsonarray1 },];

        for (let i = 0; i < this.margingraph.length; i++) {
          this.jsonarray2.push(Number(updatedData[this.margingraph[i]].toFixed(0)));
        }
        this.margininrchart.series = [{ "name": '', "data": this.jsonarray2 },];

        for (let i = 1; i < 6; i++) {
          this.jsonarray3.push(Number(updatedData.designThinkingCM[this.promotionbudgetgraph[i][1]])
          );
          this.jsonarray4.push(Number(updatedData.designThinkingCM[this.promotionbudgetgraph[i][2]])
          );
          this.jsonarray5.push(Number(updatedData.designThinkingCM[this.promotionbudgetgraph[i][3]])
          );
        }
        this.promotionbudgetinrchart.series = [
          { "name":updatedData.designThinkingCM[this.promotionbudgetgraph[0][1]], "data": this.jsonarray3 },
          { "name":updatedData.designThinkingCM[this.promotionbudgetgraph[0][2]], "data": this.jsonarray4 },
          { "name":updatedData.designThinkingCM[this.promotionbudgetgraph[0][3]], "data": this.jsonarray5 },];

        for (let i = 0; i < this.warentyperiodgraph.length; i++) {
          this.jsonarray6.push(
            Number(updatedData.designThinkingCM[this.warentyperiodgraph[i][1]])
          );
        }
        this.warrantyperiodvsattractivescorechart.series = [{ "name": '', "data": this.jsonarray6 },];

        for (let i = 1; i < 6; i++) {
          this.jsonarray7.push(Number(updatedData.designThinkingCM[this.channelsgraph[i][1]])
          );updatedData
          this. jsonarray8.push(Number(updatedData.designThinkingCM[this.channelsgraph[i][2]])
          );updatedData
          this.jsonarray9.push(Number(updatedData.designThinkingCM[this.channelsgraph[i][3]])
          );
          this.jsonarray10.push(Number(updatedData.designThinkingCM[this.channelsgraph[i][4]])
          );
        }
        this.channelattractivnesschart.series = [
          { "name":updatedData.designThinkingCM[this.channelsgraph[0][1]], "data": this.jsonarray7 },
          { "name":updatedData.designThinkingCM[this.channelsgraph[0][2]], "data": this.jsonarray8 },
          { "name":updatedData.designThinkingCM[this.channelsgraph[0][3]], "data": this.jsonarray9 },
          { "name":updatedData.designThinkingCM[this.channelsgraph[0][4]], "data": this.jsonarray10 },];
      }
    });
  }


  writeGameData() {
    let apiname = '/designthinking/singleinputdesignthinking';
    let data = {
      "af57": this.result[7],
      "af58": this.result[8],
      "af59": this.result[9],
      "af60": this.result[10],
      "af61": this.result[11],
      "af62": this.result[12],
      "af63": this.result[13],

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

import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  NgApexchartsModule,
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CrmgamefoodforthoughtComponent } from '../crmgamefoodforthought/crmgamefoodforthought.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}
@Component({
  selector: 'app-crmgameinformation',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './crmgameinformation.component.html',
  styleUrls: ['./crmgameinformation.component.scss']
})
export class CrmgameinformationComponent extends AbstractComponent {

  foodforthought: boolean = true;
  LeadConversionRate: barChart;
  PipelineVelocitydays: barChart;
  AverageLeadResponseTime: barChart;
  CustomerSatisfactionScore: barChart;
  CustomerServiceResponseRate: barChart;
  AverageResolutionTime: barChart;
  CustomerAcquisitionCost: barChart;
  Rate: barChart;
  AveragePurchaseOrder: barChart;
  Averagefrequencyper: barChart;
  LifeSpan: barChart;
  ChurnRate: barChart;
  TotalRevenue: barChart;
  RevenueDistributionIndustry: pieChart;
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
  jsonarray11: any = [];
  jsonarray12: any = [];
  jsonarray13: any = [];
  jsonarray14: any = [];
  jsonarray15: any = [];
  RevenueDistributionIndustrynames: any = [];

  dataoflang: any = [];
  hints: any = [];
  languageCell: any = [
    'b24', 'b25', 'b32',//2
    'b39', 'b42', 'b45', 'b47', 'b53',//7
    'b37', 'b38', 'b40', 'b41', 'b43', 'b44', 'b46', 'b48',
    'b49', 'b50', 'b51', 'b52', 'b54', //20
    'b36',

    'b45', 'b55', 'b56', 'b57', 'b58',
    'b59', 'b60', 'b61', 'b62', 'b63', 'b64', 'b65',
    'b66', 'b67', 'b68', 'b69', 'b70', 'b71', 'b72',
    'b73', 'b74', 'b75', 'b76', 'b77', 'b78'
  ];
  constructor(_router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.LeadConversionRate = {
      series: [],
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
        formatter: function (val) {
          return val + '%';
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          formatter: function (val) {
            return val + '%';
          },
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
        // text:this.dataoflang.b65,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.PipelineVelocitydays = {
      series: [],
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
        formatter: function (val) {
          return val + '';
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          formatter: function (val) {
            return val + '';
          },
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
        // text: this.dataoflang.b66,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.AverageLeadResponseTime = {
      series: [],
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
        formatter: function (val) {
          return val + '';
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          //   return val ;
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
        // text: this.dataoflang.b67,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.CustomerSatisfactionScore = {
      series: [],
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
        formatter: function (val) {
          return val + '%';
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          formatter: function (val) {
            return val + '%';
          },
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
        // text: this.dataoflang.b68,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.CustomerServiceResponseRate = {
      series: [],
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
        formatter: function (val) {
          return val + '%';
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          formatter: function (val) {
            return val + '%';
          },
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
        // text: this.dataoflang.b69,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.AverageResolutionTime = {
      series: [],
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
          "P1", "P2", "P3"
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
        // text: this.dataoflang.b70,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.Rate = {
      series: [],
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
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + '%';
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          formatter: function (val) {
            return val + '%';
          },
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
        // text: this.dataoflang.b71,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.CustomerAcquisitionCost = {
      series: [],
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
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val.toLocaleString();
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          formatter: function (val) {
            return val.toLocaleString();
          },
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
        // text:this.dataoflang.b72,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.AveragePurchaseOrder = {
      series: [],
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
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val.toLocaleString();
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          formatter: function (val) {
            return val.toLocaleString();
          },
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
        // text: this.dataoflang.b73,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.Averagefrequencyper = {
      series: [],
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
          columnWidth: '20%',
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
          "P1", "P2", "P3"
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
        // text:this.dataoflang.b74,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.LifeSpan = {
      series: [],
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
          columnWidth: '20%',
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
          "P1", "P2", "P3"
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
        // text:this.dataoflang.b75,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.ChurnRate = {
      series: [],
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
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + '%';
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          formatter: function (val) {
            return val + '%';
          },
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
        // text: this.dataoflang.b76,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
    this.TotalRevenue = {
      series: [],
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
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val.toLocaleString();
        },
      },
      xaxis: {
        categories: [
          "P1", "P2", "P3"
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
          formatter: function (val) {
            return val.toLocaleString();
          },
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
        // text: this.dataoflang.b77,
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
    this.RevenueDistributionIndustry = {
      series: [],
      chart: {
        width: 450,
        height: 350,
        type: 'pie',
        toolbar: {
          show: false,
        },
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center'
      },
      labels: [], // Ensure labels property is initialized
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      tooltip: {
        y: {
          // formatter: undefined,
          formatter: function (val) {
            return (val * 100).toFixed(0) + '%';  // Multiply the data labels by 100 and format it
          },
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false
        }
      },
      title: {
        // text: this.dataoflang.b78,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
  }

  LeadConversionRateData: any = [
    ["d8", "e8"],
    ["d9", "e9"],
    ["d10", "e10"],
  ];

  PipelineVelocitydaysData: any = [
    ["d13", "e13"],
    ["d14", "e14"],
    ["d15", "e15"],
  ];

  AverageLeadResponseTimeData: any = [
    ["d18", "e18"],
    ["d19", "e19"],
    ["d20", "e20"],
  ];

  CustomerSatisfactionScoreData: any = [
    ["d23", "e23"],
    ["d24", "e24"],
    ["d25", "e25"],
  ];

  CustomerServiceResponseRateData: any = [
    ["d28", "e28"],
    ["d29", "e29"],
    ["d30", "e30"],
  ];

  AverageResolutionTimeData: any = [
    ["d33", "e33"],
    ["d34", "e34"],
    ["d35", "e35"],
  ];

  RateData: any = [
    ["d38", "e38", "f38"],
    ["d39", "e39", "f39"],
    ["d40", "e40", "f40"],
  ];

  CustomerAcquisitionCostData: any = [
    ["d43", "e43"],
    ["d44", "e44"],
    ["d45", "e45"],
  ];

  AveragePurchaseOrderData: any = [
    ["d48", "e48"],
    ["d49", "e49"],
    ["d50", "e50"],
  ];

  AveragefrequencyperData: any = [
    ["d53", "e53"],
    ["d54", "e54"],
    ["d55", "e55"],
  ];

  LifeSpanData: any = [
    ["d58", "e58"],
    ["d59", "e59"],
    ["d60", "e60"],
  ];

  ChurnRateData: any = [
    ["d63", "e63"],
    ["d64", "e64"],
    ["d65", "e65"],
  ];

  TotalRevenueData: any = [
    ["d68", "e68"],
    ["d69", "e69"],
    ["d70", "e70"],
  ];

  RevenueDistributionIndustryData: any = [
    ["d73", "e73"],
    ["d74", "e74"],
    ["d75", "e75"],
  ];


  cardData: any = [
    {
      id: 'card1',
      // title: 'New Lead',
      // description: "New leads have been identified, but they are still in the early stages of the sales cycle. The company may need to conduct further qualification and discovery activities to determine their potential as customers.",
      title: 'b26',
      description: 'b55'
    },
    {
      id: 'card2',
      // title: 'Contacted',
      // description: "At this stage, leads have shown initial interest in the company's offerings. They may have filled out an online form, made an inquiry via email, or visited the company's booth at a trade show.",
      title: 'b27',
      description: 'b56'
    },
    {
      id: 'card3',
      // title: 'Follow-up Scheduled',
      // description: "Leads in this stage have been contacted by the company, and follow-up activities such as phone calls, emails, or meetings have been scheduled to further explore their requirements and move them through the sales process.",
      title: 'b28',
      description: 'b57'
    },
    {
      id: 'card4',
      // title: 'Proposal Sent',
      // description: "The company has submitted a formal proposal or quotation to the leads outlining the proposed solution, pricing, and terms. The leads are reviewing the proposal and evaluating whether it meets their needs.",
      title: 'b29',
      description: 'b58'
    },
    {
      id: 'card5',
      // title: 'Closed-Won',
      // description: "This stage indicates that the company has successfully closed the deal and won the business from the leads. Contracts may have been signed, and the implementation process may be underway.",
      title: 'b30',
      description: 'b59'
    },
    {
      id: 'card6',
      // title: 'Closed-Lost',
      // description: "Leads in this stage have decided not to move forward with the company's proposal. The deal has been lost, and the company may have identified reasons for the loss to inform future sales efforts.",
      title: 'b31',
      description: 'b60'
    },

  ];
  cardData2: any = [
    {
      id: 'card1',
      // title: 'Awareness',
      // description: "This stage represents the beginning of the sales journey, where leads become aware of the company and its offerings but have not yet progressed to active engagement or consideration.",
      title: 'b32',
      description: 'b61'
    },
    {
      id: 'card2',
      // title: 'Interest',
      // description: "This stage represents the beginning of the sales cycle, where leads express interest in learning more about the product or service.",
      title: 'b33',
      description: 'b62'
    },
    {
      id: 'card3',
      // title: 'Action',
      // description: "This stage indicates a higher level of engagement and involvement in the sales process.",
      title: 'b34',
      description: 'b63'
    },
    {
      id: 'card4',
      // title: 'Decision',
      // description: "This stage may involve evaluating the benefits, features, and pricing of the offering, as well as addressing any concerns or objections raised by the leads.",
      title: 'b35',
      description: 'b64'
    },
  ];
  graphTitle:string = "";

  override ngOnInit(): void {
    this.getFetchData();
  }


  getFetchData() {
    // this.checkloading = true;
    let apiname = '/crmgame/fetchcrmgame';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
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
              this.jsonarray8 = [];
              this.jsonarray9 = [];
              this.jsonarray10 = [];
              this.jsonarray11 = [];
              this.jsonarray12 = [];
              this.jsonarray13 = [];
              this.jsonarray14 = [];
              this.jsonarray15 = [];

              // this.LeadConversionRate.title.text = 'Lead Conversion Rate';
              this.graphTitle = this.dataoflang.b65;
              this.cdr.detectChanges(); 
              this._global.casemanagementid.next(data.resultList[0].crmgamecmid);
              if (data.resultList[0].crmGameCM.crmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.dataoflang = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()];
             
              this.RevenueDistributionIndustry = {
                ...this.RevenueDistributionIndustry, // Retain existing config
                labels: [
                  this.dataoflang.b129,
                  this.dataoflang.b130,
                  this.dataoflang.b131,
                ],
               
              
            
              };
                const chartTitles = [
                { chart: 'LeadConversionRate', text: this.dataoflang.b65 },
                { chart: 'PipelineVelocitydays', text: this.dataoflang.b66 },
                { chart: 'AverageLeadResponseTime', text: this.dataoflang.b67 },
                { chart: 'CustomerSatisfactionScore', text: this.dataoflang.b68 },
                { chart: 'CustomerServiceResponseRate', text: this.dataoflang.b69 },
                { chart: 'AverageResolutionTime', text: this.dataoflang.b70 },
                { chart: 'CustomerAcquisitionCost', text: this.dataoflang.b71 },
                { chart: 'Rate', text: this.dataoflang.b72 },
                { chart: 'AveragePurchaseOrder', text: this.dataoflang.b73 },
                { chart: 'Averagefrequencyper', text: this.dataoflang.b74 },
                { chart: 'LifeSpan', text: this.dataoflang.b75 },
                { chart: 'ChurnRate', text: this.dataoflang.b76 },
                { chart: 'TotalRevenue', text: this.dataoflang.b77 },
                { chart: 'RevenueDistributionIndustry', text: this.dataoflang.b78 },
                ];

                chartTitles.forEach(({ chart, text }) => {
                (this as any)[chart] = {
                  ...(this[chart as keyof CrmgameinformationComponent] as barChart), // Retain existing config
                  title: {
                  text,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  },
                  },
                };
                });

              // leadLeadConversionRate bar ..
              for (let i = 0; i < 3; i++) {
                this.jsonarray1.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.LeadConversionRateData[i][1]]) * 100).toFixed(0));
              }
              this.LeadConversionRate.series = [
                { "name": "", "data": this.jsonarray1 }
              ];
             

              // PipelineVelocitydays bar ..
              for (let i = 0; i < this.PipelineVelocitydaysData.length; i++) {
                this.jsonarray2.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.PipelineVelocitydaysData[i][1]])));
              }
              this.PipelineVelocitydays.series = [
                { "name": "", "data": this.jsonarray2 }
              ];

              // AverageLeadResponseTime bar ..
              for (let i = 0; i < this.AverageLeadResponseTimeData.length; i++) {
                this.jsonarray3.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.AverageLeadResponseTimeData[i][1]])));
              }
              this.AverageLeadResponseTime.series = [
                { "name": "", "data": this.jsonarray3 }
              ];

              // CustomerSatisfactionScore bar ..
              for (let i = 0; i < this.CustomerSatisfactionScoreData.length; i++) {
                this.jsonarray4.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.CustomerSatisfactionScoreData[i][1]]) * 100).toFixed(0));
              }
              this.CustomerSatisfactionScore.series = [
                { "name": "", "data": this.jsonarray4 }
              ];

              // CustomerServiceResponseRate bar ..
              for (let i = 0; i < this.CustomerServiceResponseRateData.length; i++) {
                this.jsonarray5.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.CustomerServiceResponseRateData[i][1]]) * 100).toFixed(0));
              }
              this.CustomerServiceResponseRate.series = [
                { "name": "", "data": this.jsonarray5 }
              ];

              // AverageResolutionTime bar..
              for (let i = 0; i < this.AverageResolutionTimeData.length; i++) {
                this.jsonarray6.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.AverageResolutionTimeData[i][1]])));
              }
              this.AverageResolutionTime.series = [
                { "name": "", "data": this.jsonarray6 }
              ];

              // Rata bar ..
              for (let i = 0; i < this.RateData.length; i++) {
                this.jsonarray7.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.RateData[i][1]]) * 100).toFixed(0));
                this.jsonarray8.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.RateData[i][2]]) * 100).toFixed(0));
              }
              this.Rate.series = [
                { "name": this.dataoflang.b392, "data": this.jsonarray7 }, { "name": this.dataoflang.b393, "data": this.jsonarray8 }
              ];

              // CustomerAcquisitionCost rate bar..
              for (let i = 0; i < this.CustomerAcquisitionCostData.length; i++) {
                this.jsonarray9.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.CustomerAcquisitionCostData[i][1]])));
              }
              this.CustomerAcquisitionCost.series = [
                { "name": "", "data": this.jsonarray9 }
              ];

              // AveragePurchaseOrder bar ..
              for (let i = 0; i < this.AveragePurchaseOrderData.length; i++) {
                this.jsonarray10.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.AveragePurchaseOrderData[i][1]])));
              }
              this.AveragePurchaseOrder.series = [
                { "name": "", "data": this.jsonarray10 }
              ];

              // Averagefrequencyper bar ..
              for (let i = 0; i < this.AveragefrequencyperData.length; i++) {
                this.jsonarray11.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.AveragefrequencyperData[i][1]])));
              }
              this.Averagefrequencyper.series = [
                { "name": "", "data": this.jsonarray11 }
              ];

              // LifeSpan bar ..
              for (let i = 0; i < this.LifeSpanData.length; i++) {
                this.jsonarray12.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.LifeSpanData[i][1]])));
              }
              this.LifeSpan.series = [
                { "name": "", "data": this.jsonarray12 }
              ];

              // ChurnRate bar ..
              for (let i = 0; i < this.ChurnRateData.length; i++) {
                this.jsonarray13.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.ChurnRateData[i][1]]) * 100).toFixed(0));
              }
              this.ChurnRate.series = [
                { "name": "", "data": this.jsonarray13 }
              ];

              // TotalRevenue bar ..
              for (let i = 0; i < this.TotalRevenueData.length; i++) {
                this.jsonarray14.push((Number(data.resultList[0].crmGameCM.crmgameperioddata[this.TotalRevenueData[i][1]])));
              }
              this.TotalRevenue.series = [
                { "name": "", "data": this.jsonarray14 }
              ];

              // RevenueDistributionIndustry pie ..
              for (let i = 0; i < this.RevenueDistributionIndustryData.length; i++) {
                this.RevenueDistributionIndustrynames[i] = data.resultList[0].crmGameCM.crmgameperioddata[this.RevenueDistributionIndustryData[i][0]];
                this.jsonarray15[i] = Number(data.resultList[0].crmGameCM.crmgameperioddata[this.RevenueDistributionIndustryData[i][1]]);
              };
              this.RevenueDistributionIndustry.series = this.jsonarray15;
              // this.RevenueDistributionIndustry.labels = this.RevenueDistributionIndustrynames;

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


  openDialog(): void {
    this.dialog.open(CrmgamefoodforthoughtComponent, {
      data: {},
    });
  }
}

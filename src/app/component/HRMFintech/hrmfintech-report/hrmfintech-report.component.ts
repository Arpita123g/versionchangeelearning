import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { HrmsheetService } from 'src/app/service/sheet/hrm/hrmsheet.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
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
  selector: 'app-hrmfintech-report',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule,MatDialogModule],
  templateUrl: './hrmfintech-report.component.html',
  styleUrls: ['./hrmfintech-report.component.scss']
})
export class HrmfintechReportComponent extends AbstractComponent {
  retry: string = "";
  isButtonDisabled: boolean = false;
  roundname: string = "";
  dropdownvalue: any = [];
  numberofattempts: number = 0;
  // optionalcase: any = ['sale', 'Product & Engineering', 'Customer Support', 'Design & Communication'];
  optionalcase: any = ['sale', 'productengstatus', 'customersuccessstatus', 'designcommunicationstatus', "foodforthoughtstatus"];

  constoftoolsseries: barChart = {
    series: [
      {
        name: "Performance and Goal Measurement Tool",
        data: []
      },

    ],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return val + "";
      },
    },
    xaxis: {
      categories: [['Performance', 'and  Goal', ' Measurement', ' Tool'], ['Recruitment', ' Analysis', ' Tool'],
      ['Workforce', ' Analytics', ' Tool'], ['Process', ' Content', ' & ', 'Guidance', ' Tool'], ['Total cost', 'for', 'the Effectiveness', ' Tool']],
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
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
        formatter: function (val: any) {
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
      text: "Tool ownership cost, k INR",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };
  increaseofeffectivenessseries: barChart = {
    series: [
      {
        name: "value",
        data: []
      },
    ],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return val + "";
      },
    },
    xaxis: {
      categories: [['Perfromance &', ' Goal Tool'], ['Rectruitment', ' Tool'], ['Workforce', ' Analytics', ' Tool'],
      ['Process Content', ' & ', 'Guidance Tool']],
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
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
        formatter: function (val: any) {
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
      text: "Effectiveness increment %",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };

  communicationeffectivenessseries: barChart = {
    series: [],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return (val).toFixed(0) + "%";
      },
    },
    xaxis: {

    },
    fill: {
      type: 'solid',
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (val: any) {
          return (val).toFixed(0) + "%";
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
      text: "Communication effectiveness increment %",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };
  genderdiversityseries: barChart = {
    series: [],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return (val).toFixed(2) + "%";
      },
    },
    xaxis: {
      // categories: [],
      // position: "bottom",
      // labels: {
      //   offsetY: 0,
      //   rotate: 0,
      //   show: true,
      //   hideOverlappingLabels: false,
      //   trim: false,
      // },
      // axisBorder: {
      //   show: true
      // },
      // axisTicks: {
      //   show: true
      // },
      // crosshairs: {},
      // tooltip: {
      //   enabled: false,
      //   offsetY: -35
      // }
    },
    fill: {
      type: 'solid',
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (val: any) {
          return (val).toFixed(2) + "%";
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
      text: "Gender Diversity Ratio, %",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };
  awarenesslevelseries: barChart = {
    series: [],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return (val).toFixed(0) + "%";
      },
    },
    xaxis: {
      // categories: [],
      // position: "bottom",
      // labels: {
      //   offsetY: 0,
      //   rotate: 0,
      //   show: true,
      //   hideOverlappingLabels: false,
      //   trim: false,
      // },
      // axisBorder: {
      //   show: true
      // },
      // axisTicks: {
      //   show: true
      // },
      // crosshairs: {},
      // tooltip: {
      //   enabled: false,
      //   offsetY: -35
      // }
    },
    fill: {
      type: 'solid',
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (val: any) {
          return (val).toFixed(0) + "%";
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
      text: "Awareness level %",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };
  commitmentlevelseries: barChart = {
    series: [],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return val + "";
      },
    },
    xaxis: {
      // categories: [],
      // position: "bottom",
      // labels: {
      //   offsetY: 0,
      //   rotate: 0,
      //   show: true,
      //   hideOverlappingLabels: false,
      //   trim: false,
      // },
      // axisBorder: {
      //   show: true
      // },
      // axisTicks: {
      //   show: true
      // },
      // crosshairs: {},
      // tooltip: {
      //   enabled: false,
      //   offsetY: -35
      // }
    },
    fill: {
      type: 'solid',
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (val: any) {
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
      text: "Commitment level %",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };
  employeeengagementseries: barChart = {
    series: [],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return (val).toFixed(2) + "";
      },
    },
    xaxis: {
      // categories: [],
      // position: "bottom",
      // labels: {
      //   offsetY: 0,
      //   rotate: 0,
      //   show: true,
      //   hideOverlappingLabels: false,
      //   trim: false,
      // },
      // axisBorder: {
      //   show: true
      // },
      // axisTicks: {
      //   show: true
      // },
      // crosshairs: {},
      // tooltip: {
      //   enabled: false,
      //   offsetY: -35
      // }
    },
    fill: {
      type: 'solid',
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (val: any) {
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
      text: "Engagement score, Max 5",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };
  costoflearningseries: barChart = {
    series: [],
    chart: {
      height: 400,
      type: "bar",
      stacked: true,
      // stackType: "100%"
    },
    noData: this.nodata[0],
    plotOptions: {
      bar: {
        dataLabels: {
          position: "center",
        },
        horizontal: true,
        // columnWidth: "40%",

      }
    },
    dataLabels: {
      enabled: false,
      formatter: function (val: any) {
        return val + "";
      },
    },
    xaxis: {
    },
    fill: {
      type: 'solid',
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (val: any) {
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
      text: "L&D cost, k INR",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };
  rigorcharts: RadarChart = {
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
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },

  };

  rigorchartsrange = [
    ['Rigor', 'i368', '82', '45'],
    ['Structuring', 'i369', '84', '47'],
    ['Synthesis', 'i370', '85', '43'],
    ['Business Judgement', 'i371', '82', '42'],
  ];
  performancelevelseries: barChart = {
    series: [],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return (val).toFixed(0) + "%";
      },
    },
    xaxis: {

    },
    fill: {
      type: 'solid',
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (val: any) {
          return (val).toFixed(0) + "%";
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
      text: "Performance increment %",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };
  emloyeesatisfactionseries: barChart = {
    series: [

    ],
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
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
      formatter: function (val: any) {
        return (val).toFixed(2) + "";
      },
    },
    xaxis: {

    },
    fill: {
      type: 'solid',
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (val: any) {
          return (val).toFixed(2) + "";
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
      text: "Satisfaction Score, Max 5",
      offsetY: 0,
      align: "center",
      style: {
        fontWeight: "bold",
      }
    }
  };
  costoftoolstable: any = [
    { title: "Performance and Goal Measurement Tool", cell: ["e6", "e11", "e16", "e21", "e26", "e31"] },
    { title: "Recruitment Analysis Tool", cell: ["e7", "e12", "e17", "e22", "e27", "e32"] },
    { title: "Workforce Analytics Tool", cell: ["e8", "e13", "e18", "e23", "e28", "e33"] },
    { title: "Process Content & Guidance Tool", cell: ["e9", "e14", "e19", "e24", "e29", "e34"] },
    { title: "Total cost for the Effectiveness Tool", cell: ["e10", "e15", "e20", "e25", "e30", "e35"] },
  ]
  increaseofeffectiveness: any = [
    { title: "Perfromance & Goal Tool", cell: ["e41", "e45", "e49", "e53", "e57", "e61"] },
    { title: "Rectruitment Tool", cell: ["e42", "e46", "e50", "e54", "e58", "e62"] },
    { title: "Workforce Analytics Tool", cell: ["e43", "e47", "e51", "e55", "e59", "e63"] },
    { title: "Process Content & Guidance Tool", cell: ["e44", "e48", "e52", "e56", "e60", "e64"] }
  ];
  PerformanceLevelIncrementORG: any = [
    { title: "Performance effectiveness level", cell: ["e69", "e70", "e71", "e72", "e73", "e74"] },
  ];

  employerbrandingchanneltable: any = [
    { title: "Top Management", cell: [["e6", "e9", "e12", "e15", "e18", "e21"], ["f6", "f9", "f12", "f15", "f18", "f21"], ["g6", "g9", "g12", "g15", "g18", "g21"], ["h6", "h9", "h12", "h15", "h18", "h21"]] },
    { title: "Senior Management", cell: [["e7", "e10", "e13", "e16", "e19", "e22"], ["f7", "f10", "f13", "f16", "f19", "f22"], ["g7", "g10", "g13", "g16", "g19", "g22"], ["h7", "h10", "h13", "h16", "h19", "h22"]] },
    { title: "Junior Management", cell: [["e8", "e11", "e14", "e17", "e20", "e23"], ["f8", "f11", "f14", "f17", "f20", "f23"], ["g8", "g11", "g14", "g17", "g20", "g23"], ["h8", "h11", "h14", "h17", "h20", "h23"]] },
  ]
  noofemployeestable: any = [
    { title: "Top Management, Permanent", cell: [["e29", "e46", "e63", "e80", "e97", "e114"], ["f29", "f46", "f63", "f80", "f97", "f114"], ["g29", "g46", "g63", "g80", "g97", "g114"], ["h29", "h46", "h63", "h80", "h97", "h114"],] },
    { title: "Senior Management, Permanent", cell: [["e30", "e47", "e64", "e81", "e98", "e115"], ["f30", "f47", "f64", "f81", "f98", "f115"], ["g30", "g47", "g64", "g81", "g98", "g115"], ["h30", "h47", "h64", "h81", "h98", "h115"],] },
    { title: "Junior Management, Permanent", cell: [["e31", "e48", "e65", "e82", "e99", "e116"], ["f31", "f48", "f65", "f82", "f99", "f116"], ["g31", "g48", "g65", "g82", "g99", "g116"], ["h31", "h48", "h65", "h82", "h99", "h116"],] },
    { title: "Junior Management, Outsourced", cell: [["e32", "e49", "e66", "e83", "e100", "e117"], ["f32", "f49", "f66", "f83", "f100", "f117"], ["g32", "g49", "g66", "g83", "g100", "g117"], ["h32", "h49", "h66", "h83", "h100", "h117"],] },
    { title: "Top Management, Newly Hired", cell: [["e33", "e50", "e67", "e84", "e101", "e118"], ["f33", "f50", "f67", "f84", "f101", "f118"], ["g33", "g50", "g67", "g84", "g101", "g118"], ["h33", "h50", "h67", "h84", "h101", "h118"],] },
    { title: "Senior Management, Newly Hired", cell: [["e34", "e51", "e68", "e85", "e102", "e119"], ["f34", "f51", "f68", "f85", "f102", "f119"], ["g34", "g51", "g68", "g85", "g102", "g119"], ["h34", "h51", "h68", "h85", "h102", "h119"],] },
    { title: "Junior Management, Newly Hired", cell: [["e35", "e52", "e69", "e86", "e103", "e120"], ["f35", "f52", "f69", "f86", "f103", "f120"], ["g35", "g52", "g69", "g86", "g103", "g120"], ["h35", "h52", "h69", "h86", "h103", "h120"],] },
    { title: "Top Management, Voluntary Resignation", cell: [["e36", "e53", "e70", "e87", "e104", "e121"], ["f36", "f53", "f70", "f87", "f104", "f121"], ["g36", "g53", "g70", "g87", "g104", "g121"], ["h36", "h53", "h70", "h87", "h104", "h121"],] },
    { title: "Senior Management, Voluntary Resignation", cell: [["e37", "e54", "e71", "e88", "e105", "e122"], ["f37", "f54", "f71", "f88", "f105", "f122"], ["g37", "g54", "g71", "g88", "g105", "g122"], ["h37", "h54", "h71", "h88", "h105", "h122"],] },
    { title: "Junior Management, Voluntary Resignation", cell: [["e38", "e55", "e72", "e89", "e106", "e123"], ["f38", "f55", "f72", "f89", "f106", "f123"], ["g38", "g55", "g72", "g89", "g106", "g123"], ["h38", "h55", "h72", "h89", "h106", "h123"],] },
    { title: "Top Management, Retrenchment", cell: [["e39", "e56", "e73", "e90", "e107", "e124"], ["f39", "f56", "f73", "f90", "f107", "f124"], ["g39", "g56", "g73", "g90", "g107", "g124"], ["h39", "h56", "h73", "h90", "h107", "h124"],] },
    { title: "Senior Management, Retrenchment", cell: [["e40", "e57", "e74", "e91", "e108", "e125"], ["f40", "f57", "f74", "f91", "f108", "f125"], ["g40", "g57", "g74", "g91", "g108", "g125"], ["h40", "h57", "h74", "h91", "h108", "h125"],] },
    { title: "Junior Management, Retrenchment", cell: [["e41", "e58", "e75", "e92", "e109", "e126"], ["f41", "f58", "f75", "f92", "f109", "f126"], ["g41", "g58", "g75", "g92", "g109", "g126"], ["h41", "h58", "h75", "h92", "h109", "h126"],] },
    { title: "Top Management, Total Employees", cell: [["e42", "e59", "e76", "e93", "e110", "e127"], ["f42", "f59", "f76", "f93", "f110", "f127"], ["g42", "g59", "g76", "g93", "g110", "g127"], ["h42", "h59", "h76", "h93", "h110", "h127"],] },
    { title: "Senior Management, Total Employees", cell: [["e43", "e60", "e77", "e94", "e111", "e128"], ["f43", "f60", "f77", "f94", "f111", "f128"], ["g43", "g60", "g77", "g94", "g111", "g128"], ["h43", "h60", "h77", "h94", "h111", "h128"],] },
    { title: "Junior Management, Total Employees", cell: [["e44", "e61", "e78", "e95", "e112", "e129"], ["f44", "f61", "f78", "f95", "f112", "f129"], ["g44", "g61", "g78", "g95", "g112", "g129"], ["h44", "h61", "h78", "h95", "h112", "h129"],] },
    { title: "Total Number of Employees", cell: [["e45", "e62", "e79", "e96", "e113", "e130"], ["f45", "f62", "f79", "f96", "f113", "f130"], ["g45", "g62", "g79", "g96", "g113", "g130"], ["h45", "h62", "h79", "h96", "h113", "h130"]] },
  ]
  genderdiversitytable: any = [
    { title: "Top Management", cell: [["e135", "e138", "e141", "e144", "e147", "e150"], ["f135", "f138", "f141", "f144", "f147", "f150"], ["g135", "g138", "g141", "g144", "g147", "g150"], ["h135", "h138", "h141", "h144", "h147", "h150"],] },
    { title: "Senior Management", cell: [["e136", "e139", "e142", "e145", "e148", "e151"], ["f136", "f139", "f142", "f145", "f148", "f151"], ["g136", "g139", "g142", "g145", "g148", "g151"], ["h136", "h139", "h142", "h145", "h148", "h151"],] },
    { title: "Junior Management", cell: [["e137", "e140", "e143", "e146", "e149", "e152"], ["f137", "f140", "f143", "f146", "f149", "f152"], ["g137", "g140", "g143", "g146", "g149", "g152"], ["h137", "h140", "h143", "h146", "h149", "h152"]] },
  ]
  costofrecruitmenttable: any = [
    { title: "Top Management, Channel Cost", cell: [["e157", "e166", "e175", "e184", "e193", "e202"], ["f157", "f166", "f175", "f184", "f193", "f202"], ["g157", "g166", "g175", "g184", "g193", "g202"], ["h157", "h166", "h175", "h184", "h193", "h202"]] },
    { title: "Senior Management, Channel Cost", cell: [["e158", "e167", "e176", "e185", "e194", "e203"], ["f158", "f167", "f176", "f185", "f194", "f203"], ["g158", "g167", "g176", "g185", "g194", "g203"], ["h158", "h167", "h176", "h185", "h194", "h203"]] },
    { title: "Junior Management, Channel Cost", cell: [["e159", "e168", "e177", "e186", "e195", "e204"], ["f159", "f168", "f177", "f186", "f195", "f204"], ["g159", "g168", "g177", "g186", "g195", "g204"], ["h159", "h168", "h177", "h186", "h195", "h204"]] },
    { title: "Top Management, Vendor Cost", cell: [["e160", "e169", "e178", "e187", "e196", "e205"], ["f160", "f169", "f178", "f187", "f196", "f205"], ["g160", "g169", "g178", "g187", "g196", "g205"], ["h160", "h169", "h178", "h187", "h196", "h205"]] },
    { title: "Senior Management, Vendor Cost", cell: [["e161", "e170", "e179", "e188", "e197", "e206"], ["f161", "f170", "f179", "f188", "f197", "f206"], ["g161", "g170", "g179", "g188", "g197", "g206"], ["h161", "h170", "h179", "h188", "h197", "h206"]] },
    { title: "Junior Management, Outsourcing Cost", cell: [["e162", "e171", "e180", "e189", "e198", "e207"], ["f162", "f171", "f180", "f189", "f198", "f207"], ["g162", "g171", "g180", "g189", "g198", "g207"], ["h162", "h171", "h180", "h189", "h198", "h207"]] },
    { title: "Total Hiring Cost", cell: [["e163", "e172", "e181", "e190", "e199", "e208"], ["f163", "f172", "f181", "f190", "f199", "f208"], ["g163", "g172", "g181", "g190", "g199", "g208"], ["h163", "h172", "h181", "h190", "h199", "h208"]] },
    { title: "Total Retrenchment Cost", cell: [["e164", "e173", "e182", "e191", "e200", "e209"], ["f164", "f173", "f182", "f191", "f200", "f209"], ["g164", "g173", "g182", "g191", "g200", "g209"], ["h164", "h173", "h182", "h191", "h200", "h209"]] },
    { title: "Total Salary Cost of Permanent Employee", cell: [["e165", "e174", "e183", "e192", "e201", "e210"], ["f165", "f174", "f183", "f192", "f201", "f210"], ["g165", "g174", "g183", "g192", "g201", "g210"], ["h165", "h174", "h183", "h192", "h201", "h210"]] },
  ]
  recruitmentmatrixtable: any = [
    { title: "Top Management, Attrition Rate", cell: [["e215", "e224", "e233", "e242", "e251", "e260"], ["f215", "f224", "f233", "f242", "f251", "f260"], ["g215", "g224", "g233", "g242", "g251", "g260"], ["h215", "h224", "h233", "h242", "h251", "h260"]] },
    { title: "Senior Management, Attrition Rate", cell: [["e216", "e225", "e234", "e243", "e252", "e261"], ["f216", "f225", "f234", "f243", "f252", "f261"], ["g216", "g225", "g234", "g243", "g252", "g261"], ["h216", "h225", "h234", "h243", "h252", "h261"]] },
    { title: "Junior Management, Attrition Rate", cell: [["e217", "e226", "e235", "e244", "e253", "e262"], ["f217", "f226", "f235", "f244", "f253", "f262"], ["g217", "g226", "g235", "g244", "g253", "g262"], ["h217", "h226", "h235", "h244", "h253", "h262"]] },
    { title: "Top Management, Offer Dropouts", cell: [["e218", "e227", "e236", "e245", "e254", "e263"], ["f218", "f227", "f236", "f245", "f254", "f263"], ["g218", "g227", "g236", "g245", "g254", "g263"], ["h218", "h227", "h236", "h245", "h254", "h263"]] },
    { title: "Senior Management, Offer Dropouts", cell: [["e219", "e228", "e237", "e246", "e255", "e264"], ["f219", "f228", "f237", "f246", "f255", "f264"], ["g219", "g228", "g237", "g246", "g255", "g264"], ["h219", "h228", "h237", "h246", "h255", "h264"]] },
    { title: "Junior Management, Offer Dropouts", cell: [["e220", "e229", "e238", "e247", "e256", "e265"], ["f220", "f229", "f238", "f247", "f256", "f265"], ["g220", "g229", "g238", "g247", "g256", "g265"], ["h220", "h229", "h238", "h247", "h256", "h265"]] },
    { title: "Top Management, Recruitment Metrics", cell: [["e221", "e230", "e239", "e248", "e257", "e266"], ["f221", "f230", "f239", "f248", "f257", "f266"], ["g221", "g230", "g239", "g248", "g257", "g266"], ["h221", "h230", "h239", "h248", "h257", "h266"]] },
    { title: "Senior Management, Recruitment Metrics", cell: [["e222", "e231", "e240", "e249", "e258", "e267"], ["f222", "f231", "f240", "f249", "f258", "f267"], ["g222", "g231", "g240", "g249", "g258", "g267"], ["h222", "h231", "h240", "h249", "h258", "h267"]] },
    { title: "Junior Management, Recruitment Metrics", cell: [["e223", "e232", "e241", "e250", "e259", "e268"], ["f223", "f232", "f241", "f250", "f259", "f268"], ["g223", "g232", "g241", "g250", "g259", "g268"], ["h223", "h232", "h241", "h250", "h259", "h268"]] },
  ]
  awarenessleveltable: any = [
    { title: "Top Management", cell: [["e6", "e9", "e12", "e15", "e18", "e21"], ["f6", "f9", "f12", "f15", "f18", "f21"], ["g6", "g9", "g12", "g15", "g18", "g21"], ["h6", "h9", "h12", "h15", "h18", "h21"]] },
    { title: "Senior Management", cell: [["e7", "e10", "e13", "e16", "e19", "e22"], ["f7", "f10", "f13", "f16", "f19", "f22"], ["g7", "g10", "g13", "g16", "g19", "g22"], ["h7", "h10", "h13", "h16", "h19", "h22"]] },
    { title: "Junior Management", cell: [["e8", "e11", "e14", "e17", "e20", "e23"], ["f8", "f11", "f14", "f17", "f20", "f23"], ["g8", "g11", "g14", "g17", "g20", "g23"], ["h8", "h11", "h14", "h17", "h20", "h23"]] },
  ]
  commitmentleveltable: any = [
    { title: "Top Management", cell: [["e29", "e32", "e35", "e38", "e41", "e44",], ["f29", "f32", "f35", "f38", "f41", "f44"], ["g29", "g32", "g35", "g38", "g41", "g44"], ["h29", "h32", "h35", "h38", "h41", "h44",]] },
    { title: "Senior Management", cell: [["e30", "e33", "e36", "e39", "e42", "e45",], ["f30", "f33", "f36", "f39", "f42", "f45"], ["g30", "g33", "g36", "g39", "g42", "g45"], ["h30", "h33", "h36", "h39", "h42", "h45",]] },
    { title: "Junior Management", cell: [["e31", "e34", "e37", "e40", "e43", "e46",], ["f31", "f34", "f37", "f40", "f43", "f46"], ["g31", "g34", "g37", "g40", "g43", "g46"], ["h31", "h34", "h37", "h40", "h43", "h46",]] },
  ]
  employeeengagementtable: any = [
    { title: "Top Management", cell: [["e52", "e55", "e58", "e61", "e64", "e67",], ["f52", "f55", "f58", "f61", "f64", "f67"], ["g52", "g55", "g58", "g61", "g64", "g67"], ["h52", "h55", "h58", "h61", "h64", "h67",]] },
    { title: "Senior Management", cell: [["e53", "e56", "e59", "e62", "e65", "e68",], ["f53", "f56", "f59", "f62", "f65", "f68"], ["g53", "g56", "g59", "g62", "g65", "g68"], ["h53", "h56", "h59", "h62", "h65", "h68",]] },
    { title: "Junior Management", cell: [["e54", "e57", "e60", "e63", "e66", "e69",], ["f54", "f57", "f60", "f63", "f66", "f69"], ["g54", "g57", "g60", "g63", "g66", "g69"], ["h54", "h57", "h60", "h63", "h66", "h69",]] },
  ]
  costoflearningtable: any = [
    { title: "Training of Employees", cell: [["e75", "e81", "e87", "e93", "e99", "e105",], ["f75", "f81", "f87", "f93", "f99", "f105"], ["g75", "g81", "g87", "g93", "g99", "g105"], ["h75", "h81", "h87", "h93", "h99", "h105",]] },
    { title: "Townhall Programme", cell: [["e76", "e82", "e88", "e94", "e100", "e106",], ["f76", "f82", "f88", "f94", "f100", "f106"], ["g76", "g82", "g88", "g94", "g100", "g106"], ["h76", "h82", "h88", "h94", "h100", "h106",]] },
    { title: "Future Leadership Programme", cell: [["e77", "e83", "e89", "e95", "e101", "e107",], ["f77", "f83", "f89", "f95", "f101", "f107"], ["g77", "g83", "g89", "g95", "g101", "g107"], ["h77", "h83", "h89", "h95", "h101", "h107",]] },
    { title: "Gender Diversity Policy Cost", cell: [["e78", "e84", "e90", "e96", "e102", "e108",], ["f78", "f84", "f90", "f96", "f102", "f108"], ["g78", "g84", "g90", "g96", "g102", "g108"], ["h78", "h84", "h90", "h96", "h102", "h108",]] },
    { title: "Divisional Policy Cost", cell: [["e79", "e85", "e91", "e97", "e103", "e109",], ["f79", "f85", "f91", "f97", "f103", "f109"], ["g79", "g85", "g91", "g97", "g103", "g109"], ["h79", "h85", "h91", "h97", "h103", "h109",]] },
    { title: "Total Learning & Management Cost", cell: [["e80", "e86", "e92", "e98", "e104", "e110",], ["f80", "f86", "f92", "f98", "f104", "f110"], ["g80", "g86", "g92", "g98", "g104", "g110"], ["h80", "h86", "h92", "h98", "h104", "h110",]] },
  ]

  learningindextable: any = [
    { title: "Manpower went through training, %", cell: [["e115", "e116", "e117", "e118", "e119", "e120",], ["f115", "f116", "f117", "f118", "f119", "f120"], ["g115", "g116", "g117", "g118", "g119", "g120"], ["h115", "h116", "h117", "h118", "h119", "h120",]] },
    { title: "Mandays of training, persondays", cell: [["e121", "e122", "e123", "e124", "e125", "e126",], ["f121", "f122", "f123", "f124", "f125", "f126"], ["g121", "g122", "g123", "g124", "g125", "g126"], ["h121", "h122", "h123", "h124", "h125", "h126",]] },
  ]

  performanceleveltable: any = [
    { title: "Top Management", cell: [["e6", "e9", "e12", "e15", "e18", "e21"], ["f6", "f9", "f12", "f15", "f18", "f21"], ["g6", "g9", "g12", "g15", "g18", "g21"], ["h6", "h9", "h12", "h15", "h18", "h21"]] },
    { title: "Senior Management", cell: [["e7", "e10", "e13", "e16", "e19", "e22"], ["f7", "f10", "f13", "f16", "f19", "f22"], ["g7", "g10", "g13", "g16", "g19", "g22"], ["h7", "h10", "h13", "h16", "h19", "h22"]] },
    { title: "Junior Management", cell: [["e8", "e11", "e14", "e17", "e20", "e23"], ["f8", "f11", "f14", "f17", "f20", "f23"], ["g8", "g11", "g14", "g17", "g20", "g23"], ["h8", "h11", "h14", "h17", "h20", "h23"]] },
  ]
  Productivityleveltable: any = [
    { title: "Top Management", cell: [["e29", "e32", "e35", "e38", "e41", "e44",], ["f29", "f32", "f35", "f38", "f41", "f44"], ["g29", "g32", "g35", "g38", "g41", "g44"], ["h29", "h32", "h35", "h38", "h41", "h44",]] },
    { title: "Senior Management", cell: [["e30", "e33", "e36", "e39", "e42", "e45",], ["f30", "f33", "f36", "f39", "f42", "f45"], ["g30", "g33", "g36", "g39", "g42", "g45"], ["h30", "h33", "h36", "h39", "h42", "h45",]] },
    { title: "Junior Management", cell: [["e31", "e34", "e37", "e40", "e43", "e46",], ["f31", "f34", "f37", "f40", "f43", "f46"], ["g31", "g34", "g37", "g40", "g43", "g46"], ["h31", "h34", "h37", "h40", "h43", "h46",]] },
  ]
  stressleveltable: any = [
    { title: "Top Management", cell: [["e52", "e55", "e58", "e61", "e64", "e67",], ["f52", "f55", "f58", "f61", "f64", "f67"], ["g52", "g55", "g58", "g61", "g64", "g67"], ["h52", "h55", "h58", "h61", "h64", "h67",]] },
    { title: "Senior Management", cell: [["e53", "e56", "e59", "e62", "e65", "e68",], ["f53", "f56", "f59", "f62", "f65", "f68"], ["g53", "g56", "g59", "g62", "g65", "g68"], ["h53", "h56", "h59", "h62", "h65", "h68",]] },
    { title: "Junior Management", cell: [["e54", "e57", "e60", "e63", "e66", "e69",], ["f54", "f57", "f60", "f63", "f66", "f69"], ["g54", "g57", "g60", "g63", "g66", "g69"], ["h54", "h57", "h60", "h63", "h66", "h69",]] },
  ]
  budgetcosttable: any = [
    { title: "Overtime Cost", cell: [["e75", "e79", "e83", "e87", "e91", "e95",], ["f75", "f79", "f83", "f87", "f91", "f95"], ["g75", "g79", "g83", "g87", "g91", "g95"], ["h75", "h79", "h83", "h87", "h91", "h95",]] },
    { title: "Budget for Year", cell: [["e76", "e80", "e84", "e88", "e92", "e96",], ["f76", "f80", "f84", "f88", "f92", "f96"], ["g76", "g80", "g84", "g88", "g92", "g96"], ["h76", "h80", "h84", "h88", "h92", "h96",]] },
    { title: "Budget Overrun ", cell: [["e77", "e81", "e85", "e89", "e93", "e97",], ["f77", "f81", "f85", "f89", "f93", "f97"], ["g77", "g81", "g85", "g89", "g93", "g97"], ["h77", "h81", "h85", "h89", "h93", "h97",]] },
    { title: "Budget Penalty Carried over next year", cell: [["e78", "e82", "e86", "e90", "e94", "e98",], ["f78", "f82", "f86", "f90", "f94", "f98"], ["g78", "g82", "g86", "g90", "g94", "g98"], ["h78", "h82", "h86", "h90", "h94", "h98",]] },
  ]
  kpitable: any = [
    { title: "Employee Satisfaction Score", cell: [["e104", "e106", "e108", "e110", "e112", "e114",], ["f104", "f106", "f108", "f110", "f112", "f114"], ["g104", "g106", "g108", "g110", "g112", "g114"], ["h104", "h106", "h108", "h110", "h112", "h114",]] },
    { title: "Stakeholder Satisfaction Score", cell: [["e105", "e107", "e109", "e111", "e113", "e115",], ["f105", "f107", "f109", "f111", "f113", "f115"], ["g105", "g107", "g109", "g111", "g113", "g115",], ["h105", "h107", "h109", "h111", "h113", "h115",]] },
  ]

  scores: any = [
    { title: "Talent Acquisition", value: "", cell: "e129" },
    { title: "Talent Management", value: "", cell: "e130" },
    { title: "Organization & Budgets", value: "", cell: "e131" },
    { title: "Conflict", value: "", cell: "e132" },
  ]
  conflict: any = [
    { title: "Choice", value: "", cell: ["f120", "f121", "f122", "f123", "f124",] }
  ]

  optionalCaseStatus: any = {
    'productengstatus': 'active',
    'customersuccessstatus': 'active',
    'designcommunicationstatus': 'active',

  }


  result: any = [];
  disabled: boolean = false;
  submitprove: string = "";
  attempt: number = 0;
  previousRoundCall: boolean = false;

  categoryNameMapping: { [key: string]: string } = {
    'sale': 'Sales',
    'productengstatus': 'Product & Engineering',
    'customersuccessstatus': 'Customer Support',
    'designcommunicationstatus': 'Design & Communication',
  };

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, public excellsheetservice: HrmsheetService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    if (this.studentelementdetailsvalue.numberofattemptsleft == 1) {
      this.retry = "Game Over"
    } else {
      this.retry = "Round " + ((this.studentelementdetailsvalue.previousassignedattempts) - (this.studentelementdetailsvalue.numberofattemptsleft) + 2);
    }
    this.getFetchData(this.noofattempt);

  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }

  getFetchData(attempt: string) {
    let apiname = '/hrmgame/fetchhrmgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            let jsonarray1: number[] = []; let jsonarray2: number[] = []; let jsonarray3: number[] = [];
            if (data.resultList != null) {
              this.result = data.resultList[0];
              this.submitprove = data.resultList[0].decisions.d417;

              //dropdown round set
              if (((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) && (this.previousRoundCall == false)) {
                this.previousRoundCall = true;
                this.disabled = true;
                if (data.resultList[0].attempt == 1) {
                  this.attempt = 0;
                  this.roundname = "Round 0";
                  this.dropdownvalue[0] = "Round 0"
                } else {
                  this.getFetchData(String(Number(this.noofattempt) - 1));
                }

              } else {
                this._global.casemanagementid.next(data.resultList[0].hrplanningcmid);
                this.attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (this.attempt > 0) {
                  for (let i = 1; i < this.attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
              }
              if (this.attempt != 0) {
                //get conflict value & score value
                this.conflict[0].value = data.resultList[0].kpireport[this.conflict[0].cell[Number(this.attempt) - 1]];

              }
              for (let i = 0; i < 4; i++) {
                this.scores[i].value = (Number(data.resultList[0].kpireport[this.scores[i].cell]) * 100).toFixed(0) + '%';
              }

              // Rigorchar
              for (let i = 0; i < 4; i++) {
                jsonarray1.push(Number((data.resultList[0].kpi[(this.rigorchartsrange[i][1])] * 100).toFixed(0)));
                jsonarray2.push(Number(this.rigorchartsrange[i][2]));
                jsonarray3.push(Number(this.rigorchartsrange[i][3]));
              }
              this.rigorcharts.series = [
                { name: "You", data: jsonarray1 },
                { name: "90% Percentile", data: jsonarray2 },
                { name: "Average", data: jsonarray3 }
              ]

              this.optionalCaseStatus.productengstatus = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.productengstatus;
              this.optionalCaseStatus.customersuccessstatus = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.customersuccessstatus;
              this.optionalCaseStatus.designcommunicationstatus = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.designcommunicationstatus;

              this.generateKPIChart(data);

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


  getCategoryLabel(category: string): string {
    return this.categoryNameMapping[category] || category;
  }

  generateKPIChart(data: any) {
    let employeeSatisfactionData: any = [];
    let emloyeesatisfactionseriescategories: (string | string[])[] = [];
    this.kpitable.forEach((row: any, tableIndex: number) => {
      let rowdata: number[] = [];
      this.optionalcase.forEach((category: string, index: number) => {
        const status = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[category];
        if (status === 'active' || index === 0) {
          if ((index !== this.optionalcase.length - 1)) {
            const categoryLabel = this.getCategoryLabel(category);
            emloyeesatisfactionseriescategories.push(categoryLabel.split(' '));
          }
          if (row.cell[index]) {
            rowdata.push(
              Number(
                Number((
                  this.result.kpireport[row.cell[index][this.attempt]])
                ).toFixed(2)
              )
            )
          }
        }
      });
      if (rowdata.length > 0) {
        employeeSatisfactionData.push({
          "name": row.title,
          "data": rowdata
        }
        )
      }
    });
    this.emloyeesatisfactionseries.series = employeeSatisfactionData;
    this.emloyeesatisfactionseries.xaxis = {
      categories: emloyeesatisfactionseriescategories,
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
    };

    let performacelevelseriesdata: any = [];
    let performancelevelcategories: (string | string[])[] = [];
    this.performanceleveltable.forEach((row: any, tableindex: number) => {
      let rowData: number[] = [];
      this.optionalcase.forEach((category: string, index: number) => {
        const status = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[category];
        if (status === 'active' || index === 0) {

          if ((index !== this.optionalcase.length - 1)) {
            const categoryLabel = this.getCategoryLabel(category);
            performancelevelcategories.push(categoryLabel.split(' '));

          }
          if (row.cell[index]) {
            rowData.push(
              Number(
                Number(
                  (this.result.kpireport[row.cell[index][this.attempt]] * 100).toFixed(0)
                ).toFixed(0)
              )
            )
          }
        }
      });
      if (rowData.length > 0) {
        performacelevelseriesdata.push(
          {
            "name": row.title,
            "data": rowData,
          }
        )
      }
    });

    this.performancelevelseries.series = performacelevelseriesdata;
    this.performancelevelseries.xaxis = {
      categories: performancelevelcategories,
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
      tooltip: {
        enabled: false,
        offsetY: -35
      }
    },
      this.generateOrganizationBudgetChart(data);
  }

  generateOrganizationBudgetChart(data: any) {
    const costoftoolsSeries: any = [];
    const increaseofeffectivenessSeries: any = [];
    this.costoftoolstable.forEach((value: any) => {
      costoftoolsSeries.push(Number(this.result.organizationreport[value.cell[this.attempt]]));
    });

    this.increaseofeffectiveness.forEach((value: any) => {
      increaseofeffectivenessSeries.push(Number((Number(this.result.organizationreport[value.cell[this.attempt]]) * 100).toFixed(0)))
    });

    this.constoftoolsseries.series[0].data = costoftoolsSeries;
    this.increaseofeffectivenessseries.series[0].data = increaseofeffectivenessSeries;
    this.generateTalentAcqChart(data);
  }

  generateTalentAcqChart(data: any) {

    let employerbrandingchannelseriesdata: any = [];
    let communicationeffectivenessseriescategories: (string | string[])[] = [];
    this.employerbrandingchanneltable.forEach((row: any, tableIndex: number) => {
      let rowData: number[] = [];
      this.optionalcase.forEach((category: string, index: number) => {
        const status = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[category];
        if (status === 'active' || index === 0) {
          if ((index !== this.optionalcase.length - 1)) {
            const categoryLabel = this.getCategoryLabel(category);
            communicationeffectivenessseriescategories.push(categoryLabel.split(' '));
          }
          if (row.cell[index]) {
            rowData.push(
              Number(
                (
                  Number(this.result.acquisitionreport[row.cell[index][this.attempt]])
                ).toFixed(0)
              )
            );
          }
        }
      });
      if (rowData.length > 0) {
        employerbrandingchannelseriesdata.push({
          'name': row.title,
          'data': rowData
        });
      }
    });
    this.communicationeffectivenessseries.series = employerbrandingchannelseriesdata;
    this.communicationeffectivenessseries.xaxis = {
      categories: communicationeffectivenessseriescategories,
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
    };

    let genderdiversitycategories: (string | string[])[] = [];
    let genderdiversityseriesdata: any = [];

    this.genderdiversitytable.forEach((row: any, tableIndex: number) => {
      let rowData: number[] = [];

      // Iterate through each category (sale, Product & Engineering, etc.)
      this.optionalcase.forEach((category: string, index: number) => {
        const status = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[category];

        // Include "sale" unconditionally, others only if active
        if (status === "active" || index === 0) {
          // Add category name to x-axis
          if ((index !== this.optionalcase.length - 1)) {
            const categoryLabel = this.getCategoryLabel(category);
            genderdiversitycategories.push(categoryLabel.split(" "));
          }
          // Collect corresponding cell data
          if (row.cell[index]) {
            rowData.push(
              Number(
                (
                  Number(this.result.acquisitionreport[row.cell[index][this.attempt]]) * 100
                ).toFixed(0)
              )
            );
          }
        }
      });

      // Add series data if rowData is not empty
      if (rowData.length > 0) {
        genderdiversityseriesdata.push({
          name: row.title,
          data: rowData,
        });
      }
    });

    this.genderdiversityseries.series = genderdiversityseriesdata;
    this.genderdiversityseries.xaxis =
    {
      categories: genderdiversitycategories,
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
      tooltip: {
        enabled: false,
        offsetY: -35
      }
    };
    this.generateTalentMgmtChart(data);
  }

  generateTalentMgmtChart(data: any) {

    let awarenesslevelseriesdata: any = [];
    let awarenesslevelseriescategories: (string | string[])[] = [];
    this.awarenessleveltable.forEach((row: any, tableindex: number) => {
      let rowdata: number[] = [];
      this.optionalcase.forEach((category: string, index: number) => {
        const status = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[category];
        if (status === 'active' || index === 0) {
          if ((index !== this.optionalcase.length - 1)) {
            const categoryLabel = this.getCategoryLabel(category);

            awarenesslevelseriescategories.push(categoryLabel.split(" "));
          }
          if (row.cell[index]) {
            rowdata.push(
              Number(
                Number(
                  (this.result.managementreport[row.cell[index][this.attempt]]) * 100
                ).toFixed(0)
              )
            )
          }
        }
      });
      if (rowdata.length > 0) {
        awarenesslevelseriesdata.push({
          "name": row.title,
          "data": rowdata
        })
      }
    });
    this.awarenesslevelseries.series = awarenesslevelseriesdata;
    this.awarenesslevelseries.xaxis = {
      categories: awarenesslevelseriescategories,
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
      tooltip: {
        enabled: false,
        offsetY: -35
      }
    };



    let commitmentlevelseriesdata: any = [];
    let commitmentlevelseriescategories: (string | string[])[] = [];
    this.commitmentleveltable.forEach((row: any, tableindex: number) => {
      let rowdata: number[] = [];
      this.optionalcase.forEach((category: string, index: number) => {
        const status = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[category];
        if (status === 'active' || index === 0) {
          if ((index !== this.optionalcase.length - 1)) {
            const categoryLabel = this.getCategoryLabel(category);

            commitmentlevelseriescategories.push(categoryLabel.split(" "));
          }
          if (row.cell[index]) {
            rowdata.push(
              Number(
                Number(
                  (this.result.managementreport[row.cell[index][this.attempt]]) * 100
                ).toFixed(0)
              )
            )
          }
        }
      });
      if (rowdata.length > 0) {
        commitmentlevelseriesdata.push({
          "name": row.title,
          "data": rowdata
        })
      }
    }
    );

    this.commitmentlevelseries.series = commitmentlevelseriesdata;
    this.commitmentlevelseries.xaxis = {
      categories: commitmentlevelseriescategories,
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
      tooltip: {
        enabled: false,
        offsetY: -35
      }
    };




    let employeeengagementseriesdata: any = [];
    let employeeengagementcategories: (string | string[])[] = [];
    this.employeeengagementtable.forEach((row: any, tableindex: number) => {
      let rowdata: number[] = [];
      this.optionalcase.forEach((category: string, index: number) => {
        const status = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[category];
        if (status === 'active' || index === 0) {
          if ((index !== this.optionalcase.length - 1)) {
            const categoryLabel = this.getCategoryLabel(category);

            employeeengagementcategories.push(categoryLabel.split(" "));
          }
          if (row.cell[index]) {
            rowdata.push(
              Number(
                Number(
                  (this.result.managementreport[row.cell[index][this.attempt]])
                ).toFixed(2)
              )
            )
          }
        }
      });
      if (rowdata.length > 0) {
        employeeengagementseriesdata.push({
          "name": row.title,
          "data": rowdata
        })
      }
    }
    );
    this.employeeengagementseries.series = employeeengagementseriesdata;
    this.employeeengagementseries.xaxis = {
      categories: employeeengagementcategories,
      position: "bottom",
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
      tooltip: {
        enabled: false,
        offsetY: -35
      }
    };



    let costoflearningdata: any = [];
    let rowtitles: (string | string[])[] = [];
    this.costoflearningtable.forEach((row: any, tableindex: number) => {
      rowtitles.push(row.title);
      let innerData: any = [];
      this.optionalcase.forEach((category: string, index: number) => {
        const status = data.resultList[0].hrmGameCM.hrmGameCMActiveStatus[category];
        if (status === "active" || index === 0) {
          let dataval = 0;
          if (index !== this.optionalcase.length - 1) {
            if (row.cell[index]) {
              dataval = Number(Number((this.result.managementreport[this.costoflearningtable[tableindex].cell[index][this.attempt]])).toFixed(2));
            }
            innerData.push({
              x: this.getCategoryLabel(category),
              y: dataval
            })
          }
        }
      });

      costoflearningdata.push({
        "name": row.title,
        "data": innerData
      })
    });



    this.costoflearningseries.series = costoflearningdata;
    this.costoflearningseries.xaxis = {
      position: "bottom",
      // categories: rowtitles,
      labels: {
        offsetY: 0,
        rotate: 0,
        show: true,
        hideOverlappingLabels: false,
        trim: false,
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      crosshairs: {},
      tooltip: {
        enabled: false,
        offsetY: -35
      }
    }

  }

  exit() {
    this.isButtonDisabled = true;
    if (this.studentelementdetailsvalue.numberofattemptsleft == 0) {
      this._router.navigate(['auth/component/studentdashboardheader']);
    } else {
      if (this.disabled == false) {
        this.checkloading = true;

        let body = {
          email: this.useremail,
          usermode: "student",
          caller: "student",
          action: "update",
          coursecode: this.coursecode,
          spreadsheetid: this.studentspreadsheetid,
          currentround:Number(this.noofattempt)
        };
        this._login.updatecourseattempt(body).subscribe((data: any) => {
          if (data.status == 'Success') {
            let status = "exit";
            this._login.sendDrivemailLog(status).subscribe(
              {
                next: (data: any) => {
                  this._login.exitOnLastAttempt();
                  this._router.navigate(['auth/component/studentdashboardheader']);

                }, error: (error: any) => {
                  this.isButtonDisabled = false;
                  this.checkloading = false;
                  this.driveerrorLog(error, "/maillog/drivemaillog");
                }
              })

          }
        }, (error: any) => {
          this.isButtonDisabled = false;
          this.checkloading = false;
          this.driveerrorLog(error, '/student/updatecourseattempt');
        })
      } else {
        this.isButtonDisabled = false;
        this._alert.error("Please submit your decisions first")
      }
    }
  }

  downloadreportforhrm() {
    let apiname = '/hrmgame/fetchhrmgame';
    this.excellsheetservice.downloadReportforgame(apiname, "hrmgame", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }

  checkPercent(title: string) {
    if (title.includes('%')) {
      return true;
    } else {
      return false;
    }
  }





}

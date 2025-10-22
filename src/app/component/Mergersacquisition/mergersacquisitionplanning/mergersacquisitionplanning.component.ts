import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, NgApexchartsModule } from "ng-apexcharts";
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MergersacquisitionfoodforthoughtComponent } from '../mergersacquisitionfoodforthought/mergersacquisitionfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

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
  selector: 'app-mergersacquisitionplanning',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './mergersacquisitionplanning.component.html',
  styleUrls: ['./mergersacquisitionplanning.component.scss']
})
export class MergersacquisitionplanningComponent extends AbstractComponent {
  marketsharechart: pieChart;
  cashequivalentinrchart: barchart;
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  marketsharechartnames: any = [];
  inputDisabled: boolean = false;
  periodcellname: any = [
    'd18', 'd19', 'd20', 'd21', 'd22', 'd23',//5
    'e18', 'e19', 'e20', 'e21', 'e22', 'e23',//11
    'f18', 'f19', 'f20', 'f21', 'f22', 'f23',//17
    'g18', 'g19', 'g20', 'g21', 'g22', 'g23',//23
    'h18', 'h19', 'h20', 'h21', 'h22', 'h23',//29
    'i18', 'i19', 'i20', 'i21', 'i22', 'i23',//35
    'j18', 'j19', 'j20', 'j21', 'j22', 'j23',//41
    'k18', 'k19', 'k20', 'k21', 'k22', 'k23',//47
    'l18', 'l19', 'l20', 'l21', 'l22', 'l23',//53
    'd26', 'd27', 'd28', 'd29', 'd30', 'd31',//59
    'e26', 'e27', 'e28', 'e29', 'e30', 'e31',//65
    'f26', 'f27', 'f28', 'f29', 'f30', 'f31',//71
    'g26', 'g27', 'g28', 'g29', 'g30', 'g31',//77
    'd34', 'd35', 'd36', 'd37', 'd38', 'd39',//83
    'e34', 'e35', 'e36', 'e37', 'e38', 'e39',//89
    'f34', 'f35', 'f36', 'f37', 'f38', 'f39',//95
    'g34', 'g35', 'g36', 'g37', 'g38', 'g39',//101
    'h34', 'h35', 'h36', 'h37', 'h38', 'h39',//107
    'i34', 'i35', 'i36', 'i37', 'i38', 'i39',//113
    'j34', 'j35', 'j36', 'j37', 'j38', 'j39',//119
    'k34', 'k35', 'k36', 'k37', 'k38', 'k39',//125
    'l34', 'l35', 'l36', 'l37', 'l38', 'l39',//131
    'm34', 'm35', 'm36', 'm37', 'm38', 'm39',//137
    'n34', 'n35', 'n36', 'n37', 'n38', 'n39',//143
    'o34', 'o35', 'o36', 'o37', 'o38', 'o39',//149
    'p34', 'p35', 'p36', 'p37', 'p38', 'p39',//155

  ];
  databasecellname: any = [];

  marketsharegraph: any = [
    ['d10', 'e10'],
    ['d11', 'e11'],
    ['d12', 'e12'],
    ['d13', 'e13'],
    ['d14', 'e14'],
    ['d15', 'e15']
  ]
  cashgraph: any = [
    ['d42', 'e42'],
    ['d43', 'e43'],
    ['d44', 'e44'],
    ['d45', 'e45'],
    ['d46', 'e46']
  ];
  jsonarray1: any = [];
  jsonarray2: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.marketsharechart = {
      series: [

      ],
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
      labels: ['MAI', 'ElectroDrive Co.', 'GreenMove Motors', 'VoltWheels Inc.', 'TerraMotors', 'Others'],
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
        text: 'Market Share %',
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };

    this.cashequivalentinrchart = {
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
      plotOptions: {
        bar: {
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
        categories: ['C', 'P4', 'P3', 'P2', 'P1']
      },
      fill: {
        type: 'solid',
      },

      yaxis: this.yaxis[0],
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
        text: "Cash & Cash Equivalents, INR million",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

  }

  override ngOnInit(): void {
    this.getFetchData();
  }
  platformnames: any = [];
  platform: any = [];
  getFetchData() {
    this.checkloading = true;

    let apiname = '/mergersacquisition/fetchmergersacquisition';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              // this.jsonarray1 = [];

              this._global.casemanagementid.next(data.resultList[0].mergersacquisitioncmid);
              if (data.resultList[0].mergersAcquisitionCM.mergersAcquisitionCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              };
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].mergersAcquisitionCM[this.periodcellname[i]];
              }
              for (let i = 0; i < this.marketsharegraph.length; i++) {
                this.marketsharechartnames[i] = data.resultList[0].mergersAcquisitionCM[this.marketsharegraph[i][0]];
                this.jsonarray1[i] = Number(data.resultList[0].mergersAcquisitionCM[this.marketsharegraph[i][1]]);
              };
              this.marketsharechart.series = this.jsonarray1;
              this.marketsharechart.labels = this.marketsharechartnames;

              for (let i = 0; i < this.cashgraph.length; i++) {
                this.jsonarray2.push((Number(data.resultList[0].mergersAcquisitionCM[this.cashgraph[i][1]])));
              };
              this.cashequivalentinrchart.series = [
                { "name": "", "data": this.jsonarray2 }
              ];
              if ((String(data.resultList[0].ac30) == 'yes') ||
                (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              };
              this.checkloading = false;

            };
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
    this.dialog.open(MergersacquisitionfoodforthoughtComponent, {
      data: {},
    });
  }

}

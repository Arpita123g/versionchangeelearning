import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexPlotOptions, ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis, ApexYAxis,
  NgApexchartsModule,
} from "ng-apexcharts";
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MergersacquisitionfoodforthoughtComponent } from '../mergersacquisitionfoodforthought/mergersacquisitionfoodforthought.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-mergersacquisitionnegotiation',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './mergersacquisitionnegotiation.component.html',
  styleUrls: ['./mergersacquisitionnegotiation.component.scss']
})
export class MergersacquisitionnegotiationComponent extends AbstractComponent {
  valuationinrchart: barchart;
  selectedImage: any = null;
  showText = false;
  jsonarray1: any = [];
  jsonarray2: any = [];
  value: string = '';
  result: any = [];
  businessday: string = '';
  f19: string = '';
  checkdisable: boolean = false;
  consumerposunavalue: string = '';
  foodforthought: boolean = true;
  @Input() show: boolean = true;
  @Input() isShow3: boolean = false;
  selectedIndex: number = 0;
  initiatevalue: number = 0;
  inputDisabled: boolean = false;
  @Output() newItemEvent = new EventEmitter<string>();

  databasecellname: any = ["f24", "g24", "h24", "i24", "f28", "ac23",//5
    "c42", "c43", "c44", "c45", "c47", "c48", "c49",//12
    "c51", "c52", "c53", "c54", "c55", "c56", "c57"//19
  ];

  valuationGraph: any = [
    ['d23', 'd24'],
    ['e23', 'e24']
  ]

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.valuationinrchart = {
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
          columnWidth: "20%",
        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
      },
      xaxis: {
        categories: ['Valuation', 'Price Offered'],
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
        text: "Valuation, INR Billion",
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

  getFetchData() {
    // this.checkloading = true;
    let apiname = '/mergersacquisition/fetchmergersacquisition';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1=[];
              this._global.casemanagementid.next(data.resultList[0].mergersacquisitioncmid);
              if (data.resultList[0].mergersAcquisitionCM.mergersAcquisitionCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]];
              }



              for (let i = 0; i < this.valuationGraph.length; i++) {
                this.jsonarray1.push((Number(data.resultList[0][this.valuationGraph[i][1]])));
              }
              this.valuationinrchart.series = [
                { "name": "", "data": this.jsonarray1 }
              ]
              if ((String(data.resultList[0].ac30) == 'yes') ||
                (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              }
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

  //write game data
  writeData() {
    // this.checkloading = true;
    let apiname = '/mergersacquisition/singleinputmergersacquisition';

    if ((this.result[5] < 0) || (this.result[5] > 100)) {
      this._alert.error('The expected range is between 0 to 100');
      this.result[5] = this.initiatevalue;

    } else {
      let initiateData = {
        "ac23": this.result[5]
      }
      this._api.writeGameData("mergersacquisition", 1,
        initiateData, apiname, 'mergersacquisitioncmid').subscribe((data: any) => {
          if (data.status == "Success") {
            this.getFetchData();
          } else {
            this.checkloading = false;
          }
        }, (error: any) => {
          this.checkloading = false;
          this.checkdisable = false;
          this.driveerrorLog(error, apiname);
        })
    }
  }

  openDialog(): void {
    this.dialog.open(MergersacquisitionfoodforthoughtComponent, {
      data: {},
    });
  }
}

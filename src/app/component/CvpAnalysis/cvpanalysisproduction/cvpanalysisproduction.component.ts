import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexMarkers,
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
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CvpanalysisfoodforthoughtComponent } from '../cvpanalysisfoodforthought/cvpanalysisfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface lineChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

@Component({
  selector: 'app-cvpanalysisproduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './cvpanalysisproduction.component.html',
  styleUrls: ['./cvpanalysisproduction.component.scss']
})
export class CvpanalysisproductionComponent extends AbstractComponent {
  foodforthought: boolean = true;
  topstatus: boolean = true;
  result: any = [];
  capacityutilizationchart: lineChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  showEmmisionStatus: boolean = true;
  disabled: boolean[] = [];
  checkdisable: boolean = false;

  periodcellname: any = [];

  capacityutilizationchartrange = [
    ['k20', 'l20'],
    ['k21', 'l21'],
    ['k22', 'l22'],
    ['k23', 'l23'],
    ['k24', 'l24'],
    ['k25', 'l25'],
    ['k26', 'l26'],
    ['k27', 'l27'],
    ['k28', 'l28'],
    ['k29', 'l29'],
    ['k30', 'l30'],
  ]

  databasecellname: any = ['c17', 'c18', 'c19', 'c23', 'c24', 'ae15', 'c26', 'ae17', 'c31', 'c21', 'c41', 'd41', 'af17',
    'c32', 'c22', 'c42', 'd42'];



  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.capacityutilizationchart = {
      series: [],
      markers: {
        size: [1.2, 1.5, 1.1,],
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
      xaxis: {
        title: {
          text: "Capacity Utilization %",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },

        labels: {
          formatter: function (value) {
            return value + "%";
          },
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
          text: "Cost Multiplier",
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },

        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          }
        },
        tickAmount: 5,
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
        text: '',
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    // this.checkloading = true;

    let apiname = '/cvpanalysis/fetchcvpanalysis';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = []; this.result = [];
              this._global.casemanagementid.next(data.resultList[0].cvpanalysiscmid);

              if (data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if (data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus.topstatus == 'inactive') {
                this.topstatus = false;
              }

              if ((data.resultList[0].ai8 == 'yes') || (data.resultList[0].ai8 == 'Yes') || (this.timefinished)) {
                this.checkdisable = true;
              }

              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]];
                if ((this.databasecellname[i] == "ae17") || (this.databasecellname[i] == "af17") || (this.databasecellname[i] == "c24")) {
                  this.result[i] = (this.result[i] * 100).toFixed(0);
                }
                else if ((this.databasecellname[i] == "d41") || (this.databasecellname[i] == "d42")) {
                  this.result[i] = (this.result[i]).toFixed(1);
                }
                else {
                  this.result[i] = this.result[i].toFixed(0)
                }
              }

              if (data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus.emissionsstatus == "active") {
                this.showEmmisionStatus = true;
              } else {
                this.showEmmisionStatus = false;
              }

              // for (let i = 0; i < 10; i++) {
              //   this.jsonarray1.push({
              //     'x': Number(data.resultList[0].cvpAnalysisCM[this.capacityutilizationchartrange[i][0]]) * 100,
              //     'y': Number(data.resultList[0].cvpAnalysisCM[this.capacityutilizationchartrange[i][1]])
              //   });
              // }
              // this.capacityutilizationchart.series = [{ "name": 'value', "data": this.jsonarray1 }]
              this.InputRespectupdateValue();
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



  inputtablevalue(value: any, inputfield: string) {

    if (inputfield == 'machinery') {
      if ((this.result[value] >= 0) && (this.result[value] < 11)) {
        this.valueWrite();
      } else {
        this.result[value] = 0;
        this._alert.error("The expected range is between 0 to 10");
      }
    } else if (inputfield == 'capacity') {
      let sumotcapacity = Number(this.result[7]) + Number(this.result[12]);
      if (sumotcapacity <= 100) {
        this.valueWrite();
      } else {
        this.result[value] = 0;
        this._alert.error("Addition can't be above 100%");
      }

    } else {
      this.valueWrite();
    }


  }
  InputRespectupdateValue() {
    this.jsonarray1 = [];
    let apiname = '/cvpanalysis/fetchcvpanalysis';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];

        //  this.result[0] =(updatedData[this.databasecellname[0]]).toFixed(0);
        //  this.result[1] =(updatedData[this.databasecellname[1]]).toFixed(0);
        //  this.result[2] =(updatedData[this.databasecellname[2]]).toFixed(0);
        //  this.result[3] =(updatedData[this.databasecellname[3]]).toFixed(0);
        //  this.result[4] =(updatedData[this.databasecellname[4]]*100).toFixed(0);
        //  this.result[6] =(updatedData[this.databasecellname[6]]).toFixed(0);
        //  this.result[8] =(updatedData[this.databasecellname[8]]).toFixed(0);
        //  this.result[9] =(updatedData[this.databasecellname[9]]).toFixed(0);
        //  this.result[10] =(updatedData[this.databasecellname[10]]).toFixed(0);
        //  this.result[11] =(updatedData[this.databasecellname[11]]).toFixed(1);
        //  this.result[13] =(updatedData[this.databasecellname[13]]).toFixed(0);
        //  this.result[14] =(updatedData[this.databasecellname[14]]).toFixed(0);
        //  this.result[15] =(updatedData[this.databasecellname[15]]).toFixed(0);
        //  this.result[16] =(updatedData[this.databasecellname[16]]).toFixed(1);
        const config = [
          { idx: 0, db: 0, mul: 1, fix: 0 },
          { idx: 1, db: 1, mul: 1, fix: 0 },
          { idx: 2, db: 2, mul: 1, fix: 0 },
          { idx: 3, db: 3, mul: 1, fix: 0 },
          { idx: 4, db: 4, mul: 100, fix: 0 },
          { idx: 6, db: 6, mul: 1, fix: 0 },
          { idx: 8, db: 8, mul: 1, fix: 0 },
          { idx: 9, db: 9, mul: 1, fix: 0 },
          { idx: 10, db: 10, mul: 1, fix: 0 },
          { idx: 11, db: 11, mul: 1, fix: 1 },
          { idx: 13, db: 13, mul: 1, fix: 0 },
          { idx: 14, db: 14, mul: 1, fix: 0 },
          { idx: 15, db: 15, mul: 1, fix: 0 },
          { idx: 16, db: 16, mul: 1, fix: 1 }
        ];

        config.forEach(({ idx, db, mul, fix }) => {
          const value = updatedData[this.databasecellname[db]];
          this.result[idx] = (value * mul).toFixed(fix);
        });

        // const resultIndices = [0, 1, 2, 3, 4, 6, 8, 9, 10, 11, 13, 14, 15, 16];
        // const dataCellIndices = [0, 1, 2, 3, 4, 6, 8, 9, 10, 11, 13, 14, 15, 16];

        // for (let i = 0; i < resultIndices.length; i++) {
        //   this.result[resultIndices[i]] = updatedData[this.databasecellname[dataCellIndices[i]]];
        //   if ((this.databasecellname[i] == "c24")) {
        //     this.result[i] = (this.result[i] * 100).toFixed(0);
        //   }
        //   else if ((this.databasecellname[i] == "d41") || (this.databasecellname[i] == "d42")) {
        //     this.result[i] = (this.result[i]).toFixed(1);
        //   }
        //   else {
        //     this.result[i] = (this.result[i]).toFixed(0)
        //   }
        // }

        for (let i = 0; i < 10; i++) {
          this.jsonarray1.push({
            'x': Number(updatedData.cvpAnalysisCM[this.capacityutilizationchartrange[i][0]]) * 100,
            'y': Number(updatedData.cvpAnalysisCM[this.capacityutilizationchartrange[i][1]])
          });
        }
        this.capacityutilizationchart.series = [{ "name": 'value', "data": this.jsonarray1 }]

      }
    });
  }

  valueWrite() {
    let apiname = '/cvpanalysis/singleinputcvpanalysis';
    let inboundData = {
      "ae15": Number(this.result[5]),
      "ae17": Number(this.result[7]) / 100,
      "af17": Number(this.result[12]) / 100,


    }
    this._api.logisticsDataWrite("cvpanalysis", 1,
      inboundData, apiname, 'cvpanalysiscmid').subscribe((data: any) => {
        if (data.status == 'Success') {
          this.InputRespectupdateValue();
        } else {
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }



  openDialog(): void {
    this.dialog.open(CvpanalysisfoodforthoughtComponent, {
      data: {},
    });
  }


}

import { Component } from '@angular/core';
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
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MergersacquisitionfoodforthoughtComponent } from '../mergersacquisitionfoodforthought/mergersacquisitionfoodforthought.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'app-mergersacquisitionfinancing',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './mergersacquisitionfinancing.component.html',
  styleUrls: ['./mergersacquisitionfinancing.component.scss']
})
export class MergersacquisitionfinancingComponent extends AbstractComponent {
  foodforthought: boolean = true;
  loanintrestratechart: barchart;
  dealstructurechart: barchart;
  // n2oemission: barchart;
  // ch4emission: barchart;
  result: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  showEmmisionStatus: boolean = true;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  databasecellname: any = ['ac26', 'ac27', 'ac28', 'f38', 'f39', 'ac41', 'ac42', 'c34'];
  periodcellname: any = ['e42', 'p35'];
  initiatevalue: number = 0;
  loanInterestGraph: any = [
    ['an7', 'ao7'],
    ['an8', 'ao8'],
    ['an9', 'ao9'],
    ['an10', 'ao10'],
    ['an11', 'ao11']
  ]

  dealStructureGraph: any = [
    ['Cash', 'c35'],
    ['Debt', 'c36'],
    ['Equity', 'c37']
  ]

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);


    this.loanintrestratechart = {
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
        categories: ['C', 'P4', 'P3', 'P2', 'P1'],
      },
      fill: {
        type: 'solid',
      },

      yaxis: this.yaxis[1],
      tooltip: {
        y: {

          formatter: undefined,
          // title: {
          //   formatter: (seriesName: any) => '%',
          // },
        },
        x: {
          show: false
        }

      },

      title: {
        text: "Loan Interest Rate %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.dealstructurechart = {
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
        categories: ['Cash', 'Debt', 'Equity',],
      },
      fill: {
        type: 'solid',
      },

      yaxis: this.yaxis[0],
      tooltip: {
        y: {
          formatter: undefined,
          // title: {
          //   formatter: (seriesName: any) => '%',
          // },

        },
        x: {
          show: false
        }

      },

      title: {
        text: "Deal Structure, INR Million",
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
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this._global.casemanagementid.next(data.resultList[0].mergersacquisitioncmid);

              if (data.resultList[0].mergersAcquisitionCM.mergersAcquisitionCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;

              }
              for (let i = 0; i < this.databasecellname.length; i++) {

                if ((i == 0) || (i == 1)) {
                  this.result[i] = parseInt((data.resultList[0][this.databasecellname[i]] * 100).toString(), 10);
                } else {
                  this.result[i] = data.resultList[0][this.databasecellname[i]];
                }
                console.log("zerooooo", this.result[0], this.result[1])
                this.result[2] = (100 - Number((this.result[0]) + (this.result[1])));

                console.log("result", this.result)

              }
              for (let i = 8; i < 10; i++) {
                this.result[i] = data.resultList[0].mergersAcquisitionCM[this.periodcellname[i - 8]]
              }
              if ((data.resultList[0].ac30 == 'yes') || (data.resultList[0].ac30 == 'Yes') || (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              }

              for (let i = 0; i < this.loanInterestGraph.length; i++) {
                this.jsonarray2.push((Number(data.resultList[0].mergersAcquisitionCM[this.loanInterestGraph[i][1]] * 100)));
              }
              this.loanintrestratechart.series = [
                { "name": "value", "data": this.jsonarray2 }
              ]

              for (let i = 0; i < this.dealStructureGraph.length; i++) {
                this.jsonarray3.push((Number(data.resultList[0][this.dealStructureGraph[i][1]])));

              }
              this.dealstructurechart.series = [
                { "name": "value", "data": this.jsonarray3 }
              ]


              if (data.resultList[0].mergersAcquisitionCM.mergersAcquisitionCMActiveStatus.emissionsstatus == "active") {
                this.showEmmisionStatus = true;
              } else {
                this.showEmmisionStatus = false;
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

  inputDataCheck(index: number) {
    let totalsum = (Number(this.result[0]) + Number(this.result[1]));
    if (index == 0) {
      let cashvalue = Number(this.result[7]) * Number(this.result[0]) / 100;
      if (cashvalue > 500) {
        this.result[index] = 0;
        this._alert.error("Not sufficient cash to fund the deal.")
      }
    }
    if ((this.result[0] < 0) || (this.result[1] < 0)) {
      this.result[index] = 0;
      this._alert.error("Value should not be negetive.")
    }
    if (totalsum > 100) {
      this.result[index] = 0;
      this._alert.error("Sum cannot exceed 100");
    }

    this.mergefinancingDataWrite(index)

  }
  InputRespectupdateValue() {
    this.jsonarray2 = [];
    this.jsonarray3 = [];
    let apiname = '/mergersacquisition/fetchmergersacquisition';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 8; i < 10; i++) {
          this.result[i] = updatedData.mergersAcquisitionCM[this.periodcellname[i - 8]]
        }
        //  this.result[0] =(updatedData[this.databasecellname[0]]).toFixed(0);
        //  this.result[1] =(updatedData[this.databasecellname[1]]).toFixed(0);
        this.result[2] = (updatedData[this.databasecellname[2]] * 100).toFixed(0);
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
        // const config = [
        //   { idx: 0, db: 0, mul: 1, fix: 0 },
        //   { idx: 1, db: 1, mul: 1, fix: 0 },
        //   { idx: 2, db: 2, mul: 1, fix: 0 },
        //   { idx: 3, db: 3, mul: 1, fix: 0 },
        //   { idx: 4, db: 4, mul: 100, fix: 0 },
        //   { idx: 6, db: 6, mul: 1, fix: 0 },
        //   { idx: 8, db: 8, mul: 1, fix: 0 },
        //   { idx: 9, db: 9, mul: 1, fix: 0 },
        //   { idx: 10, db: 10, mul: 1, fix: 0 },
        //   { idx: 11, db: 11, mul: 1, fix: 1 },
        //   { idx: 13, db: 13, mul: 1, fix: 0 },
        //   { idx: 14, db: 14, mul: 1, fix: 0 },
        //   { idx: 15, db: 15, mul: 1, fix: 0 },
        //   { idx: 16, db: 16, mul: 1, fix: 1 }
        // ];

        // config.forEach(({ idx, db, mul, fix }) => {
        //   const value = updatedData[this.databasecellname[db]];
        //   this.result[idx] = (value * mul).toFixed(fix);
        // });

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

        for (let i = 0; i < this.loanInterestGraph.length; i++) {
          this.jsonarray2.push((Number(updatedData.mergersAcquisitionCM[this.loanInterestGraph[i][1]] * 100)));
        }
        this.loanintrestratechart.series = [
          { "name": "value", "data": this.jsonarray2 }
        ]

        for (let i = 0; i < this.dealStructureGraph.length; i++) {
          this.jsonarray3.push((Number(updatedData[this.dealStructureGraph[i][1]])));

        }
        this.dealstructurechart.series = [
          { "name": "value", "data": this.jsonarray3 }
        ]

      }
    });
  }

  mergefinancingDataWrite(index: number) {

    let apiname = '/mergersacquisition/singleinputmergersacquisition';

    // if((this.result[0]<0) ||(this.result[1]<0)  ){
    //   this.result[index] = 0;
    //   this._alert.error("Value should not be negetive.")
    // }else{
    //   let totalsum = Number(this.result[0])+Number(this.result[1]);
    //   if(totalsum<=100){
    let initiateData = {
      "ac26": Number(this.result[0]) / 100,
      "ac27": Number(this.result[1]) / 100,
    };
    this._api.writeGameData("mergersacquisition", 1,
      initiateData, apiname, 'mergersacquisitioncmid').subscribe((data: any) => {
        if (data.status == 'Success') {
          this.InputRespectupdateValue();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.inputDisabled = false;
        this.driveerrorLog(error, apiname);
      })
    // }else{
    //   this.result[index]  = 0;
    //   this._alert.error("Sum cannot exceed 100");
    // }
  }







  // let mergeAcquisitioninputData = {
  //   "ac26": Number(this.result[0])*100,
  //   "ac27": Number(this.result[1])*100,

  // }

  // }


  openDialog(): void {
    this.dialog.open(MergersacquisitionfoodforthoughtComponent, {
      data: {},
    });
  }

}

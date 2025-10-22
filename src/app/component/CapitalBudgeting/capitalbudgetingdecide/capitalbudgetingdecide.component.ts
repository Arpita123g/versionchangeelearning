import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ChangeDetectorRef } from '@angular/core';
import { CapitalbudgetingfoodforthoughtComponent } from '../capitalbudgetingfoodforthought/capitalbudgetingfoodforthought.component';
// import { barchart } from '../../ProductConsumerGame/consumerconceptualization/consumerconceptualization.component';
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
  NgApexchartsModule,
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
interface barChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  noData: ApexNoData;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-capitalbudgetingdecide',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule,MatIconModule],
    templateUrl: './capitalbudgetingdecide.component.html',
  styleUrls: ['./capitalbudgetingdecide.component.scss']
})
export class CapitalbudgetingdecideComponent extends AbstractComponent {
  foodforthought: boolean = true;
  submitprove: string = "";
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  optionalcase: any = [];
  optional: any = [];
  inputDisabled: boolean = false;
  disabled: boolean = false;
  budgetvalue: number = 0;
  refrencespriceperuserchart: barChart;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private cd: ChangeDetectorRef) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.refrencespriceperuserchart = {
      series: [ ],
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
          columnWidth: "10%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Budget Left, INR million'],
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

    };
  }


  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);

  }

  isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  tableData = [
    ["Decide", "Area", "Project", "Investment, INR million", "Discount rate %", "Payback Period", "ARR %", "NPV, INR million", "Profitability Index", "IRR %", "Benefit Cost Ratio", "EAC"],
    ['ap23', "b9", 'c9', 'e9', 'h9', 'i9', 'j9', 'k9', 'l9', 'm9', 'n9', 'o9'],
    ['ap24', "b10", 'c10', 'e10', 'h10', 'i10', 'j10', 'k10', 'l10', 'm10', 'n10', 'o10'],
    ['ap25', "b11", 'c11', 'e11', 'h11', 'i11', 'j11', 'k11', 'l11', 'm11', 'n11', 'o11'],
    ['ap26', "b12", 'c12', 'e12', 'h12', 'i12', 'j12', 'k12', 'l12', 'm12', 'n12', 'o12'],
    ['ap27', "b13", 'c13', 'e13', 'h13', 'i13', 'j13', 'k13', 'l13', 'm13', 'n13', 'o13'],
    ['ap28', "b14", 'c14', 'e14', 'h14', 'i14', 'j14', 'k14', 'l14', 'm14', 'n14', 'o14'],
    ['ap29', "b15", 'c15', 'e15', 'h15', 'i15', 'j15', 'k15', 'l15', 'm15', 'n15', 'o15'],
    ['ap30', "b16", 'c16', 'e16', 'h16', 'i16', 'j16', 'k16', 'l16', 'm16', 'n16', 'o16'],
    ['ap31', "b17", 'c17', 'e17', 'h17', 'i17', 'j17', 'k17', 'l17', 'm17', 'n17', 'o17'],
    ['ap32', "b18", 'c18', 'e18', 'h18', 'i18', 'j18', 'k18', 'l18', 'm18', 'n18', 'o18'],
    ['ap33', "b19", 'c19', 'e19', 'h19', 'i19', 'j19', 'k19', 'l19', 'm19', 'n19', 'o19'],
    ['ap34', "b20", 'c20', 'e20', 'h20', 'i20', 'j20', 'k20', 'l20', 'm20', 'n20', 'o20'],
    ['ap35', "b21", 'c21', 'e21', 'h21', 'i21', 'j21', 'k21', 'l21', 'm21', 'n21', 'o21'],
    ['ap36', "b22", 'c22', 'e22', 'h22', 'i22', 'j22', 'k22', 'l22', 'm22', 'n22', 'o22'],

  ];


  getFetchData(attempt: string) {
    let apiname = '/cbgame/fetchcbgame';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              let jsonarray1 = [];
              this.result = data.resultList[0];
              this._global.casemanagementid.next(data.resultList[0].cbgamecmid);
              if (data.resultList[0].cbGameCM.cbGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }

              if (this.result.cbgamedata) {
                this.submitprove = data.resultList[0].cbgamedata.ao39;
                if ((this.submitprove == 'yes') || (this.submitprove == 'yes') || (this.timefinished)) {
                  this.inputDisabled = true;
                }
                // let dynamicHeaders = [
                //   this.result.cbgamedata?.i8 || "i8",
                //   this.result.cbgamedata?.j8 || "j8",
                //   this.result.cbgamedata?.k8 || "k8",
                //   this.result.cbgamedata?.l8 || "l8",
                //   this.result.cbgamedata?.m8 || "m8",
                //   this.result.cbgamedata?.n8 || "n8",
                //   this.result.cbgamedata?.o8 || "o8",
                // ];

                // this.tableData[0] = [
                //   "Decide", "Area", "Project", "Investment, INR million", "Discount rate %",
                //   ...dynamicHeaders
                // ];


                this.budgetvalue = this.result.cbgamedata.c43;
                if (this.budgetvalue < 0) {
                }
                jsonarray1.push(this.budgetvalue);

                this.refrencespriceperuserchart.series = [
                  { "name": "Budget Left, INR million", "data": jsonarray1 },
                ]

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

  formatCellValue(cell: any, index: number): string {
    if (index === 3) { // "Investment, INR million"
      return this.isNumber(cell) ? (+cell).toFixed(2) : cell;
    } else if (index === 4) { // "Discount rate %"
      return this.isNumber(cell) ? (+cell * 100).toFixed(2) : cell;
    } else if (index === 5 || index === 7 || index === 8 || index === 10 || index === 11) { // "i8", "k8", "l8", "n8", "o8"
      return this.isNumber(cell) ? (+cell).toFixed(2) : cell;
    } else if (index === 6 || index === 9) { // "j8", "m8"
      return this.isNumber(cell) ? (+cell * 100).toFixed(0) : cell;
    } else {
      return cell;
    }
  }

  checkNegativityOfOutput(cellname: string, value: number) {
    this.result.cbgamedata[cellname] = value;
    let val = (Number(this.result.cbGameCM.cbgameperioddata.h45)) + (
      ((Number(this.result.cbgamedata.ap23)) * (Number(this.result.cbgamedata.e27))) +
      ((Number(this.result.cbgamedata.ap24)) * (Number(this.result.cbgamedata.e28))) +
      ((Number(this.result.cbgamedata.ap25)) * (Number(this.result.cbgamedata.e29))) +
      ((Number(this.result.cbgamedata.ap26)) * (Number(this.result.cbgamedata.e30))) +
      ((Number(this.result.cbgamedata.ap27)) * (Number(this.result.cbgamedata.e31))) +
      ((Number(this.result.cbgamedata.ap28)) * (Number(this.result.cbgamedata.e32))) +
      ((Number(this.result.cbgamedata.ap29)) * (Number(this.result.cbgamedata.e33))) +
      ((Number(this.result.cbgamedata.ap30)) * (Number(this.result.cbgamedata.e34))) +
      ((Number(this.result.cbgamedata.ap31)) * (Number(this.result.cbgamedata.e35))) +
      ((Number(this.result.cbgamedata.ap32)) * (Number(this.result.cbgamedata.e36))) +
      ((Number(this.result.cbgamedata.ap33)) * (Number(this.result.cbgamedata.e37))) +
      ((Number(this.result.cbgamedata.ap34)) * (Number(this.result.cbgamedata.e38))) +
      ((Number(this.result.cbgamedata.ap35)) * (Number(this.result.cbgamedata.e39))) +
      ((Number(this.result.cbgamedata.ap36)) * (Number(this.result.cbgamedata.e40)))
    )
    return val;

  }

  //write api call
  writegameData(cellKey: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked ? 1 : 0;
    let value = this.checkNegativityOfOutput(cellKey, isChecked)
    if (value < 0) {
      this.result.cbgamedata[cellKey] = 0;
      (event.target as HTMLInputElement).checked = false;
      this._alert.error("Reselect projects to keep them under the provided budget.");
      return;
    }

    const apiname = "/cbgame/singleinputcbgame";



    let body = {
      [cellKey]: isChecked,
    };


    this._api.writeGameData("cbgame", 2, body, apiname, 'cbgamecmid').subscribe(
      (data: any) => {
        if (data.status === "Success") {
          this.getFetchData(this.noofattempt);
        }
      },
      (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    );
  }
  openDialog(): void {
    this.dialog.open(CapitalbudgetingfoodforthoughtComponent, {
      data: {},
    });
  }

}

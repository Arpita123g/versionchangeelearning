import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexPlotOptions, ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis, ApexYAxis,
} from "ng-apexcharts";
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { LogisticsmodegamefoodforthoughtComponent } from '../logisticsmodegamefoodforthought/logisticsmodegamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

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
  selector: 'app-logisticsmodegameinbound',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, TippyDirective],
  templateUrl: './logisticsmodegameinbound.component.html',
  styleUrls: ['./logisticsmodegameinbound.component.scss']
})
export class LogisticsmodegameinboundComponent extends AbstractComponent {
  foodforthought: boolean = true;
  Trucking: barchart;
  co2emission: barchart;
  n2oemission: barchart;
  ch4emission: barchart;
  result: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  showEmmisionStatus: boolean = true;
  disabled: boolean[] = [];
  checkdisable: boolean = false;

  truckinggraphvalue: any =
    [
    ['f13', 'g13'],
    ['f14', 'g14'],
    ['f15', 'g15'],
    ]

  periodcellname: any = ['g14', 'g15', 'g16', 'g25', 'g26', 'g27', 'g30', 'g31', 'g32', 'c10', 'c11', 'c12', 'c13', 'f14', 'f15', 'f16'];

  // emissionco2graphvalue: any = ['h28', 'i28']

  // emissionch4graphvalue: any = ['h29', 'i29']

  // emissionn2ographvalue: any = ['h30', 'i30']



  // truckinggraphvalue: any =
  //   [['F13', 'G13'],
  //   ['F14', 'G14'],
  //   ['F15', 'G15'],
  //   ]

  // periodcellname: any = ['G14', 'G15', 'G16', 'G25', 'G26', 'G27', 'G30', 'G31', 'G32'];

  emissionco2graphvalue: any = ['CO2 Emission (kg)', 'i28']

  emissionch4graphvalue: any = ['CH4 Emission (g)', 'i29']

  emissionn2ographvalue: any = ['N2O Emission (g)', 'i30']

  databasecellname: any = ['at4', 'at5', 'at6', 'at9',
    'au9', 'av9', 'aw9', 'ax9', 'at10', 'au10', 'av10', 'aw10', 'ax10', 'at11', 'au11', 'av11', 'aw11', 'ax11']

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);


    this.Trucking = {
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
      xaxis: this.xaxis[0],
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
        text: "Allocated Capacity, metric tonnes",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.co2emission = {
      series: [],
      chart: {
        height: 250,
        type: "bar",

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

        position: "bottom",
        labels: {
          offsetY: 0,
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
        text: "CO2 Emission, kg",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.n2oemission = {
      series: [],
      chart: {
        height: 250,
        type: "bar",
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

        position: "bottom",
        labels: {
          offsetY: 0,
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
        text: "N2O Emission, g",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.ch4emission = {
      series: [],
      chart: {
        height: 250,
        type: "bar",
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

        position: "bottom",
        labels: {
          offsetY: 0,
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
        text: "CH4 Emission, g",
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
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
    let apiname = '/logistics/fetchlogistics';
    // let apiname = '/consumerbehaviour/testforgame'
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].logisticscmid);

              if (data.resultList[0].logisticsCM.logisticsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;

              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].logisticsCM[this.periodcellname[i]]
              }
              if ((data.resultList[0].aw53 == 'yes') || (data.resultList[0].aw53 == 'Yes')|| (this.timefinished)) {
                this.checkdisable = true;

              }
              for (let i = 16; i < 33; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 16]];
                if (i > 18) {
                  if (this.result[i] == "Yes") {
                    this.result[i] = true;
                  } else if (this.result[i] == "No") {
                    this.result[i] = false;
                  } else if (this.result[i] == "1") {
                    this.result[i] = 'Yes';
                  } else if (this.result[i] == "0") {
                    this.result[i] = 'No';
                  }
                }
              }
             
              if (data.resultList[0].logisticsCM.logisticsCMActiveStatus.emissionsstatus == "active") {
                this.showEmmisionStatus = true;
              } else {
                this.showEmmisionStatus = false;
              }
              this.updateInputResValue();

              // for (let i = 0; i < 3; i++) {
              //   this.jsonarray1.push({ 'x': data.resultList[0][this.truckinggraphvalue[i][0]], 'y': Number(data.resultList[0][this.truckinggraphvalue[i][1]]) });

              // }
              // this.Trucking.series = [{ "name": 'value', "data": this.jsonarray1 }]

              // for (let i = 0; i < 1; i++) {
              //   this.jsonarray3.push({ 'x': "", 'y': Number(data.resultList[0][this.emissionco2graphvalue[1]]).toFixed(1) });
              //   this.jsonarray4.push({ 'x': "", 'y': Number(data.resultList[0][this.emissionch4graphvalue[1]]).toFixed(1) });
              //   this.jsonarray5.push({ 'x': "", 'y': Number(data.resultList[0][this.emissionn2ographvalue[1]]).toFixed(1) });
              // }
              // this.co2emission.series = [{ "name": "value", "data": this.jsonarray3 }];
              // this.ch4emission.series = [{ "name": "value", "data": this.jsonarray4 }];
              // this.n2oemission.series = [{ "name": "value", "data": this.jsonarray5 }];

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

  updateInputResValue() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];

    let apiname = '/logistics/fetchlogistics';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < this.periodcellname.length; i++) {
          this.result[i] = updatedData.logisticsCM[this.periodcellname[i]]
        }
        for (let i = 0; i < 3; i++) {
          this.jsonarray1.push({ 'x':updatedData[this.truckinggraphvalue[i][0]], 'y': Number(updatedData[this.truckinggraphvalue[i][1]]) });

        }
        this.Trucking.series = [{ "name": 'value', "data": this.jsonarray1 }]

        for (let i = 0; i < 1; i++) {
          this.jsonarray3.push({ 'x': "", 'y': Number(updatedData[this.emissionco2graphvalue[1]]).toFixed(1) });
          this.jsonarray4.push({ 'x': "", 'y': Number(updatedData[this.emissionch4graphvalue[1]]).toFixed(1) });
          this.jsonarray5.push({ 'x': "", 'y': Number(updatedData[this.emissionn2ographvalue[1]]).toFixed(1) });
        }
        this.co2emission.series = [{ "name": "value", "data": this.jsonarray3 }];
        this.ch4emission.series = [{ "name": "value", "data": this.jsonarray4 }];
        this.n2oemission.series = [{ "name": "value", "data": this.jsonarray5 }];
                       
      }
    });
  }

  getSelection(inputField: string, index: number, buttontype: string) {
    if (inputField == 'truck1') {

      if (buttontype == "radio") {
        this.result[19] = false;
        this.result[index] = 'Yes';
        for (let i = 20; i < 24; i++) {
          if (i != index) {
            this.result[i] = 'No'
          }
        }
      } else {
        for (let j = 20; j < 24; j++) {
          this.result[j] = 'No';
        }
      }

    } else if (inputField == 'truck2') {

      if (buttontype == "radio") {
        this.result[24] = false;
        this.result[index] = 'Yes';
        for (let i = 25; i < 29; i++) {
          if (i != index) {
            this.result[i] = 'No';
          }
        }
      } else {
        for (let j = 25; j < 29; j++) {
          this.result[j] = 'No';
        }
      }

    } else if (inputField == 'truck3') {
      if (buttontype == "radio") {
        this.result[29] = false;
        this.result[index] = 'Yes';
        for (let i = 30; i < 34; i++) {
          if (i != index) {
            this.result[i] = 'No'
          }
        }
      } else {
        for (let j = 30; j < 34; j++) {
          this.result[j] = 'No'
        }
      }
    }

    this.logisticsDataWrite();
  }
  writeInbound(index: number) {
    if ((index == 16) || (index == 17) || (index == 18)) {
      if ((this.result[index] < 10) || (this.result[index] > 35)) {
        this.result[index] = 0;
        this._alert.error('The expected range is between 10 to 35');
        this.logisticsDataWrite()
      } else {
        this.logisticsDataWrite();
      }
    } else {
      this.logisticsDataWrite();
    }
  }

  logisticsDataWrite() {
    let apiname = '/logistics/singleinputlogistics';
    let inboundData = {
      "at4": Number(this.result[16]),
      "at5": Number(this.result[17]),
      "at6": Number(this.result[18]),
      "at9": this.result[19] == true ? 'Yes' : 'No',
      "au9": this.result[20] == 'Yes' ? 1 : 0,
      "av9": this.result[21] == 'Yes' ? 1 : 0,
      "aw9": this.result[22] == 'Yes' ? 1 : 0,
      "ax9": this.result[23] == 'Yes' ? 1 : 0,
      "at10": this.result[24] == true ? 'Yes' : 'No',
      "au10": this.result[25] == 'Yes' ? 1 : 0,
      "av10": this.result[26] == 'Yes' ? 1 : 0,
      "aw10": this.result[27] == 'Yes' ? 1 : 0,
      "ax10": this.result[28] == 'Yes' ? 1 : 0,
      "at11": this.result[29] == true ? 'Yes' : 'No',
      "au11": this.result[30] == 'Yes' ? 1 : 0,
      "av11": this.result[31] == 'Yes' ? 1 : 0,
      "aw11": this.result[32] == 'Yes' ? 1 : 0,
      "ax11": this.result[33] == 'Yes' ? 1 : 0,

    }
    this._api.logisticsDataWrite("logistics", 1,
      inboundData, apiname, 'logisticscmid').subscribe((data: any) => {
        if (data.status == 'Success') {
          this.updateInputResValue();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }


  openDialog(): void {
    this.dialog.open(LogisticsmodegamefoodforthoughtComponent, {
      data: {},
    });
  }
}



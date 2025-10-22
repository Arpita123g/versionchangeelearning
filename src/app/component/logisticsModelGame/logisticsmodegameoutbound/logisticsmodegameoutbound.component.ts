import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis, ApexYAxis
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
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

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
  selector: 'app-logisticsmodegameoutbound',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, TippyDirective],
  templateUrl: './logisticsmodegameoutbound.component.html',
  styleUrls: ['./logisticsmodegameoutbound.component.scss']
})
export class LogisticsmodegameoutboundComponent extends AbstractComponent {
  allocatedcapacity: barchart;
  co2emission: barchart;
  n2oemission: barchart;
  ch4emission: barchart;
  airrail2: barchart;
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  showEmmisionStatus: boolean = true;
  result: any = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  ae60: string = '';
  ae61: string = '';
  ae62: string = '';
  ae65: string = '';
  ae66: string = '';

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);


    this.allocatedcapacity = {
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
          return val + "";
        },
      },
      xaxis: {
        categories: ['Small Trucks', 'Open Body Trucks', 'Covered Container'],
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
        text: "Allocated Capacity, metric tonnes",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.airrail2 = {
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
          return val + "";
        },
      },
      xaxis: {
        categories: ['Rail', 'Air'],
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
        categories: ['Trucks', 'Rail', 'Air'],
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
        categories: ['Trucks', 'Rail', 'Air'],
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
        categories: ['Trucks', 'Rail', 'Air'],
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

  allocatedcapacitygraphvalue: any = [
    ['k67', 'l67'],
    ['k68', 'l68'],
    ['k69', 'l69']
  ]

  airrail2graphvalue: any = [
    ['n67', 'o67'],
    ['n68', 'o68']
  ]

  

  periodcellname: any = ['ad7', 'ad8', 'ad9', 'ae17', 'ae18', 'ae19', 'ae12', 'ae13', 'ae14', 'ae22', 'ae23', 'ae24', 'ad32',
    'ad33', 'ae36', 'ae37', 'ae44', 'ae45', 'c10', 'c11', 'c12', 'c13','ae69','ae70']

  databasecellname: any = ['at36', 'at37', 'at38', 'at40', 'at41', 'at44', 'au44', 'av44', 'aw44', 'ax44', 'at45', 'au45',
  'av45', 'aw45', 'ax45', 'at46', 'au46', 'av46', 'aw46', 'ax46', 'at47', 'au47', 'av47', 'aw47', 'ax47', 'at48', 'au48',
  'av48', 'aw48', 'ax48',
  ]
  // allocatedcapacitygraphvalue: any = [
  //   ['K67', 'L67'],
  //   ['K68', 'L68'],
  //   ['K69', 'L69']
  // ]

  // airrail2graphvalue: any = [
  //   ['N67', 'O67'],
  //   ['N68', 'O68']
  // ]

  co2emissiongraphvalue: any = [
    ['CO2 Emission (kg)', 'k90', 'l90', 'm90'],
  ]
  ch4emissiongraphvalue: any = [
    ['CH4 Emission (g)', 'k91', 'l91', 'm91'],
  ]
  n2oemissiongraphvalue: any = [
    ['N2O Emission (g)', 'k92', 'l92', 'm92'],
  ]

  // periodcellname: any = ['AD7', 'AD8', 'AD9', 'AE17', 'AE18', 'AE19', 'AE12', 'AE13', 'AE14', 'AE22', 'AE23', 'AE24', 'AD32',
  //   'AD33', 'AE36', 'AE37', 'AE44', 'AE45', 'C10', 'C11', 'C12', 'C13']

  // databasecellname: any = ['AT36', 'AT37', 'AT38', 'AT40', 'AT41', 'AT44', 'AU44', 'AV44', 'AW44', 'AX44', 'AT45', 'AU45',
  //   'AV45', 'AW45', 'AX45', 'AT46', 'AU46', 'AV46', 'AW46', 'AX46', 'AT47', 'AU47', 'AV47', 'AW47', 'AX47', 'AT48', 'AU48',
  //   'AV48', 'AW48', 'AX48',
  // ]
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
              if (data.resultList[0].logisticsCM.logisticsCMActiveStatus.emissionsstatus == "active") {
                this.showEmmisionStatus = true;
              } else {
                this.showEmmisionStatus = false;
              }

              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].logisticsCM[this.periodcellname[i]]
              }
              for (let i = 24; i < 54; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 24]]
                if (i > 28) {
                  if (this.result[i] == "Yes") {
                    this.result[i] = true
                  } else if (this.result[i] == "No") {
                    this.result[i] = false
                  } else if (this.result[i] == 1) {
                    this.result[i] = 'Yes'
                  } else if (this.result[i] == 0) {
                    this.result[i] = 'No'
                  }
                }
                
              }
             if ((data.resultList[0].aw53 == 'yes') || (data.resultList[0].aw53 == 'Yes')|| (this.timefinished)) {
                this.checkdisable = true;
               
              }

              for (let i = 0; i < 3; i++) {
                this.jsonarray1.push({ 'x': this.allocatedcapacitygraphvalue[i][0], 'y': Number(data.resultList[0][this.allocatedcapacitygraphvalue[i][1]]) });
              }
              this.updateInputResValue();

              this.checkloading = false;
              
            }
          }
        },error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  updateInputResValue() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/logistics/fetchlogistics';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < this.periodcellname.length; i++) {
          this.result[i] = updatedData.logisticsCM[this.periodcellname[i]]
        }
        for (let i = 0; i < 3; i++) {
          this.jsonarray1.push({ 'x': this.allocatedcapacitygraphvalue[i][0], 'y': Number(updatedData[this.allocatedcapacitygraphvalue[i][1]]) });
        }
        for (let i = 0; i < 2; i++) {
          this.jsonarray2.push({ 'x': this.airrail2graphvalue[i][0], 'y': Number(updatedData[this.airrail2graphvalue[i][1]]) });
        }
        // for (let i = 0; i < 3; i++) {
        //   this.jsonarray3.push({ 'x': this.co2emissiongraphvalue[0][0], 'y': Number(updatedData[this.co2emissiongraphvalue[0][i + 1]]).toFixed(0) });
        //   this.jsonarray4.push({ 'x': this.ch4emissiongraphvalue[0][0], 'y': Number(updatedData[this.ch4emissiongraphvalue[0][i + 1]]).toFixed(0) });
        //   this.jsonarray5.push({ 'x': this.n2oemissiongraphvalue[0][0], 'y': Number(updatedData[this.n2oemissiongraphvalue[0][i + 1]]).toFixed(0) });
        // }
        for (let i = 0; i < 3; i++) {
          const yVal1 = Number(updatedData[this.co2emissiongraphvalue[0][i + 1]]);
          const yVal2 = Number(updatedData[this.ch4emissiongraphvalue[0][i + 1]]);
          const yVal3 = Number(updatedData[this.n2oemissiongraphvalue[0][i + 1]]);
          
          this.jsonarray3.push({ 'x': this.co2emissiongraphvalue[0][0], 'y': yVal1 });
          this.jsonarray4.push({ 'x': this.ch4emissiongraphvalue[0][0], 'y': yVal2 });
          this.jsonarray5.push({ 'x': this.n2oemissiongraphvalue[0][0], 'y': yVal3 });
        }
        // console.log("r",this.result)
        this.allocatedcapacity.series = [{ "name": "Allocated Capacity, metric tonnes", "data": this.jsonarray1 }]
        this.airrail2.series = [{ "name": "Allocated Capacity, metric tonnes", "data": this.jsonarray2 }]
        this.co2emission.series = [{ "name": "CO2 Emission, kg", "data": this.jsonarray3 }]
        this.ch4emission.series = [{ "name": "CH4 Emission, g", "data": this.jsonarray4 }]
        this.n2oemission.series = [{ "name": "N2O Emission, g", "data": this.jsonarray5 }]
                       
      }
    });
  }

  getSelection(inputField: string, index: number, buttontype: string) {
    if (inputField == 'smalltrucks') {
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
          this.result[j] = 'No';
        }

      }

    } else if (inputField == 'openbodytrucks') {
      if (buttontype == "radio") {
        this.result[34] = false;
        this.result[index] = 'Yes';
        for (let i = 35; i < 39; i++) {
          if (i != index) {
            this.result[i] = 'No';
          }
        }
      } else {
        for (let j = 35; j < 39; j++) {
          this.result[j] = 'No';
        }
      }
    } else if (inputField == 'coveredcontainer') {
      if (buttontype == "radio") {
        this.result[39] = false;
        this.result[index] = 'Yes';
        for (let i = 40; i < 44; i++) {
          if (i != index) {
            this.result[i] = 'No';
          }
        }
      } else {
        for (let j = 40; j < 44; j++) {
          this.result[j] = 'No'
        }
      }
    } else if (inputField == 'rail') {
      if (buttontype == "radio") {
        this.result[44] = false;
        this.result[index] = 'Yes';
        for (let i = 45; i < 49; i++) {
          if (i != index) {
            this.result[i] = 'No'
          }
        }
      } else {
        for (let j = 45; j < 49; j++) {
          this.result[j] = 'No'
        }
      }
    } else if (inputField == 'air') {
      if (buttontype == "radio") {
        this.result[49] = false;
        this.result[index] = 'Yes';
        for (let i = 50; i < 54; i++) {
          if (i != index) {
            this.result[i] = 'No'
          }
        }
      } else {
        for (let j = 50; j < 54; j++) {
          this.result[j] = 'No'
        }
      }
    }
    this.logisticsDataWrite();
  }

  writeOutbound(index: number) {
    if ((index == 24) || (index == 25) || (index == 26)) {
      if ((this.result[index] < 10) || (this.result[index] > 50)) {
        this.result[index] = 0;
        this._alert.error('The expected range is between 10 to 50');
        this.logisticsDataWrite();
      } else {
        this.logisticsDataWrite();
      }

    }
    else if (index == 27) {
      if ((this.result[27] < 0 || this.result[27] > 4)) {
        this.result[index] = 0;
        this._alert.error('The expected range is between 0 to 4');
      } else {
        this.logisticsDataWrite();
      }
    }
    else if (index == 28) {
      if ((this.result[28] < 0 || this.result[28] > 3)) {
        this.result[index] = 0;
        this._alert.error('The expected range is between 0 to 3');
      } else {
        this.logisticsDataWrite();
      }
    }
    else {
      this.logisticsDataWrite();
    }


  }

  logisticsDataWrite() {
    let apiname = '/logistics/singleinputlogistics';
    let outboundData = {
      "at36": Number(this.result[24]),
      "at37": Number(this.result[25]),
      "at38": Number(this.result[26]),
      "at40": Number(this.result[27]),
      "at41": Number(this.result[28]),
      "at44": this.result[29] == true ? 'Yes' : 'No',
      "au44": this.result[30] == 'Yes' ? 1 : 0,
      "av44": this.result[31] == 'Yes' ? 1 : 0,
      "aw44": this.result[32] == 'Yes' ? 1 : 0,
      "ax44": this.result[33] == 'Yes' ? 1 : 0,
      "at45": this.result[34] == true ? 'Yes' : 'No',
      "au45": this.result[35] == 'Yes' ? 1 : 0,
      "av45": this.result[36] == 'Yes' ? 1 : 0,
      "aw45": this.result[37] == 'Yes' ? 1 : 0,
      "ax45": this.result[38] == 'Yes' ? 1 : 0,
      "at46": this.result[39] == true ? 'Yes' : 'No',
      "au46": this.result[40] == 'Yes' ? 1 : 0,
      "av46": this.result[41] == 'Yes' ? 1 : 0,
      "aw46": this.result[42] == 'Yes' ? 1 : 0,
      "ax46": this.result[43] == 'Yes' ? 1 : 0,
      "at47": this.result[44] == true ? 'Yes' : 'No',
      "au47": this.result[45] == 'Yes' ? 1 : 0,
      "av47": this.result[46] == 'Yes' ? 1 : 0,
      "aw47": this.result[47] == 'Yes' ? 1 : 0,
      "ax47": this.result[48] == 'Yes' ? 1 : 0,
      "at48": this.result[49] == true ? 'Yes' : 'No',
      "au48": this.result[50] == 'Yes' ? 1 : 0,
      "av48": this.result[51] == 'Yes' ? 1 : 0,
      "aw48": this.result[52] == 'Yes' ? 1 : 0,
      "ax48": this.result[53] == 'Yes' ? 1 : 0,


    }
    this._api.businessdatawrite("logistics", 1,
      outboundData, apiname, 'logisticscmid').subscribe((data: any) => {
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

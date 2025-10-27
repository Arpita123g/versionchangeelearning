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
  selector: 'app-logisticsmodegamewarehouse',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],
  templateUrl: './logisticsmodegamewarehouse.component.html',
  styleUrls: ['./logisticsmodegamewarehouse.component.scss']
})
export class LogisticsmodegamewarehouseComponent extends AbstractComponent {
  foodforthought: boolean = true;
  // warehouseupgrade: barchart;
  co2emission: barchart;
  n2oemission: barchart;
  ch4emission: barchart;
  energyconsumption: barchart
  heckdisable: boolean = false;
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray1: any = [];
  result: any = [];
  D9: string = '';
  D10: string = '';
  D12: string = '';
  E9: string = '';
  E10: string = '';
  E12: string = '';
  F9: string = '';
  F10: string = '';
  F12: string = '';
  G9: String = '';
  G10: string = '';
  J124: string = '';
  J125: string = '';
  J126: string = '';
  J127: string = '';
  J128: string = '';
  J129: string = '';
  textshow: { [key: string]: boolean } = {};
  showEmmisionStatus: boolean = true;
  warehousecheckbox: number = 0;
  disabled: boolean[] = [];
  checkdisable: boolean = false;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    
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
          columnWidth: "40%",
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
          columnWidth: "40%",
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
          columnWidth: "40%",
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
        text: "CH4 Emission, g",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }

    this.energyconsumption = {
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
          columnWidth: "40%",
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
        text: "Energy Consumption, MWH",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    }
  }
  cardData1 = [
    {
      id: 'card1',
      title: 'i12',
      description: "It is a common mechanical equipment mainly used to move goods from one place to another. The system is rapid, used for bulky movements and increases productivity and efficiency by 5%. The measures also reduce the electricity consumption by around 3%",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'i13',
      description: "A machine designed for the automated storage of materials. They travel along the aisles of the warehouse, where they enter, position and extract materials. The stacker cranes are guided by a management software system, which coordinates all the activities. This increases efficiency by 10% and reduces error by 8% while the electricity consumption reduction is low.",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'i14',
      description: "Stretch films are highly stretchable plastic which is wrapped around the boxes in order to keep the material tightly wrapped and this eventually reduces the damage to the material by 9%. The machine is efficient and has 5 ratings in the market in terms of electricity consumption reduction.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'i15',
      description: "A technology solution that automates inventory control and syncs the different processes taking place in the facility. It also coordinates the tasks of the operators and order pickers as well as the automated transportation and storage systems operating in the centre. This helps to optimize cost by around 20% and make the warehouse energy efficient by reducing emission gases.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'i16',
      description: "The Shuttle System is an automated storage solution for boxes that speeds up order picking, ensuring a constant flow of products from the warehouse slots to the pick stations. The system increases productivity and efficiency by around 9% as well as energy consumption is reduced by 4%.",
      turncatedtext: "",
    },
  ]
  override ngOnInit(): void {

    this.getFetchData();
  }

  warehouseupgradegraph: any = [

  ]
  // co2emissiongraph: any = [
  //   ['n10', 'o10', 'p10']
  // ]
  // n2oemissiongraph: any = [
  //   ['n11', 'o11', 'p11']
  // ]
  // ch4emissiongraph: any = [
  //   ['n12', 'o12', 'p12']
  // ]
  // energyconsumptiongraph: any = [
  //   ['n13', 'o13', 'p13']
  // ]
  // databasecellname: any = ['at13','au13','av13','aw13','at14', 'at15', 'au14', 'au15','av14','av15',  'aw14','aw15',  'at17', 'au17',  'av17','aw17']
  // periodcellname: any = ['i12', 'j12', 'k12', 'i13', 'j13', 'k13', 'i14', 'j14', 'k14', 'i15', 'j15', 'k15', 'i16', 'j16', 'k16']
  co2emissiongraph: any = [
    ['Previous', 'o10'],
    ['Current', 'p10']]

  ch4emissiongraph: any = [
    ['Previous', 'o11',],
    ['Current', 'p11']

  ]

  n2oemissiongraph: any = [
    ['Previous', 'o12',],
    ['Current', 'p12']

  ]

  energyconsumptiongraph: any = [
    ['Previous', 'o13',],
    ['Current', 'p13']

  ]
  databasecellname: any = ['at13', 'au13', 'av13', 'aw13', 'at14', 'at15', 'au14', 'au15', 'av14', 'av15', 'aw14', 'aw15',
    'at17', 'au17', 'av17', 'aw17', 'at19', 'at20', 'at21', 'at22', 'at23']
  periodcellname: any = ['i12', 'i13', 'i14', 'i15', 'i16', 'k12', 'k13', 'k14', 'k15', 'k16']
  carddatafilled: boolean = false;
  getFetchData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = []; this.jsonarray4 = []; this.jsonarray5 = [];
    let apiname = '/logistics/fetchlogistics';
    // let apiname = '/consumerbehaviour/testforgame';
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
              if ((data.resultList[0].aw53 == 'yes') || (data.resultList[0].aw53 == 'Yes')|| (this.timefinished)) {
                this.checkdisable = true;
               
              }

              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]]
                if ((i != 12) && (i != 13) && (i != 14) && (i != 15)) {
                  if (this.result[i] == "1") {
                    if (i < 16) {
                      this.result[i] = 'Yes'
                    } else {
                      this.result[i] = true;
                    }

                  } else if (this.result[i] == "0") {
                    if (i < 16) {
                      this.result[i] = 'No'
                    } else {
                      this.result[i] = false;
                    }
                  }
                }
              }
              this.warehousecheckbox = 0;
              for (let i = 16; i < 21; i++) {
                if (this.result[i] == true) {
                  this.warehousecheckbox = this.warehousecheckbox + 1;
                }
              }
              if (this.warehousecheckbox == 2) {
                for (let j = 16; j < 21; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 16] = false;
                  } else {
                    this.disabled[j - 16] = true;
                  }
                }
              }
              for (let i = 21; i < 31; i++) {
                this.result[i] = data.resultList[0].logisticsCM[this.periodcellname[i - 21]]
              }

              // for (let i = 0; i < 1; i++) {
              //   this.jsonarray1.push({ 'x': this.warehouseupgradegraph[i][0], 'y': Number(data.resultList[0][this.warehouseupgradegraph[i][1]]) });
              // }
              this.updateInputResValue();

              if (this.carddatafilled == false) {
                for (let i = 0; i < this.cardData1.length; i++) {
                  this.cardData1[i].title = String(data.resultList[0].logisticsCM[this.cardData1[i].title])

                  this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
                }
              }
              this.carddatafilled = true;


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
        

        for (let i = 0; i < 2; i++) {

          this.jsonarray2.push({ 'x': this.co2emissiongraph[i][0], 'y': Number(updatedData[this.co2emissiongraph[i][1]]).toFixed(0) });
          this.jsonarray3.push({ 'x': this.ch4emissiongraph[i][0], 'y': Number(updatedData[this.ch4emissiongraph[i][1]]).toFixed(0) });
          this.jsonarray4.push({ 'x': this.n2oemissiongraph[i][0], 'y': Number(updatedData[this.n2oemissiongraph[i][1]]).toFixed(0) });
          this.jsonarray5.push({ 'x': this.energyconsumptiongraph[i][0], 'y': Number(updatedData[this.energyconsumptiongraph[i][1]]).toFixed(0) });
        }
        // this.warehouseupgradegraph.series = [{ "name": "value", "data": this.jsonarray1 }];
        this.co2emission.series = [{ "name": "Value", "data": this.jsonarray2 }];
        this.ch4emission.series = [{ "name": "value", "data": this.jsonarray3 }];
        this.n2oemission.series = [{ "name": "value", "data": this.jsonarray4 }];
        this.energyconsumption.series = [{ "name": "value", "data": this.jsonarray5 }];
                       
      }
    });
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  dockallocationcal(index: number) {
    console.log("unnnn", this.result[13])
    for (let i = 12; i < 15; i++) {

      if (this.result[i] == undefined) {
        this.result[i] = 0
      }
    }
    if (this.result[index] >= 2 && this.result[index] <= 8) {
      this.result[15] = 18 - (Number(this.result[12]) + Number(this.result[13]) + Number(this.result[14]))
      if (Number(this.result[15] < 0) || Number(this.result[15] > 18)) {
        for (let i = 12; i < 16; i++) {
          this.result[i] = 0;
        }
        this._alert.error('The sum of them should be less than or equal to 18');
      } else {
        this.writeWarehouse();
      }
    }
    else {

      this.result[index] = 0;
      this._alert.error('Dock allocation cannot go negative, the number in each dock should be between 2 to 8');
    }

  }
  getSelection(inputField: string, index1: number, index2: number) {
    console.log("data", this.result)
    if (inputField == 'Unison') {
      this.result[index1] = 'Yes';
      this.result[index2] = 'No';

    } else if (inputField == 'Promton') {
      this.result[index1] = 'Yes';
      this.result[index2] = 'No';

    } else if (inputField == 'Corporate') {
      this.result[index1] = 'Yes';
      this.result[index2] = 'No';
    }
    else if (inputField == 'eCom') {
      this.result[index1] = 'Yes';
      this.result[index2] = 'No';

    } else if (inputField == 'warehouse') {
      if (this.result[index1] == true) {
        this.warehousecheckbox = this.warehousecheckbox + 1;
        if (this.warehousecheckbox == 2) {
          for (let j = 16; j < 21; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 16] = false;
            } else {
              this.disabled[j - 16] = true;
            }
          }

        }
      } else {
        this.warehousecheckbox = this.warehousecheckbox - 1;
        if (this.warehousecheckbox == 1) {
          for (let j = 0; j < 5; j++) {
            this.disabled[j] = false;
          }
        }
      }

    }



    this.writeWarehouse();
  }
  writeWarehouse() {
    let apiname = '/logistics/singleinputlogistics';
    let warehouseData = {
      "at14": this.result[4] == 'Yes' ? 1 : 0,
      "at15": this.result[5] == 'Yes' ? 1 : 0,
      "at17": this.result[12],
      "au14": this.result[6] == 'Yes' ? 1 : 0,
      "au15": this.result[7] == 'Yes' ? 1 : 0,
      "au17": this.result[13],
      "av14": this.result[8] == 'Yes' ? 1 : 0,
      "av15": this.result[9] == 'Yes' ? 1 : 0,
      "av17": this.result[14],
      "aw14": this.result[10] == 'Yes' ? 1 : 0,
      "aw15": this.result[11] == 'Yes' ? 1 : 0,
      "aw17": this.result[15],
      "at19": this.result[16] == true ? 1 : 0,
      "at20": this.result[17] == true ? 1 : 0,
      "at21": this.result[18] == true ? 1 : 0,
      "at22": this.result[19] == true ? 1 : 0,
      "at23": this.result[20] == true ? 1 : 0,
    }
    this._api.logisticsDataWrite("logistics", 1,
      warehouseData, apiname, 'logisticscmid').subscribe((data: any) => {
        if (data.status == 'Success') {
          this.updateInputResValue();
        }
      }, (error: any) => {
        this.checkloading = false;
        // this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })

  }

  openDialog(): void {
    this.dialog.open(LogisticsmodegamefoodforthoughtComponent, {
      data: {},
    })
  }

}




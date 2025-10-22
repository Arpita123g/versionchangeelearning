import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexNoData,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { SalestargetfoodforthoughtComponent } from '../salestargetfoodforthought/salestargetfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

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

@Component({
  selector: 'app-salestargetsalesplanning',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './salestargetsalesplanning.component.html',
  styleUrls: ['./salestargetsalesplanning.component.scss']
})
export class SalestargetsalesplanningComponent extends AbstractComponent {
  foodforthought: boolean = true;
  bonustotal: boolean = true;

  employeesgraph: barChart;
  costinrgraph: barChart;
  attritiongraph: barChart;
  compensationgraph: barChart;
  result: any = [];
  periodresult: any = [];
  databaseresult: any = [];
  disabled: boolean = false;
 
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];

  databasecellname: any = ['av7', 'aw7', 'ax7', 'av10', 'av11', 'av12', 'k18', 'm18', 'l18', 'k19', 'm19', 'l19', 'k20', 'm20', 'l20', //14
    'av15', 'aw15', 'ax15', 'av16', 'aw16', 'ax16', 'ba21', 'bc21', 'be21', 'bb21', 'bd21', 'bf21', 'av23', 'av24', 'av25', 'av19', 'av20', 'bi21', 'bj21', 'bk21',
    'bg21', 'bh21'];
  periodcellname: any = ['k46', 'k47', 'k48', 'l46', 'l47', 'l48', 'k28', 'k29', 'k30', 'k52', 'l52']
  employeesgraphvalue = [
    ["Modern Trade", "i13", "j13"],
    ["Retail", "i14", "j14"],
    ["HORECA", "i15", "j15"],
  ];
  // employeesgraphvalue = [
  //   ["Modern Trade", "15", "15"],
  //   ["Retail", "17", "16"],
  //   ["HORECA", "20", "19"],
  // ];
  costinrgraphvalue = [
    ["Modern Trade", "s13", "t13"],
    ["Retail", "s14", "t14"],
    ["HORECA", "s15", "t15"],
  ];
  // costinrgraphvalue = [
  //   ["Modern Trade", "0", "0"],
  //   ["Retail", "0", "20000"],
  //   ["HORECA", "0", "20000"],
  // ];
  attritionrgraphvalue = [
    ["j75", "k75"],
    ["j76", "k76"],
  ];
  comoensationgraphvalue = [
    ["Pablo Inc., MT", "Market", "Pablo Inc., Retail", "Market", "Pablo Inc., HoReCa", "Market"],
    ["p19", "q19", "r19", "s19", "t19", "u19"],
    ["p20", "q20", "r20", "s20", "t20", "u20"],
  ];
  // comoensationgraphvalue = [
  //   ["Pablo Inc.", "Market", "Pablo Inc.", "Market", "Pablo Inc.", "Market"],
  //   ["36000", "38500", "34000", "36800", "40000", "42560"],
  //   ["32000", "32400", "30000", "30800", "28000", "28600"],
  // ];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,  ) {
      
    super(_login, _api, _alert, _global, _router, _restapiservice);
  

    this.employeesgraph = {
      series: [
        // {
        //   name: 'Previous Year',
        //   data: [15, 17, 20]
        // },
        // {
        //   name: 'Current Year',
        //   data: [15, 16, 19]
        // }
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
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
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
        // categories: ['Modern Trade', 'Retail', 'HoReCa'],
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
      title: {
        text: "Employees",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.costinrgraph = {
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
      noData: this.nodata[1],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
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
        // categories: ['Modern Trade', 'Retail', 'HoReCa'],
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
      title: {
        text: "Cost, INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.attritiongraph = {
      series: [
        // {
        //   data: [5, 4]
        // },

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
      noData: this.nodata[1],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
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
        // categories: ['Company', 'Market'],
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
            return val + "%";
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
        text: "Attrition Rate, %",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.compensationgraph = {
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
      noData: this.nodata[1],
      plotOptions: {
        bar: {
          dataLabels: {
            position: "center",
          },
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
        // categories: ['Pablo, Inc.', 'Market','Pablo, Inc.', 'Market','Pablo, Inc.', 'Market',],
        position: "bottom",
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        group: {
          
          groups: [
            { title: 'Modern Trade', cols: 2 },
            { title: 'Retail', cols: 2 },
            { title: 'HORECA', cols: 2 }
           
          ]
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
        text: "Compensation, INR/month",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }



  getFetchData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = [];
    this.jsonarray4 = []; this.jsonarray5 = []; this.jsonarray6 = [];
    this.jsonarray7 = [];
    let apiname = '/salestarget/fetchsalestarget';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {

              this._global.casemanagementid.next(data.resultList[0].salestargetcmid);
              if ((data.resultList[0].bb7 == 'yes')  || (this.timefinished)){
                this.disabled = true;
              }
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.bonusstatus == 'inactive') {
                this.bonustotal = false;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]];
                // if (this.result[i] === 0) {
                //   if (this.databasecellname[i] === 'av7') {
                //     this.result[i] = 14000;
                //   } else if (this.databasecellname[i] === 'aw7') {
                //     this.result[i] = 9000;
                //   } else if (this.databasecellname[i] === 'ax7') {
                //     this.result[i] = 17000;
                //   }
                // }
              }
              for (let i = 27; i < 32; i++) {
                this.result[i] = (Number(data.resultList[0][this.databasecellname[i]]) * 100).toFixed(0);

              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.periodresult[i] = data.resultList[0].salesTargetCM[this.periodcellname[i]];
              }
              for (let i = 6; i < 11; i++) {
                this.periodresult[i] = (Number(data.resultList[0].salesTargetCM[this.periodcellname[i]]) * 100).toFixed(0);
              }

              for (let i = 0; i < this.employeesgraphvalue.length; i++) {
                this.jsonarray1.push({ 'x': [this.employeesgraphvalue[i][0]], 'y': Number(data.resultList[0][this.employeesgraphvalue[i][1]]) });
                this.jsonarray2.push({ 'x': [this.employeesgraphvalue[i][0]], 'y': Number(data.resultList[0][this.employeesgraphvalue[i][2]]) });
                // this.jsonarray1.push({ 'x': [this.employeesgraphvalue[i][0]], 'y': Number([this.employeesgraphvalue[i][1]])  });
                // this.jsonarray2.push({ 'x': [this.employeesgraphvalue[i][0]], 'y': Number([this.employeesgraphvalue[i][2]] ) });

              }
              this.employeesgraph.series = [{ "name": "Previous Year", "data": this.jsonarray1 }, { "name": "Current Year", "data": this.jsonarray2 },
              ]
              console.log('employeesgraph', this.employeesgraph.series)

              for (let i = 0; i < this.costinrgraphvalue.length; i++) {
                this.jsonarray3.push({ 'x': [this.costinrgraphvalue[i][0]], 'y': Number(data.resultList[0][this.costinrgraphvalue[i][1]]) });
                this.jsonarray4.push({ 'x': [this.costinrgraphvalue[i][0]], 'y': Number(data.resultList[0][this.costinrgraphvalue[i][2]]) });
                // this.jsonarray3.push({ 'x': [this.costinrgraphvalue[i][0]], 'y': Number([this.costinrgraphvalue[i][1]])  });
                // this.jsonarray4.push({ 'x': [this.costinrgraphvalue[i][0]], 'y': Number([this.costinrgraphvalue[i][2]] ) });

              }
              this.costinrgraph.series = [{ "name": "Hiring", "data": this.jsonarray3 }, { "name": "Retrenchment", "data": this.jsonarray4 },
              ]
              console.log('employeesgraph1', this.costinrgraph.series)

              for (let i = 0; i < this.attritionrgraphvalue.length; i++) {
                this.jsonarray5.push({ 'x': data.resultList[0].salesTargetCM[this.attritionrgraphvalue[i][0]], 'y': Number(data.resultList[0].salesTargetCM[this.attritionrgraphvalue[i][1]] * 100).toFixed(0) });
              }
              this.attritiongraph.series = [
                { "name": "value", "data": this.jsonarray5 },
              ]

              for (let i = 0; i < this.comoensationgraphvalue[0].length; i++) {
                this.jsonarray6.push({ 'x': this.comoensationgraphvalue[0][i], 'y': Number(data.resultList[0][this.comoensationgraphvalue[1][i]]) });
                this.jsonarray7.push({ 'x': this.comoensationgraphvalue[0][i], 'y': Number(data.resultList[0][this.comoensationgraphvalue[2][i]]) });
              }
              this.compensationgraph.series = [{ "name": "Business background", "data": this.jsonarray6 }, { "name": "Non-business background", "data": this.jsonarray7 },
              ]
              console.log("compensationgraph", this.compensationgraph.series)
              // for (let i = 0; i < this.periodcellname.length; i++) {
              //   this.periodresult[i] = data.resultList[0].salestargetCM[this.periodcellname[i]];
              // }
              // for (let i = 0; i < this.databasecellname.length; i++) {
              //   this.databaseresult[i] = data.resultList[0][this.databasecellname[i]];
              //   if((i==0)||(i==1)||(i==2)){
              //     this.databaseresult[i] = Number(this.databaseresult[i])*100;
              //   }
              // }

              // for (let i = 0; i < this.acnecreamgraphcell.length; i++) {
              //   this.jsonarray1.push({ 'x': "", 'y': (data.resultList[0][this.acnecreamgraphcell[i][1]]) });

              // }
              // for (let i = 0; i < this.applecidergraphcell.length; i++) {
              //   this.jsonarray2.push({ 'x': "", 'y': (data.resultList[0][this.applecidergraphcell[i][1]]) });

              // }
              // this.acnecreamcostpersalegraph.series = [
              //   { "name": "", "data": this.jsonarray1 },

              // ]
              // this.appleciderfacewashgraph.series = [
              //   { "name": "", "data": this.jsonarray2 },

              // ]
              // console.log("acnecreamcostpersalegraph",this.acnecreamcostpersalegraph.series,
              // "appleciderfacewashgraph",this.appleciderfacewashgraph.series)

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

   updateData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = [];
    this.jsonarray4 = []; this.jsonarray5 = []; this.jsonarray6 = [];
    this.jsonarray7 = [];
       let apiname = '/salestarget/fetchsalestarget';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
          for (let i = 0; i < this.periodcellname.length; i++) {
                this.periodresult[i] = updatedData.salesTargetCM[this.periodcellname[i]];
              }
              for (let i = 6; i < 11; i++) {
                this.periodresult[i] = (Number(updatedData.salesTargetCM[this.periodcellname[i]]) * 100).toFixed(0);
              }
            
                //  this.result[7] =updatedData[this.databasecellvalue[1]];
                //  this.result[8] =updatedData[this.databasecellvalue[2]];
                //  this.result[10] =updatedData[this.databasecellvalue[4]];
                //  this.result[11] =updatedData[this.databasecellvalue[5]];
                //  this.result[13] =updatedData[this.databasecellvalue[7]];
                //  this.result[14] =updatedData[this.databasecellvalue[8]];
                //  this.result[16] =updatedData[this.databasecellvalue[10]];
                //  this.result[17] =updatedData[this.databasecellvalue[11]];
                //  this.result[19] =updatedData[this.databasecellvalue[13]];
                //  this.result[20] =updatedData[this.databasecellvalue[14]];
                //  this.result[22] =updatedData[this.databasecellvalue[16]];
                //  this.result[23] =updatedData[this.databasecellvalue[17]];
                const resultIndices = [6, 7, 8, 9, 10, 11, 12, 13, 14, 21, 22, 23, 24, 25, 26, 32, 33, 34, 35, 36];
                const dataCellIndices = [6, 7, 8, 9, 10, 11, 12, 13, 14, 21, 22, 23, 24, 25, 26, 32, 33, 34, 35, 36];
                
                for (let i = 0; i < resultIndices.length; i++) {
                  this.result[resultIndices[i]] = updatedData[this.databasecellname[dataCellIndices[i]]];
                }
                  for (let i = 0; i < this.employeesgraphvalue.length; i++) {
                this.jsonarray1.push({ 'x': [this.employeesgraphvalue[i][0]], 'y': Number(updatedData[this.employeesgraphvalue[i][1]]) });
                this.jsonarray2.push({ 'x': [this.employeesgraphvalue[i][0]], 'y': Number(updatedData[this.employeesgraphvalue[i][2]]) });
                // this.jsonarray1.push({ 'x': [this.employeesgraphvalue[i][0]], 'y': Number([this.employeesgraphvalue[i][1]])  });
                // this.jsonarray2.push({ 'x': [this.employeesgraphvalue[i][0]], 'y': Number([this.employeesgraphvalue[i][2]] ) });

              }
              this.employeesgraph.series = [{ "name": "Previous Year", "data": this.jsonarray1 }, { "name": "Current Year", "data": this.jsonarray2 },
              ]
              console.log('employeesgraph', this.employeesgraph.series)

              for (let i = 0; i < this.costinrgraphvalue.length; i++) {
                this.jsonarray3.push({ 'x': [this.costinrgraphvalue[i][0]], 'y': Number(updatedData[this.costinrgraphvalue[i][1]]) });
                this.jsonarray4.push({ 'x': [this.costinrgraphvalue[i][0]], 'y': Number(updatedData[this.costinrgraphvalue[i][2]]) });
                // this.jsonarray3.push({ 'x': [this.costinrgraphvalue[i][0]], 'y': Number([this.costinrgraphvalue[i][1]])  });
                // this.jsonarray4.push({ 'x': [this.costinrgraphvalue[i][0]], 'y': Number([this.costinrgraphvalue[i][2]] ) });

              }
              this.costinrgraph.series = [{ "name": "Hiring", "data": this.jsonarray3 }, { "name": "Retrenchment", "data": this.jsonarray4 },
              ]
              console.log('employeesgraph1', this.costinrgraph.series)

              for (let i = 0; i < this.attritionrgraphvalue.length; i++) {
                this.jsonarray5.push({ 'x': updatedData.salesTargetCM[this.attritionrgraphvalue[i][0]], 'y': Number(updatedData.salesTargetCM[this.attritionrgraphvalue[i][1]] * 100).toFixed(0) });
              }
              this.attritiongraph.series = [
                { "name": "value", "data": this.jsonarray5 },
              ]

              for (let i = 0; i < this.comoensationgraphvalue[0].length; i++) {
                this.jsonarray6.push({ 'x': this.comoensationgraphvalue[0][i], 'y': Number(updatedData[this.comoensationgraphvalue[1][i]]) });
                this.jsonarray7.push({ 'x': this.comoensationgraphvalue[0][i], 'y': Number(updatedData[this.comoensationgraphvalue[2][i]]) });
              }
              this.compensationgraph.series = [{ "name": "Business background", "data": this.jsonarray6 }, { "name": "Non-business background", "data": this.jsonarray7 },
              ]
              console.log("compensationgraph", this.compensationgraph.series)

      
      }
    });
  }


  writesalestargetValue(index: number, cellname: string, tablename: string, keyname: string) {
    let validation = false;
    if (keyname == 'estimatedsales') {
      if ((this.result[index] < 0) || (this.result[index] > 50000)) {
        validation = true;
        this.result[index] = 0;
        this._alert.error('The expected range is from 0 to 50000')
      }
    } else if (keyname == 'noofpeople') {
      if ((this.result[index] < 10) || (this.result[index] > 40)) {
        validation = true;
        this.result[index] = 0;
        this._alert.error('The expected range is from 10 to 40')
      }
    } else if (keyname == 'compensation') {
      if ((this.result[index] < 20000) || (this.result[index] > 70000)) {
        validation = true;
        this.result[index] = 0;
        this._alert.error('The expected range is from 20000 to 70000')
      }
    } else if (keyname == 'salesforce') {
      if ((this.result[index] < 0) || (this.result[index] > 100)) {
        validation = true;
        this.result[index] = 0;
        this._alert.error('The expected range is from 0 to 100')
      }
    }

    if (validation == false) {
      let apiname = '/salestarget/singleinputsalestarget';
      let salestargetData = {}
      console.log("result", this.databaseresult)
      if ((tablename == 'nonpercentage')) {
        salestargetData = {
          [cellname]: this.result[index],

        }
      } else if ((tablename == 'percentage')) {
        salestargetData = {
          [cellname]: Number(this.result[index]) / 100,

        }
      }

      console.log('writedata', salestargetData)
      this._api.salesdatawrite("salestarget", 1,
        salestargetData, apiname, 'salestargetcmid').subscribe((data: any) => {

          if (data.status == "Success") {
            this.updateData();
          }
        }, (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        })
    }
  }



  openDialog(): void {
    this.dialog.open(SalestargetfoodforthoughtComponent, {
      data: {},
    });
  }

}

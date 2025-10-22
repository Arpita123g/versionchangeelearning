import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { HrpgamefoodforthoughtComponent } from '../hrpgamefoodforthought/hrpgamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
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
  selector: 'app-hrpgamesupplyforecasting',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './hrpgamesupplyforecasting.component.html',
  styleUrls: ['./hrpgamesupplyforecasting.component.scss']
})
export class HrpgamesupplyforecastingComponent extends AbstractComponent {
  foodforthought: boolean = true;
  employeecountchart: barchart;
  periodresult: any = [];
  result: any = [];
  disabled: boolean = false;
  jsonarray1: any = [];
  jsonarray2: any = [];
  checkdisable: boolean = false;
  language: any = [];
  languageid: number = 0;
  minMaxValue: any = [];

  periodcellvalue: any = ['i6', 'i7', 'i8', 'i9', 'i10', 'i11'];

  databasecellvalue: any = ['ae7', 'af7', 'c6', 'ae8', 'af8', 'c7', 'ae9', 'af9', 'c8', 'ae10', 'af10', 'c5',
    'ae11', 'af11', 'c10', 'ae12', 'af12', 'c10',
  ];


  employeecountchartrange = [
    ['b21', 'e21', 'f21'],  //sales
    ['b22', 'e22', 'f22'],  //logi
    ['b23', 'e23', 'f23'],  //design
    ['b20', 'e20', 'f20'],  //tech
    ['b24', 'e24', 'f24'],  //service
    ['b25', 'e25', 'f25'],  //admi                      for hrpgamesupplyforecasting
  ]

  requestVersions: { [key: string]: number } = {};

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.employeecountchart = {
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
          dataLabels: {
            position: "center",
          },
          horizontal: false,
          columnWidth: "40%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        // categories: [['Sales &', 'Marketing'], ['Logistics &', 'Supply Chain'], ['Design &', 'Production'], 'Technical',
        // ['Customer', 'Support'], 'Administration'],
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
        // text: "Employee Count",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/hrplanningnew/fetchhrplanningnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              this.languageid = data.resultList[0].hrPlanningNewLM.hrplanningnewlmid;
              this.language = data.resultList[0].hrPlanningNewLM[this.languageselect.toLowerCase()];
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.result = [];
              this._global.casemanagementid.next(data.resultList[0].hrplanningnewcmid);
              // if ((data.resultList[0].ae49 == 'yes') || (this.timefinished)) {
              //   this.checkdisable = true;
              // }
              if (data.resultList[0].hrplanningnewdata.ae49 == 'yes') {
                this.disabled = true;
              }

              if (data.resultList[0].hrPlanningNewCM.hrPlanningNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellvalue.length; i++) {
                this.result[i] = data.resultList[0].hrPlanningNewCM.hrplanningnewperioddata[this.periodcellvalue[i]];

              } for (let i = 6; i < 24; i++) {
                this.result[i] = data.resultList[0].hrplanningnewdata[this.databasecellvalue[i - 6]];
              }
              this.minMaxValue = data.resultList[0].hrPlanningNewCM.hrplanningnewperioddata;


              this.updateEmployeeCountChart();
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

  inputtablevalue(cellname: string, index: number) {
    const min = Number(this.minMaxValue.i19);
    const max = Number(this.minMaxValue.i20);
    const value = Number(this.result[index]);
    
    if (value < min) {
      this.result[index] = min;
      this._alert.error(`The expected range is between ${min} to ${max}.`);
    } else if (value > max) {
      this.result[index] = max;
      this._alert.error(`The expected range is between ${min} to ${max}.`);
    } else {
      this.writehrpValue(cellname, index);
      return;
    }
  }

  updateEmployeeCountChart() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];

    this._api.fetchLanguageData('/hrplanningnew/fetchhrplanningnew', this.noofattempt, this.languageselect).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < this.periodcellvalue.length; i++) {
          this.result[i] = updatedData.hrPlanningNewCM.hrplanningnewperioddata[this.periodcellvalue[i]];

        }

        const resultIndices = [7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23];
        const dataCellIndices = [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17];

        for (let i = 0; i < resultIndices.length; i++) {
          this.result[resultIndices[i]] = updatedData.hrplanningnewdata[this.databasecellvalue[dataCellIndices[i]]];
        }

        this.employeecountchart = {
          ...this.employeecountchart,
          xaxis: {
            ...this.employeecountchart.xaxis,
            categories: [
              this.labelsBreak(this.language.b33),
              this.labelsBreak(this.language.b34),
              this.labelsBreak(this.language.b35),
              this.labelsBreak(this.language.b32),
              this.labelsBreak(this.language.b36),
              this.labelsBreak(this.language.b37),
            ]
          },
          title: {
            text: this.language.b52,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        for (let i = 0; i < this.employeecountchartrange.length; i++) {
          const estCell = this.employeecountchartrange[i][1]; // e.g., 'e21'
          const prevCell = this.employeecountchartrange[i][2]; // e.g., 'f21'

          this.jsonarray1.push(Number(updatedData.hrplanningnewdata[estCell] || 0));
          this.jsonarray2.push(Number(updatedData.hrplanningnewdata[prevCell] || 0));
        }

        this.employeecountchart.series = [
          { "name": this.language.b257, "data": this.jsonarray1 },
          { "name": this.language.b258, "data": this.jsonarray2 },
        ]
        // this.employeecountchart.series = [
        //   { name: "Estimated current year", data: [...this.jsonarray1] },
        //   { name: "Previous year", data: [...this.jsonarray2] },
        // ];
      }
    });
  }

  writehrpValue(cellname: string, index: number) {
    let apiname = '/hrplanningnew/singleinputhrplanningnew';
    let hrplanningnewData = {
      [cellname]: this.result[index]
    }

    this._api.writeLanguageData("hrplanningnew", 1,
      hrplanningnewData, apiname, 'hrplanningnewcmid', this.languageselect, this.languageid, 'hrplanningnewlmid').subscribe((data: any) => {
        if (data.status == "Success") {

          this.updateEmployeeCountChart(); // 👈 Call the extracted function

        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }




  openDialog(): void {
    this.dialog.open(HrpgamefoodforthoughtComponent, {
      data: {},
    });
  }

}

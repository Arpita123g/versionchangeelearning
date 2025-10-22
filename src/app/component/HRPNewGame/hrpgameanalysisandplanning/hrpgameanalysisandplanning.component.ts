///////////////////////////////////////////////////////////////////////////////////////////////////
// new for testing rapid input change
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { HrpgamefoodforthoughtComponent } from '../hrpgamefoodforthought/hrpgamefoodforthought.component';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
// import { debounceTime, switchMap, takeUntil, tap } from 'rxjs/operators';

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
  legend: ApexLegend;
}

@Component({
  selector: 'app-hrpgameanalysisandplanning',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './hrpgameanalysisandplanning.component.html',
  styleUrls: ['./hrpgameanalysisandplanning.component.scss']
})
export class HrpgameanalysisandplanningComponent extends AbstractComponent {
  palnaddtionalemployeecountchart: barchart;
  compensationchart: barchart;
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  language: any = [];
  languageid: number = 0;
  minMaxValue: any = [];

  databasecellname: any = ['ae15', 'ae16', 'ae17', 'ae18', 'ae19', 'ae21', 'af21', 'ag21', 'ae22', 'af22', 'ag22',//50
    'ae23', 'af23', 'ag23', 'ae24', 'af24', 'ag24', 'ae25', 'af25', 'ag25', 'ae26', 'af26', 'ag26',//62
  ];

  periodcellname: any = ['k7', 'l7', 'k8', 'l8', 'k9', 'l9', 'k10', 'l10', 'k11', 'l11',//9
    'k14', 'l14', 'l22', 'l30', 'l49', 'k15', 'l15', 'l23', 'l31', 'l50', 'k16', 'l16', 'l24', 'l32', 'l51', 'k17',//25
    'l17', 'l25', 'l33', 'l52', 'k18', 'l18', 'l26', 'l34', 'l53', 'k19', 'l19', 'l27', 'l35', 'l54',//39
  ];


  palnaddtionalemployeecountchartrange = [
    ['b29', 'c29'],//sales
    ['b30', 'c30'],//logi
    ['b31', 'c31'],//design
    ['b28', 'c28'],//tech
    ['b32', 'c32'],//cost
    ['b33', 'c33'],//admi
  ]

  compensationchartrange = [
    ['ae22', 'af22',],
    ['ae23', 'af23',],
    ['ae24', 'af24',],
    ['ae21', 'af21',],
    ['ae25', 'af25',],
    ['ae26', 'af26',],
  ]


  cardData1 = [
    {
      id: 'card1',
      title: 'b57',
      description: "b62",
      turncatedtext: ""
    },
    {
      id: 'card2',
      title: 'b58',
      description: 'b63',
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'b59',
      description: "b64",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'b60',
      description: "b65",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'b61',
      description: "b66",
      turncatedtext: "",
    },

  ];

  requestVersions: { [key: string]: number } = {};

  pendingInputUpdate: boolean = false;


  public inputSubject = new Subject<{ cellname: string, index: number, value: number }>();
  private destroy$ = new Subject<void>();
  private dataSubject = new BehaviorSubject<any>(null);
  private isUpdating = false;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.palnaddtionalemployeecountchart = {
      series: [
      ],
      legend: {
        show: false
      },
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
        // text: "Planned Additional/Retrenched Employees Count",
        // offsetY: 0,
        // align: "center",
        // style: {
        //   fontWeight: "bold",
        // }
      }
    };

    this.compensationchart = {
      series: [
      ],
      legend: {
        show: true
      },
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
          return val + "%";
        },
      },
      xaxis: {
        // categories: [['Sales &', 'Marketing'], ['Logistics &', 'Supply Chain'], ['Design &', 'Production'], 'Technical',
        // ['Customer', 'Experience'], 'Administration'],
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
        text: "",
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
    let apiname = '/hrplanningnew/fetchhrplanningnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe({
      next: (data: any) => {
        if (data.status == "Success" && data.resultList != null) {
          if (!this.pendingInputUpdate) {
            this.jsonarray1 = [];
            this.jsonarray2 = [];
            this.jsonarray3 = [];
            this.languageid = data.resultList[0].hrPlanningNewLM.hrplanningnewlmid;
            this.language = data.resultList[0].hrPlanningNewLM[this.languageselect.toLowerCase()];
            this._global.casemanagementid.next(data.resultList[0].hrplanningnewcmid);

            if (data.resultList[0].hrPlanningNewCM.hrPlanningNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }

            for (let i = 0; i < this.periodcellname.length; i++) {
              this.result[i] = data.resultList[0].hrPlanningNewCM.hrplanningnewperioddata[this.periodcellname[i]];
            }

            for (let i = 40; i < 63; i++) {
              this.result[i] = data.resultList[0].hrplanningnewdata[this.databasecellname[i - 40]];
            }

            for (let i = 45; i < 63; i++) {
              this.result[i] = (Number(this.result[i]) * 100).toFixed(0);

            }
            this.minMaxValue = data.resultList[0].hrPlanningNewCM.hrplanningnewperioddata;


            // this.palnaddtionalemployeecountchart = {
            //   ...this.palnaddtionalemployeecountchart,
            //   xaxis: {
            //     ...this.palnaddtionalemployeecountchart.xaxis,
            //     categories: [
            //       this.language.b33,
            //       this.language.b34,
            //       this.language.b35,
            //       this.language.b32,
            //       this.language.b36,
            //       this.language.b37,
            //     ]
            //   },
            //   title: {
            //     text: this.language.b56,
            //     offsetY: 0,
            //     align: "center",
            //     style: {
            //       fontWeight: "bold",
            //     }
            //   }
            // };

            // this.compensationchart = {
            //   ...this.compensationchart,
            //   xaxis: {
            //     ...this.compensationchart.xaxis,
            //     categories: [
            //       this.language.b33,
            //       this.language.b34,
            //       this.language.b35,
            //       this.language.b32,
            //       this.language.b268,
            //       this.language.b37,
            //     ]
            //   },
            // };

            // for (let i = 0; i < this.palnaddtionalemployeecountchartrange.length; i++) {
            //   this.jsonarray1.push(data.resultList[0].hrplanningnewdata[this.palnaddtionalemployeecountchartrange[i][1]]);
            // }

            // this.palnaddtionalemployeecountchart.series = [
            //   { name: '', data: this.jsonarray1 }
            // ];

            // for (let i = 0; i < this.compensationchartrange.length; i++) {
            //   this.jsonarray2.push((data.resultList[0].hrplanningnewdata[this.compensationchartrange[i][0]] * 100).toFixed(0));
            //   this.jsonarray3.push((data.resultList[0].hrplanningnewdata[this.compensationchartrange[i][1]] * 100).toFixed(0));
            // }

            // this.compensationchart.series = [
            //   { name: this.language.b74, data: this.jsonarray2 },
            //   { name: this.language.b75, data: this.jsonarray3 }
            // ];

            if (data.resultList[0].ae49?.toLowerCase() === 'yes' || this.timefinished) {
              this.checkdisable = true;
            }

            // for (let i = 0; i < this.cardData1.length; i++) {
            //   this.cardData1[i].title = String(data.resultList[0].hrPlanningNewCM[this.cardData1[i].title]);
            //   this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) +
            //     (this.cardData1[i].description.length > 100 ? '...' : '');
            // }
            this.updateEmployeeCountChart();
          }

          this.pendingInputUpdate = false;
          this.checkloading = false;
        } else {
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    });
  }

  inputtablevalue(cellname: string, index: number) {
    const min = Number(this.minMaxValue.l68)*100;
    const max = Number(this.minMaxValue.l69)*100;
    const value = Number(this.result[index]);
    console.log(min, max, value);
    
    if (value < min) {
      this.result[index] = min;
      this._alert.error(`The expected range is between ${min} to ${max}.`);
    } else if (value > max) {
      this.result[index] = max;
      this._alert.error(`The expected range is between ${min} to ${max}.`);
    } else {
      this.pendingInputUpdate = true;
      this.writehrpValue(cellname, index);
      return;
    }
  }

  updateEmployeeCountChart() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    this.jsonarray3 = [];
    this._api.fetchLanguageData('/hrplanningnew/fetchhrplanningnew', this.noofattempt, this.languageselect).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];

        let resultIndices = [47, 50, 53, 56, 59, 62];
        for (let i = 0; i < resultIndices.length; i++) {
          let dbIndex = 7 + i * 3;
          this.result[resultIndices[i]] = (Number(updatedData.hrplanningnewdata[this.databasecellname[dbIndex]]) * 100).toFixed(0);
        }

        this.palnaddtionalemployeecountchart = {
          ...this.palnaddtionalemployeecountchart,
          xaxis: {
            ...this.palnaddtionalemployeecountchart.xaxis,
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
            text: this.language.b56,
            offsetY: 0,
            align: "center",
            style: {
              fontWeight: "bold",
            }
          }
        };

        this.compensationchart = {
          ...this.compensationchart,
          xaxis: {
            ...this.compensationchart.xaxis,
            categories: [
              this.labelsBreak(this.language.b33),
              this.labelsBreak(this.language.b34),
              this.labelsBreak(this.language.b35),
              this.labelsBreak(this.language.b32),
              this.labelsBreak(this.language.b268),
              this.labelsBreak(this.language.b37),
            ]
          },
        };

        for (let i = 0; i < this.palnaddtionalemployeecountchartrange.length; i++) {
          this.jsonarray1.push(updatedData.hrplanningnewdata[this.palnaddtionalemployeecountchartrange[i][1]]);
        }

        this.palnaddtionalemployeecountchart.series = [
          { name: '', data: this.jsonarray1 }
        ];

        // for (let i = 0; i < this.compensationchartrange.length; i++) {
        //   this.jsonarray2.push((updatedData.hrplanningnewdata[this.compensationchartrange[i][0]]).toFixed(0));
        //   this.jsonarray3.push((updatedData.hrplanningnewdata[this.compensationchartrange[i][1]]).toFixed(0));
        // }
        for (let i = 0; i < this.compensationchartrange.length; i++) {
          this.jsonarray2.push((updatedData.hrplanningnewdata[this.compensationchartrange[i][0]] * 100).toFixed(0));
          this.jsonarray3.push((updatedData.hrplanningnewdata[this.compensationchartrange[i][1]] * 100).toFixed(0));
        }


        this.compensationchart.series = [
          { name: this.language.b74, data: this.jsonarray2 },
          { name: this.language.b75, data: this.jsonarray3 }
        ];

      }
    });
  }



  writehrpValue(cellname: string, index: number) {
    let apiname = '/hrplanningnew/singleinputhrplanningnew';

    let analysisplanningData = {
      "ae15": this.result[40] == true ? '1' : '0',
      "ae16": this.result[41] == true ? '1' : '0',
      "ae17": this.result[42] == true ? '1' : '0',
      "ae18": this.result[43] == true ? '1' : '0',
      "ae19": this.result[44] == true ? '1' : '0',
      "ae21": Number(this.result[45]) / 100,
      "af21": Number(this.result[46]) / 100,
      "ae22": Number(this.result[48]) / 100,
      "af22": Number(this.result[49]) / 100,
      "ae23": Number(this.result[51]) / 100,
      "af23": Number(this.result[52]) / 100,
      "ae24": Number(this.result[54]) / 100,
      "af24": Number(this.result[55]) / 100,
      "ae25": Number(this.result[57]) / 100,
      "af25": Number(this.result[58]) / 100,
      "ae26": Number(this.result[60]) / 100,
      "af26": Number(this.result[61]) / 100
    };

    this._api.writeLanguageData("hrplanningnew", 3, analysisplanningData, apiname, 'hrplanningnewcmid', this.languageselect, this.languageid, 'hrplanningnewlmid')
      .subscribe((data: any) => {
        if (data.status == "Success") {
          // ✅ Manually update graph data instead of waiting for getFetchData()
          this.updateEmployeeCountChart();
          this.jsonarray2 = [];
          this.jsonarray3 = [];

          // for (let i = 0; i < this.compensationchartrange.length; i++) {
          //   const val1 = this.result[45 + i * 3];
          //   const val2 = this.result[46 + i * 3];

          //   this.jsonarray2.push(Number(val1));
          //   this.jsonarray3.push(Number(val2));
          // }

          // this.compensationchart.series = [
          //   { name: this.language.b74, data: this.jsonarray2 },
          //   { name: this.language.b75, data: this.jsonarray3 }
          // ];

          // Optionally fetch full data again if needed
          // this.getFetchData();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      });
  }



  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(HrpgamefoodforthoughtComponent, {
      data: {},
    });
  }

}




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
import { debounceTime, switchMap, takeUntil, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  legend: ApexLegend;
}

@Component({
  selector: 'app-hrpgameanalysisandplanning',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
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
    ['ae21', 'af21',],
    ['ae22', 'af22',],
    ['ae23', 'af23',],
    ['ae24', 'af24',],
    ['ae25', 'af25',],
    ['ae26', 'af26',],
  ]

  cardData1 = [
    {
      id: 'card1',
      title: 'k7',
      description: "Job portals enable employers to post vacancies, while candidates can apply directly. They offer broad reach and attract numerous applications. Presence on reputable portals enhances a company's image but requires effective management due to intense competition.",
      turncatedtext: ""
    },
    {
      id: 'card2',
      title: 'k8',
      description: 'Recruiting from leading fashion and tech institutes taps into fresh, trend-aware talent. This positions TrendyThreads as a quality-oriented, innovative employer, fostering a commitment to nurturing young talent.',
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'k9',
      description: "Employee referral programs involve current staff recommending candidates from their network, often with incentives for successful hires. This reflects a positive work environment, fostering trust and contributing to a cohesive company culture through aligned referrals.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'k10',
      description: "Utilizing LinkedIn, Instagram, and the company's career page for job postings, culture sharing, and candidate engagement presents the company as modern and approachable. Sharing behind-the-scenes content, employee stories, and achievements on social media attracts talent aligned with the company's values and enables direct interaction with potential hires.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'k11',
      description: "Collaborating with recruitment agencies for specialized or senior roles signals the company's commitment to finding the right talent. While it may not directly affect the broader market perception, candidates approached by headhunters may feel valued, enhancing the company's reputation in their eyes.",
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
        categories: [['Sales &', 'Marketing'], ['Logistics &', 'Supply Chain'], ['Design &', 'Production'], 'Technical',
        ['Customer', 'Support'], 'Administration'],
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
        text: "Planned Additional/Retrenched Employees Count",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
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
        categories: [['Sales &', 'Marketing'], ['Logistics &', 'Supply Chain'], ['Design &', 'Production'], 'Technical',
        ['Customer', 'Experience'], 'Administration'],
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

    // this.inputSubject.pipe(
    //   debounceTime(500),
    //   switchMap(({ cellname, index, value }) => {
    //     const apiname = '/hrplanning/singleinputhrplanning';
    //     const singleInput  = {
    //       [cellname]: value
    //     };
    //     const routesandtechnologyData = {
    //       "ae15": this.result[40] == true ? '1' : '0',
    //       "ae16": this.result[41] == true ? '1' : '0',
    //       "ae17": this.result[42] == true ? '1' : '0',
    //       "ae18": this.result[43] == true ? '1' : '0',
    //       "ae19": this.result[44] == true ? '1' : '0',
    //       "ae21": Number(this.result[45]) / 100,
    //       "af21": Number(this.result[46]) / 100,
    //       "ae22": Number(this.result[48]) / 100,
    //       "af22": Number(this.result[49]) / 100,
    //       "ae23": Number(this.result[51]) / 100,
    //       "af23": Number(this.result[52]) / 100,
    //       "ae24": Number(this.result[54]) / 100,
    //       "af24": Number(this.result[55]) / 100,
    //       "ae25": Number(this.result[57]) / 100,
    //       "af25": Number(this.result[58]) / 100,
    //       "ae26": Number(this.result[60]) / 100,
    //       "af26": Number(this.result[61]) / 100,
    //     };
    //     const hrplanningData = {
    //       ...routesandtechnologyData,
    //       ...singleInput,
    //     };    
    //     return this._api.writeGameData("hrplanning", 1, hrplanningData, apiname, 'hrplanningcmid')
    //       .pipe(
    //         tap(() => {
    //           // Update local state immediately
    //           this.result[index] = value;
    //           this.dataSubject.next({ ...this.result });
    //         })
    //       );
    //   }),
    //   takeUntil(this.destroy$)
    // ).subscribe({
    //   next: (data: any) => {
    //     if (data.status === "Success") {
    //       this.getFetchData();
    //     }
    //     this.isUpdating = false;
    //   },
    //   error: (error: any) => {
    //     this.checkloading = false;
    //     this.isUpdating = false;
    //     this.driveerrorLog(error, '/hrplanning/singleinputhrplanning');
    //   }
    // });
  }






  override ngOnInit(): void {
    this.getFetchData();
  }
  getFetchData() {
    let apiname = '/hrplanning/fetchhrplanning';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == "Success" && data.resultList != null) {
          if (!this.pendingInputUpdate) {
            this.jsonarray1 = [];
            this.jsonarray2 = [];
            this.jsonarray3 = [];

            this._global.casemanagementid.next(data.resultList[0].hrplanningcmid);

            if (data.resultList[0].hrPlanningCM.hrPlanningCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }

            for (let i = 0; i < this.periodcellname.length; i++) {
              this.result[i] = data.resultList[0].hrPlanningCM[this.periodcellname[i]];
            }

            for (let i = 40; i < 63; i++) {
              this.result[i] = data.resultList[0][this.databasecellname[i - 40]];
            }

            for (let i = 45; i < 63; i++) {
              this.result[i] = (Number(this.result[i]) * 100).toFixed(0);
            }

            for (let i = 0; i < this.palnaddtionalemployeecountchartrange.length; i++) {
              this.jsonarray1.push(data.resultList[0][this.palnaddtionalemployeecountchartrange[i][1]]);
            }

            this.palnaddtionalemployeecountchart.series = [
              { name: "Estimated current year", data: this.jsonarray1 }
            ];

            for (let i = 0; i < this.compensationchartrange.length; i++) {
              this.jsonarray2.push((data.resultList[0][this.compensationchartrange[i][0]] * 100).toFixed(0));
              this.jsonarray3.push((data.resultList[0][this.compensationchartrange[i][1]] * 100).toFixed(0));
            }

            this.compensationchart.series = [
              { name: "New Joinees Hike %", data: this.jsonarray2 },
              { name: "Existing Employee Hike %", data: this.jsonarray3 }
            ];

            if (data.resultList[0].ae49?.toLowerCase() === 'yes' || this.timefinished) {
              this.checkdisable = true;
            }

            for (let i = 0; i < this.cardData1.length; i++) {
              this.cardData1[i].title = String(data.resultList[0].hrPlanningCM[this.cardData1[i].title]);
              this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) +
                (this.cardData1[i].description.length > 100 ? '...' : '');
            }
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
    if ((this.result[index] >= -10) && (this.result[index] < 21)) {
      this.pendingInputUpdate = true;
      this.writehrpValue(cellname, index);
    } else {
      this.result[index] = 0;
      this._alert.error("The expected range is between -10% to 20%");
    }
  }

  updateEmployeeCountChart() {

    this._api.fetchGameData('/hrplanning/fetchhrplanning', this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        // for (let i = 0; i < this.periodcellname.length; i++) {
        //   this.result[i] = updatedData.hrPlanningCM[this.periodcellname[i]];
        // }
        // this.result[47] = (Number(updatedData[this.databasecellname[7]]) * 100).toFixed(0);
        // this.result[50] = (Number(updatedData[this.databasecellname[10]]) * 100).toFixed(0);
        // this.result[53] = (Number(updatedData[this.databasecellname[13]]) * 100).toFixed(0);
        // this.result[56] = (Number(updatedData[this.databasecellname[16]]) * 100).toFixed(0);
        // this.result[59] = (Number(updatedData[this.databasecellname[19]]) * 100).toFixed(0);
        // this.result[62] = (Number(updatedData[this.databasecellname[22]]) * 100).toFixed(0);
        let resultIndices = [47, 50, 53, 56, 59, 62];
        for (let i = 0; i < resultIndices.length; i++) {
          let dbIndex = 7 + i * 3;
          this.result[resultIndices[i]] = (Number(updatedData[this.databasecellname[dbIndex]]) * 100).toFixed(0);
        }
      }
    });
  }
  // writehrpValue(cellname: string, index: number) {
  //   let apiname = '/hrplanning/singleinputhrplanning';

  //   let routesandtechnologyData = {
  //     "ae15": this.result[40] == true ? '1' : '0',
  //     "ae16": this.result[41] == true ? '1' : '0',
  //     "ae17": this.result[42] == true ? '1' : '0',
  //     "ae18": this.result[43] == true ? '1' : '0',
  //     "ae19": this.result[44] == true ? '1' : '0',
  //     "ae21": Number(this.result[45]) / 100,
  //     "af21": Number(this.result[46]) / 100,
  //     "ae22": Number(this.result[48]) / 100,
  //     "af22": Number(this.result[49]) / 100,
  //     "ae23": Number(this.result[51]) / 100,
  //     "af23": Number(this.result[52]) / 100,
  //     "ae24": Number(this.result[54]) / 100,
  //     "af24": Number(this.result[55]) / 100,
  //     "ae25": Number(this.result[57]) / 100,
  //     "af25": Number(this.result[58]) / 100,
  //     "ae26": Number(this.result[60]) / 100,
  //     "af26": Number(this.result[61]) / 100
  //   };

  //   this._api.writeGameData("hrplanning", 3, routesandtechnologyData, apiname, 'hrplanningcmid')
  //     .subscribe((data: any) => {
  //       if (data.status == "Success") {
  //         this.getFetchData(); // fetch after update
  //       }
  //     }, (error: any) => {
  //       this.checkloading = false;
  //       this.checkdisable = false;
  //       this.driveerrorLog(error, apiname);
  //     });
  // }
  // getFetchData() {
  //   let apiname = '/hrplanning/fetchhrplanning';
  //   this._api.fetchGameData(apiname, this.noofattempt).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             this.jsonarray1 = [];
  //             this.jsonarray2 = [];
  //             this.jsonarray3 = [];
  //             this._global.casemanagementid.next(data.resultList[0].hrplanningcmid);
  //             if (data.resultList[0].hrPlanningCM.hrPlanningCMActiveStatus.foodforthoughtstatus == 'inactive') {
  //               this.foodforthought = false;
  //             }
  //             for (let i = 0; i < this.periodcellname.length; i++) {
  //               this.result[i] = data.resultList[0].hrPlanningCM[this.periodcellname[i]]

  //             }
  //             for (let i = 40; i < 63; i++) {
  //               this.result[i] = data.resultList[0][this.databasecellname[i - 40]]

  //             }
  //             for (let i = 45; i < 63; i++) {
  //               this.result[i] = (Number(this.result[i]) * 100).toFixed(0)
  //             }

  //             for (let i = 0; i < this.palnaddtionalemployeecountchartrange.length; i++) {
  //               this.jsonarray1.push(data.resultList[0][this.palnaddtionalemployeecountchartrange[i][1]]);

  //             }
  //             this.palnaddtionalemployeecountchart.series = [
  //               { "name": "Estimated current year", "data": this.jsonarray1 },

  //             ]


  //             for (let i = 0; i < this.compensationchartrange.length; i++) {
  //               this.jsonarray2.push((data.resultList[0][this.compensationchartrange[i][0]]) * 100).toFixed(0);
  //               this.jsonarray3.push((data.resultList[0][this.compensationchartrange[i][1]]) * 100).toFixed(0);
  //             }
  //             this.compensationchart.series = [
  //               { "name": "New Joinees Hike %", "data": this.jsonarray2 },
  //               { "name": "Existing Employee Hike %", "data": this.jsonarray3 },

  //             ]



  //             if ((data.resultList[0].ae49 == 'Yes') || (data.resultList[0].ae49 == 'yes') || (this.timefinished)) {
  //               this.checkdisable = true;
  //             }
  //             for (let i = 0; i < this.cardData1.length; i++) {
  //               this.cardData1[i].title = String(data.resultList[0].hrPlanningCM[this.cardData1[i].title])

  //               this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
  //             }

  //           }
  //           this.checkloading = false;
  //         } else {
  //           this.checkloading = false;
  //         }
  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);

  //       }
  //     })
  // }

  // writehrpValue(cellname: string, index: number) {
  //   let apiname = '/hrplanning/singleinputhrplanning';
  //   let routesandtechnologyData = {
  //     "ae15": this.result[40] == true ? '1' : '0',
  //     "ae16": this.result[41] == true ? '1' : '0',
  //     "ae17": this.result[42] == true ? '1' : '0',
  //     "ae18": this.result[43] == true ? '1' : '0',
  //     "ae19": this.result[44] == true ? '1' : '0',
  //     "ae21": Number(this.result[45]) / 100,
  //     "af21": Number(this.result[46]) / 100,
  //     "ae22": Number(this.result[48]) / 100,
  //     "af22": Number(this.result[49]) / 100,
  //     "ae23": Number(this.result[51]) / 100,
  //     "af23": Number(this.result[52]) / 100,
  //     "ae24": Number(this.result[54]) / 100,
  //     "af24": Number(this.result[55]) / 100,
  //     "ae25": Number(this.result[57]) / 100,
  //     "af25": Number(this.result[58]) / 100,
  //     "ae26": Number(this.result[60]) / 100,
  //     "af26": Number(this.result[61]) / 100,
  //   }
  //   this._api.writeGameData("hrplanning", 3,
  //     routesandtechnologyData, apiname, 'hrplanningcmid').subscribe((data: any) => {
  //       if (data.status == "Success") {
  //         this.getFetchData();
  //       }

  //     }, (error: any) => {
  //       this.checkloading = false;
  //       this.checkdisable = false;
  //       this.driveerrorLog(error, apiname);
  //     })
  // }



  // inputtablevalue(cellname: string, index: number) {
  //   if ((this.result[index] >= -10) && (this.result[index] < 21)) {
  //     // Update local state immediately
  //     const newValue = this.result[index];
  //     this.inputSubject.next({ cellname, index, value: newValue });
  //   } else {
  //     this.result[index] = 0;
  //     this._alert.error("The expected range is between -10% to 20%");
  //   }
  // }
  writehrpValue(cellname: string, index: number) {
    let apiname = '/hrplanning/singleinputhrplanning';

    let routesandtechnologyData = {
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

    this._api.writeGameData("hrplanning", 3, routesandtechnologyData, apiname, 'hrplanningcmid')
      .subscribe((data: any) => {
        if (data.status == "Success") {
          // ✅ Manually update graph data instead of waiting for getFetchData()
          this.updateEmployeeCountChart();
          this.jsonarray2 = [];
          this.jsonarray3 = [];

          for (let i = 0; i < this.compensationchartrange.length; i++) {
            const val1 = this.result[45 + i * 3];
            const val2 = this.result[46 + i * 3];

            this.jsonarray2.push(Number(val1));
            this.jsonarray3.push(Number(val2));
          }

          this.compensationchart.series = [
            { name: "New Joinees Hike %", data: this.jsonarray2 },
            { name: "Existing Employee Hike %", data: this.jsonarray3 }
          ];

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

  // override ngOnDestroy() {
  //   this.destroy$.next();
  //   this.destroy$.complete();
  //   super.ngOnDestroy();
  // }

}


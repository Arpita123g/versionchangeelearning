import { Component, ViewChild, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { gameConfig } from 'src/app/service/game-config/game-configforToolbar';

interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  // annotations: ApexAnnotations;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
};
interface ChartOptions1 {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  // annotations: ApexAnnotations;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
};

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}
@Component({
  selector: 'app-microsimleaderboardgeneral',
  templateUrl: './microsimleaderboardgeneral.component.html',
  styleUrls: ['./microsimleaderboardgeneral.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    NgApexchartsModule,
    ReactiveFormsModule
  ]
})
export class MicrosimleaderboardgeneralComponent extends AbstractComponent {
  chartOptions: ChartOptions;
  // public chartOptions: Partial<ChartOptions>;
  // margindistribution: barchart;
  chartOptions1: ChartOptions1;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['ranks', 'name', 'kpi1', 'kpi2', 'kpi3', 'quiz',];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  Instructorcarddetailssub: Subscription;
  instructorcarddetails: any = [];
  selectedattemptValue: number = 1;
  dropdownvalue: any = [];
  kpi1: string = "";
  kpi2: string = "";
  kpi3: string = "";
  value = 50;
  searchString: RegExp = /[%INRmn]/g; // Regular expression to match '%' and '&'
  replaceString: string = '';
  kpi1array: any = [];
  average: number = 0;
  median: number = 0;
  averagescore: number = 0;
  simulationname: string = "";
  leaderboardvalue: any;
  pageSize = 10;
  currentPage = 0;
  unitname: any = '';
  // public unit: string = 'km'; // Initial unit
  unitName: string = 'km';
  apiname: string = '';
  // languageData: any = {};
  gamenamesub: Subscription;
  gamename: string = '';
  gameNameLM: string = '';
  apiNameForGame: string = '';
  language: string = '';
  languagesub: Subscription;
  languageSelect: Record<string, string> = {};
  leaderTableName: string[] = ['Average Score', 'Median Score', 'Ranks', 'Name', 'Quiz Marks']
  constructor(
    _router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private cdRef: ChangeDetectorRef
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Emailsub = this._global.useremail.subscribe((data) => {

      this.useremail = data;
    });
    this.Coursecodesub = this._global.coursecode.subscribe((data) => {

      this.coursecode = data;
    });
    this.Instructorcarddetailssub = this._global.instructorcarddetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
    this.gamenamesub = this._global.gamename.subscribe((data) => {
      this.gamename = data;
    });

    this.languagesub = this._global.language.subscribe((data) => {
      this.language = data;
      this.language = this.language.toLowerCase();
      // if (this.language == 'EU') {
      //   this.headingarray = ["Introduction", "Market", "Information Search", "Communication Mix", "Campaigns", "Channels", "Decision Checklist", "Report", "Synopsis"];
      // }
    });
    // this.chartOptions = this.getChartOptions(this.unit);

    this.chartOptions = {
      series: [],
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          startAngle: -60,
          endAngle: 60,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            show: true,
            name: {
              show: true
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
              formatter: function (val) {
                return val + ' ';

              }
            }
          }
        }
      },
      yaxis: {
        labels: {
          show: true
        },
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true
        },
        title: {
          text: 'Stops'
        },
        min: -100,
        max: 100,
        tickAmount: 8,
        // tickPlacement: 'on'
      },
      xaxis: {
        labels: {
          show: true
        },
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true
        },
        title: {
          text: 'Stops'
        },
        min: 0,
        max: 100,
        tickAmount: 8,
        // tickPlacement: 'on'
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: 'horizontal',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          gradientToColors: ['#FFD700', '#FFD700', '#FF4500', '#FF4500', '#32CD32'],
          stops: [0, 25, 50, 75, 100]
        }
      },
      stroke: {
        lineCap: 'butt',
        colors: ['#F0F0F0'],
        width: 4,
      },
      labels: [""],
      title: {
        text: this.leaderTableName[0],
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },

    };

    this.chartOptions1 = {
      series: [],
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          startAngle: -60,
          endAngle: 60,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            show: true,
            name: {
              show: true
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
              formatter: function (val) {
                return val + ' ';

              }
            }
          }
        }
      },
      yaxis: {
        labels: {
          show: true
        },
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true
        },
        title: {
          text: 'Stops'
        },
        min: 0,
        max: 100,
        tickAmount: 8,
        // tickPlacement: 'on'
      },
      xaxis: {
        labels: {
          show: true
        },
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true
        },
        title: {
          text: 'Stops'
        },
        min: 0,
        max: 100,
        tickAmount: 8,
        // tickPlacement: 'on'
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: 'horizontal',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          gradientToColors: ['#FFD700', '#FFD700', '#FF4500', '#FF4500', '#32CD32'],
          stops: [0, 25, 50, 75, 100]
        }
      },
      stroke: {
        lineCap: 'butt',
        colors: ['#F0F0F0'],
        width: 4,
      },
      labels: [""],
      title: {
        text: this.leaderTableName[1],
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },


    };

    // this.margindistribution = {
    //   series: [
    //     {
    //       data: [15, 11, 7, 13, 14, 8, 13, 8, 12, 12, 19, 8]
    //     }
    //   ],
    //   chart: {
    //     height: 250,
    //     type: 'bar',
    //     // stacked: true,
    //     // toolbar: {
    //     //   show: true,
    //     //   offsetX: 0,
    //     //   offsetY: 0,
    //     //   tools: {},
    //     // },
    //   },

    //   plotOptions: {
    //     bar: {
    //       horizontal: false,

    //     },
    //   },
    //   dataLabels: this.datalabels[0],

    //   fill: this.fill[0],
    //   yaxis: {

    //   },
    //   xaxis: {
    //     categories: [
    //       "<0%",
    //       "10%",
    //       "20%",
    //       "30%",
    //       "40%",
    //       "50%",
    //       "60%",
    //       "70%",
    //       "80%",
    //       "90%",
    //       "100%",
    //       ">100%"

    //     ]

    //   },
    //   tooltip: {
    //     y: {
    //       formatter: undefined,
    //       title: {
    //         formatter: (seriesName: any) => '',
    //       },
    //     },
    //     x: {
    //       show: false
    //     }
    //   },
    //   title: {
    //     text: 'Score Distribution',
    //     offsetY: 0,
    //     align: 'center',
    //     style: {
    //       fontWeight: 'bold',
    //     },
    //   },
    // };


  }

  changeUnit(newUnit: string) {
    this.unitName = newUnit;
    // Update the formatter function when the unit changes
    if (this.chartOptions && this.chartOptions.plotOptions && this.chartOptions.plotOptions.radialBar &&
      this.chartOptions.plotOptions.radialBar.dataLabels && this.chartOptions.plotOptions.radialBar.dataLabels.value) {
      this.chartOptions.plotOptions.radialBar.dataLabels.value.formatter = (val: number) => {
        return val + ' ' + this.unitName;
      };
    }
    if (this.chartOptions1 && this.chartOptions1.plotOptions && this.chartOptions1.plotOptions.radialBar &&
      this.chartOptions1.plotOptions.radialBar.dataLabels && this.chartOptions1.plotOptions.radialBar.dataLabels.value) {
      this.chartOptions1.plotOptions.radialBar.dataLabels.value.formatter = (val: number) => {
        return val + ' ' + this.unitName;
      };
    }
  }

  override ngOnInit(): void {
    this.kpinameUpdateasPerGame();
    if (this.usermode != 'student') {
      if (this.instructorcarddetails.studentcourseattempts > 0) {
        for (let i = 1; i < this.instructorcarddetails.studentcourseattempts + 1; i++) {
          this.dropdownvalue[i - 1] = i
        }
      }
    } else {
      if (Number(this.noofattempt) > 0) {
        for (let i = 1; i < Number(this.noofattempt) + 1; i++) {
          this.dropdownvalue[i - 1] = i
        }
      }
    }
    this.search(1);
  }

  calculateRank(index: number): number {
    return this.currentPage * this.pageSize + index + 1;
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  kpinameUpdateasPerGame() {
    if (this.usermode == 'instructor') {
      this.simulationname = this.instructorcarddetails.courseDetails.simulation;
    } else {
      this.simulationname = this.studentelementdetailsvalue.simulationname;
    }
    if (this.simulationname == 'Business Basics') {
      this.kpi1 = 'Margin %';
      this.kpi2 = 'Sales Forecasting Error %';
      this.kpi3 = 'Operating Profit, INR'
      this.changeUnit('%')
    } else if (this.simulationname == 'Product & Consumer') {
      this.kpi1 = 'Market Share %';
      this.kpi2 = 'Paying Customers %';
      this.kpi3 = 'Number of Users, mn'
      this.changeUnit('%')
    } else if (this.simulationname == 'Product & Consumer New') {
      this.apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
      this.kpi1 = 'b399';
      this.kpi2 = 'b400';
      this.kpi3 = 'b401'
      this.changeUnit('%')
    } else if (this.simulationname == 'Logistics') {
      this.kpi1 = 'Effectiveness %';
      this.kpi2 = 'Inbound Logistics Cost, INR';
      this.kpi3 = 'Outbound Logistics Cost, INR';
      this.changeUnit('%')
    } else if ((this.simulationname == 'Change Management') || (this.simulationname == 'Change Management Module')) {
      this.kpi1 = 'Performance Level %';
      this.kpi2 = 'Commitment Level %';
      this.kpi3 = 'Unutilized Budget, INR';
      this.changeUnit('%')
    }
    else if ((this.simulationname == 'Change Management New') || (this.simulationname == 'Change Management Module New')) {
      // this.kpi1 = 'Performance Level %';
      // this.kpi2 = 'Commitment Level %';
      // this.kpi3 = 'Unutilized Budget, INR';

      // this.apiname = '/changemanagementnew/fetchchangemanagementnew';
      this.kpi1 = 'b110';
      this.kpi2 = 'b109';
      this.kpi3 = 'b204';

      this.changeUnit('%')
    }
    else if (this.simulationname == 'Financial Analysis') {
      this.kpi1 = 'Ratio Analysis Score %';
      this.kpi2 = 'Portfolio Name';
      this.kpi3 = '-';
      this.changeUnit('%')
    }
    else if (this.simulationname == 'Promotions & Segments') {
      this.kpi1 = 'ROAS %';
      this.kpi2 = 'Operating Margin %';
      this.kpi3 = 'Operating Profit/Loss, INR';
      this.changeUnit('%')
    } else if (this.simulationname == 'Promotions & Segments New') {
      // this.kpi1 = 'ROAS %';
      // this.kpi2 = 'Operating Margin %';
      // this.kpi3 = 'Operating Profit/Loss, INR';
      this.apiname = '/promotionsnew/fetchpromotionsnew';
      this.kpi1 = 'b376';
      this.kpi2 = 'b375';
      this.kpi3 = 'b390'

      this.changeUnit('%')
    } else if (this.simulationname == 'Sales & Target') {
      this.kpi1 = 'Operating Profit/Loss, k INR';
      this.kpi2 = 'Sales Cost, k INR';
      this.kpi3 = 'Revenue, k INR';
      this.changeUnit('INR')
    } else if (this.simulationname == 'Portfolio Management') {
      this.kpi1 = 'Return over market';
      this.kpi2 = 'Risk over market';
      this.kpi3 = 'Capital at end of phase 3, k INR';
      this.changeUnit('%')
    } else if (this.simulationname == 'Value Chain') {
      this.kpi1 = 'Market Share %';
      this.kpi2 = 'Margin %';
      this.kpi3 = 'Emergency Loan, mn INR';
      this.changeUnit('%')
    } else if (this.simulationname == 'Value Chain New') {
      // this.kpi1 = 'Market Share %';
      // this.kpi2 = 'Margin %';
      // this.kpi3 = 'Emergency Loan, mn INR';
      this.apiname = '/valuechainnew/fetchvaluechainnew';
      this.kpi1 = 'b283';
      this.kpi2 = 'b284';
      this.kpi3 = 'b285'
      this.changeUnit('%')
    }
    else if (this.simulationname == 'Accounting') {
      this.kpi1 = 'Total Score, %';
      this.kpi2 = '1-Year Value Creation';
      this.kpi3 = '3-Year Value Creation';
      this.changeUnit('%')
    }
    else if (this.simulationname == 'Accounting Arabic') {
      this.kpi1 = 'المجموع الكلي للنقاط';
      this.kpi2 = 'إنشاء القيمة لمدة عام';
      this.kpi3 = 'إنشاء القيمة لمدة 3 أعوام';
      this.changeUnit('%')
    }
    else if (this.simulationname == 'CVP Analysis') {
      this.kpi1 = 'Operating Margin, %';
      this.kpi2 = 'Market Share, %';
      this.kpi3 = 'Operating Profit/Loss, mn INR';
      this.changeUnit('%')
    }
    else if (this.simulationname == 'Pricing') {
      this.kpi1 = 'Operating Margin %';
      this.kpi2 = 'Unutilized capacity';
      this.kpi3 = 'Operating Profit, k INR';
      this.changeUnit('%')
    }

    else if (this.simulationname == 'Mergers & Acquisition') {
      this.displayedColumns = this.displayedColumns.slice(1);
      this.kpi1 = 'Likelihood of Board Approval, Max 5';
      this.kpi2 = 'Offer Status';
      this.kpi3 = 'ASK - BID spread, INR million';
      this.changeUnit('')
    }

    else if (this.simulationname == 'HRP') {
      this.kpi1 = 'Employee Satisfaction Score';
      this.kpi2 = 'Cost per employee, k INR';
      this.kpi3 = 'Average efficiency across organization, %';
      this.changeUnit('')
    }
    else if (this.simulationname == 'HRP New') {
      // this.kpi1 = 'Employee Satisfaction Score';
      // this.kpi2 = 'Cost per employee, k INR';
      // this.kpi3 = 'Average efficiency across organization, %';
      this.apiname = '/hrplanningnew/fetchhrplanningnew';
      this.kpi1 = 'b50';
      this.kpi2 = 'b88';
      this.kpi3 = 'b135'
      this.changeUnit('')
    }
    else if (this.simulationname == 'Design Thinking') {
      this.kpi1 = 'Operating Margin, %';
      this.kpi2 = 'Market Share, %';
      this.kpi3 = 'Attractiveness Score';
      this.changeUnit('%')
    }

    else if (this.simulationname == 'CRM') {
      this.kpi1 = 'Value Creation, INR';
      this.kpi2 = 'Total Cost, INR';
      this.kpi3 = 'Expected New Value, INR';
      this.changeUnit('')
    }
    else if (this.simulationname == 'Innovation') {
      this.kpi1 = 'Profit/Loss Year 3, k INR';
      this.kpi2 = 'Profit/Loss Year 1, k INR';
      this.kpi3 = 'Runaway, months';
      this.changeUnit('')
    }
    else if (this.simulationname == 'Ordering Basics') {
      this.kpi1 = 'Service Level P2';
      this.kpi2 = 'Service Level P1';
      this.kpi3 = 'Cost, INR';
      this.changeUnit('')
    }

    else if (this.simulationname == 'STP') {
      this.kpi1 = 'Market Share, %';
      this.kpi2 = 'Operating Margin, %';
      this.kpi3 = 'Revenue, Mn INR';
      this.changeUnit('%')
    }
    else if (this.simulationname == 'IT Management') {
      this.kpi1 = 'Performance';
      this.kpi2 = 'Security';
      this.kpi3 = 'Value Y3, INR';
      this.changeUnit('')
    }
    else if (this.simulationname == 'HRM_Fintech') {
      this.kpi1 = 'Stakeholder Satisfaction Score, Max 5';
      this.kpi2 = 'Employee Engagment Score, Max 5';
      this.kpi3 = 'Budget Overrun, k INR';
      this.changeUnit('')
    }
    else if (this.simulationname == 'Ecommerce') {
      this.kpi1 = 'Operating Margin %';
      this.kpi2 = 'Average Order Value, INR';
      this.kpi3 = 'ROAS';
      this.changeUnit('%')
    }
    else if (this.simulationname == 'Capital Budgeting') {
      this.kpi1 = 'Net present value of cash stream, INR million';
      this.kpi2 = 'Present value of cash Stream, INR million';
      this.kpi3 = 'Average discount rate across projects, %';
      this.changeUnit('')
    }
    else if (this.simulationname == 'Project Management') {
      this.kpi1 = 'Value Created, INR';
      this.kpi2 = 'Completion level';
      this.kpi3 = 'Optimization level';
      this.changeUnit('')
    }

    if (this.usermode == 'student') {
      if ((this.simulationname == 'Product & Consumer New') || (this.simulationname == 'Promotions & Segments New') ||
        (this.simulationname == 'Value Chain New') || (this.simulationname == 'HRP New') || ((this.simulationname == 'Change Management Module New') || this.simulationname == 'Change Management New')) {
        const config = gameConfig[this.gamename];
        if (config) {
          this.gameNameLM = config.lmKey;
          this.apiNameForGame = config.api;
          this.getFetchData();
        }

        // this.getLanguageData();
      }

    }
    if (this.usermode != 'student') {
      if (this.simulationname == 'Product & Consumer New') {
        this.kpi1 = 'Market Share %';
        this.kpi2 = 'Paying Customers %';
        this.kpi3 = 'Number of Users, mn'
      } else if (this.simulationname == 'Promotions & Segments New') {
        this.kpi1 = 'ROAS %';
        this.kpi2 = 'Operating Margin %';
        this.kpi3 = 'Operating Profit/Loss, INR';
      } else if (this.simulationname == 'Value Chain New') {
        this.kpi1 = 'Market Share %';
        this.kpi2 = 'Margin %';
        this.kpi3 = 'Emergency Loan, mn INR';
      } else if (this.simulationname == 'HRP New') {
        this.kpi1 = 'Employee Satisfaction Score';
        this.kpi2 = 'Cost per employee, k INR';
        this.kpi3 = 'Average efficiency across organization, %';
      } else if (this.simulationname == 'Change Management Module New' || this.simulationname == 'Change Management New') {
        this.kpi1 = 'Performance Level %';
        this.kpi2 = 'Commitment Level %';
        this.kpi3 = 'Unutilized Budget, INR';
      }

    }



  }



  generateData(centerValue: number): (number | null)[] {
    const interval = 10;
    const data = [];

    for (let i = centerValue - interval * 5; i <= centerValue + interval * 5; i += interval) {
      data.push(i === centerValue ? i : null);
    }

    return data;
  }
  generateXAxisLabels(centerValue: number): string[] {
    const labels = [];
    const labelCount = 5; // You can adjust the number of labels as needed
    const interval = 10;

    for (let i = centerValue - interval * labelCount; i <= centerValue + interval * labelCount; i += interval) {
      labels.push(`${i}%`);
    }
    return labels;
  }


  search(element: any) {
    // this.checkloading = true;
    // let coursecode = '';
    // if (this.usermode == 'instructor') {
    //   coursecode = this.instructorcarddetails.coursecode;
    // } else {
    //   coursecode = this.studentelementdetailsvalue.coursecode;
    // }

    // this._api.fetchthreekpiattempts('attemptscount', element, coursecode, this.usermode).subscribe((data: any) => {
    //   if (data.status == 'Success') {
    //     if (data.resultList != null) {
    //       this.ELEMENT_DATA = []; this.kpi1array = [];
    //       this.ELEMENT_DATA = data.resultList;

    //       for (let i = 0; i < data.resultList.length; i++) {
    //         this.kpi1array[i] = this.replacecharacter(data.resultList[i].kpioflastattempts)
    //       }

    //       this.averagescore = Number(this.calculateAverage())
    //       this.chartOptions.series = [this.averagescore]
    //       this.chartOptions1.series = [Number(this.calculateMedian(this.kpi1array).toFixed(2))]
    //       this.dataSource = new MatTableDataSource<PeriodicElement>(
    //         this.ELEMENT_DATA
    //       );
    //       if (this.paginator) this.dataSource.paginator = this.paginator;
    //       this.checkloading = false;
    //     } else {
    //       this.chartOptions.series = [0];
    //       this.chartOptions1.series = [0];
    //       this.dataSource = new MatTableDataSource<PeriodicElement>([]);
    //       this.checkloading = false;
    //     }

    //   }
    //   else {
    //     this.chartOptions.series = [0];
    //     this.chartOptions1.series = [0];
    //     this.dataSource = new MatTableDataSource<PeriodicElement>([]);
    //     if (this.paginator) this.dataSource.paginator = this.paginator;
    //     this.checkloading = false;
    //   }


    // }, (error: any) => {
    //   this.checkloading = false;
    // })
    this.checkloading = true;
    const coursecode = this.usermode == 'instructor' ? this.instructorcarddetails.coursecode : this.studentelementdetailsvalue.coursecode;
    const simulationname = this.usermode == 'instructor' ? this.instructorcarddetails.courseDetails.simulation : this.studentelementdetailsvalue.simulationname;

    this._api.fetchthreekpiattempts('attemptscount', element, coursecode, this.usermode, simulationname).subscribe((data: any) => {
      if (data.status == 'Success' && data.resultList) {
        this.ELEMENT_DATA = data.resultList;
        this.kpi1array = this.ELEMENT_DATA.map((item: any) => {
          const value = this.replacecharacter(item.kpioflastattempts);
          return isNaN(value) ? 0 : value; // Replace NaN with 0
        });
        console.log("kpi1", this.kpi1array)
        this.averagescore = Number(this.calculateAverage());
        this.chartOptions.series = [this.averagescore];
        this.chartOptions1.series = [Number(this.calculateMedian(this.kpi1array).toFixed(2))];
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      } else {
        this.chartOptions.series = [0];
        this.chartOptions1.series = [0];
        this.dataSource = new MatTableDataSource<PeriodicElement>([]);
      }
      if (this.paginator) this.dataSource.paginator = this.paginator;
      this.checkloading = false;
    }, () => {
      this.checkloading = false;
    });


  }

  replacecharacter(value: string) {
    this.leaderboardvalue = Number(value.replace(this.searchString, this.replaceString));
    if (Number.isNaN(this.leaderboardvalue)) {
      // leaderboardvalue = 0;
      this.leaderboardvalue = value;
    }
    return this.leaderboardvalue;
  }

  calculateAverage() {
    if (this.kpi1array.length === 0) {
      this.average = 0;
    } else {
      const sum = this.kpi1array.reduce((acc: number, curr: number) => acc + curr, 0);
      this.average = sum / this.kpi1array.length;
    }
    return this.average.toFixed(1);
  }


  calculateMedian(numbers: number[]): number {
    // First, let's sort the array in ascending order
    const sortedNumbers = numbers.sort((a, b) => a - b);

    const length = sortedNumbers.length;

    // If the length of the array is odd, return the middle element
    if (length % 2 !== 0) {
      return sortedNumbers[Math.floor(length / 2)];
    } else {
      // If the length of the array is even, return the average of the two middle elements
      const middleIndex = length / 2;
      return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    }
  }

  // getLanguageData() {
  //   this._api.fetchLanguageData(this.apiname, this.noofattempt, this.languageselect.toLowerCase()).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             this.languageData = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];
  //             this.kpi1 = this.languageData[this.kpi1];
  //             this.kpi2 = this.languageData[this.kpi2];
  //             this.kpi3 = this.languageData[this.kpi3];
  //           }
  //           this.checkloading = false;

  //         }
  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, this.apiname);
  //       }
  //     }
  //   )
  // }

  // getFetchData() {
  //   const config = gameConfig[this.gamename];
  //   if (config) {
  //     this.gameNameLM = config.lmKey;
  //     this.apiNameForGame = config.api;

  //   }
  //   if (!this.apiNameForGame || !this.gameNameLM) return;

  //   this._api.fetchLanguageData(
  //     this.apiNameForGame,
  //     this.noofattempt,
  //     this.language
  //   ).subscribe({
  //     next: (data: any) => {
  //       if (data.status === "Success" && data.resultList) {
  //         if (config.type === 'heading') {
  //           this.languageSelect = data.resultList[0][this.gameNameLM][this.language];
  //           this.kpi2 = this.languageSelect[this.kpi2];
  //           this.kpi3 = this.languageSelect[this.kpi3];
  //           this.kpi1 = this.languageSelect[this.kpi1];
  //           this.leaderTableName = config.leaderBoardkey.map((key: string) => this.languageSelect[key]);


  //           this.chartOptions = {
  //             ...this.chartOptions,

  //             title: {
  //               text: this.leaderTableName[0],
  //               offsetY: 0,
  //               align: "center",
  //               style: {
  //                 fontWeight: "bold",
  //               }
  //             }
  //           };

  //           this.chartOptions1 = {
  //             ...this.chartOptions1,

  //             title: {
  //               text: this.leaderTableName[1],
  //               offsetY: 0,
  //               align: "center",
  //               style: {
  //                 fontWeight: "bold",
  //               }
  //             }
  //           };



  //         } else if (config.type === 'common') {
  //           this.languageSelect = data.resultList[0][this.gameNameLM][this.language] || {};
  //           this.kpi2 = this.languageSelect[this.kpi2];
  //           this.kpi3 = this.languageSelect[this.kpi3];
  //           this.kpi1 = this.languageSelect[this.kpi1];
  //           const LeaderBoardCommon = data.resultList[0][this.gameNameLM][`${config.commonPrefix}${this.language}`] || {};
  //           this.leaderTableName = config.leaderBoardkey.map((key: string) => LeaderBoardCommon[key]);


  //           this.chartOptions = {
  //             ...this.chartOptions,

  //             title: {
  //               text: this.leaderTableName[0],
  //               offsetY: 0,
  //               align: "center",
  //               style: {
  //                 fontWeight: "bold",
  //               }
  //             }
  //           };

  //           this.chartOptions1 = {
  //             ...this.chartOptions1,

  //             title: {
  //               text: this.leaderTableName[1],
  //               offsetY: 0,
  //               align: "center",
  //               style: {
  //                 fontWeight: "bold",
  //               }
  //             }
  //           };


  //         }
  //       } 

  //     },
  //     error: (error: any) => {
  //       console.error(error);
  //     }
  //   });
  // }

  getFetchData() {
    const config = gameConfig[this.gamename];
    if (config) {
      this.gameNameLM = config.lmKey;
      this.apiNameForGame = config.api;
    }

    // stop if no api or lmKey
    if (!this.apiNameForGame || !this.gameNameLM) return;

    this._api.fetchLanguageData(
      this.apiNameForGame,
      this.noofattempt,
      this.language
    ).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          if (config?.type === 'heading') {
            this.languageSelect = data.resultList[0][this.gameNameLM][this.language];
            this.kpi1 = this.languageSelect[this.kpi1];
            this.kpi2 = this.languageSelect[this.kpi2];
            this.kpi3 = this.languageSelect[this.kpi3];
            this.leaderTableName = config.leaderBoardkey.map(
              (key: string) => this.languageSelect[key]
            );

          } else if (config?.type === 'common') {
            this.languageSelect = data.resultList[0][this.gameNameLM][this.language] || {};
            this.kpi1 = this.languageSelect[this.kpi1];
            this.kpi2 = this.languageSelect[this.kpi2];
            this.kpi3 = this.languageSelect[this.kpi3];

            const LeaderBoardCommon = data.resultList[0][this.gameNameLM][`${config.commonPrefix}${this.language}`] || {};
            this.leaderTableName = config.leaderBoardkey.map(
              (key: string) => LeaderBoardCommon[key]
            );

          } else {
            // ✅ fallback when config.type is not heading/common
            this.leaderTableName = ['Average Score', 'Median Score', 'Ranks', 'Name', 'Quiz Marks'];
          }

          // always update chart titles after leaderTableName is set
          this.chartOptions = {
            ...this.chartOptions,
            title: {
              text: this.leaderTableName[0],
              offsetY: 0,
              align: "center",
              style: { fontWeight: "bold" }
            }
          };

          this.chartOptions1 = {
            ...this.chartOptions1,
            title: {
              text: this.leaderTableName[1],
              offsetY: 0,
              align: "center",
              style: { fontWeight: "bold" }
            }
          };
        } else {
          // ✅ fallback when API failed or resultList missing
          this.leaderTableName = ['Average Score', 'Median Score', 'Ranks', 'Name', 'Quiz Marks'];
          this.chartOptions = {
            ...this.chartOptions,
            title: { text: this.leaderTableName[0], align: "center", style: { fontWeight: "bold" } }
          };
          this.chartOptions1 = {
            ...this.chartOptions1,
            title: { text: this.leaderTableName[1], align: "center", style: { fontWeight: "bold" } }
          };
        }
      },
      error: (error: any) => {
        console.error(error);
        // ✅ fallback when API call errors out
        this.leaderTableName = ['Average Score', 'Median Score', 'Ranks', 'Name', 'Quiz Marks'];
        this.chartOptions = {
          ...this.chartOptions,
          title: { text: this.leaderTableName[0], align: "center", style: { fontWeight: "bold" } }
        };
        this.chartOptions1 = {
          ...this.chartOptions1,
          title: { text: this.leaderTableName[1], align: "center", style: { fontWeight: "bold" } }
        };
      }
    });
  }




  override ngOnDestroy() {
    this.Instructorcarddetailssub.unsubscribe();
    this.Emailsub.unsubscribe();
    this.Coursecodesub.unsubscribe();
    this.gamenamesub.unsubscribe();
    this.languagesub.unsubscribe();
  }


}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
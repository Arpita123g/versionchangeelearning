import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexNoData,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
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
import { DesignthinkingfoodforthoughtComponent } from '../designthinkingfoodforthought/designthinkingfoodforthought.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
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

interface pieChart {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-designthinkingempathize',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule, NgApexchartsModule,
    FormsModule, MatIconModule, TippyDirective
  ],
  templateUrl: './designthinkingempathize.component.html',
  styleUrls: ['./designthinkingempathize.component.scss'],
})
export class DesignthinkingempathizeComponent extends AbstractComponent {
  foodforthought: boolean = true;
  marketfeaturesfeedbackchart: pieChart;
  featureprioritieschart: barChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  result: any = [];
  marketfeaturesfeedbackchartnames: any = [];
  periodcellvalue: any = ['d7', 'd8', 'd9', 'd12', 'd13', 'd14', 'd17', 'd18'];
  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);



    this.marketfeaturesfeedbackchart = {
      series: [
      ],
      chart: {
        width: 400,
        height: 250,
        type: 'pie',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      legend: {
        position: 'right',
        offsetY: 50,
        fontWeight: 'bold',
      },
      labels: ['Positive', 'Neutral', 'Negative'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 250,
            },
            legend: {
              position: 'center',
            },
          },
        },
      ],
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false,
        },
      },

      title: {
        text: 'Market - Features Feedback ',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },

    };

    this.featureprioritieschart = {
      series: [

      ],
      chart: {
        height: 250,
        type: 'bar',
        stacked: false,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },
      noData: this.nodata[0],
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'center',
          },
          horizontal: false,
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + '%';
        },
      },
      xaxis: {
        categories: [
          ['Design &', 'Aesthetics'],
          ['Battery', 'Life'],
          ['Localized', 'Language', 'Support'],
          ['Seamless', 'Syncing'],
          ['Water', 'Resistance'],
          'Affordability',
          ['Customizable', 'Watch Faces'],
          ['Unique Health', 'Features'],
          ['Indian Payment', 'System Integration'],
        ],
        position: 'bottom',
        labels: {
          offsetY: 0,
          rotate: 0,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        crosshairs: {},
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
      },
      fill: {
        type: 'solid',
      },

      yaxis: {
        labels: {
          show: true,
          formatter: function (val) {
            return val + '%';
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
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
          show: false,
        },
      },
      title: {
        text: 'Feature Priorities',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
  }

  marketfeaturesfeedbackdata = [
    ["d22", "e22"],
    ["d23", "e23"],
    ["d24", "e24"]
  ];

  featureprioritiesdata: any = [
    ["d27", "e27", "f27", "g27"],
    ["d28", "e28", "f28", "g28"],
    ["d29", "e29", "f29", "g29"],
    ["d30", "e30", "f30", "g30"],
    ["d31", "e31", "f31", "g31"],
    ["d32", "e32", "f32", "g32"],
    ["d33", "e33", "f33", "g33"],
    ["d34", "e34", "f34", "g34"],
    ["d35", "e35", "f35", "g35"],


  ];

  cardData: any = [
    {
      id: 'card1',
      title: 'Rohan',
      description: {
        Age: '28',
        Occupation: 'Software Engineer',
        Location: 'Bengaluru',
        type: 'Tech-savvy, loves gadgets and is fitness conscious.',
        Goals: 'Stay updated with tech, improve his health, manage work-life balance.',
        Pain_Points: 'Wants a longer battery life, expects a sleek design without compromising functionality.',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'Aarti',
      description: {
        Age: '34',
        Occupation: 'School Teacher',
        Location: 'Mumbai',
        type: 'Not very tech-savvy but wants to track her steps and calories. Also loves to swim.',
        Goals: 'Stay fit, keep track of her schedule, ensure the watch is water-resistant.',
        Pain_Points: 'Wants an easy user interface, needs localized language support',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'Vikram',
      description: {
        Age: '22',
        Occupation: 'College Student',
        Location: 'Pune',
        type: 'Into fashion, looking for affordable options with a good look.',
        Goals: 'Make a style statement, stay connected, manage his college schedule.',
        Pain_Points: 'Affordability, wishes for customizable watch faces to match his style.',
      },
      turncatedtext: '',
    },
  ];
  cardData2: any = [
    {
      id: 'card1',
      Title: 'Journey Map 1',
      Discovery: 'Reads about the new smartwatch on a tech blog.',
      Consideration: 'Checks reviews on YouTube and compares with other brands.',
      Purchase: 'Buys it online during a sale.',
      Usage: 'Wears it daily, syncs with his devices, occasionally uses fitness features.',
      Advocacy: 'Recommends to friends if he finds the feature satisfactory.',
    },
    {
      id: 'card2',
      Title: 'Journey Map 2',
      Discovery: 'Hears about the watch from a colleague.',
      Consideration: 'Visits a retail store to try it on.',
      Purchase: 'Buys it from the store for the feel-good factor.',
      Usage: 'Uses it mainly for fitness tracking and schedule reminders.',
      Advocacy: "Shares experience with other if it's easy to use and helps stay organized.",
    },

  ];

  override ngOnInit(): void {
    this.getFetchData();
  }


  getFetchData() {
    const apiname = '/designthinking/fetchdesignthinking';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: { status: string; resultList?: any[] }) => {
        if (data.status === 'Success' && data.resultList) {
          const result = data.resultList[0].designThinkingCM;

          // Reset arrays
          this.jsonarray1 = [];
          this.jsonarray2 = [];
          this.jsonarray3 = [];
          this.jsonarray4 = [];

          // Update case management ID
          this._global.casemanagementid.next(data.resultList[0].designthinkingcmid);

          // Update foodforthought status
          this.foodforthought = result.designThinkingCMActiveStatus.foodforthoughtstatus !== 'inactive';

          // Update result array
          this.result = this.periodcellvalue.map((cell: string) => result[cell]);

          // Update pie chart
          this.marketfeaturesfeedbackchartnames = this.marketfeaturesfeedbackdata.map(([name, value]) => result[value]);
          this.jsonarray1 = this.marketfeaturesfeedbackdata.map(([_, value]) => (Number(result[value])*100));
          this.marketfeaturesfeedbackchart.series = this.jsonarray1;
          // this.marketfeaturesfeedbackchart.labels = this.marketfeaturesfeedbackchartnames;
          console.log("mar",this.marketfeaturesfeedbackchart.series,this.marketfeaturesfeedbackchart.labels);
          // Update bar chart
          [this.jsonarray2, this.jsonarray3, this.jsonarray4].forEach((array, idx) => {
            this.featureprioritiesdata.forEach((dataItem: string[], i: number) => {
              array.push({ 'x': "", 'y': (result[dataItem[idx + 1]] * 100).toFixed(0) });
            });
          });

          this.featureprioritieschart.series = [
            { name: "Preference", data: this.jsonarray2 },
            { name: "Need", data: this.jsonarray3 },
            { name: "Desire", data: this.jsonarray4 }
          ];
        }
        this.checkloading = false;
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    });
  }

  openDialog(): void {
    this.dialog.open(DesignthinkingfoodforthoughtComponent, {
      data: {},
    });
  }
}

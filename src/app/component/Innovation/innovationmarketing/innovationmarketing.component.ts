import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
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
  ApexMarkers,
  ApexNoData,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { InnovationfoodforthoughtComponent } from '../innovationfoodforthought/innovationfoodforthought.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';

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

interface lineChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
}

@Component({
  selector: 'app-innovationmarketing',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatIconModule,NgApexchartsModule,FormsModule],
  templateUrl: './innovationmarketing.component.html',
  styleUrls: ['./innovationmarketing.component.scss']
})
export class InnovationmarketingComponent extends AbstractComponent {
  refrencespriceperuserchart: barChart;
  awarnessreachchart: lineChart;
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  inputDisabled: boolean = false;
  periodcellname: any = [
    'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20'//8
  ]
  databasecellname: any = [
    'c25', 'c26', 'c27', 'c28', 'c29', 'c30',//14
    'ae41', 'af41', 'ag41',//2//17
    'ae42', 'af42', 'ag42',//5//20
    'ae43', 'af43', 'ag43',//8//23
    'ae44', 'af44', 'ag44',//11//26
    'ae45', 'af45', 'ag45',//14//29
    'ae46', 'af46', 'ag46',//17//32
    'ae47', 'af47', 'ag47',//20//35
    'ae48', 'af48', 'ag48',//23//38
    'ae49', 'af49', 'ag49',//26//41
    'ae50', 'af50', 'ag50',//29//44
    'ae51', 'af51', 'ag51',//32//47
    'ae52', 'af52', 'ag52',//35//50
    'ae53', 'af53', 'ag53',//38//53
    'ae54', 'af54', 'ag54',//41//56
    'ae55', 'af55', 'ag55',//44//59
    'ae56', 'af56', 'ag56',//47//62
    'ae58',//48//63
    'c56', 'c57', 'c58',//51//66
    'd56', 'd57', 'd58',//54//69
    'e56', 'e57', 'e58',//57//72
    'ae62', 'ae63', 'ae64'//60//75


  ];


  cardData = [
    {
      id: 'card1',
      title: 'Educational Institutions Partnership',
      img: "assets/images/innovation/educationalinstitutepartnership.svg",
      ischecked: false,
      description: {
        description: 'Form partnerships with schools, colleges, and educational institutions to integrate the product into their curriculum or offer it as a supplementary learning tool, tapping into the large student and educator market.',
        textname: 'Cost, k INR',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'Online Educational Platforms',
      img: "assets/images/innovation/onlineeducationalplatform.svg",
      ischecked: false,
      description: {
        description: "Collaborate with online educational platforms to feature the product as part of their digital learning offerings, leveraging their extensive reach and user engagement.",
        textname: 'Cost, k INR',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'Retail Bookstores and Educational Supply Stores',
      img: "assets/images/innovation/retailsbookstoreandeducationsupplystore.svg",
      ischecked: false,
      description: {
        description: "Distribute the product through retail bookstores and educational supply stores specializing in educational materials and resources, making it accessible to students, parents, and educators.",
        textname: 'Cost, k INR',
      },
      turncatedtext: '',
    },
  ];

  refrencepricechartrange: any = [
    ['Basic', 'c33'],
    ['Standard', 'c34'],
    ['Premium', 'c35']
  ]
  awarnessreachchartrange: any = [
    ['b38','c38',],
    ['b39','c39',],
    ['b40','c40',],
    ['b41','c41',],
    ['b42','c42',],
    ['b43','c43',],
    ['b44','c44',],
    ['b45','c45',],
    ['b46','c46',],
    ['b47','c47',],
    ['b48','c48',],
    ['b49','c49',],
    ['b50','c50',],
    ['b51','c51',],
    ['b52','c52',],
    ['b53','c53',],
  ]
  inputs: any = [1, 2, 3]
  features = [
    'In-App Guidance',
    'User Onboarding',
    'Interactive Help Cente',
    'Customizable User Profiles',
    'Community Forums',
    'Multi-Platform Compatibility',
    'Analytics and Reporting',
    'Customization Options',
    'Offline Access',
    'Interactive Educational Modules',
    'Virtual Field Trips',
    'Creative Storytelling Workshops',
    '-',
    '-',
    '-',
    'Price per user per year, k INR'
  ];

  plans = [
    { name: 'Basic', icon: 'fa fa-hourglass-half' },
    { name: 'Standard', icon: 'fa fa-star' },
    { name: 'Premium', icon: 'fa fa-crown' }
  ];


  checkboxValues: boolean[][] = [];
  numberValues: any = []
  disabled: boolean[][] = [];
  pricedisabled: boolean[] = [false, true, true]
  jsonarray1: any = [];
  jsonarray2: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private cdr: ChangeDetectorRef) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.checkboxValues = this.features.map(() => this.plans.map(() => false)); // Initialize checkboxes as unchecked
    this.disabled = this.features.map(() => this.plans.map(() => false)); // Initialize checkboxes as unchecked
    this.refrencespriceperuserchart = {
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
        categories: ['Basic', 'Standard', 'Premium'],
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
        text: "Reference price per user per year, k INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.awarnessreachchart = {
      series: [
       ],
      markers: {
        size: [5, 0, 0],
      },
      stroke: {
        curve: 'straight',
      },
      chart: {
        type: 'line',
        height: 320,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        title: {
          // text: "Price",
          offsetX: 0,
          offsetY: 90,
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },
        labels: {
          show: true,
          rotate: 0,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false
          , trim: false,
        }, axisBorder: {
          show: true
        },
        axisTicks: { show: true },
        crosshairs: {},
        tooltip: { enabled: false, offsetY: -35 }
      },
      yaxis: {
        title: {
          // text: "% of consumers attracted based on price",
          style: {
            fontSize: '12px',
            fontWeight: 500
          },
        },

        labels: {
          formatter: function (value) {
            return value.toFixed(0) + "%";
          }
        }
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
        text: 'Awareness Reach (%)',
        align: 'center',
        style: {
          fontWeight: 600,
          color: '#333',
        },
      },
    };

  }

  checkboxarray: any = []

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/innovationgame/fetchinnovationgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = []; this.jsonarray2 = []
              this._global.casemanagementid.next(data.resultList[0].innovationgamecmid);
              if (data.resultList[0].innovationGameCM.innovationGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].innovationGameCM[this.periodcellname[i]]

              }
              for (let i = 9; i < 76; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 9]]
              }

              for(let i = 0;i<16;i++){
                if((this.result[i] == '')||(this.result[i] == null)){
                  this.result[i] = "Feature not Launched";
                  this.disabled[i][0] = true;
                  this.disabled[i][1] = true;
                  this.disabled[i][2] = true;
                }
              }
              // Loop through array1 in chunks of chunkSize
              for (let i = 15; i < 60; i += 3) {

                if (this.result[i] == 1) {
                  this.result[i] = true
                } else {
                  this.result[i] = false
                }
                this.checkboxarray[i - 15] = this.result[i];

                // this.checkboxValues(this.result.slice(i, i + 3));
              }
              let index = 0;
              for (let i = 0; i < this.checkboxValues.length; i++) {
                for (let j = 0; j < this.checkboxValues[i].length; j++) {
                  if (index < 46) {
                    this.checkboxValues[i][j] = this.result[index + 15];
                    index++; // Increment index for array2
                  }
                }
              }
              

              for (let i = 60; i < 63; i++) {
                this.numberValues[i - 60] = this.result[i]
              }
              console.log("num", this.numberValues);
              for (let i = 73; i < 76; i++) {
                this.cardData[i - 73].ischecked = this.result[i] === 1;
              }

              this.updateInputResValue();

              this.updateCheckboxfield();

              if ((String(data.resultList[0].ae89) == 'yes') ||
                (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              };

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
    let apiname = '/innovationgame/fetchinnovationgame';

    this.jsonarray1 = []; this.jsonarray2 = []

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
       

        const resultIndices = [9, 10, 11, 12, 13, 14, 64, 65, 66, 67, 68, 69, 70, 71, 72];
        const dataCellIndices = [0, 1, 2, 3, 4, 5, 55, 56, 57, 58, 59, 60, 61, 62, 63];

        for (let i = 0; i < resultIndices.length; i++) {
          this.result[resultIndices[i]] = updatedData[this.databasecellname[dataCellIndices[i]]];
        }


        for (let i = 0; i < this.refrencepricechartrange.length; i++) {
          this.jsonarray1.push(Number((updatedData[this.refrencepricechartrange[i][1]])).toFixed(0));
        }
        this.refrencespriceperuserchart.series = [{ "name": '', "data": this.jsonarray1 }];

        for (let i = 0; i < this.awarnessreachchartrange.length; i++) {
          this.jsonarray2.push({
            'x': (Number(updatedData[this.awarnessreachchartrange[i][0]]).toFixed(0)),
            'y': (Number(updatedData[this.awarnessreachchartrange[i][1]]).toFixed(0))
          });
          }
        this.awarnessreachchart.series = [{ "name": '', "data": this.jsonarray2 }];
      }
    });
  }

  // Function to chunk the array into subarrays of a specific size
  chunkArray(arr: boolean[], chunkSize: number): boolean[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  getSelection(inputField: string, index: number, event: any) {

    if (inputField == 'price') {
      if ((index == 0) && (this.pricedisabled[1])) {
        if (this.numberValues[index] > 0) {
          this.pricedisabled[1] = false;
        } else {
          this._alert.error("Value can not less than zero ")
          this.numberValues[index] = 1
        }

      } else if ((index == 0) && (!this.pricedisabled[1])) {
        if (this.numberValues[index] > this.numberValues[1]) {
          this._alert.error("Value can not greater than standard ");
          this.numberValues[index] = this.numberValues[1];

        }

      } else if ((index == 1) && (this.pricedisabled[2])) {
        if (this.numberValues[index] >= this.numberValues[0]) {
          this.pricedisabled[2] = false;
        } else {
          this._alert.error("Value can not less than basic ")
          this.numberValues[index] = this.numberValues[0];
        }

      } else if ((index == 1) && (!this.pricedisabled[2])) {
        if (this.numberValues[index] > this.numberValues[2]) {
          this._alert.error("Value can not greater than premium ");
          this.numberValues[index] = this.numberValues[2];
        }

      } else if (index == 2) {
        if (this.numberValues[index] >= this.numberValues[1]) {
          this.pricedisabled[2] = false;
        } else {
          this._alert.error("Value can not less than standard ")
          this.numberValues[2] = this.numberValues[1];
        }

      }
    } else if (inputField == 'promotions') {
      if ((Number(this.result[index]) < 0) || (Number(this.result[index]) > 4000)) {
        this.result[index] = 0;
        this._alert.error('range between 0 to 4000');
      }
     
    }
    else if (inputField === 'distribution') {
      this.cardData[index].ischecked = event.target.checked;
    }

    this.writeGameData();
  }

  writeGameData() {
    let apiname = '/innovationgame/singleinputinnovationgame';
    let data = {
      'ae41': this.checkboxValues[0][0] == true ? 1 : 0,
      'af41': this.checkboxValues[0][1] == true ? 1 : 0,
      'ag41': this.checkboxValues[0][2] == true ? 1 : 0,
      'ae42': this.checkboxValues[1][0] == true ? 1 : 0,
      'af42': this.checkboxValues[1][1] == true ? 1 : 0,
      'ag42': this.checkboxValues[1][2] == true ? 1 : 0,
      'ae43': this.checkboxValues[2][0] == true ? 1 : 0,
      'af43': this.checkboxValues[2][1] == true ? 1 : 0,
      'ag43': this.checkboxValues[2][2] == true ? 1 : 0,//8
      'ae44': this.checkboxValues[3][0] == true ? 1 : 0,
      'af44': this.checkboxValues[3][1] == true ? 1 : 0,
      'ag44': this.checkboxValues[3][2] == true ? 1 : 0,//11
      'ae45': this.checkboxValues[4][0] == true ? 1 : 0,
      'af45': this.checkboxValues[4][1] == true ? 1 : 0,
      'ag45': this.checkboxValues[4][2] == true ? 1 : 0,//14
      'ae46': this.checkboxValues[5][0] == true ? 1 : 0,
      'af46': this.checkboxValues[5][1] == true ? 1 : 0,
      'ag46': this.checkboxValues[5][2] == true ? 1 : 0,//17
      'ae47': this.checkboxValues[6][0] == true ? 1 : 0,
      'af47': this.checkboxValues[6][1] == true ? 1 : 0,
      'ag47': this.checkboxValues[6][2] == true ? 1 : 0,//20
      'ae48': this.checkboxValues[7][0] == true ? 1 : 0,
      'af48': this.checkboxValues[7][1] == true ? 1 : 0,
      'ag48': this.checkboxValues[7][2] == true ? 1 : 0,//23
      'ae49': this.checkboxValues[8][0] == true ? 1 : 0,
      'af49': this.checkboxValues[8][1] == true ? 1 : 0,
      'ag49': this.checkboxValues[8][2] == true ? 1 : 0,//26
      'ae50': this.checkboxValues[9][0] == true ? 1 : 0,
      'af50': this.checkboxValues[9][1] == true ? 1 : 0,
      'ag50': this.checkboxValues[9][2] == true ? 1 : 0,//29
      'ae51': this.checkboxValues[10][0] == true ? 1 : 0,
      'af51': this.checkboxValues[10][1] == true ? 1 : 0,
      'ag51': this.checkboxValues[10][2] == true ? 1 : 0,//32
      'ae52': this.checkboxValues[11][0] == true ? 1 : 0,
      'af52': this.checkboxValues[11][1] == true ? 1 : 0,
      'ag52': this.checkboxValues[11][2] == true ? 1 : 0,//35
      'ae53': this.checkboxValues[12][0] == true ? 1 : 0,
      'af53': this.checkboxValues[12][1] == true ? 1 : 0,
      'ag53': this.checkboxValues[12][2] == true ? 1 : 0,//38
      'ae54': this.checkboxValues[13][0] == true ? 1 : 0,
      'af54': this.checkboxValues[13][1] == true ? 1 : 0,
      'ag54': this.checkboxValues[13][2] == true ? 1 : 0,//41
      'ae55': this.checkboxValues[14][0] == true ? 1 : 0,
      'af55': this.checkboxValues[14][1] == true ? 1 : 0,
      'ag55': this.checkboxValues[14][2] == true ? 1 : 0,//44
      'ae56': this.numberValues[0],
      'af56': this.numberValues[1],
      'ag56': this.numberValues[2],//47
      'ae58': this.result[63],//48
      'c56': this.result[64],
      'c57': this.result[65],
      'c58': this.result[66],//51
      'd56': this.result[67],
      'd57': this.result[68],
      'd58': this.result[69],//54
      'e56': this.result[70],
      'e57': this.result[71],
      'e58': this.result[72],//57
      'ae62': this.cardData[0].ischecked==true?1:0,
      'ae63': this.cardData[1].ischecked==true?1:0,
      'ae64': this.cardData[2].ischecked==true?1:0,
    }
    this._api.writeGameData("innovationgame", 3,
      data, apiname, 'innovationgamecmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.updateInputResValue();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  checkInputValues(i: number, j: number, event: any) {

    for (let k = 0; k < this.checkboxValues.length; k++) {
      if ((j == 0) && (event.target.checked)) {
        this.checkboxValues[i][0] = true;
        this.checkboxValues[i][1] = true;
        this.checkboxValues[i][2] = true;
        this.disabled[i][1] = true;
        this.disabled[i][2] = true;
      }

      else if ((j == 1) && (event.target.checked)) {
        this.checkboxValues[i][2] = true;
        this.checkboxValues[i][1] = true;
        this.disabled[i][2] = true;
      }


      else if ((j == 1) && (!event.target.checked)) {
        this.checkboxValues[i][1] = false;
        this.checkboxValues[i][2] = false;
        this.disabled[i][1] = false
        this.disabled[i][2] = false
      }

      else if ((j == 0) && (!event.target.checked)) {
        this.checkboxValues[i][0] = false;
        this.checkboxValues[i][1] = false;
        this.checkboxValues[i][2] = false;
        this.disabled[i][0] = false
        this.disabled[i][1] = false
        this.disabled[i][2] = false

      }
      else if ((j == 2) && (event.target.checked)) {
        this.checkboxValues[i][2] = true;
      }
      else if ((j == 2) && (!event.target.checked)) {
        this.checkboxValues[i][2] = false;

      }

      this.cdr.detectChanges();
    }

    this.writeGameData();
  }

  updateCheckboxfield() {
    for (let i = 0; i < this.checkboxValues.length; i++) {
      if (this.checkboxValues[i][0] == true) {
        this.disabled[i][1] = true
        this.disabled[i][2] = true
      } else if (this.checkboxValues[i][1] == true) {
        this.disabled[i][2] = true
      }
    }
  }

 

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(InnovationfoodforthoughtComponent, {
      data: {},
    });
  }

}

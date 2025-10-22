import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  ApexNoData,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { InnovationfoodforthoughtComponent } from '../innovationfoodforthought/innovationfoodforthought.component';
import { MatIconModule } from '@angular/material/icon';

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
  selector: 'app-innovationresources',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './innovationresources.component.html',
  styleUrls: ['./innovationresources.component.scss']
})
export class InnovationresourcesComponent extends AbstractComponent {
  wageskinrchart: barChart;
  foodforthought: boolean = true;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  databasecellname: any = ['ae23', 'ae24', 'ae25', 'j4', 'j5',//4
    'd15', 'd16', 'd17', 'd18', 'd19', 'd20',//10
    'e15', 'e16', 'e17', 'e18', 'e19', 'e20',//16
    'ae29', 'ae30', 'ae31', 'ae32', 'ae33', 'ae34'//22
  ];
  periodcellname: any;
  wagesgraphrange: any = [
    ['Developers', 'd9'],
    ['Industry Experts', 'd10'],
    ['Marketeer', 'd11']
  ]
  cardData = [
    {
      id: 'card1',
      title: 'Interactive Educational Modules',
      img: "assets/images/innovation/intractioneducationalmodule.svg",
      databasecellname: "ae29",
      ischecked: false,
      description: {
        description: 'Develop interactive educational modules and lessons covering various subjects, allowing users to learn through immersive experiences and hands-on activities.',
        textname: 'Additional time required, days',
        cellvalue: 'e15',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'Virtual Field Trips',
      img: "assets/images/innovation/virtualfieldtrip.svg",
      databasecellname: "ae30",
      ischecked: false,
      description: {
        description: "Organize virtual field trips to historical sites, museums, and landmarks, enabling students to explore and learn about different cultures and historical periods.",
        textname: 'Additional time required, days',
        cellvalue: 'e16',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'Language Learning Adventures',
      img: "assets/images/innovation/languagelearningadvanatage.svg",
      databasecellname: "ae31",
      ischecked: false,
      description: {
        description: "Create language learning adventures set in immersive virtual environments, allowing users to practice and enhance their language skills through real-world scenarios.",
        textname: 'Additional time required, days',
        cellvalue: 'e17',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'STEM Exploration Labs',
      img: "assets/images/innovation/stemexplorationlab.svg",
      databasecellname: "ae32",
      ischecked: false,
      description: {
        description: "Design virtual STEM exploration labs where students can conduct experiments, solve puzzles, and explore scientific concepts in a virtual setting.",
        textname: 'Additional time required, days',
        cellvalue: 'e18',
      },
      turncatedtext: '',
    },
    {
      id: 'card5',
      title: 'Creative Storytelling Workshops',
      img: "assets/images/innovation/creativestorutellingworkshop.svg",
      databasecellname: "ae33",
      ischecked: false,
      description: {
        description: "Host creative storytelling workshops where users can create and share their own stories using virtual storytelling tools and multimedia elements.",
        textname: 'Additional time required, days',
        cellvalue: 'e19',
      },
      turncatedtext: '',
    },
    {
      id: 'card6',
      title: 'Historical Time Travel Adventures',
      img: "assets/images/innovation/historicaltimetraveladventure.svg",
      databasecellname: "ae34",
      ischecked: false,
      description: {
        description: "Embark on historical time travel adventures where users can explore different time periods and historical events through immersive storytelling and gameplay.",
        textname: 'Additional time required, days',
        cellvalue: 'e20',
      },
      turncatedtext: '',
    },
  ];

  jsonarray1: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.wageskinrchart = {
      series: [
        // {
        //   name: 'Cost, k INR',
        //   data: [6800, 1170, 720]
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
        categories: ['Developers', 'Industry Experts', 'Marketeer'],
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
        text: "Wages, k INR",
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
    let apiname = '/innovationgame/fetchinnovationgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = []
              this._global.casemanagementid.next(data.resultList[0].innovationgamecmid);
              if (data.resultList[0].innovationGameCM.innovationGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.databasecellname.forEach((name: string, i: number) => {
                this.result[i] = data.resultList[0][name];
                if (i > 16 && i < 23) {
                  this.cardData[i - 17].ischecked = this.result[i] === 1;
                }
              });
              console.log("result", this.result)

              for (let i = 0; i < this.wagesgraphrange.length; i++) {
                this.jsonarray1.push(Number((data.resultList[0][this.wagesgraphrange[i][1]])).toFixed(0));
              }
              this.wageskinrchart.series = [{ "name": '', "data": this.jsonarray1 },];

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

    this.jsonarray1 = [];

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];

        const resultIndices = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        const dataCellIndices = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

        for (let i = 0; i < resultIndices.length; i++) {
          this.result[resultIndices[i]] = updatedData[this.databasecellname[dataCellIndices[i]]];
        }


        for (let i = 0; i < this.wagesgraphrange.length; i++) {
          this.jsonarray1.push(Number((updatedData[this.wagesgraphrange[i][1]])).toFixed(0));
        }
        this.wageskinrchart.series = [{ "name": '', "data": this.jsonarray1 },];

      }
    });
  }


  getSelection(inputField: string, index: number, event: any) {
    const ranges: { [key: string]: [number, number, string] } = {
      'Development': [1, 10, 'range between 1 to 10'],
    };

    const [min, max, errorMsg] = ranges[inputField] || [];
    if (min !== undefined && (this.result[index] < min || this.result[index] > max)) {
      this.result[index] = 0;
      this._alert.error(errorMsg);
    }

    if (inputField === 'Features') {
      this.cardData[index].ischecked = event.target.checked;
      // this.result[index+17]
    }

    this.writeGameData();
  }
  writeGameData() {
    let apiname = '/innovationgame/singleinputinnovationgame';
    let data = {
      "ae23": this.result[0],
      "ae24": this.result[1],
      "ae25": this.result[2],
      "ae29": this.cardData[0].ischecked == true ? '1' : '0',
      "ae30": this.cardData[1].ischecked == true ? '1' : '0',
      "ae31": this.cardData[2].ischecked == true ? '1' : '0',
      "ae32": this.cardData[3].ischecked == true ? '1' : '0',
      "ae33": this.cardData[4].ischecked == true ? '1' : '0',
      "ae34": this.cardData[5].ischecked == true ? '1' : '0',

    }
    this._api.writeGameData("innovationgame", 2,
      data, apiname, 'innovationgamecmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.updateInputResValue();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.inputDisabled = false;
        this.driveerrorLog(error, apiname);
      })
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

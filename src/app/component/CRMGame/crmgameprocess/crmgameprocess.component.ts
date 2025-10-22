import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CrmgamefoodforthoughtComponent } from '../crmgamefoodforthought/crmgamefoodforthought.component';
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
import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'app-crmgameprocess',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './crmgameprocess.component.html',
  styleUrls: ['./crmgameprocess.component.scss']
})
export class CrmgameprocessComponent extends AbstractComponent {
  resourceschart: barChart;
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  languageresult: any = [];
  languageid: number = 0;

  dataoflang: any =[] ;
  // cardData = [
  //   {
  //     id: 'card1',
  //     title: '',
  //     img: "assets/images/crmgame/onboardingandimplement.svg",
  //     databasecellname: "al68",
  //     ischecked: false,
  //     description: {
  //       description: 'By offering extended onboarding sessions and personalized implementation assistance, customer satisfaction can increase by up to 5%, leading to improved understanding and utilization of the product.',
  //       textname: 'process_b216',
  //       cellvalue: 'aj11',
  //     },
  //     turncatedtext: '',
  //   },
  //   {
  //     id: 'card2',
  //     title: '',
  //     img: "assets/images/crmgame/customerserviceoverview.svg",
  //     databasecellname: "al69",
  //     ischecked: false,
  //     description: {
  //       description: "Strengthening technical support with faster response times and deeper troubleshooting capabilities can boost customer satisfaction by 3%, fostering trust and confidence in the company's products.",
  //       textname: 'process_b216',
  //       cellvalue: 'aj12',
  //     },
  //     turncatedtext: '',
  //   },
  //   {
  //     id: 'card3',
  //     title: '',
  //     img: "assets/images/crmgame/customerrealtionshipmanagement.svg",
  //     databasecellname: "al70",
  //     ischecked: false,
  //     description: {
  //       description: "Enhancing CRM efforts with more frequent check-ins, tailored communication, and proactive problem-solving can elevate customer satisfaction by 4%, fostering loyalty and increasing the likelihood of repeat purchases.",
  //       textname: 'process_b216',
  //       cellvalue: 'aj13',
  //     },
  //     turncatedtext: '',
  //   },
  //   {
  //     id: 'card4',
  //     title: '',
  //     img: "assets/images/crmgame/feedbackcollectionandproduct.svg",
  //     databasecellname: "al71",
  //     ischecked: false,
  //     description: {
  //       description: "Improving feedback collection processes and prioritizing product improvements based on customer input can boost satisfaction by 2%, demonstrating responsiveness to customer needs.",
  //       textname: 'process_b216',
  //       cellvalue: 'aj14',
  //     },
  //     turncatedtext: '',
  //   },
  //   {
  //     id: 'card5',
  //     title: '',
  //     img: "assets/images/crmgame/issueresulationandescalation.jpg",
  //     databasecellname: "al72",
  //     ischecked: false,
  //     description: {
  //       description: "Strengthening issue resolution capabilities with faster response times and proactive communication can elevate satisfaction by 3%, instilling confidence in the company's support infrastructure.",
  //       textname: 'process_b216',
  //       cellvalue: 'aj15',
  //     },
  //     turncatedtext: '',
  //   },
  // ];

  cardData = [
    {
      id: 'card1',
      title: '',
      img: "assets/images/crmgame/onboardingandimplement.svg",
      databasecellname: "al68",
      ischecked: false,
      description: {
        description: 'b193',
        textname: 'b216',
        cellvalue: 'aj11',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: '',
      img: "assets/images/crmgame/customerserviceoverview.svg",
      databasecellname: "al69",
      ischecked: false,
      description: {
        description: "b194",
        textname: 'b216',
        cellvalue: 'aj12',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: '',
      img: "assets/images/crmgame/customerrealtionshipmanagement.svg",
      databasecellname: "al70",
      ischecked: false,
      description: {
        description: "b195",
        textname: 'b216',
        cellvalue: 'aj13',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: '',
      img: "assets/images/crmgame/feedbackcollectionandproduct.svg",
      databasecellname: "al71",
      ischecked: false,
      description: {
        description: "b196",
        textname: 'b216',
        cellvalue: 'aj14',
      },
      turncatedtext: '',
    },
    {
      id: 'card5',
      title: '',
      img: "assets/images/crmgame/issueresulationandescalation.jpg",
      databasecellname: "al72",
      ischecked: false,
      description: {
        description: "b197",
        textname: 'b216',
        cellvalue: 'aj15',
      },
      turncatedtext: '',
    },
  ];

  cardData1 = [
    {
      id: 'card1',
      title: '',
      img: "assets/images/crmgame/automateddataandintegration.avif",
      databasecellname: "al81",
      ischecked: false,
      description: {
        description: "b204",
        textname: 'b217',
        cellvalue: 'ai18',
      },
      // turncatedtext: '',
    },
    {
      id: 'card2',
      title: '',
      img: "assets/images/crmgame/cloudbasedcrmsolution.svg",
      databasecellname: "al82",
      ischecked: false,
      description: {
        description: "b205",
        textname: 'b217',
        cellvalue: 'ai19',
      },
      // turncatedtext: '',
    },
    {
      id: 'card3',
      title: '',
      img: "assets/images/crmgame/selfservicecustomerportal.svg",
      databasecellname: "al83",
      ischecked: false,
      description: {
        description: "b206",
        textname: 'b217',
        cellvalue: 'ai20',
      },
      // turncatedtext: '',
    },
    {
      id: 'card4',
      title: '',
      img: "assets/images/crmgame/aichatboatscustomersupport.jpg",
      databasecellname: "al84",
      ischecked: false,
      description: {
        description: "b207",
        textname: 'b217',
        cellvalue: 'ai21',
      },
      // turncatedtext: '',
    },
    {
      id: 'card5',
      title: '',
      img: "assets/images/crmgame/processstrandatddocument.avif",
      databasecellname: "al85",
      ischecked: false,
      description: {
        description: "b208",
        textname: 'b217',
        cellvalue: 'ai22',
      },
      // turncatedtext: '',
    },
  ]

  showAll: boolean[] = new Array(5).fill(false);
  showAll1: boolean[] = new Array(5).fill(false);


// Add truncate function
truncate(text: string, length: number): string {
  return text.substring(0, length) + (text.length > length ? '...' : '');
}

// Add toggle handler
toggleShow(index: number): void {
  this.showAll[index] = !this.showAll[index];
}
toggleShow1(index: number): void {
  this.showAll1[index] = !this.showAll1[index];
}

  periodcellname: any= [
    // 'ag11','ag12','ag13','ag14','ag15',//4
    // 'ag18','ag19','ag20','ag21','ag22',//9
    'aj11','aj12','aj13','aj14','aj15',//14
    'ai18','ai19','ai20','ai21','ai22'//19
  ];

  languagecellname: any= [
    'b188','b189','b190','b191','b192',//4
    'b199','b200','b201','b202','b203',//4

  ];

  databasecellname:any = [
    'al68','al69','al70','al71','al72',//24
    'c21','c12','s17',//27
    'al76','al77','c25',//30
    'al81','al82','al83','al84','al85',//35
  ]

  resourcegraphrange:any = [
    ['Total hours required','c23'],
    ['Total hours allocated','c24']
  ]
  jsonarray1:any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.resourceschart = {
      series: [
        // {
        //   data: [567.3, 580.0]
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
        // categories: ['Total hours required', 'Total hours allocated'],
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
        // text: "Resources",
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
    let apiname = '/crmgame/fetchcrmgame';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = []
              this._global.casemanagementid.next(data.resultList[0].crmgamecmid);
              this.languageid = data.resultList[0].crmGameLM.crmgamelmid;
              if (data.resultList[0].crmGameCM.crmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.dataoflang = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()];

              for (let i = 0; i < this.languagecellname.length; i++) {
                this.result[i] = this.dataoflang[this.languagecellname[i]]
                }
                for (let i = 10; i < 20; i++) {
                  this.result[i] = data.resultList[0].crmGameCM.crmgameperioddata[this.periodcellname[i-10]]
                  }
                 

              for (let i = 20; i < 36; i++) {
                this.result[i] = data.resultList[0].crmgamedata[this.databasecellname[i-20]]
                if((i>19)&&(i<25)){
                  if(this.result[i]==1){
                    this.cardData[i-20].ischecked = true
                  }else{
                    this.cardData[i-20].ischecked = false
                  }
                }
                if((i>30)&&(i<36)){
                  if(this.result[i]==1){
                    this.cardData1[i-31].ischecked = true
                  }else{
                    this.cardData1[i-31].ischecked = false
                  }
                }

              }
              this.languageresult = this.dataoflang
              this.resourceschart = {
                ...this.resourceschart, // Retain existing config
                xaxis: {
                  ...this.resourceschart.xaxis,
                  categories: [
                    this.languageresult.b219, // High Priority
                    this.languageresult.b220, // Medium Priority
                  ]
                },
                title: {
                  text: this.languageresult.b218,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }

                }
              };
              for (let i = 0; i < this.resourcegraphrange.length; i++) {
                this.jsonarray1.push(Number((data.resultList[0].crmgamedata[this.resourcegraphrange[i][1]])).toFixed(0));
              }
              this.resourceschart.series = [{ "name": '', "data": this.jsonarray1 },];
              
              if ((String(data.resultList[0].crmgamedata.al96) == 'yes') ||
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

  getSelection(inputField: string, index: number, event: any) {
    const ranges: { [key: string]: [number, number, string] } = {
      'resource': [0, 3000, 'range between 0 to 3000'],
    };
  
    const checkField = (field: any, isChecked: boolean) => field[index].ischecked = isChecked;
  
    const [min, max, errorMsg] = ranges[inputField] || [];
    if (min !== undefined && (this.result[index] < min || this.result[index] > max)) {
      this.result[index] = 0;
      this._alert.error(errorMsg);
    }
  
    if (inputField === "customerservice" || inputField === "processstream") {
      checkField(inputField === "customerservice" ? this.cardData : this.cardData1, event.target.checked);
    }
  
    this.writeGameData();
  }

  writeGameData() {
    let apiname = '/crmgame/singleinputcrmgame';
    let mergeAcquisitioninputData = {
      "al76": this.result[28],
      "al77": this.result[29],
      "al68": this.cardData[0].ischecked == true ? '1' : '0',
      "al69": this.cardData[1].ischecked == true ? '1' : '0',
      "al70": this.cardData[2].ischecked == true ? '1' : '0',
      "al71": this.cardData[3].ischecked == true ? '1' : '0',
      "al72": this.cardData[4].ischecked == true ? '1' : '0',
      "al81": this.cardData1[0].ischecked == true ? '1' : '0',
      "al82": this.cardData1[1].ischecked == true ? '1' : '0',
      "al83": this.cardData1[2].ischecked == true ? '1' : '0',
      "al84": this.cardData1[3].ischecked == true ? '1' : '0',
      "al85": this.cardData1[4].ischecked == true ? '1' : '0',
    }
    this._api.writeLanguageData("crmgame", 3,
      mergeAcquisitioninputData, apiname, 'crmgamecmid', this.languageselect,this.languageid, 'crmgamelmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(CrmgamefoodforthoughtComponent, {
      data: {},
    });
  }
}

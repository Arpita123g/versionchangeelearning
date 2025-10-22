import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, NgApexchartsModule } from "ng-apexcharts";
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FoodforthoughtConsumerComponent } from '../foodforthoughtconsumer/foodforthoughtconsumer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

export type barchart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;

};

@Component({
  selector: 'app-consumerconceptualization',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './consumerconceptualization.component.html',
  styleUrls: ['./consumerconceptualization.component.scss']
})
export class ConsumerconceptualizationComponent extends AbstractComponent {

  Gamingappsbar: barchart;
  situationalelements: barchart;
  showSituationalElements: boolean = true;
  showSocialElements: boolean = true;
  checkdisable: boolean = false;
  result: any = [];
  textshow: { [key: string]: boolean } = {};
  w50: string = "";
  languageid: number = 0;
  language: any = [];

  totalconceptualizationinputfield = ['w30', 'w31', 'w32', 'w33', 'w34', 'w37',
    'w38', 'w39', 'w40', 'w43', 'w44', 'w45', 'w46', 'w47', 'w48', 'w50']
  gamingappsbargraph = [
    ['b25', 'q104'],
    ['b26', 'q105'],
    ['b27', 'q106'],
    ['b28', 'q107'],
    ['b29', 'q108']
  ]
  situationalgraph = [
    ['b95', 'q118', 'r118'],
    ['b96', 'q119', 'r119'],
    ['b97', 'q120', 'r120'],
    ['b98', 'q121', 'r121'],
  ]
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  selectedInputField: any = [];
  action: boolean = false;
  racing: boolean = false;
  puzzle: boolean = false;
  playfulness: boolean = false;
  culturalnorms: boolean = false;
  easyofuse: boolean = false;
  continuance: boolean = false;
  foodforthought: boolean = true;
  selectedOption: string | null = null;
  situaltionalcheckbox: number = 0;
  socialelementscheckbox: number = 0;
  disabled: boolean[] = [];
  genersvalue: string = '';

  cardData1 = [
    {
      id: 'card1',
      title: 'b25',
      description:
        "b88",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'b26',
      description:
        "b89",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'b27',
      description:
        "b90",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'b28',
      description:
        "b91",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'b29',
      description:
        "b92",
      turncatedtext: "",
    },

  ];
  cardData2 = [
    {
      id: 'card1',
      title: 'b95',
      description:
        "b99",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'b96',
      description:
        "b100",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'b97',
      description:
       "b101",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'b98',
      description:
       "b102",
      turncatedtext: "",
    },

  ];
  cardData3 = [
    {
      id: 'card1',
      title: 'b106',
      description:
        "b112",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'b107',
      description:
        "b113",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: "b108",
      description:
      "b114",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'b109',
      description:
      "b115",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'b110',
      description:
      "b116",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: 'b111',
      description:
      "b117",
      turncatedtext: "",
    },

  ];
  cardData4 = [
    {
      id: 'card1',
      title: 'b119',
      description:
        "b127",
      turncatedtext: "",
    },
    {
      id: 'card2',
      title: 'b120',
      description:
      "b128",
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: "b121",
      description:
      "b129",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'b122',
      description:
      "b130",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'b123',
      description:
      "b131",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: 'b124',
      description:
      "b132",
      turncatedtext: "",
    },
    {
      id: 'card7',
      title: 'b125',
      description:
      "b133",
      turncatedtext: "",
    },
    {
      id: 'card8',
      title: 'b126',
      description:
      "b134",
      turncatedtext: "",
    },

  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Gamingappsbar = {
      series: [

      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: this.datalabels[1],

      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [], position: "bottom", labels: { offsetY: 0, formatter: function (val: string) { return val + "%"; }, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 },
        title: {
          // offsetY: 10,
          // text: 'Higher % indicates higher competition',
          // style: {
          //   color: undefined,
          //   fontSize: '12px',
          //   fontWeight: 400,
          //   cssClass: 'apexcharts-xaxis-title',
          // }
        }
      },
      yaxis: this.yaxis[0],
      fill: {
        opacity: 1
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
        // text: "Competitive Landscape",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
    this.situationalelements = {
      series: [],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: this.datalabels[1],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: this.xaxis[0],
      yaxis: this.yaxis[1],
      fill: {
        opacity: 1
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

  //for backend
  getFetchData() {
    this.jsonarray1 = []; this.jsonarray2 = []; this.jsonarray3 = [];
    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].consumerbehaviournewcmid);
              this.languageid = data.resultList[0].consumerBehaviourNewLM.consumerbehaviournewlmid;

              if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.language = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];

              for (let i = 0; i < this.totalconceptualizationinputfield.length; i++) {
                let value = data.resultList[0].consumerbehaviournewdata[this.totalconceptualizationinputfield[i]];
                if (this.languageselect.toLowerCase() === 'french') {
                  if (value === 'Oui') {
                    this.result[i] = 'Yes';
                  } else if (value === 'Non') {
                    this.result[i] = 'No';
                  } else if (value === 'Actif') {
                    this.result[i] = 'Active';
                  } else if (value === 'Sain') {
                    this.result[i] = 'Healthy';
                  } else if (value === 'Solitaire') {
                    this.result[i] = 'Solo';
                  } else if (value === 'Rural') {
                    this.result[i] = 'Rural';
                  } else if (value === 'Urbain') {
                    this.result[i] = 'Urban';
                  } else if (value === 'Nomade') {
                    this.result[i] = 'Nomadic';
                  } else if (value === 'Bohémien') {
                    this.result[i] = 'Bohemian';
                  } else if (value === 'Numérique') {
                    this.result[i] = 'Digital';
                  } else {
                    this.result[i] = value;
                  }
                } else {
                  this.result[i] = value;
                }
              }

              for (let i = 5; i < 9; i++) {
                if (this.result[i] == "Yes") {
                  this.result[i] = true;
                  this.situaltionalcheckbox = this.situaltionalcheckbox + 1;

                } else {
                  this.result[i] = false;
                }
              }
              if (this.situaltionalcheckbox == 2) {
                for (let j = 5; j < 9; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 5] = false;
                  } else {
                    this.disabled[j - 5] = true;
                  }
                }

              }
              for (let i = 9; i < 15; i++) {
                if (this.result[i] == "Yes") {
                  this.result[i] = true;
                  this.socialelementscheckbox = this.socialelementscheckbox + 1;

                } else {
                  this.result[i] = false;
                }
              }
              if (this.socialelementscheckbox == 3) {
                for (let j = 9; j < 15; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 5] = false;
                  } else {
                    this.disabled[j - 5] = true;
                  }
                }

              }
             
              for (let i = 0; i < this.cardData1.length; i++) {
                const titleKey = this.cardData1[i].title;
                const descKey = this.cardData1[i].description;
                
                this.cardData1[i].title = this.language[titleKey] || ''; // Fallback to empty string
                const fullDescription = this.language[descKey] || ''; // Get actual translated text
              
                this.cardData1[i].description = fullDescription;
              
                if (fullDescription.length > 100) {
                  this.cardData1[i].turncatedtext = fullDescription.substring(0, 100) + '...';
                } else {
                  this.cardData1[i].turncatedtext = fullDescription;
                }
              }

              for (let i = 0; i < this.cardData2.length; i++) {
                const titleKey = this.cardData2[i].title;
                const descKey = this.cardData2[i].description;
                
                this.cardData2[i].title = this.language[titleKey] || ''; 
                const fullDescription = this.language[descKey] || ''; 
              
                this.cardData2[i].description = fullDescription;
              
                if (fullDescription.length > 100) {
                  this.cardData2[i].turncatedtext = fullDescription.substring(0, 100) + '...';
                } else {
                  this.cardData2[i].turncatedtext = fullDescription;
                }
              }
              
              for (let i = 0; i < this.cardData3.length; i++) {
                const titleKey = this.cardData3[i].title;
                const descKey = this.cardData3[i].description;
                
                this.cardData3[i].title = this.language[titleKey] || ''; // Fallback to empty string
                const fullDescription = this.language[descKey] || ''; // Get actual translated text
              
                this.cardData3[i].description = fullDescription;
              
                if (fullDescription.length > 100) {
                  this.cardData3[i].turncatedtext = fullDescription.substring(0, 100) + '...';
                } else {
                  this.cardData3[i].turncatedtext = fullDescription;
                }
              }
            
              for (let i = 0; i < this.cardData4.length; i++) {
                const titleKey = this.cardData4[i].title;
                const descKey = this.cardData4[i].description;
                
                this.cardData4[i].title = this.language[titleKey] || ''; 
                const fullDescription = this.language[descKey] || ''; 
                this.cardData4[i].description = fullDescription;
              
                if (fullDescription.length > 100) {
                  this.cardData4[i].turncatedtext = fullDescription.substring(0, 100) + '...';
                } else {
                  this.cardData4[i].turncatedtext = fullDescription;
                }
              }
              this.Gamingappsbar ={
                ...this.Gamingappsbar,
               
                title: {
                  text: this.language.b93,
                  offsetY: 0,
                  align: "center",
                  style: {
                    fontWeight: "bold",
                  }
                }
              };
              for (let i = 0; i < 5; i++) {
                this.jsonarray1.push({ 'x': this.language[this.gamingappsbargraph[i][0]], 'y': (data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.gamingappsbargraph[i][1]] * 100).toFixed(0) });
              }
              for (let i = 0; i < 4; i++) {
                this.jsonarray2.push({ 'x': this.language[this.situationalgraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.situationalgraph[i][1]] * 100).toFixed(0) });
                this.jsonarray3.push({ 'x': this.language[this.situationalgraph[i][0]], 'y': Number(data.resultList[0].consumerBehaviourNewCM.consumerbehaviournewperioddata[this.situationalgraph[i][2]] * 100).toFixed(0) });
              }
              this.Gamingappsbar.series = [{ "name": "", "data": this.jsonarray1 },]
              this.situationalelements.series = [{ "name": this.language.b103, "data": this.jsonarray2 }, { "name": this.language.b104, "data": this.jsonarray3 }]

              if ((data.resultList[0].consumerbehaviournewdata.t76 == 'yes') || (data.resultList[0].consumerbehaviournewdata.t76 == 'Yes') || (this.timefinished)) {
                this.checkdisable = true;
                for (let i = 0; i < 10; i++) {
                  this.disabled[i] = true;
                }
              }
              if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.situationalstatus == "active") {
                this.showSituationalElements = true;
              } else {
                this.showSituationalElements = false;
              }
              if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.socialstatus == "active") {
                this.showSocialElements = true;
              } else {
                this.showSocialElements = false;
              }
            }
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }


  openDialog(): void {
    this.dialog.open(FoodforthoughtConsumerComponent, {
      data: {},
    });
  }
  getSelectedelement(value: string) {
    this.result[15] = value;
    this.writeconceptualization();
  }


  getSelection(inputField: string, index: number) {
    if (inputField == 'genre') {
      this.result[index] = 'Yes';

      for (let i = 0; i < 5; i++) {
        if (i !== index) {
          this.result[i] = 'No';
        }
      }
    }
    else if (inputField == 'situational') {
      if (this.result[index] == true) {
        this.situaltionalcheckbox = this.situaltionalcheckbox + 1;
        if (this.situaltionalcheckbox == 2) {
          for (let j = 5; j < 9; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 5] = false;
            } else {
              this.disabled[j - 5] = true;
            }
          }

        }
      } else {
        this.situaltionalcheckbox = this.situaltionalcheckbox - 1;
        if (this.situaltionalcheckbox == 1) {
          for (let j = 0; j < 4; j++) {
            this.disabled[j] = false;
          }
        }
      }

    } else if (inputField == 'social') {
      if (this.result[index] == true) {
        this.socialelementscheckbox = this.socialelementscheckbox + 1;
        if (this.socialelementscheckbox == 3) {
          for (let j = 9; j < 15; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 5] = false;
            } else {
              this.disabled[j - 5] = true;
            }
          }

        }
      } else {
        this.socialelementscheckbox = this.socialelementscheckbox - 1;
        if (this.socialelementscheckbox == 2) {
          for (let j = 4; j < 10; j++) {
            this.disabled[j] = false;
          }
        }
      }

    }
    this.writeconceptualization();
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }


  writeconceptualization() {
    let apiname = '/consumerbehaviournew/singleinputconsumerbehaviournew';

    let conceptData: any;
    if(this.languageselect.toLowerCase() ==='french'){
      conceptData = {
        "w30": this.result[0]=== 'Yes' ? 'Oui' : 'Non',
        "w31": this.result[1]=== 'Yes' ? 'Oui' : 'Non',
        "w32": this.result[2]=== 'Yes' ? 'Oui' : 'Non',
        "w33": this.result[3]=== 'Yes' ? 'Oui' : 'Non',
        "w34": this.result[4]=== 'Yes' ? 'Oui' : 'Non',
        "w37": this.result[5] == true ? 'Oui' : 'Non',
        "w38": this.result[6] == true ? 'Oui' : 'Non',
        "w39": this.result[7] == true ? 'Oui' : 'Non',
        "w40": this.result[8] == true ? 'Oui' : 'Non',
        "w43": this.result[9] == true ? 'Oui' : 'Non',
        "w44": this.result[10] == true ?'Oui' : 'Non',
        "w45": this.result[11] == true ?'Oui' : 'Non',
        "w46": this.result[12] == true ?'Oui' : 'Non',
        "w47": this.result[13] == true ?'Oui' : 'Non',
        "w48": this.result[14] == true ?'Oui' : 'Non',
        "w50": this.result[15] === 'Active' ? 'Actif' : 
                this.result[15] === 'Healthy' ? 'Sain' :
                this.result[15] === 'Solo' ? 'Solitaire' :
                this.result[15] === 'Rural' ? 'Rural' :
                this.result[15] === 'Urban' ? 'Urbain' :
                this.result[15] === 'Nomadic' ? 'Nomade' :
                this.result[15] === 'Bohemian' ? 'Bohémien' :
                this.result[15] === 'Digital' ? 'Numérique' : this.result[15]
      };
    } else {
      conceptData = {
        "w30": this.result[0],
        "w31": this.result[1],
        "w32": this.result[2],
        "w33": this.result[3],
        "w34": this.result[4],
        "w37": this.result[5] == true ? 'Yes' : 'No',
        "w38": this.result[6] == true ? 'Yes' : 'No',
        "w39": this.result[7] == true ? 'Yes' : 'No',
        "w40": this.result[8] == true ? 'Yes' : 'No',
        "w43": this.result[9] == true ? 'Yes' : 'No',
        "w44": this.result[10] == true ? 'Yes' : 'No',
        "w45": this.result[11] == true ? 'Yes' : 'No',
        "w46": this.result[12] == true ? 'Yes' : 'No',
        "w47": this.result[13] == true ? 'Yes' : 'No',
        "w48": this.result[14] == true ? 'Yes' : 'No',
        "w50": this.result[15]
      };
    }

   
    this._api.writeLanguageData("consumerbehaviournew", 2,
      conceptData, apiname, 'consumerbehaviournewcmid', this.languageselect, this.languageid, 'consumerbehaviournewlmid').subscribe((data: any) => {
    
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }


}
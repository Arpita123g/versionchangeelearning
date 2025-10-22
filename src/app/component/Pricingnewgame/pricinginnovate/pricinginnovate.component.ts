import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexMarkers,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { PricingfoodforthoughtComponent } from '../pricingfoodforthought/pricingfoodforthought.component';
import { PopupDialogueComponent } from 'src/app/common/popup-dialogue/popup-dialogue.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

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
  selector: 'app-pricinginnovate',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './pricinginnovate.component.html',
  styleUrls: ['./pricinginnovate.component.scss']
})
export class PricinginnovateComponent extends AbstractComponent {
  priceperseatchart: lineChart;
  selectedImage: any = null;
  showText = false;
  disabled: boolean[] = [];
  jsonarray1: any = [];
  value: string = '';
  result: any = [];
  businessday: string = '';
  c18: string = '';
  inputDisabled: boolean = false;
  // locationvalue: string = '';
  foodforthought: boolean = true;
  //demandrange = []
  @Input() show: boolean = true;
  @Input() isShow3: boolean = false;
  databasecellname: any = ['y11', 'c12', 'c15', 'c14', 'c16', 'd12', 'd15', 'd14', 'd16', 'y13', 'y14', 'y15']

  selectedIndex: number = 0;
  initiatevalue: number = 0;
  textshow: { [key: string]: boolean } = {};
  @Output() newItemEvent = new EventEmitter<string>();
  periodcellname: any = ['j7', 'j8', 'j9', 'k7', 'k8', 'k9',
    
  ]

  priceperseatchartrange: any = [
    ['j15','k15'],
    ['j16','k16'],
    ['j17','k17'],
    ['j18','k18'],
    ['j19','k19'],
    ['j20','k20'],
    ['j21','k21'],
  ]

  cardData1 = [
    {
      id: 'card1',
      title: 'j7',
      description: 'Elevate your in-flight experience with our delectable sandwich meal, carefully crafted to tantalize your taste buds. A consumer enjoys a gourmet treat that adds a touch of culinary delight to their journey, attracting passengers seeking an enhanced and satisfying travel experience.',
      turncatedtext: "Elevate your in-flight experience with our delectable sandwich meal, carefully crafted to tantalize"
    },
    {
      id: 'card2',
      title: 'j8',
      description: 'Provide control of travel plans with our flexible booking option. This service caters to passengers who value the freedom to make changes without the hassle, appealing to those seeking peace of mind and adaptability in their journey arrangements.',
      turncatedtext: "Provide control of travel plans with our flexible booking option. This service caters to passengers ",
    },
    {
      id: 'card3',
      title: 'j9',
      description: "A reason for consumers to pack without worries and bring more on board with our additional baggage service. Ideal for passengers who prioritize convenience and want the flexibility to carry extra belongings, this service enhances the travel experience for those with specific luggage needs.",
      turncatedtext: "A reason for consumers to pack without worries and bring more on board with our additional baggage service",
    },

  ];

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.priceperseatchart = {
      series: [
        //   {
        //   data: [200, 300, 400, 500, 600],
        // },
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
            text: "Price",
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
            text: "% of consumers attracted based on price",
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
          text: '',
          // text: '',
          align: 'center',
          style: {
            fontWeight: 600,
            color: '#333',
          },
        },
    };

  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  //fetch game data
  getFetchData() {
    let apiname = '/pricinggame/fetchpricinggame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];

              this._global.casemanagementid.next(data.resultList[0].pricinggamecmid);
              if (data.resultList[0].pricingGameCM.pricingGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }

              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title = String(data.resultList[0].pricingGameCM[this.cardData1[i].title])
                this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              }

              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].pricingGameCM[this.periodcellname[i]];
              }
              for (let i = 6; i < 18; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 6]];
              }
              
              for (let i = 0; i < this.priceperseatchartrange.length; i++) {
                this.jsonarray1.push({ 'x': data.resultList[0].pricingGameCM[this.priceperseatchartrange[i][0]], 'y': (Number(data.resultList[0].pricingGameCM[this.priceperseatchartrange[i][1]]) * 100).toFixed(0) });
              }
              this.priceperseatchart.series = [{ "name": "value", "data": this.jsonarray1 }]
              

              if ((String(data.resultList[0].ab23) == 'yes')
                || (String(data.resultList[0].ab13) == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              }

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

  getSelection(inputField: string, index: number) {
    // this.checkloading = true;
    let body = {}
    if (inputField == 'innovate') {
      this.result[index] = 1;

      for (let i = 15; i < 18; i++) {
        if (i !== index) {
          this.result[i] = 0;
        }
      }
      body = {
        'y13': this.result[15],
        'y14': this.result[16],
        'y15': this.result[17]
      }
    } else {
      if ((this.result[6] < 2000) || (this.result[6] > 8000)) {
        this.result[6] = this.initiatevalue;
        this.checkloading = false;
        this._alert.error('The expected range is between 2000 to 8000');
      }
      body = {
        'y11': this.result[6]
      }
    }
    this.writeData(body);
  }

  writeData(body: any) {
    
    let apiname = '/pricinggame/singleinputpricinggame';


    this._api.writeGameData("pricinggame", 2,
      body, apiname, 'pricinggamecmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.getFetchData();
          this.checkloading = false;
        } else {
          this.checkloading = false;
        }

      }, (error: any) => {
        this.checkloading = false;
        this.inputDisabled = false;
        this.driveerrorLog(error, apiname);
      })

  }
 
  //data submit and go to adapt tab 
  saveAndgotoAdapt() {
    this.checkloading = true;
    if ((this.result[15] == 1) || (this.result[16] == 1) || (this.result[17] == 1)) {

      let apiname = '/pricinggame/singleinputpricinggame';

      let initiateData = {
        "ab23": 'yes'
      }
      this._api.businessdatawrite("pricinggame", 2,
        initiateData, apiname, 'pricinggamecmid').subscribe((data: any) => {
          if (data.status == "Success") {
            this.inputDisabled = true;
            this.Sharedservice.phase3enableTab();
            setTimeout(() => {
              this.newItemEvent.emit('adapt');
            }, 1000)

          } else {
            this.checkloading = false;
          }

        }, (error: any) => {
          this.checkloading = false;
          this.inputDisabled = false;
          this.driveerrorLog(error, apiname);
        })
    } else {
      this.checkloading = false;
      this._alert.error("Please fill the input fields");
    }

  }


  //open pop up dialog for conirmation of submit
  gotoAdapt() {
    const dialogRef = this.dialog.open(PopupDialogueComponent, {
      width: '40%',
      panelClass: 'centertop-dialog',
      data:
      {
        title:"You are saving your current phase decisions, all the decisions made will be considered for assessments. Once you move to the next phase, the decisions of the current phase can't be edited. Do you want to save?"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.action === 'yes') {
        this.saveAndgotoAdapt()
      }
    });
  }


  openDialog(): void {
    this.dialog.open(PricingfoodforthoughtComponent, {
      data: {},
    });
  }

}

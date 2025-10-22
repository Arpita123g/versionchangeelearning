import { Component, Input } from '@angular/core';
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
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { PricingfoodforthoughtComponent } from '../pricingfoodforthought/pricingfoodforthought.component';
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
  selector: 'app-pricingadapt',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './pricingadapt.component.html',
  styleUrls: ['./pricingadapt.component.scss']
})
export class PricingadaptComponent extends AbstractComponent {
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
  locationvalue: string = '';
  foodforthought: boolean = true;
  //demandrange = []
  @Input() show: boolean = true;
  @Input() isShow3: boolean = false;
  periodcellname :any = ["j7","j8","j9","p17","p18","p19","k7","k8","k9","q17","q18","q19"]
  databasecellname: any = ['y18', 'c36', 'c33', 'c32', 'c34', 'd36',"d33",'d32','d34','y20','y21','y22','y24','y25','y26'

  ]
  selectedIndex: number = 0;
  demandvalue: number = 0;
  textshow: { [key: string]: boolean } = {};

  priceperseatchartrange: any = [
    ['p8','q8'],
    ['p9','q9'],
    ['p10','q10'],
    ['p11','q11'],
    ['p12','q12'],
    ['p13','q13'],
    ['p14','q14'],
  ]


 cardData1 = [
    {
      id: 'card1',
      title: '',
      description: 'Elevate your in-flight experience with our delectable sandwich meal, carefully crafted to tantalize your taste buds. A consumer enjoys a gourmet treat that adds a touch of culinary delight to their journey, attracting passengers seeking an enhanced and satisfying travel experience.',
      turncatedtext: "Elevate your in-flight experience with our delectable sandwich meal, carefully crafted to tantalize"
    },
    {
      id: 'card2',
      title: '',
      description: 'Provide control of travel plans with our flexible booking option. This service caters to passengers who value the freedom to make changes without the hassle, appealing to those seeking peace of mind and adaptability in their journey arrangements.',
      turncatedtext: "Provide control of travel plans with our flexible booking option. This service caters to passengers who ",
    },
    {
      id: 'card3',
      title: '',
      description: "A reason for consumers to pack without worries and bring more on board with our additional baggage service. Ideal for passengers who prioritize convenience and want the flexibility to carry extra belongings, this service enhances the travel experience for those with specific luggage needs.",
      turncatedtext: "A reason for consumers to pack without worries and bring more on board with our additional baggage service.",
    },
    
  ];
  cardData2 = [
    {
      id: 'card1',
      title: '',
      description: 'SkyVista Airways is set to roll out an enticing Fare Sales and Discounts campaign, offering passengers limited-time discounts on this route. This initiative aims to capture attention through strategic marketing and create a sense of urgency, attracting budget-conscious travellers looking for cost-effective options. By providing accessible pricing for a short period, SkyVista seeks to stimulate demand and entice a diverse range of passengers to choose their airline for their next journey.',
      turncatedtext: "SkyVista Airways is set to roll out an enticing Fare Sales and Discounts campaign, offering passengers"
    },
    {
      id: 'card2',
      title: '',
      description: 'In a bid to enhance passenger loyalty, SkyVista Airways is introducing a comprehensive Frequent Flyer Program. Passengers enrolling in this program will accumulate points with each flight, redeemable for future travel or exclusive perks. This initiative targets travellers seeking long-term benefits, and establishing a lasting connection with the airline. By offering a rewarding system, SkyVista aims to attract and retain a loyal customer base, encouraging repeat business and fostering a sense of brand affinity.',
      turncatedtext: "In a bid to enhance passenger loyalty, SkyVista Airways is introducing a comprehensive Frequent Flyer ",
    },
    {
      id: 'card3',
      title: '',
      description: "SkyVista Airways is strategically forming Partnerships and Alliances with leading hotels, car rental companies, and service providers. Through these collaborations, passengers will enjoy exclusive benefits, bundled deals, and a seamless travel experience. This initiative is designed to broaden the airline's appeal, attracting consumers who value-added convenience and a comprehensive travel package. By offering a range of integrated services, SkyVista aims to stand out in the market and create a compelling value proposition for its passengers.",
      turncatedtext: "SkyVista Airways is strategically forming Partnerships and Alliances with leading hotels, car rental companies,",
    },
    
  ];

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.priceperseatchart = {
      series: [],
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
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].pricingGameCM[this.periodcellname[i]];
              }
              for (let i = 12; i < 27; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i-12]];
              }
              console.log("result",this.result);
              for (let i = 0; i < this.priceperseatchartrange.length; i++) {
                this.jsonarray1.push({ 'x': data.resultList[0].pricingGameCM[this.priceperseatchartrange[i][0]], 'y': (Number(data.resultList[0].pricingGameCM[this.priceperseatchartrange[i][1]]) * 100).toFixed(0) });
              }
              this.priceperseatchart.series = [{ "name": "value", "data": this.jsonarray1 }]
              
              
              if (String(data.resultList[0].ab13) == 'yes') {
                this.inputDisabled = true;
              }

              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title = String(data.resultList[0].pricingGameCM[this.cardData1[i].title])
                this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
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
    if (inputField == 'service') {
      this.result[index] = 1;

      for (let i = 21; i < 24; i++) {
        if (i !== index) {
          this.result[i] = 0;
        }
      }
      body = {
        'y20': this.result[21],
        'y21': this.result[22],
        'y22': this.result[23]
      }
    } else if (inputField == 'promotion') {
      this.result[index] = 1;

      for (let i = 24; i < 27; i++) {
        if (i !== index) {
          this.result[i] = 0;
        }
      }
      body = {
        'y24': this.result[24],
        'y25': this.result[25],
        'y26': this.result[26]
      }
    } else {
      if ((this.result[12] < 2000) || (this.result[12] > 8000)) {
        this.result[12] = 0;
        this.checkloading = false;
        this._alert.error('The expected range is between 2000 to 8000');
      }
      body = {
        'y18': this.result[12]
      }
    }
    this.writeData(body);
  }

  writeData(body: any) {
    
    let apiname = '/pricinggame/singleinputpricinggame';


    this._api.writeGameData("pricinggame", 3,
      body, apiname, 'pricinggamecmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.getFetchData();
          // this.checkloading = false;
        } else {
          this.checkloading = false;
        }

      }, (error: any) => {
        this.checkloading = false;
        this.inputDisabled = false;
        this.driveerrorLog(error, apiname);
      })

  }
  // gotoAdapt() {
  //   this.checkloading = true;
  //   // this.Sharedservice.phase3enableTab();
  //   // setTimeout(() => {
  //   //   this.newItemEvent.emit('adapt');
  //   // }, 1000)

  //   if ((this.result[15] == 1) || (this.result[16] == 1) || (this.result[17] == 1)) {
     
  //     let apiname = '/pricinggame/singleinputpricinggame';

  //     let initiateData = {
  //       "ab23": 'yes'
  //     }
  //     this._api.businessdatawrite("pricinggame", 2,
  //       initiateData, apiname, 'pricinggamecmid').subscribe((data: any) => {
  //         if (data.status == "Success") {
  //           this.inputDisabled = true;
  //           this.Sharedservice.phase3enableTab();
  //           setTimeout(() => {
  //             this.newItemEvent.emit('adapt');
  //           }, 1000)

  //         } else {
  //           this.checkloading = false;
  //         }

  //       }, (error: any) => {
  //         this.checkloading = false;
  //         this.inputDisabled = false;
  //         this.driveerrorLog(error, apiname);
  //       })
  //   } else {
  //     this.checkloading = false;
  //     this._alert.error("Please fill the input fields");
  //   }

  // }
 

  openDialog(): void {
    this.dialog.open(PricingfoodforthoughtComponent, {
      data: {},
    });


  }

}

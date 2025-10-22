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
  selector: 'app-pricinginitiate',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './pricinginitiate.component.html',
  styleUrls: ['./pricinginitiate.component.scss']
})
export class PricinginitiateComponent extends AbstractComponent {
  priceperseatchart: lineChart;
  selectedImage: any = null;
  showText = false;
  jsonarray1: any = [];
  value: string = '';
  result: any = [];
  businessday: string = '';
  f19: string = '';
  checkdisable: boolean = false;
  consumerposunavalue: string = '';
  foodforthought: boolean = true;
  @Input() show: boolean = true;
  @Input() isShow3: boolean = false;
  selectedIndex: number = 0;
  initiatevalue: number = 0;

  databasecellname: any = ['y8', 'c5']

  periodiccellvalue: any = ['f6', 'f7', 'g10', 'f16', 'f17', 'f15', 'f18', 'h10', 'f16', 'f17', 'f18']

  priceperseatchartrange: any = [
    ['e24', 'f24'],
    ['e25', 'f25'],
    ['e26', 'f26'],
    ['e27', 'f27'],
    ['e28', 'f28'],
    ['e29', 'f29'],
    ['e30', 'f30'],
  ]

  inputDisabled: boolean = false;
  costatbase: number = 0;
  @Output() newItemEvent = new EventEmitter<string>();

  seasons: any = [
    {
      "val": "Meet Aarav Sharma, a 30-year-old marketing professional from Mumbai who loves leisure travel. With a middle-income budget, Aarav values experiences and explores destinations two to three times a year. He plans well in advance using online platforms, appreciates flight comfort, and is willing to pay extra for convenience. Aarav's priorities include excellent customer service, flexible booking, and additional services like convenient baggage options. Airlines can enhance the travel experience for leisure travellers like Aarav by understanding and addressing these key preferences.",
      "img": "assets/images/pricinggame/aravsharma.png"
    },
    {
      // "val": "Arjun Patel, 32, a dedicated IT professional, finds comfort in exploring various tea types, with a preference for Indian masala chai and green tea. His morning begins with chai, followed by tea breaks at work for rejuvenation. Tea offers him relaxation, a moment of tranquility, and a ritual of pleasure amidst his demanding job. Arjun favors tea shops with a variety of quality teas, unique blends, a cozy ambiance, and sustainable practices. He views tea as a solace-providing companion in his corporate life, delivering calmness and inspiration.",
      "img": "assets/images/pricinggame/women.png"
    },
    {
      // "val": "Sharma, 21, a business management student, enjoys tea to relax during her demanding college life. She savors a variety of teas and starts her day with a classic brew. Her tea visits are frequent, for focus, socialization, and comfort. Riya cherishes tea shops with diverse choices in a cozy setting, promoting sustainability. Balancing academics and self-care while exploring new tea flavors are her challenges. Riya sees tea as her college journey companion, offering focus, tranquillity, and balance.",
      "img": "assets/images/pricinggame/man.png"
    },
    {
      // "val": "Keya, 21, a business management student, enjoys tea to relax during her demanding college life. She savors a variety of teas and starts her day with a classic brew. Her tea visits are frequent, for focus, socialization, and comfort. Riya cherishes tea shops with diverse choices in a cozy setting, promoting sustainability. Balancing academics and self-care while exploring new tea flavors are her challenges. Riya sees tea as her college journey companion, offering focus, tranquillity, and balance.",
      "img": "assets/images/pricinggame/women2.png"
    }
  ];

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

              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]];
              }
              for (let i = 2; i < 13; i++) {
                this.result[i] = data.resultList[0].pricingGameCM[this.periodiccellvalue[i - 2]];
              }

              this.costatbase = (Number(this.result[11]) + (Number(this.result[12]) * Number(this.result[10]))) / Number(this.result[10]);
              for (let i = 0; i < this.priceperseatchartrange.length; i++) {
                this.jsonarray1.push({ 'x': Number(data.resultList[0].pricingGameCM[this.priceperseatchartrange[i][0]]), 'y': (Number(data.resultList[0].pricingGameCM[this.priceperseatchartrange[i][1]]) * 100).toFixed(0) });
              }
              this.priceperseatchart.series = [{ "name": "value", "data": this.jsonarray1 }]
              console.log("priceseries", this.priceperseatchart.series);


              if ((String(data.resultList[0].ab22) == 'yes') || (String(data.resultList[0].ab13) == 'yes') ||
                (this.timefinished)) {
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


  //write game data
  writeData() {
    // this.checkloading = true;
    let apiname = '/pricinggame/singleinputpricinggame';

    if ((this.result[0] < 2000) || (this.result[0] > 8000)) {
      this._alert.error('The expected range is between 2000 to 8000');
      this.result[0] = this.initiatevalue;

    } else {
      let initiateData = {
        "y8": this.result[0]
      }
      this._api.writeGameData("pricinggame", 1,
        initiateData, apiname, 'pricinggamecmid').subscribe((data: any) => {
          if (data.status == "Success") {
            this.getFetchData();
          } else {
            this.checkloading = false;
          }
        }, (error: any) => {
          this.checkloading = false;
          this.checkdisable = false;
          this.driveerrorLog(error, apiname);
        })
    }
  }


 //data submit and go to innovate tab 
 saveAndgotoInnovate() {
  this.checkloading = true;
  let apiname = '/pricinggame/singleinputpricinggame';

  let initiateData = {
    "ab22": 'yes'
  }
  this._api.writeGameData("pricinggame", 1,
    initiateData, apiname, 'pricinggamecmid').subscribe((data: any) => {
      if (data.status == "Success") {
        this.inputDisabled = true;
        this.Sharedservice.phase2enableTab();
        setTimeout(() => {
          this.newItemEvent.emit('innovate');
        }, 1000)

      } else {
        this.checkloading = false;
      }

    }, (error: any) => {
      this.checkloading = false;
      this.inputDisabled = false;
      this.driveerrorLog(error, apiname);
    })
  }


//open pop up dialog for conirmation of submit
gotoInnovate() {
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
      this.saveAndgotoInnovate()
    }
  });
}

  openDialog(): void {
    this.dialog.open(PricingfoodforthoughtComponent, {
      data: {},
    });
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { PromotionsigmentnewfoodforthoughtComponent } from '../promotionsigmentnewfoodforthought/promotionsigmentnewfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

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
  selector: 'app-promotionsigmentnewchannels',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './promotionsigmentnewchannels.component.html',
  styleUrls: ['./promotionsigmentnewchannels.component.scss']
})
export class PromotionsigmentnewchannelsComponent extends AbstractComponent {
  textLines: string[] = [
    "In the online realm, margins play a pivotal role in sustaining e-commerce platforms and facilitating marketing efforts on different social media. Offering competitive margins to online channels ensures profitability, supports marketing initiatives, and allows for strategic pricing to remain attractive to consumers. A common standard is to provide online channels with a margin ranging from 5% to 8%, depending on the competitive landscape.",
    "Modern trade, including large supermarket chains and hypermarkets, relies on margins to cover operational costs, shelf space fees, and promotional activities. A sufficient margin is crucial to incentivize these retailers to prioritize and prominently display products. This visibility in modern trade significantly impacts product visibility, consumer trust, and overall sales.Standard margins for modern trade typically range from 7% to 15%, with variations based on the brand positioning, and negotiation terms.",
    "Independent retailers, such as small shops or specialty stores, also depend on margins to maintain their businesses. Providing retailers with reasonable margins is essential to encourage them to stock and actively promote the products. Additionally, retailers may incur costs related to shelf space, marketing collateral, and in-store promotions, further underlining the importance of margins in this channel. Standard margins for retailers usually fall within the range of 7% to 14%, depending on factors like the nature of the product, exclusivity, and the level of support provided by the brand.",
    "Variations in website design, AdWords ad copies, and email content will be tested to identify which elements yield the highest engagement, click-through rates, and conversions. By analyzing user behavior and response to different versions, insights will be gained on the most effective website layout, ad messaging, and email content. This optimization will lead to improved user experience and increased conversion rates.",
    "Variations in content types (e.g., images, videos, influencer collaborations) and posting schedules will be tested across different social media platforms to determine the most engaging and converting strategies. The testing will unveil the content and posting strategies that resonate most with the target audience, driving higher engagement and conversions on social commerce platforms.",
    "In-store promotional displays, loyalty programs, and limited-time offers will be varied to assess their impact on customer engagement and sales. In offline channels it will help identify the most effective in-store strategies for both Modern Trade and Retailers. Insights gained can guide future campaigns, optimizing resources for maximum impact.",
    "The Acne Face Cream, on the other hand, is a specialized solution designed for targeted skincare. Despite having slightly lower volume sales in the last period, it stands out for its higher margins, offering a lucrative opportunity for profit maximization. The cream's premium quality, coupled with its efficacy in addressing specific skincare needs, positions it as a valuable choice for discerning consumers. Choosing to focus on the Acne Face Cream allows for a strategic emphasis on profitability and appeals to a niche market seeking specialized skincare solutions.",
    "The Apple Cider Face Wash is a powerhouse of natural ingredients meticulously curated to cleanse, purify, and rejuvenate the skin. Last period saw remarkable volume sales, with its gentle yet effective formula resonating well with a wide consumer base. Its popularity is attributed to its refreshing fragrance, natural composition, and the promise of a radiant, blemish-free complexion. Focusing on the Apple Cider Face Wash could tap into the momentum of its existing popularity and cater to the broader market segment, ensuring a steady stream of sales."
    
    
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false, false, false];

  cards = [
    { text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
    { text: this.textLines[6], truncatedText: this.truncatedText[6], showAll: this.showAll },
    { text: this.textLines[7], truncatedText: this.truncatedText[7], showAll: this.showAll },
  ];

  foodforthought: boolean = true;
  margin:boolean = true;
  acnecreamcostpersalegraph: barChart;
  appleciderfacewashgraph: barChart;
  periodresult: any = [];
  databaseresult: any = [];
  disabled: boolean = false;
  periodcellname: any = ['v14', 'v15', 'v16', 'y8', 'y9', 'y10', 'w37', 'w38','v8','v9','v10','v37','v38'];
  databasecellname: any = ['x50', 'x51', 'x52', 'x47', 'x48', 'x49', 'x53', 'x54'];
  // periodcellname:any = ['j9','j10','j11','j12','j15','j16','j17','j18','j19']
  acnecreamgraphcell: any = [
    ['k39', 'm39'],
    ['k40', 'm40'],
    ['k41', 'm41'],
  ]

  applecidergraphcell: any = [
    ['k39', 'n39'],
    ['k40', 'n40'],
    ['k41', 'n41'],
  ]

  jsonarray1: any = [];
  jsonarray2: any = [];
  
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.acnecreamcostpersalegraph = {
      series: [
        // {
        //   data: [71, 45, 77]
        // }
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
        categories: ['Online', 'Modern Trade', 'Retailers'],
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
        text: "Acne Cream Cost per sale, INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.appleciderfacewashgraph = {
      series: [
        // {
        //   data: [48, 32, 62]
        // }
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
      noData: this.nodata[1],
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
        categories: ['Online', 'Modern Trade', 'Retailers'],
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
        text: "Apple Cider Face Wash Cost per sale, INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };
  }

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }


  override ngOnInit(): void {
    this.getFetchData();
  }



  getFetchData() {

    let apiname = '/promotions/fetchpromotions';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this._global.casemanagementid.next(data.resultList[0].promotionscmid);
              if (data.resultList[0].z20 == 'yes') {
                this.disabled = true;
              }
              if (data.resultList[0].promotionsCM.promotionsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if (data.resultList[0].promotionsCM.promotionsCMActiveStatus.onlinestatus == 'inactive') {
                this.margin = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.periodresult[i] = data.resultList[0].promotionsCM[this.periodcellname[i]];
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.databaseresult[i] = data.resultList[0][this.databasecellname[i]];
                if((i==0)||(i==1)||(i==2)){
                  this.databaseresult[i] = Number(this.databaseresult[i])*100;
                }
              }

              this.updateInputResValue();
             

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
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/promotions/fetchpromotions';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < this.periodcellname.length; i++) {
          this.periodresult[i] = updatedData.promotionsCM[this.periodcellname[i]];
        }
        for (let i = 0; i < this.acnecreamgraphcell.length; i++) {
          this.jsonarray1.push({ 'x': "", 'y': (updatedData[this.acnecreamgraphcell[i][1]]).toFixed(0) });

        }
        for (let i = 0; i < this.applecidergraphcell.length; i++) {
          this.jsonarray2.push({ 'x': "", 'y': (updatedData[this.applecidergraphcell[i][1]]).toFixed(0) });

        }
        this.acnecreamcostpersalegraph.series = [
          { "name": "", "data": this.jsonarray1 },

        ]
        this.appleciderfacewashgraph.series = [
          { "name": "", "data": this.jsonarray2 },

        ]
       
                       
      }
    });
  }

  writepromotionsValue(tablename: string, index: number, event: any) {

    let apiname = '/promotions/singleinputpromotions';
    if ((tablename == 'abtesting') || (tablename == 'productfocus')) {
      if (event.target.checked == true) {
        this.databaseresult[index] = 1;
      } else {
        this.databaseresult[index] = 0;
      }
    }
    for (let i = 3; i < 8; i++) {
      if (this.databaseresult[i] == true) {
        this.databaseresult[i] = 1;
      } else {
        this.databaseresult[i] = 0;
      }
    }
    console.log("result", this.databaseresult)
    let promotionsData = {
      "x50": Number(this.databaseresult[0])/100,
      "x51": Number(this.databaseresult[1])/100,
      "x52": Number(this.databaseresult[2])/100,
      "x47": this.databaseresult[3],
      "x48": this.databaseresult[4],
      "x49": this.databaseresult[5],
      "x53": this.databaseresult[6],
      "x54": this.databaseresult[7],
    }
    console.log('writedata', promotionsData)
    this._api.promotionsdatawrite("promotions", 3,
      promotionsData, apiname, 'promotionscmid').subscribe((data: any) => {

        if(data.status == "Success"){
          this.updateInputResValue();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }

  openDialog(): void {
    this.dialog.open(PromotionsigmentnewfoodforthoughtComponent, {
      data: {},
    });
  }
}

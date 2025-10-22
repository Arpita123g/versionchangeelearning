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
  NgApexchartsModule,
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
  selector: 'app-promotionsigmentnewcommunicationmix',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './promotionsigmentnewcommunicationmix.component.html',
  styleUrls: ['./promotionsigmentnewcommunicationmix.component.scss']
})
export class PromotionsigmentnewcommunicationmixComponent extends AbstractComponent {
  foodforthought: boolean = true;
  allocatedbudgetgraph: barChart;
  allocatedbudgetgraph1: barChart;
  disabled: boolean = false;
  result: any = [];
  periodresult:any = [];
  databasecellname: any = ['x20', 'x21', 'x22', 'x23', 'x24', 'x25', 'x26', 'x27', 'x28'];
  periodcellname:any = ['j9','j10','j11','j12','j15','j16','j17','j18','j19']
  allocatedbudgetgraphcell: any = [
    ['d17', 'f17'],
    ['d18', 'f18'],
    ['d19', 'f19'],
    ['d20', 'f20']
  ]
  allocatedbudgetgraph1cell: any = [
    ['d24', 'f24'],
    ['d25', 'f25'],
    ['d26', 'f26'],
    ['d27', 'f27'],
    ['d28', 'f28']
  ]
  textLines: string[] = [
    "Utilizing Google AdWords and promotional emails, company aims to attract both segments. Young & leisure customers may be drawn to engaging visual ads on Google and exclusive online deals highlighted in emails. Simultaneously, high-end consumers could be enticed by targeted email campaigns emphasizing the premium quality and benefits of products like the Apple Cider Face Wash and Acne Face Cream.",
    "Social media platforms will be leveraged for social commerce. Young & leisure customers may be captivated by interactive content on platforms like Instagram and YouTube, fostering a sense of community around Herbal Inc.'s products. For high-end consumers, platforms like LinkedIn and Facebook can showcase the sophistication of the products, emphasizing their efficacy and premium ingredients.",
    "Inbound and outbound advertising strategies in supermarts and hypermarts cater to both segments. Young & leisure customers could be influenced by in-store promotions, appealing displays, and influencer collaborations. High-end consumers may be attracted through exclusive in-store events, premium packaging, and expert recommendations, creating an upscale shopping experience.",
    "Promotional activities in retail shops aim to capture the attention of both customer segments. Young & leisure customers may be drawn to vibrant in-store displays and limited-time offers, while high-end consumers could be enticed by personalized consultations, exclusive product bundles, and the promise of a curated shopping experience, enhancing the perceived value of the products.",
    "For both Young & leisure customers and high-end consumers, Facebook promotions will focus on engaging content. Young & leisure customers may be targeted with interactive posts, giveaways, and user-generated content, while high-end consumers could be drawn in with informative articles, testimonials, and exclusive offers, emphasizing the efficacy and premium quality of the Apple Cider Face Wash and Acne Face Cream.",
    "Instagram's visually-driven platform is ideal for targeting Young & leisure customers. The company will employ aesthetically pleasing product images, influencers showcasing product use, and stories for real-time engagement. High-end consumers may also be attracted through a curated Instagram feed, emphasizing the luxurious and effective nature of the skincare products.",
    "The company will utilize it for quick updates and engaging content suitable for Young & leisure customers. The focus will be on trending topics, polls, and limited-time offers. High-end consumers may find value in curated content sharing expert reviews and testimonials, enhancing the brand's credibility.",
    "LinkedIn will be employed for targeting high-end consumers seeking sophisticated skincare solutions. The company will share industry insights, product development stories, and collaborate with skincare professionals. Content will highlight the premium nature of the Apple Cider Face Wash and Acne Face Cream, aiming to establish the brand as a trusted choice for discerning consumers.",
    "For both Young & leisure customers and high-end consumers, YouTube will serve as a dynamic visual platform. Engaging video content, such as tutorials, product demonstrations, and customer testimonials, will capture the attention of Young & leisure customers, providing them with relatable and informative content. High-end consumers will be drawn to high-production-value videos showcasing the luxurious qualities of the Apple Cider Face Wash and Acne Face Cream, emphasizing their premium ingredients and benefits. Additionally, collaborations with beauty influencers and experts on YouTube can elevate the brand's credibility among both consumer segments."
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 60) + (text.length > 60 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false, false, false, false];

  cards = [
    { text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
    { text: this.textLines[6], truncatedText: this.truncatedText[6], showAll: this.showAll },
    { text: this.textLines[7], truncatedText: this.truncatedText[7], showAll: this.showAll },
    { text: this.textLines[8], truncatedText: this.truncatedText[8], showAll: this.showAll },

  ];

  jsonarray1: any = [];
  jsonarray2: any = [];
  
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.allocatedbudgetgraph = {
      series: [
        // {
        //   data: [3000000, 2000000, 2000000, 3000000]
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
          columnWidth: "20%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Website', 'Social Commerce', 'Modern Trade', 'Retailers'],
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
        text: "Allocated Budget, INR",
        offsetY: 0,
        align: "center",
        style: {
          fontWeight: "bold",
        }
      }
    };

    this.allocatedbudgetgraph1 = {
      series: [
        // {
        //   data: [600000, 400000, 600000, 200000, 200000]
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
          columnWidth: "40%",

        }
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "";
        },
      },
      xaxis: {
        categories: ['Facebook', 'Instagram', 'Twitter (X)', 'LinkedIn', 'YouTube'],
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
        text: "Allocated Budget, INR",
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

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }


  getFetchData() {
    this.jsonarray1 = [];
    this.jsonarray2 = [];
    let apiname = '/promotions/fetchpromotions';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
          this.jsonarray1 = [];this.jsonarray2 = [];
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].promotionscmid);
              if (data.resultList[0].z20 == 'yes') {
                this.disabled = true;
              }
              if (data.resultList[0].promotionsCM.promotionsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = (Number(data.resultList[0][this.databasecellname[i]])*100).toFixed(0);
                this.result[i] = String(this.result[i]).replace("%", "");
              }
              
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.periodresult[i] = data.resultList[0].promotionsCM[this.periodcellname[i]];
              }
              this.updateInputResValue();
              // for (let i = 0; i < this.allocatedbudgetgraphcell.length; i++) {
              //   this.jsonarray1.push({ 'x': "", 'y': (data.resultList[0][this.allocatedbudgetgraphcell[i][1]]) });

              // }
              // for (let i = 0; i < this.allocatedbudgetgraph1cell.length; i++) {
              //   this.jsonarray2.push({ 'x': "", 'y': (data.resultList[0][this.allocatedbudgetgraph1cell[i][1]]) });

              // }
              // this.allocatedbudgetgraph.series = [
              //   { "name": "", "data": this.jsonarray1 },

              // ]
              // this.allocatedbudgetgraph1.series = [
              //   { "name": "", "data": this.jsonarray2 },

              // ]

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
        for (let i = 0; i < this.allocatedbudgetgraphcell.length; i++) {
          this.jsonarray1.push({ 'x': "", 'y': (updatedData[this.allocatedbudgetgraphcell[i][1]]) });

        }
        for (let i = 0; i < this.allocatedbudgetgraph1cell.length; i++) {
          this.jsonarray2.push({ 'x': "", 'y': (updatedData[this.allocatedbudgetgraph1cell[i][1]]) });

        }
        this.allocatedbudgetgraph.series = [
          { "name": "", "data": this.jsonarray1 },

        ]
        this.allocatedbudgetgraph1.series = [
          { "name": "", "data": this.jsonarray2 },

        ]
                       
      }
    });
  }

  writepromotionsValue(index: number, tablename: string) {
    let apiname = '/promotions/singleinputpromotions';
    for (let i = 0; i < 8; i++) {
      if (this.result[i] == undefined) {
        this.result[i] = 0;
      }
    }
    if (tablename == 'platformbudget') {
      this.result[3] = 100 - (Number(this.result[0]) + Number(this.result[1]) + Number(this.result[2]))
      if (this.result[3] < 0) {
        this.result[index] = 0;
        this.result[3] = 100 - (Number(this.result[0] + this.result[1] + this.result[2]))
        this._alert.error("Retailrs can not go negative");
      }
    } else if (tablename == 'socialbudget') {
      this.result[8] = 100 - (Number(this.result[4]) + Number(this.result[5]) + Number(this.result[6]) + Number(this.result[7]))
      if (this.result[8] < 0) {
        this.result[index] = 0;
        this.result[8] = 100 - (Number(this.result[4]) + Number(this.result[5]) + Number(this.result[6]) + Number(this.result[7]))
        this._alert.error("Youtube can not go negative");
      }
    }

    let promotionsData = {
      "x20": Number(this.result[0])/100,
      "x21": Number(this.result[1])/100,
      "x22": Number(this.result[2])/100,
      "x23": Number(this.result[3])/100,
      "x24": Number(this.result[4])/100,
      "x25": Number(this.result[5])/100,
      "x26": Number(this.result[6])/100,
      "x27": Number(this.result[7])/100,
      "x28": Number(this.result[8])/100,
    }
    console.log('writedata', promotionsData)
    this._api.promotionsdatawrite("promotions", 1,
      promotionsData, apiname, 'promotionscmid').subscribe((data: any) => {
        if (data.status == "Success") {
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

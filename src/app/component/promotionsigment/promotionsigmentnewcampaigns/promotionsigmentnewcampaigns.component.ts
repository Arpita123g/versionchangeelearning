import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-promotionsigmentnewcampaigns',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './promotionsigmentnewcampaigns.component.html',
  styleUrls: ['./promotionsigmentnewcampaigns.component.scss']
})
export class PromotionsigmentnewcampaignsComponent extends AbstractComponent {
  foodforthought: boolean = true;
  textLines: string[] = [
    "Google AdWords and targeted email campaigns will spotlight exclusive online deals on the company's website, enticing Young & leisure customers with budget-friendly options. Ad copies will highlight limited-time discounts on bundles containing the Apple Cider Face Wash and Acne Face Cream, strategically impacting impulse purchases and driving online sales. ",
    "Through Google AdWords and email newsletters, Herbal Inc. will run a campaign highlighting the premium efficacy of the Apple Cider Face Wash and Acne Face Cream. Ad copies will emphasize the high-end ingredients, advanced formulations, and proven results, directly appealing to the discerning taste of the high-end consumer segment. ",
    "Google AdWords and email promotions will introduce limited-edition seasonal skincare bundles, combining the Apple Cider Face Wash and Acne Face Cream with complementary products. This campaign targets both consumer segments, offering Young & leisure customers a curated skincare routine at an attractive price point and providing high-end consumers with an exclusive, luxury skincare experience.",
    "The company initiates a community engagement series on Facebook, focusing on the benefits of the Apple Cider Face Wash and Acne Face Cream. Live Q&A sessions with skincare experts, user testimonials, and behind-the-scenes glimpses will encourage Young & leisure customers to interact with the brand. High-end consumers will appreciate the transparency and expertise showcased in the content.",
    "On Twitter (X), Herbal Inc. executes flash sales linked to trending beauty topics, capturing the attention of Young & leisure customers who actively seek real-time content. The platform's quick-paced nature is utilized to announce limited-time offers and promote product awareness. High-end consumers benefit from concise updates and exclusive flash sales, aligning with their desire for curated content.",
    "Instagram becomes a visual storytelling hub for Herbal Inc. Dynamic content, including visually appealing product shots, user-generated content, and collaborations with beauty influencers, caters to both Young & leisure customers and high-end consumers. The platform's aesthetics reinforce the brand's commitment to natural beauty.",
    "LinkedIn transforms into a space for expert insights and a showcase of the premium skincare journey. Articles written by skincare professionals, in-depth product analyses, and exclusive behind-the-scenes content appeal to high-end consumers seeking sophistication and credibility in their skincare choices. ",
    "On YouTube, Herbal Inc. launches a tutorial series demonstrating the optimal use of the Apple Cider Face Wash and Acne Face Cream. Collaborations with beauty influencers provide in-depth reviews, influencing both Young & leisure customers and high-end consumers. The video format caters to diverse learning preferences and establishes the products' effectiveness. ",
    "Implement skincare workshops in modern trade settings, providing educational sessions on the benefits of the Apple Cider Face Wash and Acne Face Cream. Targeting both Young & leisure customers and high-end consumers, these workshops create an interactive shopping experience. Young & leisure customers benefit from hands-on learning, while high-end consumers appreciate the expert insights and personalized advice.",
    "Launch limited-edition bundles exclusive to modern trade outlets, combining the Apple Cider Face Wash and Acne Face Cream with complementary products. Young & leisure customers are drawn to the value, while high-end consumers appreciate the curated selections and exclusive offerings available only in-store.",
    "Introduce a loyalty points program tied to purchases of Herbal Inc. products in modern trade. This campaign appeals to both consumer segments, with Young & leisure customers enticed by the prospect of redeemable rewards and high-end consumers appreciating the added value and recognition for their premium purchases. ",
    "Organize in-store pop-up events in collaboration with retailers, offering product demonstrations, free samples, and exclusive discounts. This campaign caters to both Young & leisure customers and high-end consumers, providing a tangible and engaging brand experience. Young & leisure customers are drawn to the interactive elements, while high-end consumers appreciate the exclusivity of in-store events.",
    "Implement informational displays at retailer shelves, providing detailed insights into the natural ingredients, benefits, and usage of the Apple Cider Face Wash and Acne Face Cream. Both consumer segments benefit from the informative content, aiding purchase decisions for Young & leisure customers and reinforcing the premium quality for high-end consumers.",
    "Collaborate with retailers to launch exclusive promotions, such as bundled offers, discounts, or gifts with purchase. Targeting both Young & leisure customers and high-end consumers, this campaign adds value to the shopping experience. Young & leisure customers are enticed by cost-effective bundles, while high-end consumers appreciate the exclusive deals that align with their premium preferences."
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];

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
    { text: this.textLines[9], truncatedText: this.truncatedText[9], showAll: this.showAll },
    { text: this.textLines[10], truncatedText: this.truncatedText[10], showAll: this.showAll },
    { text: this.textLines[11], truncatedText: this.truncatedText[11], showAll: this.showAll },
    { text: this.textLines[12], truncatedText: this.truncatedText[12], showAll: this.showAll },
    { text: this.textLines[13], truncatedText: this.truncatedText[13], showAll: this.showAll },

  ];
  result: any = [];
  periodresult:any = [];
  disabled: boolean = false;

  databasecellname: any = ['x31', 'x32', 'x33', 'x34', 'x35',
    'x36', 'x37', 'x38', 'x39', 'x40', 'x41', 'x42', 'x43', 'x44']

  periodcellname:any = ['o8','o9','o10','o14','o15','o16','o17','o18','o22','o23','o24','o28','o29','o30']

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
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
              this._global.casemanagementid.next(data.resultList[0].promotionscmid);
              if (data.resultList[0].z20 == 'yes') {
                this.disabled = true;
              }
              if (data.resultList[0].promotionsCM.promotionsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]];
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.periodresult[i] = data.resultList[0].promotionsCM[this.periodcellname[i]];
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

  writepromotionsValue(tablename: string, index: number, event: any) {

    let apiname = '/promotions/singleinputpromotions';
    if (tablename == 'website') {
      this.result[index] = 1;
      for (let i = 0; i < 3; i++) {
        if (i != index) {
          this.result[i] = 0;
        }
      }
    } else if (tablename == 'moderntrades') {
      this.result[index] = 1;
      for (let i = 8; i < 11; i++) {
        if (i != index) {
          this.result[i] = 0;
        }
      }
    } else if (tablename == 'retailers') {
      this.result[index] = 1;
      for (let i = 11; i < 14; i++) {
        if (i != index) {
          this.result[i] = 0;
        }
      }
    } else if (tablename == 'social') {
      if (event.target.checked == true) {
        this.result[index] = 1;
      } else {
        this.result[index] = 0;
      }
    }
    for (let i = 0; i < 14; i++) {
      if (this.result[i] == undefined) {
        this.result[i] = 0;
      }
    }


    let promotionsData = {
      "x31": this.result[0],
      "x32": this.result[1],
      "x33": this.result[2],
      "x34": this.result[3],
      "x35": this.result[4],
      "x36": this.result[5],
      "x37": this.result[6],
      "x38": this.result[7],
      "x39": this.result[8],
      "x40": this.result[9],
      "x41": this.result[10],
      "x42": this.result[11],
      "x43": this.result[12],
      "x44": this.result[13],


    }
    console.log('writedata', promotionsData)
    this._api.promotionsdatawrite("promotions", 1,
    promotionsData, apiname,'promotionscmid').subscribe((data: any) => {

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

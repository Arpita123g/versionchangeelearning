import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { EcommercefoodforthoughtComponent } from '../ecommercefoodforthought/ecommercefoodforthought.component';

@Component({
  selector: 'app-ecommerceintroduction',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule],
  templateUrl: './ecommerceintroduction.component.html',
  styleUrls: ['./ecommerceintroduction.component.scss']
})
export class EcommerceintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }
  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/ecommercegame/fetchecommercegame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {

              if (data.resultList[0].ecommercegamedata) {
                if ((data.resultList[0].ecommercegamedata.aq168 == 'yes') || (data.resultList[0].ecommercegamedata.aq168 == 'Yes')) {
                  this.Sharedservice.enableTab();
                }
              }

              if (data.resultList[0].ecommerceGameCM.ecommerceGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
            }
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  textLines: string[] = [
    "In the Market tab, you’ll start by examining the economic conditions and consumer trends that will influence your decisions. Choose which product, you want to sell based on current market demand and profitability. This will help you align your offerings with customer needs and maximize sales.",
    "In the Catalog tab, you engage in sourcing and managing a dynamic inventory tailored to current market trends. You’ll decide which products to stock and how to price them competitively, ensuring your e-commerce store remains attractive and relevant to customers’ evolving tastes and preferences.",
    "The Marketing tab tasks you with designing and executing comprehensive promotional campaigns across digital platforms such as social media, email, and influencer partnerships. Additionally, you’ll develop loyalty programs and branding strategies that resonate with your target audience, aiming to increase both engagement and sales.",
    "On the Customer Experience tab, you focus on designing a website that is both easy to navigate and aesthetically pleasing, enhancing the overall shopping experience. You’ll also refine the checkout process to be smooth and hassle-free, and set up a responsive customer service system that efficiently handles inquiries and resolves issues.",
    "The Operational Efficiency tab challenges you to streamline your supply chain and backend operations. You’ll work on optimizing logistics to speed up delivery times, cut operational costs, and enhance service quality, thereby increasing customer satisfaction and operational profitability.",
    "In the Report tab, you review your website’s performance. Analyze sales data, operational efficiency, and the financial health of your website through profit and loss statements and key performance indicators. This feedback helps you understand what’s working and where adjustments are needed to improve your website's overall success.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/ecommerce/ecommerceintromarket.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Catalog', image: '.../../../../assets/images/ecommerce/ecommerceintrocatalog.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Marketing', image: '../../../../assets/images/ecommerce/ecommerceintromarketing.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Experience', image: '../../../../assets/images/ecommerce/ecommerceintroexperience.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Operations', image: '../../../../assets/images/ecommerce/ecommerceintrooprations.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/ecommerce/ecommerceintroreports.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },

  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(EcommercefoodforthoughtComponent, {
      data: {},
    });
  }

}

import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { SalestargetfoodforthoughtComponent } from '../salestargetfoodforthought/salestargetfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salestargetintroduction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './salestargetintroduction.component.html',
  styleUrls: ['./salestargetintroduction.component.scss']
})
export class SalestargetintroductionComponent extends AbstractComponent {
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


  textLines: string[] = [
    "You'll receive essential background information about the virtual market you'll be operating in. This includes details about the market's size, competition, and potential challenges. Understanding this context is crucial as it forms the basis for your sales strategies and decisions.",
    "You'll have to dig deeper into market data, customer feedback, and past sales reports. Your goal is to analyze this information to identify trends and patterns that can help you make informed decisions. Staying informed and adaptive is key to success.",
    "It's time to assemble your sales team. You'll need to hire individuals based on your business's specific requirements. You'll encounter candidates from various backgrounds, each with unique skills and experience. Make choices that align with your team's goals and budget.",
    "Determine the composition of your sales team. Decide whether you'll have an inside sales team, a field sales team, or a combination of both. Assign leadership roles, and consider providing recognition or incentives for top performers to boost motivation and morale.",
    "Your sales team's success relies on their skills and knowledge. Identify the specific training needs your team has. Tailor the training to your business's unique requirements, whether it's product knowledge, sales techniques, or customer service.",
    "It's time to evaluate your sales team's performance. You'll receive reports on sales figures, and other relevant key performance indicators (KPIs). These reports will provide valuable insights that can guide your future decisions and strategy adjustments.",
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/salestarget/salesmarket.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Information Search', image: '.../../../../assets/images/salestarget/salesinfosearch.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Sales Planning', image: '../../../../assets/images/salestarget/salesplanning.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Sales Composition', image: '../../../../assets/images/salestarget/salescomposition.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Sales Development', image: '../../../../assets/images/salestarget/salesdevelopment.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/salestarget/salesreport.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ];

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  getFetchData() {
    let apiname = '/salestarget/fetchsalestarget';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].bb7 == 'yes') || (data.resultList[0].bb7 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.foodforthoughtstatus == 'inactive') {
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

  openDialog(): void {
    this.dialog.open(SalestargetfoodforthoughtComponent, {
      data: {},
    });


  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { StpgamefoodforthoughtComponent } from '../stpgamefoodforthought/stpgamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-stpgameintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './stpgameintroduction.component.html',
  styleUrls: ['./stpgameintroduction.component.scss']
})
export class StpgameintroductionComponent extends AbstractComponent {
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
    let apiname = '/stpgame/fetchstpgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].cj121 == 'Yes') || (data.resultList[0].cj121 == 'yes')) {
                this.Sharedservice.enableTab();
              }
              if ((data.resultList[0].cj119 == 'Yes') || (data.resultList[0].cj119 == 'yes')) {
                this.Sharedservice.phase2enableTab();
              } else {
                this.Sharedservice.phase2disableTab();
              }
              if ((data.resultList[0].cj120 == 'Yes') || (data.resultList[0].cj120 == 'yes')) {
                this.Sharedservice.phase3enableTab();
              } else {
                this.Sharedservice.phase3disableTab();
              }
              if (data.resultList[0].stpGameCM.stpGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.checkloading = false;
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

  textLines: string[] = [
    "You'll delve into detailed descriptions of the market landscape, including factors such as consumer demographics, industry trends, competitor analysis, and potential market opportunities and threats. This information serves as the foundation for your strategic decisions throughout the game.",
    "You'll have access to valuable market intelligence, including market research data, customer feedback, and competitor analyses. This information will guide your decision-making process, enabling you to make informed choices that maximize your product's performance and profitability in the market.",
    "In this phase, you'll face the initial market outlook. Your task is to make strategic decisions on your product's features, pricing, promotion budget, and services. These decisions directly impact your product's positioning in the market.",
    "In this phase, you'll encounter a new market outlook along with the profitability of your product from Phase 1. You'll again receive positioning maps of competitors and have the opportunity to reposition your product if needed. Additionally, you'll decide on launching new products with similar or enhanced features, pricing, promotion budget, and services, directly impacting your product's positioning.",
    "In the final phase, the market landscape continues to shift. You'll receive feedback on the profitability of your product from Phase 2 and encounter updated positioning maps of competitors. You'll once again have the chance to reposition your product and decide on new product launches, with your decisions affecting your product's positioning in the market.",
    "At the end, you'll receive comprehensive feedback on how your product performed in all three phases. You'll see your cumulative profit and other key performance indicators (KPIs), helping you understand the impact of your decisions on product positioning and overall success in the market.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/stpgame/introductionmarket.avif', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Information Search', image: '.../../../../assets/images/stpgame/informationsearchintroduction.avif', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Phase 1', image: '../../../../assets/images/stpgame/introductiontabphase1.png', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Phase 2', image: '../../../../assets/images/stpgame/phase2introductiontab.avif', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Phase 3', image: '../../../../assets/images/stpgame/phase3introductiontab.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/stpgame/reportinintroductiontab.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },

  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(StpgamefoodforthoughtComponent, {
      data: {},
    });
  }

}

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
import { FoodforthoughtportfoliomanagementComponent } from '../foodforthoughtportfoliomanagement/foodforthoughtportfoliomanagement.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-portfoliointroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],

  templateUrl: './portfoliointroduction.component.html',
  styleUrls: ['./portfoliointroduction.component.scss']
})
export class PortfoliointroductionComponent extends AbstractComponent {

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
    let apiname = '/portfoliomanagement/fetchportfoliomanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].ap15 == 'Yes') || (data.resultList[0].ap15 == 'yes')) {
               this.Sharedservice.enableTab();
              }
              if ((data.resultList[0].ap18 == 'Yes') || (data.resultList[0].ap18 == 'yes')) {
                this.Sharedservice.phase2enableTab();
              } else {
                this.Sharedservice.phase2disableTab();
              }
              if ((data.resultList[0].ap19 == 'Yes') || (data.resultList[0].ap19 == 'yes')) {
                this.Sharedservice.phase3enableTab();
              } else {
                this.Sharedservice.phase3disableTab();
              }
              if (data.resultList[0].portfolioManagementCM.portfolioManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
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
    "Delve into designated role within the company, understand the specific portfolio to manage and the range of securities available for investment. Assess the securities composition and strategize where to allocate funds across various investment options.",
    "Mark the beginning of the investment journey, starting with market analysis. Meticulously examine the market outlook, scrutinize historical returns of different securities, and evaluate associated risks and correlations. With these insights, strategically allocate portfolio to optimize returns while managing risks effectively.",
    "Leverage the returns and portfolio balance from the initial phase. Read the current market outlook, analyze updated historical returns, and reassess risk factors and correlations. Armed with this comprehensive understanding, adjust portfolio allocation to capitalize on opportunities and mitigate potential downsides.",
    "At the culmination of the investment process, refine the portfolio based on returns and balances from previous phases. Continue to stay abreast of market trends, delve into historical performance data, and evaluate risk profiles and correlations.",
    "Receive valuable feedback on investment performance. Over the span of three phases, gauge whether the portfolio outperformed the market while maintaining lower levels of risk.",
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];


  cards = [
    { title: 'Market', image: '../../../../assets/images/portfoliomanagementnew/market.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Phase 1', image: '.../../../../assets/images/portfoliomanagementnew/phase1.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Phase 2', image: '../../../../assets/images/portfoliomanagementnew/phases2.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Phase 3', image: '../../../../assets/images/portfoliomanagementnew/phases3.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/portfoliomanagementnew/reports.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
  ];

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(FoodforthoughtportfoliomanagementComponent, {
      data: {},
    });
  }


}

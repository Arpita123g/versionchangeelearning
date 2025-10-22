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
import { FinancialanalysisnewfoodforthoughtComponent } from '../financialanalysisnewfoodforthought/financialanalysisnewfoodforthought.component';

@Component({
  selector: 'app-financialanalysisnewindtroduction',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule],
  templateUrl: './financialanalysisnewindtroduction.component.html',
  styleUrls: ['./financialanalysisnewindtroduction.component.scss']
})
export class FinancialanalysisnewindtroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;

  textLines: string[] = [
    "Begin with a comprehensive memo introducing you to the dynamic automotive industry. Understand the significance of financial statements – the heartbeat of any company – as you embark on the journey of potential investments. Learn about key financial metrics that will guide your decision-making process.",
    "Stay on your toes as the game keeps you updated with real-time breakthroughs in the automotive market. These market news flashes will influence the overall game conditions and the performance of the companies you're eyeing. Adapt your strategies based on the ever-changing landscape of the industry.",
    "Dive into the nitty-gritty of financial analysis by accessing simulated statements from three intriguing automotive companies. Explore the nuances of each company's financial health through their Statements. It's your chance to decipher the financial story behind the numbers.",
    "Armed with financial statements, roll up your sleeves and calculate essential ratios. Craft a compelling investment thesis for each company, outlining your rationale behind potential investments. Sharpen your analytical skills as you weigh the strengths and weaknesses of three companies.",
    "Now comes the strategic part – decide how much of your virtual funds to allocate to each company. Diversify your investments wisely, considering the risks and potential returns of the companies. Make shrewd decisions to optimize your portfolio.",
    "The moment of truth has arrived. Witness the market's reaction to your investment decisions. Track the performance of your portfolio as stock prices fluctuate based on your choices, market conditions, and external events. Receive valuable feedback on your financial acumen and adapt your strategy for future investments.",
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];
  
  cards = [
    { title: 'Memo', image: '../../../../assets/images/financialanalysis/introdmemo.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Industry Analysis', image: '.../../../../assets/images/financialanalysis/industanalysis.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Statements', image: '../../../../assets/images/financialanalysis/introdstatement.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Thesis', image: '../../../../assets/images/financialanalysis/introdthesis.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Investments', image: '../../../../assets/images/financialanalysis/introdinvest.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/changemanagementnew/reportsforchange.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
   }
 
  getFetchData() {
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].am31 == 'yes') || (data.resultList[0].am31 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].financialAnalysisCM.financialAnalysisCMActiveStatus.foodforthoughtstatus == 'inactive') {
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
    this.dialog.open(FinancialanalysisnewfoodforthoughtComponent, {
      data: {},
    });


  }
}

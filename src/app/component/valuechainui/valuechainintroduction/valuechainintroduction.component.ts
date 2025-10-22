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
import { ValuechainfoodforthoughtComponent } from '../valuechainfoodforthought/valuechainfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-valuechainintroduction',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './valuechainintroduction.component.html',
  styleUrls: ['./valuechainintroduction.component.scss']
})
export class ValuechainintroductionComponent extends AbstractComponent {
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
    let apiname = '/valuechain/fetchvaluechain';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].z42 == 'yes') || (data.resultList[0].z42 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].valueChainCM.valueChainCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
            }
          }
          this.checkloading = false;

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }
  textLines: string[] = [
    "Delve into the smartphone manufacturing landscape, analyzing market trends, consumer preferences, and competitor strategies. The decisions revolve around strategic choices in market positioning, target audience identification, and the implementation of differentiation strategies.",
    "Leverage available data and market insights to set sales objectives. Activities include the utilization of market research data to estimate smartphone demand, and the formulation of realistic sales targets that account for factors such as seasonality and market conditions.",
    "You are tasked with pivotal decisions on production capacity, raw material procurement, and transportation. Choices involve determining whether to scale production capacity, efficiently utilizing existing resources, and making strategic decisions regarding raw material sourcing, inventory management, and transportation optimization.",
    "Step into the role of strategic architects, shaping the identity of the smartphones. Decisions revolve around selecting features and specifications that align with market demand. Additionally, carefully determine pricing strategies, distributor margins, and allocate an advertising budget to enhance market positioning and boost brand visibility.",
    "Navigate crucial decisions on financial strategies, contemplating options like taking loans or managing liabilities. The primary focus is on aligning these financial decisions with the overall cash flow and profitability of the company, ensuring the establishment of a sustainable and robust financial foundation.",
    "Receive comprehensive feedback on your performance. Analyze key parameters and evaluate the success of your strategies. Aim to maximize profit by learning from your decisions and refining your approach for future scenarios."
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/valuechain/market1stvaluechain.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Demand', image: '.../../../../assets/images/valuechain/demand.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Production', image: '../../../../assets/images/valuechain/production.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Marketing', image: '../../../../assets/images/valuechain/marketing.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Finance', image: '../../../../assets/images/valuechain/finance.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/valuechain/reports.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ]


  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(ValuechainfoodforthoughtComponent, {
      data: {},
    });


  }
}

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
import { PricingfoodforthoughtComponent } from '../pricingfoodforthought/pricingfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-pricingintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './pricingintroduction.component.html',
  styleUrls: ['./pricingintroduction.component.scss']
})
export class PricingintroductionComponent extends AbstractComponent {
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
    let apiname = '/pricinggame/fetchpricinggame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              
               if ((data.resultList[0].ab22 == 'Yes') || (data.resultList[0].ab22 == 'yes')) {
                 this.Sharedservice.phase2enableTab();
               } else {
                 this.Sharedservice.phase2disableTab();
               }
               if ((data.resultList[0].ab23 == 'Yes') || (data.resultList[0].ab23 == 'yes')) {
                 this.Sharedservice.phase3enableTab();
               } else {
                 this.Sharedservice.phase3disableTab();
               }
              if ((data.resultList[0].ab13 == 'yes') || (data.resultList[0].ab13 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].pricingGameCM.pricingGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.checkloading = false;
            }
          } else {
            this.checkloading = false;

          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  openDialog(): void {
    this.dialog.open(PricingfoodforthoughtComponent, {
      data: {},
    });
  }

  showAll: boolean[] = [false, false, false, false, false, false];

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
    console.log("show", this.showAll[index])
  }


  textLines: string[] = [
    "Understand the dynamic landscape of the airline industry, including market trends, challenges, and opportunities. Identify your role and responsibilities as a player in this competitive environment.",
    "Analyze crucial data on demand, capacity, and costs to formulate your initial pricing strategy. Make informed decisions that set the foundation for your approach, taking into account competitor pricing. Your goal is to optimize profit and establish a strong market position.",
    "Adjust your pricing strategy based on the revealed competitor prices from Phase 1. Additionally, consider offering extra services to attract consumers. Choose a strategic blend of pricing and service enhancements to stay competitive and maximize customer appeal.",
    "Fine-tune your pricing strategy using insights gained from Phase 2, incorporating competitor prices. Explore opportunities to provide extra services and engage in promotional activities to attract consumers. Your objective is to adapt dynamically to market conditions and enhance your competitive edge.",
    "Receive comprehensive feedback on your performance against competitors. Analyze key parameters and evaluate the success of your strategies. Aim to maximize profit at departure by learning from your decisions in each phase and refining your approach for future scenarios.",
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));

  cards = [
    { title: 'Market', image: '../../../../assets/images/pricinggame/pricingintromarket.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Initiate', image: '.../../../../assets/images/pricinggame/pricinginitiate.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Innovate', image: '../../../../assets/images/pricinggame/pricinginnovate.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Adapt', image: '../../../../assets/images/pricinggame/pricingadapt.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/pricinggame/pricingreports.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
  ];

}

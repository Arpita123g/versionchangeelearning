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
import { MergersacquisitionfoodforthoughtComponent } from '../mergersacquisitionfoodforthought/mergersacquisitionfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-mergersacquisitionintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './mergersacquisitionintroduction.component.html',
  styleUrls: ['./mergersacquisitionintroduction.component.scss']
})
export class MergersacquisitionintroductionComponent extends AbstractComponent {
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
    let apiname = '/mergersacquisition/fetchmergersacquisition';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].ac30 == 'yes') || (data.resultList[0].ac30 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].mergersAcquisitionCM.mergersAcquisitionCMActiveStatus.foodforthoughtstatus == 'inactive') {
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
    "As global cities outlawed combustion engines and petrol stations turned into relics, the automobile world experienced an unprecedented boom. Electric vehicles, once the dreamy promise of the future, became the heartthrob of every driveway, with MAI leading the charge, turning highways into electrifying symphonies of progress.",
    "Define clear objectives: Why do you want to acquire or merge with another company? Is it to expand product offerings, enter a new market, or gain technologies or talents? Identify target sectors or specific companies of interest.",
    "Using the strategic criteria established, search for potential companies. Initial valuation of the target company. High-level assessment of the strategic fit and potential synergies.",
    "Discussing the terms of the deal, which could include the price, payment method (cash, stock, or a combination), roles of current management, and other deal-specific conditions.",
    "If the company doesn't have enough funds on hand, will arrange for financing. This could involve loans, issuing of new shares, or other financing mechanisms.",
    "M&A of a certain size or within certain industries will need approval from regulatory bodies to ensure no antitrust laws are breached. The shareholders approval and report on the value creation."
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/mergrsaquisition/mergersaquisitionmarketcar.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Planning', image: '.../../../../assets/images/mergrsaquisition/mergersplanning.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Preliminary Assessment', image: '../../../../assets/images/mergrsaquisition/mergeersaquiassessment.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Negotiation', image: '../../../../assets/images/mergrsaquisition/mergersnegotiation.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Financing', image: '../../../../assets/images/mergrsaquisition/mrgersfinancing.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Approvals', image: '../../../../assets/images/mergrsaquisition/apprvesinmergers.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ]


  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(MergersacquisitionfoodforthoughtComponent, {
      data: {},
    });


  }

}

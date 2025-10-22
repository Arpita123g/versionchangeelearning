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
import { PromotionsigmentnewfoodforthoughtComponent } from '../promotionsigmentnewfoodforthought/promotionsigmentnewfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promotionsigmentnewintroduction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promotionsigmentnewintroduction.component.html',
  styleUrls: ['./promotionsigmentnewintroduction.component.scss']
})
export class PromotionsigmentnewintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;
  language: any = [];

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
    "b13",
    "b14",
    "b15",
    "b16",
    "b17",
    "b18",
  ]

  truncate(text: string) {
    return (text?.substring(0, 90) + (text?.length > 90 ? '...' : ''));
  }
  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'b259', image: '../../../../assets/images/promotionsigment/promarket.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'b8', image: '.../../../../assets/images/promotionsigment/promarketresearch.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'b9', image: '../../../../assets/images/promotionsigment/procommunication.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'b10', image: '../../../../assets/images/promotionsigment/procampaigns.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'b11', image: '../../../../assets/images/promotionsigment/prochannel.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'b12', image: '../../../../assets/images/promotionsigment/proreport.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ];

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  getFetchData() {
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.language = data.resultList[0].promoTionsNewLM[this.languageselect.toLowerCase()];


              // if ((data.resultList[0].promotionsnewdata.z20 == 'yes') || (data.resultList[0].promotionsnewdata.z20 == 'Yes')) {
              //   this.Sharedservice.enableTab();
              // }
              if ((data.resultList[0].promotionsnewdata.z20).toLowerCase() === 'yes') {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
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

  openDialog(): void {
    this.dialog.open(PromotionsigmentnewfoodforthoughtComponent, {
      data: {},
    });
  }
}

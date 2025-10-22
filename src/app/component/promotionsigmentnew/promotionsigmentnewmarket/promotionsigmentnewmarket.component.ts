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

@Component({
  selector: 'app-promotionsigmentnewmarket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promotionsigmentnewmarket.component.html',
  styleUrls: ['./promotionsigmentnewmarket.component.scss']
})
export class PromotionsigmentnewmarketComponent extends AbstractComponent {
  outlooktextheading: any = []
  outlooktextcontent: any = []
  foodforthought: boolean = true;
  headingvalue: string = '';
  contentvalue: string = '';
  foodvalue: string = '';

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              // let outlookdata = data.resultList[0].promotionsNewCM.b5;
              // outlookdata = outlookdata.replace(/\\/g, '');
              // this.outlooktextcontent[0] = outlookdata;
              // this.contentvalue = this.outlooktextcontent[0];
            }
            let outlookdata = data.resultList[0].promoTionsNewLM[this.languageselect.toLowerCase()].b19;
            outlookdata = outlookdata.replace(/\\/g, '');
            this.outlooktextcontent[0] = outlookdata.replace(/\n/g, '<br>');
            this.contentvalue = this.outlooktextcontent[0];
            this.foodvalue = data.resultList[0].promoTionsNewLM[this.languageselect.toLowerCase()].b260;

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

  openDialog(): void {
    this.dialog.open(PromotionsigmentnewfoodforthoughtComponent, {
      data: {},
    });
  }

}

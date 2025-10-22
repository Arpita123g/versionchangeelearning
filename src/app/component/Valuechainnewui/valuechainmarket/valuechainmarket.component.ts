import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ValuechainfoodforthoughtComponent } from '../valuechainfoodforthought/valuechainfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-valuechainmarket',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './valuechainmarket.component.html',
  styleUrls: ['./valuechainmarket.component.scss']
})
export class ValuechainmarketComponent extends AbstractComponent {
  @Output() newEvent = new EventEmitter<any>();
  outlooktextheading: any = []
  outlooktextcontent: any = []
  foodforthought: boolean = true;
  headingvalue: string = '';
  contentvalue: string = '';
  result: any = [];
  periodcellvalue: any = ['e9', 'e10', 'e11'];
  foodvalue: string = '';
  language: any = [];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    let apiname = '/valuechainnew/fetchvaluechainnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.language = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()];

              if (data.resultList[0].valueChainNewCM.valueChainNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }

              for (let i = 0; i < this.periodcellvalue.length; i++) {
                this.result[i] = data.resultList[0].valueChainNewCM.valuechainnewperioddata[this.periodcellvalue[i]];
              }
              let outlookdata = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()].b20;
              outlookdata = outlookdata.replace(/\\/g, '');
              this.outlooktextcontent[0] = outlookdata.replace(/\n/g, '<br>');
              this.contentvalue = this.outlooktextcontent[0];
              this.foodvalue = data.resultList[0].valueChainNewLM[this.languageselect.toLowerCase()].b240;
              
              // let outlookdata = data.resultList[0].valueChainNewCM.b5;
              // outlookdata = outlookdata.replace(/\\/g, '');
              // this.outlooktextcontent[0] = outlookdata;
              // this.contentvalue = this.outlooktextcontent[0];
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

  openDialog(): void {
    this.dialog.open(ValuechainfoodforthoughtComponent, {
      data: {},
    });
  }
}

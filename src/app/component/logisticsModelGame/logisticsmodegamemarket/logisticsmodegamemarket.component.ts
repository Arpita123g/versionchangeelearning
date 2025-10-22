import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { LogisticsmodegamefoodforthoughtComponent } from '../logisticsmodegamefoodforthought/logisticsmodegamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logisticsmodegamemarket',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './logisticsmodegamemarket.component.html',
  styleUrls: ['./logisticsmodegamemarket.component.scss']
})
export class LogisticsmodegamemarketComponent extends AbstractComponent {
  foodforthought: boolean = true
  result: any = [];
  outlooktextcontent: any = []
  contentvalue: string = '';

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {

    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.fetchData();
  }

  
  periodcellvalue: any = ['c10', 'd10', 'c11', 'd11', 'c12', 'd12', 'c13', 'd13',
    'c16', 'd16', 'c17', 'd17', 'c18', 'd18', 'c19', 'd19',
    'ad27', 'ae27', 'ad28', 'ae28', 'ad29', 'ae29', 'ad32', 'ae32', 'ad33', 'ae33',
    'd22', 'd23', 'd24', 'd25', 'd26', 'd27', 'd28', 'd29',
    'c10', 'd32', 'c11', 'd33', 'c12', 'd34', 'c13', 'd35', 'g11', 'g20'
  ]

  fetchData() {
    let apiname = '/logistics/fetchlogistics';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].logisticsCM.logisticsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellvalue.length; i++) {
                this.result[i] = data.resultList[0].logisticsCM[this.periodcellvalue[i]];
              }
              let outlookdata = data.resultList[0].logisticsCM.c5;
              this.outlooktextcontent[0] = outlookdata;
              this.contentvalue = this.outlooktextcontent[0];
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
    this.dialog.open(LogisticsmodegamefoodforthoughtComponent, {
      data: {},
    });
  }
}

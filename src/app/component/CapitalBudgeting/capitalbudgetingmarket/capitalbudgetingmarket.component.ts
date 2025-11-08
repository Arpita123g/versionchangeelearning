import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CapitalbudgetingfoodforthoughtComponent } from '../capitalbudgetingfoodforthought/capitalbudgetingfoodforthought.component';
import { CommonModule } from '@angular/common';
import { NgxEditorModule } from 'ngx-editor';

// Removed unused or problematic imports
@Component({
  selector: 'app-capitalbudgetingmarket',
  standalone: true,
  imports: [CommonModule, MatDialogModule,NgxEditorModule],
  templateUrl: './capitalbudgetingmarket.component.html',
  styleUrls: ['./capitalbudgetingmarket.component.scss']
})
export class CapitalbudgetingmarketComponent extends AbstractComponent {
  @Output() newEvent = new EventEmitter<any>();
  outlooktextcontent: any = []
  foodforthought: boolean = true;
  contentvalue: string = '';
  result: any = [];

  databasecellname: any = [
    'c4'
  ];

  periodcellvalue: any = [
    'd5', 'e5', 'd6', 'e6', 'd7', 'e7', 'd8', 'e8', 'd9', 'e9',//9
    'd12', 'e12', 'd13', 'e13', 'd14', 'e14', 'd15', 'e15', 'h45'//18
  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.fetchData();
  }

  formatValue(value: any, index: number): any {
    if ([1, 3, 5, 7, 11, 13, 15, 17].includes(index)) {
      return (parseFloat(value) * 100).toFixed(1) + '%';
    }
    return value;
  }

  fetchData() {
    let apiname = '/cbgame/fetchcbgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].cbGameCM.cbGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellvalue.length; i++) {
                this.result[i] = data.resultList[0].cbGameCM.cbgameperioddata[this.periodcellvalue[i]];
              }
              for (let i = 19; i < 20; i++) {
                this.result[i] = data.resultList[0].cbgamedata[this.databasecellname[i-19]];
              }

              let outlookdata = data.resultList[0].cbGameCM.cbgameperioddata.b5;
              outlookdata = outlookdata.replace(/\\/g, '');
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
    this.dialog.open(CapitalbudgetingfoodforthoughtComponent, {
      data: {},
    });
  }

}

import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CapitalbudgetingfoodforthoughtComponent } from '../capitalbudgetingfoodforthought/capitalbudgetingfoodforthought.component';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-capitalbudgetingintroduction',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule,MatIconModule],
  templateUrl: './capitalbudgetingintroduction.component.html',
  styleUrls: ['./capitalbudgetingintroduction.component.scss']
})
export class CapitalbudgetingintroductionComponent extends AbstractComponent {
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
    let apiname = '/cbgame/fetchcbgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {

              if (data.resultList[0].cbgamedata) {
                if ((data.resultList[0].cbgamedata.ao39 == 'yes') || (data.resultList[0].cbgamedata.ao39 == 'Yes')) {
                  this.Sharedservice.enableTab();
                }
              }

              if (data.resultList[0].cbGameCM.cbGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
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
    "You will start with a snapshot of the company you are going to manage and a glimpse into the economic climate. Key macroeconomic factors are highlighted to help you understand the financial context.",
    "You are presented with a variety of projects, each with distinct characteristics and risk levels. The challenge lies in selecting projects that align with the company's goals and risk tolerance.",
    "Faced with financial constraints, you have to strategically allocate funds among chosen projects to maximize returns while staying within the budgetary limits.",
    "Post-implementation, a comprehensive report reveals the consequences of your choices, detailing the financial outcomes of projects and highlighting any unexpected events that may have influenced results.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/capitalbudgeting/market.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Project Portfolio', image: '.../../../../assets/images/capitalbudgeting/projectportfulio.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Decide', image: '../../../../assets/images/capitalbudgeting/decide.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/capitalbudgeting/reports.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(CapitalbudgetingfoodforthoughtComponent, {
      data: {},
    });

  }

}

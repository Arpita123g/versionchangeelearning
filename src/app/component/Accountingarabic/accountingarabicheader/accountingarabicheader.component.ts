import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { AccountingArabicintroductionComponent } from '../accountingarabicintroduction/accountingarabicintroduction.component';
import { AccountingArabicinformationComponent } from '../accountingarabicinformation/accountingarabicinformation.component';
import { AccountingArabicaccountsComponent } from '../accountingarabicaccounts/accountingarabicaccounts.component';
import { AccountingarabicevaluationComponent } from '../accountingarabicevaluation/accountingarabicevaluation.component';
import { AccountingArabicreportComponent } from '../accountingarabicreport/accountingarabicreport.component';
import { AccountingArabicsynopsisComponent } from '../accountingarabicsynopsis/accountingarabicsynopsis.component';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatIconModule } from '@angular/material/icon';
import { AccountingingArabicdecisionchecklistComponent } from '../accountingarabicdecisionchecklist/accountingarabicdecisionchecklist.component';
import { AccountingArabicmemoComponent } from '../accountingarabicmemo/accountingarabicmemo.component';
import { AccountingingfoodforthoughtComponent } from '../../Accountingnew/accountingingfoodforthought/accountingingfoodforthought.component';

@Component({
  selector: 'app-accountingarabicheader',
  standalone: true,
  imports: [
    CommonModule,
    AccountingArabicintroductionComponent,
    AccountingArabicinformationComponent,
    AccountingarabicevaluationComponent,
    AccountingArabicreportComponent,
    AccountingArabicsynopsisComponent,
    MatIconModule,
    AccountingArabicaccountsComponent,
    AccountingingArabicdecisionchecklistComponent,
    AccountingArabicmemoComponent,
    AccountingingfoodforthoughtComponent
  ],
  templateUrl: './accountingarabicheader.component.html',
  styleUrls: ['./accountingarabicheader.component.scss']
})

export class AccountingArabicheaderComponent extends AbstractComponent {
  gametitle:string="Accounting Arabic"
  isShow: boolean = true;
  isShow3: boolean = false;
  accountingsgame: boolean = false;
  animal: string = '';
  name: string = '';
  gamenamesub: Subscription;
  gamename: string = '';
  checkStatus: string = '';
  tabDisabled: boolean = true;
  mainTab = 'gamearena';
  activeTab = 'introduction';
  forumTab = 'individual';
  market: boolean = false;
  isTab1Disabled: boolean = true;
  toolbartabsub: Subscription;
  toolbartab: string = '';

 

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private sharedservice: SharedserviceService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.gamenamesub = this._global.gamename.subscribe((data) => {
      this.gamename = data;
    });
    this.toolbartabsub = this._global.toolbartab.subscribe((data) => {
      this.toolbartab = data;
    });

    this.sharedservice.tabEnabled$.subscribe((enabled) => {
      this.tabDisabled = enabled;
    });
  }

  next(event: string) {
    this.search(event);
  }

  override ngOnInit(): void {
    if (this.gamename == 'Accounting') {
      this.accountingsgame = true;
    }
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
     }


  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  getTableData(tab: string) {
    let apiname = '/accounting/fetchaccounting';
    this._api.accountingfetchdata(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.checkStatus = data.resultList[0].h4
              if (data.resultList[0].h4 != 'yes') {
                this.activeTab = tab;
              }

            }
          }

        }, error: (error: any) => {

          this.driveerrorLog(error, apiname);
        }
      })
  }

  forum(forumTab: any) {
    this.forumTab = forumTab;
  }
 

 

}

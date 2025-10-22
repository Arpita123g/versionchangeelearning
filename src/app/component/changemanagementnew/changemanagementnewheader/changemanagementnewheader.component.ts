import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { gameConfig } from 'src/app/service/game-config/game-configforToolbar';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ChangemanagementnewawarenessComponent } from '../changemanagementnewawareness/changemanagementnewawareness.component';
import { ChangemanagementnewcommitmentComponent } from '../changemanagementnewcommitment/changemanagementnewcommitment.component';
import { ChangemanagementnewmotivationComponent } from '../changemanagementnewmotivation/changemanagementnewmotivation.component';
import { ChangemanagementnewdecisionchecklistComponent } from '../changemanagementnewdecisionchecklist/changemanagementnewdecisionchecklist.component';
import { ChangemanagementnewreportComponent } from '../changemanagementnewreport/changemanagementnewreport.component';
import { ChangemanagementnewsynopsisComponent } from '../changemanagementnewsynopsis/changemanagementnewsynopsis.component';
import { ChangemanagementnewmemoComponent } from '../changemanagementnewmemo/changemanagementnewmemo.component';
import { ChangemanagementnewhumandynamicsComponent } from '../changemanagementnewhumandynamics/changemanagementnewhumandynamics.component';
import { ChangemanagementnewfoodforthougthComponent } from '../changemanagementnewfoodforthougth/changemanagementnewfoodforthougth.component';
import { ChangemanagementnewintroductionComponent } from '../changemanagementnewintroduction/changemanagementnewintroduction.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReadingComponent } from 'src/app/common/reading/reading.component';

@Component({
  selector: 'app-changemanagementnewheader',
  standalone: true,
  imports: [CommonModule,
    MatDialogModule,
    ChangemanagementnewawarenessComponent,
    ChangemanagementnewcommitmentComponent,
    ChangemanagementnewdecisionchecklistComponent,
    ChangemanagementnewreportComponent,
    ChangemanagementnewsynopsisComponent,
    ChangemanagementnewmemoComponent,
    ChangemanagementnewhumandynamicsComponent,
    ChangemanagementnewmotivationComponent,
    ChangemanagementnewfoodforthougthComponent,
    ChangemanagementnewintroductionComponent,
    MicrosimleaderboardgeneralComponent,
    ForumindividualComponent,
    ForumcourseComponent,
    ReadingComponent
  ],
  templateUrl: './changemanagementnewheader.component.html',
  styleUrls: ['./changemanagementnewheader.component.scss']
})
export class ChangemanagementnewheaderComponent extends AbstractComponent {
  activeTab = 'introduction';
  gametitle: string = "changemanagementnew";
  tabDisabled: boolean = false;
  mainTab = 'gamearena';
  gamenamesub: Subscription;
  toolbartabsub: Subscription;
  toolbartab: String = "";
  checkStatus: string = '';
  gamename: string = '';
  tabname: string = "individual";
  usertype = 'student'


  language: string = '';
  languagesub: Subscription;
  apiNameForGame: string = '';
  gameNameLM: string = '';
  headingarray: any[] = [];
  headingarrayCell: any[] = [];
  forumText: any[] = [];
  forumKeys: string[] = [];
  forumTextBig: string = '';
  breadcrumbFontSize: string = 'inherit';

  languageSelect: Record<string, string> = {};
  commonData: any = {};
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
    this.languagesub = this._global.language.subscribe((data) => {
      this.language = data;
      this.language = this.language.toLowerCase();
    });
  }

  override ngOnInit(): void {
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }

    const config = gameConfig[this.gamename];
    if (config) {
      this.apiNameForGame = config.api;
      this.gameNameLM = config.lmKey;
      this.headingarrayCell = config.gameheadingKeys || [];
      this.forumKeys = config.forumKeys || [];
    }
    this.getFetchData();
   
  }



  next(event: string) {
    this.search(event);
  }

  tabclick(tabname: string) {
    this.tabname = tabname;
  }
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  // fetchData() {
  //   let apiname = '/changemanagementnew/fetchchangemanagementnew';
  //   this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             for (let i = 0; i < this.headingCell.length; i++) {
  //               this.headingarray[i] = data.resultList[0].changeManagementNewLM[this.language.toLowerCase()][this.headingCell[i]];
  //             }
  //           }


  //           this.checkloading = false;
  //         } else {
  //           this.checkloading = false;
  //         }

  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }

  getFetchData() {
    if (!this.apiNameForGame || !this.gameNameLM) return;

    this._api.fetchLanguageData(
      this.apiNameForGame,
      this.noofattempt,
      this.language
    ).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          this.languageSelect = data.resultList[0][this.gameNameLM][this.language];

          // headings
          this.headingarray = this.headingarrayCell.map(
            (key: string) => this.languageSelect[key]
          );

          // breadcrumb text size
          this.breadcrumbFontSize = (this.language === 'english') ? 'inherit' : '0.7rem';
          this.commonData = data.resultList[0][this.gameNameLM][`common${this.language.toLowerCase()}`] || {};          
         
        }
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}

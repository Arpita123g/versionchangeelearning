import { Component } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ValuechaindemandComponent } from '../valuechaindemand/valuechaindemand.component';
import { ValuechainreportComponent } from '../valuechainreport/valuechainreport.component';
import { ValuechainsynopsisComponent} from '../valuechainsynopsis/valuechainsynopsis.component';
import { ValuechainintroductionComponent } from '../valuechainintroduction/valuechainintroduction.component';
import { ValuechaindecisionchecklistComponent } from '../valuechaindecisionchecklist/valuechaindecisionchecklist.component';
import { ValuechainfoodforthoughtComponent } from '../valuechainfoodforthought/valuechainfoodforthought.component';
import { ValuechainmarketComponent } from '../valuechainmarket/valuechainmarket.component';
import { ValuechainproductionComponent } from '../valuechainproduction/valuechainproduction.component';
import { ValuechainmarkeetingComponent } from '../valuechainmarkeeting/valuechainmarkeeting.component';
import { ValuechainfinanceComponent } from '../valuechainfinance/valuechainfinance.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';


@Component({
  selector: 'app-valuechainheader',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    ValuechaindecisionchecklistComponent,
    ValuechainreportComponent,
    ValuechainsynopsisComponent,
    ValuechainfoodforthoughtComponent,
    ValuechainintroductionComponent,
    ValuechainmarketComponent,
    ValuechaindemandComponent,
    ValuechainproductionComponent,
    ValuechainmarkeetingComponent,
    ValuechainfinanceComponent,
    ReadingComponent,
    MicrosimleaderboardgeneralComponent,
    ForumindividualComponent,
    ForumcourseComponent,
  ],
  templateUrl: './valuechainheader.component.html',
  styleUrls: ['./valuechainheader.component.scss']
})
export class ValuechainheaderComponent extends AbstractComponent {
  gametitle: string = 'Value Chain New'
  isShow: boolean = true;
  isShow3: boolean = false;
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
  language: string = '';
  languagesub: Subscription;
  // headingarray: string[] = [];
  // headingCell: string[] = ["b237", "b8", "b9", "b10", "b11", "b12", "b238", "b13", "b239"]
  headingCell: string[] = []


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
  forumData :string[]=[];
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
    //close this line code
    //  this.tabDisabled = false;
    //  this.fetchData();
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

  search(activeTab: any) {
    this.activeTab = activeTab;
  }



  forum(forumTab: any) {
    this.forumTab = forumTab;
  }

  // fetchData() {
  //   let apiname = '/valuechainnew/fetchvaluechainnew';
  //   this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             for (let i = 0; i < this.headingCell.length; i++) {
  //               this.headingarray[i] = data.resultList[0].valueChainNewLM[this.language.toLowerCase()][this.headingCell[i]];
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


  // getFetchData() {
  //   if (!this.apiNameForGame || !this.gameNameLM) return;

  //   this._api.fetchLanguageData(
  //     this.apiNameForGame,
  //     this.noofattempt,
  //     this.language
  //   ).subscribe({
  //     next: (data: any) => {
  //       if (data.status === "Success" && data.resultList) {
  //         this.languageSelect = data.resultList[0][this.gameNameLM][this.language];

  //         // headings
  //         this.headingarray = this.headingarrayCell.map(
  //           (key: string) => this.languageSelect[key]
  //         );

  //         // breadcrumb text size
  //         this.breadcrumbFontSize = (this.language === 'english') ? 'inherit' : '0.7rem';
  //         this.commonData = data.resultList[0].valueChainNewLM[this.language.toLowerCase()] || {};
  //         this.forumData = this.forumKeys.map((key: string) => this.commonData[key]);
  //         // lmData?.[`${config.commonPrefix}${language.toLowerCase()}`] || {};


  //         // Forum heading
  //         // const config = gameConfig[this.gamename];
  //         // this.forumTextBig = this.languageSelect[config.forumHeading] || "FORUM";

  //         // // Forum tab names (Individual, Course)
  //         // this.forumText = this.forumKeys.map(
  //         //   (key: string) => this.languageSelect[key]
  //         // );
  //       }
  //     },
  //     error: (error: any) => {
  //       console.error(error);
  //     }
  //   });
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

          // Forum heading
          // const config = gameConfig[this.gamename];
          // this.forumTextBig = this.languageSelect[config.forumHeading] || "FORUM";

          // Forum tab names (Individual, Course)
          this.forumText = this.forumKeys.map(
            (key: string) => this.languageSelect[key]
          );
        }
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

}

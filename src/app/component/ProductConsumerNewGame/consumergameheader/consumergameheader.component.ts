import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { gameConfig } from 'src/app/service/game-config/game-configforToolbar';
import { GameConfigService } from 'src/app/service/game-config/game-configService';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { MicrosimleaderboardreportComponent } from 'src/app/common/microsimleaderboardreport/microsimleaderboardreport.component';
import { ConsumergameintroductionComponent } from '../consumergameintroduction/consumergameintroduction.component';
import { FoodforthoughtConsumerComponent } from '../foodforthoughtconsumer/foodforthoughtconsumer.component';
import { ConsumermarketComponent } from '../consumermarket/consumermarket.component';
import { ConsumerreportComponent } from '../consumerreport/consumerreport.component';
import { ConsumersynopsisComponent } from '../consumersynopsis/consumersynopsis.component';
import { ConsumertargetComponent } from '../consumertarget/consumertarget.component';
import { MarketresearchComponent } from '../marketresearch/marketresearch.component';
import { ConsumerconceptualizationComponent } from '../consumerconceptualization/consumerconceptualization.component';
import { ConsumercraftingComponent } from '../consumercrafting/consumercrafting.component';
import { ConsumerdecisionchecklistComponent } from '../consumerdecisionchecklist/consumerdecisionchecklist.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';
@Component({
  selector: 'app-consumergameheader',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule,
    ForumindividualComponent,
    ForumcourseComponent,
    MicrosimleaderboardgeneralComponent,
    MicrosimleaderboardreportComponent,
    ConsumergameintroductionComponent,
    FoodforthoughtConsumerComponent,
    ConsumermarketComponent,
    ConsumerreportComponent,
    ConsumersynopsisComponent,
    ConsumertargetComponent,
    MarketresearchComponent,
    ConsumerconceptualizationComponent,
    ConsumercraftingComponent,
    ConsumerdecisionchecklistComponent,
    ReadingComponent

  ],
  templateUrl: './consumergameheader.component.html',
  styleUrls: ['./consumergameheader.component.scss']
})
export class ConsumergameheaderComponent extends AbstractComponent {
  gametitle: string = 'consumerbehaviournew';
  activeTab: string = 'introduction';
  // productconsumergame: boolean = false;
  tabDisabled: boolean = false;
  tabname: string = "individual";
  mainTab = 'gamearena';
  gamenamesub: Subscription;
  gamename: string = '';
  toolbartabsub: Subscription;
  toolbartab: string = '';
  languagesub: Subscription;
  language: string = '';
  apiNameForGame: string = '';
  gameNameLM: string = '';
  headingarray: any[] = [];
  headingarrayCell: any[] = [];
  forumText: any[] = [];
  forumKeys: string[] = [];
  forumTextBig: string = '';
  breadcrumbFontSize: string = 'inherit';
  languageSelect: Record<string, string> = {};


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private sharedservice: SharedserviceService, private gameConfigService: GameConfigService) {
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
      this.getFetchData();
    }

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

  override ngOnDestroy() {
    this.gamenamesub.unsubscribe();
    this.languagesub.unsubscribe();
  }


}

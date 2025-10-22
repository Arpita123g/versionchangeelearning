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

@Component({
  selector: 'app-hrpgameheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrpgameheader.component.html',
  styleUrls: ['./hrpgameheader.component.scss']
})
export class HrpgameheaderComponent extends AbstractComponent {
  gametitle = "HRP New";
  isShow: boolean = true;
  isShow3: boolean = false;
  hrpgame: boolean = false;
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
  language: string = '';
  languagesub: Subscription;
  // headingarray: string[] = [];
  // headingCell: string[] = ["b252", "b253", "b5", "b6", "b270", "b8", "b259", "b114", "b263"]

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

  next(event: string) {
    this.search(event);
  }

  override ngOnInit(): void {
    if (this.gamename == 'HRP New') {
      this.hrpgame = true;
    }
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
    // this.fetchData();

    const config = gameConfig[this.gamename];
    if (config) {
      this.apiNameForGame = config.api;
      this.gameNameLM = config.lmKey;
      this.headingarrayCell = config.gameheadingKeys || [];
      this.forumKeys = config.forumKeys || [];
    }
    this.getFetchData();
  }

  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  getTableData(tab: string) {
    let apiname = '/hrplanningnew/fetchhrplanningnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.checkStatus = data.resultList[0].ae49
              if (data.resultList[0].ae49 != 'yes') {
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

  // fetchData() {
  //   let apiname = '/hrplanningnew/fetchhrplanningnew';
  //   this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             for (let i = 0; i < this.headingCell.length; i++) {
  //               this.headingarray[i] = data.resultList[0].hrPlanningNewLM[this.language.toLowerCase()][this.headingCell[i]];
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
          this.commonData = data.resultList[0].hrPlanningNewLM[`common${this.language.toLowerCase()}`] || {};
          // lmData?.[`${config.commonPrefix}${language.toLowerCase()}`] || {};


          // Forum heading
          // const config = gameConfig[this.gamename];
          // this.forumTextBig = this.languageSelect[config.forumHeading] || "FORUM";

          // // Forum tab names (Individual, Course)
          // this.forumText = this.forumKeys.map(
          //   (key: string) => this.languageSelect[key]
          // );
        }
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }




}

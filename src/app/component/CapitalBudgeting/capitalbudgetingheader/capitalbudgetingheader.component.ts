import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CapitalbudgetingintroductionComponent } from '../capitalbudgetingintroduction/capitalbudgetingintroduction.component';
import { CapitalbudgetingmarketComponent } from '../capitalbudgetingmarket/capitalbudgetingmarket.component';
import { CapitalbudgetingprojectportfolioComponent } from '../capitalbudgetingprojectportfolio/capitalbudgetingprojectportfolio.component';
import { CapitalbudgetingdecideComponent } from '../capitalbudgetingdecide/capitalbudgetingdecide.component';
import { CapitalbudgetingreportComponent } from '../capitalbudgetingreport/capitalbudgetingreport.component';
import { CapitalbudgetingsynopsisComponent } from '../capitalbudgetingsynopsis/capitalbudgetingsynopsis.component';
import { CapitalbudgetingfoodforthoughtComponent } from '../capitalbudgetingfoodforthought/capitalbudgetingfoodforthought.component';
import { CapitalbudgetingdecisionchecklistComponent } from '../capitalbudgetingdecisionchecklist/capitalbudgetingdecisionchecklist.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';

@Component({
  selector: 'app-capitalbudgetingheader',
  standalone: true,
  imports: [CommonModule,
    CapitalbudgetingintroductionComponent,
    CapitalbudgetingmarketComponent,
    CapitalbudgetingprojectportfolioComponent,
    CapitalbudgetingdecideComponent,
    CapitalbudgetingreportComponent,
    CapitalbudgetingsynopsisComponent,
    CapitalbudgetingfoodforthoughtComponent,
    CapitalbudgetingdecisionchecklistComponent,
    ForumcourseComponent,
    ForumindividualComponent,
    ReadingComponent,
    MicrosimleaderboardgeneralComponent,
    MatDialogModule,
  ],
  templateUrl: './capitalbudgetingheader.component.html',
  styleUrls: ['./capitalbudgetingheader.component.scss']
})
export class CapitalbudgetingheaderComponent extends AbstractComponent {
  gametitle = "Capital Budgeting";
  isShow: boolean = true;
  isShow3: boolean = false;
  capitalbudgetingsgame: boolean = false;
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
   
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
   
  }

  search(activeTab: any) {
    this.activeTab = activeTab;
  }

 
  forum(forumTab: any) {
    this.forumTab = forumTab;
  }

}

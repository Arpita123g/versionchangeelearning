import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { BusinessbascismatdialogforhelpComponent } from '../businessbascismatdialogforhelp/businessbascismatdialogforhelp.component';
import { BusinessbascisreadingComponent } from '../businessbascisreading/businessbascisreading.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { BusinessbascismarketComponent } from '../businessbascismarket/businessbascismarket.component';
import { BusinessbascislocationComponent } from '../businessbascislocation/businessbascislocation.component';
import { BusinessbascisdemandComponent } from '../businessbascisdemand/businessbascisdemand.component';
import { BusinessbascisinvestmentsComponent } from '../businessbascisinvestments/businessbascisinvestments.component';
import { BusinessbascismarketingComponent } from '../businessbascismarketing/businessbascismarketing.component';
import { BusinessbascisdecisionchecklistComponent } from '../businessbascisdecisionchecklist/businessbascisdecisionchecklist.component';
import { BusinessbascisreportComponent } from '../businessbascisreport/businessbascisreport.component';
import { BusinessbascisfeedbackComponent } from '../businessbascisfeedback/businessbascisfeedback.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { BusinessbasicFoodforthoughtComponent } from '../businessbasicfoodforthought/businessbasicfoodforthought.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';

@Component({
  selector: 'app-business-bascis-header',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    IntroductionComponent,
    BusinessbascismarketComponent,
    BusinessbascislocationComponent,
    BusinessbascisdemandComponent,
    BusinessbascisinvestmentsComponent,
    BusinessbascismarketingComponent,
    BusinessbascisdecisionchecklistComponent,
    BusinessbascisreportComponent,
    BusinessbascisfeedbackComponent,
    // ForumindividualComponent,
    // ForumcourseComponent,
    MicrosimleaderboardgeneralComponent,
    BusinessbasicFoodforthoughtComponent,
    BusinessbascisreadingComponent,
    ForumcourseComponent,
    ForumindividualComponent,
    ReadingComponent
    
  ],
  templateUrl: './business-bascis-header.component.html',
  styleUrls: ['../BusinessBasicsGame.scss']
})
export class BusinessBascisHeaderComponent extends AbstractComponent {
  gametitle: string = 'businessbasics';
  isShow: boolean = true;
  isShow3: boolean = false;
  businessbasicsgame: boolean = false;
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

  navItems = [
    {
      title: "Decisions area:",
      href: "#",
    },
    {
      title: "Letest changes:",
      href: "#",
    },
    {
      title: "Round 1",
      href: "#",
    },
    {
      title: "team green",
      href: "#",
      isActive: true,
    },
  ];

  arenatab: any = [
    { "title": "Introduction", "target": "Introduction", "areacontrols": "Intoduction", "disabled": false, "active": true },
    { "title": "Market", "target": "Market", "areacontrols": "Market", "disabled": true, "active": false },
    { "title": "Location", "target": "Location", "areacontrols": "Location", "disabled": true, "active": false },
    { "title": "Demand", "target": "Demand", "areacontrols": "Demand", "disabled": true, "active": false },
    { "title": "Investment", "target": "Investment", "areacontrols": "Investment", "disabled": true, "active": false },
    { "title": "Marketing", "target": "Marketing", "areacontrols": "Marketing", "disabled": true, "active": false },
    { "title": "Report", "target": "Report", "areacontrols": "Report", "disabled": true, "active": false },
    { "title": "Feedback", "target": "Feedback", "areacontrols": "Feedback", "disabled": true, "active": false },


  ]

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
      // const key = (data || '').toString().toLowerCase();
      // if (key === 'reading') {
      //   this.mainTab = 'reading';
      // } else if (key === 'forum') {
      //   this.mainTab = 'forum';
      // } else if (key === 'leaderboard') {
      //   this.mainTab = 'leaderboard';
      // } else {
      //   this.mainTab = 'gamearena';
      // }
    });

    this.sharedservice.tabEnabled$.subscribe((enabled) => {
      this.tabDisabled = enabled;
    });
  }

  next(event: string) {
    this.search(event);
  }

  override ngOnInit(): void {
    if (this.gamename == 'Business Basics') {
      this.businessbasicsgame = true;
    }
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
  }


  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  getTableData(tab: string) {
    let apiname = '/businessbasic/fetchbusinessbasic';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
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
 
  openDialog(): void {
    const dialogRef = this.dialog.open(BusinessbascismatdialogforhelpComponent, {
      data: { name: "Cesim" },
      });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }


  override ngOnDestroy(): void {
      this.gamenamesub.unsubscribe();
      this.toolbartabsub.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { DesignthinkingdecisionchecklistComponent } from '../designthinkingdecisionchecklist/designthinkingdecisionchecklist.component';
import { DesignthinkingobserveComponent } from '../designthinkingobserve/designthinkingobserve.component';
import { DesignthinkingempathizeComponent } from '../designthinkingempathize/designthinkingempathize.component';
import { DesignthinkingdefineComponent } from '../designthinkingdefine/designthinkingdefine.component';
import { DesignthinkingprototypeComponent } from '../designthinkingprototype/designthinkingprototype.component';
import { DesignthinkingideateComponent } from '../designthinkingideate/designthinkingideate.component';
import { DesignthinkingexecuteComponent } from '../designthinkingexecute/designthinkingexecute.component';
import { DesignthinkingsynopsisComponent } from '../designthinkingsynopsis/designthinkingsynopsis.component';
import { DesignthinkingfoodforthoughtComponent } from '../designthinkingfoodforthought/designthinkingfoodforthought.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { DesignthinkingintroductionComponent } from '../designthinkingintroduction/designthinkingintroduction.component';

@Component({
  selector: 'app-designthinkingheader',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatIconModule, MatTooltipModule,
    DesignthinkingintroductionComponent,
    DesignthinkingdecisionchecklistComponent,
    DesignthinkingobserveComponent,
    DesignthinkingempathizeComponent,
    DesignthinkingdefineComponent,
    DesignthinkingprototypeComponent,
    DesignthinkingideateComponent,
    DesignthinkingexecuteComponent,
    DesignthinkingsynopsisComponent,
    DesignthinkingfoodforthoughtComponent,
    ReadingComponent,
    MicrosimleaderboardgeneralComponent,
    ForumindividualComponent,
    ForumcourseComponent,
  ],
  templateUrl: './designthinkingheader.component.html',
  styleUrls: ['./designthinkingheader.component.scss']
})
export class DesignthinkingheaderComponent extends AbstractComponent {
  gametitle = "Design Thinking";
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
    { "title": "Observe", "target": "Observe", "areacontrols": "Observe", "disabled": true, "active": false },
    { "title": "Empathize", "target": "Empathize", "areacontrols": "Empathize", "disabled": true, "active": false },
    { "title": "Define", "target": "Define", "areacontrols": "Define", "disabled": true, "active": false },
    { "title": "Ideate", "target": "Ideate", "areacontrols": "Ideate", "disabled": true, "active": false },
    { "title": "Prototype", "target": "Prototype", "areacontrols": "Prototype", "disabled": true, "active": false },
    { "title": "Execute", "target": "Execute", "areacontrols": "Execute", "disabled": true, "active": false },
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
    //this will be commented
    // this.tabDisabled = false;
  }

  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  getTableData(tab: string) {
    let apiname = '/designthinking/fetchdesignthinking';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.checkStatus = data.resultList[0].af65
              if (data.resultList[0].af65 != 'yes') {
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
  maintabdata(maintab: any) {
    this.mainTab = maintab;
    if (this.mainTab == "gamearena") {
      this.activeTab = 'introduction';
    }
  }

  routing(e: any) {
    if (e == true) {
      this.arenatab[1].disabled = false;
      this.arenatab[1].active = true;
      this.arenatab[0].active = false;

      console.log(this.arenatab);
    }
  }

}

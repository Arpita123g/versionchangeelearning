import { Component } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProjectmanagementdecisionchecklistComponent } from '../projectmanagementdecisionchecklist/projectmanagementdecisionchecklist.component';
import { ProjectmanagementfoodforthoughtComponent } from '../projectmanagementfoodforthought/projectmanagementfoodforthought.component';
import { ProjectmanagementreportComponent } from '../projectmanagementreport/projectmanagementreport.component';
import { ProjectmanagementsynopsisComponent } from '../projectmanagementsynopsis/projectmanagementsynopsis.component';
import { ProjectmanagementplanningComponent } from '../projectmanagementplanning/projectmanagementplanning.component';

import { ReadingComponent } from 'src/app/common/reading/reading.component';

import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ProjectmanagementmemoComponent } from '../projectmanagementmemo/projectmanagementmemo.component';
import { ProjectmanagementprojectmapComponent } from '../projectmanagementprojectmap/projectmanagementprojectmap.component';
import { ProjectmanagementtrackingComponent } from '../projectmanagementtracking/projectmanagementtracking.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';

@Component({
  selector: 'app-projectmanagementheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    ProjectmanagementdecisionchecklistComponent,
    ProjectmanagementfoodforthoughtComponent,
    ProjectmanagementreportComponent,
    ProjectmanagementsynopsisComponent,
    ProjectmanagementplanningComponent,
    ProjectmanagementprojectmapComponent,
    ProjectmanagementmemoComponent,
    ProjectmanagementtrackingComponent,
    ReadingComponent,
    ForumindividualComponent,
    ForumcourseComponent,
    MicrosimleaderboardgeneralComponent
  ],
  templateUrl: './projectmanagementheader.component.html',
  styleUrls: ['./projectmanagementheader.component.scss'],
})
export class ProjectmanagementheaderComponent extends AbstractComponent {
  gametitle = 'Project Management';
  isShow: boolean = true;
  isShow3: boolean = false;
  projectmanagementcmsgame: boolean = false;
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
  languagesub: Subscription;
  language: string = '';
  headingarray: any = [
    'Introduction',
    'Market',
    'Information',
    'Lead',
    'Communication',
    'Process',
    'Decision Checklist',
    'Report',
    'Synopsis',
  ];

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    private sharedservice: SharedserviceService,
  ) {
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
      if (this.language == 'hindi') {
        this.headingarray = [
          'परिचय',
          'बाजार',
          'जानकारी',
          'लीड',
          'संचार',
          'प्रक्रिया',
          'निर्णय चेकलिस्ट',
          'रिपोर्ट्स',
          'संक्षेपण',
        ];
      }
    });
  }

  override ngOnInit(): void {
    if (this.noofattempt != '1') {
      this.tabDisabled = false;
    }
    //it will commitedd
    this.tabDisabled = false;
  }

  forum(forumTab: any) {
    this.forumTab = forumTab;
  }

  next(event: string) {
    this.search(event);
  }

  search(activeTab: string) {
    this.activeTab = activeTab;
  }
}

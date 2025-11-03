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
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ChangemanagementnewawarenessComponent } from '../changemanagementnewawareness/changemanagementnewawareness.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { ChangemanagementnewcommitmentComponent } from '../changemanagementnewcommitment/changemanagementnewcommitment.component';
import { ChangemanagementnewdecisionchecklistComponent } from '../changemanagementnewdecisionchecklist/changemanagementnewdecisionchecklist.component';
import { ChangemanagementnewreportComponent } from '../changemanagementnewreport/changemanagementnewreport.component';
import { ChangemanagementnewsynopsisComponent } from '../changemanagementnewsynopsis/changemanagementnewsynopsis.component';
import { ChangemanagementnewmemoComponent } from '../changemanagementnewmemo/changemanagementnewmemo.component';
import { ChangemanagementnewhumandynamicsComponent } from '../changemanagementnewhumandynamics/changemanagementnewhumandynamics.component';
import { ChangemanagementnewmotivationComponent } from '../changemanagementnewmotivation/changemanagementnewmotivation.component';
import { ChangemanagementnewfoodforthougthComponent } from '../changemanagementnewfoodforthougth/changemanagementnewfoodforthougth.component';
import { ChangemanagementnewintroductionComponent } from '../changemanagementnewintroduction/changemanagementnewintroduction.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';

@Component({
  selector: 'app-changemanagementnewheader',
  standalone: true,
  imports: [CommonModule,
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
  gametitle:string = "changemanagement";
  tabDisabled: boolean = false;
  mainTab = 'gamearena';
  gamenamesub: Subscription;
  toolbartabsub: Subscription;
  toolbartab:String = "";
  checkStatus: string = '';
  gamename: string = '';
  tabname: string = "individual";
  usertype = 'student'
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

  override ngOnInit(): void {
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
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
}

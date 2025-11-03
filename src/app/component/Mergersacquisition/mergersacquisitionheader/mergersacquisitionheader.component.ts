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
import { MergersacquisitionfinancingComponent } from '../mergersacquisitionfinancing/mergersacquisitionfinancing.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';
import { MergersacquisitionfoodforthoughtComponent } from '../mergersacquisitionfoodforthought/mergersacquisitionfoodforthought.component';
import { MergersacquisitionreportComponent } from '../mergersacquisitionreport/mergersacquisitionreport.component';
import { MergersacquisitionintroductionComponent } from '../mergersacquisitionintroduction/mergersacquisitionintroduction.component';
import { MergersacquisitionmarketComponent} from '../mergersacquisitionmarket/mergersacquisitionmarket.component';
import { MergersacquisitiondecisionchecklistComponent } from '../mergersacquisitiondecisionchecklist/mergersacquisitiondecisionchecklist.component';
import { MergersacquisitionplanningComponent } from '../mergersacquisitionplanning/mergersacquisitionplanning.component';
import { MergersacquisitionpreliminaryassessmentsComponent } from '../mergersacquisitionpreliminaryassessments/mergersacquisitionpreliminaryassessments.component';
import { MergersacquisitionnegotiationComponent } from '../mergersacquisitionnegotiation/mergersacquisitionnegotiation.component';
import { MergersacquisitionsynopsisComponent } from '../mergersacquisitionsynopsis/mergersacquisitionsynopsis.component';
  
@Component({
  selector: 'app-mergersacquisitionheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    MergersacquisitionfinancingComponent,
    MergersacquisitionfoodforthoughtComponent,
    MergersacquisitionreportComponent,
    MergersacquisitiondecisionchecklistComponent,
    MergersacquisitionintroductionComponent,
    MergersacquisitionmarketComponent,
    MergersacquisitionplanningComponent,
    MergersacquisitionpreliminaryassessmentsComponent,
    MergersacquisitionnegotiationComponent,
    MergersacquisitionsynopsisComponent,
   ReadingComponent, 
    ForumcourseComponent,ForumindividualComponent,MicrosimleaderboardgeneralComponent
  ],
  templateUrl: './mergersacquisitionheader.component.html',
  styleUrls: ['./mergersacquisitionheader.component.scss']
})
export class MergersacquisitionheaderComponent extends AbstractComponent {
  gametitle: string = 'Mergers & Acquisition'
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

  search(activeTab: any) {
    this.activeTab = activeTab;
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

}

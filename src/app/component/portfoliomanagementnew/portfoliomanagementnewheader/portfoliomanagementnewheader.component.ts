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
import { PortfoliointroductionComponent } from '../portfoliointroduction/portfoliointroduction.component';
import { FoodforthoughtportfoliomanagementComponent } from '../foodforthoughtportfoliomanagement/foodforthoughtportfoliomanagement.component';
import { PortfolionewmarketComponent } from '../portfolionewmarket/portfolionewmarket.component';
import { PortfolionewmanagementphaseoneComponent } from '../portfolionewmanagementphaseone/portfolionewmanagementphaseone.component';
import { PortfolionewmanagementphasetwoComponent } from '../portfolionewmanagementphasetwo/portfolionewmanagementphasetwo.component';
import { PortfolionewmanagementphasethreeComponent } from '../portfolionewmanagementphasethree/portfolionewmanagementphasethree.component';
import { PortfolionewdecisionchecklistComponent } from '../portfolionewdecisionchecklist/portfolionewdecisionchecklist.component';
import { PortfoliomanagementnewsynopsisComponent } from '../portfoliomanagementnewsynopsis/portfoliomanagementnewsynopsis.component';
import { PortfoliomanagementnewreportComponent } from '../portfoliomanagementnewreport/portfoliomanagementnewreport.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';
@Component({
  selector: 'app-portfoliomanagementnewheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    PortfoliointroductionComponent,
    FoodforthoughtportfoliomanagementComponent,
    PortfolionewmarketComponent,
    PortfolionewmanagementphaseoneComponent,
    PortfolionewmanagementphasetwoComponent,
    PortfolionewmanagementphasethreeComponent,
    PortfolionewdecisionchecklistComponent,
    PortfoliomanagementnewsynopsisComponent,
    PortfoliomanagementnewreportComponent,
    MicrosimleaderboardgeneralComponent,
    ForumcourseComponent,
    ForumindividualComponent,
    ReadingComponent
  ],
  templateUrl: './portfoliomanagementnewheader.component.html',
  styleUrls: ['./portfoliomanagementnewheader.component.scss']
})
export class PortfoliomanagementnewheaderComponent extends AbstractComponent {

  gametitle: string = 'portfolio';
  activeTab: string = 'introduction';
  tabDisabled: boolean = true;
  phase2tabDisabled: boolean = true;
  phase3tabDisabled: boolean = true;
  tabname: string = "individual";
  gamenamesub: Subscription;
  gamename: string = '';
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
    this.sharedservice.phase2tabEnabled$.subscribe((enabled) => {
      this.phase2tabDisabled = enabled;
      
    });
    this.sharedservice.phase3tabEnabled$.subscribe((enabled) => {
      this.phase3tabDisabled = enabled;
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

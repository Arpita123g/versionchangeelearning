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
import { PricingadaptComponent } from '../pricingadapt/pricingadapt.component';
import { PricingdecisionchecklistComponent } from '../pricingdecisionchecklist/pricingdecisionchecklist.component';
import { PricingfoodforthoughtComponent } from '../pricingfoodforthought/pricingfoodforthought.component';
import { PricingreportComponent } from '../pricingreport/pricingreport.component';
import { PricingsynopsisComponent } from '../pricingsynopsis/pricingsynopsis.component';
import { PricingintroductionComponent } from '../pricingintroduction/pricingintroduction.component';
import { PricingmarketComponent } from '../pricingmarket/pricingmarket.component';
import { PricinginitiateComponent } from '../pricinginitiate/pricinginitiate.component';
import { PricinginnovateComponent } from '../pricinginnovate/pricinginnovate.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
@Component({
  selector: 'app-pricingheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    PricingadaptComponent,
    PricingdecisionchecklistComponent,
    PricingfoodforthoughtComponent,
    PricingreportComponent,
    PricingsynopsisComponent,
    PricingintroductionComponent,
    PricingmarketComponent,
    PricinginitiateComponent,
    PricinginnovateComponent,
    ReadingComponent,
    MicrosimleaderboardgeneralComponent,
    ForumcourseComponent,
    ForumindividualComponent
  ],
  templateUrl: './pricingheader.component.html',
  styleUrls: ['./pricingheader.component.scss']
})
export class PricingheaderComponent extends AbstractComponent {
  gametitle = "Pricing"
  isShow: boolean = true;
  isShow3: boolean = false;
  pricinggamecmsgame: boolean = false;
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
  phase2tabDisabled: boolean = true;
  phase3tabDisabled: boolean = true;

 
 

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

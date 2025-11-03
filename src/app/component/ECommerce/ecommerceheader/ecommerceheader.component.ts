import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { EcommercecatalogComponent } from '../ecommercecatalog/ecommercecatalog.component';
import { EcommercemarketingComponent } from '../ecommercemarketing/ecommercemarketing.component';
import { EcommerceexperienceComponent } from '../ecommerceexperience/ecommerceexperience.component';
import { EcommercefoodforthoughtComponent } from '../ecommercefoodforthought/ecommercefoodforthought.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { EcommercedecisionchecklistComponent } from '../ecommercedecisionchecklist/ecommercedecisionchecklist.component';
import { EcommercereportComponent } from '../ecommercereport/ecommercereport.component';
import { EcommercesynopsisComponent } from '../ecommercesynopsis/ecommercesynopsis.component';
import { EcommerceoperationsComponent } from '../ecommerceoperations/ecommerceoperations.component';
import { EcommercemarketComponent } from '../ecommercemarket/ecommercemarket.component';
import { EcommerceintroductionComponent } from '../ecommerceintroduction/ecommerceintroduction.component';

@Component({
  selector: 'app-ecommerceheader',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,
    EcommercecatalogComponent,
    EcommerceexperienceComponent,
    EcommercemarketingComponent,
    EcommercefoodforthoughtComponent,
    ReadingComponent,
    MicrosimleaderboardgeneralComponent,
    ForumindividualComponent,
    ForumcourseComponent,
    EcommercedecisionchecklistComponent,
    EcommercereportComponent,
    EcommercesynopsisComponent,
    EcommerceoperationsComponent,
    EcommerceintroductionComponent,
    EcommercemarketComponent,
    ReadingComponent,
    MicrosimleaderboardgeneralComponent,
    ForumcourseComponent,
    ForumindividualComponent

    
  ],
  templateUrl: './ecommerceheader.component.html',
  styleUrls: ['./ecommerceheader.component.scss']
})
export class EcommerceheaderComponent extends AbstractComponent {
  gametitle = "Ecommerce";
  isShow: boolean = true;
  isShow3: boolean = false;
  hrpgame: boolean = false;
  animal: string = '';
  name: string = '';
  gamenamesub: Subscription;
  gamename: string = '';
  // checkStatus: string = '';
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
    if (this.gamename == 'Ecommerce') {
      this.hrpgame = true;
    }
    console.log("noof",this.noofattempt)
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

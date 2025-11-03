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
import { ReadingComponent } from 'src/app/common/reading/reading.component';
import { OrderingbasicsdecisionchecklistComponent } from '../orderingbasicsdecisionchecklist/orderingbasicsdecisionchecklist.component';
import { OrderingbasicsreportComponent } from '../orderingbasicsreport/orderingbasicsreport.component';
import { OrderingbasicsintroductionComponent } from '../orderingbasicsintroduction/orderingbasicsintroduction.component';
import { OrderingbasicsfoodforthoughtComponent } from '../orderingbasicsfoodforthought/orderingbasicsfoodforthought.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { OrderingbasicsmarketComponent } from '../orderingbasicsmarket/orderingbasicsmarket.component';

@Component({
  selector: 'app-orderingbasicsheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    OrderingbasicsdecisionchecklistComponent,
    OrderingbasicsreportComponent,
    OrderingbasicsintroductionComponent,
    OrderingbasicsmarketComponent,
    OrderingbasicsfoodforthoughtComponent,
   ReadingComponent,
   ForumindividualComponent,
   ForumcourseComponent,
   MicrosimleaderboardgeneralComponent
  ],
  templateUrl: './orderingbasicsheader.component.html',
  styleUrls: ['./orderingbasicsheader.component.scss']
})
export class OrderingbasicsheaderComponent extends AbstractComponent {
  gametitle = "Ordering Basics";
  Orderinginventory: boolean = false;
  gamenamesub: Subscription;
  gamename: string = '';
  tabDisabled: boolean = true;
  mainTab = 'gamearena';
  activeTab = 'introduction';
  forumTab = 'individual';
  market: boolean = false;
  toolbartabsub: Subscription;
  toolbartab: string = '';
  checkStatus: string = '';
  phase2tabDisabled: boolean = true;
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

  getTableData(tab: string) {
    let apiname = '/orderinggame/fetchorderinggame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.checkStatus = data.resultList[0].ap18
              if (data.resultList[0].ap18 != 'yes') {
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

}

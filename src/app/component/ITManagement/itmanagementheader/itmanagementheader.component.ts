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
import { ItmanagementinnovationComponent } from '../itmanagementinnovation/itmanagementinnovation.component';
import { ItmanagementreportComponent } from '../itmanagementreport/itmanagementreport.component';
import { ItmanagementfoodforthoughtComponent } from '../itmanagementfoodforthought/itmanagementfoodforthought.component';
import { ItmanagementdecisionchecklistComponent } from '../itmanagementdecisionchecklist/itmanagementdecisionchecklist.component';
import { ItmanagementintroductionComponent } from '../itmanagementintroduction/itmanagementintroduction.component';
import { ItmanagementmarketComponent } from '../itmanagementmarket/itmanagementmarket.component';
import { ItmanagementsystemarchitectureComponent } from '../itmanagementsystemarchitecture/itmanagementsystemarchitecture.component';
import { ItmanagementsoftwaredevelopmentComponent } from '../itmanagementsoftwaredevelopment/itmanagementsoftwaredevelopment.component';
import { ItmanagementsecurityComponent } from '../itmanagementsecurity/itmanagementsecurity.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';

@Component({
  selector: 'app-itmanagementheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    ItmanagementinnovationComponent,
    ItmanagementfoodforthoughtComponent,
    ItmanagementreportComponent,
    ItmanagementdecisionchecklistComponent,
    ItmanagementintroductionComponent,
    ItmanagementmarketComponent,
    ItmanagementsystemarchitectureComponent,
    ItmanagementsoftwaredevelopmentComponent,
    ItmanagementsecurityComponent,
    ReadingComponent,
    MicrosimleaderboardgeneralComponent,
    ForumindividualComponent,
    ForumcourseComponent,
    
  ],
  templateUrl: './itmanagementheader.component.html',
  styleUrls: ['./itmanagementheader.component.scss']
})
export class ItmanagementheaderComponent extends AbstractComponent {
  gametitle = "IT Management";
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
    if (this.gamename == 'IT Management') {
      this.hrpgame = true;
    }
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
    //it will committed......
    this.tabDisabled = false;

  }
 
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  getTableData(tab: string) {
    let apiname = '/itmanagement/fetchitmanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.checkStatus = data.resultList[0].itmanagementdata.af96;
              if (data.resultList[0].itmanagementdata.af96 != 'yes') {
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

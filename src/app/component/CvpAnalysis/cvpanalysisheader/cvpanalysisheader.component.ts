import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CvpanalysisfoodforthoughtComponent } from '../cvpanalysisfoodforthought/cvpanalysisfoodforthought.component';
import { CvpanalysisintroductionComponent } from '../cvpanalysisintroduction/cvpanalysisintroduction.component';
import { CvpanalysismarketComponent } from '../cvpanalysismarket/cvpanalysismarket.component';
import { CvpanalysismarketingComponent } from '../cvpanalysismarketing/cvpanalysismarketing.component';
import { CvpanalysisproductionComponent } from '../cvpanalysisproduction/cvpanalysisproduction.component';
import { CvpanalysisdecisionchecklistComponent } from '../cvpanalysisdecisionchecklist/cvpanalysisdecisionchecklist.component';
import { CvpanalysisdecisionreportComponent } from '../cvpanalysisdecisionreport/cvpanalysisdecisionreport.component';
import { CvpanalysisdecisionsynopsisComponent } from '../cvpanalysisdecisionsynopsis/cvpanalysisdecisionsynopsis.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';

@Component({
  selector: 'app-cvpanalysisheader',
  standalone: true,
  imports: [CommonModule,
    CvpanalysisintroductionComponent,
    CvpanalysismarketComponent,
    CvpanalysismarketingComponent,
    CvpanalysisproductionComponent,
    CvpanalysisdecisionchecklistComponent,
    CvpanalysisdecisionreportComponent,
    CvpanalysisdecisionsynopsisComponent,
    CvpanalysisfoodforthoughtComponent,   
    ReadingComponent,
    MicrosimleaderboardgeneralComponent,
    MatDialogModule,
    ForumcourseComponent,
    ForumindividualComponent,  
  ],
  templateUrl: './cvpanalysisheader.component.html',
  styleUrls: ['./cvpanalysisheader.component.scss']
})
export class CvpanalysisheaderComponent extends AbstractComponent {
  gametitle = "CVP Analysis";
  isShow: boolean = true;
  isShow3: boolean = false;
  cvpanalysissgame: boolean = false;
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
    if (this.gamename == 'Cvp Analysis') {
      this.cvpanalysissgame = true;
    }
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
   
  }
 
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  getTableData(tab: string) {
    let apiname = '/cvpanalysis/fetchcvpanalysis';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.checkStatus = data.resultList[0].ai8
              if (data.resultList[0].ai8 != 'yes') {
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
    const dialogRef = this.dialog.open(CvpanalysisfoodforthoughtComponent, {
      data: { name: "Cesim" },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}

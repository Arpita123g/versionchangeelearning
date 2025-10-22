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

@Component({
  selector: 'app-innovationheader',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule],
  templateUrl: './innovationheader.component.html',
  styleUrls: ['./innovationheader.component.scss']
})
export class InnovationheaderComponent extends AbstractComponent {
  gametitle = "HRP";
  isShow: boolean = true;
  isShow3: boolean = false;
  innovation: boolean = false;
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
    if(this.noofattempt != "1") {
      this.tabDisabled = false;
    }
    //it will committed....
    // this.tabDisabled = false;
  }
 
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  getTableData(tab: string) {
    let apiname = '/innovationgame/fetchinnovationgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.checkStatus = data.resultList[0].ae89
              if (data.resultList[0].ae89 != 'yes') {
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

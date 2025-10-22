import { Component, OnInit } from '@angular/core';
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
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hrmfintech-header',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule ,MatIconModule],
  templateUrl: './hrmfintech-header.component.html',
  styleUrls: ['./hrmfintech-header.component.scss']
})
export class HrmfintechHeaderComponent extends AbstractComponent {
  gametitle: string = 'HRM_Fintech'
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
    private sharedservice: SharedserviceService,) {
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
    //in hrm game report section always enabled
    this.tabDisabled = false;
    
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

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

@Component({
  selector: 'app-changemanagementnewheader',
  standalone: true,
  imports: [CommonModule],
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

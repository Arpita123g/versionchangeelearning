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
@Component({
  selector: 'app-logisticsmodegame-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logisticsmodegame-header.component.html',
  styleUrls: ['./logisticsmodegame-header.component.scss']
})
export class LogisticsmodegameHeaderComponent extends AbstractComponent {
  gametitle:string = "logistics";
  activeTab: string = 'introduction';
  tabDisabled: boolean = false;
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
  }
  override ngOnInit(): void {
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
   
  }

  next(event: string) {
    this.tab(event);
  }

  tabclick(tabname: string) {
    this.tabname = tabname;
  }
  tab(activeTab: any) {
    this.activeTab = activeTab;
}


}

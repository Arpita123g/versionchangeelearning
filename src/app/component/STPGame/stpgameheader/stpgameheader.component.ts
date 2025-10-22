import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
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
  selector: 'app-stpgameheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './stpgameheader.component.html',
  styleUrls: ['./stpgameheader.component.scss']
})
export class StpgameheaderComponent extends AbstractComponent {
  gametitle = "STP";
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
  phase2tabDisabled: boolean = true;
  phase3tabDisabled: boolean = true;

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
    // it will commited.....
    // this.tabDisabled = false;
    // this.phase2tabDisabled = false;
    // this.phase3tabDisabled = false;
    
  }
 
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  next(event: string) {
    this.search(event);
  }
  
  forum(forumTab: any) {
    this.forumTab = forumTab;
  }


}

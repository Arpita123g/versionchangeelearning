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
  selector: 'app-crmgameheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crmgameheader.component.html',
  styleUrls: ['./crmgameheader.component.scss']
})
export class CrmgameheaderComponent extends AbstractComponent {
  gametitle = "CRM";
  crmgame: boolean = false;
  gamenamesub: Subscription;
  gamename: string = '';
  tabDisabled: boolean = true;
  mainTab = 'gamearena';
  activeTab = 'introduction';
  forumTab = 'individual';
  market: boolean = false;
  toolbartabsub: Subscription;
  toolbartab: string = '';
  languagesub:Subscription;
  language: string = '';
  headingarray: any = ["Introduction","Market","Information","Lead","Communication","Process","Decision Checklist","Report","Synopsis"];

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

    this.languagesub = this._global.language.subscribe((data) => {
      this.language = data;
      this.language = this.language.toLowerCase();
      if (this.language == 'hindi') {
        this.headingarray=["परिचय", "बाजार", "जानकारी", "लीड","संचार","प्रक्रिया","निर्णय चेकलिस्ट","रिपोर्ट्स","संक्षेपण"];
      }
    });
  }

 

  override ngOnInit(): void {
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
    // this.tabDisabled = false;
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

}

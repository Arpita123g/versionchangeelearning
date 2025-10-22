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
import { FinancialanalysisnewfoodforthoughtComponent } from '../financialanalysisnewfoodforthought/financialanalysisnewfoodforthought.component';

@Component({
  selector: 'app-financialanalysisnewheader',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule],
  templateUrl: './financialanalysisnewheader.component.html',
  styleUrls: ['./financialanalysisnewheader.component.scss']
})
export class FinancialanalysisnewheaderComponent extends AbstractComponent {
  gametitle:string = "Financial";
  isShow: boolean = true;
  isShow3: boolean = false;
  businessbasicsgame: boolean = false;
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
  toolbartab: String = "";
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private sharedservice: SharedserviceService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.gamenamesub = this._global.gamename.subscribe((data) => {
      this.gamename = data;
    });

    this.sharedservice.tabEnabled$.subscribe((enabled) => {
      this.tabDisabled = enabled;
    });
    this.toolbartabsub = this._global.toolbartab.subscribe((data) => {
      this.toolbartab = data;
    });
  }

 
  next(event: string) {
    this.search(event);
  }
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  override ngOnInit(): void {
    
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
   
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

 
  openDialog(): void {
    const dialogRef = this.dialog.open(FinancialanalysisnewfoodforthoughtComponent, {
      data: { name: "Cesim" },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

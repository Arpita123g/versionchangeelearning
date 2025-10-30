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
import { SalestargetfoodforthoughtComponent } from '../salestargetfoodforthought/salestargetfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalestargetdecisionchecklistComponent } from '../salestargetdecisionchecklist/salestargetdecisionchecklist.component';
import { SalestargetreportComponent } from '../salestargetreport/salestargetreport.component';
import { SalestargetsynopsisComponent } from '../salestargetsynopsis/salestargetsynopsis.component';
import { SalestargetsalesplanningComponent } from '../salestargetsalesplanning/salestargetsalesplanning.component';
import { SalestargetsalescompositionComponent } from '../salestargetsalescomposition/salestargetsalescomposition.component';
import { SalestargetsalesdevelopmentComponent } from '../salestargetsalesdevelopment/salestargetsalesdevelopment.component';
import { SalestargetmarketComponent } from '../salestargetmarket/salestargetmarket.component';
import { SalestargetinformationsearchComponent } from '../salestargetinformationsearch/salestargetinformationsearch.component';
import { SalestargetintroductionComponent } from '../salestargetintroduction/salestargetintroduction.component';
import { MicrosimleaderboardgeneralComponent } from 'src/app/common/microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { ForumcourseComponent } from 'src/app/common/forumcourse/forumcourse.component';
import { ForumindividualComponent } from 'src/app/common/forumindividual/forumindividual.component';
import { ReadingComponent } from 'src/app/common/reading/reading.component';

@Component({
  selector: 'app-salestargetheader',
  standalone: true,
  imports: [CommonModule, FormsModule,
    SalestargetinformationsearchComponent,
    SalestargetintroductionComponent,
    SalestargetmarketComponent,
    SalestargetsalesplanningComponent,
    SalestargetsalescompositionComponent,
    SalestargetsalesdevelopmentComponent,
    SalestargetdecisionchecklistComponent,
    SalestargetreportComponent,
    SalestargetsynopsisComponent,
    SalestargetfoodforthoughtComponent,
    MicrosimleaderboardgeneralComponent,
    ForumcourseComponent,
    ForumindividualComponent,
    ReadingComponent
  ],
  templateUrl: './salestargetheader.component.html',
  styleUrls: ['./salestargetheader.component.scss']
})
export class SalestargetheaderComponent extends AbstractComponent {
  gametitle:string = 'Sales & Target'
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
   
    if (this.noofattempt != "1") {
      this.tabDisabled = false;
    }
   
  }


  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  getTableData(tab: string) {
    let apiname = '/salestarget/fetchsalestarget';
    this._api.salesfetchdata(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.checkStatus = data.resultList[0].bb7
              if (data.resultList[0].bb7 != 'yes') {
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
    const dialogRef = this.dialog.open(SalestargetfoodforthoughtComponent, {
      data: { name: "Cesim" },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

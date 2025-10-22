import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { HrmfintechFoodforthoughtComponent } from '../hrmfintech-foodforthought/hrmfintech-foodforthought.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hrmfintech-introduction',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,MatIconModule],
  templateUrl: './hrmfintech-introduction.component.html',
  styleUrls: ['./hrmfintech-introduction.component.scss']
})
export class HrmfintechIntroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,
    ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/hrmgame/fetchhrmgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            if ((data.resultList[0].decisions.d417 == 'yes')) {
              this.Sharedservice.enableTab();
            }
           if (data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }
             
          }
        }
        this.checkloading = false;
      }, error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    })
  }

  textLines: string[] = [
    "Analyze internal and external factors to understand the market scenario. Use the provided parameters to guide your strategic decisions.",
    "Choose your hiring strategy by selecting channels, determining the number of hires or Retrenchment, and considering outsourcing options.",
    "Design your workforce strategy by setting compensation, bonus policies, training, and leadership programs, and managing various organizational policies.",
    "Decide on automation tools and analyze the projected costs to optimize organizational efficiency and budget allocation.",
    "Tackle real-world conflicts by analyzing the situation and selecting the best resolution strategies to maintain a harmonious workplace.",
    "Review feedback on your performance across different metrics to refine your strategies and improve results in the next round."
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/hrmfintech/hrmfintechmarket.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Talent Acquisition', image: '.../../../../assets/images/hrmfintech/hrmfintechtalentacquisition.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Talent Management', image: '../../../../assets/images/hrmfintech/hrmfintechtalentmanagement.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Organization & Budget', image: '../../../../assets/images/hrmfintech/hrmfintechorganization.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Conflict', image: '../../../../assets/images/hrmfintech/hrmfintechconflict.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/hrmfintech/hrmfintechreport.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ]


  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(HrmfintechFoodforthoughtComponent, {
      data: {},
    });


  }

}

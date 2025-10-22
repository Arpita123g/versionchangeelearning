import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { PromotionsigmentnewfoodforthoughtComponent } from '../promotionsigmentnewfoodforthought/promotionsigmentnewfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-promotionsigmentnewintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './promotionsigmentnewintroduction.component.html',
  styleUrls: ['./promotionsigmentnewintroduction.component.scss']
})
export class PromotionsigmentnewintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }
  override ngOnInit(): void {
    this.getFetchData();
  }

  textLines: string[] = [
    "Start with gathering crucial information to assess current trends, consumer behavior, and competitor strategies, setting the foundation for informed decision - making in the promotion game.",
    "Compile a comprehensive market research document, consolidating insights from the first stage to strategically position the product and tailor promotional efforts for maximum impact.",
    "Allocate budgets across diverse communication channels within advertising, social media, and events, ensuring a balanced and effective promotion mix to reach your target audience.",
    "Execute your promotion strategies by launching campaigns across selected mix. From compelling content to coordinating timing, this stage focuses on the tactical implementation of the promotion plan for optimal audience engagement.",
    "Make critical decisions regarding margins associated with each communication channel. Striking a balance between channel effectiveness and profitability, participants aim to maximize returns on investment and enhance overall campaign success.",
    "Analyze performance metrics and feedback from launched campaigns, generating comprehensive reports. This stage provides valuable insights into the effectiveness of promotional efforts, allowing for adjustments and improvements in future marketing strategies.",
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  
  cards = [
    { title: 'Market', image: '../../../../assets/images/promotionsigment/promarket.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Market Research', image: '.../../../../assets/images/promotionsigment/promarketresearch.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Communication Mix', image: '../../../../assets/images/promotionsigment/procommunication.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Campaigns', image: '../../../../assets/images/promotionsigment/procampaigns.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Channels', image: '../../../../assets/images/promotionsigment/prochannel.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/promotionsigment/proreport.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ];

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  getFetchData() {
    let apiname = '/promotions/fetchpromotions';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].z20 == 'yes') || (data.resultList[0].z20 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].promotionsCM.promotionsCMActiveStatus.foodforthoughtstatus == 'inactive') {
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

  openDialog(): void {
    this.dialog.open(PromotionsigmentnewfoodforthoughtComponent, {
      data: {},
    });


  }
}

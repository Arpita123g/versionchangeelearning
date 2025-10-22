import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { OrderingbasicsfoodforthoughtComponent } from '../orderingbasicsfoodforthought/orderingbasicsfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-orderingbasicsintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './orderingbasicsintroduction.component.html',
  styleUrls: ['./orderingbasicsintroduction.component.scss']
})
export class OrderingbasicsintroductionComponent extends AbstractComponent {
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

  getFetchData() {
    let apiname = '/orderingbasics/fetchorderingbasics';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {

              if ((data.resultList[0].ap20 == 'Yes') || (data.resultList[0].ap20 == 'yes')) {
                this.Sharedservice.phase2enableTab();
              } else {
                this.Sharedservice.phase2disableTab();
              }
              if ((data.resultList[0].ap18 == 'yes') || (data.resultList[0].ap18 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].orderingBasicsCM.orderingBasicsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
            }
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  textLines: string[] = [
    "In this section, you'll step into the role of managing inventory and orders within a company. Your responsibility is to ensure the smooth flow of products, balancing supply with demand, and making strategic decisions to optimize the company's performance.",
    "Analyze the upcoming year's economic conditions and demand trends. Using provided data like sales history and costs, you'll decide how much inventory to order and at what reorder point to ensure efficient supply.",
    "Build on Phase 1 by reassessing the economic outlook and demand trends. You'll adjust your inventory decisions based on updated data and insights gained from Phase 1, refining your strategies for optimal performance.",
    "Receive detailed feedback on your decisions. This feedback will include metrics such as the cost of back orders, opportunities missed due to stockouts, and your service level - which indicates how well you're meeting customer demand. Analyzing these reports will help you identify areas for improvement and adjust your strategies.",

  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false,];

  cards = [
    { title: 'Market', image: '../../../../assets/images/orderinggame/orderingintroductionmarket.jpg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Phase 1', image: '.../../../../assets/images/orderinggame/orderphase1introduction.jpg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Phase 2', image: '../../../../assets/images/orderinggame/orderingphase2introduction.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/orderinggame/orderintroreports.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },

  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(OrderingbasicsfoodforthoughtComponent, {
      data: {},
    });
  }

}

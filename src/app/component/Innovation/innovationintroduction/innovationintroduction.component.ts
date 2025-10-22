import { Component } from '@angular/core';
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
import { InnovationfoodforthoughtComponent } from '../innovationfoodforthought/innovationfoodforthought.component';

@Component({
  selector: 'app-innovationintroduction',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule],
  templateUrl: './innovationintroduction.component.html',
  styleUrls: ['./innovationintroduction.component.scss']
})
export class InnovationintroductionComponent extends AbstractComponent {
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
    let apiname = '/innovationgame/fetchinnovationgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].ae89 == 'yes') || (data.resultList[0].ae89 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].innovationGameCM.innovationGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              
            }
          }
          this.checkloading = false

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  textLines: string[] = [
    "You'll explore economic trends and industry roles. Along with analysing parameters such as capital availability to gauge financial standing and strategize accordingly.",
    "Determine the product to develop and launch, adhering to various parameters and regulations. Your choices here will define your product's success in the market.",
    "Manage manpower, technology development, and feature prioritization. Your decisions will impact product development timelines, quality, and competitiveness.",
    "Craft a comprehensive marketing strategy using the 4 P's: Product, Price, Place, and Promotion. Your strategy will influence brand visibility, customer engagement, and sales.",
    "Explore opportunities to collaborate with established players and invest in continuous improvements. Your decisions here will impact strategic partnerships and product innovation.",
    "Receive a comprehensive report detailing your performance and key takeaways from your decisions throughout the simulation. Reflect on your strategic choices and outcomes, considering areas of success and opportunities for improvement. ",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/innovation/introductionmarket.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Product & Compliance', image: '.../../../../assets/images/innovation/introductionproductcompilance.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Resources', image: '../../../../assets/images/innovation/introductionresourece.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Marketing', image: '../../../../assets/images/innovation/introductionmarketing.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Collaboration & Tech', image: '../../../../assets/images/innovation/introductioncollabrationtech.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/innovation/introductionreport.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },

  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(InnovationfoodforthoughtComponent, {
      data: {},
    });
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AccountingingfoodforthoughtComponent } from '../accountingingfoodforthought/accountingingfoodforthought.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-accountinginginformation',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatIconModule],
  templateUrl: './accountinginginformation.component.html',
  styleUrls: ['./accountinginginformation.component.scss']
})
export class AccountinginginformationComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  periodcellname: any;
  databasecellname: any;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  cardData1 = [
    {
      id: 'card1',
      title: 'q16',
      description: 'By investing in R&D, the company can develop new products and technologies, opening up new revenue streams and ensuring long-term sustainability. Benefit: Increase in intangible assets by Rs. 100,000 per annum. Long - term Impact: Increases intangible assets, such as patents and intellectual property, improving company valuation.',
      turncatedtext: ""
    },
    {
      id: 'card2',
      title: 'q17',
      description: 'Implementing GPS positioning on trucks allows for strategic stoppages at intermediate points, aiding in small deliveries. While routes and stoppages may increase the risk of theft and damage, GPS technology helps identify these areas and provides analytics to enhance driving skills. This results in a 15% reduction in damages and theft, alongside a 9% increase in efficiency, with added benefits for fuel efficiency.',
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'q18',
      description: "The use of RFID chips on goods offers a smart solution to curb package theft. When tampered with, the RFID is triggered, generating an alert. This proactive measure reduces theft by 7%. However, it's essential to be aware of the potential for duplicate RFID creation.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'q19',
      description: "Addressing issues like fake receipts and fuel theft at stoppages, the fuel trackometer employs sensors to prevent such theft, resulting in a 6% reduction. This not only safeguards against fuel-related fraud but also contributes to vehicle health and a 1% improvement in fuel efficiency.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'q20',
      description: "A crucial aspect of logistics is the lack of visibility regarding Turn Around Time (TAT). To rectify this, a TAT visibility system is employed, enabling accurate tracking of packages and optimizing costs by 15%. This system also aids in last-mile delivery, enhances fuel efficiency, and improves forecasting.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: 'q21',
      description: "An all-encompassing ERP for logistics, the Transportation Management System handles everything from loading materials to tracking goods in one centralized platform. It's a comprehensive solution that optimizes costs, reduces theft, streamlines routes, and stores data for future analysis and reference. This results in a substantial 20% cost optimization.",
      turncatedtext: "",
    },
  ];

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/accountinggame/fetchaccountinggame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].accountinggamecmid);
              if (data.resultList[0].accountingGameCM.accountingGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].accountingGameCM[this.periodcellname[i]]

              }
              for (let i = 36; i < 45; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 36]]

              }
              for (let i = 39; i < 45; i++) {
                if (this.result[i] == "1") {
                  this.result[i] = true;
                  this.technologycheckbox = this.technologycheckbox + 1;
                } else {
                  this.result[i] = false;

                }
              }
              if (this.technologycheckbox == 2) {
                for (let j = 39; j < 45; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 39] = false;
                  } else {
                    this.disabled[j - 39] = true;
                  }
                }
              }


              if ((data.resultList[0].ag8 == 'Yes') || (data.resultList[0].ag8 == 'yes')) {
                this.checkdisable = true;
              }
              // for (let i = 0; i < this.cardData1.length; i++) {
              //   this.cardData1[i].title = String(data.resultList[0].logisticsCM[this.cardData1[i].title])

              //   this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
              // }

            }
            this.checkloading = false;
          } else {
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);

        }
      })
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(AccountingingfoodforthoughtComponent, {
      data: {},
    });
  }

}

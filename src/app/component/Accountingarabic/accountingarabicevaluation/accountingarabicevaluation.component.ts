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
import { AccountingArabicfoodforthoughtComponent } from '../accountingarabicfoodforthought/accountingarabicfoodforthought.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-accountingarabicevaluation',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatIconModule],
  templateUrl: './accountingarabicevaluation.component.html',
  styleUrls: ['./accountingarabicevaluation.component.scss']
})
export class AccountingarabicevaluationComponent extends AbstractComponent {
  foodforthought: boolean = true;
  optionalcase: any = ["balancesheetstatus", "incomestatementstatus", "cashflowstatus", "foodforthoughtstatus",];
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  attempt:number=0;

  periodcellname: any = ['j7', 'm7', 'j8', 'm8', 'j9', 'm9', 'j10', 'm10',
    'j11', 'm11', 'j12', 'm12', 'j13', 'm13', 'j14', 'm14', 'j15', 'm15',
  ];
  databasecellname: any = ['b25', 'b26', 'b27', 'b28', 'b29', 'b30', 'b31', 'b32', 'b33'];

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

  // for arabic.....
//it will be uncommented(Arpita)
  // optional: any[] = [];

  //getting success api call this line will be removed(Arpita)
  optional: any[] = [true,true,true,true];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/accountingarabic/fetchaccountingarabic';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.attempt=data.resultList[0].attempt;
              this._global.casemanagementid.next(data.resultList[0].accountingarabiccmid);
              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].accountingArabicCM.accountingArabicCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {

                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].accountingArabicCM[this.periodcellname[i]]

              }
              for (let i = 18; i < 27; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 18]]

              }
              


              if ((data.resultList[0].ag8 == 'Yes') || (data.resultList[0].ag8 == 'yes')|| (this.timefinished)) {
                this.checkdisable = true;
              }

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

  getSelection(inputField: string, index: number) {
    if (inputField == 'balancesheet') {
      this.result[index] = 1;

      for (let i = 18; i < 21; i++) {
        if (i !== index) {
          this.result[i] = 0;
        }
      }
    } else if (inputField == 'incomestatement') {

      this.result[index] = 1;

      for (let i = 21; i < 24; i++) {
        if (i !== index) {
          this.result[i] = 0;
        }
      }
    } else if (inputField == 'cashflow') {

      this.result[index] = 1;

      for (let i = 24; i < 27; i++) {
        if (i !== index) {
          this.result[i] = 0;
        }
      }
    }
    for (let i = 18; i < 27; i++) {
      if (this.result[i] == undefined) {
        this.result = 0;
      }
    }



    this.writeevaluation();
  }

  writeevaluation(){
    let apiname = '/accountingarabic/singleinputaccountingarabic';
    let body = {
      "b25":this.result[18],
      "b26":this.result[19],
      "b27":this.result[20],
      "b28":this.result[21],
      "b29":this.result[22],
      "b30":this.result[23],
      "b31":this.result[24],
      "b32":this.result[25],
      "b33":this.result[26],

    }
    this._api.accountingDataWrite("accountingarabic", 1,
      body, apiname, 'accountingarabiccmid').subscribe((data: any) => {
        if (data.status == "Success") {
          // this.getFetchData();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(AccountingArabicfoodforthoughtComponent, {
      data: {},
    });
  }

}

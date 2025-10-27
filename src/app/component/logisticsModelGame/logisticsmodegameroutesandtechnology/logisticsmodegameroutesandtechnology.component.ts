import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { LogisticsmodegamefoodforthoughtComponent } from '../logisticsmodegamefoodforthought/logisticsmodegamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';



@Component({
  selector: 'app-logisticsmodegameroutesandtechnology',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],
  templateUrl: './logisticsmodegameroutesandtechnology.component.html',
  styleUrls: ['./logisticsmodegameroutesandtechnology.component.scss']
})
export class LogisticsmodegameroutesandtechnologyComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];


  periodcellname: any = ['q8', 'q9', 'q10',
    'r8', 'y8', 'z8', 'u8', 'ab8', 'aa8', 'w8', 'x8', 'r12',
    'r9', 'y9', 'z9', 'u9', 'ab9', 'aa9', 'w9', 'x9', 'r12',
    'r10', 'y10', 'z10', 'u10', 'ab10', 'aa10', 'w10', 'x10', 'r12',
    's16', 's17', 's18', 's19', 's20', 's21']
  databasecellname: any = ['at25', 'at26', 'at27', 'at29', 'at30', 'at31', 'at32', 'at33', 'at34']


  cardData1 = [
    {
      id: 'card1',
      title: 'q16',
      description: 'Monitoring the mental well-being of truck drivers is a vital aspect of fleet management. This system provides insights into driver behavior, reducing instances of rash driving, avoiding damages, and improving driver efficiency by 12%. It also cuts fragility costs by 9% and enhances fuel efficiency by 1%.',
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

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);


  }

  override ngOnInit(): void {
    this.getFetchData();
  }




  getFetchData() {
    let apiname = '/logistics/fetchlogistics';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].logisticscmid);
              if (data.resultList[0].logisticsCM.logisticsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].logisticsCM[this.periodcellname[i]]

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


              if ((data.resultList[0].aw53 == 'Yes')||(data.resultList[0].aw53 == 'yes')|| (this.timefinished)) {
                this.checkdisable = true;
              }
              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title = String(data.resultList[0].logisticsCM[this.cardData1[i].title])

                this.cardData1[i].turncatedtext = this.cardData1[i].description.substring(0, 100) + (this.cardData1[i].description.length > 100 ? '...' : '');
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
    if (inputField == 'location') {
      this.result[index] = 1;

      for (let i = 36; i < 39; i++) {
        if (i !== index) {
          this.result[i] = 0;
        }
      }
    } else if (inputField == 'technology') {
      if (this.result[index] == true) {
        this.technologycheckbox = this.technologycheckbox + 1;
        if (this.technologycheckbox == 2) {
          for (let j = 39; j < 45; j++) {
            if (this.result[j] == true) {
              this.disabled[j - 39] = false;
            } else {
              this.disabled[j - 39] = true;
            }
          }

        }
      } else {
        this.technologycheckbox = this.technologycheckbox - 1;
        if (this.technologycheckbox == 1) {
          for (let j = 0; j < 7; j++) {
            this.disabled[j] = false;
          }
        }
      }

    }




    this.writeRoutesandTechnology();
  }





  writeRoutesandTechnology() {
    let apiname = '/logistics/singleinputlogistics';
    let routesandtechnologyData = {
      "at25": this.result[36],
      "at26": this.result[37],
      "at27": this.result[38],
      "at29": this.result[39] == true ? '1' : '0',
      "at30": this.result[40] == true ? '1' : '0',
      "at31": this.result[41] == true ? '1' : '0',
      "at32": this.result[42] == true ? '1' : '0',
      "at33": this.result[43] == true ? '1' : '0',
      "at34": this.result[44] == true ? '1' : '0',


    }
    this._api.logisticsDataWrite("logistics", 3,
      routesandtechnologyData, apiname, 'logisticscmid').subscribe((data: any) => {
        if (data.status != "Success") {
          this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }



  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(LogisticsmodegamefoodforthoughtComponent, {
      data: {},
    });
  }
}
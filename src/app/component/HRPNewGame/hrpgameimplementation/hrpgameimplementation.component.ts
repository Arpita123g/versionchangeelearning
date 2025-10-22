import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { HrpgamefoodforthoughtComponent } from '../hrpgamefoodforthought/hrpgamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

@Component({
  selector: 'app-hrpgameimplementation',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './hrpgameimplementation.component.html',
  styleUrls: ['./hrpgameimplementation.component.scss']
})
export class HrpgameimplementationComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  trainingprioritiescheckbox: number = 0;
  language: any = [];
  languageid: number = 0;

  images = [
    'digitalmarketingmastery.svg',
    'advanceecommerceanalytic.svg',
    'augmentedrealityinfasioninecommerce.jpg',
    'customerserviceexcillence.svg',
    'sustanableandethicalproduction.svg',
    'remoteworkflexible.svg',
    'continuelearninganddevlopment.svg',
    'healthandwalnesspolicy.svg',
    'diversehiringpolicy.svg'
  ];


  cardData1 = [
    {
      id: 'card1',
      title: 'b59',
      description: 'b83',
      turncatedtext: ""
    },
    {
      id: 'card2',
      title: 'b60',
      description: 'b84',
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'b61',
      description: "b85",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'b62',
      description: "b86",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'b63',
      description: "b87",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: 'b67',
      description: "b94",
      turncatedtext: "",
    },
    {
      id: 'card7',
      title: 'b68',
      description: "b95",
      turncatedtext: "",
    },
    {
      id: 'card8',
      title: 'b69',
      description: "b96",
      turncatedtext: "",
    },
    {
      id: 'card9',
      title: 'b70',
      description: "b97",
      turncatedtext: "",
    },
  ];

  databasecellname: any = ['b59', 'b60', 'b61', 'b62', 'b63', 'b67', 'b68', 'b69', 'b70', 'ae29', 'ae30', 'ae31',
    'ae32', 'ae33', 'ae35', 'ae36', 'ae37', 'ae38'];

  periodcellname: any = ['r7', 'r8', 'r9', 'r10', 'r11', 'r14', 'r15', 'r16', 'r17',//8
  ];

  requestVersions: { [key: string]: number } = {};


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/hrplanningnew/fetchhrplanningnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.languageid = data.resultList[0].hrPlanningNewLM.hrplanningnewlmid;
              this.language = data.resultList[0].hrPlanningNewLM[this.languageselect.toLowerCase()];
              this._global.casemanagementid.next(data.resultList[0].hrplanningnewcmid);
              if (data.resultList[0].hrPlanningNewCM.hrPlanningNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].hrPlanningNewCM.hrplanningnewperioddata[this.periodcellname[i]]

              }
              for (let i = 9; i < 27; i++) {
                this.result[i] = data.resultList[0].hrplanningnewdata[this.databasecellname[i - 9]]

              }
              for (let i = 18; i < 27; i++) {
                if (this.result[i] == "1") {
                  this.result[i] = true;
                } else {
                  this.result[i] = false;

                }
              }

              if ((data.resultList[0].ae49 == 'Yes') || (data.resultList[0].hrplanningnewdata.ae49 == 'yes') || (this.timefinished)) {
                this.checkdisable = true;
              }

              // for (let i = 0; i < this.cardData1.length; i++) {
              //   this.cardData1[i].title = String(data.resultList[0].hrPlanningNewCM[this.cardData1[i].title])
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

  getSelection(inputField: string, index: number) {
    this.writeRoutesandTechnology();
  }

  writeRoutesandTechnology() {
    let apiname = '/hrplanningnew/singleinputhrplanningnew';
    let implementedData = {
      "ae29": this.result[18] == true ? '1' : '0',
      "ae30": this.result[19] == true ? '1' : '0',
      "ae31": this.result[20] == true ? '1' : '0',
      "ae32": this.result[21] == true ? '1' : '0',
      "ae33": this.result[22] == true ? '1' : '0',
      "ae35": this.result[23] == true ? '1' : '0',
      "ae36": this.result[24] == true ? '1' : '0',
      "ae37": this.result[25] == true ? '1' : '0',
      "ae38": this.result[26] == true ? '1' : '0',

    }
    this._api.writeLanguageData("hrplanningnew", 3,
      implementedData, apiname, 'hrplanningnewcmid', this.languageselect, this.languageid, 'hrplanningnewlmid').subscribe((data: any) => {
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
    this.dialog.open(HrpgamefoodforthoughtComponent, {
      data: {},
    });
  }

}

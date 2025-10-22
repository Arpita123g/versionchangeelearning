import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CrmgamefoodforthoughtComponent } from '../crmgamefoodforthought/crmgamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-crmgameintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './crmgameintroduction.component.html',
  styleUrls: ['./crmgameintroduction.component.scss']
})
export class CrmgameintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;
  language: any = [];

  translations:any = {
    'show more': {
      en: 'Show More',
      hi: 'और दिखाएं',
      fr: 'Afficher plus'
    },
    'show less': {
      en: 'Show Less',
      hi: 'कम दिखाएं',
      fr: 'Afficher moins'
    }
  };
  
  selectedLang = 'hi'; // or 'en', 'fr', etc.

  
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
    "b8",
    "b9",
    "b10",
    "b11",
    "b12",
    "b13",
  ]
  truncate(text:string){
    return (text.substring(0, 100) + (text.length > 100 ? '...' : ''));
  }
  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'b14', image: '../../../../assets/images/crmgame/crmintromarket.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'b15', image: '.../../../../assets/images/crmgame/crmintroinformation.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'b16', image: '../../../../assets/images/crmgame/crmintroleadmanagement.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'b17', image: '../../../../assets/images/crmgame/crmintrocommunication.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'b18', image: '../../../../assets/images/crmgame/crmintroprocess.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'b19', image: '../../../../assets/images/crmgame/crmintroreport.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },

  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  translate(key: 'show more' | 'show less'): string {
    return this.translations[key][this.selectedLang] || key;
  }

  
  getFetchData() {
    let apiname = '/crmgame/fetchcrmgame';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {

              this.language = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()];
             if ((data.resultList[0].crmgamedata.al96 == 'yes') || (data.resultList[0].crmgamedata.al96 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].crmGameCM.crmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.checkloading = false;
            }else{
              this.checkloading = false;
            }
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  
  openDialog(): void {
    this.dialog.open(CrmgamefoodforthoughtComponent, {
      data: {},
    });
  }

}

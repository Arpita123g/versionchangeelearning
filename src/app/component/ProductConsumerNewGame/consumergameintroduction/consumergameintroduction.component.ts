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
import { FoodforthoughtConsumerComponent } from '../foodforthoughtconsumer/foodforthoughtconsumer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-consumergameintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumergameintroduction.component.html',
  styleUrls: ['./consumergameintroduction.component.scss']
})
export class ConsumergameintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;
  language: any = [];
  bodyContent: any;
  // translations: any = {
  //   'show more': {
  //     en: 'Show More',
  //     hi: 'और दिखाएं',
  //     fr: 'Afficher plus'
  //   },
  //   'show less': {
  //     en: 'Show Less',
  //     hi: 'कम दिखाएं',
  //     fr: 'Afficher moins'
  //   }
  // };

  selectedLang = 'hi'; // or 'en', 'fr', etc.


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  readonly imageBasePath = '../../../../assets/images/consumergame/';
  readonly imageNames = [
    'market.svg',
    'marketinfo.png',
    'target.png',
    'concept.svg',
    'crafting.svg',
    'repot.svg'
  ];

  // cards: any = [];
  override ngOnInit(): void {
    // this.cards = this.imageNames.map((filename, i) => ({
    //   title: `b${8 + i}`,
    //   image: `${this.imageBasePath}${filename}`,
    //   text: this.textLines[i],
    //   truncatedText: this.truncatedText[i],
    //   showAll: this.showAll
    // }));
   
    this.getFetchData();
  }

  // translate(key: 'show more' | 'show less'): string {
  //   return this.translations[key][this.selectedLang] || key;
  // }

  textLines: string[] = [
    "b14",
    "b15",
    "b16",
    "b17",
    "b18",
    "b19",
  ]
  truncate(text: string) {
    return (text?.substring(0, 90) + (text?.length > 90 ? '...' : ''));
  }
  truncatedText: string[] = this.textLines.map((text) => text?.substring(0, 90) + (text?.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'b8', image: '../../../../assets/images/consumergame/market.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'b9', image: '../../../../assets/images/consumergame/marketinfo.png', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'b10', image: '../../../../assets/images/consumergame/target.png', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'b11', image: '../../../../assets/images/consumergame/concept.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'b12', image: '../../../../assets/images/consumergame/crafting.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'b13', image: '../../../../assets/images/consumergame/repot.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },

  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }



  openDialog(): void {
    this.dialog.open(FoodforthoughtConsumerComponent, {
      data: {},
    });
  }

  getFetchData() {
    console.log("second call")
    let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect.toLowerCase()).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.language = data.resultList[0].consumerBehaviourNewLM[this.languageselect.toLowerCase()];

              if ((data.resultList[0].consumerbehaviournewdata.t76).toLowerCase() === 'yes') {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].consumerBehaviourNewCM.consumerBehaviourNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
            }
             this.checkloading = false;
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }
}

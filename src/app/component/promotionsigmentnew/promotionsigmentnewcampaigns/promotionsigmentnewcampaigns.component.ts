import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { PromotionsigmentnewfoodforthoughtComponent } from '../promotionsigmentnewfoodforthought/promotionsigmentnewfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promotionsigmentnewcampaigns',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promotionsigmentnewcampaigns.component.html',
  styleUrls: ['./promotionsigmentnewcampaigns.component.scss']
})
export class PromotionsigmentnewcampaignsComponent extends AbstractComponent {
  foodforthought: boolean = true;
  language: any = [];
  languageid: number = 0;
  textLines: string[] = [
    "b286",
    "b293",
    "b299",
    "b305",
    "b311",
    "b317",
    "b323",
    "b329",
    "b335",
    "b341",
    "b347",
    "b353",
    "b359",
    "b365"
  ];

  truncate(text: string) {
    return (text?.substring(0, 100) + (text?.length > 100 ? '...' : ''));
  }

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[][] = [];
  result: any = [];
  periodresult: any = [];
  disabled: boolean = false;
  createdcasename: string = "";
  databasecellname: any = ['x31', 'x32', 'x33', 'x34', 'x35',
    'x36', 'x37', 'x38', 'x39', 'x40', 'x41', 'x42', 'x43', 'x44']
  periodcellname: any = ['t8', 't9', 't10', 't14', 't15', 't16', 't17', 't18', 't22', 't23', 't24', 't28', 't29', 't30'];
  sections: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  toggleShow(sectionIndex: number, cardIndex: number): void {
    this.showAll[sectionIndex][cardIndex] = !this.showAll[sectionIndex][cardIndex];
  }

  override ngOnInit(): void {
    this.sections = [
      {
        title: 'b51',
        tooltip: 'b180',
        cards: [
          { title: 'b75',  image: '../../../../assets/images/promotionsigment/exclusive.svg', content: ['b282', 'b283', 'b284', 'b285'], text: this.textLines[0], truncatedText: this.truncatedText[0] },
          { title: 'b288',  image: '../../../../assets/images/promotionsigment/premium.svg',   content: ['b289', 'b290', 'b291', 'b292'], text: this.textLines[1], truncatedText: this.truncatedText[1] },
          { title: 'b294',  image: '../../../../assets/images/promotionsigment/facecare.svg',  content: ['b295', 'b296', 'b297', 'b298'], text: this.textLines[2], truncatedText: this.truncatedText[2] },
        ]
      },
      {
        title: 'b52',
        tooltip: 'b181',
        cards: [
          { title: 'b300', image:'../../../../assets/images/promotionsigment/community.svg', content: ['b301', 'b302', 'b303', 'b304'], text: this.textLines[3], truncatedText: this.truncatedText[3] },
          { title: 'b306', image:'../../../../assets/images/promotionsigment/flashsales.svg',   content: ['b307', 'b308', 'b309', 'b310'], text: this.textLines[4], truncatedText: this.truncatedText[4] },
          { title: 'b312', image:'../../../../assets/images/promotionsigment/storytelling.svg',  content: ['b313', 'b314', 'b315', 'b316'], text: this.textLines[5], truncatedText: this.truncatedText[5] },
          { title: 'b318', image:'../../../../assets/images/promotionsigment/skincaretopic.svg',   content: ['b319', 'b320', 'b321', 'b322'], text: this.textLines[6], truncatedText: this.truncatedText[6] },
          { title: 'b324', image:'../../../../assets/images/promotionsigment/tutorialseries.svg',  content: ['b325', 'b326', 'b327', 'b328'], text: this.textLines[7], truncatedText: this.truncatedText[7] },

        ]
      },
      {
        title: 'b53',
        tooltip: 'b182',
        cards: [
          { title: 'b330', image: '../../../../assets/images/promotionsigment/skincareshop.svg', content: ['b331', 'b332', 'b333', 'b334'], text: this.textLines[8], truncatedText: this.truncatedText[8] },
          { title: 'b342', image: '../../../../assets/images/promotionsigment/promoincampaign.svg',   content: ['b337', 'b338', 'b339', 'b340'], text: this.textLines[9], truncatedText: this.truncatedText[9] },
          { title: 'b348', image: '../../../../assets/images/promotionsigment/loyality.svg',  content: ['b343', 'b344', 'b345', 'b346'], text: this.textLines[10], truncatedText: this.truncatedText[10] },

        ]
      },
      {
        title: 'b54',
        tooltip: 'b183',
        cards: [
          { title: 'b354',  image: '../../../../assets/images/promotionsigment/popup.jpg', content: ['b349', 'b350', 'b351', 'b352'], text: this.textLines[11], truncatedText: this.truncatedText[11] },
          { title: 'b360', image: '../../../../assets/images/promotionsigment/premium.svg',   content: ['b355', 'b356', 'b357', 'b358'], text: this.textLines[12], truncatedText: this.truncatedText[12] },
          { title: 'b366', image: '../../../../assets/images/promotionsigment/promotion.svg',  content: ['b361', 'b362', 'b363', 'b364'], text: this.textLines[13], truncatedText: this.truncatedText[13] },
        ]
      }
    ];
    this.sections.forEach((section: any, sIdx: number) => {
      this.showAll[sIdx] = new Array(section.cards.length).fill(false);
    });
    this.getFetchData();
  }

  getLabelAndValueFromLanguage(key: string): { label: string, value: string } {
    const fullText = this.language[key] || '';
    const match = fullText.match(/^(.*?):\s*(.*)$/);
    if (match) {
      return { label: match[1], value: match[2] };
    }
    return { label: fullText, value: '' }; // fallback
  }

  getFetchData() {
    let apiname = '/promotionsnew/fetchpromotionsnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].promotionsnewcmid);
              this.languageid = data.resultList[0].promoTionsNewLM.promotionsnewlmid;
              this.language = data.resultList[0].promoTionsNewLM[this.languageselect.toLowerCase()];

              if (data.resultList[0].promotionsnewdata.z20 == 'yes') {
                this.disabled = true;
              }
              if (data.resultList[0].promoTionsNewCM.promoTionsNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = Number(data.resultList[0].promotionsnewdata[this.databasecellname[i]]);
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.periodresult[i] = Number(data.resultList[0].promoTionsNewCM.promotionsnewperioddata[this.periodcellname[i]]).toFixed(0);
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

  getFlatIndex(sIdx: number, i: number): number {
    let flatIndex = 0;
    for (let x = 0; x < sIdx; x++) {
      flatIndex += this.sections[x].cards.length;
    }
    return flatIndex + i;
  }
  

  // writepromotionsValue(tablename: string, index: number, event: any) {
  //   let apiname = '/promotionsnew/singleinputpromotionsnew';
  //   if (tablename == 'website') {
  //     this.result[index] = 1;
  //     for (let i = 0; i < 3; i++) {
  //       if (i != index) {
  //         this.result[i] = 0;
  //       }
  //     }
  //   } else if (tablename == 'moderntrades') {
  //     this.result[index] = 1;
  //     for (let i = 8; i < 11; i++) {
  //       if (i != index) {
  //         this.result[i] = 0;
  //       }
  //     }
  //   } else if (tablename == 'retailers') {
  //     this.result[index] = 1;
  //     for (let i = 11; i < 14; i++) {
  //       if (i != index) {
  //         this.result[i] = 0;
  //       }
  //     }
  //   } else if (tablename == 'social') {
  //     if (event.target.checked == true) {
  //       this.result[index] = 1;
  //     } else {
  //       this.result[index] = 0;
  //     }
  //   }
  //   for (let i = 0; i < 14; i++) {
  //     if (this.result[i] == undefined) {
  //       this.result[i] = 0;
  //     }
  //   }


  //   let promotionsData = {
  //     "x31": this.result[0],
  //     "x32": this.result[1],
  //     "x33": this.result[2],
  //     "x34": this.result[3],
  //     "x35": this.result[4],
  //     "x36": this.result[5],
  //     "x37": this.result[6],
  //     "x38": this.result[7],
  //     "x39": this.result[8],
  //     "x40": this.result[9],
  //     "x41": this.result[10],
  //     "x42": this.result[11],
  //     "x43": this.result[12],
  //     "x44": this.result[13],

  //   }
  //   this._api.writeLanguageData("promotionsnew", 1,
  //     promotionsData, apiname, 'promotionsnewcmid', this.languageselect, this.languageid, 'promotionsnewlmid',).subscribe((data: any) => {

  //     }, (error: any) => {
  //       this.checkloading = false;
  //       this.driveerrorLog(error, apiname);
  //     })
  // }
  writepromotionsValue(tablename: string, sIdx: number, i: number, event: any) {
    const flatIndex = this.getFlatIndex(sIdx, i);
  
    if (sIdx === 1) {
      // Checkbox (multiple allowed)
      this.result[flatIndex] = event.target.checked ? 1 : 0;
    } else {
      // Radio (only one allowed per section)
      const start = this.getFlatIndex(sIdx, 0);
      const end = start + this.sections[sIdx].cards.length;
      for (let j = start; j < end; j++) {
        this.result[j] = 0;
      }
      this.result[flatIndex] = 1;
    }
  
    // Ensure length is 14
    for (let k = 0; k < 14; k++) {
      if (this.result[k] === undefined) this.result[k] = 0;
    }
  
    const promotionsData = {
      "x31": this.result[0],
      "x32": this.result[1],
      "x33": this.result[2],
      "x34": this.result[3],
      "x35": this.result[4],
      "x36": this.result[5],
      "x37": this.result[6],
      "x38": this.result[7],
      "x39": this.result[8],
      "x40": this.result[9],
      "x41": this.result[10],
      "x42": this.result[11],
      "x43": this.result[12],
      "x44": this.result[13],
    };
  
    const apiname = '/promotionsnew/singleinputpromotionsnew';
    this._api.writeLanguageData("promotionsnew", 1, promotionsData, apiname,
      'promotionsnewcmid', this.languageselect, this.languageid, 'promotionsnewlmid'
    ).subscribe({
      next: (data: any) => {},
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    });
  }
  
  
  openDialog(): void {
    this.dialog.open(PromotionsigmentnewfoodforthoughtComponent, {
      data: {},
    });
  }



}

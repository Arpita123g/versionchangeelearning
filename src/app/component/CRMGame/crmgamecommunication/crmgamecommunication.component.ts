import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CrmgamefoodforthoughtComponent } from '../crmgamefoodforthought/crmgamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';


@Component({
  selector: 'app-crmgamecommunication',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './crmgamecommunication.component.html',
  styleUrls: ['./crmgamecommunication.component.scss']
})
export class CrmgamecommunicationComponent extends AbstractComponent {
  foodforthought: boolean = true;
  inputDisabled: boolean = false;
  result: any = [];
  result1: any = [];
  trainingprioritiescheckbox: number = 0;
  headers: string[] = [];
  selectedStatus: string = ""; // Track the selected status
  selectleadtable: string[] = [];
  rows: any = [];
  languagecells: any = [
    'b166', 'b167', 'b168', 'b169'
  ];
  periodcellname: any = [
    "v7", "v8", "v9", "v10", "v11", "v12", "v13", "v14", "v15", //8
    "v47", "v48", "v49", "v50",//12
    "w46", "w47", "w48", "w49", "w50",//17
    "x46", "x47", "x48", "x49", "x50",//22
    "y46", "y47", "y48", "y49", "y50",//27
    "z46", "z47", "z48", "z49", "z50",//32
    "aa46", "aa47", "aa48", "aa49", "aa50",//37
    "ab46", "ab47", "ab48", "ab49", "ab50",//42
  ];

  databasecellname: any = [
    "al37", "al38", "al39", "al40", "al41", "al42", "al43", "al44", "al45", //51
    "am37", "am38", "am39", "am40", "am41", "am42", "am43", "am44", "am45",  //60
    "an37", "an38", "an39", "an40", "an41", "an42", "an43", "an44", "an45",  // 69
    "al46", "al47", "am46", "am47", "an46", "an47",//75
    "al51", "al52", "al53", "al54", "al55", //80
    "al59", "al60", "al61", "al62", //84
  ];
  hardcodedCells: any = [
    "Leads with active social media presence or engagement history",
    "Leads who have shown interest in specific products or services",
    "Leads in the consideration stage who may benefit from in-depth educational content",
    "Leads who have shown interest in specific products but have not yet made a purchase decision",
    "Encourage leads to interact with the brand and share their experiences on social media",
    "Nurture leads and provide valuable content to maintain engagement",
    "Educate and engage leads by offering valuable insights and knowledge",
    "Provide personalized product demonstrations to address lead-specific needs and objections",
    "Launch a social media challenge or contest encouraging leads to share their experiences, testimonials, or user-generated content related to the brand or products",
    "Tailored content highlighting relevant industry news, product updates, and exclusive offers based on lead preferences",
    "Invite leads to participate in a series of educational webinars covering topics relevant to their interests or pain points",
    "Offer an exclusive opportunity for leads to schedule a personalized product demo tailored to their requirements",
    "Social media platforms", "Email marketing", "Email marketing and social media", "Direct outreach via phone calls or personalized emails",
    "200 contest entries, 300 new followers", "20% open rate, 5% conversion rate",
    "300 registrations, 50% attendance rate", "10% response rate, 2% conversion rate"
  ];
  
 
  crosscards = [
    { title: 'b26', icon: 'fa fa-user-plus' }, // Example using Font Awesome
    { title: 'b27', icon: 'fa fa-phone' },
    { title: 'b28', icon: 'fa fa-calendar-check' },
    { title: 'b29', icon: 'fa fa-file-alt' },
    { title: 'b30', icon: 'fa fa-check-circle' }
  ];

  dataoflang: any = [];
  languageid: number = 0;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);


  }

  override ngOnInit(): void {
    this.getFetchData();
  }
  activeChips: Set<string> = new Set(); // To track active chips
  selectedCardIndex: number | null = null;

  chipsWithIcons: any[] = [];
  cards: Card[] = [];

  toggleChip(cardIndex: number, chipName: string, chipIndex: number) {
    const card = this.cards[cardIndex];
    if (card.activeChips.has(chipName)) {
      card.activeChips.delete(chipName);
      this.result[chipIndex] = 0;
    } else {
      card.activeChips.add(chipName);
      this.result[chipIndex] = 1;
    }
    this.writegamecommunication();
  }

  // Check if a chip is active for a specific card
  isChipActive(cardIndex: number, chipName: string): boolean {
    return this.cards[cardIndex].activeChips.has(chipName);
  }

  // Method to determine if a card's radio button should be disabled
  isDisabled(cardIndex: number): boolean {
    return this.selectedCardIndex !== null && this.selectedCardIndex !== cardIndex;
  }

  rowsData = [
    {
      id: "row1",
      label: ["b160","b160"],
      description: [
        "b170",
        "b389",
        "b179",
        "b183"
      ]
    },
    {
      id: "row2",
      label: ["b161","b161",],
      description: [
        "b171",
        "b175",
        "b390",
        "b391",
      ]
    },
    {
      id: "row3",
      label: ["b162", "b162"],
      description: [
        "b172",
        "b176",
        "b180",
        "b184",
      ]
    },
    {
      id: "row4",
      label: ["b163","b163"],
      description: [
        "b173",
        "b177",
        "b181",
        "b185",
      ]
    },
    {
      id: "row5",
      label: ["b164","b164"],
      description: [
        "this.result[34]",
        "this.result[35]",
        "this.result[36]",
        "this.result[37]",
      ]
    },
    {
      id: "row6",
      label: ["b165","b165"],
      description: [
        "b174",
        "b178",
        "b182",
        "b186",
      ]
    },

  ];
  getFetchData() {
    let apiname = '/crmgame/fetchcrmgame';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].crmgamecmid);
              this.languageid = data.resultList[0].crmGameLM.crmgamelmid;
              if (data.resultList[0].crmGameCM.crmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.dataoflang = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()];

              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].crmGameCM.crmgameperioddata[this.periodcellname[i]];
              };
              for (let i = 43; i < 85; i++) {
                this.result[i] = data.resultList[0].crmgamedata[this.databasecellname[i - 43]];
              };

              for (let i = 0; i < this.languagecells.length; i++) {
                this.result[i] = this.dataoflang[this.languagecells[i]];
              };
              
              const cardIndexMap = [76, 77, 78, 79, 80];
              this.selectedCardIndex = cardIndexMap.findIndex(index => this.result[index] == 1);

              this.selectleadtable = this.result.slice(81, 85);

              this.rowsData.forEach((row) => {
                row.label[0] = String(this.dataoflang[row.label[1]]);
                row.description = row.description.map((desc) => {
                  if (typeof desc === 'string' && this.dataoflang.hasOwnProperty(desc)) {
                    return this.dataoflang[desc];
                  }
                  if (typeof desc === 'string' && desc.startsWith('this.result')) {
                    const match = desc.match(/\d+/);
                    if (match) {
                      const resultIndex = parseInt(match[0], 10);
                      return this.result[resultIndex];
                    }
                  }
                  return desc;
                });
              });
              
              this.rows = [];
              this.rows = this.rowsData;

              this.headerupdate();
             
              this.chipsWithIcons = [
                { name: 'b147', icon: 'fa-phone' },
                { name: 'b148', icon: 'fa-envelope' },
                { name: 'b149', icon: 'fa-bullseye' },
                { name: 'b150', icon: 'fa-info-circle' },
                { name: 'b151', icon: 'fa-book' },
                { name: 'b152', icon: 'fa-trophy' },
                { name: 'b153', icon: 'fa-graduation-cap' },
                { name: 'b154', icon: 'fa-newspaper' },
                { name: 'b155', icon: 'fa-calendar-check' },
              ];
              

              this.cards = [
                { title: 'b144', chips: [...this.chipsWithIcons], activeChips: new Set<string>() },
                { title: 'b145', chips: [...this.chipsWithIcons], activeChips: new Set<string>() },
                { title: 'b146', chips: [...this.chipsWithIcons], activeChips: new Set<string>() }
              ];

              for (let cardIndex = 0; cardIndex < 3; cardIndex++) {
                let card = this.cards[cardIndex];
                let start = 43 + cardIndex * 9;
                let end = start + 9;

                for (let i = start; i < end; i++) {
                  if (this.result[i] == 1) {
                    card.activeChips.add(this.chipsWithIcons[i - start].name);
                  }
                }
              }
             
              if ((data.resultList[0].crmgamedata.al96 == 'Yes') || (data.resultList[0].crmgamedata.al96 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
                }else{
                this.inputDisabled = false;
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

  headerupdate() {
    this.headers = this.result.slice(0, 4);
  }
  
  getSelection(index: number, type: string) {
    
    const isDayType = type === 'day';
    const valueIndex = 70 + (index * 2) + (isDayType ? 0 : 1);
    const [min, max] = isDayType ? [2, 20] : [1, 15];
    const value = this.result[valueIndex];

    if (value < min || value > max) {
      this._alert.error(`Expected range between ${min} and ${max}.`);
      this.result[valueIndex] = 0;
    }
    this.writegamecommunication();
  }

  selectleadtabledata(index: number) {
    this.result[index + 81] = this.selectleadtable[index];
    this.writegamecommunication();
  }
  getSelectionradio(inputField: string, index: number) {
    if (inputField === 'radio' && index >= 76 && index <= 80) {
      this.result.fill(0, 76, 81); // Reset indexes 76 to 80 to 0
      this.result[index] = 1; // Set the selected index to 1
    }
    this.writegamecommunication();
  }

  writegamecommunication() {
    let apiname = '/crmgame/singleinputcrmgame';

    let GameCommunicationData = {
      al46: this.result[70],
      al47: this.result[71],
      am46: this.result[72],
      am47: this.result[73],
      an46: this.result[74],
      an47: this.result[75],

      al37: this.result[43],
      al38: this.result[44],
      al39: this.result[45],
      al40: this.result[46],
      al41: this.result[47],
      al42: this.result[48],
      al43: this.result[49],
      al44: this.result[50],
      al45: this.result[51],

      am37: this.result[52],
      am38: this.result[53],
      am39: this.result[54],
      am40: this.result[55],
      am41: this.result[56],
      am42: this.result[57],
      am43: this.result[58],
      am44: this.result[59],
      am45: this.result[60],

      an37: this.result[61],
      an38: this.result[62],
      an39: this.result[63],
      an40: this.result[64],
      an41: this.result[65],
      an42: this.result[66],
      an43: this.result[67],
      an44: this.result[68],
      an45: this.result[69],

      al51: this.result[76],
      al52: this.result[77],
      al53: this.result[78],
      al54: this.result[79],
      al55: this.result[80],

      al59: this.result[81],
      al60: this.result[82],
      al61: this.result[83],
      al62: this.result[84],
    }

    this._api.writeLanguageData("crmgame", 3,
      GameCommunicationData, apiname, 'crmgamecmid',this.languageselect,this.languageid, 'crmgamelmid').subscribe((data: any) => {
        if (data.status == "Success") {
          // this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.inputDisabled = false;
        this.driveerrorLog(error, apiname);
      })
  }
  openDialog(): void {
    this.dialog.open(CrmgamefoodforthoughtComponent, {
      data: {},
    });
  }
}

interface Chip {
  name: string;
  icon: string;
}

interface Card {
  title: string;
  chips: Chip[];
  activeChips: Set<string>;
}


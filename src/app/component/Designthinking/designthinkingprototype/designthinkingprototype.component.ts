import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { DesignthinkingfoodforthoughtComponent } from '../designthinkingfoodforthought/designthinkingfoodforthought.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
@Component({
  selector: 'app-designthinkingprototype',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatChipsModule, MatRadioModule,
     MatButtonModule, RouterModule, FormsModule, MatIconModule, TippyDirective],
  templateUrl: './designthinkingprototype.component.html',
  styleUrls: ['./designthinkingprototype.component.scss']
})
export class DesignthinkingprototypeComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  result: any = [];
  outputresult: any = [];
  trainingprioritiescheckbox: number = 0;
  tabDisabled: any = [false, false, false];
  databasecellname: any = [
    'c17', 'd17', 'e17',//9
    'af24', 'af35', 'af46',//12
    'af25', 'af26', 'af27', 'af28', 'af29', 'af30', 'af31',//19
    'af36', 'af37', 'af38', 'af39', 'af40', 'af41', 'af42',//26
    'af47', 'af48', 'af49', 'af50', 'af51', 'af52', 'af53',//33
    'af32', 'af43', 'af54'//36
  ];
  outputtdatabasecellname: any = [
    'c40', 'c39', 'c42', 'c41',//40
    'd40', 'd39', 'd42', 'd41',//44
    'e40', 'e39', 'e42', 'e41'//48
  ]

  periodcellname: any = ['d27', 'd29', 'd30', 'd31', 'd33', 'd34', 'd35'];//6
  disabled:any = [false,false,false]
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.getFetchData();
  }


  chipsWithIcons = [
    { name: "one", icon: 'fa-paint-brush' },
    { name: "two", icon: 'fa-language' },
    { name: "three", icon: 'fa-sync-alt' },
    { name: "four", icon: 'fa-tint' },
    { name: "five", icon: 'fa-clock' },
    { name: "six", icon: 'fa-heartbeat' },
    { name: "seven", icon: 'fa-credit-card' }
  ];

  activeChips: Set<string> = new Set(); // To track active chips
  selectedCardIndex: number | null = null;
  
  cards = [
    { title: this.result[7], chips: [...this.chipsWithIcons], activeChips: new Set<string>() },
    { title: this.result[21], chips: [...this.chipsWithIcons], activeChips: new Set<string>() },
    { title: this.result[35], chips: [...this.chipsWithIcons], activeChips: new Set<string>() }
  ];

  // Toggle chip for the specific card and chip
  toggleChip(cardIndex: number, chipName: string) {
    const chipIndexMap: Record<string, number> = {
      'one': 13,
      'two': 14,
      'three': 15,
      'four': 16,
      'five': 17,
      'six': 18,
      'seven': 19
    };
    const card = this.cards[cardIndex];
    const baseIndex = chipIndexMap[chipName] + (cardIndex * 7);
  
    if (card.activeChips.has(chipName)) {
      this.result[baseIndex] = 0;   // Set the value to 0 if chip is active
      card.activeChips.delete(chipName); // Remove chip from activeChips
    } else {
      this.result[baseIndex] = 1;   // Set the value to 1 if chip is not active
      card.activeChips.add(chipName); // Add chip to activeChips
    }
    this.writeGameData();
   
  }

  // Check if a chip is active for a specific card
  isChipActive(cardIndex: number, chipName: string): boolean {
    return this.cards[cardIndex].activeChips.has(chipName);
  }

  // Method to determine if a card's radio button should be disabled
  isDisabled(cardIndex: number): boolean {
    return this.selectedCardIndex !== null && this.selectedCardIndex !== cardIndex;
  }

  // Select a card and disable the others
  selectCard(cardIndex: number) {
    this.selectedCardIndex = cardIndex;
  }


  getFetchData() {
    let apiname = '/designthinking/fetchdesignthinking';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].designthinkingcmid);
              if (data.resultList[0].designThinkingCM.designThinkingCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].designThinkingCM[this.periodcellname[i]]
              }
              for (let i = 7; i < 37; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 7]]
                if ((i == 10) || (i == 11) || (i == 12)) {
                  this.result[i] = (Number(this.result[i]) * 100).toFixed(0);
                }
                for(let i =7;i<10;i++){
                  if(this.result[i]=="Not Launched"){
                    this.disabled[i-7]=true;
                  }else{
                    this.disabled[i-7]=false;
                  }
                }
                

              }
              if ((this.result[7] == "Not Launched") && (this.result[8] == "Not Launched") && (this.result[9] == "Not Launched")) {
                this._alert.error("Please select options in ideate");
              }
              if (this.result[34] == 1) {
                this.selectedCardIndex = 0
              } else if (this.result[35] == 1) {
                this.selectedCardIndex = 1
              } else if (this.result[36] == 1) {
                this.selectedCardIndex = 2
              }
              for (let i = 37; i < 49; i++) {
                this.result[i] = data.resultList[0][this.outputtdatabasecellname[i - 37]]
              }
              
             
              for (let cardIndex = 0; cardIndex < 3; cardIndex++) {
                let card = this.cards[cardIndex];
                let start = 13 + cardIndex * 7;
                let end = start + 7;
              
                for (let i = start; i < end; i++) {
                  if (this.result[i] == 1) {
                    card.activeChips.add(this.chipsWithIcons[i - start].name);
                  }
                }
              }

              if ((data.resultList[0].af65 == 'Yes') || (data.resultList[0].af65 == 'yes') || (this.timefinished)) {
                this.disabled[0] = true;
                this.disabled[1] = true;
                this.disabled[2] = true;
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
    if (inputField == 'Battery') {
      if ((this.result[index] < 0) || (this.result[index] > 100)) {
        this.result[index] = 0;
        this._alert.error("range between 0% to 100%")
      }
    }
    if (inputField == 'radio') {
      if (index == 0) {
        this.result[34] = 1
        this.result[35] = 0
        this.result[36] = 0
      } else if (index == 1) {
        this.result[34] = 0
        this.result[35] = 1
        this.result[36] = 0
      } else if (index == 2) {
        this.result[34] = 0
        this.result[35] = 0
        this.result[36] = 1
      }
    }
    this.writeGameData();
  }

  writeGameData() {
    let apiname = '/designthinking/singleinputdesignthinking';
    let data = {
      'af24': this.result[10] / 100,
      'af35': this.result[11] / 100,
      'af46': this.result[12] / 100,
      'af25': this.result[13],
      'af26': this.result[14],
      'af27': this.result[15],
      'af28': this.result[16],
      'af29': this.result[17],
      'af30': this.result[18],
      'af31': this.result[19],
      'af36': this.result[20],
      'af37': this.result[21],
      'af38': this.result[22],
      'af39': this.result[23],
      'af40': this.result[24],
      'af41': this.result[25],
      'af42': this.result[26],
      'af47': this.result[27],
      'af48': this.result[28],
      'af49': this.result[29],
      'af50': this.result[30],
      'af51': this.result[31],
      'af52': this.result[32],
      'af53': this.result[33],
      'af32': this.result[34],
      'af43': this.result[35],
      'af54': this.result[36],

    }
   
    this._api.writeGameData("designthinking", 3,
      data, apiname, 'designthinkingcmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }



  openDialog(): void {
    this.dialog.open(DesignthinkingfoodforthoughtComponent, {
      data: {},
    });
  }
}

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
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { InnovationfoodforthoughtComponent } from '../innovationfoodforthought/innovationfoodforthought.component';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-innovationcollaboration',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatIconModule,TippyDirective],
  templateUrl: './innovationcollaboration.component.html',
  styleUrls: ['./innovationcollaboration.component.scss']
})
export class InnovationcollaborationComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  selectedCardIndex: number | null = null;
  selectedCard1Index: number | null = null;
  databasecellname: any = [
    'c61', 'c62', 'c63', 'c64', 'c65',//20
    'e61', 'e62', 'e63', 'e64', 'e65',//25
    'ae68', 'ae69', 'ae70', 'ae71', 'ae72',//30
    'ae76', 'ae77', 'ae78', 'ae79',//34
    'ae83', 'ae84', 'ae85', 'ae86'//38
  ];

  periodcellname: any = [
    'v31', 'v32', 'v33', 'v34',//3
    'x31', 'x32', 'x33', 'x34',//7
    'v37', 'v38', 'v39', 'v40',//11
    'x37', 'x38', 'x39', 'x40'//15
  ];

  cardData = [
    {
      id: 'card1',
      title: 'Publishing House Collaboration',
      img: "assets/images/innovation/publisinghousecollabroration.svg",
      databasecellname: "ae68",
      ischecked: false,
      description: {
        description: 'Collaborate with educational publishing houses to develop ARcane Adventures as part of interactive educational materials, textbooks, and digital learning resources for schools and students.',
        textname: 'Cost, k INR',
        cellvalue: 'e61',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'Educational Technology Company Partnership',
      img: "assets/images/innovation/educationaltechnologypartnership.avif",
      databasecellname: "ae69",
      ischecked: false,
      description: {
        description: "Partner with educational technology companies to integrate ARcane Adventures into their learning platforms, offering interactive storytelling and immersive educational experiences to students worldwide.",
        textname: 'Cost, k INR',
        cellvalue: 'e62',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'Government Educational Intiatives',
      img: "assets/images/innovation/govteducationalinitiative.svg",
      databasecellname: "ae70",
      ischecked: false,
      description: {
        description: "Collaborate with government educational initiatives and programs focused on digital literacy and innovation in education to promote ARcane Adventures in schools, colleges, and community learning centers.",
        textname: 'Cost, k INR',
        cellvalue: 'e63',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'Edutainment Content Creator Alliance',
      img: "assets/images/innovation/contentcreatoralliance.svg",
      databasecellname: "ae71",
      ischecked: false,
      description: {
        description: "Form alliances with edutainment content creators, YouTubers, and educational influencers to develop ARcane Adventures-themed educational content, tutorials, and interactive experiences for online platforms.",
        textname: 'Cost, k INR',
        cellvalue: 'e64',
      },
      turncatedtext: '',
    },
    {
      id: 'card5',
      title: 'Nonprofit Organization Sponsorship',
      img: "assets/images/innovation/nonprofitorgnizationsponrship.svg",
      databasecellname: "ae72",
      ischecked: false,
      description: {
        description: "Sponsor nonprofit organizations and foundations dedicated to education and literacy to support their initiatives and promote ARcane Adventures as a tool for enhancing learning outcomes and engagement.",
        textname: 'Cost, k INR',
        cellvalue: 'e65',
      },
      turncatedtext: '',
    },
  ];

  cardData1 = [
    {
      id: 'card1',
      title: 'Tech Bellwether',
      img: "assets/images/innovation/techbellwether.svg",
      databasecellname: "ae76",
      description: {
        description: 'Embraces new and emerging technologies quickly, often serving as a trendsetter and influencer in the industry. Prioritizes innovation and experimentation to stay ahead of the competition.',
        textname: 'Cost, k INR',
        cellvalue: 'x31',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'Early Adopter',
      img: "assets/images/innovation/earlyadopter.svg",
      databasecellname: "ae77",
      description: {
        description: "Quick to adopt new technologies and innovations, seeking a competitive edge and differentiation in the market. Willing to take calculated risks to explore new opportunities.",
        textname: 'Cost, k INR',
        cellvalue: 'x32',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'Late Adopter',
      img: "assets/images/innovation/lateadopter.svg",
      databasecellname: "ae78",
      description: {
        description: "Prefers to observe and assess new technologies before committing to adoption, prioritizing stability and proven track records. May wait for market validation and case studies before making decisions.",
        textname: 'Cost, k INR',
        cellvalue: 'x33',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'Leggard',
      img: "assets/images/innovation/laggarad.svg",
      databasecellname: "ae79",
      description: {
        description: "Resistant to change and innovation, preferring to stick with familiar and traditional technologies. Often adopts new technologies only when absolutely necessary or when forced by market pressures.",
        textname: 'Cost, k INR',
        cellvalue: 'x34',
      },
      turncatedtext: '',
    },

  ];

  cardData2 = [
    {
      id: 'card1',
      title: 'Tech Bellwether',
      img: "assets/images/innovation/techbellwether1.svg",
      databasecellname: "ae83",
      description: {
        description: 'Invests heavily in ongoing research and development efforts to continuously enhance product features, performance, and user experience. Adopts agile development methodologies to iterate and release updates rapidly.',
        textname: 'Cost, k INR',
        cellvalue: 'x37',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'Early adopter',
      img: "assets/images/innovation/educationaltechnologypartnership.avif",
      databasecellname: "ae84",
      description: {
        description: "Actively participates in providing feedback and collaborating with the development team to shape the product roadmap. Prioritizes early access to new features and updates.",
        textname: 'Cost, k INR',
        cellvalue: 'x38',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'Late Adopter',
      img: "assets/images/innovation/lateadopter1.svg",
      databasecellname: "ae85",
      description: {
        description: "Takes a cautious approach to product updates, preferring stability over rapid changes. Focuses on incremental improvements and bug fixes rather than radical innovations.",
        textname: 'Cost, k INR',
        cellvalue: 'x39',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'Laggard',
      img: "assets/images/innovation/laggarad1.svg",
      databasecellname: "ae86",
      description: {
        description: "Reluctant to invest in continuous improvement efforts, resulting in stagnation and outdated features. May prioritize cost-saving measures over product enhancements.",
        textname: 'Cost, k INR',
        cellvalue: 'x40',
      },
      turncatedtext: '',
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
    let apiname = '/innovationgame/fetchinnovationgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        this.checkloading = false;
        if (data.status !== "Success" || !data.resultList) return;

        const resultData = data.resultList[0];
        this._global.casemanagementid.next(resultData.innovationgamecmid);

        this.foodforthought = resultData.innovationGameCM.innovationGameCMActiveStatus.foodforthoughtstatus !== 'inactive';

        this.periodcellname.forEach((name: string, i: number) => this.result[i] = resultData.innovationGameCM[name]);

        for (let i = 16; i < 39; i++) {
          this.result[i] = resultData[this.databasecellname[i - 16]];
          if (i > 25 && i < 31) this.cardData[i - 26].ischecked = this.result[i] === 1;
        }


        this.selectedCardIndex = [31,32, 33, 34].findIndex(i => this.result[i] === 1);
        this.selectedCard1Index = [35,36, 37, 38].findIndex(j => this.result[j] === 1);
       
        this.inputDisabled = resultData.ae89 === 'yes' || this.timefinished;
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    });
  }

  getSelection(inputField: string, index: number, event: any) {
    if (inputField === 'collaboration') {
      this.cardData[index - 26].ischecked = event.target.checked;
    } else if (inputField === 'technologyadoption' && index >= 31 && index <= 34) {
      this.result.fill(0, 31, 35);
      this.result[index] = 1;
    } else if (inputField === 'continuousimprovement' && index >= 35 && index <= 38) {
      this.result.fill(0, 35, 39);
      this.result[index] = 1;
    }
    this.writeGameData();
  }

  writeGameData() {
    let apiname = '/innovationgame/singleinputinnovationgame';
    let data = {
      'ae68': this.cardData[0].ischecked == true ? '1' : '0',
      'ae69': this.cardData[1].ischecked == true ? '1' : '0',
      'ae70': this.cardData[2].ischecked == true ? '1' : '0',
      'ae71': this.cardData[3].ischecked == true ? '1' : '0',
      'ae72': this.cardData[4].ischecked == true ? '1' : '0',
      'ae76': this.result[31],
      'ae77': this.result[32],
      'ae78': this.result[33],
      'ae79': this.result[34],
      'ae83': this.result[35],
      'ae84': this.result[36],
      'ae85': this.result[37],
      'ae86': this.result[38]
    }
    this._api.writeGameData("innovationgame", 4,
      data, apiname, 'innovationgamecmid').subscribe((data: any) => {
        if (data.status == "Success") {}
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
    this.dialog.open(InnovationfoodforthoughtComponent, {
      data: {},
    });
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { InnovationfoodforthoughtComponent } from '../innovationfoodforthought/innovationfoodforthought.component';

@Component({
  selector: 'app-innovationproduct',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatIconModule],
  templateUrl: './innovationproduct.component.html',
  styleUrls: ['./innovationproduct.component.scss']
})
export class InnovationproductComponent extends AbstractComponent {
 foodforthought: boolean = true;
  inputDisabled: boolean = false;
  result: any = [];
  periodcellname: any = [
    'e6', 'f6', 'g6', 'h6',//3
    'e7', 'f7', 'g7', 'h7',//7
    'e8', 'f8', 'g8', 'h8',//11
    'e9', 'f9', 'g9', 'h9',//15
    'e10', 'f10', 'g10', 'h10',//19
    'e11', 'f11', 'g11', 'h11',//23
    'e12', 'f12', 'g12', 'h12',//27
    'e13', 'f13', 'g13', 'h13',//31
    'e14', 'f14', 'g14', 'h14',//35
    'e15', 'f15', 'g15', 'h15',//39
    'e16', 'f16', 'g16', 'h16',//43
    'e19', 'e20', 'e21', 'e22', 'e23', 'e24',//49
    'g19', 'g20', 'g21', 'g22', 'g23', 'g24',//55
  ]

  databasecellname: any = ['ae8', 'ae9', 'ae10', 'ae14', 'ae15', 'ae16', 'ae17', 'ae18', 'ae19']//64
  resultChunks: string[][] = [];

  textLines: string[] = [
    "Ensure all aspects of the product comply with local and international laws and regulations by hiring a legal firm to conduct regular audits and establish clear terms of service and privacy policies. Without legal compliance, the startup risks facing lawsuits, fines, and reputational damage, which could hinder its growth and viability in the market.",
    "Obtain necessary permits and licenses, stay updated on regulatory changes, and implement measures to address requirements related to data privacy, content moderation, and accessibility. Non-compliance with regulatory requirements can lead to legal penalties, operational disruptions, and damage to the startup's reputation, affecting its ability to attract customers and investors.",
    "Conduct trademark searches, file trademark applications, and implement copyright protection measures to safeguard brand assets and original content.  Without trademarks and copyrights, the startup risks potential infringement claims, loss of brand identity, and dilution of intellectual property rights, impacting its competitiveness and market positioning.",
    "Conduct prior art searches, file patent applications, and collaborate with patent attorneys to protect innovative features or functionalities of the product. Without patent protection, the startup risks imitation and unauthorized use of its technology by competitors, diminishing its ability to differentiate itself in the market and secure market share.",
    "Implement open source software license compliance processes, maintain an inventory of open source components, and establish internal policies for managing open source usage. Failure to comply with open source licenses can result in legal disputes, loss of goodwill within the open source community, and potential damage to the startup's reputation and partnerships.",
    "Adhere to industry standards and best practices for AR/VR development, participate in industry forums, and certify compliance with relevant standards to build trust with customers and partners. Non-compliance with industry standards can limit market acceptance, hinder interoperability with other products and services, and reduce the startup's competitiveness in the industry.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];
  cardData = [
    {
      id: 'card1',
      title: 'Legal Compliance',
      img: "assets/images/innovation/legalcompliancepro.svg",
      databasecellname: "ae29",
      ischecked: false,
      description: {
        text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll,
        textname: 'Cost, k INR',
        cellvalue: 'e15',
      },
      turncatedtext: '',
    },
    {
      id: 'card2',
      title: 'Regulatory Compliance',
      img: "assets/images/innovation/regulatorycompliance.svg",
      databasecellname: "ae30",
      ischecked: false,
      description: {
        text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll,
        textname: 'Cost, k INR',
        cellvalue: 'e16',
      },
      turncatedtext: '',
    },
    {
      id: 'card3',
      title: 'Trademarks & Copyrights',
      img: "assets/images/innovation/trademarks&copyrights.svg",
      databasecellname: "ae31",
      ischecked: false,
      description: {
        text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll,
        textname: 'Cost, k INR',
        cellvalue: 'e17',
      },
      turncatedtext: '',
    },
    {
      id: 'card4',
      title: 'Technology Patent',
      img: "assets/images/innovation/technologypatent.svg",
      databasecellname: "ae32",
      ischecked: false,
      description: {
        text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll,
        textname: 'Cost, k INR',
        cellvalue: 'e18',
      },
      turncatedtext: '',
    },
    {
      id: 'card5',
      title: 'Open Source Compliance',
      img: "assets/images/innovation/opensourcecompliance.jpg",
      databasecellname: "ae33",
      ischecked: false,
      description: {
        text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll,
        textname: 'Cost, k INR',
        cellvalue: 'e19',
      },
      turncatedtext: '',
    },
    {
      id: 'card6',
      title: 'Industry Standards Compliance',
      img: "assets/images/innovation/industrystandardscompliance.svg",
      databasecellname: "ae34",
      ischecked: false,
      description: {
        text: this.textLines[5],
        truncatedText: this.truncatedText[5],
        showAll: this.showAll,
        textname: 'Cost, k INR',
        cellvalue: 'e20',
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
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].innovationgamecmid);
              if (data.resultList[0].innovationGameCM.innovationGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].innovationGameCM[this.periodcellname[i]];
              };
              for (let i = 56; i < 65; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 56]];
                if (i > 58) {
                  if (this.result[i] == 1) {
                    this.cardData[i - 59].ischecked = true;
                  } else {
                    this.cardData[i - 59].ischecked = false;
                  }
                }
              };
              console.log("result", this.result)
              for (let i = 0; i < 44; i += 4) {
                this.resultChunks.push(this.result.slice(i, i + 4));
              }
              if ((data.resultList[0].ae89 == 'yes') || (this.timefinished)) {
                this.inputDisabled = true;
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

  getSelection(inputField: string, index: number, event: any) {
    if (inputField === "radio") {
      [56, 57, 58].forEach(i => this.result[i] = (i === index ? 1 : 0));
    } else {
      this.result[index] = event.target.checked ? 1 : 0;
    }
    this.writeGameData();
  }



  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  writeGameData() {
    let apiname = '/innovationgame/singleinputinnovationgame';
    let Data = {
      "ae8": this.result[56],
      "ae9": this.result[57],
      "ae10": this.result[58],
      "ae14": this.result[59],
      "ae15": this.result[60],
      "ae16": this.result[61],
      "ae17": this.result[62],
      "ae18": this.result[63],
      "ae19": this.result[64],

    }
    this._api.writeGameData("innovationgame", 1,
      Data, apiname, 'innovationgamecmid').subscribe((data: any) => {

      }, (error: any) => {
        this.checkloading = false;
        this.inputDisabled = false;
        this.driveerrorLog(error, apiname);
      })
  }

  openDialog(): void {
    this.dialog.open(InnovationfoodforthoughtComponent, {
      data: {},
    });
  }
}

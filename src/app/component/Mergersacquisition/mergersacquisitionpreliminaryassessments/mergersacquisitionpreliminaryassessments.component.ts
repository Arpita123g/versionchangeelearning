import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MergersacquisitionfoodforthoughtComponent } from '../mergersacquisitionfoodforthought/mergersacquisitionfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-mergersacquisitionpreliminaryassessments',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './mergersacquisitionpreliminaryassessments.component.html',
  styleUrls: ['./mergersacquisitionpreliminaryassessments.component.scss']
})

export class MergersacquisitionpreliminaryassessmentsComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  textshow: { [key: string]: boolean } = {};
  result: any = [];
  result1: any = [];
  technologycheckbox: number = 0;
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  periodcellname: any = ['r7','r8','r9','r10','r11','r12','r13','r14',//7
    'r15','r16','s7','s8','s9','s10','s11','s12','s13','s14','s15','s16'//19
  ];
  databasecellname: any = ['ac10','ac11','ac12','ac13','ac14','ac15','ac16','ac17','ac18','ac19'];

  cardData1 = [
    {
      id:'card1',
      title:'r7',
      img:"assets/images/mergrsaquisition/batterytechsolution.svg",
      databasecellname:"ac10",
      ischecked:false,
      description: {
        profile: 'A global leader in advanced battery manufacturing, with patented technology for fast-charging and long-life batteries.',
        advantage: 'Controls 20% of the battery supply market, ensuring a streamlined supply chain and cost reductions.',
        Financials_Valuation: {
          revenue: "INR 1.5B",
          gross_margin: "40%",
          net_margin: "15%",
          valuation: "INR 7B",
        },
        shareholder_structure: 'Privately owned with 60% held by founders, 40% by private equity firms.',
      },
      turncatedtext: '',
    },
    {
      id:"card2",
      title:"r8",
      img:"assets/images/mergrsaquisition/efficientmanifaturecorp.svg",      
      databasecellname:"ac11",
      ischecked:false,
      description: {
        profile: "Specializes in inefficient vehicle component manufacturing, leveraging AI and automation.",
        advantage: "Can reduce manufacturing costs by up to 25%.",
        Financials_Valuation: {
          revenue: "INR 2B",
          gross_margin: "35%",
          net_margin: "10%",
          valuation: "INR 10B"
        },
        shareholder_structure: "Public company listed on the BSE"
      },
      turncatedtext: ""
    },
    {
      id:"card3",
      title:"r9",
      img:"assets/images/mergrsaquisition/electrometalltd.svg",

      databasecellname:"ac12",
      ischecked:false,
      description: {
        profile: "A major supplier of rare metals used in EV batteries.",
        advantage: "Guarantees long-term contracts at fixed prices, ensuring supply chain stability.",
       Financials_Valuation: {
          revenue: "INR 3B",
          gross_margin: "30%",
          net_margin: "12%",
          valuation: "INR 15B"
        },
        shareholder_structure: "Public company with diversified ownership."
      },
      turncatedtext: ""
    },
    {
      id:"card4",
      title:"r10",
      img:"assets/images/mergrsaquisition/greenlogisticsco.svg",

      databasecellname:"ac13",
      ischecked:false,
      description: {
        profile: "An EV logistics company, ensuring efficient delivery of vehicle components.",
        advantage: "Reduces lead times by up to 50%.",
       Financials_Valuation: {
          revenue: "INR 500M",
          gross_margin: "25%",
          net_margin: "8%",
          valuation: "INR 2.5B"
        },
        shareholder_structure: "Private company, majority-owned by the founding family."
      },
      turncatedtext: ""
    },
    {
      id:"card5",
      title:"r11",
      img:"assets/images/mergrsaquisition/rapideriveinc.svg",

      databasecellname:"ac14",
      ischecked:false,
      description: {
        profile: "Emerging EV company with a strong market presence in Southeast Asia.",
        advantage: "Acquisition can boost MAI's market share by 10% in SEA.",
       Financials_Valuation: {
          revenue: "INR 4B",
          gross_margin: "34%",
          net_margin: "14%",
          valuation: "INR 20B"
        },
        shareholder_structure: "Public company with diversified ownership."
      },
      turncatedtext: ""
    },
    {
      id:"card6",
      title:"r12",
      img:"assets/images/mergrsaquisition/ecovicyclesystem.svg",

      databasecellname:"ac15",
      ischecked:false,
      description: {
        profile: "European EV manufacturer with an extensive dealership network.",
        advantage: "Instant access to the European market and established infrastructure.",
       Financials_Valuation: {
          revenue: "INR 3.5B",
          gross_margin: "33%",
          net_margin: "13%",
          valuation: "INR 18B"
        },
        shareholder_structure: "Public company listed on the LSE."
      },
      turncatedtext: ""
    },
    {
      id:"card7",
      title:"r13",
      img:"assets/images/mergrsaquisition/autoexpand.svg",

      databasecellname:"ac16",
      ischecked:false,
      description: {
        profile: "Holds a significant market share in South America's emerging EV market.",
        advantage: "A foothold in South America's EV sector.",
       Financials_Valuation: {
          revenue: "INR 1B",
          gross_margin: "30%",
          net_margin: "10%",
          valuation: "INR 5B"
        },
        shareholder_structure: "Private company, 70% held by venture capitalists."
      },
      turncatedtext: ""
    },
    {
      id:"card8",
      title:"r14",
      img:"assets/images/mergrsaquisition/chargingfytechnology.svg",

      databasecellname:"ac17",
      ischecked:false,
      description: {
        profile: "Develops innovative fast-charging stations with AI capabilities for predictive maintenance.",
        advantage: "Revolutionary charging solutions that can be deployed globally.",
       Financials_Valuation: {
          revenue: "INR 750M",
          gross_margin: "45%",
          net_margin: "20%",
          valuation: "INR 4B"
        },
        shareholder_structure: "Privately owned with 50% by founders, and 50% by angel investors."
      },
      turncatedtext: ""
    },
    {
      id: "card9",
      title:"r15",
      img:"assets/images/mergrsaquisition/ecosystemai.svg",

      databasecellname:"ac18",
      ischecked:false,
      description: {
        profile: "Pioneer in AI-driven sustainable solutions for EVs, including smart energy consumption.",
        advantage: "Boosts vehicle efficiency by up to 20%.",
       Financials_Valuation: {
          revenue: "INR 500M",
          gross_margin: "40%",
          net_margin: "18%",
          valuation: "INR 3B"
        },
        shareholder_structure: "Privately owned, major stakes held by tech magnates."
      },
      turncatedtext:""
    },
    {
      id:"card10",
      title:"r16",
      img:"assets/images/mergrsaquisition/nanoderiveconcept.svg",

      databasecellname:"ac19",
      ischecked:false,
      description: {
        profile: "Develops nanotechnology solutions for EV batteries, increasing their lifespan.",
        advantage: "Batteries that last 2x longer than average.",
       Financials_Valuation: {
          revenue: "INR 300M",
          gross_margin: "50%",
          net_margin: "25%",
          valuation: "INR 1.5B"
        },
        shareholder_structure: "Private company, 80% owned by a consortium of scientists."
      },
      turncatedtext: ""
    },
  ];
  cardData:any=null;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/mergersacquisition/fetchmergersacquisition';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].mergersacquisitioncmid);
              if (data.resultList[0].mergersAcquisitionCM.mergersAcquisitionCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].mergersAcquisitionCM[this.periodcellname[i]]

              }
              
              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title = String(data.resultList[0].mergersAcquisitionCM[this.cardData1[i].title]);
                this.cardData1[i].ischecked = data.resultList[0][this.cardData1[i].databasecellname]===0?false:true;
              }
              this.cardData=this.cardData1;

              if ((String(data.resultList[0].ac30) == 'yes') ||
                (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              };
              
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

  getSelection(inputField: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    for (let obj of this.cardData) {
      if (obj.databasecellname === inputField) {
        obj.ischecked = isChecked;
      }else{
        obj.ischecked = false;
      }
    }
    this.writepriliminaryassesmentData();
  }

  writepriliminaryassesmentData() {
    let apiname = '/mergersacquisition/singleinputmergersacquisition';
    let mergeAcquisitioninputData = {
      "ac10": this.cardData[0].ischecked == true ? '1' : '0',
      "ac11": this.cardData[1].ischecked == true ? '1' : '0',
      "ac12": this.cardData[2].ischecked == true ? '1' : '0',
      "ac13": this.cardData[3].ischecked == true ? '1' : '0',
      "ac14": this.cardData[4].ischecked == true ? '1' : '0',
      "ac15": this.cardData[5].ischecked == true ? '1' : '0',
      "ac16": this.cardData[6].ischecked == true ? '1' : '0',
      "ac17": this.cardData[7].ischecked == true ? '1' : '0',
      "ac18": this.cardData[8].ischecked == true ? '1' : '0',
      "ac19": this.cardData[9].ischecked == true ? '1' : '0',
    }
    this._api.mergerAcquisitionDataWrite("mergersacquisition", 3,
      mergeAcquisitioninputData, apiname, 'mergersacquisitioncmid').subscribe((data: any) => {
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
    this.dialog.open(MergersacquisitionfoodforthoughtComponent, {
      data: {},
    });
  }

}
interface FinancialsValuation {
  revenue: string;
  gross_margin: string;
  net_margin: string;
  valuation: string;
}

interface Description {
  profile: string;
  advantage: string;
  Financials_Valuation: FinancialsValuation;
  shareholder_structure: string;
}

interface CardData {
  id: string;
  title: string;
  description: Description;
  turncatedtext: string;
}
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

@Component({
  selector: 'app-hrpgameimplementation',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
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

  cardData1 = [
    {
      id: 'card1',
      title: 'b59',
      description: 'This training covers the latest trends in digital marketing, including SEO, SEM, content marketing, email marketing, and social media strategies. Participants will learn to use various tools, analyze campaign performance, and optimize for better results.',
      turncatedtext: ""
    },
    {
      id: 'card2',
      title: 'b60',
      description: 'Analytics plays a crucial role in e-commerce. This training delves deep into understanding user behavior, sales funnel optimization, cart abandonment strategies, and more using advanced analytics tools tailored for e-commerce platforms.',
      turncatedtext: "",
    },
    {
      id: 'card3',
      title: 'b61',
      description: "As TrendyThreads is looking into AR integrations, this training will help employees understand the basics of AR, its application in fashion e-commerce, and how to enhance customer experience using AR tools and strategies.",
      turncatedtext: "",
    },
    {
      id: 'card4',
      title: 'b62',
      description: "Tailored for the customer support division, this program focuses on enhancing soft skills, handling difficult situations, understanding customer psychology, and using support tools more effectively. It also emphasizes building long-term customer relationships.",
      turncatedtext: "",
    },
    {
      id: 'card5',
      title: 'b63',
      description: "For the design and production team, this training will emphasize understanding sustainable fashion trends, ethical sourcing of materials, eco-friendly production processes, and promoting sustainable products in the market.",
      turncatedtext: "",
    },
    {
      id: 'card6',
      title: 'b67',
      description: "Providing remote work options, including hybrid models, improves work-life balance, boosts job satisfaction, and enhances retention rates in response to the demand for flexible work environments. However, excessive remote work may hinder organic collaboration and team bonding. Effective remote work requires robust IT support, including collaboration tools and heightened cybersecurity measures.",
      turncatedtext: "",
    },
    {
      id: 'card7',
      title: 'b68',
      description: "The company provides upskilling programs and reimburses employees for external courses, showcasing commitment to employee growth. Continuous learning boosts motivation and uplifts organizational skill sets. However, the substantial financial investment in training, uncertain productivity returns, and potential employee departures pose challenges.",
      turncatedtext: "",
    },
    {
      id: 'card8',
      title: 'b69',
      description: "This policy goes beyond medical insurance, providing mental health support, gym memberships, health check-ups, and wellness workshops. Prioritizing employee health reduces sick days and ensures smooth operations. Implementing a comprehensive health and wellness policy, including mental health support and gym memberships, comes with substantial upfront costs.",
      turncatedtext: "",
    },
    {
      id: 'card9',
      title: 'b70',
      description: "Committing to a percentage of hires from diverse backgrounds, including gender, ethnicity, and differently-abled individuals, is both ethically sound and beneficial for business. A diverse workforce fosters innovation and broadens the company's appeal to customers. However, achieving genuine inclusivity requires overcoming hurdles such as addressing unconscious biases in the hiring process and adapting the company culture and infrastructure.",
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
    let apiname = '/hrplanning/fetchhrplanning';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].hrplanningcmid);
              if (data.resultList[0].hrPlanningCM.hrPlanningCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].hrPlanningCM[this.periodcellname[i]]

              }
              for (let i = 9; i < 27; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 9]]

              }
              for (let i = 18; i < 27; i++) {
                if (this.result[i] == "1") {
                  this.result[i] = true;
                } else {
                  this.result[i] = false;

                }
              }

              if ((data.resultList[0].ae49 == 'Yes') || (data.resultList[0].ae49 == 'yes') || (this.timefinished)) {
                this.checkdisable = true;
              }
              for (let i = 0; i < this.cardData1.length; i++) {
                this.cardData1[i].title = String(data.resultList[0].hrPlanningCM[this.cardData1[i].title])

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
    this.writeRoutesandTechnology();
  }

  writeRoutesandTechnology() {
    let apiname = '/hrplanning/singleinputhrplanning';
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
    this._api.writeGameData("hrplanning", 3,
      implementedData, apiname, 'hrplanningcmid').subscribe((data: any) => {
        if (data.status != "Success") {
          this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  // writeRoutesandTechnology() {
  //   const apiname = '/hrplanning/singleinputhrplanning';
  
  //   const implementedData = {
  //     "ae29": this.result[18] == true ? '1' : '0',
  //     "ae30": this.result[19] == true ? '1' : '0',
  //     "ae31": this.result[20] == true ? '1' : '0',
  //     "ae32": this.result[21] == true ? '1' : '0',
  //     "ae33": this.result[22] == true ? '1' : '0',
  //     "ae35": this.result[23] == true ? '1' : '0',
  //     "ae36": this.result[24] == true ? '1' : '0',
  //     "ae37": this.result[25] == true ? '1' : '0',
  //     "ae38": this.result[26] == true ? '1' : '0',
  //   };
  
  //   // ✅ Use a group version key
  //   const versionKey = 'routes-tech-group';
  //   const currentVersion = (this.requestVersions[versionKey] || 0) + 1;
  //   this.requestVersions[versionKey] = currentVersion;
  
  //   this._api.writeGameData("hrplanning", 3, implementedData, apiname, 'hrplanningcmid').subscribe(
  //     (data: any) => {
  //       if (this.requestVersions[versionKey] === currentVersion) {
  //         if (data.status !== "Success") {
  //           this.getFetchData();
  //         }
  //       } else {
  //         console.log("Ignored stale response for Routes and Technology group");
  //       }
  //     },
  //     (error: any) => {
  //       this.checkloading = false;
  //       this.checkdisable = false;
  //       this.driveerrorLog(error, apiname);
  //     }
  //   );
  // }
  

  toggleText(cardId: string) {
    this.textshow[cardId] = !this.textshow[cardId];
  }

  openDialog(): void {
    this.dialog.open(HrpgamefoodforthoughtComponent, {
      data: {},
    });
  }

}

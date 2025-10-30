import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { SalestargetfoodforthoughtComponent } from '../salestargetfoodforthought/salestargetfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

@Component({
  selector: 'app-salestargetsalescomposition',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],
  templateUrl: './salestargetsalescomposition.component.html',
  styleUrls: ['./salestargetsalescomposition.component.scss']
})
export class SalestargetsalescompositionComponent extends AbstractComponent {
  foodforthought: boolean = true;
  leadership: boolean = true;
  recognition: boolean = true;

  textLines: string[] = [
    "Sales representatives, as the front-line salesforce, have a direct impact on all consumer segments. They play a crucial role in maintaining relationships with retailers, ensuring product availability, and influencing in-store displays. A well-balanced team of sales representatives can effectively cater to the preferences and needs of all segments.",
    "Key account managers focus on major customers, which include large retail chains. Their impact is significant on the Thinkers segment, as they deal with larger, more strategic accounts. These managers need a strong understanding of market trends, consumer preferences, and data analytics to cater to this segment effectively. They also impact the Experiencers segment as they manage key accounts with a broader consumer base.",
    "Territory sales managers oversee specific geographic regions and coordinate sales representatives within those areas. They play a crucial role in adapting sales strategies to local market conditions. A well-distributed team of territory sales managers can help tailor approaches to suit the preferences of each segment within their respective territories. They can adjust strategies to cater to the Hedonistic preferences in some areas and the Easy Living preferences in others.",
    "The Gung Ho sales style is akin to a burst of energy, characterized by its zest for quick wins and a straightforward approach. Salespeople who embody this style are often seen as enthusiastic go-getters, looking to close deals with agility. This style aligns well with consumer segments who are open to trying new things. Moreover, it could also attract those who value an upfront, no-nonsense sales experience.",
    "The Buddy sales style thrives on building trust and cultivating warm, personal relationships with clients. Salespeople employing this style are akin to trusted friends and advisors, creating a comfortable and reliable connection. This approach resonates deeply with consumer segments  who hold personal connections in high regard, and segments who appreciate the familiarity of a friendly face.",
    "The Consultative sales style is akin to becoming a valued consultant rather than a traditional salesperson. This approach revolves around understanding the unique needs of clients, offering tailored solutions, and taking on the role of a trusted advisor. It tends to strike a chord with consumer segments who make informed decisions based on thoughtful reviews and feedback. Moreover, it is an ideal choice when dealing with products that offer added value or address specific problems.",
    "Leadership's active participation in customer-related decisions can significantly enhance sales effectiveness. By staying close to customers, understanding their evolving needs, and addressing their concerns promptly, leadership can foster stronger customer relationships. This involvement can result in an increase in customer satisfaction, loyalty, and ultimately, higher sales figures. ",
    "Leadership's role in shaping the sales strategy is pivotal. Their guidance and direction can help the sales team align their efforts with the company's overarching objectives. When leadership provides a clear, well-defined sales strategy, it empowers the team to work cohesively towards shared goals, ultimately leading to increased sales.",
    "Effective integration of sales and marketing efforts can significantly impact sales. Leadership's oversight in ensuring these two functions work in harmony allows for consistent messaging, more effective lead generation, and a smoother customer journey. This integration can lead to a more streamlined and impactful sales process, increasing conversion rates.",
    "Leadership's support and investment in sales personnel can boost their motivation and performance. By providing training, resources, and recognition, leadership can enhance the skills and morale of the sales team. This, in turn, can lead to more effective selling and better results."


  ];
  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false, false, false, false, false];
  cards = [
    { text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
    { text: this.textLines[6], truncatedText: this.truncatedText[6], showAll: this.showAll },
    { text: this.textLines[7], truncatedText: this.truncatedText[7], showAll: this.showAll },
    { text: this.textLines[8], truncatedText: this.truncatedText[8], showAll: this.showAll },
    { text: this.textLines[9], truncatedText: this.truncatedText[9], showAll: this.showAll },

  ];
  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }
  periodresult: any = [];
  databaseresult: any = [];
  disabled: boolean = false;
  databasecellname: any = ['av30', 'aw30', 'ax30', 'av31', 'aw31', 'ax31', 'av32', 'aw32', 'ax32', 'av35', 'aw35', 'ax35', //11
    'av36', 'aw36', 'ax36', 'av37', 'aw37', 'ax37', 'av39', 'av40', 'av41', 'av42', 'av44', 'av45', 'av46']; //24
  periodcellname: any = ['n126', 'n127', 'n128', 'n131', 'n132', 'n133', 'n115', 'n116', 'n117', 'n118', 'n121', 'n122', 'n123'];
  // databasecellname: any =['av39','av40','av41','av42'];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {

    let apiname = '/salestarget/fetchsalestarget';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              //this.jsonarray1 = [];
              //this.jsonarray2 = [];
              this._global.casemanagementid.next(data.resultList[0].salestargetcmid);
              if ((data.resultList[0].bb7 == 'yes') || (this.timefinished)) {
                this.disabled = true;
              }
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.leadershipstatus == 'inactive') {
                this.leadership = false;
              }
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.recognitionstatus == 'inactive') {
                this.recognition = false;
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.periodresult[i] = data.resultList[0].salesTargetCM[this.periodcellname[i]];
              }
              // for (let i = 0; i < this.databasecellname.length; i++) {
              //   this.databaseresult[i] = data.resultList[0][this.databasecellname[i]];
              //   if ((i == 0) || (i == 1) || (i == 2) || (i == 3) || (i == 4) || (i == 5) || (i == 6) || (i == 7) || (i == 8) || (i == 9) || (i == 10) || (i == 11)
              //     || (i == 12) || (i == 13) || (i == 14) || (i == 15) || (i == 16) || (i == 17)) {
              //     this.databaseresult[i] = (Number(this.databaseresult[i]) * 100).toFixed(0);
              //   }
              // }
              for (let i = 0; i < this.databasecellname.length; i++) {
                let value = data.resultList[0][this.databasecellname[i]];
                this.databaseresult[i] = (i <= 17) ? (Number(value) * 100).toFixed(0) : value;
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
  validateInput(index: number) {
    const value = Number(this.databaseresult[index]);
    if (value < 0) {
      this._alert.error('Input value cannot be less than 0%');
      this.databaseresult[index] = '0';
    } else if (value > 100) {
      this._alert.error('The maximum allocation cannot exceed 100%');
      this.databaseresult[index] = '100';
    }
  }

  updatedData() {

    let apiname = '/salestarget/fetchsalestarget';

    this._api.fetchGameData(apiname, this.noofattempt).subscribe((res: any) => {
      if (res.status === 'Success' && res.resultList) {
        const updatedData = res.resultList[0];
        for (let i = 0; i < this.periodcellname.length; i++) {
          this.periodresult[i] = updatedData.salesTargetCM[this.periodcellname[i]];
        }
        
         const resultIndices = [6, 7, 8, 15, 16, 17];
          const dataCellIndices = [6, 7, 8, 15, 16, 17];

          for (let i = 0; i < resultIndices.length; i++) {
            this.databaseresult[resultIndices[i]] = (Number(updatedData[this.databasecellname[dataCellIndices[i]]])* 100).toFixed(0);
          }

        // for (let i = 0; i < this.databasecellname.length; i++) {
        //   let value = updatedData[this.databasecellname[i]];
        //   this.databaseresult[i] = (i <= 17) ? (Number(value) * 100).toFixed(0) : value;
        // }

      }
    });
  }
  writeSalestargetValue(tablename: string, index: number, event: any, keyname: string) {
    let nagativevalue = false;
    if (tablename == 'recognition') {
      if (event.target.checked == true) {
        this.databaseresult[index] = 1;
      } else {
        this.databaseresult[index] = 0;
      }
      this.writeSalestargetValueData();
    }
    if (tablename == 'leadership') {
      this.databaseresult[index] = 1;
      for (let i = 18; i < 22; i++) {
        if (i != index) {
          this.databaseresult[i] = 0;

        }
      }
      this.writeSalestargetValueData();
    }
    if (tablename == 'salesforce') {
      if (keyname == 'moderntrade') {
        let totalvalue = Number(this.databaseresult[0]) + Number(this.databaseresult[3])
        if (totalvalue > 100) {
          this.databaseresult[index] = 0;
          nagativevalue = true;
        }
      } else if (keyname == 'retail') {
        let totalvalue = Number(this.databaseresult[1]) + Number(this.databaseresult[4])
        if (totalvalue > 100) {
          this.databaseresult[index] = 0;
          nagativevalue = true;
        }
      } else if (keyname == 'horeca') {
        let totalvalue = Number(this.databaseresult[2]) + Number(this.databaseresult[5])
        if (totalvalue > 100) {
          this.databaseresult[index] = 0;
          nagativevalue = true;
        }
      }
    } else if (tablename == 'salesstyle') {
      if (keyname == 'moderntrade') {
        let totalvalue = Number(this.databaseresult[9]) + Number(this.databaseresult[12])
        if (totalvalue > 100) {
          this.databaseresult[index] = 0;
          nagativevalue = true;
        }
      } else if (keyname == 'retail') {
        let totalvalue = Number(this.databaseresult[10]) + Number(this.databaseresult[13])
        if (totalvalue > 100) {
          this.databaseresult[index] = 0;
          nagativevalue = true;
        }
      } else if (keyname == 'horeca') {
        let totalvalue = Number(this.databaseresult[11]) + Number(this.databaseresult[14])
        if (totalvalue > 100) {
          this.databaseresult[index] = 0;
          nagativevalue = true;
        }
      }
    }

    this.writeSalestargetValueData();


    console.log("result", this.databaseresult)

  }

  writeSalestargetValueData() {
    let apiname = '/salestarget/singleinputsalestarget';

    let SalestargetData = {
      "av30": Number(this.databaseresult[0]) / 100,
      "aw30": Number(this.databaseresult[1]) / 100,
      "ax30": Number(this.databaseresult[2]) / 100,
      "av31": Number(this.databaseresult[3]) / 100,
      "aw31": Number(this.databaseresult[4]) / 100,
      "ax31": Number(this.databaseresult[5]) / 100,
      "av32": Number(this.databaseresult[6]) / 100,
      "aw32": Number(this.databaseresult[7]) / 100,
      "ax32": Number(this.databaseresult[8]) / 100,
      "av35": Number(this.databaseresult[9]) / 100,
      "aw35": Number(this.databaseresult[10]) / 100,
      "ax35": Number(this.databaseresult[11]) / 100,
      "av36": Number(this.databaseresult[12]) / 100,
      "aw36": Number(this.databaseresult[13]) / 100,
      "ax36": Number(this.databaseresult[14]) / 100,
      "av37": Number(this.databaseresult[15]) / 100,
      "aw37": Number(this.databaseresult[16]) / 100,
      "ax37": Number(this.databaseresult[17]) / 100,
      "av39": this.databaseresult[18],
      "av40": this.databaseresult[19],
      "av41": this.databaseresult[20],
      "av42": this.databaseresult[21],
      "av44": this.databaseresult[22],
      "av45": this.databaseresult[23],
      "av46": this.databaseresult[24],




    }
    console.log('writedata', SalestargetData)
    this._api.salesdatawrite("salestarget", 1,
      SalestargetData, apiname, 'salestargetcmid').subscribe((data: any) => {

        if (data.status == "Success") {
          this.updatedData();
        }
      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }

  openDialog(): void {
    this.dialog.open(SalestargetfoodforthoughtComponent, {
      data: {},
    });
  }

}

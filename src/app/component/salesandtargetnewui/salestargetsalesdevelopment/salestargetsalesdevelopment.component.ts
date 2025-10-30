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
  selector: 'app-salestargetsalesdevelopment',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,TippyDirective],
  templateUrl: './salestargetsalesdevelopment.component.html',
  styleUrls: ['./salestargetsalesdevelopment.component.scss']
})
export class SalestargetsalesdevelopmentComponent extends AbstractComponent {
  foodforthought: boolean = true;
  salestraining:boolean = true;
  salesprocess:boolean = true;

  periodresult: any = [];
  databaseresult: any = [];
  disabled: boolean = false;
  result: any = [];
  textLines: string[] = [
    "Value-based sales tactics prioritize conveying the unique benefits and value that your products or services bring to the customer. This approach is effective for Thinkers who are driven by informed decisions based on product value and benefits. It can also resonate with Hedonistic segments looking for the maximum value and pleasure from their purchases, as well as Easy Living segments who appreciate traditional, tried-and-true options. By focusing on value, you build trust with these segments and enhance their overall buying experience.",
    "Trust-based sales emphasize building strong, long-term relationships with customers. This approach is particularly effective with the Buddy sales style who value personal connections and trust in their sales relationships. It can also resonate with Hedonistic segments who seek reliability and Thinkers who appreciate the trustworthiness of a brand. By cultivating trust, you can ensure repeat business and foster loyalty among these segments. ",
    "Product management involves effectively overseeing the product lifecycle, from development to marketing and sales. This approach caters to the Experiencers who are eager to try new and innovative products. Thinkers appreciate thorough product management, as it aligns with their preference for well-informed decisions based on reviews and feedback. By managing products effectively, you can cater to the evolving preferences of these segments and adapt your offerings accordingly.",
    "The after-sales concept revolves around providing exceptional post-purchase support and service. This approach is crucial for the Hedonistic segments who expect a premium and satisfying experience even after the sale. Easy Living segments also appreciate quality service. Ensuring excellent after-sales service can lead to positive word-of-mouth and loyalty among these segments.",
    "Relationship skills encompass the ability to connect with customers on a personal level, understand their needs, and provide tailored solutions. This approach can resonate with Easy living segments who value relationships and Hedonistic segments who seek personalized, pleasurable experiences. By developing strong relationships and understanding customers' preferences, you can cater to these segments effectively.",
    "Key account management focuses on building and nurturing relationships with major customers or key accounts. This approach is vital for Thinkers who often represent larger, strategic accounts that require specialized attention. By managing key accounts effectively, you can cater to the needs of this segment, who often make well-informed decisions based on thoughtful reviews and feedback, and ensure their continued satisfaction.",
    "The adaptive selling style is characterized by the salesperson's ability to tailor their approach to each customer's unique needs and preferences. This approach is highly effective for the Thinkers segment, as it aligns with their preference for well-informed decisions based on reviews and feedback. It also resonates with Experiencers, who appreciate a personalized approach that caters to their individual tastes. By adapting the sales strategy to the specific requirements of each segment, you can enhance their overall buying experience and increase sales.",
    "The negotiation style focuses on reaching mutually beneficial agreements between the salesperson and the customer. This approach is essential for the segments, who value personal connections and trust in their sales relationships. It can also be effective with Hedonistic segments, who appreciate the ability to negotiate for a better deal. By employing effective negotiation skills, you can foster strong relationships and increase customer satisfaction, ultimately leading to higher sales figures.",
    "The art of closing a sale is all about sealing the deal and turning potential customers into actual buyers. This approach is particularly effective with the Easy Living segments, who prefer straightforward, no-nonsense sales experiences. It can also resonate with Hedonistic segments, who often seek quick and pleasurable decisions. By employing effective closing techniques, you can encourage prompt decisions and boost sales, especially among these segments.",
    "An efficient working method emphasizes streamlining sales processes and reducing unnecessary steps. This approach is crucial for the Thinkers segment, who appreciate a well-organized and efficient approach to their purchases. It can also resonate with Hedonistic segments, who seek quick and pleasurable experiences. By adopting efficient working methods, you can enhance the buying process, making it more appealing to these segments and ultimately increasing sales.",
    "Sales process innovation involves rethinking and enhancing the way sales tasks are performed to achieve better results. This approach is particularly advantageous for the Experiencers segment, who appreciate novel and innovative solutions. Innovating the sales process can lead to the introduction of exciting, unique buying experiences and new products that align with the preferences of these consumers. Additionally, it can be valuable for Thinkers who appreciate well-informed decisions. By leveraging innovative approaches, you can provide them with comprehensive, data-driven sales experiences and thus increase sales effectiveness.",
    "Process management focuses on optimizing and streamlining sales processes to improve efficiency and reduce waste. This approach is beneficial for the Hedonistic segments who value efficient, hassle-free experiences. By managing sales processes effectively, you can ensure that customers enjoy a smooth and enjoyable buying journey, ultimately leading to increased sales among these segments. Process management is also valuable for the Easy Living segment, who appreciate traditional and straightforward methods. By implementing efficient processes, you can cater to their preference for simplicity and reliability, further enhancing their buying experience."


  ];
  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false,false,false,false,false,false,false];
  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }
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
    { text: this.textLines[10], truncatedText: this.truncatedText[10], showAll: this.showAll },
    { text: this.textLines[11], truncatedText: this.truncatedText[11], showAll: this.showAll },

  ];
  databasecellname: any = ['av50', 'av51', 'av52', 'av53', 'av54',
    'av55', 'av58', 'av59', 'av60', 'av61', 'av64', 'av65']

  periodcellname:any = ['t7','t8','t9','t10','t11','t12','t15','t16','t17','t18','t21','t22']

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
              if ((data.resultList[0].bb7 == 'yes')  || (this.timefinished)){
                this.disabled = true;
              }
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.salesforcestylestatus == 'inactive') {
                this.salestraining = false;
              }
              if (data.resultList[0].salesTargetCM.salesTargetCMActiveStatus.salesprocessstatus == 'inactive') {
                this.salesprocess = false;
              }
              for (let i = 0; i < this.databasecellname.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i]];
              }
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.periodresult[i] = data.resultList[0].salesTargetCM[this.periodcellname[i]];
              }
              // for (let i = 0; i < this.periodcellname.length; i++) {
              //   this.periodresult[i] = data.resultList[0].SalestargetCM[this.periodcellname[i]];
              // }
              // for (let i = 0; i < this.databasecellname.length; i++) {
              //   this.databaseresult[i] = data.resultList[0][this.databasecellname[i]];
              //   if((i==0)||(i==1)||(i==2)){
              //     this.databaseresult[i] = Number(this.databaseresult[i])*100;
              //   }
              // }

              // for (let i = 0; i < this.acnecreamgraphcell.length; i++) {
              //   this.jsonarray1.push({ 'x': "", 'y': (data.resultList[0][this.acnecreamgraphcell[i][1]]) });

              // }
              // for (let i = 0; i < this.applecidergraphcell.length; i++) {
              //   this.jsonarray2.push({ 'x': "", 'y': (data.resultList[0][this.applecidergraphcell[i][1]]) });

              // }
              // this.acnecreamcostpersalegraph.series = [
              //   { "name": "", "data": this.jsonarray1 },

              // ]
              // this.appleciderfacewashgraph.series = [
              //   { "name": "", "data": this.jsonarray2 },

              // ]
              // console.log("acnecreamcostpersalegraph",this.acnecreamcostpersalegraph.series,
              // "appleciderfacewashgraph",this.appleciderfacewashgraph.series)

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

  writeSalestargetValue(tablename: string, index: number, event: any) {

    let apiname = '/salestarget/singleinputsalestarget';
    if (tablename == 'development') {
      if (event.target.checked == true) {
        this.result[index] = 1;
      } else {
        this.result[index] = 0;
      }
    } else if (tablename == 'training') {
      if (event.target.checked == true) {
        this.result[index] = 1;
      } else {
        this.result[index] = 0;
      }
    } else if (tablename == 'process') {
      if (event.target.checked == true) {
        this.result[index] = 1;
      } else {
        this.result[index] = 0;
      }
    }
    let SalestargetData = {
      "av50": this.result[0],
      "av51": this.result[1],
      "av52": this.result[2],
      "av53": this.result[3],
      "av54": this.result[4],
      "av55": this.result[5],
      "av58": this.result[6],
      "av59": this.result[7],
      "av60": this.result[8],
      "av61": this.result[9],
      "av64": this.result[10],
      "av65": this.result[11],

    }
    console.log('writedata', SalestargetData)
    this._api.salesdatawrite("salestarget", 1,
    SalestargetData, apiname,'salestargetcmid').subscribe((data: any) => {

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

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
import { LogisticsmodegamefoodforthoughtComponent } from '../logisticsmodegamefoodforthought/logisticsmodegamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logisticsmodegameintroduction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logisticsmodegameintroduction.component.html',
  styleUrls: ['./logisticsmodegameintroduction.component.scss']
})

export class LogisticsmodegameintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private Sharedservice: SharedserviceService,) {

    super(_login, _api, _alert, _global, _router, _restapiservice);
  }


  override ngOnInit(): void {
    
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/logistics/fetchlogistics';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {

              if ((data.resultList[0].aw53 == 'yes') || (data.resultList[0].aw53 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].logisticsCM.logisticsCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.checkloading = false;
            }
          } else {
            this.checkloading = false;

          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }
  openDialog(): void {
    this.dialog.open(LogisticsmodegamefoodforthoughtComponent, {
      data: {},
    });
  }

  showAll: boolean[] = [false, false, false, false, false, false];

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
    console.log("show",this.showAll[index])
  }


  textLines: string[] = [
    "In the rapidly evolving world of logistics, two recent college graduates pioneered the 2PL system in India with their startup, Letsgo, in 2000. Initially focusing on truck fleets, the duo soon expanded their horizons by diversifying transport methods and establishing strategic warehouses across the nation. Today, with decades under their belt, Letsgo has embraced 3PL & 4PL models.",
    "In this initial stage, goods are collected from the client's location, marking the beginning of their journey towards the central warehouse. Careful selection of the right size and type of truck is crucial; this is determined based on the volume and weight of the goods.",
    "Implementing effective storage policies is the backbone of this phase, ensuring every item has its designated place. With the aid of advanced technologies, inventory tracking and management become efficient and transparent, allowing for quick retrievals and stock checks. Moreover, to further streamline operations, specific docks are allocated to individual clients.",
    "The journey from Delhi to Bangalore can be approached through three potential routes, each with its own set of challenges. Factors like distance, prevailing road conditions, and traffic patterns play a pivotal role in determining the most efficient path. Alongside the route selection, the choice of trucking technology becomes paramount. This technology ensures that the cargo transport remains both safe and efficient.",
    "As the goods prepare for the final leg of their journey, outbound logistics come into play. Determining the optimal truck size and mode of transport is essential and is influenced by the specific requirements of the destination. Loading strategies are then devised to maximize truck capacity, ensuring every inch is utilized without compromising the safety of the cargo",
    "Feedback is an essential aspect of refining any logistics process. Comprehensive reports offer a deep dive into each decision-making step, providing invaluable insights into the effectiveness of the chosen strategies.",
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 190) + (text.length > 190 ? '...' : ''));

  cards = [
    { title: 'Market', image: '../../../../assets/images/Logosticsmodelgame/market.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Inbound Logistics', image: '.../../../../assets/images/Logosticsmodelgame/inbound.jpg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Warehouse Management', image: '../../../../assets/images/Logosticsmodelgame/warehouse.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Trucking Technology & Routes', image: '../../../../assets/images/Logosticsmodelgame/truckandtech.jpg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Outbound Logistics', image: '../../../../assets/images/Logosticsmodelgame/outbound.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/Logosticsmodelgame/report.jpg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ];







}

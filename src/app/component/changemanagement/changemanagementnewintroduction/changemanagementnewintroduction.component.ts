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
import { ChangemanagementnewfoodforthougthComponent } from './../changemanagementnewfoodforthougth/changemanagementnewfoodforthougth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-changemanagementnewintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './changemanagementnewintroduction.component.html',
  styleUrls: ['./changemanagementnewintroduction.component.scss']
})
export class ChangemanagementnewintroductionComponent extends AbstractComponent {
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
    let apiname = '/changemanagement/fetchchangemanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].bh6 == 'yes') || (data.resultList[0].bh6 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].changeManagementCM.changeManagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
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
    this.dialog.open(ChangemanagementnewfoodforthougthComponent, {
      data: {},
    });
  }

  showAll: boolean[] = [false, false, false, false, false, false];

  toggleshow(index: number) {
   this.showAll[index] = !this.showAll[index];
  }


  textLines: string[] = [
    "You receive a memo detailing the recent acquisition of a company. Task is to absorb the information, understanding the intricacies of the acquisition, key changes, and potential challenges that may arise during the integration process.",
    "Delve into the personal and professional dynamics of the individuals affected by the change. Identify preferences, relationships, and potential influencers within the group, laying the groundwork for a tailored change management strategy",
    "Initiate the awareness phase by selecting exercises that facilitate open communication and understanding within the group. The chosen activities aim to create a shared understanding of the change and its implications, fostering a collective awareness among the team.",
    "Building on the awareness established, now focus on motivating the individuals through exercises that inspire and energize. These activities aim to boost morale, create a positive outlook, and encourage a sense of shared purpose in embracing the forthcoming changes.",
    "Choose exercises designed to solidify the team's commitment to the change. These activities foster a sense of ownership, collaboration, and dedication, ensuring that individuals are actively engaged in the process and committed to the shared objectives.",
    "Conclude the game by analyzing the feedback and assessing the impact of the implemented exercises on individual and team performance. Then compile a report summarizing the observed changes, and insights gained throughout the change management decision-making process.",
  ];

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));

  cards = [
    { title: 'Memo', image: '../../../../assets/images/changemanagementnew/memoforchange.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Human Dynamics', image: '.../../../../assets/images/changemanagementnew/dynamic.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Awareness Activation', image: '../../../../assets/images/changemanagementnew/awareness.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Motivation Momentum', image: '../../../../assets/images/changemanagementnew/motivation.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Commitment Cultivation', image: '../../../../assets/images/changemanagementnew/commitment.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/changemanagementnew/reportsforchange.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ];


}

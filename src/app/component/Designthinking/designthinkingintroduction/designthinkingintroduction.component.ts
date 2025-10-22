import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { DesignthinkingfoodforthoughtComponent } from '../designthinkingfoodforthought/designthinkingfoodforthought.component';

@Component({
  selector: 'app-designthinkingintroduction',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './designthinkingintroduction.component.html',
  styleUrls: ['./designthinkingintroduction.component.scss']
})
export class DesignthinkingintroductionComponent extends AbstractComponent {

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
    let apiname = '/designthinking/fetchdesignthinking';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].af65 == 'yes') || (data.resultList[0].af65 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].designThinkingCM.designThinkingCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.checkloading = false;
            }
            this.checkloading = false;
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  textLines: string[] = [
    "Dive into understanding the environment and context of the issue at hand. You're encouraged to study user behaviors, reactions, and preferences closely. This involves collecting a mix of data, ranging from direct observations to historical insights and prior research.",
    "The focus shifts to deeply understanding the user. This involves crafting diverse user personas that represent a broad spectrum of needs and backgrounds. Engaging in interviews and surveys helps in capturing the emotional pulse and feelings of the users.",
    "The amassed observations and data are synthesized to pinpoint the core problem. Here, you are tasked with sifting through the information, prioritizing key pain points and challenges, and then sculpting a clear, actionable problem statement that will serve as a beacon for the subsequent stages.",
    "Brainstorm a plethora of potential solutions, encouraging a mindset free of constraints. This stage is a melting pot of diverse perspectives, and its heart lies in out-of-the-box thinking. Once a wealth of ideas is on the table, the challenge is to evaluate and rank them, keeping in mind feasibility, impact, and innovation.",
    "It's time to give tangible form to the top ideas. These initial models are crafted not as finished products but as testable entities, ripe for feedback and iteration. The emphasis here is a balanced focus on functionality, aesthetics, and overall user experience.",
    "The prototype is exposed to real-world users. Observing genuine user interactions, gathering feedback, and noting challenges are the keystones of this stage. The refined solution is transformed into a final product, ready for market launch.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Observe', image: '../../../../assets/images/designthinking/observeintroduction.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Empathize', image: '.../../../../assets/images/designthinking/empathizeintroduction.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Define', image: '../../../../assets/images/designthinking/defineintroduction.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Ideate', image: '../../../../assets/images/designthinking/ideateintroduction.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Prototype', image: '../../../../assets/images/designthinking/prototypeintroduction.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Execute', image: '../../../../assets/images/designthinking/excuteintroduction.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },

  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(DesignthinkingfoodforthoughtComponent, {
      data: {},
    });
  }

}

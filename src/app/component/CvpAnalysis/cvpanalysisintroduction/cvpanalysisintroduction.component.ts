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
import { CvpanalysisfoodforthoughtComponent } from '../cvpanalysisfoodforthought/cvpanalysisfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-cvpanalysisintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './cvpanalysisintroduction.component.html',
  styleUrls: ['./cvpanalysisintroduction.component.scss']
})
export class CvpanalysisintroductionComponent extends AbstractComponent {
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
    let apiname = '/cvpanalysis/fetchcvpanalysis';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].ai8 == 'yes') || (data.resultList[0].ai8 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].cvpAnalysisCM.cvpAnalysisCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
            }
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
    "Brainstorm a plethora of potential solutions, encouraging a mindset free of constraints. This stage is a melting pot of diverse perspectives, and its heart lies in out-of-the-box thinking. Once a wealth of ideas is on the table, the challenge is to evaluate and rank them, keeping in mind feasibility, impact, and innovation.",
    "It's time to give tangible form to the top ideas. These initial models are crafted not as finished products but as testable entities, ripe for feedback and iteration. The emphasis here is a balanced focus on functionality, aesthetics, and overall user experience.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Market', image: '../../../../assets/images/cvpanalysis/cvpmarket.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Marketing Budget', image: '.../../../../assets/images/cvpanalysis/cvpmarketingbudget.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Production Budget', image: '../../../../assets/images/cvpanalysis/cvpproductionbudget.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/cvpanalysis/cvpreports.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
  ]


  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(CvpanalysisfoodforthoughtComponent, {
      data: {},
    });


  }

}

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
import { HrpgamefoodforthoughtComponent } from '../hrpgamefoodforthought/hrpgamefoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-hrpgameintroduction',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrpgameintroduction.component.html',
  styleUrls: ['./hrpgameintroduction.component.scss']
})
export class HrpgameintroductionComponent extends AbstractComponent {
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
    let apiname = '/hrplanning/fetchhrplanning';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              if ((data.resultList[0].ae49 == 'yes') || (data.resultList[0].ae49 == 'Yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].hrPlanningCM.hrPlanningCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
            }
            this.checkloading = false;
          } this.checkloading = false;

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  textLines: string[] = [
    "Understand the internal and external environment in which the organization operates. Start by analyzing the market, including economic trends, technological developments, and competitive forces.",
    "Predict how many and what type of employees the organization will need in the future.Based on the environmental analysis, project future organizational needs, considering factors like projected growth, technological change, and evolving strategic priorities.",
    "Determine the number and types of employees the organization will have in the future if no actions are taken.Assess current HR inventory and predict factors like retirements, promotions, transfers, voluntary turnovers, etc.",
    "Identify the difference between supply and demand, highlighting areas where there might be a shortage or surplus of employees. Compare the results of demand and supply forecasting to identify gaps. Develop strategies to address the identified gaps, which can include recruitment, training, employee development, reassignment, layoffs, etc.",
    "Put the strategies and plans into action. Execute strategies, making decisions about recruitment drives, launching training programs, restructuring departments, etc.",
    "Assess the impact of HR plans and see if they align with organizational goals. Continuously review the outcomes of decisions and adjust based on feedback loops.",
  ]

  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));
  showAll: boolean[] = [false, false, false, false, false, false];

  cards = [
    { title: 'Environmental Analysis', image: '../../../../assets/images/hrpgame/enviromentalanalysis.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'Demand Forecasting', image: '.../../../../assets/images/hrpgame/demandforecasting.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'Supply Forecasting', image: '../../../../assets/images/hrpgame/supplyforecasting.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'Gap Analysis & Planning', image: '../../../../assets/images/hrpgame/gapanalysisplanning.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'Implementation', image: '../../../../assets/images/hrpgame/implementation.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'Reports', image: '../../../../assets/images/hrpgame/hrpreport.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },

  ]

  toggleshow(index: number) {
    this.showAll[index] = !this.showAll[index];
  }

  openDialog(): void {
    this.dialog.open(HrpgamefoodforthoughtComponent, {
      data: {},
    });
  }
}

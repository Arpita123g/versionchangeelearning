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

@Component({
  selector: 'app-changemanagementnewintroduction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './changemanagementnewintroduction.component.html',
  styleUrls: ['./changemanagementnewintroduction.component.scss']
})
export class ChangemanagementnewintroductionComponent extends AbstractComponent {
  foodforthought: boolean = true;
  language: any = [];


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
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.language = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()];

              if ((data.resultList[0].changemanagementnewdata.bh6 == 'yes')) {
                this.Sharedservice.enableTab();
              }
              if (data.resultList[0].changeManagementNewCM.changeManagementNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
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
    "b10",
    "b11",
    "b12",
    "b13",
    "b14",
    "b15",
  ];

  truncate(text: string) {
    return (text?.substring(0, 90) + (text?.length > 90 ? '...' : ''));
  }
  truncatedText: string[] = this.textLines.map((text) => text.substring(0, 90) + (text.length > 90 ? '...' : ''));

  cards = [
    { title: 'b4', image: '../../../../assets/images/changemanagementnew/memoforchange.svg', text: this.textLines[0], truncatedText: this.truncatedText[0], showAll: this.showAll },
    { title: 'b5', image: '.../../../../assets/images/changemanagementnew/dynamic.svg', text: this.textLines[1], truncatedText: this.truncatedText[1], showAll: this.showAll },
    { title: 'b6', image: '../../../../assets/images/changemanagementnew/awareness.svg', text: this.textLines[2], truncatedText: this.truncatedText[2], showAll: this.showAll },
    { title: 'b7', image: '../../../../assets/images/changemanagementnew/motivation.svg', text: this.textLines[3], truncatedText: this.truncatedText[3], showAll: this.showAll },
    { title: 'b8', image: '../../../../assets/images/changemanagementnew/commitment.svg', text: this.textLines[4], truncatedText: this.truncatedText[4], showAll: this.showAll },
    { title: 'b9', image: '../../../../assets/images/changemanagementnew/reportsforchange.svg', text: this.textLines[5], truncatedText: this.truncatedText[5], showAll: this.showAll },
  ];


}


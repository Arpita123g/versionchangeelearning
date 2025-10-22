import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ChangemanagementnewfoodforthougthComponent } from '../changemanagementnewfoodforthougth/changemanagementnewfoodforthougth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-changemanagementnewhumandynamics',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, TippyDirective],
  templateUrl: './changemanagementnewhumandynamics.component.html',
  styleUrls: ['./changemanagementnewhumandynamics.component.scss']
})
export class ChangemanagementnewhumandynamicsComponent extends AbstractComponent {
  foodforthought: boolean = true;
  language: any = [];
  imageData: any = {}

  p = '#C3F9C3 ';
  n = '#f7cac9';
  nu = '#FFD77E ';
  blank = '#EEEEEF'
  showAll1: boolean[] = [false, false, false];
  showAll2: boolean[] = [false, false, false];
  languageSub: Subscription;
  languagePrimary: string = '';
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.languageSub = this._global.language.subscribe((data: any) => {
      this.languagePrimary = data;
    })

  }

  textLines1: string[] = ["b21", "b23", "b25"];

  textLines2: string[] = ["b27", "b29", "b31"];

  truncatedText1: string[] = this.textLines1.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));
  truncatedText2: string[] = this.textLines2.map((text) => text.substring(0, 100) + (text.length > 100 ? '...' : ''));

  cards1 = [
    { name: "b20", text: this.textLines1[0], truncatedText: this.truncatedText1[0], showAll: this.showAll1 },
    { name: "b28", text: this.textLines2[1], truncatedText: this.truncatedText2[1], showAll: this.showAll2 },
    { name: "b24", text: this.textLines1[2], truncatedText: this.truncatedText1[2], showAll: this.showAll1 },
  ];

  cards2 = [
    { name: "b26", text: this.textLines2[0], truncatedText: this.truncatedText2[0], showAll: this.showAll2 },
    { name: "b22", text: this.textLines1[1], truncatedText: this.truncatedText1[1], showAll: this.showAll1 },
    { name: "b30", text: this.textLines2[2], truncatedText: this.truncatedText2[2], showAll: this.showAll2 },
  ];

  override ngOnInit(): void {
    this.getFetchData();
  }


  toggleshow1(index: number) {
    this.showAll1[index] = !this.showAll1[index];
  }
  toggleshow2(index: number) {
    this.showAll2[index] = !this.showAll2[index];
  }


  getFetchData() {
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this.imageData = data.resultList[0].changeManagementNewLM;
            this.language = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()];

            this._global.casemanagementid.next(data.resultList[0].changemanagementnewcmid);
            if (data.resultList[0].changeManagementNewCM.changeManagementNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }

          }
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
}

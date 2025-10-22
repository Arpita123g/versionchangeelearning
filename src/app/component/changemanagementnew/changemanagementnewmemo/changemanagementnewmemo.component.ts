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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-changemanagementnewmemo',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './changemanagementnewmemo.component.html',
  styleUrls: ['./changemanagementnewmemo.component.scss']
})
export class ChangemanagementnewmemoComponent extends AbstractComponent {
  outlooktextcontent: any = []
  foodforthought: boolean = true;
  contentvalue: string = '';
  foodvalue: string = '';
  language: any = [];
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

  override ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let apiname = '/changemanagementnew/fetchchangemanagementnew';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.language = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()];

              if (data.resultList[0].changeManagementNewCM.changeManagementNewCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }

              let outlookdata = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()].b16;
              outlookdata = outlookdata.replace(/\\/g, '');
              this.outlooktextcontent[0] = outlookdata.replace(/\n/g, '<br>');
              this.contentvalue = this.outlooktextcontent[0];
              this.foodvalue = data.resultList[0].changeManagementNewLM[this.languageselect.toLowerCase()].b225;
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

  openDialog(): void {
    this.dialog.open(ChangemanagementnewfoodforthougthComponent, {
      data: {},
    });
  }
}

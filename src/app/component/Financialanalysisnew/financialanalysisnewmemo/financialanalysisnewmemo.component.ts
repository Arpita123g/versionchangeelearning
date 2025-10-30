import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FinancialanalysisnewfoodforthoughtComponent } from '../financialanalysisnewfoodforthought/financialanalysisnewfoodforthought.component';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

@Component({
  selector: 'app-financialanalysisnewmemo',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule, MatButtonModule,MatIconModule,
    TippyDirective
  ],
  templateUrl: './financialanalysisnewmemo.component.html',
  styleUrls: ['./financialanalysisnewmemo.component.scss']
})
export class FinancialanalysisnewmemoComponent extends AbstractComponent {
  outlooktextcontent: any = []
  foodforthought: boolean = true;
  contentvalue: string = '';

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].financialAnalysisCM.financialAnalysisCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              let outlookdata = data.resultList[0].financialAnalysisCM.b5;
              this.outlooktextcontent[0] = outlookdata;
              this.contentvalue = this.outlooktextcontent[0];
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
    this.dialog.open(FinancialanalysisnewfoodforthoughtComponent, {
      data: {},
    });
  }

}

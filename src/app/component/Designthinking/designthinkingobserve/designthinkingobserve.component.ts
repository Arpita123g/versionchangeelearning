import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { DesignthinkingfoodforthoughtComponent } from '../designthinkingfoodforthought/designthinkingfoodforthought.component';

@Component({
  selector: 'app-designthinkingobserve',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule],
  templateUrl: './designthinkingobserve.component.html',
  styleUrls: ['./designthinkingobserve.component.scss']
})
export class DesignthinkingobserveComponent extends AbstractComponent {

  @Output() newEvent = new EventEmitter<any>();
  outlooktextheading: any = []
  outlooktextcontent: any = []
  foodforthought: boolean = true;
  headingvalue: string = '';
  contentvalue: string = '';
  result: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let apiname = '/designthinking/fetchdesignthinking';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].designThinkingCM.designThinkingCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              let outlookdata = data.resultList[0].designThinkingCM.b5;
              outlookdata = outlookdata.replace(/\\/g, '');
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
    this.dialog.open(DesignthinkingfoodforthoughtComponent, {
      data: {},
    });
  }

}

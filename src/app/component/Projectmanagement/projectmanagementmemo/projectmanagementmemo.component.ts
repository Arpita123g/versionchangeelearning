import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ProjectmanagementfoodforthoughtComponent } from '../projectmanagementfoodforthought/projectmanagementfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-projectmanagementmemo',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './projectmanagementmemo.component.html',
  styleUrls: ['./projectmanagementmemo.component.scss'],
})
export class ProjectmanagementmemoComponent extends AbstractComponent {
  @Output() newEvent = new EventEmitter<any>();
  outlooktextheading: any = [];
  outlooktextcontent: any = [];
  foodforthought: boolean = true;
  headingvalue: string = '';
  contentvalue: string = '';
  result: any = [];
  foodvalue: string = '';
  periodcellvalue: any = ['e5', 'e6', 'e7'];

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    let apiname = '/projectmanagement/fetchprojectmanagement';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            if (
              data.resultList[0].projectmanagementCM
                .projectmanagementCMActiveStatus.foodforthoughtstatus ==
              'inactive'
            ) {
              this.foodforthought = false;
            }
            for (let i = 0; i < this.periodcellvalue.length; i++) {
              this.result[i] =
                data.resultList[0].projectmanagementCM[this.periodcellvalue[i]];
            }
            let outlookdata = data.resultList[0].projectmanagementCM.b5;
            outlookdata = outlookdata.replace(/\\/g, '');
            this.outlooktextcontent[0] = outlookdata;
            this.contentvalue = this.outlooktextcontent[0];
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      },
    });
  }

  // For Language

  // fetchData() {
  //   let apiname = '/projectmanagement/fetchprojectmanagement';
  //   this._api.fetchLanguageData(apiname, this.noofattempt,this.languageselect).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             if (data.resultList[0].projectmanagementCM.projectmanagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
  //               this.foodforthought = false;
  //             }
  //             let outlookdata = data.resultList[0].projectmanagementLM[this.languageselect.toLowerCase()].b23;
  //             // let outlookdata = this.language.b23;

  //             outlookdata = outlookdata.replace(/\\/g, '');
  //             this.outlooktextcontent[0] = outlookdata;
  //             this.contentvalue = this.outlooktextcontent[0];
  //             this.foodvalue = data.resultList[0].projectmanagementLM[this.languageselect.toLowerCase()].b22;
  //           }
  //           this.checkloading = false;
  //         } else {
  //           this.checkloading = false;
  //         }

  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }

  openDialog(): void {
    this.dialog.open(ProjectmanagementfoodforthoughtComponent, {
      data: {},
    });
  }
}

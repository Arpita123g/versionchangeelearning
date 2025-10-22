import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-projectmanagementcaseprojectmap',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './projectmanagementcaseprojectmap.component.html',
  styleUrls: ['./projectmanagementcaseprojectmap.component.scss']
})
export class ProjectmanagementcaseprojectmapComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];

  taskList: string[] = Array.from({ length: 20 }, (_, i) => `Task ${i + 1}`);


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }
  override ngOnInit(): void {
    this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getFetchData();
  }

  getFetchData() {
    //***********it will be uncommitted*******************/
    let apiname = "/projectmanagementcm/fetchprojectmanagementcm"
    this._api.fetchCaseManagementData(apiname).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj.cbgameperioddata).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj.cbgameperioddata[key]);
                });
              });
            }
            console.log("v22", this.res.j6[0])
          }

        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  writeMarketingValue(cellname: string, index: number, value: any) {
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/projectmanagementcm/updateprojectmanagementcm'
    if ((cellname == "ap29")) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'projectmanagementcm', body, {}, apiname, 'projectmanagementcmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            // this.res[cellname][index] = value;
          } else {
            this.res[cellname][index] = this.res[cellname][index];
          }
        }, error: (error: any) => {
          this.checkloading = false;
          // this.driveerrorLog(error, apiname);
        }
      })
  }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FinancialanalysisnewfoodforthoughtComponent } from '../financialanalysisnewfoodforthought/financialanalysisnewfoodforthought.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { CommonComponentsModule } from 'src/app/common/common.module';


@Component({
  selector: 'app-financialanalysisnewthesis',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, RouterModule, NgApexchartsModule, MatIconModule, CommonComponentsModule],

  templateUrl: './financialanalysisnewthesis.component.html',
  styleUrls: ['./financialanalysisnewthesis.component.scss']
})
export class FinancialanalysisnewthesisComponent extends AbstractComponent {
  foodforthought: boolean = true;
  issubmitdata: boolean = false;
  isDisabled: boolean = false;
  i: string[] = [];
  //   nums: number[] = [
  //     17.39, 14.25, 30.45, 14.83, 11.11, 28.27, 13.52, 10.01, 26.88, 0.052, 0.068,
  //     0.552, 0.049, 0.064, 0.356, 9.56, 2.39, 8.09, 1.78, 1.9, 0.91, 17.75, 8.38,
  //     10.35, 20.56, 43.55, 35.27, 24, 9, 28, 20, 4, 19, 29, 9, 16, 30, 9, 25,
  //     331.37, 137.06, 103.49, 99.35, 12.66, 25.40, 17.11, 24.88, 11.61
  // ];
  percentageconvert: any = []

  databasecellvalue: any = [
    'ak5', 'al5', 'am5',
    'ak6', 'al6', 'am6',
    'ak7', 'al7', 'am7',
    'ak10', 'al10', 'am10',
    'ak11', 'al11', 'am11',
    'ak12', 'al12', 'am12',
    'ak15', 'al15', 'am15',
    'ak16', 'al16', 'am16',
    'ak17', 'al17', 'am17',
    'ak20', 'al20', 'am20',
    'ak21', 'al21', 'am21',
    'ak22', 'al22', 'am22',
    'ak23', 'al23', 'am23',
    'ak26', 'al26', 'am26',
    'ak27', 'al27', 'am27',
    'ak28', 'al28', 'am28',
  ]

  dropdowncellname: any = [
    'f7', 'g7', 'h7',
    'f8', 'g8', 'h8',
    'f9', 'g9', 'h9',

    'f12', 'g12', 'h12',
    'f13', 'g13', 'h13',
    'f14', 'g14', 'h14',

    'f17', 'g17', 'h17',
    'f18', 'g18', 'h18',
    'f19', 'g19', 'h19',

    'f22', 'g22', 'h22',
    'f23', 'g23', 'h23',
    'f24', 'g24', 'h24',
    'f25', 'g25', 'h25',

    'f28', 'g28', 'h28',
    'f29', 'g29', 'h29',
    'f30', 'g30', 'h30',
  ]

  dropdownvalue: any = [];
  firsttime: boolean = true;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {

    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/financialanalysis/fetchfinancialanalysis';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {

            if (data.resultList != null) {
              this.dropdownvalue = [];
              this.i = [];
              this._global.casemanagementid.next(data.resultList[0].financialanalysiscmid);
              if (data.resultList[0].financialAnalysisCM.financialAnalysisCMActiveStatus.foodforthougthtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.databasecellvalue.length; i++) {
                this.i[i] = String(data.resultList[0][this.databasecellvalue[i]]);
              }
              for (let i = 0; i < this.dropdowncellname.length; i++) {
                this.dropdownvalue[i] = data.resultList[0][this.dropdowncellname[i]];
              }

              if ((data.resultList[0].am31 == "yes") || (this.timefinished)) {
                this.isDisabled = true;
              }
              if ((this.dropdownvalue[0] == String(0)) && (this.firsttime)) {
                this.writefsaValue('am33', 'Current Period');
              }

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

  writefsaValue(cellname: string, cellvalue: string) {
    let apiname = '/financialanalysis/singleinputfinancialanalysis';
    let financialanalysisData = {
      [cellname]: cellvalue,

    }
    console.log('writedata', financialanalysisData)
    this._api.financialanalysisdatawrite("financialanalysis", 1,
      financialanalysisData, apiname, 'financialanalysiscmid').subscribe((data: any) => {
        if (data.status == "Success") {
          if (this.firsttime) {
            this.firsttime = false;
            this.getFetchData();

          }
        }

      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }


  openDialog(): void {
    this.dialog.open(FinancialanalysisnewfoodforthoughtComponent, {
      data: {},
    });
  }


}

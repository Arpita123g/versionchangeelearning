import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { DesignthinkingfoodforthoughtComponent } from '../designthinkingfoodforthought/designthinkingfoodforthought.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
@Component({
  selector: 'app-designthinkingideate',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatChipsModule,
     MatRadioModule, RouterModule, FormsModule, MatIconModule, TippyDirective],
  templateUrl: './designthinkingideate.component.html',
  styleUrls: ['./designthinkingideate.component.scss']
})
export class DesignthinkingideateComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  disabled: boolean[] = [];
  result: any = [];
 totalSelectedcheckbox: number = 0;
  

  databasecellname: any = ['af12', 'af13', 'af14', 'af15', 'af16', 'af17', 'af18', 'af19', 'af20', 'af21'];

  periodcellname: any = ['o7', 'o8', 'o9', 'o10', 'o11', 'o12', 'o13', 'o14', 'o15', 'o16', 'o17'
  ];
  

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/designthinking/fetchdesignthinking';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].designthinkingcmid);
              if (data.resultList[0].designThinkingCM.designThinkingCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              //get period data
              for (let i = 0; i < this.periodcellname.length; i++) {
                this.result[i] = data.resultList[0].designThinkingCM[this.periodcellname[i]]
              }
              //get database & Calculation Data
              for (let i = 11; i < 21; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 11]]
                if (this.result[i] == 1) {
                  this.result[i] = true;
                  this.totalSelectedcheckbox = this.totalSelectedcheckbox + 1;
                }else{
                  this.result[i] = false;
                }
              }
              //checkbox condition add
              if (this.totalSelectedcheckbox == 3) {
                for (let j = 11; j < 21; j++) {
                  if (this.result[j] == true) {
                    this.disabled[j - 11] = false;
                  } else {
                    this.disabled[j - 11] = true;
                  }
                }

              }
              
            //submit,timefinished data for disable input
              if ((data.resultList[0].af65 == 'Yes') || (data.resultList[0].af65 == 'yes') || (this.timefinished)) {
                this.checkdisable = true;
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

  getSelection(index: number) {
    if (this.result[index] == true) {
      this.totalSelectedcheckbox = this.totalSelectedcheckbox + 1;
      if (this.totalSelectedcheckbox == 3) {
        for (let i = 11; i < 21; i++) {
          if (this.result[i] == true) {
            this.disabled[i - 11] = false;
          } else {
            this.disabled[i - 11] = true;
          }
        }
      }
    } else {
      this.totalSelectedcheckbox = this.totalSelectedcheckbox - 1;
      if (this.totalSelectedcheckbox <= 3) {
        for (let j = 0; j < 10; j++) {
          this.disabled[j] = false;
        }
      }
    }
    this.writeRoutesandTechnology();
  }

  writeRoutesandTechnology() {
    let apiname = '/designthinking/singleinputdesignthinking';
    let implementedData = {
      "af12": this.result[11] == true ? '1' : '0',
      "af13": this.result[12] == true ? '1' : '0',
      "af14": this.result[13] == true ? '1' : '0',
      "af15": this.result[14] == true ? '1' : '0',
      "af16": this.result[15] == true ? '1' : '0',
      "af17": this.result[16] == true ? '1' : '0',
      "af18": this.result[17] == true ? '1' : '0',
      "af19": this.result[18] == true ? '1' : '0',
      "af20": this.result[19] == true ? '1' : '0',
      "af21": this.result[20] == true ? '1' : '0',

    }
    this._api.writeGameData("designthinking", 2,
      implementedData, apiname, 'designthinkingcmid').subscribe((data: any) => {
        if (data.status == "Success") {
          // this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }

  
  openDialog(): void {
    this.dialog.open(DesignthinkingfoodforthoughtComponent, {
      data: {},
    });
  }

}

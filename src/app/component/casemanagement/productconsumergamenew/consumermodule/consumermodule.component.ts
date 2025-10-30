import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ConsumercasecraftingComponent } from '../consumercasecrafting/consumercasecrafting.component';
import { ConsumercaseheaderComponent } from '../consumercaseheader/consumercaseheader.component';
import { ConsumercasetargetComponent } from '../consumercasetarget/consumercasetarget.component';
import { ConsumerconceptualizingComponent } from '../consumerconceptualizing/consumerconceptualizing.component';
import { ConsumerfoodforthougthComponent } from '../consumerfoodforthougth/consumerfoodforthougth.component';
import { ConsumerinformationsearchComponent } from '../consumerinformationsearch/consumerinformationsearch.component';
import { ConsumeroutlookComponent } from '../consumeroutlook/consumeroutlook.component';
@Component({
  selector: 'app-consumermodule',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    ConsumercasecraftingComponent,
    ConsumercaseheaderComponent,
    ConsumercasetargetComponent,
    ConsumerconceptualizingComponent,
    ConsumerfoodforthougthComponent,
    ConsumerinformationsearchComponent,
    ConsumeroutlookComponent,
  ],
  templateUrl: './consumermodule.component.html',
  styleUrls: ['./consumermodule.component.scss']
})
export class ConsumermoduleComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  getSelectTab:any;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }


  override ngOnInit(): void {
     let caseType = localStorage.getItem('selectedTab')
     if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }

    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getFetchData();
  }


  getFetchData() {
   this.getSelectTab = localStorage.getItem('selectedTab');

    if (this.getSelectTab == 'cesimcase')  {
      let apiname = "/consumerbehaviournewmaster/fetchconsumerbehaviournewmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({

        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {


              data.resultList.forEach((obj: any) => {
                Object.keys(obj).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj[key]);
                });
              });

            }
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/consumerbehaviournewcm/fetchconsumerbehaviournewcm";
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {


                data.resultList.forEach((obj: any) => {
                  Object.keys(obj).forEach((key: any) => {
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    this.res[key].push(obj[key]);
                  });
                });

              }
              this.checkloading = false;
            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }





  }


  writeModuleValue(index: number, updatedsearchtypevalue: string, modulestatusvalue: string, cellname: string, value1: any, value2: any) {
    let apiname = '/consumerbehaviournewcm/updateconsumerbehaviournewcm';

    let body1 = {}
    let body2 = {}
    if (modulestatusvalue == "yes") {
      if (value2.target.checked == false) {
        value2 = 'inactive'
      } else {
        value2 = 'active'
      }
      body1 = {}
      body2 = {
        [cellname]: value2,
      }
    } else {
      body1 = { [cellname]: value1, }
      body2 = {}
    }

    this._api.updatecasemanagementdata(String(index + 1), updatedsearchtypevalue, modulestatusvalue, 'consumerbehaviournewcm', body1, body2, apiname, 'consumerbehaviournewcmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (modulestatusvalue == 'yes') {
              this.res.consumerBehaviourNewCMActiveStatus[index][cellname] = value2;
            }


          } else {
            if (modulestatusvalue == 'yes') {
              this.res.consumerBehaviourNewCMActiveStatus[index][cellname] = this.res.consumerBehaviourNewCMActiveStatus[index][cellname];
            } else {
              this.res[cellname][index] = this.res.cellname[index];
            }

          }

        }, error: (error: any) => {
          if (modulestatusvalue == 'yes') {
            this.res.consumerBehaviourNewCMActiveStatus[index][cellname] = this.res.consumerBehaviourNewCMActiveStatus[index][cellname];
          }
          this.checkloading = false;
          //  this.driveerrorLog(error, apiname);
        }
      })

  }


}

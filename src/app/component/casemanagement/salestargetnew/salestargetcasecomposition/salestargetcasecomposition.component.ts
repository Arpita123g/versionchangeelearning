import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-salestargetcasecomposition',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './salestargetcasecomposition.component.html',
  styleUrls: ['./salestargetcasecomposition.component.scss']
})
export class SalestargetcasecompositionComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(20).fill(null);
  data1: any[] = Array(50).fill(null);
  selectedLanguage: string = "english";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }
  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getFetchData();
     let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }

  }


  getFetchData() {
    //***********it will be uncommitted*******************/
    
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase')  {
      let apiname = "/salestargetmaster/fetchsalestargetmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
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
              }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    } else{
      let apiname = "/salestargetcm/fetchsalestargetcm"
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
              }
  
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }
   
  }

  writeMarketingValue(cellname: string, index: number, value: any) {
    let apiname = '/salestargetcm/updatesalestargetcm'
    if ((cellname == "n8") || (cellname == "n9") || (cellname == "n10") || (cellname == "n14") || (cellname == "n15")
      || (cellname == "n16") || (cellname == "n20") || (cellname == "n21") || (cellname == "n22") || (cellname == "n26")
      || (cellname == "n27") || (cellname == "n28") || (cellname == "n32") || (cellname == "n33") || (cellname == "n34")
      || (cellname == "n38") || (cellname == "n39") || (cellname == "n40") || (cellname == "n44") || (cellname == "n45")
      || (cellname == "n46") || (cellname == "n50") || (cellname == "n51") || (cellname == "n52") || (cellname == "n56")
      || (cellname == "n57") || (cellname == "n58") || (cellname == "n62") || (cellname == "n63") || (cellname == "n64")
      || (cellname == "n68") || (cellname == "n69") || (cellname == "n70") || (cellname == "n74") || (cellname == "n75")
      || (cellname == "n76") || (cellname == "n80") || (cellname == "n81") || (cellname == "n82") || (cellname == "n86")
      || (cellname == "n87") || (cellname == "n88") || (cellname == "n92") || (cellname == "n93") || (cellname == "n94")
      || (cellname == "n98") || (cellname == "n99") || (cellname == "n100") || (cellname == "n104") || (cellname == "n105")
      || (cellname == "n106") || (cellname == "n110") || (cellname == "n111") || (cellname == "n112")
      ) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'salestargetcm', body, {}, apiname, 'salestargetcmactivestatus').subscribe(
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
  override ngOnDestroy() {
    this.Instructorelementdetailssub.unsubscribe();
  
  }

}

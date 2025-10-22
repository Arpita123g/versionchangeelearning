import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-ecommerccasemarketing',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './ecommerccasemarketing.component.html',
  styleUrls: ['./ecommerccasemarketing.component.scss']
})
export class EcommerccasemarketingComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(20).fill(null);
  data1: any[] = Array(30).fill(null);
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
    if (getSelectTab == 'cesimcase') {
      let apiname = "/ecommercegamemaster/fetchecommercegamemaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj.ecommercegameperioddata).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj.ecommercegameperioddata[key]);
                });
              });
            }
          }
          this.checkloading = false;
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/ecommercegamecm/fetchecommercegamecm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  Object.keys(obj.ecommercegameperioddata).forEach((key: any) => {
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    this.res[key].push(obj.ecommercegameperioddata[key]);
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
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/ecommercegamecm/updateecommercegamecm'
    if ((cellname == "w28") || (cellname == "w29") || (cellname == "w30") || (cellname == "w31") || (cellname == "w32") ||
      (cellname == "w33") || (cellname == "w34") || (cellname == "w35") || (cellname == "w36") || (cellname == "w37") ||
      (cellname == "w38") || (cellname == "w39") || (cellname == "w40") || (cellname == "w41") || (cellname == "w42") ||
      (cellname == "w43") || (cellname == "w44") || (cellname == "w45") || (cellname == "w46") || (cellname == "w37") ||
      (cellname == "w48") || (cellname == "w49") || (cellname == "w50") || (cellname == "w51") || (cellname == "w52") ||
      (cellname == "w53") || (cellname == "w54") || (cellname == "w55") || (cellname == "w56") || (cellname == "w57") ||
      (cellname == "x28") || (cellname == "x29") || (cellname == "x30") || (cellname == "x31") || (cellname == "x32") ||
      (cellname == "x33") || (cellname == "x34") || (cellname == "x35") || (cellname == "x36") || (cellname == "x37") ||
      (cellname == "x38") || (cellname == "x39") || (cellname == "x40") || (cellname == "x41") || (cellname == "x42") ||
      (cellname == "x43") || (cellname == "x44") || (cellname == "x45") || (cellname == "x46") || (cellname == "x37") ||
      (cellname == "x48") || (cellname == "x49") || (cellname == "x50") || (cellname == "x51") || (cellname == "x52") ||
      (cellname == "x53") || (cellname == "x54") || (cellname == "x55") || (cellname == "x56") || (cellname == "x57") ||
      (cellname == "y28") || (cellname == "y29") || (cellname == "y30") || (cellname == "y31") || (cellname == "y32") ||
      (cellname == "y33") || (cellname == "y34") || (cellname == "y35") || (cellname == "y36") || (cellname == "y37") ||
      (cellname == "y38") || (cellname == "y39") || (cellname == "y40") || (cellname == "y41") || (cellname == "y42") ||
      (cellname == "y43") || (cellname == "y44") || (cellname == "y45") || (cellname == "y46") || (cellname == "y37") ||
      (cellname == "y48") || (cellname == "y49") || (cellname == "y50") || (cellname == "y51") || (cellname == "y52") ||
      (cellname == "y53") || (cellname == "y54") || (cellname == "y55") || (cellname == "y56") || (cellname == "y57") ||
      (cellname == "z28") || (cellname == "z29") || (cellname == "z30") || (cellname == "z31") || (cellname == "z32") ||
      (cellname == "z33") || (cellname == "z34") || (cellname == "z35") || (cellname == "z36") || (cellname == "z37") ||
      (cellname == "z38") || (cellname == "z39") || (cellname == "z40") || (cellname == "z41") || (cellname == "z42") ||
      (cellname == "z43") || (cellname == "z44") || (cellname == "z45") || (cellname == "z46") || (cellname == "z37") ||
      (cellname == "z48") || (cellname == "z49") || (cellname == "z50") || (cellname == "z51") || (cellname == "z52") ||
      (cellname == "z53") || (cellname == "z54") || (cellname == "z55") || (cellname == "z56") || (cellname == "z57") ||
      (cellname == "aa28") || (cellname == "aa29") || (cellname == "aa30") || (cellname == "aa31") || (cellname == "aa32") ||
      (cellname == "aa33") || (cellname == "aa34") || (cellname == "aa35") || (cellname == "aa36") || (cellname == "aa37") ||
      (cellname == "aa38") || (cellname == "aa39") || (cellname == "aa40") || (cellname == "aa41") || (cellname == "aa42") ||
      (cellname == "aa43") || (cellname == "aa44") || (cellname == "aa45") || (cellname == "aa46") || (cellname == "aa37") ||
      (cellname == "aa48") || (cellname == "aa49") || (cellname == "aa50") || (cellname == "aa51") || (cellname == "aa52") ||
      (cellname == "aa53") || (cellname == "aa54") || (cellname == "aa55") || (cellname == "aa56") || (cellname == "aa57") ||
      (cellname == "ab28") || (cellname == "ab29") || (cellname == "ab30") || (cellname == "ab31") || (cellname == "ab32") ||
      (cellname == "ab33") || (cellname == "ab34") || (cellname == "ab35") || (cellname == "ab36") || (cellname == "ab37") ||
      (cellname == "ab38") || (cellname == "ab39") || (cellname == "ab40") || (cellname == "ab41") || (cellname == "ab42") ||
      (cellname == "ab43") || (cellname == "ab44") || (cellname == "ab45") || (cellname == "ab46") || (cellname == "ab37") ||
      (cellname == "ab48") || (cellname == "ab49") || (cellname == "ab50") || (cellname == "ab51") || (cellname == "ab52") ||
      (cellname == "ab53") || (cellname == "ab54") || (cellname == "ab55") || (cellname == "ab56") || (cellname == "ab57") ||
      (cellname == "ac28") || (cellname == "ac29") || (cellname == "ac30") || (cellname == "ac31") || (cellname == "ac32") ||
      (cellname == "ac33") || (cellname == "ac34") || (cellname == "ac35") || (cellname == "ac36") || (cellname == "ac37") ||
      (cellname == "ac38") || (cellname == "ac39") || (cellname == "ac40") || (cellname == "ac41") || (cellname == "ac42") ||
      (cellname == "ac43") || (cellname == "ac44") || (cellname == "ac45") || (cellname == "ac46") || (cellname == "ac37") ||
      (cellname == "ac48") || (cellname == "ac49") || (cellname == "ac50") || (cellname == "ac51") || (cellname == "ac52") ||
      (cellname == "ac53") || (cellname == "ac54") || (cellname == "ac55") || (cellname == "ac56") || (cellname == "ac57") ||
      (cellname == "ad28") || (cellname == "ad29") || (cellname == "ad30") || (cellname == "ad31") || (cellname == "ad32") ||
      (cellname == "ad33") || (cellname == "ad34") || (cellname == "ad35") || (cellname == "ad36") || (cellname == "ad37") ||
      (cellname == "ad38") || (cellname == "ad39") || (cellname == "ad40") || (cellname == "ad41") || (cellname == "ad42") ||
      (cellname == "ad43") || (cellname == "ad44") || (cellname == "ad45") || (cellname == "ad46") || (cellname == "ad37") ||
      (cellname == "ad48") || (cellname == "ad49") || (cellname == "ad50") || (cellname == "ad51") || (cellname == "ad52") ||
      (cellname == "ad53") || (cellname == "ad54") || (cellname == "ad55") || (cellname == "ad56") || (cellname == "ad57") ||
      (cellname == "ae28") || (cellname == "ae29") || (cellname == "ae30") || (cellname == "ae31") || (cellname == "ae32") ||
      (cellname == "ae33") || (cellname == "ae34") || (cellname == "ae35") || (cellname == "ae36") || (cellname == "ae37") ||
      (cellname == "ae38") || (cellname == "ae39") || (cellname == "ae40") || (cellname == "ae41") || (cellname == "ae42") ||
      (cellname == "ae43") || (cellname == "ae44") || (cellname == "ae45") || (cellname == "ae46") || (cellname == "ae37") ||
      (cellname == "ae48") || (cellname == "ae49") || (cellname == "ae50") || (cellname == "ae51") || (cellname == "ae52") ||
      (cellname == "ae53") || (cellname == "ae54") || (cellname == "ae55") || (cellname == "ae56") || (cellname == "ae57")

    ) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'ecommercegamecm', body, {}, apiname, 'ecommercegamecmactivestatus').subscribe(
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

  override ngOnDestroy(): void {
    this.Instructorelementdetailssub.unsubscribe();
  }

}

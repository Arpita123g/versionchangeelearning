import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
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
  selector: 'app-ecommerccasecatalog',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './ecommerccasecatalog.component.html',
  styleUrls: ['./ecommerccasecatalog.component.scss']
})
export class EcommerccasecatalogComponent extends AbstractComponent {
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

  getProductName(index: number): string {
    const Category = [
      "Women's Apparel", "Women's Apparel", "Women's Apparel", "Women's Apparel",
      "Women's Apparel", "Women's Apparel", "Women's Apparel", "Women's Apparel",
      "Women's Apparel", "Women's Apparel", "Men's Apparel", "Men's Apparel",
      "Men's Apparel", "Men's Apparel", "Men's Apparel", "Men's Apparel",
      "Men's Apparel", "Men's Apparel", "Men's Apparel", "Men's Apparel",
      "Accessories", "Accessories", "Accessories", "Accessories", "Accessories",
      "Accessories", "Accessories", "Accessories", "Accessories", "Accessories"
    ];
    return Category[index] || "Product";
  }

  generateKeys(prefix: string, start: number, end: number): string[] {
    return Array.from({ length: end - start + 1 }, (_, i) => `${prefix}${start + i}`);
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
    if ((cellname == "t7") || (cellname == "t8") || (cellname == "t9") || (cellname == "t10") || (cellname == "t11") ||
      (cellname == "t12") || (cellname == "t13") || (cellname == "t14") || (cellname == "t15") || (cellname == "t16") ||
      (cellname == "t17") || (cellname == "t18") || (cellname == "t19") || (cellname == "t20") || (cellname == "t21") ||
      (cellname == "t22") || (cellname == "t23") || (cellname == "t24") || (cellname == "t25") || (cellname == "t26") ||
      (cellname == "t27") || (cellname == "t28") || (cellname == "t29") || (cellname == "t30") || (cellname == "t31") ||
      (cellname == "t32") || (cellname == "t33") || (cellname == "t34") || (cellname == "t35") || (cellname == "t36") ||
      (cellname == "i40") || (cellname == "i41") || (cellname == "i42") || (cellname == "i43") || (cellname == "i44")
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

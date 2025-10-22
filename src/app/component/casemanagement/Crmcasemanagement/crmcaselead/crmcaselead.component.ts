import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

@Component({
  selector: 'app-crmcaselead',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, TippyDirective],
  templateUrl: './crmcaselead.component.html',
  styleUrls: ['./crmcaselead.component.scss']
})
export class CrmcaseleadComponent extends AbstractComponent {
  defaultcase: string = "";
  res: any = [];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
     let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
    this.getFetchData();
  }


  leads: any[] = [];

  generateLeads() {
    let leads = [];

    for (let leadId = 1; leadId <= 25; leadId++) {
      let rows: any[] = [];
      for (let keyPrefix of ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't']) {
        rows.push({
          label: this.getLabel(keyPrefix),
          key: `${keyPrefix}${7 + leadId - 1}`
        });
      }

      leads.push({
        name: `Lead ID ${leadId}`,
        rows: rows
      });
    }

    this.leads = leads;
  }

  getLabel(keyPrefix: string): string {
    switch (keyPrefix) {
      case 'i': return 'Contact Information';
      case 'j': return 'Lead Source';
      case 'k': return 'Industry';
      case 'l': return 'Budget';
      case 'm': return 'Urgency';
      case 'n': return 'Lead Score';
      case 'o': return 'Lead Status';
      case 'p': return 'Stage in Sales Cycle';
      case 'q': return 'Next Steps';
      case 'r': return 'Follow-up Actions';
      case 's': return 'Probability of conversion';
      case 't': return 'Ideal Priority';
      default: return '';
    }
  }

  getFetchData() {
    //***********it will be uncommitted*******************/
    let apiname = "/crmgamecm/fetchcrmgamecm"
    this._api.fetchCaseManagementData(apiname).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj.crmgameperioddata).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj.crmgameperioddata[key]);
                });
              });
            }
            this.generateLeads();
            this.checkloading = false;
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
    let apiname = '/crmgamecm/updatecrmgamecm'
    if ((cellname == "v7")) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'crmgamecm', body, {}, apiname, 'crmgamecmactivestatus').subscribe(
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
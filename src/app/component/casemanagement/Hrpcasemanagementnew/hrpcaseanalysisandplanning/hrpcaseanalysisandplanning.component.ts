import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { combineLatest, Subject, Subscription, takeUntil } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-hrpcaseanalysisandplanning',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './hrpcaseanalysisandplanning.component.html',
  styleUrls: ['./hrpcaseanalysisandplanning.component.scss']
})
export class HrpcaseanalysisandplanningComponent extends AbstractComponent implements OnChanges, OnDestroy {
  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(20).fill(null);
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  attempt: string = "1";
  selectedLanguage: string = "english";
  languageData: any = [];
  private destroy$ = new Subject<void>();
  @Input() active: boolean = false;
  private subscribed = false;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private sharedState: SharedserviceService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
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

    // this.sharedState.attempt$.subscribe(attempt => {
    //   this.attempt = attempt;
    //   this.getLanguageData(this.attempt, this.selectedLanguage);
    // });

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['active'] && this.active && !this.subscribed) {
      this.subscribed = true;

      combineLatest([
        this.sharedState.attempt$,
        this.sharedState.selectedLanguage$
      ])
        .pipe(takeUntil(this.destroy$))
        .subscribe(([attempt, lang]) => {
          this.attempt = attempt;
          this.selectedLanguage = lang;
          this.getLanguageData(this.attempt, this.selectedLanguage);
        });
    }
  }

  getFetchData() {
    //***********it will be uncommitted*******************/
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/hrplanningnewmaster/fetchhrplanningnewmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj.hrplanningnewperioddata).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj.hrplanningnewperioddata[key]);
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
      let apiname = "/hrplanningnewcm/fetchhrplanningnewcm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  Object.keys(obj.hrplanningnewperioddata).forEach((key: any) => {
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    this.res[key].push(obj.hrplanningnewperioddata[key]);
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
    let apiname = '/hrplanningnewcm/updatehrplanningnewcm'
    value = value.replace(",", "");
    if ((cellname == "l30") || (cellname == "l31") || (cellname == "l32") || (cellname == "l33") || (cellname == "l34")
      || (cellname == "l35") || (cellname == "k41") || (cellname == "k42") || (cellname == "k43") || (cellname == "k44")
      || (cellname == "k45") || (cellname == "k46") || (cellname == "l49") || (cellname == "l50") || (cellname == "l51")
      || (cellname == "l52") || (cellname == "l53") || (cellname == "l54") || (cellname == "k60") || (cellname == "k61")
      || (cellname == "k62") || (cellname == "k63") || (cellname == "k64") ||(cellname == "l68") || (cellname == "l69") ) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'hrplanningnewcm', body, {}, apiname, 'hrplanningnewcmactivestatus').subscribe(
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

  getLanguageData(attempt: string, selectedLanguage: string) {
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/hrplanningnewlanguages/fetchhrplanningnewlanguages"
      this._api.fetchaCaseFromMasterLanguage1(apiname, this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                this.languageData = data.resultList[0][selectedLanguage]
              }
              this.checkloading = false;

            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    } else {
      let apiname = "/hrplanningnewlm/fetchhrplanningnewlm"
      this._api.fetchgamelm(apiname, this.attempt, selectedLanguage).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                this.languageData = data.resultList[0][selectedLanguage]
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

  // override ngOnDestroy(): void {
  //   this.Instructorelementdetailssub.unsubscribe();
  // }
    override ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.Instructorelementdetailssub.unsubscribe();
  }

}

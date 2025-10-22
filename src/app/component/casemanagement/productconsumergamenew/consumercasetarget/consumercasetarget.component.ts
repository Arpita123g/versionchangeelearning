import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, Subscription, takeUntil, combineLatest } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-consumercasetarget',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumercasetarget.component.html',
  styleUrls: ['./consumercasetarget.component.scss']
})
export class ConsumercasetargetComponent extends AbstractComponent implements OnChanges, OnDestroy {
  defaultcase: string = "";
  res: any = [];
  languageData: any = [];
  data: any[] = Array(30).fill(null);
  data1: any[] = Array(20).fill(null);
  data2: any[] = Array(40).fill(null);
  attempt: string = "1";
  selectedLanguage: string = "english";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
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
    let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getFetchData();

    // this.sharedState.attempt$.subscribe(attempt => {
    //   this.attempt = attempt;
    //   this.getLanguageData(this.attempt, this.selectedLanguage);
    // });

    //  this.sharedState.selectedLanguage$.subscribe(lang =>{
    //   this.selectedLanguage = lang;
    //   this.getLanguageData(this.attempt, this.selectedLanguage);
    // })

    // combineLatest([
    //   this.sharedState.attempt$,
    //   this.sharedState.selectedLanguage$
    // ]).pipe(takeUntil(this.destroy$)).subscribe(([attempt,lang])=>{
    //   this.attempt = attempt;
    //   this.selectedLanguage = lang;
    //   this.getLanguageData(this.attempt, this.selectedLanguage);
    // })
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

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/consumerbehaviournewmaster/fetchconsumerbehaviournewmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj.consumerbehaviournewperioddata).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  this.res[key].push(obj.consumerbehaviournewperioddata[key]);
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
      let apiname = "/consumerbehaviournewcm/fetchconsumerbehaviournewcm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  Object.keys(obj.consumerbehaviournewperioddata).forEach((key: any) => {
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    this.res[key].push(obj.consumerbehaviournewperioddata[key]);
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
  getLanguageData(attempt: string, selectedLanguage: string) {
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/consumerbehaviournewlanguages/fetchconsumerbehaviournewlanguages"
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
      let apiname = "/consumerbehaviournewlm/fetchconsumerbehaviournewlm"
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
  //  getLanguageData(attempt: string, selectedLanguage: string) {
  //   let apiname = "/consumerbehaviournewlm/fetchconsumerbehaviournewlm"
  //   this._api.fetchgamelm(apiname, this.attempt, selectedLanguage).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             this.languageData = data.resultList[0][selectedLanguage]
  //           }
  //           this.checkloading = false;

  //         }
  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }
  writeTargetValue(cellname: string, index: number, value: any) {
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/consumerbehaviournewcm/updateconsumerbehaviournewcm'
    if ((cellname == "k116") || (cellname == "k117") || (cellname == "k118") || (cellname == "k119") || (cellname == "k120")
      || (cellname == "k124") || (cellname == "l124") || (cellname == "m124") || (cellname == "k128") || (cellname == "l128")
      || (cellname == "m128") || (cellname == "k129") || (cellname == "l129") || (cellname == "m129") || (cellname == "k130")
      || (cellname == "l130") || (cellname == "m130") || (cellname == "k131") || (cellname == "l131") || (cellname == "m131")
      || (cellname == "k132") || (cellname == "l132") || (cellname == "m132") || (cellname == "k136") || (cellname == "k137")
      || (cellname == "k138") || (cellname == "k139") || (cellname == "k140") || (cellname == "k141") || (cellname == "k142")
      || (cellname == "k143") || (cellname == "k144") || (cellname == "k145") || (cellname == "k146") || (cellname == "k147")
      || (cellname == "k151") || (cellname == "k152") || (cellname == "k153")) {
      value = Number(value) / 100;
    }

    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'consumerbehaviournewcm', body, {}, apiname, 'consumerbehaviournewcmactivestatus').subscribe(
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
  //for testing
  // getFetchData() {
  //   ***********it will be uncommitted*******************/
  //   let apiname = "/consumercasemanagement/fetchconsumercasemanagement"
  //   this._api.fetchCaseManagementData(apiname).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (this.testingvalue.status == "Success") {
  //           if (this.testingvalue.resultList != null) {
  //             this.testingvalue.resultList.forEach((obj: any) => {
  //               Object.keys(obj).forEach((key: any) => {
  //                 if (!this.res[key]) {
  //                   this.res[key] = [];
  //                 }
  //                 this.res[key].push(obj[key]);
  //               });
  //             });
  //           }
  //         }

  //       }, error: (error: any) => {
  //         this.checkloading = false;
  //         this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }

  override ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

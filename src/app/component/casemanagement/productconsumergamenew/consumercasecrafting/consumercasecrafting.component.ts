import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
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
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-consumercasecrafting',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumercasecrafting.component.html',
  styleUrls: ['./consumercasecrafting.component.scss']
})
export class ConsumercasecraftingComponent extends AbstractComponent implements OnChanges, OnDestroy {

  data: any[] = Array(30).fill(null);
  data1: any[] = Array(20).fill(null);
  data2: any[] = Array(40).fill(null);

  res: any = [];
  languageData: any = [];

  defaultcase: string = "";
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
    // this.checkloading = false;
    this.getFetchData();

    // this.sharedState.attempt$.subscribe(attempt => {
    //   this.attempt = attempt;
    //   this.getLanguageData(this.attempt, this.selectedLanguage);
    // });

    // this.sharedState.selectedLanguage$.subscribe(lang =>{
    //   this.selectedLanguage = lang;
    //   this.getLanguageData(this.attempt, this.selectedLanguage);
    // })

    // combineLatest([
    //   this.sharedState.attempt$,
    //   this.sharedState.selectedLanguage$
    // ]).pipe(takeUntil(this.destroy$)).subscribe(([attempt, lang]) => {
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
              this.checkloading = false;
            }
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
                this.checkloading = false;
              }
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
  writeCraftingValue(cellname: string, index: number, value: any) {
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/consumerbehaviournewcm/updateconsumerbehaviournewcm';
    if ((cellname == "ab97") || (cellname == "ab98") || (cellname == "ab99") || (cellname == "ab100") || (cellname == "ab101")
      || (cellname == "ab102") || (cellname == "ab127") || (cellname == "ab128") || (cellname == "ab129") || (cellname == "ab130")
      || (cellname == "ab131") || (cellname == "ab132") || (cellname == "ab142") || (cellname == "ab143") || (cellname == "ab144")
      || (cellname == "ab156") || (cellname == "ac156") || (cellname == "ad156") || (cellname == "ab157") || (cellname == "ac157")
      || (cellname == "ad157") || (cellname == "ab158") || (cellname == "ac158") || (cellname == "ad158")) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'consumerbehaviournewcm', body, {}, apiname, 'consumerbehaviournewcmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
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
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';

@Component({
  selector: 'app-promotionsigmentcasecommunicationmix',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './promotionsigmentcasecommunicationmix.component.html',
  styleUrls: ['./promotionsigmentcasecommunicationmix.component.scss']
})
export class PromotionsigmentcasecommunicationmixComponent extends AbstractComponent implements OnChanges, OnDestroy {

  defaultcase: string = "";
  res: any = [];
  data: any[] = Array(40).fill(null);
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  private subscribed = false;
  @Input() active: boolean = false;
  attempt: string = "1";
  selectedLanguage: string = "english";
  private destroy$ = new Subject<void>();
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
    this.getFetchData();
    let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }

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
          // this.getLanguageData(this.attempt, this.selectedLanguage);
        });
    }
  }
  getFetchData() {
    //***********it will be uncommitted*******************/
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/promotionsnewmaster/fetchpromotionsnewmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              data.resultList.forEach((obj: any) => {
                Object.keys(obj.promotionsnewperioddata).forEach((key: any) => {
                  if (!this.res[key]) {
                    this.res[key] = [];
                  }
                  // this.res[key].push(obj.promotionsnewperioddata[key]);
                  this.res[key].push(
                    Number(String(obj.promotionsnewperioddata[key]).replace(/,/g, ''))
                  );
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
      let apiname = "/promotionsnewcm/fetchpromotionsnewcm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                data.resultList.forEach((obj: any) => {
                  Object.keys(obj.promotionsnewperioddata).forEach((key: any) => {
                    if (!this.res[key]) {
                      this.res[key] = [];
                    }
                    // this.res[key].push(obj.promotionsnewperioddata[key]);
                    this.res[key].push(
                      Number(String(obj.promotionsnewperioddata[key]).replace(/,/g, ''))
                    );
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

  writePromotioncommunicationValue(cellname: string, index: number, value: any) {
    let apiname = '/promotionsnewcm/updatepromotionsnewcm'
    value = value.replace(",", "");
    if ((cellname == "j23") || (cellname == "j24") || (cellname == "j25") || (cellname == "j30") || (cellname == "j29")
      || (cellname == "j31") || (cellname == "j35") || (cellname == "j36") || (cellname == "j37") || (cellname == "j41")
      || (cellname == "j42") || (cellname == "j43") || (cellname == "j47") || (cellname == "j48") || (cellname == "j49")
      || (cellname == "j53") || (cellname == "j54") || (cellname == "j55") || (cellname == "j59") || (cellname == "j60")
      || (cellname == "j61") || (cellname == "j65") || (cellname == "j66") || (cellname == "j67")) {
      value = Number(value) / 100;
    }
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "normal", "no", 'promotionsnewcm', body, {}, apiname, 'promotionsnewcmactivestatus').subscribe(
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

  // override ngOnDestroy() {
  //   this.Instructorelementdetailssub.unsubscribe();
  // }

  override ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.Instructorelementdetailssub.unsubscribe();

  }
}

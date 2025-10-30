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
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-consumerfoodforthougth',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './consumerfoodforthougth.component.html',
  styleUrls: ['./consumerfoodforthougth.component.scss']
})
export class ConsumerfoodforthougthComponent extends AbstractComponent implements OnChanges, OnDestroy {
  defaultcase: string = "";
  res: any = [];
  gamename = "consumerbehaviournew"
  selectedLanguage: string = "english";
  attempt: string = "1";
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  questionanswerpaper = [
    {
      // question: ["al96", "al96"],
      question: ["b254", "b254"],

      // option: [["am96", "am97", "am98"], ["am96", "am97", "am98"]],
      option: [["b348", "b349", "b350"], ["b348", "b349", "b350"]],

      // feedback: [["an96", "an97", "an98"], ["an96", "an97", "an98"]],
      feedback: [["b266", "b267", "b268"], ["b266", "b267", "b268"]],


      score: [["ao96", "ao97", "ao98"], ["ao96", "ao97", "ao98"]],

      rigor: [["an131", "an132", "an133"], ["an131", "an132", "an133"]],

      structuring: [["ao131", "ao132", "ao133"], ["ao131", "ao132", "ao133"]],

      synthesis: [["ap131", "ap132", "ap133"], ["ap131", "ap132", "ap133"]],

      business: [["aq131", "aq132", "aq133"], ["aq131", "aq132", "aq133"]],

    },
    {
      // question: ["al99", "al99"],
      question: ["b255", "b255"],

      // option: [["am99", "am100", "am9101"], ["am99", "am100", "am9101"]],
      option: [["b351", "b352", "b353"], ["b351", "b352", "b353"]],
      // feedback: [["an99", "an100", "an101"], ["an99", "an100", "an101"]],
      feedback: [["b269", "b270", "b271"], ["b269", "b270", "b271"]],


      score: [["ao99", "ao100", "ao101"], ["ao99", "ao100", "ao101"]],

      rigor: [["an134", "an135", "an136"], ["an134", "an135", "an136"]],

      structuring: [["ao134", "ao135", "ao136"], ["ao134", "ao135", "ao136"]],

      synthesis: [["ap134", "ap135", "ap136"], ["ap134", "ap135", "ap136"]],

      business: [["aq134", "aq135", "aq136"], ["aq134", "aq135", "aq136"]],

    },
    {
      // question: ["al102", "al102"],
      question: ["b256", "b256"],

      // option: [["am102", "am103"], ["am102", "am103"]],
      option: [["b354", "b355"], ["b354", "b355"]],

      // feedback: [["an102", "an103"], ["an102", "an103"]],
      feedback: [["b272", "b273",], ["b272", "b273",]],


      score: [["ao102", "ao103"], ["ao102", "ao103"]],

      rigor: [["an137", "an138"], ["an137", "an138"]],

      structuring: [["ao137", "ao138"], ["ao137", "ao138"]],

      synthesis: [["ap137", "ap138"], ["ap137", "ap138"]],

      business: [["aq137", "aq138"], ["aq137", "aq138"]],

    },
    {
      // question: ["al104", "al104"],
      question: ["b257", "b257"],

      // option: [["am104", "am105", "am106"], ["am104", "am105", "am106"]],
      option: [["b356", "b357", "b358"], ["b356", "b357", "b358"]],

      // feedback: [["an104", "an105", "an106"], ["an104", "an105", "an106"]],
      feedback: [["b274", "b275", "b276"], ["b274", "b275", "b276"]],


      score: [["ao104", "ao105", "ao106"], ["ao104", "ao105", "ao106"]],

      rigor: [["an139", "an140", "an141"], ["an139", "an140", "an141"]],

      structuring: [["ao139", "ao140", "ao141"], ["ao139", "ao140", "ao141"]],

      synthesis: [["ap139", "ap140", "ap141"], ["ap139", "ap140", "ap141"]],

      business: [["aq139", "aq140", "aq141"], ["aq139", "aq140", "aq141"]],

    },

    {
      // question: ["al107", "al107"],
      question: ["b258", "b258"],

      // option: [["am107", "am108", "am109"], ["am107", "am108", "am109"]],
      option: [["b359", "b360", "b361"], ["b359", "b360", "b361"]],

      // feedback: [["an107", "an108", "an109"], ["an107", "an108", "an109"]],
      feedback: [["b277", "b278", "b279"], ["b277", "b278", "b279"]],



      score: [["ao107", "ao108", "ao109"], ["ao107", "ao108", "ao109"]],

      rigor: [["an142", "an143", "an144"], ["an142", "an143", "an144"]],

      structuring: [["ao142", "ao143", "ao144"], ["ao142", "ao143", "ao144"]],

      synthesis: [["ap142", "ap143", "ap144"], ["ap142", "ap143", "ap144"]],

      business: [["aq142", "aq143", "aq144"], ["aq142", "aq143", "aq144"]],

    },
    {
      // question: ["al110", "al110"],
      question: ["b259", "b259"],

      // option: [["am110", "am111"], ["am110", "am111"]],
      option: [["b362", "b363"], ["b362", "b363"]],

      // feedback: [["an110", "an111"], ["an110", "an110"]],
      feedback: [["b280", "b281"], ["b280", "b281"]],

      score: [["ao110", "ao111"], ["ao110", "ao111"]],

      rigor: [["an145", "an146"], ["an145", "an146"]],

      structuring: [["ao145", "ao146"], ["ao145", "ao146"]],

      synthesis: [["ap145", "ap146"], ["ap145", "ap146"]],

      business: [["aq145", "aq146"], ["aq145", "aq146"]],

    },
    {
      // question: ["al112", "al112"],
      question: ["b260", "b260"],

      // option: [["am112", "am113", "am114"], ["am112", "am113", "am114"]],
      option: [["b364", "b365", "b366"], ["b364", "b365", "b366"]],

      // feedback: [["an112", "an113", "an114"], ["an112", "an113", "an114"]],
      feedback: [["b282", "b283", "b284"], ["b282", "b283", "b284"]],


      score: [["ao112", "ao113", "ao114"], ["ao112", "ao113", "ao114"]],

      rigor: [["an147", "an148", "an149"], ["an147", "an148", "an149"]],

      structuring: [["ao147", "ao148", "ao149"], ["ao147", "ao148", "ao149"]],

      synthesis: [["ap147", "ap148", "ap149"], ["ap147", "ap148", "ap149"]],

      business: [["aq147", "aq148", "aq149"], ["aq147", "aq148", "aq149"]],

    },
    {
      // question: ["al115", "al115"],
      question: ["b261", "b261"],

      // option: [["am115", "am116", "am117"], ["am115", "am116", "am117"]],
      option: [["b367", "b368", "b369"], ["b367", "b368", "b369"]],

      // feedback: [["an115", "an116", "an117"], ["an115", "an116", "an117"]],
      feedback: [["b285", "b286", "b287"], ["b285", "b286", "b287"]],


      score: [["ao115", "ao116", "ao117"], ["ao115", "ao116", "ao117"]],

      rigor: [["an150", "an151", "an152"], ["an150", "an151", "an152"]],

      structuring: [["ao150", "ao151", "ao152"], ["ao150", "ao151", "ao152"]],

      synthesis: [["ap150", "ap151", "ap152"], ["ap150", "ap151", "ap152"]],

      business: [["aq150", "aq151", "aq152"], ["aq150", "aq151", "aq152"]],

    },
    {
      // question: ["al118", "al118"],
      question: ["b262", "b262"],

      // option: [["am118", "am119"], ["am118", "am119"]],
      option: [["b370", "b371"], ["b370", "b371"]],

      // feedback: [["an118", "an119"], ["an118", "an119"]],
      feedback: [["b288", "b289"], ["b288", "b289"]],

      score: [["ao118", "ao119"], ["ao118", "ao119"]],

      rigor: [["an153", "an154"], ["an153", "an154"]],

      structuring: [["ao153", "ao154"], ["ao153", "ao154"]],

      synthesis: [["ap153", "ap154"], ["ap153", "ap154"]],

      business: [["aq153", "aq154"], ["aq153", "aq154"]],

    },
    {
      // question: ["al120", "al120"],
      question: ["b263", "b263"],

      // option: [["am120", "am121", "am122"], ["am120", "am121", "am122"]],
      option: [["b372", "b373", "b374"], ["b372", "b373", "b374"]],

      // feedback: [["an120", "an121", "an122"], ["an120", "an121", "an122"]],
      feedback: [["b290", "b291", "b292"], ["b290", "b291", "b292"]],


      score: [["ao120", "ao121", "ao122"], ["ao120", "ao121", "ao122"]],

      rigor: [["an155", "an156", "an157"], ["an155", "an156", "an157"]],

      structuring: [["ao155", "ao156", "ao157"], ["ao155", "ao156", "ao157"]],

      synthesis: [["ap155", "ap156", "ap157"], ["ap155", "ap156", "ap157"]],

      business: [["aq155", "aq156", "aq157"], ["aq155", "aq156", "aq157"]],

    },
    {
      // question: ["al123", "al123"],
      question: ["b264", "b264"],

      // option: [["am123", "am124", "am125"], ["am123", "am124", "am125"]],
      option: [["b375", "b376", "b377"], ["b375", "b376", "b377"]],

      // feedback: [["an123", "an124", "an125"], ["an123", "an124", "an125"]],
      feedback: [["b293", "b294", "b295"], ["b293", "b294", "b295"]],
      score: [["ao123", "ao124", "ao125"], ["ao123", "ao124", "ao125"]],

      rigor: [["an158", "an159", "an160"], ["an158", "an159", "an160"]],

      structuring: [["ao158", "ao159", "ao160"], ["ao158", "ao159", "ao160"]],

      synthesis: [["ap158", "ap159", "ap160"], ["ap158", "ap159", "ap160"]],

      business: [["aq158", "aq159", "aq160"], ["aq158", "aq159", "aq160"]],

    },
    {
      // question: ["al126", "al126"],
      question: ["b265", "b265"],

      // option: [["am126", "am127"], ["am126", "am127"]],
      option: [["b378", "b379"], ["b378", "b379"]],

      // feedback: [["an126", "an127"], ["an126", "an127"]],
      feedback: [["b296", "b297"], ["b296", "b297"]],

      score: [["ao126", "ao127"], ["ao126", "ao127"]],

      rigor: [["an161", "an162"], ["an161", "an162"]],

      structuring: [["ao161", "ao162"], ["ao161", "ao162"]],

      synthesis: [["ap161", "ap162"], ["ap161", "ap162"]],

      business: [["aq161", "aq162"], ["aq161", "aq162"]],

    },

  ];
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
    // this.getFetchData();

    // this.sharedState.selectedLanguage$.subscribe(lang => {
    //   this.selectedLanguage = lang;
    //   this.getLanguageData(this.attempt, this.selectedLanguage);
    // });

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
              for (let i = 0; i < this.questionanswerpaper.length; i++) {
                // this.questionanswerpaper[i].question[0] = data.resultList[0][this.questionanswerpaper[i].question[0]];
                // for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                //   this.questionanswerpaper[i].option[0][j] = data.resultList[0][this.questionanswerpaper[i].option[0][j]];
                // }
                // for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                //   this.questionanswerpaper[i].feedback[0][j] = data.resultList[0][this.questionanswerpaper[i].feedback[0][j]];
                // }
                for (let j = 0; j < this.questionanswerpaper[i].score[0].length; j++) {
                  this.questionanswerpaper[i].score[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].score[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].rigor[0].length; j++) {
                  this.questionanswerpaper[i].rigor[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].rigor[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].structuring[0].length; j++) {
                  this.questionanswerpaper[i].structuring[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].structuring[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].synthesis[0].length; j++) {
                  this.questionanswerpaper[i].synthesis[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].business[0].length; j++) {
                  this.questionanswerpaper[i].business[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].business[0][j]];
                }
              }

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
                for (let i = 0; i < this.questionanswerpaper.length; i++) {
                  // this.questionanswerpaper[i].question[0] = data.resultList[0][this.questionanswerpaper[i].question[0]];
                  // for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                  //   this.questionanswerpaper[i].option[0][j] = data.resultList[0][this.questionanswerpaper[i].option[0][j]];
                  // }
                  // for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                  //   this.questionanswerpaper[i].feedback[0][j] = data.resultList[0][this.questionanswerpaper[i].feedback[0][j]];
                  // }
                  for (let j = 0; j < this.questionanswerpaper[i].score[0].length; j++) {
                    this.questionanswerpaper[i].score[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].score[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].rigor[0].length; j++) {
                    this.questionanswerpaper[i].rigor[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].structuring[0].length; j++) {
                    this.questionanswerpaper[i].structuring[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].synthesis[0].length; j++) {
                    this.questionanswerpaper[i].synthesis[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.questionanswerpaper[i].business[0].length; j++) {
                    this.questionanswerpaper[i].business[0][j] = data.resultList[0].consumerbehaviournewperioddata[this.questionanswerpaper[i].business[0][j]];
                  }
                }

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

  //////////////////////////
  getLanguageData(attempt: string, selectedLanguage: string) {

    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/consumerbehaviournewlanguages/fetchconsumerbehaviournewlanguages"

      this._api.fetchaCaseFromMasterLanguage1(apiname, this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success" && data.resultList != null) {
              for (let i = 0; i < this.questionanswerpaper.length; i++) {
                this.questionanswerpaper[i].question[0] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].question[0]];
                for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                  this.questionanswerpaper[i].option[0][j] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].option[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                  this.questionanswerpaper[i].feedback[0][j] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].feedback[0][j]];
                }
              }
              this.getFetchData();

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
            if (data.status == "Success" && data.resultList != null) {
              for (let i = 0; i < this.questionanswerpaper.length; i++) {
                this.questionanswerpaper[i].question[0] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].question[0]];
                for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                  this.questionanswerpaper[i].option[0][j] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].option[0][j]];
                }
                for (let j = 0; j < this.questionanswerpaper[i].feedback[0].length; j++) {
                  this.questionanswerpaper[i].feedback[0][j] = data.resultList[0][this.selectedLanguage][this.questionanswerpaper[i].feedback[0][j]];
                }
              }
              this.getFetchData();

            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }






  }
  ////////////////////////////


  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
    // Check if the value is numeric (integer or decimal) after removing commas
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value.replace(/,/g, ''));

    // If the value is numeric, remove commas
    if (isNumeric) {
      value = value.replace(/,/g, '');
    }
    let apiname = '/consumerbehaviournewcm/updateconsumerbehaviournewcm'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'consumerbehaviournewcm', body, {}, apiname, 'consumerbehaviournewcmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
          } else {
            this.res[cellname][index] = this.res[cellname][index];
          }
        }, error: (error: any) => {
          this.checkloading = false;
        }
      })



  }

  override ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
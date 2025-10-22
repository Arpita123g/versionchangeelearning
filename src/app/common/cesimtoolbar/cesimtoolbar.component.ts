
import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatDialog } from '@angular/material/dialog';
import { TimerComponent } from '../../component/timer/timer.component';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BusinessbascismatdialogforhelpComponent } from 'src/app/component/BusinessBascisGame/businessbascismatdialogforhelp/businessbascismatdialogforhelp.component';
import { UpdateStudent } from 'src/app/component/dashboardstudent/dashboardstudent.component';
import { Instructordashboardprofile } from 'src/app/component/instructordashboard/instructordashboard.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { VoicebasedService } from '../../service/speech/voicebased.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { ChangeDetectorRef } from '@angular/core';
import { gameConfig } from 'src/app/service/game-config/game-configforToolbar';
import { GameConfigService } from 'src/app/service/game-config/game-configService';
import { BusinessbascisreadingComponent } from 'src/app/component/BusinessBascisGame/businessbascisreading/businessbascisreading.component';

interface GameState {
  isActive: boolean;
  currentRound: number;
  totalRounds: number;
  timeRemaining: number;
}

@Component({
  selector: 'app-cesimtoolbar',
  templateUrl: './cesimtoolbar.component.html',
  styleUrls: ['./cesimtoolbar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatStepperModule,
    MatChipsModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatSliderModule,
    TimerComponent,
   
  ]
})
export class CesimtoolbarComponent implements OnInit {
  Emailsub: Subscription;
  useremail: string = '';
  gamenamesub: any;
  gamename: string = '';
  busygame: boolean = false;
  arenatab: any;
  bodyContent: any;
  Usermodesub: Subscription;
  usermode: string = '';
  voicebasedsub: Subscription;

  currentDateTime: any;
  currentTime: string = '';
  enterinGame: string = '';
  student: boolean = false;
  usertype: string = "";
  Noofattemptssub: Subscription;
  noofattempt: string = '';
  timeorattemptsub: Subscription;
  interviewcompletesub: Subscription;
  istimeorattemptfinish: boolean | undefined;
  isinterviewcomplete: boolean | undefined;
  Usernamesub: Subscription;
  username: string = '';
  languagesub: Subscription;
  language: string = '';
  mainTab = 'gamearena';
  activeTab = 'introduction';
  forumTab = 'individual';
  toolbartabdata: string = "";
  market: boolean = false;
  // activetabb:boolean=true;
  currenttabb: number = 0;
  changestatesub: Subscription;
  isaccepted: boolean = false;
  lockStateSub: Subscription;
  isLockedReport: boolean | undefined;
  isGameArenaLocked: boolean = false;
  headingarray: any = ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"];
  // headingarray: any = [];
  // headingarrayProductConsumerGame: any = ['b3', 'b4', 'b5', 'b6'];
  // languageSelect: string = '';
  commonData: any = {};
  toolBarArray:any = ["Decisions area","Instructor name","Current round","Game timer","Round"];
  private arenaProbe?: any;
  constructor(private dialog: MatDialog,
    private _global: GlobalService, private _router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService,
    private sharedService: SharedserviceService, public datepipe: DatePipe, private VoicebasedService: VoicebasedService, private cdr: ChangeDetectorRef,
    private _api: ApiService, private _restapiservice: RestapiService, private gameConfigService: GameConfigService) {
    this.gamenamesub = this._global.gamename.subscribe((data) => {
      this.gamename = data;
    });
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
    this.Usermodesub = this._global.loginmode.subscribe((data) => {
      this.usertype = data;
    });
    this.Usernamesub = this._global.username.subscribe((data) => {
      this.username = data;
    });
    this.Noofattemptssub = this._global.noofattempts.subscribe((data) => {
      this.noofattempt = data;
    });
    this.voicebasedsub = this.VoicebasedService.currentTabState.subscribe(tabIndex => {
      this.currenttabb = tabIndex;
    });
    this.changestatesub = this.VoicebasedService.Istermandconditionaccepted.subscribe((data) => {
      this.isaccepted = data
    });

    this.lockStateSub = this.VoicebasedService.currentLockState.subscribe(data => {
      this.isLockedReport = data;

    });

    this.timeorattemptsub = this.VoicebasedService.timeorattemptfinishLockState.subscribe(data => {
      this.istimeorattemptfinish = data;
    });

    this.interviewcompletesub = this.VoicebasedService.interviewcompleteperAttemptState.subscribe(data => {
      this.isinterviewcomplete = data;
      if (data === true) {
        this.currenttabb = 2;
        this.VoicebasedService.changeTabState(2);
        setTimeout(() => {
          this.cdr.detectChanges();
        });
      }
    });


    if (Number(this.noofattempt) == 1) {
      this.VoicebasedService.changeLockState(true);
    } else {
      this.VoicebasedService.changeLockState(false);
    }
    this.languagesub = this._global.language.subscribe((data) => {
      this.language = data;
      if (this.language != null) {
        this.language = this.language.toLowerCase();
        if (this.language == 'hindi') {
          this.headingarray = ["गेम एरेना", "पठन सामग्री", "मंच", "लीडरबोर्ड"];
        }
      }

    });

  }

  ngOnInit(): void {
    // Subscribe to tab state changes
    this.voicebasedsub = this.VoicebasedService.currentTabState.subscribe(tabIndex => {
      this.currenttabb = tabIndex;

      // Force change detection
      setTimeout(() => {
        this.cdr.detectChanges();
      });
    });

    // When any part of the app requests a bodyContent refresh, fetch latest student details then recompute lock
    this.sharedService.refreshBodyContent$.subscribe(() => {
      this.refreshBodyContentFromStudent();
    });

    // Subscribe to lock state changes
    this.lockStateSub = this.VoicebasedService.currentLockState.subscribe(data => {
      this.isLockedReport = data;
      if (data === true) {
        this.currenttabb = 2;
        this.VoicebasedService.changeTabState(2);
        setTimeout(() => {
          this.cdr.detectChanges();
        });
      }
    });

    // Other subscriptions...
    this.sharedService.currentTime$.subscribe((time) => {
      this.currentTime = time;
    });
    this.sharedService.gameenter$.subscribe((content) => {
      this.enterinGame = content;
      if (this.enterinGame =='enter') {
        this.getFetchData()
      }
    });
    this.sharedService.usertype$.subscribe((content) => {
      this.usertype = content;
    });
    this.sharedService.bodyContent$.subscribe((content) => {
      this.bodyContent = content;

      if (content) {
        const anyContent: any = content as any;
        const lockFromCourse = anyContent.courseDetails?.lock === 'yes';
        const lockFromFlag = anyContent.islocked === true || anyContent.islocked === 'yes';
        this.isGameArenaLocked = !!(lockFromCourse || lockFromFlag);
      } else {
        this.isGameArenaLocked = false;
      }

      // Toggle a class on the body to hide GAME ARENA content when locked
      try {
        if (content) {
          const anyContent: any = content as any;
          const locked = (anyContent.courseDetails?.lock === 'yes') || (anyContent.islocked === true) || (anyContent.islocked === 'yes');
          if (locked) {
            document.body.classList.add('game-arena-locked');
          } else {
            document.body.classList.remove('game-arena-locked');
          }
        }
      } catch { }

      // if ((this.bodyContent != "") && (this.noofattempt != "")) {
      //   this.getFetchData();
      // }

      // if (this.bodyContent) {
      //   this.gameConfigService
      //     .getLanguageData(this.gamename, this.noofattempt, this.language, this.bodyContent.courseDetails.coursedetailsid)
      //     .subscribe(result => {
      //       if (result.type === 'heading') {
      //         this.headingarray = result.headingarray || [];
      //         this.commonData = null;
      //       } else if (result.type === 'common') {
      //         this.commonData = result.commonData || {};
      //         this.headingarray = [];
      //       } else {
      //         this.headingarray = ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"];
      //         this.commonData = null;
      //       }
      //     });
      // }
    });

    // If toolbar is opened directly in a new tab, reconstruct bodyContent basics from storage
    if (!this.bodyContent) {
      try {
        const code = localStorage.getItem('activeCourseCode');
        const sid = localStorage.getItem('activeCourseDetailsId');
        if (code || sid) {
          const minimal: any = { courseDetails: { coursecode: code || '', coursedetailsid: sid || '' } };
          this.bodyContent = minimal;
          this.refreshBodyContentFromStudent();
        }
      } catch { }
    }
    this.sharedService.gamename$.subscribe((content) => {
      this.gamename = content;
    });

    if (Number(this.noofattempt) == 1) {
      this.VoicebasedService.changeLockState(true);
    } else {
      this.VoicebasedService.changeLockState(false);
    }

    setTimeout(() => this.installArenaClickProbe(), 0);

    // this.gameConfigService
    //   .getLanguageData(this.gamename, this.noofattempt, this.language, this.bodyContent.courseDetails.coursedetailsid)
    //   .subscribe(result => {
    //     if (result.headingarray) {
    //       this.headingarray = result.headingarray;
    //     }
    //     if (result.commonData) {
    //       this.commonData = result.commonData;
    //     }
    //   });

    // this.gameConfigService
    //   .getLanguageData(this.gamename, this.noofattempt, this.language, this.bodyContent.courseDetails.coursedetailsid)
    //   .subscribe(result => {
    //     if (result.type === 'heading') {
    //       this.headingarray = result.headingarray || [];
    //       this.commonData = null;
    //     } else if (result.type === 'common') {
    //       this.commonData = result.commonData || {};
    //       this.headingarray = [];
    //     } else {
    //       this.headingarray = ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"];
    //       this.commonData = null;
    //     }
    //   });





  }

  // getFetchData() {
  //   if (this.gamename === 'Product & Consumer New') {
  //     let apiname = '/consumerbehaviournew/fetchconsumerbehaviournew';
  //     this._api.fetchLanguageDataForToolbar(apiname, this.noofattempt, this.language.toLowerCase(), this.bodyContent.courseDetails.coursedetailsid).subscribe({
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           if (data.resultList != null) {
  //             this.languageSelect = data.resultList[0].consumerBehaviourNewLM[this.language.toLowerCase()];
  //             for (let i = 0; i < this.headingarrayProductConsumerGame.length; i++) {
  //               this.headingarray[i] = this.languageSelect[this.headingarrayProductConsumerGame[i]]
  //             }

  //           }

  //         }
  //       }, error: (error: any) => {
  //       }
  //     })
  //   }
  //   else if (this.gamename === 'HRP New') {
  //     let apiname = '/hrplanningnew/fetchhrplanningnew';
  //     this._api.fetchLanguageDataForToolbar(apiname, this.noofattempt, this.language.toLowerCase(), this.bodyContent.courseDetails.coursedetailsid).subscribe({
  //       next: (data: any) => {
  //         console.log("DEBUG raw response:", data); 
  //         if (data.status == "Success") {
  //           console.log("Status matched Success ✅")
  //           if (data.resultList != null) {
  //             // this.languageSelect = data.resultList[0].hrPlanningNewLM[this.language.toLowerCase()];
  //             this.commonData = data.resultList?.[0]?.hrPlanningNewLM[`common${this.language.toLowerCase()}`] || {};



  //           }

  //         }
  //       }, error: (error: any) => {
  //       }
  //     })
  //   }

  // }



  // Step 1: Define game configurations
  // gameConfig: any = {
  //   "Product & Consumer New": {
  //     api: "/consumerbehaviournew/fetchconsumerbehaviournew",
  //     lmKey: "consumerBehaviourNewLM",
  //     headingKeys: ["b3", "b4", "b5", "b6"],   // headingarrayProductConsumerGame
  //     type: "heading"
  //   },
  //   "HRP New": {
  //     api: "/hrplanningnew/fetchhrplanningnew",
  //     lmKey: "hrPlanningNewLM",
  //     commonPrefix: "common",
  //     type: "common"
  //   },
  //   // Add more games here in future...
  // };

  // headingarray: any = ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"];
  // commonData: any = {};
  // languageSelect: any = {};


  // Step 2: Rewrite getFetchData
  // getFetchData() {
  //   const config = this.gameConfig[this.gamename];
  //   if (!config) return; // no match, do nothing

  //   this._api.fetchLanguageDataForToolbar(
  //     config.api,
  //     this.noofattempt,
  //     this.language.toLowerCase(),
  //     this.bodyContent.courseDetails.coursedetailsid
  //   ).subscribe({
  //     next: (data: any) => {
  //       if (data.status === "Success" && data.resultList) {
  //         const lmData = data.resultList?.[0]?.[config.lmKey];
  //         if (!lmData) return;

  //         if (config.type === "heading") {
  //           // Fill heading array
  //           this.languageSelect = lmData[this.language.toLowerCase()];
  //           for (let i = 0; i < config.headingKeys.length; i++) {
  //             this.headingarray[i] = this.languageSelect[config.headingKeys[i]];
  //           }
  //         }
  //         else if (config.type === "common") {
  //           // Fill commonData
  //           this.commonData = lmData?.[`${config.commonPrefix}${this.language.toLowerCase()}`] || {};
  //         }
  //       }
  //     },
  //     error: (err: any) => {
  //       console.error("API error:", err);
  //     }
  //   });
  // }

 getFetchData() {
    const config = gameConfig[this.gamename];
    if (!config) {
      console.warn("Game config not found:", this.gamename);
      return;
    }

    // let apiname = config.api;


    this._api.fetchLanguageDataForToolbar(
      config.api,
      this.noofattempt,
      this.language.toLowerCase(),
      this.bodyContent.courseDetails.coursedetailsid
    ).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          const lmData = data.resultList?.[0]?.[config.lmKey];
          if (config.type === 'heading') {
            const languageSelect = lmData[this.language.toLowerCase()];
            this.headingarray = config.headingKeys?.map((k: string) => languageSelect[k]) || [];
            this.toolBarArray = config.toolBar?.map((k: string) => languageSelect[k]) || [];
            this.commonData = null;
          } else if (config.type === 'common') {
            const languageSelect = lmData?.[`${config.commonPrefix}${this.language.toLowerCase()}`] || {};
            this.headingarray = config.headingKeys?.map((k: string) => languageSelect[k]) || [];
            this.toolBarArray = config.toolBar?.map((k: string) => languageSelect[k]) || [];

          } else {
            this.headingarray = ["GAME ARENA", "READING", "FORUM", "LEADERBOARD"];
            this.toolBarArray = ["Decisions area","Instructor name","Current round","Game timer","Round"];

            this.commonData = null;
          }
        }
      },
      error: (error: any) => {
        console.error("Error fetching data:", error);
      }
    });
  }


  refreshLockState(): void {
    try {
      let content: any = this.bodyContent || this._api?.studentelementdetailsvalue;
      // If minimal bodyContent from storage, prefer _api value when available
      if (content && content.courseDetails && !content.courseDetails.lock && this._api?.studentelementdetailsvalue) {
        content = this._api.studentelementdetailsvalue;
      }
      if (!content) { return; }
      const lockFromCourse = content?.courseDetails?.lock === 'yes';
      const lockFromFlag = content?.islocked === true || content?.islocked === 'yes';
      this.isGameArenaLocked = !!(lockFromCourse || lockFromFlag);
      if (this.isGameArenaLocked) {
        document.body.classList.add('game-arena-locked');
      } else {
        document.body.classList.remove('game-arena-locked');
      }
      setTimeout(() => this.cdr.detectChanges());
    } catch { }
  }

  refreshBodyContentFromStudent(): void {
    try {
      // Determine identifiers from current content, api cache or storage
      const current = (this.bodyContent && this.bodyContent.courseDetails) ? this.bodyContent
        : this._api?.studentelementdetailsvalue;
      const storedCode = localStorage.getItem('activeCourseCode') || '';
      const storedId = localStorage.getItem('activeCourseDetailsId') || '';
      const code = current?.courseDetails?.coursecode || storedCode;
      const sid = String(current?.courseDetails?.coursedetailsid || storedId || '');
      if (!code && !sid) { this.refreshLockState(); return; }

      const body: any = {
        email: this.useremail,
        caller: 'webstudent',
        usermode: 'student',
        searchtype: code ? 'coursecode' : 'coursedetailsid',
        searchcontent: code ? code : sid
      };
      this._restapiservice.getStudentDetails(body).subscribe((data: any) => {
        const list = Array.isArray(data && data.resultList) ? data.resultList : [];
        let latest: any = null;
        if (list.length > 0) {
          if (code) {
            latest = list.find((r: any) => r && r.courseDetails && r.courseDetails.coursecode === code) || list[0];
          } else {
            latest = list.find((r: any) => r && r.courseDetails && String(r.courseDetails.coursedetailsid) === String(sid)) || list[0];
          }
        }
        if (latest) {
          this.bodyContent = latest;
          this.sharedService.updateBodyContent(latest);
        }
        this.refreshLockState();
      }, () => {
        this.refreshLockState();
      });
    } catch {
      this.refreshLockState();
    }
  }

  changetab(tabIndex: number) {


    if (tabIndex == 0) {
      if (!this.istimeorattemptfinish) {
        this.VoicebasedService.changeTabState(tabIndex);
      }
    } else if (tabIndex == 1) {
      if (this.isaccepted) {
        this.VoicebasedService.changeTabState(tabIndex);
      }
    } else if (tabIndex == 2) {
      if (Number(this.noofattempt) == 1) {
        if ((this.isaccepted)) {
          this.VoicebasedService.changeTabState(tabIndex);
        }
      } else if (Number(this.noofattempt) > 1) {
        this.VoicebasedService.changeTabState(tabIndex);
      }
    }
  }

  gotoprofile() {
    if (this.usertype == 'instructor') {
      const dialogRef = this.dialog.open(Instructordashboardprofile, {
        width: '50%'

      })
      dialogRef.afterClosed().subscribe((result) => {
        // this.getTableData();
      });

    } else {
      const dialogRef = this.dialog.open(UpdateStudent, {
        width: '50%'

      });

      dialogRef.afterClosed().subscribe((result) => {
      });
    }

  }

  transform(value: string, ...args: unknown[]): string {
    const splitString = value
      .split(' ')
      .map((s) => `${s[0].toUpperCase()}${s.slice(1)}`);
    return splitString.join(' ');
  }
  routing(e: any) {
    if (e == true) {
      this.arenatab[1].disabled = false;
      this.arenatab[1].active = true;
      this.arenatab[0].active = false;
    }
  }

  toolbartab(tab: string) {
    this.toolbartabdata = tab;
    this._global.toolbartab.next(tab);
    // Ask the page to refresh bodyContent so lock status stays in sync
    this.sharedService.requestBodyContentRefresh();

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(BusinessbascismatdialogforhelpComponent, {
      data: { name: "Cesim" },
      width: '565px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  logout() {
    this.confirmDialog();
  }

  confirmDialog(): void {
    const message = "Are you sure you want to logout?";

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'centertop-dialog',
      position: { top: '20px' },
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult == true) {
        this.authenticationService.logout();
        window.location.reload();
      }
    });
  }

  home() {
    this.enterinGame = 'exit';
    if (this.usertype == "admin") {
      this._router.navigate(['/auth/admin/adminheader']);
    } else if (this.usertype == "instructor") {
      this._global.instructoractivetab.next('microsim');
      this._router.navigate(["auth/component/instructordashboard"])
    }
    else if (this.usertype == "student") {
      this._global.microvoicetab.next('microsim');
      this._router.navigate(['/auth/component/studentdashboardheader']);
    }

  }

  private installArenaClickProbe(): void {
    if (this.arenaProbe) return;
    this.arenaProbe = (evt: Event) => {
      const el = evt.target as HTMLElement;
      // Any click on GAME ARENA subtabs/breadcrumbs triggers a lock refresh
      if (el.closest('#first .breadcrumb .breadcrumb-item, #first [data-bs-toggle="tab"], #first .nav-link')) {
        this.refreshBodyContentFromStudent(); // pulls latest lock, then refreshLockState() runs
      }
    };
    document.addEventListener('click', this.arenaProbe, true);
  }

  private removeArenaClickProbe(): void {
    if (!this.arenaProbe) return;
    document.removeEventListener('click', this.arenaProbe, true);
    this.arenaProbe = null;
  }

  ngOnDestroy() {
    this.gamenamesub.unsubscribe();
    this.Usermodesub.unsubscribe();
    this.Usernamesub.unsubscribe();
    this.Noofattemptssub.unsubscribe();
    this.voicebasedsub.unsubscribe();
    this.changestatesub.unsubscribe();
    this.lockStateSub.unsubscribe();
    this.removeArenaClickProbe();
  }



}

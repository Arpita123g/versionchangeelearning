// src/app/common/voicebasedinterviewparticipantsideTab/interviewparticipantreport/interviewparticipantreport.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Forms / Material / Markdown
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MarkdownModule } from 'ngx-markdown';

import { Subscription } from 'rxjs';

// Your app services / base class
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { VoicebasedService } from 'src/app/service/speech/voicebased.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';

// ✅ pdfMake (Angular 17/esbuild friendly)
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// attach virtual fonts
(pdfMake as any).vfs = (pdfFonts as any).pdfMake?.vfs ?? (pdfFonts as any).vfs;

@Component({
  selector: 'app-interviewparticipantreport',
  standalone: true,
  templateUrl: './interviewparticipantreport.component.html',
  styleUrls: ['./interviewparticipantreport.component.scss'],
  // ✅ Standalone imports (no NgModule needed)
  imports: [
    CommonModule,
    FormsModule,                 // for [(ngModel)]
    ReactiveFormsModule,
    MatIconModule,              // for <mat-icon>
    MatDialogModule,            // if you open dialogs from this component or its template
    MarkdownModule,             // for <markdown [data]="...">
  ],
})
export class InterviewparticipantreportComponent extends AbstractComponent {
  roundname: string = '';
  dropdownvalue: any[] = [];
  voiceconversationid: number = 0;
  fileContent: string = '';
  jsonData: any;
  chatTranscribe: any[] = [];
  respAIBlob: Blob = new Blob([], { type: 'audio/wav' });

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  voicebasedsub: Subscription;
  currenttabb: number = 0;
  participantReportData: any = [];
  isNextRoundDisabled: boolean = true;
  retry: string = '';
  failurefirstreport: boolean = false;
  timeorattemptsub: Subscription;
  istimeorattemptfinish: boolean | undefined;
  studentchapterattemptssub: Subscription;
  studentchapterattempts: number = 0;
  firstentry: boolean = false;
  private subscriptions: Subscription[] = [];
  private tabDataSubscription?: Subscription;
  studentcoursechapterattemptid: number = 0;
  questionsetid: string = '';
  producttype: string = '';
  isNewVersion: boolean = false;

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    private VoicebasedService: VoicebasedService,
    private excelsheetservice: SheetdataService,
    private sharedService: SharedserviceService
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.voicebasedsub = this.VoicebasedService.currentTabState.subscribe((tabIndex) => {
      this.currenttabb = tabIndex;
      if (this.currenttabb == 2) {
        this.failurefirstreport = false;
        this.firstentry = true;
        this.reportFetch(this.noofattempt, 'first');
      }
    });

    this.timeorattemptsub = this.VoicebasedService.timeorattemptfinishLockState.subscribe((data) => {
      this.istimeorattemptfinish = data;
    });

    this.studentchapterattemptssub = this._global.studentchapterattempts.subscribe((data) => {
      this.studentchapterattempts = data;
    });
  }

  override ngOnInit(): void {
    const isLanguageLab = this.studentelementdetailsvalue.simulationname == 'Language Lab';
    const attemptsLeft = isLanguageLab
      ? this.studentchapterattempts
      : this.studentelementdetailsvalue.numberofattemptsleft;

    this.retry =
      attemptsLeft <= 1
        ? isLanguageLab
          ? 'Next Chapter'
          : 'Game Over'
        : `Round ${
            isLanguageLab
              ? Number(this.noofattempt) + 1
              : this.studentelementdetailsvalue.previousassignedattempts -
                this.studentelementdetailsvalue.numberofattemptsleft +
                2
          }`;
  }

  roundClick() {
    const attempt = this.roundname.split(' ');
    this.reportFetch(attempt[1], 'others');
  }

  reportFetch(attempt: string, datastatus: string) {
    if (
      this.studentelementdetailsvalue.simulationname == 'Language Lab' ||
      this.studentelementdetailsvalue.simulationname == 'Others' ||
      this.studentelementdetailsvalue.simulationname == 'Non-AI-Coach' ||
      this.studentelementdetailsvalue.simulationname == 'Non-Ai'
    ) {
      this.isNewVersion = true;
      this.reportNewVersion(attempt, datastatus);
    } else {
      this.isNewVersion = false;
      this.reportPreviousVersion(attempt, datastatus);
    }
  }

  reportNewVersion(attempt: string, datastatus: string) {
    this.tabDataSubscription = this.VoicebasedService.getTabData().subscribe({
      next: (tabData) => {
        if (this.studentelementdetailsvalue.simulationname == 'Language Lab') {
          this.studentcoursechapterattemptid =
            tabData.studentchapterdata.studentcoursechapterattemptid;
          this.questionsetid = tabData.chapterdata.aiquestionsetid;
          this.producttype = tabData.chapterdata.producttype;
        } else {
          this.studentcoursechapterattemptid = 0;
          this.producttype = this.studentelementdetailsvalue.courseDetails.producttype;
          this.questionsetid = this.studentelementdetailsvalue.courseDetails.questionsetid;
        }
      },
    });

    const apiname = '/nonaivoicereport/fetchvoicereport';
    this._api
      .fetchvoicereportforall(
        apiname,
        'studentreport',
        attempt,
        this.coursecode,
        this.studentsectionid,
        'student',
        'student',
        this.studentcoursechapterattemptid
      )
      .subscribe((data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            if (datastatus == 'first') {
              this.isNextRoundDisabled = false;
            }
            this.firstentry = false;
            this.failurefirstreport = false;
            this.participantReportData = data.resultList[0];
          } else {
            this.participantReportData = [];
          }

          const att = Number(data.resultList[0].attempt);
          this.roundname = 'Round ' + att;
          if (att > 0) {
            for (let i = 1; i < att + 1; i++) {
              this.dropdownvalue[i - 1] = 'Round ' + i;
            }
          }
        } else {
          if (attempt != '1') {
            this.participantReportData = [];
            if (this.failurefirstreport == false && !this.istimeorattemptfinish && this.firstentry) {
              this.failurefirstreport = true;
              this.reportFetch(String(Number(this.noofattempt) - 1), 'others');
            } else {
              if (this.istimeorattemptfinish) {
                this.isNextRoundDisabled = false;
              }

              this.roundname = 'Round ' + Number(attempt);
              if (Number(attempt) > 0) {
                for (let i = 1; i < Number(attempt) + 1; i++) {
                  this.dropdownvalue[i - 1] = 'Round ' + i;
                }
              }
            }
          } else {
            this.roundname = 'Round ' + attempt;
            if (Number(attempt) > 0) {
              for (let i = 1; i < Number(attempt) + 1; i++) {
                this.dropdownvalue[i - 1] = 'Round ' + i;
              }
            }
            this.participantReportData = [];
          }
        }
      });
  }

  reportPreviousVersion(attempt: string, datastatus: string) {
    const apiname = '/voicereport/fetchvoicereport';
    this._api
      .fetchvoicereportforall(
        apiname,
        'studentreport',
        attempt,
        this.coursecode,
        this.studentsectionid,
        'student',
        'student',
        0
      )
      .subscribe((data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            if (datastatus == 'first') {
              this.isNextRoundDisabled = false;
            }
            this.firstentry = false;
            this.failurefirstreport = false;
            this.participantReportData = data.resultList[0];
          } else {
            this.participantReportData = [];
          }

          const att = Number(data.resultList[0].attempt);
          this.roundname = 'Round ' + att;
          if (att > 0) {
            for (let i = 1; i < att + 1; i++) {
              this.dropdownvalue[i - 1] = 'Round ' + i;
            }
          }
        } else {
          this.participantReportData = [];
          if (this.failurefirstreport == false && !this.istimeorattemptfinish && this.firstentry) {
            this.failurefirstreport = true;
            this.reportFetch(String(Number(this.noofattempt) - 1), 'others');
          } else {
            if (this.istimeorattemptfinish) {
              this.isNextRoundDisabled = false;
            }

            this.roundname = 'Round ' + Number(attempt);
            if (Number(attempt) > 0) {
              for (let i = 1; i < Number(attempt) + 1; i++) {
                this.dropdownvalue[i - 1] = 'Round ' + i;
              }
            }
          }
        }
      });
  }

  transcriptdownload() {
    const attempt = this.roundname.split(' ');
    const apiname = this.isNewVersion
      ? '/nonaivoiceinterview/fetchvoiceconversation'
      : '/voiceconversation/downloadvoiceconversation';

    const apiCall = this.isNewVersion
      ? this._api.fetchvoiceconversationAi(
          apiname,
          attempt[1],
          this.producttype,
          this.questionsetid,
          String(this.studentcoursechapterattemptid)
        )
      : this._api.fetchvoiceconversation(apiname, attempt[1]);

    apiCall.subscribe((data: any) => {
      if (data.status == 'Success') {
        const openaiResponseString = data.openaiResponse;
        if (openaiResponseString) {
          const chatData = JSON.parse(openaiResponseString);
          let username = localStorage.getItem('username');
          username = username && username !== '' ? username.toUpperCase() : 'USER';

          const headerText =
            'Chat transcript between ' +
            username +
            ' and AI for round number ' +
            attempt[1] +
            ' of course code ' +
            this.studentelementdetailsvalue.courseDetails.coursename +
            ' downloaded on ' +
            new Date().toLocaleString('en-GB');

          const filename = headerText + '.pdf';
          const docDefinition: any = {
            content: [
              { text: headerText, style: 'header' },
              ...chatData.map((msg: any) => ({
                text: `${msg.role === 'user' ? username : 'ASSISTANT'} : ${msg.content}`,
                style: msg.role === 'user' ? 'userMessage' : 'assistantMessage',
              })),
            ],
            styles: {
              header: { fontSize: 14, bold: true, marginBottom: 15 },
              userMessage: { bold: true, color: 'black', margin: 5 },
              assistantMessage: { bold: true, color: 'darkblue', margin: 5 },
            },
          };

          pdfMake.createPdf(docDefinition).download(filename);
        }
      }
    });
  }

  handleDivClick(event: MouseEvent) {
    const button = (event.target as HTMLElement).closest('button');
    if (button && this.isNextRoundDisabled) {
      event.stopPropagation();
      this._alert.error('please submit dd');
    } else if (button) {
      this.nextRound();
    }
  }

  nextRound() {
    if (this.isNextRoundDisabled) {
      this._alert.error('Please complete the previous conversation');
      return;
    } else {
      this.isNextRoundDisabled = true;
      if (this.istimeorattemptfinish) {
        if (this.studentelementdetailsvalue.simulationname == 'Language Lab') {
          this.sharedService.enterInGame('');
          this._router.navigate(['/auth/component/chapter-dashboard']);
        } else {
          this._router.navigate(['auth/component/studentdashboardheader']);
        }
      } else {
        if (this.studentelementdetailsvalue.simulationname == 'Language Lab') {
          this.attemptfinishChapter();
        } else {
          this.attemptFinish();
        }
      }
    }
  }

  attemptfinishChapter() {
    const tabDataSub = this.VoicebasedService.getTabData().subscribe((tabData) => {
      if (Number(tabData.studentchapterdata.noofattempts) == 0) return;

      let status = 'active';
      if (
        Number(tabData.studentchapterdata.noofattempts) == 1 ||
        Number(tabData.studentchapterdata.noofattempts) == 0
      ) {
        status = 'completed';
      }
      const noofattempt = Number(tabData.studentchapterdata.noofattempts) - 1;
      const body = {
        email: this.studentelementdetailsvalue.userRegister.email,
        usermode: 'student',
        caller: 'webstudent',
        action: 'update',
        studentcoursechapterattempt: {
          studentcoursechapterattemptid: tabData.studentchapterdata.studentcoursechapterattemptid,
          noofattempts: noofattempt,
          action: 'update',
          status: status,
        },
      };

      const apiSub = this._api.studentChapterAttemptCreate(body).subscribe(
        (data: any) => {
          if (data.status == 'Success') {
            const mailSub = this._login.sendDrivemailLog('exit').subscribe({
              next: () => {
                this.VoicebasedService.changeTabState(0);
                this.VoicebasedService.istermandconditionchangeState(false);
                this.VoicebasedService.changeLockState(false);
                this.VoicebasedService.timeorAttemptLockState(false);
                this._global.acceptTerm.next(false);
                this.sharedService.enterInGame('');
                this._router.navigate(['/auth/component/chapter-dashboard']);
              },
              error: (error: any) => {
                this.isNextRoundDisabled = false;
                this.checkloading = false;
                this.driveerrorLog(error, '/maillog/drivemaillog');
              },
            });
            this.subscriptions.push(mailSub);
          }
        },
        (error: any) => {
          this.isNextRoundDisabled = false;
          this.checkloading = false;
          this.driveerrorLog(error, '/student/updatecourseattempt');
        }
      );

      this.subscriptions.push(apiSub);
    });

    this.subscriptions.push(tabDataSub);
  }

  attemptFinish() {
    const body = {
      email: this.useremail,
      usermode: 'student',
      caller: 'student',
      action: 'update',
      coursecode: this.coursecode,
      spreadsheetid: this.studentspreadsheetid,
      currentround: Number(this.noofattempt),
    };
    this._login.updatecourseattempt(body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          this._login.sendDrivemailLog('exit').subscribe({
            next: () => {
              this._login.exitOnLastAttempt();
              this.VoicebasedService.changeTabState(0);
              this.VoicebasedService.istermandconditionchangeState(false);
              this.VoicebasedService.changeLockState(false);
              this.VoicebasedService.timeorAttemptLockState(false);
              this._global.acceptTerm.next(false);
              this._router.navigate(['auth/component/studentdashboardheader']);
            },
            error: (error: any) => {
              this.isNextRoundDisabled = false;
              this.checkloading = false;
              this.driveerrorLog(error, '/maillog/drivemaillog');
            },
          });
        } else {
          this.isNextRoundDisabled = false;
        }
      },
      (error: any) => {
        this.isNextRoundDisabled = false;
        this.checkloading = false;
        this.driveerrorLog(error, '/student/updatecourseattempt');
      }
    );
  }

  downloadreportvoicebased() {
    this.excelsheetservice.createExcelReportforvoicebased(this.participantReportData);
  }

  override ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.tabDataSubscription?.unsubscribe();
    this.studentchapterattemptssub.unsubscribe();
    this.timeorattemptsub.unsubscribe();
    this.voicebasedsub.unsubscribe();
  }
}

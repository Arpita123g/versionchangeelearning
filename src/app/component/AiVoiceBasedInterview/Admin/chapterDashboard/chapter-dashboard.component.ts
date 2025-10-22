import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
// import { VoicebasedService } from '../../service/speech/voicebased.service';
import { Router } from '@angular/router';
import { VoicebasedService } from 'src/app/service/speech/voicebased.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { finalize } from 'rxjs/operators';

interface Chapter {
  chapterNumber: number;
  chaptername: string;
  producttype: string;
  round: number;
  chapterattempts: number;
  previousassignedattempts: number;
  status: 'completed' | 'active' | 'not-started';
  lastAccessed?: Date;
  aichapterid?: string;
  // Add these new properties
  isEnabled?: boolean;
  unlockReason?: string;
  attemptsLeft?: number;
  currentAttempt?: number;
}
@Component({
  selector: 'app-chapterdashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './chapter-dashboard.component.html',
  styleUrls: ['./chapter-dashboard.component.scss']
})
export class ChapterdashboardComponent implements OnInit {
  Studentelementdetailssub: Subscription;
  studentelementdetailsvalue: any = [];
  chapters: Chapter[] = [];
  studentchapterdata: any = [];
  checkTermAndCondition: string = "";
  timeorattemptfinish: boolean = false;
  startChapterLoadingIndex: number | null = null;
  studentcoursechapterattemptdata:any = [];

  constructor(private _api: ApiService,
    private _global: GlobalService,
    private VoicebasedService: VoicebasedService,
    private _router: Router,
    private sharedService: SharedserviceService,
  ) {
    this.Studentelementdetailssub = this._global.studentelementdetails.subscribe((data) => {
      this.studentelementdetailsvalue = data;
    });
  }

  ngOnInit(): void {
    this.getChapterList()
  }

  //all chapter show in table
  getChapterList() {
    let apiname = '/chapter/fetchaichapter';
    this._api.fetchpaichapter(apiname, 'aigameid', this.studentelementdetailsvalue.courseDetails.aigameid,
      'webstudent', 'student'
    ).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success" && data.resultList) {
            this.chapters = data.resultList;
            this.handleChapterAttempts();
          }
          }, error: (error: any) => {

        }
      })
  }

  handleChapterAttempts() {
    let body =
    {
      email: this.studentelementdetailsvalue.userRegister.email,
      usermode: "student",
      caller: "webstudent",
      searchtype: "studentsectionid",
      searchcontent: this.studentelementdetailsvalue.studentsectionid
    }

    this._api.fetchChapterAttempts(body).subscribe({
      next: (data: any) => {

        const existingAttempts = data.resultList || [];
        
        if (existingAttempts.length > 0) {
          this.studentcoursechapterattemptdata = existingAttempts;
          this.useExistingAttempts(existingAttempts);
        } else {
          this.createAttemptsForAllChapters();
        }
      }
    });
  }

  // Use existing attempts
  useExistingAttempts(existingAttempts: any[]) {
   
    this.chapters = this.chapters.map((chapter: any) => {
      const attempt = existingAttempts.find((a: any) => a.aichapterid === chapter.aichapterid);

      return {
        ...chapter,
        currentAttempt: attempt ? attempt.noofattempts : 1,
        attemptsLeft: attempt ?
          attempt.noofattempts :
          chapter.previousassignedattempts,
        status: attempt ? attempt.status : 'not-started'
      };
    });
    // Apply sequential unlocking logic
    this.applySequentialUnlocking();
  }

  applySequentialUnlocking() {
    this.chapters = this.chapters.map((chapter: any, index: number) => {
      let isEnabled = false;
      let unlockReason = '';

      if (index === 0) {
        // First chapter is always enabled
        isEnabled = true;
        unlockReason = 'First chapter - always available';
      } else {
        // Check if previous chapter is in-progress or completed
        const previousChapter = this.chapters[index - 1];

        if (previousChapter && (previousChapter.status === 'completed' || previousChapter.status === 'active')) {
          isEnabled = true;
          unlockReason = previousChapter.status === 'completed'
            ? `Previous chapter "${previousChapter.chaptername}" completed`
            : `Previous chapter "${previousChapter.chaptername}" in progress`;
        } else {
          isEnabled = false;
          unlockReason = previousChapter?.status === 'not-started'
            ? `Start "${previousChapter?.chaptername}" first`
            : `Complete "${previousChapter?.chaptername}" first`;
        }
      }

      return {
        ...chapter,
        isEnabled: isEnabled,
        unlockReason: unlockReason,
        isLocked: !isEnabled
      };
    });
  }



  createAttemptsForAllChapters() {

    const attemptRecords = this.chapters.map((chapter: any) => ({
      studentsectionid: this.studentelementdetailsvalue.studentsectionid,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      userregisterid: this.studentelementdetailsvalue.userRegister.userregisterid,
      aichapterid: chapter.aichapterid,
      noofattempts: chapter.chapterattempts,
      status: 'not-started',
      action: 'save'
    }));

    let body = {
      email: this.studentelementdetailsvalue.userRegister.email,
      usermode: 'student',
      caller: 'webstudent',
      action: 'save',
      studentcoursechapterattempt: attemptRecords
    };


    this._api.studentChapterAttemptCreate(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        this.handleChapterAttempts();
        // this.useExistingAttempts(attemptRecords);
      }
    })
  }

  startChapter(attempts: any, chapter: any,  index: number) {
    this.startChapterLoadingIndex = index; // Start loading
    let noofattempts = 0;
    const previousassignedattempts = chapter.previousassignedattempts;
    if (Number(this.studentcoursechapterattemptdata[index].noofattempts) == 0) {
      noofattempts = Number(previousassignedattempts)
    } else {
      noofattempts = Number(previousassignedattempts) - Number(this.studentcoursechapterattemptdata[index].noofattempts) + 1;
    }

    this._global.noofattempts.next(String(noofattempts));
    if(chapter.status==='completed'){
      this.VoicebasedService.timeorAttemptLockState(true)
    }else{
      this.VoicebasedService.timeorAttemptLockState(false)
    }
    
    this._global.studentchapterattempts.next(this.studentcoursechapterattemptdata[index].noofattempts)
    this.sharedService.enterInGame("voicebasedenter");
    this.VoicebasedService.updateDataProperties({
      chapterdata: chapter,
      studentchapterdata: this.studentcoursechapterattemptdata[index]
    });
    // this.fetchTermAndConditionData(String(noofattempts), chapter, this.studentcoursechapterattemptdata[index]);


    // Robust: Use finalize to always reset loading
    this.fetchTermAndConditionData(String(noofattempts), chapter, this.studentcoursechapterattemptdata[index])
      .pipe(finalize(() => {
        this.startChapterLoadingIndex = null;
      }))
      .subscribe({
        next: (data: any) => {
          if (data.status == 'Success') {
            let reportdisabled = "";
            if (reportdisabled == 'yes') {
              this.VoicebasedService.changeLockState(true);
            } else {
              this.VoicebasedService.changeLockState(false);
            }
            this.checkTermAndCondition = data.resultList[0].termscondition;
            if ((data.resultList[0].interviewcompletedstatus != 'yes') && (this.studentcoursechapterattemptdata[index].noofattempts != 0)) {
              if ((this.checkTermAndCondition == 'yes') && (this.timeorattemptfinish == false)) {
                this.VoicebasedService.istermandconditionchangeState(true);
                this._global.acceptTerm.next(true);
                this._global.interviewcomplete.next(false);
                this.VoicebasedService.changeTabState(1, { data: data, chapterdata: chapter, studentchapterdata: this.studentcoursechapterattemptdata[index] });
              } else {
                this.VoicebasedService.istermandconditionchangeState(false);
                this._global.acceptTerm.next(false);
                this._global.interviewcomplete.next(false);
                this.VoicebasedService.changeTabState(0, { data: data, chapterdata: chapter, studentchapterdata: this.studentcoursechapterattemptdata[index] });
              }
            } else {
              this.VoicebasedService.istermandconditionchangeState(true);
              this._global.interviewcomplete.next(true);
              this.VoicebasedService.changeTabState(2, { data: data, chapterdata: chapter, studentchapterdata: this.studentcoursechapterattemptdata[index] });
            }

            this._router.navigate(["/auth/common/voicebasedparticipantheader"]);
          }
        },
        error: (err: any) => {
          // Optionally handle error here
        }
      });
  }

  
  fetchTermAndConditionData(attempt: string, chapter: any, studentchapter: any) {
    let apiname = "/nonaivoiceinterview/fetchvoiceconversation";
  let studentcoursechapterattemptid = studentchapter?.studentcoursechapterattemptid
  console.log("dd",studentcoursechapterattemptid)
    return this._api.fetchvoiceconversationAi(apiname, attempt, chapter.producttype, chapter.aiquestionsetid,studentcoursechapterattemptid).pipe(
      finalize(() => {}) // No-op, handled in startChapter
    ).pipe(
      // tap or map if you want to process data here
    );
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'active':
        return 'status-in-progress';
      case 'not-started':
        return 'status-not-started';
      default:
        return '';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'active':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
      default:
        return status;
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed': return 'check_circle';
      case 'active': return 'autorenew';
      case 'not-started': return 'hourglass_empty';
      default: return 'help_outline';
    }
  }

  getCompletedChapters(): number {
    return this.chapters.filter(c => c.status === 'completed').length;
  }

  // Method to update chapter status and refresh unlocking logic
  updateChapterStatus(chapterId: string, newStatus: 'completed' | 'active' | 'not-started') {
    const chapterIndex = this.chapters.findIndex(c => c.aichapterid === chapterId);
    if (chapterIndex !== -1) {
      this.chapters[chapterIndex].status = newStatus;
      this.applySequentialUnlocking();
    }
  }

  // Method to refresh chapter list and reapply unlocking logic
  refreshChapterList() {
    this.getChapterList();
  }

  // Method to check if a chapter can be unlocked
  canUnlockChapter(chapterIndex: number): boolean {
    if (chapterIndex === 0) return true;

    const previousChapter = this.chapters[chapterIndex - 1];
    return previousChapter && (previousChapter.status === 'completed' || previousChapter.status === 'active');
  }

 

 ngOnDestroy() {
    this.Studentelementdetailssub?.unsubscribe();
  }
} 
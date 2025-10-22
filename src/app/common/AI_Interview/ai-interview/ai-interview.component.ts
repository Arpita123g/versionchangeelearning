import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2, ViewChild, inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { VoicebasedService } from '../../../service/speech/voicebased.service';
import { InterviewPermissionsComponent } from '../interview-permissions/interview-permissions.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

// Initialize pdfMake with fonts
import pdfMake from 'pdfmake/build/pdfmake';
import 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-ai-interview',
  templateUrl: './ai-interview.component.html',
  styleUrls: ['./ai-interview.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AudioPlayerComponent,
    ReactiveFormsModule
  ]
})
export class AIInterviewComponent extends AbstractComponent {
  dialogresult: boolean = true;
  enableWebcamFlag: boolean = false;
  camopen: boolean = false;
  totaltime: number = 0;
  selected: any = 3;
  options: any = {
    video: true,
    audio: false,
    width: 420,
    height: 315
  };
  avatarno: number = 0;
  chatTranscribe: any = [];

  roundsvalue: any = [
    { val: 1, title: 'one' },
    { val: 2, title: 'two' },
    { val: 3, title: 'three' }
  ];

  private mediaRecorder!: MediaRecorder;
  private chunks: Blob[] = [];
  public isRecording = false;
  audioBlob: Blob = new Blob([], { type: 'audio/wav' });
  respAIBlob: Blob = new Blob([], { type: 'audio/wav' });

  textToSpeak: string = '';
  recognizedText: string = '';
  respSpeech: string = '';

  public counter: number = 0;
  private countdownInterval: any;
  micdisabled: boolean = false;
  audiosendloading: boolean = false;
  voicemasterid: number = 0;
  voiceconversationid: number = 0;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild(AudioPlayerComponent) audio!: AudioPlayerComponent;

  fileContent: string = '';
  jsonData: any;
  roundname: string = '';
  dropdownvalue: any = [];
  fileurl: string = '';
  isPlaying: boolean = false;
  isInterviewOver: boolean = false;
  changestatesub: Subscription;
  isaccepted: boolean = false;
  voicebasedsub: Subscription;
  currenttabb: number = 0;

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    private renderer: Renderer2,
    private http: HttpClient,
    private VoicebasedService: VoicebasedService
  ) {
    super(
      inject(LoginService),
      inject(ApiService),
      inject(SnackbaralertService),
      inject(GlobalService),
      inject(Router),
      inject(RestapiService)
    );
    this.changestatesub = this.VoicebasedService.Istermandconditionaccepted.subscribe((data) => {
      this.isaccepted = data;
    });
    this.voicebasedsub = this.VoicebasedService.currentTabState.subscribe(tabIndex => {
      this.currenttabb = tabIndex;
      if (this.currenttabb == 1) {
        this.startCountdown();
        this.chatFetch(this.noofattempt);
      }
    });
  }

  override ngOnInit(): void {
    this.avatarno = 1;
    const enableWebcamFlag = localStorage.getItem('enableWebcamFlag');
    if (enableWebcamFlag === 'true') {
      this.enableWebcamFlag = true;
    } else {
      this.enableWebcamFlag = false;
    }
  }

  startRecording() {
    this.micdisabled = true;
    if (this.isRecording) {
      this.stopRecording();
    }
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = (event) => {
          this.chunks = [];
          if (event.data.size > 0) {
            this.chunks.push(event.data);
          }
        };
        this.mediaRecorder.onstop = () => {
          this.audioBlob = new Blob(this.chunks, { type: 'audio/wav' });
          this.micdisabled = true;
        };
        this.mediaRecorder.start();
        if (this.mediaRecorder.state === 'recording') {
          this.audio.stop();
          this.micdisabled = false;
          this.isRecording = true;
          setTimeout(() => {
            this.scrollToBottom();
          }, 500);
        }
      })
      .catch(error => {
        alert('Error accessing microphone:');
        console.error('Error accessing microphone:', error);
      });
  }

  stopRecording() {
    if (this.isRecording) {
      this.mediaRecorder.stop();
      this.isRecording = false;
      const tracks = this.mediaRecorder.stream.getTracks();
      tracks.forEach(track => track.stop());
    }
  }

  deleteRecording() {
    this.audioBlob = new Blob([], { type: 'audio/wav' });
    this.micdisabled = false;
  }

  formatEnglish(text: string) {
    var sentences = text.split('. ');
    sentences = sentences.map(function (sentence) {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });
    return sentences.join('. ') + '.';
  }

  async sendAudioToApi() {
    this.micdisabled = true;
    this.audiosendloading = true;
    this.scrollToBottom();
    let apiname = '/voiceconversation/cudvoiceconversation';
    const byteArray = await this._api.convertBlobToByteArray(this.audioBlob);
    const base64String = this.byteArrayToBase64(byteArray);
    this._api.uploadconversation(apiname, this.voiceconversationid, base64String, this.totaltime).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          this.deleteRecording();
          if (data.audioData && data.audioData != 'null') {
            const binaryString = atob(data.audioData);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
              bytes[i] = binaryString.charCodeAt(i);
            }
            const blob = new Blob([bytes.buffer], { type: 'audio/mp3' });
            this.respAIBlob = blob;
          }
          if (data.openaiResponse && data.openaiResponse != 'null') {
            const openaiResponseString = data.openaiResponse;
            this.jsonData = JSON.parse(openaiResponseString);
            this.chatTranscribe = [...this.chatTranscribe, ...this.jsonData];
          }
          const isInterviewOvercheck = this.jsonData.some((item: { content: string; }) => item.content.trim() === 'Thank you, the discussion is over.');
          this.isInterviewOver = isInterviewOvercheck;
          const isreportDisabled = false;
          if (this.isInterviewOver && !isreportDisabled) {
            this.isInterviewOver == true;
            this.micdisabled = true;
            this.stopCountdown();
            setTimeout(() => {
              this.micdisabled = true;
              this.VoicebasedService.changeTabState(2);
            }, 3000);
          }
          setTimeout(() => {
            this.scrollToBottom();
          }, 500);
          this.micdisabled = false;
          this.audiosendloading = false;
        } else {
          this.micdisabled = false;
          this.audiosendloading = false;
        }
      },
      (error: any) => {
        this.audiosendloading = false;
      }
    );
  }

  byteArrayToBase64(byteArray: Uint8Array): string {
    let binaryString = '';
    byteArray.forEach(byte => {
      binaryString += String.fromCharCode(byte);
    });
    return btoa(binaryString);
  }

  blobToByteArray(blob: Blob): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);
        resolve(uint8Array);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(blob);
    });
  }

  chatFetch(attempt: string) {
    let apiname = "/voiceconversation/fetchvoiceconversation"
    this._api.fetchvoiceconversation(apiname, attempt).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          let attempt = Number(data.resultList[0].roundno);
          this.roundname = "Round " + attempt;
          if (attempt > 0) {
            for (let i = 1; i < attempt + 1; i++) {
              this.dropdownvalue[i - 1] = "Round " + i;
            }
          }
          this.voiceconversationid = data.resultList[0].voiceconversationid;
          if (data.audioData && data.audioData != "" && data.audioData!="null") {
            const binaryString = atob(data.audioData);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
              bytes[i] = binaryString.charCodeAt(i);
            }
            const blob = new Blob([bytes.buffer], { type: 'audio/mp3' });
            this.respAIBlob = blob;
          }
          if (data.openaiResponse && data.openaiResponse!="null") {
            const chatdata = data.openaiResponse;
            this.jsonData = JSON.parse(chatdata);
            this.chatTranscribe = this.jsonData;
          }
          const isInterviewOvercheck = this.jsonData.some((item: { content: string; }) => item.content.trim() === 'Thank you, the discussion is over.');
          // Set a flag based on the check
          this.isInterviewOver = isInterviewOvercheck;
          const isreportDisabled = false;
          if (this.isInterviewOver && !isreportDisabled) {
            this.isInterviewOver == true;
            this.micdisabled = true;
            console.log("kkk")
            this.stopCountdown();
            setTimeout(() => {
              this.VoicebasedService.changeTabState(2)
            }, 3000)
          }
          // console.log("chat", this.chatTranscribe)
          setTimeout(() => {
            this.scrollToBottom();
          }, 500);
        } else {

        }
      }
    )
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error(err);
    }
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private startCountdown() {
    this.countdownInterval = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  private stopCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    this.totaltime = Number(hours) * 3600 + Number(minutes) * 60 + Number(remainingSeconds);
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  roundClick() {
    let attempt = this.roundname.split(" ");
    this.chatFetch(attempt[1]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(InterviewPermissionsComponent, {
      disableClose: true,
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dialogresult = result
    });
  }

  onCamSuccess(e: any) {
    if (e) {
      this.camopen = e.active;
    }
  }

  onCamError(e: any) {
    if (e) {
      this.camopen = false;
    }
  }

  toggleMedia() {
    this.enableWebcamFlag = !this.enableWebcamFlag;
    localStorage.setItem("enableWebcamFlag", this.enableWebcamFlag.toString());
  }

  endSimulation() {
    const dialogRef = this.dialog.open(Endpopuppermision, {
      width: '40%',
      panelClass: "achivemodal"
    });
    dialogRef.afterClosed().subscribe(result => {

    });

    console.log('Simulation End Pressed');
  }

  nextRound() {
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "student",
      action: "update",
      coursecode: this.coursecode,
      spreadsheetid: this.studentspreadsheetid,
      currentround:Number(this.noofattempt)
    };
    this._login.updatecourseattempt(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        let status = "exit";
        this._login.sendDrivemailLog(status).subscribe(
          {
            next: (data: any) => {
              this._login.exitOnLastAttempt();

              this._router.navigate(['auth/component/studentdashboardheader']);

            }, error: (error: any) => {
              this.checkloading = false;
              this.driveerrorLog(error, "/maillog/drivemaillog");
            }
          })

      }
    }, (error: any) => {
      this.checkloading = false;
      this.driveerrorLog(error, '/student/updatecourseattempt');
    })
  }

  handleIsPlayingChanged(isPlaying: boolean) {
    this.isPlaying = isPlaying;
  }

  override ngOnDestroy() {
    this.stopCountdown();
  }
}

@Component({
  selector: 'app-endpopuppermision',
  templateUrl: './endpopuppermision.html',
  styleUrls: ['./ai-interview.component.scss']
})

export class Endpopuppermision extends AbstractComponent {
  isbuttondisabled:boolean = false;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    private VoicebasedService: VoicebasedService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    private dialogRef: MatDialogRef<Endpopuppermision>
  ) {
    super(
      inject(LoginService),
      inject(ApiService),
      inject(SnackbaralertService),
      inject(GlobalService),
      inject(Router),
      inject(RestapiService)
    );
  }

  override ngOnInit(): void {

  }

  close() {
    this.dialogRef.close(false);
  }

  save() {
    this.isbuttondisabled = true;
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "student",
      action: "update",
      coursecode: this.coursecode,
      spreadsheetid: this.studentspreadsheetid,
      currentround:Number(this.noofattempt)
    };
    this._login.updatecourseattempt(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        let status = "exit";
        this._login.sendDrivemailLog(status).subscribe(
          {
            next: (data: any) => {
              this._login.exitOnLastAttempt();
              this.VoicebasedService.changeTabState(0);
              this.VoicebasedService.istermandconditionchangeState(false);
              this.VoicebasedService.changeLockState(false);
              this.VoicebasedService.timeorAttemptLockState(false);
              this._global.acceptTerm.next(false);
              this._router.navigate(['auth/component/studentdashboardheader']);
              this.dialogRef.close(false);

            }, error: (error: any) => {
              this.isbuttondisabled = false;
              this.checkloading = false;
              this.driveerrorLog(error, "/maillog/drivemaillog");
              this.dialogRef.close(false);
            }
          })

      }
    }, (error: any) => {
      this.checkloading = false;
      this.driveerrorLog(error, '/student/updatecourseattempt');
    })

  }
}
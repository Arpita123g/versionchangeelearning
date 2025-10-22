import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { InterviewparticipantcaseComponent } from '../voicebasedinterviewparticipantsideTab/interviewparticipantcase/interviewparticipantcase.component';
import { InterviewparticipantconversationComponent } from '../voicebasedinterviewparticipantsideTab/interviewparticipantconversation/interviewparticipantconversation.component';
import { InterviewparticipantreportComponent } from '../voicebasedinterviewparticipantsideTab/interviewparticipantreport/interviewparticipantreport.component';

@Component({
  selector: 'app-voicebasedparticipantinterviewtabheader',
  templateUrl: './voicebasedparticipantinterviewtabheader.component.html',
  styleUrls: ['./voicebasedparticipantinterviewtabheader.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    InterviewparticipantcaseComponent,
    InterviewparticipantconversationComponent,
    InterviewparticipantreportComponent
  ]
})
export class VoicebasedparticipantinterviewtabheaderComponent implements OnInit {
  isLoading = signal<boolean>(false);
  userMode = signal<string>('');
  userName = signal<string>('');
  currenttabb = signal<number>(0);

  constructor(
    private readonly _router: Router,
    private readonly _global: GlobalService,
    private readonly _login: LoginService,
    private readonly _alert: SnackbaralertService
  ) {}

  ngOnInit(): void {
    this._global.usermode.subscribe(mode => {
      this.userMode.set(mode);
    });

    this._global.useremail.subscribe(email => {
      this.userName.set(email);
    });
  }

  navigateTo(route: string): void {
    this._router.navigate([route]);
  }

  logout(): void {
    this.isLoading.set(true);
    this._login.checkadminlogin({}).subscribe({
      next: () => {
        this._global.islogin.next(false);
        this._router.navigate(['/login']);
      },
      error: (error: Error) => {
        this._alert.error(error.message || 'Logout failed');
        this.isLoading.set(false);
      }
    });
  }
}

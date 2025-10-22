import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GlobalService } from 'src/app/service/global.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';

@Component({
  selector: 'app-interviewparticipantconversation',
  templateUrl: './interviewparticipantconversation.component.html',
  styleUrls: ['./interviewparticipantconversation.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class InterviewparticipantconversationComponent implements OnInit {
  isLoading = signal<boolean>(false);
  conversationData = signal<any[]>([]);
  currentRound = signal<number>(1);

  constructor(
    private readonly _global: GlobalService,
    private readonly _api: ApiService
  ) {}

  ngOnInit(): void {
    this.loadConversationData();
  }

  private loadConversationData(): void {
    this.isLoading.set(true);
    // Add your conversation data loading logic here
    this._api.fetchconversation('student', 'student', this.currentRound(), 'Voice Interview', 'VOICE001', 0, '/voice/fetchconversation').subscribe({
      next: (data: any) => {
        this.conversationData.set(data);
        this.isLoading.set(false);
      },
      error: (error: any) => {
        console.error('Error loading conversation data:', error);
        this.isLoading.set(false);
      }
    });
  }

  nextRound(): void {
    this.currentRound.update(round => round + 1);
    this.loadConversationData();
  }

  previousRound(): void {
    if (this.currentRound() > 1) {
      this.currentRound.update(round => round - 1);
      this.loadConversationData();
    }
  }
}

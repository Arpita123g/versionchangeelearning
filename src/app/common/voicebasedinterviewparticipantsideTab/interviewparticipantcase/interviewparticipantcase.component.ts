import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-interviewparticipantcase',
  templateUrl: './interviewparticipantcase.component.html',
  styleUrls: ['./interviewparticipantcase.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class InterviewparticipantcaseComponent implements OnInit {
  isLoading = signal<boolean>(false);
  caseData = signal<any>(null);

  constructor(private readonly _global: GlobalService) {}

  ngOnInit(): void {
    this.loadCaseData();
  }

  private loadCaseData(): void {
    this.isLoading.set(true);
    // Add your case data loading logic here
    this.isLoading.set(false);
  }
}

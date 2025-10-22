import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-interviewfor-ai',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './interviewfor-ai.component.html',
  styleUrls: ['./interviewfor-ai.component.scss']
})
export class InterviewforAIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

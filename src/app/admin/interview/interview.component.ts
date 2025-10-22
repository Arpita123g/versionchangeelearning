import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserEmailService } from '../../services/user-email.service';

interface Question {
  text: string;
}

interface TableElement {
  username: string;
  chapter: string;
  type: string;
  questionprompt: string;
  question: string;
  isExpanded?: boolean;
}

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule
  ],
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);
  private router = inject(Router);
  private userEmailService = inject(UserEmailService);

  createcoursegroup: FormGroup;
  selectedGame: string = '';
  selectedQuestionSet: string = '';
  isadd: boolean = false;
  showAIQuestion: boolean = false;
  questions: Question[] = [];
  displayedColumns: string[] = ['game', 'chapter', 'type', 'questionprompt', 'question', 'update', 'delete'];
  dataSource = new MatTableDataSource<TableElement>([]);

  constructor() {
    this.createcoursegroup = this.fb.group({
      questionSetName: [''],
      systemPrompt: [''],
      generalPrompt: [''],
      feedbackSystemPrompt: [''],
      feedbackGeneralPrompt: ['']
    });
  }

  ngOnInit(): void {
    this.getTableData();
  }

  onGameSelect(event: any): void {
    this.selectedGame = event.value;
    this.showAIQuestion = false;
  }

  toggleadd(): void {
    this.isadd = !this.isadd;
  }

  addQuestion(): void {
    this.questions.push({ text: '' });
  }

  checkGameSelection(): void {
    if (this.selectedQuestionSet) {
      this.showAIQuestion = true;
    }
  }

  cuquestionset(): void {
    // Implementation for create/update question set
  }

  openModal(): void {
    // Implementation for opening game creation modal
  }

  updatechapter(element: TableElement): void {
    // Implementation for updating chapter
  }

  deletechapter(element: TableElement): void {
    // Implementation for deleting chapter
  }

  private getTableData(): void {
    // Implementation for fetching table data
    this.dataSource.data = [
      {
        username: 'Game 1',
        chapter: 'Chapter 1',
        type: 'Type 1',
        questionprompt: 'Prompt 1',
        question: 'Question 1'
      }
      // Add more mock data as needed
    ];
  }
}

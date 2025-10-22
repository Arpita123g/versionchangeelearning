import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { UserComponent } from '../user/user.component';
import { InterviewgamecreateComponent } from '../../component/AiVoiceBasedInterview/Admin/createGame/interviewgamecreate.component';
import { CreateChapterComponent } from '../../component/AiVoiceBasedInterview/Admin/createChapter/createchapter.component';
import { CreateCourseComponent } from '../../component/AiVoiceBasedInterview/Admin/createCourse/createcourse.component';

type TabName = 'microsimulation' | 'interviewforAi';
type PromptTab = 'question' | 'chapter' | 'game';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    UserComponent,
    InterviewgamecreateComponent,
    CreateChapterComponent,
    CreateCourseComponent
  ]
})
export class AdminheaderComponent implements OnInit {
  headertab: TabName = 'microsimulation';
  secondtab: TabName = 'interviewforAi';
  activetab: TabName = 'microsimulation';
  prompttab: PromptTab = 'question';

  ngOnInit(): void {
    // Initialize component if needed
  }

  forum(tabnamefirst: TabName): void {
    this.headertab = tabnamefirst;
  }

  opensecondtab(tabnamesecond: TabName): void {
    this.secondtab = tabnamesecond;
  }

  interviewforaiclick(value: PromptTab): void {
    this.prompttab = value;
  }

  tabclick(tab: TabName): void {
    this.activetab = tab;
  }
}

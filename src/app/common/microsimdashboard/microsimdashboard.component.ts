import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // <-- Import this
import { MicrosimdashboardstructureComponent } from '../microsimdashboardstructure/microsimdashboardstructure.component';
import { MicrosimleaderboardgeneralComponent } from '../microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { MicrosimleaderboardreportComponent } from '../microsimleaderboardreport/microsimleaderboardreport.component';
import { MicrosimarchiveComponent } from '../microsim/microsimarchive/microsimarchive.component';
// import { AiassesmentComponent } from '../AI_Interview/aiassesment/aiassesment.component';
import { AifeedbackComponent } from '../aiassesmentandfeedback/aifeedback/aifeedback.component';
import { AiassesmentComponent } from '../aiassesmentandfeedback/aiassesment/aiassesment.component';
import { FormsModule } from '@angular/forms';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { MaterialUploadComponent, MaterialviewComponent } from '../materialview/materialview.component';
import { QuizComponent } from '../quiz/quiz.component';
import { SharecasedComponent } from '../sharecased/sharecased.component';
import { ForumindividualComponent } from '../forumindividual/forumindividual.component';
import { ForumcourseComponent } from '../forumcourse/forumcourse.component';

@Component({
  selector: 'app-microsimdashboard',
  templateUrl: './microsimdashboard.component.html',
  styleUrls: ['./microsimdashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,// <-- Add here
    MicrosimdashboardstructureComponent,
    MicrosimleaderboardgeneralComponent,
    MicrosimleaderboardreportComponent,
    MicrosimarchiveComponent,
    AiassesmentComponent,
    AifeedbackComponent,
    ForumindividualComponent,
    ForumcourseComponent,
    ChatboxComponent,
    MaterialviewComponent,
    MaterialUploadComponent,
    QuizComponent,
    SharecasedComponent,
  ]
})
export class MicrosimdashboardComponent {
  activetab: string = "microsimstructure";
  subactivetab: string = "microsimleaderboardgeneral";
  subTab: string = "cesimcase";
  chattypeinstructor: string = 'individual';
  chattypecourse: string = 'course';
  aiassesmenttab: string = "assesment";
  selectedTab: string = 'cesimcase';

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('backClicked') === 'yes') {
      this.activetab = String(localStorage.getItem('lastTab'));
      this.selectedTab = String(localStorage.getItem('selectedTab'));
      localStorage.setItem('backClicked', 'no');
    }
  }

  setTab(tabName: string) {
    this.selectedTab = tabName;
  }

  tabclick(tab: string) {
    this.activetab = tab;
  }

  aiassesmentclick(tab: string) {
    this.aiassesmenttab = tab;
  }
}

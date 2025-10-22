import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MarkdownModule } from 'ngx-markdown';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTreeModule } from '@angular/material/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { TippyDirective } from './directive/tippy.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';

import { FoodforthoughtComponent } from './foodforthought/foodforthought.component';
import { PopupDialogueComponent } from './popup-dialogue/popup-dialogue.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { InstructorchatboxComponent } from './instructorchatbox/instructorchatbox.component';
import { MicrosimdashboardComponent } from './microsimdashboard/microsimdashboard.component';
import { MicrosimdashboardstructureComponent } from './microsimdashboardstructure/microsimdashboardstructure.component';
import { SharecasedComponent, SharedpopupComponent } from './sharecased/sharecased.component';
import { MaterialUploadComponent, MaterialviewComponent } from './materialview/materialview.component';

import { QuizComponent } from './quiz/quiz.component';
import { MicrosimleaderboardreportComponent } from './microsimleaderboardreport/microsimleaderboardreport.component';
import { AiassesmentComponent } from './aiassesmentandfeedback/aiassesment/aiassesment.component';
import { AifeedbackComponent } from './aiassesmentandfeedback/aifeedback/aifeedback.component';
import { MicrosimleaderboardgeneralComponent } from './microsimleaderboardgeneral/microsimleaderboardgeneral.component';
import { BusinessbascisreadingComponent } from '../component/BusinessBascisGame/businessbascisreading/businessbascisreading.component';
import { MicrosimarchiveComponent } from './microsim/microsimarchive/microsimarchive.component';
import { ReadingComponent, ReadingvideopopupComponent } from './reading/reading.component';
import { InstructorchilddashboardComponent, ReportdisabledComponent } from './instructorchilddashboard/instructorchilddashboard.component';
import { VoicebaseddashboardComponent } from './voicebaseddashboard/voicebaseddashboard.component';
import { AIInterviewComponent, Endpopuppermision } from './AI_Interview/ai-interview/ai-interview.component';
import { VoicebasedparticipantinterviewtabheaderComponent } from './voicebasedparticipantinterviewtabheader/voicebasedparticipantinterviewtabheader.component';
import { InterviewPermissionsComponent } from './AI_Interview/interview-permissions/interview-permissions.component';
import { AudioPlayerComponent } from './AI_Interview/audio-player/audio-player.component';
// import { SiriAnimationComponent } from './AI_Interview/siri-animation/siri-animation.component';
import { InterviewparticipantreportComponent } from './voicebasedinterviewparticipantsideTab/interviewparticipantreport/interviewparticipantreport.component';
import { InterviewparticipantcaseComponent } from './voicebasedinterviewparticipantsideTab/interviewparticipantcase/interviewparticipantcase.component';
import { WebcameraComponent } from './AI_Interview/webcamera/webcamera.component';
import { InterviewparticipantconversationComponent } from './voicebasedinterviewparticipantsideTab/interviewparticipantconversation/interviewparticipantconversation.component';
import { VoicebasearchiveComponent } from './voicebasedsim/voicebasearchive/voicebasearchive.component';
import { VoicebasecompletedComponent } from './voicebasedsim/voicebasecompleted/voicebasecompleted.component';
import { VoicebaseongoingComponent } from './voicebasedsim/voicebaseongoing/voicebaseongoing.component';
import { VoicebaseddashboardsettingsComponent } from './voicebaseddashboardsettings/voicebaseddashboardsettings.component';
import { JustificationpopupComponent, VoicebaseddashboardreportComponent } from './voicebaseddashboardreport/voicebaseddashboardreport.component';
import { VoicebaseddashboardstructureComponent } from './voicebaseddashboardstructure/voicebaseddashboardstructure.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FilepreviewComponent } from './filepreview/filepreview.component';
import { FooterComponent } from './footer/footer.component';
import { SnackbaralertComponent } from './snackbaralert/snackbaralert.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent, UserdetailsComponent } from './toolbar/toolbar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CesimtoolbarComponent } from './cesimtoolbar/cesimtoolbar.component';
import { MicrosimcompletedComponent } from './microsim/microsimcompleted/microsimcompleted.component';
import { InstructordashboardheaderComponent } from './instructordashboardheader/instructordashboardheader.component';
import { MicrosimongoingComponent } from './microsim/microsimongoing/microsimongoing.component';
import { NewinstructorviewComponent } from './newinstructorview/newinstructorview.component';
import { GamecopyComponent, MicrosimcasemanagementComponent, PrimarycourseselectpopupComponent } from './microsimcasemanagement/microsimcasemanagement.component';
import { NewtimeupdateComponent } from './newtimeupdate/newtimeupdate.component';
import { RoundsornumberofattemptsComponent } from './roundsornumberofattempts/roundsornumberofattempts.component';
import { BlankinputlistComponent } from './blankinputlist/blankinputlist.component';
import { StudentdashboardheaderComponent } from './studentdashboardheader/studentdashboardheader.component';
import { StudentheadercompletedComponent } from './studentheadercompleted/studentheadercompleted.component';
import { StudentheaderongoingComponent } from './studentheaderongoing/studentheaderongoing.component';
import { ArchiveupdateComponent } from './archiveupdate/archiveupdate.component';
import { ScrollbuttonComponent } from './scrollbutton/scrollbutton.component';
import { SubjectsidenavtabComponent } from '../component/casemanagement/changemanagementcasenew/subjectsidenavtab/subjectsidenavtab.component';
import { PasswordupdateComponent } from './passwordupdate/passwordupdate.component';
import { DeleteComponent } from './delete/delete/delete.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TimerComponent } from '../component/timer/timer.component';
import { MatRadioModule } from '@angular/material/radio';
import { DashboardstudentComponent, EnrollStudent, UpdateStudent } from '../component/dashboardstudent/dashboardstudent.component';
import { ForumindividualComponent } from './forumindividual/forumindividual.component';
import { ForumcourseComponent } from './forumcourse/forumcourse.component';

const routes: Routes = [
  { path: 'microsimdashboard', component: MicrosimdashboardComponent },
  { path: 'voicebasedashboard', component: VoicebaseddashboardComponent },
  { path: 'aiinterview', component: AIInterviewComponent },
  { path: 'voicebasedparticipantheader', component: VoicebasedparticipantinterviewtabheaderComponent },
];
@NgModule({
  declarations: [
   
    Endpopuppermision,
    SnackbaralertComponent,
   
  ],
  imports: [
    MicrosimdashboardComponent,
    VoicebaseddashboardComponent,
    AIInterviewComponent,
    VoicebasedparticipantinterviewtabheaderComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatToolbarModule,
    NgApexchartsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatChipsModule,
    MatRadioModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    TextFieldModule,
    TippyDirective,
    
    TimerComponent,
    FoodforthoughtComponent,
    PopupDialogueComponent,
    ChatboxComponent,
    InstructorchatboxComponent,
    MicrosimdashboardComponent,
    MicrosimdashboardstructureComponent,
    SharecasedComponent,
    SharedpopupComponent,
    MaterialUploadComponent,
    MaterialviewComponent,
    QuizComponent,
    MicrosimleaderboardreportComponent,
    AifeedbackComponent,
    AiassesmentComponent,
    MicrosimleaderboardgeneralComponent,
    BusinessbascisreadingComponent,
    ForumcourseComponent,
    ForumindividualComponent,
    MicrosimarchiveComponent,
    ReadingComponent,
    ReadingvideopopupComponent,
    InstructorchilddashboardComponent,
    ReportdisabledComponent,
    VoicebaseddashboardComponent,
    AIInterviewComponent,
    // Endpopuppermision is non-standalone and declared above
    VoicebasedparticipantinterviewtabheaderComponent,
    InterviewPermissionsComponent,
    AudioPlayerComponent,
    // SiriAnimationComponent,
    WebcameraComponent,
    InterviewparticipantcaseComponent,
    InterviewparticipantconversationComponent,
    InterviewparticipantreportComponent,
    VoicebasearchiveComponent,
    VoicebasecompletedComponent,
    VoicebaseongoingComponent,
    VoicebaseddashboardsettingsComponent,
    VoicebaseddashboardstructureComponent,
    JustificationpopupComponent,
    VoicebaseddashboardreportComponent,
    DashboardstudentComponent,
    UpdateStudent,
    EnrollStudent,
    ConfirmationComponent,
    FilepreviewComponent,
    FooterComponent,
    SidenavComponent,
    // SnackbaralertComponent is non-standalone and declared above
    // ToolbarComponent is non-standalone and declared above
    UserdetailsComponent,
    ConfirmDialogComponent,
    CesimtoolbarComponent,
    InstructordashboardheaderComponent,
    MicrosimcompletedComponent,
    MicrosimongoingComponent,
    NewinstructorviewComponent,
    GamecopyComponent, MicrosimcasemanagementComponent, PrimarycourseselectpopupComponent,
    NewtimeupdateComponent,
    RoundsornumberofattemptsComponent,
    BlankinputlistComponent,
    StudentdashboardheaderComponent,
    StudentheadercompletedComponent,
    StudentheaderongoingComponent,
    ArchiveupdateComponent,
    PasswordupdateComponent,
    ScrollbuttonComponent,
    SubjectsidenavtabComponent,
    DeleteComponent,
    ToolbarComponent

  ],
  exports: [
    
    TimerComponent,
    FoodforthoughtComponent,
    PopupDialogueComponent,
    ChatboxComponent,
    InstructorchatboxComponent,
    MicrosimdashboardComponent,
    MicrosimdashboardstructureComponent,
    SharecasedComponent,
    SharedpopupComponent,
    MaterialUploadComponent,
    MaterialviewComponent,
    QuizComponent,
    MicrosimleaderboardreportComponent,
    AifeedbackComponent,
    AiassesmentComponent,
    MicrosimleaderboardgeneralComponent,
    BusinessbascisreadingComponent,
    ForumcourseComponent,
    ForumindividualComponent,
    MicrosimarchiveComponent,
    ReadingComponent,
    ReadingvideopopupComponent,
    InstructorchilddashboardComponent,
    ReportdisabledComponent,
    // NgxSimpleTextEditorModule,
    // LanguagecasemanagementComponent,
    TippyDirective,

    VoicebaseddashboardComponent,
    AIInterviewComponent,
    Endpopuppermision,
    VoicebasedparticipantinterviewtabheaderComponent,
    // AiInterviewsvComponent,

    InterviewPermissionsComponent,
    AudioPlayerComponent,
    // SiriAnimationComponent,
    WebcameraComponent,
    InterviewparticipantcaseComponent,
    InterviewparticipantconversationComponent,
    InterviewparticipantreportComponent,
    VoicebasearchiveComponent,
    VoicebasecompletedComponent,
    VoicebaseongoingComponent,
    VoicebaseddashboardsettingsComponent,
    VoicebaseddashboardstructureComponent,
    ConfirmationComponent,
    FilepreviewComponent,
    FooterComponent,
    SidenavComponent,
    SnackbaralertComponent,
    ToolbarComponent,
    ConfirmDialogComponent,
    CesimtoolbarComponent,
    InstructordashboardheaderComponent,
    MicrosimcompletedComponent,
    MicrosimongoingComponent,
    NewinstructorviewComponent,
    GamecopyComponent, MicrosimcasemanagementComponent, PrimarycourseselectpopupComponent,
    NewtimeupdateComponent,
    RoundsornumberofattemptsComponent,
    JustificationpopupComponent,
    BlankinputlistComponent,
    StudentdashboardheaderComponent,
    StudentheadercompletedComponent,
    StudentheaderongoingComponent,
    ArchiveupdateComponent,
    PasswordupdateComponent,
    ScrollbuttonComponent,
    SubjectsidenavtabComponent,
    DeleteComponent,
      // VoiceInterviewComponent,
      // QuestionarrangeComponent,
    DashboardstudentComponent,
    UpdateStudent, EnrollStudent,


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CommonComponentsModule { } 
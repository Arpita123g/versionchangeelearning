import { NgModule } from "@angular/core";
import { ChapterdashboardComponent } from "./Admin/chapterDashboard/chapter-dashboard.component";
import { CreateChapterComponent, UpdateChapterComponent } from "./Admin/createChapter/createchapter.component";
import { AddCourseComponent, CreateCourseComponent, DeleteCourseComponent, UpdateCourseComponent, UpdatePasswordAiUserComponent } from "./Admin/createCourse/createcourse.component";
import { InterviewgamecreateComponent } from "./Admin/createGame/interviewgamecreate.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MarkdownModule } from "ngx-markdown";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
// import { NgxSimpleTextEditorModule } from "ngx-simple-text-editor";
// import { WebCamModule } from "ack-angular-webcam";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        NgApexchartsModule,
        MatPaginatorModule,
        MatTableModule,
        // NgxSimpleTextEditorModule,
        // WebCamModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatCardModule,
        MatChipsModule,
        MatRadioModule,
        MatSelectModule,
        MarkdownModule.forRoot(),
        // Standalone components
        ChapterdashboardComponent,
        CreateChapterComponent,
        UpdateChapterComponent,
        CreateCourseComponent,
        DeleteCourseComponent,
        UpdatePasswordAiUserComponent,
        AddCourseComponent,
        UpdateCourseComponent,
        InterviewgamecreateComponent,
    ],
    exports: [
        InterviewgamecreateComponent,
        CreateCourseComponent,
        CreateChapterComponent
    ]
  })
  export class AiVoiceBasedInterviewModule { } 
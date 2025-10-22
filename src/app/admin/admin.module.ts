import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';

import { AdminheaderComponent } from './adminheader/adminheader.component';
import { UserComponent, AddCourseUserComponent, DeleteUserComponent, UpdatePasswordUserComponent, UpdateUserComponent } from './user/user.component';
import { CreatepromptComponent, PromptdialogComponent } from './createprompt/createprompt.component';

import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { TermandconditionComponent, TermconditionpopupComponent } from './termandcondition/termandcondition.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
// import { AiVoiceBasedInterviewModule } from '../component/AiVoiceBasedInterview/aivoicebasedinterview.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { AiVoiceBasedInterviewModule } from '../component/AiVoiceBasedInterview/aivoicebasedinterview.module';

const routes: Routes = [
  { path: 'adminheader', component: AdminheaderComponent },
  { path: 'termandcondition', component: TermandconditionComponent },
];

@NgModule({

  declarations: [
    // Only non-standalone declarations should remain here
  ],

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
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    AiVoiceBasedInterviewModule,
    // Standalone user components
    UserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    UpdatePasswordUserComponent,
    AddCourseUserComponent,
    PasswordDialogComponent,
    // Standalone admin components
    AdminheaderComponent,
    CreatepromptComponent,
    PromptdialogComponent,
    TermandconditionComponent,
    TermconditionpopupComponent,
  ],

  exports: [
    AdminheaderComponent,
    CreatepromptComponent,
    PromptdialogComponent,
    PasswordDialogComponent,
    TermandconditionComponent,
    TermconditionpopupComponent,
    // Re-export standalone user components for external usage
    UserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    UpdatePasswordUserComponent,
    AddCourseUserComponent,
  ]

})
export class AdminModule { }
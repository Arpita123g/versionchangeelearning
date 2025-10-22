import { Component } from '@angular/core';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from '../chatbox/chatbox.component';
@Component({
  selector: 'app-forumcourse',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ChatboxComponent],
  templateUrl: './forumcourse.component.html',
  styleUrl: './forumcourse.component.scss'
})
export class ForumcourseComponent extends AbstractComponent {
  chattype:string = 'course';
  content = '';
  topic: string = "";
  isforumshow: boolean = false;
  messagearray: any = [];
  config: any = {
    placeholder: 'Type something...',
    buttons: [],
  };
  constructor(_router: Router, _global: GlobalService, _login: LoginService, _api: ApiService,
    _alert: SnackbaralertService, _restapiservice: RestapiService, private _form: FormBuilder, private _dialog: MatDialog,
  ) {

    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.messagearray = ["this is text", "it is a book"]
  }


}

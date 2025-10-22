import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forumindividual',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ChatboxComponent],
  templateUrl: './forumindividual.component.html',
  styleUrl: './forumindividual.component.scss'
})
export class ForumindividualComponent extends AbstractComponent{
  content = '';
  topic: string = "";
  chattype:string = 'individual';
  isforumshow: boolean = false;
  messagearray: any = [];
  config: any = {
    placeholder: 'Type something...',
    buttons: [],
  };
  constructor(_router: Router, _global: GlobalService, _login: LoginService, _api: ApiService,
    _alert: SnackbaralertService, _restapiservice: RestapiService, private _form: FormBuilder, 
    private _dialog: MatDialog,
  ) {

    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
  }
}

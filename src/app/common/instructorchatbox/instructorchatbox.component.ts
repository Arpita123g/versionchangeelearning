import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ChatboxComponent } from '../chatbox/chatbox.component';

@Component({
  selector: 'app-instructorchatbox',
  templateUrl: './instructorchatbox.component.html',
  styleUrls: ['./instructorchatbox.component.scss'],
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    ChatboxComponent
  ]
})
export class InstructorchatboxComponent extends AbstractComponent {
  chattypeinstructor = 'individual';
  chattypecourse = 'course';
  activeTab = signal<string>('individual');

  constructor(
    _router: Router,
    _global: GlobalService,
    _login: LoginService,
    _api: ApiService,
    _alert: SnackbaralertService,
    _restapiservice: RestapiService,
    private datePipe: DatePipe
  ) {
    super(
      inject(LoginService),
      inject(ApiService),
      inject(SnackbaralertService),
      inject(GlobalService),
      inject(Router),
      inject(RestapiService)
    );
  }

  override ngOnInit(): void {
    // Initialize any required data
  }

  tabclick(tabname: string): void {
    this.activeTab.set(tabname);
  }
}

import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { GlobalService } from '../../service/global.service';
import { LoginService } from '../../service/auth/login.service';
import { SnackbaralertService } from '../../service/snackbaralert.service';

@Component({
  selector: 'app-voicebaseddashboard',
  templateUrl: './voicebaseddashboard.component.html',
  styleUrls: ['./voicebaseddashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class VoicebaseddashboardComponent implements OnInit {
  isLoading = signal<boolean>(false);
  userMode = signal<string>('');
  userName = signal<string>('');
  
  // Template properties
  activetab = signal<string>('voicebasedstructure');

  constructor(
    private readonly _router: Router,
    private readonly _global: GlobalService,
    private readonly _login: LoginService,
    private readonly _alert: SnackbaralertService
  ) {}

  ngOnInit(): void {
    this._global.usermode.subscribe(mode => {
      this.userMode.set(mode);
    });

    this._global.useremail.subscribe(email => {
      this.userName.set(email);
    });
  }

  navigateTo(route: string): void {
    this._router.navigate([route]);
  }

  logout(): void {
    this.isLoading.set(true);
    this._login.checkadminlogin({}).subscribe({
      next: () => {
        this._global.islogin.next(false);
        this._router.navigate(['/login']);
      },
      error: (error: Error) => {
        this._alert.error(error.message || 'Logout failed');
        this.isLoading.set(false);
      }
    });
  }

  // Template methods
  tabclick(tab: string): void {
    this.activetab.set(tab);
  }
}

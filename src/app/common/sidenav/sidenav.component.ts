import { Component, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CesimtoolbarComponent } from '../cesimtoolbar/cesimtoolbar.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    RouterModule,
    CesimtoolbarComponent
  ]
})
export class SidenavComponent implements OnInit {
  readonly isExpanded = signal<boolean>(false);
  readonly isInstructor = signal<boolean>(false);
  readonly isStudent = signal<boolean>(false);
  readonly isAdmin = signal<boolean>(false);
  readonly showFiller = signal<boolean>(false);
  readonly isButtonVisible = signal<boolean>(false);

  private usermodeSubscription: Subscription;

  constructor(
    private readonly _global: GlobalService,
    private readonly _router: Router,
    private readonly _login: LoginService,
    private readonly _api: ApiService,
    private readonly _alert: SnackbaralertService,
    private readonly _restapiservice: RestapiService
  ) {
    this.usermodeSubscription = this._global.usermode.subscribe((mode: string) => {
      this.isInstructor.set(mode === 'instructor');
      this.isStudent.set(mode === 'student');
      this.isAdmin.set(mode === 'admin');
    });
  }

  ngOnInit(): void {
    // Initial check
    this.checkUserRole();
  }

  private checkUserRole(): void {
    const currentMode = this._global.usermode.getValue();
    this.isInstructor.set(currentMode === 'instructor');
    this.isStudent.set(currentMode === 'student');
    this.isAdmin.set(currentMode === 'admin');
  }

  toggleSidebar(): void {
    this.isExpanded.update(value => !value);
  }

  navigateTo(route: string): void {
    this._router.navigate([route]);
  }

  logout(): void {
    this._login.checkadminlogin({}).subscribe(() => {
      this._router.navigate(['/login']);
    });
  }

  onElementScroll(event: any): void {
    // Show scroll to top button when scrolled down
    const scrollTop = event.target.scrollTop;
    this.isButtonVisible.set(scrollTop > 300);
  }

  goooototop(): void {
    // Scroll to top functionality
    const container = document.querySelector('.sidenav-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    if (this.usermodeSubscription) {
      this.usermodeSubscription.unsubscribe();
    }
  }
}

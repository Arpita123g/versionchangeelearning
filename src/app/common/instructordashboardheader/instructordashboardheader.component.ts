import { Component, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructordashboardheader',
  templateUrl: './instructordashboardheader.component.html',
  styleUrls: ['./instructordashboardheader.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class InstructordashboardheaderComponent implements OnInit {
  isPressed = signal<boolean>(false);
  currentTime = signal<string>('');
  private timeInterval: any;
  languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' }
  ];
  selectedLanguage = signal<string>('en');

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateTime();
    this.timeInterval = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private updateTime(): void {
    const now = new Date();
    this.currentTime.set(now.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }));
  }

  onButtonPress(): void {
    this.isPressed.update(value => !value);
  }

  changeLanguage(langCode: string): void {
    this.selectedLanguage.set(langCode);
    // Implement language change logic here
  }

  get selectedLanguageName(): string {
    const lang = this.languages.find(l => l.code === this.selectedLanguage());
    return lang?.name || 'Change language';
  }

  logout(): void {
    // Implement logout logic here
    this.router.navigate(['/auth/login']);
  }
}

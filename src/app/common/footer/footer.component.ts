import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
  ]
})
export class FooterComponent implements OnInit {
  currentYear = signal(new Date().getFullYear());
  companyName = signal('Your Company Name');
  socialLinks = signal([
    { icon: 'facebook', url: 'https://facebook.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'linkedin', url: 'https://linkedin.com' },
    { icon: 'instagram', url: 'https://instagram.com' }
  ]);

  constructor() { }

  ngOnInit(): void {
  }
}

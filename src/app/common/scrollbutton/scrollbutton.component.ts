import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-scrollbutton',
  templateUrl: './scrollbutton.component.html',
  styleUrls: ['./scrollbutton.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ScrollbuttonComponent {
  private readonly document = inject(DOCUMENT);
  readonly windowScrolled = signal<boolean>(true);

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    if (window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100) {
      this.windowScrolled.set(true);
    } 
    else if (this.windowScrolled() && window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10) { 
      this.windowScrolled.set(false);
    }
  } 
  
  scrollToTop(): void {
    const smoothscroll = () => {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    };

    smoothscroll();
  }
}

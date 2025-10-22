import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        FooterComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current year', () => {
    const currentYear = new Date().getFullYear();
    const footerElement = fixture.nativeElement;
    const yearText = footerElement.textContent;
    expect(yearText).toContain(currentYear.toString());
  });

  it('should display company name', () => {
    const footerElement = fixture.nativeElement;
    const companyName = component.companyName();
    expect(footerElement.textContent).toContain(companyName);
  });

  it('should have social links', () => {
    const socialLinks = component.socialLinks();
    expect(socialLinks.length).toBeGreaterThan(0);
    
    const footerElement = fixture.nativeElement;
    socialLinks.forEach(link => {
      const linkElement = footerElement.querySelector(`[aria-label="Follow us on ${link.icon}"]`);
      expect(linkElement).toBeTruthy();
      expect(linkElement.getAttribute('href')).toBe(link.url);
    });
  });

  it('should have quick links', () => {
    const footerElement = fixture.nativeElement;
    const quickLinks = ['About', 'Contact', 'Privacy Policy', 'Terms of Service'];
    
    quickLinks.forEach(link => {
      const linkElement = footerElement.querySelector(`a[href="/${link.toLowerCase().replace(' ', '')}"]`);
      expect(linkElement).toBeTruthy();
      expect(linkElement.textContent.trim()).toBe(link);
    });
  });
});

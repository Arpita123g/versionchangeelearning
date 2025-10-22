import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollbuttonComponent } from './scrollbutton.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

describe('ScrollbuttonComponent', () => {
  let component: ScrollbuttonComponent;
  let fixture: ComponentFixture<ScrollbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ScrollbuttonComponent,
        NoopAnimationsModule,
        MatIconModule,
        MatButtonModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update windowScrolled signal on scroll', () => {
    // Mock window scroll
    Object.defineProperty(window, 'scrollY', { value: 200 });
    component.onWindowScroll();
    expect(component.windowScrolled()).toBeTrue();

    // Mock window scroll back to top
    Object.defineProperty(window, 'scrollY', { value: 0 });
    component.onWindowScroll();
    expect(component.windowScrolled()).toBeFalse();
  });

  it('should call scrollToTop when button is clicked', () => {
    spyOn(window, 'requestAnimationFrame');
    component.scrollToTop();
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });
});

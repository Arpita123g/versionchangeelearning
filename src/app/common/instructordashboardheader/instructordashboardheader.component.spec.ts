import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructordashboardheaderComponent } from './instructordashboardheader.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

describe('InstructordashboardheaderComponent', () => {
  let component: InstructordashboardheaderComponent;
  let fixture: ComponentFixture<InstructordashboardheaderComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        DatePipe,
        InstructordashboardheaderComponent
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructordashboardheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isPressed()).toBeFalse();
    expect(component.currentTime()).toBeTruthy();
    expect(component.selectedLanguage()).toBe('en');
  });

  it('should toggle isPressed when onButtonPress is called', () => {
    expect(component.isPressed()).toBeFalse();
    component.onButtonPress();
    expect(component.isPressed()).toBeTrue();
    component.onButtonPress();
    expect(component.isPressed()).toBeFalse();
  });

  it('should update time every second', (done) => {
    const initialTime = component.currentTime();
    setTimeout(() => {
      expect(component.currentTime()).not.toEqual(initialTime);
      done();
    }, 1100);
  });

  it('should change language when changeLanguage is called', () => {
    component.changeLanguage('es');
    expect(component.selectedLanguage()).toBe('es');
  });

  it('should navigate to login page when logout is called', () => {
    component.logout();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('should clean up interval on destroy', () => {
    const clearIntervalSpy = spyOn(window, 'clearInterval');
    component.ngOnDestroy();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});

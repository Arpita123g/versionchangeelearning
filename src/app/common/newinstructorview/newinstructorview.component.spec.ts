import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewinstructorviewComponent } from './newinstructorview.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalService } from 'src/app/service/global.service';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

describe('NewinstructorviewComponent', () => {
  let component: NewinstructorviewComponent;
  let fixture: ComponentFixture<NewinstructorviewComponent>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let snackbarServiceSpy: jasmine.SpyObj<SnackbaralertService>;

  beforeEach(async () => {
    const globalSpy = jasmine.createSpyObj('GlobalService', [], {
      instructoractivetab: new BehaviorSubject('microsim')
    });
    const snackbarSpy = jasmine.createSpyObj('SnackbaralertService', ['openSnackBar']);

    await TestBed.configureTestingModule({
      imports: [
        NewinstructorviewComponent,
        NoopAnimationsModule,
        MatIconModule,
        CommonModule
      ],
      providers: [
        { provide: GlobalService, useValue: globalSpy },
        { provide: SnackbaralertService, useValue: snackbarSpy }
      ]
    }).compileComponents();

    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
    snackbarServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinstructorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.activetab()).toBe('microsim');
    expect(component.microsimsubtab()).toBe('ongoing');
    expect(component.voicebasedsubtab()).toBe('ongoing');
  });

  it('should update tab values when methods are called', () => {
    component.tabclick('voicebased');
    expect(component.activetab()).toBe('voicebased');
    expect(globalServiceSpy.instructoractivetab.next).toHaveBeenCalledWith('voicebased');

    component.microsimtabclick('completed');
    expect(component.microsimsubtab()).toBe('completed');

    component.voicebasedtabclick('completed');
    expect(component.voicebasedsubtab()).toBe('completed');
  });

  it('should update global service when tab is changed', () => {
    component.tabclick('microsim');
    expect(globalServiceSpy.instructoractivetab.next).toHaveBeenCalledWith('microsim');
  });

  it('should handle errors in tab changes', () => {
    spyOn(console, 'error');
    const error = new Error('Test error');
    Object.defineProperty(globalServiceSpy.instructoractivetab, 'next', {
      value: () => { throw error; }
    });

    component.tabclick('microsim');
    
    expect(snackbarServiceSpy.openSnackBar).toHaveBeenCalledWith('Error changing tab', 'error');
    expect(console.error).toHaveBeenCalledWith('Error in tabclick:', error);
  });

  it('should handle errors in microsim tab changes', () => {
    spyOn(console, 'error');
    const error = new Error('Test error');
    Object.defineProperty(component.microsimsubtab, 'set', {
      value: () => { throw error; }
    });

    component.microsimtabclick('completed');
    
    expect(snackbarServiceSpy.openSnackBar).toHaveBeenCalledWith('Error changing microsim tab', 'error');
    expect(console.error).toHaveBeenCalledWith('Error in microsimtabclick:', error);
  });

  it('should handle errors in voicebased tab changes', () => {
    spyOn(console, 'error');
    const error = new Error('Test error');
    Object.defineProperty(component.voicebasedsubtab, 'set', {
      value: () => { throw error; }
    });

    component.voicebasedtabclick('completed');
    
    expect(snackbarServiceSpy.openSnackBar).toHaveBeenCalledWith('Error changing voicebased tab', 'error');
    expect(console.error).toHaveBeenCalledWith('Error in voicebasedtabclick:', error);
  });
});

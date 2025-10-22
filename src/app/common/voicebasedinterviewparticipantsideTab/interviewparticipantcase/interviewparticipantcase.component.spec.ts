import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterviewparticipantcaseComponent } from './interviewparticipantcase.component';
import { GlobalService } from '../../../../service/global.service';
import { BehaviorSubject } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

describe('InterviewparticipantcaseComponent', () => {
  let component: InterviewparticipantcaseComponent;
  let fixture: ComponentFixture<InterviewparticipantcaseComponent>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('GlobalService', ['getCaseData']);
    spy.getCaseData = new BehaviorSubject<any>(null);

    await TestBed.configureTestingModule({
      imports: [
        InterviewparticipantcaseComponent,
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule
      ],
      providers: [
        { provide: GlobalService, useValue: spy }
      ]
    }).compileComponents();

    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewparticipantcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isLoading()).toBeFalse();
    expect(component.caseData()).toBeNull();
  });

  it('should load case data on init', () => {
    const mockCaseData = { id: 1, title: 'Test Case' };
    (globalServiceSpy.getCaseData as BehaviorSubject<any>).next(mockCaseData);
    expect(component.caseData()).toEqual(mockCaseData);
  });
});

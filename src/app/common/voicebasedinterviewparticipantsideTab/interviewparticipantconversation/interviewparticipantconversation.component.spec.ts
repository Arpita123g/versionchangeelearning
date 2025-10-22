import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterviewparticipantconversationComponent } from './interviewparticipantconversation.component';
import { GlobalService } from '../../../../service/global.service';
import { ApiService } from '../../../../service/backendgameapi/api.service';
import { BehaviorSubject } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('InterviewparticipantconversationComponent', () => {
  let component: InterviewparticipantconversationComponent;
  let fixture: ComponentFixture<InterviewparticipantconversationComponent>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const globalSpy = jasmine.createSpyObj('GlobalService', ['getCurrentRound']);
    const apiSpy = jasmine.createSpyObj('ApiService', ['fetchConversationData']);
    apiSpy.fetchConversationData.and.returnValue(new BehaviorSubject([]));

    await TestBed.configureTestingModule({
      imports: [
        InterviewparticipantconversationComponent,
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      providers: [
        { provide: GlobalService, useValue: globalSpy },
        { provide: ApiService, useValue: apiSpy }
      ]
    }).compileComponents();

    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewparticipantconversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isLoading()).toBeFalse();
    expect(component.conversationData()).toEqual([]);
    expect(component.currentRound()).toBe(1);
  });

  it('should load conversation data on init', () => {
    const mockData = [{ id: 1, message: 'Test message' }];
    (apiServiceSpy.fetchConversationData as jasmine.Spy).and.returnValue(new BehaviorSubject(mockData));
    component.ngOnInit();
    expect(component.conversationData()).toEqual(mockData);
  });

  it('should increment round number when nextRound is called', () => {
    component.nextRound();
    expect(component.currentRound()).toBe(2);
  });

  it('should not decrement round number below 1', () => {
    component.previousRound();
    expect(component.currentRound()).toBe(1);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterviewparticipantreportComponent } from './interviewparticipantreport.component';
import { GlobalService } from 'src/app/service/global.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { BehaviorSubject } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';

describe('InterviewparticipantreportComponent', () => {
  let component: InterviewparticipantreportComponent;
  let fixture: ComponentFixture<InterviewparticipantreportComponent>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let alertServiceSpy: jasmine.SpyObj<SnackbaralertService>;

  beforeEach(async () => {
    const globalSpy = jasmine.createSpyObj('GlobalService', ['coursecode']);
    globalSpy.coursecode = new BehaviorSubject('TEST101');
    const apiSpy = jasmine.createSpyObj('ApiService', ['getVoiceReport', 'downloadVoiceReport', 'getStudentDetails']);
    const alertSpy = jasmine.createSpyObj('SnackbaralertService', ['error', 'success']);

    await TestBed.configureTestingModule({
      imports: [
        InterviewparticipantreportComponent,
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        FormsModule
      ],
      providers: [
        { provide: GlobalService, useValue: globalSpy },
        { provide: ApiService, useValue: apiSpy },
        { provide: SnackbaralertService, useValue: alertSpy }
      ]
    }).compileComponents();

    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    alertServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewparticipantreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isLoading()).toBeFalse();
    expect(component.displayedColumns()).toEqual(['name', 'email', 'score', 'feedback', 'actions']);
    expect(component.dataSource()).toEqual([]);
    expect(component.selectedRound()).toBe(1);
    expect(component.rounds()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should load report data on init', () => {
    const mockResponse = { status: 'Success', data: [{ name: 'Test User', email: 'test@example.com' }] };
    (apiServiceSpy.getVoiceReport as jasmine.Spy).and.returnValue(new BehaviorSubject(mockResponse));
    component.ngOnInit();
    expect(apiServiceSpy.getVoiceReport).toHaveBeenCalledWith('TEST101', 1);
    expect(component.dataSource()).toEqual(mockResponse.data);
  });

  it('should handle search', () => {
    const mockResponse = { status: 'Success', data: [{ name: 'Test User', email: 'test@example.com' }] };
    (apiServiceSpy.getStudentDetails as jasmine.Spy).and.returnValue(new BehaviorSubject(mockResponse));
    component.searchTerm.set('test@example.com');
    component.onSearch();
    expect(apiServiceSpy.getStudentDetails).toHaveBeenCalledWith('email', 'test@example.com');
    expect(component.dataSource()).toEqual(mockResponse.data);
  });

  it('should handle download report', () => {
    const mockResponse = { status: 'Success', data: new Blob(['test'], { type: 'application/pdf' }) };
    (apiServiceSpy.downloadVoiceReport as jasmine.Spy).and.returnValue(new BehaviorSubject(mockResponse));
    component.downloadReport();
    expect(apiServiceSpy.downloadVoiceReport).toHaveBeenCalledWith('TEST101', 1);
  });
});

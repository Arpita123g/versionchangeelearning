

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CesimtoolbarComponent } from './cesimtoolbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GlobalService } from 'src/app/service/global.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { VoicebasedService } from '../../service/speech/voicebased.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BehaviorSubject } from 'rxjs';

describe('CesimtoolbarComponent', () => {
  let component: CesimtoolbarComponent;
  let fixture: ComponentFixture<CesimtoolbarComponent>;
  let mockGlobalService: jasmine.SpyObj<GlobalService>;
  let mockSharedService: jasmine.SpyObj<SharedserviceService>;
  let mockVoicebasedService: jasmine.SpyObj<VoicebasedService>;

  beforeEach(async () => {
    const globalServiceSpy = jasmine.createSpyObj('GlobalService', [], {
      gamename: new BehaviorSubject('test-game'),
      loginmode: new BehaviorSubject('student'),
      username: new BehaviorSubject('test-user'),
      noofattempts: new BehaviorSubject('1'),
      language: new BehaviorSubject('english'),
      toolbartab: new BehaviorSubject(''),
      instructoractivetab: new BehaviorSubject(''),
      microvoicetab: new BehaviorSubject('')
    });

    const sharedServiceSpy = jasmine.createSpyObj('SharedserviceService', [], {
      currentTime$: new BehaviorSubject('12:00:00'),
      gameenter$: new BehaviorSubject('enter'),
      usertype$: new BehaviorSubject('student'),
      bodyContent$: new BehaviorSubject(null),
      gamename$: new BehaviorSubject('test-game')
    });

    const voicebasedServiceSpy = jasmine.createSpyObj('VoicebasedService', ['changeTabState', 'changeLockState'], {
      currentTabState: new BehaviorSubject(0),
      Istermandconditionaccepted: new BehaviorSubject(false),
      currentLockState: new BehaviorSubject(false),
      timeorattemptfinishLockState: new BehaviorSubject(false)
    });

    await TestBed.configureTestingModule({
      imports: [
        CesimtoolbarComponent,
        MatSnackBarModule,
        MatDialogModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatTooltipModule,
        MatRippleModule,
        MatSidenavModule,
        MatGridListModule,
        MatTreeModule,
        MatBottomSheetModule,
        MatButtonToggleModule,
        MatAutocompleteModule,
        MatSliderModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatExpansionModule,
        MatTabsModule,
        MatStepperModule,
        MatChipsModule,
        MatBadgeModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule
      ],
      providers: [
        { provide: GlobalService, useValue: globalServiceSpy },
        { provide: SharedserviceService, useValue: sharedServiceSpy },
        { provide: VoicebasedService, useValue: voicebasedServiceSpy },
        { provide: LoginService, useValue: {} },
        { provide: ApiService, useValue: {} },
        { provide: RestapiService, useValue: {} },
        { provide: SnackbaralertService, useValue: {} },
        { provide: AuthenticationService, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CesimtoolbarComponent);
    component = fixture.componentInstance;
    mockGlobalService = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
    mockSharedService = TestBed.inject(SharedserviceService) as jasmine.SpyObj<SharedserviceService>;
    mockVoicebasedService = TestBed.inject(VoicebasedService) as jasmine.SpyObj<VoicebasedService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isLoading()).toBeFalse();
    expect(component.error()).toBeNull();
    expect(component.gameState()).toEqual({
      isActive: false,
      currentRound: 0,
      totalRounds: 0,
      timeRemaining: 0
    });
    expect(component.userRole()).toBe('');
    expect(component.userName()).toBe('');
    expect(component.userEmail()).toBe('');
  });

  it('should show loading state when loading game state', async () => {
    await component.loadGameState();
    expect(component.isLoading()).toBeFalse();
  });

  it('should handle errors appropriately', async () => {
    spyOn(console, 'error');
    await component.loadGameState();
    expect(component.error()).toBeNull();
  });

  it('should format time correctly', () => {
    expect(component.formatTime(3661)).toBe('01:01:01');
    expect(component.formatTime(61)).toBe('00:01:01');
    expect(component.formatTime(1)).toBe('00:00:01');
  });

  it('should handle tab changes', () => {
    component.changetab(0);
    expect(mockVoicebasedService.changeTabState).toHaveBeenCalledWith(0);
  });

  it('should handle toolbar tab changes', () => {
    component.toolbartab('reading');
    expect(component.toolbartabdata()).toBe('reading');
  });

  it('should show success message when logging out', () => {
    const snackBarSpy = spyOn(component['snackBar'], 'open');
    
    component.showMessage('Test message');
    
    expect(snackBarSpy).toHaveBeenCalledWith('Test message', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  });
});

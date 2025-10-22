import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoicebasedparticipantinterviewtabheaderComponent } from './voicebasedparticipantinterviewtabheader.component';
import { GlobalService } from 'src/app/service/global.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { BehaviorSubject } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

describe('VoicebasedparticipantinterviewtabheaderComponent', () => {
  let component: VoicebasedparticipantinterviewtabheaderComponent;
  let fixture: ComponentFixture<VoicebasedparticipantinterviewtabheaderComponent>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let alertServiceSpy: jasmine.SpyObj<SnackbaralertService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const globalSpy = jasmine.createSpyObj('GlobalService', ['usermode', 'useremail', 'islogin']);
    globalSpy.usermode = new BehaviorSubject('student');
    globalSpy.useremail = new BehaviorSubject('test@example.com');
    globalSpy.islogin = new BehaviorSubject(true);

    const loginSpy = jasmine.createSpyObj('LoginService', ['checkadminlogin']);
    const alertSpy = jasmine.createSpyObj('SnackbaralertService', ['error']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        VoicebasedparticipantinterviewtabheaderComponent,
        NoopAnimationsModule,
        MatTabsModule,
        MatButtonModule,
        MatIconModule
      ],
      providers: [
        { provide: GlobalService, useValue: globalSpy },
        { provide: LoginService, useValue: loginSpy },
        { provide: SnackbaralertService, useValue: alertSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
    loginServiceSpy = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    alertServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicebasedparticipantinterviewtabheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isLoading()).toBeFalse();
    expect(component.userMode()).toBe('student');
    expect(component.userName()).toBe('test@example.com');
  });

  it('should navigate to specified route', () => {
    component.navigateTo('/interview');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/interview']);
  });

  it('should handle logout successfully', () => {
    (loginServiceSpy.checkadminlogin as jasmine.Spy).and.returnValue(new BehaviorSubject({ status: 'Success' }));
    component.logout();
    expect(globalServiceSpy.islogin.next).toHaveBeenCalledWith(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should handle logout failure', () => {
    (loginServiceSpy.checkadminlogin as jasmine.Spy).and.returnValue(new BehaviorSubject({ status: 'Error', message: 'Logout failed' }));
    component.logout();
    expect(alertServiceSpy.error).toHaveBeenCalledWith('Logout failed');
    expect(component.isLoading()).toBeFalse();
  });
});

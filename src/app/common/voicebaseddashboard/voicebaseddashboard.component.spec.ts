import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoicebaseddashboardComponent } from './voicebaseddashboard.component';
import { Router } from '@angular/router';
import { GlobalService } from '../../service/global.service';
import { LoginService } from '../../service/auth/login.service';
import { SnackbaralertService } from '../../service/snackbaralert.service';
import { BehaviorSubject } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

describe('VoicebaseddashboardComponent', () => {
  let component: VoicebaseddashboardComponent;
  let fixture: ComponentFixture<VoicebaseddashboardComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let alertServiceSpy: jasmine.SpyObj<SnackbaralertService>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const globalSpy = jasmine.createSpyObj('GlobalService', ['usermode', 'useremail']);
    globalSpy.usermode = new BehaviorSubject<string>('');
    globalSpy.useremail = new BehaviorSubject<string>('');
    globalSpy.islogin = true;
    const loginSpy = jasmine.createSpyObj('LoginService', ['checkadminlogin']);
    const alertSpy = jasmine.createSpyObj('SnackbaralertService', ['error']);

    await TestBed.configureTestingModule({
      imports: [
        VoicebaseddashboardComponent,
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: GlobalService, useValue: globalSpy },
        { provide: LoginService, useValue: loginSpy },
        { provide: SnackbaralertService, useValue: alertSpy }
      ]
    }).compileComponents();

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
    loginServiceSpy = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    alertServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicebaseddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isLoading()).toBeFalse();
    expect(component.userMode()).toBe('');
    expect(component.userName()).toBe('');
  });

  it('should update userMode when GlobalService emits new value', () => {
    const testMode = 'student';
    (globalServiceSpy.usermode as BehaviorSubject<string>).next(testMode);
    expect(component.userMode()).toBe(testMode);
  });

  it('should update userName when GlobalService emits new value', () => {
    const testEmail = 'test@example.com';
    (globalServiceSpy.useremail as BehaviorSubject<string>).next(testEmail);
    expect(component.userName()).toBe(testEmail);
  });

  it('should navigate to specified route', () => {
    const testRoute = '/test-route';
    component.navigateTo(testRoute);
    expect(routerSpy.navigate).toHaveBeenCalledWith([testRoute]);
  });

  it('should handle successful logout', () => {
    loginServiceSpy.checkadminlogin.and.returnValue(new BehaviorSubject({}));
    component.logout();
    expect(globalServiceSpy.islogin).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should handle failed logout', () => {
    const errorMessage = 'Logout failed';
    loginServiceSpy.checkadminlogin.and.returnValue(new BehaviorSubject({ error: errorMessage }));
    component.logout();
    expect(alertServiceSpy.error).toHaveBeenCalledWith(errorMessage);
    expect(component.isLoading()).toBeFalse();
  });
});

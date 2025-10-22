import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { InstructorchatboxComponent } from './instructorchatbox.component';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

describe('InstructorchatboxComponent', () => {
  let component: InstructorchatboxComponent;
  let fixture: ComponentFixture<InstructorchatboxComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  let snackbarServiceSpy: jasmine.SpyObj<SnackbaralertService>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    loginServiceSpy = jasmine.createSpyObj('LoginService', ['']);
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['']);
    globalServiceSpy = jasmine.createSpyObj('GlobalService', ['']);
    restapiServiceSpy = jasmine.createSpyObj('RestapiService', ['']);
    snackbarServiceSpy = jasmine.createSpyObj('SnackbaralertService', ['']);

    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatTabsModule,
        MatIconModule,
        InstructorchatboxComponent,
        ChatboxComponent
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: GlobalService, useValue: globalServiceSpy },
        { provide: RestapiService, useValue: restapiServiceSpy },
        { provide: SnackbaralertService, useValue: snackbarServiceSpy },
        DatePipe
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorchatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with individual tab active', () => {
    expect(component.activeTab()).toBe('individual');
  });

  it('should switch to course tab when clicked', () => {
    component.tabclick('course');
    expect(component.activeTab()).toBe('course');
  });

  it('should render both tabs', () => {
    const compiled = fixture.nativeElement;
    const tabs = compiled.querySelectorAll('mat-tab');
    expect(tabs.length).toBe(2);
  });

  it('should render chatbox component with correct chattype', () => {
    const compiled = fixture.nativeElement;
    const chatbox = compiled.querySelector('app-chatbox');
    expect(chatbox).toBeTruthy();
    expect(chatbox.getAttribute('chattype')).toBe(component.chattypeinstructor);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    globalServiceSpy = jasmine.createSpyObj('GlobalService', [], {
      usermode: 'instructor'
    });
    loginServiceSpy = jasmine.createSpyObj('LoginService', ['checkadminlogin']);

    await TestBed.configureTestingModule({
      imports: [
        SidenavComponent,
        NoopAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: GlobalService, useValue: globalServiceSpy },
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: ApiService, useValue: {} },
        { provide: RestapiService, useValue: {} },
        { provide: SnackbaralertService, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidebar expansion', () => {
    expect(component.isExpanded()).toBeFalse();
    component.toggleSidebar();
    expect(component.isExpanded()).toBeTrue();
    component.toggleSidebar();
    expect(component.isExpanded()).toBeFalse();
  });

  it('should navigate to specified route', () => {
    component.navigateTo('/test-route');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/test-route']);
  });

  it('should call login service for logout', () => {
    component.logout();
    expect(loginServiceSpy.checkadminlogin).toHaveBeenCalled();
  });
});

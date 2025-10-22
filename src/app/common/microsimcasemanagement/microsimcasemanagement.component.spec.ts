import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicrosimcasemanagementComponent } from './microsimcasemanagement.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatDialog } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject } from 'rxjs';

describe('MicrosimcasemanagementComponent', () => {
  let component: MicrosimcasemanagementComponent;
  let fixture: ComponentFixture<MicrosimcasemanagementComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  let snackbarServiceSpy: jasmine.SpyObj<SnackbaralertService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    loginServiceSpy = jasmine.createSpyObj('LoginService', ['updatecourseattempt']);
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['fetchassigncaselist', 'copyCourseData', 'courseSetPrimary']);
    globalServiceSpy = jasmine.createSpyObj('GlobalService', [], {
      instructorcarddetails: new BehaviorSubject(null),
      casemanagementcoursedetails: new BehaviorSubject(null)
    });
    restapiServiceSpy = jasmine.createSpyObj('RestapiService', ['getinstructortablelist']);
    snackbarServiceSpy = jasmine.createSpyObj('SnackbaralertService', ['error']);
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MicrosimcasemanagementComponent
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: GlobalService, useValue: globalServiceSpy },
        { provide: RestapiService, useValue: restapiServiceSpy },
        { provide: SnackbaralertService, useValue: snackbarServiceSpy },
        { provide: MatDialog, useValue: dialogSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosimcasemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.cardlistdata()).toEqual([]);
    expect(component.instructorcarddetails()).toBeNull();
    expect(component.checkloading()).toBeFalse();
  });

  it('should load table data on init', () => {
    const mockResponse = {
      status: 'Success',
      resultList: [
        {
          courseDetails: {
            simulation: 'Business Basics',
            instructormailid: 'test@example.com',
            coursename: 'Test Course',
            coursecode: 'TEST001',
            coursedetailsid: '123',
            primarycoursedetailsid: '456'
          },
          coursename: 'Test Course',
          primarycoursedetailsid: '456'
        }
      ]
    };

    apiServiceSpy.fetchassigncaselist.and.returnValue(new BehaviorSubject(mockResponse));
    component.ngOnInit();
    expect(apiServiceSpy.fetchassigncaselist).toHaveBeenCalled();
  });

  it('should navigate to correct route when clicking case management', () => {
    const mockCard = {
      courseDetails: {
        simulation: 'Business Basics',
        instructormailid: 'test@example.com',
        coursename: 'Test Course',
        coursecode: 'TEST001',
        coursedetailsid: '123',
        primarycoursedetailsid: '456'
      },
      coursename: 'Test Course',
      primarycoursedetailsid: '456'
    };

    component.gotTocasemanagement(mockCard);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['auth/component/businesscasemanagement']);
  });

  it('should open primary course select dialog', () => {
    const mockCard = {
      courseDetails: {
        simulation: 'Business Basics',
        instructormailid: 'test@example.com',
        coursename: 'Test Course',
        coursecode: 'TEST001',
        coursedetailsid: '123',
        primarycoursedetailsid: '456'
      },
      coursename: 'Test Course',
      primarycoursedetailsid: '456'
    };

    component.primarygameselect(mockCard);
    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('should open copy game dialog', () => {
    const mockCard = {
      courseDetails: {
        simulation: 'Business Basics',
        instructormailid: 'test@example.com',
        coursename: 'Test Course',
        coursecode: 'TEST001',
        coursedetailsid: '123',
        primarycoursedetailsid: '456'
      },
      coursename: 'Test Course',
      primarycoursedetailsid: '456'
    };

    component.CopyGame1(mockCard);
    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('should clean up subscriptions on destroy', () => {
    const unsubscribeSpy = spyOn(component['instructorcarddetailssub'], 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});

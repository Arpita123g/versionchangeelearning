import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructordashboardComponent } from './instructordashboard.component';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { GlobalService } from 'src/app/service/global.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('InstructordashboardComponent', () => {
  let component: InstructordashboardComponent;
  let fixture: ComponentFixture<InstructordashboardComponent>;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  let alertServiceSpy: jasmine.SpyObj<SnackbaralertService>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockUserEmail = new BehaviorSubject<string>('test@example.com');
  const mockUserPassword = new BehaviorSubject<string>('password');
  const mockInstructorDetails = new BehaviorSubject<any[]>([]);

  beforeEach(async () => {
    const spies = {
      restapiService: jasmine.createSpyObj('RestapiService', ['getinstructortablelist']),
      alertService: jasmine.createSpyObj('SnackbaralertService', ['error']),
      globalService: jasmine.createSpyObj('GlobalService', [], {
        useremail: mockUserEmail,
        userpassword: mockUserPassword,
        instructorelementdetails: mockInstructorDetails
      }),
      dialog: jasmine.createSpyObj('MatDialog', ['open']),
      router: jasmine.createSpyObj('Router', ['navigate'])
    };

    await TestBed.configureTestingModule({
      imports: [
        InstructordashboardComponent,
        NoopAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule
      ],
      providers: [
        { provide: RestapiService, useValue: spies.restapiService },
        { provide: SnackbaralertService, useValue: spies.alertService },
        { provide: GlobalService, useValue: spies.globalService },
        { provide: MatDialog, useValue: spies.dialog },
        { provide: Router, useValue: spies.router }
      ]
    }).compileComponents();

    restapiServiceSpy = TestBed.inject(RestapiService) as jasmine.SpyObj<RestapiService>;
    alertServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch table data on init', () => {
    const mockData = {
      status: 'Success',
      resultList: [
        {
          courseDetails: {
            coursename: 'Test Course',
            coursecode: 'TEST001',
            simulation: 'Test Simulation',
            asprimary: 'yes'
          },
          noofstudentregistered: 10,
          totallicenseleft: 5,
          studentcourseattempts: 2,
          archiveflag: 'yes'
        }
      ]
    };

    restapiServiceSpy.getinstructortablelist.and.returnValue(of(mockData));

    component.ngOnInit();

    expect(restapiServiceSpy.getinstructortablelist).toHaveBeenCalled();
    expect(component.cardlist()).toEqual(mockData.resultList);
  });

  it('should handle error when fetching table data', () => {
    restapiServiceSpy.getinstructortablelist.and.returnValue(throwError(() => new Error('API Error')));

    component.ngOnInit();

    expect(alertServiceSpy.error).toHaveBeenCalledWith('Something went wrong');
  });

  it('should navigate to archive page', () => {
    component.goToarchieve();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/auth/component/instructorArchivepage']);
  });

  it('should open profile dialog', () => {
    dialogSpy.open.and.returnValue({
      afterClosed: () => of(null)
    } as any);

    component.goToprofile();

    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('should navigate to instructor chart', () => {
    const courseCode = 'TEST001';
    component.instructorchart(courseCode);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['auth/component/instructorchartdashboard']);
  });
});

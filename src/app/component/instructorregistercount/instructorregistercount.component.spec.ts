import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructorregistercountComponent } from './instructorregistercount.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RestapiService } from 'src/app/service/restapi.service';
import { GlobalService } from 'src/app/service/global.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { of } from 'rxjs';

describe('InstructorregistercountComponent', () => {
  let component: InstructorregistercountComponent;
  let fixture: ComponentFixture<InstructorregistercountComponent>;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;
  let snackbarServiceSpy: jasmine.SpyObj<SnackbaralertService>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;

  beforeEach(async () => {
    const restapiSpy = jasmine.createSpyObj('RestapiService', ['getStudentDetails']);
    const globalSpy = jasmine.createSpyObj('GlobalService', [], {
      useremail: of('test@example.com'),
      coursecode: of('TEST101'),
      currenttoken: of('test-token'),
      studentspreadsheetid: of('test-sheet-id')
    });
    const snackbarSpy = jasmine.createSpyObj('SnackbaralertService', ['error']);
    const loginSpy = jasmine.createSpyObj('LoginService', []);

    await TestBed.configureTestingModule({
      imports: [
        InstructorregistercountComponent,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatStepperModule,
        FormsModule,
        MatRadioModule
      ],
      providers: [
        { provide: RestapiService, useValue: restapiSpy },
        { provide: GlobalService, useValue: globalSpy },
        { provide: SnackbaralertService, useValue: snackbarSpy },
        { provide: LoginService, useValue: loginSpy }
      ]
    }).compileComponents();

    restapiServiceSpy = TestBed.inject(RestapiService) as jasmine.SpyObj<RestapiService>;
    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
    snackbarServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
    loginServiceSpy = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorregistercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.useremail()).toBe('test@example.com');
    expect(component.coursecode()).toBe('TEST101');
    expect(component.currenttoken()).toBe('test-token');
    expect(component.studentspreadsheetid()).toBe('test-sheet-id');
    expect(component.searchFlag()).toBe('all');
    expect(component.checkloading()).toBe(true);
  });

  it('should call getStudentDetails on init', () => {
    const mockResponse = {
      status: 'Success',
      resultList: []
    };
    restapiServiceSpy.getStudentDetails.and.returnValue(of(mockResponse));

    component.ngOnInit();
    fixture.detectChanges();

    expect(restapiServiceSpy.getStudentDetails).toHaveBeenCalledWith({
      email: 'test@example.com',
      caller: 'webinstructor',
      usermode: 'instructor',
      searchtype: 'coursename',
      searchcontent: 'TEST101'
    });
  });

  it('should handle error in getStudentDetails', () => {
    restapiServiceSpy.getStudentDetails.and.returnValue(of({
      status: 'Error',
      message: 'Test error'
    }));

    component.getTableData('coursename');
    fixture.detectChanges();

    expect(snackbarServiceSpy.error).toHaveBeenCalledWith('Test error');
    expect(component.checkloading()).toBe(false);
  });
});

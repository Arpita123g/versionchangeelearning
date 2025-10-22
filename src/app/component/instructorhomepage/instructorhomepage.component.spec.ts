import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { InstructorhomepageComponent } from './instructorhomepage.component';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { GlobalService } from 'src/app/service/global.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { of } from 'rxjs';

describe('InstructorhomepageComponent', () => {
  let component: InstructorhomepageComponent;
  let fixture: ComponentFixture<InstructorhomepageComponent>;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  let snackbarServiceSpy: jasmine.SpyObj<SnackbaralertService>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;

  beforeEach(async () => {
    const restapiSpy = jasmine.createSpyObj('RestapiService', ['getinstructortablelist']);
    const snackbarSpy = jasmine.createSpyObj('SnackbaralertService', ['error', 'success']);
    const globalSpy = jasmine.createSpyObj('GlobalService', [], {
      useremail: of('test@example.com'),
      userpassword: of('password123')
    });

    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterTestingModule,
        NgbTimepickerModule,
        InstructorhomepageComponent
      ],
      providers: [
        { provide: RestapiService, useValue: restapiSpy },
        { provide: SnackbaralertService, useValue: snackbarSpy },
        { provide: GlobalService, useValue: globalSpy },
        LoginService
      ]
    }).compileComponents();

    restapiServiceSpy = TestBed.inject(RestapiService) as jasmine.SpyObj<RestapiService>;
    snackbarServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.checkloading()).toBeFalse();
    expect(component.useremail()).toBe('test@example.com');
    expect(component.password()).toBe('password123');
    expect(component.ELEMENT_DATA()).toEqual([]);
  });

  it('should load table data on init', () => {
    const mockData = {
      status: 'Success',
      resultList: [
        {
          courseDetails: {
            coursename: 'Test Course',
            coursecode: 'TEST101'
          },
          noofstudentregistered: 10,
          totallicenseleft: 5,
          studentcourseattempts: 3,
          archiveflag: 'N',
          instructorpanelid: '1',
          deletedflag: 'N'
        }
      ]
    };

    restapiServiceSpy.getinstructortablelist.and.returnValue(of(mockData));
    component.getTableData();
    expect(restapiServiceSpy.getinstructortablelist).toHaveBeenCalled();
    expect(component.ELEMENT_DATA().length).toBe(1);
  });

  it('should handle error when loading table data', () => {
    restapiServiceSpy.getinstructortablelist.and.returnValue(of({ status: 'Error', message: 'Test error' }));
    component.getTableData();
    expect(snackbarServiceSpy.error).toHaveBeenCalledWith('Test error');
  });

  it('should modify string length correctly', () => {
    expect(component.modifyStr('Short')).toBe('Short');
    expect(component.modifyStr('This is a very long string that needs to be truncated')).toBe('This is a very...');
  });
});

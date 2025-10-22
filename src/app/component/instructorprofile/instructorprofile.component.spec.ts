import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstructorprofileComponent } from './instructorprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { GlobalService } from 'src/app/service/global.service';
import { of } from 'rxjs';

describe('InstructorprofileComponent', () => {
  let component: InstructorprofileComponent;
  let fixture: ComponentFixture<InstructorprofileComponent>;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  let snackbarServiceSpy: jasmine.SpyObj<SnackbaralertService>;
  let globalServiceSpy: jasmine.SpyObj<GlobalService>;

  beforeEach(async () => {
    const restapiSpy = jasmine.createSpyObj('RestapiService', ['searchmailid']);
    const snackbarSpy = jasmine.createSpyObj('SnackbaralertService', ['error']);
    const globalSpy = jasmine.createSpyObj('GlobalService', [], {
      useremail: of('test@example.com'),
      userpassword: of('password123')
    });

    await TestBed.configureTestingModule({
      imports: [
        InstructorprofileComponent,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: RestapiService, useValue: restapiSpy },
        { provide: SnackbaralertService, useValue: snackbarSpy },
        { provide: GlobalService, useValue: globalSpy }
      ]
    }).compileComponents();

    restapiServiceSpy = TestBed.inject(RestapiService) as jasmine.SpyObj<RestapiService>;
    snackbarServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
    globalServiceSpy = TestBed.inject(GlobalService) as jasmine.SpyObj<GlobalService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.instructorprofilegroup).toBeDefined();
  });

  it('should handle saveinstructorprofile with valid form', () => {
    const mockResponse = {
      status: 'Success',
      resultList: []
    };
    restapiServiceSpy.searchmailid.and.returnValue(of(mockResponse));

    component.saveinstructorprofile();
    expect(restapiServiceSpy.searchmailid).toHaveBeenCalled();
  });

  it('should handle saveinstructorprofile with invalid form', () => {
    component.saveinstructorprofile();
    expect(snackbarServiceSpy.error).toHaveBeenCalledWith('Please fill all required fields');
  });
});

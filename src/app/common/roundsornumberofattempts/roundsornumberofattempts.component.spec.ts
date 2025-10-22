import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundsornumberofattemptsComponent } from './roundsornumberofattempts.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { of } from 'rxjs';

describe('RoundsornumberofattemptsComponent', () => {
  let component: RoundsornumberofattemptsComponent;
  let fixture: ComponentFixture<RoundsornumberofattemptsComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<RoundsornumberofattemptsComponent>>;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  let snackbarServiceSpy: jasmine.SpyObj<SnackbaralertService>;

  const mockDialogData = {
    instructorpanelid: '123',
    archiveflag: false,
    studentcourseattempts: 5,
    deletedflag: false,
    totallicenseleft: 10,
    noofstudentregistered: 5
  };

  beforeEach(async () => {
    const dialogSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    const restapiSpy = jasmine.createSpyObj('RestapiService', ['updateInstructor']);
    const snackbarSpy = jasmine.createSpyObj('SnackbaralertService', ['error', 'success']);

    await TestBed.configureTestingModule({
      imports: [
        RoundsornumberofattemptsComponent,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: RestapiService, useValue: restapiSpy },
        { provide: SnackbaralertService, useValue: snackbarSpy }
      ]
    }).compileComponents();

    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<RoundsornumberofattemptsComponent>>;
    restapiServiceSpy = TestBed.inject(RestapiService) as jasmine.SpyObj<RestapiService>;
    snackbarServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsornumberofattemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct form value', () => {
    expect(component.selectupdateinstroctorgroup.get('studentcourseattempts')?.value).toBe(5);
  });

  it('should validate attempts between 1 and 10', () => {
    const control = component.selectupdateinstroctorgroup.get('studentcourseattempts');
    
    control?.setValue(0);
    expect(control?.valid).toBeFalsy();
    
    control?.setValue(11);
    expect(control?.valid).toBeFalsy();
    
    control?.setValue(5);
    expect(control?.valid).toBeTruthy();
  });

  it('should call updateInstructor with correct data on valid submission', () => {
    restapiServiceSpy.updateInstructor.and.returnValue(of({ status: 'Success', message: 'Updated successfully' }));
    
    component.selectupdateinstroctorgroup.get('studentcourseattempts')?.setValue(5);
    component.update();

    expect(restapiServiceSpy.updateInstructor).toHaveBeenCalledWith({
      instructorpanelid: '123',
      archiveflag: false,
      studentcourseattempts: 5,
      deletedflag: false,
      totallicenseleft: 10,
      noofstudentregistered: 5,
      action: 'update',
      status: 'active',
      caller: 'webadmin',
      usermode: 'instructor',
      email: component.useremail
    });
  });
});

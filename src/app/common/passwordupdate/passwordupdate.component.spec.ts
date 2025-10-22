import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordupdateComponent } from './passwordupdate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { of } from 'rxjs';

describe('PasswordupdateComponent', () => {
  let component: PasswordupdateComponent;
  let fixture: ComponentFixture<PasswordupdateComponent>;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  let snackbarServiceSpy: jasmine.SpyObj<SnackbaralertService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('RestapiService', ['deleteorupdateuser']);
    const snackbarSpy = jasmine.createSpyObj('SnackbaralertService', ['success', 'error']);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        PasswordupdateComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {
          userRegister: {
            email: 'test@example.com',
            password: 'oldpassword'
          }
        }},
        { provide: RestapiService, useValue: spy },
        { provide: SnackbaralertService, useValue: snackbarSpy }
      ]
    })
    .compileComponents();

    restapiServiceSpy = TestBed.inject(RestapiService) as jasmine.SpyObj<RestapiService>;
    snackbarServiceSpy = TestBed.inject(SnackbaralertService) as jasmine.SpyObj<SnackbaralertService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordupdateComponent);
    component = fixture.componentInstance;
    restapiServiceSpy.deleteorupdateuser.and.returnValue(of({ status: 'Success', message: 'Password updated successfully' }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with user password', () => {
    expect(component.createuserpasswordgroup.get('password')?.value).toBe('oldpassword');
  });

  it('should update password when form is valid', () => {
    component.createuserpasswordgroup.patchValue({ password: 'newpassword' });
    component.passswordupdate();
    expect(restapiServiceSpy.deleteorupdateuser).toHaveBeenCalled();
    expect(snackbarServiceSpy.success).toHaveBeenCalled();
  });
});

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatIconModule } from '@angular/material/icon';
import { MicrosimdashboardstructureComponent } from '../microsimdashboardstructure/microsimdashboardstructure.component';

interface UserRegister {
  email: string;
  password: string;
}

interface DialogData {
  userRegister: UserRegister;
}

@Component({
  selector: 'app-passwordupdate',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    // MicrosimdashboardstructureComponent,
  ],
  templateUrl: './passwordupdate.component.html',
  styleUrls: ['./passwordupdate.component.scss']
})
export class PasswordupdateComponent {
  private readonly fb = inject(FormBuilder);
  private readonly restApiService = inject(RestapiService);
  private readonly alertService = inject(SnackbaralertService);
  private readonly dialogRef = inject(MatDialogRef<PasswordupdateComponent>);
  private readonly data = inject(MAT_DIALOG_DATA) as DialogData;

  message = 'Reset the password for the participant, and remember to communicate with them about the change.';

  createuserpasswordgroup: FormGroup = this.fb.group({
    password: [this.data?.userRegister?.password || '', Validators.required]
  });

  passwordUpdate(): void {
    if (this.createuserpasswordgroup.invalid) {
      this.alertService.error('All fields are required');
      return;
    }

    const body = {
      email: this.data.userRegister.email,
      caller: 'webstudent',
      usermode: 'student',
      password: this.createuserpasswordgroup.value.password,
      action: 'update',
      deletedflag: 'no'
    };

    this.restApiService.deleteorupdateuser(body).subscribe({
      next: (res: any) => {
        const { status, message } = res as { status?: string; message?: string };
        if (status === 'Success') {
          this.alertService.success(message ?? '');
          this.dialogRef.close(this.data);
        } else {
          this.alertService.error(message ?? '');
        }
      },
      error: (err: unknown) => {
        console.error('Error in passwordUpdate:', err);
        this.alertService.error('Error updating password');
      }
    });
  }
}

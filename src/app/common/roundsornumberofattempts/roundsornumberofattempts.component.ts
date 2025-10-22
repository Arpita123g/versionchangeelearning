import { Component, Inject, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-roundsornumberofattempts',
  templateUrl: './roundsornumberofattempts.component.html',
  styleUrls: ['./roundsornumberofattempts.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
  ]
})
export class RoundsornumberofattemptsComponent extends AbstractComponent {
  message:string = "Set the number of rounds you want the participant to play in the game. The maximum number of rounds in the game is 10. The participant can move at their own speed from one round to another. Every round can have the same or different scenarios depending on your configuration."
  disable: boolean = false;
  // Rolesub: Subscription;
  userrole: string = '';
  constructor(
    _router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, public form: FormBuilder, public dialogRef: MatDialogRef<RoundsornumberofattemptsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Emailsub = this._global.useremail.subscribe((data) => {

      this.useremail = data;
      
    });
  }
  selectupdateinstroctorgroup !: FormGroup


  override ngOnInit(): void {
    this.buildForm()
  }

  public buildForm() {
    this.selectupdateinstroctorgroup = this.form.group({
      studentcourseattempts: [this.data.studentcourseattempts,[Validators.required]],
      // archiveflag: [this.data.archiveflag]

    });
  }

  update() {
    this.disable = true;
    
    if (this.selectupdateinstroctorgroup.value.studentcourseattempts > 0 && this.selectupdateinstroctorgroup.value.studentcourseattempts <= 10) {
      
      let body = {
        instructorpanelid: this.data.instructorpanelid,
        archiveflag: this.data.archiveflag,
        studentcourseattempts: this.selectupdateinstroctorgroup.value.studentcourseattempts,
        deletedflag: this.data.deletedflag,
        totallicenseleft: this.data.totallicenseleft,
        noofstudentregistered: this.data.noofstudentregistered,
        action: 'update',
        status: 'active',
        caller: 'webadmin',
        usermode: 'instructor',
        email: this.useremail,
      };

      this._restapiservice.updateInstructor(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          // this.checkloading = false;
          this._alert.success(data.message);
          this.dialogRef.close();
          // this.selectupdateinstroctorgroup.reset();
        } else {
          this.disable = false;
          this._alert.error(data.message)
        }
      });
    } else if (this.selectupdateinstroctorgroup.value.studentcourseattempts <= 0) {
      this.disable = false;
      this._alert.error("Attempts should be greater than 0");
    } else {
      this.disable = false;
      this._alert.error("Attempts should not be greater than 10");
    }
  }
  override ngOnDestroy() {
    this.Emailsub.unsubscribe();
  }
}

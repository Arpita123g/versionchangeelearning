import { Component, OnInit, ViewChild, signal, inject, Inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { GlobalService } from 'src/app/service/global.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { Subscription } from 'rxjs';
import * as XLSX from 'xlsx';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-instructorhomepage',
  templateUrl: './instructorhomepage.component.html',
  styleUrls: ['./instructorhomepage.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgbTimepickerModule,
    MatChipsModule,
    MatCardModule
  ]
})
export class InstructorhomepageComponent implements OnInit {
  private readonly _restapiservice = inject(RestapiService);
  private readonly _alert = inject(SnackbaralertService);
  private readonly _global = inject(GlobalService);
  private readonly dialog = inject(MatDialog);
  private readonly _router = inject(Router);
  private readonly form = inject(FormBuilder);

  checkloading = signal<boolean>(false);
  useremail = signal<string | null | undefined>(null);
  password = signal<string>('');
  ELEMENT_DATA = signal<PeriodicElement[]>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = signal<string[]>([
    'coursename',
    'coursecode',
    'studentregisteredno',
    'totallicense',
    'studentattemptcourse',
    'archive',
    'edit',
    'addtime'
  ]);
  dataSource = new MatTableDataSource<PeriodicElement>();

  private emailSub: Subscription;
  private passwordSub: Subscription;

  constructor() {
    this.emailSub = this._global.useremail.subscribe((data) => {
      this.useremail.set(data);
    });
    this.passwordSub = this._global.userpassword.subscribe((data) => {
      this.password.set(data);
    });
  }

  ngOnInit(): void {
    this.getTableData();
  }

  edit(e: any) {
    const dialogRef = this.dialog.open(UpdateInstructorhomepageComponent, {
      width: '50%',
      data: e,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getTableData();
    });
  }

  addtime(e: any) {
    const dialogRef = this.dialog.open(AddTimeComponent, {
      width: '50%',
      data: e,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getTableData();
    });
  }

  goToarchieve() {
    this._router.navigate(['/auth/component/instructorArchivepage']);
  }

  modifyStr(str: string): string {
    return str.length < 18 ? str : str.substring(0, 15) + '...';
  }

  goTo(code: string) {
    this._global.studentemail.next('');
    this._global.coursecode.next(code);
    this._router.navigate(['/auth/component/instructormatricsscreen']);
  }

  RegisterCount(code: string) {
    this._global.coursecode.next(code);
    this._router.navigate(['/auth/component/instructorregistercount']);
  }

  goToprofile() {
    const dialogRef = this.dialog.open(UpdateInstructorprofilepageComponent, {
      width: '50%'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getTableData();
    });
  }

  goTocourse() {
    this._router.navigate(['/auth/component/instructormatricsscreen']);
  }

  getTableData() {
    const body = {
      email: this.useremail(),
      caller: 'webinstructor',
      usermode: 'instructor',
      searchtype: 'all'
    };

    this._restapiservice.getinstructortablelist(body).subscribe({
      next: (data: any) => {
        if (data.status === 'Success') {
          this.ELEMENT_DATA.set(data.resultList);
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA());
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }
        } else {
          this._alert.error(data.message);
        }
      },
      error: (error: any) => {
        this._alert.error('Something went wrong');
      }
    });
  }

  ngOnDestroy() {
    this.emailSub?.unsubscribe();
    this.passwordSub?.unsubscribe();
  }
}

@Component({
  selector: 'app-update-instructor-homepage',
  templateUrl: './updateinstructorhomepage.component.html',
  styleUrls: ['./instructorhomepage.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class UpdateInstructorhomepageComponent implements OnInit {
  private readonly _restapiservice = inject(RestapiService);
  private readonly _alert = inject(SnackbaralertService);
  private readonly _global = inject(GlobalService);
  private readonly form = inject(FormBuilder);

  useremail = signal<string>('');
  disable = signal<boolean>(false);
  selectupdateinstroctorgroup!: FormGroup;

  private emailSub: Subscription;

  constructor(
    public dialogRef: MatDialogRef<UpdateInstructorhomepageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.emailSub = this._global.useremail.subscribe((data) => {
      this.useremail.set(data);
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.selectupdateinstroctorgroup = this.form.group({
      studentcourseattempts: [this.data.studentcourseattempts],
      archiveflag: [this.data.archiveflag]
    });
  }

  update() {
    this.disable.set(true);
    if (this.selectupdateinstroctorgroup.value.studentcourseattempts > 0) {
      const body = {
        instructorpanelid: this.data.instructorpanelid,
        archiveflag: this.selectupdateinstroctorgroup.value.archiveflag,
        studentcourseattempts: this.selectupdateinstroctorgroup.value.studentcourseattempts,
        deletedflag: this.data.deletedflag,
        totallicenseleft: this.data.totallicenseleft,
        noofstudentregistered: this.data.noofstudentregistered,
        action: 'update',
        status: 'active',
        caller: 'webadmin',
        usermode: 'instructor',
        email: this.useremail()
      };

      this._restapiservice.updateInstructor(body).subscribe({
        next: (data: any) => {
          if (data.status === 'Success') {
            this._alert.success(data.message);
            this.dialogRef.close();
          } else {
            this.disable.set(false);
            this._alert.error(data.message);
          }
        },
        error: (error: any) => {
          this.disable.set(false);
          this._alert.error('Something went wrong');
        }
      });
    } else {
      this.disable.set(false);
      this._alert.error('Attempts should be greater than 0');
    }
  }

  ngOnDestroy() {
    this.emailSub?.unsubscribe();
  }
}

@Component({
  selector: 'app-add-time',
  templateUrl: './addtime.component.html',
  styleUrls: ['./instructorhomepage.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgbTimepickerModule
  ]
})
export class AddTimeComponent implements OnInit {
  private readonly _restapiservice = inject(RestapiService);
  private readonly _alert = inject(SnackbaralertService);
  private readonly _global = inject(GlobalService);
  private readonly form = inject(FormBuilder);

  time = { hour: 13, minute: 30 };
  useremail = signal<string>('');
  timegroup!: FormGroup;

  private emailSub: Subscription;

  constructor(
    public dialogRef: MatDialogRef<AddTimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.emailSub = this._global.useremail.subscribe((data) => {
      this.useremail.set(data);
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.timegroup = this.form.group({
      time: [this.time, Validators.required]
    });
  }

  timeAdd() {
    if (this.timegroup.valid) {
      const body = {
        instructorpanelid: this.data.instructorpanelid,
        time: this.timegroup.value.time,
        action: 'update',
        status: 'active',
        caller: 'webadmin',
        usermode: 'instructor',
        email: this.useremail()
      };

      this._restapiservice.updateInstructor(body).subscribe({
        next: (data: any) => {
          if (data.status === 'Success') {
            this._alert.success(data.message);
            this.dialogRef.close();
          } else {
            this._alert.error(data.message);
          }
        },
        error: (error: any) => {
          this._alert.error('Something went wrong');
        }
      });
    }
  }

  ngOnDestroy() {
    this.emailSub?.unsubscribe();
  }
}

@Component({
  selector: 'app-update-instructor-profile',
  templateUrl: './updateinstructorprofilepage.component.html',
  styleUrls: ['./instructorhomepage.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class UpdateInstructorprofilepageComponent implements OnInit {
  private readonly _restapiservice = inject(RestapiService);
  private readonly _alert = inject(SnackbaralertService);
  private readonly _global = inject(GlobalService);
  private readonly form = inject(FormBuilder);

  useremail = signal<string>('');
  username = signal<string>('');
  userpassword = signal<string>('');
  instructorprofilegroup!: FormGroup;

  private emailSub: Subscription;
  private passwordSub: Subscription;
  private nameSub: Subscription;

  constructor(
    public dialogRef: MatDialogRef<UpdateInstructorprofilepageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.emailSub = this._global.useremail.subscribe((data) => {
      this.useremail.set(data);
    });
    this.passwordSub = this._global.userpassword.subscribe((data) => {
      this.userpassword.set(data);
    });
    this.nameSub = this._global.username.subscribe((data) => {
      this.username.set(data);
    });
  }

  ngOnInit(): void {
    this.disableformvalue();
    this.buildForm();
  }

  disableformvalue() {
    this.instructorprofilegroup?.get('email')?.disable();
  }

  buildForm() {
    this.instructorprofilegroup = this.form.group({
      email: [this.useremail()],
      username: [this.username()],
      password: [this.userpassword()]
    });
  }

  update() {
    if (this.instructorprofilegroup.valid) {
      const body = {
        email: this.useremail(),
        username: this.instructorprofilegroup.value.username,
        password: this.instructorprofilegroup.value.password,
        action: 'update',
        status: 'active',
        caller: 'webadmin',
        usermode: 'instructor'
      };

      this._restapiservice.updateInstructor(body).subscribe({
        next: (data: any) => {
          if (data.status === 'Success') {
            this._alert.success(data.message);
            this.dialogRef.close();
          } else {
            this._alert.error(data.message);
          }
        },
        error: (error: any) => {
          this._alert.error('Something went wrong');
        }
      });
    }
  }

  ngOnDestroy() {
    this.emailSub?.unsubscribe();
    this.passwordSub?.unsubscribe();
    this.nameSub?.unsubscribe();
  }
}

export interface PeriodicElement {
  courseDetails: {
    coursename: string;
  };
  coursecode: string;
  noofstudentregistered: number;
  totallicenseleft: number;
  studentcourseattempts: number;
  archiveflag: string;
  instructorpanelid: string;
  deletedflag: string;
}

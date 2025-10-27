
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@Component({
  selector: 'app-newtimeupdate',
  templateUrl: './newtimeupdate.component.html',
  styleUrls: ['./newtimeupdate.component.scss'],
  standalone: true,
  imports: [CommonModule,
     ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
    
  ]
})
export class NewtimeupdateComponent extends AbstractComponent {
  time = { hour: 13, minute: 30 };
  Rolesub: Subscription;
  userrole: string = '';
  message: string =
    "Set the start and end time for the game from the below-mentioned tabs. The participant will be able to access and play the game only within the time set by you. The time can be changed at any given point. The timeline set here is for all the rounds provided in the game and not for any particular round.";

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
    public form: FormBuilder,
    public dialogRef: MatDialogRef<NewtimeupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.role.subscribe((data: any) => {
      this.userrole = data;
    });
  }

  override ngOnInit(): void {
    this.buildForm();
  }

  timegroup!: FormGroup;

  public buildForm() {
    console.log("datass", this.data);
    var start = this.data.courseDetails.starttime;
    var end = this.data.courseDetails.endtime;
    var timezone = this.data.courseDetails.timezone || 'UTC'; // example: "Europe/Paris"

    var split1 = start.split(" ");
    var split2 = end.split(" ");
    var datesplit1 = split1[0].split("-");
    var datesplit2 = split2[0].split("-");
    var startdate = `${datesplit1[2]}-${datesplit1[1]}-${datesplit1[0]}T${split1[1]}`;
    var enddate = `${datesplit2[2]}-${datesplit2[1]}-${datesplit2[0]}T${split2[1]}`;

    // Convert from UTC to local timezone
    const startUTC = new Date(startdate);
    const endUTC = new Date(enddate);
    const startLocal = this.convertToTimeZone(startUTC, timezone);
    const endLocal = this.convertToTimeZone(endUTC, timezone);

    const startISO = this.toLocalISOString(startLocal);
    const endISO = this.toLocalISOString(endLocal);

    console.log("Converted for", timezone, "=>", startISO, endISO);

    this.timegroup = this.form.group({
      starttime: [startISO],
      endtime: [endISO],
    });
  }

  // Convert a Date object to target timezone
  convertToTimeZone(date: Date, timeZone: string): Date {
    const dateString = date.toLocaleString("en-US", { timeZone });
    return new Date(dateString);
  }

  // Convert date to yyyy-MM-ddTHH:mm for datetime-local
  toLocalISOString(date: Date): string {
    const pad = (n: number) => (n < 10 ? "0" + n : n);
    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate()) +
      "T" +
      pad(date.getHours()) +
      ":" +
      pad(date.getMinutes())
    );
  }

  // Convert from selected timezone to UTC before saving
  convertToUTC(date: Date, timeZone: string): Date {
    const invDate = new Date(
      date.toLocaleString("en-US", { timeZone: "UTC" })
    );
    const tzOffset = date.getTime() - invDate.getTime();
    return new Date(date.getTime() - tzOffset);
  }

  // timeAdd() {
  //   const timezone = this.data.courseDetails.timezone || 'UTC';
  //   const { starttime, endtime } = this.timegroup.value;

  //   const startLocal = new Date(starttime);
  //   const endLocal = new Date(endtime);

  //   if (startLocal >= endLocal) {
  //     this._alert.error("Start time cannot be greater than end time");
  //     return;
  //   }

  //   // Convert local time (in timezone) to UTC before sending to backend
  //   const startUTC = this.convertToUTC(startLocal, timezone);
  //   const endUTC = this.convertToUTC(endLocal, timezone);

  //   const formatDate = (d: Date) =>
  //     `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1)
  //       .toString()
  //       .padStart(2, '0')}-${d.getFullYear()} ${d
  //       .getHours()
  //       .toString()
  //       .padStart(2, '0')}:${d
  //       .getMinutes()
  //       .toString()
  //       .padStart(2, '0')}:${d
  //       .getSeconds()
  //       .toString()
  //       .padStart(2, '0')}`;

  //   let body = {
  //     coursedetailsid: this.data.coursedetailsid,
  //     email: this.useremail,
  //     starttime: formatDate(startUTC),
  //     endtime: formatDate(endUTC),
  //     action: 'updatecoursedatetime',
  //     caller: 'webadmin',
  //     usermode: 'instructor'
  //   };

  //   console.log("Saving UTC times:", body);

  //   this._restapiservice.savedatetime(body).subscribe((data: any) => {
  //     if (data.status === 'Success') {
  //       this._alert.success(data.message);
  //       this.dialogRef.close(this.data);
  //     } else {
  //       this._alert.error(data.message);
  //     }
  //   });
  // }

  timeAdd() {
    const timezone = this.data.courseDetails.timezone || 'UTC';
    const { starttime, endtime } = this.timegroup.value;

    const startLocal = new Date(starttime);
    const endLocal = new Date(endtime);

    if (startLocal >= endLocal) {
      this._alert.error("Start time cannot be greater than end time");
      return;
    }

    // ❌ Don't convert again — assume times are already in target timezone
    const formatDate = (d: Date) =>
      `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${d.getFullYear()} ${d
          .getHours()
          .toString()
          .padStart(2, '0')}:${d
            .getMinutes()
            .toString()
            .padStart(2, '0')}:${d
              .getSeconds()
              .toString()
              .padStart(2, '0')}`;

    let body = {
      coursedetailsid: this.data.coursedetailsid,
      email: this.useremail,
      starttime: formatDate(startLocal),
      endtime: formatDate(endLocal),
      action: 'updatecoursedatetime',
      caller: 'webadmin',
      usermode: 'instructor'
    };

    console.log("Saving time directly (no conversion):", body);

    this._restapiservice.savedatetime(body).subscribe((data: any) => {
      if (data.status === 'Success') {
        this._alert.success(data.message);
        this.dialogRef.close(this.data);
      } else {
        this._alert.error(data.message);
      }
    });
  }


  override ngOnDestroy() {
    this.Emailsub.unsubscribe();
    this.Rolesub.unsubscribe();
  }
}
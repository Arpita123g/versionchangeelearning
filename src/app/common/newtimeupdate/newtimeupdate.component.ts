
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
  message:string = "Set the start and end time for the game from the below-mentioned tabs. The participant will be able to access and play the game only within the time set by you. The time can be changed at any given point. The timeline set here is for all the rounds provided in the game and not for any particular round."
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog,   public form: FormBuilder,    public dialogRef: MatDialogRef<NewtimeupdateComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any,

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
    this.buildForm()
  }
  timegroup !: FormGroup

  public buildForm() {
    console.log("datass",this.data)
    var start = this.data.courseDetails.starttime;
    var end = this.data.courseDetails.endtime;
    var split1 = start.split(" ");
    var split2 = end.split(" ");
    var datesplit1 = split1[0].split("-")
    var datesplit2 = split2[0].split("-")
    var startdate = datesplit1[2] + "-" + datesplit1[1] + "-" + datesplit1[0] + "T" + split1[1];
    var enddate = datesplit2[2] + "-" + datesplit2[1] + "-" + datesplit2[0] + "T" + split2[1];


    console.log("start,endback", startdate, enddate)
    this.timegroup = this.form.group({
      starttime: [startdate],
      endtime: [enddate]

    });
  }

  // timeAdd() {
  //   console.log("start", this.timegroup.value.starttime);
  //   console.log("end", this.timegroup.value.endtime);
  //   var split1 = this.timegroup.value.starttime.split("T");
  //   var datesplit1 = split1[0].split("-", 3);
  //   var split2 = this.timegroup.value.endtime.split("T");
  //   var datesplit2 = split2[0].split("-", 3);

  //   var startdate = datesplit1[2] + "-" + datesplit1[1] + "-" + datesplit1[0] + " " + split1[1];
  //   var enddate = datesplit2[2] + "-" + datesplit2[1] + "-" + datesplit2[0] + " " + split2[1];
  //   const date1 = new Date(datesplit1[1] + "-" + datesplit1[2] + "-" + datesplit1[0] + " " + split1[1]);
  //   const date2 = new Date(datesplit2[1] + "-" + datesplit2[2] + "-" + datesplit2[0] + " " + split2[1]);
  //   if(date1<date2){
      


  //   //if (this.timegroup.valid) {

  //   let body = {
  //     coursedetailsid: this.data.coursedetailsid,
  //     email: this.useremail,
  //     starttime: startdate,
  //     endtime: enddate,
  //     action: 'updatecoursedatetime',
  //     caller: 'webadmin',
  //     usermode: 'instructor'
  //   };

  //   this._restapiservice.savedatetime(body).subscribe((data: any) => {
  //     if (data.status == 'Success') {
  //       this._alert.success(data.message);
  //       this.dialogRef.close(this.data);
  //     } else {
  //       this._alert.error(data.message)
  //     }
  //   });
  // }else{
  //   this._alert.error("start time can not greater than end time")
  // }
   
  // }
  
  timeAdd() {
    console.log("start", this.timegroup.value.starttime);
    console.log("end", this.timegroup.value.endtime);
  
    var split1 = this.timegroup.value.starttime.split("T");
    var split2 = this.timegroup.value.endtime.split("T");
  
    var datesplit1 = split1[0].split("-");
    var datesplit2 = split2[0].split("-");
  
    var startdate = `${datesplit1[2]}-${datesplit1[1]}-${datesplit1[0]} ${split1[1]}`;
    var enddate = `${datesplit2[2]}-${datesplit2[1]}-${datesplit2[0]} ${split2[1]}`;
  
    // Safari-compatible ISO strings
    const isoDate1 = `${datesplit1[0]}-${datesplit1[1]}-${datesplit1[2]}T${split1[1]}`;
    const isoDate2 = `${datesplit2[0]}-${datesplit2[1]}-${datesplit2[2]}T${split2[1]}`;
  
    const date1 = new Date(isoDate1);
    const date2 = new Date(isoDate2);
  
    if (date1 < date2) {
      let body = {
        coursedetailsid: this.data.coursedetailsid,
        email: this.useremail,
        starttime: startdate,
        endtime: enddate,
        action: 'updatecoursedatetime',
        caller: 'webadmin',
        usermode: 'instructor'
      };
  
      this._restapiservice.savedatetime(body).subscribe((data: any) => {
        if (data.status === 'Success') {
          this._alert.success(data.message);
          this.dialogRef.close(this.data);
        } else {
          this._alert.error(data.message);
        }
      });
    } else {
      this._alert.error("Start time cannot be greater than end time");
    }
  }
  

  override ngOnDestroy() {
    this.Emailsub.unsubscribe();
    this.Rolesub.unsubscribe();
  }
}
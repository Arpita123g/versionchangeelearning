import { Component, OnInit, signal, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddTimeComponent, UpdateInstructorhomepageComponent } from '../instructorhomepage/instructorhomepage.component';
import { PromotionsigmentcasecommunicationmixComponent } from '../casemanagement/promotionsigmentcasemanagement/promotionsigmentcasecommunicationmix/promotionsigmentcasecommunicationmix.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-instructordashboard',
  templateUrl: './instructordashboard.component.html',
  styleUrls: ['./instructordashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class InstructordashboardComponent extends AbstractComponent implements OnInit {
  protected override readonly _restapiservice = inject(RestapiService);
  protected override readonly _api = inject(ApiService);
  protected override readonly _alert = inject(SnackbaralertService);
  protected override readonly _global = inject(GlobalService);
  private readonly dialog = inject(MatDialog);
  protected override readonly _router = inject(Router);

  override checkloading: boolean = false;
  userEmailSignal = signal<string>('');
  password = signal<string>('');
  instructorelementdetails = signal<any[]>([]);
  cardlist = signal<any[]>([]);
  imageiconarray = signal<any[]>([]);

  private emailSub!: Subscription;
  private passwordSub!: Subscription;
  private instructorElementSub!: Subscription;

  override ngOnInit(): void {
    this.emailSub = this._global.useremail.subscribe((data) => {
      this.userEmailSignal.set(data);
    });
    this.passwordSub = this._global.userpassword.subscribe((data) => {
      this.password.set(data);
    });
    this.instructorElementSub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorelementdetails.set(Array.isArray(data) ? data : []);
    });
    
    this.checkloading = true;
    this.getTableData();
  }

  gottoassignment(carddata: any) {
    const dialogRef = this.dialog.open(courseassignComponent, {
      data: carddata,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.getTableData();
    });
  }
  primarycoursename(card: any) {
    const dialogRef = this.dialog.open(coursenameprimaryComponent, {
      width: '80%',
      data: card,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
    // const dialogRef = this.dialog.open(coursenameprimaryComponent, {
    //   width: '100%',
    //   data: card,
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.getTableData();
    // });
    // this._router.navigate(['auth/component/primarycourse', { data: coursedetailsid }]);
    // this._router.navigate(['auth/component/primarycourse'])

  }

  checkstorage() {

    localStorage.getItem("islogin");

    this.userEmailSignal.set(localStorage.getItem("email") ?? '');

  }

  //don't delete this commented line
  edit(e: any) {
    const dialogRef = this.dialog.open(AttemptsupdateComponent, {
      width: '50%',
      data: e,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  addtime(e: any) {
    const dialogRef = this.dialog.open(TimeupdateComponent, {
      width: '50%',
      data: e,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  goToarchieve() {
    this._router.navigate(['/auth/component/instructorArchivepage']);
  }



  goToprofile() {
    const dialogRef = this.dialog.open(Instructordashboardprofile, {
      width: '50%'

    })
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });

  }

  instructorchart(coursecode: string) {
    this._global.coursecode.next(coursecode);
    // this.dialogRef.close();
    this._router.navigate(['auth/component/instructorchartdashboard'])
  }

  modifyStr(str: string) {
    if (str.length < 18) {
      return str;
    } else {
      return str.substring(0, 15) + '...';
    }
  }

  goTo(code: string) {
    this._global.studentemail.next('')
    this._global.coursecode.next(code);
    this._router.navigate(['/auth/component/instructormatricsscreen']);
  }

  RegisterCount(code: string) {
    this._global.coursecode.next(code);
    this._router.navigate(['/auth/component/instructorregistercount']);
  }


  coursenamelist: any = [
    { simulation: "Breakeven Analysis", imageicon: "assets/elearning_icon_png/Breakeven.png" },
    { simulation: "Capital Budgeting", imageicon: "assets/elearning_icon_png/Capital Budgeting.png" },
    { simulation: "David vs Goliath", imageicon: "assets/elearning_icon_png/Ethical Dilemma.png" },
    { simulation: "Accounting", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Understanding Financial Statement", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Leadership & Communication", imageicon: "assets/elearning_icon_png/Communication & Leadership.png" },
    // { simulation: "Logistics Model", imageicon: "assets/elearning_icon_png/Logistics.png" },
    { simulation: "Logistics", imageicon: "assets/elearning_icon_png/Logistics.png" },
    { simulation: "Value Chain", imageicon: "assets/elearning_icon_png/Value Chain.png" },
    { simulation: "SCM", imageicon: "assets/elearning_icon_png/Value Chain.png" },
    { simulation: "Change Management Module", imageicon: "assets/elearning_icon_png/Change Management.png" },
    { simulation: "Financial Analysis", imageicon: "assets/elearning_icon_png/Financial Analysis.png" },
    { simulation: "Financial Statement Analysis", imageicon: "assets/elearning_icon_png/Financial Analysis.png" },
    { simulation: "Security Analysis & Portfolio Management", imageicon: "assets/elearning_icon_png/Portfolio Management.png" },
    { simulation: "Decarbonization", imageicon: "assets/elearning_icon_png/Global Challenge ESG icon.png" },
    { simulation: "Sales Management Module", imageicon: "assets/elearning_icon_png/Sales Management.png" },
    { simulation: "Sales Pharma Scenario", imageicon: "assets/elearning_icon_png/Sales Management.png" },
    { simulation: "Sales Agricultural Scenario", imageicon: "assets/elearning_icon_png/Sales Management.png" },
    { simulation: "Positioning & Game Theory", imageicon: "assets/elearning_icon_png/Branding.png" },
    { simulation: "Pricing", imageicon: "assets/elearning_icon_png/Pricing.png" },
    { simulation: "Strategic Human Resource", imageicon: "assets/elearning_icon_png/HR icon.png" },
    { simulation: "Consumer Behaviour & Network Externalitie", imageicon: "assets/elearning_icon_png/Consumer behavior.png" },
    { simulation: "Ordering & Inventory", imageicon: "assets/elearning_icon_png/Ordering & Inventory.png" },
    { simulation: "Negotiation", imageicon: "assets/elearning_icon_png/Negotiation.png" },
    { simulation: "Promotion & Channel Module", imageicon: "assets/elearning_icon_png/Promotions.png" },


  ]

  getTableData() {
    // this.isData = false;
    let body = {
      email: this.userEmailSignal(),
      caller: 'webinstructor',
      usermode: 'instructor',
      searchtype: 'all'

    };
    this._restapiservice.getinstructortablelist(body).subscribe(
      (data: any) => {

        if (data.status == 'Success') {
          if (data.resultlist != null) {
            this.cardlist.set(data.resultList);
            this._global.instructorelementdetails.next(this.cardlist()[0]);
            let k = 0;
            for (let i = 0; i < data.resultList.length; i++) {
              for (let a = 0; a < this.coursenamelist.length; a++) {
                if (this.cardlist()[i].courseDetails.simulation == this.coursenamelist[a].simulation) {
                  this.imageiconarray()[k] = this.coursenamelist[a].imageicon
                  k++
                }
              }
            }
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
          this._alert.error(data.message)
        }
      },
      (error: any) => {
        this.checkloading = false;
        this._alert.error('something went wrong');
      }
    );
  }

  primarygameselect(card: any) {
    const dialogRef = this.dialog.open(primarygameselectpopupComponent, {
      data: card,

    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }
}




@Component({
  selector: 'app-attemptsupdate',
  templateUrl: 'attemptsupdate.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class AttemptsupdateComponent implements OnInit {
  useremail: string = '';
  Emailsub: Subscription;
  disable: boolean = false;
  // Rolesub: Subscription;
  userrole: string = '';
  constructor(
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    private _global: GlobalService,
    public dialog: MatDialog,
    public form: FormBuilder,
    public dialogRef: MatDialogRef<UpdateInstructorhomepageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

    this.Emailsub = this._global.useremail.subscribe((data) => {

      this.useremail = data;

      // this.Rolesub = this._global.role.subscribe((data:any) => {
      //   console.log(data);
      //   this.userrole = data;
      // });
    });

  }
  selectupdateinstroctorgroup !: FormGroup


  ngOnInit(): void {
    this.buildForm()

  }

  public buildForm() {
    this.selectupdateinstroctorgroup = this.form.group({
      studentcourseattempts: [this.data.studentcourseattempts],
      archiveflag: [this.data.archiveflag]

    });
  }


  update() {
    this.disable = true;
    if (this.selectupdateinstroctorgroup.value.studentcourseattempts > 0 && this.selectupdateinstroctorgroup.value.studentcourseattempts <= 10) {
      let body = {
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

}


@Component({
  selector: 'app-timeupdate',
  templateUrl: 'timeupdate.html',
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class TimeupdateComponent implements OnInit {
  time = { hour: 13, minute: 30 };
  Emailsub: Subscription;
  Rolesub: Subscription;
  userEmail: string = '';
  userrole: string = '';
  // starttime:string = '';
  // endtime:string = '';

  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddTimeComponent>,

  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.userEmail = data;
    });

    this.Rolesub = this._global.role.subscribe((data: any) => {
      this.userrole = data;
    });

  }

  timegroup !: FormGroup

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
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

  timeAdd() {
    console.log("start", this.timegroup.value.starttime);
    console.log("end", this.timegroup.value.endtime);
    var split1 = this.timegroup.value.starttime.split("T");
    var datesplit1 = split1[0].split("-", 3);
    var split2 = this.timegroup.value.endtime.split("T");
    var datesplit2 = split2[0].split("-", 3);

    var startdate = datesplit1[2] + "-" + datesplit1[1] + "-" + datesplit1[0] + " " + split1[1];
    var enddate = datesplit2[2] + "-" + datesplit2[1] + "-" + datesplit2[0] + " " + split2[1];
    console.log("start,end", startdate, enddate)



    //if (this.timegroup.valid) {

    let body = {
      coursedetailsid: this.data.coursedetailsid,
      email: this.userEmail,
      starttime: startdate,
      endtime: enddate,
      action: 'updatecoursedatetime',
      caller: 'webadmin',
      usermode: 'instructor'
    };

    this._restapiservice.savedatetime(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        this._alert.success(data.message);
        this.dialogRef.close(this.data);
      } else {
        this._alert.error(data.message)
      }
    });
    // } else{
    //   this._alert.error("All field must be required")
    // }
  }

}


@Component({
  selector: 'app-instructordashboardprofile',
  templateUrl: 'instructordashboardprofile.html',
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class Instructordashboardprofile implements OnInit {
  userEmail: string = '';
  username: string = '';
  userpassword: string = '';
  Emailsub: Subscription;
  Passwordsub: Subscription;
  Namesub: Subscription;
  userrole: string = '';

  constructor(
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    private _global: GlobalService,
    public dialog: MatDialog,
    public form: FormBuilder,
    public dialogRef: MatDialogRef<Instructordashboardprofile>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

    this.Emailsub = this._global.useremail.subscribe((data) => {

      this.userEmail = data;

    });
    this.Passwordsub = this._global.userpassword.subscribe((data) => {

      this.userpassword = data;

    });
    this.Namesub = this._global.username.subscribe((data) => {

      this.username = data;

    });

  }
  instructorprofilegroup !: FormGroup


  ngOnInit(): void {
    this.buildForm()
    this.disableformvalue()

  }

  disableformvalue() {
    if ((this.username.length != 0) && (this.userEmail.length != 0)
      && (this.userpassword.length != 0)) {
      // this.instructorprofilegroup.get('instructorname')?.disable()
      this.instructorprofilegroup.get('instructoremailid')?.disable()
      this.instructorprofilegroup.get('instructorpassword')?.disable()
    }

  }

  public buildForm() {
    this.instructorprofilegroup = this.form.group({
      newpassword: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],

      instructorname: [this.username],
      instructoremailid: [this.userEmail],
      instructorpassword: [this.userpassword],

      // studentcourseattempts: [this.data.studentcourseattempts],
      // archiveflag:[this.data.archiveflag]

    });
  }


  update() {


    if ((this.instructorprofilegroup.value.newpassword) == (this.instructorprofilegroup.value.confirmpassword)) {
      if (this.instructorprofilegroup.value.newpassword == "") {
        this.instructorprofilegroup.value.newpassword = this.userpassword;
      }
      //if (this.instructorprofilegroup.value.studentcourseattempts > 3) {
      let body = {
        password: this.instructorprofilegroup.value.newpassword,
        action: 'update',
        status: 'active',
        caller: 'webinstructor',
        usermode: 'instructor',
        email: this.userEmail,
        username: this.instructorprofilegroup.value.instructorname,
        deletedflag: 'no',
      };


      this._restapiservice.searchmailid(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this._alert.success(data.message);

          this._global.username.next(this.instructorprofilegroup.value.instructorname);
          
          this._global.userpassword.next(this.instructorprofilegroup.value.newpassword)
          this.dialogRef.close();
          // this.selectupdateinstroctorgroup.reset();
        } else {
          this._alert.error(data.message)
        }
      });
    } else {
      this._alert.error("please check the password")
    }
  }
  ngOnDestroy() {
    this.Emailsub.unsubscribe();
    this.Passwordsub.unsubscribe();
    this.Namesub.unsubscribe();

  }
}

@Component({
  selector: 'app-copygame',
  templateUrl: './copygame.component.html',
  styleUrls: ['./instructordashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CopygameComponent extends AbstractComponent {
  instructorpanelid: string = '';
  coursename: string = '';
  // dialogRef: any = [];s
  myForm = new FormGroup({
    coursename: new FormControl(''),

  });
  protected data = inject(MAT_DIALOG_DATA);
  protected dialogRef = inject(MatDialogRef<CopygameComponent>);

  override ngOnInit(): void {
  }
  CopyGame() {
    let apiname = "/course/copycourseforcasemanagement";
    const formData = this.myForm.value;
    
    if (!formData.coursename) {
      this._alert.error("Enter a name for the copied case");
    } else {
      // ensure coursename is string
      const coursename: string = formData.coursename ?? '';
    
      this._api
        .copyCourseData(
          this.data,
          coursename,
          this.data.primarycoursedetailsid,
          'yes',
          'cesimcase'
        )
        .subscribe((data: any) => {
          if (data.status === 'Success') {
            this.dialogRef.close(this.data);
          }
        });
    }
    

  }
  // onCancelClick() {
  //   this.dialogRef.close();
  // }


}




@Component({
  selector: 'app-coursenameprimary',
  templateUrl: './coursenameprimary.html',
  styleUrls: ['./instructordashboard.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class coursenameprimaryComponent extends AbstractComponent {
  cardlistdata: any = [];
  protected data = inject(MAT_DIALOG_DATA);
  protected dialogRef = inject(MatDialogRef<coursenameprimaryComponent>);
  protected dialog = inject(MatDialog);

  override ngOnInit(): void {
    this.getTableData();
  }

  //get all coursename under coursecode
  getTableData() {
    this._api.fetchassigncaselist(this.data.courseDetails.simulation, this.data.coursedetailsid).subscribe((data: any) => {
      if (data.status == "Success") {

        this.cardlistdata = data.resultList;
        this.checkloading = false;
      }
    })
  }

  //Copy the coursename
  CopyGame1(e: any) {
    const dialogRef = this.dialog.open(CopygameComponent, {
      width: '50%',
      data: e,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  //Go to CaseManagement Page
  gotTocasemanagement(card: any) {
    this.checkloading = true;
    this._global.casemanagementcoursedetails.next(card)
    this.dialogRef.close();
    if (card.courseDetails.simulation == 'Business Basics') {
      this._router.navigate(['auth/component/businesscasemanagement'])
    } else if (card.courseDetails.simulation == 'Product & Consumer') {
      this._router.navigate(['auth/component/consumercasemanagement'])
    } else if (card.courseDetails.simulation == 'Logistics') {
      this._router.navigate(['auth/component/logisticscasemanagement'])
    }
  }

  //Primary select
  primarygameselect(card: any) {
    const dialogRef = this.dialog.open(primarygameselectpopupComponent, {
      data: {
        instructormailid: card.courseDetails.instructormailid,
        coursename: card.coursename,
        coursecode: this.data.coursecode,
        coursedetailsid: this.data.coursedetailsid,
        primarycoursedetailsid: card.primarycoursedetailsid
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }


}

// primary game select popup
@Component({
  selector: 'app-primarygameselectpopup',
  templateUrl: './primarygameselectpopup.html',
  styleUrls: ['./instructordashboard.component.scss']

})
export class primarygameselectpopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CopygameComponent>,
    private _api: ApiService) {

  }
  ngOnInit(): void {
  }

  primaryselect() {
    this._api.courseSetPrimary(this.data.instructormailid, this.data.coursename, this.data.coursecode,
      this.data.coursedetailsid, this.data.primarycoursedetailsid).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              this.dialogRef.close(this.data)
            }
          }, error: (error: any) => {

          }
        })
  }
  // courseSetPrimary(email: string, coursename: string, coursecode: string) {
  //   console.log("ll")
  //   this._api.courseSetPrimary(email, coursename, coursecode).subscribe(
  //     {
  //       next: (data: any) => {
  //         if (data.status == "Success") {
  //           // if (data.resultList != null) {
  //           // this.getTableData();
  //           // }
  //         }
  //       }, error: (error: any) => {
  //         // this.checkloading = false;
  //         //this.driveerrorLog(error, apiname);
  //       }
  //     })
  // }
}

@Component({
  selector: 'app-courseassign',
  templateUrl: './courseassign.html',
  styleUrls: ['./instructordashboard.component.scss'],
  standalone: true,
  imports: [FormsModule]
})

export class courseassignComponent implements OnInit {
  casename: string = "";
  selectcasename: any = [];
  primarycoursedetailsid: number = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<courseassignComponent>,
    private _api: ApiService) {
  }
  casedata: any = [];
  ngOnInit(): void {
    this.getcaseData();
  }

  casenamechange(input: any) {
    this.primarycoursedetailsid = this.casedata[input - 1].primarycoursedetailsid;
  }
  getcaseData() {
    this._api.fetchassigncaselist(this.data.courseDetails.simulation, this.data.coursedetailsid).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.casedata = data.resultList;
            // this.dialogRef.close(this.data)
          }
        }, error: (error: any) => {

        }
      })
  }

  caseassign() {
    if ((this.selectcasename != "") && (this.casename != "")) {
      this._api.copyCourseData(this.data, this.casename, this.primarycoursedetailsid,'yes',"cesimcase").subscribe((data: any) => {
        if (data.status == "Success") {
          this.dialogRef.close(this.data)
        }
      })

    }
  }

}

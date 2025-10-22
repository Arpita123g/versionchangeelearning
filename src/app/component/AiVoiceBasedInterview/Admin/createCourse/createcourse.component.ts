import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger, } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
interface Course {
  aigameid: string;
  aigamename: string;
}

@Component({
  selector: 'app-createcourse',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, 
    MatPaginatorModule, MatTableModule,MatSelectModule, MatCardModule,MatRadioModule,MatIconModule],
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.2s ease-out', style({ height: 180, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 180, opacity: 1 }),
        animate('0.2s ease-in', style({ height: 0, opacity: 0 })),
      ]),

    ]),

    trigger('detailExpand', [
      state('collapsed', style({ height: 0, minHeight: '0', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),

    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ],
})
export class CreateCourseComponent implements OnInit {
  icon = 'keyboard_arrow_down';
  Emailsub: Subscription;
  useremail: string | null | undefined;
  Rolesub: Subscription;
  userrole: string = '';
  StatusClass = 'coursecode';
  ELEMENT_DATA: PeriodicElement[] = [];
  TABLEELEMENT_DATA: PeriodicElement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  public previouselement: any;
  public currentelement: any;
  public expandelement: any;
  displayedColumns: string[] = ['instructorname', 'emailid', 'password', 'update', 'delete', 'courses', 'add',];
  displayedColumnsexpand: string[] = ['coursecode', 'coursename', 'producttype', 'datecreated', 'licenseno', 'update'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  dataSourceelement = new MatTableDataSource<PeriodicElement>();
  createcoursegroup!: FormGroup;
  studentemail: string = '';
  isButtonDisabled: boolean = false;


  isadd = false;
  isaddemail = false;

  isinstructoremail: boolean = false;
  isstudentemail: boolean = false;
  searchFlag = "instructor"
  instructormailidforsearch = '';
  studentemailsearch = '';
  currentRouter = this._router.url;
  closed: boolean = false;
  emailverified: boolean = false;
  promptlist: any = [];
  promptvalue: any = [];
  questionsetlist: any = [];
  promptlistindex: any
  checkloading: boolean = false;
  selectedProductType: string = '';
  gameListArray: any = [];
  QustionListArray: any = [];
  totalItems = 0;            // Total number of items from the API
  pageSize = 20;             // Number of items per page
  currentPage = 0;
  pageSizeOptions = [10, 20, 50, 100];

  constructor(private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public form: FormBuilder,
    private _global: GlobalService,
    private _router: Router,
    public _restapiservice: RestapiService,
    private activatedRoute: ActivatedRoute,
    private _api: ApiService,
    private cdr: ChangeDetectorRef,) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });

  }

  ngOnInit(): void {
    this.checkloading = false;
    this.buildform();
    this.getTotalCountOfList();
    
  }

  public buildform() {
    this.createcoursegroup = this.form.group({
      instructormailid: ['', [Validators.required]],
      instructorname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      producttype: ['', [Validators.required]],
      gameid: ['', [Validators.required]],
      questionsetid: [''],
      coursename: ['', [Validators.required]],
      nooflicense: ['', [Validators.required]],
      studentemailsearch: [''],
      instructormailidforsearch: ['']
    });
  }

  getTotalCountOfList() {
    let body = {
      "email": this.useremail,
      "caller": "webadmin",
      "usermode": "admin",
      "searchtype": "instructor",
      "gametype": "aiinterview"
    }
    let path = '/register/totalinstructorcount'

    this._api.totalinstructorcount(body, path).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          let message = data.message;
          message = message.replace(/'/g, '"');
          const jsonObject = JSON.parse(message);
          const instructorCount = jsonObject.instructorcount;
          this.totalItems = Number(instructorCount);
          this.cdr.detectChanges();
          this.getTableData();
        }
      })

  }

  refreshClick() {
    this.studentemailsearch = "";
    this.currentPage = 0;
    this.pageSize = 20;
    this.getTotalCountOfList();
  }

  getTableData() {
    const pageoffset = this.currentPage * this.pageSize;
    this.checkloading = true;

    let body = {
      email: this.useremail,
      caller: 'webadmin',
      usermode: 'admin',
      searchtype: 'instructor',
      gametype: 'aiinterview',
      pageoffset: pageoffset

    };
    this._restapiservice.getRegisterUserListForUSerComp(body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          this.ELEMENT_DATA = data.resultList;
          this.dataSource = new MatTableDataSource<PeriodicElement>(
            this.ELEMENT_DATA
          );
          this.checkloading = false;
        } else {
          this.checkloading = false;
          this._alert.error(data.message);
        }
      },
      (error: any) => {
        this.checkloading = false;
        this._alert.error('something went wrong');
      }
    );
  }



  save() {
    
    if (this.emailverified !== false) {
      const productType = this.createcoursegroup.value.producttype;
      // Adjust questionsetid validation based on productType
      const questionsetControl = this.createcoursegroup.get('questionsetid');
      if ( productType === 'Language Lab') {
        questionsetControl?.clearValidators(); // Not required
      } else {
        questionsetControl?.setValidators([Validators.required]); // Required
      }
      questionsetControl?.updateValueAndValidity();
      // Check if the form is valid
      if (this.createcoursegroup.invalid) {
        this.createcoursegroup.markAllAsTouched();
        this._alert.error('Please fill all required fields.');
        return;
      }
      this.isButtonDisabled = true;
      let body = {
        email: this.useremail,
        usermode: this.userrole,
        caller: 'webadmin',
        action: 'save',
        instructormailid: this.createcoursegroup.value.instructormailid.toLowerCase(),
        instructorname: this.createcoursegroup.value.instructorname,
        password: this.createcoursegroup.value.password,
        producttype: this.createcoursegroup.value.producttype,
        aigameid: this.createcoursegroup.value.gameid,
        questionsetid: this.createcoursegroup.value.questionsetid,
        coursename: this.createcoursegroup.value.coursename,
        nooflicense: this.createcoursegroup.value.nooflicense,
        status: 'active',
        gametype: "aiinterview"
      };

      this._restapiservice.saveCourse(body).subscribe({
        next: (data: any) => {
          if (data.status === 'Success') {
            this.getTableData();
            this._alert.success(data.message);
            this.createcoursegroup.reset();
            this.isadd = false; // Close the form
          } else {
            this.isButtonDisabled = false;
            this._alert.error(data.message);
          }
        }, error: (error: any) => {
          this.isButtonDisabled = false;
        }
      })
    } else {
      this.isButtonDisabled = false;
      this._alert.error("Instructor email id should be email format");
    }
  }


  emailvalidation() {
    this.emailverified = this.isValidEmail();
    if (this.emailverified == false) {
      this._alert.error("Instructor email id should be email format");
    }
  }
  isValidEmail(): boolean {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,20}$/.test(this.createcoursegroup.value.instructormailid);
  }

  refresh(): void {
    window.location.reload();
  }

  reLoad() {
    this._router.navigate([this.currentRouter])
  }
  parent() {
    this._router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  toggleadd() {
    this.isadd = !this.isadd;
    // this.isaddemail = false;
  }

  toggleaddemail() {
    this.isaddemail = !this.isaddemail;
    this.isadd = false;
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
   this.getTableData();
  }
  state: string = 'default';

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  modechange() {
    if (this.isinstructoremail == true) {
      this.isstudentemail == false;
    } else {
      this.isstudentemail == true;
    }
  }

  getPromptList(event: any) {
    let apiname = '/prompt/fetchaiprompt';
    this._api.getPromptlistData(apiname, event.target.value).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.promptlist = data.resultList;
          }
        }, error: (error: any) => {

        }
      })
  }

  getGameList(event: any) {
    let apiname = '/aigame/fetchaigame';
    this._api.getAiGamelistData(apiname, event.target.value).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.gameListArray = data.resultList;
          }
        }, error: (error: any) => {

        }
      })
  }
  //get questionsetlist per game name wise
  getQuestionList(event: any) {
    const selectedId = ((event.target as HTMLSelectElement).value);
    
    let apiname = '/aiquestion/fetchaiquestionset';
    this._api.getAiQuestionsetlistData(apiname, 'aigameid', selectedId).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.QustionListArray = data.resultList;
           
          }
        }, error: (error: any) => {

        }
      })

  }
  getpromptvalue(event: any) {
    this.promptlistindex = event.target.value;
  }

  edit(e: any) {
    const dialogRef = this.dialog.open(UpdateCourseComponent, {
      width: '50%',
      data: e,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }



  updatepassword(e: any) {
    const dialogRef = this.dialog.open(UpdatePasswordAiUserComponent, {
      width: '50%',
      data: e,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  changeIcon(icon: any) {
    if (this.icon == 'keyboard_arrow_down') {
      this.icon = 'keyboard_arrow_up';
    }
    else {
      this.icon = 'keyboard_arrow_down';
    }
  }

  delete(e: any) {
    const dialogRef = this.dialog.open(DeleteCourseComponent, {
      width: '400px',
      data: e,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  addcourse(e: any) {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '50%',
      data: e,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }


  course(e: any) {

    let body = {
      email: this.useremail,
      caller: 'webadmin',
      usermode: 'admin',
      searchtype: 'instructormail',
      status: 'active',
      searchcontent: e.email,
      gametype: "aiinterview"

    };
    this._restapiservice.getCourseDetails(body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {

          if (this.previouselement != null) {
            this.previouselement.isExpanded = false;
          }
          this.currentelement = this.previouselement;
          this.previouselement = e;
          e.isExpanded = !e.isExpanded;
          this.TABLEELEMENT_DATA = data.resultList;
          this.dataSourceelement = new MatTableDataSource<PeriodicElement>(this.TABLEELEMENT_DATA);



        } else {
          this._alert.error(data.message)
        }
      },
      (error: any) => {

        this._alert.error('something went wrong');
      }
    );


  }


  search() {

    if (this.searchFlag == 'instructor') {
      let body = {
        email: this.useremail,
        status: 'active',
        caller: 'webadmin',
        usermode: 'admin',
        searchtype: 'instructormail',
        searchcontent: this.instructormailidforsearch,
      };

      this._restapiservice.getRegisterUserListForUSerComp(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this.ELEMENT_DATA = data.resultList;
          this.dataSource = new MatTableDataSource<PeriodicElement>(
            this.ELEMENT_DATA
          );
        } else {
          this._alert.error(data.message)
        }
      });
    } else {

      this._global.coursecode.next('')
      this._global.studentemail.next(this.studentemailsearch)
      this._router.navigate(['/auth/component/studentmngsec']);

    }
  }



  modifyStr(str: string) {
    if (str.length < 18) {
      return str;
    } else {
      return str.substring(0, 15) + '';
    }
  }


  checkstorage() {
    localStorage.getItem("islogin");
    this.useremail = localStorage.getItem("email");
  }


  goTo(code: string) {
    this._global.studentemail.next('')
    this._global.coursecode.next(code);
    this._router.navigate(['/auth/component/studentmngsec']);
  }

  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}

@Component({
  selector: 'deletecourse.component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: 'deletecourse.component.html',
  styleUrls: ['./createcourse.component.scss'],
})


export class DeleteCourseComponent implements OnInit {

  Emailsub: Subscription;
  Rolesub: Subscription;
  useremail: string = '';
  userrole: string = '';

  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteCourseComponent>,




  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });

  }

  createcoursegroup !: FormGroup

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.createcoursegroup = this.form.group({
      nooflicense: [this.data.nooflicense],
    });
  }

  confirm(ok: boolean) {

    if (ok == true) {

      let body = {
        email: this.data.email,
        caller: 'webinstructor',
        usermode: 'instructor',
        action: 'delete'

      };

      this._restapiservice.deleteorupdateuser(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this.dialogRef.close(this.data);
        } else {
          this._alert.error(data.status);
        }
      },
        (error: any) => {
          sessionStorage.removeItem('islogin');
          sessionStorage.removeItem('mobile');

        })
    }
    else {
      this.dialogRef.close();
    }
  }

  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}

@Component({
  selector: 'updatepasswordaiuser.component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: 'updatepasswordaiuser.component.html',
  styleUrls: ['./createcourse.component.scss'],
})


export class UpdatePasswordAiUserComponent implements OnInit {

  Emailsub: Subscription;
  Rolesub: Subscription;
  useremail: string = '';
  userrole: string = '';
  isButtonDisabled: boolean = false;
  checkloading: boolean = false;


  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdatePasswordAiUserComponent>,
  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });
  }

  createuserpasswordgroup !: FormGroup

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.createuserpasswordgroup = this.form.group({
      password: [this.data.password],
      // attempt: [this.data.attempt],

    });
  }

  update() {

    if (this.createuserpasswordgroup.valid) {
      this.checkloading = true;
      let body = {
        email: this.data.email,
        caller: 'webinstructor',
        usermode: 'instructor',
        password: this.createuserpasswordgroup.value.password,
        action: 'update',
        deletedflag: 'no',
        // attempt:this.createuserpasswordgroup.value.attempt,
      };
      this._restapiservice.deleteorupdateuser(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this._alert.success(data.message);
          this.dialogRef.close(this.data);
        } else {
          this._alert.error(data.message)
        }
      });
    } else {
      this._alert.error("All field must be required")
    }
  }

  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}

@Component({
  selector: 'addcourse.component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: 'addcourse.component.html',
  styleUrls: ['./createcourse.component.scss'],
})


export class AddCourseComponent implements OnInit {

  Emailsub: Subscription;
  Rolesub: Subscription;
  useremail: string = '';
  userrole: string = '';
  promptlist: any = []
  promptlistindex: any
  selectedProductType: string = '';
  gameListArray: any = [];
  QustionListArray: any = [];
  checkloading: boolean = false;
  isButtonDisabled: boolean = false;

  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddCourseComponent>,
    private _api: ApiService

  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });

  }

  addaicoursegmaegroup !: FormGroup

  ngOnInit(): void {
    this.buildForm();
  }

  getGameList(event: any) {
    let apiname = '/aigame/fetchaigame';
    this._api.getAiGamelistData(apiname, event.target.value).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.gameListArray = data.resultList;
          }
        }, error: (error: any) => {

        }
      })
  }
  //get questionsetlist per game name wise
  getQuestionList(event: any) {
    const selectedId = ((event.target as HTMLSelectElement).value);
    let apiname = '/aiquestion/fetchaiquestionset';
    this._api.getAiQuestionsetlistData(apiname, 'aigameid', selectedId).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.QustionListArray = data.resultList;
          }
        }, error: (error: any) => {

        }
      })

  }


  getpromptvalue(event: any) {
    this.promptlistindex = event.target.value;
  }

  public buildForm() {
    
    this.addaicoursegmaegroup = this.form.group({
      producttype: ['',[Validators.required]],
      gameid: ['',[Validators.required]],
      questionsetid: ['',],
      licenseno: ['',[Validators.required]],
      coursename: ['',[Validators.required]],
    });
  }


  courseassign() {
    const productType = this.addaicoursegmaegroup.value.producttype;
    // Adjust questionsetid validation based on productType
    const questionsetControl = this.addaicoursegmaegroup.get('questionsetid');
    if ( productType === 'Language Lab') {
      questionsetControl?.clearValidators(); // Not required
    } else {
      questionsetControl?.setValidators([Validators.required]); // Required
    }
    questionsetControl?.updateValueAndValidity();
    // Check if the form is valid
    if (this.addaicoursegmaegroup.invalid) {
      this.addaicoursegmaegroup.markAllAsTouched();
      this._alert.error('Please fill all required fields.');
      return;
    }
    this.checkloading = true;
    this.isButtonDisabled = true;
    let body = {
      email: this.useremail,
      usermode: this.userrole,
      caller: 'webadminassign',
      action: 'save',
      instructormailid: this.data.email.toLowerCase(),
      instructorname: this.data.username,
      password: this.data.password,
      producttype: this.addaicoursegmaegroup.value.producttype,
      aigameid: this.addaicoursegmaegroup.value.gameid,
      questionsetid: this.addaicoursegmaegroup.value.questionsetid,
      coursename: this.addaicoursegmaegroup.value.coursename,
      nooflicense: this.addaicoursegmaegroup.value.licenseno,
      status: 'active',
      gametype: "aiinterview",
    };
   

    this._restapiservice.saveCourse(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        this._alert.success(data.message);
        this.dialogRef.close(this.data);
      } else {
        this._alert.error(data.message)
      }
    });
  }

  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}

@Component({
  selector: 'updatecourse.component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: 'updatecourse.component.html',
  styleUrls: ['./createcourse.component.scss'],
})


export class UpdateCourseComponent implements OnInit {

  Emailsub: Subscription;
  Rolesub: Subscription;
  useremail: string = '';
  userrole: string = '';
  promptlist: any = [];
  promptindex: any;
  changepromptname: boolean = false;
  checkloading: boolean = false;
  isButtonDisabled: boolean = false;

  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdateCourseComponent>,
    private _api: ApiService
  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });

  }

  createcoursegroup !: FormGroup

  ngOnInit(): void {
   this.buildForm();
    this.getPromptList(this.data.producttype)
  }

  getPromptList(producttype: string) {
    let apiname = '/prompt/fetchaiprompt';
    this._api.getPromptlistData(apiname, producttype).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.promptlist = data.resultList;
          }
        }, error: (error: any) => {

        }
      })
  }

  public buildForm() {
    this.createcoursegroup = this.form.group({
      nooflicense: [this.data.nooflicense],
      prompt: [this.data.aiPrompt.promptname]
    });

  }
  getPromptValue(index: number) {
    this.changepromptname = true;
    this.promptindex = index - 1;

  }
  update() {
    let gamelist = 0;
    if (this.changepromptname == false) {
      gamelist = this.data.gamelist;
    } else {
      gamelist = this.promptlist[this.promptindex].gamelist
    }
    if (this.createcoursegroup.valid) {
      this.isButtonDisabled = true;
      this.checkloading = true;
      let body = {
        coursedetailsid: this.data.coursedetailsid,
        email: this.useremail,
        password: this.data.password,
        coursecode: this.data.coursecode,
        nooflicense: this.createcoursegroup.value.nooflicense,
        gamelist: gamelist,
        action: 'update',
        status: 'active',
        caller: 'webadmin',
        usermode: 'admin',
        gametype: "aiinterview"
      };
      
      this._restapiservice.saveCourse(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this._alert.success(data.message);
          this.dialogRef.close(this.data);
        } else {
          this._alert.error(data.message)
        }
      });
    } else {
      this._alert.error("All field must be required")
    }
  }

  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
}


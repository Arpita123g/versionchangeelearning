import { Component, OnInit, ViewChild, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

export interface PeriodicElement {
  name: string;
  position: number;
}

@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule
  ],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.4s ease-out', style({ height: 275, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 275, opacity: 1 }),
        animate('0.4s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
    trigger('detailExpand', [
      state('collapsed', style({ height: 0, minHeight: '0', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class CreatequestionComponent implements OnInit, OnDestroy {
  private readonly _alert = inject(SnackbaralertService);
  private readonly dialog = inject(MatDialog);
  private readonly form = inject(FormBuilder);
  private readonly _global = inject(GlobalService);
  private readonly _router = inject(Router);
  private readonly _restapiservice = inject(RestapiService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly _api = inject(ApiService);

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
  displayedColumns: string[] = ['game', 'chapter', 'type', 'questionprompt', 'update', 'delete', 'courses', 'add'];
  displayedColumnsexpand: string[] = ['coursecode', 'coursename', 'simulationname', 'promptname', 'datecreated', 'licenseno', 'update'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  dataSourceelement = new MatTableDataSource<PeriodicElement>();
  createcoursegroup!: FormGroup;
  studentemail: string = '';

  isadd = false;
  isaddemail = false;
  isinstructoremail = false;
  isstudentemail = false;
  searchFlag = "instructor";
  instructormailidforsearch = '';
  studentemailsearch = '';
  currentRouter = this._router.url;
  closed = false;
  emailverified = false;
  promptlist: any[] = [];
  promptvalue: any[] = [];
  promptlistindex: any;
  checkloading = false;

  newQuestion = '';
  questions: string[] = [];

  constructor() {
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
  }

  ngOnDestroy(): void {
    this.Emailsub?.unsubscribe();
    this.Rolesub?.unsubscribe();
  }

  addQuestion(): void {
    if (this.newQuestion.trim()) {
      this.questions.push(this.newQuestion.trim());
      this.newQuestion = '';
    }
  }

  updatechapter(element: any): void {
    // Implementation needed
  }

  deletechapter(element: any): void {
    // Implementation needed
  }

  getTableData(): void {
    const body = {
      email: this.useremail ?? undefined,
      caller: 'webadmin',
      usermode: 'admin',
      searchtype: 'instructor',
      gametype: "aiinterview"
    };
    this._restapiservice.getRegisterUserListForUSerComp(body).subscribe({
      next: (data: any) => {
        if (data.status === 'Success') {
          this.ELEMENT_DATA = data.resultList;
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
          this._alert.error(data.message);
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this._alert.error('Something went wrong');
      }
    });
  }

  emailvalidation(): void {
    this.emailverified = this.isValidEmail();
    if (!this.emailverified) {
      this._alert.error("Instructor email id should be email format");
    }
  }

  isValidEmail(): boolean {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,20}$/.test(this.createcoursegroup.value.instructormailid);
  }

  refresh(): void {
    window.location.reload();
  }

  reLoad(): void {
    this._router.navigate([this.currentRouter]);
  }

  parent(): void {
    this._router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  toggleadd(): void {
    this.isadd = !this.isadd;
    this.isaddemail = false;
  }

  toggleaddemail(): void {
    this.isaddemail = !this.isaddemail;
    this.isadd = false;
  }

  modechange(): void {
    if (this.isinstructoremail) {
      this.isstudentemail = false;
    } else {
      this.isstudentemail = true;
    }
  }

  getPromptList(event: any): void {
    const apiname = '/prompt/fetchaiprompt';
    this._api.getPromptlistData(apiname, event.target.value).subscribe({
      next: (data: any) => {
        if (data.status === "Success") {
          this.promptlist = data.resultList;
        }
      },
      error: (error: any) => {
        this._alert.error('Failed to fetch prompt list');
      }
    });
  }

  getpromptvalue(event: any) {
    this.promptlistindex = event.target.value;
  }

  edit(e: any) {
    // const dialogRef = this.dialog.open(UpdateGameComponent, {
    //   width: '50%',
    //   data: e,
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   this.getTableData();
    // });
  }

  updatepassword(e: any) {
    // const dialogRef = this.dialog.open(UpdatePasswordAiUserComponent, {
    //   width: '50%',
    //   data: e,
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   this.getTableData();
    // });
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

  }

  addcourse(e: any) {
    // const dialogRef = this.dialog.open(AddGameComponent, {
    //   width: '50%',
    //   data: e,
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.getTableData();
    // });
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

          if (this.paginator) this.dataSource.paginator = this.paginator;
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
        email: this.useremail ?? undefined,
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
          if (this.paginator) this.dataSource.paginator = this.paginator;
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

  public buildform() {
    this.createcoursegroup = this.form.group({
      instructormailid: ['', [Validators.required]],
      game: ['', [Validators.required]],
      type: ['', [Validators.required]],
      simulation: ['', [Validators.required]],
      chapter: ['', [Validators.required]],
      prompt: ['', [Validators.required]],
      coursename: ['', [Validators.required]],
      nooflicense: ['', [Validators.required]],
      studentemailsearch: [''],
      instructormailidforsearch: ['']
    });
  }

  save() {
    if (this.emailverified != false) {
      if (this.createcoursegroup.valid) {
        let body = {
          email: this.useremail,
          instructormailid: this.createcoursegroup.value.instructormailid.toLowerCase(),
          game: this.createcoursegroup.value.game,
          type: this.createcoursegroup.value.type,
          simulation: this.createcoursegroup.value.simulation,
          aipromptid: this.promptlist[this.createcoursegroup.value.prompt].aipromptid,
          coursename: this.createcoursegroup.value.coursename,
          nooflicense: this.createcoursegroup.value.nooflicense,
          action: 'save',
          status: 'active',
          caller: 'webadmin',
          usermode: this.userrole,
          gametype: "aiinterview"
        };
        this._restapiservice.saveCourse(body).subscribe((data: any) => {
          if (data.status == 'Success') {
            this.getTableData();
            this._alert.success(data.message);
            this.createcoursegroup.reset();
          } else {
            this._alert.error(data.message)
          }
        });
      } else {
        this._alert.error("All field must be required")
      }
    } else {
      this._alert.error("Instructor email id should be email format");
    }
  }

  modifyStr(str: string) {
    if (str.length < 18) {
      return str;
    } else {
      return str.substring(0, 15) + '...';
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
}


import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/auth/login.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-studentmanagesection',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule,MatDialogModule, MatCardModule],
  templateUrl: './studentmanagesection.component.html',
  styleUrls: ['./studentmanagesection.component.scss']
})
export class StudentmanagesectionComponent implements OnInit { 
  Emailsub: Subscription;
  useremail: string = '';
  coursecodesub: Subscription;
  Studentemailsub: Subscription;
  studentemail: string = '';
  code: string = '';
  instructormail: string = '';
  ELEMENT_DATA: PeriodicElement[] = [];
  StatusClass = 'inactive';
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor(
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,

  ) {
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
    this.coursecodesub = this._global.coursecode.subscribe((data: any) => {
      this.code = data;
    });
    this.Studentemailsub = this._global.studentemail.subscribe((data: any) => {
      this.studentemail = data;
    })
  }
  displayedColumns: string[] = ['studentname', 'emailid', 'changepassword', 'deletefromcoursecode', 'edit', 'delete']
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.getTableData();

  }
  //don't delete this commented line
  edit(e: any) {
    const dialogRef = this.dialog.open(UpdateStudentmanagesectionComponent, {
      width: '50%',
      data: e,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }


  //don't delete this commented line
  delete(e: any) {
    const dialogRef = this.dialog.open(DeleteStudentmanagesectionComponent, {
      width: '400px',
      data: e,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });

  }



  getTableData() {
    let searchType = "";
    let searchValue = "";
    if (this.code == '') {
      searchType = 'studentemail';
      searchValue = this.studentemail;
    } else {
      searchType = 'coursecode';
      searchValue = this.code;
      this._global.coursecode.next(this.code);
    }
    let body = {
      email: this.useremail,
      caller: 'webadmin',
      usermode: 'admin',
      searchtype: searchType,
      searchcontent: searchValue

    };

    this._restapiservice.getStudentDetails(body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          // this.isData=true;
          this.ELEMENT_DATA = [];
          this.dataSource.data = [];
          if (data.resultList != null) {
            this.ELEMENT_DATA = data.resultList;
            this.dataSource = new MatTableDataSource<PeriodicElement>(
              this.ELEMENT_DATA
            );
            if (this.paginator) this.dataSource.paginator = this.paginator;
          }

          // this.cdr.detectChanges();
        } else {
          // this.isData = true;
          this._alert.error(data.message)
        }
      },
      (error: any) => {
        // this.isData = true;
        this._alert.error('something went wrong');
      }
    );
  }


  ngOnDestroy() {
    this.Emailsub.unsubscribe();
    this.coursecodesub.unsubscribe();
    this.Studentemailsub.unsubscribe();

  }
}

@Component({
  selector: 'updatestudentmanagesection.component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, NgApexchartsModule, MatDialogModule,MatTableModule,MatPaginatorModule],
  templateUrl: 'updatestudentmanagesection.component.html',
  styleUrls: ['studentmanagesection.component.scss']
})

export class UpdateStudentmanagesectionComponent implements OnInit {
  Emailsub: Subscription;
  useremail: string = '';
  coursecodesub: Subscription
  code: string = '';
  ELEMENT_DATA: PeriodicElement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor(
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public form: FormBuilder,
    private _login: LoginService,
    public dialogRef: MatDialogRef<UpdateStudentmanagesectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
    this.coursecodesub = this._global.coursecode.subscribe((data: any) => {
      this.code = data;
    })
  }


  selectupdatestudentmnggroup!: FormGroup
  ngOnInit(): void {

    this.buildform();
  }

  public buildform() {
    this.selectupdatestudentmnggroup = this.form.group({
      changepassword: [this.data.userRegister.password]
    })
  }
  //don't delete this commented line
  update() {

    this.selectupdatestudentmnggroup.value;
    if (this.selectupdatestudentmnggroup.valid) {
      let body = {
        username: this.data.userRegister.username,
        email: this.data.userRegister.email,
        caller: 'webstudent',
        usermode: 'student',
        password: this.selectupdatestudentmnggroup.value.changepassword,
        coursecode: this.data.coursecode,
        action: 'update',
        deletedflag: 'no'

      };

      this._login.checkstudentupdate(body).subscribe((data: any) => {
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
      this._alert.error("All field must be required")
    }
  }





  ngOnDestroy() {
    this.Emailsub.unsubscribe();
    this.coursecodesub.unsubscribe();


  }

}

@Component({
  selector: 'deletestudentmanagesection.component',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, NgApexchartsModule, MatDialogModule,MatTableModule,
    MatPaginatorModule ,ReactiveFormsModule ,MatFormFieldModule,MatInputModule ],
  templateUrl: 'deletestudentmanagesection.component.html',
  styleUrls: ['studentmanagesection.component.scss']
})

export class DeleteStudentmanagesectionComponent implements OnInit {
  Emailsub: Subscription;
  useremail: string = '';
  coursecodesub: Subscription
  code: string = '';
  ELEMENT_DATA: PeriodicElement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor(
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public form: FormBuilder,
    private _login: LoginService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteStudentmanagesectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
    this.coursecodesub = this._global.coursecode.subscribe((data: any) => {
      this.code = data;
    })
  }


  selectupdatestudentmnggroup!: FormGroup
  ngOnInit(): void {

    this.buildform();
  }

  public buildform() {
    this.selectupdatestudentmnggroup = this.form.group({
      changepassword: [this.data.userRegister.password]
    })
  }
  //don't delete this commented line

  confirm(ok: boolean) {

    if (ok == true) {
      //this.dialogRef.close(ok);
      let body = {
        email: this.data.userRegister.email,
        caller: 'webstudent',
        usermode: 'student',
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
    this.Emailsub.unsubscribe();
    this.coursecodesub.unsubscribe();

  }

}


// gOnDestroy() {
//   this.Emailsub.unsubscribe();
//   this.Rolesub.unsubscribe();
// }


export interface PeriodicElement { }


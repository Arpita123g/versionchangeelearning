import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { GlobalService } from 'src/app/service/global.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploadService } from 'src/app/service/auth/fileupload.service';

import { environment as _env } from '../../../environments/environment';
import { RestapiService } from 'src/app/service/restapi.service';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/auth/login.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-drivetokengenerate',
  templateUrl: './drivetokengenerate.component.html',
  styleUrls: ['./drivetokengenerate.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule
  ]
})
export class DrivetokengenerateComponent implements OnInit {
  createcoursegroup!: FormGroup;
  email: string = '';
  clientid: string = '';
  refreshtoken: string = '';
  clientserect: string = '';
  gamename: string = '';
  noofstudent: string = '';
  remarks: string = '';
  userlimit: string = '';

  //dtOptions: DataTables.Settings = {};
  dataSource: any = [];
  coursecodelist: any = [];
  displayedColumns: string[] = ['email', 'activeusercount', 'status', 'createdat', 'update', 'delete'];
  ELEMENT_DATA: PeriodicElement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor(

    public form: FormBuilder,
    private _alert: SnackbaralertService,
    private _global: GlobalService,
    private _router: Router,
    public _loginservice: LoginService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute) {



  }
  ngOnInit(): void {
    this.fetchData();
  }

  modifyStr(str: string) {
    if (str.length < 12) {
      return str;
    } else {
      return str.substring(0, 30) + '...';
    }
  }
  submit() {
    let action = "save";
    
    this._loginservice.DriveConfigdata("/driveconfig/drivemailconfiguration", "", this.email, this.clientserect,
    this.clientid,this.refreshtoken,this.userlimit,"",action).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          this.coursecodelist = data.resultList;
          console.log("coursecodelist", this.coursecodelist);
          this.fetchData();
        }
      },
      (error: any) => {
        console.log("error", error.response)
      }
    );
  }


  goTo(mailid: string) {
    // this._router.navigate(['/drivetable'],{ state: { mailid: mailid }});
    this._router.navigate(['/drivetable', { mailid: mailid }]
    );
  }

  fetchData() {
    // this.isData = false;
    let searchtype = "all";
    let searchcontent = ""
    let address = "/driveconfig/fetchdrivemailconfiguration"
    this._loginservice.fetchDriveConfigData(address, searchtype, searchcontent,'').subscribe((data: any) => {
      if (data.status == 'Success') {
        console.log("output", data.resultList);
        this.ELEMENT_DATA = data.resultList;
        this.dataSource = new MatTableDataSource<PeriodicElement>(
          this.ELEMENT_DATA
        );
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
  errorlog(){
    this._router.navigate(['/driveerrorlog']);
  }
  update(element: any) {
    const dialogRef = this.dialog.open(UpdateTokenDetails, {
      width: '50%',
      data: element,
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log("success");
      this.fetchData();
    });
  }

  delete(element: any) {

  }

}
@Component({
  selector: 'updatetokendetails.component',
  templateUrl: 'updatetokendetails.component.html',
  styleUrls: ['./drivetokengenerate.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})

export class UpdateTokenDetails implements OnInit {
  updatedetails!: FormGroup;

  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public _loginservice: LoginService,
    // public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdateTokenDetails>,

  ) { }


  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    console.log("data", this.data)
    this.updatedetails = this.form.group({
      email: [this.data.driveemail],
      clientid: [this.data.clientid],
      refreshtoken: [this.data.refreshtoken],
      clientscrect: [this.data.clientsecret],
      status: [this.data.status],
      userlimit: [this.data.userlimit],

    });
  }

  update() {

    if (this.updatedetails.valid) {

      let action =  "update";
      
      console.log("userlimit",this.updatedetails.value.userlimit);
      this._loginservice.DriveConfigdata("/driveconfig/drivemailconfiguration", this.data.drivemailconfigurationid, 
      this.updatedetails.value.email, this.updatedetails.value.clientscrect,
      this.updatedetails.value.clientid,this.updatedetails.value.refreshtoken,this.updatedetails.value.userlimit,"",action).subscribe(
        (data: any) => {
          if (data.status == 'Success') {
            this.dialogRef.close();
            
          }
        },
        (error: any) => {

        }
      );
    } else {
      this._alert.error("All field must be required")
    }
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
}


import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LoginService } from 'src/app/service/auth/login.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, timer, interval, range } from 'rxjs';
import { GlobalService } from 'src/app/service/global.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChip } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-driveerrorlogcomponent',
  templateUrl: './driveerrorlogcomponent.component.html',
  styleUrls: ['./driveerrorlogcomponent.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule ,
    MatFormFieldModule,
    MatChip,
    MatIconModule,
    FormsModule
  ]
})
export class DriveerrorlogcomponentComponent implements OnInit {

  displayedColumns: string[] = ['drivemail', 'errorcode', 'errormessage', 'usermail', 'apicallpurpose', 'coursecode']
  seconddisplayedColumns: string[] = ['drivemail', 'count']
  thirddisplayedColumns: string[] = ['username', 'drivemail','count']
  dataSource = new MatTableDataSource<PeriodicElement>();
  seconddataSource = new MatTableDataSource<PeriodicElement>();
  thirddataSource = new MatTableDataSource<PeriodicElement>();
  coursecodesearch: string = '';
  successno: string = '';
  failureno: string = '';

  ELEMENT_DATA: PeriodicElement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  coursecode: string = '';
  Coursecodesub: Subscription;
  constructor(
    public _loginservice: LoginService,
    private _alert: SnackbaralertService,
    private _router: Router,
    private _global: GlobalService,
    private route: ActivatedRoute
  ) {
    this.Coursecodesub = this._global.coursecode.subscribe((data) => {
      this.coursecode = data;
    });
   }

  ngOnInit(): void {
    this.fetchTableData();
  }

  fetchTableData() {
    let searchtype = "all";
    let searchcontent = ""
    let address = "/error/fetcherrorlog"

    this._loginservice.fetchDriveConfigData(address, searchtype, searchcontent,'').subscribe((data: any) => {
      if (data.status == 'Success') {
        console.log("output", data.resultList);
        this.ELEMENT_DATA = data.resultList;
        if (data.resultList != null) {
          this.failureno = data.resultList.length;
          console.log("failureno", this.failureno);
          
        }
        
        else {
          this.failureno = '0'
        }
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


  getCountofDriveError(coursecodesearch: string) {
   // coursecodewithmailgrouping
    let searchtype = "coursecodewithmailgrouping";
    let searchcontent = coursecodesearch;
    let address = "/error/fetcherrorlog"

    this._loginservice.fetchDriveConfigData(address, searchtype, searchcontent,'').subscribe((data: any) => {
      if (data.status == 'Success') {
        console.log("output", data.resultList);
        this.ELEMENT_DATA = data.resultList;
        this.seconddataSource = new MatTableDataSource<PeriodicElement>(
          this.ELEMENT_DATA
        );
        if (this.paginator) this.seconddataSource.paginator = this.paginator;
      } else {
        this._alert.error(data.message)
      }
    },
      (error: any) => {
        this._alert.error('something went wrong');
      });
  }
  search(coursecodesearch: string) {
    console.log("coursecode", coursecodesearch)
    let searchtype = "coursecode";
    let searchcontent = coursecodesearch;
    let address = "/error/fetcherrorlog"
    this._global.coursecode.next(coursecodesearch);

    this._loginservice.fetchDriveConfigData(address, searchtype, searchcontent,'').subscribe((data: any) => {
      if (data.status == 'Success') {
        this.getCountofDriveError(coursecodesearch);
        console.log("output", data.resultList);
        if (data.resultList != null) {
          this.failureno = data.resultList.length;
          console.log("failureno", this.failureno)
        }
        else {
          this.failureno = '0'
        }

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
      });
  }



  submit() {
    let errorlog = {
      errorlogid: "",
      driveemail: "",
      userregisterid: "",
      coursedetailsid: "",
      courseattempt: "",
      errorcode: "",
      errormsg: "",
      apiname: "",
      apicallpurpose: "",
      remarks: ""
    }
    this._loginservice.DriveErrorConfigdata("/error/errorlog", errorlog, "errorlog").subscribe(
      (data: any) => {
        if (data.status == 'Success') {

        }
      },
      (error: any) => {
        console.log("error", error.response)
      }
    );
  }

  // modifyStr(str:string){
  //   if(str.length <18){
  //     return str;
  //   }else{
  //     return str.substring(0,15)+'...';
  //   }
  // }

  goTo(element:any){
    let searchtype = "coursecodeanddrivemail";
    let searchcontent = this.coursecode;
    let driveemail = element.driveemail;
    let address = "/error/fetcherrorlog"

    this._loginservice.fetchDriveConfigData(address, searchtype, searchcontent,driveemail).subscribe((data: any) => {
      if (data.status == 'Success') {
       console.log("output3", data.resultList);
        
        this.ELEMENT_DATA = data.resultList;
        this.thirddataSource = new MatTableDataSource<PeriodicElement>(
          this.ELEMENT_DATA
        );
        if (this.paginator) this.thirddataSource.paginator = this.paginator;
      } else {
        this._alert.error(data.message)
      }
    },
      (error: any) => {
        this._alert.error('something went wrong');
      });
  }
}


export interface PeriodicElement { }

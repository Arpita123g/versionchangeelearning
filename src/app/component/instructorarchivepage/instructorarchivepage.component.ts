import { Component,Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RestapiService } from 'src/app/service/restapi.service';
import { MatPaginator } from '@angular/material/paginator';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { GlobalService } from 'src/app/service/global.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup,FormBuilder,FormControl ,Validators} from '@angular/forms';
import { LoginService } from 'src/app/service/auth/login.service';

@Component({
  selector: 'app-instructorarchivepage',
  templateUrl: './instructorarchivepage.component.html',
  styleUrls: ['./instructorarchivepage.component.scss']
})
export class InstructorarchivepageComponent implements OnInit {

  useremail: string = '';
  Emailsub: Subscription;
  ELEMENT_DATA: PeriodicElement[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

constructor(
  public _restapiservice: RestapiService, 
  private _alert:SnackbaralertService,
  private _global:GlobalService,
  public dialog:MatDialog
    ) {
      this.Emailsub = this._global.useremail.subscribe((data) => {
        
        this.useremail = data;
      });
    }

    displayedColumns: string[] = ['coursename','coursecode','studentregisteredno','totallicense','studentattemptcourse','archive','UnArchive button'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    // this.isData = false;
    let body = {
      email:this.useremail,
      caller: 'webinstructor',
      usermode: 'instructor',
      searchtype:'archive'
  
    };
    this._restapiservice.getinstructortablelist(body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          this.ELEMENT_DATA = data.resultList;
         
          this.dataSource = new MatTableDataSource<PeriodicElement>(
            this.ELEMENT_DATA
          );
          if (this.paginator) this.dataSource.paginator = this.paginator;
        }else{
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

  unarchive(e:any){
    const dialogRef = this.dialog.open(UpdateInstructorarchivepageComponent, {
      width: '400px',
      data: e,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
     });
    }

  ngOnDestroy() {
    this.Emailsub.unsubscribe();
  }

}

@Component({
  selector: 'updateinstructorarchivepage',
  templateUrl: 'updateinstructorarchivepage.component.html',
  styleUrls: ['instructorarchivepage.component.scss']
})

export class UpdateInstructorarchivepageComponent implements OnInit {
  Emailsub: Subscription;
  useremail: string = '';
  coursecodesub:Subscription
  code:string='';
  ELEMENT_DATA: PeriodicElement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor(
    private _global:GlobalService,
    public _restapiservice: RestapiService,
    private _alert:SnackbaralertService,
    public form:FormBuilder,
    private _login: LoginService,
    public dialog:MatDialog,
    public dialogRef:MatDialogRef<UpdateInstructorarchivepageComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { 
    this.Emailsub = this._global.useremail.subscribe((data) => {
    
      this.useremail = data;
    });
    this.coursecodesub = this._global.coursecode.subscribe((data:any)=>{
      this.code = data;
    })
  }
  
  
  archiveorunarchive!:FormGroup
  ngOnInit(): void {
      
     this.buildform();
  }

  public buildform(){
    // this.archiveorunarchive = this.form.group({
    //   changepassword:[this.data.userRegister.password]
    // })
  }
//don't delete this commented line
  
confirm(ok:boolean){
  
    let body = {
        instructorpanelid: this.data.instructorpanelid,
        archiveflag : 'no',
        deletedflag:this.data.deletedflag,
        totallicenseleft: this.data.totallicenseleft,
        studentcourseattempts : this.data.studentcourseattempts,
        noofstudentregistered:this.data.noofstudentregistered,
        action: 'update',
        status: 'active',
        caller:'webinstructor',
        usermode:'instructor',
        email:this.useremail,
        
    
    };
    
    this._restapiservice.updateInstructor(body).subscribe((data: any)=>{
      if(data.status=='Success'){
        this.dialogRef.close(this.data);
      }else{
        this._alert.error(data.status);
      }
   },
  (error:any) => {
    sessionStorage.removeItem('islogin');
    sessionStorage.removeItem('mobile');
    
  })
}
ngOnDestroy() {
  this.Emailsub.unsubscribe();
  

}

}
export interface PeriodicElement{}


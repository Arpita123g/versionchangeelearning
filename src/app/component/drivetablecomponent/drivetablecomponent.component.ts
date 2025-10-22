import { Component,Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/service/auth/login.service';
import { MatPaginator } from '@angular/material/paginator';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-drivetablecomponent',
  templateUrl: './drivetablecomponent.component.html',
  styleUrls: ['./drivetablecomponent.component.scss'],
  standalone: true,
  imports: [MatPaginatorModule, MatCardModule, MatTableModule]
})
export class DrivetablecomponentComponent implements OnInit {
  displayedColumns: string[] = ['studentmail', 'instructormail', 'gamename', 'coursecode','createdat', 'status']
  dataSource = new MatTableDataSource<PeriodicElement>();
  
  ELEMENT_DATA: PeriodicElement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    public _loginservice: LoginService,
    private _alert:SnackbaralertService,
    private _router: Router,
    private route: ActivatedRoute
   // @Inject(MAT_DIALOG_DATA) public mailid: any,
  ) { }

  ngOnInit(): void {
    let mailid = this.route.snapshot.paramMap.get("mailid");
    this.fetchTableData(mailid);
  }

  fetchTableData(mailid:any){
      let searchtype = "driveemail";
      let searchcontent = mailid
      let address = "/maillog/fetchdrivemaillog"
     
      this._loginservice.fetchDriveConfigData(address,searchtype,searchcontent,'').subscribe((data: any) => {
          if (data.status == 'Success') {
            console.log("output",data.resultList);
            this.ELEMENT_DATA = data.resultList;
            this.dataSource = new MatTableDataSource<PeriodicElement>(
              this.ELEMENT_DATA
            );
            if (this.paginator) this.dataSource.paginator = this.paginator;
          }else{
            this._alert.error(data.message)
          }
        },
        (error: any) => {
          this._alert.error('something went wrong');
        }
      );
    }

 

}
export interface PeriodicElement { }

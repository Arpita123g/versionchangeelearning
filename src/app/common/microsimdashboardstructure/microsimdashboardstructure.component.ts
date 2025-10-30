import { Component, OnInit, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { CdkTableModule } from '@angular/cdk/table';

import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { PasswordupdateComponent } from '../passwordupdate/passwordupdate.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-microsimdashboardstructure',
  standalone: true,
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    // PasswordupdateComponent,
  ],
  templateUrl: './microsimdashboardstructure.component.html',
  styleUrls: ['./microsimdashboardstructure.component.scss'],
})
export class MicrosimdashboardstructureComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['Name', 'email', 'Password', 'realtimeview', 'currentround', 'Logs'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  ELEMENT_DATA: PeriodicElement[] = [];

  instructorcarddetails: any = {};
  private Instructorcarddetailssub!: Subscription;

  private api = inject(ApiService);
  private global = inject(GlobalService);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.Instructorcarddetailssub = this.global.instructorcarddetails.subscribe((data) => {
      this.instructorcarddetails = data;
      this.getfetchdata('all', this.instructorcarddetails.coursecode);
    });
  }

  // passwordchange(element: any): void {
  //   const dialogRef = this.dialog.open(PasswordupdateComponent, {
  //     width: '50%',
  //     data: element,
  //     panelClass: 'achivemodal',
  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     this.getfetchdata('all', this.instructorcarddetails.coursecode);
  //   });
  // }

  passwordchange(element: PeriodicElement): void {
    console.log('Opening dialog with:', element.userRegister);
  
    const dialogRef = this.dialog.open(PasswordupdateComponent, {
      width: '40%',
      data: { userRegister: element.userRegister }, // ✅ pass the correct shape
      panelClass: 'achivemodal',
      // panelClass: 'centertop-dialog',
      position: { top: '20px' },
    });
  
    dialogRef.afterClosed().subscribe(() => {
      this.getfetchdata('all', this.instructorcarddetails.coursecode);
    });
  }
  

  getfetchdata(searchtype: string, searchcontent: string): void {
    if (searchtype === 'all') {
      searchtype = 'coursename';
    }

    this.api.getStudentDetails(searchtype, searchcontent).subscribe({
      next: (data: any) => {
        if (data.status === 'Success' && Array.isArray(data.resultList)) {
          this.ELEMENT_DATA = data.resultList;
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }
        }
      },
      error: (err: any) => {
        console.error('Error fetching student details:', err);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.Instructorcarddetailssub) {
      this.Instructorcarddetailssub.unsubscribe();
    }
  }
}

export interface PeriodicElement {
  userRegister: {
    username: string;
    email: string;
    password: string;
  };
  numberofattemptsleft: number;
  previousassignedattempts: number;
}

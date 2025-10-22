import { Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/service/global.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { LoginService } from 'src/app/service/auth/login.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-instructorregistercount',
  templateUrl: './instructorregistercount.component.html',
  styleUrls: ['./instructorregistercount.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatStepperModule,
    MatRadioModule,
    MatCardModule,
    FormsModule
  ]
})
export class InstructorregistercountComponent implements OnInit {
  private readonly _restapiservice = inject(RestapiService);
  private readonly _global = inject(GlobalService);
  private readonly _alert = inject(SnackbaralertService);
  private readonly _login = inject(LoginService);
  private readonly dialog = inject(MatDialog);

  private emailSub: Subscription;
  private coursecodeSub: Subscription;
  private studentspreadSheetSub: Subscription;
  private currenttokenSub: Subscription;

  useremail = signal<string>('');
  coursecode = signal<string>('');
  studentspreadsheetid = signal<string>('');
  currenttoken = signal<string>('');
  checkloading = signal<boolean>(true);
  searchFlag = signal<string>('all');

  ELEMENT_DATA = signal<PeriodicElement[]>([]);
  displayedColumns = signal<string[]>(['studentname', 'studentmailid', 'noofattempts', 'createdat']);
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.emailSub = this._global.useremail.subscribe((data) => {
      this.useremail.set(data);
    });
    this.coursecodeSub = this._global.coursecode.subscribe((data) => {
      this.coursecode.set(data);
    });
    this.currenttokenSub = this._global.currenttoken.subscribe((data) => {
      this.currenttoken.set(data);
    });
    this.studentspreadSheetSub = this._global.studentspreadsheetid.subscribe((data) => {
      this.studentspreadsheetid.set(data);
    });
  }

  ngOnInit(): void {
    this.getTableData('coursename');
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  selected(value: string) {
    this.getTableData(value);
  }

  getTableData(searchtype: string) {
    const searchType = searchtype === 'all' ? 'coursename' : searchtype;
    const body = {
      email: this.useremail(),
      caller: 'webinstructor',
      usermode: 'instructor',
      searchtype: searchType,
      searchcontent: this.coursecode()
    };

    this._restapiservice.getStudentDetails(body).subscribe({
      next: (data: any) => {
        if (data.status === 'Success') {
          this.ELEMENT_DATA.set(data.resultList);
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA());
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }
          this.checkloading.set(false);
        } else {
          this.checkloading.set(false);
          this._alert.error(data.message);
        }
      },
      error: () => {
        this.checkloading.set(false);
        this._alert.error('Something went wrong');
      }
    });
  }

  ngOnDestroy() {
    this.coursecodeSub?.unsubscribe();
    this.emailSub?.unsubscribe();
    this.studentspreadSheetSub?.unsubscribe();
    this.currenttokenSub?.unsubscribe();
  }

  public onRadioChange(value: any) {
    const selectedValue = value && value.value ? value.value : value;
    this.searchFlag.set(selectedValue);
    this.selected(selectedValue);
  }
}

export interface PeriodicElement {}


import { Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RestapiService } from 'src/app/service/restapi.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/service/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructorprofile',
  templateUrl: './instructorprofile.component.html',
  styleUrls: ['./instructorprofile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule
  ]
})
export class InstructorprofileComponent implements OnInit {
  private readonly _global = inject(GlobalService);
  private readonly _alert = inject(SnackbaralertService);
  private readonly _restapiservice = inject(RestapiService);

  private emailSub: Subscription;
  private passwordSub: Subscription;

  useremail = signal<string>('');
  userpassword = signal<string>('');
  instructorprofilegroup!: FormGroup;
  ELEMENT_DATA = signal<PeriodicElement[]>([]);
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.emailSub = this._global.useremail.subscribe((data) => {
      this.useremail.set(data);
    });
    this.passwordSub = this._global.userpassword.subscribe((data) => {
      this.userpassword.set(data);
    });
  }

  ngOnInit(): void {
    // this.getinstructordetails();
  }

  saveinstructorprofile() {
    if (this.instructorprofilegroup.valid) {
      const body = {
        email: this.instructorprofilegroup.value.instructormailid
      };

      this._restapiservice.searchmailid(body).subscribe({
        next: (data: any) => {
          if (data.status === 'Success') {
            this.ELEMENT_DATA.set(data.resultList);
            this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA());
            if (this.paginator) {
              this.dataSource.paginator = this.paginator;
            }
          } else {
            this._alert.error(data.message);
          }
        },
        error: () => {
          this._alert.error('Something went wrong');
        }
      });
    } else {
      this._alert.error('Please fill all required fields');
    }
  }

  ngOnDestroy() {
    this.emailSub?.unsubscribe();
    this.passwordSub?.unsubscribe();
  }
}

export interface PeriodicElement {}

import { ChangeDetectorRef, Component, DestroyRef, Inject, OnInit, ViewChild, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from '../../../AbstractComponent';
import { LoginService } from '../../../service/auth/login.service';
import { ApiService } from '../../../service/backendgameapi/api.service';
import { GlobalService } from '../../../service/global.service';
import { RestapiService } from '../../../service/restapi.service';
import { SharedserviceService } from '../../../service/sharedservice.service';
import { SnackbaralertService } from '../../../service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-aifeedback',
  templateUrl: './aifeedback.component.html',
  styleUrls: ['./aifeedback.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,          // 👈 needed for [(ngModel)]
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule
  ],
})
export class AifeedbackComponent implements OnInit {
  isChecked: boolean = false;
  dialogresult: boolean = true;
  selectedRound: [] = [];
  text: string = 'I Agree to Terms & Conditions';
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  rounds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  dropdownvalue: any = [];
  selectedattemptValue: number = 1;
  visibilitySelected: boolean = false;
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['Name', 'email', 'feedback',];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  Instructorcarddetailssub: Subscription;
  instructorcarddetails: any = [];
  round: any = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
  roundvisible: any = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
  aifeedbackmasterid: number = 0;
  disablecheckbox = true;
  disabledbasedcheckbox = [false, false, false, false, false, false, false, false, false, false];
  markdownText: any = "";
  checkloading: boolean = false;
  remainingCredit: Number = 0;
  Remainingcreditsub: Subscription;
  leftroundnumber: any = [];

 
  constructor(
    private cdr: ChangeDetectorRef,
    private _alert: SnackbaralertService,
    private _api: ApiService,
    private _global: GlobalService,
    private dialog: MatDialog,

  ) {
    this.Instructorcarddetailssub = this._global.instructorcarddetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
    this.Remainingcreditsub = this._global.remainingcredit.subscribe((data) => {
      this.remainingCredit = data;
    });

  }




  ngOnInit(): void {
    if (localStorage.getItem("checkbox") == "true") {
      this.isChecked = true;
      this.disablecheckbox = false;
    } else {
      this.isChecked = false;
    }
    this.checkloading = true;

    if (this.instructorcarddetails.studentcourseattempts > 0) {
      for (let i = 1; i < this.instructorcarddetails.studentcourseattempts + 1; i++) {
        this.dropdownvalue[i - 1] = i
      }
    }
    if (this.remainingCredit == -1) {
      this.remainingCredit = this.instructorcarddetails.aicreditmicrosimleft;
      this._global.remainingcredit.next(Number(this.remainingCredit));

    }
    this.getFeedbackstudentList(this.selectedattemptValue);

  }

  getFeedbackstudentList(round: number) {
    this.checkloading = true;
    this._api.fetchfeedback(this.instructorcarddetails.coursecode, '', 'instructor', round).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.ELEMENT_DATA = data.resultList;
            this.dataSource = new MatTableDataSource<PeriodicElement>(
              this.ELEMENT_DATA
            );
            if (this.paginator) this.dataSource.paginator = this.paginator;

          } else {
            this.dataSource = new MatTableDataSource<PeriodicElement>([]);
            this.checkloading = false;
          }
          this.getaiFeedbackList();
        }

      }, (error: any) => {
        this.dataSource = new MatTableDataSource<PeriodicElement>([]);
        this.checkloading = false;
      })
  }

  getaiFeedbackList() {
    this._api.fetchaiFeedback(this.instructorcarddetails.coursecode).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.aifeedbackmasterid = data.resultList[0].aifeedbackmasterid;
            for (let i = 1; i < 11; i++) {
              let roundkey = "round" + i;
              let visiblekey = "round" + i + "sv";
              this.round[i] = data.resultList[0][roundkey];
              this.roundvisible[i] = data.resultList[0][visiblekey];
              if (this.round[i] == "yes") {
                this.disablecheckbox = false;
                this.isChecked = true;
                this.disabledbasedcheckbox[i] = false;
              }
            }

            if (Number(this.remainingCredit) <= 0) {
              for (let i = 1; i < 11; i++) {
                if (this.round[i] == 'yes') {
                  this.disabledbasedcheckbox[i] = false;
                } else {
                  this.disabledbasedcheckbox[i] = true;
                }
              }
            } else {
              for (let i = 0; i < 11; i++) {
                this.disabledbasedcheckbox[i] = false;
              }
            }

            if (this.isChecked != true) {
              for (let i = 1; i < 11; i++) {
                this.disabledbasedcheckbox[i] = true;
              }
            }
          }
          this.checkloading = false;
        }
      }, (error: any) => {
        this.checkloading = false;
      })
  }

  feedbackcheckboxclick() {
    if (Number(this.remainingCredit) > 0) {
      for (let i = 0; i < 11; i++) {
        this.disabledbasedcheckbox[i] = false;
      }

    }

  }






  updatefeedback(type: string, round: number, event: any) {
    this.checkloading = true;
    this.fetchMaxround(type, round, event);
  }

  fetchMaxround(type: string, roundnumber: number, event: any) {
    if (type == 'round') {
      if (event.target.checked == true) {
        this.round[roundnumber] = "yes";
      } else {
        this.round[roundnumber] = "no";
      }
    } else if (type == 'visibility') {
      if (event.target.checked == true) {
        this.roundvisible[roundnumber] = "yes";
      } else {
        this.roundvisible[roundnumber] = "no";
      }
    }
    this._api.fetchMaxRound(this.instructorcarddetails.coursecode).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if ((Number(this.remainingCredit) <= 0) && (type == 'round') && (event.target.checked == true)) {
            this.checkloading = false;
            this.round[roundnumber] = "no";
            this.cdr.detectChanges();
            this._alert.error("remaining credit is zero")
          }
          if (data.resultList!= null) {
            let leftround = Number(data.resultList[0].numberofattempts);
            for (let i = 0; i < leftround; i++) {
              this.leftroundnumber[i] = i + 1
            }
            if (this.leftroundnumber.includes(roundnumber)) {
              if (event.target.checked == true) {
                if (type == 'round') {
                  this.round[roundnumber] = "no";
                } else {
                  this.roundvisible[roundnumber] = "no";
                }

                this._alert.error("The round is already over, AI Assistant can't be enabled.");
              } else {
                if (type == 'round') {
                  this.round[roundnumber] = "yes";
                } else {
                  this.roundvisible[roundnumber] = "yes";
                }
                this._alert.error("The round is already over, AI Assistant can't be disabled.");
              }
              this.cdr.detectChanges();
              this.checkloading = false;

            } else {
              this.updateaifeedback(type, roundnumber, event);
            }
          } else {
            this.updateaifeedback(type, roundnumber, event);
          }

        }
      }, (error: any) => {
        this.checkloading = false;
      })
  }

  updateaifeedback(type: string, round: number, event: any) {
    if (type == 'round') {
      if (event.target.checked == true) {
        this.round[round] = 'yes';
        this.remainingCredit = Number(this.remainingCredit) - 1;
      } else {
        this.round[round] = 'no';
        this.roundvisible[round] = 'no';
        this.remainingCredit = Number(this.remainingCredit) + 1;
      }
      this._global.remainingcredit.next(Number(this.remainingCredit));

    } else {
      if (event.target.checked == true) {
        this.roundvisible[round] = 'yes';
      } else {
        this.roundvisible[round] = 'no';
      }
    }

    this._api.updateaiFeedback(this.round[1], this.round[2], this.round[3], this.round[4], this.round[5],
      this.round[6], this.round[7], this.round[8], this.round[9], this.round[10],
      this.roundvisible[1], this.roundvisible[2], this.roundvisible[3], this.roundvisible[4], this.roundvisible[5],
      this.roundvisible[6], this.roundvisible[7], this.roundvisible[8], this.roundvisible[9], this.roundvisible[10],
      this.instructorcarddetails.coursecode, this.instructorcarddetails.coursename, this.aifeedbackmasterid,
      Number(this.remainingCredit)).subscribe(
        (data: any) => {
          if (data.status == 'Success') {
            this.getaiFeedbackList();
          }
        }, (error: any) => {
          this.checkloading = false;
        })

  }





  getfetchdata(searchtype: String, searchcontent: String) {

    if (searchtype == "all") {
      searchtype = "coursename"
    }

    this._api.getStudentDetails(searchtype, searchcontent).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          this.ELEMENT_DATA = data.resultList;

          this.dataSource = new MatTableDataSource<PeriodicElement>(
            this.ELEMENT_DATA
          );
          if (this.paginator) this.dataSource.paginator = this.paginator;
          
        } else {
          
        }
      },
      (error: any) => {
        this.checkloading = false;
        // this._alert.error('something went wrong');
      }
    );
  }

  ngOnDestroy() {
    this.Instructorcarddetailssub.unsubscribe();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AiPopupFeedbackComponent, {
      panelClass: 'termsand_condition',
      disableClose: true,
      width: '60%',
      hasBackdrop: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }




}

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  email: string;
}

@Component({
  selector: 'app-aipopup',
  templateUrl: './aipopupfeedback.html',
  styleUrls: ['./aifeedback.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule,FormsModule,MatDialogContent],
})
export class AiPopupFeedbackComponent extends AbstractComponent {


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AiPopupFeedbackComponent>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.dialogRef.backdropClick().subscribe(() => {
      this.closeDialog();
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild,
  } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aiassesment',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatDialogModule, FormsModule],
  templateUrl: './aiassesment.component.html',
  styleUrls: ['./aiassesment.component.scss'],
})
export class AiassesmentComponent implements OnInit {
  dialogresult: boolean = true;
  isChecked: boolean = false;
  text: string = 'I Agree to Terms & Conditions';
  dropdownvalue: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  selectedattemptValue: number = 1;
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['Name', 'email', 'sentiment', 'response'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  Instructorcarddetailssub: Subscription;
  instructorcarddetails: any = [];
  aiassesmentmasterid: number = 0;
  disabledbasedcheckbox = [false, false, false, false, false, false, false, false, false, false];
  round: any = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
  markdownText: any = "";
  checkloading: boolean = false;
  remainingCredit: Number = 0;
  Remainingcreditsub: Subscription;
  disabledcheckbox: boolean = true;
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
    if(localStorage.getItem("checkbox")=="true"){
      this.isChecked = true;
      this.disabledcheckbox = false;
    }else{
      this.isChecked = false;
      this.disabledcheckbox = true;
    }
    this.checkloading = true;
    if (this.remainingCredit == -1) {
      this.remainingCredit = this.instructorcarddetails.aicreditmicrosimleft;
    }
    this._global.remainingcredit.next(Number(this.remainingCredit));

    if (this.instructorcarddetails.studentcourseattempts > 0) {
      for (let i = 1; i < this.instructorcarddetails.studentcourseattempts + 1; i++) {
        this.dropdownvalue[i - 1] = i

      }
    }

    this.getAssesmentstudentList(this.selectedattemptValue);
  }

  assesmentcheckboxclick(event:any) {
    if(event.target.checked == true){
      localStorage.setItem('checkbox', "true");
      this.disabledcheckbox = false;
    }else{
      localStorage.setItem('checkbox', "false");
    }
    
    if (Number(this.remainingCredit) > 0) {
      for (let i = 1; i < 11; i++) {
        this.disabledbasedcheckbox[i] = false;
      }
    }


  }
  openDialog() {
    const dialogRef = this.dialog.open(AiPopupAssesmentComponent, {
      panelClass: 'termsand_condition',
      disableClose: true,
      width: '100%',
      hasBackdrop: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  getAssesmentstudentList(round: number) {
    this.checkloading = true;
    this._api.fetchassessment(this.instructorcarddetails.coursecode, '', 'instructor', round,"coursecode").subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {
            this.ELEMENT_DATA = data.resultList;
            this.dataSource = new MatTableDataSource<PeriodicElement>(
              this.ELEMENT_DATA
            );
            if (this.paginator) this.dataSource.paginator = this.paginator;
            this.checkloading = false;
          } else {
            this.dataSource = new MatTableDataSource<PeriodicElement>([]);
            this.checkloading = false;

          }
          this.getAssesmentList();

        }

      }, (error: any) => {
        this.dataSource = new MatTableDataSource<PeriodicElement>([]);
        this.checkloading = false;
        // this._alert.error('something went wrong');
      }

    )
  }

  getAssesmentList() {

    this._api.fetchaiAssessment(this.instructorcarddetails.coursecode).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          this.aiassesmentmasterid = data.resultList[0].aiassessmentmasterid;
          for (let i = 1; i < 11; i++) {
            let datavalue = "round" + i;
            this.round[i] = data.resultList[0][datavalue];
            if (this.round[i] == "yes") {
              this.isChecked = true;
              this.disabledcheckbox = false;
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
          }
          else {
            for (let i = 1; i < 11; i++) {
              this.disabledbasedcheckbox[i] = false;
            }
          }
          if (this.isChecked != true) {
            for (let i = 1; i < 11; i++) {
              this.disabledbasedcheckbox[i] = true;
            }
          }
          this.checkloading = false;

        }

      }, (error: any) => {
        this.checkloading = false;
        // this._alert.error('something went wrong');
      }
    )
  }

  updateassesment(round: number, event: any) {
    this.checkloading = true;
    this.fetchMaxround(round, event);
  }

 
  fetchMaxround(roundnumber: number, event: any) {
    if (event.target.checked == true) {
      this.round[roundnumber] = "yes";
    } else {
      this.round[roundnumber] = "no";
    }
    this._api.fetchMaxRound(this.instructorcarddetails.coursecode).subscribe(
      (data: any) => {
        if (data.status == 'Success') {

          if (data.resultList != null) {
            let leftround = Number(data.resultList[0].numberofattempts);

            for (let i = 0; i < leftround; i++) {
              this.leftroundnumber[i] = i + 1
            }
console.log("leftround",this.leftroundnumber)

            if (this.leftroundnumber.includes(roundnumber)) {
              if (event.target.checked == true) {
                this.round[roundnumber] = "no";
                this._alert.error("The round is already over, AI Assistant can't be enabled.");
              } else {
                this.round[roundnumber] = "yes";
                this._alert.error("The round is already over, AI Assistant can't be disabled.");
              }
              this.cdr.detectChanges();

              this.checkloading = false;


            } else {
              this.updateaiassesment(roundnumber, event);
            }

          } else {
            this.updateaiassesment(roundnumber, event);
          }
        }
      }, (error: any) => {
        this.checkloading = false;
      })
  }

  updateaiassesment(round: any, event: any) {
    if (event.target.checked == true) {
      this.round[round] = "yes";
      this.disabledcheckbox = false;
      this.remainingCredit = Number(this.remainingCredit) - 1;
    } else {
      this.round[round] = "no";
      this.remainingCredit = Number(this.remainingCredit) + 1;
    }

    this._global.remainingcredit.next(Number(this.remainingCredit));
    if (Number(this.remainingCredit) <= 0) {
      for (let i = 1; i < 11; i++) {
        if (this.round[i] == 'yes') {
          this.disabledbasedcheckbox[i] = false;
          } else {
          this.disabledbasedcheckbox[i] = true;
        }
      }
    } else {
      for (let i = 1; i < 11; i++) {
        this.disabledbasedcheckbox[i] = false;
      }
    }



    this._api.updateaiAssessment(this.round[1], this.round[2], this.round[3], this.round[4], this.round[5],
      this.round[6], this.round[7], this.round[8], this.round[9], this.round[10], this.instructorcarddetails.coursecode,
      this.instructorcarddetails.coursename, this.aiassesmentmasterid, Number(this.remainingCredit)).subscribe(
        (data: any) => {
          if (data.status == 'Success') {
            this.checkloading = false;
          }
        }, (error: any) => {
          this.checkloading = false;
        }
      )
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
          this.getAssesmentList();
          // this.checkloading = false;
        } else {}
      },
      (error: any) => {
        this.checkloading = false;
        }
    );
  }

  //write api call checked terms and condition
  checkedTermsandCodition() {

  }

  ngOnDestroy() {
    this.Instructorcarddetailssub.unsubscribe();
  }

}

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
  email: string;
}

@Component({
  selector: 'app-ai-popup',
  standalone: true,
  imports: [CommonModule, MatDialogModule,FormsModule,MatDialogContent],
  templateUrl: './aipopupassesment.html',
  styleUrls: ['./aiassesment.component.scss'],
})
export class AiPopupAssesmentComponent extends AbstractComponent {


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AiPopupAssesmentComponent>) {
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
import { ChangeDetectorRef, Component, DestroyRef, Inject, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

interface CourseDetails {
  simulation: string;
  instructormailid: string;
  coursename: string;
  coursecode: string;
  coursedetailsid: string;
  primarycoursedetailsid: string;
}

interface Card {
  courseDetails: CourseDetails;
  coursename: string;
  primarycoursedetailsid: string;
}

@Component({
  selector: 'app-microsimcasemanagement',
  templateUrl: './microsimcasemanagement.component.html',
  styleUrls: ['./microsimcasemanagement.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ]
})
export class MicrosimcasemanagementComponent extends AbstractComponent {
  cardlistdata = signal<Card[]>([]);
  instructorcarddetails = signal<any>(null);
  private instructorcarddetailssub: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    override readonly _alert: SnackbaralertService,
    override readonly _api: ApiService,
    override readonly _global: GlobalService,
    private dialog: MatDialog,
    override readonly _router: Router,
    override readonly _login: LoginService,
    override readonly _restapiservice: RestapiService,
    private destroyRef: DestroyRef
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.instructorcarddetailssub = this._global.instructorcarddetails.subscribe((data) => {
      this.instructorcarddetails.set(data);
    });
  }

  override ngOnInit(): void {
    this.getTableData();
  }

  gotTocasemanagement(card: Card): void {
    this.checkloading = (true);
    this._global.casemanagementcoursedetails.next(card);

    const routeMap: { [key: string]: string } = {
      'Business Basics': 'auth/component/businesscasemanagement',
      'Product & Consumer': 'auth/component/consumercasemanagement',
      'Logistics': 'auth/component/logisticscasemanagement',
      'Change Management Module': 'auth/component/changemanagementcasemanagement',
      'Financial Analysis': 'auth/component/financialanalysiscasemanagement',
      'Promotions & Segments': 'auth/component/promotionscasemanagement',
      'Promotion & Segments': 'auth/component/promotionscasemanagement',
      'Sales & Target': 'auth/component/salestargetcasemanagement',
      'Portfolio Management': 'auth/component/portfoliocaseheader',
      'Value Chain': 'auth/component/valuechaincaseheader',
      'CVP Analysis': 'auth/component/cvpcaseheader',
      'Accounting': 'auth/component/accountingcaseheader',
      'Accounting Arabic': 'auth/component/accountingarabiccaseheader',
      'Pricing': 'auth/component/pricingcaseheader',
      'Mergers & Acquisition': 'auth/component/mergersacquisitioncaseheader',
      'HRP': 'auth/component/hrpcaseheader',
      'Design Thinking': 'auth/component/designthinkingcaseheader',
      'CRM': 'auth/component/crmcaseheader',
      'Innovation': 'auth/component/innovationcaseheader',
      'Ordering Basics': 'auth/component/orderingbasicscaseheader',
      'HRM_Fintech': 'auth/component/hrmcasemanagement',
      'STP': 'auth/component/stpcaseheader',
      'IT Management': 'auth/component/itcasemanagementheader',
      'Ecommerce': 'auth/component/ecommerccaseeheader',
      'Capital Budgeting': 'auth/component/capitalbudgetingcaseheader',
      'Project Management': 'auth/component/projectmanagementcaseheader'
    };

    const route = routeMap[card.courseDetails.simulation];
    if (route) {
      this._router.navigate([route]);
    }
  }

  getTableData(): void {
    this._api.fetchassigncaselist(
      this.instructorcarddetails()?.courseDetails?.simulation,
      this.instructorcarddetails()?.coursedetailsid
    ).subscribe({
      next: (data: any) => {
        if (data.status === "Success") {
          this.cardlistdata.set(data.resultList);
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        console.error('Error fetching case list:', error);
      }
    });
  }

  primarygameselect(card: Card): void {
    const dialogRef = this.dialog.open(PrimarycourseselectpopupComponent, {
      data: {
        instructormailid: card.courseDetails.instructormailid,
        coursename: card.coursename,
        coursecode: this.instructorcarddetails()?.coursecode,
        coursedetailsid: this.instructorcarddetails()?.coursedetailsid,
        primarycoursedetailsid: card.primarycoursedetailsid
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getTableData();
    });
  }

  // CopyGame1(card: Card): void {
  //   const dialogRef = this.dialog.open(GamecopyComponent, {
  //     width: '40%',
  //     data: card,
  //     position: {
  //       top: "20px"
  //     },
  //     // panelClass: 'copygame-dialog'
  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     this.getTableData();
  //   });
  // }

  //Copy the coursename
  CopyGame1(card: any) {
    const dialogRef = this.dialog.open(GamecopyComponent, {
      width: '40%',
      data: card,
      position: {
        top: "20px",
      },
      panelClass: 'copygame-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  override ngOnDestroy(): void {
    this.instructorcarddetailssub?.unsubscribe();
  }
}

@Component({
  selector: 'app-Primarycourseselectpopup',
  templateUrl: './Primarycourseselectpopup.html',
  styleUrls: ['./microsimcasemanagement.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class PrimarycourseselectpopupComponent {
  private _api = inject(ApiService);
  public dialogRef = inject(MatDialogRef<PrimarycourseselectpopupComponent>);
  data = inject<{
    instructormailid: string;
    coursename: string;
    coursecode: string;
    coursedetailsid: string;
    primarycoursedetailsid: string;
  }>(MAT_DIALOG_DATA);

  primaryselect(): void {
    this._api.courseSetPrimary(
      this.data.instructormailid,
      this.data.coursename,
      this.data.coursecode,
      this.data.coursedetailsid,
      Number(this.data.primarycoursedetailsid)
    ).subscribe({
      next: (data: any) => {
        if (data.status === "Success") {
          this.dialogRef.close(this.data);
        }
      },
      error: (error: any) => {
        console.error('Error setting primary course:', error);
      }
    });
  }
}

@Component({
  selector: 'app-gamecopy',
  templateUrl: './gamecopy.html',
  styleUrls: ['./microsimcasemanagement.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class GamecopyComponent extends AbstractComponent {
  instructorpanelid: string = '';
  coursename: string = '';
  isButtonDisabled: boolean = false;
  protected data = inject(MAT_DIALOG_DATA);
  protected dialogRef = inject(MatDialogRef<GamecopyComponent>);
  myForm = new FormGroup({
    coursename: new FormControl(''),

  });
  constructor(
    override readonly _alert: SnackbaralertService,
    override readonly _api: ApiService,
    override readonly _global: GlobalService,
    override readonly _router: Router,
    override readonly _login: LoginService,
    override readonly _restapiservice: RestapiService,
    private destroyRef: DestroyRef
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;

  }

  CopyGame() {
    this.checkloading = true;
    const formData = this.myForm.value;

    if (formData.coursename == "") {
      this._alert.error("Enter a name for the copied case");
      return;
    }

    this.isButtonDisabled = true;

    // Determine values based on copy source
    const copycasefrom = this.data.casename === 'cesimcase' ? 'yes' : 'no';
    const primarycoursedetailsid = this.data.casename === 'cesimcase' ? 0 : this.data.card.primarycoursedetailsid;

    this._api.copyCourseData(
      this.data.card,
      formData.coursename?.trim() ?? '',
      primarycoursedetailsid,
      copycasefrom,
      this.data.casename,
    ).subscribe(
      (data: any) => {
        this.checkloading = false;
        if (data.status == "Success") {
          this.checkloading = false;
          this.dialogRef.close(this.data);

        } else {
          this.isButtonDisabled = false;
          this.checkloading = false;

          this._alert.error(data.message);
        }
      },
      (error: any) => {
        this.checkloading = false;
        this.isButtonDisabled = false;
      }
    );
  }

}
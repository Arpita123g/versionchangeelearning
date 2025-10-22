import { ChangeDetectorRef, Component, Inject, Input, OnInit, inject, signal } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { GamecopyComponent, MicrosimcasemanagementComponent, PrimarycourseselectpopupComponent } from '../microsimcasemanagement/microsimcasemanagement.component';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { DeleteComponent } from '../delete/delete/delete.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sharecased',
  templateUrl: './sharecased.component.html',
  styleUrls: ['./sharecased.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MicrosimcasemanagementComponent,
  ]
})
export class SharecasedComponent implements OnInit {
  cardlistdata: any = [];
  cardlistdataNew: any = [];

  Instructorcarddetailssub: Subscription;
  instructorcarddetails: any = [];
  checkloading: boolean = true;
  @Input() selectedTab: string = '';
  selectedLanguage: string[] = [];
  constructor(public _api: ApiService,
    private _global: GlobalService,
    public dialog: MatDialog,
    private _router: Router,
    private _alert: SnackbaralertService,
    private cdr: ChangeDetectorRef,
  ) {
    this.Instructorcarddetailssub = this._global.instructorcarddetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }
  ngOnInit(): void {
    this.checkloading = true;
    if (this.selectedTab == 'cesimcase') {
      this.getTableDataForMaster()

    } else {
      this.getTableData();

    }
  }
  ngOnDestroy() {
    this.Instructorcarddetailssub.unsubscribe();
  }
  language: string[] = [
    'English',
    'Hindi',
    'French',
    'Spanish',

  ];


  getTableDataForMaster() {
    this._api.fetchaCaseFromMaster(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe((data: any) => {
      if (data.status == "Success") {


        this.cardlistdata = data.resultList;
        this.cardlistdata.forEach((card: any) => {
          card.isAssigned = this.computeIsAssigned(card);
        });
        this.checkloading = false;
        console.log("total data click on instructor card", this.cardlistdata)
      } else {
        this.checkloading = false;
      }
    })
    this.checkloading = false;


  }
 
  selectedPrimaryCase: string = "";

  computeIsAssigned(carddata: any): boolean {
    if (!this.instructorcarddetails?.courseDetails) {
      return false;
    }

    if (
      this.instructorcarddetails.courseDetails.coursename?.trim().toLowerCase() ===
      this.instructorcarddetails.courseDetails.primarycoursename?.trim().toLowerCase()
    ) {
      return (
        this.instructorcarddetails.courseDetails.createdcasename?.trim().toLowerCase() ===
        carddata?.cesimcasename?.trim().toLowerCase()
      );
    }
    return false;
  }

  

  getTableData() {
    this._api.fetchassigncaselistforshared(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.coursedetailsid, this.selectedTab).subscribe((data: any) => {
      if (data.status == "Success") {
        this.cardlistdata = data.resultList;
        this.cardlistdata.forEach((card: any) => {
          card.isAssignedForYourCase = this.computeIsAssignedForYourCase(card);

        });

        this.checkloading = false;
      } else {
        this.checkloading = false;
      }
    })
    this.checkloading = false;
  }



  computeIsAssignedForYourCase(carddata: any): boolean {
    if (!this.instructorcarddetails?.courseDetails) {
      return false;
    }

    if (this.instructorcarddetails?.courseDetails.primarycoursename.trim().toLowerCase() ===
      carddata.coursename.trim().toLowerCase()) {
      this.selectedPrimaryCase = carddata.coursename.trim().toLowerCase();
      return true;
    }
    else if (this.instructorcarddetails.courseDetails.coursename?.trim().toLowerCase() ===
      this.instructorcarddetails.courseDetails.primarycoursename?.trim().toLowerCase()) {

      if (this.instructorcarddetails.courseDetails.createdcasename?.trim().toLowerCase() ===
        carddata?.coursename?.trim().toLowerCase()) {
        this.selectedPrimaryCase = carddata?.coursename.trim().toLowerCase();
        return true;
      } else {
        return false;
      }
    }
    return false;
  }


  //Copy the coursename
  CopyGame1(card: any, casename: string) {
    const dialogRef = this.dialog.open(GamecopyComponent, {
      width: '40%',
      data: { card, casename },
      position: {
        top: "20px",
      },
      panelClass: 'copygame-dialog',

    });

    dialogRef.afterClosed().subscribe((result) => {
      if (this.selectedTab == 'cesimcase') {
        this.getTableDataForMaster()

      } else {
        this.getTableData();

      }
    });
  }


  gotTocasemanagement(card: any) {
    localStorage.setItem('selectedTab', this.selectedTab);
  this.checkloading = true;

  if (this.selectedTab === 'sharedcase') {
    card.defaultcase = 'yes';
  }

  this._global.casemanagementcoursedetails.next(card);

  const routes: Record<string, string> = {
    'Business Basics': 'auth/businesscasemanagement/component',
    'Product & Consumer': 'auth/consumercasemanagement/component',
    'Product & Consumer New': 'auth/consumercasemanagementnew/component',
    'Logistics': 'auth/logisticscasemanagement/component',
    'Change Management Module': 'auth/changemanagementcasemanagement/component',
    'Financial Analysis': 'auth/financialanalysiscasemanagement/component',
    'Promotions & Segments': 'auth/promotionscasemanagement/component',
    'Promotion & Segments': 'auth/promotionscasemanagement/component',
    'Promotions & Segments New': 'auth/promotionscasemanagementnew/component',
    'Sales & Target': 'auth/salestargetcasemanagement/component',
    'Portfolio Management': 'auth/portfoliocaseheader/component',
    'Value Chain': 'auth/valuechaincaseheader/component',
    'Value Chain New': 'auth/valuechaincase/component',
    'CVP Analysis': 'auth/cvpcaseheader/component',
    'Accounting': 'auth/accountingcaseheader/component',
    'Accounting Arabic': 'auth/accountingarabiccaseheader/component',
    'Pricing': 'auth/pricingcaseheader/component',
    'Mergers & Acquisition': 'auth/mergersacquisitioncaseheader/component',
    'HRP': 'auth/hrpcaseheader/component',
    'Design Thinking': 'auth/designthinkingcaseheader/component',
    'CRM': 'auth/crmcaseheader/component',
    'Innovation': 'auth/innovationcaseheader/component',
    'Ordering Basics': 'auth/orderingbasicscaseheader/component',
    'HRM_Fintech': 'auth/hrmcasemanagement/component',
    'STP': 'auth/stpcaseheader/component',
    'IT Management': 'auth/itcasemanagementheader/component',
    'Ecommerce': 'auth/ecommerccaseeheader/component',
    'Capital Budgeting': 'auth/capitalbudgetingcaseheader/component',
    'Project Management': 'auth/projectmanagementcaseheader/component'
  };

  const route = routes[card.simulationname];
  if (route) {
    this._router.navigate([route]);
  }
  }






  delete(data: any) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {
        heading: "Delete",
        body: "Are you sure about deleting the case?"
      },
      position: {
        top: "20px",
      },
      panelClass: 'copygame-dialog',
    });
    dialogRef.afterClosed().subscribe((result) => {

      if (result == true) {

        this._api.deleteyourcase(data.courseDetails.coursecode, data.primarycoursedetailsid
          , data.simulationname, data.coursename
        ).subscribe((data: any) => {

          if (data.status == "Success") {
            this.getTableData();
          } else {
            dialogRef.close();
            this._alert.error("The case cannot be deleted as it's ongoing or played by a user previously");

          }
        })
      } else {
        dialogRef.close();
      }
    });
  }



  goTosharedPopup(carddata: any) {
    const dialogRef = this.dialog.open(SharedpopupComponent, {
      width: "50%",
      data: carddata,
      position: {
        top: "20px",
      },
      panelClass: 'copygame-dialog',
    })
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  handleCheckboxClick(event: Event, card: any) {
    (event.target as HTMLInputElement).checked = card.isAssignedForYourCase;

    if (this.selectedPrimaryCase !== card.coursename.trim().toLowerCase()) {
      this.primarygameselect(card, event);
    } else {
      this._alert.error("It is already selected as primary");
      (event.target as HTMLInputElement).checked = true;
      card.isAssignedForYourCase = true;
      this.cdr.detectChanges();
    }
  }

  primarygameselect(card: any, event?: Event) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {
        heading: "Case Assign",
        body: "Are you sure about assigning this case study to your course?"
      },
      position: {
        top: "20px",
      },
      panelClass: 'copygame-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._api.courseSetPrimary(
          card.courseDetails.instructormailid,
          card.coursename,
          this.instructorcarddetails.coursecode,
          this.instructorcarddetails.coursedetailsid,
          card.primarycoursedetailsid
        ).subscribe((data: any) => {
          if (data.status == "Success") {
            this.cardlistdata.forEach((c: any) => c.isAssignedForYourCase = false);
            card.isAssignedForYourCase = true;
            this.instructorcarddetails.courseDetails.primarycoursename = card.coursename;
            this._global.instructorcarddetails.next(this.instructorcarddetails);
            this.cdr.detectChanges();
            if (this.selectedTab === 'cesimcase') {
              this.getTableDataForMaster();
            } else {
              this.getTableData();
            }
          }
        });
      } else {
        if (event) {
          (event.target as HTMLInputElement).checked = false;
        }
      }
    });
  }

  languageclick(carddata: any, event: any) {
    let body = {
      email: carddata.courseDetails.instructormailid,
      callar: "webinsructor",
      coursecode: this.instructorcarddetails.coursecode,
      coursedetailsid: this.instructorcarddetails.coursedetailsid,
      coursename: carddata.coursename,
      primarycoursedetailsid: carddata.primarycoursedetailsid,
      usermode: "instructor",
      primarygamelanguage: (event.target as HTMLSelectElement).value,
      // action: "save"


    }
    let apiname = '/primarycourse/updategamelaguage'
    this._api.updategamelanguage(body, apiname)
      .subscribe({
        next: (data: any) => {
          if (data.status == "Success") {

          } else {
          }
        },
        error: (error: any) => {
          // this.driveerrorLog(error, apiname);
        }
      });
  }
}

@Component({
  selector: 'app-sharedpopup',
  templateUrl: './sharedpopup.html',
  styles: [`
    .textareamsg {
      width: 100%;
      height: 100px;
      padding: 4px;
    }
    .case-t {
      display: flex;
      align-items: center;
      p {
        margin-bottom: 0px;
        margin-left: 10px;
      }
    }
    .input-style {
      height: 18px;
      width: 18px;
      margin-left: 10px;
    }
    .matcloseo {
      background-color: black;
      .card-title {
        color: white;
        margin: 0;
        padding: 0.5rem 0.8rem;
      }
    }
    .button-group {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1rem;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
  ]
})
export class SharedpopupComponent {
  Instructorcarddetailssub: Subscription;
  instructorcarddetails: any = [];
  description: String = "";

  isChecked: boolean = false;


  constructor(
    public _api: ApiService,
    private _global: GlobalService,
    private _alert: SnackbaralertService,

    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SharedpopupComponent>

  ) {
    this.Instructorcarddetailssub = this._global.instructorcarddetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.Instructorcarddetailssub.unsubscribe();
  }
  onCheckboxChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.isChecked = inputElement.checked; // Ensures it is a boolean
  }

  assignsharedcase() {
    this.description = (document.querySelector('.textareamsg') as HTMLTextAreaElement).value;
    if ((this.description != '') && (this.isChecked)) {
      this._api.setassharedcase(this.data.primarycoursedetailsid, this.description, this.isChecked ? "checked" : "unchecked").subscribe((data: any) => {
        if (data.status == "Success") {
          this.closeDialog();
        }
      })
    } else {
      this._alert.error("Input field required");
    }


  }

  closeDialog() {
    this.dialogRef.close();
  }

}



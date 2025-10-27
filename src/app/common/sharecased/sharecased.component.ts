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
  // isCaseAssigned(carddata: any): boolean {
  //   return (
  //     carddata?.asprimary === 'yes' &&
  //     this.instructorcarddetails?.courseDetails?.createdcasename?.trim().toLowerCase() ===
  //     carddata?.cesimcasename?.trim().toLowerCase()
  //   );
  // }

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

  // isCaseAssigned(carddata: any): boolean {
  //   // First, guard for null/undefined instructorcarddetails
  //   if (!this.instructorcarddetails?.courseDetails) {
  //     return false;
  //   }

  //   // Check if coursename and primarycoursename are equal
  //   if (
  //     this.instructorcarddetails.courseDetails.coursename?.trim().toLowerCase() ===
  //     this.instructorcarddetails.courseDetails.primarycoursename?.trim().toLowerCase()
  //   ) {
  //     // THEN do your match
  //     return (
  //       this.instructorcarddetails.courseDetails.createdcasename?.trim().toLowerCase() ===
  //       carddata?.cesimcasename?.trim().toLowerCase()
  //     );
  //   }

  //   // If coursename and primarycoursename are not equal
  //   return false;
  // }

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
    if (this.selectedTab == 'sharedcase') {
      card.defaultcase = 'yes'
    }
    // this._global.casemanagementcoursedetails.next(card)
    // if (card.courseDetails.simulation == 'Business Basics') {
    //   this._router.navigate(['auth/component/businesscasemanagement'])
    // } else if (card.courseDetails.simulation == 'Product & Consumer') {
    //   this._router.navigate(['auth/component/consumercasemanagement'])
    // }
    // if (card.courseDetails.simulation == 'Product & Consumer New') {
    //   this._router.navigate(['auth/component/consumercasemanagementnew'])
    // } else if (card.courseDetails.simulation == 'Logistics') {
    //   this._router.navigate(['auth/component/logisticscasemanagement'])
    // } else if (card.courseDetails.simulation == 'Change Management Module') {
    //   this._router.navigate(['auth/component/changemanagementcasemanagement'])
    // } else if (card.courseDetails.simulation == 'Financial Analysis') {
    //   this._router.navigate(['auth/component/financialanalysiscasemanagement'])
    // }
    // else if ((card.courseDetails.simulation == 'Promotions & Segments') || (card.courseDetails.simulation == 'Promotion & Segments')) {
    //   this._router.navigate(['auth/component/promotionscasemanagement'])
    // } else if (card.courseDetails.simulation == 'Sales & Target') {
    //   this._router.navigate(['auth/component/salestargetcasemanagement'])
    // }
    // else if (card.courseDetails.simulation == 'Portfolio Management') {
    //   this._router.navigate(['auth/component/portfoliocaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'Value Chain') {
    //   this._router.navigate(['auth/component/valuechaincaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'CVP Analysis') {
    //   this._router.navigate(['auth/component/cvpcaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'Accounting') {
    //   this._router.navigate(['auth/component/accountingcaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'Accounting Arabic') {
    //   this._router.navigate(['auth/component/accountingarabiccaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'Pricing') {
    //   this._router.navigate(['auth/component/pricingcaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'Mergers & Acquisition') {
    //   this._router.navigate(['auth/component/mergersacquisitioncaseheader'])
    // }

    // else if (card.courseDetails.simulation == 'HRP') {
    //   this._router.navigate(['auth/component/hrpcaseheader'])
    // }

    // else if (card.courseDetails.simulation == 'Design Thinking') {
    //   this._router.navigate(['auth/component/designthinkingcaseheader'])
    // }

    // else if (card.courseDetails.simulation == 'CRM') {
    //   this._router.navigate(['auth/component/crmcaseheader'])
    // }

    // else if (card.courseDetails.simulation == 'Innovation') {
    //   this._router.navigate(['auth/component/innovationcaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'Ordering Basics') {
    //   this._router.navigate(['auth/component/orderingbasicscaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'HRM_Fintech') {
    //   this._router.navigate(['auth/component/hrmcasemanagement'])
    // }
    // else if (card.courseDetails.simulation == 'STP') {
    //   this._router.navigate(['auth/component/stpcaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'IT Management') {
    //   this._router.navigate(['auth/component/itcasemanagementheader'])
    // }
    // else if (card.courseDetails.simulation == 'Ecommerce') {
    //   this._router.navigate(['auth/component/ecommerccaseeheader'])
    // }
    // else if (card.courseDetails.simulation == 'Capital Budgeting') {
    //   this._router.navigate(['auth/component/capitalbudgetingcaseheader'])
    // }
    // else if (card.courseDetails.simulation == 'Project Management') {
    //   this._router.navigate(['auth/component/projectmanagementcaseheader'])
    // }


    /////////////////////////////////new
    this._global.casemanagementcoursedetails.next(card)
    if (card.simulationname == 'Business Basics') {
      this._router.navigate(['auth/businesscasemanagement/component'])
    } else if (card.simulationname == 'Product & Consumer') {
      this._router.navigate(['auth/consumercasemanagement/component'])
    }
    if (card.simulationname == 'Product & Consumer New') {
      this._router.navigate(['auth/consumercasemanagementnew/component'])
    } else if (card.simulationname == 'Logistics') {
      this._router.navigate(['auth/logisticscasemanagement/component'])
    } else if (card.simulationname == 'Change Management Module') {
      this._router.navigate(['auth/changemanagementcasemanagement/component'])
    }
    else if (card.simulationname == 'Change Management Module New') {
      this._router.navigate(['auth/changemanagementnewcasemanagement/component'])
    }
    else if (card.simulationname == 'Financial Analysis') {
      this._router.navigate(['auth/financialanalysiscasemanagement/component'])
    }
    else if ((card.simulationname == 'Promotions & Segments') || (card.simulationname == 'Promotion & Segments')) {
      this._router.navigate(['auth/promotionscasemanagement/component'])
    } else if (card.simulationname == 'Promotions & Segments New') {
      this._router.navigate(['auth/promotionscasemanagementnew/component'])
    } else if (card.simulationname == 'Sales & Target') {
      this._router.navigate(['auth/salestargetcasemanagement/component'])
    }
    else if (card.simulationname == 'Portfolio Management') {
      this._router.navigate(['auth/portfoliocaseheader/component'])
    }
    else if (card.simulationname == 'Value Chain') {
      this._router.navigate(['auth/valuechaincaseheader/component'])
    }
    else if (card.simulationname == 'Value Chain New') {
      this._router.navigate(['auth/valuechaincase/component'])
    }
    else if (card.simulationname == 'CVP Analysis') {
      this._router.navigate(['auth/cvpcaseheader/component'])
    }
    else if (card.simulationname == 'Accounting') {
      this._router.navigate(['auth/accountingcaseheader/component'])
    }
     else if (card.simulationname == 'Accounting New') {
      this._router.navigate(['auth/accountingnewcaseheader/component'])
    }
    else if (card.simulationname == 'Accounting Arabic') {
      this._router.navigate(['auth/accountingarabiccaseheader/component'])
    }
    else if (card.simulationname == 'Pricing') {
      this._router.navigate(['auth/pricingcaseheader/component'])
    }
    else if (card.simulationname == 'Mergers & Acquisition') {
      this._router.navigate(['auth/mergersacquisitioncaseheader/component'])
    }

    else if (card.simulationname == 'HRP') {
      this._router.navigate(['auth/hrpcaseheader/component'])
    }
    else if (card.simulationname == 'HRP New') {
      this._router.navigate(['auth/hrpcase/component'])
    }

    else if (card.simulationname == 'Design Thinking') {
      this._router.navigate(['auth/designthinkingcaseheader/component'])
    }

    else if (card.simulationname == 'CRM') {
      this._router.navigate(['auth/crmcaseheader/component'])
    }

    else if (card.simulationname == 'Innovation') {
      this._router.navigate(['auth/innovationcaseheader/component'])
    }
    else if (card.simulationname == 'Ordering Basics') {
      this._router.navigate(['auth/orderingbasicscaseheader/component'])
    }
    else if (card.simulationname == 'HRM_Fintech') {
      this._router.navigate(['auth/hrmcasemanagement/component'])
    }
    else if (card.simulationname == 'STP') {
      this._router.navigate(['auth/stpcaseheader/component'])
    }
    else if (card.simulationname == 'IT Management') {
      this._router.navigate(['auth/itcasemanagementheader/component'])
    }
    else if (card.simulationname == 'Ecommerce') {
      this._router.navigate(['auth/ecommerccaseeheader/component'])
    }
    else if (card.simulationname == 'Capital Budgeting') {
      this._router.navigate(['auth/capitalbudgetingcaseheader/component'])
    }
    else if (card.simulationname == 'Project Management') {
      this._router.navigate(['auth/projectmanagementcaseheader/component'])
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

  // primarygameselect(card: any) {
  //   const dialogRef = this.dialog.open(PrimarycourseselectpopupComponent, {
  //     data: {
  //       text:"Are you sure about assigning this case study to your course?",
  //       instructormailid: card.courseDetails.instructormailid,
  //       coursename: card.coursename,
  //       coursecode: this.instructorcarddetails.coursecode,
  //       coursedetailsid: this.instructorcarddetails.coursedetailsid,
  //       primarycoursedetailsid: card.primarycoursedetailsid
  //     },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getTableData();
  //   });
  // }
  // primarygameselect(card: any) {
  //   const dialogRef = this.dialog.open(DeleteComponent, {
  //     // data: "Are you sure about assigning this case study to your course?",
  //     data: {
  //       heading: "Case Assign",
  //       body: "Are you sure about assigning this case study to your course?"
  //     },
  //     position: {
  //       top: "20px",
  //     },
  //     panelClass: 'copygame-dialog',
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result == true) {
  //       this._api.courseSetPrimary(card.courseDetails.instructormailid, card.coursename, this.instructorcarddetails.coursecode,
  //         this.instructorcarddetails.coursedetailsid, card.primarycoursedetailsid).subscribe((data: any) => {
  //           if (data.status == "Success") {
  //             if (this.selectedTab === 'cesimcase') {
  //               this.getTableDataForMaster()

  //             } else {
  //               this.getTableData();

  //             }
  //             // this.getTableData();

  //           } else {
  //             dialogRef.close();
  //           }
  //         })
  //     } else {
  //       dialogRef.close();
  //     }
  //   });
  // }
  // Add this new method to handle the checkbox click
  handleCheckboxClick(event: Event, card: any) {
    // Prevent the checkbox from being checked immediately
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
        // User clicked Yes - proceed with the API call
        this._api.courseSetPrimary(
          card.courseDetails.instructormailid,
          card.coursename,
          this.instructorcarddetails.coursecode,
          this.instructorcarddetails.coursedetailsid,
          card.primarycoursedetailsid
        ).subscribe((data: any) => {
          if (data.status == "Success") {
            // Uncheck all cards first
            this.cardlistdata.forEach((c: any) => c.isAssignedForYourCase = false);
            // Check only the selected card
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
        // If cancelled, revert the checkbox
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
    console.log("bodylnclick", body)
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
export class SharedpopupComponent implements OnInit {
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



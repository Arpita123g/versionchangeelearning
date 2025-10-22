import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { Instructordashboardprofile } from 'src/app/component/instructordashboard/instructordashboard.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { VoicebasedService } from '../../service/speech/voicebased.service';
import { ArchiveupdateComponent } from '../archiveupdate/archiveupdate.component';
import { NewtimeupdateComponent } from '../newtimeupdate/newtimeupdate.component';
import { RoundsornumberofattemptsComponent } from '../roundsornumberofattempts/roundsornumberofattempts.component';
import { DeleteComponent } from '../delete/delete/delete.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-instructorchilddashboard',
  templateUrl: './instructorchilddashboard.component.html',
  styleUrls: ['./instructorchilddashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    RoundsornumberofattemptsComponent,
  ]
})
export class InstructorchilddashboardComponent extends AbstractComponent {

  cardlist: any = [];
  imageiconarray: any = [];
  startdatearray: any = [];
  starttimearray: any = [];
  enddatearray: any = [];
  endtimearray: any = [];
  instructoractivetabsub: Subscription;
  instructoractivetabvalue: any = "";
  showcardnull: boolean = false;
  showcardnulltext: string = "";
  @Input() nulldata: string = "";
  isLocked: boolean = false;
  isLockedReport: boolean = false;
  // microvoicetabSub: Subscription;
  // microvoicetab: string = '';
  lockStateSubscription: Subscription;
  copiedCourseCodes: { [code: string]: boolean } = {};
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private VoicebasedService: VoicebasedService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.instructoractivetabsub = this._global.instructoractivetab.subscribe((data) => {
      this.instructoractivetabvalue = data;
    });

    this.lockStateSubscription = this.VoicebasedService.currentLockState.subscribe(state => {
      this.isLocked = state;
    });
    // this.microvoicetabSub = this._global.instructoractivetab.subscribe((data) => {
    //   this.microvoicetab = data;
    // });
  }

  override ngOnInit(): void {
    this.showcardnull = false;
    this.checkloading = true;
    this.getTableData();

  }

  getFullUrl(coursecode: string): string {
    return `${window.location.origin}/studentregister/${coursecode}`;
  }

  copyToClipboard(event: any, coursecode: string): void {
    event.stopPropagation();
    const fullUrl = `${window.location.origin}/studentregister/${coursecode}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      // Set copied flag to true
      this.copiedCourseCodes[coursecode] = true;
      // Reset after 2 seconds
      setTimeout(() => {
        this.copiedCourseCodes[coursecode] = false;
      }, 2000);
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  }


  archiveclick(event: Event, e: any) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(ArchiveupdateComponent, {
      width: '50%',
      data: e,
      panelClass: "achivemodal"
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }
  acountclick(event: Event, e: any) {
    event.stopPropagation();

  }
  lockclick(event: any, coursecode: string, islock: boolean) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(ReportdisabledComponent, {
      data: {
        toggleLock: () => {
          this.isLocked = islock;
          console.log("lock", this.isLocked)
          // this.isLocked = !this.isLocked;
          this.VoicebasedService.changeLockState(this.isLocked);
        }
      },
      panelClass: "achivemodal"
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });

  }

  updateLockStateInToolbar() {
    // Determine the locked state for the toolbar
    // For example, if you want to disable REPORT tab based on isLocked
    this.isLockedReport = this.isLocked;
  }
  updateTime(event: Event, e: any) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(NewtimeupdateComponent, {
      width: '50%',
      data: e,
      panelClass: "achivemodal"
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }
  editround(event: Event, e: any) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(RoundsornumberofattemptsComponent, {
      width: '50%',
      data: e,
      panelClass: "achivemodal",
      position: { top: '20px' }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  // toggleCourseLock(card: any) {
  //   const apiname = '/lock/updatelock';

  //   const coursecode = card.courseDetails.coursecode;
  //   const currentLock = card.courseDetails.lock;
  //   const newLock = currentLock === 'yes' ? 'no' : 'yes';
  //   this._api.toggleCourseLock(coursecode, newLock,apiname).subscribe((res: any) => {
  //     if (res.status === 'Success') {
  //       this._alert.success('Lock state updated successfully.');
  //       this.getTableData();
  //     } else {
  //       this._alert.error('Failed to update lock state.');
  //     }
  //   }, (err: any) => {
  //     this._alert.error('Error updating lock state.');
  //   });
  // }
  toggleCourseLock(event: Event, card: any) {
    event.stopPropagation();
    const apiname = '/course/updatecourselock';
    const coursedetailsid = card.courseDetails.coursedetailsid;
    const currentLock = card.courseDetails.lock;
    const newLock = currentLock === 'yes' ? 'no' : 'yes';
  
    let heading = '';
    let body = '';
    if (newLock === 'yes') {
      heading = 'Lock game arena';
      body = `Selecting this option will disable the decisions and results editing and viewing 
  possibility in the course for the students, but will keep everything else in the platform 
  visible to the students.`;
    } else {
      heading = 'Show game arena';
      body = `Selecting this option will show the decisions and results areas of the course for the 
  students.`;
    }
  
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '600px',

      data: {
        heading: heading,
        body: body
      },
      position: {
        top: "20px",
      },
      panelClass: 'copygame-dialog',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._api.toggleCourseLock(coursedetailsid, newLock, apiname).subscribe((res: any) => {
          if (res.status === 'Success') {
            this._alert.success('Lock state updated successfully.');
            this.getTableData();
          } else {
            this._alert.error('Failed to update lock state.');
          }
        }, (err: any) => {
          this._alert.error('Error updating lock state.');
        });
      }
    });
  }
  
  coursenamelist: any = [

    { simulation: "Business Basics", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Logistics", imageicon: "assets/elearning_icon_png/Logistics.png" },
    { simulation: "Product & Consumer", imageicon: "assets/elearning_icon_png/Consumer behavior.png" },
    { simulation: "Change Management Module", imageicon: "assets/elearning_icon_png/Change Management.png" },
    { simulation: "Language Lab", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Recruitment", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Communication", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Ethics", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Negotiation", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Interview", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Breakeven Analysis", imageicon: "assets/elearning_icon_png/Breakeven.png" },
    { simulation: "Capital Budgeting", imageicon: "assets/elearning_icon_png/Capital Budgeting.png" },
    { simulation: "David vs Goliath", imageicon: "assets/elearning_icon_png/Ethical Dilemma.png" },
    { simulation: "Accounting", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Understanding Financial Statement", imageicon: "assets/elearning_icon_png/Accounting.png" },
    { simulation: "Leadership & Communication", imageicon: "assets/elearning_icon_png/Communication & Leadership.png" },
    { simulation: "Value Chain", imageicon: "assets/elearning_icon_png/Value Chain.png" },
    { simulation: "Value Chain New", imageicon: "assets/elearning_icon_png/Value Chain.png" },
    { simulation: "SCM", imageicon: "assets/elearning_icon_png/Value Chain.png" },
    { simulation: "Financial Analysis", imageicon: "assets/elearning_icon_png/Financial Analysis.png" },
    { simulation: "Financial Statement Analysis", imageicon: "assets/elearning_icon_png/Financial Analysis.png" },
    { simulation: "Security Analysis & Portfolio Management", imageicon: "assets/elearning_icon_png/Portfolio Management.png" },
    { simulation: "Decarbonization", imageicon: "assets/elearning_icon_png/Global Challenge ESG icon.png" },
    { simulation: "Sales Management Module", imageicon: "assets/elearning_icon_png/Sales Management.png" },
    { simulation: "Sales Pharma Scenario", imageicon: "assets/elearning_icon_png/Sales Management.png" },
    { simulation: "Sales Agricultural Scenario", imageicon: "assets/elearning_icon_png/Sales Management.png" },
    { simulation: "Positioning & Game Theory", imageicon: "assets/elearning_icon_png/Branding.png" },
    { simulation: "Pricing", imageicon: "assets/elearning_icon_png/Pricing.png" },
    { simulation: "Strategic Human Resource", imageicon: "assets/elearning_icon_png/HR icon.png" },
    { simulation: "Consumer Behaviour & Network Externalitie", imageicon: "assets/elearning_icon_png/Consumer behavior.png" },
    { simulation: "Ordering & Inventory", imageicon: "assets/elearning_icon_png/Ordering & Inventory.png" },
    { simulation: "Negotiation", imageicon: "assets/elearning_icon_png/Negotiation.png" },
    { simulation: "Promotion & Channel Module", imageicon: "assets/elearning_icon_png/Promotions.png" },
    { simulation: "Mergers & Acquisition", imageicon: "assets/elearning_icon_png/Promotions.png" },
    { simulation: "HRP", imageicon: "assets/elearning_icon_png/Promotions.png" },

  ]


  goTomicrosimdashboard(card: any) {
    this._global.instructorelementdetails.next(card);
    this._global.instructorcarddetails.next(card);
    this._global.remainingcredit.next(-1);
    this._global.coursecode.next(card.courseDetails.coursecode);

    if (this.instructoractivetabvalue == 'voicebased') {
      this._router.navigate(['/auth/common/voicebasedashboard']);

    } else {
      this._router.navigate(['/auth/common/microsimdashboard']);
    }

  }
  getTableData() {

    let body = {};
    if (this.nulldata == "archive") {
      body = {
        email: this.useremail,
        caller: 'webinstructor',
        usermode: 'instructor',
        searchtype: 'archive'

      };
    } else if (this.nulldata == "ongoing") {
      body = {
        email: this.useremail,
        caller: 'webinstructor',
        usermode: 'instructor',
        searchtype: 'ongoing'

      }
    } else if (this.nulldata == "completed") {
      body = {
        email: this.useremail,
        caller: 'webinstructor',
        usermode: 'instructor',
        searchtype: 'completed'

      }
    }
    this._restapiservice.getinstructortablelist(body).subscribe(
      (data: any) => {
        let k = 0;
        let j = 0;
        this.startdatearray = [];
        this.starttimearray = [];
        this.enddatearray = [];
        this.endtimearray = [];
        this.cardlist = [];
        this.imageiconarray = [];
        if (data.status == 'Success') {
          if (data.resultList != null) {


            for (let i = 0; i < data.resultList.length; i++) {
              if (this.instructoractivetabvalue == 'microsim') {
                if (data.resultList[i].courseDetails.gametype == 'microsimulation') {
                  this.cardlist[j] = data.resultList[i];
                  j++;
                 
                }
              } else {
                if (data.resultList[i].courseDetails.gametype == 'aiinterview') {
                  this.cardlist[j] = data.resultList[i];
                  j++;
                }
              }
            }

            if (this.cardlist.length != 0) {
              for (let m = 0; m < this.cardlist.length; m++) {
                let starttime = this.cardlist[m].courseDetails.starttime.split(" ");
                this.startdatearray.push(starttime[0]);
                this.starttimearray.push(starttime[1]);

                let endtime = this.cardlist[m].courseDetails.endtime.split(" ");
                this.enddatearray.push(endtime[0]);
                this.endtimearray.push(endtime[1]);

                for (let a = 0; a < this.coursenamelist.length; a++) {
                  if (this.cardlist[m].courseDetails.simulation == this.coursenamelist[a].simulation) {
                    this.imageiconarray[k] = this.coursenamelist[a].imageicon
                    k++
                  }
                }
              }
            } else {
              this.emptyListTextShow();
            }

          } else {
            this.emptyListTextShow();
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
          this._alert.error(data.message)
        }
      },
      (error: any) => {
        this.checkloading = false;
        this._alert.error('something went wrong');
      }
    );
  }

  getSum(card: any): number {
    return Number(card.totallicenseleft) + Number(card.noofstudentregistered);
  }
  goToprofile() {
    const dialogRef = this.dialog.open(Instructordashboardprofile, {
      width: '50%'

    })
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  emptyListTextShow() {
    this.showcardnull = !this.showcardnull;
    if (this.nulldata == "ongoing") {
      this.showcardnulltext = "No courses have been running at the moment. Should you encounter any discrepancies, please contact the Cesim Team for assistance."
    }
    else if (this.nulldata == "completed") {
      this.showcardnulltext = "The courses remain incomplete. Upon conclusion of the rounds or timeline, they will be displayed here for tracking assessment and engagement purposes."
    }
    else if (this.nulldata == "archive") {
      this.showcardnulltext = "If your ongoing tab is crowded, kindly consider archiving the course from the card. It will be available here for future reference."

    }
  }

  override ngOnDestroy() {
    // this.microvoicetabSub.unsubscribe();
    this.instructoractivetabsub.unsubscribe();
    this.lockStateSubscription.unsubscribe();
  }

}


@Component({
  selector: 'app-reportdisabled',
  templateUrl: './reportdisabled.html',
  styleUrls: ['./instructorchilddashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ReportdisabledComponent extends AbstractComponent {

  isLocked: boolean = false;
  message: string = "";
  heading: string = "";
  lockStateSubscription: Subscription;
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private VoicebasedService: VoicebasedService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ReportdisabledComponent>) {

    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.lockStateSubscription = this.VoicebasedService.currentLockState.subscribe(state => {
      this.isLocked = state;
    });
    // this.isLocked = this.isLocked;

  }
  override ngOnInit(): void {
    if (!this.isLocked) {
      this.heading = "Report Access Disabled";
      this.message = "If you choose to disable the report feature, be aware that this action will prevent participants from entering the report section and viewing any assessments associated with it. If you need the participant to access these features in the future, you will need to re-enable the report feature."
    } else {
      this.heading = "Report Access Enable";
      this.message = "If you choose to enable the report feature, the participants can enter the report section and view assessments associated with their performance."
    }
  }

  lockReport() {
    this.data.toggleLock();
    this.dialogRef.close(false);


  }

}

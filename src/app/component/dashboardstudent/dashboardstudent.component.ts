import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/auth/login.service';
// import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import Swal from 'sweetalert2';
import { VoicebasedService } from '../../service/speech/voicebased.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
@Component({
  selector: 'app-dashboardstudent',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './dashboardstudent.component.html',
  styleUrls: ['./dashboardstudent.component.scss']
})

export class DashboardstudentComponent implements OnInit {
  Emailsub: Subscription;
  useremail: string = '';
  Coursecodesub: Subscription;
  coursecode: string = '';
  Usernamesub: Subscription;
  Sheetidsub: Subscription;
  masterspreadsheetid: string = '';
  snapshotstep: string = '';
  coursename: string = '';
  course: string = '';
  username: string = '';
  mastersheetid: string = '';
  roundcompletesub: Subscription;
  roundcompletestatus: string = '';
  Clientsecretsub: Subscription;
  clientsecretvalue: string = '';
  Refreshtokensub: Subscription;
  refreshtokenvalue: string = '';
  Clientidsub: Subscription;
  clientidvalue: string = '';
  Drivemailconfigurationidsub: Subscription;
  drivemailconfigurationidvalue: string = '';
  Drivemailsub: Subscription;
  drivemailvalue: string = '';
  Studentelementdetailssub: Subscription;
  Attemptsub: Subscription
  attempt: string = "";
  studentelementdetailsvalue: any = [];
  multiplemastersheetid: any = [];
  // ELEMENT_DATA: PeriodicElement[] = [];
  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  StudentspreadSheetSub: Subscription;
  studentspreadsheetid: string = '';
  microvoicetabSub: Subscription;
  microvoicetab: string = '';
  checkloading: boolean = false;
  result: any = [];
  time = new Date();
  differencewdendtime: number = 0;
  differencewdsrtime: number = 0;
  cardlist: any = [];
  imageiconarray: any = [];
  startdatearray: any = [];
  starttimearray: any = [];
  enddatearray: any = [];
  endtimearray: any = [];
  showcardnull: boolean = false;
  showcardnulltext: string = "";
  termcon: string = '';
  currenttabb: number = 0;
  checkTermAndCondition: string = "";
  timeorattemptfinish: boolean = false;
  // nulldata:string = "";
  @Input() nulldata: string = "";
  @Input() courseCode?: string;
  producttype: string = "";
  refreshBodySub: Subscription | undefined;

  constructor(private _router: Router,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    private _global: GlobalService,
    public datepipe: DatePipe,
    private _login: LoginService,
    public dialog: MatDialog,
    private _api: ApiService,
    private sharedService: SharedserviceService,
    private cdr: ChangeDetectorRef,
    private VoicebasedService: VoicebasedService,
  ) {
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
    this.Usernamesub = this._global.username.subscribe((data) => {
      this.username = data;
    });
    this.Sheetidsub = this._global.sheetid.subscribe((data) => {
      this.masterspreadsheetid = data;
    });
    this.microvoicetabSub = this._global.microvoicetab.subscribe((data) => {
      this.microvoicetab = data;
    });
    this.roundcompletesub = this._global.roundcompletestatus.subscribe((data) => {
      this.roundcompletestatus = data;
    });

    this.StudentspreadSheetSub = this._global.studentspreadsheetid.subscribe((data) => {
      this.studentspreadsheetid = data;
    });

    this.Coursecodesub = this._global.coursecode.subscribe((data) => {
      this.coursecode = data;
    });
    this.Clientsecretsub = this._global.clientsecret.subscribe((data) => {
      this.clientsecretvalue = data;
    });
    this.Refreshtokensub = this._global.refreshtoken.subscribe((data) => {
      this.refreshtokenvalue = data;
    });
    this.Clientidsub = this._global.clientid.subscribe((data) => {
      this.clientidvalue = data;
    });
    this.Drivemailconfigurationidsub = this._global.drivemailconfigurationid.subscribe((data) => {
      this.drivemailconfigurationidvalue = data;
    });
    this.Drivemailsub = this._global.driveemail.subscribe((data) => {
      this.drivemailvalue = data;
    });
    this.Studentelementdetailssub = this._global.studentelementdetails.subscribe((data) => {
      this.studentelementdetailsvalue = data;
    });
    this.Attemptsub = this._global.noofattempts.subscribe((data) => {
      this.attempt = data;
    });


  }
  ngOnInit(): void {
    if (this.courseCode) {
      this.editenrollgame();
    } else {
      this.checkloading = true;
      this.sharedService.enterInGame("exit");
      this.showcardnull = false;
      this.cdr.detectChanges();
      this.getTableData();
    }

    // Refresh bodyContent when toolbar asks
    this.refreshBodySub = this.sharedService.refreshBodyContent$.subscribe(() => {
      this.refreshBodyContentFromServer();
    });

  }





  coursenamelist: any = [
    // { simulation: "Business Basics", imageicon: "assets/elearning_icon_png/cesimlogoforallgame.png" },
    // { simulation: "Logistics", imageicon: "assets/elearning_icon_png/Logistics.png" },
    // { simulation: "Product & Consumer", imageicon: "assets/elearning_icon_png/Consumer behavior.png" },
    // { simulation: "Change Management Module", imageicon: "assets/elearning_icon_png/Change Management.png" },
    // { simulation: "Language Lab", imageicon: "assets/elearning_icon_png/Accounting.png" },
    // { simulation: "Recruitment", imageicon: "assets/elearning_icon_png/Accounting.png" },
    // { simulation: "Communication", imageicon: "assets/elearning_icon_png/Accounting.png" },
    // { simulation: "Ethics", imageicon: "assets/elearning_icon_png/Accounting.png" },
    // { simulation: "Negotiation", imageicon: "assets/elearning_icon_png/Accounting.png" },
    // { simulation: "Interview", imageicon: "assets/elearning_icon_png/Accounting.png" },
  ]
  getTableData() {

    this.cardlist = [];
    let body = {};
    if (this.nulldata == 'ongoing') {
      body = {
        email: this.useremail,
        caller: 'webstudent',
        usermode: 'student',
        searchtype: 'ongoing',
        searchcontent: '',
      };
    } else {
      body = {
        email: this.useremail,
        caller: 'webstudent',
        usermode: 'student',
        searchtype: 'completed',
        searchcontent: '',
      };
    }

    this._restapiservice.getStudentDetails(body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          if (data.resultList != null) {

            let j = 0;
            this.startdatearray = [];
            this.starttimearray = [];
            this.enddatearray = [];
            this.endtimearray = [];
            this.cardlist = [];

            for (let i = 0; i < data.resultList.length; i++) {
              if (this.microvoicetab == 'microsim') {
                if (data.resultList[i].courseDetails.gametype == 'microsimulation') {
                  this.cardlist[j] = data.resultList[i];
                  this.showcardnull = false;
                  j++;

                }
              } else {
                if (data.resultList[i].courseDetails.gametype == 'aiinterview') {
                  this.cardlist[j] = data.resultList[i];
                  this.showcardnull = false;
                  j++;
                }
              }
            }
            if (this.cardlist.length != 0) {
              let k = 0;
              // this.showcardnull = false;
              // this.showcardnull = !this.showcardnull;
              for (let i = 0; i < this.cardlist.length; i++) {
                let starttime = this.cardlist[i].courseDetails.starttime.split(" ");
                this.startdatearray.push(starttime[0]);
                this.starttimearray.push(starttime[1]);

                let endtime = this.cardlist[i].courseDetails.endtime.split(" ");
                this.enddatearray.push(endtime[0]);
                this.endtimearray.push(endtime[1]);

                for (let a = 0; a < this.coursenamelist.length; a++) {
                  if (this.cardlist[i].courseDetails.simulation == this.coursenamelist[a].simulation) {
                    this.imageiconarray[k] = this.coursenamelist[a].imageicon;
                    k++
                  }
                }
              }

              // this.sharedService.updateBodyContent(data.resultList[0]);
            } else {
              this.emptylistdata();
            }


          } else {
            this.emptylistdata();
          }
          this.checkloading = false;
        } else {
          this.checkloading = false;
          this._alert.error(data.message)
        }
      },
      (error: any) => {
        this.checkloading = false;
        console.log("error", error)
      }
    );
  }

  emptylistdata() {
    this.showcardnull = !this.showcardnull;
    if (this.nulldata == "ongoing") {
      this.showcardnulltext = "No simulations are currently in progress. Ready to dive in? Just enter your instructor's course code in the Register tab and let the adventure begin!"
    }
    else if (this.nulldata == "completed") {
      this.showcardnulltext = "Still waiting on those simulation games to finish their victory lap! Swing by here once you've wrapped up your module for some reflective fun."
    }
  }

  editenrollgame() {
    const shouldDisableClose = !!this.courseCode; // converts to boolean

    const dialogRef = this.dialog.open(EnrollStudent, {
      width: '50%',
      data: this.courseCode,
      panelClass: 'custom-dialog',
      backdropClass: shouldDisableClose ? 'dialog-blur-backdrop' : '',
      disableClose: shouldDisableClose, // Will be true if courseCode exists, false otherwise
      hasBackdrop: true
    });

    document.body.classList.add('blur-background');

    dialogRef.afterClosed().subscribe((result) => {
      document.body.classList.remove('blur-background');
      this.getTableData();
    });
  }

  goToprofile() {
    const dialogRef = this.dialog.open(UpdateStudent, {

    });

    dialogRef.afterClosed().subscribe((result) => {
    });

  }



  refreshtoken() {
    let body = '';
    this._login.refreshtokenfordrive(body, this.clientsecretvalue, this.refreshtokenvalue, this.clientidvalue).subscribe((data: any) => {

      const accesstoken = data.access_token;
      this._global.accesstoken.next(accesstoken);
      this.sheetRouting(this.studentelementdetailsvalue, this.drivemailconfigurationidvalue);

    },
      (error: any) => {
        this.checkloading = false;
        let apiname = 'https://accounts.google.com/o/oauth2/token';
        this._login.driveErrorLogRouting(error.status, error.message.substring(0, 500), this.drivemailvalue, this.studentelementdetailsvalue.userRegister.userregisterid,
          this.studentelementdetailsvalue.courseDetails.coursedetailsid,
          (Number(this.studentelementdetailsvalue.previousassignedattempts) - Number(this.studentelementdetailsvalue.numberofattemptsleft) + 1), apiname, 'refreshtoken', 'error').subscribe((data: any) => {
            if (data.status == 'Success') {
            }
          });

      }
    )
  }



  tokenDocumentSet(clientsecret: string, refreshtoken: string, clientid: string, drivemailconfigurationid: string, driveemail: string) {
    this._global.clientsecret.next(clientsecret);
    this._global.refreshtoken.next(refreshtoken);
    this._global.clientid.next(clientid);
    this._global.drivemailconfigurationid.next(drivemailconfigurationid);
    this._global.driveemail.next(driveemail);
    this.refreshtoken();
  }
  sendEntryStatus() {
    let status = "entry";
    this._login.sendDrivemailLog(status).subscribe((data: any) => {

    })
  }
  sheetRouting(element: any, drivemailconfigurationid: any) {
    let spreadsheetid = '';
    let noofattempts = 0;
    this.globallyValueSet(element)
    const numberofattemptsleft = element.numberofattemptsleft;
    const previousassignedattempts = element.previousassignedattempts;
    noofattempts = Number(previousassignedattempts) - Number(numberofattemptsleft) + 1;
    this._global.noofattempts.next(String(noofattempts));


    spreadsheetid = element.spreadsheetid;
    if (spreadsheetid == null) {
      spreadsheetid = "null"
    }
    this._global.studentspreadsheetid.next(spreadsheetid);

    this.sendEntryStatus();
    setTimeout(() => {
      let body = {
        email: element.userRegister.email,
        caller: 'webstudent',
        usermode: 'student',
        searchtype: 'fetchlaststep',
        studentsectionid: element.studentsectionid,
        coursecode: element.coursecode,
        numberofattempts: noofattempts

      };
      this._restapiservice.getSnapshotDetails(body).subscribe(
        (data: any) => {

          if (data.status == 'Success') {
            this.result = data.resultList;

            if (this.result != null) {
              for (let i = 0; i < this.result.length; i++) {
                this.snapshotstep = this.result[i].snapshotstep;

              }
              if (this.snapshotstep != null) {
                if (this.snapshotstep == "5completed") {
                  this._global.roundcompletestatus.next(this.snapshotstep);
                } else if ((this.snapshotstep == "0") && (element.simulationname == "Strategic Human Resource")) {
                  this._global.snapshotstep.next(0);
                  this._global.prvsnapshotstep.next(-2);
                } else if ((this.snapshotstep == "1") && (element.simulationname == "Strategic Human Resource")) {
                  this._global.snapshotstep.next(1);
                  this._global.prvsnapshotstep.next(0);
                } else {
                  this._global.snapshotstep.next(Number(this.snapshotstep));
                  let prvstep = (Number(this.snapshotstep) - 1);
                  this._global.prvsnapshotstep.next(prvstep);
                }
              }
            } else {

              if (element.simulationname == "Strategic Human Resource") {
                this._global.snapshotstep.next(0);
                this._global.prvsnapshotstep.next(-2);
              }
            }

            if (noofattempts > 0) {

              if (spreadsheetid == "null") {

              } else {
                if (element.simulationname == "Strategic Human Resource") {
                  this._login.savekpivalue(0, 0, 0, "save", Number(this.snapshotstep));
                } else {
                  this._login.savekpivalue(0, 0, 0, "save", this.attempt);
                }
                this._global.studentspreadsheetid.next(spreadsheetid);
                this.checkloading = false;
                this.courseRouting();
              }


            } else if ((noofattempts == 0) && (this.coursename == "Strategic Human Resource")) {
              this.checkloading = false;
              this.courseRouting();
            }


          } else {
            this.checkloading = false;

          }
        },
        (error: any) => {
          this.checkloading = false;
        }
      );
    }, 200)
  }





  globallyValueSet(element: any) {
    this.coursename = element.courseDetails.simulation;
    const coursedetailsid = element.coursedetailsid;
    const userregisterid = element.userregisterid;
    const coursecode = element.coursecode;

    this._global.coursedetailsid.next(coursedetailsid);
    this._global.userregisterid.next(userregisterid);
    this._global.coursecode.next(coursecode);
    this._global.studentsectionid.next(element.studentsectionid);
  }

  getSnapshotStep(element: any, noofattempts: any) {
    let body = {
      email: element.userRegister.email,
      caller: 'webstudent',
      usermode: 'student',
      searchtype: 'fetchlaststep',
      studentsectionid: element.studentsectionid,
      coursecode: element.coursecode,
      numberofattempts: noofattempts

    };
    this._api.getSnapshotDetails(body).subscribe(
      (data: any) => {

        if (data.status == 'Success') {
          this.result = data.resultList;
          if (data.resultList != null) {
            this.snapshotstep = this.result[0].snapshotstep;
            this.courseRouting();
          } else {
            this._api.savekpivalue(0, 0, 0, "save", this.attempt);
            this.courseRouting();
          }

        } else {
          this.checkloading = false;
        }
      },
      (error: any) => {
        this.checkloading = false;
      }
    );

  }

  entergamearea(element: any) {
    if (
      (
        (this.microvoicetab == 'microsim') &&
        ((element.simulationname == "Product & Consumer") || (element.simulationname == "Product & Consumer New") || (element.simulationname == "Business Basics")
          || (element.simulationname == "Logistics") || (element.simulationname == "Change Management Module") || (element.simulationname == "Change Management Module New") ||
          (element.simulationname == "Financial Analysis") || (element.simulationname == "Promotions & Segments") ||
          (element.simulationname == "Promotions & Segments New") ||
          (element.simulationname == "Sales & Target") || (element.simulationname == "Portfolio Management")
          || (element.simulationname == "Value Chain") || (element.simulationname == "Value Chain New") || (element.simulationname == "CVP Analysis")
          || (element.simulationname == "Accounting") || (element.simulationname == "Accounting Arabic") || (element.simulationname == "Pricing") ||
          (element.simulationname == "Mergers & Acquisition") || (element.simulationname == "HRP") || (element.simulationname == "HRP New") || (element.simulationname == "Design Thinking")
          || (element.simulationname == "CRM") || (element.simulationname == "Innovation") ||
          (element.simulationname == "Ordering Basics") ||
          (element.simulationname == "HRM_Fintech") || (element.simulationname == "STP") || (element.simulationname == "IT Management")
          || (element.simulationname == "Ecommerce") || (element.simulationname == "Capital Budgeting") || (element.simulationname == "Project Management"))
      ) ||
      (
        (this.microvoicetab == 'voicebased')
        // &&
        // ((element.simulationname == "Interview") || (element.simulationname == "Negotiation")
        //   || (element.simulationname == "Ethics") || (element.simulationname == "Communication") ||
        //   (element.simulationname == "Recruitment") || (element.simulationname == "Language Lab"))
      )
    ) {
      if (element.termsandcondition == 'yes') {
        this.termcon = 'yes'
      } else {
        this.termcon = 'no'
      }
      this._global.gamename.next(element.simulationname);
      this._global.coursename.next(element.courseDetails.primarycoursename);
      this._global.usermode.next("student");
      this._global.language.next(element.courseDetails.primarygamelanguage);
      this.sharedService.updateBodyContent(element);
      // if (this.microvoicetab == 'microsim') {

      //   this.sharedService.enterInGame("enter");
      // } else {
      //   this.producttype = element.simulationname;
      //   // this.sharedService.enterInGame("voicebasedenter");
      // }

      this.sharedService.gameNameSet(element.simulationname)
      this.getStartandEndTime(element);
      // api call check...
      // if (element.islocked) {
      //   this.VoicebasedService.changeLockState(false);
      // } else {
      //   this.VoicebasedService.changeLockState(false);

      // }

    }

  }

  getStartandEndTime(element: any) {
    this._global.studentelementdetails.next(element);
    const str = element.courseDetails.starttime;
    const str2 = element.courseDetails.endtime;

    const [dateComponents1, timeComponents1] = str.split(' ');
    const [dateComponents2, timeComponents2] = str2.split(' ');

    const [day1, month1, year1] = dateComponents1.split('-');
    const [hours1, minutes1] = timeComponents1.split(':');
    const [day2, month2, year2] = dateComponents2.split('-');
    const [hours2, minutes2] = timeComponents2.split(':');

    const startdate = new Date(+year1, +month1 - 1, +day1, +hours1, +minutes1);
    const enddate = new Date(+year2, +month2 - 1, +day2, +hours2, +minutes2);

    var second = new Date().getTime();
    var second1 = startdate.getTime();
    var second2 = enddate.getTime();
    this.differencewdendtime = second2 - second;
    this.differencewdsrtime = second - second1;
    this.studentAttemptCheck(element);
  }


  // change for no of attempts in voice based by kaushik- 31/07/2024
  studentAttemptCheck(element: any) {
    if ((element.numberofattemptsleft <= 0) && (
      (element.simulationname != "Business Basics") && (element.simulationname != "Product & Consumer") && ((element.simulationname != "Product & Consumer New"))
      && (element.simulationname != "Change Management Module") && (element.simulationname != "Logistics") && (element.simulationname != "Change Management Module New")
      && (element.simulationname != "Financial Analysis") && (element.simulationname != "Promotions & Segments")
      && (element.simulationname != "Promotions & Segments New")
      && (element.simulationname != "Sales & Target") && (element.simulationname != "Portfolio Management")
      && (element.simulationname != "Value Chain") && (element.simulationname != "Value Chain New") && (element.simulationname != "CVP Analysis")
      && (element.simulationname != "Accounting") && (element.simulationname != "Accounting Arabic") &&
      (element.simulationname != "Pricing") && (element.simulationname != "Mergers & Acquisition")
      && (element.simulationname != "HRP") && (element.simulationname != "HRP New") && (element.simulationname != "Design Thinking")
      && (element.simulationname != "CRM") && (element.simulationname != "Innovation")
      && (element.simulationname != "Ordering Basics") && (element.simulationname != "HRM_Fintech")
      && (element.simulationname != "STP") && (element.simulationname != "IT Management")
      && (element.simulationname != "Ecommerce") && (element.simulationname != "Capital Budgeting")
      && (element.simulationname != "Project Management") //19 Microsimulation GAME
      && (element.simulationname != "Interview") && (element.simulationname != "Language Lab") &&
      (element.simulationname != "Recruitment") && (element.simulationname != "Communication") &&
      (element.simulationname != "Ethics") && (element.simulationname != "Negotiation") //6 VoiceBased GAME
    )) {
      Swal.fire('Your attempts are exhausted! Check with the Instructor.');
    }
    else if ((this.differencewdendtime < 0) &&
      (element.simulationname != "Business Basics") && (element.simulationname != "Product & Consumer") && (element.simulationname != "Product & Consumer New")
      && (element.simulationname != "Change Management Module") && (element.simulationname != "Logistics") && (element.simulationname != "Change Management Module New")
      && (element.simulationname != "Financial Analysis") && (element.simulationname != "Promotions & Segments")
      && (element.simulationname != "Promotions & Segments New")
      && (element.simulationname != "Sales & Target") && (element.simulationname != "Portfolio Management")
      && (element.simulationname != "Value Chain") && (element.simulationname != "Value Chain New") && (element.simulationname != "CVP Analysis")
      && (element.simulationname != "Accounting") && (element.simulationname != "Accounting Arabic") &&
      (element.simulationname != "Pricing") && (element.simulationname != "Mergers & Acquisition")
      && (element.simulationname != "HRP") && (element.simulationname != "HRP New") && (element.simulationname != "Design Thinking")
      && (element.simulationname != "CRM") && (element.simulationname != "Innovation")
      && (element.simulationname != "Ordering Basics") && (element.simulationname != "HRM_Fintech")
      && (element.simulationname != "STP") && (element.simulationname != "IT Management")
      && (element.simulationname != "Ecommerce") && (element.simulationname != "Capital Budgeting")
      && (element.simulationname != "Project Management") //19  Microsimulation GAME
      && (element.simulationname != "Interview") && (element.simulationname != "Language Lab") &&
      (element.simulationname != "Recruitment") && (element.simulationname != "Communication") &&
      (element.simulationname != "Ethics") && (element.simulationname != "Negotiation") //6 VoiceBased GAME
    ) {
      Swal.fire("Hey, the game is over. If you think it's a discrepancy, contact the instructor!");
    }

    else if ((this.differencewdsrtime < 0)) {
      Swal.fire("Hey, the game is yet to start. If you think it's a discrepancy, contact the instructor!");
    }
    else {
      if ((this.differencewdendtime < 0)) {
        this._global.timefinished.next(true);
      } else {
        this._global.timefinished.next(false);
      }

      if ((this.microvoicetab == 'voicebased') && ((element.numberofattemptsleft <= 0) || (this.differencewdendtime < 0))) {
        this.timeorattemptfinish = true;
        this.VoicebasedService.changeTabState(2);
        this.VoicebasedService.timeorAttemptLockState(true)
        this.currenttabb = 2; // Set the tab to "REPORT"
      } else {
        this.timeorattemptfinish = false;
      }
      this.checkloading = true;
      this._global.timercounting.next("true");
      this._global.endtime.next(element.courseDetails.endtime);
      this.sheetRoutingforjava(this.studentelementdetailsvalue);

    }
  }

  sheetRoutingforjava(element: any) {
    this.globallyValueSet(element);
    let noofattempts = 0;
    const numberofattemptsleft = element.numberofattemptsleft;
    const previousassignedattempts = element.previousassignedattempts;
    noofattempts = Number(previousassignedattempts) - Number(numberofattemptsleft) + 1;
    if (((element.simulationname == "Business Basics") || (element.simulationname == "Product & Consumer") || (element.simulationname == "Product & Consumer New")
      || (element.simulationname == "Change Management Module") || (element.simulationname == "Logistics") || (element.simulationname == "Change Management Module New")
      || (element.simulationname == "Financial Analysis") || (element.simulationname == "Promotions & Segments")
      || (element.simulationname == "Promotions & Segments New")
      || (element.simulationname == "Sales & Target") || (element.simulationname == "Portfolio Management")
      || (element.simulationname == "Value Chain") || (element.simulationname == "Value Chain New") || (element.simulationname == "CVP Analysis")
      || (element.simulationname == "Accounting") || (element.simulationname == "Accounting Arabic") ||
      (element.simulationname == "Pricing") || (element.simulationname == "Mergers & Acquisition") ||
      (element.simulationname == "HRP") || (element.simulationname == "HRP New") || (element.simulationname == "Design Thinking")
      || (element.simulationname == "CRM") || (element.simulationname == "Innovation")
      || (element.simulationname == "Ordering Basics") ||
      (element.simulationname == "HRM_Fintech") || (element.simulationname == "STP") || (element.simulationname == "IT Management")
      || (element.simulationname == "Ecommerce") || (element.simulationname == "Capital Budgeting")
      || (element.simulationname == "Project Management")//19 game
    )
      && (element.numberofattemptsleft == 0)) {
      noofattempts = element.previousassignedattempts;
    }

    if (element.numberofattemptsleft == 0) {
      noofattempts = element.previousassignedattempts;
    }

    if (element.simulationname != 'Language Lab') {
      this._global.noofattempts.next(String(noofattempts));
      if (this.microvoicetab != 'voicebased') {
        this._api.savekpivalue(0, 0, 0, "save", this.attempt);
      }
    }
    this.sharedService.updateBodyContent(element);
    try {
      // Persist identifiers for toolbar in new tabs
      if (element && element.courseDetails) {
        localStorage.setItem('activeCourseCode', element.courseDetails.coursecode || '');
        localStorage.setItem('activeCourseDetailsId', String(element.courseDetails.coursedetailsid || ''));
      }
    } catch {}
    // Hide GAME ARENA content when course is locked, without changing tab selection
    try {
      const locked = (element && element.courseDetails && element.courseDetails.lock === 'yes') || (element && (element.islocked === true || element.islocked === 'yes'));
      if (locked) {
        document.body.classList.add('game-arena-locked');
      } else {
        document.body.classList.remove('game-arena-locked');
      }
    } catch { }
    if (this.microvoicetab == 'microsim') {

      this.sharedService.enterInGame("enter");
    } else {
      this.producttype = element.simulationname;
    }
    this.courseRouting();
  }

  private refreshBodyContentFromServer(): void {
    try {
      const coursedetailsid = this.studentelementdetailsvalue?.courseDetails?.coursedetailsid;
      if (!coursedetailsid) { return; }
      const body = {
        email: this.useremail,
        caller: 'webstudent',
        usermode: 'student',
        searchtype: 'coursedetailsid',
        searchcontent: coursedetailsid
      } as any;
      this._restapiservice.getCourseDetails(body).subscribe((data: any) => {
        const latest = Array.isArray(data?.resultList) ? data.resultList.find((r: any) => String(r?.courseDetails?.coursedetailsid) === String(coursedetailsid)) || data?.resultList?.[0] : data?.resultList;
        if (latest) {
          this.sharedService.updateBodyContent(latest);
        }
      });
    } catch {}
  }


  courseRouting() {
    if (this.microvoicetab != 'voicebased') {
      if ((this.coursename == "Financial Analysis") || (this.coursename == "Financial Statement Analysis")) {
        this._router.navigate(['/auth/financialanalysisnewheader/component']);
      }
      else if (this.coursename == "Change Management Module") {
        this._router.navigate(['/auth/changemanagementheader/component']);
      }
      else if (this.coursename == "Change Management Module New") {
        this._router.navigate(['/auth/changemanagementnewheader/component']);
      }
      else if ((this.coursename == "Promotion & Segments") || (this.coursename == "Promotions & Segments")) {
        this._router.navigate(['/auth/promotionsigmentheader/component']);
      }
      else if ((this.coursename == "Promotion & Segments New") || (this.coursename == "Promotions & Segments New")) {
        this._router.navigate(['/auth/promotionsigmentnewheader/component']);
      }

      else if (this.coursename == "Business Basics") {
        this._router.navigate(['/auth/businessbascis/component']);
      }
      else if (this.coursename == "Product & Consumer") {
        this._router.navigate(['/auth/consumergameheader/component']);
      } else if (this.coursename == "Product & Consumer New") {
        this._router.navigate(['/auth/consumergameheadernew/component']);
      }
      else if ((this.coursename == "Logistics") || (this.coursename == "Logistics Model")) {
        this._router.navigate(['/auth/logisticsmodegameheader/component']);
      }
      else if (this.coursename == "Sales & Target") {
        this._router.navigate(['/auth/salestargetheader/component']);
      }
      else if (this.coursename == "Portfolio Management") {
        this._router.navigate(['/auth/portfoliomanagementnewheader/component']);
      }
      else if (this.coursename == "Value Chain") {
        this._router.navigate(['/auth/valuechainheader/component']);
      }
      else if (this.coursename == "Value Chain New") {
        this._router.navigate(['/auth/valuechainnewheader/component']);
      }
      else if (this.coursename == "CVP Analysis") {
        this._router.navigate(['/auth/cvpanalysisheader/component']);
      }
      else if (this.coursename == "Accounting") {
        this._router.navigate(['/auth/accountingheader/component']);
      }
      else if (this.coursename == "Accounting Arabic") {
        this._router.navigate(['/auth/accountingarabicheader/component']);
      }
      else if (this.coursename == "Pricing") {
        this._router.navigate(['/auth/pricingheader/component']);
      }
      else if (this.coursename == "Mergers & Acquisition") {
        this._router.navigate(['/auth/mergersacquisitionheader/component']);
      }
      else if (this.coursename == "HRP") {
        this._router.navigate(['/auth/hrpgameheader/component']);
      }
      else if (this.coursename == "HRP New") {
        this._router.navigate(['/auth/hrpnewgameheader/component']);
      }
      else if (this.coursename == "Design Thinking") {
        this._router.navigate(['/auth/designthinkingheader/component']);
      }

      else if (this.coursename == "CRM") {
        this._router.navigate(['/auth/crmgameheader/component']);
      }

      else if (this.coursename == "Innovation") {
        this._router.navigate(['/auth/innovationheader/component']);
      }
      else if (this.coursename == "Ordering Basics") {
        this._router.navigate(['/auth/orderingbasicsheader/component']);
      }
      else if (this.coursename == "HRM_Fintech") {
        this._router.navigate(['/auth/hrm/component']);
      }

      else if (this.coursename == "STP") {
        this._router.navigate(['/auth/stpgameheader/component']);
      }
      else if (this.coursename == "IT Management") {
        this._router.navigate(['/auth/itmanagementheader/component']);
      }
      else if (this.coursename == "Ecommerce") {
        this._router.navigate(['/auth/ecommerceheader/component']);
      }
      else if (this.coursename == "Capital Budgeting") {
        this._router.navigate(['/auth/capitalbudgetingheader/component']);
      }
      else if (this.coursename == "Project Management") {
        this._router.navigate(['/auth/projectmanagementheader/component']);
      }
    }

    else {
      if ((this.producttype == 'Language Lab') || (this.producttype == 'Others') ||
        (this.producttype == 'Non-AI-Coach') || (this.producttype == 'Non-Ai')) {
        if (this.producttype == 'Language Lab') {
          this._router.navigate(["/auth/component/chapter-dashboard"])
        } else {
          this.sharedService.enterInGame("voicebasedenter");
          this.fetchTermAndConditionData(this.attempt);
        }
      } else {
        this.sharedService.enterInGame("voicebasedenter");
        this.fetchTermAndConditionDataPrevious(this.attempt);
      }

    }
  }

  fetchTermAndConditionDataPrevious(attempt: string) {
    let apiname = "/voiceconversation/fetchvoiceconversation"
    this._api.fetchvoiceconversation(apiname, attempt).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          console.log("datas", data)
          let reportdisabled = "";
          if (reportdisabled == 'yes') {
            this.VoicebasedService.changeLockState(true);
          } else {
            this.VoicebasedService.changeLockState(false);
          }
          this.checkTermAndCondition = data.resultList[0].termscondition;
          if ((this.checkTermAndCondition == 'yes') && (this.timeorattemptfinish == false)) {
            this._global.acceptTerm.next(true);
            this.VoicebasedService.istermandconditionchangeState(true);
            this.VoicebasedService.changeTabState(1, { data: data });
            this.currenttabb = 1;
          } else {
            this._global.acceptTerm.next(false);
            this.VoicebasedService.istermandconditionchangeState(false);
            this._global.interviewcomplete.next(false);
            this.VoicebasedService.changeTabState(0, { data: data });
            this.currenttabb = 0;
          }
          this._router.navigate(["/auth/common/voicebasedparticipantheader"])
        }
      }
    )
  }

  fetchTermAndConditionData(attempt: string) {
    let apiname = "/nonaivoiceinterview/fetchvoiceconversation";
    this._api.fetchvoiceconversationAi(apiname, attempt, '', '', '').subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          let reportdisabled = "";
          if (reportdisabled == 'yes') {
            this.VoicebasedService.changeLockState(true);
          } else {
            this.VoicebasedService.changeLockState(false);
          }
          this.checkTermAndCondition = data.resultList[0].termscondition;
          if (data.resultList[0].interviewcompletedstatus != 'yes') {
            if ((this.checkTermAndCondition == 'yes') && (this.timeorattemptfinish == false)) {
              this.VoicebasedService.istermandconditionchangeState(true);
              this._global.acceptTerm.next(true);
              this._global.interviewcomplete.next(false);
              this.VoicebasedService.changeTabState(1, { data: data });
              this.currenttabb = 1;
            } else {
              this.VoicebasedService.istermandconditionchangeState(false);
              this._global.acceptTerm.next(false);
              this._global.interviewcomplete.next(false);
              this.VoicebasedService.changeTabState(0, { data: data });
              this.currenttabb = 0;
            }
          } else {
            this.VoicebasedService.istermandconditionchangeState(true);
            this._global.interviewcomplete.next(true);
            this.VoicebasedService.changeTabState(2, { data: data });
            this.currenttabb = 2;
          }

          this._router.navigate(["/auth/common/voicebasedparticipantheader"])

        }
      }
    )
  }
  addActiveUser() {
    let action = "addactiveuser";
    this._login.DriveConfigdata("/driveconfig/drivemailconfiguration", this.drivemailconfigurationidvalue, this.drivemailvalue, this.clientsecretvalue,
      this.clientidvalue, this.refreshtokenvalue, "", "", action).subscribe(
        (data: any) => {

        })
  }




  ngOnDestroy() {
    this.Emailsub.unsubscribe();
    this.Usernamesub.unsubscribe();
    this.Sheetidsub.unsubscribe();
    this.Attemptsub.unsubscribe();
    this.Studentelementdetailssub.unsubscribe();
    this.Drivemailsub.unsubscribe();
    this.Drivemailconfigurationidsub.unsubscribe();
    this.Clientidsub.unsubscribe();
    this.Refreshtokensub.unsubscribe();
    this.Clientsecretsub.unsubscribe();
    if (this.refreshBodySub) { this.refreshBodySub.unsubscribe(); }
  }

}


@Component({
  selector: 'updatestudent.component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: 'updatestudent.html',
  styleUrls: ['./dashboardstudent.component.scss']
})


export class UpdateStudent implements OnInit {
  useremail: string = '';
  username: string = '';
  userpassword: string = '';
  Emailsub: Subscription;
  Passwordsub: Subscription;
  Namesub: Subscription;
  userrole: string = '';
  constructor(
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    private _global: GlobalService,
    public dialog: MatDialog,
    public form: FormBuilder,
    public dialogRef: MatDialogRef<UpdateStudent>,
    private authenticationService: AuthenticationService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;

    });
    this.Passwordsub = this._global.userpassword.subscribe((data) => {
      this.userpassword = data;

    });
    this.Namesub = this._global.username.subscribe((data) => {
      this.username = data;

    });

  }
  updatestudenthomepage !: FormGroup


  ngOnInit(): void {

    this.buildForm()


  }

  public buildForm() {
    this.updatestudenthomepage = this.form.group({
      newpassword: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],

      studentname: [this.username],
      studentemailid: [this.useremail],
      studentpassword: [this.userpassword],

    });
    this.disableformvalue()
  }

  disableformvalue() {
    if ((this.username.length != 0) && (this.useremail.length != 0)
      && (this.userpassword.length != 0)) {
      // this.updatestudenthomepage.get('studentname')?.disable()
      this.updatestudenthomepage.get('studentemailid')?.disable()
      this.updatestudenthomepage.get('studentpassword')?.disable()
    }
  }
  

  update() {
    const { studentname, newpassword, confirmpassword } = this.updatestudenthomepage.value;
    let body: any = {
      action: 'update',
      status: 'active',
      caller: 'webstudent',
      usermode: 'student',
      email: this.useremail,
      deletedflag: 'no'
    };

    if (studentname && studentname !== this.username && !newpassword && !confirmpassword) {
      body.username = studentname;
      body.updatetag = "username";
    }

    else if ((!studentname || studentname === this.username) && newpassword && confirmpassword) {
      if (newpassword !== confirmpassword) return this._alert.error("Passwords do not match");
      body.password = newpassword;
       body.updatetag = "password";

    }

    else if (studentname && studentname !== this.username && newpassword && confirmpassword) {
      if (newpassword !== confirmpassword) return this._alert.error("Passwords do not match");
      body.username = studentname;
      body.password = newpassword;
      body.updatetag = "both";
    }

    else if (
      (!studentname || studentname === this.username) &&
      !newpassword &&
      !confirmpassword
    ) {
      this._alert.error("Nothing to update!");
      this.dialogRef.close();
      return;                
    }

    this._restapiservice.searchmailid(body).subscribe((data: any) => {
      if (data.status === 'Success') {
        if (body.username) this._global.username.next(studentname);
        if (body.password) {
          this._global.userpassword.next(newpassword);
          this.authenticationService.login(body.username || this.username, newpassword, this.useremail.toLowerCase(), "student");
        }
        this._alert.success(data.message);
        this.dialogRef.close();
      } else {
        this._alert.error(data.message);
      }
    });
  }





  ngOnDestroy() {
    this.Emailsub.unsubscribe();
    this.Passwordsub.unsubscribe();
    this.Namesub.unsubscribe();

  }
}

@Component({
  selector: 'enrollstudent.component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: 'enrollstudent.html',
  styleUrls: ['./dashboardstudent.component.scss']
})

export class EnrollStudent implements OnInit {

  Emailsub: Subscription;
  Usersub: Subscription;
  Passwordsub: Subscription;
  useremail: string = '';
  username: string = '';
  userpassword: string = '';
  buttondisabled: boolean = false;
  constructor(
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    private _global: GlobalService,
    public dialog: MatDialog,
    public form: FormBuilder,
    private _router: Router,
    private _login: LoginService,
    public dialogRef: MatDialogRef<EnrollStudent>,
    @Inject(MAT_DIALOG_DATA) public data: any,


  ) {
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;

    });

    this.Usersub = this._global.username.subscribe((data) => {
      this.username = data;

    });

    this.Passwordsub = this._global.userpassword.subscribe((data) => {
      this.userpassword = data;

    });

  }

  selectenrollstudentgroup !: FormGroup



  ngOnInit(): void {
    this.buildForm();
    if (this.data) {
      this.selectenrollstudentgroup.patchValue({
        coursecode: this.data
      });
    }
  }

  public buildForm() {
    this.selectenrollstudentgroup = this.form.group({
      coursecode: ['', [Validators.required]],
    })
  }

  enrollbutton() {

    if (this.selectenrollstudentgroup.valid) {
      this.buttondisabled = true;
      let body = {
        username: this.username,
        email: this.useremail,
        caller: 'webstudent',
        usermode: 'student',
        password: this.userpassword,
        coursecode: this.selectenrollstudentgroup.value.coursecode,
        registertype: 'courseregister',
        action: 'save'
      };
      this._login.checkstudentlogin(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this._alert.success(data.message);
          this.dialogRef.close(this.data);
        } else {
          this.buttondisabled = false;
          this._alert.error(data.message);
          this.dialogRef.close(this.data);
        }
      });
    } else {
      this._alert.error("Please fill the field")
    }
  }
  ngOnDestroy() {
    this.Emailsub.unsubscribe();
    this.Usersub.unsubscribe();
    this.Passwordsub.unsubscribe();
  }

}

export interface PeriodicElement { }


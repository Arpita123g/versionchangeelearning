import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { animate, state, style, transition, trigger, } from '@angular/animations';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatChipsModule,
    MatRadioModule,
    MatCardModule,
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.4s ease-out', style({ height: 275, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 275, opacity: 1 }),
        animate('0.4s ease-in', style({ height: 0, opacity: 0 })),
      ]),

    ]),

    trigger('detailExpand', [
      state('collapsed', style({ height: 0, minHeight: '0', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),

    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ],


})
export class UserComponent implements OnInit {

  //toDisplay = false;
  icon = 'keyboard_arrow_down';
  Emailsub: Subscription;
  useremail: string | undefined;
  Rolesub: Subscription;
  userrole: string = '';
  StatusClass = 'coursecode';
  ELEMENT_DATA: PeriodicElement[] = [];
  TABLEELEMENT_DATA: PeriodicElement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  public previouselement: any;
  public currentelement: any;
  public expandelement: any;
  displayedColumns: string[] = ['instructorname', 'emailid', 'password', 'update', 'delete', 'courses', 'add'];
  displayedColumnsexpand: string[] = ['coursecode', 'registrationlink', 'coursename', 'simulationname', 'datecreated', 'licenseno', 'creditno', 'update'];
  // displayedColumnsexpand: string[] = ['coursecode','coursename', 'simulationname', 'datecreated', 'licenseno', 'creditno', 'update'];

  dataSource = new MatTableDataSource<PeriodicElement>();
  dataSourceelement = new MatTableDataSource<PeriodicElement>();
  createcoursegroup!: FormGroup;
  studentemail: string = '';
  isadd = false;
  isaddemail = false;
  isinstructoremail: boolean = false;
  isstudentemail: boolean = false;
  searchFlag = "instructor"
  instructormailidforsearch = '';
  studentemailsearch = '';
  currentRouter = this._router.url;
  closed: boolean = false;
  emailverified: boolean = false;
  checkloading: boolean = false;
  isButtonDisabled: boolean = false;


  totalItems = 0;            // Total number of items from the API
  pageSize = 20;             // Number of items per page
  currentPage = 0;
  selectedLanguage: string[] = [];
  searchcoursecode: string = "";
  copiedCourseCodes: { [code: string]: boolean } = {};
  Instructorcarddetailssub: Subscription;
  instructorcarddetails: any = [];
  constructor(private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public form: FormBuilder,
    private _global: GlobalService,
    private _router: Router,
    public _restapiservice: RestapiService,
    public _api: ApiService,
    private activatedRoute: ActivatedRoute,
  private cdr: ChangeDetectorRef) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = (data ?? undefined) as string | undefined;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });
    this.Instructorcarddetailssub = this._global.instructorcarddetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });

  }

  ngOnInit(): void {
    this.checkloading = true;
    this.buildform();
    this.getTotalCountOfList();
    // this.getTableData();

    this.createcoursegroup.get('instructormailid')?.valueChanges.subscribe((email: string) => {
      const simulationControl = this.createcoursegroup.get('simulation');
      if (this.createcoursegroup.get('instructormailid')?.valid) {
        simulationControl?.enable();
      } else {
        simulationControl?.disable();
      }
    });
  }
  language: string[] = [
    'English',
    'Hindi',
    'French',
    'Spanish',
  ];

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
  getTotalCountOfList() {
    let body = {
      "email": this.useremail,
      "caller": "webadmin",
      "usermode": "admin",
      "searchtype": "instructor",
      "gametype": "microsimulation"
    }
    let path = '/register/totalinstructorcount'

    this._api.totalinstructorcount(body, path).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          let message = data.message;

          // Check if the response has instructorcount directly
          if (data.instructorcount !== undefined) {
            this.totalItems = data.instructorcount;
          } else {
            try {
              // Check if message is already a JSON object
              if (typeof message === 'object') {
                this.totalItems = message.instructorcount || 0;
              } else if (typeof message === 'string') {
                // Check if it's a simple success message
                if (message.toLowerCase().includes('success')) {
                  console.log('API call successful, but no instructor count returned. Using default value.');
                  this.totalItems = 0; // or fetch from another endpoint
                } else {
                  // Try to parse as JSON string
                  // Step 1: Replace single quotes around the value to make it valid JSON
                  message = message.replace(/'/g, '"');

                  // Step 2: Parse the corrected string to a JSON object
                  const jsonObject = JSON.parse(message);

                  // Step 3: Access the instructorcount value
                  const instructorCount = jsonObject.instructorcount;
                  this.totalItems = instructorCount;
                }
              }
            } catch (error) {
              console.warn('Failed to parse instructor count message:', message, error);
              // Fallback: set a default value or handle the error gracefully
              this.totalItems = 0;
            }
          }
          
          // console.log("c",instructorCount); // Output: 417
          this.getTableData();
        }
      })

  }



  getTableData() {
    const pageoffset = this.currentPage * this.pageSize;
    this.checkloading = true;
    let body = {
      email: this.useremail,
      caller: 'webadmin',
      usermode: 'admin',
      searchtype: 'instructor',
      gametype: 'microsimulation',
      pageoffset: pageoffset

    };
    this._restapiservice.getRegisterUserListForUSerComp(body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          this.ELEMENT_DATA = data.resultList;
          this.dataSource = new MatTableDataSource<PeriodicElement>(
            this.ELEMENT_DATA
          );

          // if (this.paginator) this.dataSource.paginator = this.paginator;
          this.checkloading = false;
        } else {
          this.checkloading = false;
          this._alert.error(data.message);
        }
      },
      (error: any) => {
        this.checkloading = false;
        this._alert.error('something went wrong');
      }
    );
  }


  // Handle paginator page change event
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log("more",this.currentPage,this.pageSize)
    this.getTableData();
  }


  state: string = 'default';

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }



  emailvalidation() {
    this.emailverified = this.isValidEmail();
    if (this.emailverified == false) {
      this._alert.error("Instructor email id should be email format");
    }
  }
  isValidEmail(): boolean {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,20}$/.test(this.createcoursegroup.value.instructormailid);
  }

  refresh(): void {
    window.location.reload();
  }

  reLoad() {
    this._router.navigate([this.currentRouter])
  }
  parent() {
    this._router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  toggleadd() {
    this.isadd = !this.isadd;
    this.isaddemail = false;
  }

  toggleaddemail() {
    this.isaddemail = !this.isaddemail;
    this.isadd = false;
  }

  modechange() {
    if (this.isinstructoremail == true) {
      this.isstudentemail == false;
    } else {
      this.isstudentemail == true;
    }
  }


  edit(e: any) {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '50%',
      data: e,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }



  updatepassword(e: any) {
    const dialogRef = this.dialog.open(UpdatePasswordUserComponent, {
      width: '50%',
      data: e,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  changeIcon(icon: any) {
    if (this.icon == 'keyboard_arrow_down') {
      this.icon = 'keyboard_arrow_up';
    }
    else {
      this.icon = 'keyboard_arrow_down';
    }
  }

  delete(e: any) {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '400px',
      data: e,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }

  addcourse(e: any) {
    const dialogRef = this.dialog.open(AddCourseUserComponent, {
      width: '50%',
      data: e,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTableData();
    });
  }


  course(e: any) {

    let body = {
      email: this.useremail,
      caller: 'webadmin',
      usermode: 'admin',
      searchtype: 'instructormail',
      status: 'active',
      searchcontent: e.email,
      gametype: "microsimulation"

    };
    this._restapiservice.getCourseDetails(body).subscribe(
      (data: any) => {
        if (data.status == 'Success') {

          if (this.previouselement != null) {
            this.previouselement.isExpanded = false;
          }
          this.currentelement = this.previouselement;
          this.previouselement = e;
          e.isExpanded = !e.isExpanded;
          this.TABLEELEMENT_DATA = data.resultList;
          this.dataSourceelement = new MatTableDataSource<PeriodicElement>(this.TABLEELEMENT_DATA);

          // if (this.paginator) this.dataSource.paginator = this.paginator;

        } else {
          this._alert.error(data.message)
        }
      },
      (error: any) => {

        this._alert.error('something went wrong');
      }
    );
  }

  search() {
    if (this.searchFlag == 'instructor') {
      let body = {
        email: this.useremail,
        status: 'active',
        caller: 'webadmin',
        usermode: 'admin',
        searchtype: 'instructormail',
        searchcontent: this.instructormailidforsearch,
      };

      this._restapiservice.getRegisterUserListForUSerComp(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this.ELEMENT_DATA = data.resultList;
          this.dataSource = new MatTableDataSource<PeriodicElement>(
            this.ELEMENT_DATA
          );
          if (this.paginator) this.dataSource.paginator = this.paginator;
        } else {
          this._alert.error(data.message);
        }
      });

    } else if (this.searchFlag == 'coursecode') {
      let body = {
        email: this.useremail,
        status: 'active',
        caller: 'webadmin',
        usermode: 'admin',
        searchtype: 'coursecode', // change searchtype to 'coursecode'
        searchcontent: this.searchcoursecode,
      };

      this._restapiservice.getRegisterUserListForUSerComp(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this.ELEMENT_DATA = data.resultList;
          this.dataSource = new MatTableDataSource<PeriodicElement>(
            this.ELEMENT_DATA
          );
          if (this.paginator) this.dataSource.paginator = this.paginator;
        } else {
          this._alert.error(data.message);
        }
      });

    } else {
      this._global.coursecode.next('');
      this._global.studentemail.next(this.studentemailsearch);
      this._router.navigate(['/auth/component/studentmngsec']);
    }
  }




  public buildform() {
    this.createcoursegroup = this.form.group({
      instructormailid: ['', [Validators.required]],
      instructorname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      // simulation: ['', [Validators.required]],
      simulation: [{ value: '', disabled: true }, Validators.required],
      coursename: ['', [Validators.required]],
      nooflicense: ['', [Validators.required]],
      noofcredit: ['', [Validators.required]],
      studentemailsearch: [''],
      instructormailidforsearch: [''],
      languagename: ['', [Validators.required]],
      ///////////////////////////////
      case: ['', [Validators.required]]
    });
  }

  /////////////////////////////// for multiple case testing 19/05/25
  createdcasetype: string = '';
  cesimCaseOptions:string[] = [];
  yourCaseOptions: string[] = [];
  onCaseChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (this.cesimCaseOptions.includes(selectedValue)) {
      this.createdcasetype = 'cesimcase';
    } else if (this.yourCaseOptions.includes(selectedValue)) {
      this.createdcasetype = 'instructorcase';
    } else {
      this.createdcasetype = '';
    }
  }

  // ///////////////// for simulation api call and fetch simulation name.......
  // onSelectSimulation(event: Event) {
  //   const simulationName = (event.target as HTMLSelectElement).value;

  //   // Access the value of the 'instructormailid' form control
  //   const instructorEmail = this.createcoursegroup.get('instructormailid')?.value;
  //   // const instructorpanelid = this.instructormailid ? this.instructorelementdetailsvalue.instructorpanelid : 0;
  //   // Check if the instructor email is provided
  //   if (!instructorEmail) {
  //     this._alert.error('Please enter the instructor email before selecting a simulation.');
  //     return;
  //   }

  //   // Proceed with the API call if the email is provided
  //   this._api.fetchassigncaselist(
  //     simulationName,instructorpanelid,
  //   ).subscribe((data: any) => {
  //     if (data.status === "Success") {
  //       this.yourCaseOptions = data.resultList;
  //       this.checkloading = false;
  //     }
  //   });
  // }

  // searchtype:string =""
  onSelectSimulation(event: Event) {
    const simulationName = (event.target as HTMLSelectElement).value;
    const instructorEmail = this.createcoursegroup.get('instructormailid')?.value;
    if (!instructorEmail) {
      this._alert.error('Please enter the instructor email before selecting a simulation.');
      return;
    }
    this.cesimCaseOptions = [];
  
    // if(simulationName == "Business Basics"){
    //   this.cesimCaseOptions.push("Local tea shop case");
    // }
    // if(simulationName == "Product & Consumer"){
    //   this.cesimCaseOptions.push("Gaming case");
    // }
    // if(simulationName == "Change Management Module"){
    //   this.cesimCaseOptions.push("Merger & Acquisition case");
    // }
    // if(simulationName == "Logistics"){
    //   this.cesimCaseOptions.push("Local 4 PL case");
    // }
    // if(simulationName == "Financial Analysis"){
    //   this.cesimCaseOptions.push("Automotive case");
    // }
    // if(simulationName == "Promotions & Segments"){
    //   this.cesimCaseOptions.push("Fmcg case");
    // }
    // if(simulationName == "Sales & Target"){
    //   this.cesimCaseOptions.push("Fmcg case");
    // }
    // if(simulationName == "Portfolio Management"){
    //   this.cesimCaseOptions.push("Brokerage firm case");
    // }
    // if(simulationName == "Value Chain"){
    //   this.cesimCaseOptions.push("Smartphone value case");
    // }
    // if(simulationName == "CVP Analysis"){
    //   this.cesimCaseOptions.push("Garment manufacturing case");
    // }
    // if(simulationName == "Accounting" || simulationName == "Accounting Arabic"){
    //   this.cesimCaseOptions.push("Local paper firm case");
    // }
    // if(simulationName == "Pricing"){
    //   this.cesimCaseOptions.push("Airlines case");
    // }
    // if(simulationName == "Mergers & Acquisition"){
    //   this.cesimCaseOptions.push("Automotive case");
    // }
    // if(simulationName == "HRP"){
    //   this.cesimCaseOptions.push("Clothing online case");
    // }
    // if(simulationName == "Design Thinking"){
    //   this.cesimCaseOptions.push("Smartphone case");
    // }
    // if(simulationName == "CRM"){
    //   this.cesimCaseOptions.push("Technology case");
    // }
    // if(simulationName == "Innovation"){
    //   this.cesimCaseOptions.push("Go to market tech case");
    // }
    // if(simulationName == "Ordering Basics"){
    //   this.cesimCaseOptions.push("Art firm case");
    // }
    // if(simulationName == "STP"){
    //   this.cesimCaseOptions.push("Smartphone design case");
    // }
    // if(simulationName == "Ecommerce"){
    //   this.cesimCaseOptions.push("Clothing case");
    // }
    // if(simulationName == "Capital Budgeting"){
    //   this.cesimCaseOptions.push("Insurance company case");
    // }
    // if(simulationName == "IT Management"){
    //   this.cesimCaseOptions.push("Consulting case");
    // }

    // const simulationCasesMap: { [key: string]: string[] } = {
    //   "Business Basics": [
    //     "Local tea shop case",
    //   ],
    //   "Product & Consumer": [
    //     "Gaming case",
    //   ],
    //   "Change Management Module": [
    //     "Merger & Acquisition case",
    //   ],
    //   "Logistics": [
    //     "Local 4 PL case",
    //   ],
    //   "Financial Analysis": [
    //     "Automotive case",
    //   ],
    //   "Promotions & Segments": [
    //     "Fmcg case",
    //   ],
    //   "Value Chain": [
    //     "Smartphone value case",
    //   ],
    //   "CVP Analysis": [
    //     "Garment manufacturing case",
    //   ],
    //   "Accounting": [
    //     "Local paper firm case",
    //   ],
    //   "Accounting Arabic": [
    //     "Local paper firm case",
    //   ],
    //   "Pricing": [
    //     "Airlines case",
    //   ],
    //   "Mergers & Acquisition": [
    //     "Automotive case",
    //   ],
    //   "HRP": [
    //     "Clothing online case",
    //   ],
    //   "Design Thinking": [
    //     "Smartphone case",
    //   ],
    //   "CRM": [
    //     "Technology case",
    //   ],
    //   "Innovation": [
    //     "Go to market tech case",
    //   ],
    //   "Ordering Basics": [
    //     "Art firm case",
    //   ],
    //   "STP": [
    //     "Smartphone design case",
    //   ],
    //   "Ecommerce": [
    //     "Clothing case",
    //   ],
    //   "Capital Budgeting": [
    //     "Insurance company case",
    //   ],
    //   "IT Management": [
    //     "Consulting case",
    //   ],
    // };
    // const casesToPush = simulationCasesMap[simulationName];
    // if (casesToPush) {
    //   this.cesimCaseOptions.push(...casesToPush);
    // }
    




    this.cesimCaseOptions = this.getCasesForSimulation(simulationName);
    
    let apiName ="/primarycourse/fetchassigncaselist";
    let body = {
      email: instructorEmail,
      caller: "webinstructor",
      usermode: "instructor",
      simulationname: simulationName,
      searchtype: "yourcasefromadmin",
      instructorpanelid: 0,
      searchcontent: "",
      coursedetailsid:0,
    }
    this._api.fetchYourCaseList(
      body,apiName,
    ).subscribe((data: any) => {
      this.yourCaseOptions = [];
      if (data.status === "Success") {
        for(let i=0; i<data.resultList.length; i++){
          this.yourCaseOptions.push(data.resultList[i].coursename);
        }
        // this.yourCaseOptions = data.resultList[0].coursename;
        this.checkloading = false;
      }
    });
  }
  private getCasesForSimulation(simulationName: string): string[] {
    const simulationCasesMap: { [key: string]: string[] } = {
      'Business Basics': ['Local tea shop case'],
      'Product & Consumer': ['Gaming case'],
      'Change Management Module': ['Merger & Acquisition case'],
      'Logistics': ['Local 4 PL case'],
      'Financial Analysis': ['Automotive case'],
      'Promotions & Segments': ['Fmcg case'],
      'Sales & Target': ['Fmcg case'],
      'Portfolio Management': ['Brokerage firm case'],
      'Value Chain': ['Smartphone value case'],
      'CVP Analysis': ['Garment manufacturing case'],
      'Accounting': ['Local paper firm case'],
      'Accounting Arabic': ['Local paper firm case'],
      'Pricing': ['Airlines case'],
      'Mergers & Acquisition': ['Automotive case'],
      'HRP': ['Clothing online case'],
      'Design Thinking': ['Smartphone case'],
      'CRM': ['Technology case'],
      'Innovation': ['Go to market tech case'],
      'Ordering Basics': ['Art firm case'],
      'STP': ['Smartphone design case'],
      'Ecommerce': ['Clothing case'],
      'Capital Budgeting': ['Insurance company case'],
      'IT Management': ['Consulting case'],
    };
    return simulationCasesMap[simulationName] || [];
  }



  ////////////////////////////////////////////////////












  save() {
    this.checkloading = true;
    this.createcoursegroup.value;
    if (this.emailverified != false) {
      if (this.createcoursegroup.valid) {
        if ((this.createcoursegroup.value.nooflicense > 0) &&
          (this.createcoursegroup.value.noofcredit >= 0 && this.createcoursegroup.value.noofcredit <= 20)) {
          this.isButtonDisabled = true;
          let body = {
            email: this.useremail,
            instructormailid: this.createcoursegroup.value.instructormailid.toLowerCase(),
            instructorname: this.createcoursegroup.value.instructorname,
            password: this.createcoursegroup.value.password,
            simulation: this.createcoursegroup.value.simulation,
            coursename: this.createcoursegroup.value.coursename,
            nooflicense: this.createcoursegroup.value.nooflicense,
            aicreditmicrosim: this.createcoursegroup.value.noofcredit,
            action: 'save',
            status: 'active',
            caller: 'webadmin',
            usermode: this.userrole,
            gametype: "microsimulation",
            gamelanguage: this.createcoursegroup.value.languagename,
            createdcasename: this.createcoursegroup.value.case,
            createdcasetype: this.createdcasetype,

          };
          console.log("body", body);
          this._restapiservice.saveCourse(body).subscribe((data: any) => {
            if (data.status == 'Success') {
              this.getTableData();
              this._alert.success(data.message);
              this.createcoursegroup.reset();
              this.checkloading = false;
            } else {
              this.checkloading = false;
              this._alert.error(data.message);
            }
          });
        } else if ((this.createcoursegroup.value.nooflicense <= 0) || (this.createcoursegroup.value.noofcredit < 0)) {
          this.isButtonDisabled = false;
          this.checkloading = false;
          this._alert.error("Nooflicense should be greater than 0 and credit should be equal or greater than 0");
        } else {
          this.isButtonDisabled = false;
          this.checkloading = false;
          this._alert.error("Credit should not be greater than 20");
        }
      } else {
        this.isButtonDisabled = false;
        this.checkloading = false;
        this._alert.error("All field must be required")
      }
    } else {
      this.isButtonDisabled = false;
      this.checkloading = false;
      this._alert.error("Instructor email id should be email format");
    }
    this.checkloading = false;
  }

  // save() {
  //   this.checkloading = true;
  //   this.createcoursegroup.value;
  //   if (this.emailverified != false) {
  //     if (this.createcoursegroup.valid) {
  //       if ((this.createcoursegroup.value.nooflicense > 0) &&
  //         (this.createcoursegroup.value.noofcredit >= 0 && this.createcoursegroup.value.noofcredit <= 20)) {
  //         this.isButtonDisabled = true;
  //         let body = {
  //           email: this.useremail,
  //           instructormailid: this.createcoursegroup.value.instructormailid.toLowerCase(),
  //           instructorname: this.createcoursegroup.value.instructorname,
  //           password: this.createcoursegroup.value.password,
  //           simulation: this.createcoursegroup.value.simulation,
  //           coursename: this.createcoursegroup.value.coursename,
  //           nooflicense: this.createcoursegroup.value.nooflicense,
  //           aicreditmicrosim: this.createcoursegroup.value.noofcredit,
  //           action: 'save',
  //           status: 'active',
  //           caller: 'webadmin',
  //           usermode: this.userrole,
  //           gametype: "microsimulation",
  //           gamelanguage:this.createcoursegroup.value.languagename,
  //         };
  //         console.log("body",body);
  //         this._restapiservice.saveCourse(body).subscribe((data: any) => {
  //           if (data.status == 'Success') {
  //             this.getTableData();
  //             this._alert.success(data.message);
  //             this.createcoursegroup.reset();
  //             this.checkloading = false;
  //           } else {
  //             this.checkloading = false;
  //             this._alert.error(data.message);
  //           }
  //         });
  //       } else if ((this.createcoursegroup.value.nooflicense <= 0) || (this.createcoursegroup.value.noofcredit < 0)) {
  //         this.isButtonDisabled = false;
  //         this.checkloading = false;
  //         this._alert.error("Nooflicense should be greater than 0 and credit should be equal or greater than 0");
  //       } else {
  //         this.isButtonDisabled = false;
  //         this.checkloading = false;
  //         this._alert.error("Credit should not be greater than 20");
  //       }
  //     } else {
  //       this.isButtonDisabled = false;
  //       this.checkloading = false;
  //       this._alert.error("All field must be required")
  //     }
  //   } else {
  //     this.isButtonDisabled = false;
  //     this.checkloading = false;
  //     this._alert.error("Instructor email id should be email format");
  //   }
  // }


  modifyStr(str: string) {
    if (str.length < 18) {
      return str;
    } else {
      return str.substring(0, 15) + '...';
    }
  }


  checkstorage() {
    localStorage.getItem("islogin");
    this.useremail = localStorage.getItem("email") ?? undefined;
  }


  goTo(code: string) {
    this._global.studentemail.next('')
    this._global.coursecode.next(code);
    this._router.navigate(['/auth/component/studentmngsec']);
  }

  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}
// USER UPDATE COMPONENT

@Component({
  selector: 'updateuser.component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatButtonModule, MatInputModule],
  templateUrl: 'updateuser.component.html',
  styleUrls: ['./user.component.scss'],
})


export class UpdateUserComponent implements OnInit {

  Emailsub: Subscription;
  Rolesub: Subscription;
  useremail: string = '';
  userrole: string = '';
  checkloading: boolean = false;
  isButtonDisabled: boolean = false;

  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdateUserComponent>,

  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });

  }

  createcoursegroup !: FormGroup

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.createcoursegroup = this.form.group({
      nooflicense: [this.data.nooflicense, [Validators.required]],
      aicreditmicrosim: [this.data.aicreditmicrosim, [Validators.required]]

    });
  }

  update() {
    console.log("isButtonDisabled.....check 23")

    if (this.createcoursegroup.valid) {
      if ((this.createcoursegroup.value.nooflicense > 0) &&
        (this.createcoursegroup.value.aicreditmicrosim >= 0 && this.createcoursegroup.value.aicreditmicrosim <= 20)) {
        this.isButtonDisabled = true;
        this.checkloading = true;
        let body = {
          coursedetailsid: this.data.coursedetailsid,
          email: this.useremail,
          password: this.data.password,
          coursecode: this.data.coursecode,
          nooflicense: this.createcoursegroup.value.nooflicense,
          aicreditmicrosim: this.createcoursegroup.value.aicreditmicrosim,
          action: 'update',
          status: 'active',
          caller: 'webadmin',
          usermode: 'admin',
          gametype: "microsimulation"
        };

        this._restapiservice.saveCourse(body).subscribe((data: any) => {
          if (data.status == 'Success') {
            // this.checkloading = false;
            this._alert.success(data.message);
            this.dialogRef.close(this.data);
          } else {
            this.checkloading = false;
            this._alert.error(data.message)
          }
        });
      } else if ((this.createcoursegroup.value.nooflicense <= 0) || (this.createcoursegroup.value.noofcredit < 0)) {
        this.isButtonDisabled = false;
        this.checkloading = false;
        this._alert.error("Nooflicense should be greater than 0 and credit should be equal or greater than 0");
      } else {
        this.isButtonDisabled = false;
        this.checkloading = false;
        this._alert.error("Credit should not be greater than 20");
      }
    } else {
      this.isButtonDisabled = false;
      this._alert.error("All field must be required")
    }
  }


  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}



@Component({
  selector: 'deleteuser.component',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: 'deleteuser.component.html',
  styleUrls: ['./user.component.scss'],
})


export class DeleteUserComponent implements OnInit {

  Emailsub: Subscription;
  Rolesub: Subscription;
  useremail: string = '';
  userrole: string = '';

  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteUserComponent>,




  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      //console.log(data);
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      //console.log(data);
      this.userrole = data;
    });

  }

  createcoursegroup !: FormGroup

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.createcoursegroup = this.form.group({

      nooflicense: [this.data.nooflicense],
    });
  }

  confirm(ok: boolean) {

    if (ok == true) {

      let body = {
        email: this.data.email,
        caller: 'webinstructor',
        usermode: 'instructor',
        action: 'delete'

      };

      this._restapiservice.deleteorupdateuser(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this.dialogRef.close(this.data);
        } else {
          this._alert.error(data.status);
        }
      },
        (error: any) => {
          sessionStorage.removeItem('islogin');
          sessionStorage.removeItem('mobile');

        })
    }
    else {
      this.dialogRef.close();
    }
  }

  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}

@Component({
  selector: 'updatepassworduser.component',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatButtonModule, MatInputModule],
  templateUrl: 'updatepassworduser.component.html',
  styleUrls: ['./user.component.scss'],
})


export class UpdatePasswordUserComponent implements OnInit {

  Emailsub: Subscription;
  Rolesub: Subscription;
  useremail: string = '';
  userrole: string = '';
  checkloading: boolean = false;
  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdatePasswordUserComponent>,

  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });

  }

  createuserpasswordgroup !: FormGroup

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.createuserpasswordgroup = this.form.group({
      password: [this.data.password, [Validators.required]],
    });
  }

  update() {

    if (this.createuserpasswordgroup.valid) {
      this.checkloading = true;
      let body = {

        email: this.data.email,
        caller: 'webinstructor',
        usermode: 'instructor',
        password: this.createuserpasswordgroup.value.password,
        action: 'update',
        deletedflag: 'no'
      };
      //console.log("body",body);
      this._restapiservice.deleteorupdateuser(body).subscribe((data: any) => {
        if (data.status == 'Success') {
          this.checkloading = false;
          this._alert.success(data.message);
          this.dialogRef.close(this.data);
        } else {
          this.checkloading = false;
          this._alert.error(data.message)
        }
      });
    } else {

      this._alert.error("All field must be required")
    }
  }


  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}

@Component({
  selector: 'addcourseuser.component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatRadioModule,
  ],
  templateUrl: 'addcourseuser.component.html',
  styleUrls: ['./user.component.scss'],
})


export class AddCourseUserComponent implements OnInit {

  Emailsub: Subscription;
  Rolesub: Subscription;
  useremail: string = '';
  userrole: string = '';
  checkloading: boolean = false;
  isButtonDisabled: boolean = false;
  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public _api: ApiService,
    public dialogRef: MatDialogRef<AddCourseUserComponent>,

  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });

  }

  addcoursegroup !: FormGroup

  ngOnInit(): void {
    this.buildForm();
    console.log("Matdata", this.data)
  }
  language: string[] = [
    'English',
    'Hindi',
    'French',
    'Spanish',

  ];

  public buildForm() {
    this.addcoursegroup = this.form.group({
      simulation: ['', [Validators.required]],
      coursename: ['', [Validators.required]],
      licenseno: ['', [Validators.required]],
      creditno: ['', [Validators.required]],
      languagename: ['', [Validators.required]],
      case: ['', [Validators.required]]

    });
  }
  createdcasetype: string = '';
  cesimCaseOptions:string[] = [];
  yourCaseOptions: string[] = [];
  onCaseChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;

    if (this.cesimCaseOptions.includes(selectedValue)) {
      this.createdcasetype = 'cesimcase';
    } else if (this.yourCaseOptions.includes(selectedValue)) {
      this.createdcasetype = 'instructorcase';
    } else {
      this.createdcasetype = '';
    }
  }
  onSelectSimulation(event: Event) {
    const simulationName =(event.target as HTMLSelectElement).value;
    this.cesimCaseOptions = [];
   
    this.cesimCaseOptions = this.getCasesForSimulation(simulationName);
    let apiName ="/primarycourse/fetchassigncaselist";
    let body = {
      email: this.data.email,
      caller: "webinstructor",
      usermode: "instructor",
      simulationname: simulationName,
      searchtype: "yourcasefromadmin",
      instructorpanelid: 0,
      searchcontent: "",
      coursedetailsid:0,
    }
    this._api.fetchYourCaseList(
      body,apiName,
    ).subscribe((data: any) => {
      if (data.status === "Success") {
        this.yourCaseOptions = [];
        for(let i=0; i<data.resultList.length; i++){
          this.yourCaseOptions.push(data.resultList[i].coursename);
        }
        // this.yourCaseOptions = data.resultList[0].coursename;
        this.checkloading = false;
      }
    });
  }

  private getCasesForSimulation(simulationName: string): string[] {
    const simulationCasesMap: { [key: string]: string[] } = {
      'Business Basics': ['Local tea shop case'],
      'Product & Consumer': ['Gaming case'],
      'Change Management Module': ['Merger & Acquisition case'],
      'Logistics': ['Local 4 PL case'],
      'Financial Analysis': ['Automotive case'],
      'Promotions & Segments': ['Fmcg case'],
      'Sales & Target': ['Fmcg case'],
      'Portfolio Management': ['Brokerage firm case'],
      'Value Chain': ['Smartphone value case'],
      'CVP Analysis': ['Garment manufacturing case'],
      'Accounting': ['Local paper firm case'],
      'Accounting Arabic': ['Local paper firm case'],
      'Pricing': ['Airlines case'],
      'Mergers & Acquisition': ['Automotive case'],
      'HRP': ['Clothing online case'],
      'Design Thinking': ['Smartphone case'],
      'CRM': ['Technology case'],
      'Innovation': ['Go to market tech case'],
      'Ordering Basics': ['Art firm case'],
      'STP': ['Smartphone design case'],
      'Ecommerce': ['Clothing case'],
      'Capital Budgeting': ['Insurance company case'],
      'IT Management': ['Consulting case'],
    };
    return simulationCasesMap[simulationName] || [];
  }

  courseassign() {
    this.checkloading = true;
    if (this.addcoursegroup.valid) {
      if ((this.addcoursegroup.value.licenseno > 0) &&
        (this.addcoursegroup.value.creditno >= 0 && this.addcoursegroup.value.creditno <= 20)) {
        this.isButtonDisabled = true;
        let body = {
          email: this.useremail,
          instructormailid: this.data.email.toLowerCase(),
          instructorname: this.data.username,
          password: this.data.password,
          simulation: this.addcoursegroup.value.simulation,
          coursename: this.addcoursegroup.value.coursename,
          nooflicense: this.addcoursegroup.value.licenseno,
          aicreditmicrosim: this.addcoursegroup.value.creditno,
          action: 'save',
          status: 'active',
          caller: 'webadminassign',
          usermode: this.userrole,
          gametype: "microsimulation",
          gamelanguage: this.addcoursegroup.value.languagename,
          createdcasename: this.addcoursegroup.value.case,
          createdcasetype: this.createdcasetype,
        };
        console.log("body", body);

        this._restapiservice.saveCourse(body).subscribe((data: any) => {
          if (data.status == 'Success') {
            this.checkloading = false;
            this._alert.success(data.message);
            this.dialogRef.close(this.data);

          } else {
            this.checkloading = false;
            this._alert.error(data.message)
          }
        });
      } else if ((this.addcoursegroup.value.licenseno <= 0) || (this.addcoursegroup.value.creditno < 0)) {
        this.isButtonDisabled = false;
        this.checkloading = false;
        this._alert.error("Licenseno should be greater than 0 and credit should be equal or greater than 0");
      } else {
        this.isButtonDisabled = false;
        this.checkloading = false;
        this._alert.error("Credit should not be greater than 20");
      }
    } else {
      this.isButtonDisabled = false;
      this.checkloading = false;
      this._alert.error("All field must be required")
    }
    this.checkloading = false;
  }


  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
}

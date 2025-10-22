// import { Component, OnInit, inject, OnDestroy, signal } from '@angular/core';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { LoginService } from './service/auth/login.service';
// import { GlobalService } from './service/global.service';
// import { RestapiService } from './service/restapi.service';
// import { SnackbaralertService } from './service/snackbaralert.service';
// import { ApiService } from './service/backendgameapi/api.service';

// interface ChartAxisConfig {
//   categories?: string[];
//   position?: string;
//   labels: {
//     offsetY?: number;
//     show?: boolean;
//     rotate?: number;
//     rotateAlways?: boolean;
//     hideOverlappingLabels?: boolean;
//     showDuplicates?: boolean;
//     trim?: boolean;
//     formatter?: (val: string) => string;
//   };
//   axisBorder?: { show: boolean };
//   axisTicks?: { show: boolean };
//   crosshairs?: { show: boolean };
//   tooltip?: { enabled: boolean; offsetY: number };
//   type?: string;
// }

// @Component({
//   template: ''
// })
// export abstract class AbstractComponent implements OnInit, OnDestroy {
//   protected readonly _login = inject(LoginService);
//   protected readonly _api = inject(ApiService);
//   protected readonly _alert = inject(SnackbaralertService);
//   protected readonly _global = inject(GlobalService);
//   protected readonly _router = inject(Router);
//   protected readonly _restapiservice = inject(RestapiService);
  
//   private subscriptions = new Subscription();

//   // State variables
//   studentspreadsheetid = '';
//   useremail = '';
//   studentsectionid = '';
//   noofattempt = '';
//   coursecode = '';
//   usermode = '';
//   coursedetailsid = '';
//   userregisterid = '';
//   drivemailvalue = '';
//   studentelementdetailsvalue: Record<string, any> = {};
//   instructorelementdetailsvalue: Record<string, any> = {};
//   casemanagementcoursedata: Record<string, any> = {};
//   checkloading = signal(false);
//   imgBase64: string | null = null;
//   advertisementlink = '';
//   advertisementname = '';
//   advertisementimage = '';
//   resultlist: any[] = [];
//   hasads = false;
//   formattedtext: string[] = [];
//   casemanagementid = 0;
//   timefinished = false;

//   readonly rounds = [
//     'Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5',
//     'Round 6', 'Round 7', 'Round 8', 'Round 9', 'Round 10'
//   ];

//   readonly chart = [
//     { height: 200, type: "bar" },
//     { height: 200, type: "pie" },
//     { height: 300, type: "pie" },
//     { height: 250, type: "bar", stacked: true },
//     { height: 300, type: "bar" },
//     { height: 250, type: "pie" }
//   ];

//   readonly plotoption = [
//     { bar: { dataLabels: { position: "center" }, columnWidth: "30%", borderRadius: 0 } },
//     { bar: { dataLabels: { position: "center" }, columnWidth: "30%", borderRadius: 3 } },
//     { bar: { dataLabels: { position: "center" }, horizontal: true, barHeight: "50%" } },
//     { bar: { horizontal: true, dataLabels: { position: "center" }, columnWidth: "30%", borderRadius: 3 } },
//     { bar: { horizontal: false, columnWidth: "30%", borderRadius: 4 } },
//     { bar: { horizontal: false, columnWidth: "40%", borderRadius: 3 } },
//     { bar: { horizontal: false, borderRadius: 3 } },
//     { bar: { horizontal: true, barHeight: '40px' } },
//     { bar: { horizontal: true, barHeight: "40%", borderRadius: 3 } },
//     { bar: { horizontal: true, dataLabels: { position: "center" }, barHeight: "30%", borderRadius: 3 } },
//     { bar: { horizontal: true, dataLabels: { position: "center" }, borderRadius: 0 } }
//   ];

//   readonly datalabels = [
//     { enabled: false },
//     { enabled: false, formatter: (val: string) => `${val}%` }
//   ];

//   readonly xaxis: ChartAxisConfig[] = [
//     { categories: [] as string[], position: "bottom", labels: { offsetY: 0 }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: { show: false }, tooltip: { enabled: false, offsetY: -35 } },
//     { categories: [] as string[], position: "bottom", labels: { offsetY: 0, formatter: (val: string) => `${val}%` }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: { show: false }, tooltip: { enabled: false, offsetY: -35 } },
//     { categories: [] as string[], position: "bottom", labels: { offsetY: 0, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: { show: false }, tooltip: { enabled: false, offsetY: -35 } },
//     { position: "bottom", labels: { show: true, offsetY: 0, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: { show: false }, tooltip: { enabled: false, offsetY: -35 } },
//     { categories: [] as string[], position: "bottom", labels: { show: true, offsetY: 0, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: { show: false }, tooltip: { enabled: false, offsetY: -35 } },
//     { labels: { formatter: (val: string) => `C${val}` } },
//     { type: "category", labels: { show: true, rotate: 0, offsetY: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true } },
//     { labels: { show: true, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true } },
//     { position: "bottom", labels: { offsetY: 0 }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: { show: false }, tooltip: { enabled: false, offsetY: -35 } },
//     { type: "category", labels: { rotate: 0, rotateAlways: false, hideOverlappingLabels: true, showDuplicates: false, trim: false } },
//     { position: "bottom", labels: { show: true, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: { show: false }, tooltip: { enabled: false, offsetY: -35 } },
//     { position: "bottom", labels: { show: true, rotate: 0, rotateAlways: false, hideOverlappingLabels: true, showDuplicates: false, trim: false }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: { show: false }, tooltip: { enabled: false, offsetY: -35 } },
//     { position: "bottom", labels: { show: true, rotate: -45, rotateAlways: false, hideOverlappingLabels: true, showDuplicates: false, trim: false }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: { show: false }, tooltip: { enabled: false, offsetY: -35 } }
//   ];

//   readonly fill = [
//     { type: 'solid' },
//     { type: 'solid', colors: ['#ffc000'] },
//     { type: 'solid', colors: ['#ffc000', '#8b0000'] },
//     { type: 'solid', colors: ['cornflowerblue'] },
//     { opacity: 1 }
//   ];

//   readonly nodata = [
//     { text: '', align: 'center' as const, verticalAlign: 'middle' as const, offsetX: 0, offsetY: 0 }
//   ];

//   readonly yaxis = [
//     { labels: { show: true }, axisBorder: { show: false }, axisTicks: { show: false } },
//     { labels: { show: true, formatter: (val: number) => `${val}%` }, axisBorder: { show: false }, axisTicks: { show: false } },
//     { axisBorder: { show: false }, axisTicks: { show: false }, labels: { show: true } },
//     { labels: { show: true, formatter: (value: number) => value.toString() }, axisBorder: { show: false }, axisTicks: { show: false } }
//   ];

//   constructor() {
//     this.setupSubscriptions();
//   }

//   private setupSubscriptions(): void {
//     this.subscriptions.add(
//       this._global.studentspreadsheetid.subscribe(data => this.studentspreadsheetid = data)
//     );
//     this.subscriptions.add(
//       this._global.useremail.subscribe(data => this.useremail = data)
//     );
//     this.subscriptions.add(
//       this._global.usermode.subscribe(data => this.usermode = data)
//     );
//     this.subscriptions.add(
//       this._global.studentsectionid.subscribe(data => this.studentsectionid = data)
//     );
//     this.subscriptions.add(
//       this._global.noofattempts.subscribe(data => this.noofattempt = data)
//     );
//     this.subscriptions.add(
//       this._global.coursecode.subscribe(data => this.coursecode = data)
//     );
//     this.subscriptions.add(
//       this._global.casemanagementcoursedetails.subscribe(data => this.casemanagementcoursedata = data)
//     );
//     this.subscriptions.add(
//       this._global.driveemail.subscribe(data => this.drivemailvalue = data)
//     );
//     this.subscriptions.add(
//       this._global.studentelementdetails.subscribe(data => this.studentelementdetailsvalue = data)
//     );
//     this.subscriptions.add(
//       this._global.instructorelementdetails.subscribe(data => this.instructorelementdetailsvalue = data)
//     );
//     this.subscriptions.add(
//       this._global.coursedetailsid.subscribe(data => this.coursedetailsid = data)
//     );
//     this.subscriptions.add(
//       this._global.userregisterid.subscribe(data => this.userregisterid = data)
//     );
//     this.subscriptions.add(
//       this._global.casemanagementid.subscribe(data => this.casemanagementid = data)
//     );
//     this.subscriptions.add(
//       this._global.timefinished.subscribe(data => this.timefinished = data)
//     );
//   }

//   ngOnInit(): void {}

//   generateColors(count: number): string[] {
//     const colors: string[] = [];
//     const usedColors = new Set<string>();

//     for (let i = 0; i < count; i++) {
//       let randomColor: string;
//       do {
//         randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
//       } while (usedColors.has(randomColor));

//       colors.push(randomColor);
//       usedColors.add(randomColor);
//     }

//     return colors;
//   }

//   sendsnapshot(gamename: string, step: string): void {
//     try {
//       if (!this.useremail || !this.studentsectionid || !this.noofattempt || !this.coursecode) {
//         throw new Error('Required data is missing for snapshot');
//       }

//       const blobfile = new Blob([], { type: 'image/png' });
//       const file = new File([blobfile], "snapshot.png", { type: 'image/png' });
      
//       this._restapiservice.sendsnapshot(file, this.useremail, this.studentsectionid, step, this.noofattempt, this.coursecode)
//         .subscribe({
//           error: (error: unknown) => {
//             this._alert.error('Failed to send snapshot');
//             this.driveerrorLog(error, 'sendsnapshot');
//           }
//         });
//     } catch (error: unknown) {
//       this._alert.error('Error creating snapshot');
//       this.driveerrorLog(error, 'sendsnapshot');
//     }
//   }

//   labelsBreak(sentence: string): string[] {
//     return sentence.split(' ');
//   }

//   checkCounter(event: Event, classname: string, maxlen: number): void {
//     const element = document.getElementsByClassName(classname)[0];
//     if (element && event.target instanceof HTMLInputElement) {
//       element.innerHTML = `${event.target.value.length}/${maxlen}`;
//     }
//   }

//   driveerrorLog(error: unknown, apiname: string): void {
//     console.error(`Drive API Error in ${apiname}:`, error);
//     // You might want to add additional error logging or reporting here
//   }

//   ngOnDestroy(): void {
//     this.subscriptions.unsubscribe();
//   }
// }




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/auth/login.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ApiService } from './service/backendgameapi/api.service';
import { BehaviorSubject } from 'rxjs';
import { signal } from '@angular/core';

@Component({
  template: ''
})

export abstract class AbstractComponent implements OnInit {
  Spreadsheetsub: Subscription;
  studentspreadsheetid: string = '';
  Emailsub: Subscription;
  useremail: string = '';
  Studentidsub: Subscription;
  studentsectionid: string = '';
  Languagesub: Subscription;
  languageselect: string = '';
  Noofattemptssub: Subscription;
  noofattempt: string = '';
  Coursecodesub: Subscription;
  coursecode: string = '';
  Usermodesub:Subscription;
  usermode:string='';
  Coursedetailsidsub: Subscription;
  coursedetailsid: string = '';
  Userregisteridsub: Subscription;
  userregisterid: string = '';
  Drivemailsub: Subscription;
  drivemailvalue: string = '';
  Studentelementdetailssub: Subscription;
  studentelementdetailsvalue: any = [];
  Instructorelementsub: Subscription;
  instructorelementdetailsvalue: any = [];
  Casemanagementcoursenamesub: Subscription;
  casemanagementcoursedata: any = [];
  checkloading: boolean = true;
  imgBase64: any = '';
  advertisementlink: string = '';
  advertisementname: string = '';
  advertisementimage: string = '';
  resultlist: any = [];
  hasads: boolean = false;
  formattedtext: any = [];
  CasemanagementidSub: Subscription;
  casemanagementid: number = 0;
  timerfinishedsub: Subscription;
  timefinished: boolean = false;

  rounds = [
    'Round 1',
    'Round 2',
    'Round 3',
    'Round 4',
    'Round 5',
    'Round 6',
    'Round 7',
    'Round 8',
    'Round 9',
    'Round 10'
  ];

  chart: any = [
    { height: 200, type: "bar" },//bar type chart
    { height: 200, type: "pie" },//pie type chart
    { height: 300, type: "pie" },//pie type chart
    { height: 250, type: "bar", stacked: true },
    { height: 300, type: "bar" },//bar type chart
    { height: 250, type: "pie" },//pie type chart

  ]
  plotoption: any = [
    { bar: { dataLabels: { position: "center", }, columnWidth: "30%", borderRadius: 0 } },
    { bar: { dataLabels: { position: "center", }, columnWidth: "30%", borderRadius: 3 } },
    { bar: { dataLabels: { position: "center", }, horizontal: true, barHeight: "50%", } },
    { bar: { horizontal: true, dataLabels: { position: "center", }, columnWidth: "30%", borderRadius: 3 } },
    { bar: { horizontal: false, columnWidth: "30%", borderRadius: 4 } },
    { bar: { horizontal: false, columnWidth: "40%", borderRadius: 3 } },
    { bar: { horizontal: false, borderRadius: 3 } },
    { bar: { horizontal: true, barHeight: '40px' }, },
    { bar: { horizontal: true, barHeight: "40%", borderRadius: 3 } },
    { bar: { horizontal: true, dataLabels: { position: "center", }, barHeight: "30%", borderRadius: 3 } },
    { bar: { horizontal: true, dataLabels: { position: "center", }, borderRadius: 0 } },
  ]
  datalabels: any = [
    { enabled: false, },
    { enabled: false, formatter: function (val: string) { return val + "%"; }, },
  ]
  xaxis: any = [
    { categories: [], position: "bottom", labels: { offsetY: 0,rotate: 0 }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 } },
    { categories: [], position: "bottom", labels: { offsetY: 0, formatter: function (val: string) { return val + "%"; }, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 } },
    { categories: [], position: "bottom", labels: { offsetY: 0, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 } },
    { position: "bottom", labels: { show: true, offsetY: 0, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 } },
    { categories: [], position: "bottom", labels: { show: true, offsetY: 0, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 } },
    { labels: { formatter: function (val: string) { return "C" + val } } },
    { type: "category", labels: { show: true, rotate: 0, offsetY: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true, }, },
    { labels: { show: true, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true, } },
    { position: "bottom", labels: { offsetY: 0 }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 } },
    { type: "category", labels: { rotate: 0, rotateAlways: false, hideOverlappingLabels: true, showDuplicates: false, trim: false, }, },
    { position: "bottom", labels: { show: true, rotate: 0, rotateAlways: false, hideOverlappingLabels: false, showDuplicates: false, trim: true, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 } },
    { position: "bottom", labels: { show: true, rotate: 0, rotateAlways: false, hideOverlappingLabels: true, showDuplicates: false, trim: false, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 } },
    { position: "bottom", labels: { show: true, rotate: -45, rotateAlways: false, hideOverlappingLabels: true, showDuplicates: false, trim: false, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 } },
    // { categories: [], position: "bottom", labels: { offsetY: 0, formatter: function (val: string) { return val + "%"; }, }, axisBorder: { show: true }, axisTicks: { show: true }, crosshairs: {}, tooltip: { enabled: false, offsetY: -35 },title:{} },

  ]
  fill: any = [
    { type: 'solid', },
    { type: 'solid', colors: ['#ffc000'] },
    { type: 'solid', colors: ['#ffc000', '#8b0000'] },
    { type: 'solid', colors: ['cornflowerblue'] },
    { opacity: 1 },
  ]
  nodata: any = [
    { text: 'Loading data...', align: 'center', verticalAlign: 'middle', offsetX: 0, offsetY: 0, },
  ]

  yaxis: any = [
    { labels: { show: true, }, axisBorder: { show: false }, axisTicks: { show: false }, },
    { labels: { show: true, formatter: function (val: any) { return val + "%"; }, }, axisBorder: { show: false }, axisTicks: { show: false }, },
    { axisBorder: { show: false }, axisTicks: { show: false }, labels: { show: true, } },
    { labels: { show: true, formatter: function (value: any) { return value; } }, axisBorder: { show: false }, axisTicks: { show: false }, },
  ]

  constructor(
    protected _login: LoginService,
    protected _api: ApiService,
    protected _alert: SnackbaralertService,
    protected _global: GlobalService,
    protected _router: Router,
    protected _restapiservice: RestapiService,
  ) {
    this.Spreadsheetsub = this._global.studentspreadsheetid.subscribe((data) => {
      this.studentspreadsheetid = data;
    });
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
    this.Languagesub = this._global.language.subscribe((data) => {
      this.languageselect = data;
    });
    this.Usermodesub = this._global.usermode.subscribe((data) => {
      this.usermode = data;
    });
    this.Studentidsub = this._global.studentsectionid.subscribe((data) => {
      this.studentsectionid = data;
    });
    this.Noofattemptssub = this._global.noofattempts.subscribe((data) => {
      this.noofattempt = data;
    });
    this.Coursecodesub = this._global.coursecode.subscribe((data) => {
      this.coursecode = data;
    });
    this.Casemanagementcoursenamesub = this._global.casemanagementcoursedetails.subscribe((data) => {
      this.casemanagementcoursedata = data;
    });
    this.Drivemailsub = this._global.driveemail.subscribe((data) => {
      this.drivemailvalue = data;
    });
    this.Studentelementdetailssub = this._global.studentelementdetails.subscribe((data) => {
      this.studentelementdetailsvalue = data;
    });
    this.Instructorelementsub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorelementdetailsvalue = data;
    });
    this.Coursedetailsidsub = this._global.coursedetailsid.subscribe((data) => {
      this.coursedetailsid = data;
    });
    this.Userregisteridsub = this._global.userregisterid.subscribe((data) => {
      this.userregisterid = data;
    });
    this.CasemanagementidSub = this._global.casemanagementid.subscribe((data) => {
      this.casemanagementid = data;
    });
    this.timerfinishedsub = this._global.timefinished.subscribe((data) => {
      this.timefinished = data;
    });
  }

  ngOnInit(): void { }

  generateColors(count: number) {
    const colors = [];
    const usedColors = new Set();

    for (let i = 0; i < count; i++) {
      let randomColor;
      do {
        randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      } while (usedColors.has(randomColor));

      colors.push(randomColor);
      usedColors.add(randomColor);
    }

    return colors;
  }

  
  sendsnapshot(gamename: string, step: string) {
    const blobfile = ""
    var file = new File([blobfile], "snapshot.png");
    this._restapiservice.sendsnapshot(file, this.useremail,
      this.studentsectionid, step, this.noofattempt, this.coursecode).subscribe((data: any) => {
        if (data.status == 'Success') {
          if (gamename == "consumerbehaviour") {
            if (step == "1st") {
              this._router.navigate(['auth/component/marketmix']);
            }
            else if (step == "2nd") {
              this._router.navigate(['auth/component/consumerreport']);
            }
          } else if (gamename == "logistics") {
            if (step == "1st") {
              this._router.navigate(['auth/component/transportmanagement']);
            }
            else if (step == "2nd") {
              this._router.navigate(['auth/component/logisticsreport']);
            }
          } else if (gamename == "promotion") {
            if (step == "1st") {
              this._router.navigate(['auth/component/promotionchannel/firstcheck']);
            }
            else if (step == "2nd") {
              this._router.navigate(['auth/component/promotionchannel/secondcheck']);
            }
          }
          else if (gamename == "fsa") {
            if (step == "1st") {
              this._router.navigate(['auth/component/fsa/checkpoint1']);
            }
            else if (step == "2nd") {
              this._router.navigate(['auth/component/fsa/checkpoint2']);
            }
          }
          else if (gamename == "salesmanagement") {
            if (step == "1st") {
              this._router.navigate(['auth/component/salesdevelopmentcomponent']);
            }
            else if (step == "2nd") {
              this._router.navigate(['auth/component/salesreportcomponent']);
            }
          } else if (gamename == "pricing") {
            if (step == "1st") {
              this._router.navigate(['/auth/component/phaseoneComponent/phaseoneresult']);
            } else if (step == "2nd") {
              this._router.navigate(['auth/component/phaseoneComponent/phasetworesult']);
            } else if (step == "3rd") {
              this._router.navigate(['auth/component/phaseoneComponent/phasethreeresult']);
            }
          }
        } else {
          this._alert.error(data.message)
        }
      },
        (error: any) => {
          this._alert.error('something went wrong');
        }
      );
  }

  labelsBreak(sentence: string) {
    let shortword = '';
    const words = sentence.split(' ');
    this.formattedtext = [];
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length < 3) {
        shortword = 'yes';
  
        // ✅ If this is the LAST word, push it directly (important for "%")
        if (i === words.length - 1) {
          this.formattedtext.push(words[i]);
        }
      } else {
        if (shortword === 'yes') {
          this.formattedtext.push(words[i - 1] + " " + words[i]);
          shortword = '';
        } else {
          this.formattedtext.push(words[i]);
        }
      }
    }
  
    return this.formattedtext;
  }
  


  checkCounter(event: any, classname: string, maxlen: number) {
    var checkedChecks = document.querySelectorAll("." + classname + " .btn-check:checked");
    if (checkedChecks.length > maxlen) {
      this._alert.error("Please select maximum " + maxlen + " " + classname);
      return false;
    }
    else {
      return true;
    }
  }

  driveerrorLog(error: any, apiname: string) {
    this._login.driveErrorLogRouting(error.status, error.message.substring(0, 500), this.drivemailvalue, this.studentelementdetailsvalue.userRegister.userregisterid,
      this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      (Number(this.studentelementdetailsvalue.previousassignedattempts) - Number(this.studentelementdetailsvalue.numberofattemptsleft) + 1), apiname, 'driveapicall', 'error').subscribe((data: any) => {
        if (data.status == 'Success') {

        }
      });
  }

 

  ngOnDestroy() {
    this.Spreadsheetsub.unsubscribe();
    this.Emailsub.unsubscribe();
    this.Studentidsub.unsubscribe();
    this.Noofattemptssub.unsubscribe();
    this.Coursecodesub.unsubscribe();
    this.Drivemailsub.unsubscribe();
    this.Studentelementdetailssub.unsubscribe();
    this.Casemanagementcoursenamesub.unsubscribe();
    this.CasemanagementidSub.unsubscribe();
    this.Coursedetailsidsub.unsubscribe();
    this.Userregisteridsub.unsubscribe();
    this.Usermodesub.unsubscribe();
    this.Languagesub.unsubscribe();

  }
}


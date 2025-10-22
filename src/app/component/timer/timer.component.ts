import { DatePipe, CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe]
})
export class TimerComponent implements OnInit {
  Endtimesub: Subscription;
  endtime: string = '';
  date: any;
  now: any;
  day:any;
  targetDate: any;
  targetTime: any;
  nowTime: any;
  datesplit:any;
  timesplit:any;
  difference: any;
  currentDateTime: any;
  currenttime:string = '';
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  

  
  @ViewChild('days', { static: true }) days: any;
  @ViewChild('hours', { static: true }) hours: any;
  @ViewChild('minutes', { static: true }) minutes: any;
  @ViewChild('seconds', { static: true }) seconds: any;

  private readonly _router = inject(Router);
  public readonly datepipe = inject(DatePipe);
  private readonly _global = inject(GlobalService);

  constructor() {
    this.Endtimesub = this._global.endtime.subscribe((data) => {
      this.endtime = data;
    });
    this.currentDateTime =this.datepipe.transform((new Date), 'yyyy/MM/dd HH:mm:ss');
    let datetimesplit = this.currentDateTime.split(" ");
    this.datesplit = datetimesplit[0].split("/");
    this.timesplit = datetimesplit[1].split(":");
    console.log("currentDateTime",this.currentDateTime);
  }
  ngOnInit(): void {
    const str2 = this.endtime;
    const [dateComponents2, timeComponents2] = str2.split(' ');
    const [day2, month2, year2] = dateComponents2.split('-');
    const [hours2, minutes2] = timeComponents2.split(':');
    this.targetDate = new Date(+year2, +month2 - 1, +day2, +hours2, +minutes2);
    this.targetTime = this.targetDate.getTime();
    
   
    setInterval(() => {
      this.tickTock();
     this.difference = this.targetTime - this.nowTime;
     
      this.difference = this.difference / 1000;

      // !isNaN(this.days.nativeElement.innerText)
      //   ? (this.days.nativeElement.innerText = Math.floor(this.day))
      //   : (this.days.nativeElement.innerHTML = `<img src="assets/icons/VAyR.gif" />`,
      //   this.hours.nativeElement.innerHTML = `<img src="assets/icons/VAyR.gif" />`,
      //   this.minutes.nativeElement.innerHTML = `<img src="assets/icons/VAyR.gif" />`,
      //   this.seconds.nativeElement.innerHTML = `<img src="assets/icons/VAyR.gif" />`);
    }, 1000);
  }

  tickTock() {
    
    this.currentDateTime =this.datepipe.transform((new Date), 'yyyy/MM/dd HH:mm:ss');
    let datetimesplit = this.currentDateTime.split(" ");
    this.datesplit = datetimesplit[0].split("/");
    this.timesplit = datetimesplit[1].split(":");
    this.currentDateTime = new Date(this.datesplit[0],this.datesplit[1] - 1 ,this.datesplit[2],this.timesplit[0],this.timesplit[1],this.timesplit[2])
    this.nowTime = this.currentDateTime.getTime();

    this.day = Math.floor(this.difference / 86400);
    this.difference = this.difference - this.day * 86400;
    var hours = Math.floor(this.difference / 3600);
    this.difference = this.difference - hours * 3600;
    var minutes = Math.floor(this.difference / 60);
    var seconds = Math.floor(this.difference - minutes * 60);
    
    // this.days.nativeElement.innerText = this.day;
    // this.hours.nativeElement.innerText = hours;
    // this.minutes.nativeElement.innerText = minutes;
    // this.seconds.nativeElement.innerText = seconds;
    this.currenttime = this.day+"d"+" "+hours+":"+minutes+":"+seconds
  }

 
}

// import { DatePipe } from '@angular/common';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { GlobalService } from 'src/app/service/global.service';

// @Component({
//   selector: 'app-timer',
//   templateUrl: './timer.component.html',
//   styleUrls: ['./timer.component.scss']
// })
// export class TimerComponent implements OnInit {

//   Endtimesub: Subscription;
//   endtime: string = '';
//   nowTime: any;
//   targetTime: any;
//   difference: number = 0;
//   currenttime: string = 'Loading...'; // 🟢 Default time when loading
//   isTimeLoaded: boolean = false; // 🟢 Track whether time is loaded

//   constructor(
//     private _router: Router,
//     public datepipe: DatePipe,
//     private _global: GlobalService
//   ) {
//     this.Endtimesub = this._global.endtime.subscribe((data) => {
//       this.endtime = data;
//     });
//   }

//   ngOnInit(): void {
//     if (this.endtime) {
//       const str2 = this.endtime;
//       const [dateComponents2, timeComponents2] = str2.split(' ');
//       const [day2, month2, year2] = dateComponents2.split('-');
//       const [hours2, minutes2] = timeComponents2.split(':');

//       this.targetTime = new Date(+year2, +month2 - 1, +day2, +hours2, +minutes2).getTime();
      
//       setInterval(() => {
//         this.tickTock();
//       }, 1000);
//     }
//   }

  // its for only time period....
  // tickTock() {
  //   const now = new Date();
  //   this.nowTime = now.getTime();
    
  //   this.difference = Math.floor((this.targetTime - this.nowTime) / 1000);

  //   if (this.difference > 0) {
  //     const days = Math.floor(this.difference / 86400);
  //     const hours = Math.floor((this.difference % 86400) / 3600);
  //     const minutes = Math.floor((this.difference % 3600) / 60);
  //     const seconds = Math.floor(this.difference % 60);

  //     this.currenttime = `${days}d ${hours}:${minutes}:${seconds}`;
  //     this.isTimeLoaded = true; // 🟢 Mark as loaded
  //   } 
  //   else {
  //     this.currenttime = "Time Expired"; // 🟢 Handle cases where countdown is finished
  //   }
  // }

  // its for all time showing...
//   tickTock() {
//     const now = new Date();
//     this.nowTime = now.getTime();
    
//     this.difference = Math.floor((this.targetTime - this.nowTime) / 1000);

//     // Convert absolute values but add a negative sign if time is over
//     const isNegative = this.difference < 0;
//     const absDifference = Math.abs(this.difference);

//     const days = Math.floor(absDifference / 86400);
//     const hours = Math.floor((absDifference % 86400) / 3600);
//     const minutes = Math.floor((absDifference % 3600) / 60);
//     const seconds = Math.floor(absDifference % 60);

//     // Show negative time if expired
//     this.currenttime = `${isNegative ? '-' : ''}${days}d ${hours}:${minutes}:${seconds}`;
// }
// }


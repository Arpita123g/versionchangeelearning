import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import CryptoJS, { AES, enc } from 'crypto-js';
import { Subscription, interval, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { GlobalService } from 'src/app/service/global.service';
import { environment as _env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 key:string = '0123456789abcdef';
 iv:string = 'fedcba9876543210';


  private _url = _env.apiUrl
  Tokensub: Subscription;
  accesstoken: string = '';
  Drivemailsub: Subscription;
  drivemailvalue: string = '';
  Studentelementdetailssub: Subscription;
  studentelementdetailsvalue: any = [];
  Clientsecretsub: Subscription;
  clientsecretvalue: string = '';
  Refreshtokensub: Subscription;
  refreshtokenvalue: string = '';
  Clientidsub: Subscription;
  clientidvalue: string = '';
  Drivemailconfigurationidsub: Subscription;
  drivemailconfigurationidvalue: string = '';
  DriveloginIdsub: Subscription;
  driveloginidvalue: string = '';
  DrivePasswordsub: Subscription;
  drivepasswordvalue: string = '';
  Emailsub: Subscription;
  useremail: string = '';
  Studentidsub: Subscription;
  studentsectionid: string = '';
  Noofattemptssub: Subscription;
  noofattempt: string = '';
  Coursecodesub: Subscription;
  coursecode: string = '';
  Timercountsub: Subscription;
  timercount: string = '';
  Endtimesub: Subscription;
  endtime: string = '';
 
  //for get current time
  time = new Date();
  rxTime = new Date();
  newTime: string = "";
  currentdatetimesec: any;
  enddatetimesec: any;

  public intervallTimer = interval(1000);
  private subscriptionvalue: any;

  subscription: Subscription | undefined;

  nodeurl = 'http://192.168.0.144:3000/api/status';
  nodestatusurl = 'http://192.168.0.144:3000/api/log';

  constructor(private http: HttpClient,

    private _global: GlobalService,
    private _router: Router,
    public datepipe: DatePipe) {


    this.Tokensub = this._global.accesstoken.subscribe((data) => {
      this.accesstoken = data;
    });
    this.Drivemailsub = this._global.driveemail.subscribe((data) => {
      this.drivemailvalue = data;
    });
    this.Studentelementdetailssub = this._global.studentelementdetails.subscribe((data) => {
      this.studentelementdetailsvalue = data;
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
    this.DriveloginIdsub = this._global.clientid.subscribe((data) => {
      this.driveloginidvalue = data;
    });
    this.DrivePasswordsub = this._global.drivemailconfigurationid.subscribe((data) => {
      this.drivepasswordvalue = data;
    });
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
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
    this.Timercountsub = this._global.timercounting.subscribe((data) => {
      this.timercount = data;
    });
    this.Endtimesub = this._global.endtime.subscribe((data) => {
      this.endtime = data;
    });
    
  }

  ngOnInit() {

  }
  
  logstatus(){
    
   // Replace with your API endpoint
  const body = {login:"login"}; // Replace with your request body
  const requestBody = JSON.stringify(body);
  const headers = new HttpHeaders().set('Content-Type', 'application/json');


  this.http.post(this.nodestatusurl, requestBody, { headers })
    .subscribe(
      response => {
        
        console.log('POST request successful', response);
        // Process the response data here
      },
      error => {
        console.log('Error occurred', error);
        // Handle the error here
      }
    );
  }

  log(functionname:string,response:any,body:any,source:string){
    const logEntry = {
      timestamp: new Date().toISOString(),
      functionname: functionname,
      messagebody: body,
      res: response,
      source: source
    };
   // Replace with your API endpoint
 // const body = {key1:"data1",key2:"data2"}; // Replace with your request body
  const requestBody = JSON.stringify(logEntry);
  console.log("stringify",requestBody)
  const headers = new HttpHeaders().set('Content-Type', 'application/json');


  this.http.post(this.nodeurl, requestBody, { headers })
    .subscribe(
      response => {
        
        console.log('POST request successful', response);
        // Process the response data here
      },
      error => {
        console.log('Error occurred', error);
        // Handle the error here
      }
    );
  }
  encrypt1(data:any){
    const key1 = CryptoJS.enc.Utf8.parse(this.key);
    const iv1 = CryptoJS.enc.Utf8.parse(this.iv);
    const encrypted = CryptoJS.AES.encrypt(data, key1, { iv: iv1 }).toString();
    console.log('Encrypted:', encrypted);
    return encrypted;
  }

  decrypt1(data:any){
    const key1 = CryptoJS.enc.Utf8.parse(this.key);
    const iv1 = CryptoJS.enc.Utf8.parse(this.iv);
    const decrypted = CryptoJS.AES.decrypt(data, key1, { iv: iv1 }).toString(CryptoJS.enc.Utf8);

    console.log('Decrypted:', decrypted);
    return decrypted;
  }

  decrypt(data:any) {
    const decrypted = AES.decrypt(data, enc.Hex.parse(this.key), {
      iv: enc.Hex.parse(this.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    
    return decrypted.toString(enc.Utf8);
  }

  encrypt(data:any) {
    console.log("da",data)
    // SecretKeySpec secretKeySpec = new SecretKeySpec(key.getBytes(), "AES");
    //     IvParameterSpec ivParameterSpec = new IvParameterSpec(iv.getBytes());
    const encrypted = AES.encrypt(data, enc.Hex.parse(this.key), {
      iv: enc.Hex.parse(this.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    console.log("endata",encrypted)
    
    return encrypted.toString();
  }
  getcurrenttime() {
    if ((this.endtime != null) && (this.timercount == "true")) {
      const str2 = this.endtime;
      //const str2 = "22-03-2023 12:16:05";
      const [dateComponents2, timeComponents2] = str2.split(' ');
      const [day2, month2, year2] = dateComponents2.split('-');
      const [hours2, minutes2] = timeComponents2.split(':');
      const enddate = new Date(+year2, +month2 - 1, +day2, +hours2, +minutes2);
      this.enddatetimesec = enddate.getTime() / 1000;
      const intervalid = setInterval(() => {
        this.time = new Date();
      }, 1000);

      // Using RxJS Timer
      this.subscription = timer(0, 1000)
        .pipe(
          map(() => new Date()),
          share()
        )
        .subscribe(time => {
          this.currentdatetimesec = new Date().getTime() / 1000;

        });
      var difference = this.enddatetimesec - this.currentdatetimesec;

      if (difference <= 0) {
        this._router.navigate(['/auth/component/studentdashboardheader']);
        this.subscriptionvalue.unsubscribe()
      }

    }
    return "true";

  }

  // checkingTokenOnInterval() {
  //   this.subscriptionvalue = this.intervallTimer.subscribe(() => this.getcurrenttime());
  // }

  


  refreshtokenfordrive(body: string, clientsecret: string, refreshtoken: string, clientid: string): any {
    return this.http.post<any>('https://accounts.google.com/o/oauth2/token?client_secret=' + clientsecret + '&grant_type=refresh_token&refresh_token=' + refreshtoken + '&client_id=' + clientid + '', body);
  }
  refreshtoken(body: {}): any {
    return this.http.post<any>('https://accounts.google.com/o/oauth2/token?client_secret=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&grant_type=refresh_token&refresh_token=1//0gKvyau0MuH-ICgYIARAAGBASNwF-L9IrUMrFQE1VbC9cc7u8C7uOzzoGxoTkGLG6gjUgL0_ItUBRoTDpkDs0_RaOuGVq4HQpJnM&client_id=782199368879-jte3hhfhviu0lu1k7j70gf3t3d50bmrh.apps.googleusercontent.com', body);

  }

  

  fetchDriveConfigData(address: string, searchtypevalue: string, searchcontentvalue: string,driveemail: string) {
    let body = {
      email: "boenciadmin@gmail.com",
      usermode: "boenciadmin",
      caller: "boenciadmin",
      searchtype: searchtypevalue,
      driveemail : driveemail,
      searchcontent: searchcontentvalue
    }
     let headers = new HttpHeaders().set('Content-Type', 'application/Json')
    return this.http.post<any>(this._url + address, body, { headers })
   }



  driveErrorLogRouting(errorcode: string, errormsg: string, drivemail: string, userregisterid: any,
    coursedetailsid: any, courseattempt: any, apiname: string, apicallpurpose: string, remarks: string) {
    let address = "/error/errorlog"
    let body = {
      email: "boenciadmin@gmail.com",
      usermode: "boenciadmin",
      caller: "boenciadmin",
      errorlog:
      {
        errorlogid: 0,
        driveemail: drivemail,
        userregisterid: userregisterid,
        coursedetailsid: coursedetailsid,
        courseattempt: courseattempt,
        errorcode: errorcode,
        errormsg: errormsg,
        apiname: apiname,
        action: "save",
        apicallpurpose: apicallpurpose,
        remarks: remarks
      }
    }
 // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    let headers = new HttpHeaders().set('Content-Type', 'application/Json')
    return this.http.post<any>(this._url + address, body, { headers })

  }

  sendDrivemailLog(status: string) {
    let address = "/maillog/drivemaillog";

    let body = {
      email: "boenciadmin@gmail.com",
      usermode: "boenciadmin",
      caller: "boenciadmin",
      drivemaillog: {
        "driveemail": this.drivemailvalue,
        "userregisterid": this.studentelementdetailsvalue.userRegister.userregisterid,
        "coursedetailsid": this.studentelementdetailsvalue.courseDetails.coursedetailsid,
        "courseattempt": this.studentelementdetailsvalue.numberofattemptsleft,
        "action": "save",
        "status": status
      }
    }
 // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    let headers = new HttpHeaders().set('Content-Type', 'application/Json')
    return this.http.post<any>(this._url + address, body, { headers })

  }
  DriveConfigdata(address: {}, drivemailconfigurationid: string, driveemail: string, clientsecret: string,
    clientid: string, refreshtoken: string, userlimit: string, authcode: string, action: string): any {
    let body = {
      email: "boenciadmin@gmail.com",
      usermode: "boenciadmin",
      caller: "boenciadmin",
      emailconfiguration: {
        drivemailconfigurationid: drivemailconfigurationid,
        driveemail: driveemail,
        clientsecret: clientsecret,
        clientid: clientid,
        refreshtoken: refreshtoken,
        userlimit: userlimit,
        authcode: authcode,
        action: action
      }
    }
 // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    let headers = new HttpHeaders().set('Content-Type', 'application/Json')
    return this.http.post<any>(this._url + address, body, { headers })
  }

  DriveErrorConfigdata(address: {}, value: {}, key: string): any {
    let body = {
      email: "boenciadmin@gmail.com",
      usermode: "boenciadmin",
      caller: "boenciadmin",
      [key]: value
    }
 // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    let headers = new HttpHeaders().set('Content-Type', 'application/Json')
    return this.http.post<any>(this._url + address, body, { headers })
  }


  updateDriveConfigData(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/driveconfig/fetchstudentdetails', body);
  }

  exitOnLastAttempt() {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    let noofattempts = this.studentelementdetailsvalue.numberofattemptsleft;

    if (noofattempts == 1) {
      let action = "subactiveuser";
      this.DriveConfigdata("/driveconfig/drivemailconfiguration", this.drivemailconfigurationidvalue, this.drivemailvalue, this.clientsecretvalue,
        this.clientidvalue, this.refreshtokenvalue, "", "", action).subscribe(
          (data: any) => { })

    }
  }

  sendSnapShotFile(step: string, file: File) {
    this.sendsnapshot(file, this.useremail, this.studentsectionid, step, this.noofattempt, this.coursecode).subscribe((data: any) => { }
    );
  }

  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i)
    return new Blob([ia], { type: mimeString })
  }



  forgotpassword(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/forgotpass/forgotpassword', body);
  }
  resetpassword(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/forgotpass/updatepassword', body);
  }

  advertisementclick(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/advertisement/advertisementclick', body);
  }
  validateforgotpassword(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/forgotpass/validatetoken', body);
  }



  checkadminrefresh(body: {}): any {
    return this.http.post<any>('https://accounts.google.com/o/oauth2/token', body);
  }

  checkrefreshtoken(body: {}): any {
    return this.http.post<any>('https://accounts.google.com/o/oauth2/token', body);
  }

  updatecourseattempt(body: {}): any {
    return this.http.post<any>(this._url + '/student/updatecourseattempt', body);
  }
  
  savekpiattempt(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/kpi/kpiwithattempts', body);
  }

  updatekpiattempt(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/student/updatekpiattempt', body);
  }

  fetchkpiattempt(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/kpi/fetchkpiwithattempts', body);
  }

  


  //new api call for kpisave
  savekpivalue(firstkpivalue: any,secondkpivalue: any,thirdkpivalue: any, action: any, noofattempt: any) {
    
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "webstudent",
      action: action,
      kpiwithattempts:
      {
        kpioflastattempts: firstkpivalue,
        kpioflastattempts1: secondkpivalue,
        kpioflastattempts2: thirdkpivalue,
        studentsectionid: this.studentsectionid,
        coursecode: this.coursecode,
        numberofattempts: noofattempt,
        userregisterid: this.studentelementdetailsvalue.userRegister.userregisterid,

      }
    }

 // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    this.savekpiattempt(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        return data.message;
      } else {
        return data.message;
      }


    })
  }
  //old kpi call for kpisave
  sendkpivalue(value: any) {
    if (value != undefined) {

      let body = {
        email: this.useremail,
        usermode: "student",
        caller: "student",
        action: "kpiupdate",
        kpiattempts: value,
        studentsectionid: this.studentsectionid,
      };
 // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
      this.updatekpiattempt(body).subscribe((data: any) => { })

    }
  }

  savethreekpivalue(firstkpivalue: any,secondkpivalue: any,thirdkpivalue: any, action: any, noofattempt: any) {
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "webstudent",
      action: action,
      kpiwithattempts:
      {
        firstkpivalue: firstkpivalue,
        secondkpivalue: secondkpivalue,
        thirdkpivalue: thirdkpivalue,
        // kpioflastattempts: kpivalue,
        studentsectionid: this.studentsectionid,
        coursecode: this.coursecode,
        numberofattempts: noofattempt,
        userregisterid: this.studentelementdetailsvalue.userRegister.userregisterid,

      }
    }
 // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    this.savekpiattempt(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        return data.message;
      } else {
        return data.message;
      }


    })
  }

  fetchkpiwithattempts(kpivalue: any): any {
    let searchtype = "";
    if (kpivalue == "All") {
      searchtype = "all"
    } else {
      searchtype = "attemptscount"
    }
    let body = {
      email: this.useremail,
      usermode: "instructor",
      caller: "webinstructor",
      searchtype: searchtype,
      searchcontent: kpivalue,
      coursecode: this.coursecode
    }

 // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    this.fetchkpiattempt(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        // return data.resultList;
        return data;
      }


    })
  }






  checkadminlogin(body: {}): any {
    return this.http.post<any>(this._url + '/register/login', body);
  }

  encryptest(body: {}): any {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/Text');
    const jsonString = JSON.stringify(body);
    const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/test/decrypt', encryptedText,{headers});
  }
  checkstudentlogin(body:{}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/student/studentdetails', body);
  }
  updateordelete(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/student/deleteorupdateuser', body);
  }
  checkstudentupdate(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/student/deleteorupdateuser', body);
  }


  checkrole(body: {}): any {
     // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/accountpurpose/accountpurposeeduserlist', body);
  }

 

  sendsnapshot(file: File, useremail: string, studentsectionid: string, step: string, noofattempt: string, coursecode: string) {
    console.log("file", file)
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('email', this.useremail);
    formData.append('studentsectionid', this.studentsectionid);
    formData.append('numberofattempts', this.noofattempt);
    formData.append('snapshotstep', step);
    formData.append('coursecode', this.coursecode);
    // let headers = new HttpHeaders().set('Content-Type', 'application/Json');
    return this.http.post<any>(
      this._url + '/student/uploadlastattemptsicon',
      formData
    );
  }



}





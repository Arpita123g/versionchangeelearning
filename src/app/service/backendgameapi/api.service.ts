import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { environment as _env } from '../../../environments/environment';
import { EncryptionService } from '../encryption.service';
import { GlobalService } from '../global.service';
import { Location } from '@angular/common';
import { StringDecoder } from 'string_decoder';
import { NumberLiteralType } from 'typescript';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url = _env.javaapiurl;
  Emailsub: Subscription;
  useremail: string = '';
  usernamesub: Subscription;
  username: string = "";
  Studentidsub: Subscription;
  studentsectionid: string = '';
  Noofattemptssub: Subscription;
  noofattempt: string = '';
  Coursecodesub: Subscription;
  coursecode: string = '';
  Studentelementdetailssub: Subscription;
  studentelementdetailsvalue: any = [];
  Instructorelementdetailssub: Subscription;
  instructorelementdetailsvalue: any = [];
  Coursedetailsidsub: Subscription;
  coursedetailsid: string = '';
  Userregisteridsub: Subscription;
  userregisterid: string = '';
  CasemanagementidSub: Subscription;
  casemanagementid: number = 0;
  Casemanagementcoursenamesub: Subscription;
  casemanagementcoursedata: any = [];
  Coursenamesub: Subscription;
  coursenamevalue: string = '';
  instructoremail: string = '';
  instructorpanelid: string = '';
  // coursename: string = '';
  columnkey: string = '';
  columnvalue: string = '';
  columnvisiblestatus: string = '';
  staticfield: string = "";
  instructornamesub: Subscription;
  instructorname: string = "";
  post: any;
  constructor(private http: HttpClient, private encryptionService: EncryptionService,
    private _global: GlobalService,
    private _router: Router,
    private location: Location
  ) {
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
    this.usernamesub = this._global.username.subscribe((data) => {
      this.username = data;
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
    this.Studentelementdetailssub = this._global.studentelementdetails.subscribe((data) => {
      this.studentelementdetailsvalue = data;
    });
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorelementdetailsvalue = data;
    });
    this.Userregisteridsub = this._global.userregisterid.subscribe((data) => {
      this.userregisterid = data;
    });
    this.Coursedetailsidsub = this._global.coursedetailsid.subscribe((data) => {
      this.coursedetailsid = data;
    });
    this.Coursenamesub = this._global.coursename.subscribe((data) => {
      this.coursenamevalue = data;
    });
    this.Casemanagementcoursenamesub = this._global.casemanagementcoursedetails.subscribe((data) => {
      this.casemanagementcoursedata = data;
    });
    this.CasemanagementidSub = this._global.casemanagementid.subscribe((data) => {
      this.casemanagementid = data;
    });

    this.instructornamesub = this._global.instructorname.subscribe((data: any) => {
      this.instructorname = data;
    })

  }

  //Material component
  upload(file: any, path: string, materialtitle: string, description: string, contenttype: string,
    round: string, link: string, usermode: string, caller: string): Observable<any> {

    const formData = new FormData();

    // formData.append("file", file);
    // formData.append("simulationname", this.instructorelementdetailsvalue.courseDetails.simulation);
    // formData.append("headingname", materialtitle);
    // formData.append("description", description);
    // formData.append("filename", file.name);
    // formData.append("email", this.useremail);
    // formData.append("usermode", usermode);
    // formData.append("caller", caller);

    //New 

    formData.append("file", file);
    formData.append("simulationname", this.instructorelementdetailsvalue.courseDetails.simulation);
    formData.append("headingname", materialtitle);
    formData.append("description", description);
    formData.append("filename", file.name);
    formData.append("email", this.useremail);
    formData.append("usermode", usermode);
    formData.append("caller", caller);
    formData.append("materialtype", contenttype);
    formData.append("round", round);
    formData.append("link", link);
    formData.append("coursecode", this.instructorelementdetailsvalue.courseDetails.coursecode);



    return this.http.post(this._url + path, formData)
  }

  // uploadconversation(path: string, voiceconversationid: number, audiodata: string, time: number): Observable<any> {

  //   let body = {
  //     email: this.useremail,
  //     usermode: "student",
  //     caller: "webstudent",
  //     roundno: this.noofattempt,
  //     voiceconversationid: String(voiceconversationid),
  //     spendtime: time,
  //     audiodata: audiodata
  //   }


  //   return this.http.post(this._url + path, body)
  // }
  uploadconversation(path: string, voiceconversationid: number, audiodata: string, time: number) {
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "webstudent",
      voiceconversationid: String(voiceconversationid),
      spendtime: time,
      simulationname: this.studentelementdetailsvalue.simulationname,
      coursename: this.studentelementdetailsvalue.courseDetails.coursename,
      coursecode: this.studentelementdetailsvalue.coursecode,
      instructorpanelid: 0,
      studentsectionid: this.studentelementdetailsvalue.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      userregisterid: this.studentelementdetailsvalue.userregisterid,
      audiodata: audiodata
    }
    return this.http.post(this._url + path, body)

  }
  // sujay change for enc......
  uploadconversationPrevious(path: string, voiceconversationid: number, audiodata: string, time: number): Observable<any> {
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "webstudent",
      voiceconversationid: String(voiceconversationid),
      spendtime: time,
      simulationname: this.studentelementdetailsvalue.simulationname,
      coursename: this.studentelementdetailsvalue.courseDetails.coursename,
      coursecode: this.studentelementdetailsvalue.coursecode,
      instructorpanelid: 0,
      studentsectionid: this.studentelementdetailsvalue.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      userregisterid: this.studentelementdetailsvalue.userregisterid
    }
    console.log("this", this.studentelementdetailsvalue)
    console.log("check conversion body....", body)
    const encryptedBody = this.encryptionService.encrypt(JSON.stringify(body));
    // encryptedBody is a string; don't spread strings. Send as a named field
    const datatobesend = { i: audiodata, payload: encryptedBody };
    // const datatobesend = { i: audiodata, ...body };
    return this.http.post(this._url + path, datatobesend)
      .pipe(
        map((response: any) => {
          const encryptedResponse = response;
          let audioData: any = null;
          if (response.i) {
            audioData = { "audioData": response.i }
          }
          let decryptedResponse: any = this.encryptionService.decrypt(encryptedResponse);
          const decryptedObj: Record<string, any> = decryptedResponse
            ? (typeof decryptedResponse === 'string' ? JSON.parse(decryptedResponse) : decryptedResponse)
            : {};
          const audioObj: Record<string, any> = audioData || {};
          const margedData = { ...decryptedObj, ...audioObj };
          console.log(margedData);
          return margedData;
        })
      );
  }

  // uploadconversationForAI(path: string,interviewData:any): Observable<any> {

  //   return this.http.post(this._url + path, interviewData)
  //     .pipe(
  //       map((response: any) => {
  //        console.log("Response", response)
  //       })
  //     );
  // }

  async convertBlobToByteArray(blob: Blob): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const byteArray = new Uint8Array(arrayBuffer);
        resolve(byteArray);
      };
      reader.onerror = () => {
        reject(new Error('Error reading blob as byte array'));
      };
      reader.readAsArrayBuffer(blob);
    });
  }

  fetchthreekpiattempts(searchtype: string, searchcontent: string, coursecode: string, usermode: string, simulationname: string): any {
    let body = {
      email: this.useremail,
      usermode: usermode,
      caller: "webinstructor",
      searchtype: searchtype,
      searchcontent: searchcontent,
      coursecode: coursecode,
      simulationname: simulationname
    }

    // const jsonString = JSON.stringify(body);
    // const encryptedText = this.encrypt1(jsonString);
    return this.http.post<any>(this._url + '/kpi/fetchkpiwithattempts', body);
  }



  fetchMaterialData(caller: string, usermode: string, searchtype: string,
    searchcontent: string, uploadedby: string, path: string, noofattempt: string) {
    let body =
    {
      email: this.useremail,
      caller: caller,
      usermode: usermode,
      searchtype: searchtype,
      searchcontent: searchcontent,
      uploadedby: uploadedby,
      round: noofattempt,
      coursecode: searchtype === 'instructor'
        ? this.instructorelementdetailsvalue.courseDetails.coursecode
        : this.studentelementdetailsvalue.coursecode,
    }
    return this.http.post<any>(this._url + path, body);
  }
  deleteMaterialData(caller: string, usermode: string, path: string, materialid: string) {
    let body =
    {
      email: this.useremail,
      caller: caller,
      usermode: usermode,
      materialid: materialid,
      coursecode: this.instructorelementdetailsvalue.courseDetails.coursecode,
    }
    return this.http.post<any>(this._url + path, body);
  }


  accountingfetchdata(path: string, attempt: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }




  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.http.post('http://localhost:3000/uploadFile', formParams)
  }

  datawrite(gamename: string, phase: any, inputcolumn: string, inputcolumnvalue: string, gamevalue: any, path: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      inputcolumn: inputcolumn,
      inputcolumnvalue: inputcolumnvalue,
      phase: phase,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }




  staticUpdateDataWrite(gamename: string, phase: any, gamevalue: any, path: string): any {
    let body = {
      coursecode: this.coursecode,
      instructorid: this.userregisterid,
      coursedetailsid: this.coursedetailsid,
      instructormailid: this.useremail,
      roundno: phase,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }

  chatmessageDataWrite(body: any, path: string) {
    return this.http.post<any>(this._url + path, body);
  }
  fetchChatMessageData(body: any, path: string) {
    return this.http.post<any>(this._url + path, body);
  }

  totalinstructorcount(body: any, path: string) {
    return this.http.post<any>(this._url + path, body);
  }


  caseManagementDataWrite(cellname: string, cellvalue: string, index: any, path: string) {
    let body = {
      'email': this.useremail,
      'coursename': '',
      'coursecode': '',
      [cellname]: cellvalue,
      'attempt': index,
    }
    return this.http.post<any>(this._url + path, body);
  }



  fetchdata(path: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }


  consumerFetchData(path: string, attempt: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }

  logisticsfetchdata(path: string, attempt: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }

  portfoliofetchdata(path: string, attempt: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }

  valuechainfetchdata(path: string, attempt: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }

  // changemanagementfetchdata(path: string, attempt: string) {
  //   let body =
  //   {
  //     email: this.useremail,
  //     caller: "student",
  //     usermode: "student",
  //     searchtype: "all",
  //     searchcontent: "",
  //     coursecode: this.coursecode,
  //     coursename: this.coursenamevalue,
  //     studentsectionid: this.studentsectionid,
  //     attempt: attempt,
  //     coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
  //   }
  //   return this.http.post<any>(this._url + path, body);
  // }

  // financialfetchdata(path: string, attempt: string) {
  //   let body =
  //   {
  //     email: this.useremail,
  //     caller: "student",
  //     usermode: "student",
  //     searchtype: "all",
  //     searchcontent: "",
  //     coursecode: this.coursecode,
  //     coursename: this.coursenamevalue,
  //     studentsectionid: this.studentsectionid,
  //     attempt: attempt,
  //     coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
  //   }
  //   return this.http.post<any>(this._url + path, body);
  // }

  promotionsigmentfetchdata(path: string, attempt: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }

  // cvpanalysisfetchdata(path: string, attempt: string) {
  //   let body =
  //   {
  //     email: this.useremail,
  //     caller: "student",
  //     usermode: "student",
  //     searchtype: "all",
  //     searchcontent: "",
  //     coursecode: this.coursecode,
  //     coursename: this.coursenamevalue,
  //     studentsectionid: this.studentsectionid,
  //     attempt: attempt,
  //     coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
  //   }
  //   return this.http.post<any>(this._url + path, body);
  // }


  businessfetchalldata(path: string, attempt: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "report",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }
  salesfetchdata(path: string, attempt: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }

  fetchGameData(path: string, attempt: string) {
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
    }
    return this.http.post<any>(this._url + path, body);
  }
  fetchLanguageData(path: string, attempt: string, language: string) {
    console.log("fetchLanguageData call")
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      language: language
    }
    return this.http.post<any>(this._url + path, body);
  }

  fetchLanguageDataForToolbar(path: string, attempt: string, language: string, coursedetailsid: string) {
    console.log("fetchLanguageDataForToolbar call")
    let body =
    {
      email: this.useremail,
      caller: "student",
      usermode: "student",
      searchtype: "all",
      searchcontent: "",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: attempt,
      coursedetailsid: coursedetailsid,
      language: language
    }
    return this.http.post<any>(this._url + path, body);
  }
  // fetchAccountArabicGameData(path: string, attempt: string) {
  //   let body =
  //   {
  //     email: this.useremail,
  //     caller: "student",
  //     usermode: "student",
  //     searchtype: "all",
  //     searchcontent: "",
  //     coursecode: this.coursecode,
  //     coursename: this.coursenamevalue,
  //     studentsectionid: this.studentsectionid,
  //     attempt: attempt,
  //     coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid
  //   }
  //   return this.http.post<any>(this._url + path, body);
  // }

  writeGameData(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }

  writeLanguageData(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string, language: string, languageid: number, lmid: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue,
      language: language,
      [lmid]: languageid,
      createdcasename: this.studentelementdetailsvalue.courseDetails.createdcasename,

    }
    return this.http.post<any>(this._url + path, body);
  }

  businessdatawrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }
  Languagedatawrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string, language: string, languageid: number, lmid: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue,
      language: language,
      [lmid]: languageid,
      createdcasename: this.studentelementdetailsvalue.courseDetails.createdcasename,

    }
    return this.http.post<any>(this._url + path, body);
  }

  financialanalysisdatawrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }

  salesdatawrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }
  promotionsdatawrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }

  valuechaindatawrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }

  consumerDataWrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }

  gptassessment(round: string, studentsentiment: string, assesment: string, path: string, simulationname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "webstudent",
      gptrequestbody: assesment,
      aiassessment: {
        coursename: this.coursenamevalue,
        coursecode: this.coursecode,
        round: round,
        coursedetailseid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
        studentsectionid: this.studentsectionid,
        studentsentiment: studentsentiment,
        userregisterid: this.userregisterid,
        action: "save",
        simulationname: simulationname
      }
    }
    return this.http.post<any>(this._url + path, body);
  }

  gptfeedback(round: string, feedback: string, path: string, simulationname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "webstudent",
      gptrequestbody: feedback,
      aifeedback: {
        coursename: this.coursenamevalue,
        coursecode: this.coursecode,
        round: round,
        coursedetailseid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
        studentsectionid: this.studentsectionid,
        userregisterid: this.userregisterid,
        simulationname: simulationname,
        action: "save",
      }
    }
    return this.http.post<any>(this._url + path, body);
  }

  logisticsDataWrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }

  mergerAcquisitionDataWrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }
  accountingDataWrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }

  changeManagementDataWrite(gamename: string, phase: any, gamevalue: any, path: string, casemanagementidkeyname: string): any {
    let body = {
      email: this.useremail,
      usermode: "student",
      coursecode: this.coursecode,
      coursename: this.coursenamevalue,
      studentsectionid: this.studentsectionid,
      attempt: this.noofattempt,
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      phase: phase,
      [casemanagementidkeyname]: this.casemanagementid,
      [gamename]: gamevalue
    }
    return this.http.post<any>(this._url + path, body);
  }

  getAiGamelistData(path: string, producttype: string) {
    let body = {
      email: this.useremail,
      usermode: "admin",
      caller: "webadmin",
      searchtype: "producttype",
      searchcontent: producttype
    }
    return this.http.post<any>(this._url + path, body);
  }

  getAiQuestionsetlistData(path: string, searchtype: string, searchcontent: string) {
    let body = {
      email: 'administrator@cesim.in',
      usermode: "admin",
      caller: "webadmin",
      searchtype: searchtype,
      searchcontent: searchcontent
    }
    return this.http.post<any>(this._url + path, body);
  }

  getChapterlistGamewise(path: string, searchtype: string, searchcontent: string) {
    let body = {
      email: this.useremail,
      usermode: "admin",
      caller: "webadmin",
      searchtype: searchtype,
      searchcontent: searchcontent
    }
    return this.http.post<any>(this._url + path, body);
  }


  getPromptlistData(path: string, simulationname: string) {
    let body = {
      email: this.useremail,
      usermode: "admin",
      caller: "webadmin",
      searchtype: "simulationname",
      searchcontent: simulationname
    }
    return this.http.post<any>(this._url + path, body);
  }
  addPromptData(path: string, simulationname: string,
    promptname: string, systemprompt: string, generalprompt: string, aipromptid: number,
    action: string
  ) {
    let body = {}
    if (action == 'save') {
      body = {
        email: this.useremail,
        usermode: "admin",
        caller: "webadmin",
        aiprompt: {
          simulationname: simulationname,
          promptname: promptname,
          systemprompt: systemprompt,
          generalprompt: generalprompt,
          action: action
        }
      }
    } else {
      body = {
        email: this.useremail,
        usermode: "admin",
        caller: "webadmin",
        aiprompt: {
          aipromptid: aipromptid,
          simulationname: simulationname,
          promptname: promptname,
          systemprompt: systemprompt,
          generalprompt: generalprompt,
          action: action
        }
      }
    }


    return this.http.post<any>(this._url + path, body);
  }

  addChapter(body: any, path: String) {
    return this.http.post<any>(this._url + path, body);
  }
  addAiGame(body: any, path: String) {
    return this.http.post<any>(this._url + path, body);
  }

  addAiQuestionset(body: any, path: String) {
    return this.http.post<any>(this._url + path, body);
  }
  addAiChapterset(body: any, path: String) {
    return this.http.post<any>(this._url + path, body);
  }

  updatecasemanagementdata(attempt: string, updatedsearchtype: string, modulestatus: string, keyname: string, businessbasiccasemanagementdata: any, businessbasiccmactivestatus: any, apiname: string, statuskeyname: string) {
    let body = {
      instructoremail: this.casemanagementcoursedata.courseDetails.instructormailid,
      usermode: "instructor",
      coursecode: this.casemanagementcoursedata.courseDetails.coursecode,
      instructorpanelid: this.instructorelementdetailsvalue.instructorpanelid,
      coursedetailsid: this.casemanagementcoursedata.coursedetailsid,
      // coursename: this.casemanagementcoursedata.courseDetails.coursename,
      coursename: this.casemanagementcoursedata.coursename,

      attempt: attempt,
      simulationname: this.casemanagementcoursedata.courseDetails.simulation,
      // simulationname: this.casemanagementcoursedata.simulation,

      updatedsearchtype: updatedsearchtype,
      [keyname]: businessbasiccasemanagementdata,
      modulestatus: modulestatus,
      [statuskeyname]: businessbasiccmactivestatus,
      createdcasename: this.casemanagementcoursedata.courseDetails.createdcasename
    }
    return this.http.post<any>(this._url + apiname, body);
  }

  updategamelm(keyname: string, value: any, attempt: string, apiname: string, language: string,updatetype:string) {
    let body = {
      // instructoremail: this.casemanagementcoursedata.courseDetails.instructormailid,
      instructoremail: this.instructorelementdetailsvalue.courseDetails.instructormailid,
      usermode: "instructor",
      // coursecode: this.casemanagementcoursedata.courseDetails.coursecode,
      // instructorpanelid: this.instructorelementdetailsvalue.instructorpanelid,
      // coursedetailsid: this.casemanagementcoursedata.coursedetailsid,
      coursename: this.casemanagementcoursedata.coursename,
      coursecode: this.instructorelementdetailsvalue.courseDetails.coursecode,
      coursedetailsid: this.instructorelementdetailsvalue.courseDetails.coursedetailsid,
      // coursename: this.instructorelementdetailsvalue.courseDetails.coursename,
      attempt: attempt,
      // simulationname: this.casemanagementcoursedata.courseDetails.simulation,
      language: language,
      [keyname]: value,
      updatedtype:updatetype
    }

    return this.http.post<any>(this._url + apiname, body);

  }



  updategamelanguage(body: any, apiname: string) {
    return this.http.post<any>(this._url + apiname, body)
  }


  updatecasemanagementdataForFoodforthought(attempt: string, data: any, apiname: string) {
    let body =
    {
      instructoremail: this.instructorelementdetailsvalue.courseDetails.instructormailid,
      usermode: "instructor",
      coursecode: this.instructorelementdetailsvalue.coursecode,
      instructorpanelid: this.instructorelementdetailsvalue.instructorpanelid,
      coursedetailsid: this.instructorelementdetailsvalue.coursedetailsid,
      coursename: this.instructorelementdetailsvalue.courseDetails.coursename,
      attempt: attempt,
      simulationname: this.instructorelementdetailsvalue.courseDetails.simulation,
      updatedsearchtype: "foodforthought",
      businessbasiccasemanagement: data
    }
    return this.http.post<any>(this._url + apiname, body);
  }

  // fetchCaseManagementData(apiname: string) {

  //   let body = {
  //     // email: this.casemanagementcoursedata.courseDetails.instructormailid,
  //     email: this.instructorelementdetailsvalue.courseDetails.instructormailid,
  //     usermode: "instructor",
  //     searchtype: "all",
  //     searchcontent: "",
  //     // coursecode: this.casemanagementcoursedata.courseDetails.coursecode,
  //     // coursedetailsid: this.casemanagementcoursedata.courseDetails.coursedetailsid,
  //     coursename: this.casemanagementcoursedata.coursename,
  //     coursecode: this.instructorelementdetailsvalue.courseDetails.coursecode,
  //     coursedetailsid: this.instructorelementdetailsvalue.courseDetails.coursedetailsid,
  //     // coursename: this.instructorelementdetailsvalue.courseDetails.coursename,
  //   }
  //   return this.http.post<any>(this._url + apiname, body);
  // }

  fetchCaseManagementData(apiname: string) {
    let caseType = localStorage.getItem('selectedTab');
    let courseDetails = this.instructorelementdetailsvalue.courseDetails;
    let caseData = this.casemanagementcoursedata;
    // Determine course name based on case type
    // let courseName = caseType == 'cesimcase'
    //   ? caseData.cesimcasename
    //   : caseData.coursename;
    let courseName = caseType == 'cesimcase'
      ? courseDetails.coursename
      : caseData.coursename;

    let body = {
      email: courseDetails.instructormailid,
      usermode: "instructor",
      searchtype: "all",
      searchcontent: "",
      coursename: courseName,
      coursecode: courseDetails.coursecode,
      coursedetailsid: courseDetails.coursedetailsid,
      // ...(courseDetails.createdcasetype === 'cesimcase' && {
      //   cesimcasename: caseData.cesimcasename
      // })
    };

    return this.http.post<any>(this._url + apiname, body);
  }
  fetchgamelm(apiname: string, attempt: string, languagename: string) {
    // let body = {
    // // instructoremail: this.casemanagementcoursedata.courseDetails.instructormailid,
    // // instructoremail: this.instructorelementdetailsvalue.courseDetails.instructormailid,

    // usermode: "instructor",
    // searchtype: "all",
    // searchcontent: "",
    // // coursecode: this.casemanagementcoursedata.courseDetails.coursecode,
    // // coursedetailsid: this.casemanagementcoursedata.courseDetails.coursedetailsid,
    // coursename: this.casemanagementcoursedata.coursename,
    // coursecode: this.instructorelementdetailsvalue.courseDetails.coursecode,
    // coursedetailsid: this.instructorelementdetailsvalue.courseDetails.coursedetailsid,
    // // coursename: this.instructorelementdetailsvalue.courseDetails.coursename,
    // attempt: attempt,
    // language: languagename



    let caseType = localStorage.getItem('selectedTab');
    let courseDetails = this.instructorelementdetailsvalue.courseDetails;
    let caseData = this.casemanagementcoursedata;
    // Determine course name based on case type
    // let courseName = caseType == 'cesimcase'
    //   ? caseData.cesimcasename
    //   : caseData.coursename;
    let courseName = caseType == 'cesimcase'
      ? courseDetails.coursename
      : caseData.coursename;

    let body = {
      email: courseDetails.instructormailid,
      usermode: "instructor",
      searchtype: "all",
      searchcontent: "",
      coursename: courseName,
      coursecode: courseDetails.coursecode,
      coursedetailsid: courseDetails.coursedetailsid,
      attempt: attempt,
      language: languagename
    }
    return this.http.post<any>(this._url + apiname, body);
  }

  copyCourseData(card: any, coursename: string, primarycoursedetailsid: number, copycasefrom: string, casename: string) {

    let courseDetails = this.instructorelementdetailsvalue.courseDetails;
    let caseData = card;
    // Determine course name based on case type
    // let courseName = caseType == 'cesimcase'
    //   ? caseData.cesimcasename
    //   : caseData.coursename;

    let oldcourseName = casename == 'cesimcase'
      ? caseData.cesimcasename
      : courseDetails.coursename;



    let body = {

      instructoremail: this.useremail,
      usermode: "instructor",
      // tocoursecode: card.courseDetails.coursecode,
      tocoursecode: this.instructorelementdetailsvalue.coursecode,
      instructorpanelid: card.instructorpanelid,
      fromprimarycoursedetailsid: primarycoursedetailsid,
      newcasename: coursename,
      // oldcoursename: card.courseDetails.coursename,
      // oldcoursename: this.instructorelementdetailsvalue.courseDetails.coursename,
      oldcoursename: oldcourseName,

      simulationname: this.instructorelementdetailsvalue.courseDetails.simulation,
      copycasefromcesimcase: copycasefrom
    }
    console.log("copyCourseData", body)

    return this.http.post<any>(this._url + "/course/copycourseforcasemanagement", body);
  }



  fetchPrimaryCourseDetails(card: any) {
    let body = {
      email: card.courseDetails.instructormailid,
      caller: "webadmin",
      usermode: "instructor",
      searchtype: "coursedetailsid",
      searchcontent: card.coursedetailsid
    }
    return this.http.post<any>(this._url + "/primarycourse/fetchprimarycoursedetails", body);
  }

  fetchassigncaselist(simulation: string, coursedetailsid: number) {
    let body = {
      email: this.useremail,
      caller: "webinstructor",
      usermode: "instructor",
      simulationname: simulation,
      searchtype: "instructorpanelid",
      instructorpanelid: this.instructorelementdetailsvalue.instructorpanelid,
      searchcontent: "",
      coursedetailsid: coursedetailsid
    }
    return this.http.post<any>(this._url + "/primarycourse/fetchassigncaselist", body);
  }

  /////////////////////////
  // instructor side yourcase fetch on simulation select
  // fetchYourCaseList(simulation: string, coursedetailsid: number,) {
  //   let body = {
  //     email: this.useremail,
  //     caller: "webinstructor",
  //     usermode: "instructor",
  //     simulationname: simulation,
  //     searchtype: "yourcase",
  //     instructorpanelid: 0,
  //     searchcontent: "",
  //     coursedetailsid: coursedetailsid
  //   }
  //   return this.http.post<any>(this._url + "/primarycourse/fetchassigncaselist", body);
  // }
  fetchYourCaseList(body: any, path: string) {
    return this.http.post<any>(this._url + path, body);
  }
  /////////////////////////



  fetchassigncaselistforshared(simulation: string, coursedetailsid: number, searchtype: string) {
    let body = {
      email: this.useremail,
      caller: "webinstructor",
      usermode: "instructor",
      simulationname: simulation,
      searchtype: searchtype,
      instructorpanelid: this.instructorelementdetailsvalue.instructorpanelid,
      searchcontent: "",
      coursedetailsid: coursedetailsid
    }
    return this.http.post<any>(this._url + "/primarycourse/fetchassigncaselist", body);
  }


  // fetchaCaseFromMaster(Simulation:string,cesimcasename:string,searchcontent:Number){
  //   let body = {
  //     email:this.useremail,
  //     caller:"webinstructor",
  //     usermode:"instructor",
  //     simulationname:Simulation,
  //     cesimcasename:cesimcasename,
  //     searchtype:"simulationnamefrominstructor",
  //     searchcontent:searchcontent

  //   }
  //   return this.http.post<any>(this._url + "/consumerbehaviournewmaster/fetchconsumerbehaviournewmaster", body);
  // }

  private simulationApiMap: { [key: string]: string } = {
    'Business Basics': '/businessbasiccasemanagementmaster/fetchbusinessbasiccasemanagementmaster',
    'Product & Consumer New': '/consumerbehaviournewmaster/fetchconsumerbehaviournewmaster',
    'Change Management Module': '/changemanagementmaster/fetchchangemanagementmaster',
    'Change Management Module New': '/changemanagementnewmaster/fetchchangemanagementnewmaster',
    'Logistics': '/logisticsmaster/fetchlogisticsmaster',
    'Financial Analysis': '/financialanalysismaster/fetchfinancialanalysismaster',
    'Promotions & Segments': '/promotionsmaster/fetchpromotionsmaster',
    'Promotions & Segments New': '/promotionsnewmaster/fetchpromotionsnewmaster',
    'Sales & Target': '/salestargetmaster/fetchsalestargetmaster',
    'Portfolio Management': '/portfoliomanagementmaster/fetchportfoliomanagementmaster',
    'Value Chain': '/valuechainmaster/fetchvaluechainmaster',
    'Value Chain New': '/valuechainnewmaster/fetchvaluechainnewmaster',
    'CVP Analysis': '/cvpanalysismaster/fetchcvpanalysismaster',
    'Accounting': '/accountinggamemaster/fetchaccountinggamemaster',
    'Accounting New': '/accountinggamenewmaster/fetchaccountinggamenewmaster',
    'Accounting Arabic': '/accountingarabicmaster/fetchaccountingarabicmaster',
    'Pricing': '/pricinggamemaster/fetchpricinggamemaster',
    'Mergers & Acquisition': '/mergersacquisitionmaster/fetchmergersacquisitionmaster',
    'HRP': '/hrplanningmaster/fetchhrplanningmaster',
    'HRP New': '/hrplanningnewmaster/fetchhrplanningnewmaster',
    'Design Thinking': '/designthinkingmaster/fetchdesignthinkingmaster',
    'CRM': '/crmgamemaster/fetchcrmgamemaster',
    'Innovation': '/innovationgamemaster/fetchinnovationgamemaster',
    'Ordering Basics': '/orderingbasicsmaster/fetchorderingbasicsmaster',
    'HRM_Fintech': '/hrmgamemaster/fetchhrmgamemaster',
    'STP': '/stpgamemaster/fetchstpgamemaster',
    'Ecommerce': '/ecommercegamemaster/fetchecommercegamemaster',
    'Capital Budgeting': '/cbgamemaster/fetchcbgamemaster',
    'IT Management': '/itmanagementmaster/fetchitmanagementmaster',
    'Project Management': '/demo/demo',

    // Add more mappings as needed
  };

  fetchaCaseFromMaster(Simulation: string, cesimcasename: string, searchcontent: Number) {
    const apiPath = this.simulationApiMap[Simulation]

    let body = {
      email: this.useremail,
      caller: "webinstructor",
      usermode: "instructor",
      simulationname: Simulation,
      cesimcasename: cesimcasename,
      // cesimcasename: this.casemanagementcoursedata.cesimcasename,
      searchtype: "simulationnamefrominstructor",
      searchcontent: searchcontent
    }
    return this.http.post<any>(this._url + apiPath, body);
  }

  fetchaCaseFromMasterLanguage(api: string, Simulation: string, cesimcasename: string, searchcontent: Number) {

    let body = {
      email: this.useremail,
      caller: "webinstructor",
      usermode: "instructor",
      simulationname: Simulation,
      // cesimcasename: cesimcasename,
      cesimcasename: this.casemanagementcoursedata.cesimcasename,

      searchtype: "all",
      searchcontent: searchcontent

    }
    return this.http.post<any>(this._url + api, body);
  }


  //////////////////////////////////
  fetchaCaseFromMaster1(Simulation: string, cesimcasename: string, searchcontent: Number) {
    const apiPath = this.simulationApiMap[Simulation]

    let body = {
      email: this.useremail,
      caller: "webinstructor",
      usermode: "instructor",
      simulationname: Simulation,
      // cesimcasename: cesimcasename,
      cesimcasename: this.casemanagementcoursedata.cesimcasename,
      searchtype: "all",
      searchcontent: "multiplecopy"

    }
    return this.http.post<any>(this._url + apiPath, body);
  }

  fetchaCaseFromMasterLanguage1(api: string, Simulation: string, cesimcasename: string, searchcontent: Number) {

    let body = {
      email: this.useremail,
      caller: "webinstructor",
      usermode: "instructor",
      simulationname: Simulation,
      // cesimcasename: cesimcasename,
      cesimcasename: this.casemanagementcoursedata.cesimcasename,
      searchtype: "all",
      searchcontent: "multiplecopy"
    }
    return this.http.post<any>(this._url + api, body);
  }

  fetchaCaseFromMasterLanguageForConstant(api: string, Simulation: string, cesimcasename: string) {
    let caseType = localStorage.getItem('selectedTab');
    let caseNameCesim = this.casemanagementcoursedata.cesimcasename;
    let caseNameYour = this.casemanagementcoursedata.createdcasename;

    let courseName = caseType == 'cesimcase'
      ? caseNameCesim
      : caseNameYour


    let body = {
      email: this.useremail,
      caller: "webinstructor",
      usermode: "instructor",
      simulationname: Simulation,
      // cesimcasename: this.casemanagementcoursedata.cesimcasename,
      cesimcasename: courseName,
      searchtype: "all",
      // searchcontent: "multiplecopy"
      searchcontent: "englishconstant"

    }
    return this.http.post<any>(this._url + api, body);
  }

  /////////////////////////////////



  setassharedcase(primarycoursedetailsid: string, shareddescription: String, sharedstatus: string) {
    let body = {
      instructoremail: this.useremail,
      usermode: "instructor",
      primarycoursedetailsid: primarycoursedetailsid,
      shareddescription: shareddescription,
      sharedstatus: sharedstatus,

    }
    return this.http.post<any>(this._url + "/primarycourse/setassharedcase", body);
  }

  searchcoursecodeforlanguage(searchcontent: String,) {
    let body = {
      instructoremail: this.useremail,
      usermode: "instructor",
      searchcontent: searchcontent,

    }
    return this.http.post<any>(this._url + "/primarycourse/setassharedcase", body);
  }
  courseSetPrimary(email: string, coursename: string, coursecode: string, coursedetailsid: string, primarycoursedetailsid: number,
  ) {
    let body = {
      instructoremail: email,
      usermode: "instructor",
      action: "save",
      coursename: coursename,
      coursecode: coursecode,
      coursedetailsid: coursedetailsid,
      primarycoursedetailsid: primarycoursedetailsid,
    }
    return this.http.post<any>(this._url + "/course/setcaseasprimary", body);
  }

  GoBack() {
    localStorage.setItem('backClicked', 'yes');
    localStorage.setItem('lastTab', 'microsimcasemanagement');
    this.location.back();
  }

  deleteyourcase(coursecode: string, primarycoursedetailsid: string, simulation: string, coursename: string) {

    let body = {
      instructoremail: this.useremail,
      usermode: "instructor",
      action: "deletecase",
      primarycoursedetailsid: primarycoursedetailsid,
      coursecode: coursecode,
      coursename: coursename,
      simulationname: simulation


    }
    return this.http.post<any>(this._url + "/primarycourse/deleteyourcase", body);
  }

  fetchbusinessbasicsdata(body: any, path: string) {
    return this.http.post<any>(this._url + path, body);
  }

  fetchexceldata(path: string, body: any) {
    return this.http.post<any>(this._url + path, body);
  }

  writeCopyCoursedata(path: string, body: any) {
    return this.http.post<any>(this._url + path, body);
  }


  savekpivalue(firstkpivalue: any, secondkpivalue: any, thirdkpivalue: any, action: any, noofattempt: any) {
    // let body = {
    //   email: this.useremail,
    //   usermode: "student",
    //   caller: "webstudent",
    //   action: action,
    //   kpiwithattempts:
    //   {
    //     kpioflastattempts: kpivalue,
    //     studentsectionid: this.studentsectionid,
    //     coursecode: this.coursecode,
    //     numberofattempts: noofattempt,
    //     userregisterid: this.studentelementdetailsvalue.userRegister.userregisterid,

    //   }
    // }

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

    this.savekpiattempt(body).subscribe((data: any) => {
      if (data.status == 'Success') {
        return data.message;
      } else {
        return data.message;
      }
    })
  }

  savekpiattempt(body: {}): any {
    return this.http.post<any>(this._url + '/kpi/kpiwithattempts', body);
  }

  studentChapterAttemptCreate(body: {}): any {
    return this.http.post<any>(this._url + '/studentcoursechapterattempt/cudstudentcoursechapterattempt', body);
  }

  fetchChapterAttempts(body: {}): any {
    return this.http.post<any>(this._url + '/studentcoursechapterattempt/fetchstudentcoursechapterattempt', body);
  }

  getSnapshotDetails(data: {}): any {
    return this.http.post<any>(this._url + '/student/fetchsnapshot', data);
  }

  sendsnapshot(file: File, useremail: string, studentsectionid: string, step: string, noofattempt: string, coursecode: string): any {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('email', useremail);
    formData.append('studentsectionid', studentsectionid);
    formData.append('numberofattempts', noofattempt);
    formData.append('snapshotstep', step);
    formData.append('coursecode', coursecode);
    return this.http.post<any>(
      this._url + '/student/uploadlastattemptsicon',
      formData
    );
  }



  // for chatbox message..........
  fetchSubjectName(caller: string, usermode: string, searchcontent: string, coursename: string, coursecode: string, chattype: string, studentsectionid: number, path: string) {
    let body =
    {
      email: this.useremail,
      caller: caller,
      usermode: usermode,
      searchtype: "roundno",
      searchcontent: searchcontent,
      coursename: coursename,
      coursecode: coursecode,
      chattype: chattype,
      studentsectionid: studentsectionid
    }
    return this.http.post<any>(this._url + path, body);
  }
  //fetch chat
  fetchconversation(caller: string, usermode: string, searchcontent: number, coursename: string, coursecode: string, pageoffset: number, path: string) {
    let body = {
      email: this.useremail,
      caller: caller,
      usermode: usermode,
      searchtype: "chatsubjectid",
      searchcontent: searchcontent,
      coursename: coursename,
      coursecode: coursecode,
      pageoffset: pageoffset
      // {"email":"abc@test.com","caller":"webtudent/webadmin","usermode":"student/instructor","searchtype":"chatsubjectid","searchcontent":"","coursename":"","coursecode":"","pageoffset":""}  
    }


    return this.http.post<any>(this._url + path, body);

  }


  // reply 
  // addchatsubjectwithConversation(usermail:string,usermode:string,coursename:string,coursecode:string,coursedetailsid:number,instructorpanelid:number,studentsectionid:number,userregisterid:number,username:string,subject: string, chattype: string, message: string,path: string, ) {
  addchatsubjectwithConversation(usermode: string, coursename: string,
    coursecode: string,
    coursedetailsid: number, studentsectionid: number, studentname: string,
    studentemail: string, instructorpanelid: number,
    instructoremail: string, instructorname: string, roundno: number,
    subject: string, chattype: string, conversation: string,
    userregisterid: number, username: string, path: string) {
    let body =
    {
      email: this.useremail,
      usermode: usermode,
      action: "save",
      chatsubject: {
        coursename: coursename,
        coursecode: coursecode,
        coursedetailsid: coursedetailsid,
        studentsectionid: studentsectionid,
        studentname: studentname,
        studentemail: studentemail,
        instructorpanelid: instructorpanelid,
        instructoremail: instructoremail,
        instructorname: instructorname,
        roundno: roundno,
        subject: subject,
        chattype: chattype,

      },
      chatconversation: {
        coursename: coursename,
        coursecode: coursecode,
        roundno: roundno,
        chattype: chattype,
        conversation: conversation,
        coursedetailsid: coursedetailsid,
        userregisterid: userregisterid,
        useremail: this.useremail,
        username: username,
      }
    }
    return this.http.post<any>(this._url + path, body);
  }

  addForumMessage(usermode: string, coursename: string, coursecode: string, coursedetailsid: number, userregisterid: number, usertype: string, username: string, round: number, subjectid: number, chattype: string, message: string, path: string,) {
    // let body =
    // {
    // email:this.useremail,
    // usermode:"student",
    // action:"save",
    // chatconversation:{
    //   chatsubjectid: subject,
    //   coursename: this.studentelementdetailsvalue.courseDetails.coursename,
    //   coursecode: this.studentelementdetailsvalue.courseDetails.coursecode,
    //   roundno: this.noofattempt,
    //   chattype:chattype,
    //   conversation: message,
    //   coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
    //   studentsectionid: this.studentelementdetailsvalue.studentsectionid,
    //   studentemail: this.useremail,
    //   studentname: this.username,
    // }
    // }
    let body = {
      email: this.useremail,
      usermode: usermode,
      action: "save",
      chatconversation:
      {
        chatsubjectid: subjectid,
        coursename: coursename,
        coursecode: coursecode,
        roundno: round,
        chattype: chattype,
        conversation: message,
        coursedetailsid: coursedetailsid,
        userregisterid: userregisterid,
        usertype: usermode,
        username: username,
        useremail: this.useremail,
      }
    }
    return this.http.post<any>(this._url + path, body);


  }
  toggleCourseLock(coursedetailsid: string, lock: string, path: string) {
    let body =
    {
      email: this.useremail,
      caller: "instructor",
      usermode: "instructor",
      action: "updatelock",
      // searchtype: "all",
      // searchcontent: "",
      coursedetailsid: coursedetailsid,
      lock: lock,

    }
    return this.http.post<any>(this._url + path, body);
  }


  getStudentDetails(searchtype: String, searchcontent: String): any {
    let body = {
      email: this.useremail,
      caller: 'webinstructor',
      usermode: 'instructor',
      searchtype: searchtype,
      searchcontent: searchcontent

    };
    return this.http.post<any>(this._url + '/student/fetchstudentdetails', body);
  }


  fetchMaxRound(coursecode: string) {
    let body = {
      email: this.useremail,
      caller: 'webinstructor',
      usermode: 'instructor',
      coursecode: coursecode,
      searchtype: 'maxround',
      searchcontent: 0
    }
    return this.http.post<any>(this._url + '/kpi/fetchkpiwithattempts', body);
  }

  fetchassessment(coursecode: string, studentsectionid: string, usertype: string, round: number, searchtype: string) {
    let body = {};
    if (usertype == 'instructor') {
      body = {
        email: this.useremail,
        caller: 'webinstructor',
        usermode: 'instructor',
        searchtype: searchtype,
        round: round,
        coursecode: coursecode,
        studentsectionid: ""
      }
    } else {

      body = {
        email: this.useremail,
        caller: 'webstudent',
        usermode: 'student',
        searchtype: "studentsectionid",
        studentsectionid: studentsectionid,
        coursecode: coursecode,
        round: round
      }
    }



    return this.http.post<any>(this._url + '/assessment/fetchassessment', body);
  }

  fetchfeedback(coursecode: string, studentsectionid: string, usertype: string, round: number) {

    let body = {};
    if (usertype == 'instructor') {
      body = {
        email: this.useremail,
        caller: 'webinstructor',
        usermode: 'instructor',
        searchtype: "coursecode",
        round: round,
        coursecode: coursecode,
        studentsectionid: ""
      }
    } else {

      body = {
        email: this.useremail,
        caller: 'webstudent',
        usermode: 'student',
        searchtype: "studentsectionid",
        studentsectionid: studentsectionid,
        coursecode: coursecode,
        round: round,
      }
    }

    return this.http.post<any>(this._url + '/feedback/fetchfeedback', body);
  }

  fetchaiAssessment(coursecode: string) {
    let body = {
      email: this.useremail,
      caller: 'webinstructor',
      usermode: 'instructor',
      searchtype: "coursecode",
      searchcontent: coursecode
    }

    return this.http.post<any>(this._url + '/assessmentmaster/fetchaiassessment', body);
  }

  updateaiAssessment(round1: string, round2: string, round3: string, round4: string, round5: string,
    round6: string, round7: string, round8: string, round9: string, round10: string, coursecode: string,
    coursename: string, aiassessmentmasterid: number, creditleft: number) {
    let body = {
      email: this.useremail,
      caller: 'webinstructor',
      usermode: 'instructor',
      creditleft: creditleft,
      aiassessmentmaster: {
        aiassessmentmasterid: aiassessmentmasterid,
        coursename: coursename,
        coursecode: coursecode,
        round1: round1,
        round2: round2,
        round3: round3,
        round4: round4,
        round5: round5,
        round6: round6,
        round7: round7,
        round8: round8,
        round9: round9,
        round10: round10,
        action: "update"
      }
    }



    return this.http.post<any>(this._url + '/assessmentmaster/cudaiassessmentmaster', body);
  }

  fetchaiFeedback(coursecode: string,) {
    let body = {
      email: this.useremail,
      caller: 'webinstructor',
      usermode: 'instructor',
      searchtype: "coursecode",
      searchcontent: coursecode
    }

    return this.http.post<any>(this._url + '/feedbackmaster/fetchaifeedbackmaster', body);
  }

  updateaiFeedback(round1: string, round2: string, round3: string, round4: string, round5: string,
    round6: string, round7: string, round8: string, round9: string, round10: string,
    round1sv: string, round2sv: string, round3sv: string, round4sv: string, round5sv: string,
    round6sv: string, round7sv: string, round8sv: string, round9sv: string, round10sv: string,
    coursecode: string, coursename: string, aifeedbackmasterid: number, creditleft: number) {
    let body = {
      email: this.useremail,
      caller: 'webinstructor',
      usermode: 'instructor',
      creditleft: creditleft,
      aifeedbackmaster: {
        aifeedbackmasterid: aifeedbackmasterid,
        coursename: coursename,
        coursecode: coursecode,
        round1: round1,
        round2: round2,
        round3: round3,
        round4: round4,
        round5: round5,
        round6: round6,
        round7: round7,
        round8: round8,
        round9: round9,
        round10: round10,
        round1sv: round1sv,
        round2sv: round2sv,
        round3sv: round3sv,
        round4sv: round4sv,
        round5sv: round5sv,
        round6sv: round6sv,
        round7sv: round7sv,
        round8sv: round8sv,
        round9sv: round9sv,
        round10sv: round10sv,
        action: "update"
      }
    }



    return this.http.post<any>(this._url + '/feedbackmaster/cudfeedbackmaster', body);
  }



  fetchpaiprompt(path: string) {
    let body = {
      email: this.useremail,
      caller: 'webadmin',
      usermode: 'admin',
      searchtype: "admin",
    }

    return this.http.post<any>(this._url + path, body);
  }

  fetchpaichapter(path: string, searchtype: string, searchcontent: string, caller: string, usermode: string) {
    let body = {
      email: this.useremail,
      caller: caller,
      usermode: usermode,
      searchtype: searchtype,
      searchcontent: searchcontent
    }

    return this.http.post<any>(this._url + path, body);
  }

  fetchQuestionSetList(path: string) {
    let body = {
      email: this.useremail,
      caller: 'webadmin',
      usermode: 'admin',
      searchtype: 'admin'
    };

    return this.http.post<any>(this._url + path, body);
  }


  //aiinterview....

  fetchvoicemaster(path: string) {
    let body = {
      email: this.useremail,
      usermode: 'student',
      caller: "webstudent",
      searchtype: "game",
      voicemaster: {
        simulationname: this.studentelementdetailsvalue.simulationname,
        coursename: this.studentelementdetailsvalue.courseDetails.coursename,
        coursecode: this.studentelementdetailsvalue.coursecode,
        coursedetailsid: this.studentelementdetailsvalue.coursedetailsid,
        instructorpanelid: "",
        studentsectionid: this.studentelementdetailsvalue.studentsectionid,
        roundno: this.noofattempt,
        voicebasedtype: "selfbased",
        // action:""
      },
      coursename: this.studentelementdetailsvalue.courseDetails.coursename,
      coursecode: this.studentelementdetailsvalue.coursecode
    }
    return this.http.post<any>(this._url + path, body);
  }

  getTextFileContent(fileUrl: string): Promise<string> {
    return this.http.get(fileUrl, { responseType: 'text' })
      .toPromise()
      .then(content => content as string)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  fetchvoiceconversation(path: string, attempt: string) {
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "webstudent",
      searchtype: 'studentsectionid',
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      coursename: this.studentelementdetailsvalue.courseDetails.coursename,
      coursecode: this.studentelementdetailsvalue.coursecode,
      roundno: attempt,
      studentsectionid: this.studentelementdetailsvalue.studentsectionid
    }
    return this.http.post<any>(this._url + path, body);
  }

  // sujay change for enc......
  fetchvoiceconversationPre(path: string, attempt: string) {
    let body = {
      email: this.useremail,
      usermode: "student",
      caller: "webstudent",
      searchtype: 'studentsectionid',
      coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
      coursename: this.studentelementdetailsvalue.courseDetails.coursename,
      coursecode: this.studentelementdetailsvalue.coursecode,
      roundno: attempt,
      studentsectionid: this.studentelementdetailsvalue.studentsectionid
    }
    console.log("payforstudent", body);
    const encryptedBody = this.encryptionService.encrypt(JSON.stringify(body));
    return this.http.post(this._url + path, encryptedBody)
      .pipe(
        map((response: any) => {
          const encryptedResponse = response;
          let audioData: any = null;
          if (response.i) {
            audioData = { "audioData": response.i }
          }
          let decryptedResponse: any = this.encryptionService.decrypt(encryptedResponse);
          const decryptedObj: Record<string, any> = decryptedResponse
            ? (typeof decryptedResponse === 'string' ? JSON.parse(decryptedResponse) : decryptedResponse)
            : {};
          const audioObj: Record<string, any> = audioData || {};
          const margedData = { ...decryptedObj, ...audioObj };
          console.log(margedData);
          return margedData;
        })
      );
  }
  //arpita change for ai interview

  fetchvoiceconversationAi(path: string, attempt: string, producttype: string, questionsetid: string,
    studentcoursechapterattemptid: string) {
    let body = {}
    if (this.studentelementdetailsvalue.simulationname == 'Language Lab') {
      body = {
        email: this.useremail,
        usermode: "student",
        caller: "webstudent",
        searchtype: 'studentsectionid',
        coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
        coursename: this.studentelementdetailsvalue.courseDetails.coursename,
        coursecode: this.studentelementdetailsvalue.coursecode,
        producttype: producttype,
        questionsetid: questionsetid,
        attempt: attempt,
        studentsectionid: this.studentelementdetailsvalue.studentsectionid,
        userregisterid: this.studentelementdetailsvalue.userRegister.userregisterid,
        gameid: this.studentelementdetailsvalue.courseDetails.aigameid,
        studentcoursechapterattemptid: studentcoursechapterattemptid,
        username: this.studentelementdetailsvalue.userRegister.username,

      }
    } else {
      body = {
        email: this.useremail,
        usermode: "student",
        caller: "webstudent",
        searchtype: 'studentsectionid',
        coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
        coursename: this.studentelementdetailsvalue.courseDetails.coursename,
        coursecode: this.studentelementdetailsvalue.coursecode,
        producttype: this.studentelementdetailsvalue.courseDetails.producttype,
        questionsetid: this.studentelementdetailsvalue.courseDetails.questionsetid,
        attempt: attempt,
        studentsectionid: this.studentelementdetailsvalue.studentsectionid,
        userregisterid: this.studentelementdetailsvalue.userRegister.userregisterid,
        gameid: this.studentelementdetailsvalue.courseDetails.aigameid,
        studentcoursechapterattemptid: 0,
        username: this.studentelementdetailsvalue.userRegister.username,

      }
    }

    return this.http.post<any>(this._url + path, body);
    // const encryptedBody = this.encryptionService.encrypt(JSON.stringify(body));
    // return this.http.post(this._url + path, body)
    //   .pipe(
    //     map((response: any) => {
    //       console.log("response",response);
    //       // const encryptedResponse = response;
    // let audioData: any = null;
    // if (response.i) {
    //   audioData = { "audioData": response.i }
    // }
    // let decryptedResponse = this.encryptionService.decrypt(encryptedResponse);
    // if (decryptedResponse) {
    //   decryptedResponse = JSON.parse(decryptedResponse)
    // }
    // const margedData = { ...decryptedResponse, ...audioData };
    // console.log(margedData);
    // return margedData;
    // })
    // );
  }

  // fetchvoiceconversationAiChapter(path: string, attempt: string, producttype: string, questionsetid: string,
  //   aichapterid: string
  // ) {
  //   let body = {
  //     email: this.useremail,
  //     usermode: "student",
  //     caller: "webstudent",
  //     searchtype: 'studentsectionid',
  //     coursedetailsid: this.studentelementdetailsvalue.courseDetails.coursedetailsid,
  //     coursename: this.studentelementdetailsvalue.courseDetails.coursename,
  //     coursecode: this.studentelementdetailsvalue.coursecode,
  //     producttype: producttype,
  //     questionsetid: questionsetid,
  //     attempt: attempt,
  //     studentsectionid: this.studentelementdetailsvalue.studentsectionid,
  //     userregisterid: this.studentelementdetailsvalue.userRegister.userregisterid,
  //     gameid: this.studentelementdetailsvalue.courseDetails.aigameid,
  //     aichapterid: aichapterid,
  //     username: this.studentelementdetailsvalue.userRegister.username,

  //   }
  //   return this.http.post<any>(this._url + path, body);

  // }

  uploadconversationForAI(path: string, interviewData: any) {

    return this.http.post(this._url + path, interviewData)

  }

  ttsFromBackend(text: string) {
    // Adjust the endpoint as per your backend route
    return this.http.post(
      this._url + '/nonaivoiceinterview/tts',
      { text },
      { responseType: 'blob' }
    );
  }

  audiotoTextConvert(path: string, data: any) {

    return this.http.post(this._url + path, data)

  }



  fetchvoiceconversationforinstructorReport(path: string, attempt: string,
    coursedetailsid: string, coursename: string, coursecode: string, studentsectionid: string) {
    let body = {
      email: this.useremail,
      usermode: "instructor",
      caller: "webinstructor",
      searchtype: 'studentsectionid',
      coursedetailsid: coursedetailsid,
      coursename: coursename,
      coursecode: coursecode,
      roundno: attempt,
      studentsectionid: studentsectionid
    }
    console.log("payload", body)
    const encryptedBody = this.encryptionService.encrypt(JSON.stringify(body));
    return this.http.post(this._url + path, encryptedBody)
      .pipe(
        map((response: any) => {
          const encryptedResponse = response;
          let audioData: any = null;
          if (response.i) {
            audioData = { "audioData": response.i }
          }
          let decryptedResponse: any = this.encryptionService.decrypt(encryptedResponse);
          const decryptedObj: Record<string, any> = decryptedResponse
            ? (typeof decryptedResponse === 'string' ? JSON.parse(decryptedResponse) : decryptedResponse)
            : {};
          const audioObj: Record<string, any> = audioData || {};
          const margedData = { ...decryptedObj, ...audioObj };
          console.log(margedData);
          return margedData;
        })
      );
  }

  fetchAivoiceconversationforinstructorReport(path: string, attempt: string,
    coursedetailsid: string, coursename: string, coursecode: string, studentsectionid: string) {
    let body = {
      email: this.useremail,
      usermode: "instructor",
      caller: "webinstructor",
      searchtype: 'studentsectionid',
      coursedetailsid: coursedetailsid,
      coursename: coursename,
      coursecode: coursecode,
      roundno: attempt,
      studentsectionid: studentsectionid
    }
    console.log("payload", body)
    return this.http.post(this._url + path, body)
  }


  fetchtermcondition(path: string, requestParameter: string) {
    let body = {
      email: this.useremail,
      usermode: "student",
      action: "termsandcondition",
      termsandcondition: requestParameter,
      studentsectionid: this.studentelementdetailsvalue.studentsectionid,
      caller: "webstudent"
    }
    return this.http.post<any>(this._url + path, body);

  }

  updatetermcondition(path: string, requestParameter: string, voiceconversationid: number) {
    let body = {
      email: this.useremail,
      usermode: "student",
      action: "termsandcondition",
      termscondition: requestParameter,
      voiceconversationid: voiceconversationid,
      // caller: "webstudent"
    }
    return this.http.post<any>(this._url + path, body);

  }
  // cudvoiceconversation(path: string,voiceconversationid:number,spendtime:string,audiodata){
  //   let body = {

  //     email:this.useremail,
  //     usermode:"student",
  //     caller:"webstudent",
  //     voiceconversationid:voiceconversationid,
  //     roundno:this.noofattempt,
  //     spendtime:spendtime,
  //     audiodata:

  //   }
  //   return this.http.post<any>(this._url + path, body);
  // }



  // fetchvoicereport(path: string) {
  //   let body = {
  //     email: this.useremail,
  //     usermode: "student",
  //     searchtype: 'game',
  //     voicereport:
  //     {
  //       coursecode: this.studentelementdetailsvalue.coursecode,
  //       coursename: this.studentelementdetailsvalue.courseDetails.coursename,
  //       studentsectionid: this.studentelementdetailsvalue.studentsectionid,
  //     }
  //   }
  //   return this.http.post<any>(this._url + path, body);
  // }

  fetchvoicereportforall(path: string, searchtype: string, attempt: string, coursecode: string, studentsectionid: string, usermode: string, caller: string,
    studentcoursechapterattemptid: number
  ) {
    let body = {
      email: this.useremail,
      usermode: usermode,
      caller: caller,
      searchtype: searchtype,
      searchcontent: attempt,
      coursecode: coursecode,
      studentsectionid: studentsectionid,
      attempt: attempt,
      studentcoursechapterattemptid: studentcoursechapterattemptid
    }
    // let body = {
    //   email: this.useremail,
    //   usermode: "instructor",
    //   caller: "webinstructor",
    //   searchtype: 'report',
    //   searchcontent: 1,
    //   coursecode: this.instructorelementdetailsvalue.coursecode
    // }
    return this.http.post<any>(this._url + path, body);
  }

  transcriptdownload(path: string, body: any) {
    return this.http.post<any>(this._url + path, body);
  }

  //voiceBasedAiInterview Arpita
  getNextQuestion() {
    return this.http.get<any>('/api/interview/next-question');
  }

  submitAnswer(questionId: number, answer: string) {
    return this.http.post('/api/interview/submit', { questionId, answer });
  }

  getFeedback(questionId: number, answer: string) {
    return this.http.post<any>('/api/interview/feedback', { questionId, answer });
  }

  saveCourse(data: {}): any {
    return this.http.post<any>(this._url + '/aicourse/cudaicoursedetails', data);
  }
  getListOfVoiceInterviewInstructor(data: {}): any {
    return this.http.post<any>(this._url + '/aicourse/fetchaicoursedetails', data);
  }

  checkPasswordForinterview(password: string): any {
    let body = {
      email: this.useremail,
      usermode: "admin",
      caller: "webadmin",
      searchtype: "password",
      searchcontent: password,
    }
    return this.http.post<any>(this._url + '/voiceinterview/verifyPassword', body);
  }
  checkPromptPassword(body: {}): any {
    return this.http.post<any>(this._url + '/register/promptpassword', body);
  }
}


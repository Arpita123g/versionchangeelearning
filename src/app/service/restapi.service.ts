import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as _env } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RestapiService {
  private _url = _env.apiUrl
  private _imgurl = _env.snapshotUrl
  getFlatorSociety: any;

  constructor(private http: HttpClient) {}

  getCourseDetails(data: {}): any {
    return this.http.post<any>(this._url + '/course/fetchcoursedetails', data);
  }

  getStudentDetails(data: {}): any {
    return this.http.post<any>(this._url + '/student/fetchstudentdetails', data);
  }
  getSnapshotDetails(data: {}): any {
    return this.http.post<any>(this._url + '/student/fetchsnapshot', data);
  }

  getinstructortablelist(data:{}):any{
    return this.http.post<any>(this._url + '/instructor/fetchinstructordetails',data);
  }
  updateInstructor(data: {}): any {
    return this.http.post<any>(this._url + '/instructor/deleteorupdateinstructor', data);
  }
  getRegisterUserListForUSerComp(data: {}): any {
    // let data = { "id": 2, "title": "json-servefsdr", "author": "typifdsfcode" };
    let headers = new HttpHeaders().set('Content-Type', 'application/Json');
    return this.http.post<any>(
      this._url + '/register/fetchregistereduser',
      data
    );
  }

  sendsnapshot(file: File, useremail: string, studentsectionid: string,step: string, noofattempt: string, coursecode: string): any {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('email', useremail);
    formData.append('studentsectionid', studentsectionid);
    formData.append('numberofattempts', noofattempt);
    formData.append('snapshotstep', step);
    formData.append('coursecode', coursecode);
    // let headers = new HttpHeaders().set('Content-Type', 'application/Json');
    return this.http.post<any>(
      this._url + '/student/uploadlastattemptsicon',
      formData
    );
  }
  




  saveCourse(data: {}): any {
    return this.http.post<any>(this._url + '/course/coursedetailsnew', data);
  }
// /////////for multiple case 19/05/25
  // saveCourseCase(data: {}): any {
  //   return this.http.post<any>(this._url + '/course/coursedetailsnew', data);
  // }



  savedatetime(data: {}): any {
    return this.http.post<any>(this._url + '/course/updatecoursedatetime', data);
  }


  searchmailid(data:{}):any{
    return this.http.post<any>(this._url + '/student/deleteorupdateuser',data);
  }

  deleteorupdateuser(data:{}):any{
    return this.http.post<any>(this._url + '/student/deleteorupdateuser',data);
  }

 

  getInstructorlist(data:{}):any{
    return this.http.post<any>(this._url + '/register/fetchregistereduser',data);
  }

  getCoursecodelist(data:{}):any{
    return this.http.post<any>(this._url + '/course/fetchcoursedetails',data);
  }

 
}

export interface post {
  id: number;
  title: string;
  author: string;
}

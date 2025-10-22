import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { LoginService } from 'src/app/service/auth/login.service';
import { GlobalService } from 'src/app/service/global.service';
import { LoggerService } from 'src/app/service/logger.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class StudentloginComponent implements OnInit {
  decryptedText: string = "";

  constructor(
    public form: FormBuilder,
    private _router: Router,
    private _login: LoginService,
    private _global: GlobalService,
    private _alert: SnackbaralertService,
    private logger: LoggerService,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private sharedService: SharedserviceService
  ) { }
  studentlogingroup!: FormGroup;

  ngOnInit(): void {
    this.buildform();
  }

  refreshtoken() {
    this._login.refreshtoken('').subscribe((data: any) => {

      const accesstoken = data.access_token;
      this._global.accesstoken.next(accesstoken);

    },
      (error: any) => {

      }
    )
  }

  public buildform() {
    this.studentlogingroup = this.form.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  forgotpassword() {
    this._global.expiredpasscheck.next("");
    this._router.navigate(['forgotpassword']);
  }

  studentsignup() {
    this._router.navigate(['studentregister'])
  }

  studentlogin() {
    this._login.logstatus();
    let body = {};
    // comment for testing
    this.refreshtoken();
    this.studentlogingroup.value;
    if (this.studentlogingroup.valid) {
      body = {

        email: this.studentlogingroup.value.email.toLowerCase(),
        caller: 'webstudent',
        usermode: 'student',
        password: this.studentlogingroup.value.password

      };

      // this.logger.log(body.toString());

      this._login.checkadminlogin(body).subscribe((data: any) => {
        // const decryptdata = data.response;
        // data = this._login.decrypt1(decryptdata);

        if (data.status == 'Success') {
          if (data.resultList[0].status == 'active') {
            this._global.username.next(data.resultList[0].userRegister.username);
            this._global.useremail.next(this.studentlogingroup.value.email.toLowerCase());
            this._global.userpassword.next(this.studentlogingroup.value.password);
            this._global.usermode.next("student");
            this.sharedService.userTypeSet("student");
            this.authenticationService.login(data.resultList[0].username,
              this.studentlogingroup.value.password, this.studentlogingroup.value.email.toLowerCase(), "student");
            this._global.islogin.next(true);
            this._router.navigate(['/auth/component/studentdashboardheader'])
          }
        } else {
          // this._login.log("studentlogin", data.message, body, 'student');
          this._alert.error(data.message);
        }
      },
        (error: any) => {
          // this._login.log("studentlogin", error, body, 'student');
          sessionStorage.removeItem('islogin');
          sessionStorage.removeItem('mobile');

        })
    }
  }

}

